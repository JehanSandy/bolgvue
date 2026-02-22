
<template>
  <div>
    <h1>ref</h1>
    <p >Nama saya {{ contactOne.name }}</p>
    <p >Number saya {{ contactOne.number }}</p>
  </div>
  <button @click="handleClick">Click Me</button> <br/>
  <!-- ini menambah number menggunakan increment mengunakan function ++ (number++) -->
  <button @click="contactOne.number++">increment</button>
  <input type="text" v-model="contactOne.name" />

  <div>
    <h1>Reaktive</h1>
    <p >Nama saya {{ contactTwo.name }}</p>
    <p >Number saya {{ contactTwo.number }}</p>
  </div>
  <button @click="handleClicktwo">Click Me</button> <br/>
  <!-- ini menambah number menggunakan increment mengunakan function ++ (number++) -->
  <button @click="contactTwo.number++">increment</button>
  <input type="text" v-model="contactTwo.name" />


</template>

  <script >
  // ref dan reactive harus di inport disini
  import { ref, reactive } from "vue";
  export default {
    name: 'HomeView',
    // function yang akan di jalankan pertama kali ketika component di buat
    setup() {
    const contactOne = ref({
      name: "jehan",
      number: 123489432487
    })

    const contactTwo = reactive({
      name: "hendro kartiko",
      number: 10893748192828
    })
    
    // ini menggunakan ref untuk mengubah value di html
    const handleClick = () => {
      contactOne.value.name = "bukan jehan"
      contactOne.value.number = 1010199432487
    }
    // ini menggunakan reactive untuk mengubah value di html, perbedaannya ada di syntaxnya, jika menggunakan ref kita harus menggunakan .value untuk mengakses value dari variable tersebut, sedangkan jika menggunakan reactive kita tidak perlu menggunakan .value untuk mengakses value dari variable tersebut.
    const handleClicktwo = () => {
      contactTwo.name = "kartika sari"
      contactTwo.number = 1123213
    }
    // yang di pakai nanti tetap ref karna didalam reactive memiliki kelemahan tidak bisa mengubah bentuk data primitif

    
    // tidak perlu menggunakan key dan value jika nama variabel sama dengan nama key
    return {
      handleClick, contactOne, contactTwo, handleClicktwo}
    }, 
  }
  </script>