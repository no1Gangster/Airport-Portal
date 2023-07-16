document.addEventListener("DOMContentLoaded",function(){
  fetch("data.json")
    .then((res)=> res.json())
    .then((data)=>{
      const username=data.name;
      document.getElementById("username").textContent=username;
    })
    .catch((error)=>console.log(error));

  fetch("data.json")
    .then((res)=> res.json())
    .then((data)=>{
      const flights=data.flight_info;
      const userFlights=data.user_flights;

      const flightTableBody=document.getElementById("flight-table-body");
      userFlights.forEach((userFlight) => {
        const flight=flights.find((flight)=> flight.id === userFlight.flight_id);

        if(flight) {
          const flightRow=document.createElement("tr");
          const flightIdData = document.createElement("td");
          flightIdData.textContent=flight.id;
          flightRow.appendChild(flightIdData);
          const sourceData = document.createElement("td");
          sourceData.textContent=flight.source;
          flightRow.appendChild(sourceData);
          const destinationData=document.createElement("td");
          destinationData.textContent=flight.destination;
          flightRow.appendChild(destinationData);
          const departureDateData=document.createElement("td");
          departureDateData.textContent=flight.departure_date;
          flightRow.appendChild(departureDateData);
          const airlineData=document.createElement("td");
          airlineData.textContent=flight.airline_name;
          flightRow.appendChild(airlineData);
          flightTableBody.appendChild(flightRow);
        }
      });
    })
    .catch((error)=> console.log(error));
});
