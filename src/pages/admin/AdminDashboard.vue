<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header Admin -->
    <header class="bg-gray-900 text-white shadow-lg">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span class="text-xl">🔧</span>
          </div>
          <div>
            <h1 class="font-bold text-lg">Panel Admin</h1>
            <p class="text-xs text-gray-400">Massonjo Chauffage Sanitaire</p>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <router-link to="/" class="text-gray-300 hover:text-white transition-colors">
            ← Retour au site
          </router-link>
          <button 
            @click="logout"
            class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-4 py-8">
      <!-- Stats Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        
        <!-- Card 1 -->
        <div class="bg-white rounded-xl shadow p-4 md:p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs md:text-sm text-gray-600">Total RDV</p>
              <p class="text-2xl md:text-3xl font-bold text-gray-900">{{ stats.totalAppointments }}</p>
            </div>
            <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span class="text-xl md:text-2xl">📋</span>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-xl shadow p-4 md:p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs md:text-sm text-gray-600">Aujourd'hui</p>
              <p class="text-2xl md:text-3xl font-bold text-green-600">{{ stats.todayAppointments }}</p>
            </div>
            <div class="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span class="text-xl md:text-2xl">📅</span>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-xl shadow p-4 md:p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs md:text-sm text-gray-600">À venir</p>
              <p class="text-2xl md:text-3xl font-bold text-orange-600">{{ stats.upcomingAppointments }}</p>
            </div>
            <div class="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <span class="text-xl md:text-2xl">🔜</span>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="bg-white rounded-xl shadow p-4 md:p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs md:text-sm text-gray-600">Créneaux libres</p>
              <p class="text-2xl md:text-3xl font-bold text-purple-600">{{ stats.availableSlots }}</p>
            </div>
            <div class="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span class="text-xl md:text-2xl">✅</span>
            </div>
          </div>
        </div>
        
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Gestion des disponibilités -->
        <div class="bg-white rounded-xl shadow-lg">
          <div class="p-6 border-b border-gray-200">
            <h2 class="text-xl font-bold flex items-center gap-2">
              <span>📆</span>
              Gérer les disponibilités
            </h2>
            <p class="text-sm text-gray-600 mt-1">
              Ajoutez des créneaux horaires pour les prochains jours
            </p>
          </div>

          <div class="p-6">
            <form @submit.prevent="addAvailability" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  v-model="newAvailability.date"
                  type="date"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  :min="today"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Créneaux horaires</label>
                <div class="grid grid-cols-3 gap-2">
                  <button
                    v-for="time in timeSlots"
                    :key="time"
                    type="button"
                    @click="toggleTimeSlot(time)"
                    class="py-2 px-3 text-sm border rounded-lg transition-colors"
                    :class="newAvailability.slots.includes(time) 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'"
                  >
                    {{ time }}
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Durée (minutes)</label>
                <select
                  v-model="newAvailability.duration"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="30">30 minutes</option>
                  <option value="60">1 heure</option>
                  <option value="90">1h30</option>
                  <option value="120">2 heures</option>
                </select>
              </div>

              <button
                type="submit"
                :disabled="addingAvailability || newAvailability.slots.length === 0"
                class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {{ addingAvailability ? 'Ajout...' : `Ajouter ${newAvailability.slots.length} créneau(x)` }}
              </button>
            </form>

            <!-- Liste des disponibilités existantes -->
