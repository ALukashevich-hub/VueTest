<template>
  <main :class="$style.Contacts">
    <h1 :class="$style.test5">This is an about page</h1>
    <p :class="$style.test1">Почта хххххх@tut.by</p>
    <p :class="$style.test1">Телефон ХХХХХХХХХХ</p>
    <p :class="$style.test1">обратная связь</p>
    <form :class="$style.test" action="">
      <input type="text" name="" id="" placeholder="Имя" :class="$style.test2">
      <input type="text" name="" id="" placeholder="Фамилия" :class="$style.test2">
      <input type="tel" name="" id="" placeholder="Телефон" :class="$style.test2">
      <input type="email" name="" id="" placeholder="Почта" :class="$style.test2">
      <input type="text" name="" id="" placeholder="Тема" :class="$style.test3">
      <textarea name=""
      id=""
      rows="5"
      placeholder="Запрос"
      :class="$style.test3"></textarea>
    </form>
  </main>
</template>
<style lang="scss" module>
.Contacts {
  height: 100%;
  width: 100%;
  color: var(--main-text-color);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.test {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 50%;
}
.test1 {
  margin: 0 0 1rem 0;
  font-size: var(--font-size-xs);
}
.test2 {
  width: 49%;
  margin-bottom: 1rem;
  box-sizing: border-box;
  background: transparent;
  color: #ffffff;
  outline: none;
}
.test3 {
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
  background: transparent;
  color: #ffffff;
  outline: none;
}
.test5 {
  margin: 0 0 1rem 0;
  font-size: var(--font-size-lg);
}
</style>
