<template>
  <button type="button" class="btn" @click='handler'>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    handler: function() {
      this.$emit('click')
    }
  }
}
</script> 

<style lang="scss" scoped>
.btn {
  align-items: center;
  background-color: #ccc;
  color: $white;
  display: inline-flex;
  padding: 10px;
  position: relative;

  @include min-mq(sm) {
    &:hover {
      &::before {
        background-color: currentColor;
        bottom: 0;
        content: '';
        left: 0;
        opacity: 0.3;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
}
</style>
