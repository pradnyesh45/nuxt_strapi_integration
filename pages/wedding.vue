<template>
  <div class="mainWapper fixedHeader theme1">
    <headerBox class="pos0" :class="[{ showHeader: scrollPosition > height }]">
    </headerBox>
    <div class="innerBannerSection bg-3">
      <div class="container">
        <div class="row bannerWrapper">
          <div class="col-md-6">
            <div class="contentBox">
              <h1 class="title">Get Married at Maan Farms</h1>
              <p class="text">
                Create memories for a lifetime in our idillyc country setting.
              </p>
              <p class="splText">Book for 2021 & 2022</p>
              <div class="btnGroup">
                <a href="https://hello.dubsado.com/public/form/view/5d2a4633431ade48287ad6bb" target="_blank" class="btn fill dark"
                  >Book a tour</a>
                <a href="/wedding.pdf" target="_blank" class="btn outline dark">Info Package</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="imgBox">
              <img src="@/assets/images/wedding/weddingBanner.jpg" alt="Married at Maanfarms" />
            </div>
          </div>
        </div>
        <div class="row stepsWrapper">

            <div class="col-sm-12 col-md-4 col-lg-4 item">
              <div class="stepBox">
                <div class="stepIcon">
                  <img src="@/assets/images/venue.svg" alt="icon" />
                </div>
                <div class="contentWrapper">
                  <h4 class="title">Venue</h4>
                  <p class="text">
                    Our antique barn has been beautifully restored to create the
                    perfect reception venue.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 item">
              <div class="stepBox">
                <div class="stepIcon">
                  <img src="@/assets/images/ceremony.svg" alt="icon"/>
                </div>
                <div class="contentWrapper">
                  <h4 class="title">Ceremony</h4>
                  <p class="text">
                    Three sites to choose from create the backdrop for your
                    memories.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 item">
              <div class="stepBox">
                <div class="stepIcon">
                  <img src="@/assets/images/reception.svg" alt="icon"/>
                </div>
                <div class="contentWrapper">
                  <h4 class="title">Reception</h4>
                  <p class="text">
                    Full buffet & veranda with a capacity to hold upto 150
                    guests
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
    <div class="videoSection bg-3">
      <div class="container">
        <div class="videoBox">
          <div class="embed-responsive">

            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/e4epWqPnjLY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonialsSection bg-3">
      <div class="container">
        <div class="testimonialsWrapper">
          <div class="testimonialsGroup">
            <no-ssr>
              <VueSlickCarousel v-bind="settings">
                 <!-- <div class="item">
                  <div class="rating">
                    <span class="star star-5"></span>
                  </div>
                  <h3 class="title">Amazing!</h3>
                  <p class="text">
                   Had my wedding at Maan Farms on July 14th 2018 , I could go on and on about how amazing it is here. I love that I am helping to support a family run business, the whole Maan Family and team are incredible. We are still hearing from people 3 weeks later about how much fun they had on the zipline, the pedal karts and going to view the animals and how beautiful the property is! The food is so delicious and everyone is telling us it’s the best food they’ve had at a wedding. Me and my husband are in Saskatoon but I never had any worries in my communication with everyone, Samantha answered our every email ! I wasn’t able to do the pedal karts or zip lining in my dress but I will be back one day soon ! Thank you Maan Farms for being a big part of our special day. It exceeded our expectations and we will remember it for a lifetime !

                  </p>
                  <p class="name">- Sam Minke</p>
                </div> -->
                <div class="item">
                  <div class="rating">
                    <span class="star star-5"></span>
                  </div>
                  <h3 class="title">Great Photography Options!</h3>
                  <p class="text">
                    I had an amazing experience getting married at Maan Farms
                    this past November. The outside setting was beautiful,
                    especially with the snowfall that day, many options for
                    photography! The barn was perfectly rustic, but kept warm
                    throughout the night. Food was great. Staff was always
                    accommodating, and promptly answered all my questions as a
                    nervous bride. I highly recommend this wedding venue, I
                    still receive so many compliments on the whole event!
                  </p>
                  <p class="name">- Katie Dyck</p>
                </div>
                <div class="item">
                  <div class="rating">
                    <span class="star star-5"></span>
                  </div>
                  <h3 class="title">Beautiful!</h3>
                  <p class="text">
                    We had our wedding here in June, and it was amazing. The venue was beautiful, the staff were extremely helpful, and the food was amazing. Our guests, adults and children, loved the farm activities. There were so many beautiful locations for us to take photos, including the pedal karts and the jumping pillow! I would highly recommend Maan Farms for anyone looking for a fun, outdoor wedding venue that will keep all of your guests entertained all night!

                  </p>
                  <p class="name">- Becky Selven</p>
                </div>
                <div class="item">
                  <div class="rating">
                    <span class="star star-5"></span>
                  </div>
                  <h3 class="title">Fun & Relaxed!</h3>
                  <p class="text">
                    I had my wedding Sept.02 2018 it was five star plus. Everyone is raving about how much fun & relaxed it was. From trampolines to airlines the best time for guests ever. Thank you to Samantha & Tilly for making it such a smooth transaction. Would recommend it to anyone wanting an amazing wedding!
                  </p>
                  <p class="name">- Crystal Graydon Hildebrand</p>
                </div>
                <div class="item">
                  <div class="rating">
                    <span class="star star-5"></span>
                  </div>
                  <h3 class="title">Gorgeous & Rustic!</h3>
                  <p class="text">
                    We had our wedding here last month and it was gorgeous! The Maan family is so accommodating and understanding of our needs and dreams for how we wanted our wedding to be like. The barn where we had our reception is so beautiful, with the rustic wood and the fairy lights across the rafters. It was a perfect environment for our guests and we got some amazing pictures! Our guests also enjoyed being able to access all of the activities like the zip line and petting zoo. We kept hearing about how much fun it was! Would recommend it for sure!
                  </p>
                  <p class="name">- Sam Minke</p>
                </div>

              </VueSlickCarousel>
            </no-ssr>
          </div>
        </div>
      </div>
    </div>
    <div class="contentSection text-r bg-3">
      <div class="container">
        <div class="row vertical-center">
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img src="@/assets/images/wedding/barnBanner.jpg"  alt="The Barn"/>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <div class="symbol">
                <img src="@/assets/images/venue.svg" alt="icon"/>
              </div>
              <h3 class="title">The Barn</h3>
              <p class="text">
                Our antique barn has been beautifully restored to create the
                perfect reception venue. Featuring exposed wood beans,
                distressed white interior, twinkle lights and Edison bulbs, the
                Barn sets the stage for memories to be made. Our family farm has
                continued to make use of this historic space, which began nearly
                100 years ago as a dairy barn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contentSection text-l bg-4">
      <div class="container">
        <div class="row vertical-center reverse">
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <div class="symbol">
                <img src="@/assets/images/ceremony.svg" alt="icon" />
              </div>
              <h3 class="title">Ceremony</h3>
              <p class="text">
                Three sites to choose from create the backdrop for your
                memories. Spring, summer, and fall are beautiful here in the
                Fraser Valley, and if it rains, we can adjust your ceremony
                location to accommodate the weather. McKenzie Hall is directly
                across from the reception barn and is the perfect way to stay
                warm and dry regardless of the weather.
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img src="@/assets/images/wedding/ceremonyBanner.jpg" alt="Ceremony" />
            </div>
          </div>
        </div>
        <div class=" extraInfo">
          <no-ssr>
              <VueSlickCarousel v-bind="smCarousel">
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">Mt. Baker Site</h4>
            <p class="text">
              The Mt. Baker ceremony site located next to our fragrant
              strawberry fields with Panoramic views of of the mountains in the
              background.
            </p>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">The Court Yard</h4>
            <p class="text">
              Our landscaped court yard features a beautiful gazebo, heritage
              walnut tree, and lush gardens with a brick pathway perfect for
              your ceremony.
            </p>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">McKenzie Hall</h4>
            <p class="text">
              A cozy indoor spot to say your “I do’s”. McKenzie Hall features,
              Edison bulbs, warm wood panelling and a picture perfect center
              isle for your ceremony.
            </p>
          </div>
              </VueSlickCarousel>
          </no-ssr>
        </div>
      </div>
    </div>
    <div class="contentSection text-r bg-3">
      <div class="container">
        <div class="row vertical-center">
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img src="@/assets/images/wedding/receptionBanner.jpg" alt="Reception" />
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <div class="symbol">
                <img src="@/assets/images/reception.svg" alt="Icon" />
              </div>
              <h3 class="title">Reception</h3>
              <p class="text">
                Our antique barn has been beautifully restored to create the
                perfect reception venue. The barn has the capacity to hold
                approximately 150 guests. Before your wedding we will provide
                you with a tasting to help you select your wedding menu.
              </p>
            </div>
          </div>
        </div>
        <div class=" extraInfo">
           <no-ssr>
              <VueSlickCarousel v-bind="smCarousel">
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">Catering</h4>
            <p class="text">
              We include a full buffet with salads, sides and main courses
              customizable to suite your tastes. We offer options for cocktail
              hour and late night snacks as well.
            </p>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">Tables & Chairs</h4>
            <p class="text">
              We have beautiful white chairs for your ceremony and reception. We
              provide rectangle or round tables for your guests and wedding
              party.
            </p>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">Veranda</h4>
            <p class="text">
              Dance the night away outdoors. Our large covered veranda makes the
              perfect spot to share your first dance as a married couple.
            </p>
          </div>
              </VueSlickCarousel>
           </no-ssr>
        </div>
      </div>
    </div>
    <div class="contentSection text-l bg-4">
      <div class="container">
        <div class="row vertical-center reverse">
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <h3 class="title">COURT YARD</h3>
              <p class="text">
                Follow the brick path through manicured lawns surrounded by lush
                gardens to our beautiful wood gazebo. Relax under the huge
                walnut tree or dance the night away under the stars. The
                multipurpose court yard offers a peaceful space for your
                ceremony, or use it for lawn games, cocktail hour or for
                whatever your imagination leads you to.
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img src="@/assets/images/wedding/courtYardBanner.jpg" alt="COURT YARD" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contentSection text-r bg-3">
      <div class="container">
        <div class="row vertical-center">
          <div class="col-sm-12 col-md-6">
            <div class="bannerBox">
              <img src="@/assets/images/wedding/capture-memories.jpg" alt="CAPTURE MEMORIES" />
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contentBox">
              <h3 class="title">CAPTURE MEMORIES</h3>
              <p class="text">
                It wouldn’t be a farm wedding without the farm. We know you’ll
                be taking pictures, why not use our entire farm to take them
                where ever you like!? Meaning on all of our attractions with
                anyone of our animals and in all of our fields.
              </p>
            </div>
          </div>
        </div>
        <div class="extraInfo">
           <no-ssr>
              <VueSlickCarousel v-bind="smCarousel">
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">Spring</h4>
            <p class="text">
              Green is everywhere, strawberry fields are blooming and filling
              the air with their fresh scent.
            </p>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">Summer</h4>
            <p class="text">
              Raspberries and Blueberries ripen. Sunflowers blooming late
              summer, early fall.
            </p>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 item">
            <h4 class="title">Fall</h4>
            <p class="text">
              Berries finish up and make way for pumpkins, corn and other squash
            </p>
          </div>
              </VueSlickCarousel>
           </no-ssr>
        </div>
        <div class="extraMT faq">
          <h2 class="mainTitle">FREQUENT QUESTIONS</h2>
          <div class="accordion" role="tablist">
            <h3 class="title">Most Asked</h3>
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-1
                  >What is your “hold” policy?</b-button
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
                    We work on a first come first served basis. The only way to hold your day is to book your reservation.
