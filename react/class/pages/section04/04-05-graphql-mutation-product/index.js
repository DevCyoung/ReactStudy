import {useMutation, gql} from '@apollo/client'

//graph ql setting 을 위한 gql

const CREATE_PRODUCT = gql`
                            #반드시 플레이 그라운드와 동일하게 작성
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { #변수타입적는곳
    createProduct(seller: $seller, createProductInput: $createProductInput){            #실제 우리가 전달할 변수적는곳
      _id
      number
      message
    }
  }
`

export default function GraphqlMutation() {

    //실행시키고 싶은함수
    //use는 Hoock 이다.
    const [createProduct] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async () => {
        const result = await createProduct({
          variables: {
            seller: "짱가",
            createProductInput: {
              name: "냠냠단",
              detail: "크로마",
              price: 350
            }
          }
        });
        console.log(result);
    }

    //한줄일 땐 괄호필요없음
    return <button onClick = {onClickSubmit}> GRAPHQL API 요청 하기 </button>
}