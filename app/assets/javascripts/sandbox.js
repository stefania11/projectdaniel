 var trumpet = 'trumpet';
 var flute = 'flute';
 var violin = 'violin';
 var harp = 'harp';
 var cello = 'cello';
 var tuba = 'tuba';
 var kick = 'kick';
 var snare = 'snare';
 var hihat = 'hihat';
 var instruments = [trumpet, flute, violin, harp, cello, tuba, kick, snare, hihat];
 //keys: WASDFG space up down
 var w = 87;
 var a = 65;
 var s = 83;
 var d = 68;
 var f = 70;
 var g = 71;
 var space = 32;
 var up = 38;
 var down = 40;
 var keys = [w,a,s,d,f,g,space,up,down];
 var mappings = {};
 var playing = [];

 for (var i = 0 ; i <keys.length; i++){
     mappings[keys[i]] = instruments[i];
 }
 var audio = [];
 var drums = ['hihat', 'snare', 'kick'];
 for(var i = 0; i < instruments.length; i++){
   var suffix = "mp3";
   audio.push(instruments[i] + "1."+ suffix);
   playing.push(false);
 }

$(document).keydown(function( event ) {
    var keycode = event.which;
    if(keys.indexOf(keycode)>-1){
      var cooldown = 2500;
      var instrument = mappings[keycode];
      if(drums.indexOf(instrument) > -1){
        cooldown = 50;
      }
        var elem = $("#" + instrument);
        var index_of_instrument = keys.indexOf(keycode);
        if(!playing[index_of_instrument]){
            playing[index_of_instrument] = true;
            elem.css("opacity", 1);
            new Audio(audio[index_of_instrument]).play();
            $("#" + mappings[keycode]).animate({
                width: "320px",
                height: "320px",
                "background-size": "100%"
            }, 500, function() {
                elem.animate({
                    width: "160px",
                    height: "160px",
                    "background-size": "100%"
                }, cooldown, function() {
                    elem.css("opacity",.5);
                    playing[index_of_instrument] = false;
                });
            });
        }
    }

});
