(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},107:function(e,t,n){},192:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(57),o=n.n(i),s=(n(65),n(26)),c=n(20),l=n(2),u=n(12),m=n(11),d=n(15),p=n(14),h=n(16),b=n(3),E=(n(66),n(1));function f(){return JSON.parse(window.localStorage.getItem("macrotable")||"{}")}function v(e){return e.trim()}var x,g,O,y={};function N(e){window.localStorage.setItem("macrotable",JSON.stringify(e))}function S(e,t,n){try{window.ga.getAll()[0].send("event",e,t,n)}catch(a){console.log(""),console.log("PLEASE DISABLE YOUR ADBLOCKER OR ALLOW GOOGLE ANALYTICS FOR THIS SITE"),console.log(""),console.error(a)}}!function(e){e.NORMAL="Normal Evaluation",e.APPLICATIVE="Applicative Evaluation",e.OPTIMISATION="Optimisation - \u03b7 Conversion",e.ABSTRACTION="Abstraction / Simplified Evaluation"}(x||(x={})),function(e){e[e.main=0]="main",e[e.macrolist=1]="macrolist"}(g||(g={})),function(e){e.INIT="Type \u03bb expression and hit enter",e.EVAL_MODE="Hit enter for next step",e.VALIDATE_MODE="Write next step and hit enter for validation",e.MACRO="Define Macro like: `NAME := [\u03bb expression]` and hit enter",e.NOTE="Type note and hit shift enter"}(O||(O={}));var j,k={macroTable:Object(l.a)({},y,f()),submittedBoxes:[],screen:g.main,activeBoxIndex:-1};!function(e){e[e.EXPRESSION=0]="EXPRESSION",e[e.MACRO=1]="MACRO",e[e.NOTE=2]="NOTE"}(j||(j={}));n(102);function B(e){var t=e.state,n=e.onImport,a=e.onScreenChange,i=t.screen,o=function(e){return Object(l.a)({},e,{submittedBoxes:e.submittedBoxes.map(C)})}(t),s=function(e){var t=new Blob([e],{type:"application/json"});return window.URL.createObjectURL(t)}(JSON.stringify(o));return r.a.createElement("div",{id:"topbar"},r.a.createElement("div",{title:"List all defined macros"},i===g.main?r.a.createElement("i",{className:"icon fas fa-list-ul fa-2x",onClick:function(){return a(g.macrolist)}}):r.a.createElement("i",{className:"icon far fa-window-close fa-2x",onClick:function(){return a(g.main)}}),r.a.createElement("p",{className:"iconLabel"},"Macros")),r.a.createElement("div",{title:"Download this notebook"},r.a.createElement("a",{className:"export",href:s,download:"notebook_lambdulus.json",onClick:function(){return setTimeout(function(){return window.URL.revokeObjectURL(s)},10)}},r.a.createElement("i",{id:"download",className:"icon fas fa-cloud-download-alt fa-2x"})),r.a.createElement("p",{className:"iconLabel"},"Export")),r.a.createElement("div",{title:"Open exported notebook"},r.a.createElement("input",{type:"file",accept:"application/json",id:"input",onChange:function(e){return function(e,t){var n=e.target.files;if(null===n)return;var a=n[0],r=new FileReader;r.onload=function(e){var n=JSON.parse(r.result);t(function(e){var t=e.macroTable;return Object(l.a)({},e,{submittedBoxes:e.submittedBoxes.map(function(e){return function(e,t){if(e.type===j.EXPRESSION){var n=e,a=n.singleLetterNames,r=function(e,t){var n=t.singleLetterNames,a=t.macroTable,r=Object(E.tokenize)(e,{lambdaLetters:["\u03bb"],singleLetterVars:n});return Object(E.parse)(r,a)}(e.expression,{macroTable:t,singleLetterNames:a});return Object(l.a)({},e,{ast:r,history:[{ast:r,lastReduction:E.None,step:0,message:"",isNormalForm:!1}]})}return e}(e,t)})})}(n))},r.readAsText(a)}(e,n)}}),r.a.createElement("label",{htmlFor:"input"},r.a.createElement("i",{className:"icon fas fa-cloud-upload-alt fa-2x"})),r.a.createElement("p",{className:"iconLabel"},"Import")))}function C(e){return e.type===j.EXPRESSION?Object(l.a)({},e,{ast:null,history:[],isRunning:!1,breakpoints:[],timeoutID:void 0}):e}var A=n(19);function R(e){var t=e.macroTable,n=e.removeMacro;return r.a.createElement("div",{className:"macroSpace"},r.a.createElement("div",{className:"builtinMacros"},r.a.createElement("p",null,"Built-in Macros"),r.a.createElement("ul",{className:"UL"},Object.entries(E.builtinMacros).map(function(e){var t=Object(A.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{key:n},r.a.createElement("li",{className:"LI"},r.a.createElement("div",{className:"box boxMacro"},n," := ",a)))}))),r.a.createElement("div",{className:"userMacros"},r.a.createElement("p",null,"User-defined Macros"),r.a.createElement("ul",null,Object.entries(t).map(function(e){var t=Object(A.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{key:a},r.a.createElement("li",{className:"LI"},r.a.createElement("div",{className:"box boxMacro"},a," := ",i,r.a.createElement("i",{className:"hiddenMacroIcon far fa-trash-alt",onClick:function(){return n(a)},title:"Delete this macro"}))))}))))}var w=n(48),I=w.Switch;w.Radio;function L(e){return r.a.createElement("div",{className:"editorSettings"},r.a.createElement("span",{title:"Enable names without spaces"},r.a.createElement(I,{checked:e.getActiveSingleLetterNames(),disabled:!1,shape:"fill",onChange:function(t){return e.changeActiveSingleLetterNames(t.target.checked)}},"Single Letter Names")),r.a.createElement("div",{className:"strategies inlineblock"},r.a.createElement("p",null,"Evaluation Strategy: Simplified Abstraction")))}n(103);var M,T=n(58),P=function(){function e(t){Object(u.a)(this,e),this.roots=t,this.translator=new Map,this.equals=!0,this.context=void 0;var n=t,a=Object(T.a)(n);this.context=a.slice(0),this.compare()}return Object(m.a)(e,[{key:"compare",value:function(){var e=Object(A.a)(this.context,2),t=e[0],n=e[1];if(t instanceof E.Lambda&&n instanceof E.Lambda){var a=new Map(this.translator.entries());this.translator.set(t.argument.name(),n.argument.name()),this.context=[t.right,n.right],this.compare(),this.translator=a}else if(t instanceof E.Application&&n instanceof E.Application){if(this.context=[t.left,n.left],this.compare(),!this.equals)return;this.context=[t.right,n.right],this.compare()}else t instanceof E.Macro&&n instanceof E.Macro?this.equals=t.name()===n.name():t instanceof E.ChurchNumeral&&n instanceof E.ChurchNumeral?this.equals=t.name()===n.name():t instanceof E.Variable&&n instanceof E.Variable?this.equals=this.translator.get(t.name())===n.name():this.equals=!1}}]),e}();n(104);function D(e){var t=e.placeholder,n=e.content,a=e.caretPosition,i=e.syntaxError,o=e.isMarkDown,s=e.onContent,c=e.onEnter,l=e.onExecute,u=n.split("\n").length;return r.a.createElement("div",{className:"editorContainer"},i?r.a.createElement("p",{className:"editorError"},"".concat(i)):null,r.a.createElement("div",{className:"editor"},r.a.createElement(F,{placeholder:t,content:n,lines:u,caretPosition:a,onChange:function(e){var t=e.target.value,n=e.target.selectionEnd;t=t.replace(/\\/g,"\u03bb"),s(t,n)},onKeyDown:function(e){if(!e.shiftKey&&!e.ctrlKey&&"Enter"===e.key){if(o)return;e.preventDefault(),c()}e.shiftKey&&"Enter"===e.key&&o&&(e.preventDefault(),c()),e.ctrlKey&&"Enter"===e.key&&(e.preventDefault(),l())}})))}function F(e){var t=e.placeholder,n=e.content,a=e.lines,i=e.onChange,o=e.onKeyDown,s=e.caretPosition;return r.a.createElement("textarea",{className:"prompt",onKeyDown:o,onChange:i,value:n,placeholder:t,wrap:"hard",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,rows:Math.max(a,1),ref:function(e){null!==e&&(e.selectionStart=s,e.selectionEnd=s,e.focus())}})}!function(e){e.ENTER_EXPRESSION="Enter Expression",e.ENTER_EXERCISE="Enter Exercise",e.NEXT_STEP="Next Step",e.RUN="Run",e.ENTER_MD="Enter MarkDown"}(M||(M={}));var _=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.isActive,i=t.editor,o=i.placeholder,s=i.content,c=i.caretPosition,l=i.syntaxError;return r.a.createElement(he.Consumer,null,function(t){return r.a.createElement("div",{className:"".concat(n," ").concat(a?"":" inactiveBox"),onDoubleClick:t},a?r.a.createElement(D,{placeholder:o,content:s,caretPosition:c,syntaxError:l,isMarkDown:!1,onContent:e.props.onContent,onEnter:e.props.onEnter,onExecute:e.props.onExecute}):r.a.createElement("p",{className:"inactiveMessage"},"Collapsing ",Math.max(0,e.props.history.length-1)," ",2===e.props.history.length?"step":"steps",". Double click to activate this box."))})}}]),t}(a.PureComponent),V=(n(105),function(e){function t(e,n,a,r){var i;return Object(u.a)(this,t),(i=Object(d.a)(this,Object(p.a)(t).call(this))).tree=e,i.onClick=n,i.reduction=a,i.breakpoints=r,i.rendered=null,i.argument=null,i.tree.visit(Object(b.a)(Object(b.a)(i))),i}return Object(h.a)(t,e),Object(m.a)(t,[{key:"printMultiLambda",value:function(e,t){var n=this;if(e.body instanceof E.Lambda){var a=e.body.argument,i="argument",o="";this.isBreakpoint(e.body.argument)&&(i+=" breakpoint",o="Will break on substitution");var s=!1;this.reduction instanceof E.Alpha&&Array.from(this.reduction.conversions).some(function(t){return t.identifier===e.body.identifier})&&(this.argument=a,s=!0);var c=this.argument;this.argument!==e.body.argument&&null!==this.argument&&this.argument.name()===e.body.argument.name()&&(this.argument=null),this.argument&&this.argument.name()===a.name()&&(i+=" substitutedArg");var l=r.a.createElement("span",{className:"arguments"},t," "," ",r.a.createElement("span",{className:i,title:o,onClick:function(){a.identifier=Symbol(),n.onClick({type:E.Beta,context:a,broken:new Set})}},a.name()));this.printMultiLambda(e.body,l),!0===s&&(this.argument=null),this.argument=c}else{e.body.visit(this);var u=this.rendered;this.rendered=t,this.rendered=r.a.createElement("span",{className:"function"},"(",r.a.createElement("span",{className:"lambda"},"\u03bb "," "),t," . ",u,")")}}},{key:"isBreakpoint",value:function(e){var t=!0,n=!1,a=void 0;try{for(var r,i=this.breakpoints[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){if(r.value.context.identifier===e.identifier)return!0}}catch(o){n=!0,a=o}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}return!1}}]),Object(m.a)(t,[{key:"print",value:function(){return this.rendered}},{key:"onApplication",value:function(e){var t="left",n="right",a=!1,i=null;if(this.reduction instanceof E.Beta&&(i=this.reduction.redex),null!==i&&i.identifier===e.identifier&&i===e&&(t+=" redex",n+=" redex",e.left instanceof E.Lambda&&(this.argument=e.left.argument,a=!0)),e.right instanceof E.Application){e.left.visit(this);var o=r.a.createElement("span",{className:t},this.rendered);a&&(this.argument=null),e.right.visit(this);var s=r.a.createElement("span",{className:n},"( ",this.rendered," )");this.rendered=r.a.createElement("span",{className:"application"},o," ",s)}else{e.left.visit(this);var c=r.a.createElement("span",{className:t},this.rendered);a&&(this.argument=null),e.right.visit(this);var l=r.a.createElement("span",{className:n},this.rendered);this.rendered=r.a.createElement("span",{className:"application"},c," ",l)}}},{key:"onLambda",value:function(e){var t=this,n="",a=this.argument;if(this.argument!==e.argument&&null!==this.argument&&this.argument.name()===e.argument.name()&&(this.argument=null),e.body instanceof E.Lambda){var i=e.argument,o="argument";this.isBreakpoint(e.argument)&&(o+=" breakpoint",n="Will break on substitution"),this.argument&&this.argument.name()===i.name()&&(o+=" substitutedArg");var s=r.a.createElement("span",{className:o,title:n,onClick:function(){i.identifier=Symbol(),t.onClick({type:E.Beta,context:i,broken:new Set})}},e.argument.name());this.printMultiLambda(e,s)}else{var c=e.argument;e.body.visit(this);var l=this.rendered,u="argument",m="";this.isBreakpoint(e.argument)&&(u+=" breakpoint",m="Will break on substitution"),this.argument&&this.argument.name()===c.name()&&(u+=" substitutedArg"),this.rendered=r.a.createElement("span",{className:"function"},"(",r.a.createElement("span",{className:"lambda"},"\u03bb "," "),r.a.createElement("span",{className:"arguments",onClick:function(){c.identifier=Symbol(),t.onClick({type:E.Beta,context:c,broken:new Set})}},r.a.createElement("span",{className:u,title:m,onClick:function(){c.identifier=Symbol(),t.onClick({type:E.Beta,context:c,broken:new Set})}},e.argument.name())," "),". ",l,")")}null!==a&&(this.argument=a)}},{key:"onChurchNumeral",value:function(e){var t=this,n="churchnumeral",a=null,i="";this.reduction instanceof E.Expansion&&(a=this.reduction.target),this.reduction instanceof E.Gama&&this.reduction.args.includes(e)&&(n+=" redex abstraction argument"),null!==a&&a.identifier===e.identifier&&a===e&&(n+=" redex"),this.isBreakpoint(e)&&(n+=" breakpoint",i="Will break on Expansion"),this.rendered=r.a.createElement("span",{className:n,title:i,onClick:function(){e.identifier=Symbol(),t.onClick({type:E.Expansion,context:e,broken:new Set})}},e.name())}},{key:"onMacro",value:function(e){var t=this,n="macro",a=null,i=" redex";(this.reduction instanceof E.Expansion&&(a=this.reduction.target),this.reduction instanceof E.Gama)&&(a=Object(A.a)(this.reduction.redexes,1)[0],i+=" abstraction");null!==a&&a.identifier===e.identifier&&a===e&&(n+=i),this.isBreakpoint(e)&&(n+=" breakpoint"),this.rendered=r.a.createElement("span",{className:n,onClick:function(){e.identifier=Symbol(),t.onClick({type:E.Expansion,context:e,broken:new Set})}},e.name())}},{key:"onVariable",value:function(e){var t="variable";this.argument&&this.argument.name()===e.name()&&(t+=" substitutedArg"),this.rendered=r.a.createElement("span",{className:t},e.name())}}]),t}(E.ASTVisitor)),U=n(30);function J(e){var t=e.lastReduction;return null===t?null:t instanceof E.Beta?r.a.createElement("p",{className:"lastReduction"},"\u03b2 reduction"):t instanceof E.Alpha?r.a.createElement("p",{className:"lastReduction"},"\u03b1 conversion"):t instanceof E.Expansion?r.a.createElement("p",{className:"lastReduction"},"Macro expansion"):t instanceof U.Eta?r.a.createElement("p",{className:"lastReduction"},"\u03b7 conversion"):t instanceof E.Gama?r.a.createElement("p",{className:"lastReduction"},"Simplified Application"):null}var X=Object(a.createContext)(k),W=Object(a.createContext)(!0),K=Object(a.createContext)(x.NORMAL);function q(e){var t=e.state,n=e.SLI,a=e.strategy,i=e.children;return r.a.createElement(X.Provider,{value:t},r.a.createElement(K.Provider,{value:a},r.a.createElement(W.Provider,{value:n},i)))}var z=Object(a.memo)(function(e){var t=e.stepRecord,n=e.addBreakpoint,a=e.breakpoints,i=e.children,o=e.strategy,s=t.ast,c=t.lastReduction,l=t.step;t.message;if(null===s)return null;var u=new(oe(o))(s).nextReduction,m=new V(s,n,u,a);return r.a.createElement("span",{className:"step"},r.a.createElement(J,{lastReduction:c}),r.a.createElement("div",{className:"inlineblock"},r.a.createElement("p",{className:"stepNumber"},l," :"),m.print(),i,""===t.message?null:r.a.createElement("p",{className:"stepMessage"},t.message)))},function(e){return!e.lastStep});function G(e){return r.a.createElement(K.Consumer,null,function(t){return r.a.createElement(z,Object.assign({},e,{strategy:t}))})}var H=Object(a.createContext)(function(e){}),Y=Object(a.createContext)(function(e){}),$=Object(a.createContext)(function(e){}),Q=Object(a.createContext)(function(e,t){}),Z=Object(a.createContext)(function(e,t){});function ee(e){var t=e.addBox,n=e.addEmptyBox,a=e.changeActiveBox,i=e.setBoxState,o=e.defineMacro,s=e.children;return r.a.createElement(H.Provider,{value:t},r.a.createElement(Y.Provider,{value:n},r.a.createElement($.Provider,{value:a},r.a.createElement(Q.Provider,{value:i},r.a.createElement(Z.Provider,{value:o},s)))))}var te=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.className;return r.a.createElement("div",{className:t+" inactiveBox",onDoubleClick:this.props.makeActive},r.a.createElement("ul",{className:"UL"},r.a.createElement("li",{key:0,className:"activeStep LI"},r.a.createElement(G,{breakpoints:this.props.breakpoints,addBreakpoint:function(){},stepRecord:this.props.history[0],lastStep:!1},r.a.createElement(H.Consumer,null,function(t){return r.a.createElement("i",{className:"hiddenIcon fas fa-pencil-alt",onClick:function(){return t(e.props.createBoxFrom(e.props.history[0]))}})})))),r.a.createElement("p",{className:"inactiveMessage"},"Collapsing ",this.props.history.length-1," ",2===this.props.history.length?"step":"steps",". Double click to activate this box."))}}]),t}(a.PureComponent),ne=(n(106),n(107),n(48)),ae=ne.Switch;ne.Radio;function re(e){var t=e.isExercise,n=e.makeExercise,a=e.endExercise;return r.a.createElement("div",{id:"controls"},r.a.createElement("div",{title:"Write the next step yourself"},r.a.createElement(ae,{className:"exerciseSwitch",checked:t,onChange:function(e){return e.target.checked?n():a()},shape:"fill"},"Exercise")))}var ie=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).addBreakpoint=n.addBreakpoint.bind(Object(b.a)(Object(b.a)(n))),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.isExercise,i=t.state,o=t.editor,s=o.placeholder,c=o.content,u=o.caretPosition,m=o.syntaxError;return r.a.createElement("div",{className:n},r.a.createElement(re,{isExercise:a,makeExercise:function(){return e.props.setBoxState(Object(l.a)({},i,{isExercise:!0,editor:Object(l.a)({},i.editor,{placeholder:O.VALIDATE_MODE})}))},endExercise:function(){return e.props.setBoxState(Object(l.a)({},i,{isExercise:!1,editor:Object(l.a)({},i.editor,{placeholder:O.EVAL_MODE})}))}}),r.a.createElement(H.Consumer,null,function(t){return r.a.createElement("ul",{className:"UL"},function(e,t,n,a){for(var r=new Array(t-e+1),i=0,o=e;o<=t;++o)r[i++]=a(n[o],o);return r}(0,e.props.history.length-2,e.props.history,function(n,a){return r.a.createElement("li",{key:a.toString(),className:"inactiveStep LI"},r.a.createElement(G,{breakpoints:e.props.breakpoints,addBreakpoint:function(){},stepRecord:n,lastStep:!1},r.a.createElement("i",{className:"hiddenIcon fas fa-pencil-alt",title:"Copy this to new box",onClick:function(){return t(e.props.createBoxFrom(n))}})))}),r.a.createElement("li",{key:e.props.history.length-1,className:"activeStep LI"},r.a.createElement(G,{breakpoints:e.props.breakpoints,addBreakpoint:e.addBreakpoint,stepRecord:e.props.history[e.props.history.length-1],lastStep:!0},r.a.createElement("i",{className:"hiddenIcon fas fa-pencil-alt",title:"Copy this to new box",onClick:function(){return t(e.props.createBoxFrom(e.props.history[e.props.history.length-1]))}}))))}),this.props.isNormalForm?null:r.a.createElement(D,{placeholder:s,content:c,caretPosition:u,syntaxError:m,isMarkDown:!1,onContent:this.props.onContent,onEnter:this.props.onEnter,onExecute:this.props.onExecute}))}},{key:"addBreakpoint",value:function(e){var t=this.props,n=t.state;(0,t.setBoxState)(Object(l.a)({},n,{breakpoints:[].concat(Object(c.a)(n.breakpoints),[e])}))}}]),t}(a.PureComponent);function oe(e){switch(e){case x.NORMAL:return E.NormalEvaluator;case x.APPLICATIVE:return E.ApplicativeEvaluator;case x.OPTIMISATION:return E.OptimizeEvaluator;case x.ABSTRACTION:return E.NormalAbstractionEvaluator}}var se=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).onContent=n.onContent.bind(Object(b.a)(Object(b.a)(n))),n.onSubmitExpression=n.onSubmitExpression.bind(Object(b.a)(Object(b.a)(n))),n.parseExpression=n.parseExpression.bind(Object(b.a)(Object(b.a)(n))),n.onEnter=n.onEnter.bind(Object(b.a)(Object(b.a)(n))),n.onExerciseStep=n.onExerciseStep.bind(Object(b.a)(Object(b.a)(n))),n.onStep=n.onStep.bind(Object(b.a)(Object(b.a)(n))),n.onExecute=n.onExecute.bind(Object(b.a)(Object(b.a)(n))),n.onRun=n.onRun.bind(Object(b.a)(Object(b.a)(n))),n.onStop=n.onStop.bind(Object(b.a)(Object(b.a)(n))),n.shouldBreak=n.shouldBreak.bind(Object(b.a)(Object(b.a)(n))),n.createBoxFrom=n.createBoxFrom.bind(Object(b.a)(Object(b.a)(n))),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.state,a=t.isActive,i=n.history,o=n.breakpoints,s=n.isExercise,c=(n.strategy,n.expression),l=n.editor,u="box boxEval",m=(i.length?i[i.length-1]:{isNormalForm:!1}).isNormalForm;return""===c?r.a.createElement(_,{className:u,isActive:this.props.isActive,editor:l,history:i,onContent:this.onContent,onEnter:this.onEnter,onExecute:this.onExecute}):(s&&(u+=" boxExercise"),a?r.a.createElement(ie,{className:u,isExercise:s,state:n,breakpoints:o,history:i,editor:l,isNormalForm:m,createBoxFrom:this.createBoxFrom,setBoxState:this.props.setBoxState,onContent:this.onContent,onEnter:this.onEnter,onExecute:this.onExecute}):r.a.createElement(he.Consumer,null,function(t){return r.a.createElement(te,{className:u,breakpoints:o,history:i,makeActive:t,createBoxFrom:e.createBoxFrom})}))}},{key:"createBoxFrom",value:function(e){var t=this.props.state,n=t.strategy,a=t.singleLetterNames,r=e.ast;return{type:j.EXPRESSION,__key:Date.now().toString(),expression:r.toString(),ast:r.clone(),history:[{ast:r.clone(),lastReduction:null,step:0,message:"",isNormalForm:!1}],isRunning:!1,breakpoints:[],timeoutID:void 0,timeout:10,isExercise:!1,strategy:n,singleLetterNames:a,editor:{placeholder:O.EVAL_MODE,content:"",caretPosition:0,syntaxError:null}}}},{key:"onContent",value:function(e,t){var n=this.props,a=n.state;(0,n.setBoxState)(Object(l.a)({},a,{editor:Object(l.a)({},a.editor,{content:e,caretPosition:t,syntaxError:null})}))}},{key:"onEnter",value:function(){var e=this.props.state,t=e.expression,n=e.isExercise,a=e.editor.content;""===t?this.onSubmitExpression():""!==a&&n?this.onExerciseStep():""!==a||n?console.log("Error: Something unexpected just happened. A"):this.onStep()}},{key:"onSubmitExpression",value:function(){var e=this.props,t=e.state,n=e.setBoxState,a=t.editor.content;try{var r=this.parseExpression(a);n(Object(l.a)({},t,{ast:r,expression:a,history:[{ast:r.clone(),lastReduction:E.None,step:0,message:"",isNormalForm:!1}],editor:{content:"",caretPosition:0,placeholder:O.EVAL_MODE,syntaxError:null}})),S("Submit Expression","submit valid",a)}catch(i){n(Object(l.a)({},t,{editor:Object(l.a)({},t.editor,{syntaxError:i.toString()})})),S("Submit Expression","submit invalid",a)}}},{key:"onExerciseStep",value:function(){var e=this.props,t=e.state,n=e.setBoxState,a=t.strategy,r=t.history,i=t.editor.content;try{var o=this.parseExpression(i),s=r[r.length-1],u=s.isNormalForm,m=s.step,d=s.ast,p=s.lastReduction;if(d=d.clone(),u)return s.message="No more steps available. Expression is in normal form.",n(Object(l.a)({},t)),void S("Exercise Step","Step Already in normal form",i);var h=new(oe(a))(d);if(p=h.nextReduction,h.nextReduction instanceof E.None)return s.isNormalForm=!0,s.message="Expression is already in normal form.",n(Object(l.a)({},t)),void S("Exercise Step","Step Already in Normal Form",i);d=h.perform();var b="";new P([o,d]).equals?(d=o,b="Correct.",S("Exercise Step","Valid Step",i)):(console.log("Incorrect step"),b="Incorrect step. ".concat(i),S("Exercise Step","Invalid Step",i)),n(Object(l.a)({},t,{history:[].concat(Object(c.a)(r),[{ast:d,lastReduction:p,step:m+1,message:b,isNormalForm:!1}]),editor:Object(l.a)({},t.editor,{content:"",caretPosition:0,placeholder:O.VALIDATE_MODE,syntaxError:null})}))}catch(f){S("Exercise Step","Syntax error in Step",i)}}},{key:"onStep",value:function(){var e=this.props,t=e.state,n=e.setBoxState,a=t.strategy,r=t.history,i=(t.editor.content,r[r.length-1]),o=i.isNormalForm,s=i.step,u=i.ast,m=i.lastReduction;if(u=u.clone(),!o){var d=new(oe(a))(u);if(m=d.nextReduction,d.nextReduction instanceof E.None)return i.isNormalForm=!0,i.message="Expression is in normal form.",n(Object(l.a)({},t)),void S("Evaluation Step","Step Normal Form Reached",u.toString());u=d.perform(),n(Object(l.a)({},t,{history:[].concat(Object(c.a)(r),[{ast:u,lastReduction:m,step:s+1,message:"",isNormalForm:!1}])})),S("Evaluation Step","Step",u.toString())}}},{key:"onExecute",value:function(){var e=this.props,t=e.state,n=e.setBoxState,a=t.isRunning;if(!t.isExercise)if(a)this.onStop();else{var r=t.timeout,i=t.history,o=i[i.length-1];if(o.isNormalForm)return;var s=o.ast,c=o.step,u=o.lastReduction,m=o.isNormalForm;o.message;i.push(i[i.length-1]),i[i.length-2]={ast:s.clone(),step:c,lastReduction:u,message:"Skipping some steps...",isNormalForm:m},n(Object(l.a)({},t,{isRunning:!0,timeoutID:window.setTimeout(this.onRun,r)})),S("Execution","Run Evaluation",s.toString())}}},{key:"onRun",value:function(){var e=this,t=this.props,n=t.state,a=t.setBoxState,r=n.strategy,i=n.history,o=n.isRunning,s=n.breakpoints,c=n.timeoutID,u=n.timeout,m=i[i.length-1],d=m.isNormalForm,p=m.step,h=m.lastReduction;if(o)if(d)a(Object(l.a)({},n,{isRunning:!1,timeoutID:void 0}));else{var b=m.ast,f=new(oe(r))(b);if(h=f.nextReduction,f.nextReduction instanceof E.None)return i.pop(),i.push({ast:b,lastReduction:m.lastReduction,step:p,message:"Expression is in normal form.",isNormalForm:!0}),void a(Object(l.a)({},n,{isRunning:!1,timeoutID:void 0}));var v=s.find(function(t){return e.shouldBreak(t,f.nextReduction)});if(void 0!==v)return f.nextReduction instanceof E.Expansion&&v.broken.add(f.nextReduction.target),f.nextReduction instanceof E.Beta&&f.nextReduction.redex.left instanceof E.Lambda&&v.broken.add(f.nextReduction.redex.left.argument),window.clearTimeout(c),void a(Object(l.a)({},n,{isRunning:!1,timeoutID:c}));b=f.perform(),i[i.length-1]={ast:b,lastReduction:h,step:p+1,message:"",isNormalForm:d},a(Object(l.a)({},n,{timeoutID:window.setTimeout(this.onRun,u)}))}}},{key:"onStop",value:function(){var e=this.props,t=e.state,n=e.setBoxState,a=t.timeoutID;window.clearTimeout(a),n(Object(l.a)({},t,{isRunning:!1,timeoutID:void 0}))}},{key:"shouldBreak",value:function(e,t){return t instanceof e.type&&t instanceof E.Beta&&e.context instanceof E.Variable&&t.redex.left instanceof E.Lambda&&t.redex.left.argument.identifier===e.context.identifier&&!e.broken.has(t.redex.left.argument)||(t instanceof e.type&&t instanceof E.Expansion&&e.context instanceof E.ChurchNumeral&&t.target.identifier===e.context.identifier&&!e.broken.has(t.target)||t instanceof e.type&&t instanceof E.Expansion&&e.context instanceof E.Macro&&t.target.identifier===e.context.identifier&&!e.broken.has(t.target))}},{key:"parseExpression",value:function(e){var t=this.props.macroTable,n=this.props.state.singleLetterNames,a=Object(E.tokenize)(e,{lambdaLetters:["\u03bb"],singleLetterVars:n});return Object(E.parse)(a,t)}}]),t}(a.PureComponent);function ce(e){var t=e.state,n=e.setBoxState,i=t.macroName,o=t.macroExpression,s=t.singleLetterNames,c=t.editor,u=c.content,m=c.caretPosition,d=c.placeholder,p=c.syntaxError,h=Object(a.useContext)(Z);return""===i&&""===o?r.a.createElement("div",{className:"box boxMacro inactiveBox"},r.a.createElement(D,{placeholder:d,content:u,caretPosition:m,syntaxError:p,isMarkDown:!1,onContent:function(t,a){n(Object(l.a)({},e.state,{editor:Object(l.a)({},e.state.editor,{content:t,caretPosition:a,syntaxError:null})}))},onEnter:function(){var e=u.split(":=").map(v),a=Object(A.a)(e,2),r=a[0],i=a[1];r in E.builtinMacros?n(Object(l.a)({},t,{editor:Object(l.a)({},t.editor,{syntaxError:new Error("Macro name is not valid. It redefines built-in Macro.")})})):function(e,t){try{var n=le(e,t);return n instanceof E.Variable}catch(a){return!1}}(r,s)?function(e,t){try{return le(e,t),!0}catch(n){return!1}}(i,s)?(n(Object(l.a)({},t,{macroName:r,macroExpression:i})),h(r,i)):n(Object(l.a)({},t,{editor:Object(l.a)({},t.editor,{syntaxError:new Error("Macro expression is not valid.")})})):n(Object(l.a)({},t,{editor:Object(l.a)({},t.editor,{syntaxError:new Error("Macro name is not valid.\n            ".concat(s&&1!==r.length?"Name should be single letter.":""))})}))},onExecute:function(){}})):r.a.createElement("div",{className:"box boxMacro"},i," := ",o)}function le(e,t){var n=t,a=Object(E.tokenize)(e,{lambdaLetters:["\u03bb"],singleLetterVars:n});return Object(E.parse)(a,{})}n(191);var ue=n(108);function me(e){var t=e.state,n=t.note,i=t.editor,o=i.placeholder,s=i.content,c=i.caretPosition,u=i.syntaxError,m=t.isEditing,d=e.isActive,p=Object(a.useContext)(he),h=Object(a.useContext)(be),b=function(){h(Object(l.a)({},e.state,{note:s,isEditing:!1}))};return m&&d?r.a.createElement("div",{className:"box boxNoteEditor"},r.a.createElement(D,{placeholder:o,content:s,caretPosition:c,syntaxError:u,isMarkDown:!0,onContent:function(t,n){h(Object(l.a)({},e.state,{editor:Object(l.a)({},e.state.editor,{content:t,caretPosition:n,syntaxError:null})}))},onEnter:b,onExecute:function(){}}),r.a.createElement("div",{id:"controls"},r.a.createElement("button",{onClick:function(){return b()}},"Save"))):r.a.createElement("div",{className:"box boxNote markdown-body"},r.a.createElement(ue,{source:n}),r.a.createElement("div",{id:"controls"},r.a.createElement("button",{onClick:function(){h(Object(l.a)({},e.state,{isEditing:!0})),p()}},"Edit")))}function de(e){var t=e.state,n=e.isActive,a=t.type;return a===j.EXPRESSION?r.a.createElement("div",{className:""},r.a.createElement(fe.Consumer,null,function(e){return r.a.createElement(be.Consumer,null,function(a){return r.a.createElement(se,{state:t,isActive:n,macroTable:e,setBoxState:a})})})):a===j.MACRO?r.a.createElement("div",{className:""},r.a.createElement(be.Consumer,null,function(e){return r.a.createElement(ce,{state:t,setBoxState:e})})):a===j.NOTE?r.a.createElement("div",{className:""},r.a.createElement(me,{state:t,isActive:n})):null}function pe(){var e=Object(a.useContext)(K),t=Object(a.useContext)(W),n=Object(a.useContext)(Y);return r.a.createElement("div",{className:"emptyC"},r.a.createElement("p",{className:"plusBtn inlineblock",title:"Create new \u03bb expression",onClick:function(){return n(function(e,t){return{type:j.EXPRESSION,__key:Date.now().toString(),expression:"",ast:null,history:[],isRunning:!1,breakpoints:[],timeoutID:void 0,timeout:10,isExercise:!1,strategy:e,singleLetterNames:t,editor:{placeholder:O.INIT,content:"",caretPosition:0,syntaxError:null}}}(e,t))}},r.a.createElement("i",null,"+ \u03bb")),r.a.createElement("p",{className:"plusBtn inlineblock",title:"Define new macro",onClick:function(){return n(function(e){return{type:j.MACRO,__key:Date.now().toString(),macroName:"",macroExpression:"",singleLetterNames:e,editor:{placeholder:O.MACRO,content:"",caretPosition:0,syntaxError:null}}}(t))}},r.a.createElement("i",null,"+ Macro")),r.a.createElement("p",{className:"plusBtn inlineblock",title:"Write new Markdown note",onClick:function(){return n({type:j.NOTE,__key:Date.now().toString(),note:"",isEditing:!0,editor:{placeholder:O.NOTE,content:"",caretPosition:0,syntaxError:null}})}},r.a.createElement("i",null,"+ MD")))}var he=Object(a.createContext)(function(){}),be=Object(a.createContext)(function(e){});function Ee(e){var t=e.submittedBoxes,n=e.activeBoxIndex,i=Object(a.useContext)($),o=Object(a.useContext)(Q);return 0===t.length?r.a.createElement("div",{className:"evaluatorSpace"},r.a.createElement("div",{className:"bigEmpty"},r.a.createElement(pe,null))):r.a.createElement("div",{className:"evaluatorSpace"},r.a.createElement("ul",{className:"evaluatorList UL"},t.map(function(e,t){return r.a.createElement("li",{className:"LI",key:e.__key},r.a.createElement(he.Provider,{value:function(){return i(t)}},r.a.createElement(be.Provider,{value:function(e){return o(t,e)}},r.a.createElement(de,{state:e,isActive:t===n}))))}),r.a.createElement("div",{className:"smallEmpty"},r.a.createElement(pe,null))))}var fe=Object(a.createContext)(Object(l.a)({},y,f()));function ve(e){var t=Object(a.useContext)(X),n=t.macroTable,i=t.submittedBoxes,o=t.activeBoxIndex;return r.a.createElement(fe.Provider,{value:n},r.a.createElement(Ee,{submittedBoxes:i,activeBoxIndex:o}))}var xe=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).setBoxState=n.setBoxState.bind(Object(b.a)(Object(b.a)(n))),n.addEmptyBox=n.addEmptyBox.bind(Object(b.a)(Object(b.a)(n))),n.changeActiveBox=n.changeActiveBox.bind(Object(b.a)(Object(b.a)(n))),n.changeActiveStrategy=n.changeActiveStrategy.bind(Object(b.a)(Object(b.a)(n))),n.changeActiveSingleLetterNames=n.changeActiveSingleLetterNames.bind(Object(b.a)(Object(b.a)(n))),n.getActiveStrategy=n.getActiveStrategy.bind(Object(b.a)(Object(b.a)(n))),n.getActiveSingleLetterNames=n.getActiveSingleLetterNames.bind(Object(b.a)(Object(b.a)(n))),n.addBox=n.addBox.bind(Object(b.a)(Object(b.a)(n))),n.removeMacro=n.removeMacro.bind(Object(b.a)(Object(b.a)(n))),n.defineMacro=n.defineMacro.bind(Object(b.a)(Object(b.a)(n))),n.createBoxFromURL=n.createBoxFromURL.bind(Object(b.a)(Object(b.a)(n))),n.state=k,window.addEventListener("hashchange",n.createBoxFromURL),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.createBoxFromURL()}},{key:"render",value:function(){var e=this,t=this.state,n=t.macroTable,a=t.screen;return r.a.createElement("div",{className:"app"},r.a.createElement(B,{state:this.state,onImport:function(t){return e.setState(t)},onScreenChange:function(t){return e.setState(Object(l.a)({},e.state,{screen:t}))}}),r.a.createElement(L,{getActiveSingleLetterNames:this.getActiveSingleLetterNames,getActiveStrategy:this.getActiveStrategy,changeActiveSingleLetterNames:this.changeActiveSingleLetterNames,changeActiveStrategy:this.changeActiveStrategy}),a===g.main?r.a.createElement(q,{SLI:this.getActiveSingleLetterNames(),strategy:this.getActiveStrategy(),state:this.state},r.a.createElement(ee,{addBox:this.addBox,addEmptyBox:this.addEmptyBox,changeActiveBox:this.changeActiveBox,defineMacro:this.defineMacro,setBoxState:this.setBoxState},r.a.createElement(ve,null))):r.a.createElement(R,{macroTable:n,removeMacro:this.removeMacro}))}},{key:"createBoxFromURL",value:function(){var e=decodeURI(window.location.hash.substring(1)),t=-1!==e.indexOf("exercise:"),n=t?e.substring(9):e,a={type:j.EXPRESSION,__key:Date.now().toString(),expression:"",ast:null,history:[],isRunning:!1,breakpoints:[],timeoutID:void 0,timeout:10,isExercise:t,strategy:this.getActiveStrategy(),singleLetterNames:this.getActiveSingleLetterNames(),editor:{placeholder:O.INIT,content:n,caretPosition:n.length,syntaxError:null}};this.setState(Object(l.a)({},this.state,{submittedBoxes:[a],activeBoxIndex:0}))}},{key:"setBoxState",value:function(e,t){var n=this.state.submittedBoxes,a=t.editor.content||t.expression,r=t.type===j.EXPRESSION&&t.isExercise?"exercise:":"";history.pushState({},"page title?","#"+r+encodeURI(a)),n[e]=t,this.setState(Object(l.a)({},this.state,{submittedBoxes:n}))}},{key:"addEmptyBox",value:function(e){var t=this.state.submittedBoxes;this.setState(Object(l.a)({},this.state,{submittedBoxes:[].concat(Object(c.a)(t),[e]),activeBoxIndex:Math.max(0,t.length)}))}},{key:"addBox",value:function(e){var t=this.state.submittedBoxes;this.setState(Object(l.a)({},this.state,{submittedBoxes:[].concat(Object(c.a)(t),[e]),activeBoxIndex:t.length}))}},{key:"changeActiveBox",value:function(e){this.setState(Object(l.a)({},this.state,{activeBoxIndex:e}))}},{key:"getActiveStrategy",value:function(){var e=this.state,t=e.submittedBoxes,n=e.activeBoxIndex;if(-1===n)return JSON.parse(window.localStorage.getItem("strategy")||JSON.stringify(x.ABSTRACTION));var a=t[n];return a.type!==j.EXPRESSION?JSON.parse(window.localStorage.getItem("strategy")||JSON.stringify(x.ABSTRACTION)):a.strategy}},{key:"getActiveSingleLetterNames",value:function(){var e=this.state,t=e.submittedBoxes,n=e.activeBoxIndex;if(-1===n)return JSON.parse(window.localStorage.getItem("SLI")||"true");var a=t[n];return a.type===j.NOTE?JSON.parse(window.localStorage.getItem("SLI")||"true"):a.type===j.EXPRESSION?a.singleLetterNames:a.type===j.MACRO?a.singleLetterNames:JSON.parse(window.localStorage.getItem("SLI")||"true")}},{key:"changeActiveStrategy",value:function(e){var t=this.state,n=t.submittedBoxes,a=t.activeBoxIndex;n[a]=Object(l.a)({},n[a],{strategy:e}),this.setState(Object(l.a)({},this.state)),window.localStorage.setItem("strategy",JSON.stringify(e))}},{key:"changeActiveSingleLetterNames",value:function(e){var t=this.state,n=t.submittedBoxes,a=t.activeBoxIndex;n[a]=Object(l.a)({},n[a],{singleLetterNames:e}),this.setState(Object(l.a)({},this.state)),window.localStorage.setItem("SLI",JSON.stringify(e))}},{key:"removeMacro",value:function(e){var t=this.state.macroTable,n=Object(l.a)({},t);delete n[e],this.setState(Object(l.a)({},this.state,{macroTable:n})),N(n)}},{key:"defineMacro",value:function(e,t){var n=this.state.macroTable;this.setState(Object(l.a)({},this.state,{macroTable:Object(l.a)({},n,Object(s.a)({},e,t))})),N(Object(l.a)({},n,Object(s.a)({},e,t)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,n){e.exports=n(192)},65:function(e,t,n){},66:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.c873e22e.chunk.js.map