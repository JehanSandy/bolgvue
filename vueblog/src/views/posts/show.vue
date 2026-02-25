
<template>
    
    <div v-if="error">{{ error }}</div>
    <div v-else-if="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <div v-for="tag in post.tags" :key="tag"> #{{ tag }}</div>
    </div>
    <div v-else><loading /></div>
</template>

<script>
    // #1.1 membuat component loading
    import loading from '@/components/loading.vue';
    // #1.2 agar function loading bisa jalan dan ada efek circle loading maka akan di tambahkan promise dengan setTimeout 2 detik di function getPost
    import getPost from '@/composable/getPost';
    export default {
        name: 'Show',
        props:['id'],
        components: {
            loading,
        },
        setup(props) {
        
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