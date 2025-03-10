import type { Produit } from "./iProduit";
import { generateId, releaseId } from "./id";
import { produitsDeBase } from "./produitDeBase";

export const produits = produitsDeBase;

export function ajouterProduit(produit: Omit<Produit, "id">) {
  const id = generateId();
  produits.value.push({ id, ...produit });
}

export function modifierProduit(produitModifie: Produit) {
  const index = produits.value.findIndex(
    (produit) => produit.id === produitModifie.id
  );
  produits.value[index] = { ...produitModifie };
}

export function supprimerProduit(id: number) {
  const index = produits.value.findIndex((produit) => produit.id === id);
  produits.value.splice(index, 1);
  releaseId(id);
}

export function checkStockProduit(id: number) {
  const index = produits.value.findIndex((produit) => produit.id === id);
  const stockProduit = produits.value[index].stock;
  if (stockProduit < 10) {
    verifieStock(produits.value[index].id);
    return "table-danger";
  } else if (stockProduit >= 10 && stockProduit < 20) {
    return "table-warning";
  }
  return "";
}

export function verifieStock(id: number) {
  const index = produits.value.findIndex((produit) => produit.id === id);
  if (produits.value[index].stock == 0) {
    window.alert(
      "Le stock du produit suivant est à zero : " + produits.value[index].nom
    );
  }
}
