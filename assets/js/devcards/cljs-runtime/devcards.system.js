goog.provide('devcards.system');
goog.scope(function(){
  devcards.system.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id(devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"]"].join('');
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
(el.id = id);

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__5821__auto__ = node.firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var first_child = temp__5821__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__5821__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__5821__auto__)){
var heads = temp__5821__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-code-highlight-css","/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-devcards-css","body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-devcards-addons-css","/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-edn-css"))){
return null;
} else {
return head.appendChild(devcards.system.create_style_element("com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_();

if(cljs.core.truth_(devcards.system.devcards_app_node())){
return null;
} else {
var el = document.createElement("div");
(el.id = devcards.system.devcards_app_element_id);

return devcards.system.prepend_child(document.body,el);
}
});

if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.history !== 'undefined')){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return ["!/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,path))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token(path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__41844_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(p1__41844_SHARP_.token));
}));

var temp__5823__auto__ = devcards.system.goog$module$goog$object.get(location,"hash");
if(cljs.core.truth_(temp__5823__auto__)){
var token = temp__5823__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
var and__5043__auto__ = cljs.core.map_QMARK_(d);
if(and__5043__auto__){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__5043__auto____$3)){
return d;
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__5821__auto__)){
var c = temp__5821__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(cljs.core.vec(path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(cljs.core.last(path)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.dev_trans !== 'undefined')){
} else {
devcards.system.dev_trans = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41846 = cljs.core.get_global_hierarchy;
return (fexpr__41846.cljs$core$IFn$_invoke$arity$0 ? fexpr__41846.cljs$core$IFn$_invoke$arity$0() : fexpr__41846.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__41847,state){
var vec__41848 = p__41847;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41848,(0),null);
var map__41851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41848,(1),null);
var map__41851__$1 = cljs.core.__destructure_map(map__41851);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41851__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41851__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41851__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision(state,path);
return devcards.system.register_collision(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons(new cljs.core.Keyword(null,"cards","cards",169174038),new_path),(function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
})),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.app_state !== 'undefined')){
} else {
devcards.system.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,path);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec((cljs.core.truth_(devcards.system.valid_path_QMARK_(state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__41852,path){
var map__41853 = p__41852;
var map__41853__$1 = cljs.core.__destructure_map(map__41853);
var state = map__41853__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41853__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__41854,path){
var map__41855 = p__41854;
var map__41855__$1 = cljs.core.__destructure_map(map__41855);
var state = map__41855__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,path));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_path,path__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path(state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate(path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__5043__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_(devcards.system.current_page(state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page(state);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__41860_SHARP_){
var and__5043__auto__ = cljs.core.not(new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__41860_SHARP_));
if(and__5043__auto__){
return devcards.system.devcard_QMARK_(p1__41860_SHARP_);
} else {
return and__5043__auto__;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__41863){
var map__41864 = p__41863;
var map__41864__$1 = cljs.core.__destructure_map(map__41864);
var card = map__41864__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41864__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41864__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41864__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var G__41865 = "div";
var G__41866 = ({"key": devcards.system.path__GT_unique_card_id(path), "className": "com-rigsomelight-devcard"});
var G__41867 = sablono.interpreter.interpret((function (){var _STAR_devcard_data_STAR__orig_val__41868 = devcards.system._STAR_devcard_data_STAR_;
var _STAR_devcard_data_STAR__temp_val__41869 = card;
(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__temp_val__41869);

try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__orig_val__41868);
}})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__41865,G__41866,G__41867) : sablono.core.create_element.call(null,G__41865,G__41866,G__41867));
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref(state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))){
return devcards.system.card_template(state_atom,devcards.system.current_page(data));
} else {
return devcards.system.render_cards(devcards.system.display_cards(devcards.system.current_page(data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__41870){
var map__41871 = p__41870;
var map__41871__$1 = cljs.core.__destructure_map(map__41871);
var state = map__41871__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41871__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.rest),cljs.core.rest(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cpath) + (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sep_fn = (function (_){
var G__41872 = "span";
var G__41873 = ({"key": (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);

return cljs.core.deref(counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"});
var G__41874 = "/";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__41872,G__41873,G__41874) : sablono.core.create_element.call(null,G__41872,G__41873,G__41874));
});
var G__41875 = "div";
var G__41876 = ({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"});
var G__41877 = sablono.interpreter.interpret(cljs.core.rest(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(sep_fn,sep_fn(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41879){
var vec__41880 = p__41879;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41880,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41880,(1),null);
var G__41884 = "span";
var G__41885 = ({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id(path)});
var G__41886 = (function (){var G__41887 = "a";
var G__41888 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(state_atom,path);
})), "className": "com-rigsomelight-devcards_set-current-path"});
var G__41889 = sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__41887,G__41888,G__41889) : sablono.core.create_element.call(null,G__41887,G__41888,G__41889));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__41884,G__41885,G__41886) : sablono.core.create_element.call(null,G__41884,G__41885,G__41886));
}),crumbs))));
var G__41878 = sablono.interpreter.interpret((devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0 ? devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0() : devcards.system.cljs_logo.call(null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__41875,G__41876,G__41877,G__41878) : sablono.core.create_element.call(null,G__41875,G__41876,G__41877,G__41878));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (s){
var new_s = devcards.system.add_to_current_path(s,key);
devcards.system.hash_navigate(new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_(dirs)){
return null;
} else {
var attrs41899 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41900){
var vec__41901 = p__41900;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41901,(0),null);
var child_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41901,(1),null);
var G__41908 = "a";
var G__41909 = ({"href": "#", "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(key), "onClick": devcards.system.prevent__GT_((function (e){
return devcards.system.navigate_to_path(key,state_atom);
})), "className": "com-rigsomelight-devcards-list-group-item"});
var G__41910 = (function (){var G__41914 = "span";
var G__41915 = ({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"});
var G__41916 = sablono.interpreter.interpret(cljs.core.count(child_tree));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__41914,G__41915,G__41916) : sablono.core.create_element.call(null,G__41914,G__41915,G__41916));
})();
var G__41911 = (function (){var G__41917 = "span";
var G__41918 = null;
var G__41919 = " ";
var G__41920 = sablono.interpreter.interpret(cljs.core.name(key));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__41917,G__41918,G__41919,G__41920) : sablono.core.create_element.call(null,G__41917,G__41918,G__41919,G__41920));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__41908,G__41909,G__41910,G__41911) : sablono.core.create_element.call(null,G__41908,G__41909,G__41910,G__41911));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__41921){
var vec__41922 = p__41921;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41922,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41922,(1),null);
return cljs.core.name(key);
}),dirs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs41899))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs41899], 0))):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_(attrs41899))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41899)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref(state_atom);
var G__41932 = "div";
var G__41933 = ({"className": ["com-rigsomelight-devcards-base ",(function (){var temp__5823__auto__ = cljs.core.first(new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
return clojure.string.replace(cljs.core.name(n),".","-");
} else {
return null;
}
})()].join('')});
var G__41934 = (function (){var attrs41928 = (function (){var temp__5823__auto__ = devcards.system.breadcrumbs(data);
if(cljs.core.truth_(temp__5823__auto__)){
var crumbs = temp__5823__auto__;
return devcards.system.breadcrumbs_templ(crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs41928))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs41928], 0))):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_(attrs41928))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs41930 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs41930))?sablono.interpreter.attributes(attrs41930):null),((cljs.core.map_QMARK_(attrs41930))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41930)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41928),(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs41931 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs41931))?sablono.interpreter.attributes(attrs41931):null),((cljs.core.map_QMARK_(attrs41931))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41931)], null)));
})()], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__41932,G__41933,G__41934) : sablono.core.create_element.call(null,G__41932,G__41933,G__41934));
});
devcards.system.DevcardsRoot = (function (){var ctor__39106__auto__ = (function (props__39103__auto__){
var this__39104__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__39104__auto__,props__39103__auto__);

return this__39104__auto__;
});
goog.inherits(ctor__39106__auto__,devcards.util.utils.react_holder.Component);

var x41935_42152 = ctor__39106__auto__.prototype;
(x41935_42152.componentDidMount = (function (){
var this$ = this;
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),(function (_,___$1,___$2,___$3){
return this$.forceUpdate();
}));
}));

