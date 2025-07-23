<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light px-5 d-flex flex-column justify-content-between"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="/img/logo-energy-pilates.png"
          alt=""
          class="img-fluid"
          style="width: 120px; height: auto"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#"
              ><font-awesome-icon icon="list" class="icon" />Bài Viết</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><font-awesome-icon icon="film" class="icon" />Video</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><font-awesome-icon icon="circle-exclamation" class="icon" />Giới
              thiệu</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><font-awesome-icon icon="calendar-days" class="icon" />Sự kiện</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <font-awesome-icon icon="user" class="icon" />Tài khoản
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
              <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Đăng kí thành viên</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav d-flex">
          <li class="nav-item">
            <a class="nav-link" href="#">Tiếng việt</a>
          </li>
          <li>
            <a class="nav-link" href="#">Tiếng Anh</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-dark{
      background-color: aliceblue;
      box-shadow: 1px 1px 2px 1px lightgray;
  }
  .nav-item{
      margin-left: 20px;
  }
  .nav-link{
      color: black;
  }
  .nav-link:hover{
      color: green;
  }
  .navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
      color: green;
  }
  .icon{
      margin-right: 5px;
  } 
</style>
