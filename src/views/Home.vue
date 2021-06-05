<template>
  <div class="home">
    <div class="home__wrapper">
      <Header />
      <div class="header__content">
        <div class="container">
          <div class="content__wrapper">
            <div class="text">
              <button href="#" class="button">Главное</button>
              <p class="title">Как нарушались права россиян на летнем отдыхе в 2019 году?</p>
              <span class="date">
                  <svg class="clock__icon" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52096 0.5C3.92072 0.5 1 3.41133 1 7C1 10.5887 3.92072 13.5 7.52096 13.5C11.1212 13.5 14.0419 10.5887 14.0419 7C14.0419 3.41133 11.1212 0.5 7.52096 0.5ZM7.52096 12.6444C4.39757 12.6444 1.85833 10.1133 1.85833 7C1.85833 3.88665 4.39757 1.35558 7.52096 1.35558C10.6443 1.35558 13.1836 3.88665 13.1836 7C13.1836 10.1133 10.6443 12.6444 7.52096 12.6444Z" fill="white" stroke="white" stroke-width="0.5"/>
<rect x="6.97949" y="2.66797" width="1.08683" height="4.875" rx="0.543413" fill="white" stroke="white" stroke-width="0.5"/>
<rect x="6.97949" y="7.54297" width="1.08333" height="4.89072" rx="0.541667" transform="rotate(-90 6.97949 7.54297)" fill="white" stroke="white" stroke-width="0.5"/>
</svg>

                  Сегодня в 21:00
                </span>
            </div>
            <div class="sliders">
              <VerticalSlider class="VerticalSlider"/>
              <HorizontalSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main__wrapper">
        <div class="main__content-wrapper">
          <div class="container">
            <div class="info__main">
              <p><span class="time">10:15 </span><p class="info__title">ОП РФ: почти половина кандидатов зарегистрированы на выборы губернаторов</p></p>
            </div>
          </div>
          <div class="container">
            <div class="news__cards">
              <div class="news__cards-wrapper">
                <firstSliderMobile />
                <firstSliderClone />
                <div class="none__mobile">
                  <redCard />
                  <defaultCard />
                  <preDefaultCard />
                </div>
              </div>
            </div>
          </div>
          <Statistics />
          <News />
        </div>
      </div>
    </div>
    <multimedia class="multimedia__block"/>

    <members />
    <bottomCards />
    <Footer class="pc__footer"/>
    <MobileFooter class="MobileFooter"/>
  </div>
</template>

<script>
import firstSliderMobile from "../components/sliders/mobile/firstSliderMobile";
import firstSliderClone from "../components/sliders/tablet/firstSliderClone"
import Footer from "../components/Footer"
import bottomCards from "../components/bottomCards"
import members from "../components/members"
import videoCard from "../components/videoCard";
import multimedia from "../components/multimedia";
import News from "@/components/news";
import Statistics from "@/components/Statistics"
import preDefaultCard from "@/components/cards/preDefaultCard"
import defaultCard from "@/components/cards/defaultCard"
import redCard from "@/components/cards/redCard"
import VerticalSlider from "@/components/sliders/VerticalSlider";
import HorizontalSlider from "@/components/sliders/HorizontalSlider"
import Header from "../components/Header";
import MobileFooter from "../components/mobileFooter";
export default {
  components: {
    firstSliderMobile,
    MobileFooter,
    firstSliderClone,
    Footer,
    bottomCards,
    members,
    videoCard,
    multimedia,
    News,
    Statistics,
    preDefaultCard,
    defaultCard,
    redCard,
    Header,
    VerticalSlider,
    HorizontalSlider,

  }
}
</script>

<style lang="scss">
@import "../assets/styles/null";
.home{
  background-color: #E5E5E5;
}

.home__wrapper {
  background: url("../assets/img/image 2.png") no-repeat center;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: size(914, 1600);
  z-index: 0;
  @media (max-width: 768px) {
    height: size(1025, 768);
  }
  @media (max-width: 440px) {
    height: size(560, 320);
  }
}

.content__wrapper{
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .text{
    padding-top: size(178, 1600);
    display: flex;
    flex-direction: column;
    width: size(789, 1600);
    height: size(279, 1600);
    @media (max-width: 768px) {
      padding-top: size(140, 768);
      width: size(615, 768);
      height: size(256, 768)
    }
    @media (max-width: 440px) {
      padding-top: size(90, 320);
      height: size(256, 320)
    }
  }
  .button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: size(86, 1600);
    padding: size(7, 1600) size(10, 1600);
    text-transform: uppercase;
    color: white;
    background-color: #246CB7;
    font-style: normal;
    font-weight: 600;
    font-size: size(13, 1600);
    line-height: size(16, 1600);
    border-radius: 4px;
    @media (max-width: 768px) {
      width: size(86, 768);
      padding: size(7, 768) size(10, 768);
      font-size: size(14, 768);
      line-height: size(16, 768);
    }
    @media (max-width: 440px) {
      width: size(86, 320);
      padding: size(7, 320) size(10, 320);
      font-size: size(12, 320);
      line-height: size(16, 320);
    }
  }
  .title{
    font-style: normal;
    font-weight: bold;
    font-size: size(55, 1600);
    // line-height: size(60, 1600);
    text-align: left;
    color: white;
    margin-top: size(30, 1600);
    @media (max-width: 768px) {
      font-size: size(40, 768);
      margin-top: size(30, 768);
    }
    @media (max-width: 440px) {
      font-size: size(22, 320);
      margin-top: size(28, 320);
    }

  }
  .date{
    text-align: left;
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: size(12, 1600);
    line-height: size(18, 1600);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: size(116, 1600);
    margin-top: size(24, 1600);
    @media (max-width: 768px) {
      font-size: size(12, 768);
      line-height: size(18, 768);
      width: size(116, 768);
      margin-top: size(30, 768);
    }
    @media (max-width: 440px) {
      font-size: size(12, 320);
      line-height: size(18, 320);
      width: size(116, 320);
      margin-top: size(30, 320);
    }
    .clock__icon{
      width: size(15, 1600);
      @media (max-width: 768px) {
        width: size(15, 768);
      }
      @media (max-width: 440px) {
        width: size(15, 320);
      }
    }
  }
}

