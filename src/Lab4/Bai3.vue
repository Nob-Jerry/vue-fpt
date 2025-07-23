<template>
    <div class="d-flex flex-column justify-content-center align-items-center text-center">
        <h1>{{ message }}</h1>    
        <button v-bind:title="buttonTitle" @click="changeGreeting" class="btn btn-primary">Click để thấy thế giới</button>
    </div>
    
</template>

<script setup>
import { ref } from 'vue'; 
 
const buttonTitle = ref('xin chào') 
const message = ref('Lời chào ban đầu') 
 
const changeGreeting = () => { 
    buttonTitle.value = 'Hi' 
    message.value = 'Hello World'
}

</script>

