<template>
  <section id="demo" aria-labelledby="waitlist-heading" class="py-16 md:py-28 bg-[#0a0a10]">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        <!-- Left: copy -->
        <div v-reveal class="lg:pt-4">
          <p class="text-orange text-xs font-semibold uppercase tracking-widest mb-3">Join the Waitlist</p>
          <h2 id="waitlist-heading" class="text-4xl font-extrabold tracking-tight mb-5">
            Get early access when we launch
          </h2>
          <p class="text-zinc-400 leading-relaxed mb-8">
            Summit is in development, with launch planned for 2027. Tell us about your work and
            we'll reach out with updates and early-access opportunities.
          </p>

          <ul class="flex flex-col gap-4">
            <li v-for="item in bullets" :key="item" class="flex items-start gap-3 text-sm text-zinc-400">
              <svg class="w-5 h-5 text-orange shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Right: form -->
        <div v-reveal="120" class="rounded-2xl border border-white/5 bg-[#111118] p-6 sm:p-8">
          <Transition name="swap" mode="out-in">
          <form
            v-if="!submitted"
            key="form"
            @submit.prevent="handleSubmit"
            class="flex flex-col gap-5"
          >
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-semibold text-zinc-400 mb-1.5">First Name</label>
                <input v-model="form.firstName" type="text" required placeholder="Alex"
                  class="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-base sm:text-sm px-4 py-2.5 focus:outline-none focus:border-orange/60 transition-colors" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-zinc-400 mb-1.5">Last Name</label>
                <input v-model="form.lastName" type="text" required placeholder="Johnson"
                  class="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-base sm:text-sm px-4 py-2.5 focus:outline-none focus:border-orange/60 transition-colors" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-400 mb-1.5">Work Email</label>
              <input v-model="form.email" type="email" required placeholder="alex@contractor.com"
                class="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-base sm:text-sm px-4 py-2.5 focus:outline-none focus:border-orange/60 transition-colors" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-400 mb-1.5">Company</label>
              <input v-model="form.company" type="text" required placeholder="ABC Construction"
                class="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-base sm:text-sm px-4 py-2.5 focus:outline-none focus:border-orange/60 transition-colors" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-400 mb-1.5">Role</label>
<input v-model="form.role" type="text" required placeholder="Project Manager"
                class="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-base sm:text-sm px-4 py-2.5 focus:outline-none focus:border-orange/60 transition-colors" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-400 mb-1.5">What would you use it for? <span class="text-zinc-600">(optional)</span></label>
              <textarea v-model="form.message" rows="3" placeholder="Floor area, project type, timeline…"
                class="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-base sm:text-sm px-4 py-2.5 focus:outline-none focus:border-orange/60 transition-colors resize-none"></textarea>
            </div>

            <button
              type="submit"
              :disabled="submitting"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-orange hover:bg-orange-light disabled:opacity-60 text-white font-semibold text-sm transition-colors"
            >
              <span v-if="!submitting">Join the Waitlist</span>
              <span v-else>Sending…</span>
            </button>

            <p v-if="error" class="text-red-400 text-xs text-center">{{ error }}</p>
          </form>

          <!-- Success state -->
          <div v-else key="done" class="flex flex-col items-center justify-center gap-4 py-12 text-center">
            <div class="w-14 h-14 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center">
              <svg class="w-7 h-7 text-orange" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <p class="text-white font-bold text-lg mb-1">We'll be in touch soon.</p>
              <p class="text-zinc-500 text-sm">Thanks for reaching out. You're on the list.</p>
            </div>
          </div>
          </Transition>
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
  'Progress updates as the robot gets closer to launch',
  'A chance to shape the features we build first',
  'Early-access opportunities before general availability',
  'No spam, and you can opt out any time',
]
</script>

<style scoped>
.swap-enter-active, .swap-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.swap-enter-from { opacity: 0; transform: translateY(8px); }
.swap-leave-to   { opacity: 0; transform: translateY(-8px); }
@media (prefers-reduced-motion: reduce) {
  .swap-enter-active, .swap-leave-active { transition: none; }
}
</style>
