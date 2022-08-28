<template>
    <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.4525 6.86299C38.1358 9.07409 39.9775 10.1796 40.9888 12.0008C42 13.8219 42 16.0331 42 20.4553V27.5534C42 31.9716 42 34.1806 40.9903 35.9996C39.9806 37.8185 38.1415 38.9225 34.4633 41.1305L28.5367 44.6883C24.8585 46.8963 23.0194 48.0003 20.9995 48C18.9797 47.9997 17.1397 46.8952 13.4597 44.6861L7.54751 41.137C3.86417 38.9259 2.0225 37.8204 1.01125 35.9992C0 34.1781 -3.21582e-08 31.967 0 27.5447L5.16475e-08 20.4466C8.37876e-08 16.0284 1.10039e-07 13.8194 1.00969 12.0004C2.01938 10.1815 3.85848 9.0775 7.53669 6.86948L13.4633 3.31174C17.1415 1.10372 18.9806 -0.000289841 21.0005 5.70773e-08C23.0203 0.000289955 24.8603 1.10483 28.5403 3.31391L34.4525 6.86299Z" 
        :fill="fill"/>
        <text v-if="text" x="50%" y="29" class="text" text-anchor="middle">{{text}}{{textAfter}}</text>
    </svg>

</template>

<script>
export default {
    props: {
        fill: {
            type: String,
            default: '#2CCCFF'
        },
        text: {
            type: [String, Number],
            default: undefined
        },
        textAfter: {
            type: String,
            default: ''
        }
    }

}
</script>

<style lang="scss" scoped>
    .text {
        @apply tw-text-white tw-text-xs;
        fill: #fff;
        font-size: 14px;
    }
</style>