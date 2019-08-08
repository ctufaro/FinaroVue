<template>
    <span class="mint">
        <v-card>
            <v-tabs fixed-tabs v-model="active_tab">
                <v-tab @change="selectTab(tabs[0].index)">{{tabs[0].name}}</v-tab>
                <v-tab @change="selectTab(tabs[1].index)">{{tabs[1].name}}</v-tab>
            </v-tabs>
            <span v-if="active_tab==tabs[0].index">
                <v-card flat>
                    <v-card-title class="justify-center display-1 text-secondary">Hello there!</v-card-title>
                    <v-stepper v-model="e1">
                        <v-stepper-header>
                            <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step :complete="e1 > 3" step="3"></v-stepper-step>
                        </v-stepper-header>
                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <v-card flat height="210px">
                                    <v-form ref="form1" v-model="validSignUp">
                                        <v-text-field label="E-mail" :rules="[rules.required]" v-model="newSignUp.email"
                                            required></v-text-field>
                                        <v-text-field label="Username" :rules="[rules.required]"
                                            v-model="newSignUp.username" required></v-text-field>
                                        <v-text-field label="Password" :rules="[rules.required]" type="password"
                                            v-model="newSignUp.password" required></v-text-field>
                                    </v-form>
                                </v-card>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <v-card flat height="175px">
                                    <v-alert :value="true" color="#63C394" class="mb-3">
                                        Receive SMS alerts to buy/sell trends (optional).
                                    </v-alert>
                                    <v-text-field type="tel" label="Mobile Number" v-model="newSignUp.mobile"
                                        mask="(###) ### - ####" placeholder="(###) ### - ####">
                                    </v-text-field>
                                </v-card>
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                <v-card flat height="200px" class="trms">
                                    <v-form ref="form2" v-model="validSignUp">
                                        <v-textarea label="Terms of Use"
                                            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
                                        </v-textarea>
                                        <v-checkbox label="I agree to these terms" :rules="[rules.required]"
                                            class="chklbl ml-3" v-model="newSignUp.terms"></v-checkbox>
                                    </v-form>
                                </v-card>
                            </v-stepper-content>
                            <v-stepper-content step="4">
                                <v-card flat height="200px" class="trms">
                                    <v-container grid-list-md text-xs-center class="pa-0 ma-0">
                                        <v-layout row wrap>
                                            <v-flex xs12>
                                                <v-card flat>
                                                    <v-card-text class="px-0 font-weight-bold">
                                                        Thank You! Getting Things Ready...
                                                    </v-card-text>
                                                    <i class="fas fa-heart"></i>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                    <v-card-actions class="justify-center" v-if="this.e1 < 4">
                        <v-btn class="menu-btn ml-2 mr-2" outline flat block @click.prevent="back" v-if="e1>1">Back
                        </v-btn>
                        <v-btn class="menu-btn ml-2 mr-2" outline flat block @click.prevent="signUp">Continue</v-btn>
                    </v-card-actions>
                </v-card>
            </span>
            <span v-if="active_tab==tabs[1].index">
                <v-card>
                    <v-card-title class="justify-center display-1 text-secondary">Welcome back!</v-card-title>
                    <v-card-text>
                        <v-form ref="form3" v-model="validLogin">
                            <v-text-field label="Username" v-model="newLogin.username" required
                                :rules="[rules.required]">
                            </v-text-field>
                            <v-text-field label="Password" type="password" v-model="newLogin.password" required
                                :rules="[rules.required]">
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn class="menu-btn ml-2 mr-2" outline flat block @click.prevent="login">
                            <span v-if="!loading">Log In</span>
                            <v-progress-circular indeterminate color="#63C394" v-if="loading"></v-progress-circular>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </span>
        </v-card>
    </span>
</template>

