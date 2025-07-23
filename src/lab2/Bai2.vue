<template>
  <div class="container py-5">
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header fw-bold">Form Đăng Ký Thông Tin</div>
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
                <label for="phone" class="form-label">Số Điện Thoại</label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Mật Khẩu</label>
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
                  <label class="form-check-label" for="male">Nam</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="Nữ"
                  />
                  <label class="form-check-label" for="female">Nữ</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="language" class="form-label">Ngôn Ngữ</label>
                <select class="form-select" id="language">
                  <option selected>Tiếng Việt</option>
                  <option>English</option>
                </select>
              </div>
              

              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="agree" />
                <label class="form-check-label" for="agree"
                  >Tôi đồng ý với các điều khoản và điều kiện</label
                >
              </div>

              <button type="submit" class="btn btn-primary">Đăng Ký</button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-header fw-bold">Form Đăng nhập</div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="loginEmail" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="loginEmail"
                  placeholder="Nhập email"
                />
              </div>

              <div class="mb-3">
                <label for="loginPassword" class="form-label">Mật Khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  id="loginPassword"
                  placeholder="Nhập mật khẩu"
                />
              </div>

              <button type="submit" class="btn btn-primary">Đăng Nhập</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
