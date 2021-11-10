<template>
  <div class="side-setting">
    <setting-item>
      <o-button @click="saveSetting" type="primary" icon="save">{{$t('save')}}</o-button>
      <o-button @click="resetSetting" type="dashed" icon="redo" style="float: right">{{$t('reset')}}</o-button>
    </setting-item>
    <o-divider></o-divider>
    <setting-item :title="$t('theme.title')">
      <img-checkbox-group
        @change="values => setTheme({...theme, mode: values[0]})"
        :default-values="[theme.mode]"
      >
        <!-- <img-checkbox :title="$t('theme.dark')" img="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" value="dark"/> -->
        <img-checkbox :title="$t('theme.light')" img="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" value="light"/>
        <img-checkbox :title="$t('theme.night')" img="https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg" value="night"/>
      </img-checkbox-group>
    </setting-item>
    <setting-item :title="$t('theme.color')">
      <color-checkbox-group
        @change="(values, colors) => setTheme({...theme, color: colors[0]})"
        :defaultValues="[palettes.indexOf(theme.color)]" :multiple="false"
      >
        <color-checkbox v-for="(color, index) in palettes" :key="index" :color="color" :value="index" />
      </color-checkbox-group>
    </setting-item>
    <!-- <o-divider/>
    <setting-item :title="$t('navigate.title')">
      <img-checkbox-group
        @change="values => setLayout(values[0])"
        :default-values="[layout]"
      >
        <img-checkbox :title="$t('navigate.side')" img="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg" value="side"/>
        <img-checkbox :title="$t('navigate.head')" img="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg" value="head"/>
        <img-checkbox :title="$t('navigate.mix')" img="https://gw.alipayobjects.com/zos/antfincdn/x8Ob%26B8cy8/LCkqqYNmvBEbokSDscrm.svg" value="mix"/>
      </img-checkbox-group>
    </setting-item>
    <setting-item>
      <o-list :split="false">
        <o-list-item>
          {{$t('navigate.content.title')}}
          <o-select
            :getPopupContainer="getPopupContainer"
            :value="pageWidth"
            @change="setPageWidth"
            class="select-item" size="small" slot="actions"
          >
            <o-select-option value="fluid">{{$t('navigate.content.fluid')}}</o-select-option>
            <o-select-option value="fixed">{{$t('navigate.content.fixed')}}</o-select-option>
          </o-select>
        </o-list-item>
        <o-list-item>
          {{$t('navigate.fixedHeader')}}
          <o-switch :checked="fixedHeader" slot="actions" size="small" @change="setFixedHeader" />
        </o-list-item>
        <o-list-item>
          {{$t('navigate.fixedSideBar')}}
          <o-switch :checked="fixedSideBar" slot="actions" size="small" @change="setFixedSideBar" />
        </o-list-item>
      </o-list>
    </setting-item>
    <o-divider />
    <setting-item :title="$t('other.title')">
      <o-list :split="false">
        <o-list-item>
          {{$t('other.weekMode')}}
          <o-switch :checked="weekMode" slot="actions" size="small" @change="setWeekMode" />
        </o-list-item>
        <o-list-item>
          {{$t('other.multiPages')}}
          <o-switch :checked="multiPage" slot="actions" size="small" @change="setMultiPage" />
        </o-list-item>
        <o-list-item>
          {{$t('other.hideSetting')}}
          <o-switch :checked="hideSetting" slot="actions" size="small" @change="setHideSetting" />
        </o-list-item>
      </o-list>
    </setting-item>
    <o-divider />
    <setting-item :title="$t('animate.title')">
      <o-list :split="false">
        <o-list-item>
          {{$t('animate.disable')}}
          <o-switch :checked="animate.disabled" slot="actions" size="small" @change="val => setAnimate({...animate, disabled: val})" />
        </o-list-item>
        <o-list-item>
          {{$t('animate.effect')}}
          <o-select
            :value="animate.name"
            :getPopupContainer="getPopupContainer"
            @change="val => setAnimate({...animate, name: val})"
            class="select-item" size="small" slot="actions"
          >
            <o-select-option :key="index" :value="item.name" v-for="(item, index) in animates">{{item.alias}}</o-select-option>
          </o-select>
        </o-list-item>
        <o-list-item>
          {{$t('animate.direction')}}
          <o-select
            :value="animate.direction"
            :getPopupContainer="getPopupContainer"
            @change="val => setAnimate({...animate, direction: val})"
            class="select-item" size="small" slot="actions"
          >
            <o-select-option :key="index" :value="item" v-for="(item, index) in directions">{{item}}</o-select-option>
          </o-select>
        </o-list-item>
      </o-list>
    </setting-item>
    <o-alert
      v-if="isDev"
      style="max-width: 240px; margin: -16px 0 8px; word-break: break-all"
      type="warning"
      :message="$t('alert')"
    >
    </o-alert>
    <o-button v-if="isDev" id="copyBtn" :data-clipboard-text="copyConfig" @click="copyCode" style="width: 100%" icon="copy" >{{$t('copy')}}</o-button> -->
  </div>
