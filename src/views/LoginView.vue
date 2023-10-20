<script setup>
import { ref, reactive } from 'vue';
import { RouterLink, useRouter } from "vue-router";

var state = ref({
    company_name_: "",
    email_address: "",
    passwordID: ""
})

    
/*
const NewCompany = () => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            // "auth-token" : state.token
        },
        body: JSON.stringify({
            companyName: state.value.company_name_,
        })
    }
    fetch("http://localhost:3000/company/newcompany",
        requestOptions)
}
*/           
const router = useRouter()
var authenticated = ref(false);

    const TryLogin = async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                // "auth-token" : state.token
            },
            body: JSON.stringify({
                companyName: state.value.company_name_,
                emailAddress: state.value.email_address,
                passwordID: state.value.passwordID
            })
    }
    await fetch("http://localhost:3000/company/login",
        requestOptions).then((res) => {
            
            if (res.status === 200){
                console.log("authenticated, due to: " + res)
                
                router.push(`/company/${state.value.company_name_}`)
            }
        })
        
    }
    
//console.log("\nfrom LoginView: " + state.value.passwordID)



let isVisible = ref(false);

</script>


<template>
    <div className="justify-center mt-10 ml-10 mr-10">
        <form>

            <div class="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Cég neve</label>
                    <input v-model="state.company_name_" type="text" id="company"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Cég neve..." required>
                </div>
                <div>
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Bejelentkező kód</label>
                    <input v-model="state.passwordID" type="text" id="company"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Kód..." required>
                </div>
                <!--
                <div>
                    <label for="identifier" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Felek közti egyedi azonosító*</label>
                    <input v-model="state.uniqueID"
                        type="" id="identifier"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Azonosító...">
                </div>
                <button @click="NewMessage()" v-if="isVisible" type="button" class="ml-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Bejelentés</button>
-->
            </div>
            <button @click="TryLogin()" type="submit"
            class="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Bejelentkezés</button>
    
        </form>
        
        <div>

            <div>{{ state.companyName }}</div>
        </div>

    </div>
</template>