<template>
  <div class="min-h-screen bg-white flex items-center justify-center p-4">
    <div class="w-full max-w-md space-y-6">
      <!-- Título -->
      <h2 class="text-3xl font-bold text-center text-gray-800">Sign Up</h2>

      <!-- Formulario de teléfono -->
      <div class="space-y-4">
        <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <select class="bg-gray-100 px-3 py-2 text-gray-700 focus:outline-none">
            <option>+54</option>
            <option>+1</option>
            <option>+52</option>
          </select>
          <input
            type="tel"
            placeholder="Phone number"
            class="flex-1 px-3 py-2 focus:outline-none"
          />
        </div>

        <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </button>
      </div>

      <!-- Separador -->
      <div class="flex items-center">
        <div class="flex-1 border-t border-gray-300"></div>
        <span class="px-3 text-gray-500">or</span>
        <div class="flex-1 border-t border-gray-300"></div>
      </div>

      <!-- Botones de redes sociales -->
      <div class="grid grid-cols-2 gap-3">
        <button class="flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-2 hover:bg-gray-50 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.68-.423 5.023.271 5.315.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
          </svg>
          Apple
        </button>
        <button class="flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-2 hover:bg-gray-50 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          Google
        </button>
        <button class="flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-2 hover:bg-gray-50 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
          Facebook
        </button>
        <button class="flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-2 hover:bg-gray-50 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
          </svg>
          Email
        </button>
      </div>

      <!-- Texto de políticas -->
      <p class="text-center text-sm text-gray-500">
        By signing up, you agree to our <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
      </p>

      <!-- Enlace de login -->
      <p class="text-center text-sm text-gray-500">
        Already have an account? <a href="#" class="text-blue-600 hover:underline">Log In</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Lógica del componente (si es necesaria)
</script>