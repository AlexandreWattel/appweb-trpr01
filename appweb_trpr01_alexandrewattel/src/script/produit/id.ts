//Fichier entièrement généré par l'ia

const usedIds = new Set<number>(); // Contient les IDs utilisés
const availableIds: number[] = []; // Contient les IDs libérés et réutilisables

export function generateId(): number {
  if (availableIds.length > 0) {
    // Réutiliser un ID libéré
    const reusedId = availableIds.shift()!;
    usedIds.add(reusedId);
    return reusedId;
  } else {
    // Générer un nouvel ID unique
    const newId = usedIds.size + 1;
    usedIds.add(newId);
    return newId;
  }
}

export function releaseId(id: number) {
  if (usedIds.has(id)) {
    usedIds.delete(id);
    availableIds.push(id); // Ajoute l'ID libéré pour réutilisation
    availableIds.sort((a, b) => a - b); // Trie pour réutiliser les plus petits en premier
  }
}
