<template>
  <section id="how-it-works" class="py-28 bg-[#0a0a10]">
    <div class="max-w-6xl mx-auto px-6">

      <div class="text-center mb-16">
        <p class="text-orange-DEFAULT text-xs font-semibold uppercase tracking-widest mb-3">How It Works</p>
        <h2 class="text-4xl font-extrabold tracking-tight">From BIM File to Marked Slab</h2>
        <p class="text-zinc-400 mt-4 max-w-xl mx-auto leading-relaxed">
          Three steps. No surveyor. No crew standing around with tape measures.
        </p>
      </div>

      <div class="relative">
        <!-- Connector line (desktop) -->
        <div class="hidden lg:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-transparent via-orange-DEFAULT/30 to-transparent"></div>

        <div class="grid lg:grid-cols-3 gap-10">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="flex flex-col items-center text-center"
          >
            <!-- Step number -->
            <div class="relative w-28 h-28 mb-7 shrink-0">
              <div class="absolute inset-0 rounded-full bg-orange-DEFAULT/8 border border-orange-DEFAULT/20"></div>
              <div class="absolute inset-3 rounded-full bg-[#111118] border border-white/5 flex items-center justify-center">
                <span class="text-orange-DEFAULT font-extrabold text-2xl">{{ i + 1 }}</span>
              </div>
            </div>

            <h3 class="text-white font-bold text-xl mb-3">{{ step.title }}</h3>
            <p class="text-zinc-500 text-sm leading-relaxed max-w-xs">{{ step.body }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom call-out -->
      <div class="mt-20 rounded-2xl border border-white/5 bg-[#111118] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-white font-bold text-xl mb-1">Ready before your crew arrives.</p>
          <p class="text-zinc-500 text-sm">The robot runs overnight. Your team starts building the next morning — not measuring.</p>
        </div>
        <a
          href="#demo"
          class="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-orange-DEFAULT hover:bg-orange-light text-white font-semibold text-sm transition-colors"
        >
          See a Live Demo
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Upload Your BIM / CAD',
    body: 'Send us your Revit, IFC, or DXF files. Our platform parses the layout geometry — walls, columns, MEP rough-in, anything you need marked.',
  },
  {
    title: 'Robot Navigates the Slab',
    body: 'Summit deploys the robot after hours. It self-localizes on the slab using total station control points and begins printing your layout autonomously.',
  },
  {
    title: 'Crew Builds From Marks',
    body: 'Every line, symbol, and annotation is printed at sub-2mm accuracy. Your foreman opens the morning with a fully marked floor — zero crew time wasted.',
  },
]
</script>
