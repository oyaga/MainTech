<template>
  <section ref="sectionRef" class="bg-gradient-to-b from-[#1A1201] to-[#AF8019] text-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-5xl font-bold mb-6">We have the ideal tools for your needs</h2>
          <p class="text-2xl font-light">
            We provide specialized support and reliable solutions to ensure your operation never stops. Our experience and technology work in your favor.
          </p>
        </div>
        <div class="flex flex-col gap-6">
          <!-- Stat 1 -->
          <div class="opacity-0 translate-y-4 transition-all duration-700" :class="{ 'opacity-100 translate-y-0': isVisible }">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-2xl font-bold">Reduction of operational costs</h3>
              <span class="text-3xl font-bold text-[#FFC94B]">{{ animatedValue1 }}%</span>
            </div>
            <div class="w-full bg-[#2A2318] h-5 rounded-full overflow-hidden">
              <div
                class="bg-gradient-to-r from-[#FFB300] to-[#FFC94B] h-full rounded-full transition-all duration-1500 ease-out"
                :style="{ width: isVisible ? '85%' : '0%' }"
              ></div>
            </div>
          </div>

          <!-- Stat 2 -->
          <div class="opacity-0 translate-y-4 transition-all duration-700 delay-500" :class="{ 'opacity-100 translate-y-0': isVisible }">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-2xl font-bold">Increase in productivity</h3>
              <span class="text-3xl font-bold text-[#FFC94B]">{{ animatedValue2 }}%</span>
            </div>
            <div class="w-full bg-[#2A2318] h-5 rounded-full overflow-hidden">
              <div
                class="bg-gradient-to-r from-[#FFB300] to-[#FFC94B] h-full rounded-full transition-all duration-1500 ease-out delay-500"
                :style="{ width: isVisible ? '92%' : '0%' }"
              ></div>
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="opacity-0 translate-y-4 transition-all duration-700 delay-1000" :class="{ 'opacity-100 translate-y-0': isVisible }">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-2xl font-bold">Precision in project delivery</h3>
              <span class="text-3xl font-bold text-[#FFC94B]">{{ animatedValue3 }}%</span>
            </div>
            <div class="w-full bg-[#2A2318] h-5 rounded-full overflow-hidden">
              <div
                class="bg-gradient-to-r from-[#FFB300] to-[#FFC94B] h-full rounded-full transition-all duration-1500 ease-out delay-1000"
                :style="{ width: isVisible ? '97%' : '0%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
const animatedValue1 = ref(0)
const animatedValue2 = ref(0)
const animatedValue3 = ref(0)

let observer = null

const animateValue = (target, duration, callback) => {
  const increment = target / (duration / 16) // 60fps
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      callback(Math.round(target))
      clearInterval(timer)
    } else {
      callback(Math.round(current))
    }
  }, 16)
}

const startAnimations = () => {
  isVisible.value = true

  // Animar contadores em sincronia com as barras
  // Stat 1: sem delay
  setTimeout(() => {
    animateValue(85, 1500, (val) => {
      animatedValue1.value = val
    })
  }, 0)

  // Stat 2: 500ms delay
  setTimeout(() => {
    animateValue(92, 1500, (val) => {
      animatedValue2.value = val
    })
  }, 500)

  // Stat 3: 1000ms delay
  setTimeout(() => {
    animateValue(97, 1500, (val) => {
      animatedValue3.value = val
    })
  }, 1000)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          startAnimations()
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.3
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