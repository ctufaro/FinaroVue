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
                        </v-stepper-header>
                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <v-card flat height="175px">
                                    <v-form ref="form" lazy-validation>
                                        <v-text-field label="Name" required>
                                        </v-text-field>
                                        <v-text-field label="E-mail" required>
                                        </v-text-field>
                                    </v-form>
                                </v-card>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <v-card flat height="175px">
                                    Something Else Here
                                </v-card>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                    <v-card-actions class="justify-center">
                        <v-btn class="menu-btn ml-2 mr-2" outline flat block>Continue</v-btn>
                    </v-card-actions>
                </v-card>
            </span>
            <span v-if="active_tab==tabs[1].index">
                <v-card>
                    <v-card-title class="headline justify-center">Log in to trndx</v-card-title>
                    <v-card-text>
                        <v-form ref="form" lazy-validation>
                            <v-text-field label="Username" required>
                            </v-text-field>
                            <v-text-field label="Password" required>
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn class="menu-btn ml-2 mr-2" outline flat block>Log In</v-btn>                       
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
            { index: 0, name: 'Sign-Up' },
            { index: 1, name: 'Log In' }
        ]
    }),
    methods:{
        selectTab(indx){
            this.active_tab = indx
        }
    }
}
</script>

<style>
.mint .v-stepper{
    -webkit-box-shadow: none;
    box-shadow: none;
}

.mint .v-stepper__header{
    -webkit-box-shadow: none;
    box-shadow: none;
}

.mint .primary{
    background-color: #63C394 !important;
    border-color: #63C394 !important;
}

.mint .accent{
    background-color: #63C394 !important;
    border-color: #63C394 !important;
}
</style>
