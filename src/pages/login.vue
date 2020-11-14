<template>
    <v-row class="mt-10">
        <v-col lg="4" md="6" sm="8" class="ma-auto">
            <v-card class="pt-2 pb-2 pl-15 pr-15" elevation="15">
                <v-card-title class="mt-3 mb-3 flex-column justify-center">
                    <h1>Welcome</h1>
                    <!-- <div class="text-center">
                        domain
                        <h5>{{ domainName }}</h5>
                    </div> -->
                    <!-- <h5 class="mt-2">domainName</h5> -->
                </v-card-title>
                
                <v-form @submit.prevent="login" @keydown="form.onKeydown($event)">
                    
                    <div class="form-group">
                        <v-text-field
                            v-model="form.email"
                            :rules="emailRules"
                            label="Email Address"
                            class="mb-4"
                            required
                        ></v-text-field>
                    </div>
                    <div class="form-group">
                       <v-text-field
                            v-model="form.password"
                            :rules="passwordRules"
                            label="Input Password"
                            :type="'password'"
                            class="mb-4"
                            required
                        ></v-text-field>
                    </div>
                    <!-- Remember Me -->
                    <div class="form-group">
                        <v-checkbox v-model="remember" label="Remenber Me" name="remember">
                        <!-- {{ $t('remember_me') }} -->
                        </v-checkbox>
                    </div>
                    <div class="form-group">
                        <v-btn class="mainbtn" type="submit" block >Log in</v-btn>
                    </div>
                    <or-divider></or-divider>
                    <login-with-google block />
                    <div class="form-group">
                        <p class="text-left">
                            <span>Don't an have account? </span>
                            <router-link to="/register">Sign up</router-link>
                        </p>
                    </div>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</template>

<style>
</style>

<script>
    import Form from 'vform'
    import OrDivider from "../components/OrDivider"
    import LoginWithGoogle from '../components/vLoginWithGoogle'
    // import LoginWithGithub from '~/components/LoginWithGithub'

    export default {
        name: 'Login',
        middleware: 'guest',

        components: {
            OrDivider,
            LoginWithGoogle
        },

        metaInfo () {
            // return { title: this.$t('login') }
        },

        data: () => ({
            form: new Form({
            email: '',
            password: '',
            }),
            remember: false,
            domainError: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be more than 6 characters',
            ]
        }),

        computed: {
            // domainName () {
            //   return window.config.tenantDomain + '.' + window.config.centralDomain;
            // }
        },

        methods: {
            login () {
        // Submit the form.
                // const { data } = await this.form.post('/api/login')

                // check auth 

                
                // if (data.token) {                  // success
                //     // Save the token.
                //     await this.$store.dispatch('auth/saveToken', {
                //     token: data.token,
                //     remember: this.remember
                //     })
                //     // Fetch the user.
                //     await this.$store.dispatch('auth/fetchUser')
                //     // Redirect home.
                //     this.$router.push({ name: 'verification.invite' })
                // } else if (data.status == 'We have e-mailed your verification link!') { // sent email but not confirm

                //     // this.$router.push({ name: 'verification.confirm' });
                //     await this.$store.dispatch('auth/saveVerifyEmail',{ verifyEmail: data.email})
                //     this.$router.push({ name: 'verification.confirm' });
                // }
            },
            signInWithGoogle () {
            // TODO: fetch this URL dynamically
            //   window.location.href = '//register.' + window.config.centralDomain + '/login/oauth/google/' + window.config.tenantDomain
            },
            domainValidated () {
                return this.domainError ? null : "this.form.domain"
            }
        }   
    }
</script>

<style scoped>
    .form-group {
        margin-bottom :1rem
    }
    .mainbtn {
        background-color: #ad4983 !important;
        color: white !important;
    }
</style>
