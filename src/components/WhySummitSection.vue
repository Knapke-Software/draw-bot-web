<template>
  <section id="why-summit" class="py-24 bg-[#0d0d14] border-t border-white/5">
    <div class="max-w-6xl mx-auto px-6">

      <div class="mb-14">
        <h2 class="text-4xl font-extrabold tracking-tight">Built for the jobsite, not the lab</h2>
        <p class="text-zinc-400 mt-3 max-w-lg leading-relaxed">
          Dust, rough concrete, imperfect slabs. Summit is designed for where construction actually happens.
        </p>
      </div>

      <!-- Feature rows -->
      <div class="grid md:grid-cols-2 gap-x-16 mb-16">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="flex gap-5 py-7 border-t border-white/5"
        >
          <div class="shrink-0 mt-0.5">
            <div class="w-8 h-8 flex items-center justify-center">
              <component :is="feature.icon" />
            </div>
          </div>
          <div>
            <h3 class="text-white font-semibold text-base mb-1">{{ feature.title }}</h3>
            <p class="text-zinc-500 text-sm leading-relaxed">{{ feature.body }}</p>
          </div>
        </div>
      </div>

      <!-- Comparison table -->
      <div class="rounded-lg border border-white/5 overflow-hidden">
        <div class="grid grid-cols-3 bg-[#111118] border-b border-white/5 text-xs font-semibold uppercase tracking-wider">
          <div class="px-6 py-4 text-zinc-500">Layout method</div>
          <div class="px-6 py-4 text-zinc-500 text-center">Accuracy</div>
          <div class="px-6 py-4 text-zinc-500 text-center">Crew required</div>
        </div>
        <div
          v-for="row in comparison"
          :key="row.method"
          class="grid grid-cols-3 border-b border-white/5 last:border-0 text-sm"
          :class="row.highlight ? 'bg-orange-DEFAULT/5' : 'bg-[#0a0a10]'"
        >
          <div class="px-6 py-4 font-medium flex items-center gap-2" :class="row.highlight ? 'text-orange-DEFAULT' : 'text-zinc-400'">
            {{ row.method }}
          </div>
          <div class="px-6 py-4 text-center" :class="row.highlight ? 'text-white font-semibold' : 'text-zinc-500'">{{ row.accuracy }}</div>
          <div class="px-6 py-4 text-center" :class="row.highlight ? 'text-white font-semibold' : 'text-zinc-500'">{{ row.crew }}</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

function makeIcon(paths: () => ReturnType<typeof h>[]) {
  return defineComponent({
    render: () => h(
      'svg',
      { class: 'w-5 h-5 text-orange-DEFAULT', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.75', viewBox: '0 0 24 24', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
      paths()
    ),
  })
}

const IconTarget = makeIcon(() => [
  h('circle', { cx: '12', cy: '12', r: '10' }),
  h('circle', { cx: '12', cy: '12', r: '6' }),
  h('circle', { cx: '12', cy: '12', r: '2' }),
])

const IconTimer = makeIcon(() => [
  h('circle', { cx: '12', cy: '12', r: '9' }),
  h('path', { d: 'M12 7v5l3 3' }),
  h('path', { d: 'M9 2h6' }),
])

const IconFile = makeIcon(() => [
  h('path', { d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }),
  h('path', { d: 'M14 2v6h6' }),
  h('line', { x1: '9', y1: '13', x2: '15', y2: '13' }),
  h('line', { x1: '9', y1: '17', x2: '12', y2: '17' }),
])

const IconShield = makeIcon(() => [
  h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
])

const features = [
  {
    title: 'Sub-2mm accuracy',
    body: 'Total station localisation and closed-loop control. Drift doesn\'t accumulate across the floor plate.',
    icon: IconTarget,
  },
  {
    title: '10× faster than manual layout',
    body: 'One operator with Summit covers in hours what a full crew takes days to mark.',
    icon: IconTimer,
  },
  {
    title: 'BIM and CAD native',
    body: 'Direct DXF, IFC, and Revit ingestion. No manual redrawing, no conversion loss.',
    icon: IconFile,
  },
  {
    title: 'Jobsite hardened',
    body: 'Designed for dusty, rough concrete environments — not a temperature-controlled warehouse.',
    icon: IconShield,
  },
]

const comparison = [
  { method: 'Manual tape & chalk',   accuracy: '±10–25mm', crew: '2–4 people', highlight: false },
  { method: 'Robotic total station', accuracy: '±2–5mm',   crew: '1–2 people', highlight: false },
  { method: 'Summit Robotics',       accuracy: '<2mm',      crew: '1 operator', highlight: true  },
]
</script>
