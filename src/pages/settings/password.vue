<template>
    <v-card outlined class="rounded-lg" elevation="10">
        <v-card-title>Your Password</v-card-title>

        <v-form class="pl-16 pr-16 pb-10">
        <!-- <alert-success :form="form" :message="$t('password_updated')" /> -->

        <!-- Password -->
            <div class="form-group">
                <v-text-field
                    v-model="form.password"
                    :rules="passwordRules"
                    label="New Password"
                    type="password"
                    class="mb-4"
                    required
                ></v-text-field>
            </div>

            <!-- Password Confirmation -->
            <div class="form-group">
                <v-text-field
                    v-model="form.password_confirmation"
                    :rules="[confirmPasswordRules(form)]"
                    label="Confirm Password"
                    type="password"
                    class="mb-4"
                    required
                ></v-text-field>
            </div>

            <!-- Submit Button -->
            <div class="form-group">
                <v-btn :loading="form.busy" color="success" block>
                    Update
                </v-btn>
            </div>
        </v-form>
    </v-card>
</template>

<script>
import Form from 'vform'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      password: '',
      password_confirmation: ''
    }),
     passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 6 characters',
    ],
    confirmPasswordRules: (form) => {
        if (!form.password_confirmation) {
            return 'Confirm password is required'
        }
        if( form.password != form.password_confirmation ) {
            return 'Password must be same with confirm password'
        }
    }
        
        // v => (v && v == 'ffffff') || 'Password must be same with confirm password',
  }),

  methods: {
    // async update () {
    //   await this.form.patch('/api/settings/password')

    //   this.form.reset()
    // }
  }
}
</script>
