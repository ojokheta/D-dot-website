import { mountPage } from "../lib/page";
import { renderCatering } from "../views/catering";

mountPage({
  active: "catering",
  content: renderCatering(),
});
