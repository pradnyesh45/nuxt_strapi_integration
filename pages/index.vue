<template>
  <div class="mainWapper">
    <headerBox
      :class="[
        {
          hideHeader: scrollPosition < height,
          showHeader: scrollPosition > height
        }
      ]"
    >
    </headerBox>
    <div class="homeBanner" ref="rr">
      <div class="container">
        <div class="row secondryHeader">
          <div class="col-6 col-sm-6">
            <div class="logo">
              <a href="/">
                <img src="@/assets/images/whiteLogo.png" alt="MaanFarm Logo" />
              </a>
            </div>
          </div>
          <div class="col-6 col-sm-6">
            <ul class="profileNav">
              <li>
                <a
                  :href="$store.state.shopifyUrl + '/account/login'"
                  class="desktopMenu"
                >
                  <i class="icon profileIcon secondry"></i>
                </a>
              </li>
              <li>
                <a :href="$store.state.shopifyUrl + '/cart'">
                  <i class="icon bagIcon secondry"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container contentBox">
        <div class="row">
          <div class="col-md-5">
            <h1 class="title">
              A place for families & friends to create magical memories through
              experiences that focus on Farm, Food & Fun.
            </h1>
          </div>
          <div class="col-md-7">
            <div class="listBox">
              <div class="item" :class="{ active: active_el == 1 }">
                <p class="listTitle">
                  Explore <span class="arrowIcon" @click="activate(1)"></span>
                </p>
                <ul class="list">
                  <li>
                    <a :href="$store.state.shopifyUrl + '/collections/all'"
                      >Our Menu</a
                    >
                  </li>
                  <li><a href="/berries">Berries</a></li>
                  <li><a href="/berries#u-pick-section">U-Pick</a></li>
                  <li><a href="/wedding">Wedding</a></li>
                  <li><a href="/winery"> Winery</a></li>
                  <li><a href="/country-kitchen"> Country Kitchen</a></li>
                  <li><a href="/dynamic"> Dynamic Pages trial</a></li>
                </ul>
              </div>
              <div class="item" :class="{ active: active_el == 2 }">
                <p class="listTitle">
                  Family Fun
                  <span class="arrowIcon" @click="activate(2)"></span>
                </p>
                <ul class="list">
                  <li>
                    <a href="/family-fun/strawberry-days">Strawberry Days</a>
                  </li>
                  <li>
                    <a href="/family-fun/barnyard-adventure"
                      >Barnyard Adventure</a
                    >
                  </li>
                  <li>
                    <a href="/family-fun/sunflower-festival"
                      >Sunflower Festival</a
                    >
                  </li>

                  <li><a href="/family-fun/goat-yoga">Goat Yoga</a></li>
                  <li><a href="/family-fun/haunted-maze"> Haunted Maze</a></li>
                  <li>
                    <a href="/family-fun/fall-the-farm">Fall at the Farm</a>
                  </li>
                  <li>
                    <a href="/family-fun/easter-animal-safari"
                      >Easter Animal Safari</a
                    >
                  </li>
                </ul>
              </div>
              <div class="item" :class="{ active: active_el == 3 }">
                <p class="listTitle">
                  ABOUT <span class="arrowIcon" @click="activate(3)"></span>
                </p>
                <ul class="list">
                  <li><a href="about#story">Our Story</a></li>
                  <li><a href="about#history">History</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bannerWrapper">
      <no-ssr>
        <VueSlickCarousel v-bind="settings">
          <div class="img-bx">
            <img
              src="@/assets/images/home/home-banner3.jpg"
              class="d-none d-md-block"
              alt="MaanFarm Banner"
            />

            <img
              src="@/assets/images/home/home_car_weareopen_m2.jpg"
              class="d-block d-md-none"
              alt="MaanFarm Banner"
            />
          </div>
          <div class="img-bx">
            <a href="https://www.exploretock.com/maanfarms/" target="_blank"
              ><img
                src="@/assets/images/home/home_car_barnyard.jpg"
                class="d-none d-md-block"
                alt="Barnyard Adventure"
            /></a>

            <a href="https://www.exploretock.com/maanfarms/" target="_blank"
              ><img
                src="@/assets/images/home/home_car_barnyard_m.jpg"
                class="d-block d-md-none"
                alt="Barnyard Adventure"
            /></a>
          </div>

          <div class="img-bx">
            <a href="https://www.exploretock.com/maanfarms/" target="_blank"
              ><img
                src="@/assets/images/home/home_car_upick.jpg"
                class="d-none d-md-block"
                alt="U-Pick"
            /></a>

            <a href="https://www.exploretock.com/maanfarms/" target="_blank"
              ><img
                src="@/assets/images/home/home_car_upick_m.jpg"
                class="d-block d-md-none"
                alt="U-Pick"
            /></a>
          </div>
        </VueSlickCarousel>
      </no-ssr>
    </div>

    <div class="contentSection" id="u-pick-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 bannerWrapper barriesWrapper">
            <div class="contentBox">
              <h1 class="title">U-Pick</h1>
              <p class="text">
                The nicest fields with the best fruit, pick your berries then
                enjoy the animals, some ice cream or even a glass of wine.
              </p>
              <p class="splText">
                Please read the information before visiting.
              </p>
              <div class="btnGroup">
                <a
                  href="https://www.exploretock.com/maanfarms/"
                  target="_blank"
                  class="btn fill danger"
                  >Buy Tickets</a
                >
                <a href="/berries#u-pick-section-1" class="btn outline danger"
                  >Learn more</a
                >
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 ">
            <div class="bannerBox">
              <img
                src="@/assets/images/products/berry2.jpg"
                alt="BERRY PICKING at Maanfarms"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contentWrapper funFamily bg-1">
      <div class="imgBox">
        <div class="item">
          <img
            src="@/assets/images/home/home_famfun_2.jpg"
            alt="FAMILY FUN BANNER"
          />
        </div>
        <div class="item">
          <img
            src="@/assets/images/home/family-fub-banner2.jpg"
            alt="FAMILY FUN BANNER"
          />
        </div>
        <div class="item">
          <img
            src="@/assets/images/home/family-fub-banner3.jpg"
            alt="FAMILY FUN BANNER"
          />
        </div>
      </div>
      <div class="contentBox">
        <h3 class="title">FAMILY FUN</h3>
        <p class="text">
          Visit our farm animals and have fun with your family by enjoying our
          wide variety of farm attractions. See below for what’s included!
        </p>
        <div>
          <a href="#" target="_blank" class="link">Book your tickets now!</a>
        </div>
        <div class="btnGroup">
          <a href="/family-fun/family-fun-overview" class="btn fill danger"
            >Learn more</a
          >
        </div>
      </div>
    </div>
    <div class="contentWrapper ourProduct bg-2">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="mainTitle">Our Products</h3>
          </div>
          <div
            class="col-md-4 hand-pointer"
            @click.prevent="handleRedirect('/collections/berries')"
          >
            <div class="productBox">
              <div class="imgBox">
                <img src="@/assets/images/home/berries.jpg" alt="Berries" />
              </div>
              <div class="contentBox">
                <p class="title">Berries</p>
                <p class="text">
                  Farmer picks the fruit fresh and delivers it the same day,
                  keeping it as fresh as possible!
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-4 hand-pointer"
            @click.prevent="handleRedirect('/collections/wines')"
          >
            <div class="productBox">
              <div class="imgBox">
                <img src="@/assets/images/home/wine.jpg" alt="Wine" />
              </div>
              <div class="contentBox">
                <p class="title">Wine</p>
                <p class="text">
                  Solely produced in-house leaving no room for anything less
                  than the best.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-4 hand-pointer"
            @click.prevent="handleRedirect('/collections/canned-goods')"
          >
            <div class="productBox">
              <div class="imgBox">
                <img
                  src="@/assets/images/home/food.jpg"
                  alt="Country Kitchen"
                />
              </div>
              <div class="contentBox">
                <p class="title">Country Kitchen</p>
                <p class="text">
                  Enjoy Mama Maan’s authentic food at home. Pick up Fresh Meals,
                  Frozen Food & Wine without getting out of your car.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contentWrapper homeAbout bg-3">
      <div class="container">
        <h3 class="title">About</h3>
        <p class="text">
          We're family focused and are always thinking of new ways to share a
          part of our lives with the community. Our strong belief in home style
          hospitality, leads us to treat every guest as if we are personally
          inviting them into our home. With a welcoming nature, rooted in our
          cultural heritage, guests are guaranteed a fun farm experience that
          stands out amongst our neighbors.
        </p>

        <div class="btnGroup center">
          <a href="/about" class="btn fill danger">Learn more</a>
        </div>
      </div>
    </div>
    <div class="bannerWrapper bottomBanner">
      <img
        src="@/assets/images/home/home-banner2.jpg"
        class="d-none d-md-block"
        alt="Home style hospitality"
      />
      <img
        src="@/assets/images/home/Home8m.jpg"
        class="d-block d-md-none"
        alt="Home style hospitality"
      />
    </div>

    <footerBox></footerBox>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import headerBox from "~/components/header/index";
import footerBox from "~/components/footer/index";
export default {
  head() {
    return {
      title: "Maan Farms, Country Experience & Estate Winery",
      meta: [
        {
          hid: "title",
          property: "title",
          name: "title",
          content: "Maan Farms, Country Experience & Estate Winery"
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content: ""
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Maan Farms, Country Experience & Estate Winery"
        },
        { hid: "og:description", property: "og:description", content: "" }
        // other meta
      ]
    };
  },

  components: {
    headerBox,
    footerBox,
    VueSlickCarousel
  },

  data() {
    return {
      scrollPosition: null,
      height: 0,
      active_el: 0,
      settings: {
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500
      }
    };
  },
  computed: {},
  mounted() {
    this.parentNode = this.$el.parentElement;
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    handleRedirect(url) {
      document.location = this.$store.state.shopifyUrl + url;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.height = this.$refs.rr.clientHeight;
    },
    activate: function(el) {
      if (el == this.active_el) {
        this.active_el = 0;
      } else {
        this.active_el = el;
      }
    }
  }
};
</script>
<style scoped>
.hand-pointer:hover {
  cursor: pointer;
}
</style>