Bookings require a deposit and a completed contract.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.mostAsk-2
                  >What is your availability?</b-button
                >
              </b-card-header>
              <b-collapse
                id="mostAsk-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We have limited dates left in 2020 and are now booking for 2021. Please contact us for current
availability.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <div class="accordion" role="tablist">
            <h3 class="title">Rental Times</h3>
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.rentalTime-1
                  >What time must my party end?</b-button
                >
              </b-card-header>
              <b-collapse
                id="rentalTime-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Events must end fully at 12AM with the bar closing and volume adjusted at 11PM. Please inquire about
our late dismissal options.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.rentalTime-2
                  >Are other events scheduled on the same day?</b-button
                >
              </b-card-header>
              <b-collapse
                id="rentalTime-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We host one wedding per day, but our farm is still open to the public. Our attention will be focused
entirely on your special day to ensure you and your guests enjoy yourselves to the fullest!
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.rentalTime-3
                  >May we set up or take down before/after our rental
                  begins?</b-button
                >
              </b-card-header>
              <b-collapse
                id="rentalTime-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                   Your wedding day rental hours are 10am-12am. However, if there is no booking the day before or the
day after, we do allow 2 hours of evening set up and next morning take down before 10am. This can be
confirmed on your last payment date, this must be arranged with the Maan team ahead of time. If
additional time is required, it will be available for $200 per hour plus tax. If the wedding is booked on a
long weekend, or holiday, this clause will be nullified, and other arrangements will be discussed.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.rentalTime-4
                  >Is the rehearsal free of charge?</b-button
                >
              </b-card-header>
              <b-collapse
                id="rentalTime-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Yes, 60 minutes rehearsal is free of charge, must be arranged from Monday - Thursday. The rehearsal
