import RecipeDetail from "./components/RecipeDetail";

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

// ⚠️ NO USAR type Props acá, tipamos inline y SIN async innecesario
export default function Page({
  params,
}: {
  params: { recetasSlug: string };
}) {
  return <RecipeDetail slug={params.recetasSlug} />;
}
