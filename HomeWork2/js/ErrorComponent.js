Vue.component('error', {
  template: `
  <div class="error" v-show="$root.error">
    <h3 class="error__title">
      <i class="error__icon fas fa-exclamation-triangle"></i>
      Error connection
    </h3>
    <p class="error__text">Error connect to Server. Please check your network connection.</p>
  </div>
  `,
});
