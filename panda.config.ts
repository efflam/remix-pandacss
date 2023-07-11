import { defineConfig, defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  name: "button",
  description: "The styles for the Button component",
  jsx: ["Button", "AlertDialog"],
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 100ms ease-out",
    _active: {
      transform: "scale(0.98)",
    },
    _focus: {
      outlineWidth: "2px",
      outlineColor: "blue.500",
      outlineOffset: "2px",
    },
  },
  variants: {
    purpose: {
      neutral: {
        colorPalette: "gray",
      },
      positive: {
        colorPalette: "green",
      },
      warning: {
        colorPalette: "orange",
      },
      negative: {
        colorPalette: "red",
      },
    },
    variant: {
      solid: {
        bg: "colorPalette.500",
        color: "white",
        _hover: {
          bg: "colorPalette.600",
        },
      },
      subtle: {
        bg: "colorPalette.100",
        color: "colorPalette.800",
        _hover: {
          bg: "colorPalette.200",
          color: "colorPalette.800",
        },
      },
      outline: {
        bg: "transparent",
        color: "colorPalette.700",
        _hover: {
          bg: "colorPalette.200",
          color: "colorPalette.800",
          _before: {
            borderColor: "transparent",
          },
        },
        _before: {
          content: "''",
          position: "absolute",
          inset: 0,
          borderWidth: 1,
          borderColor: "colorPalette.200",
          transition: "all 100ms ease-out",
        },
      },
      ghost: {
        bg: "transparent",
        color: "colorPalette.700",
        _hover: {
          bg: "colorPalette.100",
          color: "colorPalette.800",
        },
      },
    },
    size: {
      sm: { px: "4", height: "10", fontSize: "14px" },
      lg: { px: "8", fontSize: "40px" },
    },
    shape: {
      square: { borderRadius: "0" },
      circle: { borderRadius: "full" },
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      purpose: "neutral",
      css: {
        bg: "black",
        color: "white",
        _hover: {
          bg: "colorPalette.900",
        },
      },
    },
    {
      variant: "outline",
      shape: "circle",
      css: {
        _before: {
          borderRadius: "full",
        },
      },
    },
    {
      purpose: "neutral",
      variant: ["subtle", "outline", "ghost"],
      css: {
        color: "black",
      },
    },
  ],
  defaultVariants: {
    variant: "solid",
    purpose: "neutral",
    size: "sm",
    shape: "circle",
  },
});

export const buttonStatic = [
  { variant: ["*"], purpose: ["*"], size: ["*"], shape: ["*"] },
];

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  watch: true,

  // The extension for the emitted JavaScript files
  outExtension: "js",
  // Where to look for your css declarations
  include: [
    "./app/routes/**/*.{ts,tsx,js,jsx}",
    "./app/components/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          test: {
            value: "blue",
          },
        },
      },
      recipes: {
        button: buttonRecipe,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
