<template>
      <div @click="$emit('hideMenu')" class="buttonMenuClose">
      </div>
</template>

<script>
export default {
  name: 'ButtonHideMenu',
};
</script>

<style lang="scss" scoped>

.buttonMenuClose{
    border: 1px solid yellow;
    width: 50px;
    height: 50px;
}
</style>
