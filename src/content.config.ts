import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const amd = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/amd" }),
  schema: ({ image }) =>
    z.object({
      titleEs: z.string(),
      vendor: z.literal("amd"),
      vendorLabel: z.string().default("AMD"),
      description: z.string(),
      heroBackground: z.string().default("bg-ambient"),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

const apis = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/apis" }),
  schema: ({ image }) =>
    z.object({
      titleEs: z.string(),
      vendor: z.literal("apis"),
      vendorLabel: z.string().default("APIs gráficas"),
      description: z.string(),
      heroBackground: z.string().default("bg-ambient"),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

const extra = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/extra" }),
  schema: ({ image }) =>
    z.object({
      titleEs: z.string(),
      vendor: z.literal("extra"),
      vendorLabel: z.string().default("Extra"),
      description: z.string(),
      heroBackground: z.string().default("bg-ambient"),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

const intel = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/intel" }),
  schema: ({ image }) =>
    z.object({
      titleEs: z.string(),
      vendor: z.literal("intel"),
      vendorLabel: z.string().default("Intel"),
      description: z.string(),
      heroBackground: z.string().default("bg-ambient"),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

const nvidia = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/nvidia" }),
  schema: ({ image }) =>
    z.object({
      titleEs: z.string(),
      vendor: z.literal("nvidia"),
      vendorLabel: z.string().default("NVIDIA"),
      description: z.string(),
      heroBackground: z.string().default("bg-ambient"),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

const general = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/general" }),
  schema: ({ image }) =>
    z.object({
      titleEs: z.string(),
      vendor: z.literal("general"),
      vendorLabel: z.string().default("Tecnologías de uso general"),
      description: z.string(),
      heroBackground: z.string().default("bg-ambient"),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { amd, apis, extra, intel, nvidia, general };
