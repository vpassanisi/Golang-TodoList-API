(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"router",(function(){return Le}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Fragment",[n("Navbar"),n("router-view"),n("Error")],1)},s=[],a=n("5530"),i=n("2f62"),c=n("3f08"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fixed top-0 w-full h-16 bg-vue-green-400 shadow"},[n("Sidebar",{attrs:{isOpen:e.isOpen,toggleIsOpen:e.toggleIsOpen}}),n("div",{staticClass:"flex flex-row items-center justify-between w-90p mx-auto h-full"},[n("div",{staticClass:"flex items-center justify-center h-full text-3xl font-hairline"},[e._v(" TodoList ")]),n("div",{staticClass:"flex flex-row h-full"},["md"===e.$mq||"sm"===e.$mq?n("button",{staticClass:"flex items-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none",on:{click:function(t){e.isOpen=!e.isOpen}}},[n("i",{staticClass:"material-icons"},[e._v("menu")])]):n("div",{staticClass:"flex flex-row items-center justify-center h-full"},[e.isAuthenticated?n("button",{staticClass:"flex items-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none",on:{click:e.logout}},[e._v(" Logout ")]):e._e(),e.isAuthenticated?e._e():n("button",{staticClass:"flex items-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none",on:{click:e.pushRegister}},[e._v(" Register ")]),e.isAuthenticated?e._e():n("button",{staticClass:"flex items-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none",on:{click:e.pushLogin}},[e._v(" Login ")]),n("button",{staticClass:"flex items-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none",on:{click:e.toggleDarkMode}},[e.darkMode?n("i",{staticClass:"material-icons"},[e._v("brightness_7")]):n("i",{staticClass:"material-icons"},[e._v("brightness_4")])])])])]),n("div",{staticClass:"progress-line invisible",attrs:{id:"loading"}})],1)},l=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"fixed flex flex-col items-center left-0 top-0 bottom-0 h-full w-48 bg-white dark:bg-dark-gray-800 transform z-10 transition-transform transform duration-300 ease-in-out shadow",class:{"-translate-x-48":!e.isOpen}},[n("button",{staticClass:"flex items-center justify-center w-full h-16 focus:outline-none border-b-2 border-gray-300 dark:border-gray-600",on:{click:e.toggleDarkMode}},[e.darkMode?n("i",{staticClass:"material-icons text-white"},[e._v("brightness_7")]):n("i",{staticClass:"material-icons"},[e._v("brightness_4")])]),e.isAuthenticated?n("button",{staticClass:"dark:text-white w-full hover:bg-black-alpha-20 transition-colors duration-300 ease-in-out py-4 focus:outline-none border-b-2 border-gray-300 dark:border-gray-600",on:{click:e.handleLogout}},[e._v("Logout")]):e._e(),e.isAuthenticated?e._e():n("button",{staticClass:"dark:text-white w-full hover:bg-black-alpha-20 transition-colors duration-300 ease-in-out py-4 focus:outline-none border-b-2 border-gray-300 dark:border-gray-600",on:{click:e.pushLogin}},[e._v("Login")]),e.isAuthenticated?e._e():n("button",{staticClass:"dark:text-white w-full hover:bg-black-alpha-20 transition-colors duration-300 ease-in-out py-4 focus:outline-none border-b-2 border-gray-300 dark:border-gray-600",on:{click:e.pushRegister}},[e._v("Register")])]),n("button",{staticClass:"fixed left-0 right-0 top-0 bottom-0 transition-colors duration-300 ease-in-out focus:outline-none",class:{"bg-black-alpha-50 h-full w-full":e.isOpen},on:{click:e.toggleIsOpen}})])},m=[],h={name:"Sidebar",props:["isOpen","toggleIsOpen"],methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["turnOn","turnOff","logout"])),{},{toggleDarkMode:function(){this.darkMode?this.turnOff():this.turnOn()},handleLogout:function(){this.logout(),this.toggleIsOpen()},pushLogin:function(){"/"!==this.$router.currentRoute.path&&this.$router.push("/"),this.toggleIsOpen()},pushRegister:function(){"/register"!==this.$router.currentRoute.path&&this.$router.push("/register"),this.toggleIsOpen()}}),computed:Object(i["c"])({darkMode:function(e){return e.darkMode.darkMode},isAuthenticated:function(e){return e.auth.isAuthenticated}})},p=h,f=n("2877"),g=Object(f["a"])(p,d,m,!1,null,null,null),b=g.exports,v={name:"Navbar",components:{Sidebar:b},data:function(){var e=this;return{isOpen:!1,toggleIsOpen:function(){e.isOpen=!e.isOpen}}},methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["turnOn","turnOff","logout"])),{},{toggleDarkMode:function(){this.darkMode?this.turnOff():this.turnOn()},pushRegister:function(){"/register"!==this.$router.currentRoute.path&&this.$router.push("/register")},pushLogin:function(){"/"!==this.$router.currentRoute.path&&this.$router.push("/")}}),computed:Object(i["c"])({darkMode:function(e){return e.darkMode.darkMode},isAuthenticated:function(e){return e.auth.isAuthenticated}})},w=v,x=Object(f["a"])(w,u,l,!1,null,null,null),k=x.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fixed bottom-0 flex items-center justify-center bg-red-500 text-white text-2xl w-full h-16 transition-transform transform duration-200 ease-in-out",class:{"translate-y-16":!e.authError}},[e._v(e._s(e.authError))])},y=[],O={name:"Error",computed:Object(i["c"])({authError:function(e){return e.auth.error}})},E=O,j=Object(f["a"])(E,T,y,!1,null,null,null),_=j.exports,C={name:"App",components:{Navbar:k,Error:_,Fragment:c["a"]},methods:Object(a["a"])({},Object(i["b"])(["turnOn"])),mounted:function(){window.matchMedia("(prefers-color-scheme: dark)").matches&&this.turnOn()}},A=C,L=Object(f["a"])(A,o,s,!1,null,null,null),$=L.exports,S=n("8c4f"),M=n("660e"),R={darkMode:!1},I={darkMode:function(e){return e.darkMode}},N={turnOn:function(e){var t=e.commit;document.documentElement.classList.add("mode-dark"),t("setOn")},turnOff:function(e){var t=e.commit;document.documentElement.classList.remove("mode-dark"),t("setOff")}},P={setOn:function(e){e.darkMode=!0},setOff:function(e){e.darkMode=!1}},D={state:R,getters:I,actions:N,mutations:P},B=(n("d3b7"),n("96cf"),n("1da1")),J={isAuthenticated:!1,user:null,error:null},U={},F={login:function(e,t){return Object(B["a"])(regeneratorRuntime.mark((function n(){var r,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,document.getElementById("loading").classList.remove("invisible"),n.prev=2,n.next=5,fetch("/api/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});case 5:return o=n.sent,n.next=8,o.json();case 8:s=n.sent,s.success?(r("setLogin",s.message),Le.push("/todos")):s.error?(r("setErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return r("clearAuthErr")}),2e3)):(r("setErr",s.message),setTimeout((function(){return r("clearAuthErr")}),2e3)),n.next=17;break;case 12:n.prev=12,n.t0=n["catch"](2),console.log(n.t0),r("setErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return r("clearAuthErr")}),2e3);case 17:document.getElementById("loading").classList.add("invisible");case 18:case"end":return n.stop()}}),n,null,[[2,12]])})))()},getMe:function(e){return Object(B["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,fetch("/api/v1/auth/getMe",{method:"GET",credentials:"include"});case 4:return r=t.sent,t.next=7,r.json();case 7:o=t.sent,o.success&&(n("setLogin",o.message),Le.push("/todos")),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},logout:function(e){return Object(B["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,document.getElementById("loading").classList.remove("invisible"),t.prev=2,t.next=5,fetch("/api/v1/auth/logout",{method:"GET",credentials:"include"});case 5:return r=t.sent,t.next=8,r.json();case 8:o=t.sent,o.success?(n("setLogout"),Le.push("/")):o.error?(n("setErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return n("clearAuthErr")}),2e3)):(n("setErr",o.message),setTimeout((function(){return n("clearAuthErr")}),2e3)),t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](2),console.log(t.t0),n("setErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return n("clearAuthErr")}),2e3);case 17:document.getElementById("loading").classList.add("invisible");case 18:case"end":return t.stop()}}),t,null,[[2,12]])})))()},createUser:function(e,t){return Object(B["a"])(regeneratorRuntime.mark((function n(){var r,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,document.getElementById("loading").classList.remove("invisible"),n.prev=2,n.next=5,fetch("/api/v1/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});case 5:return o=n.sent,n.next=8,o.json();case 8:s=n.sent,s.success?(r("setLogin",s.message),Le.push("/todos")):s.error?(r("setErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return r("clearAuthErr")}),2e3)):(r("setErr",s.message),setTimeout((function(){return r("clearAuthErr")}),2e3)),n.next=17;break;case 12:n.prev=12,n.t0=n["catch"](2),console.log(n.t0),r("setErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return r("clearAuthErr")}),2e3);case 17:document.getElementById("loading").classList.add("invisible");case 18:case"end":return n.stop()}}),n,null,[[2,12]])})))()}},G={setLogin:function(e,t){e.user=t,e.isAuthenticated=!0},setLogout:function(e){e.user=null,e.isAuthenticated=!1},setErr:function(e,t){e.error=t},clearAuthErr:function(e){e.error=null}},q={state:J,getters:U,actions:F,mutations:G},z=(n("99af"),n("4de4"),n("c740"),n("a434"),n("2909")),H={todos:[],error:null},K={},Q={getTodos:function(e){return Object(B["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,document.getElementById("loading").classList.remove("invisible"),t.prev=2,t.next=5,fetch("/api/v1/todos",{method:"GET",credentials:"include"});case 5:return r=t.sent,t.next=8,r.json();case 8:o=t.sent,o.success?(n("setTodos",o.message),n("sortTodos")):o.error?(n("setTodosErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return n("clearTodosErr")}),2e3)):(n("setTodosErr",o.message),setTimeout((function(){return n("clearTodosErr")}),2e3)),t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](2),console.log(t.t0),n("setTodosErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return n("clearTodosErr")}),2e3);case 17:document.getElementById("loading").classList.add("invisible");case 18:case"end":return t.stop()}}),t,null,[[2,12]])})))()},newTodo:function(e,t){return Object(B["a"])(regeneratorRuntime.mark((function n(){var r,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,document.getElementById("loading").classList.remove("invisible"),n.prev=2,n.next=5,fetch("/api/v1/todos",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});case 5:return o=n.sent,n.next=8,o.json();case 8:s=n.sent,s.success?r("setNewTodo",s.message):s.error?(r("setTodosErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return r("clearTodosErr")}),2e3)):(r("setTodosErr",s.message),setTimeout((function(){return r("clearTodosErr")}),2e3)),n.next=17;break;case 12:n.prev=12,n.t0=n["catch"](2),console.log(n.t0),r("setTodosErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return r("clearTodosErr")}),2e3);case 17:document.getElementById("loading").classList.add("invisible");case 18:case"end":return n.stop()}}),n,null,[[2,12]])})))()},updateTodo:function(e,t){return Object(B["a"])(regeneratorRuntime.mark((function n(){var r,o,s,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=t.body,s=t.id,document.getElementById("loading").classList.remove("invisible"),n.prev=3,n.next=6,fetch("/api/v1/todos/".concat(s),{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)});case 6:return a=n.sent,n.next=9,a.json();case 9:i=n.sent,i.success?(r("setUpdateTodo",i.message),r("sortTodos")):i.error?(r("setTodosErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return r("clearTodosErr")}),2e3)):(r("setTodosErr",i.message),setTimeout((function(){return r("clearTodosErr")}),2e3)),n.next=18;break;case 13:n.prev=13,n.t0=n["catch"](3),console.log(n.t0),r("setTodosErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return r("clearTodosErr")}),2e3);case 18:document.getElementById("loading").classList.add("invisible");case 19:case"end":return n.stop()}}),n,null,[[3,13]])})))()},deleteTodo:function(e,t){return Object(B["a"])(regeneratorRuntime.mark((function n(){var r,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,document.getElementById("loading").classList.remove("invisible"),n.prev=2,n.next=5,fetch("/api/v1/todos/".concat(t),{method:"DELETE",credentials:"include"});case 5:return o=n.sent,n.next=8,o.json();case 8:s=n.sent,s.success?r("setDeleteTodo",t):s.error?(r("setTodosErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return r("clearTodosErr")}),2e3)):(r("setTodosErr",s.message),setTimeout((function(){return r("clearTodosErr")}),2e3)),n.next=17;break;case 12:n.prev=12,n.t0=n["catch"](2),console.log(n.t0),r("setTodosErr","Something went wrong (╯°□°）╯︵ ┻━┻)"),setTimeout((function(){return r("clearTodosErr")}),2e3);case 17:document.getElementById("loading").classList.add("invisible");case 18:case"end":return n.stop()}}),n,null,[[2,12]])})))()}},V={setTodos:function(e,t){e.todos=t},setTodosErr:function(e,t){e.error=t},setNewTodo:function(e,t){e.todos=[t].concat(Object(z["a"])(e.todos))},setUpdateTodo:function(e,t){var n=e.todos.findIndex((function(e){return e._id===t._id}));e[n]=t},setDeleteTodo:function(e,t){var n=e.todos.findIndex((function(e){return e._id===t}));e.todos.splice(n,1)},sortTodos:function(e){var t=e.todos.filter((function(e){return e.done})),n=e.todos.filter((function(e){return!e.done}));t.sort((function(e,t){return t.createdAt-e.createdAt})),n.sort((function(e,t){return t.createdAt-e.createdAt})),e.todos=[].concat(Object(z["a"])(n),Object(z["a"])(t))},clearTodosErr:function(e){e.error=null}},W={state:H,getters:K,actions:Q,mutations:V};r["a"].use(i["a"]);var X=new i["a"].Store({modules:{darkMode:D,auth:q,todosState:W}}),Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col mx-auto mt-24 bg-gray-900 dark:bg-gray-300 w-90p max-w-screen-sm p-4 rounded shadow"},[n("div",{staticClass:"text-white dark:text-black text-4xl font-hairline text-center mb-4"},[e._v("Login")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.cred.email,expression:"cred.email"}],staticClass:"dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4",attrs:{type:"text",placeholder:"Email",name:"email"},domProps:{value:e.cred.email},on:{input:function(t){t.target.composing||e.$set(e.cred,"email",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.cred.password,expression:"cred.password"}],staticClass:"dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4",attrs:{type:"text",placeholder:"Password",name:"password"},domProps:{value:e.cred.password},on:{input:function(t){t.target.composing||e.$set(e.cred,"password",t.target.value)}}}),n("button",{staticClass:"w-full p-2 bg-vue-green-500 rounded shadow focus:outline-none",on:{click:function(t){return e.handleLogin()}}},[e._v("Login")])])},Z=[],ee={name:"Login",methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["login","getMe"])),{},{handleLogin:function(){this.login(this.cred)}}),data:function(){return{cred:{}}},computed:Object(i["c"])({isAuthenticated:function(e){return e.auth.isAuthenticated}}),mounted:function(){this.isAuthenticated?this.$router.push("/todos"):this.getMe()}},te=ee,ne=Object(f["a"])(te,Y,Z,!1,null,null,null),re=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("NewTodo"),n("div",{staticClass:"flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-300 text-white dark:text-black mt-24 w-90p mx-auto max-w-screen-sm p-4 rounded shadow"},e._l(e.todos,(function(e){return n("Todo",{key:e._id,attrs:{todo:e}})})),1)],1)},se=[],ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col mx-auto mt-24 bg-gray-900 dark:bg-gray-300 w-90p max-w-screen-sm p-4 rounded shadow"},[n("div",{staticClass:"text-white dark:text-black text-4xl font-hairline text-center mb-4"},[e._v("New Todo")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodoData.title,expression:"newTodoData.title"}],staticClass:"dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4",attrs:{type:"text",placeholder:"Title",name:"title"},domProps:{value:e.newTodoData.title},on:{input:function(t){t.target.composing||e.$set(e.newTodoData,"title",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodoData.description,expression:"newTodoData.description"}],staticClass:"dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4",attrs:{type:"text",placeholder:"Description",name:"description"},domProps:{value:e.newTodoData.description},on:{input:function(t){t.target.composing||e.$set(e.newTodoData,"description",t.target.value)}}}),n("button",{staticClass:"w-full p-2 bg-vue-green-500 rounded shadow focus:outline-none",on:{click:function(t){return e.newTodo(e.newTodoData)}}},[e._v("Add")])])},ie=[],ce={name:"NewTodo",methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["newTodo"])),{},{handleAddNewTodo:function(){this.newTodo(this.newTodoData)}}),data:function(){return{newTodoData:{}}}},ue=ce,le=Object(f["a"])(ue,ae,ie,!1,null,null,null),de=le.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-row items-center justify-center w-full border-2 border-gray-300 dark:border-gray-800 p-2 m-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.done,expression:"todo.done"}],staticClass:"mx-4",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.todo.done)?e._i(e.todo.done,null)>-1:e.todo.done},on:{change:[function(t){var n=e.todo.done,r=t.target,o=!!r.checked;if(Array.isArray(n)){var s=null,a=e._i(n,s);r.checked?a<0&&e.$set(e.todo,"done",n.concat([s])):a>-1&&e.$set(e.todo,"done",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.todo,"done",o)},function(t){return e.handleChecked()}]}}),n("div",{staticClass:"w-full"},[n("div",[e._v(e._s(e.todo.title))]),n("small",[e._v(e._s(e.todo.description)+" "+e._s(" - "+e.month+"/"+e.day))])]),n("button",{staticClass:"flex mx-4 focus:outline-none",on:{click:function(t){return e.deleteTodo(e.todo._id)}}},[n("i",{staticClass:"material-icons text-red-800"},[e._v("clear")])])])},he=[],pe=n("3835"),fe={props:["todo"],data:function(){return{day:null,month:null}},methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["updateTodo","deleteTodo"])),{},{handleChecked:function(){this.updateTodo({body:{done:this.todo.done},id:this.todo._id})}}),mounted:function(){var e=new Date(1e3*this.todo.createdAt),t=new Intl.DateTimeFormat("en",{month:"short",day:"2-digit"}),n=t.formatToParts(e),r=Object(pe["a"])(n,3),o=r[0].value,s=r[2].value;this.day=s,this.month=o}},ge=fe,be=Object(f["a"])(ge,me,he,!1,null,null,null),ve=be.exports,we={name:"Todos",components:{Todo:ve,NewTodo:de},methods:Object(a["a"])({},Object(i["b"])(["getTodos"])),computed:Object(i["c"])({todos:function(e){return e.todosState.todos},isAuthenticated:function(e){return e.auth.isAuthenticated}}),mounted:function(){this.isAuthenticated?this.getTodos():this.$router.push("/")}},xe=we,ke=Object(f["a"])(xe,oe,se,!1,null,null,null),Te=ke.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col mx-auto mt-24 bg-gray-900 dark:bg-gray-300 w-90p max-w-screen-sm p-4 rounded shadow"},[n("div",{staticClass:"text-white dark:text-black text-4xl font-hairline text-center mb-4"},[e._v("Register")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.cred.name,expression:"cred.name"}],staticClass:"dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4",attrs:{type:"text",placeholder:"Name",name:"name"},domProps:{value:e.cred.name},on:{input:function(t){t.target.composing||e.$set(e.cred,"name",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.cred.email,expression:"cred.email"}],staticClass:"dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4",attrs:{type:"text",placeholder:"Email",name:"email"},domProps:{value:e.cred.email},on:{input:function(t){t.target.composing||e.$set(e.cred,"email",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.cred.password,expression:"cred.password"}],staticClass:"dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4",attrs:{type:"text",placeholder:"Password",name:"password"},domProps:{value:e.cred.password},on:{input:function(t){t.target.composing||e.$set(e.cred,"password",t.target.value)}}}),n("button",{staticClass:"w-full p-2 bg-vue-green-500 rounded shadow focus:outline-none",on:{click:function(t){return e.handleRegister()}}},[e._v("Register")])])},Oe=[],Ee={name:"Login",methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["createUser","getMe"])),{},{handleRegister:function(){this.createUser(this.cred)}}),data:function(){return{cred:{}}},computed:Object(i["c"])({isAuthenticated:function(e){return e.auth.isAuthenticated}}),mounted:function(){this.isAuthenticated?this.$router.push("/todos"):this.getMe()}},je=Ee,_e=Object(f["a"])(je,ye,Oe,!1,null,null,null),Ce=_e.exports;n("a869");r["a"].config.productionTip=!1,r["a"].use(S["a"]),r["a"].use(M["a"],{breakpoints:{sm:640,md:768,lg:1024,xl:1280}});var Ae=[{path:"/",component:re},{path:"/todos",component:Te},{path:"/register",component:Ce}],Le=new S["a"]({base:"/vue/",routes:Ae,mode:"history"});new r["a"]({store:X,router:Le,render:function(e){return e($)}}).$mount("#app")},a869:function(e,t,n){}});
//# sourceMappingURL=app.55189b99.js.map