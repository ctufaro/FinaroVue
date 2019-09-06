<template>
    <span id="main-body">
        <nav class="navbar probootstrap-megamenu navbar-default probootstrap-navbar">
            <div class="container">
                <div class="navbar-header">
                    <button id="navbar-collapse-menu-btn" type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#navbar-collapse" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="top-btn" style="display:none;">
                        <a href="#" class="btn btn-ghost trdx-color-out" data-toggle="modal"
                            data-target="#signupModal">SIGN UP/IN</a>
                    </div>
                    <a class="navbar-brand" @click.passive="goTo('home')"></a>
                </div>
                <div id="navbar-collapse" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right" style="cursor:pointer;">
                        <li><a @click.passive="goTo('home')">Home</a></li>
                        <!--
                    <li class="dropdown">
                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">Pages</a>
                        <ul class="dropdown-menu">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li class="dropdown-submenu dropdown">
                                <a href="#" data-toggle="dropdown" class="dropdown-toggle"><span>Sub Menu</span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Second Level Menu</a></li>
                                    <li><a href="#">Second Level Menu</a></li>
                                    <li><a href="#">Second Level Menu</a></li>
                                    <li><a href="#">Second Level Menu</a></li>
                                </ul>
                            </li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                        </ul>
                    </li>
                    -->
                        <li><a @click.passive="goTo('contact')">Contact</a></li>
                        <li><a @click.passive="goTo('team')">Team</a></li>
                        <!--
                    <li class="probootstra-cta-button"><a href="#" class="btn" data-toggle="modal"
                            data-target="#loginModal">Log
                            in</a></li>
                    
                    <li class="probootstra-cta-button last"><a href="#" class="btn btn-ghost" data-toggle="modal"
                            data-target="#signupModal">SIGN UP/IN</a></li>
                    -->
                    </ul>
                </div>
            </div>
        </nav>

        <router-view name="indexpane"/>

        <footer class="probootstrap-footer" style="padding:0px">
            <div class="container">
                <div class="row" v-if="false">
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-12 probootstrap-animateX">
                                <div class="probootstrap-footer-widget">
                                    <h3>Links</h3>
                                    <ul>
                                        <li><a href="#">Knowledge Base</a></li>
                                        <li><a href="#">Career</a></li>
                                        <li><a href="#">Press Releases</a></li>
                                        <li><a href="#">Terms of services</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 probootstrap-animateX" v-if="false">
                                <div class="probootstrap-footer-widget">
                                    <h3>Links</h3>
                                    <ul>
                                        <li><a href="#">Knowledge Base</a></li>
                                        <li><a href="#">Career</a></li>
                                        <li><a href="#">Press Releases</a></li>
                                        <li><a href="#">Terms of services</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 probootstrap-animateX" v-if="false">
                                <div class="probootstrap-footer-widget">
                                    <h3>Links</h3>
                                    <ul>
                                        <li><a href="#">Knowledge Base</a></li>
                                        <li><a href="#">Career</a></li>
                                        <li><a href="#">Press Releases</a></li>
                                        <li><a href="#">Terms of services</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 probootstrap-animateX">
                        <div class="probootstrap-footer-widget">
                            <h3>Paragraph</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore
                                natus
                                quos quibusdam
                                soluta at.</p>
                            <ul class="probootstrap-footer-social">
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                <li><a href="#"><i class="icon-facebook"></i></a></li>
                                <li><a href="#"><i class="icon-github"></i></a></li>
                                <li><a href="#"><i class="icon-dribbble"></i></a></li>
                                <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                <li><a href="#"><i class="icon-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 copyright probootstrap-animateX" style="text-align:center">
                        <p><small>&copy; 2019 trndx. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </footer>
        <div class="modal fadeInUp probootstrap-animateX" id="loginModal" tabindex="-1" role="dialog"
            aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="vertical-alignment-helper">
                <div class="modal-dialog modal-md vertical-align-center">
                    <div class="modal-content">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i
                                class="icon-cross"></i></button>
                        <div class="probootstrap-modal-flex">
                            <div class="probootstrap-modal-figure" style="background-image: url(img/modal_bg.jpg);">
                            </div>
                            <div class="probootstrap-modal-content">
                                <form action="#" class="probootstrap-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password">
                                    </div>
                                    <div class="form-group clearfix mb40">
                                        <label for="remember" class="probootstrap-remember"><input type="checkbox"
                                                id="remember"> Remember
                                            Me</label>
                                        <a href="#" class="probootstrap-forgot">Forgot Password?</a>
                                    </div>
                                    <div class="form-group text-left">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="submit" class="btn btn-primary btn-block" value="Sign In">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group probootstrap-or">
                                        <span><em>or</em></span>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button
                                                    class="btn btn-primary btn-ghost btn-block btn-connect-facebook"><span>connect
                                                        with</span>
                                                    Facebook</button>
                                                <button
                                                    class="btn btn-primary btn-ghost btn-block btn-connect-google"><span>connect
                                                        with</span>
                                                    Google</button>
                                                <button
                                                    class="btn btn-primary btn-ghost btn-block btn-connect-twitter"><span>connect
                                                        with</span>
                                                    Twitter</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fadeInUp probootstrap-animateX" id="signupModal" tabindex="-1" role="dialog"
            aria-labelledby="signupModalLabel" aria-hidden="true">
            <div class="vertical-alignment-helper">
                <div class="modal-dialog modal-md vertical-align-center">
                    <div class="modal-content">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i
                                class="icon-cross"></i></button>
                        <div class="probootstrap-modal-flex">
                            <div class="probootstrap-modal-figure" style="background-image: url(img/modal_bg.jpg);">
                            </div>
                            <div class="probootstrap-modal-content">
                                <form action="#" class="probootstrap-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Re-type Password">
                                    </div>
                                    <div class="form-group clearfix mb40">
                                        <label for="remember" class="probootstrap-remember"><input type="checkbox"
                                                id="remember2"> Remember
                                            Me</label>
                                        <a href="#" class="probootstrap-forgot">Forgot Password?</a>
                                    </div>
                                    <div class="form-group text-left">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="submit" class="btn btn-primary btn-block" value="Sign Up">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group probootstrap-or">
                                        <span><em>or</em></span>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button
                                                    class="btn btn-primary btn-ghost btn-block btn-connect-facebook"><span>connect
                                                        with</span>
                                                    Facebook</button>
                                                <button
                                                    class="btn btn-primary btn-ghost btn-block btn-connect-google"><span>connect
                                                        with</span>
                                                    Google</button>
                                                <button
                                                    class="btn btn-primary btn-ghost btn-block btn-connect-twitter"><span>connect
                                                        with</span>
                                                    Twitter</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </span>
</template>

<script>

export default {
    name:'Index',
    methods:{
        doSomething:function(){
            this.$swal({
                type: 'success',
                title: 'Success!',
                text: 'Excellent Work!'
            });      
        },        
        goTo(page){
            this.$router.push(page);
            document.getElementById("navbar-collapse").classList.remove("in");
            document.getElementById("navbar-collapse-menu-btn").classList.add("collapsed");
        }
    },
    mounted(){
        if(this.$store.getters.vxUser.isloggedin)
            document.location.href = '/exchange.html#/search';
    },    
    created() {
        const el = document.createElement('div');
        el.setAttribute('data-app', true);
        document.body.appendChild(el);

        if(this.$router.currentRoute.name === null)
            this.$router.push('home');
    }
}
</script>

<style src="@/assets/css/styles-merged.css"></style>
<style src="@/assets/css/style.min.css"></style>
<style src="@/assets/css/style.css"></style>



