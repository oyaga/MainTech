<template>
  <section ref="sectionRef" class="bg-[#1A1201] text-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-5xl font-light mb-6">{{ $t('home.industries.mainHeading') }}</h2>
      <p class="text-xl font-medium mb-12 max-w-4xl mx-auto">
        {{ $t('home.industries.subheading') }}
      </p>

      <!-- Carousel Container -->
      <div class="relative">
        <!-- Carousel Wrapper -->
        <div class="overflow-hidden py-12">
          <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Slide 1: First page of cards -->
            <div class="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
              <!-- Card 1: Energy -->
              <IndustryCard
                industry="energy"
                :isVisible="isVisible"
                delay="0ms"
              />

              <!-- Card 2: Chemical & Petrochemical -->
              <IndustryCard
                industry="chemical"
                :isVisible="isVisible"
                delay="150ms"
              />

              <!-- Card 3: Hydrogen -->
              <IndustryCard
                industry="hydrogen"
                :isVisible="isVisible"
                delay="300ms"
              />
            </div>

            <!-- Slide 2: Second page of cards -->
            <div class="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
              <!-- Card 4: Storage & Terminals -->
              <IndustryCard
                industry="storage"
                :isVisible="true"
              />

              <!-- Card 5: Industrial Gases -->
              <IndustryCard
                industry="gases"
                :isVisible="true"
              />

              <!-- Card 6: Automotive -->
              <IndustryCard
                industry="automotive"
                :isVisible="true"
              />
            </div>

            <!-- Slide 3: Third page of cards -->
            <div class="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
              <!-- Card 7: Utilities & Infrastructure -->
              <IndustryCard
                industry="utilities"
                :isVisible="true"
              />

              <!-- Card 8: Energy (copy for infinite loop) -->
              <IndustryCard
                industry="energy"
                :isVisible="true"
              />

              <!-- Card 9: Chemical & Petrochemical (copy for infinite loop) -->
              <IndustryCard
                industry="chemical"
                :isVisible="true"
              />
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="previousSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-[#FFB300] hover:bg-[#FFC933] text-[#1A1201] p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#FFB300]/50 z-20"
          aria-label="Previous slide"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-[#FFB300] hover:bg-[#FFC933] text-[#1A1201] p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#FFB300]/50 z-20"
          aria-label="Next slide"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Indicators -->
        <div class="flex justify-center gap-3 mt-8">
          <button
            v-for="index in totalSlides"
            :key="index"
            @click="goToSlide(index - 1)"
            class="transition-all duration-300"
            :class="currentSlide === index - 1
              ? 'w-12 h-3 bg-[#FFB300] rounded-full'
              : 'w-3 h-3 bg-[#2A2318] rounded-full hover:bg-[#FFB300]/50'"
            :aria-label="`Go to slide ${index}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
const currentSlide = ref(0)
const totalSlides = 3
let autoplayInterval = null

let observer = null

// Carousel functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const previousSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Auto-play with loop
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Changes slide every 5 seconds
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

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

  // Start autoplay
  startAutoplay()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  stopAutoplay()
})
</script>
