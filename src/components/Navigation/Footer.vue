<template>
    <van-tabbar v-model="active"  @change="changeTab">
         <van-tabbar-item >
             <van-icon class="iconfont icon-dianying" slot="icon" size="1.2rem"/>
             <span>电影</span>
        </van-tabbar-item>

        <van-tabbar-item >
             <van-icon class="iconfont icon-yingyuan" slot="icon"  size="1.2rem" />
             <span>影院</span>
        </van-tabbar-item>

       <van-tabbar-item >
             <van-icon class="iconfont icon-wode" slot="icon"  size="1.2rem"/>
             <span>我的</span>
        </van-tabbar-item>


        
    </van-tabbar>
</template>

<script>
//导入需要的图标
import "@/assets/icon/iconfont.css"

import Vue from 'vue';
import { Tabbar, TabbarItem, Icon} from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon)
export default {
     data() {
    return {
      active: 0,
      url:[
          "/films",
          "/cinemas",
          "/center"
      ]
    };
  },
   created(){
       this.active=this.url.indexOf(this.$route.path)
   },
  methods:{
     changeTab(index){
          this.$router.push(this.url[index]);
      }
  }
}
</script>