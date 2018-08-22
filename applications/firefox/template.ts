import {titleCase} from 'change-case';

import {ColorScheme, Meta, TemplateOutput} from '../../types';

export default function generate(
    meta: Meta,
    colors: ColorScheme
): TemplateOutput {
    const content = `{
    "manifest_version": 2,
    "name": "${titleCase(meta.name)}",
    "version": "0.1.0",
    "author": "${meta.maintainer || ''}",
    "homepage_url": "${meta.homepage || ''}",
    "applications": {
        "gecko": {
            "id": "@${meta.name}",
            "strict_min_version": "61.0"
        }
    },
    "icons": {
        "48": "icon.png",
        "96": "icon@2x.png"
    },
    "theme": {
        "colors": {
            "accentcolor": "${colors.firefoxAccent}",
            "button_background_active": "${
                colors.firefoxButtonBackgroundActive
            }",
            "button_background_hover": "${colors.firefoxButtonBackgroundHover}",
            "icons": "${colors.firefoxIcons}",
            "icons_attention": "${colors.firefoxIconsAttention}",
            "popup": "${colors.firefoxPopup}",
            "popup_highlight": "${colors.firefoxPopupHighlight}",
            "popup_highlight_text": "${colors.firefoxPopupHighlightText}",
            "popup_text": "${colors.firefoxPopupText}",
            "tab_background_text": "${colors.firefoxTabBackgroundText}",
            "tab_line": "${colors.firefoxTabLine}",
            "tab_loading": "${colors.firefoxTabLoading}",
            "tab_selected": "${colors.firefoxTabSelected}",
            "tab_text": "${colors.firefoxTabText}",
            "toolbar": "${colors.firefoxToolbar}",
            "toolbar_field": "${colors.firefoxToolbarField}",
            "toolbar_field_border_focus": "${
                colors.firefoxToolbarFieldBorderFocus
            }",
            "toolbar_field_text": "${colors.firefoxToolbarFieldText}",
            "textcolor": "${colors.firefoxText}"
        }
    }
}
`;

    return {
        fileName: `manifest.json`,
        content
    };
}
