<template>
  <div class="tw-space-y-4-1">
    <PollsOption
      v-for="option in calculatedOpts"
      :key="option.uuid"
      :option="option"
      :selected="option.selected"
      :isWinner="maxVoteId === option.uuid"
      :showResults="!!votedId"
      @click="onVote(option.uuid)"
    />
  </div>
</template>

<script>
import PollsOption from './PollsOption.vue';

export default {
  props: {
    options: {
      required: true,
      type: Array,
    },
    votedId: {
      type: String,
    },
    votesCount: {
      default: 0,
      type: Number,
    },
  },
  emits: ['vote'],
  computed: {
    calculatedOpts() {
      return this.options.map((opt) => {
        const perc = (opt.votes_count / this.votesCount) * 100;

        return {
          ...opt,
          perc,
          selected: this.votedId === opt.uuid,
        };
      });
    },
    maxVoteId() {
      let maxId = null;
      // let max = 0;
      
      this.options.forEach(opt => {if(opt.uuid === this.votedId)maxId=opt.uuid})
      // this.calculatedOpts.forEach((opt) => {
      //   console.log(opt + ":")
      //   if (opt.perc > max) {
      //     max = opt.perc;
      //     maxId = opt.uuid;
      //   }
      // });
      return maxId;
    },
  },
  methods: {
    onVote(uuid) {
      if(!!this.maxVoteId) return;
      this.$emit('vote', uuid);
    },
  },
  components: {
    PollsOption,
  },
};
</script>

<style>
</style>
