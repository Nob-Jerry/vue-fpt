<template>
  <Header />
  <main>
    <div class="container-fluid d-flex w-100 h-auto pt-2 justify-content-center align-items-center">
        <div class="row w-75 h-auto">
          <div class="col-sm-8">
            <h2 class="text-info mt-3 text-center">
              Phương pháp tập luyện Pilates giúp phục hồi chấn thương cột sống
            </h2>
            <img
              src="/img/tap-pilates1.jpg"
              class="img-fluid w-100"
              alt=""
            />

            <div class="container-fluid content">
              <p>
                Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại
                các nước phương Tây thì đây chính là phương pháp tập thể dục
                giúp duy trì vóc dáng, tăng cường ý chí và cải thiện sự linh
                hoạt, dẻo dai cho người tập. Đặc biệt, các bài tập Pilates còn
                có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi chấn
                thương cột sống. Sau đây hãy cùng tìm hiểu các phương pháp tập
                luyện này giúp phục hồi chấn thương cột sống nhanh chóng nhé!
              </p>
              <h3>Pilates giúp phục hồi chấn thương cột sống nhanh chóng</h3>
              <p>
                Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn
                phòng, đó là đau lưng, thoát vị đĩa đệm. Tuy nhiên, nếu điều trị
                không đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm, bao
                gồm: Ví dụ, điều trị bằng laser không đúng cách hoặc tập yoga
                không đúng cách có thể khiến bệnh nhân nằm liệt giường.
              </p>
            </div>
            <img
              src="/img/tap-piltes.jpg"
              class="img-fluid w-100"
              alt=""
            />

            <div class="container-fluid content">
              <h3>Phương pháp tập Pilates Cat Cow</h3>
              <p>Các bước thực hiện:</p>
              <ul>
                <li>
                  Bắt đầu với tư thế 4 điểm. Vai và cổ tay của bạn phải thẳng
                  hàng và vuông góc với thảm, lưng của bạn phải bằng phẳng và
                  xương chậu của bạn phải cân đối.
                </li>
                <li>Hít vào, vòng lưng, nâng cằm lên, mở rộng ngực.</li>
                <li>
                  Thở ra, cong xương cụt, nâng cong lưng và đưa cằm về gần
                  khoang ngực
                </li>
                <li>Lặp đi lặp lại động tác từ 5–7 lần.</li>
              </ul>

              <h3>Lời kết</h3>
              <p>
                Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương
                cột sống nhanh chóng. Để đạt được kết quả tập luyện như mong
                muốn, bạn cần duy trì chế độ tập luyện đều đặn, thực hiện đúng
                động tác, kết hợp cùng chế độ ăn uống khoa học.
              </p>
            </div>
          </div>

          <div class="col-sm-4">
            <h4 class="mt-4">Bình luận bài viết tại đây</h4>
            <form>
              <div class="mb-3">
                <textarea
                  name="comment"
                  placeholder="Nhập bình luận của bạn"
                  class="form-control"
                  id="comment"
                  rows="2"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-success">
                Gửi bình luận
              </button>
            </form>
            <h4 class="mt-3">Danh sách các bình luận</h4>
            <ul class="list-comments" id="list-comments">
              <li class="list-comment-item">
                <strong>Tuấn: </strong>Bài viết rất hữu ích
              </li>
              <li class="list-comment-item">
                <strong>Tuấn: </strong>Bài viết rất hữu ích
              </li>
              <li class="list-comment-item">
                <strong>Tuấn: </strong>Bài viết rất hữu ích
              </li>
            </ul>
          </div>
        </div>
    </div>
  </main>
  <Footer />
</template>

<script setup>
import Header from "../components/Head.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped></style>
