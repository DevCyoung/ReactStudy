interface IExampleProps {
    school : string,
    children : JSX.Element
}


export default function PropsExample(props : IExampleProps) : JSX.Element{
    return (
        <div>
            <div>PropsExample</div>
            <div>철수가 다니는학교는~~? {props.school}</div>
            <div>{props.children }</div>
            <div>PropsExample</div>
        </div>
    )
}