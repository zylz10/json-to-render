import{k as e,R as t,m as n,l as r,U as i}from"./index.b9eed96a.js";import{I as o,C as u,D as a,F as s,a as c,S as d}from"./cssWorker.54e5c98a.js";import"./editorWorker.1a74ba82.js";var l=function(){function t(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=window.setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return t.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},t.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},t.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},t.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=e.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},t.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){return t._worker.withSyncedResources(n)})).then((function(t){return e}))},t}(),f=function(){function t(t,n,r){var i=this;this._languageId=t,this._worker=n,this._disposables=[],this._listener=Object.create(null);var o=function(e){var t,n=e.getModeId();n===i._languageId&&(i._listener[e.uri.toString()]=e.onDidChangeContent((function(){window.clearTimeout(t),t=window.setTimeout((function(){return i._doValidate(e.uri,n)}),500)})),i._doValidate(e.uri,n))},u=function(t){e.setModelMarkers(t,i._languageId,[]);var n=t.uri.toString(),r=i._listener[n];r&&(r.dispose(),delete i._listener[n])};this._disposables.push(e.onDidCreateModel(o)),this._disposables.push(e.onWillDisposeModel(u)),this._disposables.push(e.onDidChangeModelLanguage((function(e){u(e.model),o(e.model)}))),r.onDidChange((function(t){e.getModels().forEach((function(e){e.getModeId()===i._languageId&&(u(e),o(e))}))})),this._disposables.push({dispose:function(){for(var e in i._listener)i._listener[e].dispose()}}),e.getModels().forEach(o)}return t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(t,n){this._worker(t).then((function(e){return e.doValidation(t.toString())})).then((function(r){var i=r.map((function(e){return n="number"==typeof(t=e).code?String(t.code):t.code,{severity:g(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source};var t,n})),o=e.getModel(t);o&&o.getModeId()===n&&e.setModelMarkers(o,n,i)})).then(void 0,(function(e){console.error(e)}))},t}();function g(e){switch(e){case a.Error:return r.Error;case a.Warning:return r.Warning;case a.Information:return r.Info;case a.Hint:return r.Hint;default:return r.Info}}function h(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function p(e){if(e)return new t(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function m(e){var t=n.CompletionItemKind;switch(e){case u.Text:return t.Text;case u.Method:return t.Method;case u.Function:return t.Function;case u.Constructor:return t.Constructor;case u.Field:return t.Field;case u.Variable:return t.Variable;case u.Class:return t.Class;case u.Interface:return t.Interface;case u.Module:return t.Module;case u.Property:return t.Property;case u.Unit:return t.Unit;case u.Value:return t.Value;case u.Enum:return t.Enum;case u.Keyword:return t.Keyword;case u.Snippet:return t.Snippet;case u.Color:return t.Color;case u.File:return t.File;case u.Reference:return t.Reference}return t.Property}function v(e){if(e)return{range:p(e.range),text:e.newText}}var _=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!1,configurable:!0}),e.prototype.provideCompletionItems=function(e,r,i,u){var a=e.uri;return this._worker(a).then((function(e){return e.doComplete(a.toString(),h(r))})).then((function(i){if(i){var u=e.getWordUntilPosition(r),a=new t(r.lineNumber,u.startColumn,r.lineNumber,u.endColumn),s=i.items.map((function(e){var t,r={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:a,kind:m(e.kind)};return e.textEdit&&(void 0!==(t=e.textEdit).insert&&void 0!==t.replace?r.range={insert:p(e.textEdit.insert),replace:p(e.textEdit.replace)}:r.range=p(e.textEdit.range),r.insertText=e.textEdit.newText),e.additionalTextEdits&&(r.additionalTextEdits=e.additionalTextEdits.map(v)),e.insertTextFormat===o.Snippet&&(r.insertTextRules=n.CompletionItemInsertTextRule.InsertAsSnippet),r}));return{isIncomplete:i.isIncomplete,suggestions:s}}}))},e}();function w(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function k(e){if(e)return Array.isArray(e)?e.map(w):[w(e)]}var y=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),h(t))})).then((function(e){if(e)return{range:p(e.range),contents:k(e.contents)}}))},e}();function C(e){switch(e){case c.Read:return n.DocumentHighlightKind.Read;case c.Write:return n.DocumentHighlightKind.Write;case c.Text:return n.DocumentHighlightKind.Text}return n.DocumentHighlightKind.Text}var b=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),h(t))})).then((function(e){if(e)return e.map((function(e){return{range:p(e.range),kind:C(e.kind)}}))}))},e}();function x(e){return{uri:i.parse(e.uri),range:p(e.range)}}var I=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.findDefinition(r.toString(),h(t))})).then((function(e){if(e)return[x(e)]}))},e}(),S=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,t,n,r){var i=e.uri;return this._worker(i).then((function(e){return e.findReferences(i.toString(),h(t))})).then((function(e){if(e)return e.map(x)}))},e}();var T=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,t,n,r){var o=e.uri;return this._worker(o).then((function(e){return e.doRename(o.toString(),h(t),n)})).then((function(e){return function(e){if(e&&e.changes){var t=[];for(var n in e.changes)for(var r=i.parse(n),o=0,u=e.changes[n];o<u.length;o++){var a=u[o];t.push({resource:r,edit:{range:p(a.range),text:a.newText}})}return{edits:t}}}(e)}))},e}();function R(e){var t=n.SymbolKind;switch(e){case d.File:return t.Array;case d.Module:return t.Module;case d.Namespace:return t.Namespace;case d.Package:return t.Package;case d.Class:return t.Class;case d.Method:return t.Method;case d.Property:return t.Property;case d.Field:return t.Field;case d.Constructor:return t.Constructor;case d.Enum:return t.Enum;case d.Interface:return t.Interface;case d.Function:return t.Function;case d.Variable:return t.Variable;case d.Constant:return t.Constant;case d.String:return t.String;case d.Number:return t.Number;case d.Boolean:return t.Boolean;case d.Array:return t.Array}return t.Function}var D=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentSymbols(n.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:R(e.kind),tags:[],range:p(e.location.range),selectionRange:p(e.location.range)}}))}))},e}(),E=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentColors(n.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:p(e.range)}}))}))},e.prototype.provideColorPresentations=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),t.color,function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(t.range))})).then((function(e){if(e)return e.map((function(e){var t={label:e.label};return e.textEdit&&(t.textEdit=v(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(v)),t}))}))},e}(),P=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.getFoldingRanges(i.toString(),t)})).then((function(e){if(e)return e.map((function(e){var t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case s.Comment:return n.FoldingRangeKind.Comment;case s.Imports:return n.FoldingRangeKind.Imports;case s.Region:return n.FoldingRangeKind.Region}}(e.kind)),t}))}))},e}();var M=function(){function e(e){this._worker=e}return e.prototype.provideSelectionRanges=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),t.map(h))})).then((function(e){if(e)return e.map((function(e){for(var t=[];e;)t.push({range:p(e.range)}),e=e.parent;return t}))}))},e}();function F(e){var t=[],r=[],i=new l(e);t.push(i);var o,u,a=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.getLanguageServiceWorker.apply(i,e)};return o=e.languageId,u=e.modeConfiguration,H(r),u.completionItems&&r.push(n.registerCompletionItemProvider(o,new _(a))),u.hovers&&r.push(n.registerHoverProvider(o,new y(a))),u.documentHighlights&&r.push(n.registerDocumentHighlightProvider(o,new b(a))),u.definitions&&r.push(n.registerDefinitionProvider(o,new I(a))),u.references&&r.push(n.registerReferenceProvider(o,new S(a))),u.documentSymbols&&r.push(n.registerDocumentSymbolProvider(o,new D(a))),u.rename&&r.push(n.registerRenameProvider(o,new T(a))),u.colors&&r.push(n.registerColorProvider(o,new E(a))),u.foldingRanges&&r.push(n.registerFoldingRangeProvider(o,new P(a))),u.diagnostics&&r.push(new f(o,a,e)),u.selectionRanges&&r.push(n.registerSelectionRangeProvider(o,new M(a))),t.push(W(r)),W(t)}function W(e){return{dispose:function(){return H(e)}}}function H(e){for(;e.length;)e.pop().dispose()}export{F as setupMode};
