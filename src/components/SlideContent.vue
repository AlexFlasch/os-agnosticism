<style scoped lang="scss">
@import '../scss/palette';

.slide-content {
  position: relative;
  
  padding: 2.5%;
  padding-top: 0;
  padding-bottom: 0;
  
  font-family: 'Quicksand';
  color: $dark-blue;
  font-size: 1.5em;
  text-align: center;
  
  height: 92.5%;
}

.img-container {
  display: table;
  float: right;
  padding: 2.5%;
  padding-right: 0;
  
  width: 25%;
  
  overflow-x: hidden;
  
  &.lg {
    width: 45%;
  }
  
  img {
    width: 100%;
    height: auto;
  }
  
  .caption {
    display: table-caption;
    caption-side: bottom;
    
    color: $teal;
    font-size: 0.65em;
  }
}
</style>

<template>
  <div class="slide-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SlideContent',
};
</script>
