<template>
  <div class="error__background" v-if="error" @click="close">

    <div class="modal" >
      <div class="massege">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from "vuex"

const store = useStore()

const props = defineProps({text: String})
const error = computed(() => props.text)
const close = () => store.commit('cleanError');

</script>

<style scoped lang="scss">
.error__background {
  background: rgba(0,0,0,0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
}
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  
} 
.massege {
  width: 90vw;
  left: 5vw;
  position: absolute;
  top: calc(50vh - 20px);
  box-sizing: border-box;
  padding: 20px;
  background: var(--orange);
  font-family: 'Roboto Slab';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
display: flex;
  justify-content: center;
}
.error {
  color: white;
  padding: 17px 10px;
}
hr {
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>


