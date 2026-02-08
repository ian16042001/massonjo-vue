
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          📅 Réserver un rendez-vous
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Choisissez une date et un créneau horaire pour votre intervention de plomberie ou chauffage à Reignier-Ésery et environs.
          Confirmation immédiate par email et SMS.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Calendrier -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#F26440]" style="height: 530px;">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2 text-[#F26440]">
            <span class="text-2xl">📆</span>
            Sélectionnez une date
          </h2>
          
          <vue-cal
            v-model:active-view="activeView"
            :selected-date="selectedDate"
            :disable-views="['years', 'year', 'week', 'day']"
            active-view="month"
            :min-date="minDate"
            :max-date="maxDate"
            :events="calendarEvents"
            :time="false"
            hide-view-selector
            style="height: 400px;"
            class="vuecal--massonjo-theme rounded-xl"
            @cell-click="onDateClick"
            @update:selected-date="onDateSelect"
          >
            <template #events-count="{ events }">
              <span 
                v-if="events.length > 0"
                class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#F26440] rounded-full"
              >
                {{ events.length }}
              </span>
            </template>
          </vue-cal>

          <div class="mt-4 flex items-center gap-4 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-[#F26440] rounded-full"></div>
              <span>Créneaux disponibles</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span>Complet</span>
            </div>
          </div>
        </div>

        <!-- Créneaux et Formulaire -->
        <div class="space-y-6">
          <!-- Liste des créneaux -->
          <div v-if="selectedDate && !showForm" class="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#2F6F74]">
            <h3 class="text-lg font-semibold mb-4 text-[#2F6F74]">
              Créneaux disponibles le {{ formatDate(selectedDate) }}
            </h3>
            
            <div v-if="loading" class="text-center py-8">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F26440] mx-auto"></div>
              <p class="mt-2 text-gray-600">Chargement...</p>
            </div>

            <div v-else-if="availableSlots.length === 0" class="text-center py-8 text-gray-500">
              <p class="text-4xl mb-2">😕</p>
              <p>Aucun créneau disponible pour cette date.</p>
              <p class="text-sm mt-2">Veuillez sélectionner une autre date.</p>
            </div>

            <div v-else class="grid grid-cols-2 gap-3">
              <button
                v-for="slot in availableSlots"
                :key="slot.id"
                @click="selectSlot(slot)"
                class="p-3 text-center border-2 border-gray-200 rounded-xl hover:border-[#F26440] hover:bg-orange-50 transition-all duration-200 font-medium"
                :class="{ 'border-[#F26440] bg-orange-50 text-[#F26440]': selectedSlot?.id === slot.id }"
              >
                {{ slot.time }}
              </button>
            </div>

            <button
              v-if="selectedSlot"
              @click="showForm = true"
              class="w-full mt-6 bg-[#F26440] text-white py-3 rounded-xl font-semibold hover:bg-[#d9532f] transition-colors shadow-lg"
            >
              Continuer avec {{ selectedSlot.time }}
            </button>
          </div>

          <!-- Formulaire de réservation -->
          <div v-if="showForm" class="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#F26440]">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-[#F26440]">Vos informations</h3>
              <button 
                @click="showForm = false"
                class="text-gray-500 hover:text-gray-700"
              >
                ← Retour
              </button>
            </div>

            <form @submit.prevent="submitReservation" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F26440] focus:border-transparent"
                    placeholder="Jean"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F26440] focus:border-transparent"
                    placeholder="Dupont"
                  >
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F26440] focus:border-transparent"
                  placeholder="jean.dupont@email.com"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F26440] focus:border-transparent"
                  placeholder="06 12 34 56 78"
                >
              </div>

              <AddressAutocomplete v-model="form.address" />

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Type d'intervention *</label>
                <select
                  v-model="form.service"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F26440] focus:border-transparent"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="Intervention">Intervention</option>
                  <option value="Visite">Visite de contrôle</option>
                </select>

                  <!-- Hint shown only when "Visite" is selected -->
                  <p v-if="form.service === 'Visite'" class="mt-2 text-sm text-yellow-700 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    ℹ️ La visite de contrôle inclut un déplacement facturé de <span class="font-medium">40€</span> (règlement en chèque ou espèce). <br><span class="font-extrabold">Ce déplacement est offert si une intervention est ensuite réalisée par nos soins durant la visite.</span>
                  </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Notes complémentaires</label>
                <textarea
                  v-model="form.notes"
                  rows="3"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F26440] focus:border-transparent"
                  placeholder="Décrivez votre besoin..."
                ></textarea>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p class="text-sm text-[#F26440]">
                  <strong>Récapitulatif :</strong><br>
                  📅 Date : {{ formatDate(selectedDate) }}<br>
                  🕐 Heure : {{ selectedSlot?.time }}<br>
                  ⏱️ Durée estimée : {{ selectedSlot?.duration }} minutes
                </p>
              </div>

              <button
                type="submit"
                :disabled="submitting"
                class="w-full bg-[#F26440] text-white py-3 rounded-xl font-semibold hover:bg-[#d9532f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                <span v-if="submitting" class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                {{ submitting ? 'Confirmation...' : 'Confirmer le rendez-vous' }}
              </button>
            </form>
          </div>

          <!-- Message de confirmation -->
          <!-- Success Modal -->
          <div
            v-if="showSuccess"
            class="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            @keydown.esc="showSuccess = false"
            tabindex="0"
          >
            <!-- Backdrop -->
            <div
              class="absolute inset-0 bg-black/50"
              @click="showSuccess = false"
            ></div>

            <!-- Modal panel -->
            <div class="relative z-10 w-[92%] max-w-lg bg-white rounded-2xl shadow-xl p-8 text-center">
              <button
                type="button"
                class="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                @click="showSuccess = false"
                aria-label="Fermer"
              >
                ✕
              </button>

              <div class="text-6xl mb-4">✅</div>
              <h3 id="success-title" class="text-2xl font-bold text-green-800 mb-2">
                Rendez-vous confirmé !
              </h3>

              <p class="text-green-700 mb-4">
                Votre rendez-vous du {{ formatDate(selectedDate) }} à {{ selectedSlot?.time }} est enregistré.
              </p>

              <p class="text-sm text-green-600">
                Une confirmation vous a été envoyée par email et SMS.
              </p>

              <button
                @click="resetForm"
                class="mt-6 bg-[#F26440] text-white px-6 py-2 rounded-lg hover:bg-[#d9532f] transition-colors"
              >
              <router-link to="/" class="btn-primary">À Bientôt...</router-link>
                
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import api from '@/services/api';
import AddressAutocomplete from '@/components/AddressAutocomplete.vue'

