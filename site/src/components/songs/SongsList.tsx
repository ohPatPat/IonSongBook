import { IonItem, IonList } from "@ionic/react"
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../auth/AuthProvider";

interface iSongList {
    id: number;
    title: string;
    content: string;
    name: string;
    slug: String;
    created: Date
}

const SongsList: React.FC<{ keyword: string }> = ({ keyword }) => {
    const { loginData } = useAuth();
    const [apiData, setApiData] = useState<iSongList[]>()

    useEffect(() => {
        const getData = async () => {
            const option = {
                headers: {
                    Authorization: `Baerer ${loginData.acces_token}`
                }
            }
            const url = 'https://api.mediehuset.net/singonline/songs'
            const result = await axios.get(url, option)
            setApiData(result.data.items)
        }
        getData()
    }, [loginData.acces_token,setApiData])

    const data = useMemo(() => {
        if (!apiData) {
            return (
                []
            )
        }
        if (keyword) {
            return apiData.filter(elm =>
                elm.title.toLowerCase().includes(keyword.toLowerCase()) ||
                elm.name.toLowerCase().includes(keyword.toLowerCase())
            )
        } else {
            return apiData.sort(function(a,b) {return 0.5 - Math.random()}).slice(0,10)
        }
    }, [apiData, keyword])

    return (
        <IonList>
            {data?.map((item) => {
                return (
                    <IonItem key={item.id} href={`/${item.slug}`}>{item.title} - {item.name}</IonItem>
                )
            })}
        </IonList>
    )
}

export default SongsList;