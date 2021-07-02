<template>
  <div class="snd-ad">
    <div class="sponsorsWrap">
      <span v-if="!isCN" class="sponsorsTitle">
        {{ isCN ? '赞助商' : 'Sponsors' }}
      </span>
      <ul>
        <!-- <li class="sponsorsItem">
          <a href="https://tipe.io/?ref=ant-design-vue" target="_blank">
            <img height="51" src="https://cdn.tipe.io/tipe/tipe-cat-no-text.svg" alt="tipe" />
          </a>
        </li> -->
        <li v-if="isCN && isEffective(effectiveTime.kkb)" class="sponsorsItem">
          <a href="https://datayi.cn/w/Y9J3M2vR" target="_blank">
            <img height="66" src="https://qn.antdv.com/kaikeba_ssr.jpeg" alt="kaikeba" />
          </a>
          <span style="position: absolute; top: 0px;right: 10px">广告</span>
        </li>
        <!-- <li class="sponsorsItem">
          <a-button type="primary" ghost style="font-size: 12px" @click="handleClick">
            {{ isCN ? '成为赞助商' : 'Become a Sponsor' }}
          </a-button>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  props: ['isCN'],
  data() {
    return {
      top: 50,
      effectiveTime: {
        bmatch: {
          start: '2019-03-11',
          end: '2019-06-11',
        },
        kkb: {
          start: '2020-11-16 22:00:00',
          end: '2021-05-17 22:00:00',
        },
      },
      visible: false,
    };
  },
  methods: {
    isEffective({ start, end }) {
      return moment().isBetween(start, end);
    },
    handleClick() {
      if (this.isCN) {
        this.visible = true;
      } else {
        window.open('https://opencollective.com/ant-design-vue#sponsor');
      }
    },
  },
};
</script>
