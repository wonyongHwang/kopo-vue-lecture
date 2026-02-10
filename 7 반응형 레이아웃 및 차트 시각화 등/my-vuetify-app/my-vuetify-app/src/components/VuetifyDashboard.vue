<template>
    <v-app>
        <v-app-bar color="primary" density="compact">
            <v-toolbar-title> Vuetify Dashboard </v-toolbar-title>
            

             <v-switch v-model="isDark" :label="isDark ? '다크 모드' : '라이트 모드'"
             @change="toggleTheme"></v-switch>
        </v-app-bar>

        <v-main>
        <v-container class="py-6">
            <v-row>
            <v-col cols="12" md="4" v-for="n in 6" :key="n">
                <v-card class="pa-4" elevation="4">
                <h3 class="mb-2">Vuetify 카드 {{ n }}</h3>
                <p class="text-body-2">
                    Vuetify의 반응형 그리드와 카드 컴포넌트를 사용한 예제입니다.
                </p>
                </v-card>
            </v-col>
            </v-row>
        </v-container>
        </v-main>
        
    </v-app>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = ref(false)

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'dark' : 'light'
}
</script>