import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    borderColor: string;
    iconbgColor: string;
    icontextColor: string;
  }
}
