<template>
  <div class="mainWapper fixedHeader theme8" id="story">
     <headerBox class="pos0" :class="[{whiteText: scrollPosition <= height ,showHeader: scrollPosition > height,}]" > </headerBox>
    <div class="aboutBanner" ref="rr" >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="title" >OUR STORY</h1>
          </div>
          <div class="col-md-6">
            <p class="text">
              Maan Farms has a long and proud history of providing quality local
              produce to the citizens of Abbotsford, the Fraser Valley and
              Greater BC. Started in 1977 by Jawahar and Gurbachan (Grandpa and
              Grandma) Maan with the help of their three children. Maan Farms
              began by producing cole crops, but soon shifted to growing the
              delicious strawberries, raspberries, and blueberries for which
              they became famous.
            </p>
            <p class="text">
              In 1982, the Maans opened their first roadside stand on their farm
              at 1136 McKenzie Road. This small stand soon grew in popularity,
              thanks to the help and support of the local community and the
              faithful customers who fell in love with the farm’s welcoming
              atmosphere and mouth-watering strawberries.
            </p>
          </div>
          <div class="col-md-6">
            <p class="text">
              Today, Grandpa and Grandma Maan are retired, but their son Kris
              and his wife Devinder continue the proud tradition of Maan Farms,
              helped by their own children, Preena, Gurleen, Gaurav and Amir.
              Many things have changed since the farm opened almost 35 years
              ago. From one small berry stand, Maan Farms has grown into a place
              with something for everyone.
            </p>
            <p class="text">
              Amidst all the changes, two things remain the same, Maan Farms
              still grows the juiciest red strawberries in the Fraser Valley,
              and the Maans are always happy to greet everyone who stops by,
              whether they are a familiar face or a first time visitor.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bannerWrapper">
      <img src="@/assets/images/about/about-banner.jpg" alt="OUR STORY BANNER">
    </div>
    <div class="contentSection pointsWrapper bg-default" id="history">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="title">History</h2>
          </div>
          <div class="col-md-6">
            <div class="listing">

              <p class="item"><span>1982</span> – First Road Side Stand at 1136 McKenzie Road</p>

              <p class="item"><span>1995</span> – 2nd Roadside Stand on Townline Road</p>

              <p class="item"><span>2006</span> – Primary location 790 McKenzie Road</p>

              <p class="item"><span>2006</span> – Introduction of: Corn Maze, Pumpkin Patch, Upick Berries</p>

              <p class="item"><span>2007</span> – Introduction of School Tours, Play Area & Petting Zoo</p>

              <p class="item"><span>2012</span> – Barn Facility Opened featuring Country Kitchen, Country Market, Banquet Hall and Birthday Parties</p>

              <p class="item"><span>2013</span> – Introduction of Estate Winery</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="listing mb-0">
              <p class="item"><span>2013</span> – 1st Haunted Corn Maze</p>

              <p class="item"><span>2014</span> – Fire destroyed Barn Facility</p>

              <p class="item"><span>2014</span> – Roadside stand & Temporary Structure</p>

              <p class="item"><span>2014</span> – Introduction of Adventure Zone</p>

              <p class="item"><span>2015</span> – We go 10+ Farmers Markets all the way in Vancouver</p>

              <p class="item"><span>2016</span> – Introduction of Farm Weddings</p>

              <p class="item"><span>2017</span> – Introduction of Farm Camps and Big Additions to Adventure Zone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bannerWrapper">
      <img src="@/assets/images/about/about-banner2.jpg" alt="ABOUT BANNER">
    </div>
    <div class="profileWrapper" id="careers">
      <div class="container contBox">
        <div class="row pr-row vertical-center reverse">
          <div class="col-sm-12 col-md-6 row-item">
            <div class="infoBox">
              <div class="headBox">
              <h3 class="name">Mama Maan</h3>
              <p class="pos-info">Co-Owner</p>
              </div>
              <div class="listInfo">
                <div class="item">
                  <p class="text bold">Fave Farm Memory</p>
                  <p class="text">Having all the family working together everyday. It's magical!</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Berry</p>
                  <p class="text">Blueberries!!!</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Meal</p>
                  <p class="text">Butter Chicken</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Maan Farms Event</p>
                  <p class="text">Christmas time!!! All events during Christmas!</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Tip</p>
                  <p class="text">Cook with love</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 row-item">
            <div class="bannerBox">
              <img src="@/assets/images/about/mama-maan.jpg" alt="Mama Maan"/>
            </div>
          </div>
        </div>
      </div>

       <div class="container contBox">
        <div class="row pr-row vertical-center">

          <div class="col-sm-12 col-md-6 row-item">
            <div class="bannerBox">
              <img src="@/assets/images/about/kris-maan.jpg" alt="Kris Maan"/>
            </div>
          </div>
           <div class="col-sm-12 col-md-6 item">
            <div class="infoBox">
              <div class="headBox">
              <h3 class="name">Kris Maan</h3>
              <p class="pos-info">Co-Owner</p>
              </div>
              <div class="listInfo">
                <div class="item">
                  <p class="text bold">Fave Farm Memory</p>
                  <p class="text">Driving a Tractor pulling the Harvest Trailer through the Brussel Sprout Field in the middle of a December while it was snowing and the temperature read –5!</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Meal</p>
                  <p class="text">Roti & Dal cooked by Mama Maan.</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Maan Farms Event</p>
                  <p class="text">The first ever Easter Egg Hunt. He never knew if it was going to be successful, but the weather was surprisingly beautiful and the farm ended up breaking an attendance record! It was because of that event, he realized the potential of pairing Farming Family and Fun had. It is now our sustainable business motto.</p>
                </div>
                <div class="item">
                  <p class="text bold">Farm Tip</p>
                  <p class="text">The best fertilizer is a farmer’s footsteps.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container contBox">
        <div class="row pr-row vertical-center reverse">
          <div class="col-sm-12 col-md-6 row-item">
            <div class="infoBox">
              <div class="headBox">
              <h3 class="name">Amir Maan</h3>
              <p class="pos-info">Operations Manager</p>
              </div>
              <div class="listInfo">
                <div class="item">
                  <p class="text bold">Fave Farm Memory</p>
                  <p class="text">Working with my family throughout early mornings or late evenings and knowing that we’re all just having fun towards a common goal.</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Berry</p>
                  <p class="text">Strawberries and my favorite variety is Puget Reliance. It’s my favorite because it’s the earliest and the best tasting obviously.</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Meal</p>
                  <p class="text">Steak medium rare.</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Maan Farms Event</p>
                  <p class="text">I love fall! It includes so much of what we do on the farm. It’s one of the busiest months but most rewarding because you’re surrounded by people who love what they do. And the weather is perfect.</p>
                </div>

              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 row-item">
            <div class="bannerBox">
              <img src="@/assets/images/about/amir-maan.jpg" alt="Amir Maan"/>
            </div>
          </div>
        </div>
      </div>

      <div class="container contBox">
        <div class="row pr-row vertical-center">

          <div class="col-sm-12 col-md-6 row-item">
            <div class="bannerBox">
              <img src="@/assets/images/about/gaurav-maan.jpg" alt="Gaurav Maan"/>
            </div>
          </div>
           <div class="col-sm-12 col-md-6 item">
            <div class="infoBox">
              <div class="headBox">
              <h3 class="name">Gaurav Maan</h3>
              <p class="pos-info">Winery Manager</p>
              </div>
              <div class="listInfo">
                <div class="item">
                  <p class="text bold">Fave Wine</p>
                  <p class="text">Blackberry Table Wine because it goes great with some of my favourite foods like BBQ Steak and chocolate cake. It’s amazing in Sangria and there are 2lbs of berries per bottle!</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Farm Memory</p>
                  <p class="text">Roasting our freshly picked corn on a fire pit and eating Mama Maan’s roti next to our old berry stand with my family.</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Maan Farms Event</p>
                  <p class="text">Wine tasting! I love interacting with customers and providing an experience in the tasting room which is customized to the individual. Everyone has a different taste pallet and it’s so cool seeing everyone reactions while they are here.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container contBox">
        <div class="row pr-row vertical-center reverse">
          <div class="col-sm-12 col-md-6 row-item">
            <div class="infoBox">
              <div class="headBox">
              <h3 class="name">Gurleen Maan</h3>
              <p class="pos-info">Operations Manager</p>
              </div>
              <div class="listInfo">
                <div class="item">
                  <p class="text bold">Fave Berry</p>
                  <p class="text">Raspberry! So sweet yet a little tart.</p>
                </div>
                <div class="item">
                  <p class="text bold">Fave Farm Memory</p>
                  <p class="text">My favourite farm memories are from my childhood. I remember growing up spending my Summers selling baskets of berries from our 10×10 roadside stand. I remember roasting corn on a coat hanger and bringing jugs of water in a milk carton and climbing the maple tree. Those were some of my favourite childhood memories – learning valuable business and customer service skills.</p>
                </div>

                <div class="item">
                  <p class="text bold">Fave Maan Farms Event</p>
                  <p class="text">It’s a toss up between Easter and Goat Yoga. Goat Yoga because I love that we can use our platform and our farm to help cultivate self-love and connection withing ourselves and agriculture. Easter because its the first big event of the year and it’s always so busy and fun!</p>
                </div>

              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 row-item">
            <div class="bannerBox">
              <img src="@/assets/images/about/gurleen-maan.jpg" alt="Gurleen Maan"/>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="contactWrapper bg-default">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10952.317897204697!2d-122.29674554652092!3d49.014194699974055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54844ada977bb1fd%3A0x1b606e1d36c66fa4!2s790%20McKenzie%20Rd%2C%20Abbotsford%2C%20BC%20V2S%207N4%2C%20Canada!5e1!3m2!1sen!2sin!4v1619618245382!5m2!1sen!2sin" height="100%" width="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
          <div class="col-md-5">
            <div class="formBox">
              <h3 class="formTitle">WRITE TO US</h3>
              <p id="sl-message" :class="{error:error,success:success}">{{message}}</p>
              <div class="formControl">
                <input type="text" v-model="name" placeholder="Name" class="formInput">
              </div>
              <div class="formControl">
                <input type="email" v-model="email" placeholder="Email" class="formInput">
              </div>
              <div class="formControl">
                <input type="text"  v-model="subject" placeholder="Subject" class="formInput">
              </div>
              <div class="formControl">
                <textarea placeholder="Your Message"  v-model="query" class="formInput" rows="5"></textarea>
              </div>
              <div class="formControl">

                <button class="formBtn" @click.prevent="contact_us"> Send</button>

              </div>
            </div>
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

