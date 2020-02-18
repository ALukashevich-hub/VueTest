<template>
      <div @click="$emit('changeShowMenu')" class="buttonMenuOpen">
      </div>
</template>

<script>
export default {
  name: 'ButtonShowMenu',
};
</script>

<style lang="scss" scoped>

.buttonMenuOpen{
    border: 1px solid red;
    width: 50px;
    height: 50px;
}
</style>
