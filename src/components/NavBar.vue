<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-[#0a0a10]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" aria-label="Summit Robotics home">
        <img src="/logo.svg" alt="Summit Robotics" width="240" height="32" class="h-7 w-auto" />
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm text-zinc-400">
        <a href="#how-it-works" class="hover:text-white transition-colors">How It Works</a>
        <a href="#why-summit"   class="hover:text-white transition-colors">Why Summit</a>
        <a href="#faq"          class="hover:text-white transition-colors">FAQ</a>
      </nav>

      <a
        href="#demo"
        class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-orange-DEFAULT hover:bg-orange-light text-white text-sm font-semibold transition-colors"
      >
        Join the Waitlist
      </a>

      <!-- Mobile menu button -->
      <button
        class="md:hidden text-zinc-400 hover:text-white"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-[#0d0d14] border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm"
    >
      <a href="#how-it-works" class="text-zinc-400 hover:text-white transition-colors" @click="mobileOpen = false">How It Works</a>
      <a href="#why-summit"   class="text-zinc-400 hover:text-white transition-colors" @click="mobileOpen = false">Why Summit</a>
      <a href="#faq"          class="text-zinc-400 hover:text-white transition-colors" @click="mobileOpen = false">FAQ</a>
      <a
        href="#demo"
        class="inline-flex justify-center px-4 py-2.5 rounded-md bg-orange-DEFAULT text-white font-semibold"
        @click="mobileOpen = false"
      >
        Join the Waitlist
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled   = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(()  => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
