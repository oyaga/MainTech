<script setup lang="ts">
useSeoMeta({
  title: 'Our Services - Engineering and Performance | Maintech Solutions',
  ogTitle: 'Our Services - Engineering and Performance | Maintech Solutions',
  description: 'From factory validation to final handover. We ensure your assets operate with maximum safety, absolute precision, and financial return.',
  ogDescription: 'From factory validation to final handover. We ensure your assets operate with maximum safety, absolute precision, and financial return.',
  ogImage: '/imagens/open-graph.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Nossos Serviços - Engenharia e Performance | Maintech Solutions',
  twitterDescription: 'From factory validation to final handover. We ensure your assets operate with maximum safety, absolute precision, and financial return.',
  twitterImage: '/imagens/open-graph.webp',
})
// No need for heroImage variable anymore as the image is directly in style attribute
</script>
<template>
  <div>
    <ElementosHeader />

    <!-- Hero Section -->
    <ServicesHeroSection />

    <ServicesSection />

    <ServicesCtaSection />

    <ElementosFooter />
  </div>
</template>
