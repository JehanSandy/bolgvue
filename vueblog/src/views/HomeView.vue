
<template>
  <div>
    <h1>Home</h1>
    <p ref="p">Nama saya {{ name }}</p>
    <p ref="p2">Number saya {{ number }}</p>
  </div>
  <button @click="handleClick">Click Me</button>
</template>

  <script >
  import { ref } from "vue";
  export default {
    name: 'HomeView',
    // function yang akan di jalankan pertama kali ketika component di buat
    setup() {

    const p = ref(null)
    const p2 = ref(null)
    // data yang akan di gunakan di template
    const name = "jehan"
    const number = 132324234
    // tidak perlu menggunakan key dan value jika nama variabel sama dengan nama key

    const handleClick = () => {
      // console.log("p", p.value)
      // console.log("p2", p2.value)

      // untuk menambahkan class pada element html menggunakan ref untuk mengakses dan mengubah value dari element html
      p.value.classList.add("paragraph1")
      p2.value.classList.add("paragraph2")
      // manupulasi element html menggunakan ref untuk mengakses dan mengubah value dari element html
      p.value.textContent = "Nama saya lupa"
      p2.value.textContent = "Number saya hilang"
      
    }
    return {
      name,
      number, p, p2, handleClick}
    }, 
  }
  </script>