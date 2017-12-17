//let video = document.getElementById('video-player');

var controls = new Map();
controls.set([1,2,3], 'document.getElementsByClassName()[0]');
controls.set('stop', "document.getElementsByClassName()[0]");
controls.set('again', "document.getElementsByClassName()[0]");

// let changer = function changeMusic(e){
//     let buttonClass = e.srcElement.className;
//     let player = new YT.Player('existing-iframe-example', {
//         events: {
//           'onReady': onPlayerReady,
//           'onStateChange': onPlayerStateChange
//         }
//     });

//     if(buttonClass === 'play'){
//         console.log('play');
//     } else if(buttonClass === 'stop'){
//         console.log('stop');
//     } else if(buttonClass === 'again'){
//         console.log('again');
//     }
// }

controls.forEach(function(e, k, o){
    console.log(k.includes(2));
    //e.addEventListener("click", changer);
});




