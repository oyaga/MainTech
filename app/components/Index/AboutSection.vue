<template>
  <section class="bg-[#1A1201] text-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
        <div class="relative w-full max-w-[449px] h-[647px] rounded-3xl overflow-hidden md:order-first mx-auto md:justify-self-end">
          <img src="/imagens/imagem-about.webp" alt="About Maintech Solutions" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(26, 18, 1, 1) 96%);"></div>
        </div>
        <div class="flex flex-col gap-4 md:order-last">
          <div class="inline-block bg-[#FFB300] text-white text-sm font-light tracking-wider rounded-full px-6 py-1 self-start">
            A Maintech Solutions
          </div>
          <h2 class="text-5xl font-bold">
            Num mundo de variáveis, a precisão não é uma opção. É a única resposta.
          </h2>
          <p class="text-lg font-light">
            A Maintech Solutions nasceu em 2022 com um propósito claro: oferecer uma nova abordagem ao comissionamento industrial. Vimos a necessidade de um parceiro que combinasse décadas de experiência técnica com a agilidade de uma estrutura moderna e flexível. Em vez de burocracia, oferecemos comunicação direta. Em vez de demoras, tomamos decisões rápidas.
            <br/><br/>
            A nossa força está em integrar perfeitamente a gestão com a execução no terreno, resultando em menos falhas e maior eficiência. Somos os especialistas que o acompanham em cada passo, garantindo que a sua visão se concretiza sem sobressaltos.
          </p>
          <a href="/about-us" class="bg-[#FFB300] text-white text-sm font-light tracking-wider rounded-full px-8 py-3 self-start flex items-center gap-2">
            Descubra mais
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
              <path d="M1 1L5 5.5L1 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
