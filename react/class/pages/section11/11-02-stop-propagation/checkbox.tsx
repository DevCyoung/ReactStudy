import React from "react";

export default function SimpleCheckBox(){
    
    const qqq1 = (event: any) => {
        alert("클릭 타이틀 Check box11");        
    }

    const qqq2 = (event: any) => {
        event.stopPropagation();        
        alert("클릭 타이틀 Check box22");        
    }


    return (
        <span onClick={qqq1}> <input type = "checkbox" onClick={qqq2}></input></span>
    )
}
