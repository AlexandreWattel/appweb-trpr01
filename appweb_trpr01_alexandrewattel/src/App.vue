<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Header from "./components/Header.vue";
import FormState from "./script/form/iFormState.ts";
import Recherche from "./components/Recherche.vue";
import ExporterProduitsCSV from "./components/ExporterProduitsCSV.vue";
import { computed, defineAsyncComponent } from "vue";
import { formState } from "./script/form/formState.ts";
import { rechercheActive } from "./script/produit/rechercheProduit.ts";

const componentsForm: Record<FormState, any> = {
  [FormState.AJOUTER]: defineAsyncComponent(
    () => import("./components/AjoutEtDuplicationProduit.vue")
  ),
  [FormState.MODIFIER]: defineAsyncComponent(
    () => import("./components/ModifierProduit.vue")
  ),
  [FormState.DUPLIQUER]: defineAsyncComponent(
    () => import("./components/AjoutEtDuplicationProduit.vue")
  ),
};

const componentsListeProduits = {
  false: defineAsyncComponent(
    () => import("./components/AfficherListeProduit.vue")
  ),
  true: defineAsyncComponent(
    () => import("./components/AfficherRecherche.vue")
  ),
};

const activeForm = computed(() => componentsForm[formState.value]);
const activeListe = computed(
  () =>
    componentsListeProduits[
      rechercheActive.value.toString() as keyof typeof componentsListeProduits
    ]
);
</script>

<template>
  <body class="bg-primary-subtle">
    <Header />
    <div class="bg-primary-subtle">
      <component :is="activeForm"></component>
      <Recherche />
      <component :is="activeListe"></component>
      <div class="d-flex justify-content-center align-items-center">
        <ExporterProduitsCSV />
      </div>
    </div>
  </body>
</template>

<style scoped></style>
