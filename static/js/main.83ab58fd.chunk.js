(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={Quiz:"Quiz_Quiz__2xU7y",QuizWrapper:"Quiz_QuizWrapper__D99k3"}},function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__32abf",Question:"ActiveQuiz_Question__3xY4V"}},function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3NEgU",success:"AnswerItem_success__1OePf",error:"AnswerItem_error__2niIc"}},function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__25EXn",success:"FinishedQuiz_success__1WRzp",error:"FinishedQuiz_error__1wK5Y"}},function(e,t,n){e.exports={Button:"Button_Button__3LxEc",error:"Button_error__1Jg-d",success:"Button_success__2KFSC",primary:"Button_primary__3lGPl"}},,,function(e,t,n){e.exports={Layout:"Layout_Layout__2JdWE"}},function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__1vEAO"}},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),a=n(13),r=n.n(a),u=(n(21),n(22),n(1)),c=n(2),o=n(4),l=n(3),d=n(5),m=n(14),w=n.n(m),h=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:w.a.Layout},i.a.createElement("main",null,this.props.children))}}]),t}(s.Component),_=n(6),f=n(7),p=n.n(f),v=n(8),z=n.n(v),x=n(15),E=n.n(x),A=n(9),Q=n.n(A),y=function(e){var t=[Q.a.AnswerItem];return e.state&&t.push(Q.a[e.state]),i.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},k=function(e){return i.a.createElement("ul",{className:E.a.AnswersList},e.answers.map((function(t,n){return i.a.createElement(y,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},q=function(e){return i.a.createElement("div",{className:z.a.ActiveQuiz},i.a.createElement("p",{className:z.a.Question},i.a.createElement("span",null,i.a.createElement("strong",null,e.answerNumber,"."),"\xa0",e.question),i.a.createElement("small",null,e.answerNumber," \u0437 ",e.quizLength)),i.a.createElement(k,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},b=n(10),g=n.n(b),j=n(11),I=n.n(j),S=function(e){var t=[I.a.Button,I.a[e.type]];return i.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},O=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return i.a.createElement("div",{className:g.a.FinishedQuiz},i.a.createElement("ul",null,e.quiz.map((function(t,n){var s=["fa","error"===e.results[t.id]?"fa-times":"fa-check",g.a[e.results[t.id]]];return i.a.createElement("li",{key:n},i.a.createElement("strong",null,n+1),".\xa0",t.question,i.a.createElement("i",{className:s.join(" ")}))}))),i.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0437 ",e.quiz.length),i.a.createElement("div",null,i.a.createElement(S,{onClick:e.onRetry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0438"),i.a.createElement(S,{type:"success"},"\u0414\u043e \u0441\u043f\u0438\u0441\u043a\u0443 \u0442\u0435\u0441\u0442\u0456\u0432")))},C=function(e){function t(){var e,n;Object(u.a)(this,t);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[{question:"\u041d\u0430\u0439\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0448\u0438\u0439 \u0431\u0440\u0435\u043d\u0434 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044e \u0432 \u0441\u0432\u0456\u0442\u0456?",rightAnswerId:2,id:1,answers:[{text:"Johnnie Walker",id:1},{text:"Smirnoff",id:2},{text:"Bacardi",id:3},{text:"Absolut",id:4}]},{question:"\u0420\u0456\u0432\u0435\u043d\u044c \u0441\u043f\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f \u043f\u0438\u0432\u0430 \u0432 \u0423\u043a\u0440\u0430\u0457\u043d\u0456 \u043d\u0430 \u0434\u0443\u0448\u0443 \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044f \u0437\u0430 \u0440\u0456\u043a?",rightAnswerId:3,id:2,answers:[{text:"115 \u043b\u0456\u0442\u0440\u0456\u0432",id:1},{text:"67 \u043b\u0456\u0442\u0440",id:2},{text:"41 \u043b\u0456\u0442\u0440",id:3},{text:"29 \u043b\u0456\u0442\u0440",id:4}]},{question:"\u0421\u043c\u0435\u0440\u0442\u0435\u043b\u044c\u043d\u0430 \u0434\u043e\u0437\u0430 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044e \u0432 \u043f\u0440\u043e\u043c\u0456\u043b\u0435?",rightAnswerId:1,id:3,answers:[{text:"5-6 ",id:1},{text:"4,5",id:2},{text:"11",id:3},{text:"7",id:4}]},{question:"\u0411\u0430\u0442\u044c\u043a\u0456\u0432\u0449\u0438\u043d\u0430 \u0440\u043e\u043c\u0443?",rightAnswerId:4,id:4,answers:[{text:"\u042f\u043c\u0430\u0439\u043a\u0430",id:1},{text:"\u0406\u0441\u043f\u0430\u043d\u0456\u044f",id:2},{text:"\u041a\u043e\u043b\u043e\u043c\u0438\u044f",id:3},{text:"\u0411\u0430\u0440\u0431\u0430\u0434\u043e\u0441",id:4}]},{question:"\u041a\u0456\u043a\u043e \u0442\u0440\u0435\u0431\u0430 \u0432\u0438\u043f\u0438\u0442\u0438 \u043f\u0435\u0440\u0435\u0434 \u043a\u0430\u0440\u0430\u043e\u043a\u0435 \u0432 \u043f\u0430\u0431\u0456-34?",rightAnswerId:3,id:5,answers:[{text:"\u041b\u0456\u0442\u0440 \u0433\u043e\u0440\u0456\u0432\u0435\u0433\u0438",id:1},{text:"5 \u043b\u0456\u0442\u0440\u0456\u0432 \u0425\u043c\u0456\u043b\u044c\u043d\u043e\u0433\u043e \u043c\u0456\u0446\u043d\u043e\u0433\u043e",id:2},{text:"\u042f \u0441\u0442\u0456\u043b\u044c\u043a\u0438 \u043d\u0435 \u0432\u0438\u043f'\u044e",id:3},{text:"\u0412\u0441\u0435, \u0449\u043e \u0454 \u0432 \u0420\u0435\u043f\u0430\u0431\u043b\u0456\u043a\u0443",id:4}]},{question:"\u0425\u0442\u043e \u043f\u0435\u0440\u0435\u043c\u043e\u0436\u0435 \u043d\u0430 \u0410\u043b\u043a\u043e-\u043a\u0432\u0456\u0437\u0456?",rightAnswerId:4,id:6,answers:[{text:"\u0417\u0435\u043b\u0435\u043d\u0438\u0439 \u0437\u043c\u0456\u0439",id:1},{text:"\u041b\u0438\u0441\u0438\u0439 \u0447\u0443\u0432\u0430\u043a \u043d\u0430 \u0431\u0430\u0440\u0456",id:2},{text:"\u041f\u0435\u0447\u0456\u043d\u043a\u0430",id:3},{text:"7 \u0445\u043e\u043a\u0430\u0433\u0435",id:4}]}]},n.onAnswerClickHandler=function(e){if(n.state.answerState){var t=Object.keys(n.state.answerState)[0];if("success"===n.state.answerState[t])return}var s=n.state.quiz[n.state.activeQuestion],i=n.state.results;if(s.rightAnswerId===e){i[s.id]||(i[s.id]="success"),n.setState({answerState:Object(_.a)({},e,"success"),results:i});var a=window.setTimeout((function(){n.isQuizFinished()?(console.log("FINISh"),n.setState({isFinished:!0})):n.setState({activeQuestion:n.state.activeQuestion+1,answerState:null}),window.clearTimeout(a)}),1e3)}else i[s.id]="error",n.setState({answerState:Object(_.a)({},e,"error"),results:i})},n.retryHandler=function(){n.setState({results:{},isFinished:!1,activeQuestion:0,answerState:null})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"render",value:function(){return i.a.createElement("div",{className:p.a.Quiz},i.a.createElement("div",{className:p.a.QuizWrapper},i.a.createElement("h1",null,"Alco-quiz"),this.state.isFinished?i.a.createElement(O,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler}):i.a.createElement(q,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClick:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})))}}]),t}(s.Component);var N=function(){return i.a.createElement(h,null,i.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.83ab58fd.chunk.js.map