<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled || mobileOpen ? 'bg-[#0a0a10]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'"
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
        class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-orange hover:bg-orange-light text-white text-sm font-semibold transition-colors"
      >
        Join the Waitlist
      </a>

      <!-- Mobile menu button -->
      <button
        class="md:hidden -mr-2 p-2 text-zinc-400 hover:text-white transition-colors"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6 burger" :class="{ open: mobileOpen }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round">
          <path class="bar bar-top" d="M4 6h16" />
          <path class="bar bar-mid" d="M4 12h16" />
          <path class="bar bar-bot" d="M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu: height animates 0 -> auto via grid rows; links stagger in -->
    <div
      id="mobile-menu"
      class="md:hidden grid transition-[grid-template-rows] duration-300 ease-out"
      :class="mobileOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      :inert="!mobileOpen"
    >
      <div class="overflow-hidden">
        <nav class="bg-[#0d0d14] border-t border-white/5 px-6 py-4 flex flex-col gap-1 text-base">
          <a
            v-for="(link, i) in links"
            :key="link.href"
            :href="link.href"
            class="py-2.5 text-zinc-400 hover:text-white transition-[color,opacity,transform] duration-300"
            :class="mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'"
            :style="{ transitionDelay: mobileOpen ? `${100 + i * 50}ms` : '0ms' }"
            @click="mobileOpen = false"
          >{{ link.label }}</a>
          <a
            href="#demo"
            class="mt-2 inline-flex justify-center px-4 py-3 rounded-md bg-orange text-white font-semibold transition-[opacity,transform] duration-300"
            :class="mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'"
            :style="{ transitionDelay: mobileOpen ? `${100 + links.length * 50}ms` : '0ms' }"
            @click="mobileOpen = false"
          >
            Join the Waitlist
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled   = ref(false)
const mobileOpen = ref(false)

const links = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#why-summit',   label: 'Why Summit' },
  { href: '#faq',          label: 'FAQ' },
]

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') mobileOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})
</script>

<style scoped>
.bar {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s ease, opacity 0.2s ease;
}
.open .bar-top { transform: translateY(6px) rotate(45deg); }
.open .bar-mid { opacity: 0; transform: scaleX(0.2); }
.open .bar-bot { transform: translateY(-6px) rotate(-45deg); }
@media (prefers-reduced-motion: reduce) {
  .bar { transition: none; }
}
</style>
