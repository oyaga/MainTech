<template>
  <div class="bg-[#160a00] relative w-full py-24 overflow-hidden">
    <!-- Elementos Decorativos de Background -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.03]"
           style="background-image: radial-gradient(#ffb300 1px, transparent 1px); background-size: 32px 32px;">
      </div>
      
      <!-- Gradient Blobs -->
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ffb300] rounded-full mix-blend-screen filter blur-[128px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ffb300] rounded-full mix-blend-screen filter blur-[128px] opacity-10 translate-x-1/2 translate-y-1/2"></div>
    </div>

    <!-- Linha central vertical -->
    <div class="absolute bg-gradient-to-b from-[#ffb300]/20 via-[#d9d9d9] to-[#ffb300]/20 h-full left-1/2 top-0 w-[2px] -translate-x-1/2"></div>

    <div class="container mx-auto px-4 max-w-7xl">
      <div
        v-for="(service, index) in services"
        :key="index"
        :id="service.id"
        class="relative mb-24 last:mb-0 scroll-mt-20"
      >
        <div class="flex items-center" :class="service.align === 'left' ? 'justify-start' : 'justify-end'">
          <!-- Card do Serviço -->
          <div class="w-full md:w-1/2" :class="service.align === 'left' ? 'md:pr-16' : 'md:pl-16'">
            <div
              class="bg-gradient-to-br from-[#f4f0e5] to-[#e8e4d9] border-[#ffb300] rounded-[30px] p-8 shadow-2xl hover:shadow-[#ffb300]/20 transition-all duration-500 hover:scale-[1.02]"
              :class="service.align === 'left' ? 'border-l-8' : 'border-r-8'"
            >
              <!-- Número do serviço -->
              <div class="flex items-center gap-4 mb-4">
                <span class="text-6xl font-bold text-[#ffb300]/30">{{ service.number }}</span>
                <div class="flex-1">
                  <h2 class="text-3xl font-bold text-[#160a00] leading-tight">{{ service.title }}</h2>
                  <p class="text-xl font-semibold text-[#ffb300] mt-1">{{ service.name }}</p>
                </div>
              </div>

              <!-- Descrição -->
              <p class="text-lg text-[#160a00]/80 leading-relaxed mb-6">{{ service.description }}</p>

              <!-- Lista de itens -->
              <div class="bg-white/50 rounded-2xl p-6 backdrop-blur-sm">
                <ul class="space-y-3">
                  <li
                    v-for="(item, i) in service.items"
                    :key="i"
                    class="flex items-start gap-3 text-[#160a00]"
                  >
                    <svg class="w-6 h-6 text-[#ffb300] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="flex-1">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Ícone Central com SVG -->
          <div
            class="absolute left-1/2 -translate-x-1/2 hidden md:block z-10"
            :style="{ top: '50%', transform: 'translate(-50%, -50%)' }"
          >
            <div class="relative group">
              <!-- Círculo de fundo com efeito de brilho -->
              <div class="absolute inset-0 bg-[#ffb300] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              <!-- Container do ícone -->
              <div class="relative backdrop-blur-md bg-gradient-to-br from-[#ffb300]/20 to-[#ffb300]/10 border-2 border-[#ffb300]/40 rounded-full w-[120px] h-[120px] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                <img
                  :src="service.icon"
                  :alt="service.name"
                  class="w-16 h-16 object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <!-- Pulso animado -->
              <div class="absolute inset-0 rounded-full border-2 border-[#ffb300]/30 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    id: 'fat-sat',
    title: 'Conformidade Garantida',
    number: '01',
    name: 'FAT / SAT',
    description: 'Atuamos como seus olhos técnicos antes mesmo da obra começar. Validamos o desempenho no fabricante e garantimos a integridade na chegada à planta.',
    items: [
      'Validação de lógica e hardware em fábrica',
      'Inspeção de danos de transporte',
      'Aprovação técnica para instalação',
    ],
    align: 'left',
    icon: '/svg/fat-sat.svg',
  },
  {
    id: 'calibracao',
    title: 'Precisão que Evita Perdas',
    number: '02',
    name: 'Calibração',
    description: 'A precisão é a base do lucro. Realizamos o ajuste rastreável de sensores e atuadores, eliminando desvios que causam desperdício de insumos.',
    items: [
      'Certificação RBC/Inmetro',
      'Ajuste de malhas de controle',
      'Conformidade com normas de qualidade',
    ],
    align: 'right',
    icon: '/svg/calibracao-de-instrumentos.svg',
  },
  {
    id: 'loop-check',
    title: 'Resposta Rápida e Segura',
    number: '03',
    name: 'Loop Check',
    description: 'Certificamos a integridade de cada sinal. Simulamos a comunicação campo-sala para garantir que o sistema reaja na fração de segundo correta.',
    items: [
      'Simulação de sinais 0-100%',
      'Verificação de alarmes e intertravamentos',
      'Correção de falhas de cabeamento',
    ],
    align: 'left',
    icon: '/svg/loop-check.svg',
  },
  {
    id: 'pre-comissionamento',
    title: 'Antecipação de Problemas',
    number: '04',
    name: 'Pré-Comissionamento',
    description: 'Limpamos o caminho para o sucesso. Executamos testes a frio rigorosos e gerimos agressivamente a lista de pendências para evitar atrasos no Start-up.',
    items: [
      'Gestão de Punch List (Pendências)',
      'Testes de rotação e megagem',
      'Testes funcionais a frio',
    ],
    align: 'right',
    icon: '/svg/Instruments.svg',
  },
  {
    id: 'comissionamento',
    title: 'Operação Estável Dia 1',
    number: '05',
    name: 'Comissionamento',
    description: 'O momento da verdade. Conduzimos a energização e os testes com processo ativo (Hot Commissioning), garantindo uma rampa de produção segura e otimizada.',
    items: [
      'Partida assistida e assistida',
      'Sintonia de malhas (Tuning)',
      'Validação de segurança operacional',
    ],
    align: 'left',
    icon: '/svg/start-up.svg',
  },
  {
    id: 'handover',
    title: 'Controle Total do Ativo',
    number: '06',
    name: 'Handover',
    description: 'Transferência de inteligência. Entregamos a planta com documentação atualizada e real (As-Built), capacitando sua equipe para operar com autonomia total.',
    items: [
      'Data Books completos e organizados',
      'Desenhos As-Built verificados',
      'Treinamento de operação e manutenção',
    ],
    align: 'right',
    icon: '/svg/doc-handover.svg',
  },
];
</script>

<style scoped>
/* Smooth scroll offset for fixed header */
:global(html) {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}
</style>
