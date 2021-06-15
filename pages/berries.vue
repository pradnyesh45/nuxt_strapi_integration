<template>
  <keep-alive>
    <div class="mainWapper fixedHeader theme4">
      <headerBox
        class="pos0"
        :class="[{ showHeader: scrollPosition > height }]"
      >
      </headerBox>
      <template v-if="Introduction.length && enableIntroduction">
        <template v-for="item in Introduction">
          <template v-if="item.enable">
            <div :key="item._id" class="innerBannerSection">
              <div class="container">
                <div class="row bannerWrapper">
                  <div class="col-md-6">
                    <div class="contentBox">
                      <h1 class="title splpd">{{ item.Title }}</h1>
                      <p class="text">
                        {{ item.Text }}
                      </p>
                      <!-- <p class="splText">U-Pick Tickets go live May 22nd</p> -->
                      <div class="btnGroup">
                        <a
                          href="https://shop.maanfarms.com/collections/berries "
                          target="_blank"
                          class="btn fill danger"
                          >Order Now</a
                        >

                        <a
                          href="https://www.exploretock.com/maanfarms/"
                          target="_blank"
                          class="btn fill danger"
                          >Book U-Pick</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="imgBox">
                      <img
                        v-if="item.Image.url"
                        v-bind:src="`${base_image_url}${item.Image.url}`"
                        alt="TRY OUR FRESH BERRIES"
                      />
                    </div>
                  </div>
                </div>

                <!-- <div class="row stepsWrapper">

            <div class="col-sm-12 col-md-4 col-lg-4 item">
              <div class="stepBox">
                <div class="stepIcon">
                  <img src="@/assets/images/quantityIconWhite.svg" alt="icon" />
                </div>
                <div class="contentWrapper">
                  <h4 class="title">Step 1</h4>
                  <p class="text">
                    Pick the quantity and type of product that is in season and ready to harvest.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 item">
              <div class="stepBox">
                <div class="stepIcon">
                  <img src="@/assets/images/pickUpIconWhite.svg" alt="icon"/>
                </div>
                <div class="contentWrapper">
                  <h4 class="title">Step 2</h4>
                  <p class="text">
                    Either select Curbside Pick up from the farm or choose a pick up location near you!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 item">
              <div class="stepBox">
                <div class="stepIcon">
                  <img src="@/assets/images/freshFruitIconWhite.svg" alt="icon"/>
                </div>
                <div class="contentWrapper">
                  <h4 class="title">Step 3</h4>
                  <p class="text">
                    Farmer picks the fruit fresh and delivers it the same day, keeping it as fresh as possible!
                  </p>
                </div>
              </div>
            </div>

        </div> -->
              </div>
            </div>
          </template>
        </template>
      </template>

      <template v-if="Berrie_Options.length && enableBerrie_Options">
        <div class="contentWrapper ourProduct">
          <div class="container">
            <div class="row">
              <!-- <div class="col-sm-12">
            <h3 class="mainTitle">Seasons Guide</h3>
          </div> -->
              <!-- <template v-if="Berrie_Options.length"> -->
              <template v-for="item in Berrie_Options">
                <template v-if="item.enable">
                  <div :key="item._id" class="col-md-4">
                    <div class="productBox">
                      <div class="imgBox">
                        <img
                          v-if="item.Image.url"
                          v-bind:src="`${base_image_url}${item.Image.url}`"
                          :alt="`${item.Title}`"
                        />
                      </div>
                      <div class="contentBox">
                        <p class="title">{{ item.Title }}</p>

                        <p class="text">
                          {{ item.Text1 }}<br />
                          {{ item.Text2 }}
                        </p>
                      </div>
                    </div>
                  </div>
                </template>
              </template>
              <!-- </template> -->
              <!-- <div class="col-md-4">
            <div class="productBox">
              <div class="imgBox">
                <img src="@/assets/images/products/strawberry.jpg" alt="STRAWBERRIES">
              </div>
              <div class="contentBox">
                <p class="title">STRAWBERRIES</p>

                <p class="text">U-Pick: Open May 29th<br />
