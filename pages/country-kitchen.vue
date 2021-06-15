<template>
  <div class="mainWapper fixedHeader">
    <headerBox class="pos0" :class="[{ showHeader: scrollPosition > height }]">
    </headerBox>

    <div class="innerBannerSection">
      <div class="container">
        <div class="row bannerWrapper">

          <div class="col-sm-12 col-md-6">
            <div class="contentBox">

              <h3 class="title">Mama Maan's Kitchen</h3>
              <p class="text">
                <!-- Enjoy Mama Maan’s authentic food at home. Pick up Fresh Meals, Frozen Food & Wine without getting out of your car. -->
                 You can enjoy a fresh meal on our patio and licensed lounge.
              </p>
              <div class="btnGroup">
                <a href="https://shop.maanfarms.com/collections/canned-goods" target="_blank" class="btn fill green"
                  >Order Now</a
                >

              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="imgBox">
              <img src="@/assets/images/products/authentic-food.jpg" alt="Touch-Free Curbside Pick up" />
            </div>
          </div>
        </div>
        <div class="extraInfo">
           <no-ssr>
              <VueSlickCarousel v-bind="smCarousel">
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">Moving Forward</h4>
            <p class="text">
              While we work alongside everyone in our community to support social distancing, we have found a way to stay connected – through food.
            </p>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">Selected Offerings</h4>
            <p class="text">
              We are pleased to offer touch free curbside pick up for a select offering of Mama Maan’s delicious meals, wine, treats and frozen food.
            </p>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">Safety & Sanitation</h4>
            <p class="text">
              We will have a skeleton staff on board and we have increased our sanitation procedures. All food is prepared with no direct contact.

            </p>
          </div>
              </VueSlickCarousel>
           </no-ssr>
        </div>
      </div>
    </div>
   <div class="bannerWrapper ">
      <img src="@/assets/images/products/food-banner.jpg" alt="FRESH MEAL" />
    </div>
    <div class="contentSection">
      <div class="container splBanner">
            <div class="bannerBox">
              <img src="@/assets/images/products/butter-chicken.jpg" alt="Mama Maan Cooking Adventure"/>
            </div>
            <div class="colorBox">
              <h4 class="title">Mama Maan shares her secrets</h4>
              <div class="textBox">
              <p class="text">Mama Maan is finally ready to share her secret Butter Chicken recipe!</p>

<p class="text">While relaxing and sipping on our award winning Maan Farms Wine, Mama Maan will cook for you and teach you how to make an Authentic Butter Chicken Meal. </p>

<p class="text">Once Mama Maan’s demonstration is completed, we will all sit together and enjoy our meal with a glass of Maan Farms Wine.</p>
</div>
<p class="splText">Classes Coming Soon!</p>
            </div>
      </div>
    </div>

    <div class="bannerWrapper bottomBanner">
      <img src="@/assets/images/products/food-wine-banner.jpg" alt="MaanFarm Banner"/>
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
  head () {
      return {
        title: "Our Products - Maan Farms",
        meta: [
          { hid: 'title', property: 'title',name: 'title', content: "Our Products - Maan Farms"},
          { hid: 'description', name: 'description', property: 'description', content: ""},
          { hid: 'og:title', property: 'og:title', content: "Our Products - Maan Farms"},
          { hid: 'og:description', property: 'og:description', content: ""}
          // other meta
        ]
      }
    },
  components: {
    headerBox,
    footerBox,
    VueSlickCarousel,
  },
  data() {
    return {
      scrollPosition: null,
      height: 0,
      settings: {
        arrows: false,
        dots: true,
        fade: true,
        speed: 500,
      },
  smCarousel:{
  arrows: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        fade: true,
      }
    }
  ]


  }

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

