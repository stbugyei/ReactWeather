(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/cloudy.ad789581.svg"},,function(e,t,a){e.exports=a.p+"static/media/day.7f93fbdb.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/thunder.7142c78b.svg"},function(e,t,a){e.exports=a.p+"static/media/rainy-1.f134a51c.svg"},function(e,t,a){e.exports=a.p+"static/media/rainy-3.c17e7a5d.svg"},function(e,t,a){e.exports=a.p+"static/media/snowy-3.b6eea2cf.svg"},function(e,t,a){e.exports=a.p+"static/media/cloudy-day-2.b931d84d.svg"},function(e,t,a){e.exports=a.p+"static/media/cloudy-day-1.80a5d865.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/rain.b5956c7b.jpg"},function(e,t,a){e.exports=a.p+"static/media/clear2.4367044c.jpg"},function(e,t,a){e.exports=a.p+"static/media/mist.04e85ccd.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/cloud.70c102fe.jpeg"},function(e,t,a){e.exports=a.p+"static/media/snow.61d1f99b.jpg"},function(e,t,a){e.exports=a.p+"static/media/storm.75f9c176.jpg"},function(e,t,a){e.exports=a(53)},,,,,function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),l=a.n(r),i=(a(42),a(13)),s=a(12),o=a.n(s),m=a(21),u=a(11),p=a(1),d=a(9),E=a(3),f=a.n(E),h=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),r=a[0],l=a[1],i=e.city.timezone/60,s=f()().utcOffset(i).format(" ddd, MMM D YYYY | h:mm:ss a");return Object(n.useEffect)((function(){var e=setInterval((function(){return l(s)}),1e3);return function(){clearInterval(e)}}),[r,s]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h6",null,s))},g=a(15),v=a.n(g),b=a(16),y=a.n(b),x=a(17),w=a.n(x),N=a(18),_=a.n(N),j=a(8),S=a.n(j),O=a(6),k=a.n(O),F=a(19),C=a.n(F),M=a(20),z=a.n(M),W=Object(p.h)((function(e){var t=Object(p.f)(),a=function(){for(var t=[],a=0;a<e.list.length;a+=8)t.push(e.list[a]);return t}()[0],n=a.weather[0].icon,r=f.a.unix(e.city.sunrise).format("hh:mm a"),l=f.a.unix(e.city.sunset).format("hh:mm a");return c.a.createElement("div",{className:"geographic-loc"},c.a.createElement(d.b.div,{initial:{opacity:0,scale:1},animate:{opacity:1,scale:1},exit:{opacity:1,scale:1},transition:{type:"tween",duration:.5,ease:"easeIn"}},c.a.createElement("section",{className:"upper-section"},c.a.createElement("div",{className:"country-city"},c.a.createElement("h1",null,e.city.name,", ",e.city.country),c.a.createElement("div",{style:D},c.a.createElement(h,e))),c.a.createElement("div",{className:"weather-wrapper_img"},c.a.createElement("img",{className:"avatar",src:"11d"===n||"11n"===n?v.a:"09d"===n||"09n"===n?y.a:"10d"===n||"10n"===n?w.a:"13d"===n||"13n"===n?_.a:"50d"===n||"50n"===n?k.a:"01d"===n||"01n"===n?S.a:"02d"===n||"02n"===n?C.a:"03d"===n||"03n"===n?z.a:"04d"===n||"04n"===n?k.a:S.a,alt:"img"}),c.a.createElement("h4",{style:P}," ",a.weather[0].description)),c.a.createElement("div",{className:"temperature-wrapper"},c.a.createElement("div",{className:"temperature-content"},c.a.createElement("div",{className:"temperature-main"},c.a.createElement("h1",null,Math.round(a.main.temp),c.a.createElement("sup",null,"\xb0"),"C")),c.a.createElement("div",{className:"temperature-subs"},c.a.createElement("h4",{style:{fontSize:"14px",color:"rgb(145, 22, 22)",fontWeight:"600"}}," max "),c.a.createElement("h4",null," ",Math.round(a.main.temp_max),"\xb0c"),c.a.createElement("h4",{style:{fontSize:"14px",color:"rgb(145, 22, 22)",fontWeight:"600"}}," min"),c.a.createElement("h4",null,Math.round(a.main.temp_min),"\xb0c"))),c.a.createElement("div",{className:"sun"},c.a.createElement("div",{className:"sun-content"},c.a.createElement("p",null,c.a.createElement("i",{className:"wi wi-sunrise"}),r)),c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("i",{className:"wi wi-sunset"}),l))))),c.a.createElement("div",{className:"btn-control"},c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"btn-control__arrow "},c.a.createElement("i",{className:"fas fa-arrow-right"})),c.a.createElement("span",null,c.a.createElement("button",{type:"button",onClick:function(){t.push("/displayinfo")},className:"btn-control__info"},c.a.createElement("h4",null,"Get Details")))),c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,c.a.createElement("button",{type:"button",onClick:function(){t.push("/displayforecast")},className:"btn-control__info"},c.a.createElement("h4",null,"Get 5-Day Forecast"))),c.a.createElement("span",{className:"btn-control__arrow"},c.a.createElement("i",{className:"fas fa-arrow-left"}))))))})),P={marginTop:"-19px",textTransform:"capitalize",fontSize:"22px",fontWeight:"bold",color:"#fff",textShadow:"0 3px 6px rgb(59, 62, 65)"},D={fontFamily:"Poppins",fontSize:"18px",fontWeight:"bold",color:"#fff",textShadow:"0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)"},I=Object(p.h)((function(e){var t=Object(p.f)(),a=function(){for(var t=[],a=0;a<e.list.length;a+=8)t.push(e.list[a]);return t}()[0],n=a.weather[0].icon,r=f.a.unix(e.city.sunrise).format("hh:mm a"),l=f.a.unix(e.city.sunset).format("hh:mm a");return c.a.createElement("div",{className:"display-information"},c.a.createElement(d.b.div,{initial:{opacity:0,scale:1},animate:{opacity:1,scale:1},exit:{opacity:1,scale:1},transition:{type:"tween",duration:.5,ease:"easeIn"}},c.a.createElement("section",{className:"upper-section"},c.a.createElement("div",{className:"country-city"},c.a.createElement("h1",null,e.city.name,", ",e.city.country),c.a.createElement("div",{style:B},c.a.createElement(h,e))),c.a.createElement("div",{className:"weather-wrapper_img"},c.a.createElement("img",{className:"avatar",src:"11d"===n||"11n"===n?v.a:"09d"===n||"09n"===n?y.a:"10d"===n||"10n"===n?w.a:"13d"===n||"13n"===n?_.a:"50d"===n||"50n"===n?k.a:"01d"===n||"01n"===n?S.a:"02d"===n||"02n"===n?C.a:"03d"===n||"03n"===n?z.a:"04d"===n||"04n"===n?k.a:S.a,alt:"img"}),c.a.createElement("h4",{style:T}," ",a.weather[0].description)),c.a.createElement("div",{className:"temperature-wrapper"},c.a.createElement("div",{className:"temperature-content"},c.a.createElement("div",{className:"temperature-main"},c.a.createElement("h1",null,Math.round(a.main.temp),c.a.createElement("sup",null,"\xb0"),"C")),c.a.createElement("div",{className:"temperature-subs"},c.a.createElement("h4",{style:{fontSize:"14px",color:"rgb(145, 22, 22)",fontWeight:"600"}}," max "),c.a.createElement("h4",null," ",Math.round(a.main.temp_max),"\xb0c"),c.a.createElement("h4",{style:{fontSize:"14px",color:"rgb(145, 22, 22)",fontWeight:"600"}}," min"),c.a.createElement("h4",null,Math.round(a.main.temp_min),"\xb0c"))),c.a.createElement("div",{className:"sun"},c.a.createElement("div",{className:"sun-content"},c.a.createElement("p",null,c.a.createElement("i",{className:"wi wi-sunrise"}),r)),c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("i",{className:"wi wi-sunset"}),l))))),c.a.createElement("div",{style:{width:"100%",padding:"0px 10px"}},c.a.createElement("span",{className:"btn-direction"},c.a.createElement("i",{className:"fas fa-arrow-down"})),c.a.createElement("span",null,c.a.createElement("button",{type:"button",onClick:function(){t.push("/displayforecast")},className:"btn-info"},c.a.createElement("h4",null,"Get 5-Day Forecast")))),c.a.createElement("section",{className:"lower-Section"},c.a.createElement("div",{className:"lower-section__content"},c.a.createElement("div",null,"  ",c.a.createElement("p",null,"feels like")," ",c.a.createElement("i",{className:"wi wi-thermometer"})," ",Math.round(a.main.feels_like),"\xb0c "),c.a.createElement("div",null,"  ",c.a.createElement("p",{className:"lower-section__item"},"wind speed")," ",c.a.createElement("i",{className:"wi wi-strong-wind"}),"  ",a.wind.speed,"m/s")),c.a.createElement("div",{className:"lower-section__content"},c.a.createElement("div",null," ",c.a.createElement("p",null,"humidity")," ",c.a.createElement("i",{className:"wi wi-humidity"})," ",a.main.humidity,"%"),c.a.createElement("div",null,"  ",c.a.createElement("p",{className:"lower-section__item"},"wind deg")," ",c.a.createElement("i",{className:"wi wi-wind-direction"})," ",a.wind.deg.toLocaleString("en-US"),"\xb0")),c.a.createElement("div",{className:"lower-section__content"},c.a.createElement("div",null,"  ",c.a.createElement("p",null,"visibility")," ",c.a.createElement("i",{className:"far fa-eye"})," ",a.visibility.toLocaleString("en-US"),"km"),c.a.createElement("div",null,"  ",c.a.createElement("p",{className:"lower-section__item"},"pressure")," ",c.a.createElement("i",{className:"wi wi-wind-direction"})," ",a.main.pressure,"hPa")))))})),T={marginTop:"-22px",textTransform:"capitalize",fontSize:"22px",fontWeight:"bold",color:"#fff",textShadow:"0 3px 6px rgb(59, 62, 65)"},B={fontFamily:"Poppins",fontSize:"18px",fontWeight:"bold",color:"#fff",textShadow:"0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)"},A=a(33),G=a.n(A),Y=function(e){var t=function(){for(var t=[],a=0;a<e.list.length;a+=8)t.push(e.list[a]);return t},a={labels:function(){var e=[];return t().map((function(t){return e.push(f()(t.dt_txt).format("ddd"))})),e}(),series:[function(){var e=[];return t().map((function(t){return e.push(Math.round(t.main.temp_min))})),e}(),function(){var e=[];return t().map((function(t){return e.push(Math.round(t.main.temp_max))})),e}()]};return c.a.createElement("div",{style:{fontSize:"12px",fontWeight:"bold",color:"#fff",marginBottom:"10px",textShadow:" 0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)",backgroundColor:"rgba(255, 255, 255, .21)"}},c.a.createElement(G.a,{data:a,options:{width:"320px",height:"140px",showArea:!0,colors:"nivo"},type:"Line"}))},L=(a(50),Object(p.h)((function(e){var t=Object(p.f)(),a=function(){for(var t=[],a=0;a<e.list.length;a+=8)t.push(e.list[a]);return t},n=a().map((function(e){return c.a.createElement("section",{className:"data-section",key:e.dt_txt},c.a.createElement("div",{className:"data-section__wrapper"},c.a.createElement("div",{className:"data-section__content"},c.a.createElement("h5",null,f()(e.dt_txt).format("dddd")),c.a.createElement("h5",null,f()(e.dt_txt).format("Do MMM"))),c.a.createElement("div",{className:"data-section__content"},c.a.createElement("img",{src:(t=e.weather[0].icon,"11d"===t||"11n"===t?v.a:"09d"===t||"09n"===t?y.a:"10d"===t||"10n"===t?w.a:"13d"===t||"13n"===t?_.a:"50d"===t||"50n"===t?k.a:"01d"===t||"01n"===t?S.a:"02d"===t||"02n"===t?C.a:"03d"===t||"03n"===t?z.a:"04d"===t||"04n"===t?k.a:S.a),alt:"img"})),c.a.createElement("div",{className:"data-section__content"},c.a.createElement("h5",null,e.weather[0].description),c.a.createElement("h5",null,e.main.humidity,"%")),c.a.createElement("div",{className:"data-section__content"},c.a.createElement("h5",null," ",Math.round(e.main.temp_max),"\xb0c"),c.a.createElement("h5",null,Math.round(e.main.temp_min),"\xb0c"))));var t}));return c.a.createElement(d.b.div,{initial:{opacity:0,scale:1},animate:{opacity:1,scale:1},exit:{opacity:1,scale:1},transition:{type:"tween",duration:.5,ease:"easeIn"}},c.a.createElement("div",{className:"display-forecast"},c.a.createElement("section",{className:"graph-section"},c.a.createElement(Y,e),c.a.createElement("span",{className:"btn-direction"},c.a.createElement("i",{className:"fas fa-arrow-down"})),c.a.createElement("span",null,c.a.createElement("button",{type:"button",onClick:function(){t.push("/displayinfo")},className:"btn-info"},c.a.createElement("h4",null,"Get Today's Forecast"))),c.a.createElement("div",{style:{textAlign:"left",textShadow:"text-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 1px",marginBottom:"-16px",color:"#1A237E",paddingTop:"2px"}},c.a.createElement("h4",null,e.city.name,", ",e.city.country," ",c.a.createElement("span",{style:{color:"#f65"}},"|")," ",Math.round(a()[0].main.temp_max),"\xb0c"))),n))}))),R=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"checkbox",id:"display"}),c.a.createElement("label",{htmlFor:"form",className:"try"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-content"},c.a.createElement("input",{className:"search-input",name:"city",type:"search",placeholder:"Search City/Country...",autoComplete:"on"}),c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"fas fa-search"}))))),c.a.createElement("label",{htmlFor:"display"},c.a.createElement("div",{className:"show-btn"},c.a.createElement("i",{className:"fas fa-search"}))),c.a.createElement("label",{htmlFor:"display"},c.a.createElement("div",{className:"logo"}," ",c.a.createElement("span",{className:"smile"},"StBugyei\u263bWeather")," ",c.a.createElement("span",{className:"smile"}))))},J=a(34),U=a.n(J),q=a(35),$=a.n(q),H=a(25),K=a.n(H),Q=a(26),V=a.n(Q),X=a(27),Z=a.n(X),ee=a(36),te=a.n(ee);a(51);function ae(){return c.a.createElement("div",{className:"spinner-position"},c.a.createElement("div",{className:"spinner"},c.a.createElement("div",{className:"spinner-text"},"Searching"),c.a.createElement("div",{className:"spinner-sector spinner-sector-orange"}),c.a.createElement("div",{className:"spinner-sector spinner-sector-lightblue"}),c.a.createElement("div",{className:"spinner-sector spinner-sector-blue"})))}var ne="b2ef7b3ccbdb6c1a8cfc6cc6b959fd92",ce="//api.openweathermap.org/data/2.5/forecast/?",re=Object(p.h)((function(){var e=Object(p.g)(),t=Object(n.useState)({}),a=Object(u.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(null),s=Object(u.a)(i,2),E=s[0],f=s[1],h=Object(n.useState)(),g=Object(u.a)(h,2),v=g[0],b=g[1],y=Object(n.useState)(!1),x=Object(u.a)(y,2),w=x[0],N=x[1],_=function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n,r,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ce,"lat=").concat(t,"&lon=").concat(a,"&appid=").concat(ne,"&units=metric"));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent;try{for(i=[],s=0;s<r.list.length;s+=8)i.push(r.list[s]);l(r)}catch(w){N(c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null),c.a.createElement("h4",null,"Current Position Cannot be Found. Please do a Custom Search.")))}case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){_(e.coords.latitude,e.coords.longitude)}),(function(e){return console.log(e)}))}catch(w){N(c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null),c.a.createElement("h4",null,"Current Position Cannot be Found. Please do a Custom Search.")))}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n,r,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(a=t.target.city.value)){e.next=12;break}return e.next=5,fetch("".concat(ce,"q=").concat(a,"&units=metric&APPID=").concat(ne));case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent;try{for(i=[],s=0;s<r.list.length;s+=8)i.push(r.list[s]);l(r),b(i[0].weather[0].main),N(null)}catch(w){429===r.message?N(c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null),c.a.createElement("h4",{style:{color:"red"}},r.message))):N(c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null),c.a.createElement("h4",null,"Weather Details For ",c.a.createElement("span",{style:{color:"red"}},a)," Cannot be Found")))}e.next=15;break;case 12:l({}),f(null),N(c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null),c.a.createElement("h4",null,"Please Enter City Or Country Name")));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("center",null,c.a.createElement("div",{className:"weather_details",style:{backgroundImage:"url(".concat("Clouds"===v?U.a:"Snow"===v?$.a:"Rain"===v||"Drizzle"===v?K.a:"Thunderstorm"===v?te.a:"Mist"===v||"Fog"===v?Z.a:V.a,")")}},c.a.createElement("div",{className:"search-wrapper",onSubmit:j},c.a.createElement(R,null)),r&&Object.keys(r).length?c.a.createElement(d.a,{exitBeforeEnter:!0,initial:!1},c.a.createElement(p.c,{location:e,key:e.pathname},c.a.createElement(p.a,{exact:!0,path:"/"},w||c.a.createElement(W,Object.assign({},r,j))),c.a.createElement(p.a,{exact:!0,path:"/displayinfo"},w||c.a.createElement(I,Object.assign({},r,j))),c.a.createElement(p.a,{exact:!0,path:"/displayforecast"},w||c.a.createElement(L,Object.assign({},r,j))))):c.a.createElement("span",{style:le},w,E)))})),le={color:"#fff",margin:"30px",textAlign:"center"};a(52);var ie=function(){return c.a.createElement(i.a,{forceRefresh:!0,basename:"/ReactWeather/"},c.a.createElement(re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.16369e1f.chunk.js.map