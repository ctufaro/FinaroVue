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
                    <div class="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animateX"
                        data-animate-effect="fadeIn">
                        <h2>What is trndx?</h2>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui
                            tempore
                            natus
                            quos quibusdam soluta at.</p>
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
                            <div class="icon"><i class="fab fa-ethereum"></i></div>
                            <div class="text">
                                <h3>Blockchain-based</h3>
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
                                <h3>Real-Time</h3>
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
                                <h3>Social Sharing</h3>
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
                                <h3>Notifications</h3>
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
                        <h2 class="probootstrap-animateX" data-animate-effect="fadeInRight">We'd like to help and talk
                            with
                            you</h2>
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