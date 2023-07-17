export default function Counter(){

    //nameConvention ... function OnClick~~~~
    function OnClickCountUp(){
        const count = Number(document.getElementById("qqq").innerText) + 1; //id가 qqq인것을 가져와죠
        document.getElementById("qqq").innerText = count;        
    }

    function OnClickCountDown(){
        const count = Number(document.getElementById("qqq").innerText) - 1; //id가 qqq인것을 가져와죠
        if (count < 0)
        {
            return;
        }
        document.getElementById("qqq").innerText = count;
    }

    //부모요소가 있어야함
    return (
        <div>
            <div id="qqq">0</div>
            <button onClick={OnClickCountUp}>카운트 올리기!!</button>
            <button onClick={OnClickCountDown}>카운트 내리기!!</button>
        </div>
    )
}

