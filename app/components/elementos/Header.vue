<template>
  <header
    class="bg-white text-black transition-all duration-300"
    :class="{ 'shadow-lg py-2': scrolled, 'shadow-md py-4': !scrolled }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="transition-transform duration-300 hover:scale-105">
          <a href="/">
            <img
              src="/svg/logo-maintech-solutions.svg"
              alt="Maintech Solutions Logo"
              class="h-12 sm:h-14 transition-all duration-300"
              :class="{ 'h-10': scrolled }"
            >
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <template v-for="item in menuItems" :key="item.name">
            <!-- Menu item with submenu -->
            <div v-if="item.hasSubmenu" class="relative group">
              <a
                :href="item.href"
                class="text-base font-semibold text-gray-700 hover:text-[#B07E09] transition-colors duration-300 relative flex items-center space-x-1"
                :class="{ 'text-[#B07E09]': item.active }"
              >
                <span>{{ item.name }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  class="transition-transform duration-300 group-hover:rotate-180"
                >
                  <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B07E09] transition-all duration-300 group-hover:w-full"></span>
              </a>

              <!-- Submenu Dropdown -->
              <div class="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a
                  v-for="subitem in item.submenu"
                  :key="subitem.name"
                  :href="subitem.href"
                  class="block px-5 py-3 text-sm font-semibold text-gray-700 hover:text-[#B07E09] hover:bg-gray-50 transition-all duration-200"
                >
                  {{ subitem.name }}
                </a>
              </div>
            </div>

            <!-- Regular menu item -->
            <a
              v-else
              :href="item.href"
              class="text-base font-semibold text-gray-700 hover:text-[#B07E09] transition-colors duration-300 relative group"
              :class="{ 'text-[#B07E09]': item.active }"
            >
              {{ item.name }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B07E09] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </template>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center space-x-4">
          <a
            href="/contact"
            class="relative bg-[#B07E09] text-white text-sm font-bold rounded-lg px-6 py-2.5 overflow-hidden group transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <span class="relative z-10">CONTACT US</span>
            <span class="absolute inset-0 bg-gradient-to-r from-[#8F6507] to-[#B07E09] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          </a>

          <!-- Language Selector -->
          <div class="relative" ref="languageDropdown">
            <button
              @click="toggleLanguageDropdown"
              class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <img
                :src="currentLanguageFlag"
                :alt="currentLanguage"
                class="w-6 h-6 rounded-sm object-cover border border-gray-200"
                @error="(e) => { console.error('Flag failed to load:', e.target.src); e.target.src = '/svg/flags/united-states.svg'; }"
              >
              <span class="text-sm font-bold text-[#B07E09]">{{ currentLanguage }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                class="transition-transform duration-300"
                :class="{ 'rotate-180': languageDropdownOpen }"
              >
                <path d="M1 1L5.5 5L10 1" stroke="#C4AC71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <!-- Language Dropdown -->
            <transition name="dropdown">
              <div
                v-if="languageDropdownOpen"
                class="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              >
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="selectLanguage(lang.code)"
                  class="w-full text-left px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3"
                  :class="{ 'text-[#B07E09] bg-gray-50': currentLanguage === lang.code }"
                >
                  <img
                    :src="lang.flag"
                    :alt="lang.name"
                    class="w-6 h-6 rounded-sm object-cover border border-gray-200"
                    @error="(e) => console.error('Failed to load flag:', lang.code, e.target.src)"
                  >
                  <span>{{ lang.name }}</span>
                </button>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              class="h-6 w-6 transition-transform duration-300"
              :class="{ 'rotate-90': mobileMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden mt-4 pb-4 border-t border-gray-200"
        >
          <nav class="flex flex-col space-y-2 pt-4">
            <template v-for="item in menuItems" :key="item.name">
              <!-- Menu item with submenu -->
              <div v-if="item.hasSubmenu">
                <button
                  @click="toggleSubmenu(item.name)"
                  class="w-full flex items-center justify-between text-base font-semibold text-gray-700 hover:text-[#B07E09] hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-300"
                  :class="{ 'text-[#B07E09] bg-gray-50': item.active }"
                >
                  <span>{{ item.name }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    class="transition-transform duration-300"
                    :class="{ 'rotate-180': openSubmenus[item.name] }"
                  >
                    <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>

                <!-- Mobile Submenu -->
                <transition name="submenu">
                  <div v-if="openSubmenus[item.name]" class="ml-4 mt-2 space-y-1">
                    <a
                      v-for="subitem in item.submenu"
                      :key="subitem.name"
                      :href="subitem.href"
                      class="block text-sm font-medium text-gray-600 hover:text-[#B07E09] hover:bg-gray-50 px-4 py-2.5 rounded-lg transition-all duration-200"
                      @click="closeMobileMenu"
                    >
                      {{ subitem.name }}
                    </a>
                  </div>
                </transition>
              </div>

              <!-- Regular menu item -->
              <a
                v-else
                :href="item.href"
                class="text-base font-semibold text-gray-700 hover:text-[#B07E09] hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-300"
                :class="{ 'text-[#B07E09] bg-gray-50': item.active }"
                @click="closeMobileMenu"
              >
                {{ item.name }}
              </a>
            </template>
          </nav>

          <div class="mt-4 px-4 space-y-3">
            <a
              href="/contact"
              class="relative block w-full text-center bg-[#B07E09] text-white text-sm font-bold rounded-lg px-6 py-3 overflow-hidden group transition-all duration-300 shadow-md hover:shadow-xl"
              @click="closeMobileMenu"
            >
              <span class="relative z-10">CONTACT US</span>
              <span class="absolute inset-0 bg-gradient-to-r from-[#8F6507] to-[#B07E09] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </a>

            <!-- Mobile Language Selector -->
            <div class="flex items-center justify-center space-x-2">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="selectLanguage(lang.code)"
                class="flex items-center space-x-2 px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-300"
                :class="currentLanguage === lang.code ? 'bg-[#B07E09] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              >
                <img
                  :src="lang.flag"
                  :alt="lang.name"
                  class="w-5 h-5 rounded-sm object-cover border border-gray-300"
                  @error="(e) => console.error('Mobile flag failed:', lang.code, e.target.src)"
                >
                <span>{{ lang.code }}</span>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const languageDropdownOpen = ref(false)
const languageDropdown = ref(null)

// Get current locale from route or default to 'en'
const getCurrentLocale = () => {
  const path = route.path
  if (path.startsWith('/fr')) return 'FR'
  if (path.startsWith('/es')) return 'ES'
  return 'EN'
}

const currentLanguage = ref(getCurrentLocale())

const menuItems = [
  { name: 'Home', href: '/', active: false },
  { name: 'About', href: '/about-us', active: false },
  {
    name: 'Industries',
    href: '/industries',
    active: false,
    hasSubmenu: true,
    submenu: [
      { name: 'Energy', href: '/industries#energia' },
      { name: 'Chemical & Petrochemical', href: '/industries#quimico-petroquimico' },
      { name: 'Hydrogen', href: '/industries#hidrogenio' },
      { name: 'Storage & Liquid Bulk Terminals', href: '/industries#armazenamento-terminais' },
      { name: 'Industrial Gases', href: '/industries#gases-industriais' },
      { name: 'Automotive', href: '/industries#automovel' },
      { name: 'Utilities & Infrastructure', href: '/industries#utilities-infraestruturas' }
    ]
  },
  {
    name: 'Services',
    href: '/services',
    active: false,
    hasSubmenu: true,
    submenu: [
      { name: 'FAT / SAT', href: '/services#fat-sat' },
      { name: 'Calibration', href: '/services#calibracao' },
      { name: 'Loop Check', href: '/services#loop-check' },
      { name: 'Pre-Commissioning', href: '/services#pre-comissionamento' },
      { name: 'Commissioning', href: '/services#comissionamento' },
      { name: 'Handover', href: '/services#handover' }
    ]
  }
]

const openSubmenus = ref({})

const languages = [
  { code: 'EN', name: 'English', flag: '/svg/flags/united-states.svg' },
  { code: 'FR', name: 'Français', flag: '/svg/flags/france.svg' },
  { code: 'ES', name: 'Español', flag: '/svg/flags/spain.svg' }
]

const currentLanguageFlag = computed(() => {
  const lang = languages.find(l => l.code === currentLanguage.value)
  const flagPath = lang ? lang.flag : '/svg/flags/united-states.svg'
  console.log('Current language:', currentLanguage.value, 'Flag path:', flagPath)
  return flagPath
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    languageDropdownOpen.value = false
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  openSubmenus.value = {}
}

const toggleSubmenu = (menuName) => {
  openSubmenus.value[menuName] = !openSubmenus.value[menuName]
}

const toggleLanguageDropdown = () => {
  languageDropdownOpen.value = !languageDropdownOpen.value
}

const selectLanguage = (lang) => {
  currentLanguage.value = lang
  languageDropdownOpen.value = false

  // Get current path without locale prefix
  let path = route.path
  path = path.replace(/^\/(en|fr|es)/, '')
  if (!path) path = '/'

  // Navigate to new locale
  const localeMap = { 'EN': 'en', 'FR': 'fr', 'ES': 'es' }
  const newLocale = localeMap[lang]

  if (newLocale === 'en') {
    // English is default, no prefix
    router.push(path)
  } else {
    router.push(`/${newLocale}${path}`)
  }
}

const handleClickOutside = (event) => {
  if (languageDropdown.value && !languageDropdown.value.contains(event.target)) {
    languageDropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Dropdown Animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile Menu Animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Submenu Animation */
.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.submenu-enter-from,
.submenu-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.submenu-enter-to,
.submenu-leave-from {
  opacity: 1;
  max-height: 500px;
  transform: translateY(0);
}

/* Contact Button Pulse Animation */
@keyframes subtle-pulse {
  0%, 100% {
    box-shadow: 0 4px 6px -1px rgba(176, 126, 9, 0.3), 0 2px 4px -1px rgba(176, 126, 9, 0.2);
  }
  50% {
    box-shadow: 0 8px 15px -3px rgba(176, 126, 9, 0.4), 0 4px 6px -2px rgba(176, 126, 9, 0.3);
  }
}

a[href="/contact"] {
  animation: subtle-pulse 2s ease-in-out infinite;
}

a[href="/contact"]:hover {
  animation: none;
}
</style>