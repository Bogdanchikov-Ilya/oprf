<template>
  <hooper :vertical="false" style="height: auto; width: 400px" :itemsToShow="1" :centerMode="false" :infinite-scroll="true">
    <slide>
      <div class="slide__wrapper">
        <div class="video">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1" fill="white">
              <path d="M70 35C70 42.3005 67.7171 49.4183 63.471 55.3569C59.2248 61.2955 53.2279 65.7578 46.3198 68.1189C39.4117 70.4801 31.9381 70.6219 24.9454 68.5247C17.9526 66.4274 11.7907 62.196 7.32217 56.4228C2.85367 50.6496 0.302303 43.6236 0.0252182 36.3284C-0.251866 29.0332 1.75921 21.8339 5.77691 15.7384C9.79461 9.64284 15.6178 4.95623 22.4314 2.33459C29.2449 -0.287051 36.7077 -0.712479 43.775 1.11786L43.2735 3.05408C36.6101 1.32834 29.5738 1.72945 23.1496 4.20128C16.7254 6.6731 11.235 11.0919 7.44688 16.8391C3.65877 22.5863 1.76263 29.3741 2.02388 36.2525C2.28513 43.1308 4.6907 49.7553 8.90384 55.1986C13.117 60.6419 18.9268 64.6315 25.5199 66.6089C32.1131 68.5863 39.1596 68.4525 45.6729 66.2263C52.1863 64.0001 57.8405 59.7929 61.844 54.1936C65.8475 48.5943 67.9999 41.8833 67.9999 35H70Z"/>
            </mask>
            <path d="M70 35C70 42.3005 67.7171 49.4183 63.471 55.3569C59.2248 61.2955 53.2279 65.7578 46.3198 68.1189C39.4117 70.4801 31.9381 70.6219 24.9454 68.5247C17.9526 66.4274 11.7907 62.196 7.32217 56.4228C2.85367 50.6496 0.302303 43.6236 0.0252182 36.3284C-0.251866 29.0332 1.75921 21.8339 5.77691 15.7384C9.79461 9.64284 15.6178 4.95623 22.4314 2.33459C29.2449 -0.287051 36.7077 -0.712479 43.775 1.11786L43.2735 3.05408C36.6101 1.32834 29.5738 1.72945 23.1496 4.20128C16.7254 6.6731 11.235 11.0919 7.44688 16.8391C3.65877 22.5863 1.76263 29.3741 2.02388 36.2525C2.28513 43.1308 4.6907 49.7553 8.90384 55.1986C13.117 60.6419 18.9268 64.6315 25.5199 66.6089C32.1131 68.5863 39.1596 68.4525 45.6729 66.2263C52.1863 64.0001 57.8405 59.7929 61.844 54.1936C65.8475 48.5943 67.9999 41.8833 67.9999 35H70Z" stroke="white" stroke-width="2" mask="url(#path-1-inside-1)"/>
            <mask id="path-2-inside-2" fill="white">
              <path d="M48.9574 2.9034C54.4187 5.27829 59.1838 9.00746 62.8016 13.738C66.4194 18.4685 68.7703 24.044 69.6318 29.9367L67.6543 30.2258C66.842 24.6696 64.6253 19.4125 61.2141 14.9521C57.8029 10.4916 53.3099 6.9754 48.1604 4.73611L48.9574 2.9034Z"/>
            </mask>
            <path d="M48.9574 2.9034C54.4187 5.27829 59.1838 9.00746 62.8016 13.738C66.4194 18.4685 68.7703 24.044 69.6318 29.9367L67.6543 30.2258C66.842 24.6696 64.6253 19.4125 61.2141 14.9521C57.8029 10.4916 53.3099 6.9754 48.1604 4.73611L48.9574 2.9034Z" stroke="#E9242A" stroke-width="2" mask="url(#path-2-inside-2)"/>
            <path d="M44.2461 33.8364C44.9128 34.2213 44.9128 35.1835 44.2461 35.5684L30.6827 43.3993C30.016 43.7842 29.1827 43.303 29.1827 42.5332L29.1827 26.8716C29.1827 26.1018 30.016 25.6207 30.6827 26.0056L44.2461 33.8364Z" fill="white"/>
          </svg>
        </div>
        <div class="text__slider">
          <span class="top__text">
            <span class="live">LIVE</span><span class="name"> ОПРФ-ТВ</span>
          </span>
          <p class="slider__title">
            Пленарное заседание ОП РФ: законопроект о поправке к Конституц...
          </p>
        </div>
      </div>
    </slide>

    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>

  </hooper>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/null";
