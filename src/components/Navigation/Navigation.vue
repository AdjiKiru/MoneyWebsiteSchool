<template>
  <div class="navigation-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-brand">
        <a v-smooth-scroll="{ duration: 1000}" href="#target">
          <img class="logo" src="../../assets/money_icon.svg" />
        </a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a
            class="nav-item nav-link"
            href="#target"
            v-smooth-scroll="{ duration: 1000}"
          >Home / Ziel dieser Webseite</a>
          <a
            class="nav-item nav-link"
            href="#frueher"
            v-smooth-scroll="{ duration: 1000}"
          >Monetarisierung früher und heute</a>
          <a
            class="nav-item nav-link"
            href="#fiveStrategies"
            v-smooth-scroll="{ duration: 2000, offset: -50}"
          >Die 5 beliebtesten Strategien für Spiele Entwickler</a>
          <a
            class="nav-item nav-link"
            href="#top3"
            v-smooth-scroll="{ duration: 2000, offset: -50}"
          >Die Top 3 Entwickler nach Umsatz</a>
          <a
            class="nav-item nav-link"
            href="#Opinion"
            v-smooth-scroll="{ duration: 2000, offset: -50}"
          >Unsere Meinung</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script src="./Navigation.js"></script>
<style lang="scss" src="./Navigation.scss" scoped></style>
