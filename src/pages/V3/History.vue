<template>
    <div>
        <h2>
            History
        </h2>

        <div class="switch">
            <span class="option active">
                Buy
                <div class="option__line"></div>
            </span>
            <span class="option">
                Withdrawal
                <div class="option__line"></div>
            </span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>








    .switch {
        display: grid;
        grid-template-columns: repeat(2, 100px);
        text-align: center;
        position: relative;
        .option {
            padding-bottom: 20px;
            position: relative;
            $option: &;
            &::after,
            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 4px;
                left: 0;
                bottom: 0;

            }
            &::before {
                background: #000320;
            }
            &::after {
                transition: all 1s ease-in;
                background: #4AD66D;
                opacity: 0;
            }


            &:hover::after {
                opacity: 1;
                transform-origin: left;
                background: #4AD66D;
            }
        }
    }
</style>