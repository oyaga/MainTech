<template>
  <section class="relative py-24 bg-zinc-900 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#F8AF05] rounded-full blur-[120px] opacity-10"></div>
      <div class="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-[#FE7700] rounded-full blur-[100px] opacity-10"></div>
    </div>

    <div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-16">
      <!-- Header -->
      <div class="space-y-6">
        <div class="inline-block">
          <span class="bg-[#F8AF05]/10 text-[#F8AF05] border border-[#F8AF05]/20 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            Entre em contato
          </span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white leading-tight max-w-5xl mx-auto">
          Vamos Construir a Realidade do <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F8AF05] to-[#FE7700]">Seu Próximo Projeto</span>.
        </h2>
        <p class="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          A sua visão merece um parceiro de construção que a honre com uma
          execução impecável. Se está pronto para transformar a sua ambição na sua
          próxima realidade operacional, a nossa conversa está atrasada.
        </p>
      </div>

      <!-- Main CTAs -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a href="#" class="group relative flex items-center gap-3 bg-gradient-to-r from-[#FE7700] to-[#FFAF00] px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(254,119,0,0.4)] hover:-translate-y-1 overflow-hidden">
          <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <img src="/svg/email.svg" alt="Orçamento" class="h-6 w-6 brightness-0 invert relative z-10">
          <span class="relative z-10">Solicitar Orçamento</span>
        </a>
        <a href="#" class="group flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-[#25D366]/50 hover:text-[#25D366]">
          <img src="/svg/whatsapp-icon.svg" alt="WhatsApp" class="h-6 w-6 transition-transform duration-300 group-hover:scale-110 brightness-0 invert">
          <span>Conversar no WhatsApp</span>
        </a>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
        <!-- Phone Card -->
        <div class="group bg-zinc-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-[#F8AF05]/30 transition-all duration-300 hover:bg-zinc-800/80">
          <div class="flex flex-col items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#FE7700] to-[#FFAF00] p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <img src="/svg/phone.svg" alt="Telefone" class="w-full h-full object-contain brightness-0 invert">
            </div>
            <div class="space-y-1">
              <p class="text-zinc-400 text-sm font-medium uppercase tracking-wide">Telefone</p>
              <p class="text-xl font-bold text-white">+33 492 02 13 43</p>
            </div>
          </div>
        </div>

        <!-- Email Card -->
        <div class="group bg-zinc-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-[#F8AF05]/30 transition-all duration-300 hover:bg-zinc-800/80">
          <div class="flex flex-col items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#FE7700] to-[#FFAF00] p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <img src="/svg/email.svg" alt="Email" class="w-full h-full object-contain brightness-0 invert">
            </div>
            <div class="space-y-1">
              <p class="text-zinc-400 text-sm font-medium uppercase tracking-wide">E-mail</p>
              <p class="text-xl font-bold text-white break-all">contato@maintechsolutions.be</p>
            </div>
          </div>
        </div>

        <!-- Support Card -->
        <div class="group bg-zinc-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-[#F8AF05]/30 transition-all duration-300 hover:bg-zinc-800/80">
          <div class="flex flex-col items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#FE7700] to-[#FFAF00] p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <img src="/svg/whatsapp-icon.svg" alt="Atendimento" class="w-full h-full object-contain brightness-0 invert">
            </div>
            <div class="space-y-1">
              <p class="text-zinc-400 text-sm font-medium uppercase tracking-wide">Atendimento</p>
              <p class="text-xl font-bold text-white">24h por dia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>