<template>
  <main :class="$style.Contacts">
    <h1 :class="$style.headText">Контакты</h1>
    <p :class="$style.someText">Почта: хххххх@tut.by</p>
    <p :class="$style.someText">Анатолий: +375 (29) xxx-xx-xx</p>
    <p :class="$style.someText">Обратная связь</p>
    <form @submit.prevent="sendData" :class="$style.mainForm">
      <div :class="$style.inputBlockShort">
        <label for="firstName"
        :class="[$style.labelText, $style.required, {[$style.hide]: !message.firstName}]">
        Имя</label>
        <input type="text"
          required
          id="firstName"
          name="firstName"
          v-model="message.firstName"
          placeholder="Имя"
          :class="$style.inputTypeShort">
          <label :class="$style.required"></label>
      </div>
      <div :class="$style.inputBlockShort">
        <label for="lastName"
        :class="[$style.labelText, {[$style.hide]: !message.lastName}]">
        Фамилия</label>
        <input type="text"
          id="lastName"
          name="lastName"
          v-model="message.lastName"
          placeholder="Фамилия"
          :class="$style.inputTypeShort">
      </div>
      <div :class="$style.inputBlockShort">
        <label for="phone"
        :class="[$style.labelText, $style.required, {[$style.hide]: !message.phone}]">
        Телефон</label>
        <input type="tel"
        id="phone"
        required
        name="phone"
        v-model="message.phone"
        placeholder="Телефон"
        :class="$style.inputTypeShort">
        <label :class="$style.required"></label>
      </div>
      <div :class="$style.inputBlockShort">
        <label for="email" :class="[$style.labelText, {[$style.hide]: !message.email}]">
        Почта</label>
        <input type="email"
        id="email"
        name="email"
        v-model="message.email"
        placeholder="Почта"
        :class="$style.inputTypeShort">
      </div>
      <div :class="$style.inputBlockLong">
        <label for="email" :class="[$style.labelText, {[$style.hide]: !message.description}]">
        Запрос</label>
        <textarea name="description"
        v-model="message.description"
        maxlength="500"
        rows="5"
        placeholder="Запрос"
        :class="$style.inputTypeLong"></textarea>
      </div>
      <input type="submit"
       :class="$style.inputSubmit"
        value="Отправить сообщение">
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      message: {
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        description: null,
      },
    };
  },
  methods: {
    sendData() {
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(this.message),
      };
      fetch('http://localhost:8081/', requestOptions)
        .then((response) => {
          if (response.ok) {
            response.json().then(data => console.log(data));
          } else {
            console.log(`Network request for products.json failed with response ${
              response.status}: ${response.statusText}`);
          }
        });
      fetch('http://localhost:8081/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
      })
        .then(response => response.json())
        .then(data => console.log(data));
    },
  },
};
</script>

<style lang="scss" module>
.Contacts {
  width: 100%;
  color: var(--main-text-color);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
}
.mainForm {
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
}
.someText {
  margin: 0 0 1rem 0;
  font-size: var(--font-size-xs);
}
.labelText {
  display: inline-block;
  position: relative;
  margin: 0 0 0.2rem;
  font-size: 0.8rem;
  color: var(--hover-color);
  transition: opacity 400ms ease-in, top 400ms ease-out;
  top: 0;
}
.required::after {
  color: var(--hover-color);
  content: " *";
}
.inputTypeShort {
  background: transparent;
  box-sizing: border-box;
  color: #ffffff;
  width: 95%;
}
.inputBlockShort {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 0.2rem;
}
.inputTypeLong {
  width: 95%;
  resize: none;
  box-sizing: border-box;
  background: transparent;
  color: #ffffff;
}
.inputBlockLong {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1rem;
}
.inputSubmit {
  width: 95%;
  height: 2rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  background: transparent;
  color: #ffffff;
  cursor: pointer;
  box-shadow: none;
  border: 2px green outset;
  box-shadow: 0px 0px 20px 5px green;
  outline: none;
}
.inputSubmit:hover {
  box-shadow: 0px 0px 20px 5px rgb(137, 182, 13);
}
.inputSubmit:active {
  background-color: rgb(137, 182, 13);
  border-style: inset;
}
.headText {
  margin: 0 0 1rem 0;
  font-size: var(--font-size-lg);
}
.hide {
  opacity: 0;
  top: 20px;
  transition: opacity 400ms ease-out, top 400ms ease-in;
}
@media (min-width: 767px) {
.Contacts {
  height: 100%;
  margin: 0;
  position: absolute;
}
.mainForm {
  flex-flow: row wrap;
  justify-content: space-between;
  width: 70%;
}
.inputBlockShort {
  width: 49%;
}
.inputTypeLong {
  width: 97.5%;
}
.inputSubmit {
  width: 40%;
  margin-left: auto;
  margin-right: 1rem;
}
}
@media (min-width: 1023px) {
.mainForm {
  width: 50%;
}
.Contacts {
  position: initial;
}
}
@media (min-width: 1439px) {
.mainForm {
  width: 40%;
}
}
</style>
