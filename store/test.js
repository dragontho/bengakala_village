import axios from 'axios'

export const state = () => ({
  list: [],
  newsdata: { new_status: false }
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
  updatenews(state, data) {
    state.newsdata = data
  }
}

export const actions = {
  action_add(context, text) {
    context.commit('add', text)
  },
  fetchnews(context) {
    return axios.get('https://api.github.com/users/nwjbrandon').then(res => {
      context.commit('updatenews', res)
    })
  },
  print1(context) {
    return axios.get('/api/test1/user').then(res => {
      context.commit('updatenews', res)
    })
  },
  print2(context) {
    return axios.get('/api/test2/user').then(res => {
      context.commit('updatenews', res)
    })
  }
}
