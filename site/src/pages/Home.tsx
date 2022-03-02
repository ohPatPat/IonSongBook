import { IonSearchbar } from "@ionic/react"
import { useRef, useState } from "react";
import { Page } from "../components/layout/Layout"
import SongsList from "../components/songs/SongsList";

const Home: React.FC = () => {
    const [keyword, setKeyword] = useState<string>('')


    const handleSearch = (e: any): void => {
        console.log(e.target.value);
    }


    return (
        <Page title="Velkommen til SingOnlineV2" description="Vælg eller søg eftr en sang">
            <IonSearchbar onIonInput={handleSearch} />
            <SongsList keyword={keyword}/>
        </Page>
    )
}

export default Home