<template>
  <section id="why-summit" class="py-28 bg-[#0d0d14]">
    <div class="max-w-6xl mx-auto px-6">

      <div class="text-center mb-16">
        <p class="text-orange-DEFAULT text-xs font-semibold uppercase tracking-widest mb-3">Why Summit</p>
        <h2 class="text-4xl font-extrabold tracking-tight">Built for the Jobsite, Not the Lab</h2>
        <p class="text-zinc-400 mt-4 max-w-xl mx-auto leading-relaxed">
          We built Summit Robotics from the ground up for real construction environments —
          dust, concrete, imperfect slabs, and 5am start times.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        <div
          v-for="card in features"
          :key="card.title"
          class="rounded-xl border border-white/5 bg-[#111118] p-6 hover:border-orange-DEFAULT/20 transition-colors"
        >
          <div class="text-3xl mb-4">{{ card.emoji }}</div>
          <h3 class="text-white font-semibold text-base mb-2">{{ card.title }}</h3>
          <p class="text-zinc-500 text-sm leading-relaxed">{{ card.body }}</p>
        </div>
      </div>

      <!-- Comparison table -->
      <div class="rounded-2xl border border-white/5 overflow-hidden">
        <div class="grid grid-cols-3 bg-[#111118] border-b border-white/5 text-xs font-semibold uppercase tracking-wider">
          <div class="px-6 py-4 text-zinc-500">Layout Method</div>
          <div class="px-6 py-4 text-zinc-500 text-center">Accuracy</div>
          <div class="px-6 py-4 text-zinc-500 text-center">Crew Required</div>
        </div>
        <div
          v-for="row in comparison"
          :key="row.method"
          class="grid grid-cols-3 border-b border-white/5 last:border-0 text-sm"
          :class="row.highlight ? 'bg-orange-DEFAULT/5' : 'bg-[#0d0d14]'"
        >
          <div class="px-6 py-4 font-medium" :class="row.highlight ? 'text-orange-DEFAULT' : 'text-zinc-300'">
            {{ row.method }}
            <span v-if="row.highlight" class="ml-2 text-[10px] font-semibold uppercase tracking-widest bg-orange-DEFAULT/20 text-orange-DEFAULT px-1.5 py-0.5 rounded">You</span>
          </div>
          <div class="px-6 py-4 text-center" :class="row.highlight ? 'text-white font-semibold' : 'text-zinc-500'">{{ row.accuracy }}</div>
          <div class="px-6 py-4 text-center" :class="row.highlight ? 'text-white font-semibold' : 'text-zinc-500'">{{ row.crew }}</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    emoji: '🎯',
    title: 'Sub-2mm Accuracy',
    body: 'Total station localisation + closed-loop control. Drift doesn\'t accumulate across the floor plate.',
  },
  {
    emoji: '🌙',
    title: 'Overnight Autonomy',
    body: 'The robot runs your layout unattended after the crew leaves. No babysitting required.',
  },
  {
    emoji: '📐',
    title: 'BIM / CAD Native',
    body: 'Direct DXF, IFC, and Revit ingestion. No manual redrawing, no conversion loss.',
  },
  {
    emoji: '🔧',
    title: 'Jobsite Hardened',
    body: 'Designed for dusty, rough concrete environments — not a temperature-controlled warehouse.',
  },
]

const comparison = [
  { method: 'Manual tape & chalk',   accuracy: '±10–25mm', crew: '2–4 people',  highlight: false },
  { method: 'Robotic total station', accuracy: '±2–5mm',   crew: '1–2 people',  highlight: false },
  { method: 'Summit Robotics',       accuracy: '<2mm',      crew: '0 — autonomous', highlight: true  },
]
</script>