may be extended for an additional fee.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <div class="accordion" role="tablist">
            <h3 class="title">Food & Drinks</h3>
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.foodDrink-1
                  >Is alcohol allowed?</b-button
                >
              </b-card-header>
              <b-collapse
                id="foodDrink-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Yes, you may have alcohol at your wedding. Besides the minimum wine purchase from our Estate
Winery, you are allowed to bring in outside alcohol that is purchased from either a BC Government
Liquor store and/or a private manufacturer (brewery, winery, distillery). Copies of purchase receipts
must be kept on file. Alcohol left in our cooler to chill must be clearly labelled for the wedding. Maan
Farms does not assume any responsibility for the use of alcohol. You are also responsible to ensure
the safe departure of your guests from your event. All alcohol must be served by a certified bartender
and you must provide Maan Farms with a copy of your Special Event Permit (SEP) and the bar staff
member’s Serving it Right.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.foodDrink-2
                  >Is there a corkage fee?</b-button
                >
              </b-card-header>
              <b-collapse
                id="foodDrink-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                   No, there is not. Whoever is hired for the bar will be responsible for opening the wine.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.foodDrink-3
                  >Is there a cake cutting fee?</b-button
                >
              </b-card-header>
              <b-collapse
                id="foodDrink-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                   There is no cake cutting fee. However, Maan Farms staff is not responsible for cutting nor serving your
