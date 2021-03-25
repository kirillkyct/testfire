<template>
    <Roul :roulContent="roulContent" />
</template>

<script>
import Roul from "@/components/Roul"

export default {
    components: { Roul },

    data() {
        return {
            roulContent: {
                items: [
                    {
                        class: 'item-type-1',
                        img: '/img/weapon_1.webp',
                        title: 'Desert Eagle | The Bronze 1',
                    },

                    {
                        class: 'item-type-2',
                        img: '/img/weapon_2.webp',
                        title: 'Desert Eagle | The Bronze 2',
                    },

                    {
                        class: 'item-type-3',
                        img: '/img/weapon_3.webp',
                        title: 'Desert Eagle | The Bronze 3',
                    },

                    {
                        class: 'item-type-4',
                        img: '/img/weapon_4.webp',
                        title: 'Desert Eagle | The Bronze 4',
                    },

                    {
                        class: 'item-type-1',
                        img: '/img/weapon_1.webp',
                        title: 'Desert Eagle | The Bronze 1',
                    },

                    {
                        class: 'item-type-2',
                        img: '/img/weapon_2.webp',
                        title: 'Desert Eagle | The Bronze 2',
                    },

                    {
                        class: 'item-type-3',
                        img: '/img/weapon_3.webp',
                        title: 'Desert Eagle | The Bronze 3',
                    },

                    {
                        class: 'item-type-4',
                        img: '/img/weapon_4.webp',
                        title: 'Desert Eagle | The Bronze 4',
                    },

                    {
                        class: 'item-type-1',
                        img: '/img/weapon_1.webp',
                        title: 'Desert Eagle | The Bronze 1',
                    },

                    {
                        class: 'item-type-2',
                        img: '/img/weapon_2.webp',
                        title: 'Desert Eagle | The Bronze 2',
                    },

                    {
                        class: 'item-type-3',
                        img: '/img/weapon_3.webp',
                        title: 'Desert Eagle | The Bronze 3',
                    },

                    {
                        class: 'item-type-4',
                        img: '/img/weapon_4.webp',
                        title: 'Desert Eagle | The Bronze 4',
                    },

                    {
                        class: 'item-type-1',
                        img: '/img/weapon_1.webp',
                        title: 'Desert Eagle | The Bronze 1',
                    },

                    {
                        class: 'item-type-2',
                        img: '/img/weapon_2.webp',
                        title: 'Desert Eagle | The Bronze 2',
                    },

                    {
                        class: 'item-type-3',
                        img: '/img/weapon_3.webp',
                        title: 'Desert Eagle | The Bronze 3',
                    },

                    {
                        class: 'item-type-4',
                        img: '/img/weapon_4.webp',
                        title: 'Desert Eagle | The Bronze 4',
                    },

                    {
                        class: 'item-type-1',
                        img: '/img/weapon_1.webp',
                        title: 'Desert Eagle | The Bronze 1',
                    },

                    {
                        class: 'item-type-2',
                        img: '/img/weapon_2.webp',
                        title: 'Desert Eagle | The Bronze 2',
                    },

                    {
                        class: 'item-type-3',
                        img: '/img/weapon_3.webp',
                        title: 'Desert Eagle | The Bronze 3',
                    },

                    {
                        class: 'item-type-4',
                        img: '/img/weapon_4.webp',
                        title: 'Desert Eagle | The Bronze 4',
                    },

                    {
                        class: 'item-type-1',
                        img: '/img/weapon_1.webp',
                        title: 'Desert Eagle | The Bronze 1',
                    },

                    {
                        class: 'item-type-2',
                        img: '/img/weapon_2.webp',
                        title: 'Desert Eagle | The Bronze 2',
                    },

                    {
                        class: 'item-type-3',
                        img: '/img/weapon_3.webp',
                        title: 'Desert Eagle | The Bronze 3',
                    },
                ],

                prize: {
                    class: 'item-type-5',
                    img: '/img/weapon_3.webp',
                    title: 'Выигрыш',
                },
            }
        }
    }
}
</script>

<style lang="scss">
    body {
        background: #171718;
    }
</style>