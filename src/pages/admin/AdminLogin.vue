
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
    <div class="max-w-md w-full">
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">🔧</span>
          </div>
          <h1 class="text-2xl font-bold text-gray-900">Accès Admin</h1>
          <p class="text-gray-600 mt-2">
            Massonjo Chauffage Sanitaire
          </p>
        </div>

        <div v-if="!tokenFromUrl" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Token d'accès
            </label>
            <input
              v-model="inputToken"
              type="password"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Entrez votre token admin"
              @keyup.enter="login"
            >
          </div>

          <button
            @click="login"
            :disabled="!inputToken || loggingIn"
            class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ loggingIn ? 'Connexion...' : 'Se connecter' }}
          </button>

          <div class="text-center text-sm text-gray-500">
            <p>Cette page est réservée à l'administrateur.</p>
            <router-link to="/" class="text-blue-600 hover:underline mt-2 inline-block">
              ← Retour au site
            </router-link>
          </div>
        </div>

        <div v-else class="text-center">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600">Vérification du token...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '@/services/api';

const route = useRoute();
const router = useRouter();

const inputToken = ref('');
const loggingIn = ref(false);
const tokenFromUrl = ref(false);

async function login() {
  const token = inputToken.value.trim();
  if (!token) return;

  loggingIn.value = true;
  
  try {
    // Vérifier le token en faisant une requête
    localStorage.setItem('adminToken', token);
    const response = await api.getStats();
    
    if (response.data) {
      router.push(`/admin/dashboard/${token}`);
    }
  } catch (error) {
    localStorage.removeItem('adminToken');
    alert('Token invalide. Veuillez réessayer.');
  } finally {
    loggingIn.value = false;
  }
}

onMounted(() => {
  // Vérifier si un token est dans l'URL
  const urlToken = route.params.token;
  
  if (urlToken) {
    tokenFromUrl.value = true;
    localStorage.setItem('adminToken', urlToken);
    
    // Vérifier le token
    api.getStats()
      .then(() => {
        router.push(`/admin/dashboard/${urlToken}`);
      })
      .catch(() => {
        localStorage.removeItem('adminToken');
        tokenFromUrl.value = false;
        alert('Token invalide ou expiré');
      });
  } else {
    // Vérifier si déjà connecté
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      api.getStats()
        .then(() => {
          router.push(`/admin/dashboard/${savedToken}`);
        })
        .catch(() => {
          localStorage.removeItem('adminToken');
        });
    }
  }
});
</script>
