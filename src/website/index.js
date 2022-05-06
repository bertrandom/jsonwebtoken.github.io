import { setupTokenEditor, setTokenEditorValue } from "../editor";
import { setupJwtCounter } from "./counter.js";
import { setupHighlighting } from "./highlighting.js";
import {
    publicKeyTextArea,
    debuggerSection,
} from "./dom-elements.js";

import queryString from "querystring";

/* For initialization, look at the end of this file */

function parseLocationQuery() {
    const source = {
        ...queryString.parse(document.location.search.substr(1)),
        ...queryString.parse(document.location.hash.substr(1))
    }

    const keys = [
        "id_token",
        "access_token",
        "value",
        "token",
        "debugger-io?token"
    ];
    for (const key of keys) {
        const token = source[key];

        if (token) {
            if (source.publicKey) {
                publicKeyTextArea.value = source.publicKey;
            }

            setTokenEditorValue(token);

            debuggerSection.scrollIntoView(true);

            break;
        }
    }
}

// Initialization
setupTokenEditor();
parseLocationQuery();
setupHighlighting();
setupJwtCounter();
