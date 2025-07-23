<template>
  <Header />
  <main>
    <div class="container-fluid d-flex w-100 h-auto pt-2">
      <aside class="w-25 h-auto bg-light px-5 bg-secondary">
        <div class="col-sm-4 w-100 h-45 pb-3">
          <h2 class="text-info mb-3 h-full">Chuyên mục</h2>
          <div class="mt-3">
            <ul class="list-group mt-3">
              <li
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-info active"
              >
                <a href="#" class="nav-link">Chế độ tập</a>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <a href="#" class="nav-link">Chế độ dinh dưỡng</a>
                <span class="badge bg-primary rounded-pill">15</span>
              </li>
              <li
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <a href="#" class="nav-link">Cẩm nang cuộc sống</a>
                <span class="badge bg-primary rounded-pill">99</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-4 w-100 h-45">
          <div class="card mt-3">
            <h2 class="card-header text-info">Bài viết nổi bật</h2>
            <div class="card-body">
              <div class="container-fluid">
                <ul class="list-group mt-2 border-0">
                  <li
                    class="container-fluid row list-group-item d-flex border-0 pb-4"
                  >
                    <div class="col-sm-4">
                      <img
                        src="/img/spinach.jpg"
                        class="img-fluid rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div class="col-sm-8">
                      <div class="me-auto">
                        <div class="fw-bold">Lợi ích khi ăn rau mỗi ngày</div>
                        <div class="">
                          9Tiêu thụ rau xanh hằng ngày sẽ giúp tăng cường thị
                          lực, kiểm soát cân nặng, ngăn ngừa ung thư...
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="container-fluid row list-group-item d-flex border-0 pb-4"
                  >
                    <div class="col-sm-4">
                      <img
                        src="/img/orange.jpg"
                        class="img-fluid rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div class="col-sm-8">
                      <div class="me-auto">
                        <div class="fw-bold">
                          9 tác dụng tuyệt vời của quả cam
                        </div>
                        <div class="">
                          Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm
                          lượng chất chống oxy hóa cao...
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="container-fluid row list-group-item d-flex border-0 pb-4"
                  >
                    <div class="col-sm-4">
                      <img
                        src="/img/oil.jpg"
                        class="img-fluid rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div class="col-sm-8">
                      <div class="me-auto">
                        <div class="fw-bold">
                          10 công dụng bất ngờ từ dầu dừa
                        </div>
                        <div class="">
                          Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể,
                          giúp việc sản xuất collagen trong các tế bào...
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main class="w-75 h-100 bg-light px-5">
        <h2 class="text-info mb-3">Tất cả bài viết</h2>
        <div class="">
          <div class="row g-3">
            <div class="col-sm-6">
              <div class="card" style="min-height: 500px">
                <p class="card-header bg-light ps-4 pb-3 fw-bold">
                  Phương pháp tập luyện Pilates giúp phục hồi chấn thương cột
                  sống <i class="fa-solid fa-message text-secondary"> </i> 16
                </p>
                <img src="/img/tap-piltes.jpg" class="p-4" alt="..." />
                <p class="card-text ps-4 pe-4 pb-3">
                  Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo
                  dai, các bài tập Pilates còn có khả năng trị đau lưng, là giải
                  pháp hữu hiệu để phục hồi chấn thương cột sống.
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card" style="min-height: 500px">
                <p class="card-header bg-light ps-4 pb-3 fw-bold">
                  Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của
                  bạn <i class="fa-solid fa-message text-secondary"> </i> 8
                </p>
                <img src="/img/tap-pilates1.jpg" class="p-4" alt="..." />
                <p class="card-text ps-4 pe-4 pb-3">
                  Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn, bài
                  tập này đã trở thành một cái tên quen thuộc nhờ có rất nhiều
                  người nổi tiếng theo đuổi.
                </p>
              </div>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-sm-6">
              <div class="card" style="min-height: 500px">
                <p class="card-header bg-light ps-4 pb-3 fw-bold">
                  Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn
                  <i class="fa-solid fa-message text-secondary"> </i> 5
                </p>
                <img src="/img/tim-mach.jpg" class="p-4" alt="..." />
                <p class="card-text ps-4 pe-4 pb-3">
                  Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và linh
                  hoạt mà còn có nhiều lợi ích cho sức khỏe tim mạch. Bài viết
                  này sẽ tìm hiểu sâu hơn về tác động tích cực của việc tập
                  Pilates đối với sức khỏe tim mạch.
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card" style="min-height: 500px">
                <p class="card-header bg-light ps-4 pb-3 fw-bold">
                  EAT CLEAN: Nên Và Không Nên Ăn Thực Phẩm Nào?
                  <i class="fa-solid fa-message text-secondary"> </i> 3
                </p>
                <img src="/img/eat-clean.png" class="p-4" alt="..." />
                <p class="card-text ps-4 pe-4 pb-3">
                  Chúng ta luôn chú trọng lựa chọn thực phẩm sạch và duy trì lối
                  sống lành mạnh. Vậy chế độ ăn Eat Clean nên và không nên ăn gì
                  trong bữa ăn hằng ngày để cân bằng thấp dinh dưỡng cho cơ thể?
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation  ">
          <ul class="pagination justify-content-center pt-2">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  </main>
  <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
.icon {
  margin-right: 5px;
}
.img {
  width: 150px;
  height: 100px;
  object-fit: cover;
}
.vid {
  height: px;
}
</style>
