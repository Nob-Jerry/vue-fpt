<template>
  <div class="container py-5 bg-secondary bg-light">
    <div class="row g-4">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header fw-bold">Tra cứu mã số bảo hiểm xã hội</div>
          <div class="card-body">
            <form>
              <p>
                Để thực hiện chức năng tra cứu mã số bảo hiểm xã hội, xin vui
                lòng nhập đầy đủ các thông tin cần thiết.
              </p>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label"
                    >Tỉnh/TP <span class="text-danger">*</span></label
                  >
                  <select class="form-select">
                    <option>- Chọn tỉnh -</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Quận/Huyện</label>
                  <select class="form-select">
                    <option>- Chọn huyện -</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label">Phường/Xã</label>
                  <select class="form-select">
                    <option>-Chọn Phường/xã-</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Thôn/Xóm</label>
                  <select class="form-select">
                    <option>- Chọn thôn/xóm -</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label">CCCD/CMND/Hộ chiếu</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="CCCD/CMND/Hộ chiếu"
                  />
                </div>
                <div class="col-md-6">
                  <label class="form-label"
                    >Họ tên <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Họ Và Tên"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label">Ngày sinh</label>
                  <div class="d-flex">
                    <select class="form-select me-2" style="max-width: 120px">
                      <option>Ngày sinh</option>
                    </select>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Kiểu tên</label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kieuten"
                      id="codau"
                      value="codau"
                      checked
                    />
                    <label class="form-check-label" for="codau">Có dấu</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kieuten"
                      id="khongdau"
                      value="khongdau"
                    />
                    <label class="form-check-label" for="khongdau"
                      >Không dấu</label
                    >
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label">Mã số BHXH</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Mã số BHXH"
                  />
                </div>
                <div class="col-md-6">
                  
                </div>
              </div>
              <div class="mb-3"></div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="captcha"
                  />
                  <label class="form-check-label" for="captcha"
                    >Tôi không phải là người máy</label
                  >
                </div>
                <div class="mt-2">
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="reCAPTCHA"
                    style="height: 32px"
                  />
                  <small class="text-muted ms-2"
                    >reCAPTCHA<br />Bảo mật - Điều khoản</small
                  >
                </div>
              </div>
              <div class="mb-3 text-end">
                <button type="submit" class="btn btn-danger me-2">
                  Tra cứu
                </button>
                <button type="reset" class="btn btn-primary">Nhập lại</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
