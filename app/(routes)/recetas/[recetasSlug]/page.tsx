import RecipeDetail from "./components/RecipeDetail";

// ✅ Metadata genérica para todas las recetas
export const metadata = {
  title: "Receta artesanal | TÍO PELOTTE",
  description: "Una receta deliciosa hecha con ingredientes frescos y amor artesanal.",
  openGraph: {
    title: "Receta artesanal | TÍO PELOTTE",
    description: "Disfrutá de nuestras recetas clásicas y caseras. Hechas con pasión.",
    type: "article",
    images: [
      {
        url: "https://tiopelotte.ar/opengraph-recetas.jpg",
        width: 1200,
        height: 630,
        alt: "Receta artesanal de TÍO PELOTTE",
      },
    ],
  },
};

// ✅ Tipado inline en lugar de Props + función async
export default async function Page({
  params,
}: {
  params: { recetasSlug: string };
}) {
  return <RecipeDetail slug={params.recetasSlug} />;
}
