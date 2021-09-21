import React, { useState, useEffect } from "react";

//Event list: (ouvir a localização, e altera o estado a partir da da localização).
export function App() {

  const [location, setLocation] = useState({});

  //hook: monitorar a localizaçõa do usuario.
  useEffect(() => {
    //navigator.geolocation.watchPosition(handlePositionReceived);

    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    return () => navigator.geolocation.clearWatch(watchId);

  }, [])

  //function para capturar a localização do usuário
  function handlePositionReceived({coords}) {
   //console.log(coordinates);
   const {latitude, longitude} = coords;

   setLocation({latitude, longitude});
  }

  //retorno da localização
  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}

