 <!--<script setup>
  import { ref } from 'vue';
  import AboutView from './views/AboutView.vue';
  import Navbar from './components/Navbar.vue';


  const rawHtml = '<span style="color: red">This should be red.</span>';
</script> -->

<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from "vue-router"

</script>

<template>
  <Navbar />
  <main>
    <div className="flex justify-center top-10">
      <div  class="container" style="max-width: 1100px;">
      <RouterView />
    </div>
    </div>
    

  </main>
</template>