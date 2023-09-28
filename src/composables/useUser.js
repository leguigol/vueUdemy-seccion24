import { auth, firebase } from "../Firebase";
import { useRouter } from "vue-router";

export const useUser = () => {

    const router=useRouter()

    const signIn=async() => {
        try{
            const provider=new firebase.auth.GoogleAuthProvider()
            await auth.signInWithPopup(provider)
            router.push('/perfil')
        }catch(error){
            console.log(error);
        }
    }
    return {signIn}
}