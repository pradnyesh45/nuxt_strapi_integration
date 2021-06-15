<template>
  <div class="mainWapper fixedHeader theme9">
    <headerBox class="pos0" :class="[{ showHeader: scrollPosition > height }]">
    </headerBox>
    <div class="innerBannerSection">
      <div class="container">
        <div class="row bannerWrapper">
          <div class="col-md-6">
            <div class="contentBox">
              <h1 class="title">Strawberry days</h1>
              <p class="text">

                Strawberry season is here! Join us for U-Pick, Dog Days, and more. Purchase tickets online below to guarantee your spot this summer.
              </p>
              <!-- <p class="splText">Takes place from April 2 to 4</p> -->
              <div class="btnGroup">
                <a href="https://www.exploretock.com/maanfarms/" class="btn fill dark ">Book Now</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="imgBox">
              <img
                src="@/assets/images/family-fun/strawberry/strawberry-days.jpeg"
                alt="Strawberry Days"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonialsSection dark-4">
      <div class="container">
        <div class="testimonialsWrapper">
          <div class="testimonialsGroup">
            <div class="item">
              <h3 class="title">VIP Strawberry Pass</h3>
              <p class="text">
                We have a day full of fun for you to experience at the farm.
                Start off with a visit to the 7 attractions in the Barnyard
                Adventureland, enjoy a wine tasting flight or Strawberry slushie,
                then make your way to pick some fresh berries and enjoy our
                strawberry mini donuts! Don’t forget to feed the goats and take
                lots of photos all over the farm. *Activities can be done in any
                order, you will recieve a wristband and your complementary treats when you check in.
              </p>

              <div class="btnGroup">
                <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill plain ">Book Now</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contentSection">
      <div class="container">
        <div class="date-rates">
          <div class="headBox">
            <h3 class="title">VIP PASS DETAILS</h3>
          </div>
          <div class="imgBox">
            <img
              src="@/assets/images/family-fun/strawberry/vip-strawberry-pass-2021.jpg"
              alt="VIP PASS DETAILS"
            />
          </div>
          <div class="imgBox">
            <img
              src="@/assets/images/family-fun/strawberry/strawberry-season-calendar-2021.jpg"
              alt="VIP PASS DETAILS"
            />
          </div>

          <div class="textBox">
            <p class="text">

              Purchase tickets online to guarantee your spot.
            </p>

          </div>
          <div class="btnGroup center">
            <a href="https://www.exploretock.com/maanfarms/" class="btn fill dark ">Book Now</a>
          </div>
        </div>
        <div class="extraMT faq splWidth">
          <h2 class="mainTitle">MORE INFO</h2>
          <div class="accordion" role="tablist">
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-1
                  >Farm Facts
                </b-button>
              </b-card-header>
              <b-collapse
                id="mostAsk-1"
                accordion="my-accordion"
                role="tabpanel"
                visible
              >
                <b-card-body>
                  <b-card-text>
                    Every Saturday the Strawberry Princess or one of her helpers will be sharing some fun and helpful information about growing strawberries and life on the farm.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-7
                  >Strawberry Princess</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-7"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    The Strawberry Princess works on the farm and loves Strawberries! Come meet the Princess get a photo and learn all about strawberries. The Strawberry Princess is usually here 11- 2 – look for the crown on the calendar to see which days.


                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-2
                  >Dog Days</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                   Bring your furry friend to the farm! Dogs are welcome on the farm on Dog Days. Please keep dogs on leash at all times and pick up after them. Dogs are not permitted in the petting zoo area.


                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-3
                  >Fathers Day</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    This father’s day treat your dad to Goat Yoga and Pancakes!

                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-4
                  >Tuesday Treat Day</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Every Tuesday throughout Strawberry Days we will be offering a special treat. Buy a  Strawberry Ice Cream and get a child’s ice cream free.


                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <!-- <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-5
                  >Goat Yoga</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    What is goat yoga?! Just what it sounds like Yoga with Goats. Attend this outdoor class and enjoy a meal drink and a 1 hour goat yoga class.


                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-6
                  >Goat Yoga and Farm Retreat</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Experience the farm for a whole weekend. Find out more and and book your spot at https://www.exploretock.com/maanfarms/


                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card> -->

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-8
                  >Strawberry Moon Goat Yoga</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-8"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                   Embrace wellness at the farm with the help of our furry goat friends and fresh strawberries. Goat Yoga will be held throughout the season with a special class scheduled for the Strawberry Full Moon.


                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
        <div class="bannerWrapper extraMT splWidth pdpBanner withBtn">
          <img
            src="@/assets/images/products/banner.png"
            alt="Maan Farms Banner"
          />
          <div class="btnGroup">
            <a href="/berries#u-pick-section" class="btn fill danger "
              >Know More</a
            >
          </div>
        </div>
      </div>
    </div>
