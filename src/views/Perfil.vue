<template>
    <div v-if="isAuhenticated">
        <h1>Perfil</h1>
        <pre>
            {{ user }}
        </pre>
    </div>    
</template>

<script>
import { useAuth } from '@vueuse/firebase'

export default {
    name: 'PerfilVue',
    setup(){
        const {user,isAuhenticated} = useAuth()

        return {user, isAuhenticated}
    }
}
</script>

<style>

</style>