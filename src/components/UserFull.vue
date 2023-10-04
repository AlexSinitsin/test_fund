<template>
  <div class="user-item">
    <div class="left-block">
      <img src="../assets/img_big.png" alt="img">
    </div>
    <div class="right-block">
      <p class="name">{{props.user.name}}</p>
      <p class="email"><span>email:</span>{{props.user.email}}</p>
      <p class="phone"><span>phone:</span>{{props.user.phone}}</p>
      <div class="header-full-user">О себе</div>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script setup>

import { defineProps } from 'vue'

const props = defineProps({user: Object})

</script>

<style scoped lang="scss">

</style>


