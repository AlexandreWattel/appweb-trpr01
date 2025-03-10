<script setup lang="ts">
import { onMounted } from "vue";
import { modifierProduit } from "../script/produit/produit";
import { produitUtiliser, ajouterState } from "../script/form/formState";

import {
  validateText,
  validatePrice,
  validateStock,
  validateForm,
} from "../script/form/formValidation";

import { nom, description, price, stock } from "../script/form/inputProduit";

import {
  errNom,
  errDescription,
  errPrice,
  errStock,
  errNomMessage,
  errDescriptionMessage,
  errPriceMessage,
  errStockMessage,
} from "../script/form/errProduit";

onMounted(() => {
  if (nom.value) {
    nom.value.addEventListener("input", () =>
      validateText(nom.value?.value ?? "", errNom.value, errNomMessage)
    );
  }

  if (description.value) {
    description.value.addEventListener("input", () =>
      validateText(
        description.value?.value ?? "",
        errDescription.value,
        errDescriptionMessage
      )
    );
  }

  if (price.value) {
    price.value.addEventListener("input", () => {
      const priceNum = parseFloat(price.value?.value || "0"); // Convertir correctement (Inspiré de l'ia)
      produitUtiliser.value.price = isNaN(priceNum) ? 0 : priceNum; // Éviter NaN
      validatePrice(
        produitUtiliser.value.price,
        errPrice.value,
        errPriceMessage
      );
    });
  }

  if (stock.value) {
    stock.value.addEventListener("input", () => {
      const stockNum = parseInt(stock.value?.value || "0", 10); // Convertir correctement (Inspiré de l'ia)
      produitUtiliser.value.stock = isNaN(stockNum) ? 0 : stockNum; // Éviter NaN
      validateStock(
        produitUtiliser.value.stock,
        errStock.value,
        errStockMessage
      );
    });
  }
});

const annuler = () => {
  ajouterState();
};

const essayeModifierProduit = () => {
  if (validateForm()) {
    modifierProduit(produitUtiliser.value);
    produitUtiliser.value = {
      id: 0,
      nom: "",
      description: "",
      price: 0,
      stock: 0,
    };
  }
};
</script>

<!-- 
  La base et la forme générale du formulaire ont été généré par l'ia.
  Toutes les références et les liens vers le code script js n'ont pas été généré par l'ia.
-->
<template>
  <div class="container mt-5">
    <div class="card shadow rounded-4 p-4 bg-secondary-subtle">
      <h2 class="text-center mb-4">Modifier un produit</h2>
      <form @submit.prevent="essayeModifierProduit">
        <!-- Nom -->
        <div class="mb-3">
          <label for="nom" class="form-label">Nom*</label>
          <input
            type="text"
            id="nom"
            ref="nom"
            v-model="produitUtiliser.nom"
            class="form-control"
            placeholder="Nom du produit"
          />
          <div ref="errNom" class="erreur_message text-danger"></div>
        </div>

        <!-- Description -->
        <div class="mb-3">
          <label for="description" class="form-label">Description*</label>
          <textarea
            id="description"
            ref="description"
            v-model="produitUtiliser.description"
            class="form-control"
            placeholder="Description du produit"
          ></textarea>
          <div ref="errDescription" class="erreur_message text-danger"></div>
        </div>

        <!-- Prix -->
        <div class="mb-3">
          <label for="prix" class="form-label">Prix ($)*</label>
          <input
            type="number"
            id="prix"
            ref="price"
            v-model.number="produitUtiliser.price"
            class="form-control"
            min="0"
            step="0.01"
          />
          <div ref="errPrice" class="erreur_message text-danger"></div>
        </div>

        <!-- Stock -->
        <div class="mb-3">
          <label for="stock" class="form-label">Stock*</label>
          <input
            type="number"
            id="stock"
            ref="stock"
            v-model.number="produitUtiliser.stock"
            class="form-control"
            min="0"
          />
          <div ref="errStock" class="erreur_message text-danger"></div>
        </div>

        <!-- Bouton d'ajout -->
        <div class="text-end">
          <button
            type="button"
            class="btn btn-danger rounded-4 px-4"
            @click="annuler"
          >
            Annuler
          </button>
          <button
            type="submit"
            class="btn bg-primary-subtle rounded-4 px-4 ms-3"
          >
            Modifier
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 600px;
  margin: 0 auto;
}
</style>
