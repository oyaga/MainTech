<template>
  <div class="bg-[#160a00] relative w-full py-24 overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.03]"
           style="background-image: radial-gradient(#ffb300 1px, transparent 1px); background-size: 32px 32px;">
      </div>
      
      <!-- Gradient Blobs -->
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ffb300] rounded-full mix-blend-screen filter blur-[128px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ffb300] rounded-full mix-blend-screen filter blur-[128px] opacity-10 translate-x-1/2 translate-y-1/2"></div>
    </div>

    <!-- Vertical Center Line -->
    <div class="absolute bg-gradient-to-b from-[#ffb300]/20 via-[#d9d9d9] to-[#ffb300]/20 h-full left-1/2 top-0 w-[2px] -translate-x-1/2"></div>

    <div class="container mx-auto px-4 max-w-7xl">
      <div
        v-for="(service, index) in services"
        :key="index"
        :id="service.id"
        class="relative mb-24 last:mb-0 scroll-mt-20"
      >
        <div class="flex items-center" :class="service.align === 'left' ? 'justify-start' : 'justify-end'">
          <!-- Service Card -->
          <div class="w-full md:w-1/2" :class="service.align === 'left' ? 'md:pr-16' : 'md:pl-16'">
            <div
              class="bg-gradient-to-br from-[#f4f0e5] to-[#e8e4d9] border-[#ffb300] rounded-[30px] p-8 shadow-2xl hover:shadow-[#ffb300]/20 transition-all duration-500 hover:scale-[1.02]"
              :class="service.align === 'left' ? 'border-l-8' : 'border-r-8'"
            >
              <!-- Service Number -->
              <div class="flex items-center gap-4 mb-4">
                <span class="text-6xl font-bold text-[#ffb300]/30">{{ service.number }}</span>
                <div class="flex-1">
                  <h2 class="text-3xl font-bold text-[#160a00] leading-tight">{{ service.title }}</h2>
                  <p class="text-xl font-semibold text-[#ffb300] mt-1">{{ service.name }}</p>
                </div>
              </div>

              <!-- Description -->
              <p class="text-lg text-[#160a00]/80 leading-relaxed mb-6">{{ service.description }}</p>

              <!-- Items List -->
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

          <!-- Center Icon with SVG -->
          <div
            class="absolute left-1/2 -translate-x-1/2 hidden md:block z-10"
            :style="{ top: '50%', transform: 'translate(-50%, -50%)' }"
          >
            <div class="relative group">
              <!-- Background circle with glow effect -->
              <div class="absolute inset-0 bg-[#ffb300] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              <!-- Icon Container -->
              <div class="relative backdrop-blur-md bg-gradient-to-br from-[#ffb300]/20 to-[#ffb300]/10 border-2 border-[#ffb300]/40 rounded-full w-[120px] h-[120px] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                <img
                  :src="service.icon"
                  :alt="service.name"
                  class="w-16 h-16 object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <!-- Animated Pulse -->
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
    title: 'Guaranteed Compliance',
    number: '01',
    name: 'FAT / SAT',
    description: 'We act as your technical eyes even before work begins. We validate performance at the manufacturer and ensure integrity upon arrival at the plant.',
    items: [
      'Logic and hardware validation in factory',
      'Transport damage inspection',
      'Technical approval for installation',
    ],
    align: 'left',
    icon: '/svg/fat-sat.svg',
  },
  {
    id: 'calibracao',
    title: 'Precision that Avoids Losses',
    number: '02',
    name: 'Calibration',
    description: 'Precision is the basis of profit. We perform traceable adjustment of sensors and actuators, eliminating deviations that cause input waste.',
    items: [
      'RBC/Inmetro Certification',
      'Control loop adjustment',
      'Compliance with quality standards',
    ],
    align: 'right',
    icon: '/svg/calibracao-de-instrumentos.svg',
  },
  {
    id: 'loop-check',
    title: 'Fast and Safe Response',
    number: '03',
    name: 'Loop Check',
    description: 'We certify the integrity of every signal. We simulate field-room communication to ensure the system reacts in the correct fraction of a second.',
    items: [
      '0-100% signal simulation',
      'Alarm and interlock verification',
      'Cabling fault correction',
    ],
    align: 'left',
    icon: '/svg/loop-check.svg',
  },
  {
    id: 'pre-comissionamento',
    title: 'Problem Anticipation',
    number: '04',
    name: 'Pre-Commissioning',
    description: 'We clear the path for success. We execute rigorous cold tests and aggressively manage the punch list to avoid delays in Start-up.',
    items: [
      'Punch List Management',
      'Rotation and megger testing',
      'Cold functional tests',
    ],
    align: 'right',
    icon: '/svg/Instruments.svg',
  },
  {
    id: 'comissionamento',
    title: 'Stable Operation Day 1',
    number: '05',
    name: 'Commissioning',
    description: 'The moment of truth. We conduct energization and tests with active process (Hot Commissioning), ensuring a safe and optimized production ramp-up.',
    items: [
      'Assisted start-up',
      'Loop Tuning',
      'Operational safety validation',
    ],
    align: 'left',
    icon: '/svg/start-up.svg',
  },
  {
    id: 'handover',
    title: 'Total Asset Control',
    number: '06',
    name: 'Handover',
    description: 'Intelligence transfer. We deliver the plant with updated and real (As-Built) documentation, empowering your team to operate with full autonomy.',
    items: [
      'Complete and organized Data Books',
      'Verified As-Built drawings',
      'Operation and maintenance training',
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