export const state = {
  todos: [
  { task: 'eat' },
  { task: 'walk the dog' },
  { task: 'get hired as senior dev' },
  { task: 'code' },
  { task: 'sleep' }
  ]
};

export const mutations = {
  increment (state) {
    state.counter++;
  },

  decrement (state) {
    state.counter--;
  }
};
