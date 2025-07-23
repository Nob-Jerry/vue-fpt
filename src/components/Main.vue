<template>
  <Header />
  <div class="container-fluid d-flex w-100 h-auto pt-2">
    <aside class="w-25 h-auto bg-light px-5 bg-secondary">
      <div class="col-sm-4 w-100 h-45">
        <h2 class="text-info mb-3 h-full ">Về tôi</h2>
        <div class="card blog">
          <img src="/img/avatar.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Giới thiệu bản thân</h5>
            <p class="card-text">
              TS. Trần Hoàng Tuấn, Tổ chức Tư vấn sức khỏe quốc tế độc lập <br />
              Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn
              cách mình sẽ sống
            </p>
          </div>
        </div>
      </div>
    </aside>
    <main class="w-75 h-100 bg-light px-5">
      <h2 class="text-info mb-3 ">Blog của tôi</h2>
      <div class="">
        <div class="row g-3">
          <div class="col-sm-6">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">
                  Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                  <font-awesome-icon icon="message" /> 16
                </h5>
                <div>
                  <img
                    src="/img/tap-piltes.jpg"
                    alt="tập piltes"
                    class="img-fluid"
                  />
                </div>
                <p class="card-text">
                  Ngoài việc giúp duy trì vóc dánh, cả thiện sự linh hoạt, dẻo
                  dai cho người tập, Pilates giúp cơ bắp và các khớp mọc dài
                  hơn, kéo dãn hơn . . .
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card blog h-100">
              <div class="d-flex flex-row p-2">
                <img
                  src="/img/corevalue.jpg"
                  alt="Tập Pilates"
                  class="img-fluid img"
                />
                <div class="card-body">
                  <h5 class="card-title">Biết ơn đời, đời sẽ thương ta</h5>
                  <a href="#" class="nav-link"
                    ><font-awesome-icon icon="message" class="icon" />30</a
                  >
                </div>
              </div>
              <div class="d-flex flex-row p-2">
                <img
                  src="/img/orange.jpg"
                  alt="Tập Pilates"
                  class="img-fluid img"
                />
                <div class="card-body">
                  <h5 class="card-title">9 tác dụng tuyệt vời của quả cam</h5>
                  <a href="#" class="nav-link"
                    ><font-awesome-icon icon="message" class="icon" />30</a
                  >
                </div>
              </div>
              <div class="d-flex flex-row p-2">
                <img
                  src="/img/oil.jpg"
                  alt="Tập Pilates"
                  class="img-fluid img"
                />
                <div class="card-body">
                  <h5 class="card-title">10 công dụng bất ngờ từ dầu dừa</h5>
                  <a href="#" class="nav-link"
                    ><font-awesome-icon icon="message" class="icon" />30</a
                  >
                </div>
              </div>
              <div class="d-flex flex-row p-2">
                <img
                  src="/img/spinach.jpg"
                  alt="Tập Pilates"
                  class="img-fluid img"
                />
                <div class="card-body">
                  <h5 class="card-title">Lợi ích khi ăn rau mỗi ngày</h5>
                  <a href="#" class="nav-link"
                    ><font-awesome-icon icon="message" class="icon" />30</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center py-3">
            <a href="#" class="btn btn-primary">Xem thêm</a>
        </div>
      </div>
    </main>
  </div>
  <div class="container-fluid d-flex w-100 h-auto pt-2">
    <aside class="w-25 h-auto bg-light px-5 bg-secondary">
      <div class="col-sm-4 w-100 h-auto">
        <div class="nav nav-tabs p-4" role="tablist">
          <li class="nav-item">
            <a href="#read" class="nav-link active text-info mt-2 fw-bold" data-bs-toggle="tab"
              >Đọc nhiều</a
            >
          </li>
          <li class="nav-item">
            <a href="#watch" class="nav-link text-info mt-2 fw-bold" data-bs-toggle="tab">Xem nhiều</a>
          </li>
          <li class="nav-item"></li>
        </div>
        <div class="tab-content">
          <div id="read" class="container tab-pane active py-3">
            <div class="h-100">
              <div class="d-flex flex-row p-2">
                <img
                  src="/img/corevalue.jpg"
                  alt="Tập Pilates"
                  class="img-fluid img"
                />
                <div class="card-body">
                  <h5 class="card-title">Biết ơn đời, đời sẽ thương ta</h5>
                  <a href="#" class="nav-link"
                    ><font-awesome-icon icon="message" class="icon" />30</a
                  >
                </div>
              </div>
              <div class="d-flex flex-row p-2">
                <img
                  src="/img/oil.jpg"
                  alt="Tập Pilates"
                  class="img-fluid img"
                />
                <div class="card-body">
                  <h5 class="card-title">10 công dụng bất ngờ từ dầu dừa</h5>
                  <a href="#" class="nav-link"
                    ><font-awesome-icon icon="message" class="icon" />30</a
                  >
                </div>
              </div>
              <div class="d-flex flex-row p-2">
                <img
                  src="/img/spinach.jpg"
                  alt="Tập Pilates"
                  class="img-fluid img"
                />
                <div class="card-body">
                  <h5 class="card-title">Lợi ích khi ăn rau mỗi ngày</h5>
                  <a href="#" class="nav-link"
                    ><font-awesome-icon icon="message" class="icon" />30</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div id="watch" class="container tab-pane py-3">
            <h3 class="text-info mt-2">Chuyên mục</h3>
          </div>
        </div>
      </div>
    </aside>
    <main class="w-75 h-100 bg-light px-5">
      <h2 class="text-info mb-3 text-center">VIDEO ĐỪNG BỎ LỠ</h2>
      <div class="row justify-content-center ">
            
            <div class="col-sm-6 vid">
              <div class="card ">
                <img src="/img/video1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Đi xa hơn để trưởng thành hơn</h5>
                  <p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi, dợi mong một ngày được bay nhảy trên những
                    phương trời mới lạ. Để rồi những cô đơn nơi mê mải, tuổi trẻ ấy mới muốn một nơi để trở về.</p>
                </div>
              </div>
              <div class="card mt-2 ">
                <img src="/img/video3.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Ước gì được trở về tuổi thơ</h5>
                  <p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một ngày được bay nhảy trên những
                    phương trời mới lạ. Để rồi những cô đơn nơi mê mải, tuổi trẻ ấy mới muốn một nơi để trở về.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 vid">
              <div class="card vid">
                <img src="/img/video2.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                  <p class="card-text">Guồng quay cuộc sống đâu có vội vàng, đâu có tấp nập đến đâu thì cũng chẳng nằm
                    ngoài quy luật tự nhiên và bất biến: xuân, hạ, thu, đông. Và rồi một năm cũ sắp trôi qua.</p>
                </div>
              </div>
              <div class="card mt-2">
                <img src="/img/video4.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Ba người thầy vĩ đại</h5>
                  <p class="card-text">Ta xem vạn vật là thầy. Tình thân học hỏi của ta luôn rộng mở như tâm trí các
                    người thầy. Ta học hỏi từ tất cả mọi vật, từ cành cây ngọn cỏ đến đám mây trên trời kia.</p>
                </div>
              </div>
            </div>
            <button class="col-sm-2 btn btn-info mt-2 mb-3">Xem thêm</button>

          </div>
    </main>
  </div>
  <Footer />
</template>

<script setup>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
</script>

<style scoped>
.icon {
  margin-right: 5px;
}
.img{
    width: 150px; 
    height: 100px; 
    object-fit: cover;
}
.vid{
  height: px;
}
</style>
