import { mountPage } from "../lib/page";
import { renderMenu } from "../views/menu";

mountPage({
  active: "menu",
  content: renderMenu(),
});
