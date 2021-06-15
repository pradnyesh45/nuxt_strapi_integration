<template>
  <div class="mainWapper fixedHeader theme7">
    <headerBox class="pos0" :class="[{ showHeader: scrollPosition > height }]">
    </headerBox>
    <div class="innerBannerSection">
      <div class="container">
        <div class="row bannerWrapper">
          <div class="col-md-6">
            <div class="contentBox">
              <h1 class="title">FALL AT THE FARM</h1>
              <p class="text">
                Live out all your fall fantasies at the farm. Whether it's
                indulging in tasty seasonal treats or getting the perfect photo
                in the pumpkin patch, we have what it takes to make your fall
                dreams come true.
              </p>
              <p class="splText">Dates will be released soon</p>
              <div class="btnGroup">
                <a href="#" target="_blank" class="btn fill dark disabled"
                  >Buy Tickets</a
                >
                <!-- <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill dark"
                  >Buy Tickets</a
                > -->
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="imgBox">
              <img
                src="@/assets/images/family-fun/fallTheFarm/fallTheFarm.jpg"
                alt="FALL AT THE FARM"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contentSection postCardWrapper">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <h3 class="mainTitle">FALL FOODS MADE <span>IN-HOUSE</span></h3>
          </div>
        </div>
        <div class="postCardGrid">
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/fallTheFarm/caramelApples.jpg"
                  alt="Caramel Apples"
                />
              </div>
              <h4 class="title">Caramel Apples</h4>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/fallTheFarm/kettleCorn.jpg"
                  alt="Kettle Corn"
                />
              </div>
              <h4 class="title">Kettle Corn</h4>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/fallTheFarm/pumpkinPie.jpg"
                  alt="Pumpkin Pie"
                />
              </div>
              <h4 class="title">Pumpkin Pie</h4>
            </div>
          </div>
        </div>

        <div class="extraMT row">
          <div class="col-sm-12 col-md-12">
            <h3 class="mainTitle">ATTRACTIONS</h3>
          </div>
        </div>
        <div class="postCardGrid">
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/cornmaze.jpg"
                  alt="Corn Maze"
                />
              </div>
              <h4 class="title">Corn Maze</h4>
              <p class="text">
                Not all who wander are lost, but most are when they come to our
                corn maze.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/pettingZoo.jpg"
                  alt="Petting Zoo"
                />
              </div>
              <h4 class="title">Petting Zoo</h4>
              <p class="text">
                We’ve got goats, baby goats, bunnies, chickens, peacocks, and
                sheep!
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/pedalGo-Kart.jpg"
                  alt="Pedal Go-Kart"
                />
              </div>
              <h4 class="title">Pedal Go-Kart</h4>
              <p class="text">Let’s see who’s the fastest in the family?</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/zipline.jpg"
                  alt="Zipline"
                />
              </div>
              <h4 class="title">Zipline</h4>
              <p class="text">Yupp, we’ve got a Zip Line. Nuff said.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/tractorField.jpg"
                  alt="Tractor Field"
                />
              </div>
              <h4 class="title">Tractor Field</h4>
              <p class="text">Have a blast climbing on a real tractor.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/pumpkinPatch.jpg"
                  alt="Entry To Pumpkin Patch"
                />
              </div>
              <h4 class="title">Entry To Pumpkin Patch</h4>
              <p class="text">Picking just the right pumpkin is not so easy.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/woodenFortress.jpg"
                  alt="Wooden Fortress"
                />
              </div>
              <h4 class="title">Wooden Fortress</h4>
              <p class="text">
                Let your imagination loose and pretend to be a Knight Queen or
                even a King.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/ashleyClubhouse.jpg"
                  alt="The Ashley’s Clubhouse"
                />
              </div>
              <h4 class="title">The Ashley’s Clubhouse</h4>
              <p class="text">
                A large tire structure to climb on, with tunnels and slides.
                Perfect for fun relay races.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/jumpingPillow.jpg"
                  alt="Jumping Pillow"
                />
              </div>
              <h4 class="title">Jumping Pillow</h4>
              <p class="text">
                Massive Oversized Pillow that is fun for the whole family!
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/babyGoats.jpg"
                  alt="Baby goats too!"
                />
              </div>
              <h4 class="title">Baby goats too!</h4>
              <p class="text">
                Have a fun experience petting some baby goats at the farm.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/becomeChild.jpg"
                  alt="Become A Child Again"
                />
              </div>
              <h4 class="title">Become A Child Again</h4>
              <p class="text">Don’t just watch, go play with the children.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <div class="postCard">
              <div class="imgBox">
                <img
                  src="@/assets/images/family-fun/burnyard/slides.jpg"
                  alt="Slides"
                />
              </div>
              <h4 class="title">Slides</h4>
              <p class="text">
                Two massive slides to choose from. The yellow one is the
                people’s favorite!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contentSection bg-12">
      <div class="container">
        <div class="date-rates">
          <div class="headBox">
            <h3 class="title">RATES & DATES</h3>
          </div>
          <div class="imgBox">
            <img
              src="@/assets/images/family-fun/fallTheFarm/calendar.svg"
              alt="RATES & DATES"
            />
          </div>
          <div class="moreInfo">
            <div class="infoGrid">
              <div class="item">
                <div class="iconBox">
                  <img
                    src="@/assets/images/family-fun/sunflower/hauntedIcon.svg"
                    alt="Haunted"
                  />
                </div>
                <div class="textWrap">
                  <h5 class="headTxt">Haunted</h5>
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
                    src="@/assets/images/family-fun/sunflower/princessIcon.svg"
                    alt="Princess"
                  />
                </div>
                <div class="textWrap">
                  <h5 class="headTxt">Princess</h5>
                </div>
              </div>
              <div class="item">
                <div class="iconBox">
                  <img
                    src="@/assets/images/family-fun/sunflower/flashlightIcon.svg"
                    alt="Flashlight Family Night"
                  />
                </div>
                <div class="textWrap">
                  <h5 class="headTxt">Flashlight Family Night</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="textBox">
            <p class="text">
              <!-- Open SEP 25th - NOV 1st | Pumpkin Patch & Daytime Attraction : 9AM
              - 6PM -->
              Details and Tickets will be released soon.
            </p>
            <!-- <p class="text">
              Haunted Hours: 7PM - 10PM | Meet The Princesses: 12PM - 3PM |
              Flashlight Family Night: 7PM - 9PM
            </p> -->
          </div>
          <div class="btnGroup center">
            <a href="#" target="_blank" class="btn fill dark disabled"
              >Buy Tickets</a
            >
            <!-- <a href="https://www.exploretock.com/maanfarms/" target="_blank" class="btn fill dark ">Buy Tickets</a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="contentSection">
      <div class="container">
        <div class="faq splWidth">
          <h2 class="mainTitle">FREQUENT QUESTIONS</h2>
          <div class="accordion" role="tablist">
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.faq-1>What should I bring?</b-button>
              </b-card-header>
              <b-collapse
                id="faq-1"
                visible
                accordion="my-accordion2"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Please bring boots, jackets, water bottles, umbrellas and
                    your tickets. We are open rain or shine and it can be muddy
                    in the corn maze or pumpkin patch.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.faq-2
                  >How long is the line?</b-button
                >
              </b-card-header>
              <b-collapse id="faq-2" accordion="my-accordion2" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    On the weekend it can get quite busy, lines may take 30 or
                    40 minutes. If you are looking for a quieter time to come,
                    then Monday to Friday there is not usually a wait time.
                    Please consider wearing a mask and always keep a 6 foot
                    distance between you and other guests.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.faq-3>The Corn Maze</b-button>
              </b-card-header>
              <b-collapse
                id="faq-3"
                visible
                accordion="my-accordion2"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    2020 is our 12th annual corn maze and this year it is
                    “Frozen” themed. Our corn maze is 7 acres of winding paths
                    and dead ends. As you make your way through you will come
                    across 6 characters from the movie Frozen 2, along with 10
                    Trivia questions. Be sure to pick up a handout when you
                    check in – complete the scramble jamble and enter to win a
                    prize!
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
        <div class="extraMT faq dark splWidth">
          <h2 class="mainTitle">Covid-19 Guidelines</h2>
          <div class="listGroup">
            <p class="item">
              Masks are preferred but not mandatory for day-time attractions
            </p>
            <p class="item">
              Social distancing of 6ft or more is required at all times
            </p>
            <p class="item">
              We ask you come in groups no larger than 6 maximum
            </p>
            <p class="item">
              To keep our guests and staff safe, we will not be offering wagon
              rides this year
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="contentSection bg-13 textWhite">
      <div class="container">
        <div class="bookBox">
          <h3 class="title">CORN MAZES</h3>
          <p class="text">Two a-maze-ing corn mazes for all ages.</p>

          <p class="text">
            The Day-time corn maze is “Frozen” themed this year. We have a
            trivia game with 10 questions to play throughout the maze.Solve the scrabble jamble and enter to win a prize" should be "and be entered to win a prize! Be sure to ask for a
            Frozen Trivia Game when you check in.


          </p>

          <div class="btnGroup center">
            <a href="/family-fun/haunted-maze" class="btn fill plain"
              >Know More</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bannerWrapper bottomBanner">
      <img
        src="@/assets/images/family-fun/fallTheFarm/pumpkinPatch.jpg"
        alt="Maan Farms Barnyard Adventureland"
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
      title: "Fall At The Farm - Maan Farms",
      meta: [
        {
          hid: "title",
          property: "title",
          name: "title",
          content: "Fall At The Farm - Maan Farms",
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
          content: "Fall At The Farm - Maan Farms",
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
