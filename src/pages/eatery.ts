import { mountPage } from "../lib/page";
import { renderEatery } from "../views/eatery";

mountPage({
  active: "eatery",
  content: renderEatery(),
});
