interface IInnerTheme {
  [key: string]: string | number;
}

export interface ITheme {
  readonly [key: string]: IInnerTheme | number[];
}

export const globalStyles: ITheme = {
  space: [0, 2, 4, 8, 16, 32, 48, 64, 128, 256],

  animation: {
    main: "250ms cubic-bezier(0.4, 0, 0.2, 1)}",
    long: "500ms cubic-bezier(0.4, 0, 0.2, 1)}",
  },

  fontFamily: {
    main: "montserrat",
  },

  fontSize: {
    xxs: "10px",
    xs: "12px",
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "20px",
    xxxl: "24px",
    xxl: "28px",
    bxl: "32px",
    bxxl: "40px",
    bxxxl: "44px",
    heroTab: "56px",
    hero: "88px",
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    boldxl: 900,
  },

  color: {
    accent: "#29974e",
    white: "#fcfcfc",
    snowWhite: "#fff",
    bgGrey: "#f4f4f4",
    bgWhite: "#eee",
    textMain: "#323232",
    textSecondary: "#766f6f",
    textGrey: "#9c9c9c",
  },

  radii: {
    small: "4px",
    normal: "8px",
    large: "16px",
    circle: "50%",
    round: "100vw",
  },

  border: {
    regular: "3px solid #29974e",
  },
};
