X`<template>
  <div class="news__card">
    <div class="card__wrapper">
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22.5" cy="22.5" r="22.5" fill="#E8F2FC"/>
        <path d="M24.7374 29.6157L25.6548 17.3605H26.6499V16.0065H18.4235V17.3605H19.4186L20.336 29.6157H19.3881L18.2372 30.8346H22.1643H22.9091H26.8365L25.6853 29.6157H24.7374Z" fill="#1879DE"/>
        <path d="M25.4493 15.0582L24.4564 12.7642C24.5439 12.6836 24.5988 12.5685 24.5988 12.4402C24.5988 12.1971 24.4017 12 24.1585 12C23.9154 12 23.7183 12.1971 23.7183 12.4402C23.7183 12.6834 23.9154 12.8802 24.1585 12.8802C24.188 12.8802 24.2171 12.8774 24.2446 12.8718L25.1908 15.0582H19.8818L20.828 12.8718C20.8558 12.8774 20.8848 12.8802 20.9141 12.8802C21.1572 12.8802 21.3543 12.6834 21.3543 12.4402C21.3543 12.1971 21.1572 12 20.9141 12C20.6712 12 20.4741 12.1971 20.4741 12.4402C20.4741 12.5683 20.529 12.6836 20.6163 12.7642L19.6236 15.0582H18V15.837H27.0731V15.0582H25.4493Z" fill="#1879DE"/>
      </svg>
      <div class="card__title">
        Общественные палаты субъектов Российской Федерации
      </div>
      <ul class="card__list">
        <li class="list__item">
          <a href="#">Новости</a>
        </li>
        <li class="list__item">
          <a href="#">Палаты по округам</a>
        </li>
        <li class="list__item">
          <a href="#">Материалы</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "redCard"
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/null";
.news__cards{
  width: 100%;
  .news__cards-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .news__card{
      width: size(425, 1600);
      height: size(303, 1600);
      border-radius: 8px;
      border: 1px solid #E5E8EE;
      box-shadow: 2px 1px 14px 0px rgba(34, 60, 80, 0.2);
      @media (max-width: 768px) {
        background-color: white;
        width: size(344, 768);
        height: size(250, 768);
        box-shadow: none;
      }
      @media (max-width: 440px) {
        width: size(288, 320);
        height: size(255, 320);
        box-shadow: 0px 0px 29px -8px rgba(34, 60, 80, 0.06);
      }
      .card__wrapper{
        border-radius: 8px;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: size(30, 1600);
        height: 100%;
        svg{
          width: size(45, 1600);
          font-style: normal;
          font-weight: 600;
          font-size: size(14, 1600);
          line-height: size(22, 1600);
          color: #1F3245;
          opacity: 0.9;
          @media (max-width: 768px) {
            width: size(45, 768);
            font-size: size(14, 768);
            line-height: size(22, 768)
          }
          @media (max-width: 440px) {
            width: size(45, 320);
            font-size: size(14, 320);
            line-height: size(22, 320)
          }
        }
        .card__title{
          text-align: left;
          font-style: normal;
          font-weight: 600;
          font-size: size(14, 1600);
          line-height: size(22,1600);
          color: #1F3245;
          opacity: 0.9;
          margin-top: - size(32, 1600);
          @media (max-width: 768px) {
            font-style: normal;
            font-weight: 600;
            font-size: size(14, 768);
            line-height: size(22, 768);
            color: #1F3245;
            opacity: 0.9;
            margin-top: - size(40, 768);
          }
          @media (max-width: 440px) {
            margin-top: - size(12, 1600);
            font-style: normal;
            font-weight: 600;
            font-size: size(14, 320);
            line-height: size(22, 320);
            color: #1F3245;
            opacity: 0.9;
          }
        }
        .card__list{
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: space-between;
          .list__item{
            a{
              font-family: Open Sans;
              font-style: normal;
              font-weight: normal;
              font-size: size(14, 1600);
              line-height: size(22, 1600);
              color: #246CB7;
              @media (max-width: 768px) {
                font-style: normal;
                font-weight: normal;
                font-size: size(12, 768);
                line-height: size(22, 768);
                color: #246CB7;
              }
              @media (max-width: 440px) {
                font-style: normal;
                font-weight: normal;
                font-size: size(12, 320);
                line-height: size(22, 320);
                color: #246CB7;
              }
            }
          }
        }
        @media (max-width: 768px) {
          padding: size(20, 768);
        }
        @media (max-width: 440px) {
          padding: size(20, 320);
        }
      }
    }
  }
}
</style>