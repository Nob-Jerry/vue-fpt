<template>
    <div class="container d-flex flex-row gap-3 mt-5 ">
        <form action="" class="col-sm-8">
            <div class="me-5">
                <h3>Form Đăng Ký</h3>
                <div class="mb-2">
                    <label>Họ tên:</label>
                    <input type="text" class="form-control" v-model="name" />
                </div>

                <div class="mb-2">
                    <label>Email:</label>
                    <input type="email" class="form-control" v-model="email" />
                </div>

                <div class="mb-2">
                    <label>Mật khẩu:</label>
                    <input type="password" class="form-control" v-model="password" />
                </div>

                <div class="mb-2">
                    <label>Ngày sinh:</label>
                    <input type="date" class="form-control" v-model="birthdate" />
                </div>

                <div class="mb-2">
                    <label>Giới tính:</label><br />
                    <input type="radio" id="male" value="Nam" v-model="gender" />
                    <label for="male">Nam</label>

                    <input type="radio" id="female" value="Nữ" v-model="gender" />
                    <label for="female">Nữ</label>

                    <input type="radio" id="other" value="Khác" v-model="gender" />
                    <label for="other">Khác</label>
                </div>

                <div class="mb-2">
                    <label>Ngôn ngữ:</label><br />
                    <input type="checkbox" value="Tiếng Việt" v-model="languages" />
                    Tiếng Việt

                    <input type="checkbox" value="Tiếng Anh" v-model="languages" />
                    Tiếng Anh

                    <input type="checkbox" value="Tiếng Nhật" v-model="languages" />
                    Tiếng Nhật
                </div>
                <button class="btn btn-primary" @click="submit" type="button">Đăng ký</button>
            </div>
        </form>
        <div class="w-75">
            <h3>Thông tin đăng ký:</h3>
            <p><strong>Họ tên:</strong> {{ registered.name }}</p>
            <p><strong>Email:</strong> {{ registered.email }}</p>
            <p><strong>Ngày sinh:</strong> {{ registered.birthdate }}</p>
            <p><strong>Giới tính:</strong> {{ registered.gender }}</p>
            <p><strong>Ngôn ngữ:</strong> {{ registered.languages.join(', ') }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const birthdate = ref('')
  const gender = ref('')
  const languages = ref<string[]>([])
  
  const registered = reactive({
    name: '',
    email: '',
    birthdate: '',
    gender: '',
    languages: [] as string[]
  })
  
  const submit = () => {
    registered.name = name.value
    registered.email = email.value
    registered.birthdate = birthdate.value
    registered.gender = gender.value
    registered.languages = [...languages.value]
    
  }
  </script>

<style scoped>
.container {
    max-width: 800px;
}
</style>