<!-- 
    <div class="contentSection text-r">
      <div class="container">
        <div class="row vertical-center">
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img
                src="@/assets/images/family-fun/strawberry/strawberry-planting.jpeg"
                alt="STRAWBERRY PLANTING"
              />
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <h3 class="title">STRAWBERRY PLANTING</h3>
              <p class="text">
                Kids and Adults, come and have some food and fun while you learn
                about strawberry growing. Plant your own strawberry planter to
                take home.
              </p>
              <div class="btnGroup"> -->
                <!-- <a href="#" target="_blank" class="btn fill danger "
                  >Book Now</a
                > -->
              <!-- </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="contentSection text-l bg-14">
      <div class="container">
        <div class="row vertical-center reverse">
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <h3 class="title">STRAWBERRY MOON</h3>
              <p class="text">
                Embrace wellness at the farm with the help of our furry goat friends and fresh strawberries. Goat Yoga will be held throughout the season with a special class scheduled for the Strawberry Full Moon.
              </p>
              <div class="btnGroup">
                <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill danger "
                  >Book Now</a
                >
              </div>

            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img
                src="@/assets/images/family-fun/strawberry/strawberry-moon.jpeg"
                alt="STRAWBERRY MOON"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contentSection text-r">
      <div class="container">
        <div class="row vertical-center">
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img
                src="@/assets/images/family-fun/strawberry/freshest.jpeg"
                alt="MAAN FARM’S FRESHEST"
              />
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <h3 class="title">MAAN FARM’S FRESHEST</h3>
             <p class="text">
                Yes, we have the freshest and juiciest berries within the Fraser
                Valley. But did you know our 80-acre farm supports
                Sustainability? Yup, that’s right! When you purchase berries
                from our farm you’re giving back to the planet by supporting
                sustainable, cost-effective and ethical farming practices which
                are safe for you and the environment.
              </p>
              <p class="text">– Amir & Kris Maan</p>

            </div>
          </div>
        </div>
      </div>
    </div>

   <div class="contentSection bg-14">
      <div class="container">
        <div class="bookBox">
          <h3 class="title">BOOK TICKETS</h3>
          <p class="text">

          To check what is available, please click the link below to go to our booking site.
          </p>

          <div class="btnGroup center">
            <a href="https://www.exploretock.com/maanfarms/" class="btn fill danger">Book Now</a>
            <a href="https://shop.maanfarms.com/collections/berries" class="btn outline danger">Order Berries</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bannerWrapper bottomBanner">
      <img src="@/assets/images/family-fun/strawberry/banner.jpeg" alt="Strawberry Banner" />
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
      title: "Strawberry Days At Maan Farms",
      meta: [
        {
          hid: "title",
          property: "title",
          name: "title",
          content: "Strawberry Days At Maan Farms",
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content: "",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Strawberry Days At Maan Farms",
        },
        { hid: "og:description", property: "og:description", content: "" },
        // other meta
      ],
    };
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
      smCarousel: {
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
            },
          },
        ],
      },
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
