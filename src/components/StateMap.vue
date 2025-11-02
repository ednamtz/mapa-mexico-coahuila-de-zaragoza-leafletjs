<template>
  <div id="map" class="shadow-lg" style="max-height: 600px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Carga Leaflet CSS
  if (!document.getElementById('leaflet-css')) {
    const link = document.createElement('link');
    link.id = 'leaflet-css';
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
    document.head.appendChild(link);
  }

  // Carga Leaflet JS si no está presente
  function loadLeafletScript() {
    return new Promise((resolve, reject) => {
      if (window.L) return resolve();
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  loadLeafletScript().then(() => {
    // Inicializa el mapa
    const map = window.L.map('map').setView([27.5, -102.5], 7);

    // window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);

    let statesLayer;
    fetch('coahuila_de_zaragoza.json')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        function style(feature) {
          return {
            fillColor: '#AC5906',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
          };
        }
        function highlightFeature(e) {
          const layer = e.target;
          layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.9
          });
          if (!window.L.Browser.ie && !window.L.Browser.edge) {
            layer.bringToFront();
          }
          info.update(layer.feature.properties);
        }
        function resetHighlight(e) {
          statesLayer.resetStyle(e.target);
          info.update();
        }
        function zoomToFeature(e) {
          map.fitBounds(e.target.getBounds());
        }
        function onEachFeature(feature, layer) {
          layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            // click: zoomToFeature
          });
          if (feature.properties && feature.properties.NOMGEO) {
            layer.bindPopup('<a href="' + feature.properties.URL + '">' + feature.properties.NOMGEO + '</a>');
            //layer.bindTooltip(feature.properties.NOMGEO, {
              //permanent: true,
              //direction: 'center',
              //className: 'feature-label',
              //offset: [0, 0]
           // });

          }
        }
        statesLayer = window.L.geoJson(data, {
          style: style,
          onEachFeature: onEachFeature
        }).addTo(map);
      })
      .catch(error => {
        console.error('Error al cargar los datos GeoJSON:', error);
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md shadow-lg z-50';
        errorMessageDiv.textContent = 'No se pudieron cargar los datos de los estados de México.';
        document.body.appendChild(errorMessageDiv);
      });

    // Control de información
    const info = window.L.control();
    info.onAdd = function () {
      this._div = window.L.DomUtil.create('div', 'info');
      this.update();
      return this._div;
    };
    info.update = function (props) {
      this._div.innerHTML = '<h4>Municipio</h4>' + (props ?
        '<b>' + props.NOMGEO + '</b><br />' + ('Clave: ' + (props.CVE_MUN ? props.CVE_MUN : ''))
        : 'Pasa el ratón sobre un estado');
    };
    info.addTo(map);
  });
});
</script>
