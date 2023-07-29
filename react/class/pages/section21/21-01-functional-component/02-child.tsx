
interface iChildProps {
    count : Number;
}

export default function ChildPage(props: iChildProps): JSX.Element {
    return (
        <div>
            {props.count}    
        </div>
    )

}