<template>
  <label class="btn btn-primary" v-if="!disabled">
    <md-icon :icon="icons.plus"></md-icon>
    <input v-show="false" type="file" @change="handleFileChange">
  </label>
</template>

<script>
export default {
  name: 'FileInput',
  props: {
    value: {
      type: [File, null],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      isFileInputOpen: false
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      this.$emit('input', file);
      this.isFileInputOpen = false;
    },
  }
};
</script>