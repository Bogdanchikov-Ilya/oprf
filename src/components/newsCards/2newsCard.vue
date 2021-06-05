<template>
  <div class="news__card">
    <div class="card__wrapper">
      <span class="link"><a href="#">Общественная дипломатия</a></span>
      <p class="card__title">Александр Малькевич: «Платформа YouTube усиливает дискриминационную политику ...</p>
      <div class="pid-title">
        Член ОП РФ призывает бороться с цензурой западных цифровых монополистов
      </div>
      <div class="date">19 августа 2020</div>
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
      @media (max-width: 768px) {
        width: size(344, 768);
        height: size(210, 768);
      }
      .card__wrapper{
        border-radius: 8px;
        background: white;
        background-size: cover;
        display: flex;
        flex-direction: column;

        .pid-title{
          font-style: normal;
          font-weight: normal;
          font-size: size(14, 1600);
          line-height: size(22, 1600);
          color: rgba(23, 23, 23, 0.8);
          mix-blend-mode: normal;
          text-align: left;
          @media (max-width: 768px) {
            font-size: size(12, 768);
            line-height: size(18, 768);
            margin-top: - size(18, 768);
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
          line-height: size(24,1600);
          color: #1F3245;
          text-align: left;
          @media (max-width: 768px) {
            font-size: size(14, 768);
            line-height: size(22, 768);
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
          background-color: #DDEDFE;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          padding: size(2, 1600) size(10, 1600);
          @media (max-width: 768px) {
            padding: size(2, 768) size(10, 768);
            border-radius: 3px;
          }
          a{
            font-style: normal;
            font-weight: 600;
            font-size: size(13, 1600);
            line-height: size(16, 1600);
            text-transform: uppercase;
            color: #003E78;
            opacity: 0.8;
            @media (max-width: 768px) {
              font-style: normal;
              font-weight: 600;
              font-size: size(10, 768);
              line-height: size(13, 768);
              color: #003E78;
            }
          }
        }
        .date{
          font-size: size(12, 1600);
          line-height: size(18, 1600);
          display: flex;
          align-items: center;
          color: rgba(23, 23, 23, 0.8);
          @media (max-width: 768px) {
            font-style: normal;
            font-weight: 600;
            font-size: size(12, 768);
            line-height: size(16, 768);
            display: flex;
            align-items: center;
          }
        }
        @media (max-width: 768px) {
          padding: size(20, 768);
        }
      }
    }
  }
}
</style>