<!-- NOUVEAU: Liste détaillée avec créneaux individuels -->
<div class="mt-8">
  <h3 class="font-semibold mb-4 flex items-center justify-between">
    <span>Disponibilités actuelles</span>
    <span class="text-sm font-normal text-gray-500">
      {{ totalFreeSlots }} libres / {{ totalSlots }} total
    </span>
  </h3>
  
  <div class="space-y-3 max-h-96 overflow-y-auto">
    <div
      v-for="day in sortedAvailabilities"
      :key="day.id"
      class="border border-gray-200 rounded-lg overflow-hidden"
    >
      <!-- En-tête de la date (cliquable pour expand) -->
      <div 
        class="flex items-center justify-between p-3 bg-gray-50 cursor-pointer hover:bg-gray-100"
        @click="toggleDayExpansion(day.id)"
      >
        <div class="flex items-center gap-3">
          <span :class="expandedDays[day.id] ? 'rotate-90' : ''">▶</span>
          <div>
            <p class="font-medium">{{ formatDate(day.date) }}</p>
            <p class="text-sm text-gray-600">
              {{ day.slots.filter(s => !s.isBooked).length }} libres / 
              {{ day.slots.filter(s => s.isBooked).length }} pris / 
              {{ day.slots.length }} total
            </p>
          </div>
        </div>
        <button
          @click.stop="deleteAvailability(day.id)"
          class="text-red-600 hover:text-red-800 p-2 text-sm"
        >
          🗑️ Tout
        </button>
      </div>
      
      <!-- Liste des créneaux (visible si expanded) -->
      <div v-if="expandedDays[day.id]" class="border-t border-gray-200 p-3 space-y-2">
        <div
          v-for="slot in day.slots"
          :key="slot.id"
          class="flex items-center justify-between p-2 rounded-lg"
          :class="slot.isBooked ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'"
        >
          <div class="flex items-center gap-3">
            <span class="font-mono font-medium">{{ slot.time }}</span>
            <span 
              class="px-2 py-1 text-xs rounded-full font-medium"
              :class="slot.isBooked ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'"
            >
              {{ slot.isBooked ? '🔴 PRIS' : '🟢 LIBRE' }}
            </span>
            <span class="text-xs text-gray-500">({{ slot.duration }}min)</span>
          </div>
          
          <div class="flex items-center gap-2">
            <!-- Nom du client si pris -->
            <span v-if="slot.isBooked && getAppointmentForSlot(day.date, slot.id)" 
                  class="text-xs text-gray-600">
              {{ getAppointmentForSlot(day.date, slot.id).firstName }} 
              {{ getAppointmentForSlot(day.date, slot.id).lastName }}
            </span>
            
            <!-- Bouton supprimer (désactivé si pris) -->
            <button
              @click="deleteSlot(day.id, slot.id)"
              class="text-red-600 hover:text-red-800 p-1 text-sm"
              :disabled="slot.isBooked"
              :class="slot.isBooked ? 'opacity-50 cursor-not-allowed' : ''"
              :title="slot.isBooked ? 'Créneau réservé - annulez le RDV d\'abord' : 'Supprimer ce créneau'"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>

        <!-- Liste des rendez-vous -->
        <div class="bg-white rounded-xl shadow-lg">
          <div class="p-6 border-b border-gray-200">
            <h2 class="text-xl font-bold flex items-center gap-2">
              <span>📋</span>
              Rendez-vous
            </h2>
            <div class="flex gap-2 mt-3">
              <button
                @click="filter = 'all'"
                class="px-3 py-1 text-sm rounded-full transition-colors"
                :class="filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'"
              >
                Tous
              </button>
              <button
                @click="filter = 'upcoming'"
                class="px-3 py-1 text-sm rounded-full transition-colors"
                :class="filter === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'"
              >
                À venir
              </button>
              <button
                @click="filter = 'today'"
                class="px-3 py-1 text-sm rounded-full transition-colors"
                :class="filter === 'today' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'"
              >
                Aujourd'hui
              </button>
            </div>
          </div>

          <div class="p-6">
            <div v-if="loading" class="text-center py-8">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            </div>

            <div v-else-if="filteredAppointments.length === 0" class="text-center py-8 text-gray-500">
              <p class="text-4xl mb-2">📭</p>
              <p>Aucun rendez-vous</p>
            </div>

            <div v-else class="space-y-3 max-h-96 overflow-y-auto">
              <div
                v-for="apt in filteredAppointments"
                :key="apt.id"
                class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                :class="{ 'bg-blue-50 border-blue-200': isToday(apt.date) }"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="font-bold text-lg">{{ apt.time }}</span>
                      <span v-if="isToday(apt.date)" class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        AUJOURD'HUI
                      </span>
                    </div>
                    <p class="font-semibold text-gray-900">
                      {{ apt.firstName }} {{ apt.lastName }}
                    </p>
                    <p class="text-sm text-gray-600">📞 {{ apt.phone }}</p>
                    <p class="text-sm text-gray-600">✉️ {{ apt.email }}</p>
                    <p class="text-sm text-gray-600">📍 {{ apt.address || 'Adresse non précisée' }}</p>
                    <div class="mt-2 flex items-center gap-2">
                      <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {{ apt.service }}
                      </span>
                      <span class="text-xs text-gray-500">
                        {{ formatDate(apt.date) }}
                      </span>
                    </div>
                    <p v-if="apt.notes" class="mt-2 text-sm text-gray-700 bg-gray-50 p-2 rounded">
                      📝 {{ apt.notes }}
                    </p>
                  </div>
                  <button
                    @click="cancelAppointment(apt.id)"
                    class="text-red-600 hover:text-red-800 p-2"
                    title="Annuler le rendez-vous"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '@/services/api';

const route = useRoute();
const router = useRouter();

const loading = ref(false);
const addingAvailability = ref(false);
const availabilities = ref([]);
const appointments = ref([]);
const stats = ref({});
const filter = ref('upcoming');

const today = new Date().toISOString().split('T')[0];

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '13:30', '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30', '17:00', '17:30'
];

