<template>
  <main :class="$style.Contacts">
    <h1 :class="$style.headText">Контакты</h1>
    <p :class="$style.someText">Почта: хххххх@tut.by</p>
    <p :class="$style.someText">Анатолий: +375 (29) xxx-xx-xx</p>
    <p :class="$style.someText">Обратная связь</p>
    <form @submit.prevent="sendData" :class="$style.mainForm">
      <input type="text"
        required
        name="firstName"
        v-model="message.firstName"
        placeholder="Имя"
        :class="$style.inputTypeShort">
      <input type="text"
        name="lastName"
        v-model="message.lastName"
        placeholder="Фамилия"
        :class="$style.inputTypeShort">
      <input type="tel"
       required
       name="phone"
       v-model="message.phone"
       placeholder="Телефон"
       :class="$style.inputTypeShort">
      <input type="email"
       name="email"
       v-model="message.email"
       placeholder="Почта"
       :class="$style.inputTypeShort">
      <textarea name="description"
      v-model="message.description"
      maxlength="500"
      rows="5"
      placeholder="Запрос"
      :class="$style.inputTypeLong"></textarea>
      <label :class="$style.labelRequiredBefore">Обязательное поле</label>
      <input type="submit" :class="$style.inputSubmit" value="Отправить сообщение">
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
.labelRequiredBefore::before {
  color: hsl(9.6, 100%, 50%);
  content: "* ";
}
.labelRequired::after {
  color: hsl(9.6, 100%, 50%);
  content: " *";
}
.inputTypeShort {
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
  background: transparent;
  color: #ffffff;
}
.inputTypeLong {
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
  background: transparent;
  color: #ffffff;
}
.inputSubmit {
  width: 50%;
  height: 2rem;
  margin-bottom: 1rem;
  margin-left: auto;
  border: 1px green solid;
  box-sizing: border-box;
  background: transparent;
  color: #ffffff;
  cursor: pointer;
}
.headText {
  margin: 0 0 1rem 0;
  font-size: var(--font-size-lg);
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
.inputTypeShort {
  width: 49%;
}
.inputSubmit {
  width: 40%;
}
}
@media (min-width: 1023px) {
.Contacts {
  position: initial;
}
.mainForm {
  width: 50%;
}
.inputSubmit {
  width: 40%;
}
}
</style>
