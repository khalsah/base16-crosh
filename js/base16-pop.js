// Base16 Pop
// Scheme: Chris Kempson (http://chriskempson.com)

var colour_scheme = {
        'base00': '#000000',
        'base01': '#202020',
        'base02': '#303030',
        'base03': '#505050',
        'base04': '#b0b0b0',
        'base05': '#d0d0d0',
        'base06': '#e0e0e0',
        'base07': '#ffffff',
        'base08': '#eb008a',
        'base09': '#f29333',
        'base0A': '#f8ca12',
        'base0B': '#37b349',
        'base0C': '#00aabb',
        'base0D': '#0e5a94',
        'base0E': '#b31e8d',
        'base0F': '#7a2d00',
};

var cursor_colour = "rgba(208, 208, 208, 0.5)";
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
