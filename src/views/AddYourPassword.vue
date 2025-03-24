<template>
    <div class="min-h-screen bg-white flex justify-center p-4 sm:p-6">
      <div class="w-full max-w-md space-y-6 md:space-y-8">
        <!-- Header con botón de retroceso y título -->
        <div class="relative flex items-center justify-center mb-6">
          <button 
            @click="goBack"
            class="absolute left-0 p-2 rounded-full hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 class="text-lg font-[500] text-gray-800 md:text-xl">Add your password</h2>
        </div>
        
        <!-- Subtítulo -->
        <p class="font-bold text-sm text-gray-600 md:text-base">Password</p>
  
       <!-- Campo de contraseña con toggle -->
       <div class="relative">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Enter your password"
          class="w-full h-14 px-4 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
        >
        <button
          @click="showPassword = !showPassword"
          type="button"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>

      <p class="font-thin text-xs text-gray-600 md:text-sm -mt-1 mb-1">
        Must be 8 or more characters and contain at least 1 number and 1 special character
      </p>
  
        <!-- Botones -->
        <div class="flex flex-col gap-3 mt-50">
          <button
            class="w-full text-md bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-300 disabled:text-gray-500"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
    import { ref } from 'vue';
import { useRouter } from 'vue-router';


    const password = ref('')
    const showPassword = ref(false)

    const router = useRouter()
    const goBack = () => {
    router.go(-1) // Navega a la página anterior
    }
</script>