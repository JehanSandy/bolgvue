<template>
    <div>
        <!-- #9 menampilkan data title dan content dari props data -->
        <h3>{{ data.title }}</h3>
        <!-- #10 menampilkan snippet content dari props data, ini bisa saja data.content akan tetapi ada fitur tambahan snippet untuk memotong sebagian text agar tidak terlalu panjang -->
        <p>{{ readMore ? snippet : data.content }} <button @click="readMore = !readMore">{{ readMore ? 'read more' : 'read less' }}</button></p>
    </div>
</template>

<script>
import { computed, ref } from 'vue';

    export default {
        name: 'SinglePost',
        // #8 menerima props dari PostList dengan nama data, nanti akan di gunakan untuk menampilkan title dan content post di template 
        props: [
            'data',
        ],
        // #11 membuat computed property untuk memotong content menjadi snippet, jadi hanya menampilkan sebagian text saja, contoh 50 karakter pertama diikuti dengan ...
        setup(props) {
            const snippet = computed(() => {
                // substring untuk memotong text, jadi hanya menampilkan 100 karakter pertama diikuti dengan ..., bisa di ubah sesuai kebutuhan
                return props.data.content.substring(0, 100) + '...';
            });
            const readMore = ref(true);
            return { snippet, readMore };
        },
    }
</script>

<style lang="scss" scoped>

</style>