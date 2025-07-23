<template>
  <div class="container py-5">
    <div class="header-title">THỜI KHÓA BIỂU</div>
    <div class="text-center mb-3">
      LỚP: SD20202 &nbsp;&nbsp;&nbsp; Năm học: 2024 - 2025
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th rowspan="2">Buổi</th>
          <th rowspan="2">Tiết</th>
          <th>Thứ hai</th>
          <th>Thứ ba</th>
          <th>Thứ tư</th>
          <th>Thứ năm</th>
          <th>Thứ sáu</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="4">Sáng</td>
          <td>1</td>
          <td class="highlight">Chào cờ</td>
          <td>Toán</td>
          <td class="highlight">Thể dục</td>
          <td>Toán</td>
          <td>Toán</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Toán</td>
          <td>Tập đọc</td>
          <td>Toán</td>
          <td class="highlight">Mĩ thuật</td>
          <td>Chính tả</td>
        </tr>
        <tr>
          <td colspan="6">RA CHƠI</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Tập đọc</td>
          <td>Kể chuyện</td>
          <td>Luyện từ và câu</td>
          <td>Tập đọc</td>
          <td>Tập làm văn</td>
        </tr>
        <tr>
          <td></td>
          <td>4</td>
          <td class="highlight">Thể dục</td>
          <td>Chính tả</td>
          <td class="highlight">Hát nhạc</td>
          <td>Tập viết</td>
          <td>Đạo đức</td>
        </tr>
        <tr>
          <td rowspan="4">Chiều</td>
          <td>1</td>
          <td class="highlight">Tiếng Anh</td>
          <td>Thực hành TV tiết 1</td>
          <td>Năng khiếu</td>
          <td>Thực hành Toán tiết 1</td>
          <td>Tự nhiên và xã hội</td>
        </tr>
        <tr>
          <td>2</td>
          <td class="highlight">Tiếng Anh</td>
          <td>Rèn Toán</td>
          <td></td>
          <td>Thực hành TV tiết 3</td>
          <td>Thủ công</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Luyện viết</td>
          <td>Thực hành TV tiết 2</td>
          <td></td>
          <td>Thực hành Toán tiết 2</td>
          <td>Sinh hoạt lớp</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style scoped>
.table th,
.table td {
  text-align: center;
  vertical-align: middle;
}
.header-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: red;
}
.highlight {
  background-color: #d4edda;
}
</style>
