(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(9),i=n.n(r),c=(n(15),n(2)),o=n(3),l=n(5),d=n(4),h=n(6),j=n.n(h),u=(n(8),n(0)),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState((function(t){var n=Object.assign({},t.info);return n[e.target.id]=e.target.value,{info:n}})),a.props.parentCallback(a.state.info)},a.state={info:{firstName:"Grab",id:j()(),lastName:"Grsuff",role:"Ass Photographer",number:"048 89123 1243",address:"3/12 Clusteu Blvd",email:"graiul.Grsuff@grmail.com",intro:"I am an ASS photographer looking to take photos of ASSES if yall need an ASS photographer hit me up. I am an ASS photographer looking to take photos of ASS. I am an ASS photographer looking to take photos of ASS."}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.parentCallback(this.state.info)}},{key:"render",value:function(){var e=this.state.info;return Object(u.jsx)("div",{className:"form-container",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("h3",{children:"Personal Details"}),Object(u.jsx)("input",{onChange:this.handleChange,value:e.firstName,type:"text",id:"firstName"}),Object(u.jsx)("input",{onChange:this.handleChange,value:e.lastName,type:"text",id:"lastName"}),Object(u.jsx)("input",{onChange:this.handleChange,value:e.role,type:"text",id:"role"}),Object(u.jsx)("input",{onChange:this.handleChange,value:e.number,type:"text",id:"number"}),Object(u.jsx)("input",{onChange:this.handleChange,value:e.email,type:"text",id:"email"}),Object(u.jsx)("input",{onChange:this.handleChange,value:e.address,type:"text",id:"address"}),Object(u.jsx)("textarea",{onChange:this.handleChange,rows:"5",value:e.intro,type:"text",id:"intro"})]})})}}]),n}(s.a.Component),b=n(10),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e,t){a.setState((function(n){var s=n.works.find((function(e){return console.log(e.id),e.id==t})),r=Object.assign({},s);r[e.target.id]=e.target.value;var i=a.state.works;return i[a.state.works.indexOf(s)]=r,{works:i}})),a.props.parentCallback(a.state.works)},a.delete=function(e){var t=a.state.works.filter((function(t){return t.id!==e}));a.setState({works:t})},a.add=function(){var e={id:j()(),company:"",role:"",description:" ",start:"",end:""};a.setState({works:[].concat(Object(b.a)(a.state.works),[e])}),console.log(a.state.works)},a.state={works:[{id:j()(),company:"Gabajo Enterprises",role:" Photographer",start:"2018",end:"Present",description:"I was primarily responsible for ...."},{id:j()(),company:"Clustards Incorporated",role:" Photographer",start:"2018",end:"Present",description:"I was primarily responsible for ...."}]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.parentCallback(this.state.works)}},{key:"render",value:function(){var e=this,t=this.state.works;return Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)("h3",{children:"Work Experience"}),t.map((function(t){return Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{onChange:function(n){return e.handleChange(n,t.id)},value:t.company,type:"text",id:"company"}),Object(u.jsx)("input",{onChange:function(n){return e.handleChange(n,t.id)},value:t.role,type:"text",id:"role"}),Object(u.jsx)("input",{onChange:function(n){return e.handleChange(n,t.id)},value:t.start,type:"text",id:"start"}),Object(u.jsx)("input",{onChange:function(n){return e.handleChange(n,t.id)},value:t.end,type:"text",id:"end"}),Object(u.jsx)("textarea",{onChange:function(n){return e.handleChange(n,t.id)},value:t.description,type:"text",id:"description"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){e.delete(t.id)},children:"delete"})]},t.id)})),Object(u.jsx)("button",{onClick:function(){e.add()},children:"add"})]})}}]),n}(s.a.Component),x=(n(18),function(e){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"section section-one",children:[Object(u.jsxs)("div",{className:"name-role-wrapper",children:[Object(u.jsx)("div",{className:"name",children:"".concat(e.data.personal.firstName," ").concat(e.data.personal.lastName)}),Object(u.jsx)("div",{className:"role",children:e.data.personal.role})]}),Object(u.jsxs)("div",{className:"contact-info-wrapper",children:[Object(u.jsxs)("div",{className:"contact-info",children:[" ",e.data.personal.email]}),Object(u.jsxs)("div",{className:"contact-info",children:[" ",e.data.personal.number]}),Object(u.jsxs)("div",{className:"contact-info",children:[" ",e.data.personal.address]})]})]}),Object(u.jsx)("div",{className:"section section-two",children:Object(u.jsxs)("div",{className:"intro",children:[" ",e.data.personal.intro]})}),Object(u.jsxs)("div",{className:"section section-three",children:[Object(u.jsx)("div",{className:"title",children:"Work Experience"}),console.log(e.data2.workExp),console.log("above"),e.data2.workExp.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:e.role}),Object(u.jsxs)("span",{class:"floatright",children:[e.company," | ",e.start," - ",e.end]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:e.description})}),Object(u.jsx)("p",{})]})}))]}),Object(u.jsx)("div",{className:"section section-four",children:Object(u.jsx)("div",{className:"title",children:"Education"})})]})}),O=(n(19),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={data:{personal:""},data2:{workExp:[""]}},e.callbackFunction=function(t){e.setState({data:{personal:t}})},e.callbackFunctionTwo=function(t){e.setState({data2:{workExp:t}})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)(p,{parentCallback:this.callbackFunction}),Object(u.jsx)(f,{parentCallback:this.callbackFunctionTwo})]}),Object(u.jsx)(x,{data:this.state.data,data2:this.state.data2})]})}}]),n}(a.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),m()},8:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.c1e193be.chunk.js.map