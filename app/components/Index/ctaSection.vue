<template>
  <section class="bg-[#AF8019] py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-[#D99B0A] rounded-3xl text-center py-6 mb-12">
        <a href="tel:+32492846233" class="text-white text-4xl font-black">{{ $t('home.cta.heading') }}</a>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-[#B07E09] text-white p-8 rounded-lg">
          <h3 class="text-2xl font-semibold mb-4">{{ $t('contact.hero.mainHeading') }}</h3>
          <p class="mb-4">{{ $t('contact.hero.subheading') }}</p>

          <!-- Phone -->
          <div class="flex items-center mb-4">
            <div class="w-6 h-6 mr-2 flex-shrink-0">
              <img src="/svg/phone.svg" alt="Phone" class="w-full h-full object-contain brightness-0 invert">
            </div>
            <p>{{ $t('contact.hero.phoneNumber') }}</p>
          </div>

          <!-- Email -->
          <div class="flex items-center mb-4">
            <div class="w-6 h-6 mr-2 flex-shrink-0">
              <img src="/svg/email.svg" alt="Email" class="w-full h-full object-contain brightness-0 invert">
            </div>
            <p>{{ $t('contact.hero.emailAddress').replace("{'@'}", '@') }}</p>
          </div>

          <!-- Location -->
          <div class="flex items-center">
            <div class="w-6 h-6 mr-2 flex-shrink-0">
              <svg class="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
            </div>
            <p>{{ $t('contact.map.addressText') }}</p>
          </div>
        </div>
        <div>
          <form class="grid grid-cols-1 gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" :placeholder="$t('contact.form.fullName').replace(' *', '')" class="p-3 border rounded">
              <input type="text" :placeholder="$t('contact.form.company')" class="p-3 border rounded">
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="email" :placeholder="$t('contact.form.email').replace(' *', '')" class="p-3 border rounded">
              <input type="tel" :placeholder="$t('contact.form.phone').replace(' *', '')" class="p-3 border rounded">
            </div>
            <div>
              <textarea :placeholder="$t('contact.form.messagePlaceholder')" class="w-full p-3 border rounded" rows="4"></textarea>
            </div>
            <div>
              <button type="submit" class="bg-[#B07E09] text-white rounded-md py-3 px-8">{{ $t('buttons.sendMessage') }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>