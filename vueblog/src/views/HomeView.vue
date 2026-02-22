
<template>
  <div class="home">
    <h1>Home</h1>
    <!-- #3 mengirim data posts kedalam props :dataposts -->
    <PostList :dataposts="posts" />
  </div>
</template>

  <script >
  import PostList from '../components/postList.vue'
  // ref dan reactive harus di inport disini
  import { ref } from "vue";
  export default {
    name: 'HomeView',
    components: {
      PostList,
    },
    // function yang akan di jalankan pertama kali ketika component di buat
    setup() {
      // #1 data dummy untuk post, nanti akan kita ganti dengan data dari firebase
      const posts = ref([
        {
          id: 1,
          title: "Belajar Vue JS",
          content: "Vue JS adalah framework JavaScript yang digunakan untuk membangun antarmuka pengguna (user interface) yang interaktif dan responsif. Vue JS memiliki sintaks yang sederhana dan mudah dipahami, sehingga cocok untuk pemula yang ingin belajar tentang pengembangan web.",
        },
        {
          id: 2,
          title: "Belajar React JS",
          content: "React JS adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna (user interface) yang interaktif dan responsif. React JS dikembangkan oleh Facebook dan memiliki sintaks yang mirip dengan HTML, sehingga mudah dipahami oleh pengembang web.",
        },
      ]);  

      return {
        // #2 mengembalikan data yang akan digunakan di template
        posts,
      }
    }, 
  }
  </script>