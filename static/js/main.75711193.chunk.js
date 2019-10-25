(this.webpackJsonpredux_basic_todo=this.webpackJsonpredux_basic_todo||[]).push([[0],{28:function(e,t,n){e.exports=n(41)},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),c=n.n(r);n(33),n(16),n(34),n(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(3),s=n(6),i=n(18),u=n(19),m=n(25),d=0,f=function(e){return{type:"ADD_TODO",id:d++,title:e}},b=function(e){return{type:"TOGGLE_TODO",id:e}},p="SHOW_ALL";function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=Object(s.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[{id:t.id,title:t.title,completed:!1}].concat(Object(m.a)(e));case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?O({},e,{completed:!e.completed}):e}));case"COMPLETE_TODO":var n=t.id;return e.filter((function(e){return e.id!==n}));case"FetchData":return t.todos;default:return e}},todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FetchTodoById":return t.todo;default:return e}},visibilityFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}}}),v=n(24),g=n(20),y=n(21),j=n(26),T=n(22),k=n(27),N=function(e){var t=e.onClick,n=e.completed;return a.a.createElement("div",{className:"checkbox checkbox-custom checkbox-single float-right"},a.a.createElement("input",{type:"checkbox","aria-label":"Single checkbox Two",onClick:t,checked:!!n}),a.a.createElement("label",null))},w=function(e){var t=e.onClick,n=e.completed,o=e.title;return a.a.createElement("li",{className:"task-info ui-sortable-handle ".concat(n?"line-through":"none"),id:"task17"},a.a.createElement(N,{completed:!!n,onClick:t}),o,a.a.createElement("div",{className:"clearfix"}),a.a.createElement("div",{className:"mt-3"},a.a.createElement("p",{className:"float-right mb-0 mt-2"},a.a.createElement("button",{type:"button",className:"btn btn-success btn-sm waves-effect waves-light"},"View")),a.a.createElement("p",{className:"mb-0"},a.a.createElement("a",{href:"",className:"text-muted"},a.a.createElement("img",{src:"https://bootdey.com/img/Content/avatar/avatar4.png",alt:"task-user",className:"thumb-sm rounded-circle mr-2"})," ",a.a.createElement("span",{className:"font-bold font-secondary"},"Maya Didas")))))},x=function(e){var t=e.todos,n=e.toogleTodo;return a.a.createElement("span",null,t.map((function(e,t){return a.a.createElement(w,Object.assign({key:t},e,{onClick:function(){return n(e.id)}}))})))};function D(){var e=Object(l.c)(),t=Object(l.d)((function(e){return{todos:e.todos}})).todos,n=Object(o.useCallback)((function(t){return e(b(t))}),[e]),r=t.filter((function(e){return!e.completed}));return a.a.createElement(x,{todos:r,toogleTodo:n})}function C(){var e,t=Object(l.c)();return a.a.createElement("span",{className:"col-md-12"},a.a.createElement("form",{className:"form-inline",onSubmit:function(n){n.preventDefault(),e.value.trim()&&(t(f(e.value)),e.value="")}},a.a.createElement("input",{className:"mb-3 form-control col-md-12",placeholder:"Todo Title",ref:function(t){return e=t}}),a.a.createElement("span",{className:"w-100"},a.a.createElement("button",{className:"btn btn-primary mb-3 float-right",type:"submit"},"Add Todo"))))}function _(){var e=Object(l.c)(),t=Object(l.d)((function(e){return{todos:e.todos}})).todos,n=Object(o.useCallback)((function(t){return e(b(t))}),[e]),r=t.filter((function(e){return e.completed}));return a.a.createElement(x,{todos:r,toogleTodo:n})}var L=function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.TodoList(),this.props.Todo()}},{key:"onToggle",value:function(){var e=Object(l.c)();Object(o.useCallback)((function(t){return e(function(e){return{type:"COMPLETE_TODO",id:e}}(t))}),[e])}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement(C,null),a.a.createElement("div",{className:"col-lg-6"},a.a.createElement("div",{className:"card-box"},a.a.createElement("h4",{className:"text-dark header-title"},"Upcoming"),a.a.createElement("p",{className:"text-muted m-b-30 font-13"},"Your awesome text goes here. Your awesome text goes here."),a.a.createElement("ul",{className:"sortable-list taskList list-unstyled ui-sortable",id:"upcoming"},a.a.createElement(D,{completeTodo:function(){return e.onToggle()}})))),a.a.createElement("div",{className:"col-lg-6"},a.a.createElement("div",{className:"card-box"},a.a.createElement("h4",{className:"text-dark header-title"},"Completed"),a.a.createElement("p",{className:"text-muted m-b-30 font-13"},"Your awesome text goes here. Your awesome text goes here."),a.a.createElement("ul",{className:"sortable-list taskList list-unstyled ui-sortable",id:"completed"},a.a.createElement(_,{completeTodo:function(){return e.onToggle()}})))))))}}]),t}(o.Component),P=Object(l.b)((function(e){return{todos:e.todos,todo:e.todo,error:e.error}}),(function(e){return{TodoList:function(){return e((function(e){return fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()})).then((function(t){return e({type:"FetchData",todos:t})})).catch((function(t){return e({type:"ERROR",msg:"Unable to fetch data"})}))}))},Todo:function(){return e((t="2",function(e){return fetch("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return e.json()})).then((function(t){return e({type:"FetchTodoById",todo:t})})).catch((function(t){return e({type:"ERROR",msg:"Unable to fetch data"})}))}));var t}}}))(L),I=Object(s.d)(E,Object(s.a)(i.a));console.log(I),c.a.render(a.a.createElement(l.a,{store:I},a.a.createElement(v.a,{basename:"/redux-basic-todo"},a.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.75711193.chunk.js.map