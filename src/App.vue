<template>
  <div id="app">
    <div class="nav">
      <Navigation></Navigation>
      <Ziel></Ziel>
    </div>
    <CurrentSituation></CurrentSituation>
    <WhiteOneArticle></WhiteOneArticle>
    <div class="nav">
      <BlackOneArticle></BlackOneArticle>
    </div>
    <Opinion></Opinion>
    <div class="nav">
      <WhiteTwoArticle></WhiteTwoArticle>
    </div>
  </div>
</template>

<script>
import Navigation from "../src/components/Navigation/Navigation.vue";
import Ziel from "../src/components/Ziel/Ziel.vue";
import WhiteOneArticle from "../src/components/WhiteOneArticle/WhiteOneArticle.vue";
import CurrentSituation from "../src/components/CurrentSituation/CurrentSituation.vue";
import WhiteTwoArticle from "../src/components/WhiteTwoArticle/WhiteTwoArticle.vue";
import BlackOneArticle from "../src/components/BlackOneArticle/BlackOneArticle.vue";
import Opinion from "../src/components/Opinion/Opinion.vue";
export default {
  name: "app",
  components: {
    Ziel,
    Navigation,
    WhiteOneArticle,
    WhiteTwoArticle,
    BlackOneArticle,
    CurrentSituation,
    Opinion
  }
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  .content {
    padding: 30px 160px 0px 160px;
  }
  @media screen and (max-width: 1600px) {
    .content {
      padding: 15px 80px 0px 80px;
    }
  }
  @media screen and (max-width: 1350px) {
    .content {
      padding: 15px 40px 0px 40px;
    }
  }
  @media screen and (max-width: 1200px) {
    .content {
      padding: 15px 10px 0px 10px;
    }
  }
  @media screen and (max-width: 320px) {
    .content {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
}
</style>
