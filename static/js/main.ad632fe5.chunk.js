(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(31)},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),c=n.n(o),l=(n(27),n(14)),s=[{category:"The Year in Photos",questions:[{easy:{image:"/images/celebrity_250_hard_2008.jpg",answer:"2019"},hard:{text:"Year Hard 1",answer:"2019"}},{easy:{text:"Year Easy 2",answer:"2019"},hard:{text:"Year Hard 2",answer:"2019"}}]},{category:"Twomb-matic Moments",questions:[{easy:{text:"Twomb Easy 1",answer:"2019"},hard:{text:"Twomb Hard 1",answer:"2019"}},{easy:{text:"Twomb Easy 2",answer:"2019"},hard:{text:"Twomb Hard 2",answer:"2019"}}]}],i=n(12);var u=function(e){if(!e.map(Object(i.a)(["questions","length"])).every(function(e,t,n){return e===n[0]}))throw new Error("All categories do not have the same length")},d=n(41),f=n(39),m=n(32),y=n(37),p=n(19),b=a.useEffect,w={question:{alignItems:"center",backgroundColor:"#0000ff",color:"#ffffff",display:"flex",fontSize:"10vh",height:"100%",justifyContent:"center",width:"100%"},selected:{position:"absolute",top:0,left:0,right:0,bottom:0}};var h=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)("".concat(Math.floor(e.value))),s=Object(l.a)(c,2),i=s[0],u=s[1],d=Object(a.useCallback)(function(t){if(!e.disabled&&""!==i){o(!0);var n=t.shiftKey?e.question.hard:e.question.easy;n.text?u(n.text):u(a.createElement("div",{style:{background:"url(".concat(n.image,")"),backgroundSize:"cover",height:"100%",width:"100%"}}))}},[e.disabled,r,i]),f=["-","_"],m=[].concat(f,["=","+"]);function y(t){var n=t.key;r&&m.includes(n)&&(o(!1),u(""),f.includes(n)?(new Audio("/mp3s/dont-impress-me-much.mp3").play(),e.onClose(-1*e.value)):(new Audio("/mp3s/whoomp.mp3").play(),e.onClose(e.value)))}return b(function(){return window.addEventListener("keydown",y),function(){window.removeEventListener("keydown",y)}},[e.onClose,r]),a.createElement("div",{onClick:d,style:r?Object(p.a)({},w.question,w.selected):w.question},i)},v=1e3,j={table:{position:"relative",color:"#ffffff",height:"90vh",width:"100%"},th:{textAlign:"center",padding:"10px"}};var g=function(e){u(s);var t=Object(d.a)("category",s),n=s[0].questions.length,r=v/n;return a.createElement("table",{style:j.table},a.createElement("thead",null,a.createElement("tr",null,t.map(function(e){return a.createElement("th",{key:e,style:j.th},e)}))),a.createElement("tbody",null,Object(f.a)(0,n).map(function(t){return a.createElement("tr",{key:t},s.map(Object(m.a)(Object(y.a)(["questions",t]))).map(function(n,o){return a.createElement("td",{key:"r".concat(t,"c").concat(o)},a.createElement(h,{disabled:e.disabled,onClose:e.onQuestionClose,question:n,value:(t+1)*r}))}))})))},O=n(35),E=a.useEffect,k={players:{color:"#ffffff",display:"flex",justifyContent:"space-between",margin:"0 10px",height:"10vh"},player:{backgroundColor:"#0000ff",border:"5px solid #0000ff",display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-around",margin:"10px",padding:"5px",textAlign:"center"},selected:{border:"5px solid #f4e542"}};var x=function(e){var t=Object(f.a)(1,e.players.length+1).map(O.a);function n(n){var a=n.key;t.includes(a)&&e.selectPlayer(e.players[parseInt(a,10)-1])}return E(function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}},[]),a.createElement("div",{style:k.players},e.players.map(function(t,n){return a.createElement("div",{key:n,onClick:function(){return e.selectPlayer(t)},style:t.selected?Object(p.a)({},k.player,k.selected):k.player},a.createElement("span",null,t.name),a.createElement("span",null,t.score))}))},C=n(38),q=n(33),P=n(30),S=n(34),T=n(36),A=n(18),H=n(29),L=n(40),Y=[{name:"Player 1",score:0,selected:!1},{name:"Player 2",score:0,selected:!1},{name:"Player 3",score:0,selected:!1}],_=function(e,t){switch(t.type){case"updateScore":var n=Object(C.a)(Object(q.a)("selected",!0),e);return Object(P.a)(Object(y.a)([n,"score"]),Object(S.a)(t.points))(e);case"selectPlayer":var a=Object(C.a)(Object(q.a)("name",t.player.name),e);return Object(T.a)(Object(A.a)(Object(H.a)("selected",!1)),Object(L.a)(Object(y.a)([a,"selected"]),!0))(e);default:return e}},I={app:{backgroundColor:"#000000"}};var z=function(){var e=Object(a.useReducer)(_,Y),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useCallback)(function(e){r({type:"selectPlayer",player:e})},[r,n]),c=Object(a.useCallback)(function(e){r({type:"updateScore",points:e})},[r]);return a.createElement("div",{style:I.app},a.createElement(g,{disabled:!n.some(Object(q.a)("selected",!0)),onQuestionClose:c}),a.createElement(x,{players:n,selectPlayer:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.ad632fe5.chunk.js.map