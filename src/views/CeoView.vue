<script setup>
    import { RouterLink, useRoute } from "vue-router"
    import { reactive, onMounted, ref, defineProps } from 'vue'

    const route = defineProps(['route'])
    const state = reactive({
        messages :{}
    })

    function GetAll() {
        const fullUrl = 'http://localhost:3000' + useRoute().path
        fetch(fullUrl)
            .then(res => res.json())
            .then(data => {
                state.messages = data
            })
    }
    onMounted(() => GetAll())
    console.log("\nfrom CeoView: " + useRoute().path)
</script>


<template>
    <div>
        <RouterLink to="/">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {{ useRoute().path }}
                </span>
            </button>
        </RouterLink>
    </div>
    <div className="grid grid-cols-1 gap-2">
        <div v-for="item in state.messages" :key="item.companyName">
        
            <div class="collapse bg-base-200">
            <input type="radio" name="my-accordion-1"/> 
            <div class="collapse-title text-xl font-medium">
                {{ item.companyName }}
                {{ item.emailAddress }}
            </div>
            <div class="collapse-content"> 
                {{ item.message }}
            </div>
        </div>
        </div>
    </div>
</template>