<script setup>
import { ref } from 'vue';

const diem = ref(null);
const xepLoaiResult = ref('');

const xepLoai = () => {
  if (diem.value === null || diem.value === '' || diem.value < 0 || diem.value > 10) {
    xepLoaiResult.value = 'Điểm không hợp lệ';
  } else if (diem.value < 5.0) {
    xepLoaiResult.value = 'Yếu';
  } else if (diem.value >= 5.0 && diem.value < 6.5) {
    xepLoaiResult.value = 'Trung bình';
  } else if (diem.value >= 6.5 && diem.value < 8.0) {
    xepLoaiResult.value = 'Khá';
  } else if (diem.value >= 8.0 && diem.value < 9.0) {
    xepLoaiResult.value = 'Giỏi';
  } else if (diem.value >= 9.0) {
    xepLoaiResult.value = 'Xuất sắc';
  }
};
</script>

<template>
  <div class="container mt-5">
    <h2 class="mb-4">Nhập điểm trung bình của học sinh</h2>

    <div class="mb-3">
      <input
        type="number"
        v-model="diem"
        placeholder="Nhập điểm trung bình"
        class="form-control"
      />
    </div>

    <button @click="xepLoai" class="btn btn-primary mb-3">Xếp loại</button>

    <h2>
      Điểm {{ diem }}
      <span v-if="diem >= 0 && diem <= 10">đúng</span>
      <span v-else>sai</span>
    </h2>

    <h3 v-show="diem >= 0 && diem <= 10">
      Xếp loại:
      <span v-if="diem >= 9">Xuất sắc</span>
      <span v-else-if="diem >= 8">Giỏi</span>
      <span v-else-if="diem >= 6.5">Khá</span>
      <span v-else-if="diem >= 5">Trung bình</span>
      <span v-else>Yếu</span>
    </h3>
  </div>
</template>
  
  

