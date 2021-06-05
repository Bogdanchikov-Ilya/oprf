<template>
  <div class="news__card">
    <div class="card__wrapper">
      <span class="link"><a href="#">Социальная политика</a></span>
      <div class="speaker">
        <img src="../../assets/img/card-avatar.png" alt="" class="avatar">
        <div class="text">
          <p class="fio">Сергей Рыбальченко</p>
          <span class="date">19 августа, 2020</span>
        </div>
      </div>
      <div class="footer">
        <p class="title">В России хотят изменить систему оплаты и декто....</p>
        <div class="quote">
          <p>Это будет способствовать защите прав работающих женщин с  семейными обязанн...</p>
        </div>
      </div>
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
        padding: size(25, 1600);
        border-radius: 8px;
        background: white;
        height: 100%;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .link{
          background-color: #DDEDFE;
          display: flex;
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
        .speaker{
          margin-top: size(15, 1600);
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: size(257, 1600);
          @media (max-width: 768px) {
            margin-top: size(10, 768);
            width: size(257, 768);
          }
          .avatar{
            width: size(60, 1600);
            @media (max-width: 768px) {
              width: size(50, 768);
            }
          }
          .text{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;
            .fio{
              text-align: left;
              font-style: normal;
              font-weight: bold;
              font-size: size(16, 1600);
              line-height: size(24, 1600);
              color: #1F3245;
              @media (max-width: 768px) {
                font-size: size(16, 768);
                line-height: size(24, 768);
              }
            }
            .date{
              text-align: left;
              font-size: size(12, 1600);
              line-height: size(18, 1600);
              display: flex;
              align-items: center;
              color: rgba(23, 23, 23, 0.8);
              @media (max-width: 768px) {
                font-size: size(12, 768);
                line-height: size(18, 768);
              }
            }
          }
        }
        .footer{
          .title{
            margin-top: size(7, 1600);
            font-style: normal;
            font-weight: 600;
            font-size: size(14, 1600);
            line-height: size(22, 1600);
            color: rgba(23, 23, 23, 0.8);
            text-align: left;
            @media (max-width: 768px) {
              margin-top: size(7, 768);
              font-size: size(11, 768);
              line-height: size(17, 768);
            }
          }
          .quote{
            margin-top: size(13, 1600);
            background-color: #F1F4FA;
            border-radius: 8px;
            padding: size(10, 1600) size(30, 1600);
            @media (max-width: 768px) {
              margin-top: size(13, 768);
              padding: size(10, 768) size(0, 768);
            }
            p{
              padding-left: size(10, 1600);
              font-weight: normal;
              font-size: size(14, 1600);
              line-height: size(22, 1600);
              color: rgba(23, 23, 23, 0.8);
              text-align: start;
              width: size(309, 1600);
              position: relative;
              @media (max-width: 768px) {
                padding-left: size(5, 768);
                font-size: size(12, 768);
                line-height: size(22, 768);
                width: size(309, 768);
              }
              &:before{
                position: absolute;
                content: '”';
                font-size: size(33, 1600);
                color: #003E78;
                font-weight: 600;
                top: size(5, 1600);
                left: - size(18, 1600);
                @media (max-width: 768px) {
                  font-size: size(22, 768);
                  top: size(5, 768);
                  left: - size(10, 768);
                }
              }
              &:after{
                position: absolute;
                content: '”';
                font-size: size(33, 1600);
                color: #003E78;
                font-weight: 600;
                left: 100%;
                @media (max-width: 768px) {
                  font-size: size(22, 768);
                  left: 95%;
                }
              }
            }
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