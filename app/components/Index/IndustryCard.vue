<template>
  <div
    class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group opacity-0 translate-y-8"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
    :style="{ transitionDelay: delay }"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-[#FFB300]/0 to-[#FFB300]/0 group-hover:from-[#FFB300]/5 group-hover:to-transparent transition-all duration-500"></div>
    <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FFB300] rounded-tl-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20"></div>
    <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FFB300] rounded-br-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20"></div>

    <div class="flex items-center gap-2 z-10">
      <div class="relative">
        <div class="w-2 h-2 bg-[#00FF00] rounded-full"></div>
        <div class="absolute inset-0 w-2 h-2 bg-[#00FF00] rounded-full animate-ping opacity-75"></div>
      </div>
      <span class="text-[#00FF00] text-xs font-bold tracking-wider">{{ $t('home.industries.statusBadge') }}</span>
    </div>

    <div class="w-16 h-16 bg-[#2A2318] rounded-2xl flex items-center justify-center p-3 transition-all duration-300 group-hover:bg-[#FFB300] group-hover:scale-110 group-hover:rotate-3 z-10">
      <img :src="iconPath" :alt="$t(`home.industries.${industry}.title`)" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
    </div>

    <h3 class="font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]" :class="titleClass">
      {{ $t(`home.industries.${industry}.title`) }}
    </h3>

    <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
      {{ $t(`home.industries.${industry}.description`) }}
    </p>

    <ul class="space-y-2 text-sm z-10">
      <li
        v-for="(item, index) in $t(`home.industries.${industry}.items`).split(', ')"
        :key="index"
        class="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1"
        :style="{ transitionDelay: `${index * 50}ms` }"
      >
        <span class="text-[#FFB300] mt-1">•</span>
        <span>{{ item }}</span>
      </li>
    </ul>

    <div class="flex flex-wrap gap-2 z-10">
      <span
        v-for="(tag, index) in $t(`home.industries.${industry}.tags`).split(', ')"
        :key="index"
        class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]"
      >
        {{ tag }}
      </span>
    </div>

    <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
      <p class="text-[#FFB300] text-xs font-bold mb-1">IDEAL FOR:</p>
      <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">
        {{ $t(`home.industries.${industry}.idealFor`) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  industry: {
    type: String,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  },
  delay: {
    type: String,
    default: '0ms'
  }
})

const iconMap = {
  energy: '/svg/energy.svg',
  chemical: '/svg/chemicals.svg',
  hydrogen: '/svg/hydrogen.svg',
  storage: '/svg/Storage.svg',
  gases: '/svg/industrial-gases.svg',
  automotive: '/svg/automotive.svg',
  utilities: '/svg/utilities.svg'
}

const titleSizeMap = {
  energy: 'text-3xl',
  chemical: 'text-2xl',
  hydrogen: 'text-3xl',
  storage: 'text-xl',
  gases: 'text-3xl',
  automotive: 'text-3xl',
  utilities: 'text-2xl'
}

const iconPath = computed(() => iconMap[props.industry] || '/svg/energy.svg')
const titleClass = computed(() => titleSizeMap[props.industry] || 'text-3xl')
</script>
