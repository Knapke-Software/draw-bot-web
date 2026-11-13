<template>
  <div>
    <NavBar />
    <main>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <WhySummitSection />
      <DemoFormSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavBar            from './components/NavBar.vue'
import HeroSection       from './components/HeroSection.vue'
import ProblemSection    from './components/ProblemSection.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import WhySummitSection  from './components/WhySummitSection.vue'
import DemoFormSection   from './components/DemoFormSection.vue'
import FooterSection     from './components/FooterSection.vue'
</script>
