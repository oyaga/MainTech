<template>
  <section class="bg-gradient-to-b from-[#482C07] to-[#BE8100] text-white py-20">

    <div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 space-y-6">
        <div class="inline-block">
          <span class="bg-[#BE8100]/10 text-white border border-white/20 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            {{ $t('about.values.badge') }}
          </span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight">
          {{ $t('about.values.mainHeading') }}
        </h2>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          {{ $t('about.values.subheading') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card Precision -->
        <div class="group relative bg-[#1A1201] rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 shadow-xl">
          <div class="absolute inset-0 bg-gradient-to-b from-[#BE8100]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div class="relative z-10 flex flex-col items-center text-center gap-6">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#BE8100] to-[#AF8019] p-0.5 shadow-lg group-hover:shadow-[#BE8100]/20 transition-all duration-500 group-hover:scale-110">
              <div class="w-full h-full bg-zinc-900 rounded-2xl flex items-center justify-center">
                <img src="/svg/precisao.svg" alt="Precision" class="h-10 w-10 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity">
              </div>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white tracking-wide transition-colors">{{ $t('about.values.precision.title') }}</h3>
              <p class="text-white/80 leading-relaxed transition-colors">
                {{ $t('about.values.precision.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Card Reliability -->
        <div class="group relative bg-[#1A1201] rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 shadow-xl">
          <div class="absolute inset-0 bg-gradient-to-b from-[#BE8100]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div class="relative z-10 flex flex-col items-center text-center gap-6">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#BE8100] to-[#AF8019] p-0.5 shadow-lg group-hover:shadow-[#BE8100]/20 transition-all duration-500 group-hover:scale-110">
              <div class="w-full h-full bg-zinc-900 rounded-2xl flex items-center justify-center">
                <img src="/svg/fiabilidade.svg" alt="Reliability" class="h-10 w-10 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity">
              </div>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white tracking-wide transition-colors">{{ $t('about.values.reliability.title') }}</h3>
              <p class="text-white/80 leading-relaxed transition-colors">
                {{ $t('about.values.reliability.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Card Safety -->
        <div class="group relative bg-[#1A1201] rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 shadow-xl">
          <div class="absolute inset-0 bg-gradient-to-b from-[#BE8100]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div class="relative z-10 flex flex-col items-center text-center gap-6">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#BE8100] to-[#AF8019] p-0.5 shadow-lg group-hover:shadow-[#BE8100]/20 transition-all duration-500 group-hover:scale-110">
              <div class="w-full h-full bg-zinc-900 rounded-2xl flex items-center justify-center">
                <img src="/svg/seguranca.svg" alt="Safety" class="h-10 w-10 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity">
              </div>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white tracking-wide transition-colors">{{ $t('about.values.safety.title') }}</h3>
              <p class="text-white/80 leading-relaxed transition-colors">
                {{ $t('about.values.safety.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>