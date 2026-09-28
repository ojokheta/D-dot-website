import { mountPage } from "../lib/page";
import { renderContact } from "../views/contact";

mountPage({
  active: "contact",
  content: renderContact(),
});