head () {
      return {
        title: "About Maan Farms",
        meta: [
          { hid: 'title', property: 'title',name: 'title', content: "About Maan Farms"},
          { hid: 'description', name: 'description', property: 'description', content: ""},
          { hid: 'og:title', property: 'og:title', content: "About Maan Farms"},
          { hid: 'og:description', property: 'og:description', content: ""}
          // other meta
        ]
      }
    },

  data() {
    return {
      message : "",
      error:false,
      success : false,
      email:'',
      name:'',
      subject:'',
      query:'',
      scrollPosition: null,
      height: 0,
      active_el: 0,
      settings: {
        arrows: false,
        dots: true,
        fade: true,
        speed: 500,
      },
    };
  },
  computed: {},
  async mounted() {
    this.parentNode = this.$el.parentElement;
    window.addEventListener("scroll", this.updateScroll);
    if(this.$route.hash){
      let el = await this.findEl(this.$route.hash);
      if ("scrollBehavior" in document.documentElement.style) {
        await window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      } else {
        await window.scrollTo(0, el.offsetTop);
      }
    }
  },
  methods: {
    async findEl(hash, x = 0)  {
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
    async contact_us() {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.error = false;
      this.success = false;
      let email = this.email.trim();
      let name = this.name.trim();
      let subject =  this.subject.trim();
      let message =  this.query.trim();

if (!name.length) {
        this.message = "Please Enter a Valid Name";
        this.error = true;
        return false;
      } else if (name.length < 2) {
        this.message = "Please Enter a Valid Name";
        this.error = true;
        return false;
      }

      if (!email.length) {
        this.message = "Please Enter a Valid Email Address";
        this.error = true;
        return false;
      } else if (!re.test(email)) {
        this.message = "Invalid Email Address";
        this.error = true;
        return false;
      }

      if (!name.length) {
        this.message = "Please Enter a Valid Name";
        this.error = true;
        return false;
      } else if (name.length < 2) {
        this.message = "Please Enter a Valid Name";
        this.error = true;
        return false;
      }

      if (!subject.length) {
        this.message = "Please Enter Your Subject";
        this.error = true;
        return false;
      } else if (subject.length < 2) {
        this.message = "Please Enter a Valid Subject";
        this.error = true;
        return false;
      }

      if (!message.length) {
        this.message = "Please Enter Your Message";
        this.error = true;
        return false;
      }

      let responseData = await this.$axios
        .post("/auth/contact_us", {
          email: email,
          name:name,
          subject:subject,
          message:message
        })
        .then((success) => {
          this.message = "Thanks For Contacting With Us";
          this.success = true;
          this.email='';
          this.subject='';
          this.query='';
          this.name='';
        })
        .catch(err => {
          try{
            if(err.response){
              err.response.data.errors.forEach(function(error){
                if(error.error_code == 4001){
                  this.message = "Internal Server Error"
                  this.error = true;
                  this.success = false;
                }else{
                  this.message = "Internal Server Error"
                  this.error = true;
                  this.success = false;
                }
              }.bind(this))
            }else {
               this.message = "Internal Server Error"
                  this.error = true;
                  this.success = false;
            }
          } catch(err){
             this.message = "Internal Server Error"
                this.error = true;
                this.success = false;
          }
        });
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.height = 50;
    },
    activate: function (el) {
      if (el == this.active_el) {
        this.active_el = 0;
      } else {
        this.active_el = el;
      }
    },
  },
};
</script>

<style scoped>

#sl-message{
    margin-top: 10px;
    color: #ce5353;
}
#sl-message.error{
    color: #ce5353;
}
#sl-message.success{
    color: #2c6d18;;
}
</style>