.hooper{
  width: size(500, 1600) !important;
  height: 100%;
  margin-top: size(100, 1600);
  .hooper-list{
    height: size(296, 1600);
    @media (max-width: 768px) {
      height: size(96, 768);
    }
  }
  @media (max-width: 768px) {
    width: size(338, 768) !important;
    order: 1;
  }
  @media (max-width: 440px) {
    width: 100% !important;
    margin-top: size(20, 320);
  }
}

.slide__wrapper{
  width: size(525, 1600);
  height: size(120, 1600);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: size(350, 768);
    height: size(96, 768);
  }
  @media (max-width: 440px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: size(96, 320);
  }
}




.video{
  min-width: size(160, 1600);
  height: size(120, 1600);
  background: url("../../assets/img/image 13.png");
  background-size: cover;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    min-width: size(115, 768);
    height: size(86, 768);
  }
  @media (max-width: 440px) {
    min-width: size(80, 320);
    height: size(75, 320);
  }
  img{
    width: size(160, 1600);
    height: size(120, 1600);
    border-radius: 8px;
  }
  svg{
    width: size(70, 1600);
    cursor: pointer;
    @media (max-width: 768px) {
      width: size(50, 768);
    }
    @media (max-width: 440px) {
      width: size(30, 320);
    }
  }
}

.text__slider{
  color:white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  margin-left: size(60, 1600);
  @media (max-width: 768px) {
    width: size(217, 768) !important;
    height: size(90, 768);
    margin-left: size(30, 1600);
  }
  @media (max-width: 440px) {
    width: size(300, 320) !important;
    height: size(90, 768);
    margin-left: size(15, 320);
    padding-right: - size(40, 320);
  }
  .live{
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: size(13, 1600);
    width: size(45, 1600);
    height: size(20, 1600);
    border-radius: 3px;
    line-height: size(16, 1600);
    text-transform: uppercase;
    background-color: #E9242A;
    @media (max-width: 768px) {
      font-size: size(13, 768);
      width: size(45, 768);
      height: size(18, 768);
      border-radius: 3px;
      line-height: size(16, 768);
    }
    @media (max-width: 440px) {
      font-size: size(13, 320);
      width: size(45, 320);
      height: size(18, 320);
      border-radius: 3px;
      line-height: size(18.5, 320);
    }
  }
  .name{
    margin-left: size(7, 1600);
    font-style: normal;
    font-weight: 600;
    font-size: size(13, 1600);
    line-height: size(16, 1600);
    text-transform: uppercase;
    @media (max-width: 768px) {
      margin-left: size(7, 768);
      font-size: size(13, 768);
      line-height: size(16, 768);
    }
    @media (max-width: 440px) {
      font-weight: 400;
      margin-left: size(7, 320);
      font-size: size(13, 320);
      line-height: size(16, 320);
    }
  }
}

.top__text{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.slider__title{
  text-align: start;
  font-style: normal;
  font-weight: 600;
  font-size: size(18, 1600);
  line-height: size(24, 1600);
  @media (max-width: 768px) {
    font-size: size(14, 768);
    line-height: size(22, 768);
  }
  @media (max-width: 440px) {
    font-size: size(14, 320);
    line-height: size(22, 320);
  }
}

.slider__nav{
  display: flex;
}



.hooper-slide{
  @media (max-width: 768px) {
    width: size(300, 320) !important;
  }
}
.hooper-pagination{
  @media (max-width: 440px) {
    display: none;
  }
}
.hooper-navigation{
  @media (max-width: 440px) {
    display: none;
  }
}

.is-next{
  .video{
    @media (max-width: 440px) {

    }
  }
}

</style>