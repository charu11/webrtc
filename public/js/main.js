// global vars

let width = 500,
    height = 0, 
    filter = 'none',
    streaming = false;

   //DOM elements
   
   const video = document.getElementById('video');
   const canvas = document.getElementById('canvas');
   const photos = document.getElementById('photos');
   const photoButton = document.getElementById('photo-button');
   const clearButton = document.getElementById('clear-button');
   const photoFilter = document.getElementById('photo-filter');

   //Get media stream 

   navigator.mediaDevices.getUserMedia({video: true, audio: false})
   .then(function(stream){
       //link to the video source
       video.srcObject = stream;

       //play the video
       video.play();
   })
   .catch(function(err){
       console.log(err);
   })