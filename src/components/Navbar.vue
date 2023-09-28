<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
        <router-link class="navbar-brand" to="/">
            Firestore
        </router-link>
        <div>
            <button class="btn btn-primary">Acceder</button>
            <button class="btn btn-danger">Salir</button>
        </div>
    </div>    
  </nav>
</template>
<script>
import {useUser} from '../composables/useUser'

export default {
    name: 'NavbarVue',
    setup(){
        const {signIn}=useUser()

        return {signIn}
    },
}
</script>


