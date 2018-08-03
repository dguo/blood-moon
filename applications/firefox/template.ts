import {ColorScheme, TemplateOutput} from '../../types';

export function generate(name: string, colors: ColorScheme): TemplateOutput {
  const content = `{
  "manifest_version": 2,
  "name": "Blood Moon",
  "version": "0.1.0",
  "author": "Danny Guo",
  "homepage_url": "https://github.com/dguo/blood-moon",
  "applications": {
    "gecko": {
      "id": "@blood-moon",
      "strict_min_version": "61.0"
    }
  },
  "icons": {
    "48": "img/logo-48.png",
    "96": "img/logo-96.png"
  },
  "theme": {
    "colors": {
      "accentcolor": "${colors.background}",
      "button_background_active": "${colors.lightWhite}",
      "button_background_hover": "${colors.lightWhite}",
      "icons": "${colors.foreground}",
      "icons_attention": "${colors.blue}",
      "popup": "${colors.background}",
      "popup_highlight": "${colors.selection}",
      "popup_highlight_text": "${colors.selectionText}",
      "popup_text": "${colors.foreground}",
      "tab_background_text": "${colors.foreground}",
      "tab_line": "${colors.background}",
      "tab_loading": "${colors.selectionText}",
      "tab_selected": "${colors.selection}",
      "tab_text": "${colors.selectionText}",
      "toolbar": "${colors.selection}",
      "toolbar_field": "${colors.background}",
      "toolbar_field_border_focus": "${colors.red}",
      "toolbar_field_text": "${colors.foreground}",
      "textcolor": "${colors.foreground}"
    }
  }
}
`;

  return {
    fileName: `manifest.json`,
    content
  };
}
