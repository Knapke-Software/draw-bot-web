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
          <h1 class="text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
            Stop Measuring.<br />
            <span class="text-orange-DEFAULT">Start Building.</span>
          </h1>

          <p class="text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">
            Summit Robotics is building an autonomous robot that prints construction
            layout directly on the slab from your CAD and BIM files, with no tape
            measures and no layout crew. Launching 2027.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="#demo"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-orange-DEFAULT hover:bg-orange-light text-white font-semibold transition-colors text-sm"
            >
              Join the Waitlist
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

        <!-- Right: robot image -->
        <div class="relative flex items-center justify-center">
          <div class="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border border-white/8">
            <img
              src="../assets/robot.jpg"
              alt="Concept rendering of the Summit Robotics layout robot printing a line on a concrete slab" width="1448" height="1086" fetchpriority="high"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Orange glow behind card -->
          <div class="absolute -inset-8 rounded-full bg-orange-DEFAULT/5 blur-3xl -z-10"></div>
        </div>
      </div>

      <!-- Stat strip -->
      <div class="mt-20 pt-8 border-t border-white/5 flex flex-wrap gap-x-10 gap-y-6">
        <div v-for="stat in stats" :key="stat.value" class="flex items-baseline gap-3">
          <span class="text-2xl font-bold text-white tabular-nums">{{ stat.value }}</span>
          <span class="text-sm text-zinc-500">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '2027',        label: 'Planned launch' },
  { value: 'Accuracy',     label: 'Our top design priority' },
  { value: 'CAD / BIM',   label: 'Works from your existing plans' },
  { value: 'After hours', label: 'Works while your crew is off-site' },
]
</script>
