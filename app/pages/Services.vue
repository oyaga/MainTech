<script setup lang="ts">
useSeoMeta({
  title: 'Nossos Serviços - Engenharia e Performance | Maintech Solutions',
  ogTitle: 'Nossos Serviços - Engenharia e Performance | Maintech Solutions',
  description: 'Da validação em fábrica até a entrega final. Garantimos que seus ativos operem com segurança máxima, precisão absoluta e retorno financeiro.',
  ogDescription: 'Da validação em fábrica até a entrega final. Garantimos que seus ativos operem com segurança máxima, precisão absoluta e retorno financeiro.',
  ogImage: '/imagens/open-graph.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Nossos Serviços - Engenharia e Performance | Maintech Solutions',
  twitterDescription: 'Da validação em fábrica até a entrega final. Garantimos que seus ativos operem com segurança máxima, precisão absoluta e retorno financeiro.',
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
