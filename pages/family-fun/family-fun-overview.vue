
<template>
  <div class="mainWapper fixedHeader theme2">
    <headerBox class="pos0" :class="[{ showHeader: scrollPosition > height }]">
    </headerBox>

  <div class="contentSection overviewBannerWrapper">
    <div class="container">
            <h1 class="title">FAMILY FUN ALL SUMMER LONG</h1>
          <div class="overviewBannerBox">
            <div class="box">
              <a href="/family-fun/strawberry">
              <img src="@/assets/images/family-fun/strawberry.png" alt="Strawberry Days">
              </a>
              <span class="tag present">Ongoing Event</span>

            </div>
            <div class="box">
              <a href="/family-fun/barnyard-adventure">
              <img src="@/assets/images/family-fun/barnyardAdventureland.jpg" alt="Barnyard Adventureland">
              </a>
              <span class="tag present">Ongoing Event</span>

            </div>
            <div class="box">
              <a href="/family-fun/sunflower-festival">
              <img src="@/assets/images/family-fun/sunflowerFestival.jpg" alt="Sunflower Festival">
              </a>
              <span class="tag upcoming">Tickets dropping on AUG 7</span>

            </div>
            <div class="box">
              <a href="/family-fun/goat-yoga">
              <img src="@/assets/images/family-fun/goatyoga.jpg" alt="Goat Yoga">
              </a>
              <span class="tag present">Ongoing Event</span>

            </div>

            <div class="box">
              <a href="/family-fun/haunted-maze">
              <img src="@/assets/images/family-fun/haunted-maze.jpg" alt="Haunted Maze">
              </a>
              <span class="tag ended">This event has ended</span>

            </div>

            <div class="box">
              <a href="/family-fun/fall-the-farm">
              <img src="@/assets/images/family-fun/fallFestival.jpg" alt="Fall Festival">
              </a>
              <span class="tag upcoming">Starting from SEP 25</span>

            </div>
            <div class="box">
              <a href="#">
              <img src="@/assets/images/family-fun/easterEggHunt.jpg" alt="Easter EggHunt">
              </a>
              <span class="tag ended">This event has ended</span>

            </div>
            <div class="box">
              <a href="/family-fun/easter-animal-safari">
              <img src="@/assets/images/family-fun/animalSafari.jpg" alt="Animal Safari">
              </a>
              <span class="tag ended">This event has ended</span>

            </div>

          </div>
    </div>
    <div class="testimonialsSection dark-4 pd-0">
      <div class="container">
        <div class="testimonialsWrapper">
          <div class="testimonialsGroup">
            <div class="item">
              <h3 class="title">All Season Long pass</h3>
              <p class="text">
                Purchasing a season’s pass at Maan Farms provides you and your family with a place to call home for the sunny months. From the zipline to the petting zoo, children won’t get tired of all the options our farm has to offer. They’ll want to come back every day, and they can with the all-inclusive season’s pass. We look forward to hosting you and your family this summer.
              </p>

              <div class="btnGroup">
                <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill plain">Buy Season’s Pass</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




    <footerBox></footerBox>
  </div>
</template>

<script>

import headerBox from "~/components/header/index";
import footerBox from "~/components/footer/index";
export default {
  head () {
      return {
        title: "Family Fun At Maan Farms",
        meta: [
          { hid: 'title', property: 'title',name: 'title', content: "Family Fun At Maan Farms"},
          { hid: 'description', name: 'description', property: 'description', content: ""},
          { hid: 'og:title', property: 'og:title', content: "Family Fun At Maan Farms"},
          { hid: 'og:description', property: 'og:description', content: ""}
          // other meta
        ]
      }
    },

  components: {
    headerBox,
    footerBox,

  },
  data() {
    return {
      scrollPosition: null,
      height: 0,

    };
  },
  mounted() {
    this.parentNode = this.$el.parentElement;
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.height = 50;
    },
  },
};
</script>