.sliders{
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
    padding-top: 0;
    margin-top: size(210, 768);
    display: flex;
    justify-content: space-between;
  }
}


/***************MAIN*************/


.main{
  margin: auto;
  width: 100%;
  background-color: #E5E5E5;
  height: size(1690, 1600);
  position: relative;
  @media (max-width: 768px) {
    height: size(2030, 768) !important; // высота чтоб снизу не съезжало
  }
  @media (max-width: 440px) {
    height: size(3200, 320) !important; // высота чтоб снизу не съезжало
  }
}

.main__wrapper{
  margin: auto;
  width: size(1440, 1600);
  @media (max-width: 768px) {
    width: size(744, 768) !important; // дичь
  }
  @media (max-width: 440px) {
    width: 100% !important;
  }
}


.main__content-wrapper{
  position: absolute;
  background-color: white;
  margin: auto;
  width: size(1440, 1600);
  height: size(1832, 1600);
  border-radius: 8px;
  margin-top: - size(140, 1600);
  @media (max-width: 768px) {
    width: size(744, 768) !important;
    position: absolute;
    background-color: white;
    margin: auto;
    height: size(4420, 1600); // высота белой секции
    border-radius: 8px;
    margin-top: - size(140, 1600);
  }
  @media (max-width: 440px) {
    width: 100% !important;
    height: size(3250, 320) !important; // высота белой секции
  }
}

.info__main{
  width: 100%;
  height: size(60, 1600);
  background-color: #003E78;
  border-radius: 8px;
  margin-top: size(40, 1600);
  display: flex;
  align-items: center;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: size(14, 1600);
  line-height: size(22, 1600);
  padding-top: size(19, 1600);
  padding-bottom: size(19, 1600);
  .time{
    color: white;
    margin-left: size(30, 1600);
    position: relative;
    &::after{
      position: absolute;
      content: "  | ";
      top: - size(4, 1600);
      left: size(45, 1600);
    }
    @media (max-width: 768px) {
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: size(18, 768);
      line-height: size(25, 768);
      color: #FFFFFF;
      &::after{
        position: absolute;
        content: "  | ";
        top: - size(4, 1600);
        left: size(115, 1600);
      }
    }
    @media (max-width: 440px) {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: size(14, 320);
      line-height: size(22, 320);
      margin-left: size(10, 320);
      color: #FFFFFF;
      &::after{
        position: absolute;
        content: "  | ";
        top: - size(4, 1600);
        left: size(190, 1600);
      }
    }
  }
  .info__title{
    margin-left: size(24, 1600);
    @media (max-width: 768px) {
      font-style: normal;
      font-weight: 600;
      font-size: size(16, 768);
      line-height: size(25, 768);
      text-align: left;
      margin-left: size(30, 768);
    }
    @media (max-width: 440px) {
      font-style: normal;
      font-weight: 600;
      font-size: size(14, 320);
      line-height: size(22, 320);
      color: #FFFFFF;
    }
  }
  @media (max-width: 768px) {
    width: size(704, 768);
    height: size(86, 768);
    background-color: #003E78;
    border-radius: 8px;
    margin-top: size(40, 768);
    display: flex;
    align-items: center;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: size(14, 768);
    line-height: size(22, 768);
    padding-top: size(19, 768);
    padding-bottom: size(19, 768);
  }
  @media (max-width: 440px) {
    width: 100%;
    height: size(117, 320);
    background-color: #003E78;
    border-radius: 8px;
    margin-top: size(30, 320);
    display: flex;
    align-items: flex-start;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: size(14, 768);
    line-height: size(22, 768);
    padding-top: size(20, 320);
    padding-bottom: size(19, 768);
  }
}
.news__cards{
  padding-top: size(50, 1600);
  width: 100%;
  .news__cards-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.none__mobile{
  display: block;
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
}

.pc__footer{
  display: block;
  @media (max-width: 768px) {
    display: none !important;
  }
}

.MobileFooter{
  display: none !important;
  @media (max-width: 768px) {
    display: block !important;
  }
}

.VerticalSlider{
  @media (max-width: 440px) {
    display: none;
  }
}
</style>