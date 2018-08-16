import {ColorScheme, TemplateOutput} from '../../types';

export default function generate(
    name: string,
    colors: ColorScheme
): TemplateOutput {
    const theme = [
        colors.slackColumnBackground,
        colors.slackMenuBackgroundHover,
        colors.slackActiveItem,
        colors.slackActiveItemText,
        colors.slackHoverItem,
        colors.slackText,
        colors.slackActivePresence,
        colors.slackMentionBadge
    ];

    return {
        fileName: `${name}-slack.txt`,
        content: theme.join(',')
    };
}
