<script setup>
import { ref } from 'vue'

useSeoMeta({
  title: 'Contact Us - Turn Ideas into Reality | Maintech Solutions',
  ogTitle: 'Contact Us - Turn Ideas into Reality | Maintech Solutions',
  description: 'Get in touch with Maintech Solutions. Discover how we can transform your ideas into digital reality and boost your projects.',
  ogDescription: 'Get in touch with Maintech Solutions. Discover how we can transform your ideas into digital reality and boost your projects.',
  ogImage: '/imagens/open-graph.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact Us - Turn Ideas into Reality | Maintech Solutions',
  twitterDescription: 'Get in touch with Maintech Solutions. Discover how we can transform your ideas into digital reality and boost your projects.',
  twitterImage: '/imagens/open-graph.webp',
})

// Form data
</script>

<template>
  <div>
    <ElementosHeader />
    <ContactHeroSection />
    <ContactContactFormSection />
    <ContactMapSection />
    <ElementosFooter />
  </div>
</template>