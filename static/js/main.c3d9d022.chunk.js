(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){e.exports=n(265)},106:function(e,t,n){},108:function(e,t,n){},110:function(e,t,n){},178:function(e,t,n){},180:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),i=n.n(c),o=(n(106),n(16)),l=n(17),s=n(19),u=n(18),m=n(20),d=(n(108),n(110),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},"TORONTO WASTE LOOKUP")}}]),t}(a.Component)),f=n(29),v=function(e){return{type:"ADD_FAVORITES",body:e.body,title:e.title}},h=function(e){return{type:"DELETE_FAVORITES",title:e.title}},b=n(43),E=n.n(b),O=(n(61),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.state.map(function(t,n){var a=document.createElement("textarea");a.innerHTML=t.body;var c=a.value;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(E.a,{className:"green",onClick:function(){return e.props.deleteFavorites(t)}}),r.a.createElement("div",{className:"title"},t.title),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:c}}))});return r.a.createElement("div",null,r.a.createElement("big",{style:{color:"green",fontSize:35,paddingLeft:10}},"Favourites"),r.a.createElement("ul",null,t))}}]),t}(a.Component));var p=Object(f.b)(function(e){return{state:e.favorites}},function(e,t){return{deleteFavorites:function(t){e(h(t))}}})(O),j=(n(178),n(180),n(99)),y=n.n(j),g=n(98),w=n.n(g),N=function(e){function t(e){var n;return Object(o.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e)),console.log(e),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.searchedItems.map(function(t,n){var a=document.createElement("textarea");a.innerHTML=t.body;var c=a.value;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(E.a,{className:e.props.favorites.some(function(e){return e.title===t.title})?"green":"gray",onClick:function(){e.props.favorites.some(function(e){return e.title===t.title})||e.props.addFavorites(t)}}),r.a.createElement("div",{className:"title"},t.title),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:c}}))});return r.a.createElement("div",null,r.a.createElement("ul",null,t))}}]),t}(a.Component);var k=Object(f.b)(function(e){return{favorites:e.favorites}},function(e,t){return{addFavorites:function(t){e(v(t))}}})(N),I=n(100),C=n.n(I),T=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).search=function(){fetch("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000").then(function(e){return e.json()}).then(function(t){var n=t.filter(function(t){return t.keywords.includes(e.searchValue.value)});e.setState({searchedItems:n}),console.log(e.state.searchedItems)})},e.onChange=function(t){""===t.target.value&&e.setState({searchedItems:[]})},e.state={searchedItems:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"searchContainer"},r.a.createElement("div",{className:"searchFieldButton"},r.a.createElement(w.a,{className:"searchfield",id:"outlined-bare",placeholder:"Search Field",inputRef:function(t){return e.searchValue=t},onChange:this.onChange,margin:"normal",variant:"outlined"}),r.a.createElement("div",{className:"button"},r.a.createElement(y.a,{onClick:this.search,variant:"contained"},r.a.createElement(C.a,{className:"white"})))),r.a.createElement("div",null,r.a.createElement(k,{searchedItems:this.state.searchedItems})))}}]),t}(a.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement(d,null)),r.a.createElement("div",{className:"features"},r.a.createElement("div",{className:"search"},r.a.createElement(T,null)),r.a.createElement("div",{className:"favorites"},r.a.createElement(p,null))))}}]),t}(a.Component),F=n(41),S=n(58),A=n(59),L={favorites:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITES":var n={title:t.title,body:t.body};return Object(A.a)({},e,{favorites:[].concat(Object(S.a)(e.favorites),[n])});case"DELETE_FAVORITES":return e.favorites=e.favorites.filter(function(e){return t.title!==e.title}),Object(A.a)({},e,{favorites:Object(S.a)(e.favorites)});default:return e}},D=Object(F.b)(R),V=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{store:D},r.a.createElement(_,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,n){}},[[101,2,1]]]);
//# sourceMappingURL=main.c3d9d022.chunk.js.map