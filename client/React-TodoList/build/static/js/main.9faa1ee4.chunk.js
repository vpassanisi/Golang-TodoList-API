(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{38:function(e,t,r){e.exports=r(51)},45:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"login",(function(){return v})),r.d(n,"getMe",(function(){return k})),r.d(n,"createUser",(function(){return E})),r.d(n,"logout",(function(){return y}));var a={};r.r(a),r.d(a,"api",(function(){return O}));var o={};r.r(o),r.d(o,"turnOn",(function(){return L})),r.d(o,"turnOff",(function(){return C}));var s={};r.r(s),r.d(s,"getTodos",(function(){return M})),r.d(s,"updateTodo",(function(){return I})),r.d(s,"deleteTodo",(function(){return P})),r.d(s,"newTodo",(function(){return _}));var c={};r.r(c),r.d(c,"api",(function(){return B}));var i=r(0),u=r.n(i),l=r(34),d=r.n(l),f=r(19),m=r(4),p=r(24),h=r(13),b=r(37),g=r(3),x=r.n(g),w=r(7),v=function(){var e=Object(w.a)(x.a.mark((function e(t,r){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=t.effects,e.next=3,a.auth.api.login(r);case 3:if(n.auth=e.sent,!n.auth.error){e.next=8;break}return e.next=7,j();case 7:n.auth.error=e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),k=function(){var e=Object(w.a)(x.a.mark((function e(t){var r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,n=t.effects,e.next=3,n.auth.api.getMe();case 3:if(r.auth=e.sent,!r.auth.error){e.next=8;break}return e.next=7,j();case 7:r.auth.error=e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(w.a)(x.a.mark((function e(t,r){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=t.effects,e.next=3,a.auth.api.createUser(r);case 3:if(n.auth=e.sent,!n.auth.error){e.next=8;break}return e.next=7,j();case 7:n.auth.error=e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),y=function(){var e=Object(w.a)(x.a.mark((function e(t){var r,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,n=t.effects,e.next=3,n.auth.api.logout();case 3:if(null==(a=e.sent).error){e.next=11;break}return r.auth.error=a.error,e.next=8,j();case 8:r.auth.error=e.sent,e.next=12;break;case 11:r.auth=a;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){return new Promise((function(e){setTimeout((function(){e(null)}),2e3)}))},O={login:function(e){return Object(w.a)(x.a.mark((function t(){var r,n,a,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={isAuthenticated:!1,user:null,error:null},(n=document.getElementById("loading"))&&n.classList.remove("invisible"),t.prev=3,t.next=6,fetch("/api/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});case 6:return a=t.sent,t.next=9,a.json();case 9:return(o=t.sent).success?(r.isAuthenticated=!0,r.user=o.message):o.error?r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":r.error=o.message,n&&n.classList.add("invisible"),t.abrupt("return",r);case 15:return t.prev=15,t.t0=t.catch(3),console.log(t.t0),r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",n&&n.classList.add("invisible"),t.abrupt("return",r);case 21:case"end":return t.stop()}}),t,null,[[3,15]])})))()},getMe:function(){return Object(w.a)(x.a.mark((function e(){var t,r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={isAuthenticated:!1,user:null,error:null},e.prev=1,e.next=4,fetch("/api/v1/auth/getMe",{method:"GET",credentials:"include"});case 4:return r=e.sent,e.next=7,r.json();case 7:return(n=e.sent).success&&(t.isAuthenticated=!0,t.user=n.message),e.abrupt("return",t);case 12:return e.prev=12,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",t);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()},createUser:function(e){return Object(w.a)(x.a.mark((function t(){var r,n,a,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={isAuthenticated:!1,user:null,error:null},(n=document.getElementById("loading"))&&n.classList.remove("invisible"),t.prev=3,t.next=6,fetch("/api/v1/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});case 6:return a=t.sent,t.next=9,a.json();case 9:return(o=t.sent).success?(r.isAuthenticated=!0,r.user=o.message):o.error?r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":r.error=o.message,n&&n.classList.add("invisible"),t.abrupt("return",r);case 15:return t.prev=15,t.t0=t.catch(3),console.log(t.t0),r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",n&&n.classList.add("invisible"),t.abrupt("return",r);case 21:case"end":return t.stop()}}),t,null,[[3,15]])})))()},logout:function(){return Object(w.a)(x.a.mark((function e(){var t,r,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={isAuthenticated:!1,user:null,error:null},(r=document.getElementById("loading"))&&r.classList.remove("invisible"),e.prev=3,e.next=6,fetch("/api/v1/auth/logout",{method:"GET",credentials:"include"});case 6:return n=e.sent,e.next=9,n.json();case 9:return(a=e.sent).error?t.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":a.success||(t.error=a.message),r&&r.classList.add("invisible"),e.abrupt("return",t);case 15:return e.prev=15,e.t0=e.catch(3),console.log(e.t0),t.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",r&&r.classList.add("invisible"),e.abrupt("return",t);case 21:case"end":return e.stop()}}),e,null,[[3,15]])})))()}},N={state:{isAuthenticated:!1,error:null,user:null},actions:n,effects:a},T=window.matchMedia("(prefers-color-scheme: dark)").matches;T&&document.documentElement.classList.add("mode-dark");var L=function(e){var t=e.state;document.documentElement.classList.add("mode-dark"),t.darkMode.isEnabled=!0},C=function(e){var t=e.state;document.documentElement.classList.remove("mode-dark"),t.darkMode.isEnabled=!1},S={state:{isEnabled:T},actions:o},A=r(9),M=function(){var e=Object(w.a)(x.a.mark((function e(t){var r,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,n=t.effects,e.next=3,n.todos.api.getTodos();case 3:if((a=e.sent).todos=n.todos.api.sortTodos(a.todos),r.todos=a,!r.todos.error){e.next=10;break}return e.next=9,F();case 9:r.todos.error=e.sent;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(w.a)(x.a.mark((function e(t,r){var n,a,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=t.effects,e.next=3,a.todos.api.updateTodo(r.body,r.id);case 3:if(o=e.sent,s=n.todos.todos.findIndex((function(e){return e._id===r.id})),!o.error){e.next=12;break}return n.todos.error=o.error,e.next=9,F();case 9:n.todos.error=e.sent,e.next=14;break;case 12:n.todos.todos[s]=o.updatedTodo,n.todos.todos=a.todos.api.sortTodos(n.todos.todos);case 14:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),P=function(){var e=Object(w.a)(x.a.mark((function e(t,r){var n,a,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=t.effects,e.next=3,a.todos.api.deleteTodo(r);case 3:if(o=e.sent,s=n.todos.todos.findIndex((function(e){return e._id===r})),!o.success){e.next=9;break}n.todos.todos.splice(s,1),e.next=13;break;case 9:return n.todos.error=o.error,e.next=12,F();case 12:n.todos.error=e.sent;case 13:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),_=function(){var e=Object(w.a)(x.a.mark((function e(t,r){var n,a,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=t.effects,e.next=3,a.todos.api.newTodo(r);case 3:if(!(o=e.sent).error){e.next=11;break}return n.todos.error=o.error,e.next=8,F();case 8:n.todos.error=e.sent,e.next=12;break;case 11:o.newTodo&&(s=[o.newTodo].concat(Object(A.a)(n.todos.todos)),n.todos.todos=s);case 12:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),F=function(){return new Promise((function(e){setTimeout((function(){e(null)}),2e3)}))},B={getTodos:function(){return Object(w.a)(x.a.mark((function e(){var t,r,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:null,todos:[]},(r=document.getElementById("loading"))&&r.classList.remove("invisible"),e.prev=3,e.next=6,fetch("/api/v1/todos",{method:"GET",credentials:"include"});case 6:return n=e.sent,e.next=9,n.json();case 9:return(a=e.sent).success?t.todos=a.message:a.error?t.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":t.error=a.message,r&&r.classList.add("invisible"),e.abrupt("return",t);case 15:return e.prev=15,e.t0=e.catch(3),console.log(e.t0),t.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",r&&r.classList.add("invisible"),e.abrupt("return",t);case 21:case"end":return e.stop()}}),e,null,[[3,15]])})))()},newTodo:function(e){return Object(w.a)(x.a.mark((function t(){var r,n,a,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={error:null,newTodo:null},(n=document.getElementById("loading"))&&n.classList.remove("invisible"),t.prev=3,t.next=6,fetch("/api/v1/todos",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});case 6:return a=t.sent,t.next=9,a.json();case 9:return(o=t.sent).success?r.newTodo=o.message:o.error?r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":r.error=o.message,n&&n.classList.add("invisible"),t.abrupt("return",r);case 15:return t.prev=15,t.t0=t.catch(3),console.log(t.t0),r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",n&&n.classList.add("invisible"),t.abrupt("return",r);case 21:case"end":return t.stop()}}),t,null,[[3,15]])})))()},updateTodo:function(e,t){return Object(w.a)(x.a.mark((function r(){var n,a,o,s;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={error:null,updatedTodo:null},(a=document.getElementById("loading"))&&a.classList.remove("invisible"),r.prev=3,r.next=6,fetch("/api/v1/todos/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});case 6:return o=r.sent,r.next=9,o.json();case 9:return(s=r.sent).success?n.updatedTodo=s.message:s.error?n.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":n.error=s.message,a&&a.classList.add("invisible"),r.abrupt("return",n);case 15:return r.prev=15,r.t0=r.catch(3),console.log(r.t0),n.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",a&&a.classList.add("invisible"),r.abrupt("return",n);case 21:case"end":return r.stop()}}),r,null,[[3,15]])})))()},deleteTodo:function(e){return Object(w.a)(x.a.mark((function t(){var r,n,a,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={error:null,success:!1},(n=document.getElementById("loading"))&&n.classList.remove("invisible"),t.prev=3,t.next=6,fetch("/api/v1/todos/".concat(e),{method:"DELETE",credentials:"include"});case 6:return a=t.sent,t.next=9,a.json();case 9:return(o=t.sent).success?r.success=o.success:o.error?r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)":r.error=o.message,n&&n.classList.add("invisible"),t.abrupt("return",r);case 15:return t.prev=15,t.t0=t.catch(3),console.log(t.t0),r.error="Something went wrong (\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b)",n&&n.classList.add("invisible"),t.abrupt("return",r);case 21:case"end":return t.stop()}}),t,null,[[3,15]])})))()},sortTodos:function(e){var t=e.filter((function(e){return e.done})),r=e.filter((function(e){return!e.done}));return t.sort((function(e,t){return t.createdAt-e.createdAt})),r.sort((function(e,t){return t.createdAt-e.createdAt})),[].concat(Object(A.a)(r),Object(A.a)(t))}},D={state:{todos:[],error:null},actions:s,effects:c},J=Object(b.a)({darkMode:S,auth:N,todos:D}),U=Object(p.b)(),G=(r(45),r(18)),R=r(35),q=function(e){var t=e.isOpen,r=e.setIsOpen,n=U(),a=n.state,o=a.darkMode.isEnabled,s=a.auth.isAuthenticated,c=n.actions,l=c.darkMode,d=l.turnOff,f=l.turnOn,p=c.auth.logout,h=Object(m.f)();return u.a.createElement(i.Fragment,null,u.a.createElement("div",{className:"fixed flex flex-col items-center left-0 top-0 h-full w-48 bg-white dark:bg-dark-gray-800 dark:text-white shadow py-4 transform transition-transform ".concat(t?"":"-translate-x-48"," duration-300 ease-in-out z-10")},u.a.createElement("button",{className:"flex items-center justify-center py-4 w-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300\r ease-in-out px-2 border-b-2 border-gray-700 dark:border-gray-400",onClick:function(){return o?d():f()}},u.a.createElement("i",{className:"material-icons"},o?"brightness_7":"brightness_4")),u.a.createElement("a",{className:"flex items-center justify-center py-4 w-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300\r ease-in-out px-2 border-b-2 border-gray-700 dark:border-gray-400",href:"/"},"Pick A Framework"),s?u.a.createElement("button",{className:"flex items-center justify-center py-4 w-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300\r ease-in-out px-2 border-b-2 border-gray-700 dark:border-gray-400",onClick:function(){p(),r(!1)}},"Logout"):u.a.createElement(i.Fragment,null,u.a.createElement("button",{className:"flex items-center justify-center py-4 w-full dark:text-white hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300\r ease-in-out px-2 border-b-2 border-gray-700 dark:border-gray-400",onClick:function(){h.push("/"),r(!1)}},"Login"),u.a.createElement("button",{className:"flex items-center justify-center py-4 w-full dark:text-white hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300\r ease-in-out px-2 border-b-2 border-gray-700 dark:border-gray-400",onClick:function(){h.push("/register"),r(!1)}},"Register"))),u.a.createElement("button",{className:"fixed left-0 right-0 top-0 bottom-0 ".concat(t?"bg-black-alpha-50  h-full w-full":""," transition-colors duration-300 ease-in-out"),onClick:function(){return r(!1)}}))},z=function(){var e=U(),t=e.state,r=t.darkMode.isEnabled,n=t.auth.isAuthenticated,a=e.actions,o=a.darkMode,s=o.turnOff,c=o.turnOn,l=a.auth.logout,d=Object(m.f)(),f=Object(i.useState)(!1),p=Object(G.a)(f,2),h=p[0],b=p[1],g=Object(R.useMediaQuery)({query:"(min-width: 1024px)"}),x=u.a.createElement(i.Fragment,null,n?u.a.createElement(i.Fragment,null,u.a.createElement("button",{className:"h-full hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none px-2",onClick:function(){return l()}},"Logout"),u.a.createElement("a",{className:"flex items-center text-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none w-24",href:"/"},"Pick A Framework"),u.a.createElement("button",{className:"flex items-center h-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300\r ease-in-out px-2",onClick:function(){return r?s():c()}},u.a.createElement("i",{className:"material-icons"},r?"brightness_7":"brightness_4"))):u.a.createElement(i.Fragment,null,u.a.createElement("button",{className:"h-full hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none px-2",onClick:function(){return d.push("/")}},"Login"),u.a.createElement("button",{className:"h-full hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none px-2",onClick:function(){return d.push("/register")}},"Regsiter"),u.a.createElement("a",{className:"flex items-center text-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none w-24",href:"/"},"Pick A Framework"),u.a.createElement("button",{className:"flex items-center h-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300\r ease-in-out px-2",onClick:function(){return r?s():c()}},u.a.createElement("i",{className:"material-icons"},r?"brightness_7":"brightness_4")))),w=u.a.createElement("button",{onClick:function(){return b(!h)},className:"h-full hover:bg-white-alpha-30 transition-colors duration-300\r ease-in-out px-2 focus:outline-none"},u.a.createElement("i",{className:"material-icons"},"menu"));return u.a.createElement("div",{className:"fixed top-0 w-full h-16 bg-light-blue-300"},u.a.createElement(q,{isOpen:h,setIsOpen:b}),u.a.createElement("div",{className:"flex flex-row justify-between w-90p h-full mx-auto"},u.a.createElement("div",{className:"flex items-center text-2xl font-hairline h-full"},"TodoList"),u.a.createElement("div",{className:"flex flex-row items-center justify-center h-full"},g?x:w)),u.a.createElement("div",{id:"loading",className:"progress-line invisible"}))},Q=r(16),H=function(e){var t=Object(i.useState)({email:null,password:null}),r=Object(G.a)(t,2),n=r[0],a=r[1],o=U(),s=o.state.auth.isAuthenticated,c=o.actions.auth,l=c.login,d=c.getMe,f=Object(m.f)();return Object(i.useEffect)((function(){s&&f.push("/todos")}),[s,f]),Object(i.useEffect)((function(){s?f.push("/todos"):d(),s&&f.push("/todos")}),[]),u.a.createElement("div",null,u.a.createElement("div",{className:"flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white"},u.a.createElement("div",{className:"text-center  text-4xl font-hairline mb-4"},"Login"),u.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent \r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Email",name:"email",onChange:function(e){return a(Object(Q.a)(Object(Q.a)({},n),{},{email:e.target.value}))}}),u.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent\r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Password",name:"password",onChange:function(e){return a(Object(Q.a)(Object(Q.a)({},n),{},{password:e.target.value}))}}),u.a.createElement("button",{className:"bg-light-blue-300 py-2 rounded shadow focus:outline-none",onClick:function(){return l(n)}},"Login")),u.a.createElement("div",{className:"flex flex-col items-center justify-center w-full mt-4"},u.a.createElement("div",{className:"mb-2 text-black dark:text-white"},"or"),u.a.createElement("button",{className:"bg-light-blue-300 py-2 px-4 rounded shadow",onClick:function(){return l({email:"Demo@gmail.com",password:"123456"})}},"use the Demo account")))},K=function(){var e=U().actions.todos.newTodo,t={title:null,description:null};return u.a.createElement("div",{className:"flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white"},u.a.createElement("div",{className:"text-center  text-4xl font-hairline mb-4"},"New Todo"),u.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent \r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Title",name:"title",onChange:function(e){return t.title=e.target.value}}),u.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent\r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Description",name:"description",onChange:function(e){return t.description=e.target.value}}),u.a.createElement("button",{className:"bg-light-blue-300 py-2 rounded shadow focus:outline-none",onClick:function(){return e(t)}},"Add"))},V=function(e){var t=e.todo,r=U().actions.todos,n=r.updateTodo,a=r.deleteTodo,o=new Intl.DateTimeFormat("en",{month:"short",day:"2-digit"}).formatToParts(new Date(1e3*t.createdAt)),s=Object(G.a)(o,3),c=s[0].value,i=s[2].value,l={id:t._id,body:{done:!t.done}};return u.a.createElement("div",{className:"flex flex-row items-center h-full w-full border border-black dark:border-white p-2 m-1"},u.a.createElement("input",{className:"mx-4",type:"checkbox",checked:t.done,onChange:function(){return n(l)}}),u.a.createElement("div",{className:"h-full w-full"},u.a.createElement("div",null,t.title),u.a.createElement("small",null,t.description," "," - ".concat(c,"/").concat(i))),u.a.createElement("button",{className:"flex h-full mx-2 focus:outline-none",onClick:function(){return a(t._id)}},u.a.createElement("i",{className:"material-icons text-red-800"},"clear")))},W=function(){var e=U(),t=e.state,r=t.auth.isAuthenticated,n=t.todos.todos,a=e.actions.todos.getTodos,o=Object(m.f)(),s=n.map((function(e,t){return u.a.createElement(V,{todo:e,key:t})}));return Object(i.useEffect)((function(){r||o.push("/"),a()}),[r]),u.a.createElement("section",null,u.a.createElement(K,null),u.a.createElement("div",{className:"flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white"},s))},X=function(){var e=Object(i.useState)({name:null,email:null,password:null}),t=Object(G.a)(e,2),r=t[0],n=t[1],a=U(),o=a.state.auth.isAuthenticated,s=a.actions.auth.createUser,c=Object(m.f)();return Object(i.useEffect)((function(){o&&c.push("/todos")}),[o,c]),u.a.createElement("div",{className:"flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white"},u.a.createElement("div",{className:"text-center  text-4xl font-hairline mb-4"},"New Account"),u.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent \r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Name",name:"name",onChange:function(e){return n(Object(Q.a)(Object(Q.a)({},r),{},{name:e.target.value}))}}),u.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent \r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Email",name:"email",onChange:function(e){return n(Object(Q.a)(Object(Q.a)({},r),{},{email:e.target.value}))}}),u.a.createElement("input",{className:"border-b-2 border-black dark:border-white bg-transparent\r focus:border-light-blue-300 mb-4 p-2 transition-colors\r duration-300 ease-in-out focus:outline-none placeholder-gray-700\r dark-placeholder:placeholder-gray-300",type:"text",placeholder:"Password",name:"password",onChange:function(e){return n(Object(Q.a)(Object(Q.a)({},r),{},{password:e.target.value}))}}),u.a.createElement("button",{className:"bg-light-blue-300 py-2 rounded shadow focus:outline-none",onClick:function(){s(r)}},"Register"))},Y=function(){var e=U().state,t=e.auth.error,r=e.todos.error;return u.a.createElement("div",{className:"fixed bottom-0 w-full h-16 bg-red-500 text-white transition-transform transform ".concat(null!==t||null!==r?" ":"translate-y-16"," duration-200 ease-in-out")},u.a.createElement("div",{className:"flex flex-row items-center justify-center text-3xl text-center max-w-full h-full"},t,r))},Z=function(){var e=Object(h.c)(J,{devtools:"http://localhost:5000"});return u.a.createElement(p.a,{value:e},u.a.createElement(f.a,{basename:"/react"},u.a.createElement(z,null),u.a.createElement(m.c,null,u.a.createElement(m.a,{exact:!0,path:"/",component:H}),u.a.createElement(m.a,{exact:!0,path:"/todos",component:W}),u.a.createElement(m.a,{exact:!0,path:"/register",component:X})),u.a.createElement(Y,null)))};d.a.render(u.a.createElement(Z,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9faa1ee4.chunk.js.map