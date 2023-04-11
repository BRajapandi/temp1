import React from 'react'

function SecondFile() {
    // navigator.serviceWorker.register('service-worker.js');
    const HandleClick=()=>{
        Notification.requestPermission().then(perm =>{
            if(perm === "granted"){
                    // new Notification("Notification Message",{
                    //     body:"Sub to tarnea"
                    // })
            navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('Notification with ServiceWorker');
            });
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