export enum Color {
  red,
  blue,
  black,
  green,
  yellow
}

export interface Hero {
  name: string;
  color: Color;
  canfly: boolean;
}
