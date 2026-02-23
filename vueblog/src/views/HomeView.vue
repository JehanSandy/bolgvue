
<template>
  <div class="home">
    <h1>Home</h1>
      <PostList :dataposts="posts" v-if="showPost" />
    <div v-if="error">{{ error }}</div>
  </div>
  <button @click="showPost = !showPost">{{ showPost ? 'Hide Posts' : 'Show Posts' }}</button>
  <button @click="posts.pop()">delete post</button>
</template>

  <script >
 
  import getPosts from '@/composable/getPosts';
  import PostList from '../components/postList.vue'
 
  export default {
    name: 'HomeView',
    components: {
      PostList,
    },
   
    setup() {
     
      const { posts, error, load, showPost } = getPosts();
    
      
      load();

      return {
        posts,
        showPost, error,
      }
    }, 
  }
  </script>