<template>
  <div class="news__card">
    <div class="card__wrapper">
      <p class="pid-title">мичуринск 26-27 сентября</p>
      <div class="card__title">
        «Сообщество» Форум для тех кто действует
      </div>
      <span class="link"><a href="#">форумсообщество.рф</a></span>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
export default {
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
      .card__wrapper{
        .pid-title{
          font-style: normal;
          font-weight: 600;
          font-size: size(14, 1600);
          line-height: size(16, 1600);
          text-transform: uppercase;
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
          margin-top: size(50, 1600);
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
        .background{
          background: url("../../assets/img/card2_back.png");
          position: absolute;
          left: size(220, 1600);
          top: size(92, 1600);
          width: size(368, 1600);
          height: size(398, 1600);
          opacity: 0.7;
          border-radius: 100%;
          background-size: contain!important;
          z-index: 1;
        }
        .link{
          background-color: #082037;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          padding: 2px 10px;
          a{
            color: white;
            font-style: normal;
            font-weight: 600;
            font-size: size(12, 1600);
            line-height: size(16, 1600);
            opacity: 0.85;
          }
        }
      }
    }
  }
}
</style>