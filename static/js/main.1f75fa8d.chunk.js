(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(8),o=a.n(i),c=(a(13),a(2)),r=a(3),l=a(5),h=a(4),d=(a.p,a(6)),p=a.n(d),j=(a(15),a(0)),u=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState((function(t){var a=Object.assign({},t.info);return a[e.target.id]=e.target.value,{info:a}})),n.props.parentCallback(n.state.info)},n.state={info:{firstName:"Grab",id:p()(),lastName:"Grsuff",role:"Ass Photographer",number:"048 89123 1243",address:"3/12 Clusteu Blvd",email:"graiul.Grsuff@grmail.com",intro:"I am an ASS photographer looking to take photos of ASSES if yall need an ASS photographer hit me up. I am an ASS photographer looking to take photos of ASS. I am an ASS photographer looking to take photos of ASS."}},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.parentCallback(this.state.info)}},{key:"render",value:function(){var e=this.state.info;return Object(j.jsx)("div",{className:"form-container",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h3",{children:"Personal Details"}),Object(j.jsx)("input",{onChange:this.handleChange,value:e.firstName,type:"text",id:"firstName"}),Object(j.jsx)("input",{onChange:this.handleChange,value:e.lastName,type:"text",id:"lastName"}),Object(j.jsx)("input",{onChange:this.handleChange,value:e.role,type:"text",id:"role"}),Object(j.jsx)("input",{onChange:this.handleChange,value:e.number,type:"text",id:"number"}),Object(j.jsx)("input",{onChange:this.handleChange,value:e.email,type:"text",id:"email"}),Object(j.jsx)("input",{onChange:this.handleChange,value:e.address,type:"text",id:"address"}),Object(j.jsx)("textarea",{onChange:this.handleChange,rows:"5",value:e.intro,type:"text",id:"intro"})]})})}}]),a}(s.a.Component),b=(a(17),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState((function(t){var a=Object.assign({},t.info);return a[e.target.id]=e.target.value,{info:a}})),n.props.parentCallback(n.state.info)},n.state={info:{id:p()(),company:"Gabajo Enterprises",role:"Ass Photographer",start:"2018",end:"Present",description:"I was primarily responsible for shooting a lot of ASS to take photos of ASSES if ASS photographer hit of ASS. I am an ASS photographer looking to take photos of ASS."}},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.parentCallback(this.state.info)}},{key:"render",value:function(){var e=this.state.info;return Object(j.jsx)("div",{className:"form-container",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h3",{children:"Work Experience"}),Object(j.jsx)("input",{onChange:this.handleChange,value:e.company,type:"text",id:"company"}),Object(j.jsx)("input",{onChange:this.handleChange,value:e.role,type:"text",id:"role"}),Object(j.jsx)("input",{onChange:this.handleChange,value:e.start,type:"text",id:"start"}),Object(j.jsx)("input",{onChange:this.handleChange,value:e.end,type:"text",id:"end"}),Object(j.jsx)("textarea",{onChange:this.handleChange,value:e.description,type:"text",id:"description"})]})})}}]),a}(s.a.Component)),f=(a(18),function(e){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"section section-one",children:[Object(j.jsxs)("div",{className:"name-role-wrapper",children:[Object(j.jsx)("div",{className:"name",children:"".concat(e.data.personal.firstName," ").concat(e.data.personal.lastName)}),Object(j.jsx)("div",{className:"role",children:e.data.personal.role})]}),Object(j.jsxs)("div",{className:"contact-info-wrapper",children:[Object(j.jsxs)("div",{className:"contact-info",children:[" ",e.data.personal.email]}),Object(j.jsxs)("div",{className:"contact-info",children:[" ",e.data.personal.number]}),Object(j.jsxs)("div",{className:"contact-info",children:[" ",e.data.personal.address]})]})]}),Object(j.jsx)("div",{className:"section section-two",children:Object(j.jsxs)("div",{className:"intro",children:[" ",e.data.personal.intro]})}),Object(j.jsxs)("div",{className:"section section-three",children:[Object(j.jsx)("div",{className:"title",children:"Work Experience"}),Object(j.jsx)("p",{children:e.data2.workExp.company}),Object(j.jsx)("p",{children:e.data2.workExp.role}),Object(j.jsxs)("p",{children:[e.data2.workExp.start," - ",e.data2.workExp.end]}),Object(j.jsx)("p",{children:e.data2.workExp.description})]}),Object(j.jsx)("div",{className:"section section-four",children:Object(j.jsx)("div",{className:"title",children:"Education"})})]})}),x=(a(19),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={data:{personal:""},data2:{workExp:""}},e.callbackFunction=function(t){e.setState({data:{personal:t}})},e.callbackFunctionTwo=function(t){e.setState({data2:{workExp:t}})},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)(u,{parentCallback:this.callbackFunction}),Object(j.jsx)(b,{parentCallback:this.callbackFunctionTwo})]}),Object(j.jsx)(f,{data:this.state.data,data2:this.state.data2})]})}}]),a}(s.a.Component)),m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),m()}],[[20,1,2]]]);
//# sourceMappingURL=main.1f75fa8d.chunk.js.map