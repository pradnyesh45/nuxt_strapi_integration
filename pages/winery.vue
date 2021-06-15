<template>
  <div class="mainWapper fixedHeader theme5">
    <headerBox class="pos0" :class="[{ showHeader: scrollPosition > height }]">
    </headerBox>
    <div class="innerBannerSection">
      <div class="container">
        <div class="row bannerWrapper">
          <div class="col-md-6">
            <div class="contentBox">
              <h1 class="title splpd">DRINK OUR ESTATE WINE</h1>
              <p class="text">
                Maan Farms’ wines are solely produced in house leaving no room for anything less than the best that we have to offer.
              </p>
              <p class="splText">2 pounds of berries per bottle!</p>
              <div class="btnGroup">
                <a href="https://shop.maanfarms.com/collections/wines " target="_blank" class="btn fill danger"
                  >Order Now</a
                >

              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="imgBox">
              <img src="@/assets/images/products/wine.jpg" alt="wine" />
            </div>
          </div>
        </div>

      </div>
    </div>


    <div class="contentSection text-r bg-10">
      <div class="container">
        <div class="row vertical-center">
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img src="@/assets/images/winery/winery2.jpg" alt="FAMILY OWNED WINE"/>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">

              <h3 class="title">FAMILY OWNED</h3>
              <p class="text">
                A local family has united together to pursue their passions in order to better the lives of themselves and their loved ones while providing tremendous value to the community in which they live.
              </p>

            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="contentSection text-l ">
      <div class="container">
        <div class="row vertical-center reverse">

          <div class="col-sm-12 col-md-6">
            <div class="contentBox">

              <h3 class="title">QUALITY FRUIT</h3>
              <p class="text">
                Recently picked, looks good, tastes good and is good for you. 2 pounds of berries per bottle!
              </p>

            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img src="@/assets/images/winery/winery3.jpg" alt="QUALITY FRUIT WINE"/>
            </div>
          </div>
        </div>

      </div>
    </div>
     <div class="contentSection text-r bg-10">
      <div class="container">
        <div class="row vertical-center">
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img src="@/assets/images/winery/winery4.jpg" alt="AWARD WINNING WINE"/>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">

              <h3 class="title">AWARD WINNING</h3>
              <p class="text">
                Hard work and dedication has gone into a product or service that has been recognized by a panel of experts to be above and beyond the rest of the field.
              </p>

            </div>
          </div>

        </div>

      </div>
    </div>
     <div class="contentSection text-l ">
      <div class="container">
        <div class="row vertical-center reverse">

          <div class="col-sm-12 col-md-6">
            <div class="contentBox">

              <h3 class="title">TASTING ROOM</h3>
              <p class="text">
                A place where people can gather to laugh, have fun, eat good food, enjoy amazing  wine, and feel as if they are in the comfort of their own home.
              </p>

            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img src="@/assets/images/winery/winery5.jpg" alt="TASTING ROOM"/>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="contentSection bg-10">
      <div class="container">
        <div class="bookBox">
          <div class="titleImg">
            <img src="@/assets/images/buyBCLogo.png" alt="Buy BC Logo"/>
          </div>
          <p class="text">
            This project is supported by the BC Government’s Buy BC Partnership Program;
delivered by the Investment Agriculture Foundation of BC with funding from the
Government of British Columbia. Opinions expressed in this document are those of
Maan Farms and not necessarily those of the Government of British Columbia
or the Investment Agriculture Foundation of BC.
          </p>

        </div>
      </div>
    </div>
    <div class="bannerWrapper bottomBanner">
      <img src="@/assets/images/winery/winery6.jpg" alt="MaanFarm Banner Wine Banner"/>

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

