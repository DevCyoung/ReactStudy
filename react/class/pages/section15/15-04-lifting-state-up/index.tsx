import {useState} from "react"
import SimpleChild1 from "../../../src/components/units/15-lifting-state-up/child2"
import SimpleChild2 from "../../../src/components/units/15-lifting-state-up/child1"

export default function Counter(){

    const [count, setCount] = useState(0) //react에서 제공하는기능

    const onClickCount = () => {
        setCount(prev => prev + 1);
    }

    //부모요소가 있어야함
    return (
        <div>
            <SimpleChild1 count={count} onClickCount={onClickCount}/>
            <div>========</div>            
            <SimpleChild2 count={count} setCount={setCount} />            
        </div>
    )
}

