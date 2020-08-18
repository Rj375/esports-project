
<template src="@/templates/home.html"></template>





<script>
  export default {
    name: "Home",

    props: ["msg"],

    methods: {
      subme() {
        var players = ["Rj", "mr.woof", "thefist", "shadow"];
        players[4] = "sk";
        var text = "";

        for (let i = 0; i < players.length; i++) {
          text += players[i] + "<br>";
        }
        document.getElementById("dino").innerHTML = text;

        var roles = ["Support", "IGL", "Sniper", "Assaulter"];
        roles[4] = "Assaulter";
        var text1 = "";
        let i = 0;
        while (i < roles.length) {
          text1 += roles[i] + "<br>";
          i++;
        }
        document.getElementById("dino1").innerHTML = text1;
      }

      //    showtime(){
      //        setInterval(UpdateCurrentTime, 1000)
      //     function UpdateCurrentTime(){
      //       var d = new Date();
      //        document.getElementById('time').innerHTML = d;

      //    }
      //  }  
    }
  }
</script>   
    

  

      

            

       
           
        

       

        

 
