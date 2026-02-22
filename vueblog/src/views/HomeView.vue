
<template>
  <div>
    <h1>Home</h1>
    <p ref="p">Nama saya {{ name }}</p>
    <p ref="p2">Number saya {{ number }}</p>
  </div>
  <button @click="handleClick">Click Me</button> <br/>

  <!-- ini menambah number menggunakan increment mengunakan function ++ (number++) -->
  <button @click="number++">increment</button>
  <input type="text" v-model="name" />
</template>

  <script >
  import { ref } from "vue";
  export default {
    name: 'HomeView',
    // function yang akan di jalankan pertama kali ketika component di buat
    setup() {

    const p = ref(null)
    const p2 = ref(null)
    // ini cara untuk membuat reactive variable, jika kita ingin membuat variable yang bisa berubah-ubah, kita harus menggunakan ref, jika tidak maka variable tersebut tidak akan bisa berubah-ubah
    const name = ref("jehan")
    const number = ref(132324234)
    
    const handleClick = () => {
      name.value = "rehan"
      number.value = 123489432487
    }
    
    // tidak perlu menggunakan key dan value jika nama variabel sama dengan nama key
    return {
      name,
      number, handleClick}
    }, 
  }
  </script>