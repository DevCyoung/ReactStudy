import { ChangeEvent } from "react";

export default function ImageUploadPage(): JSX.Element {

    const onChageFile = (event: ChangeEvent<HTMLInputElement>): void => {

        const file: File | undefined = event.target.files?.[0]

        //배열로 들어오는 이유:
        //type = multiple  일때 여러개 드래그가능
        console.log(file);
    }

    return (
        <div>
            <input type="file" onChange={onChageFile} />
        </div>
    )
}
