<template>
  <section class="bg-[#160A00] text-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div class="relative w-full max-w-[449px] h-[647px] rounded-3xl overflow-hidden mx-auto md:ml-auto md:mr-0">
          <img src="/imagens/imagem-about.webp" alt="About Maintech Solutions" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 56%, rgba(22, 10, 0, 1) 93%);"></div>
        </div>
        <div class="flex flex-col gap-[30px]">
          <div class="inline-block bg-[#FFB300] text-white text-sm font-medium tracking-wider rounded-full px-5 py-2 self-start">
            {{ $t('about.intro.badge') }}
          </div>
          <h2 class="text-3xl font-medium tracking-wider">
            {{ $t('about.intro.heading') }}
          </h2>
          <p class="text-lg font-light">
            {{ $t('about.intro.paragraph1') }}
            <br/><br/>
            {{ $t('about.intro.paragraph2') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>