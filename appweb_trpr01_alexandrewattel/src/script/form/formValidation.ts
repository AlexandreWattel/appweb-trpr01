import { nom, description, price, stock } from "./inputProduit";

import {
  errNom,
  errDescription,
  errPrice,
  errStock,
  errNomMessage,
  errDescriptionMessage,
  errPriceMessage,
  errStockMessage,
} from "./errProduit";

export function validateText(
  text: string,
  placeOfErr: HTMLDivElement | null,
  errMessage: string
): boolean {
  if (text.trim().length) {
    if (placeOfErr) placeOfErr.textContent = "";
    return true;
  } else {
    if (placeOfErr) placeOfErr.textContent = errMessage;
    return false;
  }
}

export function validatePrice(
  price: number,
  placeOfErr: HTMLDivElement | null,
  errMessage: string
): boolean {
  if (price > 0) {
    if (placeOfErr) placeOfErr.textContent = "";
    return true;
  } else {
    if (placeOfErr) placeOfErr.textContent = errMessage;
    return false;
  }
}

export function validateStock(
  stock: number,
  placeOfErr: HTMLDivElement | null,
  errMessage: string
): boolean {
  if (stock >= 0) {
    if (placeOfErr) placeOfErr.textContent = "";
    return true;
  } else {
    if (placeOfErr) placeOfErr.textContent = errMessage;
    return false;
  }
}

export function validateForm(): boolean {
  return [
    validateText(nom.value?.value ?? "", errNom.value, errNomMessage),
    validateText(
      description.value?.value ?? "",
      errDescription.value,
      errDescriptionMessage
    ),
    validatePrice(
      parseFloat(price.value?.value || "0"), //"0" nécéssaire pour éviter un Nan (Ligne inpiré de l'ia)
      errPrice.value,
      errPriceMessage
    ),
    validateStock(
      parseInt(stock.value?.value || "0", 10), //"0" nécéssaire pour éviter un Nan et "10" pour base 10 (Ligne inpiré de l'ia)
      errStock.value,
      errStockMessage
    ),
  ].every(Boolean);
}
