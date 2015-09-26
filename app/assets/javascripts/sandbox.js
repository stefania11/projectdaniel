 var trumpet = 'trumpet';
 var flute = 'flute';
 var violin = 'violin';
 var double_bass = 'double_bass';
 var cello = 'cello';
 var tuba = 'tuba';
 var kickdrum = 'kickdrum';
 var snare = 'snare';
 var high_hat = 'high_hat';
 var instruments = [trumpet, flute, violin, double_bass, cello, tuba, kickdrum, snare, high_hat];
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
 var keys = [w, a,s,d,f,g,space,up,down];
 var mappings = {};
 for (var i = 0 ; i <keys.length; i++){
     mappings[keys[i]] = instruments[i];
 }
 var audio = ["trumpet1.mp3", "trumpet2.mp3"];

var playing = false;
$(document).keydown(function( event ) {
    var keycode = event.which;
    if(keys.indexOf(keycode)>-1){
        var elem = $("#" + mappings[keycode]);
        if(!playing){
            playing = true;
            elem.css("opacity", 1);
            new Audio(audio[0]).play();
            $("#" + mappings[keycode]).animate({
                width: "1450.4px",
                height: "449.6px"
            }, 500, function() {
                elem.animate({
                    width: "1359.75px",
                    height: "421.5px"
                }, 2500, function() {
                    elem.css("opacity",.5);
                    playing = false;
                });
            });
        }
    }

});