import { useQuery, gql } from '@apollo/client'
import { jsx } from '@emotion/react';
import type { IQuery, IQueryFetchBoardArgs } from '../../../src/commons/types/generated/types';
import { useState } from 'react';

//쿼리를담을 변수

//목록을전체 다가져오기
//10개씩 날라오는이유 백엔드에서 그냥 그렇게 만들어서
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int){
    fetchBoards (page: $page){
      _id
      writer
      title
      contents
    }
  }
`

const PAGE_COUNT: number = 10;

export default function StaticRoutingPage(): JSX.Element {

    //쿼리문은 {}
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(FETCH_BOARDS);

    const [pageOffset, setPageOffset] = useState(0);

    //const [count, setCount] = useState(0) //react에서 제공하는기능

    console.log(data?.fetchBoards);

    //const onClick1 = async () : Promise<void> => {
    //    await refetch({page : 1})
    //}

    const onClickNumber = (event: MouseEvent<HTMLSpanElement> ): void => {

        console.log("daddasdad");

        console.log(`${event.currentTarget.id} hello world!`);

        refetch({
            page: Number(event.currentTarget.id)
        })

        console.log("daddasdad");
    }

    const onClickNextPage = (event: MouseEvent<HTMLSpanElement> ): void => {            
        let offset: number = pageOffset;

        if (event.currentTarget.id === "+")
        {
            console.log("다음페이지");            
            offset++;
        }

        else if (event.currentTarget.id === "-")
        {
            console.log("이전페이지");
            offset--;
        }

        if (offset < 0 )
        {
            return ;
        }
        
        setPageOffset(offset);      

        refetch({
            page: Number(offset * PAGE_COUNT + 1)
        })

    }


    return (
        //jsx라서 감싸줘야함
        //이건 자바스크립트야! 알려주기위해서 {}로 감싼다.
        //1 제목 작성자
        <div>            

            <div style={{height: "220px"}}>
                {data?.fetchBoards.map(el => (
                    <div key={el._id} >
                        <span> <input type="checkbox"></input></span>
                        <span style={{ margin: "10px" }}>{el.title}</span>
                        <span style={{ margin: "10px" }}>{el.writer}</span>
                    </div>
                ))}
            </div>

            <div>

                {
                    <button id = "-" onClick={onClickNextPage}>이전</button>
                }
        
                {                                    
                    new Array(PAGE_COUNT).fill(1).map((el, index) =>(
                    <button 
                        key = {index + 1} 
                        id = {String(pageOffset * PAGE_COUNT + (index + 1))}                         
                        onClick={onClickNumber}> {pageOffset * PAGE_COUNT + (index + 1)}                        
                    </button>                    
                    ))
                }

                {
                    <button id = "+" onClick={onClickNextPage}>다음</button>
                }
                
            </div>


        </div>

    )
} 


// import { useQuery, gql } from '@apollo/client'
// import { jsx } from '@emotion/react';
// import type { IQuery, IQueryFetchBoardArgs } from '../../../src/commons/types/generated/types';
// import { useState } from 'react';

// //쿼리를담을 변수

// //목록을전체 다가져오기
// //10개씩 날라오는이유 백엔드에서 그냥 그렇게 만들어서
// const FETCH_BOARDS = gql`
//   query fetchBoards($page: Int){
//     fetchBoards (page: $page){
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `

// const onClickPrevPage = (): void => {

// }

// const onClickNextPage = (): void => {
    
// }

// const PAGE_COUNT: Number = 10;

// export default function StaticRoutingPage(): JSX.Element {

//     //쿼리문은 {}
//     const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(FETCH_BOARDS);

//     const [pageOffset, setPageOffset] = useState(0);

//     //const [count, setCount] = useState(0) //react에서 제공하는기능

//     console.log(data?.fetchBoards);

//     //const onClick1 = async () : Promise<void> => {
//     //    await refetch({page : 1})
//     //}

//     const onClickNumber = (event: MouseEvent<HTMLSpanElement> ): void => {

//         console.log("daddasdad");

//         console.log(`${event.currentTarget.id} hello world!`);

//         refetch({
//             page: Number(event.currentTarget.id)
//         })

//         console.log("daddasdad");
//     }



//     return (
//         //jsx라서 감싸줘야함
//         //이건 자바스크립트야! 알려주기위해서 {}로 감싼다.
//         //1 제목 작성자
//         <div>            

//             <div style={{height: "220px"}}>
//                 {data?.fetchBoards.map(el => (
//                     <div key={el._id} >
//                         <span> <input type="checkbox"></input></span>
//                         <span style={{ margin: "10px" }}>{el.title}</span>
//                         <span style={{ margin: "10px" }}>{el.writer}</span>
//                     </div>
//                 ))}
//             </div>



//             <div>

           

//                 {                                    
//                     new Array(PAGE_COUNT).fill(1).map((el, index) =>(
//                     <button 
//                         key = {index + 1} 
//                         id = {String(pageOffset * 10 + (index + 1))}                         
//                         onClick={onClickNumber}> {pageOffset * 10 + (index + 1)}                        
//                     </button>                    
//                     ))
//                 }

           
                
//             </div>


//         </div>

//     )
// } 