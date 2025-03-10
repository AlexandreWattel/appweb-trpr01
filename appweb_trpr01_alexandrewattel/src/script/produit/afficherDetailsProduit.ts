import { ref } from "vue";
import type { Produit } from "./iProduit";

export let modalInstance: any = null;
export const produitSelectionne = ref<Produit | null>(null);

export const initModal = async () => {
  const { Modal } = await import("bootstrap"); // Ligne généré par l'ia
  const modalElement = document.getElementById("modalDetails");
  if (modalElement) {
    modalInstance = new Modal(modalElement);
  }
};

export const afficheDetails = (produit: Produit) => {
  produitSelectionne.value = produit;
  if (modalInstance) {
    modalInstance.show();
  }
};
