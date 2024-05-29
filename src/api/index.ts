import type { Context } from "elysia";
import getData from "../helper/getData";
import template from "../helper/template";
import style from "../themes/style";

export type UiConfig = {
  text_color: string;
  icon_color: string;
  rank_color: string;
  border_color: string;
  card_color: string;
};

export default async function readmeStats(ctx: Context): Promise<Record<string, unknown> | string> {
  try {
    const { username, theme: themeQuery, textColor, iconColor, rankColor, borderColor, cardColor, format } = ctx.query;

    if (!username) {
      ctx.set.status = 404;
      return { docs: "https://docs.hedystia.com/stats/start" };
    }

    const theme = style(themeQuery);
    const uiConfig: UiConfig = {
      text_color: textColor || theme.TextColor,
      icon_color: iconColor || theme.IconColor,
      rank_color: rankColor || theme.RankColor,
      border_color: borderColor || theme.BorderColor,
      card_color: cardColor || theme.BackgroundColor,
    };

    const fetchStats = await getData(username, ctx.headers.authorization || "");

    ctx.set.headers["Cache-Control"] = "s-maxage=1800, stale-while-revalidate";

    if (format === "json") {
      return fetchStats;
    }

    ctx.set.headers["Content-Type"] = "image/svg+xml";
    return template(fetchStats, uiConfig);
  } catch (error) {
    ctx.set.headers["Cache-Control"] = "s-maxage=1800, stale-while-revalidate";
    ctx.set.status = 500;
    return { error: (error as Error).message };
  }
}
