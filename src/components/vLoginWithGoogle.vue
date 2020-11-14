<template>
  <div class="mb-3">
    <p class="text-center">
      <v-btn 
        class="btn socialbtn btn btn-block btn-social btn-google"
        @click="login"
        color="#ad4983"
        :disabled="!domain"
        block
        outlined
      >
        <template v-if="!$slots.default">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" algin="left">
          {{ buttonText }}
        </template>
        <template v-else>
          <slot></slot>
        </template>
      </v-btn>
    </p>
  </div>
</template>

<script>
// import eventBus from '../plugins/eventBus'

export default {
  name: 'LoginWithGoogle',

  props: {
    domain: {
      type: String,
      default: ''
    },
    auto: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'Sign in with Google'
    },
    onSuccess: {
        type: Function,
        default: (data) => {
            window.location.href = '//' + data.baseUrl + '/token/' + data.token
        }
    },
    redirect: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    url: () => `/oauth/google`
  },

  mounted () {
    window.addEventListener('message', this.onMessage, false)
    // eventBus.$on('loginWithGoogle', () => {
    //   console.log('login with google!')
    //   this.login()
    // })
  },

  beforeDestroy () {
    window.removeEventListener('message', this.onMessage)
  },

  methods: {
    async login () {
      let stateToken = await this.getStateToken()

      const url = await this.$store.dispatch('auth/fetchOauthUrl', {
        provider: 'google',
        domain: this.domain,
        token: stateToken
      })

      if (this.redirect) {
        window.location.href = url
      } else {
        const newWindow = openWindow('', this.$t('login'))
        newWindow.location.href = url
      }

    },

    async getStateToken () {
      return this.$store.dispatch('auth/fetchAuthStateToken')
    },

    /**
     * @param {MessageEvent} e
     */
    onMessage (e) {
      if (e.origin !== window.origin || !(e.data.token || e.data.connected)) {
        return
      }

      this.onSuccess(e.data)
    }
  }
}

/**
 * @param  {Object} options
 * @return {Window}
 */
function openWindow (url, title, options = {}) {
  if (typeof url === 'object') {
    options = url
    url = ''
  }

  options = { url, title, width: 600, height: 720, ...options }

  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top
  const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width
  const height = window.innerHeight || document.documentElement.clientHeight || window.screen.height

  options.left = ((width / 2) - (options.width / 2)) + dualScreenLeft
  options.top = ((height / 2) - (options.height / 2)) + dualScreenTop

  const optionsStr = Object.keys(options).reduce((acc, key) => {
    acc.push(`${key}=${options[key]}`)
    return acc
  }, []).join(',')

  const newWindow = window.open(url, title, optionsStr)

  if (window.focus) {
    newWindow.focus()
  }

  return newWindow
}
</script>
