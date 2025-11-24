<template>
  <section class="bg-[#AF8019] py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-[#D99B0A] rounded-3xl text-center py-6 mb-12">
        <a href="tel:+33492021343" class="text-white text-4xl font-black">Ligue +33 492 02 13 43 ou Envie Mensagem</a>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-[#B07E09] text-white p-8 rounded-lg">
          <h3 class="text-2xl font-semibold mb-4">Contact Information</h3>
          <p class="mb-4">Say something to start a live chat!</p>

          <!-- Phone -->
          <div class="flex items-center mb-4">
            <div class="w-6 h-6 mr-2 flex-shrink-0">
              <img src="/svg/phone.svg" alt="Phone" class="w-full h-full object-contain brightness-0 invert">
            </div>
            <p>+33 492 02 13 43</p>
          </div>

          <!-- Email -->
          <div class="flex items-center mb-4">
            <div class="w-6 h-6 mr-2 flex-shrink-0">
              <img src="/svg/email.svg" alt="Email" class="w-full h-full object-contain brightness-0 invert">
            </div>
            <p>contato@maintech.be</p>
          </div>

          <!-- Location -->
          <div class="flex items-center">
            <div class="w-6 h-6 mr-2 flex-shrink-0">
              <svg class="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
            </div>
            <p>Heilig-Hartstraat 31 Beerse 2340 - Bélgica</p>
          </div>
        </div>
        <div>
          <form class="grid grid-cols-1 gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" class="p-3 border rounded">
              <input type="text" placeholder="Last Name" class="p-3 border rounded">
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="email" placeholder="Email" class="p-3 border rounded">
              <input type="tel" placeholder="Phone Number" class="p-3 border rounded">
            </div>
            <div>
              <textarea placeholder="Write your message.." class="w-full p-3 border rounded" rows="4"></textarea>
            </div>
            <div>
              <button type="submit" class="bg-[#B07E09] text-white rounded-md py-3 px-8">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>