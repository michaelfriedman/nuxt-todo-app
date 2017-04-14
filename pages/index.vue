<template>
  <div>
    <form @submit.prevent="add(task)">
      <input v-model="task " type="text" name="task ">
      <input type="submit" value="add" />
    </form>
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Michael Friedman's Todo List <small>made with Vue / Nuxt</small></h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="flex items-center ph3 pv3 bb b--light-silver">
          <span v-bind:class="{ strike: todo.complete}" class="flex-auto">
            {{ todo.id }}. {{ todo.task }}
            <button @click="remove(todo)"><img src="https://icon.now.sh/trash"></button>
            <button @click="toggle(todo)"><img src="https://icon.now.sh/check"></button>
          </span>
        </li>
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
        'add',
        'remove',
        'toggle'
      ])
    }
  };
</script>
