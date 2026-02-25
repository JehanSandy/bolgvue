<template>
    <div>
        <form action="">
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
import { ref } from 'vue';
    export default {
        name: 'CreatePost',
        setup() {
            const title = ref('');
            const content = ref('');
            const tag = ref('');
            const tags = ref([]);

            const handlekeydown = () => {
                if (!tags.value.includes(tag.value)) {
                  tag.value  = tag.value.replace(/\s/g, '')
                  tags.value.push(tag.value);
                }
                tag.value = '';
            }

            return {
                title, content, tag, tags, handlekeydown
            }
        }
    }
</script>

<style >

</style>