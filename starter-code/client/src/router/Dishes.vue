<template>
  <div class="dishes-list">
      <div v-for="dish in dishes">{{ dish.name }}</div>
  </div>
</template>

<script>


import api from '../../api'

export default {
  data() {
    return {
      dishes: []
    }
  },
  created() {
    api.getDishes().then(dishes => {
      this.dishes = dishes;
    })
  }

}

</script>
