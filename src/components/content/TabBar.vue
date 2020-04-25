<template>
  <div id="tag-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  
}
</script>

<style>
  #tag-bar {
  display: flex;
  background-color: #fbf4f4;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 5px rgba(100, 100, 100, 0.15);
  }
</style>