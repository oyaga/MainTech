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
              <div
                class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group opacity-0 translate-y-8"
                :class="{ 'opacity-100 translate-y-0': isVisible }"
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
                  <img src="/svg/energy.svg" alt="Energy" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
                </div>

                <h3 class="text-3xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">{{ $t('home.industries.energy.title') }}</h3>

                <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {{ $t('home.industries.energy.description') }}
                </p>

                <ul class="space-y-2 text-sm z-10">
                  <li
                    v-for="(item, index) in $t('home.industries.energy.items').split(', ')"
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
                    v-for="(tag, index) in $t('home.industries.energy.tags').split(', ')"
                    :key="index"
                    class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]"
                  >{{ tag }}</span>
                </div>

                <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
                  <p class="text-[#FFB300] text-xs font-bold mb-1">{{ $t('home.industries.idealForLabel') }}</p>
                  <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">{{ $t('home.industries.energy.idealFor') }}</p>
                </div>
              </div>

              <!-- Card 2: Chemical & Petrochemical -->
              <div
                class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group opacity-0 translate-y-8"
                :class="{ 'opacity-100 translate-y-0': isVisible }"
                style="transition-delay: 150ms"
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
                  <img src="/svg/chemicals.svg" alt="Chemical" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
                </div>

                <h3 class="text-2xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">{{ $t('home.industries.chemical.title') }}</h3>

                <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {{ $t('home.industries.chemical.description') }}
                </p>

                <ul class="space-y-2 text-sm z-10">
                  <li
                    v-for="(item, index) in $t('home.industries.chemical.items').split(', ')"
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
                    v-for="(tag, index) in $t('home.industries.chemical.tags').split(', ')"
                    :key="index"
                    class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]"
                  >{{ tag }}</span>
                </div>

                <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
                  <p class="text-[#FFB300] text-xs font-bold mb-1">{{ $t('home.industries.idealForLabel') }}</p>
                  <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">{{ $t('home.industries.chemical.idealFor') }}</p>
                </div>
              </div>

              <!-- Card 3: Hydrogen -->
              <div
                class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group opacity-0 translate-y-8"
                :class="{ 'opacity-100 translate-y-0': isVisible }"
                style="transition-delay: 300ms"
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
                  <img src="/svg/hydrogen.svg" alt="Hydrogen" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
                </div>

                <h3 class="text-3xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">{{ $t('home.industries.hydrogen.title') }}</h3>

                <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {{ $t('home.industries.hydrogen.description') }}
                </p>

                <ul class="space-y-2 text-sm z-10">
                  <li
                    v-for="(item, index) in $t('home.industries.hydrogen.items').split(', ')"
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
                    v-for="(tag, index) in $t('home.industries.hydrogen.tags').split(', ')"
                    :key="index"
                    class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]"
                  >{{ tag }}</span>
                </div>

                <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
                  <p class="text-[#FFB300] text-xs font-bold mb-1">{{ $t('home.industries.idealForLabel') }}</p>
                  <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">{{ $t('home.industries.hydrogen.idealFor') }}</p>
                </div>
              </div>

            </div>

            <!-- Slide 2: Second page of cards -->
            <div class="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
              <!-- Card 4: Storage & Terminals -->
              <div
                class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group"
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
                  <img src="/svg/Storage.svg" alt="Storage" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
                </div>

                <h3 class="text-xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">{{ $t('home.industries.storage.title') }}</h3>

                <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {{ $t('home.industries.storage.description') }}
                </p>

                <ul class="space-y-2 text-sm z-10">
                  <li
                    v-for="(item, index) in $t('home.industries.storage.items').split(', ')"
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
                    v-for="(tag, index) in $t('home.industries.storage.tags').split(', ')"
                    :key="index"
                    class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]"
                  >{{ tag }}</span>
                </div>

                <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
                  <p class="text-[#FFB300] text-xs font-bold mb-1">{{ $t('home.industries.idealForLabel') }}</p>
                  <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">{{ $t('home.industries.storage.idealFor') }}</p>
                </div>
              </div>
              <!-- Card 5: Industrial Gases -->
              <div
                class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group"
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
                  <img src="/svg/industrial-gases.svg" alt="Industrial Gases" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
                </div>

                <h3 class="text-3xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">{{ $t('home.industries.gases.title') }}</h3>

                <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {{ $t('home.industries.gases.description') }}
                </p>

                <ul class="space-y-2 text-sm z-10">
                  <li
                    v-for="(item, index) in $t('home.industries.gases.items').split(', ')"
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
                    v-for="(tag, index) in $t('home.industries.gases.tags').split(', ')"
                    :key="index"
                    class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]"
                  >{{ tag }}</span>
                </div>

                <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
                  <p class="text-[#FFB300] text-xs font-bold mb-1">{{ $t('home.industries.idealForLabel') }}</p>
                  <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">{{ $t('home.industries.gases.idealFor') }}</p>
                </div>
              </div>

              <!-- Card 6: Automotive -->
              <div
                class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group"
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
                  <img src="/svg/automotive.svg" alt="Automotive" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
                </div>

                <h3 class="text-3xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">{{ $t('home.industries.automotive.title') }}</h3>

                <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {{ $t('home.industries.automotive.description') }}
                </p>

                <ul class="space-y-2 text-sm z-10">
                  <li
                    v-for="(item, index) in $t('home.industries.automotive.items').split(', ')"
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
                    v-for="(tag, index) in $t('home.industries.automotive.tags').split(', ')"
                    :key="index"
                    class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]"
                  >{{ tag }}</span>
                </div>

                <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
                  <p class="text-[#FFB300] text-xs font-bold mb-1">{{ $t('home.industries.idealForLabel') }}</p>
                  <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">{{ $t('home.industries.automotive.idealFor') }}</p>
                </div>
              </div>

            </div>

            <!-- Slide 3: Third page of cards -->
            <div class="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
              <!-- Card 7: Utilities & Infrastructure -->
              <div
                class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group"
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
                  <img src="/svg/utilities.svg" alt="Utilities" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
                </div>

                <h3 class="text-2xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">{{ $t('home.industries.utilities.title') }}</h3>

                <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {{ $t('home.industries.utilities.description') }}
                </p>

                <ul class="space-y-2 text-sm z-10">
                  <li
                    v-for="(item, index) in $t('home.industries.utilities.items').split(', ')"
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
                    v-for="(tag, index) in $t('home.industries.utilities.tags').split(', ')"
                    :key="index"
                    class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]"
                  >{{ tag }}</span>
                </div>

                <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
                  <p class="text-[#FFB300] text-xs font-bold mb-1">{{ $t('home.industries.idealForLabel') }}</p>
                  <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">{{ $t('home.industries.utilities.idealFor') }}</p>
                </div>
              </div>

              <!-- Card 8: Energy (copy for infinite loop) -->
              <div
                class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group"
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
                  <img src="/svg/energy.svg" alt="Energy" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
                </div>

                <h3 class="text-3xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">{{ $t('home.industries.energy.title') }}</h3>

                <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {{ $t('home.industries.energy.description') }}
                </p>

                <ul class="space-y-2 text-sm z-10">
                  <li
                    v-for="(item, index) in $t('home.industries.energy.items').split(', ')"
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
                    v-for="(tag, index) in $t('home.industries.energy.tags').split(', ')"
                    :key="index"
                    class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]"
                  >{{ tag }}</span>
                </div>

                <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
                  <p class="text-[#FFB300] text-xs font-bold mb-1">{{ $t('home.industries.idealForLabel') }}</p>
                  <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">{{ $t('home.industries.energy.idealFor') }}</p>
                </div>
              </div>

              <!-- Card 9: Chemical & Petrochemical (copy for infinite loop) -->
              <div
                class="relative bg-gradient-to-br from-[#0D0A05] to-[#1A1201] rounded-2xl p-6 flex flex-col gap-5 border border-[#2A2318] overflow-hidden transition-all duration-500 hover:border-[#FFB300] hover:shadow-2xl hover:shadow-[#FFB300]/20 hover:-translate-y-2 group"
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
                  <img src="/svg/chemicals.svg" alt="Chemical" class="w-full h-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110">
                </div>

                <h3 class="text-2xl font-bold tracking-tight z-10 transition-colors duration-300 group-hover:text-[#FFB300]">{{ $t('home.industries.chemical.title') }}</h3>

                <p class="text-gray-400 text-sm leading-relaxed z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {{ $t('home.industries.chemical.description') }}
                </p>

                <ul class="space-y-2 text-sm z-10">
                  <li
                    v-for="(item, index) in $t('home.industries.chemical.items').split(', ')"
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
                    v-for="(tag, index) in $t('home.industries.chemical.tags').split(', ')"
                    :key="index"
                    class="px-4 py-1 border border-[#FFB300] text-[#FFB300] rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:bg-[#FFB300] hover:text-[#1A1201]"
                  >{{ tag }}</span>
                </div>

                <div class="mt-auto pt-4 border-t border-[#2A2318] z-10 transition-colors duration-300 group-hover:border-[#FFB300]/30">
                  <p class="text-[#FFB300] text-xs font-bold mb-1">{{ $t('home.industries.idealForLabel') }}</p>
                  <p class="text-gray-400 text-xs italic transition-colors duration-300 group-hover:text-gray-300">{{ $t('home.industries.chemical.idealFor') }}</p>
                </div>
              </div>
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