Pre-Picked: Available May 22 (limited)</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="productBox">
              <div class="imgBox">
                <img src="@/assets/images/products/raspberry.jpg" alt="RASPBERRIES">
              </div>
              <div class="contentBox">
                <p class="title">RASPBERRIES</p>
                <p class="text">U-Pick: Open Mid June<br/>
Pre-Picked: Available Mid June</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="productBox">
              <div class="imgBox">
                <img src="@/assets/images/products/blueberry.jpg" alt="BLUEBERRIES">
              </div>
              <div class="contentBox">
                <p class="title">BLUEBERRIES</p>
                <p class="text">U-Pick: Open Beginning July</br>
Pre-Picked: Available End June</p>
              </div>
            </div>
          </div> -->
            </div>
          </div>
        </div>
      </template>

      <!-- Steps -->
      <template v-if="Steps.length && enableSteps">
        <div class="contentSection">
          <div class="container">
            <div class="row stepsWrapper">
              <!-- <template v-if="Steps.length"> -->
              <template v-for="item in Steps">
                <template v-if="item.enable">
                  <div :key="item._id" class="col-sm-12 col-md-4 col-lg-4 item">
                    <div class="stepBox">
                      <div class="stepIcon">
                        <img
                          v-if="item.Image.url"
                          v-bind:src="`${base_image_url}${item.Image.url}`"
                          :alt="`${item.Title}`"
                        />
                      </div>
                      <div class="contentWrapper">
                        <h4 class="title">{{ item.Title }}</h4>
                        <p class="text">
                          {{ item.Text }}
                        </p>
                      </div>
                    </div>
                  </div>
                </template>
              </template>
              <!-- </template> -->
              <!-- <div class="col-sm-12 col-md-4 col-lg-4 item">
              <div class="stepBox">
                <div class="stepIcon">
                  <img src="@/assets/images/quantityIconWhite.svg" alt="icon" />
                </div>
                <div class="contentWrapper">
                  <h4 class="title">Step 1</h4>
                  <p class="text">
                    Pick the quantity and type of product that is in season and ready to harvest.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 item">
              <div class="stepBox">
                <div class="stepIcon">
                  <img src="@/assets/images/pickUpIconWhite.svg" alt="icon"/>
                </div>
                <div class="contentWrapper">
                  <h4 class="title">Step 2</h4>
                  <p class="text">
                    Either select Curbside Pick up from the farm or choose a pick up location near you!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 item">
              <div class="stepBox">
                <div class="stepIcon">
                  <img src="@/assets/images/freshFruitIconWhite.svg" alt="icon"/>
                </div>
                <div class="contentWrapper">
                  <h4 class="title">Step 3</h4>
                  <p class="text">
                    Farmer picks the fruit fresh and delivers it the same day, keeping it as fresh as possible!
                  </p>
                </div>
              </div>
            </div> -->
            </div>
          </div>
        </div>
      </template>

      <!-- FAQs for Pickup -->
      <!-- <template v-if="FAQs_for_Pickup.length && enableFAQs_for_Pickup"> -->
      <div class="testimonialsSection">
        <div class="container">
          <div class="extraMT faq splWidth">
            <h2 class="mainTitle">FREQUENT QUESTIONS FOR PICKUP</h2>
            <!-- <template v-if="FAQs_for_Pickup.length && enableFAQs_for_Pickup">
              <template v-for="item in FAQs_for_Pickup">
                <template v-if="item.enable"> -->
            <div class="accordion" role="tablist">
              <template v-if="FAQs_for_Pickup.length">
                <template v-for="item in FAQs_for_Pickup">
                  <template v-if="item.enable">
                    <b-card :key="item._id" no-body show class="mb-1">
                      <!-- <template v-for="item in FAQs_for_Pickup">
                    <template v-if="item.enable"> -->
                      <b-card-header header-tag="header" class="p-0" role="tab">
                        <b-button block v-b-toggle.mostAsk-1
                          >{{ item.Question }}
                        </b-button>
                      </b-card-header>
                      <b-collapse
                        id="mostAsk-1"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text> {{ item.Answer }} </b-card-text>
                        </b-card-body>
                      </b-collapse>
                      <!-- </template>
                  </template> -->
                    </b-card>
                    <!-- </template>
                </template> -->
                    <!-- </template> -->
                    <!-- <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-1
                  >What Farmers Market pickup locations do you have?</b-button
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
                    Abbotsford Farmers Market, West End Farmers Market, Downtown Farmers Market, Trout Lake Farmers Market, Kitsilano Farmers Market, White Rock Farmers Market, Langley Community Farmers Market, Royal City (New West) Farmers Market, Coquitlam Farmers Market, Fort Langley Village Farmers Market, Concord Community Park, Port Moody Farmers Market.

