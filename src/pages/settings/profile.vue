<template>
    <v-card class="pa-5 rounded-lg" elevation="10" outlined>
        <v-card-title>Your Profile</v-card-title>
        <v-form class="pl-16 pr-16 pb-10">
            <!-- <alert-success :form="form" :message="$t('info_updated')" /> -->
            <!-- <v-alert type="success" >{{info_updated}}</v-alert> -->
        <!-- Name -->
            <div class="form-group">
            <v-text-field
                v-model="form.companyname"
                :rules="nameRules"
                label="Compony Name"
                class="mb-4"
                required
            ></v-text-field>
        </div>

        <!-- Email -->
        <div class="form-group">
            <v-text-field
                v-model="form.email"
                :rules="emailRules"
                label="Email"
                class="mb-4"
                required
            ></v-text-field>
        </div>

        <!-- Submit Button -->
        <div class="form-group">
            <v-btn
                color="primary"
                class="mb-4"
                elevation="3"
                :loading="form.busy"
                block
            >
                Update
            </v-btn>
        </div>
        </v-form>
    </v-card>
</template>

<script>
import Form from 'vform'
// import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

//   metaInfo () {
//     return { title: this.$t('settings') }
//   },

  data: () => ({
    form: new Form({
      companyname: '',
      email: ''
    }),
    nameRules: [
        v => !!v || 'Company Name is required',
    ],
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),

//   computed: mapGetters({
//     user: 'auth/user'
//   }),

//   created () {
//     // Fill the form with user data.
//     this.form.keys().forEach(key => {
//       this.form[key] = this.user[key]
//     })
//   },

//   methods: {
//     async update () {
//       const { data } = await this.form.patch('/api/settings/profile')

//       this.$store.dispatch('auth/updateUser', { user: data })
//     }
//   }
}
</script>
