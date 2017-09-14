export interface templateOutput {
  fileName: string,
  output: string
}

export interface colorSet {
  black: string,
  gray: string,
  white: string,
  lightWhite: string,
  green: string,
  lightGreen: string,
  cyan: string,
  lightCyan: string,
  blue: string,
  lightBlue: string,
  magenta: string,
  pink: string,
  brown: string,
  red: string,
  darkRed: string,
  lightRed: string,
  orange: string,
  yellow: string,
  lightYellow: string,
  background: string,
  foreground: string,
  selection: string,
  selectionText: string,
  link: string,
  ruler: string,
  comment: string
}

export interface template {
  name: string,
  colors: colorSet
}
