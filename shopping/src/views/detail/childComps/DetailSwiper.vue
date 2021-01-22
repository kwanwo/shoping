<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, i) in topImages"
                 :key="i"
                 >
      <img :src="item">

    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
import { debounce } from '@/common/utils'
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      },
    },
  },
  
 
}
</script>
<style  scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>