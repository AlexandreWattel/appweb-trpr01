<script setup lang="ts">
import { onMounted } from "vue";
import {
  produitSelectionne,
  initModal,
} from "../script/produit/afficherDetailsProduit.ts";

onMounted(() => {
  initModal();
});
</script>

<!-- 
  La base et la forme générale du modal ont été généré par l'ia.
  Toutes les références et les liens vers le code script js n'ont pas été généré par l'ia.
-->
<template>
  <div id="modalDetails" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ produitSelectionne?.nom }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            <strong>Description :</strong> {{ produitSelectionne?.description }}
          </p>
          <p><strong>Prix :</strong> {{ produitSelectionne?.price }} $</p>
          <p><strong>Stock :</strong> {{ produitSelectionne?.stock }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
