<template>
  <section class="device">
    <Header :backGround="'white'" :headerText="languageJson.header"></Header>
    <BaseText :size="'s'" class="device-text">検査機器を選択してください</BaseText>
    <div class="icon_box">
      <div @click="routerPush('car')">
        <BaseIcon class="icon" :icon="'device_car.svg'"></BaseIcon>
      </div>
      <div @click="routerPush('track')">
        <BaseIcon class="icon" :icon="'device_track.svg'"></BaseIcon>
      </div>
      <div @click="routerPush('bike')">
        <BaseIcon class="icon" :icon="'device_bike.svg'" @click="routerPush()"></BaseIcon>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseText from '@/components/BaseText'
import BaseIcon from '@/components/BaseIcon'
import Header from '@/components/Header'

import { mapGetters, mapMutations, mapActions } from 'vuex'

import { cloneDeep } from 'lodash'

export default {
  name: 'device',
  components: {
    BaseButton,
    BaseText,
    BaseIcon,
    Header
  },
  data () {
    return {
      languageJson: {}
    }
  },
  created () {
    this.languageJson = cloneDeep(this.getLanguage)
  },
  computed: {
    ...mapGetters(['getLanguage']),
  },
  methods: {
    routerPush (key) {
      this.$router.push(key)
    }
  }
}
</script>

<style lang="scss" scoped>
.device {
  background: #f8fcff;
  height: 100vh;
  min-height: 100%;
  &-text {
    display: block;
    text-align: center;
    padding-top: 16.82vw;
  }
}
.icon_box {
  display: flex;
  justify-content: space-between;
  padding: 0 2.71vw;
  margin-top: 2.71vw;
  .icon {
    width: 30.05vw;
  }
}
</style>
