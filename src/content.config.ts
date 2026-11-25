import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gammes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gammes' }),
  schema: z.object({
    name: z.string(),           // nom de la gamme (Constructor…)
    title: z.string(),          // titre affiché (H1)
    seoTitle: z.string(),       // balise <title>
    description: z.string(),    // meta description
    keyword: z.string(),        // requête principale visée
    order: z.number(),
    kind: z.enum(['entree', 'outil', 'visibilite']),
    entries: z.number().optional(), // nombre d'outils reliés (gammes « outil »)
    mk: z.string().optional(),      // repère technique affiché (MK.1…)
    tagline: z.string(),        // ce que fait la gamme, en une ligne
    short: z.string(),          // accroche des cartes
    price: z.string(),          // « à partir de »
    duration: z.string(),
    recommended: z.boolean().default(false),
    example: z.string(),
    forWho: z.array(z.string()),
    deliverables: z.array(z.string()),
    steps: z.array(z.object({ title: z.string(), text: z.string() })),
    faq: z.array(z.object({ q: z.string(), a: z.string() })),
  }),
});

export const collections = { gammes };
