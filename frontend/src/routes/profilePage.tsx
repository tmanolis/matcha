import { useParams } from "react-router-dom"

export default function Profile() {
    // to type one of the attribute of the objects params
    const params = useParams<{ profileId: string }>();
    console.log(params);
    return (
        <div>
            <h1>Profile Page {params.profileId}</h1>
        </div>
    )

};