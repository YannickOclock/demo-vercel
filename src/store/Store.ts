import { create } from 'zustand';
import { combine } from 'zustand/middleware';

// use suivi de votre nom pour le store
// En utilisant combine, l'inférence est gérée par Typescript.
// Je n'ai plus besoin d'écrire à la main le type de mon store
// Typescript devine automatiquement ce qu'il y a dans mon store
const useAppStore = create(
  combine(
    {
      darkTheme: false,
      email: '',
    },
    (set) => ({
      updateDarkTheme: (darkTheme: boolean) => set({ darkTheme }),
      updateEmail: (email: string) => set({ email }),
    })
  )
);

// Définir des actions en dehors du state
export function globalUpdateEmail(email: string) {
  useAppStore.setState({ email });
}

// ---------------------
// Pour les articles
// > ajout d'un articles
// > récupération des articles
// > filtre d'un article
// > mise à jour d'un article
// > suppression d'un article
// ----------------------

export default useAppStore;
