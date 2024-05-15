import { Context } from "elysia";
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

export default async function readmeStats(ctx: Context): Promise<any> {
  try {
    let username = ctx.query.username;

    let theme = style(ctx.query.theme);

    let uiConfig: UiConfig = {
      text_color: ctx.query.textColor || theme.TextColor,
      icon_color: ctx.query.iconColor || theme.IconColor,
      rank_color: ctx.query.rankColor || theme.RankColor,
      border_color: ctx.query.borderColor || theme.BorderColor,
      card_color: ctx.query.cardColor || theme.BackgroundColor,
    };

    if (!username) return ctx.redirect("https://docs.hedystia.com/stats/start");

    var fetchStats = await getData(username);
    ctx.set.headers["Cache-Control"] = "s-maxage=1800, stale-while-revalidate"

    if (ctx.query.format === "json") {
      return fetchStats;
    } else {
      ctx.set.headers["Content-Type"] = "image/svg+xmle"
      let svg = template(fetchStats, uiConfig);
      return svg
    }
  } catch (error: any) {
    ctx.set.headers["Cache-Control"] = "s-maxage=1800, stale-while-revalidate"
    ctx.set.status = 500;
    return error.message
  }
}
