let request = new XMLHttpRequest();
let latitude = document.querySelector("#latitude");
let longitude = document.querySelector("#longitude");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let getTimes = document.querySelector("#getTimes")
let timingTable = document.querySelector("table tbody")

getTimes.addEventListener("click", function(){
    if(latitude.value==""||longtitude.value==""||month.value==""||year.value==""){
        alert("Please fill");
        return;
        
    }
    request.open("get", `http://api.aladhan.com/v1/calendar?latitude=${latitude.value}&longitude=${longtitude.value}&method=2&month=${month.value}&year=${year.value}`);
    request.send();
    request.onload = function(){
        let response = JSON.parse(request.responseText);
        if(response.code!=200){
            alert("Please try again");
        }
        console.log(response);
        for (const day of response.data) {
            let tr = document.createElement("tr");
            let dateTd = document.createElement("td");
            dateTd.innerText = day.date.readable;
            let midnightTd = document.createElement("td");
            midnightTd.innerText = day.timings.Midnight;
            let imsakTd = document.createElement("td");
            imsakTd.innerText = day.timings.Imsak;
            let fajrTd = document.createElement("td");
            fajrTd.innerText = day.timings.Fajr;
            let sunriseTd = document.createElement("td");
            sunriseTd.innerText = day.timings.Sunrise;
            let dhuhrTd = document.createElement("td");
            dhuhrTd.innerText = day.timings.Dhuhr;
            let asrTd = document.createElement("td");
            asrTd.innerText = day.timings.Asr;
            let maghribTd = document.createElement("td");
            maghribTd.innerText = day.timings.Maghrib;
            let sunsetTd = document.createElement("td");
            sunsetTd.innerText = day.timings.Sunset;
            let ishaTd = document.createElement("td");
            ishaTd.innerText = day.timings.Isha;
            tr.append(dateTd,midnightTd,imsakTd,fajrTd,sunriseTd,dhuhrTd,asrTd,maghribTd,sunsetTd,ishaTd);
            timingTable.append(tr);
        }
    }
    })

