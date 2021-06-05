<template>
  <hooper :itemsToShow="2" :centerMode="false" :infiniteScroll="false">
    <slide>
      <memberCard />
    </slide>
    <slide>
      <memberCard />
    </slide>
    <slide>
      <memberCard />
    </slide>
    <slide>
      <memberCard />
    </slide>
    <slide>
      <memberCard />
    </slide>
    <slide>
      <memberCard />
    </slide>
    <slide>
      <memberCard />
    </slide>
    <hooper-pagination slot="hooper-addons" class="firstSliderClone-pag"></hooper-pagination>
  </hooper>
</template>

<script>
import memberCard from "../../memberCard";
import {Hooper, Pagination as HooperPagination, Slide} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    memberCard,
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/null";
.hooper-pagination{
  display: none !important;
}
</style>