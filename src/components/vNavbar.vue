<template>
    <v-app-bar
        class="rounded-pill"
        height="40"
        color="pink"
    >
        <v-img
            class="ml-2"
            contain
            lazy-src="https://picsum.photos/id/11/10/6"
            height="30"
            max-width="30"
            src="plany_fav_2.png"
        ></v-img>

        <v-btn
            class="ml-5"
            color="white"
            elevation="2"
            height="30"
            outlined
            rounded
        >
            New
            <v-icon>
                mdi-plus
            </v-icon>
        </v-btn>

        <v-menu
            class="float-right"
            offset-y
            v-for="(menu, i) in leftMenus"
            :key="i+100"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    dark
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>{{menu.icon}}</v-icon>
                </v-btn>
            </template>

            <v-list v-if="menu.items">
                <v-list-item
                    v-for="item in menu.items"
                    :key="item.text"
                    link
                >
                    <v-list-item-title
                        class="d-flex align-center"
                    >
                        <v-icon>{{ item.icon }}</v-icon>
                        <div class="ml-1">{{ item.text }}</div>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-menu
            class="float-right"
            offset-y
            v-for="(menu, i) in rightMenus"
            :key="i"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    dark
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>{{menu.icon}}</v-icon>
                </v-btn>
            </template>

            <v-list v-if="menu.items">
                <div
                    v-for="(item, i) in menu.items"
                :key="i">
                    <v-divider v-if="item=='divider'"></v-divider>
                    <v-list-item
                        v-else
                        link
                    >
                        <v-list-item-title
                            class="d-flex align-center"
                        >
                            <v-icon>{{ item.icon }}</v-icon>
                            <div class="ml-1">{{ item.text }}</div>
                        </v-list-item-title>
                    </v-list-item>
                </div>
            </v-list>
        </v-menu>
        
    </v-app-bar>
</template>

<script>
// import { mapGetters } from 'vuex'
// import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    // LocaleDropdown
  },

  data: () => ({
    // appName: window.config.appName,
    leftMenus: [
        { icon: 'mdi-format-list-bulleted'},
        { icon: 'mdi-table'},
        { icon: 'mdi-archive'},
        { icon: 'mdi-archive'}
    ],
    rightMenus: [
        {
            icon: 'mdi-format-list-bulleted',
        },
        { icon: 'mdi-cube'},
        { icon: 'mdi-hammer'},
        {
            icon: 'mdi-menu-down',
            items: [
                { icon: 'mdi-cog', text: 'Settings'},
                { icon: 'mdi-account', text: 'Profile Settings'},
                { icon: 'mdi-account', text: 'Users'},
                'divider',
                { icon: 'mdi-account', text: 'Settins'},
                { icon: 'mdi-account', text: 'Library'},
                { icon: 'mdi-account', text: 'Tags'},
                'divider',
                { icon: 'mdi-account', text: 'Billing'},
                'divider',
                { icon: 'mdi-account', text: 'Knowledge base'},
                { icon: 'mdi-account', text: 'Logout'}
            ]
        }
    ]
  }),

  computed: {
    // isTenant () {
    //   return window.config.isTenant
    // },
    // loginDisplayName () {
    //   return this.user.username
    // },
    // ...mapGetters({
    //   user: 'auth/user'
    // })
  },

  methods: {
    // async logout () {
    //   // Log out the user.
    //   await this.$store.dispatch('auth/logout')

    //   // Redirect to login.
    //   this.$router.push({ name: 'login' })
    // }
  }
}
</script>
