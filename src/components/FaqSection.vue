<template>
  <section id="faq" class="py-24 bg-[#0a0a10] border-t border-white/5">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-4xl font-extrabold tracking-tight mb-12">Frequently asked questions</h2>
      <div class="flex flex-col">
        <div v-for="item in faqs" :key="item.q" class="py-7 border-t border-white/5">
          <h3 class="text-white font-semibold text-lg mb-2">{{ item.q }}</h3>
          <p class="text-zinc-500 text-sm leading-relaxed">{{ item.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const faqs = [
  {
    q: 'What is Summit Robotics?',
    a: 'Summit Robotics is developing an autonomous construction layout robot. It prints layout lines, text, and QR codes directly onto concrete slabs from your CAD files.',
  },
  {
    q: 'What is robotic construction layout?',
    a: 'Layout is the process of marking where walls, columns, and utilities go on the floor before building. A layout robot does this automatically instead of a crew using tape measures, chalk lines, or a total station.',
  },
  {
    q: 'When will the robot be available?',
    a: 'We are targeting a 2027 launch. Join the waitlist to hear about progress and early access.',
  },
  {
    q: 'What file formats will it work from?',
    a: 'We are starting with common CAD formats, and plan to support more over time.',
  },
  {
    q: 'How accurate will it be?',
    a: 'Accuracy is our top design priority. We'll publish measured results once field testing is complete.',
  },
]

// FAQ structured data, injected so it always matches the visible content.
let ld: HTMLScriptElement | null = null
onMounted(() => {
  ld = document.createElement('script')
  ld.type = 'application/ld+json'
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  })
  document.head.appendChild(ld)
})
onUnmounted(() => ld?.remove())
</script>
