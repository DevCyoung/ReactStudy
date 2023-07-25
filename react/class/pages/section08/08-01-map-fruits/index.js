//컴퍼넌트위에 만든이유 컴퍼넌트가 리렌더링되도 다시 안만들어짐

const FRUITS = [
    { number: 1,  title: "레드향"},
    { number: 2,  title: "한라봉"},
    { number: 3,  title: "사과"},
    { number: 4,  title: "뀰"},
    { number: 5,  title: "키핑"},
    { number: 6,  title: "카약"},
    { number: 7,  title: "오렌지"},
    { number: 8,  title: "아보카도"},
    { number: 9,  title: "키위"},
    { number: 10, title: "샤인머스켓"},
];

export default function MapFruitsPage() {
    //가장 기본예제
    //const aaa = [<div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 산청딸기</div>];

    const bbb = FRUITS.map( (el) => (<div>{el.number} {el.title}</div>));
    console.log(FRUITS);

    return (
        <div>
            <div>{bbb}</div>
            =============================
            {/*3번째 실무 효율적인 렌더링 예제*/}
            <div>{FRUITS.map( (el) => (<div>{el.number} {el.title}</div>))}</div>            
        </div>
    )
}