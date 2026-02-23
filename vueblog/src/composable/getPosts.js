import { ref } from "vue";

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);
    const showPost = ref(true);

    const load = async () => {
        try {
            let resopons = await fetch('http://localhost:3000/posts');
            if (!resopons.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await resopons.json();
            posts.value = data;
        } catch (err) {
            error.value = err.message;
        }
    }

    return { posts, error, load, showPost };
}

export default getPosts;