</b-card-text
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
                    Our pre-order pick-up locations are currently limited to our Maan Farms market and our farmers market locations. Because of this, the days that you can place a pre-order are limited to what days the farmers market you are choosing is open.



</b-card-text
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
                    Please park and enter the farmers market. Come to our booth, “Maan Farms”, and we will have your order there for you. Please leave yourself enough time to wait in line to enter the Farmers Market.

 </b-card-text
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
                    Please email us at amir@maanfarms.com and we will send the confirmation to you.

 </b-card-text
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
                    If you miss a scheduled date for pick-up, you will forfeit any perishable items attached to your order (including but not limited berries, fresh/frozen food). We will bring all non-perishable items back to the pickup location for you to pick them up the following week. No refunds are given on anything that is not picked-up.

 </b-card-text
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
                    We do not offer refunds/replacements for missed berry pick-up. We picked those berries just for you, for that day.

</b-card-text
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
                    Once your order has been placed, we cannot make any further changes. The farmer sees the order’s every day and organizes picking days for your order. If you do not pick up your order, you forfeit them. If you come on a different day than what is stated on your order, we will not have your order there for you.

 </b-card-text
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
                    Your order will be available for pick-up as soon as the farmers market you are picking up from is open. You must arrive 30min before the farm market closes.

 </b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card> -->
                  </template>
                </template>
              </template>
            </div>
            <!-- </template>
              </template>
            </template> -->
          </div>
        </div>

        <div class="btnGroup center mt-5">
          <a
            href="https://shop.maanfarms.com/collections/berries"
            target="_blank"
            class="btn fill danger"
            >Order Now</a
          >
        </div>
      </div>
      <!-- </template> -->

      <template v-if="UPick.length && enableUPick">
        <template v-for="item in UPick">
          <template v-if="item.enable">
            <div
              :key="item._id"
              class="contentSection bg-default"
              id="u-pick-section"
            >
              <div class="container">
                <div class="row">
                  <div class="col-sm-12 col-md-6 bannerWrapper barriesWrapper">
                    <div class="contentBox">
                      <h1 class="title">{{ item.Title }}</h1>
                      <p class="text">
                        {{ item.Text }}
                      </p>
                      <p class="splText">
                        Please read the information before visiting.
                      </p>
                      <div class="btnGroup">
                        <a
                          href="https://www.exploretock.com/maanfarms/"
                          class="btn fill danger"
                          >Buy Tickets</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6 ">
                    <div class="bannerBox">
                      <img
                        v-if="item.Image.url"
                        v-bind:src="`${base_image_url}${item.Image.url}`"
                        alt="BERRY PICKING at Maanfarms"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </template>
      <!-- <div class="contentSection bg-default" id="u-pick-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 bannerWrapper barriesWrapper">
            <div class="contentBox" >
              <h1 class="title">U-Pick</h1>
              <p class="text">
              The nicest fields with the best fruit, pick your berries then enjoy the animals, some ice cream or even a glass of wine.
              </p>
              <p class="splText">Please read the information before visiting.</p>
              <div class="btnGroup">

                <a href="https://www.exploretock.com/maanfarms/" class="btn fill danger">Buy Tickets</a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 ">
            <div class="bannerBox" >
              <img src="@/assets/images/products/berry2.jpg" alt="BERRY PICKING at Maanfarms"/>
            </div>
          </div>
        </div>
      </div>
    </div> -->

      <!-- <template v-if="Video.length">
        <template v-for="item in Video">
          <template v-if="item.enable">
            <div :key="item._id" class="videoSection bg-default">
      <div class="container">
        <div class=" videoBox">
          <div class="embed-responsive">
            <iframe
              class="embed-responsive-item"
              :src="`${Video.Video_Link}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0`"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
          </template>
        </template>
    </template>     -->
      <div class="videoSection bg-default">
        <div class="container">
          <div class=" videoBox">
            <div class="embed-responsive">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/Uy1VyKj2Yho?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <template
        v-if="Hours_and_Availability.length && enableHours_and_Availability"
      >
        <template v-for="item in Hours_and_Availability">
          <template v-if="item.enable">
            <div :key="item._id" class="testimonialsSection bg-default dark-4">
              <a id="u-pick-section-1" class="targetLink">&nbsp;</a>
              <div class="container">
                <div class="testimonialsWrapper">
                  <div class="testimonialsGroup">
                    <div class="item">
                      <h3 class="title">{{ item.Title }}</h3>
                      <p class="text">
                        {{ item.Text1 }} <br />
                        {{ item.Text2 }}
                      </p>
                      <div class="btnGroup">
                        <a
                          href="https://www.exploretock.com/maanfarms/"
                          class="btn fill plain"
                          >Buy Tickets</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </template>
      <!-- <div class="testimonialsSection bg-default dark-4">
        <a id="u-pick-section-1" class="targetLink">&nbsp;</a>
      <div class="container">
        <div class="testimonialsWrapper">
          <div class="testimonialsGroup">
            <div class="item">
              <h3 class="title">Hours & Availability</h3>
              <p class="text">
                Opening Day: May 29th </br>

