
'use strict';
const video = document.querySelector('#video');
const didong = document.querySelector('#didong');
const chup = document.querySelector('#chup');
const boxvideo=document.querySelector('.box-canvas');
const boxcv=document.querySelector('.box-canvas');
const boximg=document.querySelector('.box-img');
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
    chupHinh()
})

let chupHinh=()=>{
    canvans.width = video.videoWidth;
    canvans.height = video.videoHeight;
    contect.drawImage(video, 0, 0);
    hinh.src = canvans.toDataURL("image/webp");
    boxcv.classList.remove('d-none');
    boximg.classList.remove('d-none')
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
{
    boxvideo.classList.add('d-none');
    didong.classList.remove('d-none')
}
