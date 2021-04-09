
'use strict';
const video = document.querySelector('#video');
const chup = document.querySelector('#chup');
let canvans = document.querySelector('#canvans');
let contect = canvans.getContext('2d');
let hinh = document.getElementById('hinh');

const m_options = {
    video: { width: 640, height: 480 }
}

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia(m_options).then(stream => {
        console.log(stream);
        video.srcObject = stream;
        video.play()
    }).catch(err => {
        alert(err)
    })
}
chup.addEventListener('click', () => {
    contect.drawImage(video, 0, 0, 320, 150);
    hinh.src = canvans.toDataURL("image/webp");
})
