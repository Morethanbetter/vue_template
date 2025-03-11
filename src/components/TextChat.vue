<!-- src/components/TextChat.vue -->
<template>
  <div class="flex flex-col h-full bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <div v-for="(message, index) in messages" :key="index" 
           class="flex" :class="message.role === 'user' ? 'justify-end' : 'justify-start'">
        <div class="max-w-[70%] rounded-lg p-3"
             :class="message.role === 'user' ? 'bg-purple-600/80 text-white' : 'bg-white/20 text-white'">
          {{ message.content }}
        </div>
      </div>
    </div>
    <div class="border-t border-white/20 p-4">
      <div class="flex space-x-2">
        <a-input 
          v-model:value="userInput" 
          @pressEnter="sendMessage"
          placeholder="Type your message..." 
          class="custom-input flex-1"
        />
        <a-button 
          type="primary" 
          @click="sendMessage" 
          class="custom-button"
        >
          Send
        </a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const userInput = ref('')
const messages = ref([])

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  const userMessage = {
    role: 'user',
    content: userInput.value
  }
  messages.value.push(userMessage)

  // Simulate AI response (Replace with actual API call)
  const aiMessage = {
    role: 'assistant',
    content: 'This is a simulated response. Implement actual API call here.'
  }
  messages.value.push(aiMessage)
  
  userInput.value = ''
}
</script>

<style scoped>
.custom-input {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: white !important;
}

.custom-input input {
  background: transparent !important;
  color: white !important;
}

.custom-input::placeholder {
  color: rgba(255, 255, 255, 0.5) !important;
}

.custom-button {
  background: rgba(255, 255, 255, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  color: white !important;
}

.custom-button:hover {
  background: rgba(255, 255, 255, 0.3) !important;
}
</style>