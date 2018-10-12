(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){e.exports=n(278)},278:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"saveComment",function(){return T}),n.d(a,"fetchComments",function(){return W}),n.d(a,"changeAuth",function(){return B});var r=n(0),o=n.n(r),c=n(17),i=n.n(c),u=n(280),m=n(281),l=n(18),s=n(27),h=n(109),p=function(e){var t=e.dispatch;return function(e){return function(n){if(!n.payload||!n.payload.then)return e(n);n.payload.then(function(e){var a=Object(h.a)({},n,{payload:e});t(a)})}}},d=n(101),f=n.n(d),v={definitions:{},$schema:"http://json-schema.org/draft-07/schema#",$id:"http://example.com/root.json",type:"object",title:"The Root Schema",required:["comments","auth"],properties:{comments:{$id:"#/properties/comments",type:"array",title:"The Comments Schema",items:{$id:"#/properties/comments/items",type:"string",title:"The Items Schema",default:"",examples:["Comment# 1","Comment #2"],pattern:"^(.*)$"}},auth:{$id:"#/properties/auth",type:"boolean",title:"The Auth Schema",default:!1,examples:[!0]}}},b=function(e){e.dispach;var t=e.getState;return function(e){return function(n){e(n),f.a.validate(t(),v)||console.warn("invalid state schema detected")}}},y=n(48),j="save_comment",O="fetch_comments",g="change_auth",E=Object(s.c)({comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(y.a)(e).concat([t.payload]);case O:var n=t.payload.data.map(function(e){return e.name});return Object(y.a)(e).concat(Object(y.a)(n));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}}}),C=n(20),k=n(21),w=n(23),S=n(22),A=n(24),x=n(279),N=n(102),$=n.n(N);function T(e){return{type:j,payload:e}}function W(){var e=$.a.get("https://jsonplaceholder.typicode.com/comments?postId=1");return{type:O,payload:e}}function B(e){return{type:g,payload:e}}var D=n(32),I=n.n(D),H=n(46),P=n.n(H),_=n(103),q=n.n(_),F=n(25),J=n.n(F),M=n(36),L=Object(M.withStyles)({root:{marginTop:"10px"}})(J.a),R=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={comment:""},n.handleChange=function(e){n.setState({comment:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.saveComment(n.state.comment),n.setState({comment:""})},n}return Object(A.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return o.a.createElement(I.a,{item:!0,xs:12,sm:12,md:4},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(P.a,{fullWidth:!0},o.a.createElement(q.a,{multiline:!0,rows:"4",label:"Add a comment",onChange:this.handleChange,value:this.state.comment,fullWidth:!0,margin:"normal"}),o.a.createElement(J.a,{type:"submit",variant:"contained",color:"primary"},"Submit Comment"))),o.a.createElement(P.a,null,o.a.createElement(L,{variant:"contained",className:"fetch-comments",onClick:this.props.fetchComments},"Fetch Comments")))}}]),t}(r.Component),U=Object(l.b)(null,a)(function(e){var t=function(t){function n(){return Object(C.a)(this,n),Object(w.a)(this,Object(S.a)(n).apply(this,arguments))}return Object(A.a)(n,t),Object(k.a)(n,[{key:"componentDidMount",value:function(){this.shouldNavigateAWay()}},{key:"componentDidUpdate",value:function(){this.shouldNavigateAWay()}},{key:"shouldNavigateAWay",value:function(){this.props.auth||this.props.history.push("/")}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}]),n}(r.Component);return Object(l.b)(function(e){return{auth:e.auth}})(t)}(R)),z=n(63),G=n.n(z),K=n(104),Q=n.n(K),V=n(105),X=n.n(V),Y=function(e){function t(){return Object(C.a)(this,t),Object(w.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(k.a)(t,[{key:"renderComments",value:function(){return this.props.comments.map(function(e){return o.a.createElement(Q.a,{key:e},e)})}},{key:"render",value:function(){return o.a.createElement(I.a,{item:!0,xs:12,sm:12,md:4},o.a.createElement(X.a,{variant:"h4",align:"center"},"Comment List"),o.a.createElement(G.a,null,this.renderComments()))}}]),t}(r.Component);var Z=Object(l.b)(function(e){return{comments:e.comments}})(Y),ee=n(106),te=n.n(ee),ne=n(107),ae=n.n(ne),re=Object(M.withStyles)({container:{height:"100vh"}})(I.a),oe=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(w.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).linkHome=function(e){return o.a.createElement(x.a,Object.assign({to:"/"},e))},n.linkNewPost=function(e){return o.a.createElement(x.a,Object.assign({to:"/post"},e))},n}return Object(A.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchComments()}},{key:"renderButton",value:function(){var e=this;return this.props.auth?o.a.createElement(J.a,{onClick:function(){return e.props.changeAuth(!1)}},"Sign Out"):o.a.createElement(J.a,{onClick:function(){return e.props.changeAuth(!0)}},"Sign In")}},{key:"renderNavBar",value:function(){return o.a.createElement(te.a,null,o.a.createElement(ae.a,null,o.a.createElement(J.a,{component:this.linkHome},"Home"),o.a.createElement(J.a,{component:this.linkNewPost},"Post A Comment"),this.renderButton()))}},{key:"render",value:function(){return o.a.createElement(r.Fragment,null,this.renderNavBar(),"}",o.a.createElement(re,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:16},o.a.createElement(m.a,{path:"/post",component:U}),o.a.createElement(m.a,{exact:!0,path:"/",component:Z})))}}]),t}(r.Component);var ce=Object(l.b)(function(e){return{auth:e.auth}},a)(oe);i.a.render(o.a.createElement(function(e){var t=e.children,n=e.initialState,a=void 0===n?{}:n,r=Object(s.d)(E,a,Object(s.a)(p,b));return o.a.createElement(l.a,{store:r},t)},null,o.a.createElement(u.a,null,o.a.createElement(m.a,{path:"/",component:ce}))),document.querySelector("#root"))}},[[111,2,1]]]);
//# sourceMappingURL=main.3a6e56f0.chunk.js.map