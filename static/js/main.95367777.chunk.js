(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={Quiz:"Quiz_Quiz__2xU7y",QuizWrapper:"Quiz_QuizWrapper__D99k3"}},function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__32abf",Question:"ActiveQuiz_Question__3xY4V"}},function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3NEgU",success:"AnswerItem_success__1OePf",error:"AnswerItem_error__2niIc"}},,,function(e,t,n){e.exports={Layout:"Layout_Layout__2JdWE"}},function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__1vEAO"}},function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),a=n(11),r=n.n(a),c=(n(19),n(20),n(1)),o=n(2),u=n(4),l=n(3),d=n(5),w=n(12),m=n.n(w),h=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:m.a.Layout},s.a.createElement("main",null,this.props.children))}}]),t}(i.Component),f=n(6),x=n(7),A=n.n(x),p=n(8),v=n.n(p),_=n(13),z=n.n(_),Q=n(9),g=n.n(Q),E=function(e){var t=[g.a.AnswerItem];return e.state&&t.push(g.a[e.state]),s.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},q=function(e){return s.a.createElement("ul",{className:z.a.AnswersList},e.answers.map((function(t,n){return s.a.createElement(E,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},b=function(e){return s.a.createElement("div",{className:v.a.ActiveQuiz},s.a.createElement("p",{className:v.a.Question},s.a.createElement("span",null,s.a.createElement("strong",null,e.answerNumber,"."),"\xa0",e.question),s.a.createElement("small",null,e.answerNumber," \u0437 ",e.quizLength)),s.a.createElement(q,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={finished:!1,activeQuestion:0,answerState:null,quiz:[{question:"\u041d\u0430\u0439\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0448\u0438\u0439 \u0431\u0440\u0435\u043d\u0434 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044e \u0432 \u0441\u0432\u0456\u0442\u0456?",rightAnswerId:2,id:1,answers:[{text:"Johnnie Walker",id:1},{text:"Smirnoff",id:2},{text:"Bacardi",id:3},{text:"Absolut",id:4}]},{question:"\u0420\u0456\u0432\u0435\u043d\u044c \u0441\u043f\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f \u043f\u0438\u0432\u0430 \u0432 \u0423\u043a\u0440\u0430\u0457\u043d\u0456 \u043d\u0430 \u0434\u0443\u0448\u0443 \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044f \u0437\u0430 \u0440\u0456\u043a?",rightAnswerId:3,id:2,answers:[{text:"115 \u043b\u0456\u0442\u0440\u0456\u0432",id:1},{text:"67 \u043b\u0456\u0442\u0440",id:2},{text:"41 \u043b\u0456\u0442\u0440",id:3},{text:"29 \u043b\u0456\u0442\u0440",id:4}]},{question:"\u0421\u043c\u0435\u0440\u0442\u0435\u043b\u044c\u043d\u0430 \u0434\u043e\u0437\u0430 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044e \u0432 \u043f\u0440\u043e\u043c\u0456\u043b\u0435?",rightAnswerId:1,id:3,answers:[{text:"5-6 ",id:1},{text:"4,5",id:2},{text:"11",id:3},{text:"7",id:4}]},{question:"\u0411\u0430\u0442\u044c\u043a\u0456\u0432\u0449\u0438\u043d\u0430 \u0440\u043e\u043c\u0443?",rightAnswerId:4,id:4,answers:[{text:"\u042f\u043c\u0430\u0439\u043a\u0430",id:1},{text:"\u0406\u0441\u043f\u0430\u043d\u0456\u044f",id:2},{text:"\u041a\u043e\u043b\u043e\u043c\u0438\u044f",id:3},{text:"\u0411\u0430\u0440\u0431\u0430\u0434\u043e\u0441",id:4}]},{question:"\u041a\u0456\u043a\u043e \u0442\u0440\u0435\u0431\u0430 \u0432\u0438\u043f\u0438\u0442\u0438 \u043f\u0435\u0440\u0435\u0434 \u043a\u0430\u0440\u0430\u043e\u043a\u0435 \u0432 \u043f\u0430\u0431\u0456-34?",rightAnswerId:3,id:5,answers:[{text:"\u041b\u0456\u0442\u0440 \u0433\u043e\u0440\u0456\u0432\u0435\u0433\u0438",id:1},{text:"5 \u043b\u0456\u0442\u0440\u0456\u0432 \u0425\u043c\u0456\u043b\u044c\u043d\u043e\u0433\u043e \u043c\u0456\u0446\u043d\u043e\u0433\u043e",id:2},{text:"\u042f \u0441\u0442\u0456\u043b\u044c\u043a\u0438 \u043d\u0435 \u0432\u0438\u043f'\u044e",id:3},{text:"\u0412\u0441\u0435, \u0449\u043e \u0454 \u0432 \u0420\u0435\u043f\u0430\u0431\u043b\u0456\u043a\u0443",id:4}]},{question:"\u0425\u0442\u043e \u043f\u0435\u0440\u0435\u043c\u043e\u0436\u0435 \u043d\u0430 \u0410\u043b\u043a\u043e-\u043a\u0432\u0456\u0437\u0456?",rightAnswerId:4,id:6,answers:[{text:"\u0417\u0435\u043b\u0435\u043d\u0438\u0439 \u0437\u043c\u0456\u0439",id:1},{text:"\u041b\u0438\u0441\u0438\u0439 \u0447\u0443\u0432\u0430\u043a \u043d\u0430 \u0431\u0430\u0440\u0456",id:2},{text:"\u041f\u0435\u0447\u0456\u043d\u043a\u0430",id:3},{text:"7 \u0445\u043e\u043a\u0430\u0433\u0435",id:4}]}]},n.onAnswerClickHandler=function(e){if(n.state.quiz[n.state.activeQuestion].rightAnswerId===e){n.setState({answerState:Object(f.a)({},e,"success")});var t=window.setTimeout((function(){n.isQuizFinished()?(console.log("FINISh"),n.setState({finished:!0})):n.setState({activeQuestion:n.state.activeQuestion+1,answerState:null}),window.clearTimeout(t)}),1e3)}else n.setState({answerState:Object(f.a)({},e,"error")})},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"render",value:function(){return s.a.createElement("div",{className:A.a.Quiz},s.a.createElement("div",{className:A.a.QuizWrapper},s.a.createElement("h1",null,"Alco-quiz"),this.state.finished?s.a.createElement("img",{src:"https://media.giphy.com/media/oU3FogKx589e8/giphy.gif"}):s.a.createElement(b,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClick:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})))}}]),t}(i.Component);var I=function(){return s.a.createElement(h,null,s.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.95367777.chunk.js.map