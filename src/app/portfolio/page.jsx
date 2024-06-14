"use client";

import { GlassCard } from "@/components/glass-card";

export default function Portfolio() {
  const projects = [
    {
      id: "snake-house-react",
      name: "Snake House React",
      repoUrl: "https://github.com/restX98/snake-house-react",
      pageUrl: "https://restx98.github.io/snake-house-react/",
      image: "/images/snake-house-thumbnail.png"
    },
    {
      id: "commerce-laravel",
      name: "eCommerce Laravel",
      repoUrl: "https://github.com/restX98/commerce-laravel",
    },
    {
      id: "unicar-app",
      name: "UniCar App",
      repoUrl: "https://github.com/restX98/UniCarApp",
    }
  ];

  return (
    <>
      <GlassCard
        className="snake-box mb-5"
        title="Qui troverai tutti i miei progetti / Here you will find all my projects:"
      />
      <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((p) => (
          <GlassCard
            className="snake-box"
            key={p.id}
            title={p.name}
            image={p.image}
            link={p.pageUrl || p.repoUrl}
          />
        ))}
        <GlassCard className="snake-box" title="Coming Soon..." />
      </div>
    </>
  )
}
