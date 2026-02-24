<template>
    <div>
        <router-link :to="{ name: 'Show', params: { id: data.id } }">
            
        <h3>{{ data.title }}</h3>
    </router-link>

        <p>{{ readMore ? snippet : data.content }} <button @click="readMore = !readMore">{{ readMore ? 'read more' : 'read less' }}</button></p>
    </div>
</template>

<script>
import { computed, ref } from 'vue';

    export default {
        name: 'SinglePost',
        
        props: [
            'data',
        ],
        
        setup(props) {
            const snippet = computed(() => {
                
                return props.data.content.substring(0, 100) + '...';
            });
            const readMore = ref(true);
            return { snippet, readMore };
        },
    }
</script>

<style lang="scss" scoped>

</style>