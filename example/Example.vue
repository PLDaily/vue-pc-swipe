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
  }
  .swipe div {
    width: 100%;
    height: 100%;
    font-size: 36px;
    display: flex;
    align-items: center;
    color: white;
    font-weight: 500;
    justify-content: center;
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
        <swipe-item v-for="(data, index) in swipeArr" :key="index" :style="{backgroundColor: data['bgColor']}">
          <div>{{data['content']}}</div>
        </swipe-item>
      </swipe>
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
    return {
      swipeArr
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
    chageSwipe (index) {
      console.log(index)
    }
  }
}
</script>
