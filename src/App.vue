<template>
 <div>
     <nav class = "blue-grey lighten-1 padding">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">To-Do by Nikita Filatov</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="">Мои задачи</a></li>
        <li><a href="">Выполненные задачи</a></li>
        <li><a href="https://www.nikita-filatov.ru/feedback" target="_blank">Поддержка</a></li>
      </ul>
    </div>
  </nav>
   <a class="btn-floating btn-large blue-grey lighten-1 pulse fixed" @click="show = !show"><i class="material-icons">edit</i></a>
   <transition enter-class="scale-out" enter-active-class="scale-transition"
						leave-active-class="scale-transition scale-out"
						mode="out-in">
   <div class="row" v-show="show">
        <div class="input-field col s6">
          <input  id="first_name" type="text" 
          @focus="active=true" 
          @input="onInput($event.target.value)"
          :value="value"
          >
          <label for="first_name" :class="classN">First Name</label>
      </div>
   <div>
     <a class="waves-effect waves-light btn" @click="call">button</a>
     </div> 
  </div>
   </transition>
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{value}}</td>
          </tr>
        </tbody>
      </table>
  
 </div>
</template>

<script>

export default {
  name: 'app',

  data() {
    return {
      show: false,
      active:false,
      value:''
    }
  },
  computed: {
   classN() {
     return this.active ? 'active' : '';
   }
  },
  methods: {
    onInput(value) {
        this.value = value;
    },
  }
}
</script>

<style scoped>
  .padding {
    padding:0 15px; 
  }
  .fixed {
    position: fixed;
    right:40px;
    bottom: 7%;
  }

</style>
