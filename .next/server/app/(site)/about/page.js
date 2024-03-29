(()=>{var e={};e.id=369,e.ids=[369],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5890:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var n=r(482),a=r(9108),i=r(2563),s=r.n(i),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["(site)",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,671)),"/home/siyu/Work/portfolio/portfolio/src/app/(site)/about/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3910)),"/home/siyu/Work/portfolio/portfolio/src/app/(site)/about/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1972)),"/home/siyu/Work/portfolio/portfolio/src/app/(site)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,2889))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7358)),"/home/siyu/Work/portfolio/portfolio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,2889))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/siyu/Work/portfolio/portfolio/src/app/(site)/about/page.tsx"],u="/(site)/about/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(site)/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6752:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},9116:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23)),Promise.resolve().then(r.bind(r,8051))},1195:(e,t,r)=>{Promise.resolve().then(r.bind(r,5154))},1594:(e,t,r)=>{Promise.resolve().then(r.bind(r,5608))},5303:()=>{},8051:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(5344),a=r(6506),i=r(3729),s=r(7554);let o=[{label:"Experience",link:"#experience",icon:function(e){return(0,s.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"},child:[]}]})(e)}},{label:"Projects",link:"#projects",icon:function(e){return(0,s.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"},child:[]}]})(e)}}];var l=r(1453);function c(){let[e,t]=(0,i.useState)("experience");return(0,i.useEffect)(()=>{let e=()=>{let e=document.querySelectorAll("section"),r="";var n=Math.max(document.documentElement.clientHeight,window.innerHeight||0)/2;e.forEach(e=>{let t=e.getBoundingClientRect();t.top<=n&&t.bottom>=n&&(r=e.id)}),t(r)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),n.jsx("div",{className:"fixed top-1/3 text-sm md:text-base",children:n.jsx("ul",{className:"animate-fade-up animate-ease-in-out",children:o.map(t=>(0,n.jsxs)("li",{className:(0,l.cn)("flex items-center p-4 gap-2 transition-all duration-700 ease-in-out",e===t.link.slice(1)?"scale-125":""),children:[n.jsx("div",{className:"flex justify-end w-10",children:e===t.link.slice(1)&&n.jsx(t.icon,{})}),n.jsx("div",{className:"w-20 ",children:n.jsx(a.default,{href:t.link,className:(0,l.cn)("transition duration-700 ease-in-out"),children:t.label},t.link)})]},t.link))})})}},5608:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n=r(5344),a=r(6506),i=r(9410);let s=[{label:"Home",link:"/"},{label:"About me",link:"/about"}];var o=r(9921),l=r(3729),c=r(2751),d=r(8720),u=r(1453);let m=(0,d.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),p=l.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...i},s)=>{let o=a?c.g7:"button";return n.jsx(o,{className:(0,u.cn)(m({variant:t,size:r,className:e})),ref:s,...i})});p.displayName="Button";var f=r(2108),h=r(946),x=r(4513);let g=h.fC,v=h.xz;h.x8;let b=h.h_,y=l.forwardRef(({className:e,...t},r)=>n.jsx(h.aV,{className:(0,u.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:r}));y.displayName=h.aV.displayName;let j=(0,d.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),w=l.forwardRef(({side:e="right",className:t,children:r,...a},i)=>(0,n.jsxs)(b,{children:[n.jsx(y,{}),(0,n.jsxs)(h.VY,{ref:i,className:(0,u.cn)(j({side:e}),t),...a,children:[r,(0,n.jsxs)(h.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[n.jsx(x.Z,{className:"h-4 w-4"}),n.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));w.displayName=h.VY.displayName;let N=({className:e,...t})=>n.jsx("div",{className:(0,u.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...t});function k(){let[e,t]=(0,l.useState)(!1);return n.jsx("div",{className:(0,u.cn)("w-full justify-start items-center ml-3 md:hidden"),children:(0,n.jsxs)(g,{open:e,onOpenChange:t,children:[n.jsx(v,{children:n.jsx(f.Z,{})}),(0,n.jsxs)(w,{side:"left",className:"w-40 animate-fade-right",children:[n.jsx(N,{className:"pt-10",children:n.jsx(i.default,{src:"images/logo.png",alt:"",width:100,height:60})}),n.jsx("ol",{className:"pt-10",children:s.map(e=>n.jsx("li",{className:"py-2",children:n.jsx(a.default,{href:e.link,onClick:()=>{t(!1)},children:e.label},e.link)},e.link))})]})]})})}function P(){return(0,n.jsxs)("header",{className:"flex justify-center z-10 items-center w-full backdrop-blur transition-[background-color,border-width] border-x-0 text-2xl md:text-base pt-3 px-3",children:[n.jsx(k,{}),(0,n.jsxs)("div",{className:"hidden w-full md:flex justify-left items-center space-x-4",children:[n.jsx(i.default,{unoptimized:!0,src:"images/logo.png",alt:"Logo",width:80,height:40}),s.map(e=>n.jsx(p,{variant:"link",asChild:!0,children:n.jsx(a.default,{href:e.link,className:"text-sm hover:text-cyan-500",children:e.label},e.link)},e.link))]}),(0,n.jsxs)("div",{className:"flex justify-end items-center",children:[n.jsx(a.default,{href:"https://github.com/SiyuAn166/",target:"_blank",className:"px-2 md:px-4 transition duration-600 ease-in-out hover:text-cyan-500 ",children:n.jsx(o.hJX,{})}),n.jsx(a.default,{href:"https://www.linkedin.com/in/siyu-an-bc/",target:"_blank",className:"px-2 md:px-4 transition duration-600 ease-in-out hover:text-cyan-500",children:n.jsx(o.ltd,{})})]})]})}N.displayName="SheetHeader",l.forwardRef(({className:e,...t},r)=>n.jsx(h.Dx,{ref:r,className:(0,u.cn)("text-lg font-semibold text-foreground",e),...t})).displayName=h.Dx.displayName,l.forwardRef(({className:e,...t},r)=>n.jsx(h.dk,{ref:r,className:(0,u.cn)("text-sm text-muted-foreground",e),...t})).displayName=h.dk.displayName},5154:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(5344),a=r(3729),i=r(9558);function s({children:e,...t}){let[r,s]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{s(!0)},[]),r)?n.jsx(i.f,{...t,children:e}):null}},1453:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var n=r(6815),a=r(9377);function i(...e){return(0,a.m6)((0,n.W)(e))}},8026:(e,t,r)=>{"use strict";let{createProxy:n}=r(6843);e.exports=n("/home/siyu/Work/portfolio/portfolio/node_modules/next/dist/client/link.js")},3910:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(5036);function a({children:e}){return n.jsx("div",{className:"min-h-[calc(100vh-190px)]",children:e})}r(2)},671:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>V});var n,a,i=r(5036),s=r(2);let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(a&&(a+=" "),a+=n);else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(n&&(n+=" "),n+=t);return n};var c=r(2245);let d=(n="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",a={variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}},e=>{var t;if((null==a?void 0:a.variants)==null)return l(n,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:r,defaultVariants:i}=a,s=Object.keys(r).map(t=>{let n=null==e?void 0:e[t],a=null==i?void 0:i[t];if(null===n)return null;let s=o(n)||o(a);return r[t][s]}),c=e&&Object.entries(e).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return l(n,s,null==a?void 0:null===(t=a.compoundVariants)||void 0===t?void 0:t.reduce((e,t)=>{let{class:r,className:n,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...c}[t]):({...i,...c})[t]===r})?[...e,r,n]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)});function u({className:e,variant:t,...r}){return i.jsx("div",{className:(0,c.cn)(d({variant:t}),e),...r})}var m=r(8026),p=r.n(m),f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=s.createContext&&s.createContext(f),x=["attr","size","title"];function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function y(e){var t=t=>{var r,{attr:n,size:a,title:i}=e,o=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,x),l=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:r,style:b(b({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&s.createElement("title",null,i),e.children)};return void 0!==h?s.createElement(h.Consumer,null,e=>t(e)):t(f)}let j=[{role:"Junior Data Analyst Co-op",time:"May 2023 - Aug 2023",desc:"Authored a manuscript for a peer-reviewed research paper that will be published on Nature Scientific Data,        actively contributing to the cited research in the data science community.        Implemented an ETL pipeline using Python, resulting in a 50% increase in data acquisition speed and a 25%        reduction in processing time, ensuring continuous updates to the dataset.",tech:["Python","Pandas","boto3","SOAP API"]},{role:"Full Stack Developer",time:"Mar 2019 - Oct 2019",desc:"Designed and deployed a scalable architecture using Spring Boot, integrating an MQTT server with web services,         resulting in a 7% cost savings for the pipeline project and a significant reduction in on-site maintenance.        Developed a suite of cost-effective front-end applications for pipeline engineers, leveraging Vue.js for an intuitive        and responsive user interface. This effort contributed to substantial savings of up to 100,000 CNY.",tech:["Java","Spring Boot","Vue.js","Vuex","MQTT","MySQL","RabbitMQ"]},{role:"Full Stack Developer",time:"Mar 2018 - Mar 2019",desc:"Spearheaded the design and development of a highly successful furniture shop management system, contributing        to a remarkable 15% increase in company turnover specifically attributed to furniture sales.        Played a crucial role in bug-fixing for both front-end and back-end applications, leading to a 20% reduction in        the number of customer issues escalated. This significantly enhanced the overall customer experience.",tech:["Java","Spring Boot","React","MySQL"]}],w=[{name:"Synthetic Data Generation with Diffusion Models",time:"Jan 2023 - Apr 2023",desc:"Led a collaborative research initiative to produce high-quality synthetic datasets for CIFAR-10, ImageNet, and        a melanoma-focused medical dataset, achieving exceptional Inception Score (IS) and Fr\xe9chet Inception Distance        (FID) scores.        Recognized for innovation, winning the university’s prestigious Innovation Prize and a $2,500 award.",link:"https://www.sfu.ca/computing/current-students/graduate-students/academic-programs/professional-master-of-science-in-computer-science/project-showcase/is-seeing-still-not-necessarily-believing-.html"},{name:"Parkinson’s disease diagnosis using hand motion detection",time:"May 2021 - Sept 2021",desc:"Developed a Parkinson’s disease diagnostic system that utilizes hand motion detection and computer vision        techniques such as Faster R-CNN and ResNet18.        Constructed a dataset containing over 2000 annotated images of hand keypoints using the DeepLabCut tool.        Achieved low finger recognition error rate of less than 20 pixels, demonstrating high recognition accuracy with        images sized 1024 \xd7 1024."}];function N(e){var t;return(t={tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"},child:[]},{tag:"path",attr:{d:"M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"},child:[]}]},e=>s.createElement(y,g({attr:b({},t.attr)},e),function e(t){return t&&t.map((t,r)=>s.createElement(t.tag,b({key:r},t.attr),e(t.child)))}(t.child)))(e)}let k=s.forwardRef(({className:e,...t},r)=>i.jsx("div",{ref:r,className:(0,c.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));k.displayName="Card";let P=s.forwardRef(({className:e,...t},r)=>i.jsx("div",{ref:r,className:(0,c.cn)("flex flex-col space-y-1.5 p-6",e),...t}));P.displayName="CardHeader";let O=s.forwardRef(({className:e,...t},r)=>i.jsx("h3",{ref:r,className:(0,c.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));O.displayName="CardTitle";let S=s.forwardRef(({className:e,...t},r)=>i.jsx("p",{ref:r,className:(0,c.cn)("text-sm text-muted-foreground",e),...t}));S.displayName="CardDescription";let C=s.forwardRef(({className:e,...t},r)=>i.jsx("div",{ref:r,className:(0,c.cn)("p-6 pt-0",e),...t}));C.displayName="CardContent";let z=s.forwardRef(({className:e,...t},r)=>i.jsx("div",{ref:r,className:(0,c.cn)("flex items-center p-6 pt-0",e),...t}));function E(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{id:"experience",className:"grid place-items-center",children:[i.jsx("div",{className:"sticky top-0 backdrop-blur z-10 py-3 mb-10 w-full md:hidden",children:i.jsx("strong",{className:"p-3 ml-3 text-2xl",children:"Experience"})}),j.map((e,t)=>(0,i.jsxs)(k,{className:"w-full md:w-3/5 mb-12 bg-transparent border-none shadow-transparent transition duration-300 ease-in-out dark:hover:bg-slate-800/50 hover:bg-white/50 hover:shadow-xl",children:[(0,i.jsxs)(P,{children:[i.jsx(O,{children:e.role}),i.jsx(S,{children:e.time})]}),i.jsx(C,{children:i.jsx("p",{children:e.desc})}),i.jsx(z,{className:"flex-wrap justify-start gap-4 bg-transparent",children:e.tech.map(e=>i.jsx(u,{variant:"outline",className:"text-opacity-50 text-xs bg-[#41cc92] bg-opacity-70",children:e},e))})]},e.role+t))]},"#experience"),(0,i.jsxs)("section",{id:"projects",className:"grid place-items-center",children:[i.jsx("div",{className:"sticky top-0 backdrop-blur z-10 py-3 mb-10 w-full md:hidden",children:i.jsx("strong",{className:"p-3 ml-3 text-2xl",children:"Projects"})}),w.map(e=>(0,i.jsxs)(k,{className:"w-full md:w-3/5 mb-12 bg-transparent border-none shadow-transparent transition duration-300 ease-in-out dark:hover:bg-slate-800/50 hover:bg-white/50 hover:shadow-xl",children:[(0,i.jsxs)(P,{children:[i.jsx(O,{children:e.name}),i.jsx(S,{children:e.time})]}),i.jsx(C,{children:i.jsx("p",{children:e.desc})}),i.jsx(z,{className:"flex-wrap justify-end gap-4",children:e.link&&(0,i.jsxs)(p(),{href:e.link,className:"flex justify-start items-center gap-1 text-sm underline transition duration-500 hover:text-sky-700",target:"_blank",children:["Project Page ",i.jsx(N,{})]})})]},e.name))]})]})}z.displayName="CardFooter";let M=(0,r(6843).createProxy)(String.raw`/home/siyu/Work/portfolio/portfolio/src/components/aboutme/navbar.tsx`),{__esModule:_,$$typeof:A}=M,D=M.default;function R(){return(0,i.jsxs)("div",{className:"md:flex w-full md:w-auto h-screen",children:[i.jsx("div",{className:"hidden md:flex md:w-1/5",children:i.jsx(D,{})}),i.jsx("div",{className:"w-full md:w-4/5 animate-fade-up animate-ease-in-out",children:i.jsx(E,{})})]})}function V(){return i.jsx("div",{children:i.jsx(R,{})})}},1972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5036);let a=(0,r(6843).createProxy)(String.raw`/home/siyu/Work/portfolio/portfolio/src/components/navbar/main-nav.tsx`),{__esModule:i,$$typeof:s}=a,o=a.default;function l({children:e}){return(0,n.jsxs)("div",{className:"mx-auto w-full md:w-9/12",children:[n.jsx(o,{}),n.jsx("main",{className:"min-h-[calc(100vh-190px)]",children:e})]})}r(2)},7358:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>l});var n=r(5036);r(2),r(5023);let a=(0,r(6843).createProxy)(String.raw`/home/siyu/Work/portfolio/portfolio/src/components/theme-provider/theme-provider.tsx`),{__esModule:i,$$typeof:s}=a,o=a.default,l={title:"Siyu An",description:"Siyu An's Portfolio"};function c({children:e}){return n.jsx("html",{lang:"en",className:"scroll-smooth",children:n.jsx("body",{className:"scroll-smooth bg-cover bg-center",children:n.jsx(o,{attribute:"class",defaultTheme:"dark",disableTransitionOnChange:!0,children:e})})})}},2245:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var n=r(990),a=r(1774);function i(...e){return(0,a.m6)((0,n.W)(e))}},2889:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)("/portfolio",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,488,977,345],()=>r(5890));module.exports=n})();