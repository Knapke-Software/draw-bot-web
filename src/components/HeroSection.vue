<template>
  <section
    class="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    :style="{
      background: 'radial-gradient(ellipse at 60% -10%, rgba(232,93,4,0.14) 0%, transparent 55%), #0a0a10',
      backgroundImage: 'radial-gradient(ellipse at 60% -10%, rgba(232,93,4,0.14) 0%, transparent 55%), radial-gradient(#1e1e2e 1px, transparent 1px)',
      backgroundSize: 'auto, 28px 28px',
    }"
  >
    <div class="max-w-6xl mx-auto px-6 py-24 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left: copy -->
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-DEFAULT/30 bg-orange-DEFAULT/10 text-orange-DEFAULT text-xs font-semibold uppercase tracking-widest mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-orange-DEFAULT animate-pulse"></span>
            Now Accepting Early Access
          </div>

          <h1 class="text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
            Stop Measuring.<br />
            <span class="text-orange-DEFAULT">Start Building.</span>
          </h1>

          <p class="text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">
            Summit Robotics prints your construction layout directly on the slab —
            from your BIM files, overnight, without a crew. Sub-2mm accuracy.
            Zero rework.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="#demo"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-orange-DEFAULT hover:bg-orange-light text-white font-semibold transition-colors text-sm"
            >
              Request a Demo
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/10 text-zinc-300 hover:border-white/30 hover:text-white transition-colors text-sm font-medium"
            >
              See How It Works
            </a>
          </div>
        </div>

        <!-- Right: robot image placeholder -->
        <div class="relative flex items-center justify-center">
          <div
            class="relative w-full max-w-md aspect-[4/3] rounded-2xl border border-white/8 overflow-hidden"
            style="background: radial-gradient(ellipse at 50% 50%, rgba(232,93,4,0.10) 0%, #0d0d14 70%)"
          >
            <!-- Decorative corner marks -->
            <div class="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-orange-DEFAULT/40 rounded-tl"></div>
            <div class="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-orange-DEFAULT/40 rounded-tr"></div>
            <div class="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-orange-DEFAULT/40 rounded-bl"></div>
            <div class="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-orange-DEFAULT/40 rounded-br"></div>

            <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 text-zinc-600 text-sm">
              <svg class="w-10 h-10 text-zinc-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke-linecap="round" />
              </svg>
              <span class="text-zinc-600 text-xs tracking-wide">Robot image coming soon</span>
            </div>
          </div>

          <!-- Orange glow behind card -->
          <div class="absolute -inset-8 rounded-full bg-orange-DEFAULT/5 blur-3xl -z-10"></div>
        </div>
      </div>

      <!-- Stat strip -->
      <div class="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.value" class="text-center">
          <div class="text-2xl font-bold text-white">{{ stat.value }}</div>
          <div class="text-xs text-zinc-500 mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '10×',    label: 'Faster than manual layout' },
  { value: '<2mm',   label: 'Accuracy on the slab' },
  { value: '100%',   label: 'BIM / CAD native' },
  { value: 'Nights', label: 'Runs unattended overnight' },
]
</script>
