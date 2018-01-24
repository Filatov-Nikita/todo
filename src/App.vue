<template>
 <div>
     <nav class = "blue-grey lighten-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">To-Do by Nikita Filatov</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="">Sass</a></li>
        <li><a href="">Components</a></li>
        <li><a href="">JavaScript</a></li>
      </ul>
    </div>
  </nav>
   <a class="btn-floating btn-large blue-grey lighten-1 pulse" @click="show = !show"><i class="material-icons">edit</i></a>
   <transition enter-class="scale-out" enter-active-class="scale-transition"
						leave-active-class="scale-transition scale-out"
						mode="out-in">
   <div class="row" v-if="show">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input  id="first_name" type="text" @focus="active=true">
          <label for="first_name" :class="classN">First Name</label>
        </div>
      </div>
    </form>
  </div>
   </transition>

  
 </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      show: false,
      active:false
    }
  },
  computed: {
   classN() {
     return this.active ? 'active' : '';
   }
  }
}
</script>

<style scoped>
  padding {
    padding: 15px 0; 
  }

</style>
