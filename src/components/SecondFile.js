import React from 'react'
import logo from '../images/vector.jpg'

function SecondFile() {
    // navigator.serviceWorker.register('service-worker.js');
    const HandleClick=()=>{
        Notification.requestPermission().then(perm =>{
            if(perm === "granted"){
               const notification = new Notification("Notification Message",{
                    body:"Sub to tarnea",
                    data:{hello:"world"},
                    icon:logo,
                    // tag:"Welcome Message"
                })

                // notification.addEventListener("close",)
            // navigator.serviceWorker.ready.then(function(registration) {
            // registration.showNotification('Notification with ServiceWorker');
            // });
            }
        })
    }
  return (
    <div>
        <button onClick={HandleClick}>Second File Trigger</button>
    </div>
  )
}

export default SecondFile