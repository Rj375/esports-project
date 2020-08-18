<template src="@/templates/admin-player.html"></template>






<script>
  export default {
    name: 'Admin-player',
    
    data() {
      return {
        fields: ['PID', 'Full_name', 'age', 'Contact', 'gender','DOB','Role'],
        items: [
          {  PID: '01', Full_name: 'Ramesh Giri', age: 23, Contact: '98056754' , gender: 'male'  , DOB: '25/07/1996' , Role: 'Support' },
        ]
      }
    }

    
  }
</script>