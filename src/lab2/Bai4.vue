<template>
  <div>
    <div class="d-flex flex-column vh-100">
      <label for="">Bài tập ứng dụng Modal</label>
      <button
        type="button"
        class="btn btn-primary px-3"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Mở Modal
      </button>
    </div>
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myModalLabel">
              ĐĂNG KÍ VÀ ĐĂNG NHẬP
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container mt-3 w-100">
              <div class="nav nav-tabs" role="tablist">
                
                <li class="nav-item">
                  <a
                    href="#register"
                    class="nav-link active"
                    data-bs-toggle="tab"
                    >Đăng kí</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#login" class="nav-link" data-bs-toggle="tab"
                    >Đăng nhập</a
                  >
                </li>
                <li class="nav-item"></li>
              </div>
              <div class="tab-content">
                <div id="register" class="container tab-pane active py-3">
                  <div class="card">
                    <div class="card-header fw-bold">
                      Form Đăng Ký Thông Tin
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="mb-3">
                          <label for="name" class="form-label">Họ và Tên</label>
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Nhập họ và tên"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="email" class="form-label">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Nhập email"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="phone" class="form-label"
                            >Số Điện Thoại</label
                          >
                          <input
                            type="tel"
                            class="form-control"
                            id="phone"
                            placeholder="Nhập số điện thoại"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="password" class="form-label"
                            >Mật Khẩu</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Nhập mật khẩu"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="confirmPassword" class="form-label"
                            >Xác Nhận Mật Khẩu</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="confirmPassword"
                            placeholder="Xác nhận mật khẩu"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Giới Tính:</label><br />
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gender"
                              id="male"
                              value="Nam"
                            />
                            <label class="form-check-label" for="male"
                              >Nam</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gender"
                              id="female"
                              value="Nữ"
                            />
                            <label class="form-check-label" for="female"
                              >Nữ</label
                            >
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="language" class="form-label"
                            >Ngôn Ngữ</label
                          >
                          <select class="form-select" id="language">
                            <option selected>Tiếng Việt</option>
                            <option>English</option>
                          </select>
                        </div>
                        <div class="mb-3 form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="agree"
                          />
                          <label class="form-check-label" for="agree"
                            >Tôi đồng ý với các điều khoản và điều kiện</label
                          >
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Đăng Ký
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div id="login" class="container tab-pane active py-3">
                  <div class="card">
                    <div class="card-header fw-bold">Form Đăng nhập</div>
                    <div class="card-body">
                      <form>
                        <div class="mb-3">
                          <label for="loginEmail" class="form-label"
                            >Email</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="loginEmail"
                            placeholder="Nhập email"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="loginPassword" class="form-label"
                            >Mật Khẩu</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="loginPassword"
                            placeholder="Nhập mật khẩu"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Đăng Nhập
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
.btn {
  width: 150px;
}
</style>
