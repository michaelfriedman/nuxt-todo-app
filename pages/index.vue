<template>
  <div>
    <nav class="flex justify-center-l">
      <nuxt-link exact class="link dim gray f6 f5-ns dib mr3" to="/" title="Home">Home</nuxt-link>
      <nuxt-link class="link dim gray f6 f5-ns dib mr3" to="/active" title="Active">Active</nuxt-link>
      <nuxt-link class="link dim gray f6 f5-ns dib mr3" to="/completed" title="Completed">Completed</nuxt-link>
    </nav>
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Michael Friedman's Todo List <small>made with Vue / Nuxt</small></h1>
      <form class="f4 center mw6 flex justify-center-l" @submit.prevent="add(task)">
        <input class="justify-center-l" v-model="task " type="text" name="task ">
        <input type="submit" value="add" />
      </form>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="flex items-center ph3 pv3 bb b--light-silver">
          <span v-bind:class="{ strike: todo.complete }" class="flex-auto">
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
  import { init } from './shared';
  import { mapState, mapActions } from 'vuex';

  export default {
    fetch: init,
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
<style>
a.nuxt-link-active
{
  color: black;
  font-weight: bold;
}
</style>
