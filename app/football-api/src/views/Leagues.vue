<template>
  <div class="leagues">
    <p>Leagues</p>
    <Loader v-if="loader" />
    <div class="leagues__wrapper-list" v-else>
      <input placeholder="Filter leagues"/>
      <ul>
        <li>
          <div class="leagues__list leagues__list_title">
            <p class="leagues__name">Leagues name</p>
            <p class="leagues__country">Leagues country</p>
          </div>
        </li>
        <li
          v-for="c in competitions"
          :key="c.id"
        >
        <div class="leagues__list leagues__list">
            <p class="leagues__name">{{c.name}}</p>
            <p class="leagues__country">{{c.area.name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    loader: true,
  }),
  computed: {
    ...mapGetters(['leagues', 'choiceCountries', 'competitions']),
  },
  async mounted() {
    const { id } = this.$route.params;
    this.params = id;
    await this.getLeagues(id);
    this.loader = false;
  },
  methods: {
    ...mapActions(['getLeagues']),
  },
};
</script>

<style scoped>
  .leagues__list{
    display: flex;
    border: 1px solid red;
    justify-content: space-between;
    width: 400px;
  }

  .leagues__list_title {
    font-weight: bold;
  }
</style>