</template>

<script>
import SettingItem from './SettingItem'
import {ColorCheckbox, ImgCheckbox} from '@/components/checkbox'
import Clipboard from 'clipboard'
import { mapState, mapMutations } from 'vuex'
import {formatConfig} from '@/utils/formatter'
import {setting} from '@/config/default'
import sysConfig from '@/config/config'
import fastEqual from 'fast-deep-equal'
import deepMerge from 'deepmerge'

const ColorCheckboxGroup = ColorCheckbox.Group
const ImgCheckboxGroup = ImgCheckbox.Group
export default {
  name: 'Setting',
  i18n: require('./i18n'),
  components: {ImgCheckboxGroup, ImgCheckbox, ColorCheckboxGroup, ColorCheckbox, SettingItem},
  data() {
    return {
      copyConfig: 'Sorry, you have copied nothing O(∩_∩)O~',
      isDev: process.env.NODE_ENV === 'development'
    }
  },
  computed: {
    directions() {
      return this.animates.find(item => item.name == this.animate.name).directions
    },
    ...mapState('setting', ['theme', 'layout', 'animate', 'animates', 'palettes', 'multiPage', 'weekMode', 'fixedHeader', 'fixedSideBar', 'hideSetting', 'pageWidth'])
  },
  watch: {
    'animate.name': function(val) {
      this.setAnimate({name: val, direction: this.directions[0]})
    }
  },
  methods: {
    getPopupContainer() {
      return this.$el.parentNode
    },
    copyCode () {
      let config = this.extractConfig(false)
      this.copyConfig = `// 自定义配置，参考 ./default/setting.config.js，需要自定义的属性在这里配置即可
      module.exports = ${formatConfig(config)}
      `
      let clipboard = new Clipboard('#copyBtn')
      clipboard.on('success', () => {
        this.$message.success(`复制成功，覆盖文件 src/config/config.js 然后重启项目即可生效`).then(() => {
          const localConfig = localStorage.getItem(process.env.VUE_APP_SETTING_KEY)
          if (localConfig) {
            console.warn('检测到本地有历史保存的主题配置，想要要拷贝的配置代码生效，您可能需要先重置配置')
            this.$message.warn('检测到本地有历史保存的主题配置，想要要拷贝的配置代码生效，您可能需要先重置配置', 5)
          }
        })
        clipboard.destroy()
      })
    },
    saveSetting() {
      const closeMessage = this.$omnotification['success']({
          message: '正在保存到本地，请稍后...'
      });
      const config = this.extractConfig(true)
      localStorage.setItem(process.env.VUE_APP_SETTING_KEY, JSON.stringify(config))
      setTimeout(closeMessage, 800)
    },
    resetSetting() {
        localStorage.removeItem(process.env.VUE_APP_SETTING_KEY)
        window.location.reload()
    },
    //提取配置
    extractConfig(local = false) {
      let config = {}
      let mySetting = this.$store.state.setting
      let dftSetting = local ? deepMerge(setting, sysConfig) : setting
      Object.keys(mySetting).forEach(key => {
        const dftValue = dftSetting[key], myValue = mySetting[key]
        if (dftValue != undefined && !fastEqual(dftValue, myValue)) {
          config[key] = myValue
        }
      })
      return config
    },
    ...mapMutations('setting', ['setTheme', 'setLayout', 'setMultiPage', 'setWeekMode',
      'setFixedSideBar', 'setFixedHeader', 'setAnimate', 'setHideSetting', 'setPageWidth'])
  }
}
</script>

<style lang="less" scoped>
  .side-setting{
    min-height: 100%;
    background-color: @base-bg-color;
    padding: 24px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
    position: relative;
    .flex{
      display: flex;
    }
    .select-item{
      width: 80px;
    }
  }
</style>
