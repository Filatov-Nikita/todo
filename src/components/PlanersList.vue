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
        <div class="modal top" v-show="show">
                <div class="content width">
                    <h4>Новая задача </h4>
                <app-input 
                :name="'new planers'"
                :value="value"
                @onInput="onInput($event)"
                @changeStatus="onChangeStatus($event)"
                >

                </app-input>
        <a class="waves-effect waves-light btn"
            @click="add"
            :disabled="!status"
        >button</a>
                </div>
            </div>
    </transition>
    <div class="list">
       <div class="one">
            <ul v-for="(item, index) in list" :key="index">
                <li>{{index + 1}} {{item.text}}</li>
            </ul>
       </div>
    </div>
 

    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
import AppInput from './Input';
export default {
    data() {
        return {
            show: false,
            value: '',
            status: false
        }
    },
    computed: {
        ...mapGetters('list', {
            list: 'planers'
        })
    },
    methods: {
      add() {
          this.$store.dispatch('list/add', {
              text: this.value
          });
          this.show = false;
        Object.assign(this.$data, this.$options.data());
      },
      onInput(value) {
          this.value = value
      },
      onChangeStatus(status) {
          this.status = status
      }
    },
     components: {
          AppInput
      }

}
</script>
<style scoped>
  .fixed {
    position: fixed;
    right:40px;
    bottom: 7%;
  }
  .width {
      width: 60%;
      padding: 10px;
  }
  .top {
      margin-top: 100px;
      display: block
  }
</style>