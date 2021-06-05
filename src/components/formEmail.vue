<template>
  <div class="form__wrapper">
    <form action="" class="form">
      <div class="form__item">
        <input class="input" type="email" placeholder="Введите ваш email">
        <input class="button" type="submit" value="Подписаться на обновления">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "formEmail"
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/null";
.form__wrapper{
  @media (max-width: 768px) {
    margin-top: size(12, 768);
  }
  @media (max-width: 440px) {
    margin-top: size(40, 320);
  }
  margin: auto;
  .form__item{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    @media (max-width: 440px) {
      flex-direction: column;
      justify-content: space-between;
      height: size(82, 320);
    }
  }
  .input{
    width: size(330, 1600);
    height: size(45, 1600);
    background-color: #EEF4FA;
    padding: size(8, 1600);
    font-style: normal;
    font-weight: normal;
    font-size: size(14, 1600);
    line-height: size(22, 1600);
    display: flex;
    align-items: center;
    color: #003E78;
    border-radius: 3px;
    @media (max-width: 768px) {
      width: size(250, 768);
      height: size(35, 768);
      font-size: size(14, 768);
      line-height: size(22, 768);
    }
    @media (max-width: 440px) {
      width: 100%;
      height: size(35, 320);
      font-size: size(12, 320);
      line-height: size(18, 320);
      padding: size(13, 320);
    }
  }
  .button{
    padding: size(8, 1600) size(16, 1600);
    border-radius: 3px;
    color: #246CB7;
    border: 1px solid #246CB7;
    background-color: white;
    margin-left: size(20, 1600);
    font-size: size(14, 1600);
    cursor: pointer;
    @media (max-width: 768px) {
      width: size(220, 768);
      height: size(35, 768);
      font-style: normal;
      font-weight: normal;
      font-size: size(14, 768);
      line-height: size(22, 768);
      text-align: center;
      color: #246CB7;
      mix-blend-mode: normal;
      margin-left: size(20, 768);
    }
    @media (max-width: 440px) {
      width: 100%;
      margin-left: 0;
      height: size(35, 320);
      font-size: size(14, 320);
      line-height: size(22, 320);
    }
  }
}
</style>