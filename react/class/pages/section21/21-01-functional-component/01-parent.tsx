import ChildPage from "./02-child"

export default function ParentPage(): JSX.Element {
    return (
        <div>
            {/* <ChildPage count={10}/> */}
            {ChildPage({count: 30})}
        </div>
    )

}