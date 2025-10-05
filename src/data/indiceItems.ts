// src/data/graphicsItems.ts
export type Vendor = "general" | "nvidia" | "amd" | "intel" | "apis" | "extra";

export type Item = {
  href: string;
  titleEs: string;
  vendor: Vendor;
};

export const indiceItems: Item[] = [
  // Tecnologías de uso general
  { href: "/general/ambient-occlusion", titleEs: "Oclusión ambiental", vendor: "general" },
  { href: "/general/anti-aliasing", titleEs: "Suavizado de bordes (Anti-Aliasing)", vendor: "general" },
  { href: "/general/bloom", titleEs: "Resplandor (Bloom)", vendor: "general" },
  { href: "/general/chromatic-aberration", titleEs: "Aberración cromática", vendor: "general" },
  { href: "/general/depth-of-field", titleEs: "Profundidad de campo (DoF)", vendor: "general" },
  { href: "/general/hdr-tone-mapping", titleEs: "Alto rango dinámico (HDR) y mapeo de tonos", vendor: "general" },
  { href: "/general/lod", titleEs: "Nivel de detalle (LOD)", vendor: "general" },
  { href: "/general/motion-blur", titleEs: "Desenfoque de movimiento (Blur & Motion Blur)", vendor: "general" },
  { href: "/general/reflections", titleEs: "Reflejos", vendor: "general" },
  { href: "/general/shadows", titleEs: "Sombras", vendor: "general" },
  { href: "/general/texture-filtering", titleEs: "Filtrado de texturas", vendor: "general" },
  { href: "/general/texture-quality", titleEs: "Calidad de texturas", vendor: "general" },
  { href: "/general/tessellation", titleEs: "Teselación", vendor: "general" },
  { href: "/general/upscaling", titleEs: "Escalado de imagen", vendor: "general" },
  { href: "/general/volumetric-effects", titleEs: "Efectos volumétricos", vendor: "general" },
  { href: "/general/vsync", titleEs: "Sincronización vertical (VSync)", vendor: "general" },
  { href: "/general/particles", titleEs: "Partículas (Particles)", vendor: "general" },
  { href: "/general/post-procesamiento", titleEs: "Post-procesamiento", vendor: "general" },
  { href: "/general/vignette", titleEs: "Viñeta (Vignette)", vendor: "general" },
  { href: "/general/film-grain", titleEs: "Grano de película (Film Grain)", vendor: "general" },
  { href: "/general/lens-flares", titleEs: "Destellos de lente (Lens Flares)", vendor: "general" },

  // NVIDIA
  { href: "/nvidia/dlss", titleEs: "DLSS (Deep Learning Super Sampling)", vendor: "nvidia" },
  { href: "/nvidia/dlaa", titleEs: "DLAA (Deep Learning Anti-Aliasing)", vendor: "nvidia" },
  { href: "/nvidia/hairworks", titleEs: "HairWorks", vendor: "nvidia" },
  { href: "/nvidia/nis", titleEs: "NIS (NVIDIA Image Scaling)", vendor: "nvidia" },
  { href: "/nvidia/physx", titleEs: "PhysX", vendor: "nvidia" },
  { href: "/nvidia/reflex", titleEs: "Reflex", vendor: "nvidia" },
  { href: "/nvidia/faceworks", titleEs: "FaceWorks", vendor: "nvidia" },
  { href: "/nvidia/freestyle", titleEs: "Freestyle", vendor: "nvidia" },

  // AMD
  { href: "/amd/fsr", titleEs: "FSR", vendor: "amd" },
  { href: "/amd/fidelityfx-suite", titleEs: "AMD FidelityFX Suite", vendor: "amd" },
  { href: "/amd/ris", titleEs: "RIS (Radeon Image Sharpening)", vendor: "amd" },
  { href: "/amd/rsr", titleEs: "RSR (Radeon Super Resolution)", vendor: "amd" },
  { href: "/amd/anti-lag", titleEs: "Radeon Anti-Lag y Anti-Lag+", vendor: "amd" },
  { href: "/amd/tressfx-hair", titleEs: "TressFX Hair", vendor: "amd" },

  // Intel
  { href: "/intel/xess", titleEs: "XeSS (Xe Super Sampling)", vendor: "intel" },
  { href: "/intel/integer-scaling", titleEs: "Integer Scaling", vendor: "intel" },
  { href: "/intel/xess-fg", titleEs: "XeSS FG (Frame Generation)", vendor: "intel" },
  { href: "/intel/low-latency-mode", titleEs: "Low Latency Mode", vendor: "intel" },
  { href: "/intel/xe-adaptive-sharpening", titleEs: "Xe Adaptive Sharpening", vendor: "intel" },

  // APIs gráficas
  { href: "/apis/directx", titleEs: "DirectX", vendor: "apis" },
  { href: "/apis/vulkan", titleEs: "Vulkan", vendor: "apis" },
  { href: "/apis/opengl", titleEs: "OpenGL", vendor: "apis" },
  { href: "/apis/metal", titleEs: "Metal", vendor: "apis" },

  // Extra
  { href: "/extra/display", titleEs: "Monitores", vendor: "extra" },
  { href: "/extra/references", titleEs: "Referencias", vendor: "extra" },
  { href: "/extra/amd-intel-nvidia", titleEs: "Comparación global", vendor: "extra" },
  { href: "/extra/fans-guide", titleEs: "Guía de ventiladores para PC", vendor: "extra" },
];
