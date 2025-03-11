<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-gradient">
    <div class="flex h-screen">
      <!-- Left Sidebar -->
      <div class="w-64 bg-white/10 backdrop-blur-sm border-r border-purple-200/20">
        <div class="p-4 border-b border-purple-200/20">
          <h1 class="text-2xl font-bold text-white">LLM Assistant</h1>
        </div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          class="custom-menu"
          @select="handleMenuSelect"
        >
          <a-menu-item key="chat">
            <template #icon>
              <message-outlined />
            </template>
            Text Chat
          </a-menu-item>
          <a-menu-item key="image">
            <template #icon>
              <picture-outlined />
            </template>
            Image Generation
          </a-menu-item>
          <a-menu-item key="tts">
            <template #icon>
              <sound-outlined />
            </template>
            Text to Speech
          </a-menu-item>
          <a-menu-item key="config">
            <template #icon>
              <setting-outlined />
            </template>
            Configuration
          </a-menu-item>
        </a-menu>
      </div>

      <!-- Right Content Area -->
      <div class="flex-1 overflow-hidden">
        <div class="h-full p-6">
          <keep-alive>
            <component :is="currentComponent"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  MessageOutlined,
  PictureOutlined,
  SoundOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'
import TextChat from './components/TextChat.vue'
import ImageGen from './components/ImageGen.vue'
import TextToSpeech from './components/TextToSpeech.vue'
import ConfigPanel from './components/ConfigPanel.vue'

const currentTab = ref('chat')
const selectedKeys = ref(['chat'])

const tabs = [
  { id: 'chat', name: 'Text Chat', component: TextChat },
  { id: 'image', name: 'Image Generation', component: ImageGen },
  { id: 'tts', name: 'Text to Speech', component: TextToSpeech },
  { id: 'config', name: 'Configuration', component: ConfigPanel }
]

const currentComponent = computed(() => {
  const tab = tabs.find(t => t.id === currentTab.value)
  return tab ? tab.component : null
})

const handleMenuSelect = ({ key }) => {
  currentTab.value = key
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.bg-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%);
}

/* Custom Ant Design Menu Styles */
.custom-menu {
  background: transparent !important;
}

.ant-menu {
  color: white !important;
  border-right: none !important;
}

.ant-menu-item {
  color: rgba(255, 255, 255, 0.8) !important;
  margin: 4px 8px !important;
  border-radius: 6px !important;
}

.ant-menu-item:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.1) !important;
}

.ant-menu-item-selected {
  background: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
}

.ant-menu-item-icon {
  color: inherit !important;
}

/* Ensuring all components have proper text color on the gradient background */
.text-gray-600 {
  color: rgba(255, 255, 255, 0.8) !important;
}

.text-gray-900 {
  color: white !important;
}
</style>