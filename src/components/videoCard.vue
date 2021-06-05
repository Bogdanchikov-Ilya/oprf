<template>
  <div class="news__card">
    <div class="card__wrapper">
      <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" class="play">
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
      <div class="card__header">
        <span class="date">
                  <svg class="clock__icon" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52096 0.5C3.92072 0.5 1 3.41133 1 7C1 10.5887 3.92072 13.5 7.52096 13.5C11.1212 13.5 14.0419 10.5887 14.0419 7C14.0419 3.41133 11.1212 0.5 7.52096 0.5ZM7.52096 12.6444C4.39757 12.6444 1.85833 10.1133 1.85833 7C1.85833 3.88665 4.39757 1.35558 7.52096 1.35558C10.6443 1.35558 13.1836 3.88665 13.1836 7C13.1836 10.1133 10.6443 12.6444 7.52096 12.6444Z" fill="white" stroke="white" stroke-width="0.5"/>
<rect x="6.97949" y="2.66797" width="1.08683" height="4.875" rx="0.543413" fill="white" stroke="white" stroke-width="0.5"/>
<rect x="6.97949" y="7.54297" width="1.08333" height="4.89072" rx="0.541667" transform="rotate(-90 6.97949 7.54297)" fill="white" stroke="white" stroke-width="0.5"/>
</svg>
                  Сегодня в 21:00
                </span>
        <span class="timeline">01:34</span>
      </div>
      <div class="title">Критерии и оценки рыбохозяйственного комплекса ...</div>

    </div>
  </div>
</template>

<script>
export default {
  name: "videoCard"
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/null";
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
      background-color: red !important;
      @media (max-width: 768px) {
        width: size(344, 768);
        height: size(225, 768);
      }
      @media (max-width: 440px) {
        width: size(286, 320);
        height: size(175, 320);
      }
      .card__wrapper{
        position: relative;
        .play{
          width: size(49, 1600);
          position: absolute;
          top: size(112, 1600);
          left: size(180, 1600);
          @media (max-width: 768px) {
            width: size(56, 768);
            top: size(88, 768);
            left: size(140, 768);
          }
          @media (max-width: 440px) {
            width: size(56, 320);
            top: size(58, 320);
            left: size(110, 320);
          }
        }
        border-radius: 8px;
        background: url("../assets/img/vieocard.png") no-repeat center top;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .pid-title{
          font-style: normal;
          font-size: size(14, 1600);
          text-transform: uppercase;
          text-align: left;
          font-weight: normal;
          line-height: 22px;
          color: #FFFFFF;
          margin-top: - size(18, 1600);
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
          line-height: 24px;
          color: #FFFFFF;
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
            line-height: 22px;
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
          padding: 2px 10px;
          a{
            color: #003E78;
            font-style: normal;
            font-weight: 600;
            font-size: size(12, 1600);
            line-height: 16px;
            opacity: 0.85;
          }
        }
        .date{
          font-style: normal;
          font-weight: normal;
          font-size: size(12, 1600);
          line-height: 18px;
          /* identical to box height, or 150% */

          display: flex;
          align-items: center;

          /* #FFFFFF */

          color: #FFFFFF;
          @media (max-width: 768px) {
            font-style: normal;
            font-weight: 600;
            font-size: size(12, 768);
            line-height: size(16, 768);
            display: flex;
            align-items: center;
            color: #FFFFFF;
            svg{
              width: size(10, 768);
              height: size(10, 768);
            }
          }
          @media (max-width: 440px) {
            font-style: normal;
            font-weight: 600;
            font-size: size(12, 320);
            line-height: size(16, 320);
            display: flex;
            align-items: center;
            color: #FFFFFF;
            svg{
              width: size(10, 320);
              height: size(10, 320);
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

.title{
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: size(18, 1600);
  line-height: size(24, 1600);
  color: white;
  @media (max-width: 768px) {
    font-style: normal;
    font-weight: bold;
    font-size: size(14, 768);
    line-height: size(19, 768);
    color: #FFFFFF;
  }
  @media (max-width: 440px) {
    font-style: normal;
    font-weight: bold;
    font-size: size(13, 320);
    line-height: size(16, 320);
    /* or 133% */


    /* #FFFFFF */

    color: #FFFFFF;
  }
}

.card__header{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .date{
    svg{
      margin-right: size(10, 1600);
      width: size(15, 1600);
    }
  }
  .timeline{
    font-style: normal;
    font-weight: 600;
    font-size: size(13, 1600);
    line-height: size(16, 1600);
    color: white;
    @media (max-width: 768px) {
      font-style: normal;
      font-weight: 600;
      font-size: size(12, 768);
      line-height: size(16, 768);
      color: #FFFFFF;
      mix-blend-mode: normal;
    }
    @media (max-width: 440px) {
      font-style: normal;
      font-weight: 600;
      font-size: size(12, 320);
      line-height: size(11, 320);
      color: #FFFFFF;
      mix-blend-mode: normal;
    }
  }
}
</style>