<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>IMG</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="( item, idx ) in lists" :key="item.id">
                    <td>{{ idx + 1 }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td><img :src="item.thumbnail" style="width: 200px;"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: [] 
        }
    },
    mounted() {
        fetch('https://dummyjson.com/products')
        .then(res => res.json()) 
        .then(json => { this.lists = json.products })
    },
}
</script>