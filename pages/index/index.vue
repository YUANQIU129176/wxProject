<template>
  <div class="container">
    <div class="search-wrapper">
      <div class="search-input">
        <icon
          type="search"
          size="16"
        />
        <span class="searchKey">搜索</span>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="banner_all">
      <swiper indicator-dots>
        <block
          v-for="(item,index) in imgUrls"
          :key="index"
        >
          <swiper-item>
            <img
              :src="item.image_src"
              class="slide-image"
            />
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 导航条 -->
    <div class="nav-wrpper">
      <div class="navIco">
        <a
          href="javascript:;"
          v-for="(item,index) in navList"
          :key="index"
        >
          <img
            :src="item.image_src"
            alt=""
          >
        </a>
      </div>
    </div>
    <!-- 楼层 -->
    <div class="floor_all">
      <div class="floor_item"
        v-for="(item,index) in floorTitle"
          :key="index"
      >
        <div
          class="floor_title">
          <img
            :src="item.floor_title.image_src"
            alt=""
            mode='aspectFill'
          >
        </div>
        <div class="product">
          <!-- 左边 -->
          <div
            class="product_left"
            mode='aspectFill'
          >
            <a href="javascript:;"><img
                :src="item.product_list[0].image_src"
                alt=""
              ></a>
          </div>
          <!-- 右侧 -->
          <div class="product_right">
            <a href="javascript:;"  v-if="index1!=0"
            v-for="(item1,index1) in item.product_list" :key="index1"><img
                :src="item1.image_src"
                alt=""
                mode='aspectFill'
              ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request.js"
export default {
  data() {
    return {
      imgUrls: [],
      navList: [],
      floorTitle: []
    };
  },
  mounted() {
    this.getData();
    // wx.request({
    //   url: "https://itjustfun.cn/api/public/v1/home/swiperdata",
    //   success: res => {
    //     console.log(res);
    //     const { data } = res.data;
    //     this.imgUrls = data;
    //   }
    // });
    // wx.request({
    //   url: "https://itjustfun.cn/api/public/v1/home/catitems",
    //   success: res => {
    //     console.log(res);
    //     const { data } = res.data;
    //     this.navList = data;
    //   }
    // });
    // wx.request({
    //   url: "https://www.zhengzhicheng.cn/api/public/v1/home/floordata",
    //   success: res => {
    //     console.log(res);
    //     const { message } = res.data;
    //     this.floorTitle = message;
    //   }
    // });
  },
  methods: {
    // 返回的是resolve（then参数函数）里面res
      // try{}catch(err){} 捕获代码块错误信息
    async getData(){
      try{
        let res = await request("https://itjustfun.cn/api/public/v1/home/swiperdata");
        const {data} = res.data;
        this.imgUrls = data;
      }catch(err){ console.log(err) }

      // 请求分类数据
      try{
        let res = await request("https://itjustfun.cn/api/public/v1/home/catitems");
        const {data} = res.data;
        this.navList = data;
      }catch(err){ console.log(err) }

      // 请求楼层数据
      try{
        let res = await request("https://www.zhengzhicheng.cn/api/public/v1/home/floordata");
        const {message} = res.data;
        this.floorTitle = message;
      }catch(err){ console.log(err) }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/index.scss'
</style>
