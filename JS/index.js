function playPause(){
          var reproduciendo = true;
          var pista = document.getElementById('audio');
          var boton_play_pause = document.getElementById('boton');
          boton.onclick = function(){
             if(reproduciendo){
                reproduciendo = false;
                pista.pause();
                this.value = "../IMG/play.png";
             }else{
                reproduciendo = true;
                pista.play();
                this.value = "../IMG/pause.png";
             }
          }
       }
       
       window.onload = function(){
          playPause();
       }

