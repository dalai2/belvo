<template>
    <Main/>
</template>
<script>
import Main from './components/main.vue';

export default {
  name: 'App',
  components: {
    Main,
  },
};
const widget = document.createElement('script');
widget.setAttribute('src', 'https://cdn.belvo.io/belvo-widget-1-stable.js');
document.body.appendChild(widget);
</script>
