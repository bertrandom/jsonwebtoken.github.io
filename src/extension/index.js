import {
  setupTokenEditor,
  setTokenEditorValue,
  getTokenEditorValue
} from "../editor";
import { setupTokenPageInspector } from "./page-inspector.js";
import { shareJwtLink, shareJwtTextElement } from "./dom-elements.js";
import { getTokenFromClipboardIfPossible } from "./utils.js";
import strings from "../strings.js";

function loadFromClipboardIfPossible() {
  const token = getTokenFromClipboardIfPossible();
  if (token) {
    setTokenEditorValue(token);
  }
}

// Initialization
setupTokenEditor();
loadFromClipboardIfPossible();
setupTokenPageInspector();
