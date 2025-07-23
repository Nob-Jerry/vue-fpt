<template>
  <div class="container my-4">
    <div class="title">Bảng Thành Phần Dinh Dưỡng</div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th rowspan="2">Thành Phần</th>
          <th colspan="2">Giá Trị</th>
        </tr>
        <tr>
          <th>Khối Lượng</th>
          <th>% DV*</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>200 kcal</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Chất Béo</td>
          <td>9 g</td>
          <td>14%</td>
        </tr>
        <tr>
          <td>Chất Béo Bão Hòa</td>
          <td>4 g</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Chất Đạm</td>
          <td>8 g</td>
          <td>16%</td>
        </tr>
        <tr>
          <td>Chất Xơ</td>
          <td>5 g</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Đường</td>
          <td colspan="2">12 g</td>
        </tr>
        <tr>
          <td rowspan="2">Vitamin</td>
          <td>Vitamin C</td>
          <td>25%</td>
        </tr>
        <tr>
          <td>Vitamin D</td>
          <td>10%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style scoped>
.table th,
.table td {
  vertical-align: middle;
  text-align: center;
}
.table thead th {
  background-color: #ffc107;
}
.title {
  color: red;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin: 20px 0;
}
</style>
