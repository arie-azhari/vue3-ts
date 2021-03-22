<template>
  <div>
    <div class="container p-8 mx-auto">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>

<style scoped>
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.5s ease;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
