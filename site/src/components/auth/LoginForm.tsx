import { IonButton, IonInput, IonItem, IonLabel, IonList } from "@ionic/react"
import { useRef } from "react"
import { useAuth } from "./AuthProvider"
import axios from "axios"

const LoginForm: React.FC = () => {
    const { loginData, setLoginData } = useAuth()
    const usernameRef = useRef<HTMLIonInputElement>(null)
    const passwordRef = useRef<HTMLIonInputElement>(null)

    const handleLogin = async () => {
        console.log(usernameRef.current!.value, passwordRef.current!.value);
        let formData: any = new FormData()
        formData.append("username", usernameRef.current!.value)
        formData.append("password", passwordRef.current!.value)
        let url = "https://api.mediehuset.net/token"
        let result = await axios.post(url, formData)
    }

    const handleSessionData = (res: any) => {
        if (!res.message) {
            setLoginData(res)
            sessionStorage.setItem("token", JSON.stringify(res))
        }
    }

    return (
        <>
            {!loginData ? (

                <IonList>
                    <IonItem>
                        <IonLabel>Brugernavn:</IonLabel>
                        <IonInput ref={usernameRef}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Adgangskode:</IonLabel>
                        <IonInput ref={passwordRef} type="password"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonButton onClick={handleLogin}>Login</IonButton>
                    </IonItem>
                </IonList>
            )
                : null
            }
        </>
    )
}

export default LoginForm