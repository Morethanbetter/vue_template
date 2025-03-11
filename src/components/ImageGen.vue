<!-- src/components/ImageGen.vue -->
<template>
  <div class="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
    <div class="space-y-4">
      <a-textarea
        v-model:value="prompt"
        :rows="3"
        placeholder="Describe the image you want to generate..."
        class="custom-input"
      />
      <a-button
        type="primary"
        :loading="isGenerating"
        @click="generateImage"
        class="custom-button w-full"
      >
        {{ isGenerating ? 'Generating...' : 'Generate Image' }}
      </a-button>
    </div>

    <div v-if="generatedImage" class="mt-6 p-4 bg-white/5 rounded-lg border border-white/20">
      <img :src="generatedImage" alt="Generated image" class="w-full rounded-lg shadow-lg" />
      <a-button
        @click="downloadImage"
        class="custom-button mt-4 w-full"
      >
        Download Image
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const prompt = ref('')
const isGenerating = ref(false)
const generatedImage = ref(null)

const generateImage = async () => {
  if (!prompt.value.trim() || isGenerating.value) return
  
  isGenerating.value = true
  try {
    // Implement actual image generation here
    setTimeout(() => {
      generatedImage.value = 'https://placeholder.com/400'
      isGenerating.value = false
    }, 2000)
  } catch (error) {
    console.error('Image generation failed:', error)
    isGenerating.value = false
  }
}

const downloadImage = () => {
  if (!generatedImage.value) return
  
  const link = document.createElement('a')
  link.href = generatedImage.value
  link.download = 'generated-image.png'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style scoped>
.custom-input {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: white !important;
}

.custom-input textarea {
  background: transparent !important;
  color: white !important;
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