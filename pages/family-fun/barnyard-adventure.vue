<template>
  <div class="mainWapper fixedHeader theme2">
    <headerBox class="pos0" :class="[{ showHeader: scrollPosition > height }]">
    </headerBox>
    <div class="innerBannerSection">
      <div class="container">
        <div class="row bannerWrapper">
          <div class="col-md-6">
            <div class="contentBox">
              <h1 class="title">BARNYARD ADVENTURELAND</h1>
              <p class="text">
                The perfect place to experience the farm this summer. From the
                zipline to the petting zoo, we have something fun for everyone.
              </p>
              <p class="splText">Tickets can be purchased at the door</p>
              <div class="btnGroup">
                <a href="#rate-dates" class="btn fill dark">View Rates</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="imgBox">
              <img
                src="@/assets/images/family-fun/burnyard/burnyardBanner1.jpg"
                alt="BARNYARD ADVENTURELAND"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="videoSection">
      <div class="container">
        <div class="videoBox">
          <div class="embed-responsive">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/gkDAtEAqRTQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonialsSection dark-3">
      <div class="container">
        <div class="testimonialsWrapper">
          <div class="testimonialsGroup">
            <div class="item">
              <h3 class="title">COME VISIT THE BARNYARD THIS SUMMER</h3>
              <p class="text">
                The Barnyard Adventureland is open daily! Come check out all our
                fun activities, Mama Maan’s country kitchen, and our petting
                zoo. We have goats, sheep, bunnies, chickens, turkeys, peacocks,
                and guinea fowls to visit. Tickets can be purchased at the door.
              </p>

              <p class="text">
                Hours: 9:00 am - 6:00 pm every day. | Last entry 5:00 pm
              </p>
              <div class="btnGroup">
                <a href="#rate-dates" class="btn fill plain">View Rates</a>
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
          <!-- <div class="col-sm-6 col-md-4 item">
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
          </div> -->
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
          <!-- <div class="col-sm-6 col-md-4 item">
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
          </div> -->
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
          <!-- <div class="col-sm-6 col-md-4 item">
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
          </div> -->
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

    <div class="contentSection bg-6" id="rate-dates">
      <div class="container">
        <div class="date-rates">
          <div class="headBox">
            <h3 class="title">RATES & DATES</h3>
          </div>
          <div class="imgBox">
            <img
              src="@/assets/images/family-fun/burnyard/rate-dates.png"
              alt="RATES & DATES"
            />
          </div>
          <div class="textBox">
            <p class="text">
              Tickets may be purchased at the door where we accept cash or card.
            </p>
            <p class="text">Hours: 9:00 am - 6:00 pm | Last entry 5:00 pm</p>
          </div>
          <div class="btnGroup center">
            <a
              href="https://www.exploretock.com/maanfarms/"
              target="_blank"
              class="btn fill dark"
              >Buy Tickets</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="contentSection">
      <div class="container">
        <div class="faq dark splWidth">
          <h2 class="mainTitle">NO ADMISSION REQUIRED FOR</h2>
          <div class="listGroup">
            <p class="item">Market Store shopping</p>
            <p class="item">Purchasing wine & wine tastings at the Berri Bar</p>
            <p class="item">
              Purchasing food from Mama Maan’s Kitchen (kitchen hours vary)
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="contentSection bg-9 textWhite">
      <div class="container">
        <div class="bookBox">
          <h3 class="title">SEASON PASSES ARE BACK!</h3>
          <p class="text">
            You can also buy your season pass to Maan Farms Barnyard
            Adventureland! The season pass offers unlimited number of visits to
            the Barnyard Adventureland from June to October. From the zipline to
            the petting zoo, children won’t get tired of all the options our
            farm has to offer. They’ll want to come back every day, and they can
            with the all-inclusive season pass. We look forward to hosting you
            and your family this summer.
          </p>
          <p class="text">Season Passes can be purchased in person at the farm.</p>

          <!-- <div class="btnGroup center">
            <a
              href="https://www.exploretock.com/maanfarms/"
              target="_blank"
              class="btn fill plain"
              >Buy Season’s Pass</a
            >
          </div> -->
        </div>
      </div>
    </div>
    <div class="bannerWrapper bottomBanner">
      <img
        src="@/assets/images/family-fun/burnyard/burnyardBanner2.jpg"
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
      title: "Barnyard Adventure At Maan Farms",
      meta: [
        {
          hid: "title",
          property: "title",
          name: "title",
          content: "Barnyard Adventure At Maan Farms",
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
          content: "Barnyard Adventure At Maan Farms",
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
