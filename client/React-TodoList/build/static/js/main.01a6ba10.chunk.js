(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{38:function(e,t,r){e.exports=r(51)},45:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"login",(function(){return v})),r.d(n,"getMe",(function(){return k})),r.d(n,"createUser",(function(){return E})),r.d(n,"logout",(function(){return y}));var a={};r.r(a),r.d(a,"api",(function(){return O}));var o={};r.r(o),r.d(o,"turnOn",(function(){return S})),r.d(o,"turnOff",(function(){return C}));var s={};r.r(s),r.d(s,"getTodos",(function(){return L})),r.d(s,"updateTodo",(function(){return P})),r.d(s,"deleteTodo",(function(){return _})),r.d(s,"newTodo",(function(){return D}));var c={};r.r(c),r.d(c,"api",(function(){return U}));var u=r(0),l=r.n(u),i=r(34),d=r.n(i),f=r(20),p=r(4),m=r(24),h=r(12),b=r(37),g=r(3),x=r.n(g),w=r(7),v=function(){var e=Object(w.a)(x.a.mark((function e(t,r){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=t.effects,e.next=3,a.auth.api.login(r);case 3:if(n.auth=e.sent,!n.auth.error){e.next=8;break}return e.next=7,j();case 7:n.auth.error=e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),k=function(){var e=Object(w.a)(x.a.mark((function e(t){var r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,n=t.effects,e.next=3,n.auth.api.getMe();case 3:if(r.auth=e.sent,!r.auth.error){e.next=8;break}return e.next=7,j();case 7:r.auth.error=e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(w.a)(x.a.mark((function e(t,r){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=t.effects,e.next=3,a.auth.api.createUser(r);case 3:if(n.auth=e.sent,!n.auth.error){e.next=8;break}return e.next=7,j();case 7:n.auth.error=e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),y=function(){var e=Object(w.a)(x.a.mark((function e(t){var r,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,n=t.effects,e.next=3,n.auth.api.logout();case 3:if(null==(a=e.sent).error){e.next=11;break}return r.auth.error=a.error,e.next=8,j();case 8:r.auth.error=e.sent,e.next=12;break;case 11:r.auth=a;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){return new Promise((function(e){setTimeout((function(){e(null)}),2e3)}))},O={login:function(e){return Object(w.a)(x.a.mark((function t(){var r,n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={isAuthenticated:!1,user:null,error:null},t.prev=1,t.next=4,fetch("/api/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});case 4:return n=t.sent,t.next=7,n.json();case 7:return(a=t.sent).success?(r.isAuthenticated=!0,r.user=a.message):a.error?r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":r.error=a.message,t.abrupt("return",r);case 12:return t.prev=12,t.t0=t.catch(1),console.log(t.t0),r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()},getMe:function(){return Object(w.a)(x.a.mark((function e(){var t,r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={isAuthenticated:!1,user:null,error:null},e.prev=1,e.next=4,fetch("/api/v1/auth/getMe",{method:"GET",credentials:"include"});case 4:return r=e.sent,e.next=7,r.json();case 7:return(n=e.sent).success&&(t.isAuthenticated=!0,t.user=n.message),e.abrupt("return",t);case 12:return e.prev=12,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",t);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()},createUser:function(e){return Object(w.a)(x.a.mark((function t(){var r,n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={isAuthenticated:!1,user:null,error:null},t.prev=1,t.next=4,fetch("/api/v1/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});case 4:return n=t.sent,t.next=7,n.json();case 7:return(a=t.sent).success?(r.isAuthenticated=!0,r.user=a.message):a.error?r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":r.error=a.message,t.abrupt("return",r);case 12:return t.prev=12,t.t0=t.catch(1),console.log(t.t0),r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()},logout:function(){return Object(w.a)(x.a.mark((function e(){var t,r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={isAuthenticated:!1,user:null,error:null},e.prev=1,e.next=4,fetch("/api/v1/auth/logout",{method:"GET",credentials:"include"});case 4:return r=e.sent,e.next=7,r.json();case 7:return(n=e.sent).error?t.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":n.success||(t.error=n.message),e.abrupt("return",t);case 12:return e.prev=12,e.t0=e.catch(1),console.log(e.t0),t.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",e.abrupt("return",t);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})))()}},N={state:{isAuthenticated:!1,error:null,user:null},actions:n,effects:a},T=window.matchMedia("(prefers-color-scheme: dark)").matches;T&&document.documentElement.classList.add("mode-dark");var S=function(e){var t=e.state;document.documentElement.classList.add("mode-dark"),t.darkMode.isEnabled=!0},C=function(e){var t=e.state;document.documentElement.classList.remove("mode-dark"),t.darkMode.isEnabled=!1},A={state:{isEnabled:T},actions:o},M=r(13),L=function(){var e=Object(w.a)(x.a.mark((function e(t){var r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,n=t.effects,e.next=3,n.todos.api.getTodos();case 3:if(r.todos=e.sent,!r.todos.error){e.next=8;break}return e.next=7,J();case 7:r.todos.error=e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(w.a)(x.a.mark((function e(t,r){var n,a,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=t.effects,e.next=3,a.todos.api.updateTodo(r.body,r.id);case 3:if(o=e.sent,s=n.todos.todos.findIndex((function(e){return e._id===r.id})),!o.error){e.next=12;break}return n.todos.error=o.error,e.next=9,J();case 9:n.todos.error=e.sent,e.next=13;break;case 12:n.todos.todos[s]=o.updatedTodo;case 13:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),_=function(){var e=Object(w.a)(x.a.mark((function e(t,r){var n,a,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=t.effects,e.next=3,a.todos.api.deleteTodo(r);case 3:if(o=e.sent,s=n.todos.todos.findIndex((function(e){return e._id===r})),!o.success){e.next=9;break}n.todos.todos.splice(s,1),e.next=13;break;case 9:return n.todos.error=o.error,e.next=12,J();case 12:n.todos.error=e.sent;case 13:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),D=function(){var e=Object(w.a)(x.a.mark((function e(t,r){var n,a,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=t.effects,e.next=3,a.todos.api.newTodo(r);case 3:if(!(o=e.sent).error){e.next=11;break}return n.todos.error=o.error,e.next=8,J();case 8:n.todos.error=e.sent,e.next=12;break;case 11:o.newTodo&&(s=[o.newTodo].concat(Object(M.a)(n.todos.todos)),n.todos.todos=s);case 12:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),J=function(){return new Promise((function(e){setTimeout((function(){e(null)}),2e3)}))},U={getTodos:function(){return Object(w.a)(x.a.mark((function e(){var t,r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:null,todos:[]},e.prev=1,e.next=4,fetch("/api/v1/todos",{method:"GET",credentials:"include"});case 4:return r=e.sent,e.next=7,r.json();case 7:return(n=e.sent).success?t.todos=n.message:n.error?t.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":t.error=n.message,e.abrupt("return",t);case 12:return e.prev=12,e.t0=e.catch(1),console.log(e.t0),t.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",e.abrupt("return",t);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})))()},newTodo:function(e){return Object(w.a)(x.a.mark((function t(){var r,n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={error:null,newTodo:null},t.prev=1,t.next=4,fetch("/api/v1/todos",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});case 4:return n=t.sent,t.next=7,n.json();case 7:return(a=t.sent).success?r.newTodo=a.message:a.error?r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":r.error=a.message,t.abrupt("return",r);case 12:return t.prev=12,t.t0=t.catch(1),console.log(t.t0),r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()},updateTodo:function(e,t){return Object(w.a)(x.a.mark((function r(){var n,a,o;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={error:null,updatedTodo:null},r.prev=1,r.next=4,fetch("/api/v1/todos/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});case 4:return a=r.sent,r.next=7,a.json();case 7:return(o=r.sent).success?n.updatedTodo=o.message:o.error?n.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":n.error=o.message,r.abrupt("return",n);case 12:return r.prev=12,r.t0=r.catch(1),console.log(r.t0),n.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",r.abrupt("return",n);case 17:case"end":return r.stop()}}),r,null,[[1,12]])})))()},deleteTodo:function(e){return Object(w.a)(x.a.mark((function t(){var r,n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={error:null,success:!1},t.prev=1,t.next=4,fetch("/api/v1/todos/".concat(e),{method:"DELETE",credentials:"include"});case 4:return n=t.sent,t.next=7,n.json();case 7:return(a=t.sent).success?r.success=a.success:a.error?r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":r.error=a.message,t.abrupt("return",r);case 12:return t.prev=12,t.t0=t.catch(1),console.log(t.t0),r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()}},F={state:{todos:[],error:null},actions:s,effects:c},I=Object(b.a)({darkMode:A,auth:N,todos:F}),G=Object(m.b)(),q=(r(45),r(35)),B=function(){var e=G(),t=e.state,r=t.darkMode.isEnabled,n=t.auth.isAuthenticated,a=e.actions,o=a.darkMode,s=o.turnOff,c=o.turnOn,i=a.auth.logout,d=Object(p.f)(),f=Object(q.useMediaQuery)({query:"(min-width: 1024px)"}),m=l.a.createElement(u.Fragment,null,n?l.a.createElement(u.Fragment,null,l.a.createElement("button",{className:"h-full hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none px-2",onClick:function(){return i()}},"Logout"),l.a.createElement("button",{className:"flex h-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300\r ease-in-out px-2",onClick:function(){return r?s():c()}},l.a.createElement("i",{className:"material-icons"},r?"brightness_7":"brightness_4"))):l.a.createElement(u.Fragment,null,l.a.createElement("button",{className:"h-full hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none px-2",onClick:function(){return d.push("/")}},"Login"),l.a.createElement("button",{className:"h-full hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none px-2",onClick:function(){return d.push("/register")}},"New User"),l.a.createElement("button",{className:"flex h-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300\r ease-in-out px-2",onClick:function(){return r?s():c()}},l.a.createElement("i",{className:"material-icons"},r?"brightness_7":"brightness_4")))),h=l.a.createElement("button",{className:"h-full hover:bg-white-alpha-30 transition-colors duration-300\r ease-in-out px-2"},l.a.createElement("i",{className:"material-icons"},"menu"));return l.a.createElement("div",{className:"w-full h-16 bg-light-blue-300"},l.a.createElement("div",{className:"flex flex-row justify-between w-90p h-full mx-auto"},l.a.createElement("div",{className:"flex items-center text-2xl font-hairline h-full"},"TodoList"),l.a.createElement("div",{className:"flex flex-row items-center justify-center h-full"},f?m:h)))},Q=r(16),R=r(18),z=function(e){var t=Object(u.useState)({email:null,password:null}),r=Object(R.a)(t,2),n=r[0],a=r[1],o=G(),s=o.state.auth.isAuthenticated,c=o.actions.auth,i=c.login,d=c.getMe,f=Object(p.f)();return Object(u.useEffect)((function(){s&&f.push("/todos")}),[s,f]),Object(u.useEffect)((function(){s?f.push("/todos"):d(),s&&f.push("/todos")}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white"},l.a.createElement("div",{className:"text-center  text-4xl font-hairline mb-4"},"Login"),l.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent \r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Email",name:"email",onChange:function(e){return a(Object(Q.a)(Object(Q.a)({},n),{},{email:e.target.value}))}}),l.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent\r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Password",name:"password",onChange:function(e){return a(Object(Q.a)(Object(Q.a)({},n),{},{password:e.target.value}))}}),l.a.createElement("button",{className:"bg-light-blue-300 py-2 rounded shadow focus:outline-none",onClick:function(){return i(n)}},"Login")))},H=function(){var e=G().actions.todos.newTodo,t={title:null,description:null};return l.a.createElement("div",{className:"flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white"},l.a.createElement("div",{className:"text-center  text-4xl font-hairline mb-4"},"New Todo"),l.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent \r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Title",name:"title",onChange:function(e){return t.title=e.target.value}}),l.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent\r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Description",name:"description",onChange:function(e){return t.description=e.target.value}}),l.a.createElement("button",{className:"bg-light-blue-300 py-2 rounded shadow focus:outline-none",onClick:function(){return e(t)}},"Add"))},K=function(e){var t=e.todo,r=G().actions.todos,n=r.updateTodo,a=r.deleteTodo,o=new Date(1e3*t.createdAt),s=new Intl.DateTimeFormat("en",{month:"short",day:"2-digit"}).formatToParts(o),c=Object(R.a)(s,3),u=c[0].value,i=c[2].value,d={id:t._id,body:{isdone:!t.isDone}};return l.a.createElement("div",{className:"flex flex-row items-center h-full w-full border border-black dark:border-white p-2"},l.a.createElement("input",{className:"mx-4",type:"checkbox",checked:t.isDone,onChange:function(){return n(d)}}),l.a.createElement("div",{className:"h-full w-full"},l.a.createElement("div",null,t.title),l.a.createElement("small",null,t.description," "," - ".concat(u,"/").concat(i))),l.a.createElement("button",{className:"flex h-full mx-2 focus:outline-none",onClick:function(){return a(t._id)}},l.a.createElement("i",{className:"material-icons text-red-800"},"clear")))},V=function(){var e=G(),t=e.state,r=t.auth.isAuthenticated,n=t.todos.todos,a=e.actions.todos.getTodos,o=Object(p.f)(),s=n.map((function(e,t){return l.a.createElement(K,{todo:e,key:t})}));return Object(u.useEffect)((function(){r||o.push("/"),a()}),[r]),l.a.createElement("section",null,l.a.createElement(H,null),l.a.createElement("div",{className:"flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white"},s))},W=function(){var e=Object(u.useState)({name:null,email:null,password:null}),t=Object(R.a)(e,2),r=t[0],n=t[1],a=G(),o=a.state.auth.isAuthenticated,s=a.actions.auth.createUser,c=Object(p.f)();return Object(u.useEffect)((function(){o&&c.push("/todos")}),[o,c]),l.a.createElement("div",{className:"flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white"},l.a.createElement("div",{className:"text-center  text-4xl font-hairline mb-4"},"New Account"),l.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent \r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Name",name:"name",onChange:function(e){return n(Object(Q.a)(Object(Q.a)({},r),{},{name:e.target.value}))}}),l.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent \r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Email",name:"email",onChange:function(e){return n(Object(Q.a)(Object(Q.a)({},r),{},{email:e.target.value}))}}),l.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent\r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Password",name:"password",onChange:function(e){return n(Object(Q.a)(Object(Q.a)({},r),{},{password:e.target.value}))}}),l.a.createElement("button",{className:"bg-light-blue-300 py-2 rounded shadow focus:outline-none",onClick:function(){s(r)}},"Register"))},X=function(){var e=G().state.auth.error;return l.a.createElement("div",{className:"fixed bottom-0 w-full h-16 bg-red-500 text-white transition-transform transform ".concat(null!==e?" ":"translate-y-16"," duration-200 ease-in-out")},l.a.createElement("div",{className:"flex flex-row items-center justify-center text-3xl text-center max-w-full h-full"},e))},Y=function(){var e=Object(h.c)(I,{devtools:!0});return l.a.createElement(m.a,{value:e},l.a.createElement(f.a,{basename:"/react"},l.a.createElement(B,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:z}),l.a.createElement(p.a,{exact:!0,path:"/todos",component:V}),l.a.createElement(p.a,{exact:!0,path:"/register",component:W})),l.a.createElement(X,null)))};d.a.render(l.a.createElement(Y,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.01a6ba10.chunk.js.map