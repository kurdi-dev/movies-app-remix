var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var React2 = __toModule(require("react"));
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());

// app/src/shared/createEmotionCache.js
init_react();
var import_cache = __toModule(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/src/shared/theme.js
init_react();
var import_styles = __toModule(require("@mui/material/styles"));
var import_colors = __toModule(require("@mui/material/colors"));
var themeMode = "dark";
var primaryColor = "#00e59b";
var secondaryColor = "#f50057";
var theme = (0, import_styles.createTheme)({
  palette: {
    mode: themeMode,
    primary: {
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    },
    error: {
      main: import_colors.red.A400
    },
    background: {
      paper: "#14181e",
      default: "#121212"
    }
  }
});
var theme_default = theme;

// app/entry.server.jsx
var import_dotenv = __toModule(require("dotenv"));
var import_CssBaseline = __toModule(require("@mui/material/CssBaseline"));
var import_styles2 = __toModule(require("@mui/material/styles"));
var import_react = __toModule(require("@emotion/react"));
var import_create_instance = __toModule(require("@emotion/server/create-instance"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  import_dotenv.default.config();
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const MuiRemixServer = () => /* @__PURE__ */ React2.createElement(import_react.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React2.createElement(import_styles2.ThemeProvider, {
    theme: theme_default
  }, /* @__PURE__ */ React2.createElement(import_CssBaseline.default, null), /* @__PURE__ */ React2.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React2.createElement(MuiRemixServer, null));
  const { styles } = extractCriticalToChunks(html);
  let stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    const emotionKey = `${key} ${ids.join(" ")}`;
    const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  const markup = html.replace(/<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/, `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`);
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links2
});
init_react();
var React5 = __toModule(require("react"));
var import_remix3 = __toModule(require_remix());
var import_react3 = __toModule(require("@emotion/react"));
var import_material2 = __toModule(require("@mui/material"));

// app/src/components/ClientStyleContext.js
init_react();
var import_react2 = __toModule(require("react"));
var ClientStyleContext_default = (0, import_react2.createContext)({
  reset: () => {
  }
});

// app/src/layout/Main.js
init_react();
var React4 = __toModule(require("react"));
var import_Container2 = __toModule(require("@mui/material/Container"));
var import_Box2 = __toModule(require("@mui/material/Box"));

// app/src/components/Footer.js
init_react();
var React3 = __toModule(require("react"));
var import_Typography = __toModule(require("@mui/material/Typography"));
var import_Link = __toModule(require("@mui/material/Link"));
var import_material = __toModule(require("@mui/material"));
function Footer() {
  return /* @__PURE__ */ React3.createElement(import_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      py: 2
    }
  }, /* @__PURE__ */ React3.createElement(import_Typography.default, {
    variant: "button",
    color: "text.secondary",
    align: "center"
  }, "\xA9 ", new Date().getFullYear(), " Walid R. Rashed \u2022 ", /* @__PURE__ */ React3.createElement(import_Link.default, {
    color: "primary",
    sx: { textDecoration: "none" },
    href: "https://github.com/kurdi-dev"
  }, "Kurdi-Dev")));
}

