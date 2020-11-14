<template>
    <v-row>
        <v-col md=3>
            <v-card elevation="10"
                class="mx-auto mb-0 pb-0 rounded-lg"
                max-width="300"
                outlined
                tile
            >
                <v-card-title>
                    Settings
                </v-card-title>
                <v-list dense class="pa-0">
                    <v-list-item-group
                        color="primary"
                    >
                        
                        <template v-for="(item, i) in tabs" >
                            <v-list-item :key="i"
                            >
                                
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <router-link :to="{ name: item.route }" class="nav-link" active-class="active">
                                        {{item.name}}
                                    </router-link>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-col>

        <v-col md="9">
            <transition name="fade" mode="out-in">
                <profile/>
                <!-- <router-view /> -->
            </transition>
        </v-col>
    </v-row>
</template>

<script>
import Profile from './profile.vue'

export default {
//   middleware: 'auth',
    components: {
        Profile
    },
    data: () => ({
        
    }),

  computed: {
    tabs () {
      return [
        {
          icon: 'mdi-account',
          name: 'Profile',
          route: 'settings.profile'
        },
        {
          icon: 'mdi-lock',
          name: 'Password',
          route: 'settings.password'
        }
      ]
    }
  }
}
</script>

<style>
.settings-card .card-body {
  padding: 0;
}
</style>
