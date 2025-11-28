<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('industries.seo.title'),
  ogTitle: t('industries.seo.title'),
  description: t('industries.seo.description'),
  ogDescription: t('industries.seo.description'),
  ogImage: '/imagens/open-graph.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: t('industries.seo.title'),
  twitterDescription: t('industries.seo.description'),
  twitterImage: '/imagens/open-graph.webp',
})
</script>

<template>
  <div>
    <ElementosHeader />
    <IndustriesHeroSection />
    <IndustriesSection />
    <IndustriesCtaSection />
    <ElementosFooter />
  </div>
</template>
