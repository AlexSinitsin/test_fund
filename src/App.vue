<template>
  <div>
    <div class="header">
      <h1>Жилфонд</h1>
      <p>Пользователь</p>
    </div>
    <div class="content-box">
      <div class="left-box">
        <h6>Поиск сотрудников</h6>
        <input type="text" v-model="input" @change="changeInput" placeholder="Введите Id или имя ">
        <h6>Результаты</h6>
        <div clacc="not-search" v-if="notSearchComputed">ничего не найдено </div>
        <div v-else>
          <User v-for="u in usersComputed" @click="selectUser(u.id)" :key="u.id" :user="u"/>
        </div>
      </div>
      <div class="right-box">
        <div class="select-user" v-if="selectUser">
          Выберите сотрудника, чтобы посмотреть его профиль
        </div>
        <!-- <UserFull v-else :user="user"/> -->
      </div>
    </div>
    <ErrorModal :text="error"/>
  </div>
</template>

<script>
import ErrorModal from './components/ErrorModal.vue'
import User from './components/UserItem.vue'
//import UserFull from './components/UserFull.vue'

export default {
  name: 'App',
  components: { ErrorModal, User },
  data() {
    return {
      notSearch: true,
      input: '',
      usersData: []
    }
  },
  computed: {
    notSearchComputed() {
      return this.notSearch
    },
    users() {
      return this.$store.getters.users
    },
    usersComputed() {
      return this.usersData
    }
  },
  methods: {
    changeInput() {
      this.notSearch = false
      const arr = this.input.split(', ')
      this.usersData = this.users.filter(a => arr.includes(a.username))
      console.log(this.usersData)
    },
  },
  mounted() {
    this.$store.dispatch('GET_USERS')
  }

  
};
</script>

<style scoped lang="scss">

</style>
