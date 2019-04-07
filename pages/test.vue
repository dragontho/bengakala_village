<template>
  <v-layout column justify-center align-center>
    <!--Example of using vuetify-->
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline"
          >Welcome to the test webapge</v-card-title
        >
        <v-card-text>
          <p>
            This framework consists of nuxtjs, vuetify, expressjs, axios,
            eslint, and jest installed.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; Brandon</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <!--Example on how to create a method-->
    <v-flex xs12 sm8 md6>
      <v-btn color="primary" flat nuxt @click="increment_count">
        Click me !
      </v-btn>
      <p>{{ text_msg }} {{ click }}</p>
    </v-flex>
    <!--Example on how to change state-->
    <v-flex xs12 sm8 md6>
      <ul>
        <li v-for="todo in todos" v-bind:key="todo">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <li>
          <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
        </li>
      </ul>
    </v-flex>
    <!--Example on network request-->
    <v-flex xs12 sm8 md6>
      <v-btn color="primary" flat nuxt @click="get_news">
        Click me to get news!
      </v-btn>
      <v-btn color="primary" flat nuxt @click="get_user1">
        Click me to get user1!
      </v-btn>
      <v-btn color="primary" flat nuxt @click="get_user2">
        Click me to get user2!
      </v-btn>
    </v-flex>
    <v-flex xs12 sm8 md6>
      {{ newsdata }}
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  // example of creating a layout
  layout: 'test',
  data() {
    return {
      text_msg: 'Number of clicks: ',
      click: 0
    }
  },
  computed: {
    todos() {
      return this.$store.state.test.list
    },
    newsdata() {
      return this.$store.state.test.newsdata
    }
  },
  methods: {
    increment_count() {
      this.click++
    },
    addTodo(e) {
      this.$store.dispatch('test/action_add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'test/toggle'
    }),
    get_news() {
      this.$store.dispatch('test/fetchnews')
    },
    get_user1() {
      this.$store.dispatch('test/print1')
    },
    get_user2() {
      this.$store.dispatch('test/print2')
    }
  }
}
</script>
