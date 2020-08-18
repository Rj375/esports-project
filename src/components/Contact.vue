<template src="@/templates/contact.html"></template>




<script>
  export default {
    name: 'Contact',
    data(){
        return{
          errors: [],
          firstname: '',
          lastname: '',
          email: '',
          mobile: '',
          message: ''
        }
    },
    methods: {
      gotohome() {
         console.log(this.firstname, this.lastname, this.email)
           this.$router.push('/')
      },
       submitme(){
        
        
       
         }
       } 
    }
  
   
  
</script>