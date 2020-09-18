<template>
    <div class="ops">
        <p class="opsText">Ой, кажется вы не туда попали</p>
    </div>
</template>

<script>
export default {
  name: 'NotFoundComponent',
};
</script>

<style>
.ops {
    display: flex;
    width: 70%;
    height: 100%;
    color: #fff;
    text-align: center;
    margin: auto;
}
.opsText{
    margin: auto;
    font-size: 3rem;
}
</style>
