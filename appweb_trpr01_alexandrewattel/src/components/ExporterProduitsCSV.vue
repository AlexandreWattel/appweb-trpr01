<script setup lang="ts">
import { exporterCSV } from "../script/produit/exporterProduit";
</script>
<template>
  <button @click="exporterCSV" class="btn bg-info-subtle">
    Exporter en CSV
  </button>
</template>
<style scoped></style>
