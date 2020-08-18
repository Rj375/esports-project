<template src="@/templates/image.html"></template>







<script>
export default {
    data() {
      return {
        rows: 100,
        perPage: 10,
        url: ""
        
      }
    },
    created() {
      this.url = "../assets/img1.jpeg";
    }
}
</script>