import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect } from "react";

interface iPageProps {
    title: string;
    description: string;
    children: any
}


const Page: React.FC<iPageProps> = ({ title, description, children }) => {

    useEffect(() => {
        document.title = title;
        const meta_desc = document.querySelector('meta[name="description"]');
        if (meta_desc) {
            meta_desc.setAttribute("content", description)
        }
    })
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>SingOnlineV2
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ContentWrapper>{children}</ContentWrapper>
            </IonPage>
        </>
    )
}

const ContentWrapper = (props:{children:any}) => {
    return <IonContent>{props.children}</IonContent>
}

export { Page, ContentWrapper }