(this.webpackJsonpsans=this.webpackJsonpsans||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a.p+"static/media/1.8a1fb7af.png"},function(e,t,a){e.exports=a.p+"static/media/2.d38b7b11.png"},function(e,t,a){e.exports=a.p+"static/media/3.eb0d110e.png"},function(e,t,a){e.exports=a.p+"static/media/4.ae37aed1.png"},function(e,t,a){e.exports=a.p+"static/media/5.70edc33f.png"},function(e,t,a){e.exports=a.p+"static/media/6.0ae2029c.png"},function(e,t,a){e.exports=a.p+"static/media/7.65b7e96c.png"},function(e,t,a){e.exports=a.p+"static/media/8.ca2dbc2c.png"},function(e,t,a){e.exports=a.p+"static/media/9.07f827c4.png"},function(e,t,a){e.exports=a.p+"static/media/10.e97c10a3.png"},function(e,t,a){e.exports=a.p+"static/media/11.bfcf19a7.png"},function(e,t,a){e.exports=a.p+"static/media/12.ce55fd3e.png"},,,function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),i=a.n(c),l=a(12),o=a.n(l),s=(a(41),a(8)),p=(a(46),a(47),Object(s.b)((function(e){var t=e.bird;return{y:t.y,r:t.r}}),{})((function(e){var t=e.y,a=e.r;return console.log("y :>> ",t),i.a.createElement("div",{className:"bird-wrapper",style:{top:t,transform:"rotate(".concat(a,"deg)")}})}))),d=(a(48),Object(s.b)((function(e){var t=e.pipe;return{x:t.x,pipes:t.pipes}}),{})((function(e){var t=e.x,a=e.pipes;return i.a.createElement("div",{className:"pipe-wrapper"},a.map((function(e,a){var n=e.topHeight;return i.a.createElement("div",{style:{position:"relative"}},i.a.createElement("div",{key:"pipe-".concat(a),className:"pipe-top",style:{left:t+200*a,height:n}}),i.a.createElement("div",{className:"pipe-bottom",style:{left:t+200*a,height:n+100}}))})))}))),u=(a(49),function(){return i.a.createElement("div",{className:"foreground-wrapper"})}),m=function(e,t){var a=t(),n=a.bird.y,r=a.pipe.pipes,c=a.pipe.x,i=a.bird.getBoundingClientRect();console.log(i.top,i.right,i.bottom,i.left);var l=r.map((function(e,t){var a=e.topHeight;return{x1:c+200*t,y1:a,x2:c+200*t,y2:a+100}})).filter((function(e){var t=e.x1;if(t>0&&t<288)return!0}));if(n>404&&e({type:"GAMEOVER"}),l.length){var o=l[0],s=o.x1,p=o.y1,d=o.x2,u=o.y2;(s<120&&120<s+52&&n<p||d<120&&120<d+52&&n>u)&&e({type:"GAMEOVER"})}},f={start:function(){return function(e,t){"playing"!==t().game.status&&(n=setInterval((function(){e({type:"FALL"}),e({type:"RUNNING"}),m(e,t)}),300),r=setInterval((function(){e({type:"GENETARE"})}),200),e({type:"START"}))}},fly:function(){return function(e){e({type:"FLY"})}}},g=Object(s.b)((function(e){return{status:e.game.status}}),f)((function(e){var t=e.status,a=e.start,l=e.fly;return"game_over"===t&&(clearInterval(n),clearInterval(r)),Object(c.useEffect)((function(){document.addEventListener("keypress",(function(e){32===e.keyCode&&l(),"playing"!==t&&a()}))}),[]),i.a.createElement("div",{className:"game-wrapper"},i.a.createElement(p,{className:"bird"}),i.a.createElement(d,null),i.a.createElement(u,null))})),v=a(14),h=a(2),y=(a(50),a(22)),E=a.n(y),x=a(23),b=a.n(x),w=a(24),N=a.n(w),j=a(25),O=a.n(j),S=a(26),A=a.n(S),M=a(27),R=a.n(M),k=a(28),T=a.n(k),W=a(29),G=a.n(W),L=a(30),z=a.n(L),I=a(31),C=a.n(I),H=a(32),P=a.n(H),X=a(33),Y=a.n(X),F=function(){return i.a.createElement("div",null,i.a.createElement("canvas",{id:"myCanvas",width:"800",height:"600"}),i.a.createElement("script",{dangerouslySetInnerHTML:{__html:"function line(particle, particle2) {\n  context.beginPath();\n  context.moveTo(particle.x, particle.y);\n  context.lineTo(particle2.x, particle2.y);\n  context.stroke();\n}\n \nfunction animate() {\n  context.clearRect(0, 0, canvas.width, canvas.height);\n  for (let i = 0; i < maxParticles; i++) {\n    let particle = particles[i];\n    context.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);\n    for (let j = 0; j < maxParticles; j++) {\n      if (i != j) {\n        let particle2 = particles[j];\n        let distanceX = Math.abs(particle.x - particle2.x);\n        let distanceY = Math.abs(particle.y - particle2.y);\n        if (distanceX < threshold && distanceY < threshold) {\n          context.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;\n          let color = 200 - Math.floor(distanceX + distanceY);\n          context.strokeStyle = 'rgb(' + color + ',' + color + ',' + color + ')';\n          line(particle, particle2);\n        }\n      }\n    }\n    particle.x = particle.x + particle.vx;\n    particle.y = particle.y + particle.vy;\n    if (particle.x > canvas.width - particleSize || particle.x < particleSize)\n      particle.vx = -particle.vx;\n    if (particle.y > canvas.height - particleSize || particle.y < particleSize)\n      particle.vy = -particle.vy;\n  }\n  window.requestAnimationFrame(animate);\n}\n \nlet canvas = document.getElementById('myCanvas');\nlet context = canvas.getContext('2d');\nlet particles = [];\nlet particleSize = 4;\nlet maxParticles = 40;\nlet threshold = 100;\nfor (let i = 0; i < maxParticles; i++) {\n  let particle = {\n    x: Math.random() * canvas.width,\n    y: Math.random() * canvas.height,\n    vx: Math.random(),\n    vy: Math.random()\n  }\n  particles.push(particle);\n}\ncontext.fillStyle = 'white';\nanimate();\n \n<\/script>"}}))},U=void 0,V=function(){var e=function(){window.onmouseenter((function(e){U.querySelectorAll("layer").forEach((function(t){var a=t.getAttribute("data-speed"),n=window.innerWidth-e.pageX*a/100,r=window.innerHeight-e.pageY*a/100;t.style.transform="translateX(".concat(n,"px) translateX(").concat(r,"px)")}))}))};return i.a.createElement("div",{className:"sans-comp-Home",onMouseEnter:function(){return e}},i.a.createElement("section",{className:"paralax-section"},i.a.createElement("img",{className:"layer","data-speed":"-5",alt:"",src:E.a}),i.a.createElement("img",{className:"layer","data-speed":"5",alt:"",src:b.a}),i.a.createElement("img",{className:"layer","data-speed":"2",alt:"",src:N.a}),i.a.createElement("img",{className:"layer","data-speed":"6",alt:"",src:O.a}),i.a.createElement("img",{className:"layer","data-speed":"8",alt:"",src:A.a}),i.a.createElement("img",{className:"layer","data-speed":"-2",alt:"",src:R.a}),i.a.createElement("img",{className:"layer","data-speed":"4",alt:"",src:T.a}),i.a.createElement("img",{className:"layer","data-speed":"-9",alt:"",src:G.a}),i.a.createElement("img",{className:"layer","data-speed":"6",alt:"",src:z.a}),i.a.createElement("img",{className:"layer","data-speed":"-7",alt:"",src:C.a}),i.a.createElement("img",{className:"layer","data-speed":"5",alt:"",src:P.a}),i.a.createElement("img",{className:"layer","data-speed":"-5",alt:"",src:Y.a}),i.a.createElement("h2",{className:"layer","data-speed":"2"},"Welcome")),i.a.createElement(F,null))},B=function(e){var t=e.store;return i.a.createElement(v.a,null,i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(v.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(v.b,{to:"/game"},"Game"))),i.a.createElement("hr",null),i.a.createElement("div",{className:"main-route-place"},i.a.createElement(h.a,{exact:!0,path:"/",component:V}),i.a.createElement(h.a,{path:"/game",component:g},i.a.createElement(s.a,{store:t},i.a.createElement(g,null))))))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=a(9),$=a(34),D=a(3),K={y:250,r:0},Q=a(35),Z={x:300,pipes:[]},ee=Object(J.c)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.type;switch(a){case"START":return Object(D.a)(Object(D.a)({},e),{},{status:"playing"});case"GAMEOVER":return Object(D.a)(Object(D.a)({},e),{},{status:"game_over"});default:return e}},bird:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.type;switch(a){case"FLY":return Object(D.a)(Object(D.a)({},e),{},{y:e.y-50,r:-30});case"FALL":return Object(D.a)(Object(D.a)({},e),{},{y:e.y+20,r:30});case"GAMEOVER":return K;default:return e}},pipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.type;switch(a){case"RUNNING":return e.pipes.length?Object(D.a)(Object(D.a)({},e),{},{x:e.x-10}):e;case"GENETARE":var n=Math.round(200*Math.random());return Object(D.a)(Object(D.a)({},e),{},{pipes:[].concat(Object(Q.a)(e.pipes),[{topHeight:n}])});case"GAMEOVER":return Z;default:return e}}}),te=Object(J.d)(ee,Object(J.a)($.a));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(B,{store:te})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Sans",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Sans","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()}]),[[36,1,2]]]);
//# sourceMappingURL=main.87c30f08.chunk.js.map