// app/src/components/Header.js
init_react();
var import_styles3 = __toModule(require("@mui/material/styles"));
var import_AppBar = __toModule(require("@mui/material/AppBar"));
var import_Box = __toModule(require("@mui/material/Box"));
var import_Toolbar = __toModule(require("@mui/material/Toolbar"));
var import_Container = __toModule(require("@mui/material/Container"));
var import_IconButton = __toModule(require("@mui/material/IconButton"));
var import_Typography2 = __toModule(require("@mui/material/Typography"));
var import_InputBase = __toModule(require("@mui/material/InputBase"));
var import_Menu = __toModule(require("@mui/icons-material/Menu"));
var import_HomeOutlined = __toModule(require("@mui/icons-material/HomeOutlined"));
var import_MovieCreationOutlined = __toModule(require("@mui/icons-material/MovieCreationOutlined"));
var import_LiveTvOutlined = __toModule(require("@mui/icons-material/LiveTvOutlined"));
var import_Menu2 = __toModule(require("@mui/material/Menu"));
var import_Button = __toModule(require("@mui/material/Button"));
var import_MenuItem = __toModule(require("@mui/material/MenuItem"));
var import_Search = __toModule(require("@mui/icons-material/Search"));
var import_remix2 = __toModule(require_remix());
var links = [
  {
    label: "Home",
    href: "/",
    icon: /* @__PURE__ */ React.createElement(import_HomeOutlined.default, null)
  },
  {
    label: "Movies",
    href: "/movies",
    icon: /* @__PURE__ */ React.createElement(import_MovieCreationOutlined.default, null)
  },
  {
    label: "Tv Series",
    href: "/tv",
    icon: /* @__PURE__ */ React.createElement(import_LiveTvOutlined.default, null)
  }
];
var Search = (0, import_styles3.styled)("div")(({ theme: theme2 }) => ({
  position: "relative",
  borderRadius: theme2.shape.borderRadius,
  backgroundColor: (0, import_styles3.alpha)(theme2.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: (0, import_styles3.alpha)(theme2.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  [theme2.breakpoints.up("sm")]: {
    marginLeft: theme2.spacing(1),
    width: "auto"
  }
}));
var SearchIconWrapper = (0, import_styles3.styled)("div")(({ theme: theme2 }) => ({
  padding: theme2.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
var StyledInputBase = (0, import_styles3.styled)(import_InputBase.default)(({ theme: theme2 }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme2.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme2.spacing(4)})`,
    transition: theme2.transitions.create("width"),
    width: "10ch",
    [theme2.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));
function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return /* @__PURE__ */ React.createElement(import_AppBar.default, {
    position: "static",
    sx: {
      backgroundColor: "rgba(20, 24, 30, 0.8)",
      color: "primary.main"
    }
  }, /* @__PURE__ */ React.createElement(import_Container.default, {
    maxWidth: "xl"
  }, /* @__PURE__ */ React.createElement(import_Toolbar.default, {
    disableGutters: true
  }, /* @__PURE__ */ React.createElement(import_Typography2.default, {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: { mr: 2, display: { xs: "none", md: "flex" } }
  }, "MOVIX"), /* @__PURE__ */ React.createElement(import_Box.default, {
    sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }
  }, /* @__PURE__ */ React.createElement(import_IconButton.default, {
    size: "large",
    "aria-label": "appbar menu button",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleOpenNavMenu,
    color: "inherit"
  }, /* @__PURE__ */ React.createElement(import_Menu.default, null)), /* @__PURE__ */ React.createElement(import_Menu2.default, {
    id: "menu-appbar",
    anchorEl: anchorElNav,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    open: Boolean(anchorElNav),
    onClose: handleCloseNavMenu,
    sx: {
      display: { xs: "block", md: "none" }
    }
  }, links.map((link) => /* @__PURE__ */ React.createElement(import_MenuItem.default, {
    key: link.href,
    onClick: handleCloseNavMenu
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: link.href
  }, /* @__PURE__ */ React.createElement(import_Typography2.default, {
    textAlign: "center",
    sx: {
      color: "text.primary"
    }
  }, link.label)))))), /* @__PURE__ */ React.createElement(import_Typography2.default, {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }
  }, "MOVIX"), /* @__PURE__ */ React.createElement(import_Box.default, {
    sx: {
      flexGrow: 1,
      display: { xs: "none", md: "flex" },
      justifyContent: "center"
    }
  }, links.map((link) => /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: link.href,
    key: link.href
  }, /* @__PURE__ */ React.createElement(import_Button.default, {
    onClick: handleCloseNavMenu,
    sx: {
      my: 2,
      color: "text.primary",
      display: "block",
      px: 4,
      ":hover": { color: "primary.main" }
    }
  }, link.label)))), /* @__PURE__ */ React.createElement(import_Box.default, {
    sx: { flexGrow: 0 }
  }, /* @__PURE__ */ React.createElement(Search, null, /* @__PURE__ */ React.createElement(SearchIconWrapper, null, /* @__PURE__ */ React.createElement(import_Search.default, null)), /* @__PURE__ */ React.createElement(StyledInputBase, {
    placeholder: "Search\u2026",
    inputProps: { "aria-label": "search" }
  }))))));
}

// app/src/layout/Main.js
function Layout({ children }) {
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(Header, null), /* @__PURE__ */ React4.createElement(import_Container2.default, {
    maxWidth: "xl"
  }, /* @__PURE__ */ React4.createElement(import_Box2.default, {
    sx: { my: 2 }
  }, children, /* @__PURE__ */ React4.createElement(Footer, null))));
}

// node_modules/swiper/swiper-bundle.min.css
var swiper_bundle_min_default = "/build/_assets/swiper-bundle.min-4W327FTY.css";

// node_modules/swiper/swiper.min.css
var swiper_min_default = "/build/_assets/swiper.min-DBIUIS7H.css";

// app/src/styles/global.css
var global_default = "/build/_assets/global-5T4JKIZJ.css";

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\root.jsx
function links2() {
  return [
    {
      rel: "stylesheet",
      href: swiper_bundle_min_default
    },
    {
      rel: "stylesheet",
      href: swiper_min_default
    },
    {
      rel: "stylesheet",
      href: global_default
    }
  ];
}
var Document = (0, import_react3.withEmotionCache)(({ children, title }, emotionCache) => {
  const clientStyleData = React5.useContext(ClientStyleContext_default);
  (0, import_material2.unstable_useEnhancedEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ React5.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React5.createElement("head", null, /* @__PURE__ */ React5.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React5.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React5.createElement("meta", {
    name: "theme-color",
    content: theme_default.palette.primary.main
  }), title ? /* @__PURE__ */ React5.createElement("title", null, title) : null, /* @__PURE__ */ React5.createElement(import_remix3.Meta, null), /* @__PURE__ */ React5.createElement(import_remix3.Links, null), /* @__PURE__ */ React5.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  }), /* @__PURE__ */ React5.createElement("meta", {
    name: "emotion-insertion-point",
    content: "emotion-insertion-point"
  })), /* @__PURE__ */ React5.createElement("body", null, children, /* @__PURE__ */ React5.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React5.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React5.createElement(import_remix3.LiveReload, null)));
});
function App() {
  return /* @__PURE__ */ React5.createElement(Document, null, /* @__PURE__ */ React5.createElement(Layout, null, /* @__PURE__ */ React5.createElement(import_remix3.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React5.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React5.createElement(Layout, null, /* @__PURE__ */ React5.createElement("div", null, /* @__PURE__ */ React5.createElement("h1", null, "There was an error"), /* @__PURE__ */ React5.createElement("p", null, error.message), /* @__PURE__ */ React5.createElement("hr", null), /* @__PURE__ */ React5.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  const caught = (0, import_remix3.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React5.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React5.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React5.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React5.createElement(Layout, null, /* @__PURE__ */ React5.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\routes\movies\index.jsx
var movies_exports = {};
__export(movies_exports, {
  default: () => Movies,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_react5 = __toModule(require("react"));
var import_remix5 = __toModule(require_remix());

// app/src/utils/fetcher.js
init_react();

// app/src/shared/requests.js
init_react();
var API_KEY = process.env.TMDB_API_KEY || "";
var requests = {
  Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Adventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  Animation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Crime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  Documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  Drama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  Family: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  Fantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  History: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  Horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Music: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  Mystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  Romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  ScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  TVMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  Thriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  War: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  Western: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  TvsNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`
};
var requests_default = requests;

// app/src/shared/movieGenres.js
init_react();
var API_KEY2 = process.env.TMDB_API_KEY || "";
var movieGenres = {
  trending: `/trending/movie/day?api_key=${API_KEY2}`,
  action: `/discover/movie?api_key=${API_KEY2}&with_genres=28`,
  adventure: `/discover/movie?api_key=${API_KEY2}&with_genres=12`,
  animation: `/discover/movie?api_key=${API_KEY2}&with_genres=16`,
  comedy: `/discover/movie?api_key=${API_KEY2}&with_genres=35`,
  crime: `/discover/movie?api_key=${API_KEY2}&with_genres=80`,
  documentary: `/discover/movie?api_key=${API_KEY2}&with_genres=99`,
  drama: `/discover/movie?api_key=${API_KEY2}&with_genres=18`,
  family: `/discover/movie?api_key=${API_KEY2}&with_genres=10751`,
  fantasy: `/discover/movie?api_key=${API_KEY2}&with_genres=14`,
  history: `/discover/movie?api_key=${API_KEY2}&with_genres=36`,
  horror: `/discover/movie?api_key=${API_KEY2}&with_genres=27`,
  music: `/discover/movie?api_key=${API_KEY2}&with_genres=10402`,
  mystery: `/discover/movie?api_key=${API_KEY2}&with_genres=9648`,
  romance: `/discover/movie?api_key=${API_KEY2}&with_genres=10749`,
  science_fiction: `/discover/movie?api_key=${API_KEY2}&with_genres=878`,
  tv: `/discover/movie?api_key=${API_KEY2}&with_genres=10770`,
  thriller: `/discover/movie?api_key=${API_KEY2}&with_genres=53`,
  war: `/discover/movie?api_key=${API_KEY2}&with_genres=10752`,
  western: `/discover/movie?api_key=${API_KEY2}&with_genres=37`
};
var movieGenres_default = movieGenres;

// app/src/shared/tvGenres.js
init_react();
var API_KEY3 = process.env.TMDB_API_KEY || "";
var tvGenres = {
  trending: `/trending/tv/day?api_key=${API_KEY3}`,
  action_Adventure: `/discover/tv?api_key=${API_KEY3}&with_genres=10759`,
  animation: `/discover/tv?api_key=${API_KEY3}&with_genres=16`,
  comedy: `/discover/tv?api_key=${API_KEY3}&with_genres=35`,
  crime: `/discover/tv?api_key=${API_KEY3}&with_genres=80`,
  documentary: `/discover/tv?api_key=${API_KEY3}&with_genres=99`,
  drama: `/discover/tv?api_key=${API_KEY3}&with_genres=18`,
  family: `/discover/tv?api_key=${API_KEY3}&with_genres=10751`,
  kids: `/discover/tv?api_key=${API_KEY3}&with_genres=10762`,
  mystery: `/discover/tv?api_key=${API_KEY3}&with_genres=9648`,
  news: `/discover/tv?api_key=${API_KEY3}&with_genres=10763`,
  reality: `/discover/tv?api_key=${API_KEY3}&with_genres=10764`,
  scifi_Fantasy: `/discover/tv?api_key=${API_KEY3}&with_genres=10765`,
  soap: `/discover/tv?api_key=${API_KEY3}&with_genres=10766`,
  talk: `/discover/tv?api_key=${API_KEY3}&with_genres=10767`,
  war_Politics: `/discover/tv?api_key=${API_KEY3}&with_genres=10768`,
  western: `/discover/tv?api_key=${API_KEY3}&with_genres=37`
};
var tvGenres_default = tvGenres;

// app/src/utils/fetcher.js
var import_axios = __toModule(require("axios"));
var baseURL = "https://api.themoviedb.org/3";
var API_KEY4 = process.env.TMDB_API_KEY || "";
async function getAllData() {
  let allShows = {};
  const categories = Object.entries(requests_default);
  for (const [title, url] of categories) {
    await import_axios.default.get(`${baseURL}${url}`).then((res) => {
      if (res.status === 200) {
        allShows[title] = res.data.results;
      } else {
        console.log("There is somthing wrong with the TMDB API get request");
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  }
  return allShows;
}
async function getFromAPI(fetchUrl, singular = false) {
  return import_axios.default.get(fetchUrl).then((res) => {
    if (res.status === 200) {
      if (singular) {
        return res.data;
      } else {
        return res.data.results;
      }
    } else {
      console.log("There is somthing wrong with the TMDB API get request");
      return false;
    }
  }).catch((error) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
    return false;
  });
}
async function getAllMovies(genre, page) {
  let fetchUrl = `${baseURL}${movieGenres_default[genre]}&language=en-US&page=${page}`;
  return getFromAPI(fetchUrl);
}
async function getSingleMovie(movie_id) {
  let fetchUrl = `${baseURL}/movie/${movie_id}?api_key=${API_KEY4}&language=en-US&append_to_response=videos,keywords,similar,credits`;
  return getFromAPI(fetchUrl, true);
}
async function getAllTv(genre, page) {
  let fetchUrl = `${baseURL}${tvGenres_default[genre]}&language=en-US&page=${page}`;
  return getFromAPI(fetchUrl);
}
async function getSingleTv(tv_id) {
  let fetchUrl = `${baseURL}/tv/${tv_id}?api_key=${API_KEY4}&language=en-US&append_to_response=videos,keywords,similar,credits`;
  const tvData = await getFromAPI(fetchUrl, true);
  console.log("# seasons: ", tvData.number_of_seasons);
  const seasons = [];
  for (let i = 1; i <= tvData.number_of_seasons; i++) {
    let seasonFetchUrl = `${baseURL}/tv/${tv_id}/season/${i}?api_key=${API_KEY4}&language=en-US`;
    let seasonData = await getFromAPI(seasonFetchUrl, true);
    seasons.push(seasonData);
  }
  return { tvData, seasons };
}

// app/src/components/MovieDetailDrawer.js
init_react();
var import_react4 = __toModule(require("react"));
var import_material3 = __toModule(require("@mui/material"));
var import_remix4 = __toModule(require_remix());

// app/src/shared/genres.js
init_react();
var genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
  10759: "Action & Adventure",
  10762: "Kids",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics"
};
var genres_default = genres;

// app/src/components/MovieDetailDrawer.js
var import_Close = __toModule(require("@mui/icons-material/Close"));
var import_Visibility = __toModule(require("@mui/icons-material/Visibility"));
function MovieDetailDrawer({ movieData, show, handeCloseInfo }) {
  const genreChips = [];
  movieData != null && (movieData == null ? void 0 : movieData.genre_ids.forEach((id) => genreChips.push(/* @__PURE__ */ import_react4.default.createElement(import_material3.Chip, {
    key: id,
    style: { marginRight: 5 },
    variant: "outlined",
    color: "default",
    clickable: false,
    size: "small",
    label: `${genres_default[id]}`
  }))));
  if (!movieData) {
    return null;
  }
  return /* @__PURE__ */ import_react4.default.createElement(import_material3.Drawer, {
    anchor: "bottom",
    open: show,
    onClose: handeCloseInfo,
    PaperProps: { sx: { background: "#14181e" } }
  }, /* @__PURE__ */ import_react4.default.createElement(import_material3.Container, {
    maxWidth: "xl",
    sx: { py: 4 }
  }, /* @__PURE__ */ import_react4.default.createElement(import_material3.Box, {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ import_react4.default.createElement(import_material3.Typography, {
    component: "h1",
    sx: {
      color: "primary.main",
      fontSize: { xs: 18, sm: 22, lg: 26 }
    }
  }, (movieData == null ? void 0 : movieData.title) || (movieData == null ? void 0 : movieData.name) || (movieData == null ? void 0 : movieData.original_name)), /* @__PURE__ */ import_react4.default.createElement(import_material3.IconButton, {
    onClick: handeCloseInfo
  }, /* @__PURE__ */ import_react4.default.createElement(import_Close.default, null))), /* @__PURE__ */ import_react4.default.createElement(import_material3.Box, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, /* @__PURE__ */ import_react4.default.createElement(import_material3.Rating, {
    name: "read-only",
    value: movieData.vote_average / 2,
    readOnly: true
  }), /* @__PURE__ */ import_react4.default.createElement(import_material3.Box, {
    sx: {
      borderStyle: "solid",
      borderColor: "#838383",
      borderWidth: 0.3,
      padding: "4px",
      borderRadius: 2,
      marginLeft: 1
    }
  }, /* @__PURE__ */ import_react4.default.createElement(import_material3.Typography, {
    variant: "caption",
    color: "primary",
    component: "p"
  }, movieData.vote_average))), /* @__PURE__ */ import_react4.default.createElement(import_material3.Box, {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    py: 2
  }, genreChips), /* @__PURE__ */ import_react4.default.createElement(import_material3.Box, {
    display: "flex",
    flexDirection: "row"
  }, /* @__PURE__ */ import_react4.default.createElement(import_material3.Typography, {
    variant: "body1",
    sx: { fontSize: { xs: 14, sm: 16, lg: 18 } }
  }, movieData.overview)), /* @__PURE__ */ import_react4.default.createElement(import_material3.Box, {
    display: "flex",
    flexDirection: "row",
    marginTop: 1,
    marginBottom: 1,
    justifyContent: "flex-end"
  }, /* @__PURE__ */ import_react4.default.createElement(import_remix4.Link, {
    to: `/${movieData.first_air_date ? "tv" : "movies"}/${movieData.id}`
  }, /* @__PURE__ */ import_react4.default.createElement(import_material3.Button, {
    color: "primary",
    variant: "contained",
    endIcon: /* @__PURE__ */ import_react4.default.createElement(import_Visibility.default, null),
    onClick: handeCloseInfo
  }, "More")))));
}

// app/src/components/MoviesGrid.js
init_react();
var import_material4 = __toModule(require("@mui/material"));
var image_base_url = "https://image.tmdb.org/t/p/original";
function MoviesGrid({ movies, showMovieInfoDrawer }) {
  return /* @__PURE__ */ React.createElement(import_material4.Box, {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    py: 1
  }, movies.map((movie) => /* @__PURE__ */ React.createElement(import_material4.Box, {
    key: movie.id,
    sx: {
      my: 2,
      mx: 2,
      maxWidth: 170,
      transition: "transform 450ms",
      ":hover": {
        transform: "scale(1.07)",
        opacity: 1
      }
    },
    onClick: () => showMovieInfoDrawer(movie)
  }, /* @__PURE__ */ React.createElement(import_material4.Box, {
    component: "img",
    sx: { objectFit: "contain", width: "100%", height: 240 },
    src: image_base_url + movie.poster_path,
    alt: movie.title,
    className: "swiper-lazy"
  }), /* @__PURE__ */ React.createElement(import_material4.Box, {
    display: "flex",
    flexWrap: "wrap"
  }), /* @__PURE__ */ React.createElement(import_material4.Typography, {
    sx: { color: "text.main", textAlign: "center" },
    variant: "subtitle2",
    color: "initial"
  }, (movie == null ? void 0 : movie.title) || (movie == null ? void 0 : movie.name) || (movie == null ? void 0 : movie.original_name)))));
}

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\routes\movies\index.jsx
var import_material5 = __toModule(require("@mui/material"));
var loader = async ({ request }) => {
  let url = new URL(request.url);
  let genre = url.searchParams.get("genre");
  if (!genre) {
    genre = "trending";
  }
  let page = url.searchParams.get("page");
  if (!page) {
    page = 1;
  }
  if (!Object.keys(movieGenres_default).includes(genre) || page > 1e3) {
    throw new Response("Not Found", { status: 404 });
  }
  const moviesData = await getAllMovies(genre, page);
  if (!moviesData) {
    throw new Response("Not Found", { status: 404 });
  }
  return {
    moviesData,
    page: parseInt(page),
    genre,
    allGenres: Object.keys(movieGenres_default)
  };
};
var meta = () => {
  return {
    title: "Movies | MOVIX",
    description: "Welcome to Movix, A Remix Movie App!"
  };
};
function Movies() {
  const { moviesData, page, genre, allGenres } = (0, import_remix5.useLoaderData)();
  const [showInfo, setShowInfo] = (0, import_react5.useState)(false);
  const [movieInfoData, setMovieInfoData] = (0, import_react5.useState)(null);
  const navigate = (0, import_remix5.useNavigate)();
  const handleShowInfo = (movieData) => {
    setMovieInfoData(movieData);
    setShowInfo(true);
  };
  const handeCloseInfo = () => {
    setShowInfo(false);
    setMovieInfoData(null);
  };
  const handleGenreChange = (selectedGenre) => {
    navigate(`/movies?genre=${selectedGenre}&page=${page}`);
  };
  const handlePageChange = (event, value) => {
    navigate(`/movies?genre=${genre}&page=${value}`);
  };
  const genreChips = allGenres.map((title) => /* @__PURE__ */ import_react5.default.createElement(import_material5.Chip, {
    style: { marginTop: 5, marginRight: 3 },
    key: title,
    label: title.charAt(0).toUpperCase() + title.slice(1).replace("_", " "),
    color: title == genre ? "primary" : "default",
    variant: "outlined",
    onClick: () => handleGenreChange(title)
  }));
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(import_material5.Box, null, /* @__PURE__ */ import_react5.default.createElement(import_material5.Box, {
    paddingY: 3
  }, /* @__PURE__ */ import_react5.default.createElement(import_material5.Typography, {
    variant: "h6",
    sx: { mb: 2, width: "100%", textAlign: "center" }
  }, "Explore Movies"), /* @__PURE__ */ import_react5.default.createElement(import_material5.Box, {
    display: "flex",
    flexWrap: "wrap"
  }, genreChips)), /* @__PURE__ */ import_react5.default.createElement(MoviesGrid, {
    movies: moviesData,
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react5.default.createElement(import_material5.Box, {
    display: "flex",
    paddingY: 5,
    justifyContent: "center"
  }, /* @__PURE__ */ import_react5.default.createElement(import_material5.Pagination, {
    count: 1e3,
    color: "primary",
    shape: "rounded",
    variant: "outlined",
    page,
    onChange: handlePageChange
  }))), /* @__PURE__ */ import_react5.default.createElement(MovieDetailDrawer, {
    movieData: movieInfoData,
    show: showInfo,
    handeCloseInfo
  }));
}

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\routes\movies\$id.jsx
var id_exports = {};
__export(id_exports, {
  default: () => moviePage,
  loader: () => loader2
});
init_react();
var import_react10 = __toModule(require("react"));
var import_remix8 = __toModule(require_remix());

// app/src/components/ActorsRow.js
init_react();
var import_react6 = __toModule(require("react"));
var import_material6 = __toModule(require("@mui/material"));
var import_swiper = __toModule(require("swiper"));
var import_react7 = __toModule(require("swiper/react"));
import_swiper.default.use([import_swiper.Navigation]);
var image_base_url2 = "https://image.tmdb.org/t/p/original";
var no_picture = "/no-photo.jpg";
function ActorsRow({ actorsData }) {
  const classes = "";
  const swiperItems = actorsData.map((actor) => /* @__PURE__ */ import_react6.default.createElement(import_react7.SwiperSlide, {
    key: actor.id,
    style: {
      maxWidth: 200
    }
  }, /* @__PURE__ */ import_react6.default.createElement(import_material6.Box, {
    sx: {
      transition: "transform 450ms",
      "&:hover": {
        transform: "scale(1.07)",
        opacity: 1
      },
      pb: 2
    }
  }, /* @__PURE__ */ import_react6.default.createElement(import_material6.Box, {
    component: "img",
    src: actor.profile_path ? image_base_url2 + actor.profile_path : no_picture,
    alt: actor.name,
    className: "swiper-lazy",
    sx: { objectFit: "contain", width: "100%", height: 240 }
  }), /* @__PURE__ */ import_react6.default.createElement(import_material6.Box, {
    width: "100%",
    textAlign: "center"
  }, /* @__PURE__ */ import_react6.default.createElement(import_material6.Typography, {
    variant: "subtitle2",
    color: "text.primary"
  }, actor.name), /* @__PURE__ */ import_react6.default.createElement(import_material6.Typography, {
    variant: "caption",
    color: "text.primary"
  }, `As ${actor.character}`)))));
  return /* @__PURE__ */ import_react6.default.createElement(import_material6.Box, {
    sx: { py: 4, backgroundColor: "#121212" }
  }, /* @__PURE__ */ import_react6.default.createElement(import_material6.Box, {
    display: "flex",
    justifyContent: "flex-start",
    mb: 2
  }, /* @__PURE__ */ import_react6.default.createElement(import_material6.Typography, {
    variant: "button",
    color: "primary",
    display: "inline",
    component: "h2",
    sx: { fontSize: 18 }
  }, "Actors")), /* @__PURE__ */ import_react6.default.createElement(import_material6.Box, {
    overflow: "hidden"
  }, /* @__PURE__ */ import_react6.default.createElement(import_react7.Swiper, {
    navigation: true,
    spaceBetween: 1,
    slidesPerView: "auto",
    watchSlidesVisibility: true,
    className: classes.swiper_container
  }, swiperItems)), /* @__PURE__ */ import_react6.default.createElement(import_material6.Divider, {
    variant: "fullWidth",
    light: true,
    sx: { mt: 2 }
  }));
}

// app/src/components/HeroImage.js
init_react();
var import_material7 = __toModule(require("@mui/material"));
function HeroImage({ image }) {
  const image_base_url6 = "https://image.tmdb.org/t/p/original";
  return /* @__PURE__ */ React.createElement(import_material7.Box, {
    sx: {
      backgroundImage: `url(${image_base_url6}${image})`,
      height: { xs: 300, sm: 370, lg: 450, xl: 500 },
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center"
    }
  }, /* @__PURE__ */ React.createElement(import_material7.Box, {
    sx: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)"
    }
  }));
}

// app/src/components/MoviesRow.js
init_react();
var import_material8 = __toModule(require("@mui/material"));
var import_remix6 = __toModule(require_remix());
var import_ArrowForward = __toModule(require("@mui/icons-material/ArrowForward"));
var import_swiper2 = __toModule(require("swiper"));
var import_react8 = __toModule(require("swiper/react"));
import_swiper2.default.use([import_swiper2.Navigation]);
var image_base_url3 = "https://image.tmdb.org/t/p/original";
function MoviesRow({
  title,
  moviesData,
  genre,
  type,
  showMovieInfoDrawer,
  similar
}) {
  const navigate = (0, import_remix6.useNavigate)();
  const seeAllClickHandle = () => {
    if (type == "netflix") {
      navigate("/tv");
    } else {
      navigate(`/${type}?genre=${genre}`);
    }
  };
  const swiperItems = moviesData.map((movie) => /* @__PURE__ */ React.createElement(import_react8.SwiperSlide, {
    key: movie.id,
    style: {
      maxWidth: 180
    },
    onClick: () => showMovieInfoDrawer(movie)
  }, /* @__PURE__ */ React.createElement(import_material8.Box, {
    sx: {
      transition: "transform 450ms",
      ":hover": {
        transform: "scale(1.07)",
        opacity: 1
      },
      display: "flex",
      flexDirection: "column",
      pb: 1
    }
  }, /* @__PURE__ */ React.createElement("img", {
    src: image_base_url3 + movie.poster_path,
    alt: movie.title,
    sx: { objectFit: "contain", width: "100%" },
    className: "swiper-lazy"
  }), /* @__PURE__ */ React.createElement(import_material8.Typography, {
    sx: { textAlign: "center", color: "text.primary", mt: 1 },
    variant: "subtitle2",
    color: "initial"
  }, (movie == null ? void 0 : movie.title) || (movie == null ? void 0 : movie.name) || (movie == null ? void 0 : movie.original_name)))));
  return /* @__PURE__ */ React.createElement(import_material8.Box, {
    sx: { backgroundColor: "#121212" }
  }, /* @__PURE__ */ React.createElement(import_material8.Box, {
    display: "flex",
    justifyContent: "space-between",
    mb: 1
  }, /* @__PURE__ */ React.createElement(import_material8.Typography, {
    sx: { fontSize: 18 },
    variant: "button",
    color: "primary",
    display: "inline",
    component: "h2"
  }, title), !similar && /* @__PURE__ */ React.createElement(import_material8.Button, {
    size: "medium",
    variant: "text",
    color: "primary",
    onClick: seeAllClickHandle,
    endIcon: /* @__PURE__ */ React.createElement(import_ArrowForward.default, null)
  }, "See all")), /* @__PURE__ */ React.createElement(import_material8.Box, {
    sx: {
      width: "100%",
      minHeight: 320,
      pb: 2,
      overflow: "hidden"
    }
  }, /* @__PURE__ */ React.createElement(import_react8.Swiper, {
    navigation: true,
    spaceBetween: 18,
    slidesPerView: "auto",
    watchSlidesVisibility: true
  }, swiperItems)), /* @__PURE__ */ React.createElement(import_material8.Divider, {
    variant: "fullWidth",
    sx: { mb: 2 },
    light: true
  }));
}

// app/src/components/ShowDetail.js
init_react();
var import_react9 = __toModule(require("react"));
var import_remix7 = __toModule(require_remix());
var import_material9 = __toModule(require("@mui/material"));
var import_fslightbox_react = __toModule(require("fslightbox-react"));
var import_PlayCircleFilled = __toModule(require("@mui/icons-material/PlayCircleFilled"));
var import_LocalOffer = __toModule(require("@mui/icons-material/LocalOffer"));
var import_DateRange = __toModule(require("@mui/icons-material/DateRange"));
var import_AttachMoney = __toModule(require("@mui/icons-material/AttachMoney"));
var import_QueryBuilder = __toModule(require("@mui/icons-material/QueryBuilder"));
var image_base_url4 = "https://image.tmdb.org/t/p/original";
function ShowDetail({ showData }) {
  const [showTrailer, setTrailerToggler] = (0, import_react9.useState)(false);
  let directors = [];
  let writers = [];
  showData.credits.crew.forEach(function(entry2) {
    switch (entry2.job) {
      case "Director":
        directors.push(entry2.name);
        break;
      case "Screenplay":
        writers.push(entry2.name);
        break;
      case "Story":
        writers.push(entry2.name);
        break;
      default:
        break;
    }
  });
  let genreChips = [];
  showData.genres.forEach((genre) => genreChips.push(/* @__PURE__ */ import_react9.default.createElement(import_material9.Chip, {
    key: genre.id,
    style: { marginRight: 5 },
    variant: "outlined",
    color: "default",
    clickable: false,
    size: "small",
    label: `${genre.name}`
  })));
  return /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, null, /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    sx: { marginTop: -15, position: "relative" }
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    component: "img",
    src: image_base_url4 + showData.poster_path,
    alt: showData.title,
    sx: {
      objectFit: "contain",
      width: "100%",
      height: { xs: 240, md: 280, lg: 300 }
    }
  }), /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    sx: { width: "100%" }
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Breadcrumbs, {
    "aria-label": "breadcrumb"
  }, /* @__PURE__ */ import_react9.default.createElement(import_remix7.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    color: "text.secondary",
    variant: "caption"
  }, "Home")), /* @__PURE__ */ import_react9.default.createElement(import_remix7.Link, {
    to: showData.release_date ? "/movies" : "/tv"
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    color: "text.secondary",
    variant: "caption"
  }, showData.release_date ? "Movies" : "Tv Series")), /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    color: "text.secondary",
    variant: "caption"
  }, (showData == null ? void 0 : showData.title) || (showData == null ? void 0 : showData.name) || (showData == null ? void 0 : showData.original_name))), /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    component: "h1",
    color: "primary",
    sx: { mt: 2, fontSize: 20 }
  }, (showData == null ? void 0 : showData.title) || (showData == null ? void 0 : showData.name) || (showData == null ? void 0 : showData.original_name)), /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    display: "flex",
    flexDirection: "row",
    py: 1
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Rating, {
    name: "read-only",
    value: showData.vote_average / 2,
    readOnly: true
  }), /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    sx: {
      borderStyle: "solid",
      borderColor: "#838383",
      borderWidth: 0.3,
      padding: 0.5,
      borderRadius: 1,
      marginLeft: 1
    }
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    variant: "caption",
    color: "primary",
    component: "p"
  }, showData.vote_average))), /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingY: 1,
    alignItems: "center"
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    display: "flex",
    flexDirection: "row",
    paddingY: 1
  }, /* @__PURE__ */ import_react9.default.createElement(import_DateRange.default, {
    color: "primary",
    fontSize: "small"
  }), "\xA0", /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    variant: "caption",
    component: "p"
  }, showData.release_date ? showData.release_date : showData.first_air_date), "\xA0\xA0\xA0", showData.revenue ? /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(import_AttachMoney.default, {
    fontSize: "small",
    color: "primary"
  }), /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    variant: "caption",
    component: "p"
  }, showData.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))) : null, "\xA0\xA0\xA0", showData.runtime ? /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(import_QueryBuilder.default, {
    fontSize: "small",
    color: "primary"
  }), "\xA0", /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    variant: "caption",
    component: "p"
  }, `${showData.runtime} MIN`)) : null), /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    display: "flex",
    flexDirection: "row",
    paddingY: 1
  }, /* @__PURE__ */ import_react9.default.createElement(import_LocalOffer.default, {
    fontSize: "small",
    color: "primary"
  }), genreChips)), showData.release_date ? /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingY: 1,
    alignItems: "center"
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    marginRight: 3
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    color: "primary",
    variant: "caption",
    component: "p"
  }, "Director:"), /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    component: "p"
  }, directors.join(", "))), writers.length > 0 && /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, null, /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    color: "primary",
    variant: "caption",
    component: "p"
  }, "Writer:"), /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    component: "p"
  }, writers.join(", ")))) : null, /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    display: "flex",
    flexDirection: "row",
    paddingY: 1
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Typography, {
    component: "p",
    variant: "body2"
  }, showData.overview)), /* @__PURE__ */ import_react9.default.createElement(import_material9.Box, {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 1,
    marginBottom: 1
  }, /* @__PURE__ */ import_react9.default.createElement(import_material9.Button, {
    color: "primary",
    variant: "contained",
    startIcon: /* @__PURE__ */ import_react9.default.createElement(import_PlayCircleFilled.default, null)
  }, showData.release_date ? "Watch Movie" : "Watch Episodes"), "\xA0\xA0\xA0", showData.videos.results.length > 0 ? /* @__PURE__ */ import_react9.default.createElement(import_material9.Button, {
    color: "primary",
    variant: "outlined",
    onClick: () => setTrailerToggler(!showTrailer)
  }, "Trailer") : null, showData.videos.results.length > 0 && /* @__PURE__ */ import_react9.default.createElement(import_fslightbox_react.default, {
    toggler: showTrailer,
    sources: [
      `https://www.youtube.com/watch?v=${showData.videos.results[0].key}`
    ],
    type: "youtube"
  })))));
}

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\routes\movies\$id.jsx
var loader2 = async ({ params }) => {
  const movie_id = parseInt(params.id);
  if (!Number.isInteger(movie_id)) {
    throw new Response("Not Found", { status: 404 });
  }
  const movieData = getSingleMovie(movie_id);
  if (!movieData) {
    throw new Response("Not Found", { status: 404 });
  }
  return movieData;
};
function moviePage() {
  var _a;
  const movieData = (0, import_remix8.useLoaderData)();
  const [showInfo, setShowInfo] = (0, import_react10.useState)(false);
  const [movieInfoData, setMovieInfoData] = (0, import_react10.useState)(null);
  const handleShowInfo = (selectedMovieData) => {
    setMovieInfoData(selectedMovieData);
    setShowInfo(true);
  };
  const handeCloseInfo = () => {
    setShowInfo(false);
    setMovieInfoData(null);
  };
  return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(HeroImage, {
    image: movieData.backdrop_path
  }), /* @__PURE__ */ import_react10.default.createElement(ShowDetail, {
    showData: movieData
  }), /* @__PURE__ */ import_react10.default.createElement(ActorsRow, {
    actorsData: movieData.credits.cast.slice(0, 25)
  }), ((_a = movieData == null ? void 0 : movieData.similar) == null ? void 0 : _a.results.length) > 0 && /* @__PURE__ */ import_react10.default.createElement(MoviesRow, {
    title: "Related Movies",
    moviesData: movieData.similar.results,
    showMovieInfoDrawer: handleShowInfo,
    similar: true
  }), /* @__PURE__ */ import_react10.default.createElement(MovieDetailDrawer, {
    movieData: movieInfoData,
    show: showInfo,
    handeCloseInfo
  }));
}

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\routes\tv\index.jsx
var tv_exports = {};
__export(tv_exports, {
  default: () => TV,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var import_react11 = __toModule(require("react"));
var import_remix9 = __toModule(require_remix());
var import_material10 = __toModule(require("@mui/material"));
var loader3 = async ({ request }) => {
  let url = new URL(request.url);
  let genre = url.searchParams.get("genre");
  if (!genre) {
    genre = "trending";
  }
  let page = url.searchParams.get("page");
  if (!page) {
    page = 1;
  }
  if (!Object.keys(tvGenres_default).includes(genre) || page > 1e3) {
    throw new Response("Not Found", { status: 404 });
  }
  const tvsData = await getAllTv(genre, page);
  if (!tvsData) {
    throw new Response("Not Found", { status: 404 });
  }
  return {
    tvsData,
    page: parseInt(page),
    genre,
    allGenres: Object.keys(tvGenres_default)
  };
};
var meta2 = () => {
  return {
    title: "TV Series | MOVIX",
    description: "Welcome to Movix, A Remix Movie App!"
  };
};
function TV() {
  const { tvsData, page, genre, allGenres } = (0, import_remix9.useLoaderData)();
  const [showInfo, setShowInfo] = (0, import_react11.useState)(false);
  const [movieInfoData, setMovieInfoData] = (0, import_react11.useState)(null);
  const navigate = (0, import_remix9.useNavigate)();
  const handleShowInfo = (movieData) => {
    setMovieInfoData(movieData);
    setShowInfo(true);
  };
  const handeCloseInfo = () => {
    setShowInfo(false);
    setMovieInfoData(null);
  };
  const handleGenreChange = (selectedGenre) => {
    navigate(`/tv?genre=${selectedGenre}&page=${page}`);
  };
  const handlePageChange = (event, value) => {
    navigate(`/tv?genre=${genre}&page=${value}`);
  };
  const genreChips = allGenres.map((title) => /* @__PURE__ */ import_react11.default.createElement(import_material10.Chip, {
    style: { marginTop: 5, marginRight: 3 },
    key: title,
    label: title.charAt(0).toUpperCase() + title.slice(1).replace("_", " "),
    color: title == genre ? "primary" : "default",
    variant: "outlined",
    onClick: () => handleGenreChange(title)
  }));
  return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(import_material10.Box, null, /* @__PURE__ */ import_react11.default.createElement(import_material10.Box, {
    paddingY: 3
  }, /* @__PURE__ */ import_react11.default.createElement(import_material10.Typography, {
    variant: "h6",
    sx: { mb: 2, width: "100%", textAlign: "center" }
  }, "Explore TV Series"), /* @__PURE__ */ import_react11.default.createElement(import_material10.Box, {
    display: "flex",
    flexWrap: "wrap"
  }, genreChips)), /* @__PURE__ */ import_react11.default.createElement(MoviesGrid, {
    movies: tvsData,
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react11.default.createElement(import_material10.Box, {
    display: "flex",
    paddingY: 5,
    justifyContent: "center"
  }, /* @__PURE__ */ import_react11.default.createElement(import_material10.Pagination, {
    count: 1e3,
    color: "primary",
    shape: "rounded",
    variant: "outlined",
    page,
    onChange: handlePageChange
  }))), /* @__PURE__ */ import_react11.default.createElement(MovieDetailDrawer, {
    movieData: movieInfoData,
    show: showInfo,
    handeCloseInfo
  }));
}

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\routes\tv\$id.jsx
var id_exports2 = {};
__export(id_exports2, {
  default: () => tvPage,
  loader: () => loader4
});
init_react();
var import_react13 = __toModule(require("react"));
var import_remix10 = __toModule(require_remix());

// app/src/components/SeasonsDetail.js
init_react();
var import_react12 = __toModule(require("react"));
var import_material11 = __toModule(require("@mui/material"));
var import_ExpandMore = __toModule(require("@mui/icons-material/ExpandMore"));
function SeasonsDetail({ seasonData }) {
  const seasonsAcocordion = seasonData.map((season, i) => /* @__PURE__ */ import_react12.default.createElement(import_material11.Accordion, {
    key: season._id
  }, /* @__PURE__ */ import_react12.default.createElement(import_material11.AccordionSummary, {
    expandIcon: /* @__PURE__ */ import_react12.default.createElement(import_ExpandMore.default, null),
    "aria-controls": `panel${i + 1}a-content`,
    id: `panel${i + 1}a-header`
  }, /* @__PURE__ */ import_react12.default.createElement(import_material11.Typography, null, season.name)), /* @__PURE__ */ import_react12.default.createElement(import_material11.AccordionDetails, null, /* @__PURE__ */ import_react12.default.createElement(import_material11.List, null, season.episodes.map((episode) => {
    return /* @__PURE__ */ import_react12.default.createElement(import_material11.ListItem, {
      key: episode.id
    }, /* @__PURE__ */ import_react12.default.createElement(import_material11.ListItemText, {
      primary: `${episode.name}`,
      secondary: `Epesode: ${episode.episode_number}, Air Date: ${episode.air_date}`
    }));
  })))));
  if (!seasonsAcocordion) {
    return null;
  }
  return /* @__PURE__ */ import_react12.default.createElement(import_material11.Box, {
    py: 4,
    mb: 4,
    width: "100%"
  }, /* @__PURE__ */ import_react12.default.createElement(import_material11.Box, {
    py: 2
  }, /* @__PURE__ */ import_react12.default.createElement(import_material11.Typography, {
    color: "primary",
    variant: "button",
    sx: { fontSize: 18 }
  }, "Season Detail")), seasonsAcocordion);
}

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\routes\tv\$id.jsx
var loader4 = async ({ params }) => {
  const tv_id = parseInt(params.id);
  if (!Number.isInteger(tv_id)) {
    throw new Response("Not Found", { status: 404 });
  }
  const data = getSingleTv(tv_id);
  if (!data) {
    throw new Response("Not Found", { status: 404 });
  }
  return data;
};
function tvPage() {
  var _a;
  const { tvData, seasons } = (0, import_remix10.useLoaderData)();
  const [showInfo, setShowInfo] = (0, import_react13.useState)(false);
  const [movieInfoData, setMovieInfoData] = (0, import_react13.useState)(null);
  const handleShowInfo = (selectedMovieData) => {
    setMovieInfoData(selectedMovieData);
    setShowInfo(true);
  };
  const handeCloseInfo = () => {
    setShowInfo(false);
    setMovieInfoData(null);
  };
  return /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(HeroImage, {
    image: tvData.backdrop_path
  }), /* @__PURE__ */ import_react13.default.createElement(ShowDetail, {
    showData: tvData
  }), /* @__PURE__ */ import_react13.default.createElement(ActorsRow, {
    actorsData: tvData.credits.cast.slice(0, 30)
  }), seasons.length > 0 && /* @__PURE__ */ import_react13.default.createElement(SeasonsDetail, {
    seasonData: seasons
  }), ((_a = tvData == null ? void 0 : tvData.similar) == null ? void 0 : _a.results.length) > 0 && /* @__PURE__ */ import_react13.default.createElement(MoviesRow, {
    title: "Related Shows",
    moviesData: tvData.similar.results,
    showMovieInfoDrawer: handleShowInfo,
    similar: true
  }), /* @__PURE__ */ import_react13.default.createElement(MovieDetailDrawer, {
    movieData: movieInfoData,
    show: showInfo,
    handeCloseInfo
  }));
}

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader5,
  meta: () => meta3
});
init_react();
var import_react15 = __toModule(require("react"));
var import_remix12 = __toModule(require_remix());

