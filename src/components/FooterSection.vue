<template>
  <footer class="bg-[#07070d] border-t border-white/5 py-12">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

      <!-- Logo -->
      <a href="#" aria-label="Summit Robotics home">
        <img src="/logo.svg" alt="Summit Robotics" width="240" height="32" class="h-7 w-auto" />
      </a>

      <!-- Nav links -->
      <nav class="flex items-center gap-6 text-xs text-zinc-500">
        <a href="#how-it-works" class="hover:text-zinc-300 transition-colors">How It Works</a>
        <a href="#why-summit"   class="hover:text-zinc-300 transition-colors">Why Summit</a>
        <a href="#faq"          class="hover:text-zinc-300 transition-colors">FAQ</a>
        <a href="#demo"         class="hover:text-zinc-300 transition-colors">Join the Waitlist</a>
      </nav>

      <p class="text-xs text-zinc-600">
        &copy; {{ year }} Summit Robotics. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
