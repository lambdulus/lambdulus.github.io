(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},107:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(57),o=a.n(i),s=(a(65),a(26)),c=a(20),l=a(2),u=a(14),m=a(12),d=a(18),p=a(17),h=a(19),b=a(3),E=(a(66),a(1));function v(){return JSON.parse(window.localStorage.getItem("macrotable")||"{}")}function f(e){return e.trim()}var x,g,O,y={};function N(e){window.localStorage.setItem("macrotable",JSON.stringify(e))}function S(e,t,a){try{window.ga.getAll()[0].send("event",e,t,a)}catch(n){console.log(""),console.log("PLEASE DISABLE YOUR ADBLOCKER OR ALLOW GOOGLE ANALYTICS FOR THIS SITE"),console.log(""),console.error(n)}}!function(e){e.NORMAL="Normal Evaluation",e.APPLICATIVE="Applicative Evaluation",e.OPTIMISATION="Optimisation - \u03b7 Conversion",e.ABSTRACTION="Abstraction / Simplified Evaluation"}(x||(x={})),function(e){e[e.main=0]="main",e[e.macrolist=1]="macrolist"}(g||(g={})),function(e){e.INIT="Type \u03bb expression and hit enter",e.EVAL_MODE="Hit enter for next step",e.VALIDATE_MODE="Write next step and hit enter for validation",e.MACRO="Define Macro like: `NAME := [\u03bb expression]` and hit enter",e.NOTE="Type note and hit shift enter"}(O||(O={}));var j,k={macroTable:Object(l.a)({},y,v()),submittedBoxes:[],screen:g.main,activeBoxIndex:-1};!function(e){e[e.EXPRESSION=0]="EXPRESSION",e[e.MACRO=1]="MACRO",e[e.NOTE=2]="NOTE"}(j||(j={}));a(102);function B(e){var t=e.state,a=e.onImport,n=e.onScreenChange,i=t.screen,o=function(e){return Object(l.a)({},e,{submittedBoxes:e.submittedBoxes.map(C)})}(t),s=function(e){var t=new Blob([e],{type:"application/json"});return window.URL.createObjectURL(t)}(JSON.stringify(o));return r.a.createElement("div",{id:"topbar"},r.a.createElement("div",{title:"List all defined macros"},i===g.main?r.a.createElement("i",{className:"icon fas fa-list-ul fa-2x",onClick:function(){return n(g.macrolist)}}):r.a.createElement("i",{className:"icon far fa-window-close fa-2x",onClick:function(){return n(g.main)}}),r.a.createElement("p",{className:"iconLabel"},"Macros")),r.a.createElement("div",{title:"Download this notebook"},r.a.createElement("a",{className:"export",href:s,download:"notebook_lambdulus.json",onClick:function(){return setTimeout(function(){return window.URL.revokeObjectURL(s)},10)}},r.a.createElement("i",{id:"download",className:"icon fas fa-cloud-download-alt fa-2x"})),r.a.createElement("p",{className:"iconLabel"},"Export")),r.a.createElement("div",{title:"Open exported notebook"},r.a.createElement("input",{type:"file",accept:"application/json",id:"input",onChange:function(e){return function(e,t){var a=e.target.files;if(null===a)return;var n=a[0],r=new FileReader;r.onload=function(e){var a=JSON.parse(r.result);t(function(e){var t=e.macroTable;return Object(l.a)({},e,{submittedBoxes:e.submittedBoxes.map(function(e){return function(e,t){if(e.type===j.EXPRESSION){var a=e,n=a.singleLetterNames,r=function(e,t){var a=t.singleLetterNames,n=t.macroTable,r=Object(E.tokenize)(e,{lambdaLetters:["\u03bb"],singleLetterVars:a});return Object(E.parse)(r,n)}(e.expression,{macroTable:t,singleLetterNames:n});return Object(l.a)({},e,{ast:r,history:[{ast:r,lastReduction:E.None,step:0,message:"",isNormalForm:!1}]})}return e}(e,t)})})}(a))},r.readAsText(n)}(e,a)}}),r.a.createElement("label",{htmlFor:"input"},r.a.createElement("i",{className:"icon fas fa-cloud-upload-alt fa-2x"})),r.a.createElement("p",{className:"iconLabel"},"Import")))}function C(e){return e.type===j.EXPRESSION?Object(l.a)({},e,{ast:null,history:[],isRunning:!1,breakpoints:[],timeoutID:void 0}):e}var A=a(16);function R(e){var t=e.macroTable,a=e.removeMacro;return r.a.createElement("div",{className:"macroSpace"},r.a.createElement("div",{className:"builtinMacros"},r.a.createElement("p",null,"Built-in Macros"),r.a.createElement("ul",{className:"UL"},Object.entries(E.builtinMacros).map(function(e){var t=Object(A.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{key:a},r.a.createElement("li",{className:"LI"},r.a.createElement("div",{className:"box boxMacro"},a," := ",n)))}))),r.a.createElement("div",{className:"userMacros"},r.a.createElement("p",null,"User-defined Macros"),r.a.createElement("ul",null,Object.entries(t).map(function(e){var t=Object(A.a)(e,2),n=t[0],i=t[1];return r.a.createElement("div",{key:n},r.a.createElement("li",{className:"LI"},r.a.createElement("div",{className:"box boxMacro"},n," := ",i,r.a.createElement("i",{className:"hiddenMacroIcon far fa-trash-alt",onClick:function(){return a(n)},title:"Delete this macro"}))))}))))}var I=a(48),w=I.Switch,L=I.Radio;function M(e){return r.a.createElement("div",{className:"editorSettings"},r.a.createElement("span",{title:"Enable names without spaces"},r.a.createElement(w,{checked:e.getActiveSingleLetterNames(),disabled:!1,shape:"fill",onChange:function(t){return e.changeActiveSingleLetterNames(t.target.checked)}},"Single Letter Names")),r.a.createElement("div",{className:"strategies inlineblock"},r.a.createElement("p",{className:"stratsLabel inlineblock"},"Evaluation Strategies:"),r.a.createElement(L,{name:"strategy",style:"fill",checked:e.getActiveStrategy()===x.ABSTRACTION,onChange:function(){return e.changeActiveStrategy(x.ABSTRACTION)}},"Simplified"),r.a.createElement(L,{name:"strategy",style:"fill",checked:e.getActiveStrategy()===x.NORMAL,onChange:function(){return e.changeActiveStrategy(x.NORMAL)}},"Normal"),r.a.createElement(L,{name:"strategy",style:"fill",checked:e.getActiveStrategy()===x.APPLICATIVE,onChange:function(){return e.changeActiveStrategy(x.APPLICATIVE)}},"Applicative")))}a(103);var T,P=a(58),D=function(){function e(t){Object(u.a)(this,e),this.roots=t,this.translator=new Map,this.equals=!0,this.context=void 0;var a=t,n=Object(P.a)(a);this.context=n.slice(0),this.compare()}return Object(m.a)(e,[{key:"compare",value:function(){var e=Object(A.a)(this.context,2),t=e[0],a=e[1];if(t instanceof E.Lambda&&a instanceof E.Lambda){var n=new Map(this.translator.entries());this.translator.set(t.argument.name(),a.argument.name()),this.context=[t.right,a.right],this.compare(),this.translator=n}else if(t instanceof E.Application&&a instanceof E.Application){if(this.context=[t.left,a.left],this.compare(),!this.equals)return;this.context=[t.right,a.right],this.compare()}else t instanceof E.Macro&&a instanceof E.Macro?this.equals=t.name()===a.name():t instanceof E.ChurchNumeral&&a instanceof E.ChurchNumeral?this.equals=t.name()===a.name():t instanceof E.Variable&&a instanceof E.Variable?this.equals=this.translator.get(t.name())===a.name():this.equals=!1}}]),e}();a(104);function F(e){var t=e.placeholder,a=e.content,n=e.caretPosition,i=e.syntaxError,o=e.isMarkDown,s=e.onContent,c=e.onEnter,l=e.onExecute,u=a.split("\n").length;return r.a.createElement("div",{className:"editorContainer"},i?r.a.createElement("p",{className:"editorError"},"".concat(i)):null,r.a.createElement("div",{className:"editor"},r.a.createElement(_,{placeholder:t,content:a,lines:u,caretPosition:n,onChange:function(e){var t=e.target.value,a=e.target.selectionEnd;t=t.replace(/\\/g,"\u03bb"),s(t,a)},onKeyDown:function(e){if(!e.shiftKey&&!e.ctrlKey&&"Enter"===e.key){if(o)return;e.preventDefault(),c()}e.shiftKey&&"Enter"===e.key&&o&&(e.preventDefault(),c()),e.ctrlKey&&"Enter"===e.key&&(e.preventDefault(),l())}})))}function _(e){var t=e.placeholder,a=e.content,n=e.lines,i=e.onChange,o=e.onKeyDown,s=e.caretPosition;return r.a.createElement("textarea",{className:"prompt",onKeyDown:o,onChange:i,value:a,placeholder:t,wrap:"hard",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,rows:Math.max(n,1),ref:function(e){null!==e&&(e.selectionStart=s,e.selectionEnd=s,e.focus())}})}function V(e){var t=e.className,a=e.isActive,i=e.editor,o=i.placeholder,s=i.content,c=i.caretPosition,l=i.syntaxError,u=Object(n.useContext)(Ee),m=Object(n.useContext)(fe);return r.a.createElement("div",{className:"".concat(t," ").concat(a?"":" inactiveBox"),onDoubleClick:u},a?r.a.createElement("p",{className:"emptyStep"},"Empty expression box."):null,a?r.a.createElement("div",null,r.a.createElement("i",{className:"removeBox far fa-trash-alt",onClick:m}),r.a.createElement(F,{placeholder:o,content:s,caretPosition:c,syntaxError:l,isMarkDown:!1,onContent:e.onContent,onEnter:e.onEnter,onExecute:e.onExecute})):r.a.createElement("div",null,r.a.createElement("i",{className:"removeBox far fa-trash-alt",onClick:m}),r.a.createElement("p",{className:"inactiveMessage"},"Collapsing ",Math.max(0,e.history.length-1)," ",2===e.history.length?"step":"steps",". Double click to activate this box.")))}!function(e){e.ENTER_EXPRESSION="Enter Expression",e.ENTER_EXERCISE="Enter Exercise",e.NEXT_STEP="Next Step",e.RUN="Run",e.ENTER_MD="Enter MarkDown"}(T||(T={}));a(105);var U=function(e){function t(e,a,n,r){var i;return Object(u.a)(this,t),(i=Object(d.a)(this,Object(p.a)(t).call(this))).tree=e,i.onClick=a,i.reduction=n,i.breakpoints=r,i.rendered=null,i.argument=null,i.tree.visit(Object(b.a)(Object(b.a)(i))),i}return Object(h.a)(t,e),Object(m.a)(t,[{key:"printMultiLambda",value:function(e,t){var a=this;if(e.body instanceof E.Lambda){var n=e.body.argument,i="argument",o="";this.isBreakpoint(e.body.argument)&&(i+=" breakpoint",o="Will break on substitution");var s=!1;this.reduction instanceof E.Alpha&&Array.from(this.reduction.conversions).some(function(t){return t.identifier===e.body.identifier})&&(this.argument=n,s=!0);var c=this.argument;this.argument!==e.body.argument&&null!==this.argument&&this.argument.name()===e.body.argument.name()&&(this.argument=null),this.argument&&this.argument.name()===n.name()&&(i+=" substitutedArg");var l=r.a.createElement("span",{className:"arguments"},t," "," ",r.a.createElement("span",{className:i,title:o,onClick:function(){n.identifier=Symbol(),a.onClick({type:E.Beta,context:n,broken:new Set})}},n.name()));this.printMultiLambda(e.body,l),!0===s&&(this.argument=null),this.argument=c}else{e.body.visit(this);var u=this.rendered;this.rendered=t,this.rendered=r.a.createElement("span",{className:"function"},"(",r.a.createElement("span",{className:"lambda"},"\u03bb "," "),t," . ",u,")")}}},{key:"isBreakpoint",value:function(e){var t=!0,a=!1,n=void 0;try{for(var r,i=this.breakpoints[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){if(r.value.context.identifier===e.identifier)return!0}}catch(o){a=!0,n=o}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}return!1}}]),Object(m.a)(t,[{key:"print",value:function(){return this.rendered}},{key:"onApplication",value:function(e){var t="left",a="right",n=!1,i=null;if(this.reduction instanceof E.Beta&&(i=this.reduction.redex),null!==i&&i.identifier===e.identifier&&i===e&&(t+=" redex",a+=" redex",e.left instanceof E.Lambda&&(this.argument=e.left.argument,n=!0)),e.right instanceof E.Application){e.left.visit(this);var o=r.a.createElement("span",{className:t},this.rendered);n&&(this.argument=null),e.right.visit(this);var s=r.a.createElement("span",{className:a},"( ",this.rendered," )");this.rendered=r.a.createElement("span",{className:"application"},o," ",s)}else{e.left.visit(this);var c=r.a.createElement("span",{className:t},this.rendered);n&&(this.argument=null),e.right.visit(this);var l=r.a.createElement("span",{className:a},this.rendered);this.rendered=r.a.createElement("span",{className:"application"},c," ",l)}}},{key:"onLambda",value:function(e){var t=this,a="",n=this.argument;if(this.argument!==e.argument&&null!==this.argument&&this.argument.name()===e.argument.name()&&(this.argument=null),e.body instanceof E.Lambda){var i=e.argument,o="argument";this.isBreakpoint(e.argument)&&(o+=" breakpoint",a="Will break on substitution"),this.argument&&this.argument.name()===i.name()&&(o+=" substitutedArg");var s=r.a.createElement("span",{className:o,title:a,onClick:function(){i.identifier=Symbol(),t.onClick({type:E.Beta,context:i,broken:new Set})}},e.argument.name());this.printMultiLambda(e,s)}else{var c=e.argument;e.body.visit(this);var l=this.rendered,u="argument",m="";this.isBreakpoint(e.argument)&&(u+=" breakpoint",m="Will break on substitution"),this.argument&&this.argument.name()===c.name()&&(u+=" substitutedArg"),this.rendered=r.a.createElement("span",{className:"function"},"(",r.a.createElement("span",{className:"lambda"},"\u03bb "," "),r.a.createElement("span",{className:"arguments",onClick:function(){c.identifier=Symbol(),t.onClick({type:E.Beta,context:c,broken:new Set})}},r.a.createElement("span",{className:u,title:m,onClick:function(){c.identifier=Symbol(),t.onClick({type:E.Beta,context:c,broken:new Set})}},e.argument.name())," "),". ",l,")")}null!==n&&(this.argument=n)}},{key:"onChurchNumeral",value:function(e){var t=this,a="churchnumeral",n=null,i="";this.reduction instanceof E.Expansion&&(n=this.reduction.target),this.reduction instanceof E.Gama&&this.reduction.args.includes(e)&&(a+=" redex abstraction argument"),null!==n&&n.identifier===e.identifier&&n===e&&(a+=" redex"),this.isBreakpoint(e)&&(a+=" breakpoint",i="Will break on Expansion"),this.rendered=r.a.createElement("span",{className:a,title:i,onClick:function(){e.identifier=Symbol(),t.onClick({type:E.Expansion,context:e,broken:new Set})}},e.name())}},{key:"onMacro",value:function(e){var t=this,a="macro",n=null,i=" redex";(this.reduction instanceof E.Expansion&&(n=this.reduction.target),this.reduction instanceof E.Gama)&&(n=Object(A.a)(this.reduction.redexes,1)[0],i+=" abstraction");null!==n&&n.identifier===e.identifier&&n===e&&(a+=i),this.isBreakpoint(e)&&(a+=" breakpoint"),this.rendered=r.a.createElement("span",{className:a,onClick:function(){e.identifier=Symbol(),t.onClick({type:E.Expansion,context:e,broken:new Set})}},e.name())}},{key:"onVariable",value:function(e){var t="variable";this.argument&&this.argument.name()===e.name()&&(t+=" substitutedArg"),this.rendered=r.a.createElement("span",{className:t},e.name())}}]),t}(E.ASTVisitor),X=a(30);function J(e){var t=e.lastReduction;return null===t?null:t instanceof E.Beta?r.a.createElement("p",{className:"lastReduction"},"\u03b2 reduction"):t instanceof E.Alpha?r.a.createElement("p",{className:"lastReduction"},"\u03b1 conversion"):t instanceof E.Expansion?r.a.createElement("p",{className:"lastReduction"},"Macro expansion"):t instanceof X.Eta?r.a.createElement("p",{className:"lastReduction"},"\u03b7 conversion"):t instanceof E.Gama?r.a.createElement("p",{className:"lastReduction"},"Simplified Application"):null}var W=Object(n.createContext)(k),K=Object(n.createContext)(!0),q=Object(n.createContext)(x.NORMAL);function z(e){var t=e.state,a=e.SLI,n=e.strategy,i=e.children;return r.a.createElement(W.Provider,{value:t},r.a.createElement(q.Provider,{value:n},r.a.createElement(K.Provider,{value:a},i)))}var G=Object(n.memo)(function(e){var t=e.stepRecord,a=e.addBreakpoint,n=e.breakpoints,i=e.children,o=e.strategy,s=t.ast,c=t.lastReduction,l=t.step;t.message;if(null===s)return null;var u=new(ce(o))(s).nextReduction,m=new U(s,a,u,n);return r.a.createElement("span",{className:"step"},r.a.createElement(J,{lastReduction:c}),r.a.createElement("div",{className:"inlineblock"},r.a.createElement("p",{className:"stepNumber"},l," :"),m.print(),i,""===t.message?null:r.a.createElement("p",{className:"stepMessage"},t.message)))},function(e){return!e.lastStep});function H(e){return r.a.createElement(q.Consumer,null,function(t){return r.a.createElement(G,Object.assign({},e,{strategy:t}))})}var Y=Object(n.createContext)(function(e){}),$=Object(n.createContext)(function(e){}),Q=Object(n.createContext)(function(e){}),Z=Object(n.createContext)(function(e){}),ee=Object(n.createContext)(function(e,t){}),te=Object(n.createContext)(function(e,t){});function ae(e){var t=e.addBox,a=e.removeBox,n=e.addEmptyBox,i=e.changeActiveBox,o=e.setBoxState,s=e.defineMacro,c=e.children;return r.a.createElement(Y.Provider,{value:t},r.a.createElement($.Provider,{value:a},r.a.createElement(Q.Provider,{value:n},r.a.createElement(Z.Provider,{value:i},r.a.createElement(ee.Provider,{value:o},r.a.createElement(te.Provider,{value:s},c))))))}function ne(e){var t=e.className,a=Object(n.useContext)(fe),i=Object(n.useContext)(Ee);return r.a.createElement("div",{className:t+" inactiveBox",onDoubleClick:i},r.a.createElement("i",{className:"removeBox far fa-trash-alt",onClick:a}),r.a.createElement("ul",{className:"UL"},r.a.createElement("li",{key:0,className:"activeStep LI"},r.a.createElement(H,{breakpoints:e.breakpoints,addBreakpoint:function(){},stepRecord:e.history[0],lastStep:!1},r.a.createElement(Y.Consumer,null,function(t){return r.a.createElement("i",{className:"hiddenIcon fas fa-pencil-alt",onClick:function(){return t(e.createBoxFrom(e.history[0]))}})})))),r.a.createElement("p",{className:"inactiveMessage"},"Collapsing ",e.history.length-1," ",2===e.history.length?"step":"steps",". Double click to activate this box."))}a(106),a(107);var re=a(48),ie=re.Switch;re.Radio;function oe(e){var t=e.isExercise,a=e.makeExercise,n=e.endExercise;return r.a.createElement("div",{id:"controls"},r.a.createElement("div",{title:"Write the next step yourself"},r.a.createElement(ie,{className:"exerciseSwitch",checked:t,onChange:function(e){return e.target.checked?a():n()},shape:"fill"},"Exercise")))}var se=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).addBreakpoint=a.addBreakpoint.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.isExercise,i=t.state,o=t.editor,s=o.placeholder,c=o.content,u=o.caretPosition,m=o.syntaxError;return r.a.createElement("div",{className:a},r.a.createElement(oe,{isExercise:n,makeExercise:function(){return e.props.setBoxState(Object(l.a)({},i,{isExercise:!0,editor:Object(l.a)({},i.editor,{placeholder:O.VALIDATE_MODE})}))},endExercise:function(){return e.props.setBoxState(Object(l.a)({},i,{isExercise:!1,editor:Object(l.a)({},i.editor,{placeholder:O.EVAL_MODE})}))}}),r.a.createElement(fe.Consumer,null,function(e){return r.a.createElement("i",{className:"removeBox far fa-trash-alt",onClick:e})}),r.a.createElement(Y.Consumer,null,function(t){return r.a.createElement("ul",{className:"UL"},function(e,t,a,n){for(var r=new Array(t-e+1),i=0,o=e;o<=t;++o)r[i++]=n(a[o],o);return r}(0,e.props.history.length-2,e.props.history,function(a,n){return r.a.createElement("li",{key:n.toString(),className:"inactiveStep LI"},r.a.createElement(H,{breakpoints:e.props.breakpoints,addBreakpoint:function(){},stepRecord:a,lastStep:!1},r.a.createElement("i",{className:"hiddenIcon fas fa-pencil-alt",title:"Copy this to new box",onClick:function(){return t(e.props.createBoxFrom(a))}})))}),r.a.createElement("li",{key:e.props.history.length-1,className:"activeStep LI"},r.a.createElement(H,{breakpoints:e.props.breakpoints,addBreakpoint:e.addBreakpoint,stepRecord:e.props.history[e.props.history.length-1],lastStep:!0},r.a.createElement("i",{className:"hiddenIcon fas fa-pencil-alt",title:"Copy this to new box",onClick:function(){return t(e.props.createBoxFrom(e.props.history[e.props.history.length-1]))}}))))}),this.props.isNormalForm?null:r.a.createElement(F,{placeholder:s,content:c,caretPosition:u,syntaxError:m,isMarkDown:!1,onContent:this.props.onContent,onEnter:this.props.onEnter,onExecute:this.props.onExecute}))}},{key:"addBreakpoint",value:function(e){var t=this.props,a=t.state;(0,t.setBoxState)(Object(l.a)({},a,{breakpoints:[].concat(Object(c.a)(a.breakpoints),[e])}))}}]),t}(n.PureComponent);function ce(e){switch(e){case x.NORMAL:return E.NormalEvaluator;case x.APPLICATIVE:return E.ApplicativeEvaluator;case x.OPTIMISATION:return E.OptimizeEvaluator;case x.ABSTRACTION:return E.NormalAbstractionEvaluator}}var le=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onContent=a.onContent.bind(Object(b.a)(Object(b.a)(a))),a.onSubmitExpression=a.onSubmitExpression.bind(Object(b.a)(Object(b.a)(a))),a.parseExpression=a.parseExpression.bind(Object(b.a)(Object(b.a)(a))),a.onEnter=a.onEnter.bind(Object(b.a)(Object(b.a)(a))),a.onExerciseStep=a.onExerciseStep.bind(Object(b.a)(Object(b.a)(a))),a.onStep=a.onStep.bind(Object(b.a)(Object(b.a)(a))),a.onExecute=a.onExecute.bind(Object(b.a)(Object(b.a)(a))),a.onRun=a.onRun.bind(Object(b.a)(Object(b.a)(a))),a.onStop=a.onStop.bind(Object(b.a)(Object(b.a)(a))),a.shouldBreak=a.shouldBreak.bind(Object(b.a)(Object(b.a)(a))),a.createBoxFrom=a.createBoxFrom.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.state,a=e.isActive,n=t.history,i=t.breakpoints,o=t.isExercise,s=(t.strategy,t.expression),c=t.editor,l="box boxEval",u=(n.length?n[n.length-1]:{isNormalForm:!1}).isNormalForm;return""===s?r.a.createElement(V,{className:l,isActive:this.props.isActive,editor:c,history:n,onContent:this.onContent,onEnter:this.onEnter,onExecute:this.onExecute}):(o&&(l+=" boxExercise"),a?r.a.createElement(se,{className:l,isExercise:o,state:t,breakpoints:i,history:n,editor:c,isNormalForm:u,createBoxFrom:this.createBoxFrom,setBoxState:this.props.setBoxState,onContent:this.onContent,onEnter:this.onEnter,onExecute:this.onExecute}):r.a.createElement(ne,{className:l,breakpoints:i,history:n,createBoxFrom:this.createBoxFrom}))}},{key:"createBoxFrom",value:function(e){var t=this.props.state,a=t.strategy,n=t.singleLetterNames,r=e.ast;return{type:j.EXPRESSION,__key:Date.now().toString(),expression:r.toString(),ast:r.clone(),history:[{ast:r.clone(),lastReduction:null,step:0,message:"",isNormalForm:!1}],isRunning:!1,breakpoints:[],timeoutID:void 0,timeout:10,isExercise:!1,strategy:a,singleLetterNames:n,editor:{placeholder:O.EVAL_MODE,content:"",caretPosition:0,syntaxError:null}}}},{key:"onContent",value:function(e,t){var a=this.props,n=a.state;(0,a.setBoxState)(Object(l.a)({},n,{editor:Object(l.a)({},n.editor,{content:e,caretPosition:t,syntaxError:null})}))}},{key:"onEnter",value:function(){var e=this.props.state,t=e.expression,a=e.isExercise,n=e.editor.content;""===t?this.onSubmitExpression():""!==n&&a?this.onExerciseStep():""!==n||a?console.log("Error: Something unexpected just happened. A"):this.onStep()}},{key:"onSubmitExpression",value:function(){var e=this.props,t=e.state,a=e.setBoxState,n=t.editor.content;try{var r=this.parseExpression(n);a(Object(l.a)({},t,{ast:r,expression:n,history:[{ast:r.clone(),lastReduction:E.None,step:0,message:"",isNormalForm:!1}],editor:{content:"",caretPosition:0,placeholder:O.EVAL_MODE,syntaxError:null}})),S("Submit Expression","submit valid",n)}catch(i){a(Object(l.a)({},t,{editor:Object(l.a)({},t.editor,{syntaxError:i.toString()})})),S("Submit Expression","submit invalid",n)}}},{key:"onExerciseStep",value:function(){var e=this.props,t=e.state,a=e.setBoxState,n=t.strategy,r=t.history,i=t.editor.content;try{var o=this.parseExpression(i),s=r[r.length-1],u=s.isNormalForm,m=s.step,d=s.ast,p=s.lastReduction;if(d=d.clone(),u)return s.message="No more steps available. Expression is in normal form.",a(Object(l.a)({},t)),void S("Exercise Step","Step Already in normal form",i);var h=new(ce(n))(d);if(p=h.nextReduction,h.nextReduction instanceof E.None)return s.isNormalForm=!0,s.message="Expression is already in normal form.",a(Object(l.a)({},t)),void S("Exercise Step","Step Already in Normal Form",i);d=h.perform();var b="";new D([o,d]).equals?(d=o,b="Correct.",S("Exercise Step","Valid Step",i)):(console.log("Incorrect step"),b="Incorrect step. ".concat(i),S("Exercise Step","Invalid Step",i)),a(Object(l.a)({},t,{history:[].concat(Object(c.a)(r),[{ast:d,lastReduction:p,step:m+1,message:b,isNormalForm:!1}]),editor:Object(l.a)({},t.editor,{content:"",caretPosition:0,placeholder:O.VALIDATE_MODE,syntaxError:null})}))}catch(v){S("Exercise Step","Syntax error in Step",i)}}},{key:"onStep",value:function(){var e=this.props,t=e.state,a=e.setBoxState,n=t.strategy,r=t.history,i=(t.editor.content,r[r.length-1]),o=i.isNormalForm,s=i.step,u=i.ast,m=i.lastReduction;if(u=u.clone(),!o){var d=new(ce(n))(u);if(m=d.nextReduction,d.nextReduction instanceof E.None)return i.isNormalForm=!0,i.message="Expression is in normal form.",a(Object(l.a)({},t)),void S("Evaluation Step","Step Normal Form Reached",u.toString());u=d.perform(),a(Object(l.a)({},t,{history:[].concat(Object(c.a)(r),[{ast:u,lastReduction:m,step:s+1,message:"",isNormalForm:!1}])})),S("Evaluation Step","Step",u.toString())}}},{key:"onExecute",value:function(){var e=this.props,t=e.state,a=e.setBoxState,n=t.isRunning;if(!t.isExercise)if(n)this.onStop();else{var r=t.timeout,i=t.history,o=i[i.length-1];if(o.isNormalForm)return;var s=o.ast,c=o.step,u=o.lastReduction,m=o.isNormalForm;o.message;i.push(i[i.length-1]),i[i.length-2]={ast:s.clone(),step:c,lastReduction:u,message:"Skipping some steps...",isNormalForm:m},a(Object(l.a)({},t,{isRunning:!0,timeoutID:window.setTimeout(this.onRun,r)})),S("Execution","Run Evaluation",s.toString())}}},{key:"onRun",value:function(){var e=this,t=this.props,a=t.state,n=t.setBoxState,r=a.strategy,i=a.history,o=a.isRunning,s=a.breakpoints,c=a.timeoutID,u=a.timeout,m=i[i.length-1],d=m.isNormalForm,p=m.step,h=m.lastReduction;if(o)if(d)n(Object(l.a)({},a,{isRunning:!1,timeoutID:void 0}));else{var b=m.ast,v=new(ce(r))(b);if(h=v.nextReduction,v.nextReduction instanceof E.None)return i.pop(),i.push({ast:b,lastReduction:m.lastReduction,step:p,message:"Expression is in normal form.",isNormalForm:!0}),void n(Object(l.a)({},a,{isRunning:!1,timeoutID:void 0}));var f=s.find(function(t){return e.shouldBreak(t,v.nextReduction)});if(void 0!==f)return v.nextReduction instanceof E.Expansion&&f.broken.add(v.nextReduction.target),v.nextReduction instanceof E.Beta&&v.nextReduction.redex.left instanceof E.Lambda&&f.broken.add(v.nextReduction.redex.left.argument),window.clearTimeout(c),void n(Object(l.a)({},a,{isRunning:!1,timeoutID:c}));b=v.perform(),i[i.length-1]={ast:b,lastReduction:h,step:p+1,message:"",isNormalForm:d},n(Object(l.a)({},a,{timeoutID:window.setTimeout(this.onRun,u)}))}}},{key:"onStop",value:function(){var e=this.props,t=e.state,a=e.setBoxState,n=t.timeoutID;window.clearTimeout(n),a(Object(l.a)({},t,{isRunning:!1,timeoutID:void 0}))}},{key:"shouldBreak",value:function(e,t){return t instanceof e.type&&t instanceof E.Beta&&e.context instanceof E.Variable&&t.redex.left instanceof E.Lambda&&t.redex.left.argument.identifier===e.context.identifier&&!e.broken.has(t.redex.left.argument)||(t instanceof e.type&&t instanceof E.Expansion&&e.context instanceof E.ChurchNumeral&&t.target.identifier===e.context.identifier&&!e.broken.has(t.target)||t instanceof e.type&&t instanceof E.Expansion&&e.context instanceof E.Macro&&t.target.identifier===e.context.identifier&&!e.broken.has(t.target))}},{key:"parseExpression",value:function(e){var t=this.props.macroTable,a=this.props.state.singleLetterNames,n=Object(E.tokenize)(e,{lambdaLetters:["\u03bb"],singleLetterVars:a});return Object(E.parse)(n,t)}}]),t}(n.PureComponent);function ue(e){var t=e.state,a=e.setBoxState,i=t.macroName,o=t.macroExpression,s=t.singleLetterNames,c=t.editor,u=c.content,m=c.caretPosition,d=c.placeholder,p=c.syntaxError,h=Object(n.useContext)(fe),b=Object(n.useContext)(te);return""===i&&""===o?r.a.createElement("div",{className:"box boxMacro inactiveBox"},r.a.createElement("p",{className:"emptyStep"},"Empty macro box."),r.a.createElement("i",{className:"removeBox far fa-trash-alt",onClick:h}),r.a.createElement(F,{placeholder:d,content:u,caretPosition:m,syntaxError:p,isMarkDown:!1,onContent:function(t,n){a(Object(l.a)({},e.state,{editor:Object(l.a)({},e.state.editor,{content:t,caretPosition:n,syntaxError:null})}))},onEnter:function(){var e=u.split(":=").map(f),n=Object(A.a)(e,2),r=n[0],i=n[1];r in E.builtinMacros?a(Object(l.a)({},t,{editor:Object(l.a)({},t.editor,{syntaxError:new Error("Macro name is not valid. It redefines built-in Macro.")})})):function(e,t){try{var a=me(e,t);return a instanceof E.Variable}catch(n){return!1}}(r,s)?function(e,t){try{return me(e,t),!0}catch(a){return!1}}(i,s)?(a(Object(l.a)({},t,{macroName:r,macroExpression:i})),b(r,i)):a(Object(l.a)({},t,{editor:Object(l.a)({},t.editor,{syntaxError:new Error("Macro expression is not valid.")})})):a(Object(l.a)({},t,{editor:Object(l.a)({},t.editor,{syntaxError:new Error("Macro name is not valid.\n            ".concat(s&&1!==r.length?"Name should be single letter.":""))})}))},onExecute:function(){}})):r.a.createElement("div",{className:"box boxMacro"},i," := ",o,r.a.createElement("i",{className:"removeBox far fa-trash-alt",onClick:h}))}function me(e,t){var a=t,n=Object(E.tokenize)(e,{lambdaLetters:["\u03bb"],singleLetterVars:a});return Object(E.parse)(n,{})}a(191);var de=a(108);function pe(e){var t=e.state,a=t.note,i=t.editor,o=i.placeholder,s=i.content,c=i.caretPosition,u=i.syntaxError,m=t.isEditing,d=e.isActive,p=Object(n.useContext)(Ee),h=Object(n.useContext)(ve),b=Object(n.useContext)(fe),E=function(){h(Object(l.a)({},e.state,{note:s,isEditing:!1}))};return m&&d?r.a.createElement("div",{className:"box boxNoteEditor"},""===a?r.a.createElement("p",{className:"emptyStep"},"Empty note box."):null,r.a.createElement("div",{id:"controls"},r.a.createElement("button",{onClick:function(){return E()}},"Save")),r.a.createElement("i",{className:"removeBox far fa-trash-alt",onClick:b}),r.a.createElement(F,{placeholder:o,content:s,caretPosition:c,syntaxError:u,isMarkDown:!0,onContent:function(t,a){h(Object(l.a)({},e.state,{editor:Object(l.a)({},e.state.editor,{content:t,caretPosition:a,syntaxError:null})}))},onEnter:E,onExecute:function(){}})):r.a.createElement("div",{className:"box boxNote"},r.a.createElement("div",{id:"controls"},r.a.createElement("button",{onClick:function(){h(Object(l.a)({},e.state,{isEditing:!0})),p()}},"Edit")),r.a.createElement("i",{className:"removeBox far fa-trash-alt",onClick:b}),r.a.createElement(de,{className:"markdown-body",source:a}))}function he(e){var t=e.state,a=e.isActive,i=t.type,o=Object(n.useContext)(ge),s=Object(n.useContext)(ve);return i===j.EXPRESSION?r.a.createElement("div",{className:""},r.a.createElement(le,{state:t,isActive:a,macroTable:o,setBoxState:s})):i===j.MACRO?r.a.createElement("div",{className:""},r.a.createElement(ue,{state:t,setBoxState:s})):i===j.NOTE?r.a.createElement("div",{className:""},r.a.createElement(pe,{state:t,isActive:a})):null}function be(){var e=Object(n.useContext)(q),t=Object(n.useContext)(K),a=Object(n.useContext)(Q);return r.a.createElement("div",{className:"emptyC"},r.a.createElement("p",{className:"plusBtn inlineblock",title:"Create new \u03bb expression",onClick:function(){return a(function(e,t){return{type:j.EXPRESSION,__key:Date.now().toString(),expression:"",ast:null,history:[],isRunning:!1,breakpoints:[],timeoutID:void 0,timeout:10,isExercise:!1,strategy:e,singleLetterNames:t,editor:{placeholder:O.INIT,content:"",caretPosition:0,syntaxError:null}}}(e,t))}},r.a.createElement("i",null,"+ \u03bb")),r.a.createElement("p",{className:"plusBtn inlineblock",title:"Define new macro",onClick:function(){return a(function(e){return{type:j.MACRO,__key:Date.now().toString(),macroName:"",macroExpression:"",singleLetterNames:e,editor:{placeholder:O.MACRO,content:"",caretPosition:0,syntaxError:null}}}(t))}},r.a.createElement("i",null,"+ Macro")),r.a.createElement("p",{className:"plusBtn inlineblock",title:"Write new Markdown note",onClick:function(){return a({type:j.NOTE,__key:Date.now().toString(),note:"",isEditing:!0,editor:{placeholder:O.NOTE,content:"",caretPosition:0,syntaxError:null}})}},r.a.createElement("i",null,"+ MD")))}var Ee=Object(n.createContext)(function(){}),ve=Object(n.createContext)(function(e){}),fe=Object(n.createContext)(function(){});function xe(e){var t=e.submittedBoxes,a=e.activeBoxIndex,i=Object(n.useContext)(Z),o=Object(n.useContext)(ee),s=Object(n.useContext)($);return 0===t.length?r.a.createElement("div",{className:"evaluatorSpace"},r.a.createElement("div",{className:"bigEmpty"},r.a.createElement(be,null))):r.a.createElement("div",{className:"evaluatorSpace"},r.a.createElement("ul",{className:"evaluatorList UL"},t.map(function(e,t){return r.a.createElement("li",{className:"LI",key:e.__key},r.a.createElement(Ee.Provider,{value:function(){return i(t)}},r.a.createElement(ve.Provider,{value:function(e){return o(t,e)}},r.a.createElement(fe.Provider,{value:function(){return s(t)}},r.a.createElement(he,{state:e,isActive:t===a})))))}),r.a.createElement("div",{className:"smallEmpty"},r.a.createElement(be,null))))}var ge=Object(n.createContext)(Object(l.a)({},y,v()));function Oe(e){var t=Object(n.useContext)(W),a=t.macroTable,i=t.submittedBoxes,o=t.activeBoxIndex;return r.a.createElement(ge.Provider,{value:a},r.a.createElement(xe,{submittedBoxes:i,activeBoxIndex:o}))}var ye=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).setBoxState=a.setBoxState.bind(Object(b.a)(Object(b.a)(a))),a.addEmptyBox=a.addEmptyBox.bind(Object(b.a)(Object(b.a)(a))),a.changeActiveBox=a.changeActiveBox.bind(Object(b.a)(Object(b.a)(a))),a.changeActiveStrategy=a.changeActiveStrategy.bind(Object(b.a)(Object(b.a)(a))),a.changeActiveSingleLetterNames=a.changeActiveSingleLetterNames.bind(Object(b.a)(Object(b.a)(a))),a.getActiveStrategy=a.getActiveStrategy.bind(Object(b.a)(Object(b.a)(a))),a.getActiveSingleLetterNames=a.getActiveSingleLetterNames.bind(Object(b.a)(Object(b.a)(a))),a.addBox=a.addBox.bind(Object(b.a)(Object(b.a)(a))),a.removeMacro=a.removeMacro.bind(Object(b.a)(Object(b.a)(a))),a.defineMacro=a.defineMacro.bind(Object(b.a)(Object(b.a)(a))),a.createBoxFromURL=a.createBoxFromURL.bind(Object(b.a)(Object(b.a)(a))),a.removeBox=a.removeBox.bind(Object(b.a)(Object(b.a)(a))),a.state=k,window.addEventListener("hashchange",a.createBoxFromURL),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.createBoxFromURL()}},{key:"render",value:function(){var e=this,t=this.state,a=t.macroTable,n=t.screen;return r.a.createElement("div",{className:"app"},r.a.createElement(B,{state:this.state,onImport:function(t){return e.setState(t)},onScreenChange:function(t){return e.setState(Object(l.a)({},e.state,{screen:t}))}}),r.a.createElement(M,{getActiveSingleLetterNames:this.getActiveSingleLetterNames,getActiveStrategy:this.getActiveStrategy,changeActiveSingleLetterNames:this.changeActiveSingleLetterNames,changeActiveStrategy:this.changeActiveStrategy}),n===g.main?r.a.createElement(z,{SLI:this.getActiveSingleLetterNames(),strategy:this.getActiveStrategy(),state:this.state},r.a.createElement(ae,{addBox:this.addBox,removeBox:this.removeBox,addEmptyBox:this.addEmptyBox,changeActiveBox:this.changeActiveBox,defineMacro:this.defineMacro,setBoxState:this.setBoxState},r.a.createElement(Oe,null))):r.a.createElement(R,{macroTable:a,removeMacro:this.removeMacro}))}},{key:"createBoxFromURL",value:function(){var e=decodeURI(window.location.hash.substring(1)),t=-1!==e.indexOf("exercise:"),a=t?e.substring(9):e,n={type:j.EXPRESSION,__key:Date.now().toString(),expression:"",ast:null,history:[],isRunning:!1,breakpoints:[],timeoutID:void 0,timeout:10,isExercise:t,strategy:this.getActiveStrategy(),singleLetterNames:this.getActiveSingleLetterNames(),editor:{placeholder:O.INIT,content:a,caretPosition:a.length,syntaxError:null}};this.setState(Object(l.a)({},this.state,{submittedBoxes:[n],activeBoxIndex:0}))}},{key:"setBoxState",value:function(e,t){var a=this.state.submittedBoxes,n=t.type===j.EXPRESSION?t.editor.content||t.expression:"",r=t.type===j.EXPRESSION&&t.isExercise?"exercise:":"";history.pushState({},"page title?","#"+r+encodeURI(n)),a[e]=t,this.setState(Object(l.a)({},this.state,{submittedBoxes:a}))}},{key:"addEmptyBox",value:function(e){var t=this.state.submittedBoxes;this.setState(Object(l.a)({},this.state,{submittedBoxes:[].concat(Object(c.a)(t),[e]),activeBoxIndex:Math.max(0,t.length)}))}},{key:"addBox",value:function(e){var t=this.state.submittedBoxes;this.setState(Object(l.a)({},this.state,{submittedBoxes:[].concat(Object(c.a)(t),[e]),activeBoxIndex:t.length}))}},{key:"removeBox",value:function(e){var t=this.state,a=t.submittedBoxes,n=t.activeBoxIndex;a.splice(e,1),-1===(n=n>=e?n-1:n)?history.pushState({},"page title?","#"):this.changeActiveBox(n),this.setState(Object(l.a)({},this.state,{submittedBoxes:a,activeBoxIndex:n}))}},{key:"changeActiveBox",value:function(e){var t=this.state.submittedBoxes[e],a=t.editor.content||t.expression,n=t.type===j.EXPRESSION&&t.isExercise?"exercise:":"";history.pushState({},"page title?","#"+n+encodeURI(a)),this.setState(Object(l.a)({},this.state,{activeBoxIndex:e}))}},{key:"getActiveStrategy",value:function(){var e=this.state,t=e.submittedBoxes,a=e.activeBoxIndex;if(-1===a)return JSON.parse(window.localStorage.getItem("strategy")||JSON.stringify(x.ABSTRACTION));var n=t[a];return n.type!==j.EXPRESSION?JSON.parse(window.localStorage.getItem("strategy")||JSON.stringify(x.ABSTRACTION)):n.strategy}},{key:"getActiveSingleLetterNames",value:function(){var e=this.state,t=e.submittedBoxes,a=e.activeBoxIndex;if(-1===a)return JSON.parse(window.localStorage.getItem("SLI")||"true");var n=t[a];return n.type===j.NOTE?JSON.parse(window.localStorage.getItem("SLI")||"true"):n.type===j.EXPRESSION?n.singleLetterNames:n.type===j.MACRO?n.singleLetterNames:JSON.parse(window.localStorage.getItem("SLI")||"true")}},{key:"changeActiveStrategy",value:function(e){var t=this.state,a=t.submittedBoxes,n=t.activeBoxIndex;a[n]=Object(l.a)({},a[n],{strategy:e}),this.setState(Object(l.a)({},this.state)),window.localStorage.setItem("strategy",JSON.stringify(e))}},{key:"changeActiveSingleLetterNames",value:function(e){var t=this.state,a=t.submittedBoxes,n=t.activeBoxIndex;a[n]=Object(l.a)({},a[n],{singleLetterNames:e}),this.setState(Object(l.a)({},this.state)),window.localStorage.setItem("SLI",JSON.stringify(e))}},{key:"removeMacro",value:function(e){var t=this.state.macroTable,a=Object(l.a)({},t);delete a[e],this.setState(Object(l.a)({},this.state,{macroTable:a})),N(a)}},{key:"defineMacro",value:function(e,t){var a=this.state.macroTable;this.setState(Object(l.a)({},this.state,{macroTable:Object(l.a)({},a,Object(s.a)({},e,t))})),N(Object(l.a)({},a,Object(s.a)({},e,t)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,a){e.exports=a(192)},65:function(e,t,a){},66:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.31a1062a.chunk.js.map