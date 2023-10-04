<template>
  <div class="user-item">
    <div class="left-box">
      <img src="../assets/img.png" alt="img">
    </div>
    <div class="right-box">
      <p class="name">{{user.name}}</p>
      <p class="email">{{user.email}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFull',
  components: { },
  data() {
    return {
     
    }
  },
  props: {
    user: Object
  },
  computed: {
  
  },
  methods: {
  
  },
}
</script>

<style scoped lang="scss">

</style>


