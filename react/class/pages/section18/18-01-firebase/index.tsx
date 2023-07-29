import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore/lite"
import { firebaseApp } from "../../../src/commons/libraries/firebase"

export default function FireBasePage() {

    const onClickSubmit = (): void => {

        //보드라는 서류봉투 가져와
        const board = collection(getFirestore(firebaseApp), "board")

        //어디다가 뭘넣을지
        //보드컬렉션에 머넣을래여
        //기다리겠다 (void)
        void addDoc(board, {
            writer: "영희",
            title: "킷싸마!!!!",
            contents: "반갑습니다!"
        })

    }

    const onClickFetch = async (): Promise<void> => {

        const board = collection(getFirestore(firebaseApp), "board")
        const result = await getDocs(board)
        const datas = result.docs.map(el => el.data());
        console.log(datas);

    }

    return (
        <div>
            <button onClick={onClickSubmit}>등록하기</button>
            <button onClick={onClickFetch}>조회하기</button>
        </div>
    )
}