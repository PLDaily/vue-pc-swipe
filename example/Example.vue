<style type="text/css">
  * {
    padding: 0;
    margin: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  .example {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .swipe {
    width: 600px;
    display: block;
    height: 300px;
    border: 1px solid;
    margin: 100px auto;
    position: relative;
  }
  .swipe .swipe-content {
    width: 100%;
    height: 100%;
    font-size: 36px;
    display: flex;
    align-items: center;
    color: white;
    font-weight: 500;
    justify-content: center;
  }
  .swipe .prev {
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    width:50px;
    height:50px;
    cursor: pointer;
    background: url(./images/left.png) no-repeat 0 0;
    background-size: 100%;
  }
  .swipe .next {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    width:50px;
    height:50px;
    cursor: pointer;
    background: url(./images/right.png) no-repeat 0 0;
    background-size: 100%;
  }
  .swipe .swipe-dots {
    position: absolute;

  }
  .swipe .swipe-dots {
    position: absolute;
    bottom:0;
    width: 100%;
    text-align: center;
    margin-bottom:20px;
    list-style:none;
    display: block;
  }
  .swipe .swipe-dots .swipe-dot{
    width:10px;
    height:10px;
    border-radius:10px;
    border:1px solid #fff;
    margin:0 5px;
    display: inline-block;
    cursor: pointer;
  }
  .swipe .swipe-dots .swipe-dot.active{
    background-color: #ffffff;
  }
  .example .btn {
    padding: 3px 8px;
    border-radius: 4px;
    display: inline-block;
    margin-left: 20px;
    border: 1px solid;
    cursor: pointer;
  }
</style>
<template>
  <div class="example">
    <div class="swipe">
      <swipe ref="myPcSwipe" :continuous="true" :auto="5000" :startSlide="3" @change="chageSwipe">
        <swipe-item v-for="data in swipeArr" :style="{backgroundColor: data['bgColor']}">
          <div class="swipe-content">{{data['content']}}</div>
        </swipe-item>
      </swipe>
      <div class="prev" @click="prev"></div>
      <div class="next" @click="next"></div>
      <ul class="swipe-dots">
        <li v-for="(data, index) in swipeArr" :key="index" :class="index === pos ? 'swipe-dot active' : 'swipe-dot'" @click="slide(index)"></li>
      </ul>
    </div>
    <div class="btn-group"> 
      <div class="btn" @click="prev">prev</div>
      <div class="btn" @click="next">next</div>
      <div class="btn" @click="slide(2)">go to slide2</div>
    </div>
  </div>
</template>
<script>
import {Swipe, SwipeItem} from '../src'
export default {
  name: 'Example',
  components: {
    Swipe,
    SwipeItem
  },
  data () {
    let swipeArr = [
      {
        content: 'slide0',
        bgColor: '#337ab7'
      },
      {
        content: 'slide1',
        bgColor: '#5cb85c'
      },
      {
        content: 'slide2',
        bgColor: '#d9534f'
      },
      {
        content: 'slide3',
        bgColor: '#f0ad4e'
      }
    ]
    let pos = 0
    return {
      swipeArr,
      pos
    }
  },
  methods: {
    prev () {
      this.$refs.myPcSwipe.prev()
    },
    next () {
      this.$refs.myPcSwipe.next()
    },
    slide (index) {
      this.$refs.myPcSwipe.slide(index)
    },
    getPos () {
      return this.$refs.myPcSwipe.getPos()
    },
    getNumSlides () {
      return this.$refs.myPcSwipe.getNumSlides()
    },
    chageSwipe (index) {
      this.pos = index
      console.log(index)
    }
  }
}
</script>
