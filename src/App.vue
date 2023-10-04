<template>
  <div>
    <div class="header">
      <h1>Жилфонд</h1>
      <p>Пользователь</p>
    </div>
    <div class="content-box">
      <div class="left-box">
        <h6>Поиск сотрудников</h6>
        <input type="text" v-model="input" @input="changeInput" placeholder="Введите Id или имя ">
        <h6>Результаты</h6>
        <div clacc="not-search" v-if="notSearchComputed">ничего не найдено </div>
        <div v-else>
          <User v-for="u in usersComputed" @click="selectUser(u.id)" :key="u.id" :user="u" :id="idItem"/>
        </div>
      </div>
      <div class="right-box">
        <div class="select-user" v-if="isSelectUser">
          <div>
            Выберите сотрудника, чтобы посмотреть его профиль
          </div>
        </div>
         <UserFull class="user-full" v-else :user="userComputed"/>
      </div>
    </div>
    <ErrorModal :text="error"/>
    <img class="loading" v-if="isLoading" src="./assets/loading.gif" alt="img">
  </div>
</template>

<script setup>
import ErrorModal from './components/ErrorModal.vue'
import User from './components/UserItem.vue'
import UserFull from './components/UserFull.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
//import UserFull from './components/UserFull.vue'

const store = useStore()

const notSearch = ref(true)
const isSelectUser = ref(true)
const input = ref('')
const usersData = ref([])
const user = ref({})
const idItem = ref(0)


const notSearchComputed = computed(() => notSearch.value)
const usersComputed = computed(() => usersData.value)
const users = computed(() => store.getters.users)
const userComputed = computed(() => user.value)
const isLoading = computed(() => store.getters.isLoading)

const changeInput = () => {
  notSearch.value = false
  const arr = input.value.split(', ')
  usersData.value = users.value.filter((a) => !!arr.find(b => {
    const sub = a.username.toLowerCase().substring(0, b.toLowerCase().length)
    if(sub === b.toLowerCase()) {
      return true
    } else {
      false
    }
    // a.username.toLowerCase().includes(b.toLowerCase())
  }))
}
const selectUser = (id) => {
  isSelectUser.value = false
  user.value = users.value.find((a) => a.id === id)
  idItem.value = id
}

onMounted(() => {
  store.dispatch('GET_USERS')
})

// export default {
//   name: 'App',
//   components: { ErrorModal, User },
//   data() {
//     return {
//       notSearch: true,
//       input: '',
//       usersData: []
//     }
//   },
//   computed: {
//     notSearchComputed() {
//       return this.notSearch
//     },
//     users() {
//       return this.$store.getters.users
//     },
//     usersComputed() {
//       return this.usersData
//     }
//   },
//   methods: {
//     changeInput() {
//       this.notSearch = false
//       const arr = this.input.split(', ')
//       this.usersData = this.users.filter(a => arr.includes(a.username))
//       console.log(this.usersData)
//     },
//   },
//   mounted() {
//     this.$store.dispatch('GET_USERS')
//   }

  
// };
</script>

<style scoped lang="scss">

</style>
