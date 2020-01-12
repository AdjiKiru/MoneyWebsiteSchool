export default {
  name: 'Navigation',
  data: () => {
    return {
      showNav: false
    };
  },
  methods: {
    showNavbar() {
      this.showNav = !this.showNav;
    },
    hideNavbar() {
      this.showNav = !this.showNav;
    },
    scrollWin() {
      window.scrollTo(0, 0);
    }
  }
};
