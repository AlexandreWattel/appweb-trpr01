<script setup lang="ts">
import { listeRechercheProduit } from "../script/produit/rechercheProduit.ts";
import {
  supprimerProduit,
  checkStockProduit,
} from "../script/produit/produit.ts";
import { afficheDetails } from "../script/produit/afficherDetailsProduit.ts";
import AfficherDetails from "./AfficherDetails.vue";
import {
  modifierStateEtProduit,
  duppliquerStateEtProduit,
} from "../script/form/formState.ts";
import { annulerRecherche } from "../script/produit/rechercheProduit";

const modifier = (produit: any) => {
  modifierStateEtProduit(produit);
};

const dupliquer = (produit: any) => {
  duppliquerStateEtProduit(produit);
};

const supprimer = (id: number) => {
  supprimerProduit(id);
};

const getStatusStock = (id: number) => {
  return checkStockProduit(id);
};

const annuler = () => {
  annulerRecherche();
};
</script>
<!-- 
  La base et la forme générale du table ont été généré par l'ia.
  Toutes les références et les liens vers le code script js n'ont pas été généré par l'ia.
-->
<template>
  <div class="container mt-4 bg-primary-subtle">
    <button
      type="button"
      class="btn btn-danger rounded-4 px-4"
      @click="annuler"
    >
      Annuler la recherche
    </button>

    <h2 class="text-center mb-4">Liste des produits</h2>

    <table class="table">
      <thead>
        <tr>
          <th class="bg-primary-subtle">Nom</th>
          <th class="bg-primary-subtle">Description</th>
          <th class="bg-primary-subtle">Actions</th>
          <th class="bg-primary-subtle"></th>
          <th class="bg-primary-subtle"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="produit in listeRechercheProduit"
          :key="produit.id"
          :class="getStatusStock(produit.id)"
        >
          <td>{{ produit.nom }}</td>
          <td>{{ produit.description }}</td>
          <td>
            <button
              @click="afficheDetails(produit)"
              class="btn btn-success btn-sm"
            >
              Détails
            </button>
          </td>
          <td>
            <button @click="modifier(produit)" class="btn btn-warning btn-sm">
              Modifier
            </button>
          </td>
          <td>
            <button @click="dupliquer(produit)" class="btn btn-warning btn-sm">
              Dupliquer
            </button>
          </td>
          <td>
            <button @click="supprimer(produit.id)" class="btn bg-danger btn-sm">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <AfficherDetails />
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
