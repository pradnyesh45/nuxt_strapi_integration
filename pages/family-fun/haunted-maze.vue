<template>
  <div class="mainWapper fixedHeader theme3 custom-theme3">
    <headerBox class="pos0" :class="[{whiteText: scrollPosition <= height ,showHeader: scrollPosition > height,}]" > </headerBox>
    <!-- <headerBox :class="[{hideHeader: scrollPosition < height , showHeader: scrollPosition > height,}]"> </headerBox> -->
    <div class="innerBannerSection">
      <div class="container">
        <div class="row bannerWrapper">
          <div class="col-md-6">
            <div class="contentBox">
              <img src="@/assets/images/scariest.png" class="watermark" />
              <h1 class="title">Corn Maze in Canada</h1>
              <p class="text">
                Can you make it out of our terrifying corn maze alive? Purchase tickets online this fall and experience all the frightening scenes that will be sure to haunt your dreams.

              </p>
              <p class="splText">Details and Tickets for 2021 will be released soon.</p>
              <div class="btnGroup">
                <a href="#" target="_blank" class="btn outline plain disabled">Buy Tickets</a>

              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="imgBox">
              <img src="@/assets/images/haunted-maze/hauntedMazeBanner1.jpg" alt="Corn Maze" />
            </div>
          </div>
        </div>
        <!-- <div class="row ticketWrapper">
          <div class="item col-sm">
            <img src="@/assets/images/tickets/eb.png" alt="Tickets"/>
          </div>
          <div class="item col-sm">
            <img src="@/assets/images/tickets/oa.png" alt="Tickets"/>
          </div>
          <div class="item col-sm">
            <img src="@/assets/images/tickets/osd.png" alt="Tickets"/>
          </div>
          <div class="item col-sm">
            <img src="@/assets/images/tickets/oah.png" alt="Tickets"/>
          </div>
          <div class="item col-sm">
            <img src="@/assets/images/tickets/osdh.png" alt="Tickets"/>
          </div>
        </div> -->
      </div>
    </div>
    <div class="videoSection">
      <div class="container">
        <div class="videoBox">
          <div class="embed-responsive">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/6Lzutetfxho"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonialsSection dark">
      <div class="container">
        <div class="testimonialsWrapper custom-testimonials">
          <div class="testimonialsGroup">
            <div class="item">
              <h3 class="title">Covid Guidlines</h3>
              <p class="text">
                Our Covid Safety Plan has been advised and approved by Fraser
                Health and local authorities. Our number one goal is to ensure
                the health and safety of our customers, staff, community and
                ourselves. Disobeying any of the rules may result in removal of
                our ground by authorities without a refund.
              </p>
              <div class="btnGroup">
                <a href="#safetyPlan" class="btn fill plain">View Safety Plan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contentSection text-l custom-bg-7">
      <div class="container">
        <div class="row vertical-center reverse">
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <h3 class="title">THE MYTH</h3>
              <p class="text">
                After coming across a video about an abandoned testing facility
                beneath Maan Farms, Thomas decides to see if there is any truth
                to the myth about the farm in his hometown. With a broken
                flashlight and a partially charged cell phone, Thomas rides his
                ten speed to a seemingly harmless old barn, but then soon
                realizes he went too far. Thomas, now trapped with no service,
                slowly scavenges from one room to another and begins to grasp
                the bits of reality that face him. This is not just a myth, and
                that simple farm is guarded by terrifying creatures and some of
                the most frightening monsters imaginable.
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img src="@/assets/images/haunted-maze/hauntedMazeBanner2.jpg" alt="THE MYTH" />
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
              <img src="@/assets/images/haunted-maze/hauntedMazeBanner3.jpg" alt="TAKE THE LEAD"/>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <h3 class="title">TAKE THE LEAD</h3>
              <p class="text">
                This year you take on the role of Thomas, try to navigate the
                corn maze’s deepest depths going from one scene to another,
                uncovering the remains of Thomas as you go. But let it be known,
                this year is like no other, with reduced capacity each customer
                will have a more intense experience than ever before. Each scene
                will have its own challenges that you must conquer in order to
                make it out alive of The Scariest Corn Maze in Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contentSection bg-7 availability">
      <div class="container">
        <div class="contentBox center-align reverse">
          <h3 class="title">AVAILABILITY</h3>
          <p class="text">
           Details and Tickets will be released soon.
          </p>
        </div>
        <!-- <div class="row ticketWrapper">

          <div class="item col-sm">
            <img src="@/assets/images/tickets/eb.png" alt="Tickets"/>
          </div>
          <div class="item col-sm">
            <img src="@/assets/images/tickets/oa.png" alt="Tickets"/>
          </div>
          <div class="item col-sm">
            <img src="@/assets/images/tickets/osd.png" alt="Tickets"/>
          </div>
          <div class="item col-sm">
            <img src="@/assets/images/tickets/oah.png" alt="Tickets"/>
          </div>
          <div class="item col-sm">
            <img src="@/assets/images/tickets/osdh.png" alt="Tickets"/>
          </div>

        </div> -->
      </div>

      <div class="calendarWrapper">
        <div class="container">
          <div class="calendarBox">
            <div class="imgBox">
              <img src="@/assets/images/haunted-maze/hauntedMazeCalendar.png" alt="Haunted Maze Calendar"/>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="calendarInfo">
                  <h5 class="title">TICKET INFO</h5>
                  <p class="text">Tickets are only available online.</p>
                  <p class="text">No at-door ticket sales at all.</p>
                  <p class="text">
                    Tickets must be purchased in multiples of 4,5 or 6.
                  </p>
                  <p class="text">
                    Tickets will not be sold in groups of less than 4 or more
                    than 6.
                  </p>
                  <p class="text">
                    All tickets are designated to a time slot, you must arrive
                    as per your ticket instructions.
                  </p>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="calendarInfo">
                  <h5 class="title">Hours</h5>
                  <p class="text">Most Nights Open: 7pm -10pm</p>
                  <p class="text">Hot Nights: 7pm to 11 pm</p>
                  <p class="text">
                    Tickets are non-refundable and only valid for the date
                    purchased.
                  </p>
                  <p class="text">
                    In the event of further COVID restrictions or shut downs,
                    tickets will not be refunded but will be transferred to
                    2021.
                  </p>
                </div>
              </div>
              <div class="col-sm-12 col-md-12">
                <div class="calendarInfoText">
                  <p class="text">
                    All tickets must be purchased online and in groups of 4, 5
                    or 6. This is the safest way to enjoy while keeping all
                    groups socially distant. <span>Tickets will be released soon.</span>
                  </p>
                  <div class="btnGroup center">
                    <a href="#" target="_blank" class="btn fill dark disabled">Buy Tickets</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contentSection cornmazeWrapper">
      <div class="container">
        <div class="box">
          <img src="@/assets/images/haunted-maze/hautedCornmaze.jpg" alt="Hauted Cornmaze" />
        </div>
      </div>
      <div class="container" id="safetyPlan">
        <div class="extraMT faq dark custom-bg-7">
          <h2 class="mainTitle">
            Maan Farms HAUNTED CORN MAZE Covid-19 Safety Plan
          </h2>
          <div class="accordion" role="tablist2">
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab2">
                <b-button block v-b-toggle.cornMaze-1
                  >Do I have to wear a mask?</b-button
                >
              </b-card-header>
              <b-collapse
                id="cornMaze-1"
                visible
                accordion="my-accordion2"
                role="tabpanel2"
              >
                <b-card-body>
                  <b-card-text>
                    Masks are mandatory for all customers entering the Haunted
                    Cornmaze. Refusal to wear one will be subject to removal
                    from haunt or refused entrance without refund for tickets
                    purchased.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab2">
                <b-button block v-b-toggle.cornMaze-2
                  >Do you get touched?</b-button
                >
              </b-card-header>
              <b-collapse
                id="cornMaze-2"
                accordion="my-accordion2"
                role="tabpanel2"
              >
                <b-card-body>
                  <b-card-text>
                    Haunted Corn Maze (NO TOUCH HAUNT) you can not touch the actors and the actors can not touch you!</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab2">
                <b-button block v-b-toggle.cornMaze-3>What to wear?</b-button>
              </b-card-header>
              <b-collapse
                id="cornMaze-3"
                visible
                accordion="my-accordion2"
                role="tabpanel2"
              >
                <b-card-body>
                  <b-card-text>
                   Bring a Mask & WEAR BOOTS! Even though the entire Haunt has a gravel path, you are on a farm. Farms can be wet and
