<template>
  <div class="cards__wrapper">
    <div class="container">
      <div class="news__cards">
        <div class="news__cards-wrapper">
          <div class="pc__card">
            <cardBottom />
            <cardBottom />
            <cardBottom />
          </div>
          <fourthSliderClone class="fourthSliderClone"/>
          <fourthSliderMobile class="fourthSliderMobile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fourthSliderMobile from "./sliders/mobile/fourthSliderMobile"
import fourthSliderClone from "./sliders/tablet/fourthSliderClone"
import cardBottom from "../components/cardBottom"
export default {
  name: "members",
  components: {
    fourthSliderMobile,
    cardBottom,
    fourthSliderClone
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/null";
.container{
  margin: auto;
  width: size(1345, 1600);
}

.cards__wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: auto;
  width: size(1440, 1600);
  height: size(386, 1600);
  border-radius: 8px;
  margin-top: size(50, 1600);
  .container{
    margin: auto;
    width: size(1345, 1600);
    @media(max-width: 768px){
      width: size(704, 768);
    }
  }
  @media(max-width: 768px){
    background-color: unset;
    margin-top: size(260, 768);
  }
  @media(max-width: 440px){
    background-color: unset;
    margin-top: size(210, 320) !important;
  }
}


.cards{
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.news__cards{
  padding-top: 0;
  width: 100%;
  .news__cards-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.pc__card{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: none !important;
  }
  @media (max-width: 440px) {
    display: none !important;
  }
}

.fourthSliderClone{
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  @media (max-width: 440px) {
    display: none !important;
  }
}

.fourthSliderMobile{
  display: none;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 440px) {
    display: flex !important;
  }
}
</style>