// app/src/components/MoviesSlider.js
init_react();
var import_material12 = __toModule(require("@mui/material"));
var import_swiper3 = __toModule(require("swiper"));
var import_react14 = __toModule(require("swiper/react"));
var import_remix11 = __toModule(require_remix());
import_swiper3.default.use([import_swiper3.Pagination, import_swiper3.EffectCube, import_swiper3.Autoplay]);
var image_base_url5 = "https://image.tmdb.org/t/p/original";
function MoviesSlider({ moviesData }) {
  function truncate(str, n) {
    return (str == null ? void 0 : str.length) > n ? str.substr(0, n - 1) + "..." : str;
  }
  const sliderItems = moviesData ? moviesData.map((movie) => /* @__PURE__ */ React.createElement(import_react14.SwiperSlide, {
    key: movie.id
  }, /* @__PURE__ */ React.createElement(import_material12.Box, {
    sx: {
      objectFit: "contain",
      minHeight: { xs: 420, md: 450, lg: 480 },
      backgroundSize: "cover",
      backgroundImage: `url(${image_base_url5}${movie.backdrop_path})`,
      backgroundPosition: "center center"
    }
  }, /* @__PURE__ */ React.createElement(import_material12.Box, {
    sx: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)"
    }
  }, /* @__PURE__ */ React.createElement(import_material12.Box, {
    sx: {
      width: "100%",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      bottom: 0,
      p: 2,
      pr: 4
    }
  }, /* @__PURE__ */ React.createElement(import_material12.Typography, {
    sx: { fontSize: { xs: 24, md: 38 } },
    variant: "h2"
  }, (movie == null ? void 0 : movie.title) || (movie == null ? void 0 : movie.name) || (movie == null ? void 0 : movie.original_nam)), /* @__PURE__ */ React.createElement(import_material12.Typography, {
    sx: { fontSize: { xs: 14, md: 18 } },
    variant: "subtitle1"
  }, truncate(movie.overview, 150)), /* @__PURE__ */ React.createElement(import_material12.Box, {
    display: "flex",
    justifyContent: "flex-end",
    width: "full",
    my: 2,
    mr: 4
  }, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: `/${movie.first_air_date ? "tv" : "movies"}/${movie.id}`
  }, /* @__PURE__ */ React.createElement(import_material12.Button, {
    variant: "outlined",
    color: "primary",
    size: "medium"
  }, "Watch This")))))))) : null;
  return /* @__PURE__ */ React.createElement(import_material12.Box, null, /* @__PURE__ */ React.createElement(import_react14.Swiper, {
    spaceBetween: 5,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    pagination: { clickable: true },
    autoplay: { delay: 5e3 }
  }, sliderItems));
}

