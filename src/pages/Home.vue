<template>
    <Container>
        <section class="home">
            <h1>Jadwal Pelajaran SMKN 12 Bandung</h1>
            <div class="separator"></div>
            <p>Silahkan pilih kelas yang dituju.</p>
            <div class="list">
                <ul>
                    <router-link v-for="kls in kelas" :to="{ name: kls.route_name }">
                        <li class="list__nested">{{ kls.name }} ({{ kls.teknik }})</li>
                    </router-link>
                </ul>
            </div>
            <p class="msg">
                [?] Kelasmu tidak terdaftar di list?
                <a href="mailto:me@falcxxdev.ml">Request pendaftaran kelas ke saya sekarang!</a> Jangan lupa untuk
                mengirimkan foto jadwal yang jelas!
            </p>
            <p class="msg">[*] Untuk list & kode guru menyusul.</p>
        </section>
    </Container>
</template>

<script lang="ts">
import Container from '../components/Container.vue';
import kelas from '../data/list-kelas';

export default {
    name: 'Home',
    components: { Container },
    data() {
        return {
            kelas,
        };
    },
};
</script>

<style lang="scss">
@import '../styles/anchor';
@import '../styles/mixin';

.list {
    &__nested {
        margin-bottom: 6px;
    }
}
.home {
    margin-bottom: 28rem;
    @include on-mobile() {
        margin-bottom: 40rem;
    }
    .msg {
        font-size: 12px;
    }
}
</style>
