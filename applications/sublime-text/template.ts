import {titleCase} from 'change-case';

import {ColorScheme, Meta, TemplateOutput} from '../../types';

export default function generate(
    meta: Meta,
    colors: ColorScheme
): TemplateOutput {
    const content = `{
    "name": "${titleCase(meta.name)}",
    "globals": {
        "background": "",
        "foreground": "",
        "caret": "",
        "line_highlight": ""
    },
    "rules": [

    ]
}

.hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: ${colors.hljsBackground};
    color: ${colors.hljsForeground};
}

.hljs-keyword {
    color: ${colors.hljsKeyword};
}

.hljs-built_in {
    color: ${colors.hljsBuiltIn};
}

.hljs-type {
    color: ${colors.hljsType};
}

.hljs-literal {
    color: ${colors.hljsLiteral};
}

.hljs-number {
    color: ${colors.hljsNumber};
}

.hljs-regexp {
    color: ${colors.hljsRegExp};
}

.hljs-string {
    color: ${colors.hljsString};
}

.hljs-subst {
    color: ${colors.hljsSubst};
}

.hljs-symbol {
    color: ${colors.hljsSymbol};
}

.hljs-class {
    color: ${colors.hljsClass};
}

.hljs-function {
    color: ${colors.hljsFunction};
}

.hljs-title {
    color: ${colors.hljsTitle};
}

.hljs-params {
    color: ${colors.hljsParams};
}

.hljs-comment {
    color: ${colors.hljsComment};
}

.hljs-doctag {
    color: ${colors.hljsDocTag};
}

.hljs-meta {
    color: ${colors.hljsMeta};
}

.hljs-meta-keyword {
    color: ${colors.hljsMetaKeyword};
}

.hljs-meta-string {
    color: ${colors.hljsMetaString};
}

.hljs-section {
    color: ${colors.hljsSection};
}

.hljs-tag {
    color: ${colors.hljsTag};
}

.hljs-name {
    color: ${colors.hljsName};
}

.hljs-built-in-name {
    color: ${colors.hljsBuiltInName};
}

.hljs-attr {
    color: ${colors.hljsAttr};
}

.hljs-attribute {
    color: ${colors.hljsAttribute};
}

.hljs-variable {
    color: ${colors.hljsVariable};
}

.hljs-bullet {
    color: ${colors.hljsBullet};
}

.hljs-code {
    color: ${colors.hljsCode};
}

.hljs-emphasis {
    color: ${colors.hljsEmphasis};
}

.hljs-strong {
    color: ${colors.hljsStrong};
}

.hljs-formula {
    color: ${colors.hljsFormula};
}

.hljs-link {
    color: ${colors.hljsLink};
}

.hljs-quote {
    color: ${colors.hljsQuote};
}

.hljs-selector-tag {
    color: ${colors.hljsSelectorTag};
}

.hljs-selector-id {
    color: ${colors.hljsSelectorId};
}

.hljs-selector-class {
    color: ${colors.hljsSelectorClass};
}

.hljs-selector-attr {
    color: ${colors.hljsSelectorAttr};
}

.hljs-selector-pseudo {
    color: ${colors.hljsSelectorPseudo};
}

.hljs-template-tag {
    color: ${colors.hljsTemplateTag};
}

.hljs-template-variable {
    color: ${colors.hljsTemplateVariable};
}

.hljs-addition {
    color: ${colors.hljsDiffAddition};
}

.hljs-deletion {
    color: ${colors.hljsDiffDeletion};
}
`;

    return {
        fileName: `${meta.name}.sublime-color-scheme`,
        content
    };
}
