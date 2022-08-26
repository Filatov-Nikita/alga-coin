<template>
    <div class="dropdown" :class="{ active: dropdown }">
        <div @click="dropdown = !dropdown" class="dropdown__head">
            <span>

                {{ selection?.label }}
            </span>
            <q-icon name="r_keyboard_arrow_down" size="15px" class="arrow-icon" />
        </div>
        <div class=" dropdown__body" :class="{ active: dropdown }">
            <ul class="options">
                <li v-for="option in options" :key="option.id" class="option" :class="{disabled:selection.id === option.id}" @click="setSelect(option.id)">{{option.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'base-select',
    props: {
        options: {
            type: Array,
            requred: true
        }
    },
    setup(props){
        const dropdown = ref(false)
        const selection = ref({
        })
        selection.value = props.options[0]
        return {
            selection,
            dropdown,
            setSelect: function (id) {
                this.selection = props.options.find(option=>option.id === id)
                console.log(selection);
                dropdown.value = false
            },
        }
    }
}
</script>

<style lang="scss" scoped>

.dropdown {
    $this: &;
    margin: 0;
    max-width: 130px;
    width: 100%;
    position: relative;

    &__head {
        cursor: pointer;
        font-size: 12px;
        line-height: 140%;
        display: flex;
        align-items: center;
        text-align: right;

        color: #BEC3FF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #333653;
        backdrop-filter: blur(7px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 6px;
        padding: 6px 9px;

        .arrow-icon {
            transition: all .2s ease;

        }
    }

    &__body {
        border-bottom: none;
        left: 0;
        max-height: 0;
        overflow-y: hidden;
        position: absolute;
        right: 0;
        z-index: 10;
        font-size: 12px;
        line-height: 140%;
        background: theme("colors.dark-blue-cover");
        color: #BEC3FF;

        &.active {
            max-height: 100vh;
        }

        & > .options {
            border-radius: 4px;
            border: 1px solid #333653;
            list-style-type: none;
            margin: 0;
            padding: 0;
            position: relative;
        }
    }

    &.active {
        #{$this}__head {
            .arrow-icon {

                transform: rotate(180deg);
            }
        }
    }

    .option {
        cursor: pointer;
        padding: 6px 9px;
    }
}
</style>