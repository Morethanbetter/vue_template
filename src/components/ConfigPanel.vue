<!-- src/components/ConfigPanel.vue -->
<template>
  <div class="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
    <h2 class="text-2xl font-bold mb-6 text-white">Service Configuration</h2>
    <div class="space-y-6">
      <div class="p-4 bg-white/5 rounded-lg border border-white/20">
        <h3 class="text-lg font-semibold mb-4 text-white">Text Chat Service</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-white mb-1">Provider</label>
            <a-select
              v-model:value="textConfig.provider"
              class="custom-select w-full"
            >
              <a-select-option value="openai">OpenAI</a-select-option>
              <a-select-option value="anthropic">Anthropic</a-select-option>
            </a-select>
          </div>
          <div>
            <label class="block text-sm font-medium text-white mb-1">API Key</label>
            <a-input-password
              v-model:value="textConfig.apiKey"
              class="custom-input"
            />
          </div>
        </div>
      </div>

      <div class="p-4 bg-white/5 rounded-lg border border-white/20">
        <h3 class="text-lg font-semibold mb-4 text-white">Image Generation Service</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-white mb-1">Provider</label>
            <a-select
              v-model:value="imageConfig.provider"
              class="custom-select w-full"
            >
              <a-select-option value="openai">OpenAI DALL-E</a-select-option>
              <a-select-option value="stability">Stability AI</a-select-option>
            </a-select>
          </div>
          <div>
            <label class="block text-sm font-medium text-white mb-1">API Key</label>
            <a-input-password
              v-model:value="imageConfig.apiKey"
              class="custom-input"
            />
          </div>
        </div>
      </div>

      <div class="p-4 bg-white/5 rounded-lg border border-white/20">
        <h3 class="text-lg font-semibold mb-4 text-white">Text-to-Speech Service</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-white mb-1">Provider</label>
            <a-select
              v-model:value="ttsConfig.provider"
              class="custom-select w-full"
            >
              <a-select-option value="openai">OpenAI</a-select-option>
              <a-select-option value="elevenlabs">ElevenLabs</a-select-option>
            </a-select>
          </div>
          <div>
            <label class="block text-sm font-medium text-white mb-1">API Key</label>
            <a-input-password
              v-model:value="ttsConfig.apiKey"
              class="custom-input"
            />
          </div>
        </div>
      </div>

      <a-button
        type="primary"
        @click="saveConfig"
        class="custom-button w-full"
      >
        Save Configuration
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const textConfig = ref({
  provider: 'openai',
  apiKey: ''
})

const imageConfig = ref({
  provider: 'openai',
  apiKey: ''
})

const ttsConfig = ref({
  provider: 'openai',
  apiKey: ''
})

const saveConfig = () => {
  store.commit('updateConfig', {
    text: textConfig.value,
    image: imageConfig.value,
    tts: ttsConfig.value
  })
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

:deep(.ant-select-selector) {
  background: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: white !important;
}

:deep(.ant-select-selection-item) {
  color: white !important;
}

:deep(.ant-input-password-icon) {
  color: rgba(255, 255, 255, 0.8) !important;
}
</style>