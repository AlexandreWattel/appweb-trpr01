import { ref } from "vue";
export const errNom = ref<HTMLInputElement | null>(null);
export const errDescription = ref<HTMLInputElement | null>(null);
export const errPrice = ref<HTMLInputElement | null>(null);
export const errStock = ref<HTMLInputElement | null>(null);

export const errNomMessage = "Le nom du produit ne peut pas être vide";
export const errDescriptionMessage =
  "La description du produit ne peut pas être vide";
export const errPriceMessage = "Le prix du produit doit être au dessus de 0";
export const errStockMessage = "La quantité ne peut pas être en dessous de 0";
