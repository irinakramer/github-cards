(this["webpackJsonpgithub-cards"]=this["webpackJsonpgithub-cards"]||[]).push([[0],{20:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(6),c=a.n(r),i=a(16),s=a(2),u=a(3),l=a(5),o=a(4),m=a(0),p=a.n(m),f=a(17),b=a.n(f),d=a(18),h=a.n(d),v=(a(44),function(e){return p.a.createElement("div",null,e.profiles.map((function(e){return p.a.createElement(j,Object.assign({key:e.id},e))})))}),E=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={userName:""},e.handleSubmit=function(){var t=Object(i.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,h.a.get("https://api.github.com/users/".concat(e.state.userName));case 3:n=t.sent,e.props.onSubmit(n.data),e.setState({userName:""});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return p.a.createElement("form",{onSubmit:this.handleSubmit},p.a.createElement("input",{type:"text",placeholder:"GitHub username",value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})},required:!0}),p.a.createElement("button",null,"Add card"))}}]),a}(p.a.Component),j=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props;return p.a.createElement("div",{className:"github-profile"},p.a.createElement("a",{href:e.html_url,target:"_blank"},p.a.createElement("img",{src:e.avatar_url})),p.a.createElement("div",{className:"info"},p.a.createElement("div",{className:"name"},e.name),p.a.createElement("div",{className:"login"},e.login),p.a.createElement("div",{className:"company"},e.company),p.a.createElement("div",{className:"repos"},"Public repos: ",e.public_repos)))}}]),a}(p.a.Component),N=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).addNewProfile=function(e){r.setState((function(t){return{profiles:[].concat(Object(n.a)(t.profiles),[e])}}))},r.state={profiles:[]},r}return Object(u.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"app"},p.a.createElement("div",{className:"header"},this.props.title),p.a.createElement(E,{onSubmit:this.addNewProfile}),p.a.createElement(v,{profiles:this.state.profiles}))}}]),a}(p.a.Component);b.a.render(p.a.createElement(N,{title:"The GitHub Cards App"}),document.querySelector("#root"))},44:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.0f8114e9.chunk.js.map