(this.webpackJsonpgitapi=this.webpackJsonpgitapi||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),s=n(3),r=n.n(s),c=(n(13),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),s(t),r(t)}))}),o=n(4),l=n(5),u=n(8),h=n(7),b=n(6),j=n.n(b),g=n(0),d=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={username:"",githubtUrl:"",avatarUrl:"",login:"",id:"",locate:""},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.a.get(this.props.source,(function(e){console.log(e);var n=e;n&&t.setState({username:n.name,githubtUrl:n.html_url,avatarUrl:n.avatar_url,login:n.login,id:n.id,locate:n.location})}))}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:this.state.avatarUrl}),Object(g.jsx)("br",{}),Object(g.jsxs)("h3",{children:["user name:",this.state.username]}),Object(g.jsx)("a",{href:this.state.githubtUrl,children:"Github Link"}),Object(g.jsxs)("h3",{children:["location:",this.state.locate]}),Object(g.jsxs)("h3",{children:["login:",this.state.login]}),Object(g.jsxs)("h3",{children:["id:",this.state.id]})]})}}]),n}(a.a.Component);r.a.render(Object(g.jsx)(d,{source:"https://api.github.com/users/keltonlee"}),document.getElementById("root")),c()}},[[15,1,2]]]);
//# sourceMappingURL=main.4a16809a.chunk.js.map