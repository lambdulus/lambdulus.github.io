(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(74)},35:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(28),s=n.n(r),o=(n(35),n(14)),c=n(24),l=n(5),u=n(20),d=n(16),m=n(13),p=n(19),f=n(17),b=n(18),v=n(1),E=n(2);n(68),n(69);function h(e){var t=e.expression,n=e.caretPosition,a=e.onExpression,r=e.onSubmit,s=e.syntaxError,o=Math.min(t.split("\n").length,t.length);return i.a.createElement("div",{className:"editor"},s?"".concat(s):"",i.a.createElement("i",{id:"editorEnter",className:"far fa-play-circle fa-3x",onClick:r}),i.a.createElement(S,{expression:t,lines:o,caretPosition:n,onChange:function(e){var t=e.target.value,n=e.target.selectionEnd;t=t.replace(/\\/g,"\u03bb"),a(t,n)},onKeyDown:function(e){e.shiftKey&&"Enter"===e.key&&(e.preventDefault(),r())}}))}function S(e){var t=e.expression,n=e.lines,a=e.onChange,r=e.onKeyDown,s=e.caretPosition;return i.a.createElement("textarea",{className:"prompt",onKeyDown:r,onChange:a,value:t,placeholder:"(\u03bb f . (\u03bb x . f (x x)) (\u03bb x . f (x x)))",wrap:"hard",autoFocus:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,rows:Math.max(n,1),ref:function(e){null!==e&&(e.selectionStart=s,e.selectionEnd=s)}})}function x(e){return e.trim()}n(70),n(71),n(72);function N(e){var t=e.onRun,n=e.onStop,a=e.onStep,r=e.onClear,s=e.isRunning;return i.a.createElement("div",{id:"controls"},s?i.a.createElement("i",{className:"enabled fas fa-pause",onClick:n}):i.a.createElement("i",{className:"enabled fas fa-forward",onClick:t}),s?i.a.createElement("i",{className:"disabled fas fa-play",onClick:function(){}}):i.a.createElement("i",{className:"enabled fas fa-play",onClick:a}),s?i.a.createElement("i",{className:"disabled fas fa-redo-alt",onClick:function(){}}):i.a.createElement("i",{className:"enabled fas fa-redo-alt",onClick:r}))}n(73);var O=function(e){function t(e,n,a,i){var r;return Object(d.a)(this,t),(r=Object(p.a)(this,Object(f.a)(t).call(this))).tree=e,r.onClick=n,r.redex=a,r.breakpoints=i,r.rendered=null,r.tree.visit(Object(v.a)(Object(v.a)(r))),r}return Object(b.a)(t,e),Object(m.a)(t,[{key:"printMultiLambda",value:function(e,t){var n=this;if(e.body instanceof E.Lambda){var a=e.body.argument,r="argument";this.isBreakpoint(e.body.argument)&&(r+=" breakpoint");var s=i.a.createElement("span",{className:"arguments"},t," "," ",i.a.createElement("span",{className:r,onClick:function(){return n.onClick({type:E.Beta,context:a,broken:new Set})}},e.body.argument.name()));this.printMultiLambda(e.body,s)}else{e.body.visit(this);var o=this.rendered;this.rendered=t,this.rendered=i.a.createElement("span",{className:"function"},"(",i.a.createElement("span",{className:"lambda",onClick:function(){n.onClick({type:E.Beta,context:e,broken:new Set})}},"\u03bb "," "),t," . ",o,")")}}},{key:"isBreakpoint",value:function(e){var t=!0,n=!1,a=void 0;try{for(var i,r=this.breakpoints[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){if(i.value.context.identifier===e.identifier)return!0}}catch(s){n=!0,a=s}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}return!1}}]),Object(m.a)(t,[{key:"print",value:function(){return this.rendered}},{key:"onApplication",value:function(e){var t="left",n="right";if(null!==this.redex&&this.redex.identifier===e.identifier&&this.redex===e&&(t+=" redex",n+=" redex"),e.right instanceof E.Application){e.left.visit(this);var a=i.a.createElement("span",{className:t},this.rendered);e.right.visit(this);var r=i.a.createElement("span",{className:n},"( ",this.rendered," )");this.rendered=i.a.createElement("span",{className:"application"},a," ",r)}else{e.left.visit(this);var s=i.a.createElement("span",{className:t},this.rendered);e.right.visit(this);var o=i.a.createElement("span",{className:n},this.rendered);this.rendered=i.a.createElement("span",{className:"application"},s," ",o)}}},{key:"onLambda",value:function(e){var t=this;if(e.body instanceof E.Lambda){var n=e.argument,a="argument";this.isBreakpoint(e.argument)&&(a+=" breakpoint");var r=i.a.createElement("span",{className:a,onClick:function(){return t.onClick({type:E.Beta,context:n,broken:new Set})}},e.argument.name());this.printMultiLambda(e,r)}else{var s=e.argument;e.argument.visit(this);var o=this.rendered;e.body.visit(this);var c=this.rendered,l="argument";this.isBreakpoint(e.argument)&&(l+=" breakpoint"),this.rendered=i.a.createElement("span",{className:"function"},"(",i.a.createElement("span",{className:"lambda",onClick:function(){t.onClick({type:E.Beta,context:e,broken:new Set})}},"\u03bb "," "),i.a.createElement("span",{className:l,onClick:function(){return t.onClick({type:E.Beta,context:s,broken:new Set})}},o," "," "),". ",c,")")}}},{key:"onChurchNumber",value:function(e){var t=this,n="churchnumeral";null!==this.redex&&this.redex.identifier===e.identifier&&this.redex===e&&(n+=" redex"),this.isBreakpoint(e)&&(n+=" breakpoint"),this.rendered=i.a.createElement("span",{className:n,onClick:function(){return t.onClick({type:E.Expansion,context:e,broken:new Set})}},e.name())}},{key:"onMacro",value:function(e){var t=this,n="macro";null!==this.redex&&this.redex.identifier===e.identifier&&this.redex===e&&(n+=" redex"),this.isBreakpoint(e)&&(n+=" breakpoint"),this.rendered=i.a.createElement("span",{className:n,onClick:function(){return t.onClick({type:E.Expansion,context:e,broken:new Set})}},e.name())}},{key:"onVariable",value:function(e){this.rendered=i.a.createElement("span",{className:"variable"},e.name())}}]),t}(E.ASTVisitor);function k(e){var t=e.tree,n=e.addBreakpoint,a=e.breakpoints;if(null===t)return null;var r=null,s=new E.NormalEvaluator(t);s.nextReduction instanceof E.Beta&&(r=s.nextReduction.redex),s.nextReduction instanceof E.Expansion&&(r=s.nextReduction.target);var o=new O(t,n,r,a);return i.a.createElement("span",{className:"step"},o.print())}var y,R=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).onClear=n.onClear.bind(Object(v.a)(Object(v.a)(n))),n.onStep=n.onStep.bind(Object(v.a)(Object(v.a)(n))),n.onRun=n.onRun.bind(Object(v.a)(Object(v.a)(n))),n.__onRun=n.__onRun.bind(Object(v.a)(Object(v.a)(n))),n.onStop=n.onStop.bind(Object(v.a)(Object(v.a)(n))),n.shouldBreak=n.shouldBreak.bind(Object(v.a)(Object(v.a)(n))),n.addBreakpoint=n.addBreakpoint.bind(Object(v.a)(Object(v.a)(n))),n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.state,n=(e.updateState,t.history),a=(t.steps,t.isRunning),r=(t.lastReduction,t.breakpoints);t.timeoutID;return i.a.createElement("div",{className:"box"},i.a.createElement(N,{onRun:this.onRun,onStop:this.onStop,onStep:this.onStep,onClear:this.onClear,isRunning:a}),i.a.createElement("ul",null,i.a.createElement("li",{key:n.length-1,className:"activeStep"},i.a.createElement(k,{breakpoints:r,addBreakpoint:this.addBreakpoint,tree:n[n.length-1]})),function(e,t,n,a){for(var i=new Array(t-e+1),r=0,s=t;s>=e;--s)i[r++]=a(n[s],s);return i}(0,n.length-2,n,function(e,t){return i.a.createElement("li",{key:t,className:"inactiveStep"},i.a.createElement(k,{breakpoints:r,addBreakpoint:function(){},tree:e}))})))}},{key:"onRun",value:function(){var e=this.props,t=e.state,n=e.updateState,a=t.lastReduction,i=t.timeout;a instanceof E.None||n({isRunning:!0,timeoutID:window.setTimeout(this.__onRun,i)})}},{key:"__onRun",value:function(){var e=this,t=this.props,n=t.state,a=t.updateState,i=n.history,r=n.steps,s=n.lastReduction,o=n.isRunning,c=n.breakpoints,l=n.timeoutID,u=n.timeout;if(o)if(s instanceof E.None)a({isRunning:!1,timeoutID:void 0});else{var d=i[i.length-1],m=new E.NormalEvaluator(d);if(s=m.nextReduction,m.nextReduction instanceof E.None)a({history:i=[d],steps:r,lastReduction:s,isRunning:!1,timeoutID:void 0});else{var p=c.find(function(t,n){return n,e.shouldBreak(t,m.nextReduction)});if(void 0!==p)return m.nextReduction instanceof E.Expansion&&p.broken.add(m.nextReduction.target),window.clearTimeout(l),a({isRunning:!1,breakpoints:c,timeoutID:void 0}),void console.log("NEMENIM AST");a({history:[d=m.perform()],steps:++r,lastReduction:s,timeoutID:window.setTimeout(this.__onRun,u)})}}}},{key:"onStop",value:function(){var e=this.props,t=e.updateState,n=e.state.timeoutID;window.clearTimeout(n),t({isRunning:!1,timeoutID:void 0})}},{key:"onStep",value:function(){var e=this.props,t=e.state,n=e.updateState,a=t.history,i=t.steps,r=t.lastReduction;if(!(r instanceof E.None)){var s=a[a.length-1].clone(),c=new E.NormalEvaluator(s);r=c.nextReduction,c.nextReduction instanceof E.None?n({lastReduction:r}):(s=c.perform(),i++,n({history:[].concat(Object(o.a)(a),[s]),steps:i,lastReduction:r}))}}},{key:"onClear",value:function(){var e=this.props,t=e.state;(0,e.updateState)({history:[t.ast.clone()],steps:0,isRunning:!1,lastReduction:null,breakpoints:[]})}},{key:"addBreakpoint",value:function(e){var t=this.props,n=t.state;(0,t.updateState)({breakpoints:[].concat(Object(o.a)(n.breakpoints),[e])})}},{key:"shouldBreak",value:function(e,t){return t instanceof e.type&&t instanceof E.Beta&&e.context instanceof E.Lambda&&t.target.identifier===e.context.body.identifier||(t instanceof e.type&&t instanceof E.Beta&&e.context instanceof E.Variable&&t.redex.left instanceof E.Lambda&&t.redex.left.argument.identifier===e.context.identifier||(t instanceof e.type&&t instanceof E.Expansion&&e.context instanceof E.ChurchNumber&&t.target.identifier===e.context.identifier&&!e.broken.has(t.target)||t instanceof e.type&&t instanceof E.Expansion&&e.context instanceof E.Macro&&t.target.identifier===e.context.identifier&&!e.broken.has(t.target)))}}]),t}(a.PureComponent);function g(e){var t=e.state,n=t.macroName,a=t.macroExpression;return i.a.createElement("div",{className:"box"},n," := ",a)}function j(e){var t=e.state.note;return i.a.createElement("div",{className:"box"},t)}function L(e){var t=e.state,n=e.updateState,a=t.type;return a===y.expression?i.a.createElement("div",null,i.a.createElement("div",{className:"evaluationHeader"},i.a.createElement("i",{className:"icon far fa-trash-alt",onClick:e.removeExpression}),i.a.createElement("i",{className:"icon fas fa-pencil-alt"}),i.a.createElement("i",{className:"headerTitle"},"Expression added")),i.a.createElement(R,{state:t,updateState:n})):a===y.macro?i.a.createElement("div",null,i.a.createElement("div",{className:"macroHeader"},i.a.createElement("i",{className:"icon far fa-trash-alt",onClick:e.removeExpression}),i.a.createElement("i",{className:"icon fas fa-pencil-alt"}),i.a.createElement("i",{className:"headerTitle"},"Macro defined")),i.a.createElement(g,{state:t})):a===y.note?i.a.createElement("div",null,i.a.createElement("div",{className:"noteHeader"},i.a.createElement("i",{className:"icon far fa-trash-alt",onClick:e.removeExpression}),i.a.createElement("i",{className:"icon fas fa-pencil-alt"}),i.a.createElement("i",{className:"headerTitle"},"Note added")),i.a.createElement(j,{state:t})):i.a.createElement("div",null,"I do not know what to do with this yet.")}function I(e){var t=e.state,n=e.onImport,a=e.onScreenChange,r=t.screen,s=function(e){return Object(l.a)({},e,{submittedExpressions:e.submittedExpressions.map(C)})}(t),o=function(e){var t=new Blob([e],{type:"application/json"});return window.URL.createObjectURL(t)}(JSON.stringify(s));return i.a.createElement("div",{id:"topbar"},i.a.createElement("i",{className:"icon fas fa-book-open fa-2x"}),r===F.main?i.a.createElement("i",{className:"icon fas fa-bars fa-2x",onClick:function(){return a(F.macrolist)}}):i.a.createElement("i",{className:"icon far fa-window-close fa-2x",onClick:function(){return a(F.main)}}),i.a.createElement("i",{className:"save icon fas fa-save fa-2x"}),i.a.createElement("a",{className:"export icon",href:o,download:"notebook_lambdulus.json",onClick:function(){return setTimeout(function(){return window.URL.revokeObjectURL(o)},10)}},i.a.createElement("i",{id:"download",className:"fas fa-cloud-download-alt fa-2x"})),i.a.createElement("input",{type:"file",accept:"application/json",id:"input",onChange:function(e){return function(e,t){var n=e.target.files;if(null===n)return;var a=n[0],i=new FileReader;i.onload=function(e){var n=JSON.parse(i.result);t(function(e){var t=e.singleLetterVars,n=e.macroTable,a={singleLetterVars:t,macroTable:n};return Object(l.a)({},e,{submittedExpressions:e.submittedExpressions.map(function(e){return function(e,t){if(e.type===y.expression){var n=function(e,t){var n=t.singleLetterVars,a=t.macroTable,i=Object(E.tokenize)(e,{lambdaLetters:["\u03bb"],singleLetterVars:n});return Object(E.parse)(i,a)}(e.expression,t);return Object(l.a)({},e,{ast:n,history:[n]})}return e}(e,a)})})}(n))},i.readAsText(a)}(e,n)}}),i.a.createElement("label",{htmlFor:"input"},"Import notebook"))}function C(e){return e.type===y.expression?Object(l.a)({},e,{ast:null,history:[],isRunning:!1,lastReduction:null,breakpoints:[],timeoutID:void 0}):e}function w(e){var t=e.submittedExpressions,n=e.updateState,a=e.removeExpression;return i.a.createElement("ul",{className:"evaluatorSpace"},t.map(function(e,t){return i.a.createElement("li",{key:e.__key},i.a.createElement(L,{state:e,updateState:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return n(e,t)}),removeExpression:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return a(t)})}))}))}function T(e){var t=e.macroTable,n=e.removeMacro;return i.a.createElement("div",{className:"macroSpace"},i.a.createElement("p",null,"Built-in Macros"),i.a.createElement("ul",null,Object.entries(E.builtinMacros).map(function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return i.a.createElement("div",{key:n},i.a.createElement("div",{className:"macroHeader"},i.a.createElement("i",{className:"headerTitle"},n)),i.a.createElement("li",null,i.a.createElement("div",{className:"box"},a)))})),i.a.createElement("p",null,"User-defined Macros"),i.a.createElement("ul",null,Object.entries(t).map(function(e){var t=Object(u.a)(e,2),a=t[0],r=t[1];return i.a.createElement("div",{key:a},i.a.createElement("div",{className:"macroHeader"},i.a.createElement("i",{className:"icon far fa-trash-alt",onClick:function(){return n(a)}}),i.a.createElement("i",{className:"icon fas fa-pencil-alt"}),i.a.createElement("i",{className:"headerTitle"},a)),i.a.createElement("li",null,i.a.createElement("div",{className:"box"},r)))})))}!function(e){e[e.expression=0]="expression",e[e.macro=1]="macro",e[e.note=2]="note"}(y||(y={}));var F,D={FACT:"(Y (\u03bb f n . (<= n 1) 1 (* n (f (- n 1)))))",FACCT:"(\u03bb n . (Y (\u03bb f n a . IF (= n 1) a (f (- n 1) (* n a)))) (- n 1) (n))",FIB:"(Y (\u03bb f n . (= n 0) 0 ((= n 1) 1 ( + (f (- n 1)) (f (- n 2))))))",APPEND:"Y (\u03bb fn listA listB . IF (NULL listA) (listB) (CONS (FIRST listA) (fn (SECOND listA) listB)))",LISTGREQ:"Y (\u03bb fn piv list . IF (NULL list) (NIL) ( IF (>= (FIRST list) piv) (CONS (FIRST list) (fn piv (SECOND list))) (fn piv (SECOND list)) ) )",LISTLESS:"Y (\u03bb fn piv list . IF (NULL list) (NIL) ( IF (< (FIRST list) piv) (CONS (FIRST list) (fn piv (SECOND list))) (fn piv (SECOND list)) ) )",LISTGR:"Y (\u03bb fn piv list . IF (NULL list) (NIL) ( IF (> (FIRST list) piv) (CONS (FIRST list) (fn piv (SECOND list))) (fn piv (SECOND list)) ) )",LISTEQ:"Y (\u03bb fn piv list . IF (NULL list) (NIL) ( IF (= (FIRST list) piv) (CONS (FIRST list) (fn piv (SECOND list))) (fn piv (SECOND list)) ) )",QUICKSORT:"Y (\u03bb fn list . IF (NULL list) (NIL) ( IF (NULL (SECOND list)) (list) ( APPEND (fn (LISTLESS (FIRST list) list)) ( APPEND (LISTEQ (FIRST list) list) (fn (LISTGR (FIRST list) list)) ) ) ) )",INFLIST:"(\u03bb n . (Y (\u03bb x . (\u03bb f s g . g f s) n x)))",REMOVENTH:"Y (\u03bb fn list n . IF (= n 0) (SECOND list) (IF (NULL list) NIL (CONS (FIRST list) (fn (SECOND list) (- n 1) ) ) ) )",NTH:"Y (\u03bb fn list n . IF (= n 0) (FIRST list) (IF (NULL (list)) NIL (fn (SECOND list) (- n 1)) ) )",LEN:"Y (\u03bb fn list . IF (NULL list) (0) (+ 1 (fn (SECOND list) )) )",GETNTH:"(\u03bb end . (Y (\u03bb f n i . (end i) (i) ( (= n 0) (Y (\u03bb f a . (end a) (i) (f) ) ) (f (- n 1)) ) )) )",MAP:"(\u03bb fn l . (Y (\u03bb f it . IF (NULL it) (NIL) (CONS (fn (FIRST it)) (f (SECOND it))) )) l )",REDUCE:"(\u03bb fn l init . Y (\u03bb f it acc . IF (NULL it) (acc) (f (SECOND it) (fn (FIRST it) acc)) ) l init )",APPLY:"(\u03bb f args . Y (\u03bb ff f l . (NULL l) (f) (ff (f (FIRST l)) (SECOND l)) ) f args )",RANGE:"(\u03bb m n . Y (\u03bb f e . (= e n) (CONS e NIL) (CONS e (f (+ e 1))) ) m )",LISTCOMPR:"(\u03bb args . APPLY (\u03bb op in rng cond . Y (\u03bb f l . (NULL l) (NIL) ( (cond (FIRST l)) (CONS (op (FIRST l)) (f (SECOND l))) (CONS (FIRST l) (f (SECOND l))) ) ) rng ) args )",MOD:"(\u03bb n m . (n (\u03bb n . (= n (- m 1)) (0) (+ n 1)) (0)) )",INFIX:"APPLY (\u03bb l op r . op l r)"};!function(e){e[e.main=0]="main",e[e.macrolist=1]="macrolist",e[e.notebooks=2]="notebooks"}(F||(F={}));var U=function(e){function t(e){var n;Object(d.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).parseExpression=n.parseExpression.bind(Object(v.a)(Object(v.a)(n))),n.getSavedMacros=n.getSavedMacros.bind(Object(v.a)(Object(v.a)(n))),n.getExpressionFromURL=n.getExpressionFromURL.bind(Object(v.a)(Object(v.a)(n))),n.updateFromURL=n.updateFromURL.bind(Object(v.a)(Object(v.a)(n)));var a=function(e,t){var n;return[function(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];window.clearTimeout(n),n=window.setTimeout(function(){e.apply(void 0,i)},t)},function(){window.clearTimeout(n)}]}(n.updateURL.bind(Object(v.a)(Object(v.a)(n))),500),i=Object(u.a)(a,2),r=i[0],s=i[1];n.updateURL=r,n.cancelUpdate=s,n.onExpression=n.onExpression.bind(Object(v.a)(Object(v.a)(n))),n.onSubmit=n.onSubmit.bind(Object(v.a)(Object(v.a)(n))),n.onRemoveExpression=n.onRemoveExpression.bind(Object(v.a)(Object(v.a)(n))),n.isMacroDefinition=n.isMacroDefinition.bind(Object(v.a)(Object(v.a)(n))),n.isNote=n.isNote.bind(Object(v.a)(Object(v.a)(n))),n.updateMacros=n.updateMacros.bind(Object(v.a)(Object(v.a)(n))),n.onUpdateEvaluationState=n.onUpdateEvaluationState.bind(Object(v.a)(Object(v.a)(n))),n.onRemoveMacro=n.onRemoveMacro.bind(Object(v.a)(Object(v.a)(n))),window.addEventListener("hashchange",n.updateFromURL);var o=n.getExpressionFromURL();return n.state={editorState:{expression:o,caretPosition:o.length,syntaxError:null},singleLetterVars:!1,macroTable:Object(l.a)({},D,n.getSavedMacros()),submittedExpressions:[],screen:F.main},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.editorState,a=n.expression,r=n.caretPosition,s=n.syntaxError,o=(t.singleLetterVars,t.macroTable),c=t.submittedExpressions,u=t.screen,d=i.a.createElement("div",null,"Notebooks are not implemented yet.");return i.a.createElement("div",{className:"app"},i.a.createElement(I,{state:this.state,onImport:function(t){return e.setState(t)},onScreenChange:function(t){return e.setState(Object(l.a)({},e.state,{screen:t}))}}),u===F.main?i.a.createElement(w,{removeExpression:e.onRemoveExpression,updateState:e.onUpdateEvaluationState,submittedExpressions:c}):u===F.macrolist?i.a.createElement(T,{macroTable:o,removeMacro:e.onRemoveMacro}):d,i.a.createElement(h,{expression:a,caretPosition:r,onExpression:this.onExpression,onSubmit:this.onSubmit,syntaxError:s}),i.a.createElement("div",{id:"anchor"}))}},{key:"updateURL",value:function(e){history.pushState({},"page title?","#"+encodeURI(e))}},{key:"cancelUpdate",value:function(){}},{key:"onExpression",value:function(e,t){this.setState(Object(l.a)({},this.state,{editorState:{expression:e,caretPosition:t,syntaxError:null}})),this.updateURL(e)}},{key:"onUpdateEvaluationState",value:function(e,t){var n=this.state.submittedExpressions;n[t]=Object(l.a)({},n[t],e),this.setState(Object(l.a)({},this.state,{submittedExpressions:n}))}},{key:"onRemoveExpression",value:function(e){var t=this.state.submittedExpressions;t.splice(e,1)[0];this.setState(Object(l.a)({},this.state,{submittedExpressions:t}))}},{key:"onSubmit",value:function(){this.cancelUpdate();var e=this.state,t=e.editorState,n=t.expression,a=t.caretPosition,i=e.submittedExpressions,r=e.macroTable;if(history.pushState({},"","#"+encodeURI(n)),this.isMacroDefinition(n)){history.pushState({},"","#"+encodeURI(""));var s=n.split(":=").map(x),d=Object(u.a)(s,2),m=d[0],p=d[1],f={type:y.macro,__key:Date.now().toString(),macroName:m,macroExpression:p},b=Object(l.a)({},r,Object(c.a)({},m,p));this.setState(Object(l.a)({},this.state,{editorState:{expression:"",caretPosition:0,syntaxError:null},submittedExpressions:[].concat(Object(o.a)(i),[f]),macroTable:b})),this.updateMacros(b)}else if(this.isNote(n)){history.pushState({},"","#"+encodeURI(""));var v={type:y.note,__key:Date.now().toString(),note:n.substring(1)};this.setState(Object(l.a)({},this.state,{editorState:{expression:"",caretPosition:0,syntaxError:null},submittedExpressions:[].concat(Object(o.a)(i),[v])}))}else try{var E=this.parseExpression(n);history.pushState({},"","#"+encodeURI(""));var h={type:y.expression,__key:Date.now().toString(),expression:n,ast:E,history:[E.clone()],steps:0,isRunning:!1,lastReduction:null,breakpoints:[],timeoutID:void 0,timeout:10};this.setState(Object(l.a)({},this.state,{editorState:{expression:"",caretPosition:0,syntaxError:null},submittedExpressions:[].concat(Object(o.a)(i),[h])}))}catch(S){this.updateURL(n),console.log(S),this.setState(Object(l.a)({},this.state,{editorState:{expression:n,caretPosition:a,syntaxError:S}}))}}},{key:"getExpressionFromURL",value:function(){return decodeURI(window.location.hash.substring(1))}},{key:"updateFromURL",value:function(){var e=this.state.editorState.expression,t=this.getExpressionFromURL();e!==t?this.setState(Object(l.a)({},this.state,{editorState:{expression:t,caretPosition:t.length,syntaxError:null}})):console.log("ALREADY SYNCED")}},{key:"isNote",value:function(e){return 0===e.indexOf("#")}},{key:"isMacroDefinition",value:function(e){try{return e.indexOf(":=")>0}catch(t){return!1}}},{key:"parseExpression",value:function(e){var t=this.state,n=t.singleLetterVars,a=t.macroTable,i=Object(E.tokenize)(e,{lambdaLetters:["\u03bb"],singleLetterVars:n});return Object(E.parse)(i,a)}},{key:"onRemoveMacro",value:function(e){var t=this.state.macroTable,n=Object(l.a)({},t);delete n[e],this.setState(Object(l.a)({},this.state,{macroTable:n})),this.updateMacros(n)}},{key:"getSavedMacros",value:function(){return JSON.parse(window.localStorage.getItem("macrotable")||"{}")}},{key:"updateMacros",value:function(e){window.localStorage.setItem("macrotable",JSON.stringify(e))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.741f4ddf.chunk.js.map