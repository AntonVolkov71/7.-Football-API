<template>
  <div class="home">
    <Loader v-if="loader" />
    <router-link v-else to="/areas">Добро пожаловать</router-link>
    <ul>
      <li
      v-for="(area) of areas"
      :key="area.id + 1"
      @click="handlerArea(area.id)"
      >
        <p :class="{'home_active': area.name === 'Europe'}">{{ area.name }}</p>
      </li>
      </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    loader: true,
  }),
  computed: {
    ...mapGetters(['areas']),
  },
  methods: {
    ...mapActions(['fetchAreas', 'setAreaId']),
    async handlerArea(id) {
      this.$router.push(`/leagues/${id}`);
    },
  },
  async mounted() {
    await this.fetchAreas();
    this.loader = false;
  },
};
</script>
<style scoped>
  .home_active{
    background: red;
  }
</style>
