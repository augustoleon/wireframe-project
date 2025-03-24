<template>
  <div class="min-h-screen bg-white flex justify-center p-4 sm:p-6">
    <div class="w-full max-w-md space-y-6 md:space-y-8">
      <!-- Título - Aumenta tamaño en desktop -->
      <h2 class="text-lg font-[500] text-center text-gray-800 md:text-xl lg:text-2xl">Sign Up</h2>

      <!-- Formulario de teléfono -->
      <div class="space-y-3 md:space-y-4">
      <p class="font-bold text-sm text-gray-600 md:text-base">Enter your phone number</p>
    
      <div class="flex gap-2">
      <!-- Selector compacto de código de país -->
      <div class="relative w-24 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors focus-within:ring-2 focus-within:ring-blue-500">
        <select 
          v-model="selectedCountry"
          @change="updateFlag"
          class="w-full pl-8 pr-3 py-2 appearance-none focus:outline-none text-sm bg-white rounded-lg"
        >
          <option v-for="country in countries" :key="country.code" :value="country.code">
            {{ country.code }}
          </option>
        </select>
        <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg pointer-events-none">
          {{ selectedFlag }}
        </span>
      </div>

      <!-- Input de número telefónico -->
      <input
        v-model="phoneNumber"
        type="number"
        placeholder="Phone number"
        class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
        @input="checkInput"
      />
    </div>

    <p class="font-thin text-xs text-gray-600 md:text-sm -mt-1 mb-1">
      We will send you a verification code to this number.
    </p>
    
    <button 
      :disabled="!isPhoneNumberValid"
      class="w-full py-3 px-4 rounded-lg transition text-sm md:text-base md:py-4 font-medium"
      :class="{
        'bg-gray-300 text-gray-600 cursor-not-allowed': !isPhoneNumberValid,
        'bg-blue-600 text-white hover:bg-blue-700': isPhoneNumberValid
      }"
    >
      Sign Up
    </button>
  </div>
      <!-- Separador - Más espacio en desktop -->
      <div class="flex items-center my-4 md:my-6">
        <div class="flex-1 border-t border-gray-300"></div>
        <span class="px-3 text-gray-500 text-sm md:text-base">or</span>
        <div class="flex-1 border-t border-gray-300"></div>
      </div>

      <!-- Botones de redes sociales - Versión corregida -->
      <div class="flex flex-col gap-3 md:grid md:grid-cols-4 md:gap-4">
        <!-- Apple -->
        <button class="w-full flex items-center justify-start rounded-lg p-3 transition md:flex-col md:items-center md:justify-center md:gap-1"
                :class="{
                  'bg-gray-100 text-gray-800': true,
                  'md:py-3': true
                }">
          <svg class="w-5 h-5 mr-3 md:mr-0 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span class="flex-1 text-center md:text-xs md:flex-none">
            Sign up with Apple
          </span>
        </button>

        <!-- Google -->
        <button class="w-full flex items-center justify-start rounded-lg p-3 transition border border-gray-300 md:flex-col md:items-center md:justify-center md:gap-1"
                :class="{
                  'bg-white text-red-500': true,
                  'md:py-3': true
                }">
          <svg class="w-5 h-5 mr-3 md:mr-0 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          <span class="flex-1 text-center md:text-xs md:flex-none">
            Sign up with Google
          </span>
        </button>

        <!-- Facebook -->
        <button class="w-full flex items-center justify-start rounded-lg p-3 transition md:flex-col md:items-center md:justify-center md:gap-1"
                :class="{
                  'bg-blue-600 text-white': true,
                  'md:py-3': true
                }">
          <svg class="w-5 h-5 mr-3 md:mr-0 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
          <span class="flex-1 text-center md:text-xs md:flex-none">
            Sign up with Facebook
          </span>
        </button>

        <!-- Email -->
        <button class="w-full flex items-center justify-start rounded-lg p-3 transition border border-gray-300 md:flex-col md:items-center md:justify-center md:gap-1"
                :class="{
                  'bg-white text-blue-600': true,
                  'md:py-3': true
                }">
          <svg class="w-5 h-5 mr-3 md:mr-0 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span class="flex-1 text-center md:text-xs md:flex-none">
            Sign up with Email
          </span>
        </button>
      </div>


      <!-- Textos - Más legibles en desktop -->
      <div class="space-y-3 md:space-y-4">
        <p class="text-center text-sm text-gray-500 md:text-base">
          By continue you are agree to the Dishie's  <a href="#" class="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
        </p>

        <p class="text-center text-sm text-gray-800 md:text-base mt-6">
          Already a user? <a href="#" class="text-blue-600 hover:underline">Log In</a>
        </p>
        <p class="text-center text-sm text-gray-800 md:text-base">
          Not ready to sign up? <a href="#" class="text-blue-600 hover:underline">Guest mode</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const countries = ref([
  { code: '+54', flag: '🇦🇷' },
  { code: '+1', flag: '🇺🇸' },
  { code: '+52', flag: '🇲🇽' },
  { code: '+55', flag: '🇧🇷' },
  { code: '+56', flag: '🇨🇱' },
  { code: '+57', flag: '🇨🇴' },
]);

const selectedCountry = ref('+54');
const selectedFlag = ref('🇦🇷');
const phoneNumber = ref('');
const isPhoneNumberValid = ref(false);


const updateFlag = () => {
  const country = countries.value.find(c => c.code === selectedCountry.value);
  selectedFlag.value = country ? country.flag : '🇺🇳';
};

const checkInput = () => {
  isPhoneNumberValid.value = phoneNumber.value !== null && phoneNumber.value !== '';
};
</script>