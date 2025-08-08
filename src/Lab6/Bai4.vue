<script setup lang="ts">
import { ref } from 'vue'

interface Student {
  name: string
  score: number | null
  dob: string
}

const students = ref<Student[]>([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
])

const student = ref<Student>({
  name: '',
  score: null,
  dob: ''
})

const isEditing = ref(false)
const editingIndex = ref<number | null>(null)

const submitForm = () => {
  if (isEditing.value && editingIndex.value !== null) {
    students.value[editingIndex.value] = { ...student.value }
    isEditing.value = false
    editingIndex.value = null
  } else {
    students.value.push({ ...student.value })
  }

  resetForm()
}

const editStudent = (index: number) => {
  const stu = students.value[index]
  student.value = { ...stu }
  isEditing.value = true
  editingIndex.value = index
}

const deleteStudent = (index: number) => {
  if (confirm('Bạn có chắc chắn muốn xóa?')) {
    students.value.splice(index, 1)
    if (editingIndex.value === index) resetForm()
  }
}

const resetForm = () => {
  student.value = { name: '', score: null, dob: '' }
  isEditing.value = false
  editingIndex.value = null
}
</script>

<template>
    <div class="container d-flex flex-row gap-3 mt-5">
        <form @submit.prevent="submitForm" class="col-sm-4 ">
            <h3>Thêm học sinh</h3>
            <div class="mb-3 mt-3">
                <label for="name">Họ tên:</label>
                <input type="text" class="form-control" v-model="student.name" id="name" required />
            </div>

            <div class="mb-3">
                <label for="score">Điểm:</label>
                <input type="number" max="10" min="0" class="form-control" v-model="student.score" id="score"
                    required />
            </div>
            <div class="mb-3">
                <label for="dob">Ngày sinh:</label>
                <input type="date" class="form-control" v-model="student.dob" id="dob" required />
            </div>

            <button type="submit" class="btn btn-success">
                {{ isEditing ? 'Cập nhật' : 'Thêm' }}
            </button>
        </form>

        <div class="col-sm-8">
            <h3>Danh sách học sinh</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Điểm</th>
                        <th>Ngày sinh</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(stu, index) in students" :key="index">
                        <td>{{ stu.name }}</td>
                        <td>{{ stu.score }}</td>
                        <td>{{ stu.dob }}</td>
                        <td>
                            <button class="btn btn-warning" @click="editStudent(index)">Sửa</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" @click="deleteStudent(index)">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

</template>
