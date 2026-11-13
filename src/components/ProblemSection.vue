<template>
  <section id="problem" class="py-24 bg-[#0d0d14] border-t border-white/5">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">

        <!-- Left: lead stat -->
        <div>
          <p class="text-zinc-500 text-sm font-medium mb-8 uppercase tracking-widest">Layout is still a manual problem</p>
          <div class="mb-8">
            <div class="flex items-end gap-1 leading-none mb-4">
              <span class="text-[88px] font-black text-white leading-none">5–9</span>
              <span class="text-5xl font-black text-orange-DEFAULT mb-3">%</span>
            </div>
            <p class="text-zinc-400 leading-relaxed max-w-sm">
              of total project cost goes to rework. Layout errors are the single biggest driver — and they start with a tape measure.
            </p>
          </div>
          <div class="pt-8 border-t border-white/5">
            <p class="text-zinc-500 text-sm leading-relaxed">
              A single floor plate takes a full crew 2–3 days to lay out manually. That's skilled tradespeople measuring and marking when they could be building.
            </p>
          </div>
        </div>

        <!-- Right: two callouts -->
        <div class="lg:pt-14 flex flex-col divide-y divide-white/5">
          <div class="pb-8 pl-5 border-l-2 border-orange-DEFAULT/50">
            <h3 class="text-white font-semibold text-lg mb-2">Measurement error compounds</h3>
            <p class="text-zinc-500 text-sm leading-relaxed">
              A 5mm error at column grid becomes a 20mm problem at the partition wall. By the time it surfaces on site, the rework conversation with your GC is already overdue.
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
