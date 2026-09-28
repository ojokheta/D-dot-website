import { mountPage } from "../lib/page";
import { renderAbout } from "../views/about";

mountPage({
  active: "about",
  content: renderAbout(),
});
