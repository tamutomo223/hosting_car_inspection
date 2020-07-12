<template>
  <section class="bike">
    <Header
      :backGround="'green'"
      :headerText="languageJson.header"
    >
    </Header>
    <div class="main">
      <SideMenu
        :sideMenu="sideMenu"
        :color="'green'"
        @textListUpdate="textListUpdate"
      >
      </SideMenu>
      <InspectionGuide
        :inspection="languageJson.inspection.mainText.bikeText"
        :sideMenuId="sideMenuId"
        :lang="languageJson.language"
        :color="'green'"
      >
      </InspectionGuide>
    </div>
  </section>
</template>

<script>

import SideMenu from '@/components/SideMenu'
import InspectionGuide from '@/components/InspectionGuide'
import { mapGetters, mapMutations, mapActions } from 'vuex'

import { cloneDeep } from 'lodash'

export default {
  name: 'bike',
  components: {
    SideMenu,
    InspectionGuide
  },
  data() {
    return {
      languageJson: {},
      sideMenu: [],
      sideMenuId: 1
    }
  },
  created() {
    this.languageJson = cloneDeep(this.getLanguage)
    this.sideMenu = this.languageJson.inspection.sideMenu.bikeText
  },
  computed: {
    ...mapGetters(['getLanguage']),
  },
  methods: {
    textListUpdate(data) {
      this.sideMenuId = data.id
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>
