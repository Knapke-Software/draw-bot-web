import type { Directive } from 'vue'

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// v-reveal / v-reveal="120": fade and rise into view once, with an optional delay in ms.
// Content is hidden only after JS runs, and never when the user prefers reduced motion.
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (reduced() || !('IntersectionObserver' in window)) return
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return // already on screen
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      el.classList.add('reveal-in')
      io.disconnect()
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
  },
}
