import React from 'react'
import logo from '../images/icon.png'
import offer from '../images/offer.png'
import offer2 from '../images/deskoffer.png'
import vector from '../images/badge.png'
function SecondFile() {
    
  navigator.serviceWorker.register("sw.js");
    const HandleClick=()=>{
        Notification.requestPermission(function(result) {
        if (result === 'granted') {
            navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('Sri Srinivasa Medicals', {
                    body: "Get X Buy Y With Discount",
                    icon: logo,    // PNG is suggested 192 X 192
                    vibrate: [300, 100, 400, 100, 300, 100, 400],
                    tag: "vibration-sample",
                    image:offer,   // JPG any X 800px - desk 700 X 350
                    badge:vector    //must be in PNG 96 X 96
                    });
            });
        }
        })
// .then(perm =>{
//             if(perm === "granted"){
//             //    const notification = new Notification("Notification Message",{
//             //         body:"Sub to tarnea",
//             //         data:{hello:"world"},
//             //         icon:logo,
//             //         // tag:"Welcome Message"
//             //     })

//                 // notification.addEventListener("close",)
//             navigator.serviceWorker.ready.then(function(registration) {
//             registration.showNotification('Notification with ServiceWorker');
//             });
//             }
//         })
    }
  return (
    <div>
        <button onClick={HandleClick}>Second File Trigger</button>
    </div>
  )
}

export default SecondFile