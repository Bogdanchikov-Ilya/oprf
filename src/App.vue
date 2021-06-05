<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header"
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import "./assets/styles/null";
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  font-family: 'Open Sans', sans-serif !important;
}
.body{
  background-color: #E5E5E5;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/*********HOOPER SLIDER 1*******/

.hooper-navigation{
  position: absolute;
  left: size(400, 1600);
  right: 0;
  top: size(140, 1600);
  @media (max-width: 768px) {
    left: size(660, 768);
    right: 0;
    top: 100%;
  }
  .hooper-prev, .hooper-next{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.33) !important;
    border-radius: 50%;
    width: size(40, 1600);
    height: size(40, 1600);
    padding: 0;
    @media (max-width: 768px) {
      width: size(40, 768);
      height: size(40, 768);
      transform: rotate(180deg);
    }
    svg{
      fill: white;
    }
  }
  .hooper-next{
    margin-right: 10px;
  }
}

.hooper-indicator:hover, .hooper-indicator.is-active {
  position: absolute;
  background-color: #E9242A !important;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  @media (max-width: 768px) {
    top: size(17, 768);
    left: size(400, 768);
    right: 0;
  }
}
.hooper-indicator{
  top: size(20, 1600);
  left: -150px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  @media (max-width: 768px) {
    top: 0;
    left: size(500, 768);
    right: 0;
  }
}

.firstSliderClone{
  .hooper-indicator{
    position: relative;
    top: size(60, 1600) !important;
    left: -150px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #9CA0A7;
    margin-right: 7px;
    @media (width: 440px) {
      top: 0;
      left:  size(110, 768) !important;
      right: 0;
    }
    @media (max-width: 768px) {
      top: 0;
      left: - size(320, 768) !important;
      right: 0;
    }
  }
  .hooper-indicator.is-active {

    background-color: #E9242A !important;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    @media (max-width: 768px) {
      top: size(0, 768);
      left: - size(330, 768);
    }
  }
}

.thirdSliderClone{
  @media (max-width: 768px){
    width: size(715, 768) !important;
  }
  .hooper-list{

  }
  .hooper-indicator{
    position: relative;
    top: size(40, 1600) !important;
    left: -150px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #9CA0A7;
    margin-right: size(7, 768);
    @media (max-width: 768px) {
      top: size(10, 320) !important;
      top: 0;
      left: - size(290, 768) !important;
      right: 0;
    }
    @media (width: 440px) {
      top: - size(100, 320) !important;
      top: 0;
      left: - size(250, 768) !important;
      right: 0;
    }
  }
  .hooper-indicator.is-active {

    background-color: #E9242A !important;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    @media (max-width: 768px) {
      top: size(0, 768);
      left: - size(330, 768);
    }
  }
}

.secondSliderClone{
  @media (max-width: 768px){
    width: size(715, 768) !important;
  }
  .hooper-list{
    @media (max-width: 768px){
      width: size(715, 768) !important;
    }
  }
  .hooper-indicator{
    position: relative;
    top: size(65, 1600) !important;
    left: -150px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #9CA0A7;
    @media (max-width: 768px) {
      top: 0;
      left: - size(330, 768) !important;
      right: 0;
      margin-right: size(7, 768);
    }
    @media (width: 440px) {
      top: 0;
      left: - size(305, 768) !important;
      right: 0;
      margin-right: size(7, 768);
    }
  }
  .hooper-indicator.is-active {
    background-color: #E9242A !important;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    @media (max-width: 768px) {
      top: size(0, 768);
      left: - size(330, 768);
    }
    @media (width: 440px) {
      top: size(0, 320);
      left: - size(330, 320);
    }
  }
  .hooper-list{
    @media (max-width: 768px) {
      width: size(710, 768) !important;
    }
  }
}

.fourthSliderClone{
  @media (max-width: 768px){
    width: size(715, 768) !important;
  }
  .hooper-list{
    @media (max-width: 768px){
      width: size(715, 768) !important;
    }
  }
  .hooper-indicator{
    position: relative;
    top: size(80, 1600) !important;
    left: -150px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #9CA0A7;
    @media (max-width: 768px) {
      top: 0;
      left: - size(330, 768) !important;
      right: 0;
      margin-right: size(7, 768);
    }
    @media (width: 440px) {
      top: 0;
      left: - size(305, 768) !important;
      right: 0;
      margin-right: size(7, 768);
    }
  }
  .hooper-indicator.is-active {
    background-color: #E9242A !important;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    @media (max-width: 768px) {
      top: size(0, 768);
      left: - size(320, 768);
    }
    @media (width: 440px) {
      top: size(0, 320);
      left: - size(320, 768);
    }
  }
}
</style>
