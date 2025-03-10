import { ref } from "vue";
import type { Produit } from "./iProduit";
import { produits } from "./produit";

export const rechercheActive = ref<boolean>(false);

export const listeRechercheProduit = ref<Produit[]>([]);

export function rechercheNomProduit(recherche: string) {
  produits.value.forEach((produit) => {
    if (produit.nom.toLowerCase().includes(recherche.toLowerCase())) {
      listeRechercheProduit.value.push({ ...produit });
    }
  });
  rechercheActive.value = true;
}

export function annulerRecherche() {
  rechercheActive.value = false;
  produits.value.forEach((produit) => {
    listeRechercheProduit.value.splice(produit.id, 1);
  });
}
