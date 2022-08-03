<template>
    <Container>
        <router-link to="/">👈 Kembali ke Home</router-link>
        <h1>X Teknik Elektronika 2</h1>
        <p>Jadwal pelajaran kelas X TE 2</p>
        <Jump />
        <div class="table" v-for="jdwal in jadwal">
            <h2 :id="jdwal.hari">{{ jdwal.hari }}</h2>
            <p>Total pelajaran: {{ jdwal.total_mapel }} pelajaran</p>
            <table>
                <tr>
                    <th>Jam</th>
                    <th>Pelajaran</th>
                    <th>Kode Guru</th>
                    <th>Kode Ruangan</th>
                </tr>
                <tr v-for="pel in jdwal.mapel">
                    <td>{{ pel.jam }}</td>
                    <td>{{ pel.nama }}</td>
                    <td>{{ pel.kode_guru }}</td>
                    <td>{{ pel.kode_ruangan }}</td>
                </tr>
            </table>
        </div>
        <p class="msg">[?] ISOMA : Istirahat, Sholat, Makan.</p>
        <p class="msg">[?] Jadwal akan di-update ketika ada perubahan.</p>
    </Container>
</template>

<script lang="ts">
import Container from '../../components/Container.vue';
import Jump from '../../components/Jump.vue';
import jadwal from '../../data/jadwal/x-te-2';

export default {
    name: 'X-TE_2',
    components: { Container, Jump },
    data() {
        return {
            jadwal,
        };
    },
};
</script>

<style lang="scss">
@import '../../styles/anchor';

table {
    font-family: 'Lexend', sans-serif;
    border-collapse: collapse;
    width: 100%;
    color: #fff;
    background-color: rgba(#6485a9, 0.4);
    border-radius: 15px;
    td,
    th {
        // border: rgba(#dddddd, 0.2) solid 8px;
        text-align: left;
        padding: 8px;
        tr {
            &:nth-child(even) {
                background-color: #dddddd;
            }
        }
    }
}
.msg {
    font-size: 12px;
}
</style>
