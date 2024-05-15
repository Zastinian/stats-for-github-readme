const style = (theme?: string) => {
  switch (theme) {
    case "default":
      return {
        RankColor: "4c71f2",
        BorderColor: "2f80ed",
        IconColor: "4c71f2",
        TextColor: "333",
        BackgroundColor: "fffefe",
      };
    case "github-dark":
      return {
        RankColor: "539bf5",
        BorderColor: "8b949e",
        IconColor: "539bf5",
        TextColor: "adbac7",
        BackgroundColor: "1e2228",
      };
    case "github":
      return {
        RankColor: "0366d6",
        BorderColor: "000000",
        IconColor: "0366d6",
        TextColor: "586069",
        BackgroundColor: "fff",
      };
    case "dark":
      return {
        RankColor: "79ff97",
        BorderColor: "fff",
        IconColor: "79ff97",
        TextColor: "9f9f9f",
        BackgroundColor: "151515",
      };
    case "radical":
      return {
        RankColor: "f8d847",
        BorderColor: "fe428e",
        IconColor: "f8d847",
        TextColor: "a9fef7",
        BackgroundColor: "141321",
      };
    case "merko":
      return {
        RankColor: "b7d364",
        BorderColor: "abd200",
        IconColor: "b7d364",
        TextColor: "68b587",
        BackgroundColor: "0a0f0b",
      };
    case "gruvbox":
      return {
        RankColor: "fe8019",
        BorderColor: "fabd2f",
        IconColor: "fe8019",
        TextColor: "8ec07c",
        BackgroundColor: "282828",
      };
    case "tokyonight":
      return {
        RankColor: "bf91f3",
        BorderColor: "70a5fd",
        IconColor: "bf91f3",
        TextColor: "38bdae",
        BackgroundColor: "1a1b27",
      };
    case "onedark":
      return {
        RankColor: "8eb573",
        BorderColor: "e4bf7a",
        IconColor: "8eb573",
        TextColor: "df6d74",
        BackgroundColor: "282c34",
      };
    case "cobalt":
      return {
        RankColor: "0480ef",
        BorderColor: "e683d9",
        IconColor: "0480ef",
        TextColor: "75eeb2",
        BackgroundColor: "193549",
      };
    case "synthwave":
      return {
        RankColor: "ef8539",
        BorderColor: "e2e9ec",
        IconColor: "ef8539",
        TextColor: "e5289e",
        BackgroundColor: "2b213a",
      };
    case "highcontrast":
      return {
        RankColor: "00ffff",
        BorderColor: "e7f216",
        IconColor: "00ffff",
        TextColor: "fff",
        BackgroundColor: "000",
      };
    case "dracula":
      return {
        RankColor: "ff6e96",
        BorderColor: "79dafa",
        IconColor: "ff6e96",
        TextColor: "f8f8f2",
        BackgroundColor: "282a36",
      };
    case "prussian":
      return {
        RankColor: "38a0ff",
        BorderColor: "bddfff",
        IconColor: "38a0ff",
        TextColor: "6e93b5",
        BackgroundColor: "172f45",
      };
    case "monokai":
      return {
        RankColor: "e28905",
        BorderColor: "eb1f6a",
        IconColor: "e28905",
        TextColor: "f1f1eb",
        BackgroundColor: "272822",
      };
    case "vue":
      return {
        RankColor: "41b883",
        BorderColor: "41b883",
        IconColor: "41b883",
        TextColor: "273849",
        BackgroundColor: "fffefe",
      };
    case "vue-dark":
      return {
        RankColor: "41b883",
        BorderColor: "41b883",
        IconColor: "41b883",
        TextColor: "fffefe",
        BackgroundColor: "273849",
      };
    case "shades-of-purple":
      return {
        RankColor: "b362ff",
        BorderColor: "fad000",
        IconColor: "b362ff",
        TextColor: "a599e9",
        BackgroundColor: "2d2b55",
      };
    case "nightowl":
      return {
        RankColor: "ffeb95",
        BorderColor: "c792ea",
        IconColor: "ffeb95",
        TextColor: "7fdbca",
        BackgroundColor: "011627",
      };
    case "buefy":
      return {
        RankColor: "ff3860",
        BorderColor: "7957d5",
        IconColor: "ff3860",
        TextColor: "363636",
        BackgroundColor: "ffffff",
      };
    case "blue-green":
      return {
        RankColor: "f5b700",
        BorderColor: "2f97c1",
        IconColor: "f5b700",
        TextColor: "0cf574",
        BackgroundColor: "040f0f",
      };
    case "algolia":
      return {
        RankColor: "2DDE98",
        BorderColor: "00AEFF",
        IconColor: "2DDE98",
        TextColor: "FFFFFF",
        BackgroundColor: "050F2C",
      };
    case "great-gatsby":
      return {
        RankColor: "ffb74d",
        BorderColor: "ffa726",
        IconColor: "ffb74d",
        TextColor: "ffd95b",
        BackgroundColor: "000000",
      };
    case "darcula":
      return {
        RankColor: "84628F",
        BorderColor: "BA5F17",
        IconColor: "84628F",
        TextColor: "BEBEBE",
        BackgroundColor: "242424",
      };
    case "bear":
      return {
        RankColor: "00AEFF",
        BorderColor: "e03c8a",
        IconColor: "00AEFF",
        TextColor: "bcb28d",
        BackgroundColor: "1f2023",
      };
    case "solarized-dark":
      return {
        RankColor: "b58900",
        BorderColor: "268bd2",
        IconColor: "b58900",
        TextColor: "859900",
        BackgroundColor: "002b36",
      };
    case "solarized-light":
      return {
        RankColor: "b58900",
        BorderColor: "268bd2",
        IconColor: "b58900",
        TextColor: "859900",
        BackgroundColor: "fdf6e3",
      };
    case "chartreuse-dark":
      return {
        RankColor: "00AEFF",
        BorderColor: "7fff00",
        IconColor: "00AEFF",
        TextColor: "fff",
        BackgroundColor: "000",
      };
    case "nord":
      return {
        RankColor: "d8dee9",
        BorderColor: "81a1c1",
        TextColor: "d8dee9",
        IconColor: "88c0d0",
        BackgroundColor: "2e3440",
      };
    case "gotham":
      return {
        RankColor: "599cab",
        BorderColor: "2aa889",
        IconColor: "599cab",
        TextColor: "99d1ce",
        BackgroundColor: "0c1014",
      };
    case "material-palenight":
      return {
        RankColor: "89ddff",
        BorderColor: "c792ea",
        IconColor: "89ddff",
        TextColor: "a6accd",
        BackgroundColor: "292d3e",
      };
    case "graywhite":
      return {
        RankColor: "24292e",
        BorderColor: "24292e",
        IconColor: "24292e",
        TextColor: "24292e",
        BackgroundColor: "ffffff",
      };
    case "vision-friendly-dark":
      return {
        RankColor: "785ef0",
        BorderColor: "ffb000",
        IconColor: "785ef0",
        TextColor: "ffffff",
        BackgroundColor: "000000",
      };
    case "ayu-mirage":
      return {
        RankColor: "73d0ff",
        BorderColor: "f4cd7c",
        IconColor: "73d0ff",
        TextColor: "c7c8c2",
        BackgroundColor: "1f2430",
      };
    case "midnight-purple":
      return {
        RankColor: "9f4bff",
        BorderColor: "9745f5",
        IconColor: "9f4bff",
        TextColor: "ffffff",
        BackgroundColor: "000000",
      };
    case "calm":
      return {
        RankColor: "edae49",
        BorderColor: "e07a5f",
        IconColor: "edae49",
        TextColor: "ebcfb2",
        BackgroundColor: "373f51",
      };
    case "flag-india":
      return {
        RankColor: "250E62",
        BorderColor: "ff8f1c",
        IconColor: "250E62",
        TextColor: "509E2F",
        BackgroundColor: "ffffff",
      };
    case "omni":
      return {
        RankColor: "e7de79",
        BorderColor: "FF79C6",
        IconColor: "e7de79",
        TextColor: "E1E1E6",
        BackgroundColor: "191622",
      };
    case "react":
      return {
        RankColor: "61dafb",
        BorderColor: "61dafb",
        IconColor: "61dafb",
        TextColor: "ffffff",
        BackgroundColor: "20232a",
      };
    case "jolly":
      return {
        RankColor: "a960ff",
        BorderColor: "ff64da",
        IconColor: "a960ff",
        TextColor: "ffffff",
        BackgroundColor: "291B3E",
      };
    case "maroongold":
      return {
        RankColor: "F7EF8A",
        BorderColor: "F7EF8A",
        IconColor: "F7EF8A",
        TextColor: "E0AA3E",
        BackgroundColor: "260000",
      };
    case "yeblu":
      return {
        RankColor: "ffff00",
        BorderColor: "ffff00",
        IconColor: "ffff00",
        TextColor: "ffffff",
        BackgroundColor: "002046",
      };
    case "blueberry":
      return {
        RankColor: "89ddff",
        BorderColor: "82aaff",
        IconColor: "89ddff",
        TextColor: "27e8a7",
        BackgroundColor: "242938",
      };
    case "slateorange":
      return {
        RankColor: "faa627",
        BorderColor: "faa627",
        IconColor: "faa627",
        TextColor: "ffffff",
        BackgroundColor: "36393f",
      };
    case "kacho-ga":
      return {
        RankColor: "a64833",
        BorderColor: "bf4a3f",
        IconColor: "a64833",
        TextColor: "d9c8a9",
        BackgroundColor: "402b23",
      };
    case "outrun":
      return {
        RankColor: "ff1aff",
        BorderColor: "ffcc00",
        IconColor: "ff1aff",
        TextColor: "8080ff",
        BackgroundColor: "141439",
      };
    case "ocean-dark":
      return {
        RankColor: "FFFFFF",
        BorderColor: "8957B2",
        IconColor: "FFFFFF",
        TextColor: "92D534",
        BackgroundColor: "151A28",
      };
    case "city-lights":
      return {
        RankColor: "4798FF",
        BorderColor: "5D8CB3",
        IconColor: "4798FF",
        TextColor: "718CA1",
        BackgroundColor: "1D252C",
      };
    case "flag-brazil":
      return {
        RankColor: "002776FF",
        BorderColor: "FEDF00FF",
        IconColor: "002776FF",
        TextColor: "009B3AFF",
        BackgroundColor: "fffefe",
      };
    default:
      return {
        RankColor: "4c71f2",
        BorderColor: "2f80ed",
        IconColor: "4c71f2",
        TextColor: "333",
        BackgroundColor: "fffefe",
      };
  }
};

export default style;
