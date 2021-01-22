<template>
  <div class="wrapper" ref="text">
    <div>
      <button @click="btnCLick">按钮</button>
      <div @click="divClick">div</div>
      <ul class="content">
        <li>1列表</li>
        <li>2列表</li>
        <li>3列表</li>
        <li>4列表</li>
        <li>5列表</li>
        <li>6列表</li>
        <li>7列表</li>
        <li>8列表</li>
        <li>9列表</li>
        <li>10列表</li>
        <li>11列表</li>
        <li>12列表</li>
        <li>13列表</li>
        <li>14列表</li>
        <li>15列表</li>
        <li>16列表</li>
        <li>17列表</li>
        <li>18列表</li>
        <li>19列表</li>
        <li>20列表</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Category',
  data(){
    return {
      scroll:null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.text,{

    })

    this.scroll.on('scroll',(position)=>{
      console.log(position);
    })
    
  },
  methods:{
    btnCLick(){
      console.log('btnClick');
    },
    divClick(){
      console.log('divclick');
    }
  }

}
</script>
<style  scoped>
.wrapper{
  height: 150px;
  background-color: rgb(211, 129, 70);
  overflow: hidden;
}
</style>