<template>
  <div class="home">
    home
    <o-button type="primary">按钮</o-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import {Button} from 'userty-design';
// import 'userty-design/lib/button/style';

@Component({
  components: {
    HelloWorld
  },
})
export default class Home extends Vue {}
</script>