(x41935_42152.render = (function (){
var this$ = this;
return devcards.system.main_template(devcards.system.app_state);
}));


return ctor__39106__auto__;
})();

(devcards.system.DevcardsRoot.displayName = cljs.core.name(new cljs.core.Symbol(null,"DevcardsRoot","DevcardsRoot",-655621301,null)));
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return module$node_modules$react_dom$index.render(module$node_modules$react$index.createElement(devcards.system.DevcardsRoot),devcards.system.devcards_app_node());
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)], 0))], 0));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_41983){
var state_val_41984 = (state_41983[(1)]);
if((state_val_41984 === (7))){
var inst_41979 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_41985_42154 = state_41983__$1;
(statearr_41985_42154[(2)] = inst_41979);

(statearr_41985_42154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (1))){
var inst_41936 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(first_message,initial_data);
var inst_41937 = inst_41936;
var state_41983__$1 = (function (){var statearr_41986 = state_41983;
(statearr_41986[(7)] = inst_41937);

return statearr_41986;
})();
var statearr_41987_42155 = state_41983__$1;
(statearr_41987_42155[(2)] = null);

(statearr_41987_42155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (4))){
var inst_41944 = (state_41983[(8)]);
var inst_41944__$1 = (state_41983[(2)]);
var state_41983__$1 = (function (){var statearr_41988 = state_41983;
(statearr_41988[(8)] = inst_41944__$1);

return statearr_41988;
})();
if(cljs.core.truth_(inst_41944__$1)){
var statearr_41989_42156 = state_41983__$1;
(statearr_41989_42156[(1)] = (5));

} else {
var statearr_41990_42157 = state_41983__$1;
(statearr_41990_42157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (15))){
var state_41983__$1 = state_41983;
var statearr_41991_42158 = state_41983__$1;
(statearr_41991_42158[(2)] = null);

(statearr_41991_42158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (13))){
var inst_41974 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_41992_42160 = state_41983__$1;
(statearr_41992_42160[(2)] = inst_41974);

(statearr_41992_42160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (6))){
var state_41983__$1 = state_41983;
var statearr_41993_42161 = state_41983__$1;
(statearr_41993_42161[(2)] = null);

(statearr_41993_42161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (3))){
var inst_41981 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41983__$1,inst_41981);
} else {
if((state_val_41984 === (12))){
var state_41983__$1 = state_41983;
var statearr_41994_42163 = state_41983__$1;
(statearr_41994_42163[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (2))){
var inst_41939 = (state_41983[(9)]);
var inst_41939__$1 = cljs.core.async.timeout((500));
var inst_41940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41941 = [channel,inst_41939__$1];
var inst_41942 = (new cljs.core.PersistentVector(null,2,(5),inst_41940,inst_41941,null));
var state_41983__$1 = (function (){var statearr_41996 = state_41983;
(statearr_41996[(9)] = inst_41939__$1);

return statearr_41996;
})();
return cljs.core.async.ioc_alts_BANG_(state_41983__$1,(4),inst_41942);
} else {
if((state_val_41984 === (11))){
var inst_41937 = (state_41983[(7)]);
var inst_41962 = devcards.system.merge_in_new_data(start_data,inst_41937);
var state_41983__$1 = state_41983;
var statearr_41997_42167 = state_41983__$1;
(statearr_41997_42167[(2)] = inst_41962);

(statearr_41997_42167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (9))){
var inst_41953 = (state_41983[(10)]);
var inst_41960 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41953,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_41983__$1 = state_41983;
if(inst_41960){
var statearr_41998_42168 = state_41983__$1;
(statearr_41998_42168[(1)] = (11));

} else {
var statearr_41999_42169 = state_41983__$1;
(statearr_41999_42169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (5))){
var inst_41944 = (state_41983[(8)]);
var inst_41939 = (state_41983[(9)]);
var inst_41952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41944,(0),null);
var inst_41953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41952,(0),null);
var inst_41954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41952,(1),null);
var inst_41955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41944,(1),null);
var inst_41956 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41955,inst_41939);
var state_41983__$1 = (function (){var statearr_42000 = state_41983;
(statearr_42000[(10)] = inst_41953);

(statearr_42000[(11)] = inst_41954);

return statearr_42000;
})();
if(inst_41956){
var statearr_42001_42171 = state_41983__$1;
(statearr_42001_42171[(1)] = (8));

} else {
var statearr_42002_42172 = state_41983__$1;
(statearr_42002_42172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (14))){
var inst_41953 = (state_41983[(10)]);
var inst_41954 = (state_41983[(11)]);
var inst_41937 = (state_41983[(7)]);
var inst_41965 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41966 = [inst_41953,inst_41954];
var inst_41967 = (new cljs.core.PersistentVector(null,2,(5),inst_41965,inst_41966,null));
var inst_41968 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(inst_41967,inst_41937);
var inst_41937__$1 = inst_41968;
var state_41983__$1 = (function (){var statearr_42003 = state_41983;
(statearr_42003[(7)] = inst_41937__$1);

return statearr_42003;
})();
var statearr_42004_42173 = state_41983__$1;
(statearr_42004_42173[(2)] = null);

(statearr_42004_42173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (16))){
var inst_41972 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_42005_42174 = state_41983__$1;
(statearr_42005_42174[(2)] = inst_41972);

(statearr_42005_42174[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (10))){
var inst_41976 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_42010_42175 = state_41983__$1;
(statearr_42010_42175[(2)] = inst_41976);

(statearr_42010_42175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (8))){
var inst_41937 = (state_41983[(7)]);
var inst_41958 = devcards.system.merge_in_new_data(start_data,inst_41937);
var state_41983__$1 = state_41983;
var statearr_42011_42176 = state_41983__$1;
(statearr_42011_42176[(2)] = inst_41958);

(statearr_42011_42176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$system$off_the_books_$_state_machine__34141__auto__ = null;
var devcards$system$off_the_books_$_state_machine__34141__auto____0 = (function (){
var statearr_42012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42012[(0)] = devcards$system$off_the_books_$_state_machine__34141__auto__);

(statearr_42012[(1)] = (1));

return statearr_42012;
});
var devcards$system$off_the_books_$_state_machine__34141__auto____1 = (function (state_41983){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_41983);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e42013){var ex__34144__auto__ = e42013;
var statearr_42014_42181 = state_41983;
(statearr_42014_42181[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_41983[(4)]))){
var statearr_42015_42182 = state_41983;
(statearr_42015_42182[(1)] = cljs.core.first((state_41983[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42183 = state_41983;
state_41983 = G__42183;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__34141__auto__ = function(state_41983){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__34141__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__34141__auto____1.call(this,state_41983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__34141__auto____0;
devcards$system$off_the_books_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__34141__auto____1;
return devcards$system$off_the_books_$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_42016 = f__34400__auto__();
(statearr_42016[(6)] = c__34399__auto__);

return statearr_42016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__34399__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_42024){
var state_val_42025 = (state_42024[(1)]);
if((state_val_42025 === (1))){
var inst_42017 = cljs.core.deref(devcards.system.app_state);
var inst_42018 = cljs.core.PersistentVector.EMPTY;
var inst_42019 = devcards.system.off_the_books(channel,inst_42017,inst_42018);
var state_42024__$1 = state_42024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42024__$1,(2),inst_42019);
} else {
if((state_val_42025 === (2))){
var inst_42021 = (state_42024[(2)]);
var inst_42022 = cljs.core.reset_BANG_(devcards.system.app_state,inst_42021);
var state_42024__$1 = state_42024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42024__$1,inst_42022);
} else {
return null;
}
}
});
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto____0 = (function (){
var statearr_42029 = [null,null,null,null,null,null,null];
(statearr_42029[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto__);

(statearr_42029[(1)] = (1));

return statearr_42029;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto____1 = (function (state_42024){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_42024);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e42030){var ex__34144__auto__ = e42030;
var statearr_42031_42186 = state_42024;
(statearr_42031_42186[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_42024[(4)]))){
var statearr_42032_42187 = state_42024;
(statearr_42032_42187[(1)] = cljs.core.first((state_42024[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42188 = state_42024;
state_42024 = G__42188;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto__ = function(state_42024){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto____1.call(this,state_42024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_42033 = f__34400__auto__();
(statearr_42033[(6)] = c__34399__auto__);

return statearr_42033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));

return c__34399__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof module$node_modules$react$index !== 'undefined') && (typeof module$node_modules$react$index.initializeTouchEvents !== 'undefined')){
module$node_modules$react$index.initializeTouchEvents(true);
} else {
}

var c__34399__auto___42189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_42065){
var state_val_42066 = (state_42065[(1)]);
if((state_val_42066 === (7))){
var state_42065__$1 = state_42065;
var statearr_42070_42190 = state_42065__$1;
(statearr_42070_42190[(2)] = null);

(statearr_42070_42190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42066 === (1))){
var inst_42037 = devcards.system.load_data_from_channel_BANG_(channel);
var state_42065__$1 = state_42065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42065__$1,(2),inst_42037);
} else {
if((state_val_42066 === (4))){
var inst_42063 = (state_42065[(2)]);
var state_42065__$1 = state_42065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42065__$1,inst_42063);
} else {
if((state_val_42066 === (6))){
var inst_42050 = (state_42065[(7)]);
var inst_42052 = cljs.core.deref(devcards.system.app_state);
var inst_42053 = devcards.system.off_the_books(channel,inst_42052,inst_42050);
var state_42065__$1 = state_42065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42065__$1,(9),inst_42053);
} else {
if((state_val_42066 === (3))){
var state_42065__$1 = state_42065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42065__$1,(5),channel);
} else {
if((state_val_42066 === (2))){
var inst_42039 = (state_42065[(2)]);
var inst_42040 = (function (){return (function (){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});
})();
var inst_42041 = setTimeout(inst_42040,(0));
var inst_42042 = (function (){return (function (){
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),(function (_,___$1,___$2,___$3){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
}));
});
})();
var inst_42043 = setTimeout(inst_42042,(0));
var state_42065__$1 = (function (){var statearr_42074 = state_42065;
(statearr_42074[(8)] = inst_42039);

(statearr_42074[(9)] = inst_42041);

(statearr_42074[(10)] = inst_42043);

return statearr_42074;
})();
var statearr_42075_42194 = state_42065__$1;
(statearr_42075_42194[(2)] = null);

(statearr_42075_42194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42066 === (9))){
var inst_42050 = (state_42065[(7)]);
var inst_42055 = (state_42065[(2)]);
var inst_42056 = (function (){var temp__5823__auto__ = inst_42050;
var v = inst_42050;
var new_state = inst_42055;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_42057 = setTimeout(inst_42056,(0));
var state_42065__$1 = (function (){var statearr_42076 = state_42065;
(statearr_42076[(11)] = inst_42057);

return statearr_42076;
})();
var statearr_42077_42195 = state_42065__$1;
(statearr_42077_42195[(2)] = null);

(statearr_42077_42195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42066 === (5))){
var inst_42050 = (state_42065[(7)]);
var inst_42050__$1 = (state_42065[(2)]);
var state_42065__$1 = (function (){var statearr_42078 = state_42065;
(statearr_42078[(7)] = inst_42050__$1);

return statearr_42078;
})();
if(cljs.core.truth_(inst_42050__$1)){
var statearr_42079_42196 = state_42065__$1;
(statearr_42079_42196[(1)] = (6));

} else {
var statearr_42080_42198 = state_42065__$1;
(statearr_42080_42198[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42066 === (8))){
var inst_42061 = (state_42065[(2)]);
var state_42065__$1 = state_42065;
var statearr_42081_42200 = state_42065__$1;
(statearr_42081_42200[(2)] = inst_42061);

(statearr_42081_42200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__34141__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__34141__auto____0 = (function (){
var statearr_42082 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42082[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__34141__auto__);

(statearr_42082[(1)] = (1));

return statearr_42082;
});
var devcards$system$start_ui_with_renderer_$_state_machine__34141__auto____1 = (function (state_42065){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_42065);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e42083){var ex__34144__auto__ = e42083;
var statearr_42084_42204 = state_42065;
(statearr_42084_42204[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_42065[(4)]))){
var statearr_42085_42205 = state_42065;
(statearr_42085_42205[(1)] = cljs.core.first((state_42065[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42206 = state_42065;
state_42065 = G__42206;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__34141__auto__ = function(state_42065){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__34141__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__34141__auto____1.call(this,state_42065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__34141__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__34141__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_42086 = f__34400__auto__();
(statearr_42086[(6)] = c__34399__auto___42189);

return statearr_42086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof module$node_modules$react$index !== 'undefined') && (typeof module$node_modules$react$index.initializeTouchEvents !== 'undefined')){
module$node_modules$react$index.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_();

var c__34399__auto___42211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34400__auto__ = (function (){var switch__34140__auto__ = (function (state_42114){
var state_val_42115 = (state_42114[(1)]);
if((state_val_42115 === (7))){
var state_42114__$1 = state_42114;
var statearr_42119_42212 = state_42114__$1;
(statearr_42119_42212[(2)] = null);

(statearr_42119_42212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (1))){
var inst_42090 = devcards.system.load_data_from_channel_BANG_(channel);
var state_42114__$1 = state_42114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42114__$1,(2),inst_42090);
} else {
if((state_val_42115 === (4))){
var inst_42112 = (state_42114[(2)]);
var state_42114__$1 = state_42114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42114__$1,inst_42112);
} else {
if((state_val_42115 === (6))){
var inst_42099 = (state_42114[(7)]);
var inst_42101 = cljs.core.deref(devcards.system.app_state);
var inst_42102 = devcards.system.off_the_books(channel,inst_42101,inst_42099);
var state_42114__$1 = state_42114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42114__$1,(9),inst_42102);
} else {
if((state_val_42115 === (3))){
var state_42114__$1 = state_42114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42114__$1,(5),channel);
} else {
if((state_val_42115 === (2))){
var inst_42092 = (state_42114[(2)]);
var inst_42093 = (function (){return (function (){
return devcards.system.renderer(devcards.system.app_state);
});
})();
var inst_42094 = setTimeout(inst_42093,(0));
var inst_42095 = (function (){return (function (){
return devcards.system.hash_routing_init(devcards.system.app_state);
});
})();
var inst_42096 = setTimeout(inst_42095,(0));
var state_42114__$1 = (function (){var statearr_42127 = state_42114;
(statearr_42127[(8)] = inst_42092);

(statearr_42127[(9)] = inst_42094);

(statearr_42127[(10)] = inst_42096);

return statearr_42127;
})();
var statearr_42128_42218 = state_42114__$1;
(statearr_42128_42218[(2)] = null);

(statearr_42128_42218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (9))){
var inst_42099 = (state_42114[(7)]);
var inst_42104 = (state_42114[(2)]);
var inst_42105 = (function (){var temp__5823__auto__ = inst_42099;
var v = inst_42099;
var new_state = inst_42104;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_42106 = setTimeout(inst_42105,(0));
var state_42114__$1 = (function (){var statearr_42129 = state_42114;
(statearr_42129[(11)] = inst_42106);

return statearr_42129;
})();
var statearr_42130_42222 = state_42114__$1;
(statearr_42130_42222[(2)] = null);

(statearr_42130_42222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (5))){
var inst_42099 = (state_42114[(7)]);
var inst_42099__$1 = (state_42114[(2)]);
var state_42114__$1 = (function (){var statearr_42131 = state_42114;
(statearr_42131[(7)] = inst_42099__$1);

return statearr_42131;
})();
if(cljs.core.truth_(inst_42099__$1)){
var statearr_42132_42223 = state_42114__$1;
(statearr_42132_42223[(1)] = (6));

} else {
var statearr_42133_42224 = state_42114__$1;
(statearr_42133_42224[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (8))){
var inst_42110 = (state_42114[(2)]);
var state_42114__$1 = state_42114;
var statearr_42134_42225 = state_42114__$1;
(statearr_42134_42225[(2)] = inst_42110);

(statearr_42134_42225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$system$start_ui_$_state_machine__34141__auto__ = null;
var devcards$system$start_ui_$_state_machine__34141__auto____0 = (function (){
var statearr_42138 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42138[(0)] = devcards$system$start_ui_$_state_machine__34141__auto__);

(statearr_42138[(1)] = (1));

return statearr_42138;
});
var devcards$system$start_ui_$_state_machine__34141__auto____1 = (function (state_42114){
while(true){
var ret_value__34142__auto__ = (function (){try{while(true){
var result__34143__auto__ = switch__34140__auto__(state_42114);
if(cljs.core.keyword_identical_QMARK_(result__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34143__auto__;
}
break;
}
}catch (e42139){var ex__34144__auto__ = e42139;
var statearr_42141_42227 = state_42114;
(statearr_42141_42227[(2)] = ex__34144__auto__);


if(cljs.core.seq((state_42114[(4)]))){
var statearr_42142_42228 = state_42114;
(statearr_42142_42228[(1)] = cljs.core.first((state_42114[(4)])));

} else {
throw ex__34144__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42230 = state_42114;
state_42114 = G__42230;
continue;
} else {
return ret_value__34142__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__34141__auto__ = function(state_42114){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__34141__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__34141__auto____1.call(this,state_42114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__34141__auto____0;
devcards$system$start_ui_$_state_machine__34141__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__34141__auto____1;
return devcards$system$start_ui_$_state_machine__34141__auto__;
})()
})();
var state__34401__auto__ = (function (){var statearr_42143 = f__34400__auto__();
(statearr_42143[(6)] = c__34399__auto___42211);

return statearr_42143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34401__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return module$node_modules$react$index.createElement("span",({"key": "cljs-logo", "dangerouslySetInnerHTML": ({"__html": devcards.system.cljs_logo_svg})}));
});

//# sourceMappingURL=devcards.system.js.map
