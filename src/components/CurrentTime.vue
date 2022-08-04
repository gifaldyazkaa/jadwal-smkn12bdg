<template>
    <div class="time">
        <h3>🕑 Waktu saat ini</h3>
        <div class="time__content">
            <p>
                Hari
                <b
                    ><code class="day"
                        ><a :href="`#${dateTime.day}`">{{ dateTime.day }}</a></code
                    ></b
                >{{ ' ' }}Pukul <code>{{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.second }}</code> WIB
            </p>
        </div>
    </div>
</template>

<script lang="ts">
const date = new Date();
const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
export default {
    name: 'CurrentTime',
    data() {
        return {
            dateTime: {
                day: days[date.getDay()],
                hours: date.getHours(),
                minutes: date.getMinutes(),
                second: date.getSeconds(),
            },
            timer: null,
        };
    },
    methods: {
        setDateTime() {
            const date = new Date();
            this.dateTime = {
                day: days[date.getDay()],
                hours: date.getHours(),
                minutes: date.getMinutes(),
                second: date.getSeconds(),
            };
        },
    },
    beforeMount() {
        this.timer = setInterval(this.setDateTime, 1000);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    },
};
</script>

<style lang="scss">
.time {
    &__content {
        transition: all 0.2s ease-in-out;
        text-decoration: underline #42b883 3px;
    }
    &__content:hover {
        text-decoration: underline #328e65 4px;
    }
}
</style>
