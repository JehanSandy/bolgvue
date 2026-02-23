
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
  // import  function getPosts dari composable getPosts.js, hasil pemindahan function di setup awal ke composable agar lebih rapi dan reusable
  import getPosts from '@/composable/getPosts';
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
      // getpost di tampung di bawah sebagai hasil pengembalian dari function getPosts, jadi kita bisa menggunakan data posts, error, dan load yang sudah di return di function getPosts
      const { posts, error, load, showPost } = getPosts();
    
      
      // bahkan fungtion showPost juga bisa di pindah dan digunakan di halaman ini

      load();

      return {
        // #2 mengembalikan data yang akan digunakan di template
        posts,
        showPost, error,
      }
    }, 
  }
  </script>