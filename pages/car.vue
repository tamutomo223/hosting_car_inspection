<template>
  <section class="car">
    <Header :backGround="'blue'" :headerText="languageJson.header"></Header>
    <div class="main">
      <SideMenu :sideMenu="sideMenu" :color="'blue'" @textListUpdate="textListUpdate"></SideMenu>
      <InspectionGuide
        :inspection="languageJson.inspection.mainText.carText"
        :sideMenuId="sideMenuId"
        :lang="languageJson.language"
        :color="'blue'"
      ></InspectionGuide>
    </div>
  </section>
</template>

<script>

import SideMenu from '@/components/SideMenu'
import InspectionGuide from '@/components/InspectionGuide'
import { mapGetters, mapMutations, mapActions } from 'vuex'

import { cloneDeep } from 'lodash'

export default {
  name: 'car',
  components: {
    SideMenu,
    InspectionGuide
  },
  data () {
    return {
      languageJson: {},
      sideMenu: [],
      sideMenuId: 1
    }
  },
  created () {
    this.languageJson = cloneDeep(this.getLanguage)
    this.sideMenu = this.languageJson.inspection.sideMenu.carText
  },
  computed: {
    ...mapGetters(['getLanguage']),
  },
  methods: {
    textListUpdate (data) {
      this.sideMenuId = data.id
    },



  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>
