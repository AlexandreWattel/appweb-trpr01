<script setup lang="ts">
import { ref } from "vue";
import { rechercheNomProduit } from "../script/produit/rechercheProduit";

const recherche = ref("");

function lancerRecherche() {
  rechercheNomProduit(recherche.value);
}
</script>

<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Recherche par nom</h2>

    <div class="input-group mb-3">
      <input
        v-model="recherche"
        type="text"
        class="form-control"
        placeholder="Rechercher un produit"
      />
      <button @click="lancerRecherche" class="btn bg-info-subtle" type="button">
        Rechercher
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
