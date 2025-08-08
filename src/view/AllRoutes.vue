<!-- filepath: c:\Users\Nobita\Desktop\New folder\vue-fpt\src\views\AllRoutes.vue -->
<template>
  <div>
    <h2>All Routes</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
      <router-link v-for="route in routes" :key="route.path" :to="route.path">
        <button>{{ route.name }}</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllRoutes",
  data() {
    return {
      routes: [
        { path: "/", name: "Bai2l3" },
        { path: "/bai3", name: "Bai3l3" },
        { path: "/bai4", name: "Bai4l3" },
        { path: "/hello", name: "Hello" },
        { path: "/bai3l4", name: "Bai3l4" },
        { path: "/bai4l4", name: "Bai4l4" },
        { path: "/bai1l5", name: "Bai1l5" },
        { path: "/bai2l5", name: "Bai2l5" },
        { path: "/bai3l5", name: "Bai3l5" },
        { path: "/blog", name: "BlogPage" },
        { path: "/bai1l6", name: "Bai1l6" },
        { path: "/bai2l6", name: "Bai2l6" },
        { path: "/bai3l6", name: "Bai3l6" },
        { path: "/bai4l6", name: "Bai4l6" },
        { path: "/demo", name: "Demo" },
        { path: "/bai1l7", name: "Bai1l7" },
        { path: "/bai2l7", name: "Bai2l7" },
        { path: "/bai3l7", name: "Bai3l7" },
      ]
    }
  }
}
</script>