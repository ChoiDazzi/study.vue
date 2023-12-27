<template>
    <div>
        <p>{{ counter }}</p>
        <p v-if="counter === 1">1</p>
        <p v-else-if="counter === 2">2</p>
        <p v-else-if="counter === 3">3</p>
        <p v-else>나머지</p>
        <button @click="increase">증가</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increase() {
            this.counter++;
        }
    },
}
</script>