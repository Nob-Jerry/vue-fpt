<template>
  <div class="p-5 d-flex flex-column justify-content-center align-items-center">
    <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" class="form-control" />
    <p class="mt-3">Giá trị bạn nhập: {{ userInput }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const userInput = ref("FPL Polytechnic");
</script>
