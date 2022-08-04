import "../styles/globals.css";
/// StorybookでTailwindCSSが動いていない問題の対応法
/// 参考: https://stackoverflow.com/questions/68020712/tailwind-css-classes-not-showing-in-storybook-build/70805809#70805809
import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
