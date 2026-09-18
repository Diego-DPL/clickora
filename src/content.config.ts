import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Artículos del blog. Se escriben en Markdown dentro de src/content/blog/ y
 * aparecen solos en el índice, el sitemap y los datos estructurados: para
 * publicar uno nuevo no hay que tocar ni una línea de código.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Título para la pestaña y Google. Si se omite, se usa `title`. */
    metaTitle: z.string().optional(),
    description: z.string(),
    /** Antetítulo corto que se pinta sobre el titular. */
    label: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Resumen de una línea para el índice. */
    excerpt: z.string(),
    /**
     * Preguntas del cierre. Se pintan con `FaqBlock`, que emite el `FAQPage`
     * schema junto al contenido visible: es lo que se lleva las citas en las
     * respuestas de IA. Ver §6bis de STYLE_GUIDE.md.
     */
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
    /** Mensaje con el que se abre WhatsApp desde el CTA de cierre. */
    whatsappMessage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
