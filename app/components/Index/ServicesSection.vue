<template>
  <section ref="sectionRef" class="bg-[#AF8019] text-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-5xl font-bold mb-6">{{ $t('home.services.mainHeading') }}</h2>
      <p class="text-xl font-light mb-12 max-w-4xl mx-auto">
        {{ $t('home.services.subheading') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card 1: FAT / SAT -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
        >
          <!-- Icon -->
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <img src="/svg/fat-sat.svg" alt="FAT/SAT" class="w-full h-full object-contain brightness-0 invert">
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">{{ $t('home.services.fat.title') }}</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">{{ $t('home.services.fat.subtitle') }}</p>
            <p class="text-base leading-relaxed text-gray-700">{{ $t('home.services.fat.description') }}</p>
          </div>

          <a href="/services#fat-sat" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            {{ $t('buttons.learnMore') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <!-- Decorative element -->
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>
        <!-- Card 2: Calibration -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 100ms"
        >
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <img src="/svg/Instruments.svg" alt="Calibration" class="w-full h-full object-contain brightness-0 invert">
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">{{ $t('home.services.calibration.title') }}</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">{{ $t('home.services.calibration.subtitle') }}</p>
            <p class="text-base leading-relaxed text-gray-700">{{ $t('home.services.calibration.description') }}</p>
          </div>

          <a href="/services#calibracao" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            {{ $t('buttons.learnMore') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>

        <!-- Card 3: Loop Check -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 200ms"
        >
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <img src="/svg/loop-check.svg" alt="Loop Check" class="w-full h-full object-contain brightness-0 invert">
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">{{ $t('home.services.loopCheck.title') }}</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">{{ $t('home.services.loopCheck.subtitle') }}</p>
            <p class="text-base leading-relaxed text-gray-700">{{ $t('home.services.loopCheck.description') }}</p>
          </div>

          <a href="/services#loop-check" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            {{ $t('buttons.learnMore') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>

        <!-- Card 4: Pre-Commissioning -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 300ms"
        >
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-full h-full text-white">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">{{ $t('home.services.preCommissioning.title') }}</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">{{ $t('home.services.preCommissioning.subtitle') }}</p>
            <p class="text-base leading-relaxed text-gray-700">{{ $t('home.services.preCommissioning.description') }}</p>
          </div>

          <a href="/services#pre-comissionamento" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            {{ $t('buttons.learnMore') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>

        <!-- Card 5: Commissioning -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 400ms"
        >
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <img src="/svg/start-up.svg" alt="Start-up" class="w-full h-full object-contain brightness-0 invert">
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">{{ $t('home.services.commissioning.title') }}</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">{{ $t('home.services.commissioning.subtitle') }}</p>
            <p class="text-base leading-relaxed text-gray-700">{{ $t('home.services.commissioning.description') }}</p>
          </div>

          <a href="/services#comissionamento" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            {{ $t('buttons.learnMore') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>

        <!-- Card 6: Documentation -->
        <div
          class="relative bg-gradient-to-br from-[#FFF4D6] to-[#FFE19A] text-[#1A1201] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A1201]/30 hover:-translate-y-3 group opacity-0 translate-y-8"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
          style="transition-delay: 500ms"
        >
          <div class="w-20 h-20 bg-[#B07E09] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 self-start">
            <img src="/svg/doc-handover.svg" alt="Handover" class="w-full h-full object-contain brightness-0 invert">
          </div>

          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#B07E09]">{{ $t('home.services.documentation.title') }}</h3>
            <p class="text-sm font-semibold text-[#B07E09] mb-3 tracking-wider">{{ $t('home.services.documentation.subtitle') }}</p>
            <p class="text-base leading-relaxed text-gray-700">{{ $t('home.services.documentation.description') }}</p>
          </div>

          <a href="/services#handover" class="bg-[#B07E09] text-white rounded-full py-3 px-8 self-start font-semibold transition-all duration-300 hover:bg-[#8B6007] hover:px-10 flex items-center gap-2 group/btn">
            {{ $t('buttons.learnMore') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" class="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#B07E09]/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#B07E09]/20"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.2
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>