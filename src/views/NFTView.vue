<script>
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import gsap from 'gsap';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/vue';
import Cat1 from '../assets/nft/cat1.jpg';
import Cat2 from '../assets/nft/cat2.jpg';
import Cat3 from '../assets/nft/cat3.jpg';
import Cat4 from '../assets/nft/cat4.jpg';

export default {
  setup() {},
  data() {
    return {
      swiper: undefined,
      Cat1,
      Cat2,
      Cat3,
      Cat4,
      tweenedPrice: 10,
      price: 10,
      currentCat: {
        id: 0,
        title: 'Anime Cat #1',
        img: Cat1,
        price: 10,
      },
      cats: [
        {
          id: 0,
          title: 'Anime Cat #1',
          img: Cat1,
          price: 10,
        },
        {
          id: 1,
          title: 'Anime Cat #2',
          img: Cat2,
          price: 15,
        },
        {
          id: 2,
          title: 'Anime Cat #3',
          img: Cat3,
          price: 5,
        },
        {
          id: 3,
          title: 'Anime Cat #4',
          img: Cat4,
          price: 20,
        },
      ],
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    changeCat(event) {
      this.currentCat = this.cats.find(
        (cat) => cat.id === Number(event.target.value),
      );
      this.price = this.currentCat.price;
      this.swiper.slideTo(event.target.value);
    },
  },
  watch: {
    price(n) {
      const dec = Number(n);
      gsap.to(this, {
        duration: 1,
        tweenedPrice: dec || 0,
        modifiers: { tweenedPrice: (tweenedPrice) => tweenedPrice.toFixed(0) },
      });
    },
  },
  components: { Swiper, SwiperSlide },
};
</script>
<template>
  <div class="hero min-h-screen">
    <div class="flex flex-col items-center">
      <swiper :slides-per-view="1" class="w-96 h-96" @swiper="onSwiper">
        <swiper-slide v-for="cat in cats" :key="cat.title">
          <img :src="cat.img" class="w-96 h-96 mask mask-squircle" />
        </swiper-slide>
      </swiper>
      <form action="" class="form-control w-full max-w-xs mt-5">
        <label class="label">
          <span class="label-text">Choose your NFT!</span>
        </label>
        <select class="select select-primary" @change="changeCat">
          <option
            v-for="cat in cats"
            :key="cat.title"
            :value="cat.id"
            :class="{ selected: cat.title === currentCat.title }"
          >
            {{ cat.title }}
          </option>
        </select>
      </form>
      <button class="btn mt-5 btn-primary">
        Get this for {{ tweenedPrice }}$
      </button>
    </div>
  </div>
</template>
