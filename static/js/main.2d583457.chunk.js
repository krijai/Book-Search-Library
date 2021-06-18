(this["webpackJsonpbook-search-library"]=this["webpackJsonpbook-search-library"]||[]).push([[0],{24:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){},29:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){"use strict";a.r(e);var r=a(2),n=a.n(r),s=a(15),c=a.n(s),i=(a(24),a(3)),o=a.n(i),l=a(4),u=a(16),h=a(17),d=a(19),b=a(18),p=(a(26),a(27),a(0)),j=function(t){return Object(p.jsx)("div",{className:"search-wrapper ".concat(t.loading?"active":""," ").concat(t.searchData?"auto-height":""),children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.handleSubmit()},children:[Object(p.jsx)("input",{id:"titleInput",type:"text","aria-label":"Search","aria-required":"true",name:"title",ref:t.textInput,className:"search-field",onFocus:function(e){console.log("handleFocus hitttttttttttttt"),t.handleFocus("focus")},onBlur:function(e){console.log("handleBlur hitttttttttttttt"),t.handleFocus("blur")},required:!0}),Object(p.jsx)("label",{htmlFor:"titleInput",className:" ".concat(t.isFocused?"hide-label":"")}),Object(p.jsx)("input",{type:"submit",value:"Submit","aria-label":"Submit"})]})})},f=(a(29),a(5)),x=a.n(f),v=function(t){var e=function(){var t=Object(l.a)(o.a.mark((function t(e){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="#",!e){t.next=6;break}return t.next=4,x.a.get("http://covers.openlibrary.org/b/isbn/".concat(e,"-M.jpg"));case 4:a=(a=t.sent).config.url;case 6:return t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"card-wrapper",children:t.data?t.data.map((function(t,a){var r=t.hasOwnProperty("isbn");console.log("ISBN hasOwnPropertyhasOwnProperty---------------",t.hasOwnProperty("isbn")),r=r?t.isbn[0]:"";var n=e(r).then((function(e){return{id:t._version_,title:t.title,year:t.first_publish_year,url:e}}));return console.log("objValue------------",n),Object(p.jsxs)("div",{className:"card-details",children:[Object(p.jsx)("div",{className:"card-image"}),Object(p.jsxs)("div",{className:"card-text",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Title:"})," ",t.title," "]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Year:"})," $",t.first_publish_year]})]})]},t._version_)})):"No Data"})},y=(a(48),function(t){var e=t.handleFilter,a=t.title,r=t.sortByTitle,n=t.sortByYear;return Object(p.jsx)("li",{className:"filter-btn ".concat(r?"active":""," ").concat(n?"active":""),onClick:function(){e("Sort Alphabetical"==a?"title":"year")},children:a})}),O=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var r;return Object(u.a)(this,a),(r=e.call(this,t)).handleSubmit=Object(l.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.textInput.current.value&&r.setState({loading:!0}),console.log("handleSubmit hittttttttttt",r.textInput.current.value),e=r.textInput.current.value.split(" ").join("+"),t.prev=3,!e){t.next=10;break}return t.next=7,x.a.get("https://openlibrary.org/search.json?q=".concat(e));case 7:a=t.sent,console.log("res----------------------",a.data.docs),r.setState({loading:!1,searchData:a.data.docs});case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.log("error----",t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])}))),r.handleFilter=function(t){if(r.state.sortByTitle||"title"!=t){if(!r.state.sortByYear&&"year"==t){r.state.searchData.sort((function(t,e){var a=t.first_publish_year,r=e.first_publish_year;return a<r?1:a>r?-1:0}));r.setState({sortByTitle:!1,sortByYear:!0})}}else{r.state.searchData.sort((function(t,e){var a=t.title.toUpperCase(),r=e.title.toUpperCase();return a<r?-1:a>r?1:0}));r.setState({sortByTitle:!0,sortByYear:!1})}},r.handleFocus=function(t){r.textInput.current.value&&("focus"==t?r.setState({isFocused:!1}):r.setState({isFocused:!0}))},r.state={searchData:null,sortByTitle:!1,sortByYear:!1,loading:!1,isFocused:!1},r.textInput=n.a.createRef(),r}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(j,{handleSubmit:function(){return t.handleSubmit()},textInput:this.textInput,loading:this.state.loading,isFocused:this.state.isFocused,searchData:this.state.searchData,handleFocus:function(e){return t.handleFocus(e)}}),this.state.loading?Object(p.jsx)("p",{children:"Fetching Data..."}):"",this.state.searchData?Object(p.jsxs)(r.Fragment,{children:[Object(p.jsxs)("ul",{className:"filter-wrapper",children:[Object(p.jsx)(y,{handleFilter:function(e){return t.handleFilter(e)},title:"Sort Alphabetical",sortByTitle:this.state.sortByTitle}),Object(p.jsx)(y,{handleFilter:function(e){return t.handleFilter(e)},title:"Most Recently Published",sortByYear:this.state.sortByYear})]}),Object(p.jsx)(v,{data:this.state.searchData})]}):""]})}}]),a}(r.Component);c.a.render(Object(p.jsxs)(n.a.StrictMode,{children:[Object(p.jsx)("h1",{children:Object(p.jsx)("a",{href:"/",children:"Book Search Library"})}),Object(p.jsx)(O,{})]}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.2d583457.chunk.js.map