<template>
  <div class="container">
    <section class="statistics">
      <div class="statistics__wrapper">
        <div class="text">
          <p class="title">Обращения граждан</p>
          <p class="descr">
            Расскажите о проблеме, которую просите решить, заполнив простые поля в заявке: тема, краткое описание проблемы
          </p>
          <a href="#">Подать обращение</a>
        </div>
        <div class="stata">
          <div class="all">
            <p class="title">Обращений подано</p>
            <p class="allText">
              <span class="big">1299</span><span class="middle">/ 215</span><span class="small"> в работе</span>
            </p>
          </div>
          <div class="complted">
            <div class="all">
              <p class="title">Решено</p>
              <p class="allText">
                <span class="big_complted">976</span><span class="middle">/ 42</span><span class="small"> за неделю</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Statistics"
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/null";

.container{
  margin: auto;
  width: size(1345, 1600);
  @media(max-width: 768px){
    width: size(704, 768);
  }
}

.statistics{
  margin-top: size(50, 1600);
  border-radius: 8px;
  background: url("../assets/img/stat.png") no-repeat center top;
  width: auto;
  background-size: cover;
  height: size(237, 1600);
  @media (max-width: 768px) {
    height: size(310, 768);
    width: 100%;
    margin-top: size(100, 768);
  }
  @media (max-width: 440px) {
    height: size(450, 320);
    width: 100%;
    margin-top: size(200, 320);
  }
}

.statistics__wrapper{
  width: 100%;
  padding: size(27, 1600);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: size(27, 768);
  }
  @media (max-width: 768px) {
    padding: size(25, 320);
  }
}

.text{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: size(410, 1600);
  text-align: left;
  @media (max-width: 768px) {
    width: size(466, 768);
  }
  @media (max-width: 440px) {
    width: 100%;
    height: 50%;
  }
  .title{
    font-style: normal;
    font-weight: bold;
    font-size: size(36, 1600);
    line-height: size(44, 1600);
    letter-spacing: 0.5px;
    color: white;
    @media (max-width: 768px) {
      width: size(466, 768);
      font-weight: bold;
      font-size: size(26, 768);
      line-height: size(36, 768);
      letter-spacing: 0.5px;
    }
    @media (max-width: 440px) {
      font-style: normal;
      font-weight: bold;
      font-size: size(16, 320);
      line-height: size(26, 320);
      letter-spacing: 0.5px;
    }
  }
  .descr{
    font-style: normal;
    font-weight: 600;
    font-size: size(14, 1600);
    line-height: size(22, 1600);
    color: #FFFFFF;
    @media (max-width: 768px) {
      font-style: normal;
      font-weight: normal;
      font-size: size(14, 768);
      line-height: size(22, 768);
      color: #FFFFFF;
    }
    @media (max-width: 440px) {
      font-style: normal;
      font-weight: normal;
      font-size: size(14, 320);
      line-height: size(22, 320);
      color: #FFFFFF;
    }
  }
  a{
    background-color: #E9242A;
    border-radius: 3px;
    padding: size(8, 1600) size(34, 1600);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: size(14, 1600);
    line-height: size(20, 1600);
    @media (max-width: 768px) {
      width: size(210, 768);
      height: size(35, 768);
      font-size: size(14, 768);
      line-height: size(20, 768);
    }
    @media (max-width: 440px) {
      width: 100%;
      height: size(35, 320);
      font-size: size(14, 320);
      line-height: size(20, 320);
    }
  }
}
.stata{
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 440px) {
    width: 100%;
    flex-direction: column;
    align-items: start;
    height: 50%;
    justify-content: space-around;
  }
  margin-top: size(40, 1600);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .all{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    .title{
      font-style: normal;
      font-weight: 600;
      font-size: size(14, 1600);
      line-height: size(16, 1600);
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: white;
      @media (max-width: 768px) {
        font-weight: bold;
        font-size: size(12, 768);
        line-height: size(17, 768);
        text-transform: uppercase;
        color: #FFFFFF;
      }
      @media (max-width: 440px) {
        font-weight: bold;
        font-size: size(12, 320);
        line-height: size(17, 320);
        text-transform: uppercase;
        color: #FFFFFF;
      }
    }
    .allText{
      height: size(150, 1600) !important;
      color: white;
      .big{
        font-style: normal;
        font-weight: bold;
        font-size: size(100, 1600);
        line-height: size(136, 1600);
        position: relative;
        z-index: 0;
        @media (max-width: 768px) {
          font-size: size(70, 768);
          line-height: size(70, 768);
        }
        @media (max-width: 440px) {
          font-size: size(50, 320);
          line-height: size(68, 320);
          &::before{
            position: absolute;
            content: " ";
            width: size(40, 320) !important;
            height: size(40, 320) !important;
            border-radius: 50%;
            background-color: #246CB7;
            z-index: -1;
            top: size(130, 1600) !important;
            left: - size(5, 1600);
          }
        }
        &::before{
          position: absolute;
          content: " ";
          width: size(60, 1600);
          height: size(60, 1600);
          border-radius: 50%;
          background-color: #246CB7;
          z-index: -1;
          top: size(60, 1600);
          left: - size(5, 1600);
        }
      }
      .middle{
        font-style: normal;
        font-weight: bold;
        font-size: size(44, 1600);
        line-height: size(60, 1600);
        color: #FFFFFF;
        @media (max-width: 768px) {
          font-size: size(35, 768);
          line-height: size(40, 768);
        }
        @media (max-width: 440px) {
          font-size: size(25, 320);
          line-height: size(34, 320);
        }
      }
      .small{
        font-style: normal;
        font-weight: 600;
        font-size: size(14, 1600);
        line-height: size(22, 1600);
        color: #FFFFFF;
        @media (max-width: 768px) {
          font-size: size(12, 768);
          line-height: size(5, 768);
        }
        @media (max-width: 440px) {
          font-size: size(12, 320);
          line-height: size(12, 320);
        }
      }
    }
  }
}

.complted{
  margin-left: size(70, 1600);
  @media (max-width: 440px) {
    margin-left: 0;
  }
}

.big_complted{
  font-style: normal;
  font-weight: bold;
  font-size: size(100, 1600);
  line-height: size(136, 1600);
  position: relative;
  z-index: 0;
  @media (max-width: 768px) {
    font-size: size(70, 768);
    line-height: size(70, 768);
  }
  @media (max-width: 440px) {
    font-size: size(50, 320);
    line-height: size(68, 320);
  }
  &::before{
    position: absolute;
    content: " ";
    width: size(60, 1600);
    height: size(60, 1600);
    border-radius: 50%;
    background-color: #98D052;
    z-index: -1;
    top: size(60, 1600);
    left: - size(5, 1600);
  }
}
</style>