<!-- #4 membuat view baru yakni show.vue untuk halaman singgle post -->
<template>
    <!-- #4.3 jika data tidak muncul maka di munculkan errornya -->
    <div v-if="error">{{ error }}</div>
    <div v-else-if="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
    </div>
</template>

<script>
    // #4.1 import function singgle post (getPost)
    import getPost from '@/composable/getPost';
    export default {
        name: 'Show',
        props:['id'],
        setup(props) {
            // #4.2 panggul juga fungsinya, jangan lupa menambahkan argugumen props.id untuk menjadi id di url API
            const { post, error, load } = getPost(props.id);    

            load();
            return {
                post, error
        }
    }
}
</script>

<style lang="scss" scoped>

</style>