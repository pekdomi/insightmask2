<script setup>
    import Npclogin from '../components/Npclogin.vue';
    import Ceologin from '../components/Ceologin.vue';
    import { RouterLink } from "vue-router"
</script>
<template>
  <div className="grid grid-cols-4 gap-2 flex-column flex-wrap">
    <div className="col-span-2 flex justify-center"><Npclogin /></div>
    <div className="col-span-2 flex justify-center"><Ceologin /></div>
     
  </div>
</template>