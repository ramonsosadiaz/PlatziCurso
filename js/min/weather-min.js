!function(){function e(e){var t=new Date;return $.datepicker.formatDate(e,t)+" "+t.toLocaleTimeString()}function t(e){alert("Ocurrio un error: "+e)}function n(e){var t=[{}],n=e.coords.latitude,a=e.coords.longitude;t.lat=n,t.lon=a,console.log("La posición es: "+n+","+a),$.getJSON(u+"lat="+n+"&lon="+a,o)}function o(e){200===e.cod&&(f.zone=e.name,f.icon="http://openweathermap.org/img/w/"+e.weather[0].icon+".png",f.temp=e.main.temp-d,f.temp_max=e.main.temp_max-d,f.temp_min=e.main.temp_min-d,f.main=e.weather[0].main,console.log(e),console.log(Math.round(f.temp)),console.log(f.icon),console.log(f.zone),a(f))}function a(t,n){var o=i("#template--city"),a;a=n?n:e("dd/mm/yy"),o.querySelector("[data-city]").innerHTML=t.zone,o.querySelector("[data-city]").id=t.zone,o.querySelector("[data-time]").innerHTML=a,o.querySelector("[data-icon]").src=t.icon,o.querySelector("[data-icon]").alt=t.zone,o.querySelector("[data-temp=max]").innerHTML=Math.round(t.temp_max),o.querySelector("[data-temp=min]").innerHTML=Math.round(t.temp_min),o.querySelector("[data-temp=current]").innerHTML=t.temp.toFixed(1),$(y).hide(),$(v).append(o),console.log(a),console.log(o)}function i(e){var t=document.querySelector(e);return document.importNode(t.content,!0)}function r(e){navigator.geolocation.getCurrentPosition(n,t)}function c(e){e.preventDefault(),$.getJSON(u+"q="+$(S).val(),m)}function m(e){$.getJSON(s+$(S).val(),function(t){$(S).val(""),f={},f.zone=e.name,f.icon="http://openweathermap.org/img/w/"+e.weather[0].icon+".png",f.temp=e.main.temp-d,f.temp_max=e.main.temp_max-d,f.temp_min=e.main.temp_min-d,f.main=e.weather[0].main;var n=t.data.time_zone[0].localtime;a(f,n),h.push(f),localStorage.setItem("cities",JSON.stringify(h))})}function l(e){function t(e){e.forEach(function(e){a(e)})}e.preventDefault();var n=JSON.parse(localStorage.cities);t(n)}var p="80114c7878f599621184a687fc500a12",u="http://api.openweathermap.org/data/2.5/weather?",d=272.15,g="6ae77c55b4769e63bab0552f5b536",s="https://api.worldweatheronline.com/free/v2/tz.ashx?key="+g+"&format=json&q=",f={};f.zone,f.icon,f.temp,f.temp_max,f.temp_min,f.main;var h=[],v=$("body"),y=$(".loader"),S=$("[data-input='cityAdd']"),w=$("[data-button='add']"),_=$("[data-button='cities']");$(w).on("click",c),$(S).on("keypress",function(e){13===e.which&&c(e)}),$(_).on("click",l),navigator.geolocation?navigator.geolocation.getCurrentPosition(n,t):alert("Tu no tienes un navegador avanzado")}();