<template>
  <div class="top">
    <section class="header">
      <BaseText :size="'56'" :color="'black'" :face="'bold'">外国人検査機器案内支援</BaseText>
      <div class="header-sub">
        <BaseText :size="'m'" :color="'dark_blue'" :face="'bold'">言語を選択してください</BaseText>
      </div>
    </section>
    <section class="btn_list">
      <BaseButton
        v-for="(item, key) in language"
        :key="key"
        class="btn"
        :backGroundColor="'blue_sky'"
        @click="changeText(key)"
      >
        <BaseText
          class="btn-top_text"
          :size="'30'"
          :color="'blue'"
          :face="'bold'"
        >{{ item.subText }}</BaseText>
        <BaseText
          class="btn-bottom_text"
          :size="'43'"
          :color="'blue'"
          :face="'bold'"
        >{{ item.text }}</BaseText>
      </BaseButton>
    </section>
    <section class="footer">
      <BaseIcon class="icon" :icon="'top_footer_logo.svg'"></BaseIcon>
    </section>
  </div>
</template>

<script>

import BaseButton from '@/components/BaseButton'
import BaseLink from '@/components/BaseLink'
import BaseText from '@/components/BaseText'
import BaseIcon from '@/components/BaseIcon'

import { mapGetters, mapMutations, mapActions } from 'vuex'
import { cloneDeep } from 'lodash'

export default {
  name: 'Index',
  components: {
    BaseButton,
    BaseLink,
    BaseText,
    BaseIcon
  },
  data () {
    return {
      //topページのみ静的に表示
      language: {
        english: {
          subText: '英語',
          text: 'English'
        },
        simplechina: {
          subText: '中国語（簡体字)',
          text: '中文 (簡体字)'
        },
        nomalchina: {
          subText: '中国語（繁体字)',
          text: '中文 (繁體字)'
        },
        korea: {
          subText: '韓国語',
          text: '한국어'
        },
        portugal: {
          subText: 'ポルトガル語',
          text: 'Português'
        }
      },
      languageJson: {}
    }
  },
  async created() {
    this.languageJson = await cloneDeep(this.getLanguage)
  },
  computed: {
    ...mapGetters(['getLanguage'])
  },
  methods: {
    changeText (key) {
      if (this.language.hasOwnProperty(key)) {
        const data = require(`.././json/${key}.json`)
        this.$store.commit('UPDATE_LANGUAGE_DATA', data)
        this.$router.push('device')
      }
      else console.error('changeTextError')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 40px;
  text-align: center;
  &-sub {
    padding-top: 20px;
  }
}
.btn_list {
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  .btn {
    border: solid 8px $blue;
    border-radius: 50%;
    height: calcVW(340);
    width: calcVW(340);
    &-top_text {
      display: inline-block;
      padding: 24px 0 4px;
      width: 80%;
      border-bottom: 2px solid $blue;
      margin: 0 auto;
    }
    &-bottom_text {
      border-color: $blue;
      display: block;
      padding-top: 20px;
      height: 65%;
    }
  }
}
.footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 120px;
  .icon {
    display: inline-block;
    width: 400px;
  }
}
</style>
