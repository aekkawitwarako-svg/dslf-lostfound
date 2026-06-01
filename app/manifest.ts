import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {

  return {

    name: "DSLF",
    short_name: "DSLF",

    description: "Debsirin Lost & Found",

    start_url: "/",

    display: "standalone",

    background_color: "#000000",

    theme_color: "#000000",

    orientation: "portrait",

    icons: [

      {
        src: "/assets/DS Lost and Found logo.png",
        sizes: "192x192",
        type: "image/png",
      },

      {
        src: "/assets/DS Lost and Found logo.png",
        sizes: "512x512",
        type: "image/png",
      },

    ],

  };

}