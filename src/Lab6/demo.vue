<script setup>
import { reactive } from 'vue'

const students = reactive([
  {
    name: 'Hoàng Văn Nam',
    age: 20,
    gender: 'Nam',
  },
  {
    name: 'Vũ Văn Tài',
    age: 21,
    gender: 'Nam',
  },
  {
    name: 'Lê Thị Hà',
    age: 23,
    gender: 'Nữ',
  },
  {
    name: 'Lê Thị Hà',
    age: 24,
    gender: 'Nữ',
  },
])
</script>
<template>
  <div class="d-flex flex-column align-items-center justify-content-center gap-3">
    <h1 class="text-xl font-bold text-center">Danh sách sinh viên</h1>
    
    <div class="">
      <table class="table table-bordered table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th class="text-center">
              STT
            </th>
            <th class="text-center">
              Họ Và Tên
            </th>
            <th class="text-center">
              Tuổi
            </th>
            <th class="text-center">
              Giới tính
            </th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr 
            v-for="(student, index) in students" 
            :key="index"
            class="align-middle"
          >
            <td class="text-center">
              {{ index }}
            </td>
            <td class="text-center">
              {{ student.name }}
            </td>
            <td class="text-center">
              {{ student.age }}
            </td>
            <td class="text-center">
              {{ student.gender }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



