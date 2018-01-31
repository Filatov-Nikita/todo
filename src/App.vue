<template>
 <div>
   <header>
      <nav class = "cyan darken-3 padding">
        <div class="nav-wrapper">
          <a href="" class="brand-logo">FN - todo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <router-link v-for="(item, index) in menuList"
              :key="index"
              :to="item.url"
              tag="li"
              >
              <a>{{item.text}}</a>
            </router-link>
            <li><a href="https://www.nikita-filatov.ru/feedback" target="_blank">Поддержка</a></li>
          </ul>
        </div>
      </nav>
   </header>

  <div class="container">
      <router-view></router-view>
      </div>

 </div> 
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'app',
  computed: {
      ...mapGetters('menu', {
          menuList: 'items'
    })
  }
}
</script>

<style scoped>
   .padding {
    padding:0 15px; 
  }
</style>