U-Pick opens daily at 9:00am, and closes when we sell out for the day.
Please check our social media for a daily U-Pick Availability Update. @maanfarms IG and FB </br> We encourage you to book online to reserve your tickets, there will be limited walk-ins available before we sell out. Quantities may vary depending on availability and weather.
              </p>
              <div class="btnGroup">
                <a href="https://www.exploretock.com/maanfarms/" class="btn fill plain">Buy Tickets</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
      <template v-if="How_it_Works.length && enableHow_it_Works">
        <div class="contentSection text-l bg-default">
          <div class="container">
            <div class="row vertical-center reverse">
              <div class="col-sm-12 col-md-6">
                <div class="contentBox">
                  <h3 class="title">HOW IT WORKS?</h3>
                  <ul class="list themeBullet">
                    <template v-for="item in How_it_Works">
                      <template v-if="item.enable">
                        <li :key="item._id">
                          {{ item.Text }}
                        </li>
                      </template>
                    </template>
                    <!-- </template> -->

                    <!-- <li>
                    Check in at the Maan Farms Market to receive your
                    pre-purchased container or to purchase one, we will also
                    give you directions on which fields have the ripest berries
                    to pick.
                  </li>
                  <li>
                    Once you have filled your container visit the store to enjoy
                    some of our seasonal desserts or wine.
                  </li>
                  <li>
                    You are welcome to stop by our country kitchen for lunch or
                    visit our Barnyard Adventureland! Enjoy a wine tasting or
                    glass of wine in our new licensed lounge.
                  </li> -->
                  </ul>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="bannerBox">
                  <img
                    src="@/assets/images/u-pick/u-pickBanner2.jpg"
                    alt="Maan Farms Market"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <div class="contentSection">
        <div class="container">
          <div class="splWidth">
            <!-- <div class="cards">

              <div class="headBox">
                <h3 class="title">HAPPY PICKING</h3>
                <p class="smTitle">Online booking & walk-ins are welcome. Quantities may vary depending on availability.</p>
