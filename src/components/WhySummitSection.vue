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
      <div class="grid md:grid-cols-2 gap-x-16">
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
    title: 'Built for construction-grade accuracy',
    body: 'Closed-loop motion control with sensor fusion, aimed at a ±3 mm target. Accuracy is measured against benchmarks, not assumed.',
    icon: IconTarget,
  },
  {
    title: 'One operator, not a crew',
    body: 'Set up the plan, start the job, and let the robot do the marking while your trades stay on production work.',
    icon: IconTimer,
  },
  {
    title: 'Works from your plans',
    body: 'Layout geometry comes straight from your CAD files, so there is no manual redrawing.',
    icon: IconFile,
  },
  {
    title: 'Jobsite hardened',
    body: 'Designed for dusty, rough concrete, and prints directly on raw slab.',
    icon: IconShield,
  },
]
</script>
