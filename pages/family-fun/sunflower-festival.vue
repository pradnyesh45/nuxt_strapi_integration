<template>
  <div class="mainWapper fixedHeader theme5">
    <headerBox class="pos0" :class="[{ showHeader: scrollPosition > height }]">
    </headerBox>
    <div class="innerBannerSection">
      <div class="container">
        <div class="row bannerWrapper">
          <div class="col-md-6">
            <div class="contentBox">
              <h1 class="title">SUNFLOWER FESTIVAL 2021</h1>
              <p class="text">
                Your ticket includes access to our Sunflower Field, Corn Maze
                and Barnyard Adventureland, which are separate attractions
              </p>
              <p class="splText">Details and Tickets will be released soon.</p>
              <div class="btnGroup">
                <a href="#" target="_blank" class="btn fill dark disabled"
                  >Buy Tickets</a
                >

                <!-- <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill dark disabled"
                  >Buy Tickets</a
                > -->
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="imgBox">
              <img
                src="@/assets/images/family-fun/sunflower/sunflowerBanner1.jpg"
                alt="BARNYARD ADVENTURELAND"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonialsSection dark-5">
      <div class="container">
        <div class="testimonialsWrapper">
          <div class="testimonialsGroup">
            <div class="item">
              <h3 class="title">790 McKenzie Rd, Abbotsford BC</h3>
              <p class="text">
                Put on your Sunday best, grab your cameras and snap a picture
                perfect moment at Abbotsford’s first ever Sunflower Festival!
                You’ll be able to take pictures at different photo ops
                perfectly decorated to trend on the explore page and then snip
                your own golden beauties at our U-Pick field which is grown with
                only premium varietals. Once you’re done basking in the glow of
                our sea of sunflowers, grab a wine tasting flight to sip on and
                enjoy. Do it for the gram. If you didn’t snap it…did it really
                happen?
              </p>

              <div class="btnGroup">
                <a href="#" target="_blank" class="btn fill plain disabled"
                  >Buy Tickets</a
                >
                <!-- <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill plain"
                  >Buy Tickets</a
                > -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contentSection postCardWrapper">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <h3 class="mainTitle">ATTRACTIONS</h3>
          </div>
        </div>
        <div class="postCardGrid">
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/sunflower/picnic-petals.jpg"
                  alt="Picnic in the petals"
                />
              </div>
              <h4 class="title">Picnic in the petals</h4>
              <p class="text">
                Enjoy a glass of our wine, homemade goods & fresh berries.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/sunflower/photoOps.jpg"
                  alt="Photo Ops"
                />
              </div>
              <h4 class="title">Photo Ops</h4>
              <p class="text">
                Stylized locations throughout the field to capture the perfect
                Instagram Pic.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/sunflower/kids.jpg"
                  alt="Kids under 3 free"
                />
              </div>
              <h4 class="title">Kids under 3 free</h4>
              <p class="text">
                Anyone 2 years of age is free to enter our patch.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/sunflower/dog.jpg"
                  alt="Dog days"
                />
              </div>
              <h4 class="title">Dog days</h4>
              <p class="text">
                Bring your pups on Aug 17th or 18th and take a picture in our
                field.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/sunflower/cuddleGoats.jpg"
                  alt="Cuddle BB goats"
                />
              </div>
              <h4 class="title">Cuddle BB goats</h4>
              <p class="text">
                Discover the farm and see all the baby animals plus all of our
                farm attractions!
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/sunflower/maansKitchen.jpg"
                  alt="Mama Maan’s Kitchen"
                />
              </div>
              <h4 class="title">Mama Maan’s Kitchen</h4>
              <p class="text">
                Tornado Potatoes, Pakoras, Samosas, and Butter Chicken during
                the entire festival.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contentSection text-l bg-10">
      <div class="container">
        <div class="row vertical-center reverse">
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <h3 class="title">FROLIC</h3>
              <p class="text">
                Frolic the Field at Abbotsford’s 1st ever Sunflower Festival!
                Put on your best outfit, grab your cameras and snap a picture
                perfect moment. You’ll be able to take pictures at different
                photo ops perfectly designed to trend.
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img
                src="@/assets/images/family-fun/sunflower/sunflowerBanner2.jpg"
                alt="FROLIC"
              />
            </div>
          </div>
        </div>
        <div class="extraInfo">
          <no-ssr>
            <VueSlickCarousel v-bind="smCarousel">
              <div class="col-sm-12 col-md-12 col-lg-12 item">
                <h4 class="title">Pick</h4>
                <p class="text">
                  Pick your own golden beauties in our lush u-pick field full of
                  premium varietals reaching up to 6 feet high. Strawberry
                  u-pick is also available!
                </p>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 item">
                <h4 class="title">Sip</h4>
                <p class="text">
                  Sip our award-winning wine in our rustic-chic Wine Garden
                  after you’ve captured the beauty of our sea of sunflowers.
                </p>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 item">
                <h4 class="title">Play</h4>
                <p class="text">
                  Play with the cutest goats, jump on our giant pillow and zip
                  down our zip-line in our Barnyard Adventureland.
                </p>
              </div>
            </VueSlickCarousel>
          </no-ssr>
        </div>
      </div>
    </div>
    <div class="contentSection text-r">
      <div class="container">
        <div class="row vertical-center">
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img
                src="@/assets/images/family-fun/sunflower/sunflowerBanner3.jpg"
                alt="FOOD & WINE"
              />
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <h3 class="title">FOOD & WINE</h3>
              <p class="text">2021 Information Coming Soon</p>


              <!-- <p class="text">
                Our antique barn has been beautifully restored to create the
                perfect reception venue. The barn has the capacity to hold
                approximately 150 guests. Before your wedding we will provide
                you with a tasting to help you select your wedding menu.
              </p> -->
            </div>
          </div>
        </div>
        <!-- <div class="extraInfo">
          <no-ssr>
            <VueSlickCarousel v-bind="smCarousel">
              <div class="col-sm-12 col-md-12 col-lg-12 item">
                <h4 class="title">Country Kitchen</h4>
                <p class="text">
                  Every day we have awesome food like Tornado Potatoes, Mama
                  Maan’s Famous Butter Chicken and Veggie Samosas made with our
                  fresh picked Potatoes!
                </p>

                <p class="text">Open daily 9am-6pm.</p>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 item">
                <h4 class="title">Goat Wine</h4>
                <p class="text">
                  Saturday & Sunday of the Sunflower festival we are offering a
                  food and wine experience in our sunflower field. Sip wine,
                  snack on charcuterie and enjoy the sunflower surroundings.
                </p>
                <p class="text">Open noon – 7pm.</p>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 item">
                <h4 class="title">Tasting Room</h4>
                <p class="text">
                  A place where people can gather to laugh, have fun, eat good
                  food and enjoy our award winning wine. Join the Berry Drinkers
                  wine club to receive great discounts and perks.
                </p>
                <p class="text">Open daily 9am-6pm</p>
              </div>
            </VueSlickCarousel>
          </no-ssr>
        </div> -->
      </div>
    </div>
    <div class="contentSection bg-6">
      <div class="container">
        <div class="date-rates">
          <div class="headBox">
            <h3 class="title">RATES & DATES</h3>
            <p class="smTitle">Details for the 2021 Festival will be released soon.</p>

          </div>
          <div class="imgBox">
            <img
              src="@/assets/images/family-fun/sunflower/rate-dates.png"
              alt="RATES & DATES"
            />
          </div>
          <div class="imgBox">
            <img
              src="@/assets/images/family-fun/sunflower/calendar.png"
              alt="Calendar"
            />
          </div>
          <div class="moreInfo">
            <div class="infoGrid">
              <div class="item">
                <div class="iconBox">
                  <img
                    src="@/assets/images/family-fun/sunflower/lowBloomIcon.svg"
                    alt="Low Bloom Icon"
                  />
                </div>
                <div class="textWrap">
                  <h5 class="headTxt">Low Bloom</h5>
                </div>
              </div>
              <div class="item">
                <div class="iconBox">
                  <img
                    src="@/assets/images/family-fun/sunflower/highBloomIcon.svg"
                    alt="High Bloom Icon"
                  />
                </div>
                <div class="textWrap">
                  <h5 class="headTxt">High Bloom</h5>
                </div>
              </div>
              <div class="item">
                <div class="iconBox">
                  <img
                    src="@/assets/images/family-fun/sunflower/dogIcon.svg"
                    alt="Dog Icon"
                  />
                </div>
                <div class="textWrap">
                  <h5 class="headTxt">Dog days</h5>
                </div>
              </div>
               <div class="item">
                <div class="iconBox">
                  <img
                    src="@/assets/images/family-fun/sunflower/birdIcon.svg"
                    alt="Bird Icon"
                  />
                </div>
                <div class="textWrap">
                  <h5 class="headTxt">Early Bird</h5>
                </div>
              </div>
              <div class="item">
                <div class="iconBox">
                  <img
                    src="@/assets/images/family-fun/sunflower/sunriseIcon.svg"
                    alt="Sunrise Icon"
                  />
                </div>
                <div class="textWrap">
                  <h5 class="headTxt">Golden Hour</h5>
                  <p class="text">Sunrise 6-9 AM</p>
                </div>
              </div>
              <div class="item">
                <div class="iconBox">
                  <img
                    src="@/assets/images/family-fun/sunflower/sunsetIcon.svg"
                    alt="Sunset Icon"
                  />
                </div>
                <div class="textWrap">
                  <h5 class="headTxt">Golden Hour</h5>
                  <p class="text">Sunset 5-8 AM</p>
                </div>
              </div>

            </div>
          </div>
          <div class="textBox">
            <p class="text">
              Purchase your tickets online to get the best pricing.
            </p>
            <p class="text"> Event dates and times will be released soon.</p>
          </div>
          <div class="btnGroup center">
            <a href="#" target="_blank" class="btn fill dark disabled"
              >Buy Tickets</a
            >
            <!-- <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill dark "
              >Buy Tickets</a
            > -->
          </div>
        </div>
      </div>
    </div>
    <div class="bannerWrapper">
      <img
        src="@/assets/images/family-fun/sunflower/sunflowerBanner4.jpg"
        alt="Picnic in the Petals"
      />
    </div>
    <div class="contentSection">
      <div class="container">
        <div class="splWidth">
        <div class="cards">

            <div class="headBox">
              <h3 class="title">Picnic in the Petals</h3>
              <p class="smTitle">
                Enjoy fresh eats from Mama Maan’s kitchen while sipping on a
                glass of award winning wine overlooking the field.
              </p>
              <p class="smTitle">
                Bring Your Own Blankets, all picnic packages include free
                admission for two.
              </p>
            </div>


            <div class="productCard bgColor2">
              <div class="imageWrapper">
                <img
                  src="@/assets/images/family-fun/sunflower/curryBowl.jpg"
                  alt="Curry Bowl & Lemonade"
                />
              </div>
              <div class="textWrapper">
                <p class="title">Curry Bowl & Lemonade</p>
                <ul class="info">
                  <li>2 butter chicken/chickpea bowls</li>
                  <li>2 strawberry lemonades</li>
                  <li>2 fruit tarts</li>
                  <li>2 admissions</li>
                </ul>
                <p class="priceBox">$50.00</p>
                <div class="btnGroup center">
                  <a href="#" target="_blank" class="btn fill dark disabled">Buy Now</a>
                  <!-- <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill dark ">Buy Now</a> -->
                </div>
              </div>
            </div>


            <div class="productCard bgColor2">
              <div class="imageWrapper">
                <img
                  src="@/assets/images/family-fun/sunflower/charcuterieLemonade.jpg"
                  alt="Charcuterie & Lemonade"
                />
              </div>
              <div class="textWrapper">
                <p class="title">Charcuterie & Lemonade</p>
                <ul class="info">
                  <li>Charcuterie box for 2:
