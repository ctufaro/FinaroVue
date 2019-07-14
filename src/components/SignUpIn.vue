<template>
    <span class="mint">
        <v-card>
            <v-tabs fixed-tabs v-model="active_tab">
                <v-tab @change="selectTab(tabs[0].index)">{{tabs[0].name}}</v-tab>
                <v-tab @change="selectTab(tabs[1].index)">{{tabs[1].name}}</v-tab>
            </v-tabs>
            <span v-if="active_tab==tabs[0].index">
                <v-card flat>
                    <v-card-title class="headline">{{active_tab_header}}</v-card-title>
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
                                <v-card flat height="200px">
                                    <v-form ref="form" lazy-validation>
                                        <v-text-field label="E-mail" v-model="email" required></v-text-field>
                                        <v-text-field label="Username" v-model="username" required></v-text-field>
                                        <v-text-field label="Password" type="password" v-model="password" required></v-text-field>
                                    </v-form>
                                </v-card>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <v-card flat height="175px">
                                    <v-alert :value="true" color="#63C394" type="warning">
                                        I love Rose Penelope with all my heart and soul.
                                    </v-alert>
                                    <v-text-field label="Mobile Number" v-model="mobile" mask="(###) ### - ####" placeholder="(###) ### - ####"></v-text-field>
                                </v-card>
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                <v-card flat height="195px">
                                    <v-textarea label="Terms of Use" flat value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></v-textarea>                                    
                                    <v-checkbox label="I agree to these terms" class="chklbl"></v-checkbox>
                                </v-card>
                            </v-stepper-content>                            
                        </v-stepper-items>
                    </v-stepper>
                    <v-card-actions class="justify-center">
                        <v-btn class="menu-btn ml-2 mr-2" outline flat block @click.prevent="back" v-if="e1>1">Back</v-btn>
                        <v-btn class="menu-btn ml-2 mr-2" outline flat block @click.prevent="signUp">Continue</v-btn>
                    </v-card-actions>
                </v-card>
            </span>
            <span v-if="active_tab==tabs[1].index">
                <v-card>
                    <v-card-title class="headline justify-center">Log in to trndx</v-card-title>
                    <v-card-text>
                        <v-form ref="form" lazy-validation>
                            <v-text-field label="E-mail" v-model="email" required>
                            </v-text-field>
                            <v-text-field label="Password" type="password" v-model="password" required>
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn class="menu-btn ml-2 mr-2" outline flat block @click.prevent="login">Log In</v-btn>                       
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
        active_tab: 0,
        active_tab_header: 'Sign Up',
        tabs: [
            { index: 0, name: 'Sign Up' },
            { index: 1, name: 'Log In' }
        ],
        username:'',
        email:'',
        password:'',
        mobile:''        
    }),
    methods:{
        selectTab(indx){
            this.active_tab = indx
        },
        login(){
            //localStorage.name = this.username;
            //this.$emit('close');
            //console.log(`${this.username} ${this.password}`);            
        },
        signUp(){
            this.e1 = (parseInt(this.e1) + 1);
            if(this.e1 > 3){
                this.e1 = 1;
            }
        },
        back(){
            this.e1 = (parseInt(this.e1) - 1);                
        }
    }
}
</script>

<style>
.mint .v-stepper{
    -webkit-box-shadow: none;
    box-shadow: none;
}

.mint .v-stepper__content{
    padding-top:0px !important;
}

.mint .v-stepper__header{
    -webkit-box-shadow: none;
    box-shadow: none;
}

.mint .chklbl label{
    top:3px !important;
}

.mint .primary{
    background-color: #63C394 !important;
    border-color: #63C394 !important;
}

.mint .accent{
    background-color: #63C394 !important;
    border-color: #63C394 !important;
}

.mint .menu-btn{
    color: #63C394 !important;
}
</style>
