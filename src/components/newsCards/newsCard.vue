<template>
  <div class="news__card">
    <div class="card__wrapper" v-bind:style='{ backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + news.preview + ")",}'>
      <div class="tags">
        <span v-for="tag in news.tags" class="link">
          <a href="#">{{ tag.title }}</a>
        </span>
      </div>
      <p class="card__title">{{ news.title }}</p>
      <div class="pid-title">
        {{ news.content }}
      </div>
      <div class="date">{{ news.publish_date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  name: "redCard"
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/null";
.news__cards{
  padding-top: size(50, 1600);
  width: 100%;
  .news__cards-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .news__card{
      background: rgb(237,237,237);
      background: linear-gradient(90deg, rgba(237,237,237,1) 0%, rgba(254,254,254,1) 100%);
      width: size(425, 1600);
      height: size(260, 1600);
      border-radius: 8px;
      box-shadow: 2px 1px 14px 0px rgba(34, 60, 80, 0.2);
      @media (max-width: 768px) {
        width: size(344, 768);
        height: size(210, 768);
      }
      @media (max-width: 440px) {
        width: size(293, 320);
        height: size(219, 320);
        margin: 0;
      }
      .card__wrapper{
        background-blend-mode: hard-light;//или multiply

        border-radius: 8px;
        //background: url("http://195.245.112.165:83/storage/uploads/preview/uJcSWU6W0wDrIxfCwctVCuC0mqXjlmHPPTbeVbDU.jpg") no-repeat center top;
        background-size: cover;
        display: flex;
        flex-direction: column;

        .pid-title{
          font-style: normal;
          font-size: size(14, 1600);
          text-transform: uppercase;
          text-align: left;
          font-weight: normal;
          line-height: size(22, 1600);
          color: #FFFFFF;
          margin-top: - size(18, 1600);
          @media (max-width: 768px) {
            font-size: size(12, 768);
            line-height: size(18, 768);
            margin-top: - size(10, 768);
          }
          @media (max-width: 440px) {
            font-style: normal;
            font-weight: normal;
            font-size: size(12, 320);
            line-height: size(18, 320);
            color: #FFFFFF;
          }
        }
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        padding: size(25, 1600);
        .card__title{
          font-style: normal;
          font-weight: 600;
          font-size: size(18, 1600);
          text-align: left;
          line-height: size(24, 1600);
          color: #FFFFFF;
          @media (max-width: 768px) {
            font-size: size(14, 768);
            line-height: size(22, 768);
          }
          @media (max-width: 440px) {
            font-style: normal;
            font-weight: 600;
            font-size: size(14, 320);
            line-height: size(22, 320);
            color: #FFFFFF;
          }
        }
        .card__footer{
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .text{
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-style: normal;
            font-weight: normal;
            font-size: size(14, 1600);
            line-height: size(22, 1600);
          }
        }
        //.background{
        //  background: url("../assets/img/newsCard.png");
        //  position: absolute;
        //  left: size(220, 1600);
        //  top: size(92, 1600);
        //  width: size(368, 1600);
        //  height: size(398, 1600);
        //  opacity: 0.7;
        //  background-size: contain!important;
        //  z-index: 1;
        //}
        .link{
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          padding: size(2, 1600) size(10, 1600);
          @media (max-width: 768px) {
            padding: size(2, 768) size(10, 768);
            border-radius: 3px;
          }
          @media (max-width: 440px) {
            padding: size(2, 320) size(10, 320);
          }
          a{
            color: #003E78;
            font-style: normal;
            font-weight: 600;
            font-size: size(12, 1600);
            line-height: size(16, 1600);
            opacity: 0.85;
            @media (max-width: 768px) {
              font-style: normal;
              font-weight: 600;
              font-size: size(10, 768);
              line-height: size(13, 768);
              color: #003E78;
            }
            @media (max-width: 440px) {
              font-style: normal;
              font-weight: 600;
              font-size: size(10, 320);
              line-height: size(12, 320);
              /* identical to box height, or 127% */

              display: flex;
              align-items: center;
              text-transform: uppercase;

              /* #003E78 */

              color: #003E78;
            }
          }
        }
        .date{
          font-style: normal;
          font-weight: normal;
          font-size: size(12, 1600);
          line-height: size(18, 1600);
          display: flex;
          align-items: center;
          color: #FFFFFF;
          @media (max-width: 768px) {
            font-style: normal;
            font-weight: 600;
            font-size: size(12, 768);
            line-height: size(16, 768);
            display: flex;
            align-items: center;
            color: #FFFFFF;
          }
          @media (max-width: 440px) {
            font-style: normal;
            font-weight: 600;
            font-size: size(16, 320);
            line-height: size(15, 320);
            display: flex;
            align-items: center;
            color: #FFFFFF;
          }
        }
        @media (max-width: 768px) {
          padding: size(20, 768);
        }
        @media (max-width: 440px) {
          padding: size(17, 320);
        }
      }
    }
  }
}

.tags{
  display: flex;
  justify-content: space-between;
  span{
    margin-right: size(10, 1600) !important;
    @media (max-width: 440px) {
      margin-right: size(10, 320) !important;
    }
  }
}
</style>