# vue-pc-swipe

[![Build Status](https://travis-ci.org/PLDaily/vue-pc-swipe.svg?branch=master)](https://travis-ci.org/PLDaily/vue-pc-swipe)
[![npm](https://img.shields.io/npm/v/vue-pc-swipe.svg)](https://www.npmjs.com/package/vue-pc-swipe)
[![npm](https://img.shields.io/npm/dt/vue-pc-swipe.svg)](https://www.npmjs.com/package/vue-pc-swipe)
[![npm](https://img.shields.io/npm/l/vue-pc-swipe.svg)](https://www.npmjs.com/package/vue-pc-swipe)
[![npm](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)

## Overview
> A lightweight vue swipe component that making the slides fade work in pc.

[demo](http://67.218.146.247:8081/)

## Install

### Install vue-pc-swipe

```sh
npm install vue-pc-swipe
```

### Import vue-pc-swipe

ES6/commonjs import style is supported.

```js
// ES6
import {Swipe, SwipeItem} from 'vue-pc-swipe';

// commonjs
var Swipe = require("vue-pc-swipe").Swipe;
var SwipeItem = require("vue-pc-swipe").SwipeItem;
```

## Usage

```html
<swipe ref="myPcSwipe" :continuous="true" :auto="5000" :startSlide="3" @change="chageSwipe">
  <swipe-item>
    <div>slide0</div>
  </swipe-item>
  <swipe-item>
    <div>slide1</div>
  </swipe-item>
  <swipe-item>
    <div>slide2</div>
  </swipe-item>
</swipe>
```

## expand

you can use change function add indicators、prev or next button.[demo](http://67.218.146.247:8081/)

## options

### Attributes

| Option     | Description                              |
| ---------- | ---------------------------------------- |
| continuous | Boolean(default: true) create an infinite feel with no endpoints |
| auto       | Number(default: 5000) speed of prev and next transitions in milliseconds |
| startSlide | Number(defalut: 0) index position Swipe should start at |

### Events

| Option         | Description                              |
| -------------- | ---------------------------------------- |
| prev()         | slide to prev                            |
| next()         | slide to next                            |
| getPos()       | returns current slide index position     |
| getNumSlides() | returns the total amount of slides       |
| slide(index)   | slide to set index position              |
| change(index)  | runs at slide change, index is the current slide index position |


## LICENSE

MIT@[PLDaily](https://github.com/PLDaily)
