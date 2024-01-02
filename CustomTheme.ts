import {
  MD3DarkTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';




const darkYellowColors = {
    
    "colors": {
      "primary": "rgb(248, 189, 42)",
      "darkYellow": "rgb(198, 151, 34)",
      "onPrimary": "rgb(64, 45, 0)",
      "primaryContainer": "rgb(92, 67, 0)",
      "onPrimaryContainer": "rgb(255, 223, 160)",
      "secondary": "rgb(79, 216, 235)",
      "onSecondary": "rgb(0, 54, 61)",
      "secondaryContainer": "rgb(0, 79, 88)",
      "onSecondaryContainer": "rgb(151, 240, 255)",
      "tertiary": "rgb(177, 207, 169)",
      "onTertiary": "rgb(29, 54, 27)",
      "tertiaryContainer": "rgb(51, 77, 48)",
      "onTertiaryContainer": "rgb(204, 235, 196)",
      "error": "rgb(255, 180, 171)",
      "onError": "rgb(105, 0, 5)",
      "errorContainer": "rgb(147, 0, 10)",
      "onErrorContainer": "rgb(255, 180, 171)",
      "background": "rgb(30, 27, 22)",
      "onBackground": "rgb(233, 225, 216)",
      "surface": "rgb(30, 27, 22)",
      "onSurface": "rgb(233, 225, 216)",
      "surfaceVariant": "rgb(77, 70, 57)",
      "onSurfaceVariant": "rgb(208, 197, 180)",
      "outline": "rgb(153, 143, 128)",
      "outlineVariant": "rgb(77, 70, 57)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(233, 225, 216)",
      "inverseOnSurface": "rgb(52, 48, 42)",
      "inversePrimary": "rgb(121, 89, 0)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(41, 35, 23)",
        "level2": "rgb(47, 40, 24)",
        "level3": "rgb(54, 45, 24)",
        "level4": "rgb(56, 46, 24)",
        "level5": "rgb(61, 50, 25)"
      },
      "surfaceDisabled": "rgba(233, 225, 216, 0.12)",
      "onSurfaceDisabled": "rgba(233, 225, 216, 0.38)",
      "backdrop": "rgba(54, 48, 36, 0.4)"
    }
}

const darkYellowTheme = {
    ...DefaultTheme,
    ...darkYellowColors
};

const customTheme = { ...darkYellowTheme };

export default customTheme;