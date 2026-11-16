<template>
  <section id="how-it-works" class="py-16 md:py-24 bg-[#0a0a10] border-t border-white/5">
    <div class="max-w-6xl mx-auto px-6">

      <div v-reveal class="mb-14">
        <h2 class="text-4xl font-extrabold tracking-tight">From plan file to marked slab</h2>
        <p class="text-zinc-400 mt-3 max-w-lg leading-relaxed">
          No surveyor. No crew standing around with tape measures.
        </p>
      </div>

      <div class="flex flex-col">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          v-reveal
          class="grid lg:grid-cols-[80px_1fr] gap-3 lg:gap-6 py-8 lg:py-10 border-t border-white/5"
        >
          <span class="text-5xl font-black text-white/10 leading-none tabular-nums select-none">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <div>
            <h3 class="text-white font-bold text-xl mb-2">{{ step.title }}</h3>
            <p class="text-zinc-500 text-sm leading-relaxed max-w-xl">{{ step.body }}</p>
          </div>
        </div>
      </div>

      <div v-reveal class="mt-4 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p class="text-white font-semibold text-lg max-w-sm">One operator. One shift. The whole floor marked.</p>
        <a
          href="#demo"
          class="shrink-0 group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-orange hover:bg-orange-light text-white font-semibold text-sm transition-colors"
        >
          Join the Waitlist
          <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
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
    title: 'Upload your BIM or CAD file',
    body: 'Send us your layout as a CAD file, with more formats planned. The platform reads the geometry: walls, columns, MEP rough-in, anything you need marked on the slab.',
  },
  {
    title: 'Robot navigates the slab',
    body: 'The robot works on your schedule. It locates itself on the slab from onboard sensors and site reference points, then prints your layout with a single operator present.',
  },
  {
    title: 'Your crew builds from the marks',
    body: 'Lines, symbols, text, and QR codes are printed directly on the concrete. Your foreman starts the morning from a fully marked floor.',
  },
]
</script>
