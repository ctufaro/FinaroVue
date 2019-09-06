<template>
    <span>
        <section class="probootstrap-hero probootstrap-xs-hero probootstrap-hero-colored">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 text-left probootstrap-hero-text">
                        <h1 class="probootstrap-animateX" data-animate-effect="fadeIn">Contact Us</h1>
                        <p class="probootstrap-animateX" data-animate-effect="fadeIn">Interested in learning more about trndx?
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="probootstrap-section probootstrap-bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 probootstrap-animateX contact-form" data-animate-effect="fadeIn">
                        <h2 v-if="loading" @click.prevent="loading=false;">Thanks for the feedback <i class="fas fa-heart"></i></h2>
                        <h2 v-if="!loading">Drop us a line</h2>
                        <form class="probootstrap-form" v-if="!loading">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" name="email" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject" v-model="subject">
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea cols="30" rows="10" class="form-control" id="message"
                                    name="message" v-model="message"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary btn-lg" @click.prevent="sendEmail" value="Submit">
                                <!--<v-progress-circular indeterminate color="#63C394" v-if="loading" style="margin-left:26px;"></v-progress-circular>-->
                            </div>
                        </form>
                    </div>
                    <div v-if="false" class="col-md-6 col-md-push-1 probootstrap-animateX" data-animate-effect="fadeIn">
                        <h2>Get in touch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus
                            quos quibusdam soluta at.</p>
                        <h4>USA</h4>
                        <ul class="probootstrap-contact-info">
                            <li><i class="icon-pin"></i> <span>198 West 21th Street, Suite 721 New York NY 10016</span>
                            </li>
                            <li><i class="icon-email"></i><span><a href="/cdn-cgi/l/email-protection"
                                        class="__cf_email__"
                                        data-cfemail="422b2c242d02262d2f232b2c6c212d2f">[email&#160;protected]</a></span>
                            </li>
                            <li><i class="icon-phone"></i><span>+123 456 7890</span></li>
                        </ul>
                        <h4>Europe</h4>
                        <ul class="probootstrap-contact-info">
                            <li><i class="icon-pin"></i> <span>198 West 21th Street, Suite 721 New York NY 10016</span>
                            </li>
                            <li><i class="icon-email"></i><span><a href="/cdn-cgi/l/email-protection"
                                        class="__cf_email__"
                                        data-cfemail="83eaede5ecc3e7eceee2eaedade0ecee">[email&#160;protected]</a></span>
                            </li>
                            <li><i class="icon-phone"></i><span>+123 456 7890</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </span>
</template>
<script>
export default {
    name:'Contact',
    data: () => ({
        email: '',
        subject: '',
        message: '',
        loading: false
    }),
    methods:{
        sendEmail(){        
            if(!this.validEmail(this.email)) return;            
            this.loading = true;
            this.axios.post(`${this.$hostname}/api/email`,
            {
                email: this.email,
                subject: this.subject,
                message: this.message
            }).then(()=>{                
                this.email = '';
                this.subject = '';
                this.message = '';
            });
        },
        validEmail(email){
            // eslint-disable-next-line 
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }
}
</script>
<style>
.contact-form .fa-heart{
    font-size:20px;
    color:#63C394;
}
</style>