<template>
  <div class="blog-container">
    <h1> Blog đơn giản </h1>

    <CreatePost @add-post="handleAddPost" />

    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CreatePost from './Create.vue'
import PostList from './Post.vue'

const posts = ref([])

function handleAddPost(newPost) {
  newPost.textColor = '#000'
  posts.value.push(newPost)
}

</script>

<style>
.blog-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}
</style>
