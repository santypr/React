import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleNotification from './Notifications/SimpleNotification';

function App() {
  // var notification: Notification;

  // useEffect(() => {
  //   if (!("Notification" in window)) {
  //     console.log("This browser does not support desktop notification");
  //   } else {
  //     Notification.requestPermission();
  //   }
  // }, [])

  const showNotification = () => {
    var options: NotificationOptions = {
      body: "This is the body of the Notification",
      icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      dir: "ltr"
    };
    notification = new Notification("Notification Demo", options);
  }

  // const closeNotification = () => {
  //   notification.close();
  // }

  function checkNotificationPromise() {
    try {
      if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(function (result) {
          console.log(result);
        });
      }
    } catch (e) {
      return false;
    }

    return true;
  }

  checkNotificationPromise();

  var notification = new Notification(
    'Lista de tareas',
    {
      body: "Probando las notificaciones",
      icon: '/to-do-notifications/img/icon-128.png'
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={showNotification}>kk</button>
        {/* <SimpleNotification /> */}
      </header>
    </div>
  );
}

export default App;
