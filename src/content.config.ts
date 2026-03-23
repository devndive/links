import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sections = defineCollection({
	loader: glob({ pattern: "*.yaml", base: "./src/content/sections" }),
	schema: z.object({
		page: z.string(),
		order: z.number(),
		title: z.string(),
		description: z.string(),
		links: z.array(
			z.object({
				title: z.string(),
				href: z.string(),
				description: z.string(),
			}),
		),
	}),
});

export const collections = { sections };
