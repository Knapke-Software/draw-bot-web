<template>
  <section id="demo" class="py-28 bg-[#0a0a10]">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Left: copy -->
        <div class="lg:pt-4">
          <p class="text-orange-DEFAULT text-xs font-semibold uppercase tracking-widest mb-3">Request a Demo</p>
          <h2 class="text-4xl font-extrabold tracking-tight mb-5">
            See Summit in Action on Your Project
          </h2>
          <p class="text-zinc-400 leading-relaxed mb-8">
            We'll walk you through how the system works, answer your questions, and talk through
            pricing for your upcoming project. No pressure — just a real conversation.
          </p>

          <ul class="flex flex-col gap-4">
            <li v-for="item in bullets" :key="item" class="flex items-start gap-3 text-sm text-zinc-400">
              <svg class="w-5 h-5 text-orange-DEFAULT shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Right: form -->
        <div class="rounded-2xl border border-white/5 bg-[#111118] p-8">
          <form
            v-if="!submitted"
            @submit.prevent="handleSubmit"
            class="flex flex-col gap-5"
          >
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-semibold text-zinc-400 mb-1.5">First Name</label>
                <input v-model="form.firstName" type="text" required placeholder="Alex"
                  class="w-full rounded-md bg-white/5 border border-white/8 text-white placeholder-zinc-600 text-sm px-4 py-2.5 focus:outline-none focus:border-orange-DEFAULT/60 transition-colors" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-zinc-400 mb-1.5">Last Name</label>
                <input v-model="form.lastName" type="text" required placeholder="Johnson"
                  class="w-full rounded-md bg-white/5 border border-white/8 text-white placeholder-zinc-600 text-sm px-4 py-2.5 focus:outline-none focus:border-orange-DEFAULT/60 transition-colors" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-400 mb-1.5">Work Email</label>
              <input v-model="form.email" type="email" required placeholder="alex@contractor.com"
                class="w-full rounded-md bg-white/5 border border-white/8 text-white placeholder-zinc-600 text-sm px-4 py-2.5 focus:outline-none focus:border-orange-DEFAULT/60 transition-colors" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-400 mb-1.5">Company</label>
              <input v-model="form.company" type="text" required placeholder="ABC Construction"
                class="w-full rounded-md bg-white/5 border border-white/8 text-white placeholder-zinc-600 text-sm px-4 py-2.5 focus:outline-none focus:border-orange-DEFAULT/60 transition-colors" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-400 mb-1.5">Role</label>
              <select v-model="form.role" class="select-role w-full rounded-md bg-white/5 border border-white/8 text-white text-sm px-4 py-2.5 focus:outline-none focus:border-orange-DEFAULT/60 transition-colors appearance-none">
                <option value="" disabled selected class="bg-[#111118]">Select your role…</option>
                <option value="GC" class="bg-[#111118]">General Contractor</option>
                <option value="Sub" class="bg-[#111118]">Subcontractor</option>
                <option value="PM" class="bg-[#111118]">Project Manager</option>
                <option value="Super" class="bg-[#111118]">Superintendent</option>
                <option value="Owner" class="bg-[#111118]">Owner / Developer</option>
                <option value="Other" class="bg-[#111118]">Other</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-400 mb-1.5">Tell us about your next project <span class="text-zinc-600">(optional)</span></label>
              <textarea v-model="form.message" rows="3" placeholder="Floor area, project type, timeline…"
                class="w-full rounded-md bg-white/5 border border-white/8 text-white placeholder-zinc-600 text-sm px-4 py-2.5 focus:outline-none focus:border-orange-DEFAULT/60 transition-colors resize-none"></textarea>
            </div>

            <button
              type="submit"
              :disabled="submitting"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-orange-DEFAULT hover:bg-orange-light disabled:opacity-60 text-white font-semibold text-sm transition-colors"
            >
              <span v-if="!submitting">Request My Demo</span>
              <span v-else>Sending…</span>
            </button>

            <p v-if="error" class="text-red-400 text-xs text-center">{{ error }}</p>
          </form>

          <!-- Success state -->
          <div v-else class="flex flex-col items-center justify-center gap-4 py-12 text-center">
            <div class="w-14 h-14 rounded-full bg-orange-DEFAULT/10 border border-orange-DEFAULT/30 flex items-center justify-center">
              <svg class="w-7 h-7 text-orange-DEFAULT" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <p class="text-white font-bold text-lg mb-1">We'll be in touch soon.</p>
              <p class="text-zinc-500 text-sm">Thanks for reaching out. Expect a reply within one business day.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const form = reactive({
  firstName: '',
  lastName:  '',
  email:     '',
  company:   '',
  role:      '',
  message:   '',
})

const submitted  = ref(false)
const submitting = ref(false)
const error      = ref('')

async function handleSubmit() {
  submitting.value = true
  error.value = ''
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        firstName: form.firstName,
        lastName:  form.lastName,
        email:     form.email,
        company:   form.company,
        role:      form.role,
        message:   form.message,
      }),
    })
    if (res.ok) {
      submitted.value = true
    } else {
      error.value = 'Something went wrong. Please try again or email us directly.'
    }
  } catch {
    error.value = 'Network error — please check your connection and try again.'
  } finally {
    submitting.value = false
  }
}

const bullets = [
  '30-minute live walkthrough of the full workflow',
  'We\'ll review your project type and answer accuracy questions',
  'Transparent pricing — no sales games',
  'Early access slots for Q1 deployments are limited',
]
</script>

<style scoped>
.select-role {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%2371717a' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
}
</style>
