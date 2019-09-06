<template>
    <span>
        <section class="probootstrap-hero">
            <div class="container">
                <div class="row pb-5">
                    <div class="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 text-center probootstrap-hero-text pb0 probootstrap-animateX"
                        data-animate-effect="fadeIn">
                        <h1>
                            <img src="@/assets/images/trndxlogo-green.png" class="main-img" />
                        </h1>
                        <p>
                            trndx is a new platform that prices social media trends based on user sentiment and volume.
                        </p>
                        <p>
                            <a href="#" class="btn btn-primary btn-lg" role="button"
                                @click.stop="dialog = true; touchTab = 0">SIGN UP</a>
                            <a href="#" class="btn btn-primary btn-ghost btn-lg" role="button"
                                @click.stop="dialog = true; touchTab = 1">LOG IN</a>
                        </p>
                        <div style="position:relative;padding-top:56.25%;">
                            <iframe src="https://biteable.com/watch/embed/trndx-2341198" frameborder="0" allowfullscreen
                                style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
                        </div>
                    </div>
                </div>
                <div class="row probootstrap-feature-showcase" v-if="false">
                    <div class="col-md-4 col-md-push-8 probootstrap-showcase-nav probootstrap-animateX">
                        <ul>
                            <li class="active">
                                <a href="#">Responsive Design</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </li>
                            <li>
                                <a href="#">Business Solution</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </li>
                            <li>
                                <a href="#">Brand Identity</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </li>
                            <li>
                                <a href="#">Creative Ideas</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </li>
                            <li>
                                <a href="#">Search Engine Friendly</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </li>
                            <li>
                                <a href="#">Easy Customization</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-8 col-md-pull-4 probootstrap-animateX" style="position: relative;">
                        <div class="probootstrap-home-showcase-wrap">
                            <div class="probootstrap-home-showcase-inner">
                                <div class="probootstrap-chrome">
                                    <div><span></span><span></span><span></span></div>
                                </div>
                                <div class="probootstrap-image-showcase">
                                    <ul class="probootstrap-images-list">
                                        <li class="active"><img src="@/assets/images/img_showcase_2.jpg" alt="Image"
                                                class="img-responsive"></li>
                                        <li><img src="@/assets/images/img_showcase_1.jpg" alt="Image"
                                                class="img-responsive"></li>
                                        <li><img src="@/assets/images/img_showcase_2.jpg" alt="Image"
                                                class="img-responsive"></li>
                                        <li><img src="@/assets/images/img_showcase_1.jpg" alt="Image"
                                                class="img-responsive"></li>
                                        <li><img src="@/assets/images/img_showcase_2.jpg" alt="Image"
                                                class="img-responsive"></li>
                                        <li><img src="@/assets/images/img_showcase_1.jpg" alt="Image"
                                                class="img-responsive"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="probootstrap-section probootstrap-bg-white probootstrap-zindex-above-showcase">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animateX"  data-animate-effect="fadeIn">
                        <h2>What is trndx?</h2>
                        <p class="lead">
                            trndx is a new platform that prices trends across the major social networks.  
                        </p>
                        <h2 class="pt-5">Motivation</h2>
                        <p class="lead">
                            For something to go viral it takes <strong>tremendous</strong> social participation. 
                            Can you imagine the millions of people tweeting, liking, commenting, and watching something to make it go viral? 
                            It's astonishing. If the price of a stock is determined by factors like earnings and good/bad press, then why can't we apply
                            a formula similar to trends.
                        </p>
                        <h2 class="pt-5">Pricing Trends</h2>
                        <p class="lead">
                            Nothing fancy behind our pricing algorithms. trndx prices are calculated using
                            <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark v-on="on">Sentiment</v-btn>
                            </template>
                            <span>A view of or attitude toward a situation or event; an opinion</span>
                            </v-tooltip>  
                            and
                            <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn color="#63C394" dark v-on="on">Volume</v-btn>
                            </template>
                            <span>The total amount of posts collected in a given time frame, split by posts and reactions</span>
                            </v-tooltip>
                            collected from the API's provided by the top social networking sites.
                        </p> 
                        <h2 class="pt-5">Platform Features</h2>                                                                      
                    </div>
                </div>

                <div class="row probootstrap-gutter60">                    
                    <div class="col-md-4 probootstrap-animateX" data-animate-effect="fadeInLeft">
                        <div class="service text-center">
                            <div class="icon"><i class="far fa-building"></i></div>
                            <div class="text">
                                <h3>For Business</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 probootstrap-animateX" data-animate-effect="fadeIn">
                        <div class="service text-center">
                            <div class="icon"><i class="fas fa-hashtag"></i></div>
                            <div class="text">
                                <h3>Social Networks</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 probootstrap-animateX" data-animate-effect="fadeInRight">
                        <div class="service text-center">
                            <div class="icon"><i class="fas fa-medal"></i></div>
                            <div class="text">
                                <h3>Gamified Experience</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 probootstrap-animateX" data-animate-effect="fadeInLeft">
                        <div class="service text-center">
                            <div class="icon"><i class="far fa-clock"></i></div>
                            <div class="text">
                                <h3>Real-Time Updates</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 probootstrap-animateX">
                        <div class="service text-center">
                            <div class="icon"><i class="fas fa-user-friends"></i></div>
                            <div class="text">
                                <h3>User Feeds</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 probootstrap-animateX" data-animate-effect="fadeInRight">
                        <div class="service text-center">
                            <div class="icon"><i class="far fa-bell"></i></div>
                            <div class="text">
                                <h3>Price Notifications</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                    natus quos
                                    quibusdam soluta at.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="probootstrap-cta">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="probootstrap-animateX" data-animate-effect="fadeInRight">
                            <span>Interested in learning more about trndx?</span>
                         </h2>
                        <a href="#/contact" role="button" class="btn btn-primary btn-lg btn-ghost probootstrap-animateX"
                            data-animate-effect="fadeInLeft">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
        <v-dialog v-model="dialog" max-width="550">
            <SignUpIn @close="redirect()" v-bind:touch-close="dialog" v-bind:touch-tab="touchTab"/>
        </v-dialog>
    </span>
</template>
<script>
import SignUpIn from '@/components/SignUpIn.vue'
export default {
    name: 'Home',
    data: () => ({
        dialog: false,
        touchTab: 0
    }),
    methods: {
        redirect() {
            this.dialog = false;
            document.location.href = '/exchange.html#/search';
        }
    },
    components: {
        SignUpIn
    }
}
</script>
<style>

.formula{
    display:flex;
    color:black;
}

.formula .eq {
    font-size:20px;
    font-weight:bold;

}

.formula .mul {
    font-size:30px;
    font-weight:bold;

}

.formula .desc {
    font-size:12px;
    margin-top:-5px;
    font-weight:400;
    line-height: 18px;
}
</style>