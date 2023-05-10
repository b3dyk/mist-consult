interface IInnerTheme {
  [key: string]: string | number;
}

export interface ITheme {
  readonly [key: string]: IInnerTheme | number[];
}

export const globalStyles: ITheme = {
  space: [0, 2, 4, 8, 16, 32, 48, 64, 128, 256],

  animation: { main: "250ms cubic-bezier(0.4, 0, 0.2, 1)}" },

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
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  color: {
    accent: "#29974e",
    white: "#fcfcfc",
    bgGrey: "#f4f4f4",
    bgWhite: "#eee",
    textMain: "#323232",
    textSecondary: "#766f6f",
  },

  radii: {
    small: "4px",
    normal: "8px",
    large: "16px",
    circle: "50%",
    round: "100vw",
  },
};
