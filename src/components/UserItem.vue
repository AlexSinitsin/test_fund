<template>
  <div class="user-item">
    <div class="left-block">
      <img src="../assets/img.png" alt="img">
    </div>
    <div class="right-block" :class="{'checked': props.user.id === id}">
      <p class="name">{{props.user.username}}</p>
      <p class="email">{{props.user.email}}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({user: Object, id: Number})

</script>

<style scoped lang="scss">

</style>


