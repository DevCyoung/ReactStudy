import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client"

interface IApolloProviterProps {
    children: JSX.Element
}

export default function Apollo(props: IApolloProviterProps): JSX.Element {

    const client = new ApolloClient({
        uri: "http://backend-practice.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache // 컴퓨터에다가 백엔드에서 받아온 데이터 임시로 저장해놓기
    })

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