muddy! Our Flashlight Maze is Muddy! WE SUGGEST TALL BOOTS!  We are open rain or shine. Bring a rain jacket.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab2">
                <b-button block v-b-toggle.cornMaze-4
                  >What if it rains?</b-button
                >
              </b-card-header>
              <b-collapse
                id="cornMaze-4"
                accordion="my-accordion2"
                role="tabpanel2"
              >
                <b-card-body>
                  <b-card-text>
                    We are open RAIN or SHINE! Dress Appropriately. Bring Jackets and Boots just in case, you can always leave it in your car.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab2">
                <b-button block v-b-toggle.cornMaze-5
                  >Can we bring flashlights?</b-button
                >
              </b-card-header>
              <b-collapse
                id="cornMaze-5"
                accordion="my-accordion2"
                role="tabpanel2"
              >
                <b-card-body>
                  <b-card-text>
                    Flashlights are not provided for the Flashlight Corn Maze. You have to bring your own. However, we do sell them onsite.
Flashlights are NOT permitted inside the Haunted Corn Maze.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab2">
                <b-button block v-b-toggle.cornMaze-6
                  >What is to be expected for the line ups?</b-button
                >
              </b-card-header>
              <b-collapse
                id="cornMaze-6"
                accordion="my-accordion2"
                role="tabpanel2"
              >
                <b-card-body>
                  <b-card-text>
                    Line ups are to be expected up to 1 hour long. We want to ensure every group is given adequate time in the maze. Due to
