<template>
  <div class="mainWapper fixedHeader">
    <headerBox class="showHeader"> </headerBox>
    <div class="pdWrapper">
      <div class="container">
        <div class="breadcrumbBox">
          <ul>
            <li>Product</li>
            <li>All Products</li>
            <li>Strawberries</li>
          </ul>
        </div>
        <div class="pdBox">
          <div class="row vertical-center">
            <div class="col-md-6">
              <div class="product-gallery">
                <div class="product-gallery__inner">
                  <div class="product-gallery__images">
                    <no-ssr>
                      <VueSlickCarousel v-bind="pdcarousel">
                        <div class="product-gallery__slide">
                          <img
                            src="@/assets/images/products/berries.jpeg"
                            alt="Corn Maze"
                          />
                        </div>
                        <div class="product-gallery__slide">
                          <img
                            src="@/assets/images/products/berries.jpeg"
                            alt="Corn Maze"
                          />
                        </div>
                        <div class="product-gallery__slide">
                          <img
                            src="@/assets/images/products/berries.jpeg"
                            alt="Corn Maze"
                          />
                        </div>
                      </VueSlickCarousel>
                    </no-ssr>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="detailBox">
                <h1 class="title">FRESH Strawberries</h1>
                <div class="price">$58.00</div>
                <div class="rating">
                  <span class="star star-4"></span>
                  <span class="review">(2 reviews)</span>
                </div>
                <div class="tagBtn">
                  <label class="item">
                    <input type="radio" name="tag" />
                    <span>15lbs</span>
                  </label>
                </div>
                <p class="text">
                  Fresh, sweet and juicy strawberries picked at perfect
                  ripeness. Flats are 15lbs. No direct to house delivery, only
                  to pickup locations.
                </p>
                <div class="btnGroup">
                  <a href="#" target="_blank" class="btn fill green"
                    >Add to Cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="splWidth">
            <div class="reviewWrapper">

              <h3 class="title">CUSTOMER REVIEWS</h3>
              <div class="reviewBox">
                <div class="item">
                  <div class="topSection">
                    <div class="box">
                      <p class="cName">Brenda P.</p>
                      <div class="rating">
                        <span class="star star-5"></span>
                      </div>
                    </div>
                    <div class="box">
                      <p class="date"> 18 June, 2020</p>
                    </div>
                  </div>
                  <div class="reviewContent">
                    <p class="reviewTitle">Unexpected Flavour!</p>
                    <p class="reviewText">Tasty ... best decanted. Lovely compliment to distinctive cheeses, flavourful meats.</p>
                  </div>
                </div>
                <div class="item">
                  <div class="topSection">
                    <div class="box">
                      <p class="cName">Debbie R.</p>
                      <div class="rating">
                        <span class="star star-4"></span>
                      </div>
                    </div>
                    <div class="box">
                      <p class="date"> 2 May, 2020</p>
                    </div>
                  </div>
                  <div class="reviewContent">
                    <p class="reviewTitle">Amazing Wine</p>
                    <p class="reviewText">Normally I'm not much of a wine drinker, nor my mother, but when we tried this wine we changed our opinions pretty quickly! My mother is the type to open a bottle and then leave it in the fridge for a year or so , but this wine didn't last an hour between 3 people.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div class="contentSection testimonialsSection bg-11">
      <div class="container">
        <div class="testimonialsWrapper">
          <div class="testimonialsGroup">
            <no-ssr>
              <VueSlickCarousel v-bind="settings">
                <div class="item">
                  <h3 class="title">OUR FARMING PRACTICES</h3>
                  <p class="smTitle">Prioritizing Sustainability</p>
                  <p class="text">
                    This method is also environmentally friendly, as our berries are mindfully produced in consideration of negative impacts on the environment and those around us–compared to any other form of agriculture, including Organic. The use of IPM, also ensures enough production of fruit to feed a society, despite the growing population. In addition to these positive aspects, IPM contributes to effective and ethically priced produce, as we do not charge the outrageous prices that Organic Farmers would, due to their lack of yields per acre, forcing them to compensate in regards to the price they charge per lb.
                  </p>
                  <p class="name">- Katie Dyck</p>
                </div>
                <div class="item">

                  <h3 class="title">Photography Options!</h3>
                  <p class="smTitle">Prioritizing Sustainability</p>
                  <p class="text">
                    Food was great. Staff was always accommodating, and promptly
                    answered all my questions as a nervous bride. I highly
                    recommend this wedding venue, I still receive so many
                    compliments on the whole event!
                  </p>
                  <p class="name">- Alok</p>
                </div>
              </VueSlickCarousel>
            </no-ssr>
          </div>
        </div>
        <div class="extraMT faq splWidth">
          <h2 class="mainTitle">FREQUENT QUESTIONS FOR PICKUP</h2>
          <div class="accordion" role="tablist">

            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-1
                  >Abbotsford, Fort Langley, Trout Lake Vancouver, West End Vancouver, Coquitlam, White Rock, Kitsilano </b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We work on a first come first served basis. The only way to
                    hold your day is to book your reservation. Bookings require
                    a deposit and a completed contract.</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-2
                  >I can't place a pre-order for a specific date, what gives?</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We work on a first come first served basis. </b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-3
                  >Where do I go once I arrive and how does picking up work?</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We work on a first come first served basis. </b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-4
                  >I didn’t receive a confirmation email, now what?</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We work on a first come first served basis. </b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-5
                  >I forgot I had scheduled a pick-up! Now what?</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We work on a first come first served basis. </b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-6
                  >I missed my berry pick-up and I would like a refund.</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We work on a first come first served basis. </b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-7
                  >Can I come pick my order up on a different date than I selected?</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-7"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We work on a first come first served basis. </b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-8
                  >What time can I pick up my order from the Farmers Market?</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-8"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We work on a first come first served basis. </b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

          </div>

        </div>
         <div class="bannerWrapper extraMT splWidth pdpBanner withBtn">
            <img src="@/assets/images/products/banner.png" alt="Maan Farms Banner" />
            <div class="btnGroup">
                  <a href="#" target="_blank" class="btn fill green"
                    >Know More</a
                  >
                </div>
          </div>
      </div>
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
      pdcarousel: {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
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
