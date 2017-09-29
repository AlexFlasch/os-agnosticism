<style scoped lang="scss">
@import '../scss/palette';;
@import '../scss/mixins';

@keyframes gradient {
  to {
    background-position: 200% center;
  }
}

.slide-title {
  font-family: 'Mogra';
  font-size: 3.5em;
  color: $green;
  height: 7.5%;
  
  @include text-gradient(
    'linear-gradient(45deg,
      #{$green}, \
      #{$teal}, \
      #{$medium-blue}, \
      #{$dark-blue}, \
      #{$medium-blue}, \
      #{$teal}, \
      #{$green})'
  );
  
  padding-top: 2.5%;
  padding-left: 2.5%;
  
  background-size: 200% auto;
  background-position: 0% center;
  
  animation: gradient 120s linear infinite;
}
</style>

<template>
  <div class="slide-title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SlideTitle',
};
</script>