// route-module:C:\Users\Walid\node-projects\movies-app-remix\app\routes\index.jsx
var loader5 = async () => {
  return getAllData();
};
var meta3 = () => {
  return {
    title: "Home | MOVIX",
    description: "Welcome to Movix, A Remix Movie App!"
  };
};
function Index() {
  const data = (0, import_remix12.useLoaderData)();
  const [showInfo, setShowInfo] = (0, import_react15.useState)(false);
  const [movieInfoData, setMovieInfoData] = (0, import_react15.useState)(null);
  const handleShowInfo = (movieData) => {
    setMovieInfoData(movieData);
    setShowInfo(true);
  };
  const handeCloseInfo = () => {
    setShowInfo(false);
    setMovieInfoData(null);
  };
  if (!data) {
    return /* @__PURE__ */ import_react15.default.createElement("h2", null, "Loading...");
  }
  return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(MoviesSlider, {
    moviesData: data["Trending"]
  }), /* @__PURE__ */ import_react15.default.createElement(MoviesRow, {
    title: "From Netflix",
    moviesData: data.TvsNetflix,
    type: "netflix",
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react15.default.createElement(MoviesRow, {
    title: "Action Movies",
    moviesData: data.Action,
    genre: "movies",
    type: "movies",
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react15.default.createElement(MoviesRow, {
    title: "Adventure Movies",
    moviesData: data.Adventure,
    genre: "adventure",
    type: "movies",
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react15.default.createElement(MoviesRow, {
    title: "Science Fiction Movies",
    moviesData: data.ScienceFiction,
    genre: "science_fiction",
    type: "movies",
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react15.default.createElement(MoviesRow, {
    title: "Comedy Movies",
    moviesData: data.Comedy,
    genre: "comedy",
    type: "movies",
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react15.default.createElement(MoviesRow, {
    title: "Fantasy Movies",
    moviesData: data.Fantasy,
    genre: "fantasy",
    type: "movies",
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react15.default.createElement(MoviesRow, {
    title: "Horror Movies",
    moviesData: data.Fantasy,
    genre: "horror",
    type: "movies",
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react15.default.createElement(MoviesRow, {
    title: "Thriller Movies",
    moviesData: data.Thriller,
    genre: "thriller",
    type: "movies",
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react15.default.createElement(MoviesRow, {
    title: "Animation Movies",
    moviesData: data.Animation,
    genre: "animation",
    type: "movies",
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react15.default.createElement(MoviesRow, {
    title: "Family Movies",
    moviesData: data.Family,
    genre: "family",
    type: "movies",
    showMovieInfoDrawer: handleShowInfo
  }), /* @__PURE__ */ import_react15.default.createElement(MovieDetailDrawer, {
    movieData: movieInfoData,
    show: showInfo,
    handeCloseInfo
  }));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/movies/index": {
    id: "routes/movies/index",
    parentId: "root",
    path: "movies",
    index: true,
    caseSensitive: void 0,
    module: movies_exports
  },
  "routes/movies/$id": {
    id: "routes/movies/$id",
    parentId: "root",
    path: "movies/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/tv/index": {
    id: "routes/tv/index",
    parentId: "root",
    path: "tv",
    index: true,
    caseSensitive: void 0,
    module: tv_exports
  },
  "routes/tv/$id": {
    id: "routes/tv/$id",
    parentId: "root",
    path: "tv/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAiLi4vLi4vYXBwL3NyYy9zaGFyZWQvY3JlYXRlRW1vdGlvbkNhY2hlLmpzIiwgIi4uLy4uL2FwcC9zcmMvc2hhcmVkL3RoZW1lLmpzIiwgInJvdXRlLW1vZHVsZTpDOlxcVXNlcnNcXFdhbGlkXFxub2RlLXByb2plY3RzXFxtb3ZpZXMtYXBwLXJlbWl4XFxhcHBcXHJvb3QuanN4IiwgIi4uLy4uL2FwcC9zcmMvY29tcG9uZW50cy9DbGllbnRTdHlsZUNvbnRleHQuanMiLCAiLi4vLi4vYXBwL3NyYy9sYXlvdXQvTWFpbi5qcyIsICIuLi8uLi9hcHAvc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwgIi4uLy4uL2FwcC9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCAicm91dGUtbW9kdWxlOkM6XFxVc2Vyc1xcV2FsaWRcXG5vZGUtcHJvamVjdHNcXG1vdmllcy1hcHAtcmVtaXhcXGFwcFxccm91dGVzXFxtb3ZpZXNcXGluZGV4LmpzeCIsICIuLi8uLi9hcHAvc3JjL3V0aWxzL2ZldGNoZXIuanMiLCAiLi4vLi4vYXBwL3NyYy9zaGFyZWQvcmVxdWVzdHMuanMiLCAiLi4vLi4vYXBwL3NyYy9zaGFyZWQvbW92aWVHZW5yZXMuanMiLCAiLi4vLi4vYXBwL3NyYy9zaGFyZWQvdHZHZW5yZXMuanMiLCAiLi4vLi4vYXBwL3NyYy9jb21wb25lbnRzL01vdmllRGV0YWlsRHJhd2VyLmpzIiwgIi4uLy4uL2FwcC9zcmMvc2hhcmVkL2dlbnJlcy5qcyIsICIuLi8uLi9hcHAvc3JjL2NvbXBvbmVudHMvTW92aWVzR3JpZC5qcyIsICJyb3V0ZS1tb2R1bGU6QzpcXFVzZXJzXFxXYWxpZFxcbm9kZS1wcm9qZWN0c1xcbW92aWVzLWFwcC1yZW1peFxcYXBwXFxyb3V0ZXNcXG1vdmllc1xcJGlkLmpzeCIsICIuLi8uLi9hcHAvc3JjL2NvbXBvbmVudHMvQWN0b3JzUm93LmpzIiwgIi4uLy4uL2FwcC9zcmMvY29tcG9uZW50cy9IZXJvSW1hZ2UuanMiLCAiLi4vLi4vYXBwL3NyYy9jb21wb25lbnRzL01vdmllc1Jvdy5qcyIsICIuLi8uLi9hcHAvc3JjL2NvbXBvbmVudHMvU2hvd0RldGFpbC5qcyIsICJyb3V0ZS1tb2R1bGU6QzpcXFVzZXJzXFxXYWxpZFxcbm9kZS1wcm9qZWN0c1xcbW92aWVzLWFwcC1yZW1peFxcYXBwXFxyb3V0ZXNcXHR2XFxpbmRleC5qc3giLCAicm91dGUtbW9kdWxlOkM6XFxVc2Vyc1xcV2FsaWRcXG5vZGUtcHJvamVjdHNcXG1vdmllcy1hcHAtcmVtaXhcXGFwcFxccm91dGVzXFx0dlxcJGlkLmpzeCIsICIuLi8uLi9hcHAvc3JjL2NvbXBvbmVudHMvU2Vhc29uc0RldGFpbC5qcyIsICJyb3V0ZS1tb2R1bGU6QzpcXFVzZXJzXFxXYWxpZFxcbm9kZS1wcm9qZWN0c1xcbW92aWVzLWFwcC1yZW1peFxcYXBwXFxyb3V0ZXNcXGluZGV4LmpzeCIsICIuLi8uLi9hcHAvc3JjL2NvbXBvbmVudHMvTW92aWVzU2xpZGVyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxXYWxpZFxcXFxub2RlLXByb2plY3RzXFxcXG1vdmllcy1hcHAtcmVtaXhcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcV2FsaWRcXFxcbm9kZS1wcm9qZWN0c1xcXFxtb3ZpZXMtYXBwLXJlbWl4XFxcXGFwcFxcXFxyb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxXYWxpZFxcXFxub2RlLXByb2plY3RzXFxcXG1vdmllcy1hcHAtcmVtaXhcXFxcYXBwXFxcXHJvdXRlc1xcXFxtb3ZpZXNcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFdhbGlkXFxcXG5vZGUtcHJvamVjdHNcXFxcbW92aWVzLWFwcC1yZW1peFxcXFxhcHBcXFxccm91dGVzXFxcXG1vdmllc1xcXFwkaWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFdhbGlkXFxcXG5vZGUtcHJvamVjdHNcXFxcbW92aWVzLWFwcC1yZW1peFxcXFxhcHBcXFxccm91dGVzXFxcXHR2XFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxXYWxpZFxcXFxub2RlLXByb2plY3RzXFxcXG1vdmllcy1hcHAtcmVtaXhcXFxcYXBwXFxcXHJvdXRlc1xcXFx0dlxcXFwkaWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFdhbGlkXFxcXG5vZGUtcHJvamVjdHNcXFxcbW92aWVzLWFwcC1yZW1peFxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LmpzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvbW92aWVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbW92aWVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwibW92aWVzXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL21vdmllcy8kaWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9tb3ZpZXMvJGlkXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwibW92aWVzLzppZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL3R2L2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvdHYvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJ0dlwiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy90di8kaWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy90di8kaWRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJ0di86aWRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfVxufTsiLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuL3NyYy9zaGFyZWQvY3JlYXRlRW1vdGlvbkNhY2hlJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4vc3JjL3NoYXJlZC90aGVtZSc7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tICdAZW1vdGlvbi9zZXJ2ZXIvY3JlYXRlLWluc3RhbmNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgcmVzcG9uc2VIZWFkZXJzLFxyXG4gIHJlbWl4Q29udGV4dFxyXG4pIHtcclxuICBkb3RlbnYuY29uZmlnKCk7XHJcbiAgY29uc3QgY2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcclxuICBjb25zdCB7IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIH0gPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKTtcclxuXHJcbiAgY29uc3QgTXVpUmVtaXhTZXJ2ZXIgPSAoKSA9PiAoXHJcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L0NhY2hlUHJvdmlkZXI+XHJcbiAgKTtcclxuXHJcbiAgLy8gUmVuZGVyIHRoZSBjb21wb25lbnQgdG8gYSBzdHJpbmcuXHJcbiAgY29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKDxNdWlSZW1peFNlcnZlciAvPik7XHJcblxyXG4gIC8vIEdyYWIgdGhlIENTUyBmcm9tIGVtb3Rpb25cclxuICBjb25zdCB7IHN0eWxlcyB9ID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaHRtbCk7XHJcblxyXG4gIGxldCBzdHlsZXNIVE1MID0gJyc7XHJcblxyXG4gIHN0eWxlcy5mb3JFYWNoKCh7IGtleSwgaWRzLCBjc3MgfSkgPT4ge1xyXG4gICAgY29uc3QgZW1vdGlvbktleSA9IGAke2tleX0gJHtpZHMuam9pbignICcpfWA7XHJcbiAgICBjb25zdCBuZXdTdHlsZVRhZyA9IGA8c3R5bGUgZGF0YS1lbW90aW9uPVwiJHtlbW90aW9uS2V5fVwiPiR7Y3NzfTwvc3R5bGU+YDtcclxuICAgIHN0eWxlc0hUTUwgPSBgJHtzdHlsZXNIVE1MfSR7bmV3U3R5bGVUYWd9YDtcclxuICB9KTtcclxuXHJcbiAgLy8gQWRkIHRoZSBlbW90aW9uIHN0eWxlIHRhZ3MgYWZ0ZXIgdGhlIGluc2VydGlvbiBwb2ludCBtZXRhIHRhZ1xyXG4gIGNvbnN0IG1hcmt1cCA9IGh0bWwucmVwbGFjZShcclxuICAgIC88bWV0YShcXHMpKm5hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiKFxccykqY29udGVudD1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCIoXFxzKSpcXC8+LyxcclxuICAgIGA8bWV0YSBuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIiBjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIi8+JHtzdHlsZXNIVE1MfWBcclxuICApO1xyXG5cclxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoYDwhRE9DVFlQRSBodG1sPiR7bWFya3VwfWAsIHtcclxuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxyXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxyXG4gIH0pO1xyXG59XHJcbiIsICJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xyXG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL2NvbG9ycyc7XHJcblxyXG5jb25zdCB0aGVtZU1vZGUgPSAnZGFyayc7IC8vIGRhcmsgb3IgbGlnaHRcclxuY29uc3QgcHJpbWFyeUNvbG9yID0gJyMwMGU1OWInO1xyXG5jb25zdCBzZWNvbmRhcnlDb2xvciA9ICcjZjUwMDU3JztcclxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIG1vZGU6IHRoZW1lTW9kZSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogcHJpbWFyeUNvbG9yLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiBzZWNvbmRhcnlDb2xvcixcclxuICAgIH0sXHJcbiAgICBlcnJvcjoge1xyXG4gICAgICBtYWluOiByZWQuQTQwMCxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIHBhcGVyOiAnIzE0MTgxZScsXHJcbiAgICAgIGRlZmF1bHQ6ICcjMTIxMjEyJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBMaW5rcyxcclxuICBMaXZlUmVsb2FkLFxyXG4gIE1ldGEsXHJcbiAgT3V0bGV0LFxyXG4gIFNjcmlwdHMsXHJcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXHJcbiAgdXNlQ2F0Y2gsXHJcbn0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyB3aXRoRW1vdGlvbkNhY2hlIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1bnN0YWJsZV91c2VFbmhhbmNlZEVmZmVjdCBhcyB1c2VFbmhhbmNlZEVmZmVjdCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi9zcmMvc2hhcmVkL3RoZW1lJztcclxuaW1wb3J0IENsaWVudFN0eWxlQ29udGV4dCBmcm9tICcuL3NyYy9jb21wb25lbnRzL0NsaWVudFN0eWxlQ29udGV4dCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9zcmMvbGF5b3V0L01haW4nO1xyXG5cclxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcclxuaW1wb3J0IHN3aXBlckJ1bmRsZSBmcm9tICdzd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzJztcclxuaW1wb3J0IHN3aXBlckNzcyBmcm9tICdzd2lwZXIvc3dpcGVyLm1pbi5jc3MnO1xyXG5pbXBvcnQgbXlDc3MgZnJvbSAnLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXHJcbiAgICAgIGhyZWY6IHN3aXBlckJ1bmRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxyXG4gICAgICBocmVmOiBzd2lwZXJDc3MsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcclxuICAgICAgaHJlZjogbXlDc3MsXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuXHJcbmNvbnN0IERvY3VtZW50ID0gd2l0aEVtb3Rpb25DYWNoZSgoeyBjaGlsZHJlbiwgdGl0bGUgfSwgZW1vdGlvbkNhY2hlKSA9PiB7XHJcbiAgY29uc3QgY2xpZW50U3R5bGVEYXRhID0gUmVhY3QudXNlQ29udGV4dChDbGllbnRTdHlsZUNvbnRleHQpO1xyXG5cclxuICAvLyBPbmx5IGV4ZWN1dGVkIG9uIGNsaWVudFxyXG4gIHVzZUVuaGFuY2VkRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHJlLWxpbmsgc2hlZXQgY29udGFpbmVyXHJcbiAgICBlbW90aW9uQ2FjaGUuc2hlZXQuY29udGFpbmVyID0gZG9jdW1lbnQuaGVhZDtcclxuICAgIC8vIHJlLWluamVjdCB0YWdzXHJcbiAgICBjb25zdCB0YWdzID0gZW1vdGlvbkNhY2hlLnNoZWV0LnRhZ3M7XHJcbiAgICBlbW90aW9uQ2FjaGUuc2hlZXQuZmx1c2goKTtcclxuICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxyXG4gICAgICBlbW90aW9uQ2FjaGUuc2hlZXQuX2luc2VydFRhZyh0YWcpO1xyXG4gICAgfSk7XHJcbiAgICAvLyByZXNldCBjYWNoZSB0byByZWFwcGx5IGdsb2JhbCBzdHlsZXNcclxuICAgIGNsaWVudFN0eWxlRGF0YS5yZXNldCgpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9J2VuJz5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxyXG4gICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPExpbmtzIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcclxuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcCdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPSdlbW90aW9uLWluc2VydGlvbi1wb2ludCdcclxuICAgICAgICAgIGNvbnRlbnQ9J2Vtb3Rpb24taW5zZXJ0aW9uLXBvaW50J1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgKTtcclxufSk7XHJcblxyXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjZGVmYXVsdC1leHBvcnRcclxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI3JvdXRlLWZpbGVuYW1lc1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEb2N1bWVudD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG59XHJcblxyXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XHJcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfSkge1xyXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERvY3VtZW50IHRpdGxlPSdFcnJvciEnPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+VGhlcmUgd2FzIGFuIGVycm9yPC9oMT5cclxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEhleSwgZGV2ZWxvcGVyLCB5b3Ugc2hvdWxkIHJlcGxhY2UgdGhpcyB3aXRoIHdoYXQgeW91IHdhbnQgeW91clxyXG4gICAgICAgICAgICB1c2VycyB0byBzZWUuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG59XHJcblxyXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XHJcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xyXG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XHJcblxyXG4gIGxldCBtZXNzYWdlO1xyXG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xyXG4gICAgY2FzZSA0MDE6XHJcbiAgICAgIG1lc3NhZ2UgPSAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXHJcbiAgICAgICAgICB0by5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA0MDQ6XHJcbiAgICAgIG1lc3NhZ2UgPSAoXHJcbiAgICAgICAgPHA+T29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIHttZXNzYWdlfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQoe1xyXG4gIHJlc2V0OiAoKSA9PiB7fSxcclxufSk7XHJcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0neGwnPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgbXk6IDIgfX0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBweTogMixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYnV0dG9uJyBjb2xvcj0ndGV4dC5zZWNvbmRhcnknIGFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgIHsnXHUwMEE5ICd9XHJcbiAgICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgICB7JyBXYWxpZCBSLiBSYXNoZWQgXHUyMDIyICd9XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgc3g9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fVxyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2t1cmRpLWRldidcclxuICAgICAgICA+XHJcbiAgICAgICAgICBLdXJkaS1EZXZcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHN0eWxlZCwgYWxwaGEgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9JbnB1dEJhc2UnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IEhvbWVPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ib21lT3V0bGluZWQnO1xyXG5pbXBvcnQgTW92aWVDcmVhdGlvbk91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmllQ3JlYXRpb25PdXRsaW5lZCc7XHJcbmltcG9ydCBMaXZlVHZPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9MaXZlVHZPdXRsaW5lZCc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XHJcblxyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XHJcblxyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gICAgaHJlZjogJy8nLFxyXG4gICAgaWNvbjogPEhvbWVPdXRsaW5lZEljb24gLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ01vdmllcycsXHJcbiAgICBocmVmOiAnL21vdmllcycsXHJcbiAgICBpY29uOiA8TW92aWVDcmVhdGlvbk91dGxpbmVkSWNvbiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnVHYgU2VyaWVzJyxcclxuICAgIGhyZWY6ICcvdHYnLFxyXG4gICAgaWNvbjogPExpdmVUdk91dGxpbmVkSWNvbiAvPixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgU2VhcmNoID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gIGJhY2tncm91bmRDb2xvcjogYWxwaGEodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMTUpLFxyXG4gICcmOmhvdmVyJzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBhbHBoYSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4yNSksXHJcbiAgfSxcclxuICBtYXJnaW5MZWZ0OiAwLFxyXG4gIHdpZHRoOiAnMTAwJScsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU2VhcmNoSWNvbldyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICBoZWlnaHQ6ICcxMDAlJyxcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxufSkpO1xyXG5cclxuY29uc3QgU3R5bGVkSW5wdXRCYXNlID0gc3R5bGVkKElucHV0QmFzZSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICcmIC5NdWlJbnB1dEJhc2UtaW5wdXQnOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxyXG4gICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cclxuICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJyksXHJcbiAgICB3aWR0aDogJzEwY2gnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogJzEyY2gnLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICB3aWR0aDogJzIwY2gnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2FuY2hvckVsTmF2LCBzZXRBbmNob3JFbE5hdl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk5hdk1lbnUgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsTmF2KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VOYXZNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWxOYXYobnVsbCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcEJhclxyXG4gICAgICBwb3NpdGlvbj0nc3RhdGljJ1xyXG4gICAgICBzeD17e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjAsIDI0LCAzMCwgMC44KScsXHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5Lm1haW4nLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPSd4bCc+XHJcbiAgICAgICAgPFRvb2xiYXIgZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PSdoNidcclxuICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD0nZGl2J1xyXG4gICAgICAgICAgICBzeD17eyBtcjogMiwgZGlzcGxheTogeyB4czogJ25vbmUnLCBtZDogJ2ZsZXgnIH0gfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTU9WSVhcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIGRpc3BsYXk6IHsgeHM6ICdmbGV4JywgbWQ6ICdub25lJyB9IH19PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2FwcGJhciBtZW51IGJ1dHRvbidcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPSdtZW51LWFwcGJhcidcclxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPSd0cnVlJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5OYXZNZW51fVxyXG4gICAgICAgICAgICAgIGNvbG9yPSdpbmhlcml0J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICBpZD0nbWVudS1hcHBiYXInXHJcbiAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsTmF2fVxyXG4gICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWxOYXYpfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTmF2TWVudX1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogeyB4czogJ2Jsb2NrJywgbWQ6ICdub25lJyB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtsaW5rLmhyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTmF2TWVudX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtsaW5rLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndGV4dC5wcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKiBtb2JpbGUgbG9nbyAqL31cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xyXG4gICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgY29tcG9uZW50PSdkaXYnXHJcbiAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiB7IHhzOiAnZmxleCcsIG1kOiAnbm9uZScgfSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBNT1ZJWFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgey8qIGhvcml6ZW50YWwgbWVudSBpdGVtcyAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB7IHhzOiAnbm9uZScsIG1kOiAnZmxleCcgfSxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICA8TGluayB0bz17bGluay5ocmVmfSBrZXk9e2xpbmsuaHJlZn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTmF2TWVudX1cclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBteTogMixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RleHQucHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICBweDogNCxcclxuICAgICAgICAgICAgICAgICAgICAnOmhvdmVyJzogeyBjb2xvcjogJ3ByaW1hcnkubWFpbicgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAwIH19PlxyXG4gICAgICAgICAgICA8U2VhcmNoPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9TZWFyY2hJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgICA8U3R5bGVkSW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoXHUyMDI2J1xyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdzZWFyY2gnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TZWFyY2g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9BcHBCYXI+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VGZXRjaGVyLCByZWRpcmVjdCwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZW1peCc7XHJcbmltcG9ydCB7IGdldEFsbE1vdmllcyB9IGZyb20gJy4uLy4uL3NyYy91dGlscy9mZXRjaGVyJztcclxuaW1wb3J0IG1vdmllR2VucmVzIGZyb20gJy4uLy4uL3NyYy9zaGFyZWQvbW92aWVHZW5yZXMnO1xyXG5pbXBvcnQgTW92aWVEZXRhaWxEcmF3ZXIgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvTW92aWVEZXRhaWxEcmF3ZXInO1xyXG5pbXBvcnQgTW92aWVzR3JpZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Nb3ZpZXNHcmlkJztcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBDaGlwLCBQYWdpbmF0aW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCBnZW5yZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdnZW5yZScpO1xyXG4gIGlmICghZ2VucmUpIHtcclxuICAgIGdlbnJlID0gJ3RyZW5kaW5nJztcclxuICB9XHJcbiAgbGV0IHBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncGFnZScpO1xyXG4gIGlmICghcGFnZSkge1xyXG4gICAgcGFnZSA9IDE7XHJcbiAgfVxyXG4gIC8vIGluY2FzZSB0aGUgZ2VucmUgcGFyYW1ldGVyIGlzIG5vdCBpbiB0aGUgZ2VucmUgbGlzdFxyXG4gIGlmICghT2JqZWN0LmtleXMobW92aWVHZW5yZXMpLmluY2x1ZGVzKGdlbnJlKSB8fCBwYWdlID4gMTAwMCkge1xyXG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKCdOb3QgRm91bmQnLCB7IHN0YXR1czogNDA0IH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92aWVzRGF0YSA9IGF3YWl0IGdldEFsbE1vdmllcyhnZW5yZSwgcGFnZSk7XHJcbiAgaWYgKCFtb3ZpZXNEYXRhKSB7XHJcbiAgICAvLyB3ZSBrbm93IHdlIGNhbid0IHJlbmRlciB0aGUgY29tcG9uZW50XHJcbiAgICAvLyBzbyB0aHJvdyBpbW1lZGlhdGVseSB0byBzdG9wIGV4ZWN1dGluZyBjb2RlXHJcbiAgICAvLyBhbmQgc2hvdyB0aGUgbm90IGZvdW5kIHBhZ2VcclxuICAgIHRocm93IG5ldyBSZXNwb25zZSgnTm90IEZvdW5kJywgeyBzdGF0dXM6IDQwNCB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIG1vdmllc0RhdGEsXHJcbiAgICBwYWdlOiBwYXJzZUludChwYWdlKSxcclxuICAgIGdlbnJlLFxyXG4gICAgYWxsR2VucmVzOiBPYmplY3Qua2V5cyhtb3ZpZUdlbnJlcyksXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXHJcbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZTogJ01vdmllcyB8IE1PVklYJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnV2VsY29tZSB0byBNb3ZpeCwgQSBSZW1peCBNb3ZpZSBBcHAhJyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKCkge1xyXG4gIGNvbnN0IHsgbW92aWVzRGF0YSwgcGFnZSwgZ2VucmUsIGFsbEdlbnJlcyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICBjb25zdCBbc2hvd0luZm8sIHNldFNob3dJbmZvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW92aWVJbmZvRGF0YSwgc2V0TW92aWVJbmZvRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dJbmZvID0gKG1vdmllRGF0YSkgPT4ge1xyXG4gICAgc2V0TW92aWVJbmZvRGF0YShtb3ZpZURhdGEpO1xyXG4gICAgc2V0U2hvd0luZm8odHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kZUNsb3NlSW5mbyA9ICgpID0+IHtcclxuICAgIHNldFNob3dJbmZvKGZhbHNlKTtcclxuICAgIHNldE1vdmllSW5mb0RhdGEobnVsbCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVHZW5yZUNoYW5nZSA9IChzZWxlY3RlZEdlbnJlKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZShgL21vdmllcz9nZW5yZT0ke3NlbGVjdGVkR2VucmV9JnBhZ2U9JHtwYWdlfWApO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcclxuICAgIG5hdmlnYXRlKGAvbW92aWVzP2dlbnJlPSR7Z2VucmV9JnBhZ2U9JHt2YWx1ZX1gKTtcclxuICB9O1xyXG4gIGNvbnN0IGdlbnJlQ2hpcHMgPSBhbGxHZW5yZXMubWFwKCh0aXRsZSkgPT4gKFxyXG4gICAgPENoaXBcclxuICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA1LCBtYXJnaW5SaWdodDogMyB9fVxyXG4gICAgICBrZXk9e3RpdGxlfVxyXG4gICAgICBsYWJlbD17dGl0bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aXRsZS5zbGljZSgxKS5yZXBsYWNlKCdfJywgJyAnKX1cclxuICAgICAgY29sb3I9e3RpdGxlID09IGdlbnJlID8gJ3ByaW1hcnknIDogJ2RlZmF1bHQnfVxyXG4gICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR2VucmVDaGFuZ2UodGl0bGUpfVxyXG4gICAgLz5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8Qm94IHBhZGRpbmdZPXszfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xyXG4gICAgICAgICAgICBzeD17eyBtYjogMiwgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFeHBsb3JlIE1vdmllc1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4V3JhcD0nd3JhcCc+XHJcbiAgICAgICAgICAgIHtnZW5yZUNoaXBzfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPE1vdmllc0dyaWQgbW92aWVzPXttb3ZpZXNEYXRhfSBzaG93TW92aWVJbmZvRHJhd2VyPXtoYW5kbGVTaG93SW5mb30gLz5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIHBhZGRpbmdZPXs1fSBqdXN0aWZ5Q29udGVudD0nY2VudGVyJz5cclxuICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIGNvdW50PXsxMDAwfVxyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgc2hhcGU9J3JvdW5kZWQnXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW92aWVEZXRhaWxEcmF3ZXJcclxuICAgICAgICBtb3ZpZURhdGE9e21vdmllSW5mb0RhdGF9XHJcbiAgICAgICAgc2hvdz17c2hvd0luZm99XHJcbiAgICAgICAgaGFuZGVDbG9zZUluZm89e2hhbmRlQ2xvc2VJbmZvfVxyXG4gICAgICAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgcmVxdWVzdFVybHMgZnJvbSAnLi4vc2hhcmVkL3JlcXVlc3RzJztcclxuaW1wb3J0IG1vdmllR2VucmVzIGZyb20gJy4uL3NoYXJlZC9tb3ZpZUdlbnJlcyc7XHJcbmltcG9ydCB0dkdlbnJlcyBmcm9tICcuLi9zaGFyZWQvdHZHZW5yZXMnO1xyXG5jb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LlRNREJfQVBJX0tFWSB8fCAnJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEYXRhKCkge1xyXG4gIGxldCBhbGxTaG93cyA9IHt9O1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3QuZW50cmllcyhyZXF1ZXN0VXJscyk7XHJcbiAgZm9yIChjb25zdCBbdGl0bGUsIHVybF0gb2YgY2F0ZWdvcmllcykge1xyXG4gICAgYXdhaXQgYXhpb3NcclxuICAgICAgLmdldChgJHtiYXNlVVJMfSR7dXJsfWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBhbGxTaG93c1t0aXRsZV0gPSByZXMuZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgaXMgc29tdGhpbmcgd3Jvbmcgd2l0aCB0aGUgVE1EQiBBUEkgZ2V0IHJlcXVlc3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBhbGxTaG93cztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RnJvbUFQSShmZXRjaFVybCwgc2luZ3VsYXIgPSBmYWxzZSkge1xyXG4gIHJldHVybiBheGlvc1xyXG4gICAgLmdldChmZXRjaFVybClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGlmIChzaW5ndWxhcikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLmRhdGEucmVzdWx0cztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIHNvbXRoaW5nIHdyb25nIHdpdGggdGhlIFRNREIgQVBJIGdldCByZXF1ZXN0Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCB0aGF0IHRyaWdnZXJlZCBhbiBFcnJvclxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvbmZpZyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsTW92aWVzKGdlbnJlLCBwYWdlKSB7XHJcbiAgbGV0IGZldGNoVXJsID0gYCR7YmFzZVVSTH0ke21vdmllR2VucmVzW2dlbnJlXX0mbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0ke3BhZ2V9YDtcclxuICByZXR1cm4gZ2V0RnJvbUFQSShmZXRjaFVybCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaW5nbGVNb3ZpZShtb3ZpZV9pZCkge1xyXG4gIGxldCBmZXRjaFVybCA9IGAke2Jhc2VVUkx9L21vdmllLyR7bW92aWVfaWR9P2FwaV9rZXk9JHtBUElfS0VZfSZsYW5ndWFnZT1lbi1VUyZhcHBlbmRfdG9fcmVzcG9uc2U9dmlkZW9zLGtleXdvcmRzLHNpbWlsYXIsY3JlZGl0c2A7XHJcbiAgcmV0dXJuIGdldEZyb21BUEkoZmV0Y2hVcmwsIHRydWUpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVHYoZ2VucmUsIHBhZ2UpIHtcclxuICBsZXQgZmV0Y2hVcmwgPSBgJHtiYXNlVVJMfSR7dHZHZW5yZXNbZ2VucmVdfSZsYW5ndWFnZT1lbi1VUyZwYWdlPSR7cGFnZX1gO1xyXG4gIHJldHVybiBnZXRGcm9tQVBJKGZldGNoVXJsKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2luZ2xlVHYodHZfaWQpIHtcclxuICBsZXQgZmV0Y2hVcmwgPSBgJHtiYXNlVVJMfS90di8ke3R2X2lkfT9hcGlfa2V5PSR7QVBJX0tFWX0mbGFuZ3VhZ2U9ZW4tVVMmYXBwZW5kX3RvX3Jlc3BvbnNlPXZpZGVvcyxrZXl3b3JkcyxzaW1pbGFyLGNyZWRpdHNgO1xyXG4gIGNvbnN0IHR2RGF0YSA9IGF3YWl0IGdldEZyb21BUEkoZmV0Y2hVcmwsIHRydWUpO1xyXG4gIGNvbnNvbGUubG9nKCcjIHNlYXNvbnM6ICcsIHR2RGF0YS5udW1iZXJfb2Zfc2Vhc29ucyk7XHJcbiAgY29uc3Qgc2Vhc29ucyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHR2RGF0YS5udW1iZXJfb2Zfc2Vhc29uczsgaSsrKSB7XHJcbiAgICBsZXQgc2Vhc29uRmV0Y2hVcmwgPSBgJHtiYXNlVVJMfS90di8ke3R2X2lkfS9zZWFzb24vJHtpfT9hcGlfa2V5PSR7QVBJX0tFWX0mbGFuZ3VhZ2U9ZW4tVVNgO1xyXG4gICAgbGV0IHNlYXNvbkRhdGEgPSBhd2FpdCBnZXRGcm9tQVBJKHNlYXNvbkZldGNoVXJsLCB0cnVlKTtcclxuICAgIHNlYXNvbnMucHVzaChzZWFzb25EYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHR2RGF0YSwgc2Vhc29ucyB9O1xyXG59XHJcbiIsICJjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuVE1EQl9BUElfS0VZIHx8ICcnO1xyXG5jb25zdCByZXF1ZXN0cyA9IHtcclxuICAvL01vdmllc1xyXG4gIEFjdGlvbjogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MjhgLFxyXG4gIEFkdmVudHVyZTogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTJgLFxyXG4gIEFuaW1hdGlvbjogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTZgLFxyXG4gIENvbWVkeTogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MzVgLFxyXG4gIENyaW1lOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz04MGAsXHJcbiAgRG9jdW1lbnRhcnk6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTk5YCxcclxuICBEcmFtYTogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MThgLFxyXG4gIEZhbWlseTogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTA3NTFgLFxyXG4gIEZhbnRhc3k6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTE0YCxcclxuICBIaXN0b3J5OiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0zNmAsXHJcbiAgSG9ycm9yOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0yN2AsXHJcbiAgTXVzaWM6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTEwNDAyYCxcclxuICBNeXN0ZXJ5OiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz05NjQ4YCxcclxuICBSb21hbmNlOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0xMDc0OWAsXHJcbiAgU2NpZW5jZUZpY3Rpb246IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTg3OGAsXHJcbiAgVFZNb3ZpZTogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTA3NzBgLFxyXG4gIFRocmlsbGVyOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz01M2AsXHJcbiAgV2FyOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0xMDc1MmAsXHJcbiAgV2VzdGVybjogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MzdgLFxyXG4gIC8vVHZzXHJcbiAgVHZzTmV0ZmxpeDogYC9kaXNjb3Zlci90dj9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9uZXR3b3Jrcz0yMTNgLFxyXG4gIC8vT3RoZXJzXHJcbiAgVHJlbmRpbmc6IGAvdHJlbmRpbmcvYWxsL3dlZWs/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWVuLXVzYCxcclxuICBUb3BSYXRlZDogYC9tb3ZpZS90b3BfcmF0ZWQ/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWVuLXVzYCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdHM7XHJcbiIsICJsZXQgQVBJX0tFWSA9IHByb2Nlc3MuZW52LlRNREJfQVBJX0tFWSB8fCAnJztcclxuY29uc3QgbW92aWVHZW5yZXMgPSB7XHJcbiAgLy9Nb3ZpZXNcclxuICB0cmVuZGluZzogYC90cmVuZGluZy9tb3ZpZS9kYXk/YXBpX2tleT0ke0FQSV9LRVl9YCxcclxuICBhY3Rpb246IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTI4YCxcclxuICBhZHZlbnR1cmU6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTEyYCxcclxuICBhbmltYXRpb246IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTE2YCxcclxuICBjb21lZHk6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTM1YCxcclxuICBjcmltZTogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9ODBgLFxyXG4gIGRvY3VtZW50YXJ5OiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz05OWAsXHJcbiAgZHJhbWE6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTE4YCxcclxuICBmYW1pbHk6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTEwNzUxYCxcclxuICBmYW50YXN5OiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0xNGAsXHJcbiAgaGlzdG9yeTogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MzZgLFxyXG4gIGhvcnJvcjogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MjdgLFxyXG4gIG11c2ljOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0xMDQwMmAsXHJcbiAgbXlzdGVyeTogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9OTY0OGAsXHJcbiAgcm9tYW5jZTogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTA3NDlgLFxyXG4gIHNjaWVuY2VfZmljdGlvbjogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9ODc4YCxcclxuICB0djogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTA3NzBgLFxyXG4gIHRocmlsbGVyOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz01M2AsXHJcbiAgd2FyOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0xMDc1MmAsXHJcbiAgd2VzdGVybjogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MzdgLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBtb3ZpZUdlbnJlcztcclxuIiwgImxldCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuVE1EQl9BUElfS0VZIHx8ICcnO1xyXG5jb25zdCB0dkdlbnJlcyA9IHtcclxuICAvL3R2c1xyXG4gIHRyZW5kaW5nOiBgL3RyZW5kaW5nL3R2L2RheT9hcGlfa2V5PSR7QVBJX0tFWX1gLFxyXG4gIGFjdGlvbl9BZHZlbnR1cmU6IGAvZGlzY292ZXIvdHY/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTEwNzU5YCxcclxuICBhbmltYXRpb246IGAvZGlzY292ZXIvdHY/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTE2YCxcclxuICBjb21lZHk6IGAvZGlzY292ZXIvdHY/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTM1YCxcclxuICBjcmltZTogYC9kaXNjb3Zlci90dj9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9ODBgLFxyXG4gIGRvY3VtZW50YXJ5OiBgL2Rpc2NvdmVyL3R2P2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz05OWAsXHJcbiAgZHJhbWE6IGAvZGlzY292ZXIvdHY/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTE4YCxcclxuICBmYW1pbHk6IGAvZGlzY292ZXIvdHY/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTEwNzUxYCxcclxuICBraWRzOiBgL2Rpc2NvdmVyL3R2P2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0xMDc2MmAsXHJcbiAgbXlzdGVyeTogYC9kaXNjb3Zlci90dj9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9OTY0OGAsXHJcbiAgbmV3czogYC9kaXNjb3Zlci90dj9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTA3NjNgLFxyXG4gIHJlYWxpdHk6IGAvZGlzY292ZXIvdHY/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTEwNzY0YCxcclxuICBzY2lmaV9GYW50YXN5OiBgL2Rpc2NvdmVyL3R2P2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0xMDc2NWAsXHJcbiAgc29hcDogYC9kaXNjb3Zlci90dj9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTA3NjZgLFxyXG4gIHRhbGs6IGAvZGlzY292ZXIvdHY/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTEwNzY3YCxcclxuICB3YXJfUG9saXRpY3M6IGAvZGlzY292ZXIvdHY/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTEwNzY4YCxcclxuICB3ZXN0ZXJuOiBgL2Rpc2NvdmVyL3R2P2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0zN2AsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHR2R2VucmVzO1xyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgRHJhd2VyLFxyXG4gIENvbnRhaW5lcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEJveCxcclxuICBJY29uQnV0dG9uLFxyXG4gIENoaXAsXHJcbiAgUmF0aW5nLFxyXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgZ2VucmVzIGZyb20gJy4uL3NoYXJlZC9nZW5yZXMnO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVEZXRhaWxEcmF3ZXIoeyBtb3ZpZURhdGEsIHNob3csIGhhbmRlQ2xvc2VJbmZvIH0pIHtcclxuICBjb25zdCBnZW5yZUNoaXBzID0gW107XHJcbiAgbW92aWVEYXRhICE9IG51bGwgJiZcclxuICAgIG1vdmllRGF0YT8uZ2VucmVfaWRzLmZvckVhY2goKGlkKSA9PlxyXG4gICAgICBnZW5yZUNoaXBzLnB1c2goXHJcbiAgICAgICAgPENoaXBcclxuICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogNSB9fVxyXG4gICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICBjb2xvcj0nZGVmYXVsdCdcclxuICAgICAgICAgIGNsaWNrYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgIGxhYmVsPXtgJHtnZW5yZXNbaWRdfWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgaWYgKCFtb3ZpZURhdGEpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgICAgYW5jaG9yPSdib3R0b20nXHJcbiAgICAgIG9wZW49e3Nob3d9XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRlQ2xvc2VJbmZvfVxyXG4gICAgICBQYXBlclByb3BzPXt7IHN4OiB7IGJhY2tncm91bmQ6ICcjMTQxODFlJyB9IH19XHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J3hsJyBzeD17eyBweTogNCB9fT5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9J2gxJ1xyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeS5tYWluJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogeyB4czogMTgsIHNtOiAyMiwgbGc6IDI2IH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttb3ZpZURhdGE/LnRpdGxlIHx8IG1vdmllRGF0YT8ubmFtZSB8fCBtb3ZpZURhdGE/Lm9yaWdpbmFsX25hbWV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kZUNsb3NlSW5mb30+XHJcbiAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4RGlyZWN0aW9uPSdyb3cnIGFsaWduSXRlbXM9J2NlbnRlcic+XHJcbiAgICAgICAgICA8UmF0aW5nXHJcbiAgICAgICAgICAgIG5hbWU9J3JlYWQtb25seSdcclxuICAgICAgICAgICAgdmFsdWU9e21vdmllRGF0YS52b3RlX2F2ZXJhZ2UgLyAyfVxyXG4gICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjODM4MzgzJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMC4zLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc0cHgnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJyBjb2xvcj0ncHJpbWFyeScgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAgICB7bW92aWVEYXRhLnZvdGVfYXZlcmFnZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4RGlyZWN0aW9uPSdyb3cnIGZsZXhXcmFwPSd3cmFwJyBweT17Mn0+XHJcbiAgICAgICAgICB7Z2VucmVDaGlwc31cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXhEaXJlY3Rpb249J3Jvdyc+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PSdib2R5MSdcclxuICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IHsgeHM6IDE0LCBzbTogMTYsIGxnOiAxOCB9IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttb3ZpZURhdGEub3ZlcnZpZXd9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGRpc3BsYXk9J2ZsZXgnXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAgICBtYXJnaW5Ub3A9ezF9XHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b209ezF9XHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD0nZmxleC1lbmQnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgdG89e2AvJHttb3ZpZURhdGEuZmlyc3RfYWlyX2RhdGUgPyAndHYnIDogJ21vdmllcyd9LyR7XHJcbiAgICAgICAgICAgICAgbW92aWVEYXRhLmlkXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgIGVuZEljb249ezxWaXNpYmlsaXR5SWNvbiAvPn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kZUNsb3NlSW5mb31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1vcmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9EcmF3ZXI+XHJcbiAgKTtcclxufVxyXG4iLCAiY29uc3QgZ2VucmVzID0ge1xyXG4gIDI4OiAnQWN0aW9uJyxcclxuICAxMjogJ0FkdmVudHVyZScsXHJcbiAgMTY6ICdBbmltYXRpb24nLFxyXG4gIDM1OiAnQ29tZWR5JyxcclxuICA4MDogJ0NyaW1lJyxcclxuICA5OTogJ0RvY3VtZW50YXJ5JyxcclxuICAxODogJ0RyYW1hJyxcclxuICAxMDc1MTogJ0ZhbWlseScsXHJcbiAgMTQ6ICdGYW50YXN5JyxcclxuICAzNjogJ0hpc3RvcnknLFxyXG4gIDI3OiAnSG9ycm9yJyxcclxuICAxMDQwMjogJ011c2ljJyxcclxuICA5NjQ4OiAnTXlzdGVyeScsXHJcbiAgMTA3NDk6ICdSb21hbmNlJyxcclxuICA4Nzg6ICdTY2llbmNlIEZpY3Rpb24nLFxyXG4gIDEwNzcwOiAnVFYgTW92aWUnLFxyXG4gIDUzOiAnVGhyaWxsZXInLFxyXG4gIDEwNzUyOiAnV2FyJyxcclxuICAzNzogJ1dlc3Rlcm4nLFxyXG4gIDEwNzU5OiAnQWN0aW9uICYgQWR2ZW50dXJlJyxcclxuICAxMDc2MjogJ0tpZHMnLFxyXG4gIDEwNzYzOiAnTmV3cycsXHJcbiAgMTA3NjQ6ICdSZWFsaXR5JyxcclxuICAxMDc2NTogJ1NjaS1GaSAmIEZhbnRhc3knLFxyXG4gIDEwNzY2OiAnU29hcCcsXHJcbiAgMTA3Njc6ICdUYWxrJyxcclxuICAxMDc2ODogJ1dhciAmIFBvbGl0aWNzJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbnJlcztcclxuIiwgImltcG9ydCB7IFR5cG9ncmFwaHksIEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5jb25zdCBpbWFnZV9iYXNlX3VybCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllc0dyaWQoeyBtb3ZpZXMsIHNob3dNb3ZpZUluZm9EcmF3ZXIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHdpZHRoPScxMDAlJ1xyXG4gICAgICBkaXNwbGF5PSdmbGV4J1xyXG4gICAgICBmbGV4V3JhcD0nd3JhcCdcclxuICAgICAgZmxleERpcmVjdGlvbj0ncm93J1xyXG4gICAgICBqdXN0aWZ5Q29udGVudD0nY2VudGVyJ1xyXG4gICAgICBweT17MX1cclxuICAgID5cclxuICAgICAge21vdmllcy5tYXAoKG1vdmllKSA9PiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAga2V5PXttb3ZpZS5pZH1cclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIG15OiAyLFxyXG4gICAgICAgICAgICBteDogMixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDE3MCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSA0NTBtcycsXHJcbiAgICAgICAgICAgICc6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wNyknLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd01vdmllSW5mb0RyYXdlcihtb3ZpZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBjb21wb25lbnQ9J2ltZydcclxuICAgICAgICAgICAgc3g9e3sgb2JqZWN0Rml0OiAnY29udGFpbicsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogMjQwIH19XHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2VfYmFzZV91cmwgKyBtb3ZpZS5wb3N0ZXJfcGF0aH1cclxuICAgICAgICAgICAgYWx0PXttb3ZpZS50aXRsZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzd2lwZXItbGF6eSdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXhXcmFwPSd3cmFwJz48L0JveD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHN4PXt7IGNvbG9yOiAndGV4dC5tYWluJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PSdzdWJ0aXRsZTInXHJcbiAgICAgICAgICAgIGNvbG9yPSdpbml0aWFsJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bW92aWU/LnRpdGxlIHx8IG1vdmllPy5uYW1lIHx8IG1vdmllPy5vcmlnaW5hbF9uYW1lfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IEFjdG9yc1JvdyBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9BY3RvcnNSb3cnO1xyXG5pbXBvcnQgSGVyb0ltYWdlIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0hlcm9JbWFnZSc7XHJcbmltcG9ydCBNb3ZpZURldGFpbERyYXdlciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Nb3ZpZURldGFpbERyYXdlcic7XHJcbmltcG9ydCBNb3ZpZXNSb3cgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvTW92aWVzUm93JztcclxuaW1wb3J0IFNob3dEZXRhaWwgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvU2hvd0RldGFpbCc7XHJcbmltcG9ydCB7IGdldFNpbmdsZU1vdmllIH0gZnJvbSAnLi4vLi4vc3JjL3V0aWxzL2ZldGNoZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgbW92aWVfaWQgPSBwYXJzZUludChwYXJhbXMuaWQpO1xyXG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcihtb3ZpZV9pZCkpIHtcclxuICAgIHRocm93IG5ldyBSZXNwb25zZSgnTm90IEZvdW5kJywgeyBzdGF0dXM6IDQwNCB9KTtcclxuICB9XHJcbiAgY29uc3QgbW92aWVEYXRhID0gZ2V0U2luZ2xlTW92aWUobW92aWVfaWQpO1xyXG4gIGlmICghbW92aWVEYXRhKSB7XHJcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoJ05vdCBGb3VuZCcsIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBtb3ZpZURhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3ZpZVBhZ2UoKSB7XHJcbiAgY29uc3QgbW92aWVEYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFtzaG93SW5mbywgc2V0U2hvd0luZm9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb3ZpZUluZm9EYXRhLCBzZXRNb3ZpZUluZm9EYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93SW5mbyA9IChzZWxlY3RlZE1vdmllRGF0YSkgPT4ge1xyXG4gICAgc2V0TW92aWVJbmZvRGF0YShzZWxlY3RlZE1vdmllRGF0YSk7XHJcbiAgICBzZXRTaG93SW5mbyh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRlQ2xvc2VJbmZvID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0luZm8oZmFsc2UpO1xyXG4gICAgc2V0TW92aWVJbmZvRGF0YShudWxsKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxIZXJvSW1hZ2UgaW1hZ2U9e21vdmllRGF0YS5iYWNrZHJvcF9wYXRofSAvPlxyXG4gICAgICA8U2hvd0RldGFpbCBzaG93RGF0YT17bW92aWVEYXRhfSAvPlxyXG4gICAgICA8QWN0b3JzUm93IGFjdG9yc0RhdGE9e21vdmllRGF0YS5jcmVkaXRzLmNhc3Quc2xpY2UoMCwgMjUpfSAvPlxyXG4gICAgICB7bW92aWVEYXRhPy5zaW1pbGFyPy5yZXN1bHRzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxNb3ZpZXNSb3dcclxuICAgICAgICAgIHRpdGxlPSdSZWxhdGVkIE1vdmllcydcclxuICAgICAgICAgIG1vdmllc0RhdGE9e21vdmllRGF0YS5zaW1pbGFyLnJlc3VsdHN9XHJcbiAgICAgICAgICBzaG93TW92aWVJbmZvRHJhd2VyPXtoYW5kbGVTaG93SW5mb31cclxuICAgICAgICAgIHNpbWlsYXI9e3RydWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPE1vdmllRGV0YWlsRHJhd2VyXHJcbiAgICAgICAgbW92aWVEYXRhPXttb3ZpZUluZm9EYXRhfVxyXG4gICAgICAgIHNob3c9e3Nob3dJbmZvfVxyXG4gICAgICAgIGhhbmRlQ2xvc2VJbmZvPXtoYW5kZUNsb3NlSW5mb31cclxuICAgICAgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIExpbmVhclByb2dyZXNzLCBEaXZpZGVyLCBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbi8vIGltcG9ydCBTd2lwZXIgY29yZSBhbmQgcmVxdWlyZWQgY29tcG9uZW50c1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcblxyXG4vLyBpbnN0YWxsIFN3aXBlciBjb21wb25lbnRzXHJcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uXSk7XHJcblxyXG5jb25zdCBpbWFnZV9iYXNlX3VybCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCc7XHJcbmNvbnN0IG5vX3BpY3R1cmUgPSAnL25vLXBob3RvLmpwZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3RvcnNSb3coeyBhY3RvcnNEYXRhIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gJyc7XHJcblxyXG4gIGNvbnN0IHN3aXBlckl0ZW1zID0gYWN0b3JzRGF0YS5tYXAoKGFjdG9yKSA9PiAoXHJcbiAgICA8U3dpcGVyU2xpZGVcclxuICAgICAga2V5PXthY3Rvci5pZH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtYXhXaWR0aDogMjAwLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNDUwbXMnLFxyXG4gICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMDcpJyxcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwYjogMixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PSdpbWcnXHJcbiAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICBhY3Rvci5wcm9maWxlX3BhdGhcclxuICAgICAgICAgICAgICA/IGltYWdlX2Jhc2VfdXJsICsgYWN0b3IucHJvZmlsZV9wYXRoXHJcbiAgICAgICAgICAgICAgOiBub19waWN0dXJlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhbHQ9e2FjdG9yLm5hbWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3N3aXBlci1sYXp5J1xyXG4gICAgICAgICAgc3g9e3sgb2JqZWN0Rml0OiAnY29udGFpbicsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogMjQwIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Qm94IHdpZHRoPScxMDAlJyB0ZXh0QWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIGNvbG9yPSd0ZXh0LnByaW1hcnknPlxyXG4gICAgICAgICAgICB7YWN0b3IubmFtZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nIGNvbG9yPSd0ZXh0LnByaW1hcnknPlxyXG4gICAgICAgICAgICB7YEFzICR7YWN0b3IuY2hhcmFjdGVyfWB9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Td2lwZXJTbGlkZT5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgcHk6IDQsIGJhY2tncm91bmRDb2xvcjogJyMxMjEyMTInIH19PlxyXG4gICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGp1c3RpZnlDb250ZW50PSdmbGV4LXN0YXJ0JyBtYj17Mn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9J2J1dHRvbidcclxuICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgZGlzcGxheT0naW5saW5lJ1xyXG4gICAgICAgICAgY29tcG9uZW50PSdoMidcclxuICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAxOCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFjdG9yc1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggb3ZlcmZsb3c9J2hpZGRlbic+XHJcbiAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgbmF2aWdhdGlvbj17dHJ1ZX1cclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MX1cclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9J2F1dG8nXHJcbiAgICAgICAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHlcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zd2lwZXJfY29udGFpbmVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzd2lwZXJJdGVtc31cclxuICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8RGl2aWRlciB2YXJpYW50PSdmdWxsV2lkdGgnIGxpZ2h0IHN4PXt7IG10OiAyIH19IC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb0ltYWdlKHsgaW1hZ2UgfSkge1xyXG4gIGNvbnN0IGltYWdlX2Jhc2VfdXJsID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsJztcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlX2Jhc2VfdXJsfSR7aW1hZ2V9KWAsXHJcbiAgICAgICAgaGVpZ2h0OiB7IHhzOiAzMDAsIHNtOiAzNzAsIGxnOiA0NTAsIHhsOiA1MDAgfSxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHRyYW5zcGFyZW50LHJnYmEoMzcsMzcsMzcsMC42MSksIzExMSknLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBUeXBvZ3JhcGh5LCBCdXR0b24sIERpdmlkZXIsIEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlbWl4JztcclxuXHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dGb3J3YXJkJztcclxuXHJcbi8vIGltcG9ydCBTd2lwZXIgY29yZSBhbmQgcmVxdWlyZWQgY29tcG9uZW50c1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbi8vIGluc3RhbGwgU3dpcGVyIGNvbXBvbmVudHNcclxuU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb25dKTtcclxuXHJcbmNvbnN0IGltYWdlX2Jhc2VfdXJsID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllc1Jvdyh7XHJcbiAgdGl0bGUsXHJcbiAgbW92aWVzRGF0YSxcclxuICBnZW5yZSxcclxuICB0eXBlLFxyXG4gIHNob3dNb3ZpZUluZm9EcmF3ZXIsXHJcbiAgc2ltaWxhcixcclxufSkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBzZWVBbGxDbGlja0hhbmRsZSA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlID09ICduZXRmbGl4Jykge1xyXG4gICAgICBuYXZpZ2F0ZSgnL3R2Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZpZ2F0ZShgLyR7dHlwZX0/Z2VucmU9JHtnZW5yZX1gKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzd2lwZXJJdGVtcyA9IG1vdmllc0RhdGEubWFwKChtb3ZpZSkgPT4gKFxyXG4gICAgPFN3aXBlclNsaWRlXHJcbiAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgbWF4V2lkdGg6IDE4MCxcclxuICAgICAgfX1cclxuICAgICAgb25DbGljaz17KCkgPT4gc2hvd01vdmllSW5mb0RyYXdlcihtb3ZpZSl9XHJcbiAgICA+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSA0NTBtcycsXHJcbiAgICAgICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjA3KScsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICBwYjogMSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtpbWFnZV9iYXNlX3VybCArIG1vdmllLnBvc3Rlcl9wYXRofVxyXG4gICAgICAgICAgYWx0PXttb3ZpZS50aXRsZX1cclxuICAgICAgICAgIHN4PXt7IG9iamVjdEZpdDogJ2NvbnRhaW4nLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9eydzd2lwZXItbGF6eSd9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAndGV4dC5wcmltYXJ5JywgbXQ6IDEgfX1cclxuICAgICAgICAgIHZhcmlhbnQ9J3N1YnRpdGxlMidcclxuICAgICAgICAgIGNvbG9yPSdpbml0aWFsJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIHttb3ZpZT8udGl0bGUgfHwgbW92aWU/Lm5hbWUgfHwgbW92aWU/Lm9yaWdpbmFsX25hbWV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMxMjEyMTInIH19PlxyXG4gICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJyBtYj17MX0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAxOCB9fVxyXG4gICAgICAgICAgdmFyaWFudD0nYnV0dG9uJ1xyXG4gICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICBkaXNwbGF5PSdpbmxpbmUnXHJcbiAgICAgICAgICBjb21wb25lbnQ9J2gyJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgeyFzaW1pbGFyICYmIChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc2l6ZT0nbWVkaXVtJ1xyXG4gICAgICAgICAgICB2YXJpYW50PSd0ZXh0J1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgb25DbGljaz17c2VlQWxsQ2xpY2tIYW5kbGV9XHJcbiAgICAgICAgICAgIGVuZEljb249ezxBcnJvd0ZvcndhcmRJY29uIC8+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWUgYWxsXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIG1pbkhlaWdodDogMzIwLFxyXG4gICAgICAgICAgcGI6IDIsXHJcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgIG5hdmlnYXRpb249e3RydWV9IC8vVE9ETzogb25seSBzaG93IGl0IGluIG1vYmlsZVxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuPXsxOH1cclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9J2F1dG8nXHJcbiAgICAgICAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHlcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c3dpcGVySXRlbXN9XHJcbiAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RGl2aWRlciB2YXJpYW50PSdmdWxsV2lkdGgnIHN4PXt7IG1iOiAyIH19IGxpZ2h0IC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQ2hpcCxcclxuICBCdXR0b24sXHJcbiAgQnJlYWRjcnVtYnMsXHJcbiAgUmF0aW5nLFxyXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgRnNMaWdodGJveCBmcm9tICdmc2xpZ2h0Ym94LXJlYWN0JztcclxuXHJcbmltcG9ydCBQbGF5Q2lyY2xlRmlsbGVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BsYXlDaXJjbGVGaWxsZWQnO1xyXG5pbXBvcnQgTG9jYWxPZmZlckljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NhbE9mZmVyJztcclxuaW1wb3J0IERhdGVSYW5nZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXRlUmFuZ2UnO1xyXG5pbXBvcnQgQXR0YWNoTW9uZXlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXR0YWNoTW9uZXknO1xyXG5pbXBvcnQgUXVlcnlCdWlsZGVySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1F1ZXJ5QnVpbGRlcic7XHJcbmNvbnN0IGltYWdlX2Jhc2VfdXJsID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dEZXRhaWwoeyBzaG93RGF0YSB9KSB7XHJcbiAgY29uc3QgW3Nob3dUcmFpbGVyLCBzZXRUcmFpbGVyVG9nZ2xlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCBkaXJlY3RvcnMgPSBbXTtcclxuICBsZXQgd3JpdGVycyA9IFtdO1xyXG4gIHNob3dEYXRhLmNyZWRpdHMuY3Jldy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xyXG4gICAgc3dpdGNoIChlbnRyeS5qb2IpIHtcclxuICAgICAgY2FzZSAnRGlyZWN0b3InOlxyXG4gICAgICAgIGRpcmVjdG9ycy5wdXNoKGVudHJ5Lm5hbWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdTY3JlZW5wbGF5JzpcclxuICAgICAgICB3cml0ZXJzLnB1c2goZW50cnkubmFtZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1N0b3J5JzpcclxuICAgICAgICB3cml0ZXJzLnB1c2goZW50cnkubmFtZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbGV0IGdlbnJlQ2hpcHMgPSBbXTtcclxuICBzaG93RGF0YS5nZW5yZXMuZm9yRWFjaCgoZ2VucmUpID0+XHJcbiAgICBnZW5yZUNoaXBzLnB1c2goXHJcbiAgICAgIDxDaGlwXHJcbiAgICAgICAga2V5PXtnZW5yZS5pZH1cclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogNSB9fVxyXG4gICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgIGNvbG9yPSdkZWZhdWx0J1xyXG4gICAgICAgIGNsaWNrYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgbGFiZWw9e2Ake2dlbnJlLm5hbWV9YH1cclxuICAgICAgLz5cclxuICAgIClcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGRpc3BsYXk9J2ZsZXgnXHJcbiAgICAgICAgZmxleERpcmVjdGlvbj0ncm93J1xyXG4gICAgICAgIGZsZXhXcmFwPSd3cmFwJ1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PSdzcGFjZS1ldmVubHknXHJcbiAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiAtMTUsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9J2ltZydcclxuICAgICAgICAgIHNyYz17aW1hZ2VfYmFzZV91cmwgKyBzaG93RGF0YS5wb3N0ZXJfcGF0aH1cclxuICAgICAgICAgIGFsdD17c2hvd0RhdGEudGl0bGV9XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBvYmplY3RGaXQ6ICdjb250YWluJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiB7IHhzOiAyNDAsIG1kOiAyODAsIGxnOiAzMDAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9J2JyZWFkY3J1bWInPlxyXG4gICAgICAgICAgICA8TGluayB0bz0nLyc+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9J3RleHQuc2Vjb25kYXJ5JyB2YXJpYW50PSdjYXB0aW9uJz5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgdG89e3Nob3dEYXRhLnJlbGVhc2VfZGF0ZSA/ICcvbW92aWVzJyA6ICcvdHYnfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj0ndGV4dC5zZWNvbmRhcnknIHZhcmlhbnQ9J2NhcHRpb24nPlxyXG4gICAgICAgICAgICAgICAge3Nob3dEYXRhLnJlbGVhc2VfZGF0ZSA/ICdNb3ZpZXMnIDogJ1R2IFNlcmllcyd9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPSd0ZXh0LnNlY29uZGFyeScgdmFyaWFudD0nY2FwdGlvbic+XHJcbiAgICAgICAgICAgICAge3Nob3dEYXRhPy50aXRsZSB8fCBzaG93RGF0YT8ubmFtZSB8fCBzaG93RGF0YT8ub3JpZ2luYWxfbmFtZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9CcmVhZGNydW1icz5cclxuXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9J2gxJ1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgc3g9e3sgbXQ6IDIsIGZvbnRTaXplOiAyMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2hvd0RhdGE/LnRpdGxlIHx8IHNob3dEYXRhPy5uYW1lIHx8IHNob3dEYXRhPy5vcmlnaW5hbF9uYW1lfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgIDxCb3ggZGlzcGxheT0nZmxleCcgZmxleERpcmVjdGlvbj0ncm93JyBweT17MX0+XHJcbiAgICAgICAgICAgIDxSYXRpbmdcclxuICAgICAgICAgICAgICBuYW1lPSdyZWFkLW9ubHknXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Nob3dEYXRhLnZvdGVfYXZlcmFnZSAvIDJ9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyM4MzgzODMnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAuMyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDEsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nIGNvbG9yPSdwcmltYXJ5JyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICAgICAge3Nob3dEYXRhLnZvdGVfYXZlcmFnZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGRpc3BsYXk9J2ZsZXgnXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249J3JvdydcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcbiAgICAgICAgICAgIGZsZXhXcmFwPSd3cmFwJ1xyXG4gICAgICAgICAgICBwYWRkaW5nWT17MX1cclxuICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXhEaXJlY3Rpb249J3JvdycgcGFkZGluZ1k9ezF9PlxyXG4gICAgICAgICAgICAgIDxEYXRlUmFuZ2VJY29uIGNvbG9yPSdwcmltYXJ5JyBmb250U2l6ZT0nc21hbGwnIC8+XHJcbiAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgY29tcG9uZW50PSdwJz5cclxuICAgICAgICAgICAgICAgIHtzaG93RGF0YS5yZWxlYXNlX2RhdGVcclxuICAgICAgICAgICAgICAgICAgPyBzaG93RGF0YS5yZWxlYXNlX2RhdGVcclxuICAgICAgICAgICAgICAgICAgOiBzaG93RGF0YS5maXJzdF9haXJfZGF0ZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAge3Nob3dEYXRhLnJldmVudWUgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8QXR0YWNoTW9uZXlJY29uIGZvbnRTaXplPSdzbWFsbCcgY29sb3I9J3ByaW1hcnknIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nIGNvbXBvbmVudD0ncCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dEYXRhLnJldmVudWVcclxuICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAge3Nob3dEYXRhLnJ1bnRpbWUgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8UXVlcnlCdWlsZGVySWNvbiBmb250U2l6ZT0nc21hbGwnIGNvbG9yPSdwcmltYXJ5JyAvPlxyXG4gICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdjYXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgICAgICAgICAgPntgJHtzaG93RGF0YS5ydW50aW1lfSBNSU5gfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4RGlyZWN0aW9uPSdyb3cnIHBhZGRpbmdZPXsxfT5cclxuICAgICAgICAgICAgICA8TG9jYWxPZmZlckljb24gZm9udFNpemU9J3NtYWxsJyBjb2xvcj0ncHJpbWFyeScgLz5cclxuICAgICAgICAgICAgICB7Z2VucmVDaGlwc31cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHtzaG93RGF0YS5yZWxlYXNlX2RhdGUgPyAoXHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBkaXNwbGF5PSdmbGV4J1xyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249J3JvdydcclxuICAgICAgICAgICAgICBmbGV4V3JhcD0nd3JhcCdcclxuICAgICAgICAgICAgICBwYWRkaW5nWT17MX1cclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Qm94IG1hcmdpblJpZ2h0PXszfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPSdwcmltYXJ5JyB2YXJpYW50PSdjYXB0aW9uJyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICAgICAgICBEaXJlY3RvcjpcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0ncCc+e2RpcmVjdG9ycy5qb2luKCcsICcpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICB7d3JpdGVycy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPSdwcmltYXJ5JyB2YXJpYW50PSdjYXB0aW9uJyBjb21wb25lbnQ9J3AnPlxyXG4gICAgICAgICAgICAgICAgICAgIFdyaXRlcjpcclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J3AnPnt3cml0ZXJzLmpvaW4oJywgJyl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxCb3ggZGlzcGxheT0nZmxleCcgZmxleERpcmVjdGlvbj0ncm93JyBwYWRkaW5nWT17MX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0ncCcgdmFyaWFudD0nYm9keTInPlxyXG4gICAgICAgICAgICAgIHtzaG93RGF0YS5vdmVydmlld31cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBkaXNwbGF5PSdmbGV4J1xyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAgICAgIGZsZXhXcmFwPSd3cmFwJ1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A9ezF9XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17MX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICBzdGFydEljb249ezxQbGF5Q2lyY2xlRmlsbGVkSWNvbiAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzaG93RGF0YS5yZWxlYXNlX2RhdGUgPyAnV2F0Y2ggTW92aWUnIDogJ1dhdGNoIEVwaXNvZGVzJ31cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICB7c2hvd0RhdGEudmlkZW9zLnJlc3VsdHMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VHJhaWxlclRvZ2dsZXIoIXNob3dUcmFpbGVyKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBUcmFpbGVyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICB7c2hvd0RhdGEudmlkZW9zLnJlc3VsdHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPEZzTGlnaHRib3hcclxuICAgICAgICAgICAgICAgIHRvZ2dsZXI9e3Nob3dUcmFpbGVyfVxyXG4gICAgICAgICAgICAgICAgc291cmNlcz17W1xyXG4gICAgICAgICAgICAgICAgICBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke3Nob3dEYXRhLnZpZGVvcy5yZXN1bHRzWzBdLmtleX1gLFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J3lvdXR1YmUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgdXNlRmV0Y2hlciwgcmVkaXJlY3QsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyBnZXRBbGxUdiB9IGZyb20gJy4uLy4uL3NyYy91dGlscy9mZXRjaGVyJztcclxuaW1wb3J0IHR2R2VucmVzIGZyb20gJy4uLy4uL3NyYy9zaGFyZWQvdHZHZW5yZXMnO1xyXG5pbXBvcnQgTW92aWVEZXRhaWxEcmF3ZXIgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvTW92aWVEZXRhaWxEcmF3ZXInO1xyXG5pbXBvcnQgTW92aWVzR3JpZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Nb3ZpZXNHcmlkJztcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBDaGlwLCBQYWdpbmF0aW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCBnZW5yZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdnZW5yZScpO1xyXG4gIGlmICghZ2VucmUpIHtcclxuICAgIGdlbnJlID0gJ3RyZW5kaW5nJztcclxuICB9XHJcbiAgbGV0IHBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncGFnZScpO1xyXG4gIGlmICghcGFnZSkge1xyXG4gICAgcGFnZSA9IDE7XHJcbiAgfVxyXG4gIC8vIGluY2FzZSB0aGUgZ2VucmUgcGFyYW1ldGVyIGlzIG5vdCBpbiB0aGUgZ2VucmUgbGlzdFxyXG4gIGlmICghT2JqZWN0LmtleXModHZHZW5yZXMpLmluY2x1ZGVzKGdlbnJlKSB8fCBwYWdlID4gMTAwMCkge1xyXG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKCdOb3QgRm91bmQnLCB7IHN0YXR1czogNDA0IH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdHZzRGF0YSA9IGF3YWl0IGdldEFsbFR2KGdlbnJlLCBwYWdlKTtcclxuICBpZiAoIXR2c0RhdGEpIHtcclxuICAgIC8vIHdlIGtub3cgd2UgY2FuJ3QgcmVuZGVyIHRoZSBjb21wb25lbnRcclxuICAgIC8vIHNvIHRocm93IGltbWVkaWF0ZWx5IHRvIHN0b3AgZXhlY3V0aW5nIGNvZGVcclxuICAgIC8vIGFuZCBzaG93IHRoZSBub3QgZm91bmQgcGFnZVxyXG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKCdOb3QgRm91bmQnLCB7IHN0YXR1czogNDA0IH0pO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdHZzRGF0YSxcclxuICAgIHBhZ2U6IHBhcnNlSW50KHBhZ2UpLFxyXG4gICAgZ2VucmUsXHJcbiAgICBhbGxHZW5yZXM6IE9iamVjdC5rZXlzKHR2R2VucmVzKSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI21ldGFcclxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlOiAnVFYgU2VyaWVzIHwgTU9WSVgnLFxyXG4gICAgZGVzY3JpcHRpb246ICdXZWxjb21lIHRvIE1vdml4LCBBIFJlbWl4IE1vdmllIEFwcCEnLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUVigpIHtcclxuICBjb25zdCB7IHR2c0RhdGEsIHBhZ2UsIGdlbnJlLCBhbGxHZW5yZXMgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgY29uc3QgW3Nob3dJbmZvLCBzZXRTaG93SW5mb10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vdmllSW5mb0RhdGEsIHNldE1vdmllSW5mb0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93SW5mbyA9IChtb3ZpZURhdGEpID0+IHtcclxuICAgIHNldE1vdmllSW5mb0RhdGEobW92aWVEYXRhKTtcclxuICAgIHNldFNob3dJbmZvKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGVDbG9zZUluZm8gPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93SW5mbyhmYWxzZSk7XHJcbiAgICBzZXRNb3ZpZUluZm9EYXRhKG51bGwpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlR2VucmVDaGFuZ2UgPSAoc2VsZWN0ZWRHZW5yZSkgPT4ge1xyXG4gICAgbmF2aWdhdGUoYC90dj9nZW5yZT0ke3NlbGVjdGVkR2VucmV9JnBhZ2U9JHtwYWdlfWApO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcclxuICAgIG5hdmlnYXRlKGAvdHY/Z2VucmU9JHtnZW5yZX0mcGFnZT0ke3ZhbHVlfWApO1xyXG4gIH07XHJcbiAgY29uc3QgZ2VucmVDaGlwcyA9IGFsbEdlbnJlcy5tYXAoKHRpdGxlKSA9PiAoXHJcbiAgICA8Q2hpcFxyXG4gICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDUsIG1hcmdpblJpZ2h0OiAzIH19XHJcbiAgICAgIGtleT17dGl0bGV9XHJcbiAgICAgIGxhYmVsPXt0aXRsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRpdGxlLnNsaWNlKDEpLnJlcGxhY2UoJ18nLCAnICcpfVxyXG4gICAgICBjb2xvcj17dGl0bGUgPT0gZ2VucmUgPyAncHJpbWFyeScgOiAnZGVmYXVsdCd9XHJcbiAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHZW5yZUNoYW5nZSh0aXRsZSl9XHJcbiAgICAvPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxCb3ggcGFkZGluZ1k9ezN9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD0naDYnXHJcbiAgICAgICAgICAgIHN4PXt7IG1iOiAyLCB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEV4cGxvcmUgVFYgU2VyaWVzXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXhXcmFwPSd3cmFwJz5cclxuICAgICAgICAgICAge2dlbnJlQ2hpcHN9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8TW92aWVzR3JpZCBtb3ZpZXM9e3R2c0RhdGF9IHNob3dNb3ZpZUluZm9EcmF3ZXI9e2hhbmRsZVNob3dJbmZvfSAvPlxyXG4gICAgICAgIDxCb3ggZGlzcGxheT0nZmxleCcgcGFkZGluZ1k9ezV9IGp1c3RpZnlDb250ZW50PSdjZW50ZXInPlxyXG4gICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgY291bnQ9ezEwMDB9XHJcbiAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICBzaGFwZT0ncm91bmRlZCdcclxuICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb3ZpZURldGFpbERyYXdlclxyXG4gICAgICAgIG1vdmllRGF0YT17bW92aWVJbmZvRGF0YX1cclxuICAgICAgICBzaG93PXtzaG93SW5mb31cclxuICAgICAgICBoYW5kZUNsb3NlSW5mbz17aGFuZGVDbG9zZUluZm99XHJcbiAgICAgIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHsgZ2V0U2luZ2xlVHYgfSBmcm9tICcuLi8uLi9zcmMvdXRpbHMvZmV0Y2hlcic7XHJcbmltcG9ydCBIZXJvSW1hZ2UgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVyb0ltYWdlJztcclxuaW1wb3J0IE1vdmllc1JvdyBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Nb3ZpZXNSb3cnO1xyXG5pbXBvcnQgQWN0b3JzUm93IGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdG9yc1Jvdyc7XHJcbmltcG9ydCBTaG93RGV0YWlsIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1Nob3dEZXRhaWwnO1xyXG5pbXBvcnQgTW92aWVEZXRhaWxEcmF3ZXIgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvTW92aWVEZXRhaWxEcmF3ZXInO1xyXG5pbXBvcnQgU2Vhc29uc0RldGFpbCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9TZWFzb25zRGV0YWlsJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHR2X2lkID0gcGFyc2VJbnQocGFyYW1zLmlkKTtcclxuICBpZiAoIU51bWJlci5pc0ludGVnZXIodHZfaWQpKSB7XHJcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoJ05vdCBGb3VuZCcsIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBnZXRTaW5nbGVUdih0dl9pZCk7XHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoJ05vdCBGb3VuZCcsIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHZQYWdlKCkge1xyXG4gIGNvbnN0IHsgdHZEYXRhLCBzZWFzb25zIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3Nob3dJbmZvLCBzZXRTaG93SW5mb10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vdmllSW5mb0RhdGEsIHNldE1vdmllSW5mb0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dJbmZvID0gKHNlbGVjdGVkTW92aWVEYXRhKSA9PiB7XHJcbiAgICBzZXRNb3ZpZUluZm9EYXRhKHNlbGVjdGVkTW92aWVEYXRhKTtcclxuICAgIHNldFNob3dJbmZvKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGVDbG9zZUluZm8gPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93SW5mbyhmYWxzZSk7XHJcbiAgICBzZXRNb3ZpZUluZm9EYXRhKG51bGwpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhlcm9JbWFnZSBpbWFnZT17dHZEYXRhLmJhY2tkcm9wX3BhdGh9IC8+XHJcbiAgICAgIDxTaG93RGV0YWlsIHNob3dEYXRhPXt0dkRhdGF9IC8+XHJcbiAgICAgIDxBY3RvcnNSb3cgYWN0b3JzRGF0YT17dHZEYXRhLmNyZWRpdHMuY2FzdC5zbGljZSgwLCAzMCl9IC8+XHJcbiAgICAgIHtzZWFzb25zLmxlbmd0aCA+IDAgJiYgPFNlYXNvbnNEZXRhaWwgc2Vhc29uRGF0YT17c2Vhc29uc30gLz59XHJcbiAgICAgIHt0dkRhdGE/LnNpbWlsYXI/LnJlc3VsdHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPE1vdmllc1Jvd1xyXG4gICAgICAgICAgdGl0bGU9J1JlbGF0ZWQgU2hvd3MnXHJcbiAgICAgICAgICBtb3ZpZXNEYXRhPXt0dkRhdGEuc2ltaWxhci5yZXN1bHRzfVxyXG4gICAgICAgICAgc2hvd01vdmllSW5mb0RyYXdlcj17aGFuZGxlU2hvd0luZm99XHJcbiAgICAgICAgICBzaW1pbGFyPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxNb3ZpZURldGFpbERyYXdlclxyXG4gICAgICAgIG1vdmllRGF0YT17bW92aWVJbmZvRGF0YX1cclxuICAgICAgICBzaG93PXtzaG93SW5mb31cclxuICAgICAgICBoYW5kZUNsb3NlSW5mbz17aGFuZGVDbG9zZUluZm99XHJcbiAgICAgIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEFjY29yZGlvbixcclxuICBBY2NvcmRpb25TdW1tYXJ5LFxyXG4gIEFjY29yZGlvbkRldGFpbHMsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFzb25zRGV0YWlsKHsgc2Vhc29uRGF0YSB9KSB7XHJcbiAgY29uc3Qgc2Vhc29uc0Fjb2NvcmRpb24gPSBzZWFzb25EYXRhLm1hcCgoc2Vhc29uLCBpKSA9PiAoXHJcbiAgICA8QWNjb3JkaW9uIGtleT17c2Vhc29uLl9pZH0+XHJcbiAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxyXG4gICAgICAgIGFyaWEtY29udHJvbHM9e2BwYW5lbCR7aSArIDF9YS1jb250ZW50YH1cclxuICAgICAgICBpZD17YHBhbmVsJHtpICsgMX1hLWhlYWRlcmB9XHJcbiAgICAgID5cclxuICAgICAgICA8VHlwb2dyYXBoeT57c2Vhc29uLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAge3NlYXNvbi5lcGlzb2Rlcy5tYXAoKGVwaXNvZGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtlcGlzb2RlLmlkfT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17YCR7ZXBpc29kZS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17YEVwZXNvZGU6ICR7ZXBpc29kZS5lcGlzb2RlX251bWJlcn0sIEFpciBEYXRlOiAke2VwaXNvZGUuYWlyX2RhdGV9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgPC9BY2NvcmRpb24+XHJcbiAgKSk7XHJcblxyXG4gIGlmICghc2Vhc29uc0Fjb2NvcmRpb24pIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBweT17NH0gbWI9ezR9IHdpZHRoPScxMDAlJz5cclxuICAgICAgPEJveCBweT17Mn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9J3ByaW1hcnknIHZhcmlhbnQ9J2J1dHRvbicgc3g9e3sgZm9udFNpemU6IDE4IH19PlxyXG4gICAgICAgICAgU2Vhc29uIERldGFpbFxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIHtzZWFzb25zQWNvY29yZGlvbn1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHsgZ2V0QWxsRGF0YSB9IGZyb20gJy4uL3NyYy91dGlscy9mZXRjaGVyJztcclxuaW1wb3J0IE1vdmllc1NsaWRlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Nb3ZpZXNTbGlkZXInO1xyXG5pbXBvcnQgTW92aWVzUm93IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01vdmllc1Jvdyc7XHJcbmltcG9ydCBNb3ZpZURldGFpbERyYXdlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Nb3ZpZURldGFpbERyYXdlcic7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiBnZXRBbGxEYXRhKCk7XHJcbn07XHJcblxyXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbWV0YVxyXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6ICdIb21lIHwgTU9WSVgnLFxyXG4gICAgZGVzY3JpcHRpb246ICdXZWxjb21lIHRvIE1vdml4LCBBIFJlbWl4IE1vdmllIEFwcCEnLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyBodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvcm91dGluZyNpbmRleC1yb3V0ZXNcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2hvd0luZm8sIHNldFNob3dJbmZvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW92aWVJbmZvRGF0YSwgc2V0TW92aWVJbmZvRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBoYW5kbGVTaG93SW5mbyA9IChtb3ZpZURhdGEpID0+IHtcclxuICAgIHNldE1vdmllSW5mb0RhdGEobW92aWVEYXRhKTtcclxuICAgIHNldFNob3dJbmZvKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGVDbG9zZUluZm8gPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93SW5mbyhmYWxzZSk7XHJcbiAgICBzZXRNb3ZpZUluZm9EYXRhKG51bGwpO1xyXG4gIH07XHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4gPGgyPkxvYWRpbmcuLi48L2gyPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPE1vdmllc1NsaWRlciBtb3ZpZXNEYXRhPXtkYXRhWydUcmVuZGluZyddfSAvPlxyXG4gICAgICA8TW92aWVzUm93XHJcbiAgICAgICAgdGl0bGU9J0Zyb20gTmV0ZmxpeCdcclxuICAgICAgICBtb3ZpZXNEYXRhPXtkYXRhLlR2c05ldGZsaXh9XHJcbiAgICAgICAgdHlwZT0nbmV0ZmxpeCdcclxuICAgICAgICBzaG93TW92aWVJbmZvRHJhd2VyPXtoYW5kbGVTaG93SW5mb31cclxuICAgICAgLz5cclxuICAgICAgPE1vdmllc1Jvd1xyXG4gICAgICAgIHRpdGxlPSdBY3Rpb24gTW92aWVzJ1xyXG4gICAgICAgIG1vdmllc0RhdGE9e2RhdGEuQWN0aW9ufVxyXG4gICAgICAgIGdlbnJlPSdtb3ZpZXMnXHJcbiAgICAgICAgdHlwZT0nbW92aWVzJ1xyXG4gICAgICAgIHNob3dNb3ZpZUluZm9EcmF3ZXI9e2hhbmRsZVNob3dJbmZvfVxyXG4gICAgICAvPlxyXG4gICAgICA8TW92aWVzUm93XHJcbiAgICAgICAgdGl0bGU9J0FkdmVudHVyZSBNb3ZpZXMnXHJcbiAgICAgICAgbW92aWVzRGF0YT17ZGF0YS5BZHZlbnR1cmV9XHJcbiAgICAgICAgZ2VucmU9J2FkdmVudHVyZSdcclxuICAgICAgICB0eXBlPSdtb3ZpZXMnXHJcbiAgICAgICAgc2hvd01vdmllSW5mb0RyYXdlcj17aGFuZGxlU2hvd0luZm99XHJcbiAgICAgIC8+XHJcbiAgICAgIDxNb3ZpZXNSb3dcclxuICAgICAgICB0aXRsZT0nU2NpZW5jZSBGaWN0aW9uIE1vdmllcydcclxuICAgICAgICBtb3ZpZXNEYXRhPXtkYXRhLlNjaWVuY2VGaWN0aW9ufVxyXG4gICAgICAgIGdlbnJlPSdzY2llbmNlX2ZpY3Rpb24nXHJcbiAgICAgICAgdHlwZT0nbW92aWVzJ1xyXG4gICAgICAgIHNob3dNb3ZpZUluZm9EcmF3ZXI9e2hhbmRsZVNob3dJbmZvfVxyXG4gICAgICAvPlxyXG4gICAgICA8TW92aWVzUm93XHJcbiAgICAgICAgdGl0bGU9J0NvbWVkeSBNb3ZpZXMnXHJcbiAgICAgICAgbW92aWVzRGF0YT17ZGF0YS5Db21lZHl9XHJcbiAgICAgICAgZ2VucmU9J2NvbWVkeSdcclxuICAgICAgICB0eXBlPSdtb3ZpZXMnXHJcbiAgICAgICAgc2hvd01vdmllSW5mb0RyYXdlcj17aGFuZGxlU2hvd0luZm99XHJcbiAgICAgIC8+XHJcbiAgICAgIDxNb3ZpZXNSb3dcclxuICAgICAgICB0aXRsZT0nRmFudGFzeSBNb3ZpZXMnXHJcbiAgICAgICAgbW92aWVzRGF0YT17ZGF0YS5GYW50YXN5fVxyXG4gICAgICAgIGdlbnJlPSdmYW50YXN5J1xyXG4gICAgICAgIHR5cGU9J21vdmllcydcclxuICAgICAgICBzaG93TW92aWVJbmZvRHJhd2VyPXtoYW5kbGVTaG93SW5mb31cclxuICAgICAgLz5cclxuICAgICAgPE1vdmllc1Jvd1xyXG4gICAgICAgIHRpdGxlPSdIb3Jyb3IgTW92aWVzJ1xyXG4gICAgICAgIG1vdmllc0RhdGE9e2RhdGEuRmFudGFzeX1cclxuICAgICAgICBnZW5yZT0naG9ycm9yJ1xyXG4gICAgICAgIHR5cGU9J21vdmllcydcclxuICAgICAgICBzaG93TW92aWVJbmZvRHJhd2VyPXtoYW5kbGVTaG93SW5mb31cclxuICAgICAgLz5cclxuICAgICAgPE1vdmllc1Jvd1xyXG4gICAgICAgIHRpdGxlPSdUaHJpbGxlciBNb3ZpZXMnXHJcbiAgICAgICAgbW92aWVzRGF0YT17ZGF0YS5UaHJpbGxlcn1cclxuICAgICAgICBnZW5yZT0ndGhyaWxsZXInXHJcbiAgICAgICAgdHlwZT0nbW92aWVzJ1xyXG4gICAgICAgIHNob3dNb3ZpZUluZm9EcmF3ZXI9e2hhbmRsZVNob3dJbmZvfVxyXG4gICAgICAvPlxyXG4gICAgICA8TW92aWVzUm93XHJcbiAgICAgICAgdGl0bGU9J0FuaW1hdGlvbiBNb3ZpZXMnXHJcbiAgICAgICAgbW92aWVzRGF0YT17ZGF0YS5BbmltYXRpb259XHJcbiAgICAgICAgZ2VucmU9J2FuaW1hdGlvbidcclxuICAgICAgICB0eXBlPSdtb3ZpZXMnXHJcbiAgICAgICAgc2hvd01vdmllSW5mb0RyYXdlcj17aGFuZGxlU2hvd0luZm99XHJcbiAgICAgIC8+XHJcbiAgICAgIDxNb3ZpZXNSb3dcclxuICAgICAgICB0aXRsZT0nRmFtaWx5IE1vdmllcydcclxuICAgICAgICBtb3ZpZXNEYXRhPXtkYXRhLkZhbWlseX1cclxuICAgICAgICBnZW5yZT0nZmFtaWx5J1xyXG4gICAgICAgIHR5cGU9J21vdmllcydcclxuICAgICAgICBzaG93TW92aWVJbmZvRHJhd2VyPXtoYW5kbGVTaG93SW5mb31cclxuICAgICAgLz5cclxuICAgICAgPE1vdmllRGV0YWlsRHJhd2VyXHJcbiAgICAgICAgbW92aWVEYXRhPXttb3ZpZUluZm9EYXRhfVxyXG4gICAgICAgIHNob3c9e3Nob3dJbmZvfVxyXG4gICAgICAgIGhhbmRlQ2xvc2VJbmZvPXtoYW5kZUNsb3NlSW5mb31cclxuICAgICAgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0IFN3aXBlciBjb3JlIGFuZCByZXF1aXJlZCBjb21wb25lbnRzXHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgQnV0dG9uLCBMaW5lYXJQcm9ncmVzcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5cclxuLy8gaW1wb3J0IFN3aXBlciBjb3JlIGFuZCByZXF1aXJlZCBjb21wb25lbnRzXHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IFBhZ2luYXRpb24sIEVmZmVjdEN1YmUsIEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XHJcblxyXG4vLyAvLyBpbnN0YWxsIFN3aXBlciBjb21wb25lbnRzXHJcblN3aXBlckNvcmUudXNlKFtQYWdpbmF0aW9uLCBFZmZlY3RDdWJlLCBBdXRvcGxheV0pO1xyXG5cclxuY29uc3QgaW1hZ2VfYmFzZV91cmwgPSAnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzU2xpZGVyKHsgbW92aWVzRGF0YSB9KSB7XHJcbiAgZnVuY3Rpb24gdHJ1bmNhdGUoc3RyLCBuKSB7XHJcbiAgICByZXR1cm4gc3RyPy5sZW5ndGggPiBuID8gc3RyLnN1YnN0cigwLCBuIC0gMSkgKyAnLi4uJyA6IHN0cjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNsaWRlckl0ZW1zID0gbW92aWVzRGF0YVxyXG4gICAgPyBtb3ZpZXNEYXRhLm1hcCgobW92aWUpID0+IChcclxuICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXttb3ZpZS5pZH0+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY29udGFpbicsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiB7IHhzOiA0MjAsIG1kOiA0NTAsIGxnOiA0ODAgfSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZV9iYXNlX3VybH0ke21vdmllLmJhY2tkcm9wX3BhdGh9KWAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHRyYW5zcGFyZW50LHJnYmEoMzcsMzcsMzcsMC42MSksIzExMSknLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICBwOiAyLFxyXG4gICAgICAgICAgICAgICAgICBwcjogNCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IHsgeHM6IDI0LCBtZDogMzggfSB9fSB2YXJpYW50PSdoMic+XHJcbiAgICAgICAgICAgICAgICAgIHttb3ZpZT8udGl0bGUgfHwgbW92aWU/Lm5hbWUgfHwgbW92aWU/Lm9yaWdpbmFsX25hbX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiB7IHhzOiAxNCwgbWQ6IDE4IH0gfX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nc3VidGl0bGUxJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dHJ1bmNhdGUobW92aWUub3ZlcnZpZXcsIDE1MCl9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9J2ZsZXgnXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PSdmbGV4LWVuZCdcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9J2Z1bGwnXHJcbiAgICAgICAgICAgICAgICAgIG15PXsyfVxyXG4gICAgICAgICAgICAgICAgICBtcj17NH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICB0bz17YC8ke21vdmllLmZpcnN0X2Fpcl9kYXRlID8gJ3R2JyA6ICdtb3ZpZXMnfS8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgbW92aWUuaWRcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdwcmltYXJ5JyBzaXplPSdtZWRpdW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgV2F0Y2ggVGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICApKVxyXG4gICAgOiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPFN3aXBlclxyXG4gICAgICAgIHNwYWNlQmV0d2Vlbj17NX1cclxuICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG4gICAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcbiAgICAgICAgYXV0b3BsYXk9e3sgZGVsYXk6IDUwMDAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzbGlkZXJJdGVtc31cclxuICAgICAgPC9Td2lwZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1B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
