<template>
  <div class="navigation-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#" v-smooth-scroll="{ duration: 1000}">Monetarisierung von Videospielen</a>
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
          <a class="nav-item nav-link active" href="#frueher" v-smooth-scroll="{ duration: 1000}">
            Monetarisierung früher
            <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#heute" v-smooth-scroll="{ duration: 1000}">Monetarisierung heute</a>
          <a class="nav-item nav-link" href="#fiveStrategies" v-smooth-scroll="{ duration: 1000}">Die 5 beliebtesten Strategien für Spiele Entwickler</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script src="./Navigation.js"></script>
<style lang="scss" src="./Navigation.scss" scoped></style>
