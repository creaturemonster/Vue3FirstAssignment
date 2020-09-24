const app=Vue.createApp({
    data(){
      return {
        name:'Henry', 
        age:'26',
        img:'https://www.bls.gov/images/bls_emblem_2016.png'
      };
    }, 
  methods:{
    randomInt(){
      return Math.random();
    }
  }
}).mount('#assignment');
