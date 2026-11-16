<template>
  <section id="problem" class="py-16 md:py-24 bg-[#0d0d14] border-t border-white/5">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">

        <!-- Left: lead stat -->
        <div v-reveal>
          <h2 class="text-zinc-500 text-sm font-medium mb-8 uppercase tracking-widest">Construction layout is still manual</h2>
          <div class="mb-8">
            <div class="flex items-end gap-1 leading-none mb-4">
              <span class="text-[88px] font-black text-white leading-none">Days</span>
            </div>
            <p class="text-zinc-400 leading-relaxed max-w-sm">
              of crew time per floor plate go to marking layout by hand. Every error made there gets built into the structure.
            </p>
          </div>
          <div class="pt-8 border-t border-white/5">
            <p class="text-zinc-500 text-sm leading-relaxed">
              Skilled tradespeople spend that time measuring and snapping lines when they could be building.
            </p>
          </div>
        </div>

        <!-- Right: two callouts -->
        <div v-reveal="120" class="lg:pt-14 flex flex-col divide-y divide-white/5">
          <div class="pb-8 pl-5 border-l-2 border-orange/50">
            <h3 class="text-white font-semibold text-lg mb-2">Measurement error compounds</h3>
            <p class="text-zinc-500 text-sm leading-relaxed">
              A small error at the column grid grows by the time it reaches the partition wall. By the time it surfaces on site, the rework conversation with your GC is already overdue.
            </p>
          </div>
          <div class="pt-8 pl-5 border-l-2 border-white/10">
            <h3 class="text-white font-semibold text-lg mb-2">Your best people are doing clerical work</h3>
            <p class="text-zinc-500 text-sm leading-relaxed">
              Layout is a bottleneck that holds the schedule hostage. The crew waiting to build can't start until the crew with tape measures finishes.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
