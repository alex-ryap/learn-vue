Vue.component('search', {
  template: `
    <form action="#" class="search-form">
      <input type="text" class="search-field" v-model="$root.userSearch"/>
      <button type="submit" class="btn-search" @click="$root.filter">
        <i class="fas fa-search"></i>
      </button>
    </form>
  `,
});
