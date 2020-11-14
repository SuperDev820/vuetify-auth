<template>
    <v-row
        style="height: 100%"
    >
        <v-col
            cols="12"
            sm="6"
            lg="4"
            class="ma-auto mt-10"
        >
            <v-card
                class="pt-2 pb-2 pl-15 pr-15"
                elevation="15"
            >
                <v-card-title
                    class="mt-3 mb-3 flex-column justify-center"
                >
                    <h1 class="mt-auto">Welcome</h1>
             <!--        <v-img
                        class="ma-auto"
                        max-height="221"
                        max-width="250"
                        src="logo.png"
                    ></v-img> -->
                </v-card-title>

         <!--        <v-card-subtitle class="mt-0">
                    Create your account
                </v-card-subtitle> -->
                
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >

                    <v-text-field
                        v-model="form.companyname"
                        :rules="nameRules"
                        label="Compony Name"
                        class="mb-4"
                        required
                    ></v-text-field>
              <!--       <div class="text-right">
                        <v-input
                            v-if="domain.edit" v-model="form.domain" v-focus
                            class="main tx-tfm-lower"
                            type="text"
                            name="company_name"
                            :class="{ 'is-invalid': form.errors.has('domain') }"
                            @blur="domain.edit = false; $emit('update')"
                            @keyup.enter="domain.edit=false; $emit('update')"
                        ></v-input>
                        <div v-else>
                            <a class="main tx-tfm-lower" :href="`https://${form.domain ? form.domain : form.companyname}.plany.io`">{{ form.domain ? form.domain :form.companyname }}.plany.io</a>
                            <v-btn
                                icon
                                color="#ad4983"
                                @click="domain.edit = true;" 
                            >
                                <v-icon>mdi-star</v-icon>
                            </v-btn>
                            <fa class="main" :icon="['fas', 'edit']"/>
                        </div>
                    </div> -->
                    <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    label="Email Address"
                    class="mb-4"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="form.password"
                    :rules="passwordRules"
                    label="Set Password"
                    :type="'password'"
                    class="mb-4"
                    required
                    ></v-text-field>
                

                    <v-btn
                    :disabled="!valid"
                    color="#ad4983"
                    class="mb-4"
                    elevation="3"
                    @click="validate"
                    :loading="form.busy"
                    block
                    >
                    <span style="color:white">Sign up</span>
                    </v-btn>
                   <!--  <div class="mb-4">
                        <p class="text-center">
                        By sign up your account you agree with plany's <a href="#">Privacy Policy</a> and <a href="#">Terms of use</a>.
                        </p>
                    </div> -->
                    <or-divider></or-divider>
                    <login-with-google block />
                    <div class="mb-4">
                        <p class="text-left">
                        Already have an account? <router-link to="/login">Sign in</router-link>
                        </p>
                    </div>
                </v-form>
            </v-card> 
        </v-col>
        
    </v-row>
</template>

<script>
    import * as axios from "axios";
    import Form from 'vform';
    import LoginWithGoogle from '../components/vLoginWithGoogle'
    import OrDivider from '../components/OrDivider'

    export default {
        name: 'Register',
        components: {
            LoginWithGoogle,
            OrDivider
        },
        data: () => ({
            form: new Form({
                company_name: '',
                domain: '',
                email: '',
                password: ''
            }),
            domain: { edit: false },
            mustVerifyEmail: false,
            domainError: false,
            domainErrorMessage: null,
            valid: true,
            nameRules: [
                v => !!v || 'Company Name is required',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be more than 6 characters',
            ]
        }),

        methods: {
            validate () {
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
            async register () {
            // Register the user.
                const { data } = await this.form.post('/api/register')

                // Must verify email fist.
                if (data.status) {
                    this.mustVerifyEmail = true
                } else {
                    // Log in the user.
                    const { data: { token } } = await this.form.post('//' + data.base_url + '/api/login')

                    window.location.href = '//' + data.base_url + '/token/' + token
                }
            },
            async verifyDomain () {
                let { data } = await axios.post('/api/domain/verify', { domain: this.form.domain })
                if (data.available) {
                    this.domainError = false
                    this.domainErrorMessage = null
                } else {
                    this.domainError = true
                    this.domainErrorMessage = 'Domain is already taken.'
                }
            }
        },
    }
</script>