cake. This would be the responsibility of someone from your party.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

          </div>
          <div class="accordion" role="tablist">
            <h3 class="title">Guests</h3>
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.guests-1
                  >Is it okay to invite children?</b-button
                >
              </b-card-header>
              <b-collapse
                id="guests-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                   Children are welcome at Maan Farms Weddings, however the surroundings at our venue do include
some hazards. Children must be supervised at all times. Guests who are bringing children to your
events should be notified in advance that they will need to provide constant and vigilant supervision.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.guests-2
                  >Some of my guests have mobility issues, will they be able to
                  get around?</b-button
                >
              </b-card-header>
              <b-collapse
                id="guests-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                   The barn has a smooth concrete floor suitable for wheelchair access. A vehicle can drive up to the
barn to drop off any guests with mobility issues. The ceremony sites can both be accessed by vehicle
for those unable to walk there.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <div class="accordion" role="tablist">
            <h3 class="title">Furniture & Decor</h3>
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.furnitureDecor-1
                  >What type of chair is provided in the rental fee?</b-button
                >
              </b-card-header>
              <b-collapse
                id="furnitureDecor-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Maan Farms provides padded banquet chairs, or folding white garden chairs. Our team will set up your
chairs for the ceremony and later move and set them up for the reception. Chairs may not be used in
the rain.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.furnitureDecor-2
                  >What is the responsibility of my “Maan farms wedding
                  representative” ?</b-button
                >
              </b-card-header>
              <b-collapse
                id="furnitureDecor-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Maan Farms wedding representative will be available for the duration of your event but will not act as a
