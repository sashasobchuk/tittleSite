(this.webpackJsonpsasha=this.webpackJsonpsasha||[]).push([[3],{102:function(e,t,n){e.exports={fotoPage:"file_fotoPage__2hA6T",itemContainer:"file_itemContainer__Z7oOW",fotoItem:"file_fotoItem__HsVk0",fotoItemDownload:"file_fotoItemDownload__U1cB7",tittleFolder:"file_tittleFolder__20w0u",tittle:"file_tittle__320gr",file:"file_file__v_akB",image_upload:"file_image_upload__1RLAI",deleteItem:"file_deleteItem__3ejGp",inputFolder:"file_inputFolder__2Oz9n",input:"file_input__12qNa",commentValue:"file_commentValue__3nAJO",btnADD:"file_btnADD__38hFJ",downItemFolder:"file_downItemFolder__2U1-J",inputTittle:"file_inputTittle__1EVZc",oneComentFolder:"file_oneComentFolder__35rz9",BTNrightComment:"file_BTNrightComment__2vebr",main:"file_main__20fqO",navContainer:"file_navContainer__1Mi4O"}},103:function(e,t,n){e.exports={container:"fullFoto_container__3U5yY",img:"fullFoto_img__20_A4",leftPoint:"fullFoto_leftPoint__2TzmI",rightPoint:"fullFoto_rightPoint__2iAmS",exit:"fullFoto_exit__NB2IM"}},104:function(e,t,n){e.exports={popUp:"popUp_popUp__2NHBq",img:"popUp_img__2g7BC",close:"popUp_close__1kG-m",inputFile:"popUp_inputFile__UeQfy"}},105:function(e,t,n){e.exports={pagintotrFolder:"paginator_pagintotrFolder__2uu-J",item:"paginator_item__2MpsX",leftItem:"paginator_leftItem__22FPa",itemValue:"paginator_itemValue__9iulu",inp:"paginator_inp__2tuD_",numberPages:"paginator_numberPages__1etlO",numberOnePages:"paginator_numberOnePages__3mI1x",numberOneActivPages:"paginator_numberOneActivPages__3-dCL",sortType:"paginator_sortType__12XW1"}},107:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(26),a=n(1),l=n(5),o=n(102),r=n.n(o),s=n(50),u=n(45),j=function(e){var t=e.props,n=Object(a.useState)("\u043a\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430"),o=Object(c.a)(n,2),j=o[0],m=o[1],b=Object(l.b)(),f=Object(l.c)((function(e){return e.header.isAuth})),p=Object(l.c)((function(e){return e.header.role})),d=function(){b(Object(s.e)(j,t.item._id)),m("")},_=localStorage.getItem("userId"),O=t.item.image_Url_Name,g=function(){return"foto"===t.fileType?Object(i.jsx)("img",{className:r.a.file,onClick:function(e){b(Object(s.n)(t.index))},src:O,alt:"foto"}):Object(i.jsx)("video",{width:"100%",controls:!0,className:r.a.file,src:O})},h=!0===t.loading?Object(i.jsx)(u.a,{}):Object(i.jsx)(g,{});return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:r.a.fotoItem,children:[Object(i.jsx)("div",{className:r.a.tittleFolder,children:Object(i.jsx)("span",{className:r.a.tittle,children:t.item.tittle})}),h,"ADMIN"===p&&Object(i.jsx)("button",{className:r.a.deleteItem,onClick:function(){b(Object(s.b)(t.item._id,t.fileType))},children:"X"}),Object(i.jsxs)("div",{className:r.a.downItemFolder,children:[t.item.fileComments.map((function(e){return(e.status||e.user_storage_id===_||"ADMIN"===p)&&Object(i.jsxs)("div",{className:r.a.oneComentFolder,children:[Object(i.jsx)("div",{className:r.a.commentValue,children:e.value}),(e.user_storage_id===_||f)&&Object(i.jsxs)("div",{className:r.a.BTNrightComment,children:["ADMIN"===p&&Object(i.jsx)("button",{onClick:function(){return n=e._id,void b(Object(s.a)(n,t.item._id));var n},children:"X"}),"ADMIN"===p&&Object(i.jsx)("button",{onClick:function(){return t=e._id,n=e.status,void b(Object(s.f)(t,n));var t,n},children:e.status?"shown":"hidden"})]})]},e._id)})),Object(i.jsxs)("div",{className:r.a.inputFolder,children:[Object(i.jsx)("input",{className:r.a.input,type:"text",placeholder:"comment",value:j,onKeyDown:function(e){return function(e){"Enter"===e.key&&d()}(e)},onChange:function(e){return function(e){m(e.currentTarget.value)}(e)}}),Object(i.jsx)("button",{className:r.a.btnADD,onClick:function(){return d()},children:" \u0434\u043e\u0434\u0430\u0442\u0438"})]})]})]})})},m=n(103),b=n.n(m),f=(n.p,function(e){var t=e.props,n=Object(l.c)((function(e){return e.filePage.FullFIleDisplay})),c=Object(l.c)((function(e){return e.filePage.fullFileItem})),a=t.fileItems[c],o=void 0!==a?a.image_Url_Name:"",r=Object(l.b)();return Object(i.jsxs)("div",{className:b.a.container,style:{display:n?"flex":"none"},children:[Object(i.jsxs)("button",{className:b.a.leftPoint,onClick:function(){r(Object(s.p)())},children:[" ","<"," "]}),Object(i.jsx)("img",{className:b.a.img,src:o,alt:""}),Object(i.jsxs)("button",{className:b.a.rightPoint,onClick:function(){r(Object(s.q)())},children:[" ",">"," "]}),Object(i.jsx)("button",{className:b.a.exit,onClick:function(){r(Object(s.l)())},children:"X"})]})}),p=n(51),d=n(104),_=n.n(d),O=function(e){var t=e.props,n=Object(l.b)(),c=Object(l.c)((function(e){return e.filePage.newFileTittle})),a=Object(l.c)((function(e){return e.filePage.popupDisplay})),o=function(){n(Object(s.j)("none"))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:_.a.popUp,style:{display:a},children:[Object(i.jsx)("img",{className:_.a.img,src:p.a,alt:"error"}),Object(i.jsx)("input",{className:_.a.close,onClick:o,value:"x",type:"button"}),Object(i.jsx)("input",{className:_.a.inputFile,multiple:!0,type:"file",onChange:function(e){return function(e){for(var i=0;i<e.target.files.length;i++)n(Object(s.d)(e.target.files[i],c,t.fileType));o()}(e)}})]})})},g=function(){var e=Object(l.b)(),t=Object(a.useState)(""),n=Object(c.a)(t,2),o=n[0],u=n[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:r.a.fotoItemDownload,children:[Object(i.jsx)("div",{className:r.a.image_upload,children:Object(i.jsx)("img",{className:r.a.imgDiv,width:"100%",src:p.a,alt:"foto",onClick:function(){e(Object(s.h)(o)),e(Object(s.o)("flex"))}})}),Object(i.jsx)("input",{className:r.a.inputTittle,type:"text",value:o,onChange:function(e){return u(e.target.value)}})]})})},h=n(3),x=n(105),v=n.n(x),N=n(8),C=n(23),P=function(e){for(var t=e.props,n=Object(l.b)(),o=Object(h.a)({},t),r=o.totalItemsCount,u=o.fileType,j=o.sortType,m=o.changeSortTypeHandler,b=o.ReduceRequestPage,f=o.reducerPageSize,p=Object(a.useState)(f),d=Object(c.a)(p,2),_=d[0],O=d[1],g=Math.ceil(r/_),x=[],P=1;P<=g;P++)x.push(P);var y=Math.ceil(g/10),F=Object(a.useState)(1),I=Object(c.a)(F,2),T=I[0],D=I[1],k=10*(T-1)+1,A=10*T,S=Object(a.useState)(b),w=Object(c.a)(S,2),U=w[0],M=w[1],V=Object(N.g)().page;function B(e){0===(e=Number(e))&&(e=1);var t=null;function n(e){clearTimeout(t),t=setTimeout((function(){i=!1,function(e){O(e),E(1,e)}(e)}),200)}var i=!1;n(e),i||(clearTimeout(t),n(e))}var q=Number(Object(N.f)().location.pathname.split("=")[1]),E=function(e,t){n(Object(s.g)(!0)),M(e),g=Math.ceil(r/t),n(Object(s.c)(u,j,(q-1)*t,t)),n(Object(s.g)(!1))};return Object(a.useEffect)((function(){n(Object(s.g)(!0)),n(Object(s.m)(0===q?1:q)),E(U,_)}),[n,u,j,U,_]),Object(i.jsxs)("div",{className:v.a.pagintotrFolder,children:[Object(i.jsxs)("div",{className:v.a.leftItem,children:[Object(i.jsxs)("div",{children:["\u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0441\u0442\u043e\u0440\u0456\u043d\u043e\u043a:",Object(i.jsx)("span",{className:v.a.itemValue,children:g})]}),Object(i.jsxs)("div",{children:["\u0440\u043e\u0437\u043c\u0456\u0440 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438: ",Object(i.jsx)("span",{className:v.a.itemValue,children:Object(i.jsx)("input",{className:v.a.inp,value:_,type:"number",placeholder:"\u0437\u043c\u0456\u043d\u0438\u0442\u0438  \u0440\u043e\u0437\u043c\u0456\u0440",onChange:function(e){return B(e.currentTarget.value)}})})]})]}),Object(i.jsxs)("div",{className:v.a.item,children:[T>1&&Object(i.jsx)("button",{className:v.a.inp,onClick:function(){D(T-1)},children:"PREV"}),Object(i.jsx)("div",{className:v.a.numberPages,children:x.filter((function(e){return e>=k&&e<=A})).map((function(e){return Object(i.jsx)(C.b,{onClick:function(t){E(e,_)},className:e===Number(V)?v.a.numberOneActivPages:v.a.numberOnePages,to:"page="+String(e),children:Object(i.jsx)("div",{children:e})},e)}))}),y>T&&Object(i.jsx)("button",{className:v.a.inp,onClick:function(){D(T+1)},children:"NEXT"})]}),Object(i.jsxs)("div",{className:v.a.item,children:["\u0441\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430:",Object(i.jsx)("div",{className:v.a.sortType,onClick:m,children:Object(i.jsx)("button",{children:"ASC"===j?Object(i.jsx)("span",{children:"\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u043d\u044f\u043c"}):Object(i.jsx)("span",{children:"\u0441\u043f\u0430\u0434\u0430\u043d\u043d\u044f\u043c"})})})]})]})};t.default=function(e){var t=e.props.fileType,n=Object(l.c)((function(e){return e.filePage.fileItems})),c=Object(l.c)((function(e){return e.filePage.sortType})),a=Object(l.c)((function(e){return e.filePage.loading})),o=Object(l.c)((function(e){return e.filePage.totalItemsCount})),u=Object(l.c)((function(e){return e.filePage.PageSize})),m=Object(l.c)((function(e){return e.filePage.requestPage})),b=Object(l.b)(),p=Object(l.c)((function(e){return e.header.role}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:r.a.fotoPage,children:[Object(i.jsx)("div",{className:r.a.navContainer,children:Object(i.jsx)(P,{props:{totalItemsCount:o,DownloadFilePage:s.c,fileType:t,sortType:c,changeSortTypeHandler:function(){var e;"ASC"===c?e="DESC":"DESC"===c?e="ASC":alert("error"),b(Object(s.i)(e))},ReduceRequestPage:m,reducerPageSize:u}})}),n.map((function(e,n){return Object(i.jsx)("div",{className:r.a.itemContainer,children:t===e.fileType&&Object(i.jsx)(j,{props:{item:e,index:n,fileType:t,loading:a}})},e._id)})),"ADMIN"===p&&Object(i.jsx)("div",{className:r.a.itemContainer,children:Object(i.jsx)(g,{props:{fileType:t}})}),Object(i.jsx)(O,{props:{fileType:t}}),Object(i.jsx)(f,{props:{fileItems:n,fileType:t}})]})})}}}]);
//# sourceMappingURL=3.4f1ac14c.chunk.js.map