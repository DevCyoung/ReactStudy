import { useRouter } from "next/router"
import LayoutBanner from "./banner"
import LayoutFotter from "./footer"
import LayoutHedar from "./header"
import LayoutNavigation from "./navigation"
import { RotateLeftOutlined } from "@ant-design/icons"

interface ILayoutProps {
    children: JSX.Element
}

const HIDDEN_HEADERS = [
    "/section/13/13-01-library-icon",
    "/section13/13-02-library-star"
];

export default function Layout(props: ILayoutProps): JSX.Element {

    const router = useRouter();

    const isHedden:boolean = HIDDEN_HEADERS.includes(router.asPath)

    return (
        <div>
            {isHedden || <LayoutHedar />}
            <LayoutBanner />
            <LayoutNavigation />

            <div style={{ height: "500px", display: "flex" }}>
                <div style={{ width: "30%", backgroundColor: "orange" }}> 사이드바 </div>
                <div style={{ width: "70%", backgroundColor: "aqua" }}> {props.children} </div>
            </div>


            <LayoutFotter />
        </div>
    )
}