// Base16 Brewer
// Scheme: Timothée Poisot (http://github.com/tpoisot)

var colour_scheme = {
        'base00': '#0c0d0e',
        'base01': '#2e2f30',
        'base02': '#515253',
        'base03': '#737475',
        'base04': '#959697',
        'base05': '#b7b8b9',
        'base06': '#dadbdc',
        'base07': '#fcfdfe',
        'base08': '#e31a1c',
        'base09': '#e6550d',
        'base0A': '#dca060',
        'base0B': '#31a354',
        'base0C': '#80b1d3',
        'base0D': '#3182bd',
        'base0E': '#756bb1',
        'base0F': '#b15928',
};

var cursor_colour = "rgba(183, 184, 185, 0.5)";
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
