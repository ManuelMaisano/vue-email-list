const { createApp } = Vue;




createApp({
  data() { 
    return {
      apiLink: 'https://flynn.boolean.careers/exercises/api/random/mail',
      email : [],
      maxEmail : 10


    };
  },
  methods: {
    getRandomMail() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
          console.log(response);
          //console.log(response); 
          this.email.push(response.data.response);
        })
      }

  },
  computed:{

  },
  mounted() {

  },
  created(){
    this.getRandomMail();
  }

}).mount('#app');