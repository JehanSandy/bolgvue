
<template>
  <div>
    <h1>Home</h1>
    <p>Nama saya {{ name }}</p>
    <p>Number saya {{ number }}</p>
  </div>
</template>

  <script >
  export default {
    name: 'HomeView',
    // function yang akan di jalankan pertama kali ketika component di buat
    setup() {
    // data yang akan di gunakan di template
    const name = "jehan"
    const number = 132324234
    // tidak perlu menggunakan key dan value jika nama variabel sama dengan nama key
    return {
      name,
      number}
    }, 
  }
  </script>