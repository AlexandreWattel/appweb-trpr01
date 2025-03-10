import { ref } from "vue";
import FormState from "./iFormState.ts";
import type { Produit } from "../produit/iProduit";

export const formState = ref<FormState>(FormState.AJOUTER);
export const produitUtiliser = ref<Produit>({
  id: 0,
  nom: "",
  description: "",
  price: 0.1,
  stock: 0,
});

export function modifierStateEtProduit(produitModifie: Produit) {
  produitUtiliser.value = {
    id: produitModifie.id,
    nom: produitModifie.nom,
    description: produitModifie.description,
    price: produitModifie.price,
    stock: produitModifie.stock,
  };
  formState.value = FormState.MODIFIER;
}

export function ajouterState() {
  formState.value = FormState.AJOUTER;
}

export function duppliquerStateEtProduit(produitModifie: Produit) {
  produitUtiliser.value = {
    id: produitUtiliser.value.id,
    nom: produitModifie.nom,
    description: produitModifie.description,
    price: produitModifie.price,
    stock: produitModifie.stock,
  };
  formState.value = FormState.DUPLIQUER;
}
