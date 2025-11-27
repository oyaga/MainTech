<template>
  <div class="bg-gray-900">
    <div class="container mx-auto max-w-7xl py-20 sm:py-28 px-6 lg:px-8">
      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
        <!-- Info Column -->
        <div class="flex flex-col justify-center">
          <div class="mb-8">
            <p class="font-semibold text-amber-500">Our Location</p>
            <h2 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Come <span class="text-amber-400">Visit Us</span>
            </h2>
            <p class="mt-4 text-lg text-gray-300">
              Our office is located in the heart of Europe, ready to welcome you.
            </p>
          </div>
          
          <!-- Address and Hours Info -->
          <div class="space-y-6 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
            <!-- Address -->
            <div class="flex items-start space-x-4">
              <div class="bg-gray-900/70 rounded-lg p-3 flex-shrink-0">
                <img src="/svg/location.svg" alt="Location Icon" class="w-6 h-6 brightness-0 invert"/>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">Address</h3>
                <p class="mt-1 text-gray-300">Heilig-Hartstraat 31 Beerse, 2340 - Belgium</p>
              </div>
            </div>

            <!-- Hours -->
            <div class="flex items-start space-x-4">
              <div class="bg-gray-900/70 rounded-lg p-3 flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">Opening Hours</h3>
                <p class="mt-1 text-gray-300">Monday to Friday: <span class="font-medium text-white">8am to 6pm</span></p>
                <p class="mt-1 text-gray-300">Saturday: <span class="font-medium text-white">8am to 12pm</span></p>
                <p class="mt-1 text-red-400">Emergencies: <span class="font-medium">24h</span></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Map Column -->
        <div class="rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.302008899052!2d4.84643191576296!3d51.32522197960548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c12f4e5e5e5e5d%3A0x5d4e5e5e5e5e5e5e!2sHeilig-Hartstraat%2031%2C%202340%20Beerse%2C%20Belgium!5e0!3m2!1sen!2sus!4v1634816789123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this component with the new design.
</script>

<style scoped>
iframe {
  filter: grayscale(1) invert(0.9) contrast(0.8);
  transition: filter 0.3s ease;
}

iframe:hover {
  filter: grayscale(0) invert(0) contrast(1);
}
</style>