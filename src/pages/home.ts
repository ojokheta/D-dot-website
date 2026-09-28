import { mountPage } from "../lib/page";
import { renderHome } from "../views/home";

mountPage({
  active: "home",
  mainId: "home",
  content: renderHome(),
});
