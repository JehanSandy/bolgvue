
<template>
  <div class="home">
    <h1>Home</h1>
    <!-- perulanga disini sudah tidak melakukan looping names, namun looping data yg telah di tampung pada filteredNames -->
    <div v-for="(name, index) in filteredNames" :key="index">
      <p>{{ name }}</p>
    </div>
    <input type="text" v-model="search" /> <br/>
    <button @click="Handleclick">Stop Watch</button>
  </div>
  

  


</template>

  <script >
  // ref dan reactive harus di inport disini
  import { ref, reactive, computed, watch, watchEffect } from "vue";
  export default {
    name: 'HomeView',
    // function yang akan di jalankan pertama kali ketika component di buat
    setup() {
      // seach ini menampung data yang di inputkan pada input, dan names ini menampung data nama yang akan di looping dan di proses untuk di filter
      const search = ref('');
      const names = ref([
        'Jehan',
        'Rizky',
        'Fajar',
        'Dimas',
        'Rizal','joko','eko','budi','siti','susan', 'siti','henry','james','john','doe','smith'
      ]);

      // ini hanya berjalan ketika data search berubah
      const stop = watch(search,()=>{
        console.log("watch berjalan",search.value);
      })

      // ini berjalan otomatis ketika component di muat dan akan berjalan setiap data berubah
      const stopEffect = watchEffect(()=>{
        console.log("watch effect berjalan",search.value);
      })

      // filter menggantikan names, dengan menampung nama yang sudah di filter sesuai dengan search
      const filteredNames = computed(() => {
        return names.value.filter(name => name.toLowerCase().includes(search.value.toLowerCase()));
      });

      const Handleclick = () => {
        stop()
        stopEffect()
      }

      return {
      names, search, filteredNames, Handleclick
      }
    }, 
  }
  </script>