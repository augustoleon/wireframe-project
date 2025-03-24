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
        <h2 class="text-lg font-[500] text-gray-800 md:text-xl">Verify your mobile number</h2>
      </div>
      
      <!-- Subtítulo -->
      <p class="font-bold text-sm text-gray-600 md:text-base">Please enter the code we sent to +541165559726</p>

      <!-- 4 inputs para el código -->
      <div class="grid grid-cols-4 gap-2 w-full">
        <input
          v-for="i in 4"
          :key="i"
          v-model="code[i-1]"
          type="number"
          maxlength="1"
          class="w-full h-10 text-3xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          @input="handleInput(i-1, $event)"
        />
      </div>


      <!-- Botones -->
      <div class="flex flex-col gap-3 mt-50">
        <button
          @click="verify"
          :disabled="!isCodeComplete"
          class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-300 disabled:text-gray-500"
        >
          Continue
        </button>
        <button
          @click="resend"
          class="w-full border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-50 transition font-medium"
        >
          Resend verification code
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const code = ref(['','','',''])

// Verifica si todos los dígitos están completos
const isCodeComplete = computed(() => 
  code.value.every(digit => digit !== '')
)

// Maneja el input y auto-avanza
const handleInput = (index: number, event: Event) => {
  const input = event.target as HTMLInputElement
  const value = input.value.replace(/\D/g, '') // Solo números
  code.value[index] = value.slice(-1) // Toma el último dígito
  
  // Auto-focus al siguiente
  if (value && index < 3) {
    const nextInput = document.querySelectorAll('input')[index + 1] as HTMLInputElement
    nextInput?.focus()
  }
}

const verify = () => {
  if (isCodeComplete.value) {
    router.push('/') // Redirige al home después de verificar
  }
}

const resend = () => {
  code.value = ['','','',''] // Resetea el código
  document.querySelectorAll('input')[0]?.focus() // Focus al primer input
}

const goBack = () => {
  router.go(-1) // Navega a la página anterior
}
</script>