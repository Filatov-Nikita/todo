<template>
    <div>

    <a class="btn-floating btn-large cyan darken-3 pulse fixed" 
    @click="show = !show">
        <i class="material-icons">edit</i>
    </a>
    <transition enter-class="scale-out" 
                enter-active-class="scale-transition"
                leave-active-class="scale-transition scale-out"
                mode="out-in"
                >
    
    </transition>

    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>

<style scoped>
 
  .fixed {
    position: fixed;
    right:40px;
    bottom: 7%;
  }
</style>