pakoras, 2 mini samosas, indian chutney, crackers, goat cheese, gouda cheese, pepper jelly, farm grown berries</li>
                  <li>2 strawberry lemonades</li>
                  <li>2 admissions</li>
                </ul>
                <p class="priceBox">$65.00</p>
                <div class="btnGroup center">
                  <a href="#" target="_blank" class="btn fill dark disabled">Buy Now</a>
                  <!-- <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill dark">Buy Now</a> -->
                </div>
              </div>
            </div>


            <div class="productCard bgColor2">
              <div class="imageWrapper">
                <img
                  src="@/assets/images/family-fun/sunflower/wineCharcuterie.jpg"
                  alt="Wine & Charcuterie"
                />
              </div>
              <div class="textWrapper">
                <p class="title">Wine & Charcuterie</p>
                <ul class="info">
                  <li>Charcuterie box for 2:
pakoras, 2 mini samosas, indian chutney, crackers, goat cheese, gouda cheese, pepper jelly, farm grown berries</li>
                  <li>2 glasses of wine</li>
                  <li>2 admissions</li>
                </ul>
                <p class="priceBox">$70.00</p>
                <div class="btnGroup center">
                  <a href="#" target="_blank" class="btn fill dark disabled">Buy Now</a>
                  <!-- <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill dark">Buy Now</a> -->
                </div>
              </div>
            </div>

        </div>
        <div class="extraMT faq dark">
          <h2 class="mainTitle">PREPARE FOR YOUR VISIT</h2>
          <div class="listGroup">
            <p class="item">
              Your ticket includes access to our Sunflower Field, Corn Maze and
              Barnyard Adventureland, which are separate attractions
            </p>
            <p class="item">
              Please check-in in our Farm Market at 790 Mckenzie Road,
              Abbotsford
            </p>
            <p class="item">Bring your camera</p>
            <p class="item">
              Dress according to the weather and for being on the farm. For the
              corn maze we recommend boots and a water bottle, it is 10 degrees
              warmer in the corn maze that outside
            </p>
            <p class="item">We take cash, credit and debit</p>
            <p class="item">Please see the chart for rates of entry</p>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="contentSection bg-6">
      <div class="container">
        <div class="bookBox">
          <h3 class="title">FUN FACT</h3>
          <p class="text">
            Did you know young sunflowers turn to face the sun? A young flower
            faces east at dawn and greets the sun, then slowly turns west as the
            sun moves across the sky. During the evening it turns back east to
            begin the cycle again.
          </p>

          <div class="btnGroup center">
            <a href="#" target="_blank" class="btn fill dark disabled">Buy Now</a>
            <!-- <a href="#" target="_blank" class="btn fill dark">Buy Tickets</a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="bannerWrapper bottomBanner">
      <img
        src="@/assets/images/family-fun/sunflower/sunflowerBanner5.jpg"
        alt="Fun Fact"
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
head () {
      return {
        title: "Sunflower Festival At Maan Farms",
        meta: [
          { hid: 'title', property: 'title',name: 'title', content: "Sunflower Festival At Maan Farms"},
          { hid: 'description', name: 'description', property: 'description', content: ""},
          { hid: 'og:title', property: 'og:title', content: "Sunflower Festival At Maan Farms"},
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
