<template>
  <div class="map-card">
    <div class="flex items-center mb-3">
      <div class="logo-container mr-3">
        <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Logo" class="logo" />
      </div>
      <h3 class="font-semibold">Notre localisation</h3>
    </div>
    
    <div class="map-container">
      <div ref="mapContainer" class="map"></div>
      
      <!-- Custom logo overlay on map -->
      <div class="map-logo-overlay">
        <div class="overlay-logo-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Logo" class="overlay-logo" />
          <span class="company-name">Massonjo Chauffage Sanitaire</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapContainer = ref(null);

// Fix for default markers in leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

onMounted(() => {
  if (mapContainer.value) {
    const map = L.map(mapContainer.value).setView([46.13251, 6.26666], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Custom icon with your logo
    const customIcon = L.divIcon({
      html: `
        <div class="custom-marker">
          <div class="marker-pin"></div>
          <div class="marker-logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Logo" />
          </div>
        </div>
      `,
      className: 'custom-div-icon',
      iconSize: [30, 42],
      iconAnchor: [15, 42]
    });
    
    L.marker([46.13251, 6.26666], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div class="custom-popup">
          <div class="popup-header">
            <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Logo" class="popup-logo" />
            <br />
            <strong>Massonjo Chauffage Sanitaire</strong>
          </div>
          <p>189 Rue des Moineaux<br>74930 Reignier-Ésery</p>
        </div>
      `)
      .openPopup();
  }
});
</script>

<style scoped>
.map-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.map-container {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.map {
  height: 100%;
  width: 100%;
}

/* Logo in header */
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.mr-3 {
  margin-right: 0.75rem;
}

.logo-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 4px;
  border: 1px solid #e9ecef;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.font-semibold {
  font-weight: 600;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

/* Logo overlay on map */
.map-logo-overlay {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
}

.overlay-logo-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.overlay-logo {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.company-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
}

/* Button styles */
.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.btn-ghost:hover {
  background-color: #3b82f6;
  color: white;
}

.inline-flex {
  display: inline-flex;
}

.mt-3 {
  margin-top: 0.75rem;
}

/* Custom marker styles */
:deep(.custom-div-icon) {
  background: transparent !important;
  border: none !important;
}

:deep(.custom-marker) {
  position: relative;
  text-align: center;
}

:deep(.marker-pin) {
  width: 30px;
  height: 30px;
  background: #3b82f6;
  border-radius: 50% 50% 50% 0;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -15px 0 0 -15px;
}

:deep(.marker-logo) {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

:deep(.marker-logo img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

:deep(.custom-popup) {
  text-align: center;
}

:deep(.popup-header) {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
}

:deep(.popup-logo) {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

/* Responsive */
@media (max-width: 768px) {
  .logo-container {
    width: 32px;
    height: 32px;
  }
  
  .map-logo-overlay {
    padding: 6px 10px;
  }
  
  .overlay-logo {
    width: 16px;
    height: 16px;
  }
  
  .company-name {
    font-size: 0.75rem;
  }
}
</style>