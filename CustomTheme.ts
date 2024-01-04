import {
  MD3DarkTheme as DefaultTheme,
} from 'react-native-paper';




const darkYellowColors = {
    
  "colors": {
    "primary": "rgb(254,226,45)",
    "darkYellow": "rgb(203, 180, 36)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(255, 227, 46)",
    "onPrimaryContainer": "rgb(33, 28, 0)",
    "secondary": "rgb(101, 95, 64)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(236, 227, 188)",
    "onSecondaryContainer": "rgb(32, 28, 5)",
    "tertiary": "rgb(103, 132, 115)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(195, 236, 208)",
    "onTertiaryContainer": "rgb(0, 33, 17)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(101,95,64)",
    "onBackground": "rgb(29, 28, 22)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(29, 28, 22)",
    "surfaceVariant": "rgb(233, 226, 208)",
    "onSurfaceVariant": "rgb(74, 71, 57)",
    "outline": "rgb(123, 119, 104)",
    "outlineVariant": "rgb(204, 198, 181)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(50, 48, 42)",
    "inverseOnSurface": "rgb(245, 240, 231)",
    "inversePrimary": "rgb(225, 199, 0)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(248, 243, 242)",
      "level2": "rgb(243, 238, 235)",
      "level3": "rgb(239, 234, 227)",
      "level4": "rgb(237, 232, 224)",
      "level5": "rgb(234, 229, 219)"
    },
    "surfaceDisabled": "rgba(29, 28, 22, 0.12)",
    "onSurfaceDisabled": "rgba(29, 28, 22, 0.38)",
    "backdrop": "rgba(51, 48, 36, 0.4)"
  }
}

const darkYellowTheme = {
    ...DefaultTheme,
    ...darkYellowColors
};

const customTheme = { ...darkYellowTheme };

export default customTheme;