wedding planner or decorator. She is responsible for ensuring that all operations at the farm in regard
to the wedding run smoothly, and that your wedding day schedule is running on time. She is your
“go-to” person, if you have any questions or concerns. However, we still recommend you to hire your
own wedding planner.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.furnitureDecor-3
                  >Are candles allowed?</b-button
                >
              </b-card-header>
              <b-collapse
                id="furnitureDecor-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    We prefer guests use battery-operated candles for the safety of guests and the venue. Upon approval
from your wedding coordinator, candles will be permitted if they are contained by water or a lantern
structure.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.furnitureDecor-4
                  >Do you provide linens and decor?</b-button
                >
              </b-card-header>
              <b-collapse
                id="furnitureDecor-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                   Every couple has different tastes; therefore, we don’t provide linens or decorations. If you need some
help to get that organized, we can provide you with names of florists and decorators who have worked
here in the past.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <div class="accordion" role="tablist">
            <h3 class="title">The Venue</h3>
            <b-card no-body show class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.venue-1
                  >May we have a DJ or band?</b-button
                >
              </b-card-header>
              <b-collapse
                id="venue-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                   Yes, you may choose the band or DJ of your choice.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.venue-2
                  >May I act as my own vendor?
</b-button
                >
              </b-card-header>
              <b-collapse id="venue-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                   You are welcome to be your own florist or DJ. If you decide to be your own florist, you will be expected
to arrive with your work completed. You may not use our property as your workshop.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.venue-3
                  >Is parking provided?</b-button
                >
              </b-card-header>
              <b-collapse id="venue-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    Yes, parking is provided in our designated wedding parking lot, Vehicles and campers, may be left
overnight with permission, but must be picked up by the following morning.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.venue-4
                  >Must we take away the trash? Who is responsible for cleaning
                  the barn?</b-button
                >
              </b-card-header>
              <b-collapse id="venue-4" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    Outside vendors are responsible for the removal of their trash. Clients are responsible for clearing the
barn and gardens of your own decorations, linens etc. Maan Farms will clean the venue area and
washrooms after you leave. Sorted recycling may be left inside the barn. If extensive cleaning is
required, partial or full funds from the damage deposit may be withheld.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button block v-b-toggle.venue-5
                  >Do you have a bridal room?</b-button
                >
              </b-card-header>
              <b-collapse id="venue-5" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                   Unfortunately, we do not. However, there are many hotels within proximity to the farm.
</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
    </div>
    <div class="contentSection bg-4">
      <div class="container">
        <div class="bookBox">
          <h3 class="title">Book a tour</h3>
          <p class="text">
            Thank you for considering Maan Farms for your wedding. Our family
            loves to share the beauty of the farm and we’d be happy to have you
            out and show you around. If you have any questions, please don’t
            hesitate to ask. You can call us anytime at 604 864 5723 or email
            info@maanfarms.com.
          </p>
          <p class="name text">~ Gurleen & Mama Maan</p>
          <div class="btnGroup center">
            <a href="https://hello.dubsado.com/public/form/view/5d2a4633431ade48287ad6bb" target="_blank" class="btn fill dark">Book a Tour</a>
            <a href="/wedding.pdf" target="_blank" class="btn outline dark">Info Package</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bannerWrapper bottomBanner">
      <img src="@/assets/images/wedding/weddingBanner2.jpg" alt="Beauty of the farm " />
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
        title: "Wedding At Maan Farms",
        meta: [
          { hid: 'title', property: 'title',name: 'title', content: "Wedding At Maan Farms"},
          { hid: 'description', name: 'description', property: 'description', content: ""},
          { hid: 'og:title', property: 'og:title', content: "Wedding At Maan Farms"},
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

