(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{14:function(e,a,t){e.exports=t(19)},19:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),m=t.n(r),i=t(4),o=t(5),s=t(9),c=t(10),p=t(11),u=t(12),N=t(13);t(7);var f=function(e){return n.a.createElement("div",null,e.employeeList.length?n.a.createElement("ul",{className:"list-group"},e.employeeList.map((function(e){return n.a.createElement("li",{className:"list-group-item",key:e.id},n.a.createElement("div",{id:"name"},n.a.createElement("b",null,"Name: "),e.firstName," ",e.lastName,n.a.createElement("br",null),n.a.createElement("b",null,"Title: ")," ",e.type),n.a.createElement("div",{id:"other"},n.a.createElement("i",null,"Email: ")," ",e.email,n.a.createElement("br",null),n.a.createElement("i",null,"Phone Number: ")," ",e.phone))}))):n.a.createElement("h2",null,"Sorry No Employee by that name"))},h=t(3);var d=function(e){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h1",null,"Employee Directory"),n.a.createElement("br",null),n.a.createElement("h3",null,"Enter an employee's first name below and click 'Find'"),n.a.createElement("div",{class:"entertext"},n.a.createElement("form",{className:"form"},n.a.createElement("input",{value:e.firstName,name:"firstName",onChange:e.handleInputChange,type:"text",placeholder:"Names - case sensitive"}),n.a.createElement("br",null),n.a.createElement("button",{onClick:e.handleFormSubmit},"Find"))),n.a.createElement("br",null),n.a.createElement("h5",null,"Or click the 'Sort Names' button to sort employees alphabetically"))},y=function(e){Object(u.a)(t,e);var a=Object(N.a)(t);function t(){var e;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={sorted:h,firstName:"",lastName:""},e.handleInputChange=function(a){var t=a.target.value,l=a.target.name;e.setState(Object(s.a)({},l,t))},e.handleFormSubmit=function(a){a.preventDefault();var t=Object(i.a)(Array,Object(o.a)(h));console.log(t);var l=t.filter((function(a){return a.firstName.includes(e.state.firstName)||a.lastName.includes(e.state.firstName)}));console.log(l),e.setState({sorted:l}),e.setState({firstName:"",lastName:""})},e.sortName=function(){var a=Object(i.a)(Array,Object(o.a)(h));console.log(a);var t=a.sort((function(e,a){return console.log(e.firstName,a.lastName),console.log(a.firstName,e.lastName),e.firstName>a.firstName?1:a.firstName>e.firstName?-1:0}));console.log(t),e.setState({sorted:t})},e}return Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{stylle:"text-align: center"},n.a.createElement(d,{firstName:this.state.firstName,lastName:this.state.lastName,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),n.a.createElement("button",{onClick:this.sortName},"Sort Names A to Z"),n.a.createElement(f,{employeeList:this.state.sorted}))}}]),t}(l.Component);m.a.render(n.a.createElement(y,null),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('[{"id":1,"phone":"(425) 711-8439","firstName":"Erik","lastName":"De Luna","email":"Erik@email.com","type":"Software Developer"},{"id":2,"phone":"(242) 436-4140","firstName":"Dale","lastName":"Kittendorf","email":"dale@email.com","type":"Music Supervisor"},{"id":3,"phone":"(642) 824-0432","firstName":"Jeff","lastName":"Cartagena","email":"Jeff@email.com","type":"React Guru"},{"id":4,"phone":"(850) 799-3790","firstName":"Molly","lastName":"Gilbert","email":"Molly@email.com","type":"Notion Expert"},{"id":5,"phone":"(477) 644-0072","firstName":"Jonathan","lastName":"Bentley","email":"Jonathan@mail.com","type":"Security Engineer"},{"id":6,"phone":"(430) 467-2006","firstName":"Manny","lastName":"Moses","email":"Manny@email.com","type":"Software Developer"},{"id":7,"phone":"(387) 499-3268","firstName":"Tyler","lastName":"D\'Angelo","email":"Tyler@email.com","type":"Bulma Expert"},{"id":8,"phone":"(547) 221-2781","firstName":"Lia","lastName":"Graham","email":"Lia@mail.com","type":"Software Developer"},{"id":9,"phone":"(481) 452-5793","firstName":"Rachel","lastName":"Adu","email":"Rachel@email.com","type":"Analyst"},{"id":10,"phone":"(413) 326-0251","firstName":"Alba","lastName":"Osmanaj","email":"Alba@email.com","type":"Software Developer"},{"id":11,"phone":"(525) 254-8047","firstName":"Carmen","lastName":"Johnson","email":"Carmen@email.com","type":"Software Developer"},{"id":12,"phone":"(451) 408-3747","firstName":"Samir","lastName":"Bello","email":"Samir@email.com","type":"Operations Analyst"},{"id":13,"phone":"(493) 973-2496","firstName":"Evan","lastName":"Boswood","email":"Evan@email.com","type":"Network Engineer"},{"id":14,"phone":"(556) 546-7695","firstName":"Alex","lastName":"Saint Victor","email":"Alex@email.com","type":"Software Engineer"},{"id":15,"phone":"(433) 248-9886","firstName":"Austin","lastName":"Walker","email":"Austin@email.com","type":"Human Resources"},{"id":16,"phone":"(313) 220-5425","firstName":"Gwen","lastName":"Sanabria","email":"Gwen@email.com","type":"Marketing"},{"id":17,"phone":"(850) 617-9594","firstName":"Sabrina","lastName":"Hollett","email":"Sabrina@email.com","type":"Software Developer"},{"id":18,"phone":"(482) 461-2002","firstName":"Antonio","lastName":"Gage","email":"Antonio@email.com","type":"React Guru"},{"id":19,"phone":"(600) 727-9977","firstName":"Ariel","lastName":"Cuesta","email":"Ariel@email.com","type":"Database Engineer"},{"id":20,"phone":"(204) 859-6921","firstName":"Nicole","lastName":"Davenport","email":"Nicole@email.com","type":"Software Developer"}]')},7:function(e,a,t){}},[[14,1,2]]]);
//# sourceMappingURL=main.bb363b2d.chunk.js.map