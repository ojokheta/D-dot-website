import "../styles.css";
import type { PageId } from "../types";
import { renderLayout } from "./layout";
import { initUi } from "./ui";

type MountOptions = {
  active: PageId;
  content: string;
  mainId?: string | undefined;
};

export function mountPage({ active, content, mainId }: MountOptions): void {
  const app = document.querySelector<HTMLElement>("#app");

  if (!app) {
    throw new Error("Missing #app root");
  }

  app.innerHTML = renderLayout({ active, content, mainId });
  initUi();
}
