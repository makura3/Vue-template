<template>
  <div>
    {{ topMessage }}
    <Btn :text='getText' @click='getCats' />
    <Btn :text='setText' @click='setDataAction' />

    <div>
      <!-- text -->
      <p>
        <input type="text" v-model="inputText">
        {{inputText}}
      </p>
      <!-- checkbox -->
      <p>
        <input type="checkbox" v-model="checked">
        {{checked ? "yes" : "no"}}
      </p>
      <!-- radio buttons -->
      <p>
        <input type="radio" name="picked" value="one" v-model="picked">
        <input type="radio" name="picked" value="two" v-model="picked">
        {{picked}}
      </p>
      <!-- select -->
      <p>
        <select v-model="selected">
          <option>one</option>
          <option>two</option>
        </select>
        {{selected}}
      </p>
      <!-- multiple select -->
      <p>
        <select v-model="multiSelect" multiple>
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </select>
        {{multiSelect}}
      </p>
      <Btn :text='setText' @click='clickSearchBtn(inputText)' />
    </div>

    <div id="nav">
      <router-link to="/about">About</router-link>
    </div>

    <div v-if='isLoading'>
      ローディング中
    </div>
    <div v-else>
      <div v-for="(data, index) in getCats" :key="index">
        <router-link :to="{ name : 'cat', params : { id: data.id }}">{{ data.name }}のページ</router-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Btn from './../components/atoms/Button'

export default {
  name: 'home',
  components: {
    Btn
  },
  data: function() {
    return {
      topMessage: 'Hello world!',
      getText: '情報取得',
      setText: '情報送信',
      inputText: 'hello',
      checked: false,
      picked: 'one',
      selected: 'two',
      multiSelect: ['one', 'three'],
      isLoading: false,
      errorText: ''
    }
  },
  methods: {
    ...mapActions('catStore', {
      setDataAction: 'setDataAction',
      search: 'search'
    }),
    clickSearchBtn: function(inputText) {
      this.isLoading = true
      this.search(inputText).then(() => {
        this.isLoading = false
      })
    }
  },
  computed: {
    ...mapGetters('catStore', {
      getCats: 'getCats'
    })
  }
}
</script>
