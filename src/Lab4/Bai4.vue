<template> 
    <div class="container mt-5"> 
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1> 
        <div class="row"> 
            <div class="col-sm-4"> 
                <div class="card"> 
                    <img :src="items[0].image" alt="Hình ảnh" /> 
                    <div class="card-body"> 
                        <h3 class="card-title">{{ items[0].title }}</h3> 
                        <p class="card-text">{{ items[0].content }}</p> 
                        <button class="btn btn-info">Xem chi tiết </button> 
                    </div> 
                </div> 
            </div> 
            <div class="col-sm-4"> 
                <div class="card"> 
                    <img :src="items[1].image" alt="Hình ảnh" /> 
                    <div class="card-body"> 
                        <h3 class="card-title">{{ items[1].title }}</h3> 
                        <p class="card-text">{{ items[1].content }}</p> 
                     <button class="btn btn-info">Xem chi tiết </button> 
                    </div> 
                </div> 
            </div> 
            <div class="col-sm-4"> 
                <div class="card"> 
                    <img :src="items[2].image" alt="Hình ảnh" /> 
                    <div class="card-body"> 
                        <h3 class="card-title">{{ items[2].title }}</h3> 
                        <p class="card-text">{{ items[2].content }}</p> 
                        <button class="btn btn-info">Xem chi tiết </button> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
</template> 
 
<script setup> 
import img1 from '../assets/rau.png'; 
import img2 from '../assets/gia-vi.png'; 
import img3 from '../assets/dau.png'; 
 
const items = ([ 
    { title: '8 loại rau củ quả giàu canxi giúp xương chắc khỏe ', 
    content: 'Canxi là khoáng chất thiết yếu giúp xây dựng và duy trì hệ xương chắc khỏe. Việc bổ sung các loại rau củ quả giàu canxi như cải bó xôi, bông cải xanh, cải xoăn... vào chế độ ăn hàng ngày sẽ giúp phòng ngừa loãng xương và tăng cường sức khỏe tổng thể.', image: img1 
}, 
    { title: 'Các loại gia vị tốt cho sức khỏe nên bổ sung vào bữa ăn ', 
    content: 'Một số loại gia vị như nghệ, tỏi, gừng, quế không chỉ giúp món ăn thêm hấp dẫn mà còn có tác dụng chống viêm, tăng cường hệ miễn dịch và hỗ trợ tiêu hóa. Hãy bổ sung các loại gia vị này vào bữa ăn để bảo vệ sức khỏe cho cả gia đình.', 
image: img2 }, 
    { title: '9 loại đậu bổ dưỡng nên dùng nhiều để tăng cường sức khỏe ', 
    content: 'Đậu lăng, đậu xanh, đậu đen, đậu đỏ... là nguồn cung cấp protein thực vật, chất xơ và nhiều loại vitamin, khoáng chất quan trọng. Thường xuyên ăn các loại đậu giúp kiểm soát cân nặng, giảm nguy cơ mắc bệnh tim mạch và hỗ trợ hệ tiêu hóa khỏe mạnh.', image: 
img3 }, 
]); 
</script> 

<style scoped>
img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.card{
    width: 100%;
    height: 100%;
}
</style>