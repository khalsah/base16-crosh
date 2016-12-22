// Base16 Unikitty Dark
// Scheme: Josh W Lewis (@joshwlewis)

var colour_scheme = {
        'base00': '#2e2a31',
        'base01': '#4a464d',
        'base02': '#666369',
        'base03': '#838085',
        'base04': '#9f9da2',
        'base05': '#bcbabe',
        'base06': '#d8d7da',
        'base07': '#f5f4f7',
        'base08': '#d8137f',
        'base09': '#d65407',
        'base0A': '#dc8a0e',
        'base0B': '#17ad98',
        'base0C': '#149bda',
        'base0D': '#796af5',
        'base0E': '#bb60ea',
        'base0F': '#c720ca',
};

var cursor_colour = "rgba(188, 186, 190, 0.5)";
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
