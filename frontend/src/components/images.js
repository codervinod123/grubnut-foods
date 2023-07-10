
import "./global.css";

import  IMG1 from "../asset/category/1.svg"
import  IMG2 from "../asset/category/2.svg" 
import  IMG3 from "../asset/category/3.svg" 
import  IMG4 from "../asset/category/4.svg" 
import  IMG5 from "../asset/category/5.svg" 
import  IMG6 from "../asset/category/6.svg" 
import  IMG7 from "../asset/category/7.svg" 
import  IMG8 from "../asset/category/8.svg" 
import  IMG9 from "../asset/category/9.svg" 
import  IMG10 from "../asset/category/10.svg" 
import  IMG11 from "../asset/category/11.svg" 
import  IMG12 from "../asset/category/12.svg" 
import  IMG13 from "../asset/category/13.svg" 
import  IMG14 from "../asset/category/14.svg" 
import  IMG15 from "../asset/category/15.svg" 
import  IMG16 from "../asset/category/16.svg" 
import  IMG17 from "../asset/category/17.svg" 
import  IMG18 from "../asset/category/18.svg" 
import  IMG19 from "../asset/category/19.svg" 
import  IMG21 from "../asset/category/21.svg" 
import  IMG22 from "../asset/category/22.svg" 
import  IMG23 from "../asset/category/23.svg" 
import  IMG24 from "../asset/category/24.svg" 
import  IMG25 from "../asset/category/25.svg" 
import  IMG26 from "../asset/category/26.svg" 
import  IMG27 from "../asset/category/27.svg" 
import  IMG28 from "../asset/category/28.svg" 
import  IMG29 from "../asset/category/29.svg" 
import  IMG30 from "../asset/category/30.svg" 
import  IMG31 from "../asset/category/31.svg" 
import  IMG32 from "../asset/category/32.svg" 
import  IMG33 from "../asset/category/33.svg" 
import  IMG34 from "../asset/category/34.svg" 
import  IMG35 from "../asset/category/35.svg" 
import  IMG36 from "../asset/category/36.svg" 
import  IMG37 from "../asset/category/37.svg" 
import  IMG38 from "../asset/category/38.svg" 
import  IMG39 from "../asset/category/39.svg" 
import  IMG40 from "../asset/category/40.svg" 
import  IMG41 from "../asset/category/41.svg" 
import  IMG42 from "../asset/category/42.svg" 
import  IMG43 from "../asset/category/43.svg" 
import  IMG44 from "../asset/category/44.svg" 
import  IMG45 from "../asset/category/45.svg" 

const Images=
[
    IMG1,IMG2,IMG3,IMG4 ,IMG5 ,IMG6 ,IMG7 ,IMG8 ,IMG9,IMG10,IMG11,IMG12,IMG13
    ,IMG14,IMG15,IMG16,
    IMG17 ,IMG18,IMG19,IMG21,IMG22,IMG23,IMG24,IMG25,IMG26,IMG27,IMG28,IMG29,IMG30,IMG31,IMG32,IMG33,
    IMG34,IMG35,IMG36,IMG37,IMG38,IMG39,IMG40,IMG41,IMG42,IMG43,IMG44,IMG45
];




const Category=()=>{
    return(
        <>
           <div className='images img px-16 flex  py-4 gap-[55px] overflow-auto'>
                 {
                    Images.map((img,index)=>{
                        return(
                            <div className="flex flex-col gap-[12px]" key={index}>
                                 <img  src={img} alt={`img${index}`} style={{width:"45px"}} />
                                 <span className="text-xs">{`burger${index}`}</span>
                             </div>
                        )
                    }) 
                 }
           </div>
        </>
    )
}


export default Category;