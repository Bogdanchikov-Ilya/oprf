<template>
<div class="members__wrapper">
  <div class="container">
    <div class="news__header-wrapper">
      <div class="news__header">
        <div class="left">
          <p class="title">Члены общественной палаты</p>
        </div>
        <a href="#" class="end">К списку всех членов ОП РФ <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9.05577" y="4.84515" width="7.00006" height="2.00002" rx="1" transform="rotate(44.8295 9.05577 4.84515)" fill="#5A79A8"/>
          <rect x="7.66696" y="13.3345" width="7.00006" height="2.00002" rx="1" transform="rotate(-45.1705 7.66696 13.3345)" fill="#5A79A8"/>
        </svg>
        </a>
      </div>
      <div class="lines">
        <span class="blue"></span>
        <span class="red"></span>
        <span class="white"></span>
      </div>
    </div>
    <div class="members__cards">
      <div class="pc__cards">
        <memberCard />
        <memberCard />
        <memberCard />
        <memberCard />
        <memberCard />
        <memberCard />
      </div>
      <thirdSliderClone class="thirdSliderClone" />
      <thirdSliderMobile class="thirdSliderMobile" />
    </div>
  </div>
</div>
</template>

<script>
import thirdSliderMobile from  "./sliders/mobile/thirdSliderMobile"
import thirdSliderClone from "./sliders/tablet/thirdSliderClone"
import memberCard from "./memberCard"
export default {
  name: "members",
  components: {
    thirdSliderMobile,
    memberCard,
    thirdSliderClone
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/null";
.container{
  margin: auto;
  width: size(1345, 1600);
}

.members__wrapper{
  background-color: white;
  margin: auto;
  width: size(1440, 1600);
  height: size(405, 1600);
  border-radius: 8px;
  margin-top: size(50, 1600);
  .container{
    @media (max-width: 768px) {
      width: size(704, 768);
      height: size(600, 768);
    }
  }
  @media (max-width: 768px) {
    background-color: unset !important;
  }
  @media (max-width: 440px) {
    margin-top: size(150, 320);
  }
}

.news__header-wrapper{
  padding-top: size(35, 1600);
  @media (max-width: 768px) {
    padding-top: size(180, 1600);
  }
}

.news__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: size(48, 1600);
  .left{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      font-style: normal;
      font-weight: 600;
      font-size: size(14, 1600);
      line-height: 16px;
      /* or 114% */

      letter-spacing: 0.5px;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-style: normal;
        font-weight: 600;
        font-size: size(14, 768);
        line-height: size(16, 768);
        /* identical to box height, or 114% */

        letter-spacing: 0.5px;
        text-transform: uppercase;

        /* #1F3245 */

        color: #1F3245;

        mix-blend-mode: normal;
      }
      @media (max-width: 440px) {
        font-weight: 600;
        font-size: size(12, 320);
        line-height: size(16, 320);
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #1F3245;
        mix-blend-mode: normal;
        text-align: left;
      }
    }
    .tags{
      a{
        font-style: normal;
        font-weight: normal;
        font-size: size(14, 1600);
        line-height: 22px;
        /* identical to box height, or 157% */


        /* #246CB7 */

        color: #246CB7;

        mix-blend-mode: normal;
        margin-left: size(22, 1600);
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
  .end{
    font-style: normal;
    font-weight: normal;
    font-size: size(14, 1600);
    line-height: 22px;
    /* identical to box height, or 157% */

    text-align: right;

    /* #246CB7 */

    color: #246CB7;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      font-style: normal;
      font-weight: normal;
      font-size: size(14, 768);
      line-height: size(22, 768);
      /* identical to box height, or 157% */

      text-align: right;

      /* #246CB7 */

      color: #246CB7;

    }
    @media (max-width: 440px) {
      font-size: size(10, 320);
      line-height: size(18, 320);
      color: #246CB7;
    }
    svg{
      width: size(20, 1600);
      @media (max-width: 768px) {
        width: size(40, 1600);
      }
      @media (max-width: 440px) {
        display: none;
      }
    }
  }
}


.lines{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .blue{
    background-color: #246CB7;
    width: size(28, 1600);
    height: 2px;
    border-radius: 50%;
    @media (max-width: 768px) {
      width: size(27, 768);
      border-radius: 0%;
    }
    @media (max-width: 440px) {
      width: size(27, 320);
    }
  }
  .red{
    background-color: #E9242A;
    width: size(19, 1600);
    height: 2px;
    border-radius: 50%;
    @media (max-width: 768px) {
      width: size(18, 768);
      border-radius: 0%;
    }
    @media (max-width: 440px) {
      width: size(18, 320);
      border-radius: 0%;
    }
  }
  .white{
    background-color: #D5D6D9;
    width: size(1279, 1600);
    height: 2px;
    border-radius: 50%;
    @media (max-width: 768px) {
      width: size(638, 768);
      border-radius: 0%;
    }
    @media (max-width: 440px) {
      width: size(222, 320);
      border-radius: 0%;
    }
  }
  @media (max-width: 768px) {
    margin-top: size(30, 768);
  }
  @media (max-width: 440px) {
    margin-top: size(25, 320);
  }
}

.news__cards{
  flex-wrap: wrap;
  @media (max-width: 440px) {
    margin-top: size(20, 320);
  }
}

.members__cards{
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: size(20, 768);
  }

}
.pc__cards{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: size(32, 1600);
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
}

.thirdSliderClone{
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  @media (max-width: 440px) {
    display: none;
  }
}

.thirdSliderMobile{
  display: none;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 440px) {
    display: flex;
  }
}
</style>