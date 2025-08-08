<template>
    <!-- Giao diện đăng nhập -->
    <div v-if="!isLoggedIn" class="p-5 col-sm-4">
      <h3>Form Đăng nhập</h3>
      <form @submit.prevent="login">
        <div class="mb-3 mt-3">
          <label>Email:</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            placeholder="Nhập email"
          />
          <p v-if="emailError" style="color: red;">{{ emailError }}</p>
        </div>
  
        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            placeholder="Nhập mật khẩu"
          />
          <p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
        </div>
  
        <button type="submit" class="btn btn-primary">Đăng nhập</button>
      </form>
    </div>
  
    <!-- Giao diện sau khi đăng nhập -->
    <div v-else class="p-5 col-sm-5">
      <h3>Chào mừng, {{ email }}!</h3>
      <button @click="logout" class="btn btn-primary">Đăng xuất</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Trạng thái form
  const isLoggedIn = ref(false)
  const email = ref('')
  const password = ref('')
  const emailError = ref('')
  const passwordError = ref('')
  
  // Regex kiểm tra email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  // Hàm đăng nhập
  const login = () => {
    // Reset lỗi
    emailError.value = ''
    passwordError.value = ''
  
    // Kiểm tra email
    if (!email.value) {
      emailError.value = 'Email là bắt buộc.'
    } else if (!emailRegex.test(email.value)) {
      emailError.value = 'Vui lòng nhập email hợp lệ.'
    }
  
    // Kiểm tra password
    if (!password.value) {
      passwordError.value = 'Mật khẩu là bắt buộc.'
    }
  
    // Nếu hợp lệ
    if (!emailError.value && !passwordError.value) {
      isLoggedIn.value = true
    }
  }
  
  // Hàm đăng xuất
  const logout = () => {
    isLoggedIn.value = false
    email.value = ''
    password.value = ''
    emailError.value = ''
    passwordError.value = ''
  }
  </script>
  