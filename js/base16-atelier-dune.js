// Base16 Atelier Dune
// Scheme: Bram de Haan (http://atelierbramdehaan.nl)

var colour_scheme = {
        'base00': '#20201d',
        'base01': '#292824',
        'base02': '#6e6b5e',
        'base03': '#7d7a68',
        'base04': '#999580',
        'base05': '#a6a28c',
        'base06': '#e8e4cf',
        'base07': '#fefbec',
        'base08': '#d73737',
        'base09': '#b65611',
        'base0A': '#ae9513',
        'base0B': '#60ac39',
        'base0C': '#1fad83',
        'base0D': '#6684e1',
        'base0E': '#b854d4',
        'base0F': '#d43552',
};

var cursor_colour = "rgba(166, 162, 140, 0.5)";
term_.prefs_.set('background-color', colour_scheme.base00);
term_.prefs_.set('foreground-color', colour_scheme.base05);
term_.prefs_.set('cursor-color', cursor_colour);

term_.prefs_.set('color-palette-overrides', 
                        [colour_scheme.base00,
                        colour_scheme.base08,
                        colour_scheme.base0B,
                        colour_scheme.base0A,
                        colour_scheme.base0D,
                        colour_scheme.base0E,
                        colour_scheme.base0C,
                        colour_scheme.base05,
                        colour_scheme.base03,
                        colour_scheme.base08,
                        colour_scheme.base0B,
                        colour_scheme.base0A,
                        colour_scheme.base0D,
                        colour_scheme.base0E,
                        colour_scheme.base0C,
                        colour_scheme.base07,
                        colour_scheme.base09,
                        colour_scheme.base0F,
                        colour_scheme.base01,
                        colour_scheme.base02,
                        colour_scheme.base04,
                        colour_scheme.base06]);
