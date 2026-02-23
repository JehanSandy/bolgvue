
<template>
  <div class="home">
    <h1>Home</h1>
    <!-- #3 mengirim data posts kedalam props :dataposts -->
    <PostList :dataposts="posts" v-if="showPost" />
    <!-- jika terjadi error, maka akan muncul pesan dari throw Error -->
    <div v-if="error">{{ error }}</div>
  </div>
  <!-- ini button untuk mentriger mounted dan unmounted dengan mengubah value showpost, saya tambakan tenari option agar lebih bervariatif saja -->
  <button @click="showPost = !showPost">{{ showPost ? 'Hide Posts' : 'Show Posts' }}</button>
  <!-- ini button untuk mentriger onUpdate dengan mendelete data menggunakan fungtion pop() -->
  <button @click="posts.pop()">delete post</button>
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
      const posts = ref([]); 
      const error = ref(null); 
      const showPost = ref(true);

      const load = async () => {
        try {
          // data di ubah menjadi fetch dari firebase, pastikan sudah menjalankan firebase menggunakan dummy data db.json
          let response = await fetch('http://localhost:3000/posts'); 
          if (!response.ok) {
          throw new Error('Failed to fetch posts'); 
        } 
          const data = await response.json(); 
          posts.value = data; 
        } catch (err) {
          error.value = err.message
          }
      }

      load();

      return {
        // #2 mengembalikan data yang akan digunakan di template
        posts,
        showPost, error,
      }
    }, 
  }
  </script>