<template>
    <Container>
        <router-link to="/">👈 Kembali ke Home</router-link>
        <h1>⚡ X Teknik Elektronika 2</h1>
        <p>📚 Jadwal pelajaran kelas X TE 2</p>
        <Jump />
        <CurrentTime />
        <div class="table" v-for="jdwal in jadwal">
            <h2 :id="jdwal.hari">📆 {{ jdwal.hari }}</h2>
            <p>📚 Total pelajaran: {{ jdwal.total_mapel }} pelajaran</p>
            <table>
                <tr>
                    <th>🕑 Jam</th>
                    <th>📚 Pelajaran</th>
                    <th>🧑‍🏫 Kode Guru</th>
                    <th>🧖 Kode Ruangan</th>
                </tr>
                <tr v-for="pel in jdwal.mapel">
                    <td>{{ pel.jam }}</td>
                    <td>{{ pel.nama }}</td>
                    <td>{{ pel.kode_guru }}</td>
                    <td>{{ pel.kode_ruangan }}</td>
                </tr>
            </table>
        </div>
        <p class="msg">🙋 ISOMA : Istirahat, Sholat, Makan.</p>
        <p class="msg">📢 Jadwal akan di-update ketika ada perubahan.</p>
    </Container>
</template>

<script lang="ts">
import CurrentTime from '../../components/CurrentTime.vue';
import Container from '../../components/Container.vue';
import Jump from '../../components/Jump.vue';
import jadwal from '../../data/jadwal/x-te-2';

export default {
    name: 'X-TE_2',
    components: { Container, CurrentTime, Jump },
    data() {
        return {
            jadwal,
        };
    },
};
</script>

<style lang="scss">
@import '../../styles/anchor';
@import '../../styles/variable';

table {
    font-family: $lexend;
    border-collapse: collapse;
    width: 100%;
    color: $text-color;
    background: $table-bg;
    border-radius: 15px;
    td,
    th {
        text-align: left;
        padding: 8px;
    }
}
.msg {
    font-size: 12px;
}
</style>
