<template src="@/templates/login.html"></template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
       
    },
    methods:{
       go(){
         this.$router.push('/')
    },
        
       logme(e){
         e.preventDefault()
         
         
         
         
        console.log(this.username, this.password)
        this.$router.push('/');
                    
       } 
    }
   
    
  }
</script>