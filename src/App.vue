<template>
    <div id="belvo"></div> <!-- anywhere inside the body -->
</template>
<script>

export default {
  name: 'App',
};
const widget = document.createElement('script');
widget.setAttribute('src', 'https://cdn.belvo.io/belvo-widget-1-stable.js');
document.body.appendChild(widget);
</script>
