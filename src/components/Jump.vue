<template>
    <div class="jump">
        <h3>📆 Pilih hari</h3>
        <p>Pilih hari yang dituju</p>
        <ul>
            <a href="#Senin"><li>Senin</li></a>
            <a href="#Selasa"><li>Selasa</li></a>
            <a href="#Rabu"><li>Rabu</li></a>
            <a href="#Kamis"><li>Kamis</li></a>
            <a href="#Jumat"><li>Jumat</li></a>
            <a href="#Sabtu"><li>Sabtu</li></a>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Jump',
};
</script>

<style lang="scss" scoped>
ul {
    li {
        margin: 0;
    }
}
</style>
