<template>
    <div>
        <div>counter : {{ counter }}</div>
        <button v-on:click="increase">증가</button>
        <button @click="decrease">감소</button>
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
        }, 
        decrease() {
            this.counter--;
        }
    },
}
</script>