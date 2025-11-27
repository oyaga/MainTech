<template>
  <section ref="sectionRef" class="bg-[#160900] text-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Floating circles -->
      <div class="absolute top-[10%] left-[5%] w-64 h-64 bg-[#ffb300] rounded-full opacity-5 blur-3xl animate-float"></div>
      <div class="absolute top-[40%] right-[10%] w-96 h-96 bg-[#ff8c00] rounded-full opacity-5 blur-3xl animate-float-delayed"></div>
      <div class="absolute bottom-[20%] left-[15%] w-80 h-80 bg-[#ffb300] rounded-full opacity-5 blur-3xl animate-float-slow"></div>

      <!-- Geometric shapes -->
      <div class="absolute top-[25%] right-[5%] w-32 h-32 border-2 border-[#ffb300]/10 rounded-full animate-spin-slow"></div>
      <div class="absolute bottom-[35%] left-[8%] w-24 h-24 border-2 border-[#ffb300]/10 rotate-45 animate-pulse-slow"></div>

      <!-- Gradient overlays -->
      <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#160A00]/5 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#160A00]/5 to-transparent"></div>
    </div>

    <div
      v-for="(industry, index) in industries"
      :key="index"
      :id="industry.id"
      ref="industryRefs"
      class="relative min-h-[710px] flex items-center justify-center py-12 lg:py-0 z-10 scroll-mt-20"
    >
      <div class="container mx-auto px-6 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Image -->
          <div
            class="flex items-center justify-center opacity-0 translate-y-8 transition-all duration-700"
            :class="{ 'opacity-100 translate-y-0': industry.isVisible, 'lg:order-2': industry.order === 'reversed' }"
          >
            <div class="relative">
              <div class="absolute -inset-3 rounded-full border-2 border-[#ffb300]"></div>
              <div class="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden">
                <img
                  :src="industry.image"
                  :alt="industry.alt"
                  class="w-full h-full object-cover"
                >
              </div>
            </div>
          </div>

          <!-- Content -->
          <div
            class="flex flex-col gap-8 opacity-0 translate-y-8 transition-all duration-700 delay-200"
            :class="{ 'opacity-100 translate-y-0': industry.isVisible, 'lg:order-1': industry.order === 'reversed' }"
          >
            <div class="inline-flex">
              <span class="bg-[#ffb300] text-white px-8 py-2 rounded-full text-[15px] font-light tracking-[0.3px]">
                Maintech Solutions
              </span>
            </div>
            <h2 class="text-4xl sm:text-5xl font-bold tracking-[1px]">{{ industry.title }}</h2>
            <p class="text-2xl sm:text-3xl font-light leading-relaxed">
              {{ industry.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const industries = ref([
  {
    id: 'energia',
    title: 'Energy',
    description: 'We are experts in the commissioning of combined cycle plants and other power generation units. Our rigorous testing and controlled activation process ensures fast, safe, and optimized startups, maximizing your ability to respond to energy market demands.',
    image: '/imagens/industries/energia.webp',
    alt: 'Energy',
    order: 'default',
    isVisible: false
  },
  {
    id: 'quimico-petroquimico',
    title: 'Chemical and Petrochemical',
    description: 'We have deep knowledge in the commissioning of Safety Instrumented Systems (SIS) and instrumentation for hazardous areas. We ensure that every control loop and safety system in your plant is perfectly calibrated and validated, ensuring the protection of your people and assets.',
    image: '/imagens/industries/quimico-e-pretroquimico.webp',
    alt: 'Chemical and Petrochemical',
    order: 'reversed',
    isVisible: false
  },
  {
    id: 'hidrogenio',
    title: 'Hydrogen',
    description: 'We are at the forefront of the energy transition, with experience in the precise instrumentation that the hydrogen economy demands. From production to storage, we commission your systems to ensure safe handling, accurate measurements, and reliable operation.',
    image: '/imagens/industries/hidrogenio.webp',
    alt: 'Hydrogen',
    order: 'default',
    isVisible: false
  },
  {
    id: 'armazenamento-terminais',
    title: 'Storage and Liquid Bulk Terminals',
    description: 'Our expertise ranges from the calibration of flow and level measurement systems to the commissioning of terminal automation systems (TAS). We ensure your storage and transfer operations are precise, safe, and efficient.',
    image: '/imagens/industries/armazenamento-e-terminais.webp',
    alt: 'Storage and Liquid Bulk Terminals',
    order: 'reversed',
    isVisible: false
  },
  {
    id: 'gases-industriais',
    title: 'Industrial Gases',
    description: 'We perform meticulous verification and commissioning of the entire instrumentation chain, from purity sensors to control valves, ensuring your industrial gas production and distribution operates flawlessly and with maximum safety.',
    image: '/imagens/industries/gases-industriais.webp',
    alt: 'Industrial Gases',
    order: 'default',
    isVisible: false
  },
  {
    id: 'automovel',
    title: 'Automotive',
    description: 'We commission the utility systems and control infrastructure that are the backbone of your factory. We ensure energy and fluids reach your robots and assembly lines with the reliability needed to avoid costly production stoppages.',
    image: '/imagens/industries/automovel.webp',
    alt: 'Automotive',
    order: 'reversed',
    isVisible: false
  },
  {
    id: 'utilities-infraestruturas',
    title: 'Utilities and Infrastructure',
    description: 'We are specialists in the commissioning of protection and control systems in medium and high voltage substations. We ensure your systems respond correctly to any grid event, protecting your assets and ensuring power supply continuity.',
    image: '/imagens/industries/utilities-e-infraestruturas.webp',
    alt: 'Utilities and Infrastructure',
    order: 'default',
    isVisible: false
  }
])

const industryRefs = ref([])
let observers = []

onMounted(() => {
  if (industryRefs.value) {
    industryRefs.value.forEach((section, index) => {
      if (!section) return
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !industries.value[index].isVisible) {
              industries.value[index].isVisible = true
            }
          })
        },
        {
          threshold: 0.2
        }
      )

      observer.observe(section)
      observers.push(observer)
    })
  }
})

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect())
})
</script>

<style scoped>
/* Smooth scroll offset for fixed header */
:global(html) {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-30px) translateX(20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(40px) translateX(-30px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(-25px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1) rotate(45deg);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1) rotate(45deg);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}
</style>