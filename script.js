const { createApp } = Vue;



//option object.
createApp({
  data() { //metodo data()
    return {
      apiLink: 'https://flynn.boolean.careers/exercises/api/random/mail',


    }
  },
  methods: {
   getRandomMail() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
          console.log(response);
        })
      }

  },
  mounted() {
    this.getRandomMail();

  },

}).mount('#app')