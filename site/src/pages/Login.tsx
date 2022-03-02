import { IonCard } from "@ionic/react"
import LoginForm from "../components/auth/LoginForm"
import { Page } from "../components/layout/Layout"

const Login = () => {
    return (
        <Page title="Login" description="Log ind og få adgang til vores sang arkiv">
            <IonCard>
                <LoginForm>
                    
                </LoginForm>
            </IonCard>
        </Page>
    )
}

export default Login