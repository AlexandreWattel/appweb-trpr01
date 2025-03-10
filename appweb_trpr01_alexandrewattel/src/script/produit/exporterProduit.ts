import { produits } from "./produit";

//La fonction convertirCSV a été corrigé par l'ia
function convertirCSV(data: any[]): string {
  const lignes = [];
  const entetes = Object.keys(data[0]);
  lignes.push(entetes.join(";"));

  data.forEach((item) => {
    const valeurs = entetes.map((entete) => item[entete]);
    lignes.push(valeurs.join(";"));
  });

  return lignes.join("\n");
}

export function exporterCSV() {
  const csv = convertirCSV(produits.value);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const lien = document.createElement("a");
  lien.href = url;
  lien.download = "export.csv";
  document.body.appendChild(lien);
  lien.click();

  document.body.removeChild(lien);
  URL.revokeObjectURL(url);
}
