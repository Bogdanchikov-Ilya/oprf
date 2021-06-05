<template>
  <hooper class="fourthSliderClone" :itemsToShow="1" :centerMode="false" :infiniteScroll="false">
    <slide>
      <cardBottom />
    </slide>
    <slide>
      <cardBottom />
    </slide>
    <slide>
      <cardBottom />
    </slide>
    <hooper-pagination slot="hooper-addons" class="firstSliderClone-pag"></hooper-pagination>
  </hooper>
</template>

<script>
import cardBottom from "../../cardBottom";
import {Hooper, Pagination as HooperPagination, Slide} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    cardBottom,
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/null";
.fourthSliderClone{
  display: none;
  max-height: size(500, 1600);
  @media (max-width: 768px) {
    display: block;
    height: 100% !important;
  }
}
.hooper-pagination{
  display: none !important;
}
</style>