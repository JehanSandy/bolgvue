<template>
    <div class="post-list">
        <h2>Post List</h2>
        <br/>
        <!-- #4 melakukan looping dari props yang di terima oleh HomeVue kedapam props SingglePost -->
        <div v-for="post in dataposts" :key="post.id">
            <!-- #7.3 component SingglePost berisi props :data yang berisi post -->
            <SinglePost :data="post"/>
            <br/>
        </div>
    </div>
</template>

<script>
// #7.1 import component SinglePost untuk di gunakan di template
import SinglePost from './singlePost.vue';
export default {
    name: 'PostList',
    // #5. menerima props dari HomeView dengan nama dataposts, nanti akan di looping untuk di tampilkan di template
    props: [
        'dataposts',
    ],
    // #7.2 daftarkan component SinglePost di components agar bisa di gunakan di template
    components: {
        SinglePost,
    },
    // #6 kita bisa mengisi setup dengan argumen yang berisi props, jadi kita bisa mengakses value props dengan cara props.namaProps, contoh props.dataposts
    setup(props) {
        // cara cek value props tinggal props.namaProps, contoh props.dataposts
        console.log(props.dataposts);
        
    },
}
</script>

<style>
    .post-list {
        padding: 20px;
    }
</style>