<p class="smTitle">Availability varies day-to-day check out social media or call 604 864 5723.</p>
                </div>


              <div class="productCard bgColor3">
                <div class="imageWrapper">
                  <img src="@/assets/images/u-pick/upick-bucket.jpg" alt="Red U-Pick Bucket">

                </div>
                <div class="textWrapper">
                  <p class="title">Red U-Pick Bucket</p>
                  <ul class="info">
                    <li>2 guests per Red Bucket.</li>
                    <li>Full bucket holds ~ 8-9lbs</li>
                    <li>Flat rate for the bucket</li>
                  </ul>
                  <p class="priceBox">$24.00</p>

                  <div class="btnGroup center">
                    <a href="#" class="btn fill danger">Buy Tickets</a>

              </div>
                </div>
              </div>


              <div class="productCard bgColor3">
                <div class="imageWrapper">
                  <img src="@/assets/images/u-pick/upick-basket.jpg" alt="Child Size Basket">

                </div>
                <div class="textWrapper">
                  <p class="title">Child Size Basket</p>
                  <ul class="info">
                    <li>Children 10 yrs or under.</li>
                    <li>1 basket per child.</li>
                    <li>Full basket holds ~ 1- 1.5lbs.</li>
                    <li>Flat rate for the bucket</li>
                  </ul>
                  <p class="priceBox">$5.00</p>

                  <div class="btnGroup center">
                    <a href="#" class="btn fill danger">Buy Tickets</a>

              </div>
                </div>
              </div>



        </div> -->

            <div class="extraMT faq">
              <h2 class="mainTitle">Frequently Asked Questions</h2>
              <div class="accordion" role="tablist">
                <template v-if="FAQs.length && enableFAQs">
                  <template v-for="item in FAQs">
                    <template v-if="item.enable">
                      <b-card :key="item._id" no-body show class="mb-1">
                        <b-card-header
                          header-tag="header"
                          class="p-0"
                          role="tab"
                        >
                          <b-button block v-b-toggle.fq-1>{{
                            item.Question
                          }}</b-button>
                        </b-card-header>
                        <b-collapse
                          id="fq-1"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <b-card-text>
                              {{ item.Answer }}
                            </b-card-text>
                          </b-card-body>
                        </b-collapse>
                      </b-card>
                    </template>
                  </template>
                </template>
                <!-- <b-card no-body show class="mb-1">
                  <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-button block v-b-toggle.fq-1
                      >Are you open for u-pick rain or shine?</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="fq-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        Yes, we are! We recommend you bring your finest gumboots
                        on the days that it rains.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card> -->

                <!-- <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-button block v-b-toggle.fq-2
                      >Can we bring our own buckets?</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="fq-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        The U-Pick guidelines provided by the Health Ministry
                        state farms are unable to accept outside containers due
                        to spread of the Covid-19 virus. You must purchase
                        containers from us.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-button block v-b-toggle.fq-3
                      >Can I just show up at the farm and do U-Pick?</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="fq-3"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        We highly recommend that you reserve a time slot for
                        u-pick for the day you would like to pick. We will have
                        limited, if any, spots available for drop-ins. Priority
                        will be given to those who have a reservation. If you
                        plan to drop-in you MUST arrive a minimum of 1 hour
                        before close.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-button block v-b-toggle.fq-4
                      >Can I bring a small child?</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="fq-4"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        Yes! With parent supervision, this is a fun family
                        activity.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-button block v-b-toggle.fq-5
                      >Are there lots of berries in the field?</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="fq-5"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        Because of increased demand we have limited the
                        available time slots, so as long as you reserve a spot
                        in advance, we are making sure that everyone has access
                        to enough berries.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card> -->
              </div>
            </div>
            <template v-if="Guidelines.length && enableGuidelines">
              <div class="extraMT faq dark">
                <h2 class="mainTitle">GUIDELINES</h2>
                <div class="listGroup">
                  <!-- <template v-if="Guidelines.length"> -->
                  <template v-for="item in Guidelines">
                    <template v-if="item.enable">
                      <p :key="item._id" class="item">
                        {{ item.Text }}
                      </p>
                    </template>
                  </template>
                  <!-- </template> -->
                  <!-- <p class="item">
                  Please do not eat the berries while you are picking.
                </p>
                <p class="item">
                  We would like to avoid guests putting a berry in their mouth
                  and then touching the plants again.
                </p>
                <p class="item">No outside food or beverages</p>
                <p class="item">No smoking or vaping</p>
                <p class="item">No pets/animals</p>
                <p class="item">Wash your fruit at home before you eat</p>
                <p class="item">
                  Prices and availability are weather dependent and is subject
                  to change at any given time. Updates posted to social media.
                </p> -->
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- Our Farming Practices -->
      <template
        v-if="Our_Farming_Practices.length && enableOur_Farming_Practices"
      >
        <!-- <template v-for="item in Our_Farming_Practices">
          <template v-if="item.enable"> -->
        <div class="contentSection testimonialsSection">
          <div class="container">
            <div class="testimonialsWrapper">
              <div class="testimonialsGroup">
                <client-only>
                  <VueSlickCarousel v-bind="settings">
                    <!-- <div class="item"> -->
                    <!-- <template v-if="Our_Farming_Practices.length">
                      <template v-for="item in Our_Farming_Practices">
                        <template v-if="item.enable">
                          <div :key="item._id" class="item">
                            <h3 class="title">OUR FARMING PRACTICES</h3>
                            <p class="smTitle">{{ item.Title }}</p>
                            <p class="text">
                              {{ item.Text }}
                            </p>
                          </div>
                        </template>
                      </template>
                    </template> -->
                    <!-- </div> -->
                    <!-- <div class="item"> -->
                    <template v-for="item in Our_Farming_Practices">
                      <template v-if="item.enable">
                        <div :key="item._id" class="item">
                          <!-- <template v-for="item in Our_Farming_Practices">
                        <template v-if="item.enable"> -->
                          <h3 class="title">
                            OUR FARMING PRACTICES
                          </h3>

                          <p class="smTitle">
                            {{ item.Title }}
                          </p>
                          <p class="text">
                            {{ item.Text }}
                          </p>
                          <!-- </template>
                      </template> -->
                        </div>
                      </template>
                    </template>
                    <!-- </div> -->
                    <!-- <div class="item">
                    <h3 class="title">OUR FARMING PRACTICES</h3>
                    <p class="smTitle">Stewardship</p>
                    <p class="text">
                      Some might suggest eliminating pesticides altogether.
                      However, in the unfortunate event of a crop loss, we would
                      lose these vital tools to protect our crops from sheer
                      destruction. Berries are quite delicate, prone to rotting
                      in rain or feasted on by fruit flies. So as humble
                      stewards of our land, we believe the application of
                      specific pesticides is an ethical method of prevention.
                      That is true sustainability. The alternative would be
                      letting thousands of pounds of food go to waste!
                    </p>
                  </div>
                  <div class="item">
                    <h3 class="title">OUR FARMING PRACTICES</h3>
                    <p class="smTitle">Prioritizing Sustainability</p>
                    <p class="text">
                      This method is also environmentally friendly, as our
                      berries are mindfully produced in consideration of
                      negative impacts on the environment and those around
                      us–compared to any other form of agriculture, including
                      Organic. The use of IPM, also ensures enough production of
                      fruit to feed a society, despite the growing population.
                      In addition to these positive aspects, IPM contributes to
                      effective and ethically priced produce, as we do not
                      charge the outrageous prices that Organic Farmers would,
                      due to their lack of yields per acre, forcing them to
                      compensate in regards to the price they charge per lb.
                    </p>
                  </div> -->
                  </VueSlickCarousel>
                </client-only>
              </div>
            </div>
          </div>
        </div>
        <!-- </template>
        </template> -->
      </template>

      <div class="contentSection bg-default">
        <div class="container">
          <template v-if="Book_Tickets.length && enableBook_Tickets">
            <template v-for="item in Book_Tickets">
              <template v-if="item.enable">
                <div :key="item._id" class="bookBox">
                  <h3 class="title">Pradnyesh BOOK TICKETS</h3>
                  <p class="text">
                    We encourage you to book online to reserve your tickets,
                    there will be limited walk-in availability. Quantities may
                    vary day-to-day depending on availability. For the most
                    updated information please check our social media, or call
                    <span> 604 864 5723.</span>
                  </p>

                  <div class="btnGroup center">
                    <a
                      href="https://www.exploretock.com/maanfarms/"
                      class="btn fill danger"
                      >Buy Tickets</a
                    >
                  </div>
                </div>
              </template>
            </template>
          </template>
        </div>
      </div>

      <!-- <div class="contentSection bg-default">
        <div class="container">
          <div class="bookBox">
            <h3 class="title">BOOK TICKETS</h3>
            <p class="text">
              We encourage you to book online to reserve your tickets, there
              will be limited walk-in availability. Quantities may vary
              day-to-day depending on availability. For the most updated
              information please check our social media, or call
              <span> 604 864 5723.</span>
            </p>

            <div class="btnGroup center">
              <a
                href="https://www.exploretock.com/maanfarms/"
                class="btn fill danger"
                >Buy Tickets</a
              >
            </div>
          </div>
        </div>
      </div> -->

      <template v-if="Final_Image.length && enableFinal_Image">
        <template v-for="item in Final_Image">
          <template v-if="item.enable">
            <div :key="item._id" class="bannerWrapper bottomBanner">
              <img
                v-if="item.Final_Image.url"
                v-bind:src="`${base_image_url}${item.Final_Image.url}`"
                alt="Maan Farms Banner"
              />
            </div>
          </template>
        </template>
      </template>
      <!-- <div class="bannerWrapper bottomBanner">
        <img
          src="@/assets/images/u-pick/u-pickBanner3.jpg"
          alt="Maan Farms Banner"
        />
      </div> -->

      <footerBox></footerBox>
    </div>
  </keep-alive>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import headerBox from "~/components/header/index";
