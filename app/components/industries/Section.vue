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
                A Maintech Solutions
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
    title: 'Energia',
    description: 'Somos especialistas no comissionamento de centrais de ciclo combinado e outras unidades de produção de energia. O nosso processo rigoroso de testes e ativação controlada garante arranques rápidos, seguros e otimizados, maximizando a sua capacidade de resposta às exigências do mercado energético.',
    image: '/imagens/industries/energia.webp',
    alt: 'Energia',
    order: 'default',
    isVisible: false
  },
  {
    id: 'quimico-petroquimico',
    title: 'Químico e Petroquímico',
    description: 'Temos um profundo conhecimento em comissionamento de Sistemas Instrumentados de Segurança (SIS) e instrumentação para áreas classificadas. Asseguramos que cada malha de controlo e sistema de segurança da sua planta esteja perfeitamente calibrado e validado, garantindo a proteção das suas pessoas e dos seus ativos.',
    image: '/imagens/industries/quimico-e-pretroquimico.webp',
    alt: 'Químico e Petroquímico',
    order: 'reversed',
    isVisible: false
  },
  {
    id: 'hidrogenio',
    title: 'Hidrogénio',
    description: 'Estamos na vanguarda da transição energética, com experiência na instrumentação precisa que a economia do hidrogénio exige. Desde a produção até ao armazenamento, comissionamos os seus sistemas para garantir um manuseamento seguro, medições exatas e uma operação fiável.',
    image: '/imagens/industries/hidrogenio.webp',
    alt: 'Hidrogénio',
    order: 'default',
    isVisible: false
  },
  {
    id: 'armazenamento-terminais',
    title: 'Armazenamento e Terminais de Granéis Líquidos',
    description: 'A nossa experiência abrange desde a calibração de sistemas de medição de fluxo e nível até ao comissionamento de sistemas de automação de terminais (TAS). Garantimos que as suas operações de armazenamento e transferência sejam precisas, seguras e eficientes.',
    image: '/imagens/industries/armazenamento-e-terminais.webp',
    alt: 'Armazenamento e Terminais de Granéis Líquidos',
    order: 'reversed',
    isVisible: false
  },
  {
    id: 'gases-industriais',
    title: 'Gases Industriais',
    description: 'Realizamos a verificação e comissionamento meticulosos de toda a cadeia de instrumentação, desde sensores de pureza a válvulas de controlo, assegurando que a sua produção e distribuição de gases industriais opere sem falhas e com a máxima segurança.',
    image: '/imagens/industries/gases-industriais.webp',
    alt: 'Gases Industriais',
    order: 'default',
    isVisible: false
  },
  {
    id: 'automovel',
    title: 'Automóvel',
    description: 'Comissionamos os sistemas de "utilities" e a infraestrutura de controlo que são a espinha dorsal da sua fábrica. Asseguramos que a energia e os fluidos cheguem aos seus robôs e linhas de montagem com a fiabilidade necessária para evitar paragens de produção dispendiosas.',
    image: '/imagens/industries/automovel.webp',
    alt: 'Automóvel',
    order: 'reversed',
    isVisible: false
  },
  {
    id: 'utilities-infraestruturas',
    title: 'Utilities e Infraestruturas',
    description: 'Somos especialistas no comissionamento de sistemas de proteção e controlo em subestações de média e alta tensão. Garantimos que os seus sistemas respondam corretamente a qualquer evento na rede, protegendo os seus ativos e assegurando a continuidade do fornecimento de energia.',
    image: '/imagens/industries/utilities-e-infraestruturas.webp',
    alt: 'Utilities e Infraestruturas',
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