<template>
  <div class="p-5 d-flex flex-column justify-content-center align-items-center">
    <h1>Thông tin cá nhân</h1>
    <form class="w-25">
      <div class="mb-3">
        <label>Họ và Tên:</label>
        <input
          v-model="userInfo.name"
          type="text"
          class="form-control"
          placeholder="Nhập họ và tên"
        />
      </div>
      <div class="mb-3">
        <label>Tuổi:</label>
        <input
          v-model="userInfo.age"
          type="number"
          class="form-control"
          placeholder="Nhập tuổi"
        />
      </div>
      <div class="mb-3">
        <label>Email:</label>
        <input
          v-model="userInfo.email"
          type="email"
          class="form-control"
          placeholder="Nhập email"
        />
      </div>
    </form>
    <div class="info-display mt-4 p-3 bg-dark text-white rounded w-25 text-left">
      <h2 class="text-center">Thông tin đã nhập</h2>
      <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
      <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
      <p><strong>Email:</strong> {{ userInfo.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const userInfo = reactive({
  name: "",
  age: null,
  email: "",
});
</script>
