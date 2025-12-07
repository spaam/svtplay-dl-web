import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/data/posts" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        categories: z.string(),
        windows_amd64: z.boolean().optional(),
        windows_win32: z.boolean().optional(),
        binary: z.boolean().optional(),
        windows_old_zip: z.boolean().optional(),
        windows_old_exe: z.boolean().optional(),
    }),
});

export const collections = { posts };
