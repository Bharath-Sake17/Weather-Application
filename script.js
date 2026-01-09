const checkweather = async (name) => {
    const apikey = "f855d4d32652fdfe2a98ebe7ccb0b7d6"
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}&units=metrics`

    try {
        const response = await fetch(apiurl);

        if (!response.ok) {
            alert("City not found");
            return;
        }

        const data = await response.json();
        console.log(data);

       const tempC = data.main.temp;
       const tempF = (tempC * 9/5) + 32;
       const tempeature= tempC-273.15;

          //document.querySelector(".temp").textContent =`${Math.round(tempC)}°C / ${Math.round(tempF)}°F`;
       document.querySelector(".temp").innerHTML =Math.round(tempeature) + " °C";
        document.querySelector(".location").innerHTML = data.name;
        //document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        //document.querySelector(".temp").innerHTML =`${Math.round(tempC)}°C / ${Math.round(tempF)}°F`;
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".sealev").innerHTML=data.main.sea_level+ " feet";
        //document.querySelector(".pressurechange").innerHTML=data.main.pressure+" psi";

        document.querySelector(".feelslike").innerHTML=data.weather[0].description;


    } catch (error) {
        console.error(error);
    }
};

document.querySelector(".search-btn").addEventListener("click", () => {
    const location = document.querySelector(".input").value;
    if (location !== "") {
        checkweather(location);
    }
});
