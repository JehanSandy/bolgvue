import { ref } from "vue";
// ini berfungsi untuk routing ketika data berhasil di tambahkan ke json-serve maka otomatis diarahkan ke home
import { useRouter } from "vue-router";

const createPost = () => {
    const router = useRouter();
    const title = ref('');
    const content = ref('');
    const tag = ref('');
    const tags = ref([]);
    // ini function handle keydown untuk menambahkan tag ketika user menekan enter, dan juga untuk menghapus spasi pada tag yang di inputkan
    const handlekeydown = () => {
        if (!tags.value.includes(tag.value)) {
            tag.value = tag.value.replace(/\s/g, '');
            tags.value.push(tag.value);
        }
        tag.value = ''
    }

    const handleSubmit = async () => {
        const post = {
            title: title.value,
            content: content.value,
            tags: tags.value
        }

        await fetch('http://localhost:3000/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        tag.value = '';
        title.value = '';
        content.value = '';
        tags.value = '';

        // routing untuk mengarahkan ke home setelah data berhasil di tambahkan ke json-serve
        router.push({ name: 'home' });
    }

    return { title, content, tag, tags, handlekeydown, handleSubmit };
}
export default createPost