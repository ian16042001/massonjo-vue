
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://massonjo-server.onrender.com/api/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Intercepteur pour ajouter le token admin
api.interceptors.request.use((config) => {
  const adminToken = localStorage.getItem('adminToken');
  if (adminToken) {
    config.headers['x-admin-token'] = adminToken;
  }
  return config;
});

export default {
  // Disponibilités
  getAvailabilities(start, end) {
    return api.get('/availabilities', { params: { start, end } });
  },
  
  createAvailability(data) {
    return api.post('/availabilities', data);
  },
  
  deleteAvailability(id) {
    return api.delete(`/availabilities/${id}`);
  },

  updateAvailabilitySlots(dayId, slots) {
    return api.put(`/availabilities/${dayId}/slots`, { slots });
  },
  
  // Rendez-vous
  getAppointments() {
    return api.get('/appointments');
  },
  
  createAppointment(data) {
    return api.post('/appointments', data);
  },
  
  cancelAppointment(id) {
    return api.delete(`/appointments/${id}`);
  },
  
  // Admin
  getAdminToken() {
    return api.get('/admin/token');
  },
  
  refreshAdminToken() {
    return api.post('/admin/refresh-token');
  },
  
  getStats() {
    return api.get('/admin/stats');
  }
};