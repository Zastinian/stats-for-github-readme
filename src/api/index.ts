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

export default async function readmeStats(req: any, res: any): Promise<any> {
  try {
    let username = req.query.username;

    let theme = style(req.query.theme);

    let uiConfig: UiConfig = {
      text_color: req.query.textColor || theme.TextColor,
      icon_color: req.query.iconColor || theme.IconColor,
      rank_color: req.query.rankColor || theme.RankColor,
      border_color: req.query.borderColor || theme.BorderColor,
      card_color: req.query.cardColor || theme.BackgroundColor,
    };

    if (!username) return res.redirect("https://docs.hedystia.com/docs/category/github-stats");

    var fetchStats = (await getData(username)) as any;
    res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");

    if (req.query.format === "json") {
      res.json(fetchStats);
    } else {
      res.setHeader("Content-Type", "image/svg+xml");
      let svg = template(fetchStats, uiConfig);
      res.send(svg);
    }
  } catch (error: any) {
    res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");
    res.status(500).send(error.message);
  }
}
