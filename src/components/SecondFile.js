import React from 'react'
import logo from '../images/vector.jpg'
import offer from '../images/vector.jpg'
import vector from '../images/vector2.jpg'
function SecondFile() {
    
  navigator.serviceWorker.register("sw.js");
    const HandleClick=()=>{
        Notification.requestPermission(function(result) {
        if (result === 'granted') {
            navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('Sri Srinivasa Medicals', {
                    body: "Get X Buy Y With Discount",
                    icon: vector,
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: "vibration-sample",
                    image:offer,
                    badge:vector
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