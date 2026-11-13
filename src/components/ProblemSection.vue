<template>
  <section id="problem" class="py-28 bg-[#0d0d14]">
    <div class="max-w-6xl mx-auto px-6">

      <div class="text-center mb-16">
        <p class="text-orange-DEFAULT text-xs font-semibold uppercase tracking-widest mb-3">The Problem</p>
        <h2 class="text-4xl font-extrabold tracking-tight">The Old Way Is Costing You</h2>
        <p class="text-zinc-400 mt-4 max-w-xl mx-auto leading-relaxed">
          Manual layout hasn't changed in decades — it still relies on tape measures, chalk lines, and crews
          that could be building instead of marking.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">

        <div class="rounded-xl border border-white/5 bg-[#111118] p-8 flex flex-col gap-4 hover:border-orange-DEFAULT/20 transition-colors">
          <div class="w-10 h-10 rounded-lg bg-orange-DEFAULT/10 flex items-center justify-center shrink-0">
            <svg class="w-5 h-5 text-orange-DEFAULT" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" stroke-linecap="round" />
            </svg>
          </div>
          <div>
            <h3 class="text-white font-semibold text-lg mb-2">Days Lost to Layout</h3>
            <p class="text-zinc-500 text-sm leading-relaxed">A single floor plate can take a full crew 2–3 days to lay out manually. That's time your tradespeople could spend on the work that actually advances the schedule.</p>
          </div>
        </div>

        <div class="rounded-xl border border-white/5 bg-[#111118] p-8 flex flex-col gap-4 hover:border-orange-DEFAULT/20 transition-colors">
          <div class="w-10 h-10 rounded-lg bg-orange-DEFAULT/10 flex items-center justify-center shrink-0">
            <svg class="w-5 h-5 text-orange-DEFAULT" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke-linecap="round" stroke-linejoin="round" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div>
            <h3 class="text-white font-semibold text-lg mb-2">Human Error Compounds</h3>
            <p class="text-zinc-500 text-sm leading-relaxed">Manual measurements drift. A 5mm error at column grid becomes a 20mm problem at the partition wall — and a costly rework conversation with your GC.</p>
          </div>
        </div>

        <div class="rounded-xl border border-white/5 bg-[#111118] p-8 flex flex-col gap-4 hover:border-orange-DEFAULT/20 transition-colors">
          <div class="w-10 h-10 rounded-lg bg-orange-DEFAULT/10 flex items-center justify-center shrink-0">
            <svg class="w-5 h-5 text-orange-DEFAULT" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-linecap="round" />
            </svg>
          </div>
          <div>
            <h3 class="text-white font-semibold text-lg mb-2">Rework Eats Margin</h3>
            <p class="text-zinc-500 text-sm leading-relaxed">Layout errors are the leading driver of field rework. Industry averages put rework at 5–9% of total project cost. Even a fraction of that is unacceptable.</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
