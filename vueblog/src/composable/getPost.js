import { ref } from "vue";

// #3 membuat fungtion singgle post (gestpost) dengan parameter id
const getPost = (id) => {
    // 3.1 karna data hanya 1 maka ref hanya di buat null bukan array kosong lagi
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {

            await new Promise(resolve => setTimeout(resolve, 2000));
            // ini cara mengambil data dengan id spesifik, dengan menambahkan id di url api
            let response = await fetch(`http://localhost:3000/posts/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch post');
            }
            const data = await response.json();
            post.value = data;
        } catch (err) {
            error.value = err.message;
        }
    }

    return { post, error, load };
}

export default getPost;