<template>
    <div>
        <p>책을 가지고 있다.</p>
        <span>{{ publishedBookMessage }}</span>
        <br/>
        <button @click="emptyBooks">CLICK</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            author: 'John Doe',
            books: ['book1','book2','book3']
        }
    },
    computed: {
        publishedBookMessage() {
            return this.books.length > 0 ? 'YES' : 'NO'
        }
    },
    methods: {
        emptyBooks() {
            this.books = [];
        }
    },
}
</script>