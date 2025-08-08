<script setup>
import { ref } from 'vue';

const month = ref(1);
</script>
<template>
    <div class="container d-flex flex-column align-items-center justify-content-center gap-3">
        <h2 class="text-center">Nhập tháng bất kỳ</h2>
        <input type="number" v-model="month" placeholder="Nhập tháng" class="form-control"/>
        <p v-if="month < 1 || month > 12" class="alert alert-secondary">Nhập từ tháng 1 đến tháng 12</p>
        <p v-else-if="month >= 1 && month <=3" class="alert alert-success">Mùa xuân</p>
        <p v-else-if="month >= 4 && month <=6" class="alert alert-warning">Mùa hạ</p>
        <p v-else-if="month >= 7 && month <=9" class="alert alert-danger">Mùa thu</p>
        <p v-else class="alert alert-info">Mùa đông</p>
    </div>
</template>