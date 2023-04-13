import React from 'react'
import addNotification from 'react-push-notification'
import logo from '../images/icon.png'


function FirstFile() {
  navigator.serviceWorker.register("sw.js");
    const handleClick=()=>{
        console.log('Notification1')
        addNotification({
            title:'Get X Buy Y',
            message:"vanguda vendru",
            duration:5000,
            icon:logo,
            native:true,
            onClick:()=>console.log('Notification2')
        })
    }
  return (
    <div>
        <button onClick={handleClick}>First File Trigger Notification</button>
    </div>
  )
}

export default FirstFile