<template>
    <div class="local">
    <button @click="newLocale('en-US')" :class="locale === 'English' ? 'active' : ''">
        <span>EN</span>
    </button>
    <button @click="newLocale('ru-RU')" :class="locale === 'Русский' ? 'active' : ''">
        <span> RU </span>
    </button>
    </div>
</template>

<script>
import useLocal from "src/composition/V3/useLocal"
export default {
    setup(){
        const {locale, newLocale} = useLocal();
        return {
            locale,
            newLocale,
        }
    }
}
</script>

<style>

</style>