const newAvailability = ref({
  date: today,
  slots: [],
  duration: 60
});

const sortedAvailabilities = computed(() => {
  return [...availabilities.value].sort((a, b) => 
    new Date(a.date) - new Date(b.date)
  );
});

const filteredAppointments = computed(() => {
  let filtered = [...appointments.value].sort((a, b) => {
    const dateA = new Date(a.date + 'T' + a.time);
    const dateB = new Date(b.date + 'T' + b.time);
    return dateA - dateB;
  });

  if (filter.value === 'today') {
    filtered = filtered.filter(a => a.date === today);
  } else if (filter.value === 'upcoming') {
    filtered = filtered.filter(a => a.date >= today);
  }

  return filtered;
});

function toggleTimeSlot(time) {
  const index = newAvailability.value.slots.indexOf(time);
  if (index > -1) {
    newAvailability.value.slots.splice(index, 1);
  } else {
    newAvailability.value.slots.push(time);
    newAvailability.value.slots.sort();
  }
}

async function addAvailability() {
  addingAvailability.value = true;
  
  try {
    const slots = newAvailability.value.slots.map(time => ({
      time,
      duration: parseInt(newAvailability.value.duration)
    }));
    
    await api.createAvailability({
      date: newAvailability.value.date,
      slots
    });
    
    newAvailability.value.slots = [];
    await loadData();
    alert('Disponibilités ajoutées avec succès !');
  } catch (error) {
    alert('Erreur lors de l\'ajout: ' + (error.response?.data?.error || error.message));
  } finally {
    addingAvailability.value = false;
  }
}

async function deleteAvailability(id) {
  if (!confirm('Supprimer ces disponibilités ?')) return;
  
  try {
    await api.deleteAvailability(id);
    await loadData();
  } catch (error) {
    alert('Erreur lors de la suppression');
  }
}

async function cancelAppointment(id) {
  if (!confirm('Annuler ce rendez-vous ?')) return;
  
  try {
    await api.cancelAppointment(id);
    await loadData();
  } catch (error) {
    alert('Erreur lors de l\'annulation');
  }
}

const expandedDays = ref({});

// Computed pour les totaux
const totalSlots = computed(() => {
  return availabilities.value.reduce((acc, day) => acc + day.slots.length, 0);
});

const totalFreeSlots = computed(() => {
  return availabilities.value.reduce((acc, day) => 
    acc + day.slots.filter(s => !s.isBooked).length, 0);
});

// Méthodes
function toggleDayExpansion(dayId) {
  expandedDays.value[dayId] = !expandedDays.value[dayId];
}

function getAppointmentForSlot(date, slotId) {
  return appointments.value.find(apt => 
    apt.date === date && apt.slotId === slotId
  );
}

async function deleteSlot(dayId, slotId) {
  if (!confirm('Supprimer ce créneau ?')) return;
  
  try {
    const day = availabilities.value.find(d => d.id === dayId);
    if (!day) return;
    
    // Vérifier si le créneau est réservé
    const slotToDelete = day.slots.find(s => s.id === slotId);
    if (slotToDelete?.isBooked) {
      alert('Ce créneau est réservé. Annulez d\'abord le rendez-vous.');
      return;
    }
    
    // Utiliser la nouvelle API qui conserve isBooked
    const updatedSlots = day.slots
      .filter(s => s.id !== slotId)
      .map(s => ({
        time: s.time,
        duration: s.duration,
        isBooked: s.isBooked
      }));
    
    await api.updateAvailabilitySlots(dayId, updatedSlots);
    await loadData();
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur lors de la suppression du créneau');
  }
}

async function loadData() {
  loading.value = true;
  
  try {
    const [aptRes, availRes, statsRes] = await Promise.all([
      api.getAppointments(),
      api.getAvailabilities(today, '2099-12-31'),
      api.getStats()
    ]);
    
    appointments.value = aptRes.data;
    availabilities.value = availRes.data;
    stats.value = statsRes.data;
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('adminToken');
      router.push('/admin');
    }
    console.error('Erreur chargement:', error);
  } finally {
    loading.value = false;
  }

    // Étendre tous les jours par défaut
  availabilities.value.forEach(day => {
    if (expandedDays.value[day.id] === undefined) {
      expandedDays.value[day.id] = true;
    }
  });
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function isToday(dateStr) {
  return dateStr === today;
}

function logout() {
  localStorage.removeItem('adminToken');
  router.push('/admin');
}

onMounted(() => {
  const token = route.params.token || localStorage.getItem('adminToken');
  
  if (!token) {
    router.push('/admin');
    return;
  }
  
  localStorage.setItem('adminToken', token);
  loadData();
});
</script>
