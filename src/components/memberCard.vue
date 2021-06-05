<template>
  <div class="card__wrapper">
    <div class="card">
      <div class="title">
        Абажер
        Иван
        Иванович
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "memberCard"
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/null";

.card__wrapper{
  border-radius: 8px;
  background: url("../assets/img/member.png") no-repeat center top;
  background-size: cover;
  @media (max-width: 768px) {
    width: size(160, 768) !important;
  }
  @media (max-width: 440px) {
    width: size(138, 320) !important;
  }
}
.card{
  padding: size(20, 1600);
  width: size(195, 1600);
  height: size(241, 1600);
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 768px) {
    padding: size(20, 768);
    width: size(150, 768) !important;
    height: size(200, 768);
  }
  @media (max-width: 440px) {
    padding: size(15, 320);
    width: size(138, 320) !important;
    height: size(160, 320);
  }
  .title{
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: size(14, 1600);
    line-height: size(22, 1600);
    color: #FFFFFF;
    text-align: left;
    word-spacing: 9999999px;
    @media (max-width: 768px) {
      font-style: normal;
      font-weight: bold;
      font-size: size(14, 768);
      line-height: size(16, 768);
      display: flex;
      align-items: flex-end;
      color: #FFFFFF;
    }
    @media (max-width: 440px) {
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>