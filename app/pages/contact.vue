<script setup>
import { ref } from 'vue'

useSeoMeta({
  title: 'Fale Conosco - Transforme Ideias em Realidade | Maintech Solutions',
  ogTitle: 'Fale Conosco - Transforme Ideias em Realidade | Maintech Solutions',
  description: 'Entre em contato com a Maintech Solutions. Descubra como podemos transformar suas ideias em realidade digital e impulsionar seus projetos.',
  ogDescription: 'Entre em contato com a Maintech Solutions. Descubra como podemos transformar suas ideias em realidade digital e impulsionar seus projetos.',
  ogImage: '/imagens/open-graph.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Fale Conosco - Transforme Ideias em Realidade | Maintech Solutions',
  twitterDescription: 'Entre em contato com a Maintech Solutions. Descubra como podemos transformar suas ideias em realidade digital e impulsionar seus projetos.',
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