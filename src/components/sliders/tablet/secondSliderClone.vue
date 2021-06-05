<template>
  <hooper class="secondSliderClone" :itemsToShow="2" :centerMode="false" :infiniteScroll="false">
    <slide>
      <videoCard />
    </slide>
    <slide>
      <videoCard />
    </slide>
    <slide>
      <videoCard />
    </slide>
    <hooper-pagination slot="hooper-addons" class="firstSliderClone-pag"></hooper-pagination>
  </hooper>
</template>

<script>
import videoCard from "../../videoCard";
import {Hooper, Pagination as HooperPagination, Slide} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    videoCard,
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/null";
.secondSliderClone{
  display: none;
  max-height: size(500, 1600);
  @media (max-width: 768px) {
    display: block;
    height: 100% !important;
  }
}

.news__cards{
  padding-top: size(50, 1600);
  width: 100%;
  border-radius: 8px;
  .news__cards-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    .news__card{
      background: rgb(237,237,237);
      background: linear-gradient(90deg, rgba(237,237,237,1) 0%, rgba(254,254,254,1) 100%);
      width: size(344, 768);
      height: size(226, 768);
      border-radius: 8px;
      box-shadow: 2px 1px 14px 0px rgba(34, 60, 80, 0.1);
      .card__wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        padding: size(25, 768);
        .card__title{
          text-align: left;
          font-style: normal;
          font-weight: 600;
          font-size: size(18, 768);
          line-height: size(24, 768);
          width: size(211, 768);
        }
        .card__phone{
          background-color: #D32E2E;
          border-radius: 8px;
          font-style: normal;
          font-weight: bold;
          font-size: size(23, 768);
          line-height: size(30, 768);
          letter-spacing: 2px;
          color: white;
          padding: size(7, 768) size(30, 768);
        }
        .card__footer{
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .phone__info{
            text-align: left;
            font-style: normal;
            font-weight: 600;
            font-size: size(12, 768);
            line-height: size(22, 768);
          }
          .text{
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-style: normal;
            font-weight: normal;
            font-size: size(12, 768);
            line-height: size(22, 768);
            svg{
              width: size(19, 768);
            }
          }
        }
        .background{
          background: url("../../../assets/img/card1_back.png");
          position: absolute;
          left: size(220, 768);
          top: size(92, 768);
          width: size(368, 768);
          height: size(398, 768);
          opacity: 0.7;
          border-radius: 100%;
          background-size: contain!important;
          z-index: 1;
        }
      }
    }
  }
}

.firstSliderClone{
  .firstSliderClone-pag{
    max-width: size(756, 756) !important;
    position: absolute;
    left: - 100%;
  }
  .hooper-indicator{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    @media (max-width: 768px) {
      top: 0;
      left: 0;
      right: 0;
      background-color: #171717;
      display: flex;
    }
  }
  .hooper-indicator:hover, .hooper-indicator.is-active {
    position: absolute;
    background-color: #E9242A !important;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    @media (max-width: 768px) {
      top: size(17, 768);
      left: size(400, 768);
      right: 0;
    }
  }
}
</style>