<template>
    <div class="news__block">
    <div class="block__wrapper">
      <div class="news__item">
        <p class="item__title">
          Выборы-2019. Прозрачность голосования и нарушения
        </p>
        <span class="news__date">
          9 сентября
        </span>
      </div>
      <div class="news__item">
        <p class="item__title">
          Выборы-2019. Прозрачность голосования и нарушения
        </p>
        <span class="news__date">
          9 сентября
        </span>
      </div>
      <div class="news__item">
        <p class="item__title">
          Выборы-2019. Прозрачность голосования и нарушения
        </p>
        <span class="news__date">
          9 сентября
        </span>
      </div>
      <div class="news__item">
        <p class="item__title">
          Выборы-2019. Прозрачность голосования и нарушения
        </p>
        <span class="news__date">
          9 сентября
        </span>
      </div>
      <div class="news__item">
        <p class="item__title">
          Выборы-2019. Прозрачность голосования и нарушения
        </p>
        <span class="news__date">
          9 сентября
        </span>
      </div>
      <div class="news__item">
        <p class="item__title">
          Выборы-2019. Прозрачность голосования и нарушения
        </p>
        <span class="news__date">
          9 сентября
        </span>
      </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/null";

.news__block{
  width: size(420, 1600);
  padding-top: size(50, 1600);
  @media (max-width: 768px) {
    padding-top: size(40, 768);
    order: 2;
    width: size(340, 768);
  }
}

.block__wrapper{
  overflow-x:hidden;
  overflow-y: scroll;
  text-align: end;
  align-items: end;
  justify-content: end;
  direction: rtl;
  padding: 5px;
  padding-bottom: size(40, 768) !important;
  padding-left: size(25, 1600);
  max-height: size(370, 1600);
  &::-webkit-scrollbar{
    background-color: gray;
    width: 1px;
    padding-right: size(50, 1600) !important;
  }
  &::-webkit-scrollbar-thumb{
    background-color: white;
    width: 3px !important;
  }
  @media (max-width: 768px) {
    display: flex;
    overflow-x:scroll;
    overflow-y: hidden;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
    direction: ltr;
    padding: 5px; /* Поля вокруг текста */
    padding-left: size(25, 1600);
    max-height: size(370, 1600);
    &::-webkit-scrollbar{
      background-color: gray !important;
      height: 1px !important;
      padding-right: size(50, 1600) !important;
    }
    &::-webkit-scrollbar-thumb{
      background-color: white !important;
      width: 3px !important;
    }
  }
}

.news__item{
  @media (max-width: 768px) {
    margin-right: size(30, 768);
  }
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
  color: white;

  height: size(72, 1600);
  margin-bottom: size(44, 1600) !important;
  margin-left: 0;
  .item__title{
    font-style: normal;
    font-weight: 600;
    font-size: size(18, 1600);
    line-height: 24px;
    text-align: left !important;
    @media (max-width: 768px) {
      font-weight: 600;
      font-size: size(14, 768);
      line-height: size(22, 768);
      color: #FFFFFF;
    }
  }
  .news__date{
    font-style: normal;
    font-weight: normal;
    font-size: size(12, 1600);
    line-height: size(18, 1600);
    text-align: start;
    text-align: left !important;
    @media (max-width: 768px) {
      font-weight: normal;
      font-size: size(12, 768);
      line-height: size(18, 768);
      color: #FFFFFF;
      margin-top: size(5, 768);
      padding-left: size(2, 768);
    }
  }
  @media (max-width: 768px) {
    min-width: size(211, 768);
  }
}

</style>