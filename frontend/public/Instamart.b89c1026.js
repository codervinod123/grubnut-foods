var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire29b1;e.register("5KNkF",function(i,t){Object.defineProperty(i.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(i.exports,"default",{get:()=>r,set:void 0,enumerable:!0,configurable:!0});var a=e("ayMG0"),n=e("acw62");let o=({description:e,heading:i,isVisible:t,setVisibility:o})=>{let[r,s]=(0,n.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"border-2 border-gray-600 px-8 py-4",children:[t?(0,a.jsx)("button",{className:"px-3 py-1 text-white font-bold bg-purple-600 rounded ",onClick:()=>{o(!1)},children:"Hide"}):(0,a.jsx)("button",{className:"px-3 py-1 text-white font-bold bg-purple-600 rounded ",onClick:()=>{o(!0)},children:"Show"}),(0,a.jsx)("h1",{className:"text-gray-100 font-bold bg-gray-800 w-20 rounded my-4 flex justify-center",children:i}),t&&(0,a.jsx)("p",{children:e})]})})};var r=()=>{let[e,i]=(0,n.useState)({about:!0,contact:!1,carrier:!1});return(0,a.jsx)("div",{className:"flex p-4",children:(0,a.jsxs)("div",{className:"flex flex-col   w-full px-8 py-4",children:[(0,a.jsx)("div",{className:"flex justify-center items-center bg-gray-200 my-4 rounded",children:(0,a.jsx)("h1",{className:"flex justify-center text-[30px] font-bold text-purple-500",children:"I have Implemented Lazy Loading over here"})}),(0,a.jsx)(o,{setVisibility:()=>{i({about:!0,contact:!1,carrier:!1})},isVisible:e.about,heading:"about",description:"Lazy loading in React is a technique used to improve the performance of your application by loading components only when they are needed, instead of loading all components upfront. This is particularly beneficial for large applications with many components, as it helps reduce the initial load time and optimizes the usage of network resources."}),(0,a.jsx)(o,{setVisibility:()=>{i({about:!1,contact:!0,carrier:!1})},isVisible:e.contact,heading:"contact",description:"Lazy loading in React is a technique used to improve the performance of your application by loading components only when they are needed, instead of loading all components upfront. This is particularly beneficial for large applications with many components, as it helps reduce the initial load time and optimizes the usage of network resources."}),(0,a.jsx)(o,{setVisibility:()=>{i({about:!1,contact:!1,carrier:!0})},isVisible:e.carrier,heading:"carrier",description:"Lazy loading in React is a technique used to improve the performance of your application by loading components only when they are needed, instead of loading all components upfront. This is particularly beneficial for large applications with many components, as it helps reduce the initial load time and optimizes the usage of network resources."})]})})}});
//# sourceMappingURL=Instamart.b89c1026.js.map