covid, we have reduced capacity, this will drastically reduce lineups! 🙂
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab2">
                <b-button block v-b-toggle.cornMaze-7
                  >How old should you be to enter?</b-button
                >
              </b-card-header>
              <b-collapse
                id="cornMaze-7"
                accordion="my-accordion2"
                role="tabpanel2"
              >
                <b-card-body>
                  <b-card-text>
                    We recommend guests to be at least 10 years or older. Minors must be accompanied by adults.</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab2">
                <b-button block v-b-toggle.cornMaze-8
                  >Other terms & conditions</b-button
                >
              </b-card-header>
              <b-collapse
                id="cornMaze-8"
                accordion="my-accordion2"
                role="tabpanel2"
              >
                <b-card-body>
                  <b-card-text>
                    Masks are MANDATORY. Failure to comply will result in refusal of entry with no refunds given.</b-card-text>

<b-card-text>Tickets are non-refundable in the event of further covid restrictions or shutdowns, tickets will not be refunded but will be
transferred to 2021.</b-card-text>

<b-card-text>Online Tickets can only be purchased until 10pm prior to the date of attendance.</b-card-text>

<b-card-text>There is a limited number of online tickets available on any given Haunted Corn Maze night.</b-card-text>

<b-card-text>There are no at-door ticket sales! Last call to purchase tickets online is on the day of the event at 12pm. We also reserve the
right to end sales for any given night if we reach capacity.</b-card-text>

<b-card-text>WEAR BOOTS! Even though the entire Haunted Corn Maze has a gravel path. We are open Rain or Shine. Farms can be wet
and muddy! Appropriate clothing includes: knee-high boots, rain jacket, umbrella, toques and gloves etc.</b-card-text>

<b-card-text>Please be advised, in the event of heavy rainfall, Maan Farms reserves the right to cancel a Haunted Corn Maze night due to
safety reasons. However heavy rainfall or exceptional winds may result in a closure for the evening. Closures (along with any
other announcements) will be posted on our social media channels.</b-card-text>

<b-card-text>The Haunted Corn Maze is not recommended for customers with a history of cardiovascular health issues, pregnant women,
children under the age of 10 and customers with epilepsy due to the use of strobe lights.</b-card-text>

<b-card-text>Strollers are not permitted in the Haunted Corn Maze.</b-card-text>

<b-card-text>Please be advised flashlights are NOT permitted inside the Haunted Corn Maze.</b-card-text>

<b-card-text>Due to high interest, please expect line ups at the market and before entering the Haunted Corn Maze as only a limited
number of customers can be inside the Haunted Corn Maze at once. Our goal is to provide every customer with a thrilling
and haunting experience. As such, only a limited number of participants can be inside the Haunted Corn Maze at one time.</b-card-text>

<b-card-text>You must be a minimum of 10 years old to participate in the Haunted Corn Maze. All minors must be accompanied by adults.</b-card-text>

<b-card-text>We reserve the right to refuse entrance to anyone who appears intoxicated, anyone who is willfully disobeying our rules or
anyone who is causing harm to Maan Farms Staff, other customers and our property. </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
    </div>
     <div class="contentSection bg-7">
      <div class="container">
          <div class="bookBox">
            <h3 class="title">BOOK TICKETS</h3>
            <p class="text">All tickets must be purchased online and in groups of 4, 5 or 6.
This is the safest way to enjoy while keeping all groups socially distant. <span>Tickets will be released soon.</span></p>
            <div class="btnGroup center">
              <a href="#" target="_blank" class="btn fill dark disabled">Buy Tickets</a>


              </div>
          </div>
      </div>
    </div>
    <div class="bannerWrapper bottomBanner">
      <img src="@/assets/images/haunted-maze/hauntedMazeBanner4.jpg" alt="Haunted Maze Banner" />
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
        title: "Haunted Corn Maze At Maan Farms",
        meta: [
          { hid: 'title', property: 'title',name: 'title', content: "Haunted Corn Maze At Maan Farms"},
          { hid: 'description', name: 'description', property: 'description', content: ""},
          { hid: 'og:title', property: 'og:title', content: "Haunted Corn Maze At Maan Farms"},
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
<style scoped>
.theme3.custom-theme3{
 background-color: #000000;
}
.theme3.custom-theme3 .headerWrapper{
 background-color: #000000;
}

.theme3.custom-theme3 .headerWrapper.showHeader{
 background-color: #ffffff;
}

.theme3.custom-theme3 .custom-testimonials{
 background-color: #b80000;
}

.custom-bg-7{
  background-color: #212121;
}
</style>
