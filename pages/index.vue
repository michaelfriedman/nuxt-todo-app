<template>
  <div>
    <form @submit.prevent="add(task)">
      <input v-model="task " type="text" name="task ">
      <button>Submit</button>
    </form>
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Michael Friedman's Todo List <small>made with Vue / Nuxt</small></h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="ph3 pv3 bb b--light-silver">{{ todo.task}}</li>
      </ul>
    </article>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import axios from 'axios';

  export default {

    async fetch ({ store, redirect }) {
      try {
        const res = await axios.get('https://todos-fpqdaxkgqt.now.sh/todos');
        store.commit('init', res.data);
      } catch (error) {
        redirect('/error');
      }
    },
    data () {
      return {
        task: 'some task'
      };
    },
    computed: {
      ...mapState({
        todos: state => state.todos
      })
    },
    methods: {
      ...mapActions([
        'add'
      ])
    }
  };
</script>
