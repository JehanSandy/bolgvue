<template>
    <div>
        <!-- membuat function create data -->
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" v-model="title">
            </div>
            <div>
                <label for="content">Content</label>
                <textarea id="content" name="content" v-model="content"></textarea>
            </div>
            <div>
                <label for="tag">Tags</label>
                <input id="tag" name="tag" type="text" v-model="tag" @keydown.enter.prevent="handlekeydown">
            </div>
                <button type="submit">Create Post</button>
        </form>
            <h1>{{ title }}</h1>
            <p>{{ content }}</p>
            <div v-for="tag in tags" :key="tag">{{ tag }}</div>
    </div>
</template>

<script>
import createPost from '@/composable/createPost';


    export default {
        name: 'CreatePost',
        setup() {
            const {title, content, tag, tags, handlekeydown, handleSubmit} = createPost();

            return {
                title, content, tag, tags, handlekeydown, handleSubmit
            }
        }
    }
</script>

<style >

</style>