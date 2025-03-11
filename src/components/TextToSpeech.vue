<!-- src/components/TextToSpeech.vue -->
<template>
  <div class="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
    <div class="space-y-4">
      <a-textarea
        v-model:value="text"
        :rows="4"
        placeholder="Enter text to convert to speech..."
        class="custom-input"
      />
      
      <div class="space-y-2">
        <label class="block text-sm font-medium text-white">Voice Selection</label>
        <a-select
          v-model:value="selectedVoice"
          class="custom-select w-full"
        >
          <a-select-option value="voice1">Voice 1 (Male)</a-select-option>
          <a-select-option value="voice2">Voice 2 (Female)</a-select-option>
        </a-select>
      </div>

      <a-button
        type="primary"
        :loading="isGenerating"
        @click="generateSpeech"
        class="custom-button w-full"
      >
        {{ isGenerating ? 'Generating...' : 'Generate Speech' }}
      </a-button>
    </div>

    <div v-if="audioUrl" class="mt-6 p-4 bg-white/5 rounded-lg border border-white/20">
      <audio controls class="w-full">
        <source :src="audioUrl" type="audio/mp3">
        Your browser does not support the audio element.
      </audio>
      <a-button
        @click="downloadAudio"
        class="custom-button mt-4 w-full"
      >
        Download Audio
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const text = ref('')
const selectedVoice = ref('voice1')
const isGenerating = ref(false)
const audioUrl = ref(null)

const generateSpeech = async () => {
  if (!text.value.trim() || isGenerating.value) return
  
  isGenerating.value = true
  try {
    // Implement actual TTS generation here
    setTimeout(() => {
      audioUrl.value = 'data:audio/mp3;base64,...'
      isGenerating.value = false
    }, 2000)
  } catch (error) {
    console.error('Speech generation failed:', error)
    isGenerating.value = false
  }
}

const downloadAudio = () => {
  if (!audioUrl.value) return
  
  const link = document.createElement('a')
  link.href = audioUrl.value
  link.download = 'generated-speech.mp3'
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

.custom-select {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
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