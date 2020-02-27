<template>
  <div class="wrap">
      <div class="left">

      </div>
      <div class="right">
        <h1 class="title">TEST</h1>
        <p>Lorem ipsum dolor sit amet
           consectetur adipisicing elit.
           Itaque placeat possimus dolo
           remque consectetur nihil sapiente</p>
        <p>Lorem ipsum dolor sit amet
           consectetur adipisicing elit.
           Itaque placeat possimus dolo</p>
        <p>Lorem ipsum dolor sit amet
           consectetur adipisicing elit</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Specific',
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column-reverse nowrap;
  color: white;
}
.left {
  border: 1px solid orange;
  flex: 1;
}
.right {
    border: 1px solid red;
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
}
p {
  margin: 1rem;
  font-size: 1.5rem;
}
.title {
  margin: 5rem 1rem 1rem 1rem;
}
@media (min-width: 767px) {
  p {
    font-size: 1.5rem;
    max-width: 90%;
  }
  .wrap {
    flex-flow: row nowrap;
  }
  .right {
    justify-content: center;
  }
  .title {
  margin: 1rem;
}
}
@media (min-width: 1023px) {
  p {
    font-size: 1.7rem;
    max-width: 80%;
  }
}
</style>
