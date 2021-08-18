<template>
  <li
    v-clipboard:copy="text"
    v-clipboard:success="onCopied"
    :class="justCopied === type ? 'copied' : ''"
  >
    <o-icon :type="type" :theme="theme" />
    <span class="anticon-class">
      <a-badge :dot="isNew">
        {{ type }}
      </a-badge>
    </span>
  </li>
</template>
<script>
import { Badge } from '../../../node_modules/ant-design-vue';
// import 'ant-design-vue/es/badge/style';
export default {
  components: {
    'a-badge': Badge,
  },
  props: ['type', 'isNew', 'theme', 'justCopied'],
  data() {
    const { type, theme } = this;
    return {
      text:
        theme === 'outlined'
          ? `<o-icon type="${type}" />`
          : `<o-icon type="${type}" theme="${theme}" />`,
    };
  },
  methods: {
    onCopied() {
      this.$emit('copied', this.type, this.text);
    },
  },
};
</script>
