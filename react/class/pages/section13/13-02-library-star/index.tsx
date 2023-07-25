
import React, { useState } from 'react';
import { Rate } from 'antd';

//const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// const App: React.FC = () => {
//   const [value, setValue] = useState(3);

//   return (
//     <span>
//       <Rate tooltips={desc} onChange={setValue} value={value} />
//       {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
//     </span>
//   );
// };

// export default App;

export default function Rank(): JSX.Element{    
    const [value, setValue] = useState(4);


    //Html OnChange가 아니다
    //1단계방식
    // const onChangeStar = (value: number) : void => {
    //     setValue(value);
    // }
  
    // return (
    //   <span>
    //     <Rate onChange={onChangeStar} value={value} /> 
    //     {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
    //   </span>
    // );




    //Html OnChange가 아니다
    //2단계방식
    // const onChangeStar = (value: number) : void => setValue(value);    
  
    // return (
    //   <span>
    //     <Rate onChange={onChangeStar} value={value} /> 
    //     {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
    //   </span>
    // );

    //3단계방식
    //const onChangeStar = (value: number) : void => setValue(value);    
  
    return (
      <span>
        <Rate onChange={setValue} value={value} /> 
        {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
      </span>
    );
}  