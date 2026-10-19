import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/data/projects" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		publishDate: z.union([z.string(), z.date()]),
		description: z.string(),
		period: z.string().optional(),
		role: z.string().optional(),
		stack: z.array(z.string()).optional(),
		order: z.number().optional(),
	}),
});

export const collections = { projects };
