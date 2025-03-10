import { ref } from "vue";
import type { Produit } from "./iProduit";

// Cette liste a été généré par l'ia
// Liste réduite des figurines de robots géants (5 produits)
export const produitsDeBase = ref<Produit[]>([
  {
    id: 1,
    nom: "RX-78-2 Gundam",
    description: "Le modèle emblématique de la série Mobile Suit Gundam.",
    price: 49.99,
    stock: 7,
  },
  {
    id: 2,
    nom: "Evangelion Unit-01",
    description: "L'Evangelion légendaire piloté par Shinji Ikari.",
    price: 79.99,
    stock: 15,
  },
  {
    id: 3,
    nom: "Optimus Prime",
    description: "Le leader des Autobots dans Transformers.",
    price: 59.99,
    stock: 22,
  },
  {
    id: 4,
    nom: "Mazinger Z",
    description: "L'un des premiers super robots iconiques du Japon.",
    price: 45.99,
    stock: 34,
  },
  {
    id: 5,
    nom: "Gurren Lagann",
    description: "Le mécha surpuissant de la série Tengen Toppa Gurren Lagann.",
    price: 99.99,
    stock: 17,
  },
]);