import footerBox from "~/components/footer/index";
import axios from "axios";
export default {
  head() {
    return {
      title: "Berry Picking At Maan Farms",
      meta: [
        {
          hid: "title",
          property: "title",
          name: "title",
          content: "Berry Picking At Maan Farms"
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
          content: "Berry Picking At Maan Farms"
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
      i: 0,
      strapiApiData: [],
      Introduction: [],
      enableIntroduction: false,
      Berrie_Options: [],
      enableBerrie: false,
      Steps: [],
      enableSteps: false,
      FAQs_for_Pickup: [],
      enableFAQs_for_Pickup: false,
      UPick: [],
      enableUPick: false,
      Video: [],
      enableVideo: false,
      Hours_and_Availability: [],
      enableHours_and_Availability: false,
      How_it_Works: [],
      enableHow_it_Works: false,
      FAQs: [],
      enableFAQs: false,
      Guidelines: [],
      enableGuidelines: false,
      Our_Farming_Practices: [],
      enableOur_Farming_Practices: false,
      Book_Tickets: [],
      enableBook_Tickets: false,
      Final_Image: [],
      enableFinal_Image: false,
      base_image_url: "",
      error: null,
      scrollPosition: null,
      height: 0,
      settings: {
        arrows: false,
        dots: true,
        fade: true,
        speed: 500
      },
      pdcarousel: {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
      }
    };
  },
  async beforeCreate() {
    // console.log(`before created dubugging`, process.env.strapiUrl);
    // accessing strapi api
    try {
      const response = await axios.get(`${process.env.strapiUrl}/berries`);
      // const response = await axios.get('http://localhost:1337/berries');
      // console.log(response)
      this.base_image_url = process.env.strapiUrl;
      // console.log(response);
      this.strapiApiData = response.data;
      // console.log(this.strapiApiData);
      this.Introduction = this.strapiApiData[0].Introduction;
      this.Berrie_Options = this.strapiApiData[0].Berrie_Options;
      this.Steps = this.strapiApiData[0].Steps;
      this.FAQs_for_Pickup = this.strapiApiData[0].FAQs_for_Pickup;
      this.UPick = this.strapiApiData[0].UPick;
      this.Video = this.strapiApiData[0].Video;
      this.Hours_and_Availability = this.strapiApiData[0].Hours_and_Availability;
      this.How_it_Works = this.strapiApiData[0].How_it_Works;
      this.FAQs = this.strapiApiData[0].FAQs;
      this.Guidelines = this.strapiApiData[0].Guidelines;
      this.Our_Farming_Practices = this.strapiApiData[0].Our_Farming_Practices;
      this.Book_Tickets = this.strapiApiData[0].Book_Tickets;
      this.Final_Image = this.strapiApiData[0].Final_Image;
      for (this.i = 0; this.i < this.Introduction.length; this.i++) {
        if (this.Introduction[this.i].enable === true) {
          this.enableIntroduction = true;
        }
      }
      for (this.i = 0; this.i < this.Berrie_Options.length; this.i++) {
        if (this.Berrie_Options[this.i].enable === true) {
          this.enableBerrie_Options = true;
        }
      }
      for (this.i = 0; this.i < this.Steps.length; this.i++) {
        if (this.Steps[this.i].enable === true) {
          this.enableSteps = true;
        }
      }
      for (this.i = 0; this.i < this.FAQs_for_Pickup.length; this.i++) {
        if (this.FAQs_for_Pickup[this.i].enable === true) {
          this.enableFAQs_for_Pickup = true;
        }
      }
      for (this.i = 0; this.i < this.UPick.length; this.i++) {
        if (this.UPick[this.i].enable === true) {
          this.enableUPick = true;
        }
      }
      for (this.i = 0; this.i < this.Video.length; this.i++) {
        if (this.Video[this.i].enable === true) {
          this.enableVideo = true;
        }
      }
      for (this.i = 0; this.i < this.Hours_and_Availability.length; this.i++) {
        if (this.Hours_and_Availability[this.i].enable === true) {
          this.enableHours_and_Availability = true;
        }
      }
      for (this.i = 0; this.i < this.How_it_Works.length; this.i++) {
        if (this.How_it_Works[this.i].enable === true) {
          this.enableHow_it_Works = true;
        }
      }
      for (this.i = 0; this.i < this.FAQs.length; this.i++) {
        if (this.FAQs[this.i].enable === true) {
          this.enableFAQs = true;
        }
      }
      for (this.i = 0; this.i < this.Guidelines.length; this.i++) {
        if (this.Guidelines[this.i].enable === true) {
          this.enableGuidelines = true;
        }
      }
      for (this.i = 0; this.i < this.Our_Farming_Practices.length; this.i++) {
        if (this.Our_Farming_Practices[this.i].enable === true) {
          this.enableOur_Farming_Practices = true;
        }
      }
      for (this.i = 0; this.i < this.Book_Tickets.length; this.i++) {
        if (this.Book_Tickets[this.i].enable === true) {
          this.enableBook_Tickets = true;
        }
      }
      for (this.i = 0; this.i < this.Final_Image.length; this.i++) {
        if (this.Final_Image[this.i].enable === true) {
          this.enableFinal_Image = true;
        }
      }
    } catch (error) {
      this.error = error;
      console.log(error);
    }
  },
  async mounted() {
    this.parentNode = this.$el.parentElement;
    window.addEventListener("scroll", this.updateScroll);
    if (this.$route.hash) {
      let el = await this.findEl(this.$route.hash);
      if ("scrollBehavior" in document.documentElement.style) {
        await window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      } else {
        await window.scrollTo(0, el.offsetTop);
      }
    }

    // // accessing strapi api
    // try {
    //   const response = await axios.get(`${process.env.strapiUrl}/berries`);
    //   this.strapiApiData = response.data;
    //   this.Introduction = strapiApiData[0].Introduction;
    //   this.Berrie_Options = strapiApiData[0].Berrie_Options;
    // } catch (error) {
    //   this.error = error;
    // }

    // window.location.hash = '';
  },
  methods: {
    async findEl(hash, x = 0) {
      return (
        document.querySelector(hash) ||
        new Promise(resolve => {
          if (x > 50) {
            return resolve(document.querySelector("#app"));
          }
          setTimeout(() => {
            resolve(findEl(hash, ++x || 1));
          }, 100);
        })
      );
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.height = 50;
    }
  }
};
</script>
