  <template>
    <form @submit.prevent="submit" class="card space-y-4">
      <div>
        <label class="font-medium">Nom complet</label>
        <input v-model="form.name" required class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Votre nom" />
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="font-medium">Téléphone</label>
          <input v-model="form.phone" required class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="07 00 00 00 00" />
        </div>
        <div>
          <label class="font-medium">Email</label>
          <input type="email" v-model="form.email" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="vous@exemple.fr" />
        </div>
      </div>
      <div>
        <label class="font-medium">Message</label>
        <textarea v-model="form.message" rows="5" required class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Décrivez votre besoin"></textarea>
      </div>
      <button class="btn-primary">Envoyer la demande</button>
      <p v-if="sent" class="text-green-700">Merci ! Votre message est prêt à être envoyé dans votre client mail.</p>
    </form>
  </template>

  <script setup>
  import { reactive, ref } from 'vue'
  const form = reactive({ name: '', phone: '', email: '', message: '' })
  const sent = ref(false)
  const submit = () => {
    const subject = encodeURIComponent('Demande de devis')
    const body = encodeURIComponent(
      `Nom: ${form.name}
      Téléphone: ${form.phone}
      Email: ${form.email}

      ${form.message}`
    )
    window.location.href = `mailto:massonjoetfils@gmail.com?subject=${subject}&body=${body}`
    sent.value = true
  }
  </script>