<script>
export default {
    name:'SignUpIn',
    data: () => ({
        e1: 0,
        active_tab: 1,
        tabs: [
            { index: 0, name: 'Sign Up' },
            { index: 1, name: 'Log In' }
        ],
        newSignUp:{
            username:'',
            email:'',
            password:'',
            mobile:'',
            terms:false
        },
        newLogin:{
            username:'',
            password:''
        },
        
        rules: {
          required: value => !!value || 'Required.'
        },
        validSignUp:false,
        validLogin:false,
        loading:false        
    }),
    methods:{
        selectTab(indx){
            this.active_tab = indx
        },
        login(){
            this.$refs.form3.validate();
            if(this.validLogin){
                this.loading = true;
                this.axios.post(`${this.$hostname}/api/login/user`,
                {
                    username: this.newLogin.username,
                    password: this.newLogin.password,
                }).then(response =>{
                    this.$store.commit('setUserId', {id:response.data.id,
                                                     username:response.data.username,
                                                     balance:response.data.balance,
                                                     email:response.data.email,
                                                     avatar:response.data.avatar,
                                                     isloggedin:true,
                                                     isnewuser:false});
                    this.loading = false;
                    this.$emit('close');
                }).catch(error => {
                    this.loading = false;
                    this.$swal({type: 'error',title: error.response.data.title, text: error.response.data.message});
                }); 
            }
        },
        signUp(){
            if(this.e1 == 1)
                this.$refs.form1.validate()
            if(this.e1 == 3)                
                this.$refs.form2.validate()

            // STEP 1
            if(this.e1 == 1 && this.validSignUp == true) {
                this.e1 = (parseInt(this.e1) + 1);
            // STEP 2
            } else if (this.e1 == 2 && this.validSignUp == true) {
                this.e1 = (parseInt(this.e1) + 1);
            // STEP 3
            } else if (this.e1 == 3 && this.newSignUp.terms == true) { 
                this.e1 = (parseInt(this.e1) + 1);
                this.loading = true;
                this.axios.post(`${this.$hostname}/api/signup/user`,
                {
                    email: this.newSignUp.email,
                    username: this.newSignUp.username,
                    password: this.newSignUp.password,
                    mobile: this.newSignUp.mobile,
                    publickey: '',
                    privatekey: ''
                }).then(response=>{   
                    this.$store.commit('setUserId', {id:response.data.id,
                                                     username:response.data.username,
                                                     balance:response.data.balance,
                                                     email:response.data.email,
                                                     avatar:response.data.avatar,
                                                     isloggedin:true,
                                                     isnewuser:true});
                    this.loading = false;                                 
                    this.$emit('close');
                }).catch(error => {
                    this.loading = false;
                    this.$swal({type: 'error',title: error.response.data.title, text: error.response.data.message});
                });                
            }
        },
        back(){
            if(this.validSignUp)
                this.e1 = (parseInt(this.e1) - 1);                
        },
        reset(){
            this.newSignUp.username = '';
            this.newSignUp.email = '';
            this.newSignUp.password = '';
            this.newSignUp.mobile = '';
            this.newSignUp.terms = false;
            this.newLogin.username = '';
            this.newLogin.password = '';            
            this.validSignUp = false;
            this.validLogin = false;
            this.e1 = 1;
        }
    },
    props:{
        touchClose:Boolean
    },
    watch: {
        touchClose(val) {
            if(val){
                this.reset();
                this.selectTab(0);
            }
        }
    },
    
}
</script>

<style>
.mint .v-stepper {
    -webkit-box-shadow: none;
    box-shadow: none;
}

.mint .v-stepper__content {
    padding-top:0px !important;
}

.mint .v-stepper__header {
    -webkit-box-shadow: none;
    box-shadow: none;
}

.mint .chklbl label {
    top:3px !important;
}

.mint .primary {
    background-color: #63C394 !important;
    border-color: #63C394 !important;
}

.mint .accent {
    background-color: #63C394 !important;
    border-color: #63C394 !important;
}

.mint .menu-btn {
    color: #63C394 !important;
}

.mint .v-alert {
    padding-top:5px !important;
    padding-bottom:5px !important;
}

.mint .trms .v-messages {
    min-height: 0px !important;
}

.mint .fa-heart{
    font-size:60px;
    color:#63C394;
}

/*MOBILE*/
@media (max-width: 768px) {
    .mint .v-card{
        background-color: rgba(255, 255, 255, 0.6)!important;
    }
    .mint .v-stepper{
        background-color: rgba(255, 255, 255, 0.0)!important;
    }
    .mint .v-card .v-card--flat .theme--light.v-sheet{
        background-color: rgba(255, 255, 255, 0.0)!important;
    }    
    .mint input{
        font-size:20px;
    }
    
}

</style>