const modalRef = ref(null);

const activeView = ref('month');
const selectedDate = ref(null);
const selectedSlot = ref(null);
const availableSlots = ref([]);
const loading = ref(false);
const showForm = ref(false);
const submitting = ref(false);
const showSuccess = ref(false);
const availabilities = ref([]);

const minDate = new Date();
const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 3);

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  service: '',
  notes: ''
});

// CORRECTION : Fonction pour formater la date en YYYY-MM-DD sans problème de fuseau horaire
function formatDateToYYYYMMDD(date) {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const calendarEvents = computed(() => {
  return availabilities.value.map(day => ({
    start: day.date,
    end: day.date,
    title: `${day.slots.filter(s => !s.isBooked).length} dispo`,
    class: day.slots.some(s => !s.isBooked) ? 'available' : 'full'
  }));
});

async function loadAvailabilities() {
  try {
    const start = new Date();
    const end = new Date();
    end.setMonth(end.getMonth() + 3);
    
    const response = await api.getAvailabilities(
      formatDateToYYYYMMDD(start),
      formatDateToYYYYMMDD(end)
    );
    availabilities.value = response.data;
  } catch (error) {
    console.error('Erreur chargement disponibilités:', error);
  }
}

async function onDateClick(date) {
  selectedDate.value = date;
  selectedSlot.value = null;
  showForm.value = false;
  await loadSlotsForDate(date);
}

function onDateSelect(date) {
  selectedDate.value = date;
}

async function loadSlotsForDate(date) {
  loading.value = true;
  // CORRECTION : Utiliser la fonction formatDateToYYYYMMDD
  const dateStr = formatDateToYYYYMMDD(date);
  
  try {
    const response = await api.getAvailabilities(dateStr, dateStr);
    if (response.data.length > 0) {
      availableSlots.value = response.data[0].slots.filter(s => !s.isBooked);
    } else {
      availableSlots.value = [];
    }
  } catch (error) {
    console.error('Erreur:', error);
    availableSlots.value = [];
  } finally {
    loading.value = false;
  }
}

function selectSlot(slot) {
  selectedSlot.value = slot;
}

function formatDate(date) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

async function submitReservation() {
  submitting.value = true;
  
  try {
    // CORRECTION : Utiliser formatDateToYYYYMMDD au lieu de toISOString
    const reservationData = {
      ...form.value,
      date: formatDateToYYYYMMDD(selectedDate.value),
      slotId: selectedSlot.value.id
    };
    
    console.log('Envoi réservation:', reservationData); // Debug
    
    const response = await api.createAppointment(reservationData);
    
    if (response.data.success) {
      showSuccess.value = true;
      showForm.value = false;
      await loadAvailabilities();
    }
  } catch (error) {
    console.error('Erreur complète:', error);
    alert('Erreur lors de la réservation: ' + (error.response?.data?.error || error.message));
  } finally {
    submitting.value = false;
  }
}

function resetForm() {
  selectedDate.value = null;
  selectedSlot.value = null;
  showSuccess.value = false;
  showForm.value = false;
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    notes: ''
  };
}

onMounted(() => {
  loadAvailabilities();
});
</script>

<style scoped>
:deep(.vuecal__event) {
  background-color: transparent;
}

:deep(.vuecal__event.available) {
  background-color: #F26440;
  color: white;
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 0.75rem;
}

:deep(.vuecal__event.full) {
  background-color: #d1d5db;
  color: white;
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 0.75rem;
}

:deep(.vuecal__cell--selected) {
  background-color: #fff7ed;
}

:deep(.vuecal__cell--today) {
  background-color: #fef3c7;
}

:deep(.vuecal--massonjo-theme .vuecal__menu) {
  background-color: #F26440;
  color: white;
}

:deep(.vuecal--massonjo-theme .vuecal__title-bar) {
  background-color: #fff7ed;
}
</style>
