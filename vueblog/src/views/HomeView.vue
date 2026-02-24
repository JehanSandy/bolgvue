
<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :dataposts="posts" v-if="showPost" />
    </div>
    <div v-else><loading /></div>
  </div>
  <button @click="showPost = !showPost">{{ showPost ? 'Hide Posts' : 'Show Posts' }}</button>
  <button @click="posts.pop()">delete post</button>
</template>

  <script >
 
  import getPosts from '@/composable/getPosts';
  import PostList from '../components/postList.vue'
  import loading from '@/components/loading.vue';
  
  export default {
    name: 'HomeView',
    components: {
      PostList,
      loading
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