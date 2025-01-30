import {
  $ as R,
  $a as Nt,
  A as sn,
  Aa as Me,
  Ab as bn,
  B as cn,
  Ba as io,
  Bb as bo,
  C as wt,
  Ca as mi,
  Cb as vo,
  D as Hr,
  Da as no,
  Db as O,
  E as $r,
  Ea as ro,
  Eb as _i,
  F as ai,
  Fa as bt,
  Fb as _o,
  G as Ot,
  Ga as oo,
  Gb as yo,
  H as dn,
  Ha as Ee,
  Hb as yi,
  I as Gr,
  Ia as It,
  Ib as St,
  J as Wr,
  Ja as ao,
  Jb as xo,
  K as qr,
  Ka as so,
  Kb as wo,
  L as si,
  La as V,
  Lb as vn,
  M as ci,
  Ma as co,
  Mb as Co,
  N as gt,
  Na as q,
  O as mt,
  Oa as L,
  P as W,
  Pa as hi,
  Pb as Io,
  Q as T,
  Qa as j,
  Qb as Mo,
  R as ln,
  Ra as pi,
  S as g,
  Sa as X,
  Sb as _n,
  T as S,
  Ta as y,
  Tb as Eo,
  U as Zr,
  Ua as x,
  Ub as Do,
  V as v,
  Va as U,
  W as un,
  Wa as fi,
  X as f,
  Xa as lo,
  Y as m,
  Ya as De,
  Z as xe,
  Za as J,
  _ as et,
  _a as nt,
  a as u,
  aa as N,
  ab as $,
  b as D,
  ba as we,
  bb as Ht,
  ca as Yr,
  cb as at,
  d as be,
  da as di,
  db as z,
  e as jr,
  ea as Ct,
  eb as B,
  f as ri,
  fa as zt,
  fb as uo,
  g as nn,
  ga as Kr,
  gb as mo,
  h as rn,
  ha as Qr,
  hb as Ae,
  i as F,
  ia as mn,
  ib as vt,
  j as tt,
  ja as Xr,
  jb as ho,
  k as ft,
  ka as li,
  kb as pn,
  l as ot,
  la as te,
  lb as Mt,
  m as b,
  ma as Jr,
  mb as rt,
  n as ve,
  na as it,
  nb as gi,
  o as on,
  oa as M,
  ob as bi,
  p as Ur,
  pa as hn,
  pb as vi,
  q as I,
  qa as P,
  qb as po,
  r as _e,
  ra as to,
  rb as fn,
  s as dt,
  sa as ui,
  sb as gn,
  t as oi,
  ta as eo,
  tb as fo,
  u as an,
  ua as Bt,
  ub as $t,
  v as zr,
  va as ht,
  vb as go,
  w as Br,
  wa as Ce,
  wb as Et,
  x as xt,
  xa as Ie,
  xb as Se,
  y as Jt,
  ya as C,
  yb as Dt,
  z as ye,
  za as p,
  zb as At,
} from "./chunk-JBHEONLG.js";
var wn = class extends vo {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  Cn = class e extends wn {
    static makeCurrent() {
      bo(new e());
    }
    onAndCancel(i, t, n) {
      return (
        i.addEventListener(t, n),
        () => {
          i.removeEventListener(t, n);
        }
      );
    }
    dispatchEvent(i, t) {
      i.dispatchEvent(t);
    }
    remove(i) {
      i.remove();
    }
    createElement(i, t) {
      return (t = t || this.getDefaultDocument()), t.createElement(i);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(i) {
      return i.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(i) {
      return i instanceof DocumentFragment;
    }
    getGlobalEventTarget(i, t) {
      return t === "window"
        ? window
        : t === "document"
          ? i
          : t === "body"
            ? i.body
            : null;
    }
    getBaseHref(i) {
      let t = Ws();
      return t == null ? null : qs(t);
    }
    resetBaseElement() {
      Re = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(i) {
      return _o(document.cookie, i);
    }
  },
  Re = null;
function Ws() {
  return (
    (Re = Re || document.querySelector("base")),
    Re ? Re.getAttribute("href") : null
  );
}
function qs(e) {
  return new URL(e, document.baseURI).pathname;
}
var Zs = (() => {
    class e {
      build() {
        return new XMLHttpRequest();
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  In = new v(""),
  Ro = (() => {
    class e {
      constructor(t, n) {
        (this._zone = n),
          (this._eventNameToPlugin = new Map()),
          t.forEach((r) => {
            r.manager = this;
          }),
          (this._plugins = t.slice().reverse());
      }
      addEventListener(t, n, r) {
        return this._findPluginFor(n).addEventListener(t, n, r);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(t) {
        let n = this._eventNameToPlugin.get(t);
        if (n) return n;
        if (((n = this._plugins.find((o) => o.supports(t))), !n))
          throw new T(5101, !1);
        return this._eventNameToPlugin.set(t, n), n;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(In), f(M));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  xi = class {
    constructor(i) {
      this._doc = i;
    }
  },
  yn = "ng-app-id",
  ko = (() => {
    class e {
      constructor(t, n, r, o = {}) {
        (this.doc = t),
          (this.appId = n),
          (this.nonce = r),
          (this.platformId = o),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = vn(o)),
          this.resetHostNodes();
      }
      addStyles(t) {
        for (let n of t)
          this.changeUsageCount(n, 1) === 1 && this.onStyleAdded(n);
      }
      removeStyles(t) {
        for (let n of t)
          this.changeUsageCount(n, -1) <= 0 && this.onStyleRemoved(n);
      }
      ngOnDestroy() {
        let t = this.styleNodesInDOM;
        t && (t.forEach((n) => n.remove()), t.clear());
        for (let n of this.getAllStyles()) this.onStyleRemoved(n);
        this.resetHostNodes();
      }
      addHost(t) {
        this.hostNodes.add(t);
        for (let n of this.getAllStyles()) this.addStyleToHost(t, n);
      }
      removeHost(t) {
        this.hostNodes.delete(t);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(t) {
        for (let n of this.hostNodes) this.addStyleToHost(n, t);
      }
      onStyleRemoved(t) {
        let n = this.styleRef;
        n.get(t)?.elements?.forEach((r) => r.remove()), n.delete(t);
      }
      collectServerRenderedStyles() {
        let t = this.doc.head?.querySelectorAll(`style[${yn}="${this.appId}"]`);
        if (t?.length) {
          let n = new Map();
          return (
            t.forEach((r) => {
              r.textContent != null && n.set(r.textContent, r);
            }),
            n
          );
        }
        return null;
      }
      changeUsageCount(t, n) {
        let r = this.styleRef;
        if (r.has(t)) {
          let o = r.get(t);
          return (o.usage += n), o.usage;
        }
        return r.set(t, { usage: n, elements: [] }), n;
      }
      getStyleElement(t, n) {
        let r = this.styleNodesInDOM,
          o = r?.get(n);
        if (o?.parentNode === t) return r.delete(n), o.removeAttribute(yn), o;
        {
          let a = this.doc.createElement("style");
          return (
            this.nonce && a.setAttribute("nonce", this.nonce),
            (a.textContent = n),
            this.platformIsServer && a.setAttribute(yn, this.appId),
            t.appendChild(a),
            a
          );
        }
      }
      addStyleToHost(t, n) {
        let r = this.getStyleElement(t, n),
          o = this.styleRef,
          a = o.get(n)?.elements;
        a ? a.push(r) : o.set(n, { elements: [r], usage: 1 });
      }
      resetHostNodes() {
        let t = this.hostNodes;
        t.clear(), t.add(this.doc.head);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(O), f(ui), f(Ce, 8), f(Bt));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  xn = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  Dn = /%COMP%/g,
  To = "%COMP%",
  Ys = `_nghost-${To}`,
  Ks = `_ngcontent-${To}`,
  Qs = !0,
  Xs = new v("", { providedIn: "root", factory: () => Qs });
function Js(e) {
  return Ks.replace(Dn, e);
}
function tc(e) {
  return Ys.replace(Dn, e);
}
function Fo(e, i) {
  return i.map((t) => t.replace(Dn, e));
}
var wi = (() => {
    class e {
      constructor(t, n, r, o, a, c, s, d = null) {
        (this.eventManager = t),
          (this.sharedStylesHost = n),
          (this.appId = r),
          (this.removeStylesOnCompDestroy = o),
          (this.doc = a),
          (this.platformId = c),
          (this.ngZone = s),
          (this.nonce = d),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = vn(c)),
          (this.defaultRenderer = new ke(t, a, s, this.platformIsServer));
      }
      createRenderer(t, n) {
        if (!t || !n) return this.defaultRenderer;
        this.platformIsServer &&
          n.encapsulation === xe.ShadowDom &&
          (n = D(u({}, n), { encapsulation: xe.Emulated }));
        let r = this.getOrCreateRenderer(t, n);
        return (
          r instanceof Ci
            ? r.applyToHost(t)
            : r instanceof Te && r.applyStyles(),
          r
        );
      }
      getOrCreateRenderer(t, n) {
        let r = this.rendererByCompId,
          o = r.get(n.id);
        if (!o) {
          let a = this.doc,
            c = this.ngZone,
            s = this.eventManager,
            d = this.sharedStylesHost,
            l = this.removeStylesOnCompDestroy,
            h = this.platformIsServer;
          switch (n.encapsulation) {
            case xe.Emulated:
              o = new Ci(s, d, n, this.appId, l, a, c, h);
              break;
            case xe.ShadowDom:
              return new Mn(s, d, t, n, a, c, this.nonce, h);
            default:
              o = new Te(s, d, n, l, a, c, h);
              break;
          }
          r.set(n.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(
            f(Ro),
            f(ko),
            f(ui),
            f(Xs),
            f(O),
            f(Bt),
            f(M),
            f(Ce),
          );
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  ke = class {
    constructor(i, t, n, r) {
      (this.eventManager = i),
        (this.doc = t),
        (this.ngZone = n),
        (this.platformIsServer = r),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(i, t) {
      return t
        ? this.doc.createElementNS(xn[t] || t, i)
        : this.doc.createElement(i);
    }
    createComment(i) {
      return this.doc.createComment(i);
    }
    createText(i) {
      return this.doc.createTextNode(i);
    }
    appendChild(i, t) {
      (Ao(i) ? i.content : i).appendChild(t);
    }
    insertBefore(i, t, n) {
      i && (Ao(i) ? i.content : i).insertBefore(t, n);
    }
    removeChild(i, t) {
      t.remove();
    }
    selectRootElement(i, t) {
      let n = typeof i == "string" ? this.doc.querySelector(i) : i;
      if (!n) throw new T(-5104, !1);
      return t || (n.textContent = ""), n;
    }
    parentNode(i) {
      return i.parentNode;
    }
    nextSibling(i) {
      return i.nextSibling;
    }
    setAttribute(i, t, n, r) {
      if (r) {
        t = r + ":" + t;
        let o = xn[r];
        o ? i.setAttributeNS(o, t, n) : i.setAttribute(t, n);
      } else i.setAttribute(t, n);
    }
    removeAttribute(i, t, n) {
      if (n) {
        let r = xn[n];
        r ? i.removeAttributeNS(r, t) : i.removeAttribute(`${n}:${t}`);
      } else i.removeAttribute(t);
    }
    addClass(i, t) {
      i.classList.add(t);
    }
    removeClass(i, t) {
      i.classList.remove(t);
    }
    setStyle(i, t, n, r) {
      r & (Ie.DashCase | Ie.Important)
        ? i.style.setProperty(t, n, r & Ie.Important ? "important" : "")
        : (i.style[t] = n);
    }
    removeStyle(i, t, n) {
      n & Ie.DashCase ? i.style.removeProperty(t) : (i.style[t] = "");
    }
    setProperty(i, t, n) {
      i != null && (i[t] = n);
    }
    setValue(i, t) {
      i.nodeValue = t;
    }
    listen(i, t, n) {
      if (
        typeof i == "string" &&
        ((i = bn().getGlobalEventTarget(this.doc, i)), !i)
      )
        throw new Error(`Unsupported event target ${i} for event ${t}`);
      return this.eventManager.addEventListener(
        i,
        t,
        this.decoratePreventDefault(n),
      );
    }
    decoratePreventDefault(i) {
      return (t) => {
        if (t === "__ngUnwrap__") return i;
        (this.platformIsServer ? this.ngZone.runGuarded(() => i(t)) : i(t)) ===
          !1 && t.preventDefault();
      };
    }
  };
function Ao(e) {
  return e.tagName === "TEMPLATE" && e.content !== void 0;
}
var Mn = class extends ke {
    constructor(i, t, n, r, o, a, c, s) {
      super(i, o, a, s),
        (this.sharedStylesHost = t),
        (this.hostEl = n),
        (this.shadowRoot = n.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let d = Fo(r.id, r.styles);
      for (let l of d) {
        let h = document.createElement("style");
        c && h.setAttribute("nonce", c),
          (h.textContent = l),
          this.shadowRoot.appendChild(h);
      }
    }
    nodeOrShadowRoot(i) {
      return i === this.hostEl ? this.shadowRoot : i;
    }
    appendChild(i, t) {
      return super.appendChild(this.nodeOrShadowRoot(i), t);
    }
    insertBefore(i, t, n) {
      return super.insertBefore(this.nodeOrShadowRoot(i), t, n);
    }
    removeChild(i, t) {
      return super.removeChild(null, t);
    }
    parentNode(i) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Te = class extends ke {
    constructor(i, t, n, r, o, a, c, s) {
      super(i, o, a, c),
        (this.sharedStylesHost = t),
        (this.removeStylesOnCompDestroy = r),
        (this.styles = s ? Fo(s, n.styles) : n.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  Ci = class extends Te {
    constructor(i, t, n, r, o, a, c, s) {
      let d = r + "-" + n.id;
      super(i, t, n, o, a, c, s, d),
        (this.contentAttr = Js(d)),
        (this.hostAttr = tc(d));
    }
    applyToHost(i) {
      this.applyStyles(), this.setAttribute(i, this.hostAttr, "");
    }
    createElement(i, t) {
      let n = super.createElement(i, t);
      return super.setAttribute(n, this.contentAttr, ""), n;
    }
  },
  ec = (() => {
    class e extends xi {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return !0;
      }
      addEventListener(t, n, r) {
        return (
          t.addEventListener(n, r, !1), () => this.removeEventListener(t, n, r)
        );
      }
      removeEventListener(t, n, r) {
        return t.removeEventListener(n, r);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(O));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  So = ["alt", "control", "meta", "shift"],
  ic = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  nc = {
    alt: (e) => e.altKey,
    control: (e) => e.ctrlKey,
    meta: (e) => e.metaKey,
    shift: (e) => e.shiftKey,
  },
  rc = (() => {
    class e extends xi {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return e.parseEventName(t) != null;
      }
      addEventListener(t, n, r) {
        let o = e.parseEventName(n),
          a = e.eventCallback(o.fullKey, r, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => bn().onAndCancel(t, o.domEventName, a));
      }
      static parseEventName(t) {
        let n = t.toLowerCase().split("."),
          r = n.shift();
        if (n.length === 0 || !(r === "keydown" || r === "keyup")) return null;
        let o = e._normalizeKey(n.pop()),
          a = "",
          c = n.indexOf("code");
        if (
          (c > -1 && (n.splice(c, 1), (a = "code.")),
          So.forEach((d) => {
            let l = n.indexOf(d);
            l > -1 && (n.splice(l, 1), (a += d + "."));
          }),
          (a += o),
          n.length != 0 || o.length === 0)
        )
          return null;
        let s = {};
        return (s.domEventName = r), (s.fullKey = a), s;
      }
      static matchEventFullKeyCode(t, n) {
        let r = ic[t.key] || t.key,
          o = "";
        return (
          n.indexOf("code.") > -1 && ((r = t.code), (o = "code.")),
          r == null || !r
            ? !1
            : ((r = r.toLowerCase()),
              r === " " ? (r = "space") : r === "." && (r = "dot"),
              So.forEach((a) => {
                if (a !== r) {
                  let c = nc[a];
                  c(t) && (o += a + ".");
                }
              }),
              (o += r),
              o === n)
        );
      }
      static eventCallback(t, n, r) {
        return (o) => {
          e.matchEventFullKeyCode(o, t) && r.runGuarded(() => n(o));
        };
      }
      static _normalizeKey(t) {
        return t === "esc" ? "escape" : t;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(O));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })();
function Oo(e, i) {
  return go(u({ rootComponent: e }, oc(i)));
}
function oc(e) {
  return {
    appProviders: [...lc, ...(e?.providers ?? [])],
    platformProviders: dc,
  };
}
function ac() {
  Cn.makeCurrent();
}
function sc() {
  return new hn();
}
function cc() {
  return to(document), document;
}
var dc = [
  { provide: Bt, useValue: xo },
  { provide: eo, useValue: ac, multi: !0 },
  { provide: O, useFactory: cc, deps: [] },
];
var lc = [
  { provide: Yr, useValue: "root" },
  { provide: hn, useFactory: sc, deps: [] },
  { provide: In, useClass: ec, multi: !0, deps: [O, M, Bt] },
  { provide: In, useClass: rc, multi: !0, deps: [O] },
  wi,
  ko,
  Ro,
  { provide: mi, useExisting: wi },
  { provide: Co, useClass: Zs, deps: [] },
  [],
];
var No = (() => {
  class e {
    constructor(t) {
      this._doc = t;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(t) {
      this._doc.title = t || "";
    }
    static {
      this.ɵfac = function (n) {
        return new (n || e)(f(O));
      };
    }
    static {
      this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var _ = "primary",
  Ye = Symbol("RouteTitle"),
  Tn = class {
    constructor(i) {
      this.params = i || {};
    }
    has(i) {
      return Object.prototype.hasOwnProperty.call(this.params, i);
    }
    get(i) {
      if (this.has(i)) {
        let t = this.params[i];
        return Array.isArray(t) ? t[0] : t;
      }
      return null;
    }
    getAll(i) {
      if (this.has(i)) {
        let t = this.params[i];
        return Array.isArray(t) ? t : [t];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function ae(e) {
  return new Tn(e);
}
function fc(e, i, t) {
  let n = t.path.split("/");
  if (
    n.length > e.length ||
    (t.pathMatch === "full" && (i.hasChildren() || n.length < e.length))
  )
    return null;
  let r = {};
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      c = e[o];
    if (a[0] === ":") r[a.substring(1)] = c;
    else if (a !== c.path) return null;
  }
  return { consumed: e.slice(0, n.length), posParams: r };
}
function gc(e, i) {
  if (e.length !== i.length) return !1;
  for (let t = 0; t < e.length; ++t) if (!_t(e[t], i[t])) return !1;
  return !0;
}
function _t(e, i) {
  let t = e ? Fn(e) : void 0,
    n = i ? Fn(i) : void 0;
  if (!t || !n || t.length != n.length) return !1;
  let r;
  for (let o = 0; o < t.length; o++)
    if (((r = t[o]), !Ho(e[r], i[r]))) return !1;
  return !0;
}
function Fn(e) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
}
function Ho(e, i) {
  if (Array.isArray(e) && Array.isArray(i)) {
    if (e.length !== i.length) return !1;
    let t = [...e].sort(),
      n = [...i].sort();
    return t.every((r, o) => n[o] === r);
  } else return e === i;
}
function $o(e) {
  return e.length > 0 ? e[e.length - 1] : null;
}
function Pt(e) {
  return on(e) ? e : vi(e) ? ot(Promise.resolve(e)) : b(e);
}
var bc = { exact: Wo, subset: qo },
  Go = { exact: vc, subset: _c, ignored: () => !0 };
function Po(e, i, t) {
  return (
    bc[t.paths](e.root, i.root, t.matrixParams) &&
    Go[t.queryParams](e.queryParams, i.queryParams) &&
    !(t.fragment === "exact" && e.fragment !== i.fragment)
  );
}
function vc(e, i) {
  return _t(e, i);
}
function Wo(e, i, t) {
  if (
    !Wt(e.segments, i.segments) ||
    !Ei(e.segments, i.segments, t) ||
    e.numberOfChildren !== i.numberOfChildren
  )
    return !1;
  for (let n in i.children)
    if (!e.children[n] || !Wo(e.children[n], i.children[n], t)) return !1;
  return !0;
}
function _c(e, i) {
  return (
    Object.keys(i).length <= Object.keys(e).length &&
    Object.keys(i).every((t) => Ho(e[t], i[t]))
  );
}
function qo(e, i, t) {
  return Zo(e, i, i.segments, t);
}
function Zo(e, i, t, n) {
  if (e.segments.length > t.length) {
    let r = e.segments.slice(0, t.length);
    return !(!Wt(r, t) || i.hasChildren() || !Ei(r, t, n));
  } else if (e.segments.length === t.length) {
    if (!Wt(e.segments, t) || !Ei(e.segments, t, n)) return !1;
    for (let r in i.children)
      if (!e.children[r] || !qo(e.children[r], i.children[r], n)) return !1;
    return !0;
  } else {
    let r = t.slice(0, e.segments.length),
      o = t.slice(e.segments.length);
    return !Wt(e.segments, r) || !Ei(e.segments, r, n) || !e.children[_]
      ? !1
      : Zo(e.children[_], i, o, n);
  }
}
function Ei(e, i, t) {
  return i.every((n, r) => Go[t](e[r].parameters, n.parameters));
}
var kt = class {
    constructor(i = new E([], {}), t = {}, n = null) {
      (this.root = i), (this.queryParams = t), (this.fragment = n);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= ae(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return wc.serialize(this);
    }
  },
  E = class {
    constructor(i, t) {
      (this.segments = i),
        (this.children = t),
        (this.parent = null),
        Object.values(t).forEach((n) => (n.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return Di(this);
    }
  },
  Gt = class {
    constructor(i, t) {
      (this.path = i), (this.parameters = t);
    }
    get parameterMap() {
      return (this._parameterMap ??= ae(this.parameters)), this._parameterMap;
    }
    toString() {
      return Ko(this);
    }
  };
function yc(e, i) {
  return Wt(e, i) && e.every((t, n) => _t(t.parameters, i[n].parameters));
}
function Wt(e, i) {
  return e.length !== i.length ? !1 : e.every((t, n) => t.path === i[n].path);
}
function xc(e, i) {
  let t = [];
  return (
    Object.entries(e.children).forEach(([n, r]) => {
      n === _ && (t = t.concat(i(r, n)));
    }),
    Object.entries(e.children).forEach(([n, r]) => {
      n !== _ && (t = t.concat(i(r, n)));
    }),
    t
  );
}
var or = (() => {
    class e {
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({
          token: e,
          factory: () => new je(),
          providedIn: "root",
        });
      }
    }
    return e;
  })(),
  je = class {
    parse(i) {
      let t = new Nn(i);
      return new kt(
        t.parseRootSegment(),
        t.parseQueryParams(),
        t.parseFragment(),
      );
    }
    serialize(i) {
      let t = `/${Fe(i.root, !0)}`,
        n = Mc(i.queryParams),
        r = typeof i.fragment == "string" ? `#${Cc(i.fragment)}` : "";
      return `${t}${n}${r}`;
    }
  },
  wc = new je();
function Di(e) {
  return e.segments.map((i) => Ko(i)).join("/");
}
function Fe(e, i) {
  if (!e.hasChildren()) return Di(e);
  if (i) {
    let t = e.children[_] ? Fe(e.children[_], !1) : "",
      n = [];
    return (
      Object.entries(e.children).forEach(([r, o]) => {
        r !== _ && n.push(`${r}:${Fe(o, !1)}`);
      }),
      n.length > 0 ? `${t}(${n.join("//")})` : t
    );
  } else {
    let t = xc(e, (n, r) =>
      r === _ ? [Fe(e.children[_], !1)] : [`${r}:${Fe(n, !1)}`],
    );
    return Object.keys(e.children).length === 1 && e.children[_] != null
      ? `${Di(e)}/${t[0]}`
      : `${Di(e)}/(${t.join("//")})`;
  }
}
function Yo(e) {
  return encodeURIComponent(e)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function Ii(e) {
  return Yo(e).replace(/%3B/gi, ";");
}
function Cc(e) {
  return encodeURI(e);
}
function On(e) {
  return Yo(e)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function Ai(e) {
  return decodeURIComponent(e);
}
function Lo(e) {
  return Ai(e.replace(/\+/g, "%20"));
}
function Ko(e) {
  return `${On(e.path)}${Ic(e.parameters)}`;
}
function Ic(e) {
  return Object.entries(e)
    .map(([i, t]) => `;${On(i)}=${On(t)}`)
    .join("");
}
function Mc(e) {
  let i = Object.entries(e)
    .map(([t, n]) =>
      Array.isArray(n)
        ? n.map((r) => `${Ii(t)}=${Ii(r)}`).join("&")
        : `${Ii(t)}=${Ii(n)}`,
    )
    .filter((t) => t);
  return i.length ? `?${i.join("&")}` : "";
}
var Ec = /^[^\/()?;#]+/;
function An(e) {
  let i = e.match(Ec);
  return i ? i[0] : "";
}
var Dc = /^[^\/()?;=#]+/;
function Ac(e) {
  let i = e.match(Dc);
  return i ? i[0] : "";
}
var Sc = /^[^=?&#]+/;
function Rc(e) {
  let i = e.match(Sc);
  return i ? i[0] : "";
}
var kc = /^[^&#]+/;
function Tc(e) {
  let i = e.match(kc);
  return i ? i[0] : "";
}
var Nn = class {
  constructor(i) {
    (this.url = i), (this.remaining = i);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new E([], {})
        : new E([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let i = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(i);
      while (this.consumeOptional("&"));
    return i;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let i = [];
    for (
      this.peekStartsWith("(") || i.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), i.push(this.parseSegment());
    let t = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (t = this.parseParens(!0)));
    let n = {};
    return (
      this.peekStartsWith("(") && (n = this.parseParens(!1)),
      (i.length > 0 || Object.keys(t).length > 0) && (n[_] = new E(i, t)),
      n
    );
  }
  parseSegment() {
    let i = An(this.remaining);
    if (i === "" && this.peekStartsWith(";")) throw new T(4009, !1);
    return this.capture(i), new Gt(Ai(i), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let i = {};
    for (; this.consumeOptional(";"); ) this.parseParam(i);
    return i;
  }
  parseParam(i) {
    let t = Ac(this.remaining);
    if (!t) return;
    this.capture(t);
    let n = "";
    if (this.consumeOptional("=")) {
      let r = An(this.remaining);
      r && ((n = r), this.capture(n));
    }
    i[Ai(t)] = Ai(n);
  }
  parseQueryParam(i) {
    let t = Rc(this.remaining);
    if (!t) return;
    this.capture(t);
    let n = "";
    if (this.consumeOptional("=")) {
      let a = Tc(this.remaining);
      a && ((n = a), this.capture(n));
    }
    let r = Lo(t),
      o = Lo(n);
    if (i.hasOwnProperty(r)) {
      let a = i[r];
      Array.isArray(a) || ((a = [a]), (i[r] = a)), a.push(o);
    } else i[r] = o;
  }
  parseParens(i) {
    let t = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let n = An(this.remaining),
        r = this.remaining[n.length];
      if (r !== "/" && r !== ")" && r !== ";") throw new T(4010, !1);
      let o;
      n.indexOf(":") > -1
        ? ((o = n.slice(0, n.indexOf(":"))), this.capture(o), this.capture(":"))
        : i && (o = _);
      let a = this.parseChildren();
      (t[o] = Object.keys(a).length === 1 ? a[_] : new E([], a)),
        this.consumeOptional("//");
    }
    return t;
  }
  peekStartsWith(i) {
    return this.remaining.startsWith(i);
  }
  consumeOptional(i) {
    return this.peekStartsWith(i)
      ? ((this.remaining = this.remaining.substring(i.length)), !0)
      : !1;
  }
  capture(i) {
    if (!this.consumeOptional(i)) throw new T(4011, !1);
  }
};
function Qo(e) {
  return e.segments.length > 0 ? new E([], { [_]: e }) : e;
}
function Xo(e) {
  let i = {};
  for (let [n, r] of Object.entries(e.children)) {
    let o = Xo(r);
    if (n === _ && o.segments.length === 0 && o.hasChildren())
      for (let [a, c] of Object.entries(o.children)) i[a] = c;
    else (o.segments.length > 0 || o.hasChildren()) && (i[n] = o);
  }
  let t = new E(e.segments, i);
  return Fc(t);
}
function Fc(e) {
  if (e.numberOfChildren === 1 && e.children[_]) {
    let i = e.children[_];
    return new E(e.segments.concat(i.segments), i.children);
  }
  return e;
}
function Ue(e) {
  return e instanceof kt;
}
function Oc(e, i, t = null, n = null) {
  let r = Jo(e);
  return ta(r, i, t, n);
}
function Jo(e) {
  let i;
  function t(o) {
    let a = {};
    for (let s of o.children) {
      let d = t(s);
      a[s.outlet] = d;
    }
    let c = new E(o.url, a);
    return o === e && (i = c), c;
  }
  let n = t(e.root),
    r = Qo(n);
  return i ?? r;
}
function ta(e, i, t, n) {
  let r = e;
  for (; r.parent; ) r = r.parent;
  if (i.length === 0) return Sn(r, r, r, t, n);
  let o = Nc(i);
  if (o.toRoot()) return Sn(r, r, new E([], {}), t, n);
  let a = Pc(o, r, e),
    c = a.processChildren
      ? Pe(a.segmentGroup, a.index, o.commands)
      : ia(a.segmentGroup, a.index, o.commands);
  return Sn(r, a.segmentGroup, c, t, n);
}
function Si(e) {
  return typeof e == "object" && e != null && !e.outlets && !e.segmentPath;
}
function ze(e) {
  return typeof e == "object" && e != null && e.outlets;
}
function Sn(e, i, t, n, r) {
  let o = {};
  n &&
    Object.entries(n).forEach(([s, d]) => {
      o[s] = Array.isArray(d) ? d.map((l) => `${l}`) : `${d}`;
    });
  let a;
  e === i ? (a = t) : (a = ea(e, i, t));
  let c = Qo(Xo(a));
  return new kt(c, o, r);
}
function ea(e, i, t) {
  let n = {};
  return (
    Object.entries(e.children).forEach(([r, o]) => {
      o === i ? (n[r] = t) : (n[r] = ea(o, i, t));
    }),
    new E(e.segments, n)
  );
}
var Ri = class {
  constructor(i, t, n) {
    if (
      ((this.isAbsolute = i),
      (this.numberOfDoubleDots = t),
      (this.commands = n),
      i && n.length > 0 && Si(n[0]))
    )
      throw new T(4003, !1);
    let r = n.find(ze);
    if (r && r !== $o(n)) throw new T(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function Nc(e) {
  if (typeof e[0] == "string" && e.length === 1 && e[0] === "/")
    return new Ri(!0, 0, e);
  let i = 0,
    t = !1,
    n = e.reduce((r, o, a) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let c = {};
          return (
            Object.entries(o.outlets).forEach(([s, d]) => {
              c[s] = typeof d == "string" ? d.split("/") : d;
            }),
            [...r, { outlets: c }]
          );
        }
        if (o.segmentPath) return [...r, o.segmentPath];
      }
      return typeof o != "string"
        ? [...r, o]
        : a === 0
          ? (o.split("/").forEach((c, s) => {
              (s == 0 && c === ".") ||
                (s == 0 && c === ""
                  ? (t = !0)
                  : c === ".."
                    ? i++
                    : c != "" && r.push(c));
            }),
            r)
          : [...r, o];
    }, []);
  return new Ri(t, i, n);
}
var ne = class {
  constructor(i, t, n) {
    (this.segmentGroup = i), (this.processChildren = t), (this.index = n);
  }
};
function Pc(e, i, t) {
  if (e.isAbsolute) return new ne(i, !0, 0);
  if (!t) return new ne(i, !1, NaN);
  if (t.parent === null) return new ne(t, !0, 0);
  let n = Si(e.commands[0]) ? 0 : 1,
    r = t.segments.length - 1 + n;
  return Lc(t, r, e.numberOfDoubleDots);
}
function Lc(e, i, t) {
  let n = e,
    r = i,
    o = t;
  for (; o > r; ) {
    if (((o -= r), (n = n.parent), !n)) throw new T(4005, !1);
    r = n.segments.length;
  }
  return new ne(n, !1, r - o);
}
function Vc(e) {
  return ze(e[0]) ? e[0].outlets : { [_]: e };
}
function ia(e, i, t) {
  if (((e ??= new E([], {})), e.segments.length === 0 && e.hasChildren()))
    return Pe(e, i, t);
  let n = jc(e, i, t),
    r = t.slice(n.commandIndex);
  if (n.match && n.pathIndex < e.segments.length) {
    let o = new E(e.segments.slice(0, n.pathIndex), {});
    return (
      (o.children[_] = new E(e.segments.slice(n.pathIndex), e.children)),
      Pe(o, 0, r)
    );
  } else
    return n.match && r.length === 0
      ? new E(e.segments, {})
      : n.match && !e.hasChildren()
        ? Pn(e, i, t)
        : n.match
          ? Pe(e, 0, r)
          : Pn(e, i, t);
}
function Pe(e, i, t) {
  if (t.length === 0) return new E(e.segments, {});
  {
    let n = Vc(t),
      r = {};
    if (
      Object.keys(n).some((o) => o !== _) &&
      e.children[_] &&
      e.numberOfChildren === 1 &&
      e.children[_].segments.length === 0
    ) {
      let o = Pe(e.children[_], i, t);
      return new E(e.segments, o.children);
    }
    return (
      Object.entries(n).forEach(([o, a]) => {
        typeof a == "string" && (a = [a]),
          a !== null && (r[o] = ia(e.children[o], i, a));
      }),
      Object.entries(e.children).forEach(([o, a]) => {
        n[o] === void 0 && (r[o] = a);
      }),
      new E(e.segments, r)
    );
  }
}
function jc(e, i, t) {
  let n = 0,
    r = i,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; r < e.segments.length; ) {
    if (n >= t.length) return o;
    let a = e.segments[r],
      c = t[n];
    if (ze(c)) break;
    let s = `${c}`,
      d = n < t.length - 1 ? t[n + 1] : null;
    if (r > 0 && s === void 0) break;
    if (s && d && typeof d == "object" && d.outlets === void 0) {
      if (!jo(s, d, a)) return o;
      n += 2;
    } else {
      if (!jo(s, {}, a)) return o;
      n++;
    }
    r++;
  }
  return { match: !0, pathIndex: r, commandIndex: n };
}
function Pn(e, i, t) {
  let n = e.segments.slice(0, i),
    r = 0;
  for (; r < t.length; ) {
    let o = t[r];
    if (ze(o)) {
      let s = Uc(o.outlets);
      return new E(n, s);
    }
    if (r === 0 && Si(t[0])) {
      let s = e.segments[i];
      n.push(new Gt(s.path, Vo(t[0]))), r++;
      continue;
    }
    let a = ze(o) ? o.outlets[_] : `${o}`,
      c = r < t.length - 1 ? t[r + 1] : null;
    a && c && Si(c)
      ? (n.push(new Gt(a, Vo(c))), (r += 2))
      : (n.push(new Gt(a, {})), r++);
  }
  return new E(n, {});
}
function Uc(e) {
  let i = {};
  return (
    Object.entries(e).forEach(([t, n]) => {
      typeof n == "string" && (n = [n]),
        n !== null && (i[t] = Pn(new E([], {}), 0, n));
    }),
    i
  );
}
function Vo(e) {
  let i = {};
  return Object.entries(e).forEach(([t, n]) => (i[t] = `${n}`)), i;
}
function jo(e, i, t) {
  return e == t.path && _t(i, t.parameters);
}
var Le = "imperative",
  Y = (function (e) {
    return (
      (e[(e.NavigationStart = 0)] = "NavigationStart"),
      (e[(e.NavigationEnd = 1)] = "NavigationEnd"),
      (e[(e.NavigationCancel = 2)] = "NavigationCancel"),
      (e[(e.NavigationError = 3)] = "NavigationError"),
      (e[(e.RoutesRecognized = 4)] = "RoutesRecognized"),
      (e[(e.ResolveStart = 5)] = "ResolveStart"),
      (e[(e.ResolveEnd = 6)] = "ResolveEnd"),
      (e[(e.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (e[(e.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (e[(e.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (e[(e.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (e[(e.ChildActivationStart = 11)] = "ChildActivationStart"),
      (e[(e.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (e[(e.ActivationStart = 13)] = "ActivationStart"),
      (e[(e.ActivationEnd = 14)] = "ActivationEnd"),
      (e[(e.Scroll = 15)] = "Scroll"),
      (e[(e.NavigationSkipped = 16)] = "NavigationSkipped"),
      e
    );
  })(Y || {}),
  lt = class {
    constructor(i, t) {
      (this.id = i), (this.url = t);
    }
  },
  Be = class extends lt {
    constructor(i, t, n = "imperative", r = null) {
      super(i, t),
        (this.type = Y.NavigationStart),
        (this.navigationTrigger = n),
        (this.restoredState = r);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  qt = class extends lt {
    constructor(i, t, n) {
      super(i, t), (this.urlAfterRedirects = n), (this.type = Y.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  ct = (function (e) {
    return (
      (e[(e.Redirect = 0)] = "Redirect"),
      (e[(e.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (e[(e.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (e[(e.GuardRejected = 3)] = "GuardRejected"),
      e
    );
  })(ct || {}),
  Ln = (function (e) {
    return (
      (e[(e.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (e[(e.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      e
    );
  })(Ln || {}),
  Rt = class extends lt {
    constructor(i, t, n, r) {
      super(i, t),
        (this.reason = n),
        (this.code = r),
        (this.type = Y.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Zt = class extends lt {
    constructor(i, t, n, r) {
      super(i, t),
        (this.reason = n),
        (this.code = r),
        (this.type = Y.NavigationSkipped);
    }
  },
  He = class extends lt {
    constructor(i, t, n, r) {
      super(i, t),
        (this.error = n),
        (this.target = r),
        (this.type = Y.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  ki = class extends lt {
    constructor(i, t, n, r) {
      super(i, t),
        (this.urlAfterRedirects = n),
        (this.state = r),
        (this.type = Y.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Vn = class extends lt {
    constructor(i, t, n, r) {
      super(i, t),
        (this.urlAfterRedirects = n),
        (this.state = r),
        (this.type = Y.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  jn = class extends lt {
    constructor(i, t, n, r, o) {
      super(i, t),
        (this.urlAfterRedirects = n),
        (this.state = r),
        (this.shouldActivate = o),
        (this.type = Y.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  Un = class extends lt {
    constructor(i, t, n, r) {
      super(i, t),
        (this.urlAfterRedirects = n),
        (this.state = r),
        (this.type = Y.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  zn = class extends lt {
    constructor(i, t, n, r) {
      super(i, t),
        (this.urlAfterRedirects = n),
        (this.state = r),
        (this.type = Y.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Bn = class {
    constructor(i) {
      (this.route = i), (this.type = Y.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Hn = class {
    constructor(i) {
      (this.route = i), (this.type = Y.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  $n = class {
    constructor(i) {
      (this.snapshot = i), (this.type = Y.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Gn = class {
    constructor(i) {
      (this.snapshot = i), (this.type = Y.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Wn = class {
    constructor(i) {
      (this.snapshot = i), (this.type = Y.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  qn = class {
    constructor(i) {
      (this.snapshot = i), (this.type = Y.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  };
var $e = class {},
  se = class {
    constructor(i, t) {
      (this.url = i), (this.navigationBehaviorOptions = t);
    }
  };
function zc(e, i) {
  return (
    e.providers &&
      !e._injector &&
      (e._injector = so(e.providers, i, `Route: ${e.path}`)),
    e._injector ?? i
  );
}
function pt(e) {
  return e.outlet || _;
}
function Bc(e, i) {
  let t = e.filter((n) => pt(n) === i);
  return t.push(...e.filter((n) => pt(n) !== i)), t;
}
function Ke(e) {
  if (!e) return null;
  if (e.routeConfig?._injector) return e.routeConfig._injector;
  for (let i = e.parent; i; i = i.parent) {
    let t = i.routeConfig;
    if (t?._loadedInjector) return t._loadedInjector;
    if (t?._injector) return t._injector;
  }
  return null;
}
var Zn = class {
    get injector() {
      return Ke(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(i) {}
    constructor(i) {
      (this.rootInjector = i),
        (this.outlet = null),
        (this.route = null),
        (this.children = new Vi(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  Vi = (() => {
    class e {
      constructor(t) {
        (this.rootInjector = t), (this.contexts = new Map());
      }
      onChildOutletCreated(t, n) {
        let r = this.getOrCreateContext(t);
        (r.outlet = n), this.contexts.set(t, r);
      }
      onChildOutletDestroyed(t) {
        let n = this.getContext(t);
        n && ((n.outlet = null), (n.attachRef = null));
      }
      onOutletDeactivated() {
        let t = this.contexts;
        return (this.contexts = new Map()), t;
      }
      onOutletReAttached(t) {
        this.contexts = t;
      }
      getOrCreateContext(t) {
        let n = this.getContext(t);
        return (
          n || ((n = new Zn(this.rootInjector)), this.contexts.set(t, n)), n
        );
      }
      getContext(t) {
        return this.contexts.get(t) || null;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(di));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  Ti = class {
    constructor(i) {
      this._root = i;
    }
    get root() {
      return this._root.value;
    }
    parent(i) {
      let t = this.pathFromRoot(i);
      return t.length > 1 ? t[t.length - 2] : null;
    }
    children(i) {
      let t = Yn(i, this._root);
      return t ? t.children.map((n) => n.value) : [];
    }
    firstChild(i) {
      let t = Yn(i, this._root);
      return t && t.children.length > 0 ? t.children[0].value : null;
    }
    siblings(i) {
      let t = Kn(i, this._root);
      return t.length < 2
        ? []
        : t[t.length - 2].children.map((r) => r.value).filter((r) => r !== i);
    }
    pathFromRoot(i) {
      return Kn(i, this._root).map((t) => t.value);
    }
  };
function Yn(e, i) {
  if (e === i.value) return i;
  for (let t of i.children) {
    let n = Yn(e, t);
    if (n) return n;
  }
  return null;
}
function Kn(e, i) {
  if (e === i.value) return [i];
  for (let t of i.children) {
    let n = Kn(e, t);
    if (n.length) return n.unshift(i), n;
  }
  return [];
}
var st = class {
  constructor(i, t) {
    (this.value = i), (this.children = t);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function ie(e) {
  let i = {};
  return e && e.children.forEach((t) => (i[t.value.outlet] = t)), i;
}
var Fi = class extends Ti {
  constructor(i, t) {
    super(i), (this.snapshot = t), ar(this, i);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function na(e) {
  let i = Hc(e),
    t = new tt([new Gt("", {})]),
    n = new tt({}),
    r = new tt({}),
    o = new tt({}),
    a = new tt(""),
    c = new ce(t, n, o, a, r, _, e, i.root);
  return (c.snapshot = i.root), new Fi(new st(c, []), i);
}
function Hc(e) {
  let i = {},
    t = {},
    n = {},
    r = "",
    o = new re([], i, n, r, t, _, e, null, {});
  return new Ni("", new st(o, []));
}
var ce = class {
  constructor(i, t, n, r, o, a, c, s) {
    (this.urlSubject = i),
      (this.paramsSubject = t),
      (this.queryParamsSubject = n),
      (this.fragmentSubject = r),
      (this.dataSubject = o),
      (this.outlet = a),
      (this.component = c),
      (this._futureSnapshot = s),
      (this.title = this.dataSubject?.pipe(I((d) => d[Ye])) ?? b(void 0)),
      (this.url = i),
      (this.params = t),
      (this.queryParams = n),
      (this.fragment = r),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(I((i) => ae(i)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(I((i) => ae(i)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function Oi(e, i, t = "emptyOnly") {
  let n,
    { routeConfig: r } = e;
  return (
    i !== null &&
    (t === "always" ||
      r?.path === "" ||
      (!i.component && !i.routeConfig?.loadComponent))
      ? (n = {
          params: u(u({}, i.params), e.params),
          data: u(u({}, i.data), e.data),
          resolve: u(u(u(u({}, e.data), i.data), r?.data), e._resolvedData),
        })
      : (n = {
          params: u({}, e.params),
          data: u({}, e.data),
          resolve: u(u({}, e.data), e._resolvedData ?? {}),
        }),
    r && oa(r) && (n.resolve[Ye] = r.title),
    n
  );
}
var re = class {
    get title() {
      return this.data?.[Ye];
    }
    constructor(i, t, n, r, o, a, c, s, d) {
      (this.url = i),
        (this.params = t),
        (this.queryParams = n),
        (this.fragment = r),
        (this.data = o),
        (this.outlet = a),
        (this.component = c),
        (this.routeConfig = s),
        (this._resolve = d);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= ae(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= ae(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let i = this.url.map((n) => n.toString()).join("/"),
        t = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${i}', path:'${t}')`;
    }
  },
  Ni = class extends Ti {
    constructor(i, t) {
      super(t), (this.url = i), ar(this, t);
    }
    toString() {
      return ra(this._root);
    }
  };
function ar(e, i) {
  (i.value._routerState = e), i.children.forEach((t) => ar(e, t));
}
function ra(e) {
  let i = e.children.length > 0 ? ` { ${e.children.map(ra).join(", ")} } ` : "";
  return `${e.value}${i}`;
}
function Rn(e) {
  if (e.snapshot) {
    let i = e.snapshot,
      t = e._futureSnapshot;
    (e.snapshot = t),
      _t(i.queryParams, t.queryParams) ||
        e.queryParamsSubject.next(t.queryParams),
      i.fragment !== t.fragment && e.fragmentSubject.next(t.fragment),
      _t(i.params, t.params) || e.paramsSubject.next(t.params),
      gc(i.url, t.url) || e.urlSubject.next(t.url),
      _t(i.data, t.data) || e.dataSubject.next(t.data);
  } else
    (e.snapshot = e._futureSnapshot),
      e.dataSubject.next(e._futureSnapshot.data);
}
function Qn(e, i) {
  let t = _t(e.params, i.params) && yc(e.url, i.url),
    n = !e.parent != !i.parent;
  return t && !n && (!e.parent || Qn(e.parent, i.parent));
}
function oa(e) {
  return typeof e.title == "string" || e.title === null;
}
var $c = (() => {
    class e {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = _),
          (this.activateEvents = new it()),
          (this.deactivateEvents = new it()),
          (this.attachEvents = new it()),
          (this.detachEvents = new it()),
          (this.parentContexts = m(Vi)),
          (this.location = m(no)),
          (this.changeDetector = m($t)),
          (this.inputBinder = m(sr, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(t) {
        if (t.name) {
          let { firstChange: n, previousValue: r } = t.name;
          if (n) return;
          this.isTrackedInParentContexts(r) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(r)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(t) {
        return this.parentContexts.getContext(t)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let t = this.parentContexts.getContext(this.name);
        t?.route &&
          (t.attachRef
            ? this.attach(t.attachRef, t.route)
            : this.activateWith(t.route, t.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new T(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new T(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new T(4012, !1);
        this.location.detach();
        let t = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(t.instance),
          t
        );
      }
      attach(t, n) {
        (this.activated = t),
          (this._activatedRoute = n),
          this.location.insert(t.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(t.instance);
      }
      deactivate() {
        if (this.activated) {
          let t = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(t);
        }
      }
      activateWith(t, n) {
        if (this.isActivated) throw new T(4013, !1);
        this._activatedRoute = t;
        let r = this.location,
          a = t.snapshot.component,
          c = this.parentContexts.getOrCreateContext(this.name).children,
          s = new Xn(t, c, r.injector);
        (this.activated = r.createComponent(a, {
          index: r.length,
          injector: s,
          environmentInjector: n,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵdir = N({
          type: e,
          selectors: [["router-outlet"]],
          inputs: { name: "name" },
          outputs: {
            activateEvents: "activate",
            deactivateEvents: "deactivate",
            attachEvents: "attach",
            detachEvents: "detach",
          },
          exportAs: ["outlet"],
          standalone: !0,
          features: [zt],
        });
      }
    }
    return e;
  })(),
  Xn = class e {
    __ngOutletInjector(i) {
      return new e(this.route, this.childContexts, i);
    }
    constructor(i, t, n) {
      (this.route = i), (this.childContexts = t), (this.parent = n);
    }
    get(i, t) {
      return i === ce
        ? this.route
        : i === Vi
          ? this.childContexts
          : this.parent.get(i, t);
    }
  },
  sr = new v("");
function Gc(e, i, t) {
  let n = Ge(e, i._root, t ? t._root : void 0);
  return new Fi(n, i);
}
function Ge(e, i, t) {
  if (t && e.shouldReuseRoute(i.value, t.value.snapshot)) {
    let n = t.value;
    n._futureSnapshot = i.value;
    let r = Wc(e, i, t);
    return new st(n, r);
  } else {
    if (e.shouldAttach(i.value)) {
      let o = e.retrieve(i.value);
      if (o !== null) {
        let a = o.route;
        return (
          (a.value._futureSnapshot = i.value),
          (a.children = i.children.map((c) => Ge(e, c))),
          a
        );
      }
    }
    let n = qc(i.value),
      r = i.children.map((o) => Ge(e, o));
    return new st(n, r);
  }
}
function Wc(e, i, t) {
  return i.children.map((n) => {
    for (let r of t.children)
      if (e.shouldReuseRoute(n.value, r.value.snapshot)) return Ge(e, n, r);
    return Ge(e, n);
  });
}
function qc(e) {
  return new ce(
    new tt(e.url),
    new tt(e.params),
    new tt(e.queryParams),
    new tt(e.fragment),
    new tt(e.data),
    e.outlet,
    e.component,
    e,
  );
}
var We = class {
    constructor(i, t) {
      (this.redirectTo = i), (this.navigationBehaviorOptions = t);
    }
  },
  aa = "ngNavigationCancelingError";
function Pi(e, i) {
  let { redirectTo: t, navigationBehaviorOptions: n } = Ue(i)
      ? { redirectTo: i, navigationBehaviorOptions: void 0 }
      : i,
    r = sa(!1, ct.Redirect);
  return (r.url = t), (r.navigationBehaviorOptions = n), r;
}
function sa(e, i) {
  let t = new Error(`NavigationCancelingError: ${e || ""}`);
  return (t[aa] = !0), (t.cancellationCode = i), t;
}
function Zc(e) {
  return ca(e) && Ue(e.url);
}
function ca(e) {
  return !!e && e[aa];
}
var Yc = (e, i, t, n) =>
    I(
      (r) => (
        new Jn(i, r.targetRouterState, r.currentRouterState, t, n).activate(e),
        r
      ),
    ),
  Jn = class {
    constructor(i, t, n, r, o) {
      (this.routeReuseStrategy = i),
        (this.futureState = t),
        (this.currState = n),
        (this.forwardEvent = r),
        (this.inputBindingEnabled = o);
    }
    activate(i) {
      let t = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(t, n, i),
        Rn(this.futureState.root),
        this.activateChildRoutes(t, n, i);
    }
    deactivateChildRoutes(i, t, n) {
      let r = ie(t);
      i.children.forEach((o) => {
        let a = o.value.outlet;
        this.deactivateRoutes(o, r[a], n), delete r[a];
      }),
        Object.values(r).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, n);
        });
    }
    deactivateRoutes(i, t, n) {
      let r = i.value,
        o = t ? t.value : null;
      if (r === o)
        if (r.component) {
          let a = n.getContext(r.outlet);
          a && this.deactivateChildRoutes(i, t, a.children);
        } else this.deactivateChildRoutes(i, t, n);
      else o && this.deactivateRouteAndItsChildren(t, n);
    }
    deactivateRouteAndItsChildren(i, t) {
      i.value.component &&
      this.routeReuseStrategy.shouldDetach(i.value.snapshot)
        ? this.detachAndStoreRouteSubtree(i, t)
        : this.deactivateRouteAndOutlet(i, t);
    }
    detachAndStoreRouteSubtree(i, t) {
      let n = t.getContext(i.value.outlet),
        r = n && i.value.component ? n.children : t,
        o = ie(i);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, r);
      if (n && n.outlet) {
        let a = n.outlet.detach(),
          c = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(i.value.snapshot, {
          componentRef: a,
          route: i,
          contexts: c,
        });
      }
    }
    deactivateRouteAndOutlet(i, t) {
      let n = t.getContext(i.value.outlet),
        r = n && i.value.component ? n.children : t,
        o = ie(i);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, r);
      n &&
        (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()),
        (n.attachRef = null),
        (n.route = null));
    }
    activateChildRoutes(i, t, n) {
      let r = ie(t);
      i.children.forEach((o) => {
        this.activateRoutes(o, r[o.value.outlet], n),
          this.forwardEvent(new qn(o.value.snapshot));
      }),
        i.children.length && this.forwardEvent(new Gn(i.value.snapshot));
    }
    activateRoutes(i, t, n) {
      let r = i.value,
        o = t ? t.value : null;
      if ((Rn(r), r === o))
        if (r.component) {
          let a = n.getOrCreateContext(r.outlet);
          this.activateChildRoutes(i, t, a.children);
        } else this.activateChildRoutes(i, t, n);
      else if (r.component) {
        let a = n.getOrCreateContext(r.outlet);
        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
          let c = this.routeReuseStrategy.retrieve(r.snapshot);
          this.routeReuseStrategy.store(r.snapshot, null),
            a.children.onOutletReAttached(c.contexts),
            (a.attachRef = c.componentRef),
            (a.route = c.route.value),
            a.outlet && a.outlet.attach(c.componentRef, c.route.value),
            Rn(c.route.value),
            this.activateChildRoutes(i, null, a.children);
        } else
          (a.attachRef = null),
            (a.route = r),
            a.outlet && a.outlet.activateWith(r, a.injector),
            this.activateChildRoutes(i, null, a.children);
      } else this.activateChildRoutes(i, null, n);
    }
  },
  Li = class {
    constructor(i) {
      (this.path = i), (this.route = this.path[this.path.length - 1]);
    }
  },
  oe = class {
    constructor(i, t) {
      (this.component = i), (this.route = t);
    }
  };
function Kc(e, i, t) {
  let n = e._root,
    r = i ? i._root : null;
  return Oe(n, r, t, [n.value]);
}
function Qc(e) {
  let i = e.routeConfig ? e.routeConfig.canActivateChild : null;
  return !i || i.length === 0 ? null : { node: e, guards: i };
}
function le(e, i) {
  let t = Symbol(),
    n = i.get(e, t);
  return n === t ? (typeof e == "function" && !Zr(e) ? e : i.get(e)) : n;
}
function Oe(
  e,
  i,
  t,
  n,
  r = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = ie(i);
  return (
    e.children.forEach((a) => {
      Xc(a, o[a.value.outlet], t, n.concat([a.value]), r),
        delete o[a.value.outlet];
    }),
    Object.entries(o).forEach(([a, c]) => Ve(c, t.getContext(a), r)),
    r
  );
}
function Xc(
  e,
  i,
  t,
  n,
  r = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = e.value,
    a = i ? i.value : null,
    c = t ? t.getContext(e.value.outlet) : null;
  if (a && o.routeConfig === a.routeConfig) {
    let s = Jc(a, o, o.routeConfig.runGuardsAndResolvers);
    s
      ? r.canActivateChecks.push(new Li(n))
      : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
      o.component ? Oe(e, i, c ? c.children : null, n, r) : Oe(e, i, t, n, r),
      s &&
        c &&
        c.outlet &&
        c.outlet.isActivated &&
        r.canDeactivateChecks.push(new oe(c.outlet.component, a));
  } else
    a && Ve(i, c, r),
      r.canActivateChecks.push(new Li(n)),
      o.component
        ? Oe(e, null, c ? c.children : null, n, r)
        : Oe(e, null, t, n, r);
  return r;
}
function Jc(e, i, t) {
  if (typeof t == "function") return t(e, i);
  switch (t) {
    case "pathParamsChange":
      return !Wt(e.url, i.url);
    case "pathParamsOrQueryParamsChange":
      return !Wt(e.url, i.url) || !_t(e.queryParams, i.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Qn(e, i) || !_t(e.queryParams, i.queryParams);
    case "paramsChange":
    default:
      return !Qn(e, i);
  }
}
function Ve(e, i, t) {
  let n = ie(e),
    r = e.value;
  Object.entries(n).forEach(([o, a]) => {
    r.component
      ? i
        ? Ve(a, i.children.getContext(o), t)
        : Ve(a, null, t)
      : Ve(a, i, t);
  }),
    r.component
      ? i && i.outlet && i.outlet.isActivated
        ? t.canDeactivateChecks.push(new oe(i.outlet.component, r))
        : t.canDeactivateChecks.push(new oe(null, r))
      : t.canDeactivateChecks.push(new oe(null, r));
}
function Qe(e) {
  return typeof e == "function";
}
function td(e) {
  return typeof e == "boolean";
}
function ed(e) {
  return e && Qe(e.canLoad);
}
function id(e) {
  return e && Qe(e.canActivate);
}
function nd(e) {
  return e && Qe(e.canActivateChild);
}
function rd(e) {
  return e && Qe(e.canDeactivate);
}
function od(e) {
  return e && Qe(e.canMatch);
}
function da(e) {
  return e instanceof Ur || e?.name === "EmptyError";
}
var Mi = Symbol("INITIAL_VALUE");
function de() {
  return gt((e) =>
    _e(e.map((i) => i.pipe(wt(1), ci(Mi)))).pipe(
      I((i) => {
        for (let t of i)
          if (t !== !0) {
            if (t === Mi) return Mi;
            if (t === !1 || ad(t)) return t;
          }
        return !0;
      }),
      xt((i) => i !== Mi),
      wt(1),
    ),
  );
}
function ad(e) {
  return Ue(e) || e instanceof We;
}
function sd(e, i) {
  return dt((t) => {
    let {
      targetSnapshot: n,
      currentSnapshot: r,
      guards: { canActivateChecks: o, canDeactivateChecks: a },
    } = t;
    return a.length === 0 && o.length === 0
      ? b(D(u({}, t), { guardsResult: !0 }))
      : cd(a, n, r, e).pipe(
          dt((c) => (c && td(c) ? dd(n, o, e, i) : b(c))),
          I((c) => D(u({}, t), { guardsResult: c })),
        );
  });
}
function cd(e, i, t, n) {
  return ot(e).pipe(
    dt((r) => pd(r.component, r.route, t, i, n)),
    Ot((r) => r !== !0, !0),
  );
}
function dd(e, i, t, n) {
  return ot(i).pipe(
    ye((r) =>
      oi(
        ud(r.route.parent, n),
        ld(r.route, n),
        hd(e, r.path, t),
        md(e, r.route, t),
      ),
    ),
    Ot((r) => r !== !0, !0),
  );
}
function ld(e, i) {
  return e !== null && i && i(new Wn(e)), b(!0);
}
function ud(e, i) {
  return e !== null && i && i(new $n(e)), b(!0);
}
function md(e, i, t) {
  let n = i.routeConfig ? i.routeConfig.canActivate : null;
  if (!n || n.length === 0) return b(!0);
  let r = n.map((o) =>
    an(() => {
      let a = Ke(i) ?? t,
        c = le(o, a),
        s = id(c) ? c.canActivate(i, e) : Ct(a, () => c(i, e));
      return Pt(s).pipe(Ot());
    }),
  );
  return b(r).pipe(de());
}
function hd(e, i, t) {
  let n = i[i.length - 1],
    o = i
      .slice(0, i.length - 1)
      .reverse()
      .map((a) => Qc(a))
      .filter((a) => a !== null)
      .map((a) =>
        an(() => {
          let c = a.guards.map((s) => {
            let d = Ke(a.node) ?? t,
              l = le(s, d),
              h = nd(l) ? l.canActivateChild(n, e) : Ct(d, () => l(n, e));
            return Pt(h).pipe(Ot());
          });
          return b(c).pipe(de());
        }),
      );
  return b(o).pipe(de());
}
function pd(e, i, t, n, r) {
  let o = i && i.routeConfig ? i.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return b(!0);
  let a = o.map((c) => {
    let s = Ke(i) ?? r,
      d = le(c, s),
      l = rd(d) ? d.canDeactivate(e, i, t, n) : Ct(s, () => d(e, i, t, n));
    return Pt(l).pipe(Ot());
  });
  return b(a).pipe(de());
}
function fd(e, i, t, n) {
  let r = i.canLoad;
  if (r === void 0 || r.length === 0) return b(!0);
  let o = r.map((a) => {
    let c = le(a, e),
      s = ed(c) ? c.canLoad(i, t) : Ct(e, () => c(i, t));
    return Pt(s);
  });
  return b(o).pipe(de(), la(n));
}
function la(e) {
  return jr(
    W((i) => {
      if (typeof i != "boolean") throw Pi(e, i);
    }),
    I((i) => i === !0),
  );
}
function gd(e, i, t, n) {
  let r = i.canMatch;
  if (!r || r.length === 0) return b(!0);
  let o = r.map((a) => {
    let c = le(a, e),
      s = od(c) ? c.canMatch(i, t) : Ct(e, () => c(i, t));
    return Pt(s);
  });
  return b(o).pipe(de(), la(n));
}
var qe = class {
    constructor(i) {
      this.segmentGroup = i || null;
    }
  },
  Ze = class extends Error {
    constructor(i) {
      super(), (this.urlTree = i);
    }
  };
function ee(e) {
  return ve(new qe(e));
}
function bd(e) {
  return ve(new T(4e3, !1));
}
function vd(e) {
  return ve(sa(!1, ct.GuardRejected));
}
var tr = class {
    constructor(i, t) {
      (this.urlSerializer = i), (this.urlTree = t);
    }
    lineralizeSegments(i, t) {
      let n = [],
        r = t.root;
      for (;;) {
        if (((n = n.concat(r.segments)), r.numberOfChildren === 0)) return b(n);
        if (r.numberOfChildren > 1 || !r.children[_])
          return bd(`${i.redirectTo}`);
        r = r.children[_];
      }
    }
    applyRedirectCommands(i, t, n, r, o) {
      if (typeof t != "string") {
        let c = t,
          {
            queryParams: s,
            fragment: d,
            routeConfig: l,
            url: h,
            outlet: w,
            params: G,
            data: A,
            title: k,
          } = r,
          K = Ct(o, () =>
            c({
              params: G,
              data: A,
              queryParams: s,
              fragment: d,
              routeConfig: l,
              url: h,
              outlet: w,
              title: k,
            }),
          );
        if (K instanceof kt) throw new Ze(K);
        t = K;
      }
      let a = this.applyRedirectCreateUrlTree(
        t,
        this.urlSerializer.parse(t),
        i,
        n,
      );
      if (t[0] === "/") throw new Ze(a);
      return a;
    }
    applyRedirectCreateUrlTree(i, t, n, r) {
      let o = this.createSegmentGroup(i, t.root, n, r);
      return new kt(
        o,
        this.createQueryParams(t.queryParams, this.urlTree.queryParams),
        t.fragment,
      );
    }
    createQueryParams(i, t) {
      let n = {};
      return (
        Object.entries(i).forEach(([r, o]) => {
          if (typeof o == "string" && o[0] === ":") {
            let c = o.substring(1);
            n[r] = t[c];
          } else n[r] = o;
        }),
        n
      );
    }
    createSegmentGroup(i, t, n, r) {
      let o = this.createSegments(i, t.segments, n, r),
        a = {};
      return (
        Object.entries(t.children).forEach(([c, s]) => {
          a[c] = this.createSegmentGroup(i, s, n, r);
        }),
        new E(o, a)
      );
    }
    createSegments(i, t, n, r) {
      return t.map((o) =>
        o.path[0] === ":"
          ? this.findPosParam(i, o, r)
          : this.findOrReturn(o, n),
      );
    }
    findPosParam(i, t, n) {
      let r = n[t.path.substring(1)];
      if (!r) throw new T(4001, !1);
      return r;
    }
    findOrReturn(i, t) {
      let n = 0;
      for (let r of t) {
        if (r.path === i.path) return t.splice(n), r;
        n++;
      }
      return i;
    }
  },
  er = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function _d(e, i, t, n, r) {
  let o = ua(e, i, t);
  return o.matched
    ? ((n = zc(i, n)),
      gd(n, i, t, r).pipe(I((a) => (a === !0 ? o : u({}, er)))))
    : b(o);
}
function ua(e, i, t) {
  if (i.path === "**") return yd(t);
  if (i.path === "")
    return i.pathMatch === "full" && (e.hasChildren() || t.length > 0)
      ? u({}, er)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: t,
          parameters: {},
          positionalParamSegments: {},
        };
  let r = (i.matcher || fc)(t, e, i);
  if (!r) return u({}, er);
  let o = {};
  Object.entries(r.posParams ?? {}).forEach(([c, s]) => {
    o[c] = s.path;
  });
  let a =
    r.consumed.length > 0
      ? u(u({}, o), r.consumed[r.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: r.consumed,
    remainingSegments: t.slice(r.consumed.length),
    parameters: a,
    positionalParamSegments: r.posParams ?? {},
  };
}
function yd(e) {
  return {
    matched: !0,
    parameters: e.length > 0 ? $o(e).parameters : {},
    consumedSegments: e,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Uo(e, i, t, n) {
  return t.length > 0 && Cd(e, t, n)
    ? {
        segmentGroup: new E(i, wd(n, new E(t, e.children))),
        slicedSegments: [],
      }
    : t.length === 0 && Id(e, t, n)
      ? {
          segmentGroup: new E(e.segments, xd(e, t, n, e.children)),
          slicedSegments: t,
        }
      : { segmentGroup: new E(e.segments, e.children), slicedSegments: t };
}
function xd(e, i, t, n) {
  let r = {};
  for (let o of t)
    if (ji(e, i, o) && !n[pt(o)]) {
      let a = new E([], {});
      r[pt(o)] = a;
    }
  return u(u({}, n), r);
}
function wd(e, i) {
  let t = {};
  t[_] = i;
  for (let n of e)
    if (n.path === "" && pt(n) !== _) {
      let r = new E([], {});
      t[pt(n)] = r;
    }
  return t;
}
function Cd(e, i, t) {
  return t.some((n) => ji(e, i, n) && pt(n) !== _);
}
function Id(e, i, t) {
  return t.some((n) => ji(e, i, n));
}
function ji(e, i, t) {
  return (e.hasChildren() || i.length > 0) && t.pathMatch === "full"
    ? !1
    : t.path === "";
}
function Md(e, i, t) {
  return i.length === 0 && !e.children[t];
}
var ir = class {};
function Ed(e, i, t, n, r, o, a = "emptyOnly") {
  return new nr(e, i, t, n, r, a, o).recognize();
}
var Dd = 31,
  nr = class {
    constructor(i, t, n, r, o, a, c) {
      (this.injector = i),
        (this.configLoader = t),
        (this.rootComponentType = n),
        (this.config = r),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = a),
        (this.urlSerializer = c),
        (this.applyRedirects = new tr(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(i) {
      return new T(4002, `'${i.segmentGroup}'`);
    }
    recognize() {
      let i = Uo(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(i).pipe(
        I(({ children: t, rootSnapshot: n }) => {
          let r = new st(n, t),
            o = new Ni("", r),
            a = Oc(n, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (a.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(a)),
            { state: o, tree: a }
          );
        }),
      );
    }
    match(i) {
      let t = new re(
        [],
        Object.freeze({}),
        Object.freeze(u({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        _,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(this.injector, this.config, i, _, t).pipe(
        I((n) => ({ children: n, rootSnapshot: t })),
        Jt((n) => {
          if (n instanceof Ze)
            return (this.urlTree = n.urlTree), this.match(n.urlTree.root);
          throw n instanceof qe ? this.noMatchError(n) : n;
        }),
      );
    }
    processSegmentGroup(i, t, n, r, o) {
      return n.segments.length === 0 && n.hasChildren()
        ? this.processChildren(i, t, n, o)
        : this.processSegment(i, t, n, n.segments, r, !0, o).pipe(
            I((a) => (a instanceof st ? [a] : [])),
          );
    }
    processChildren(i, t, n, r) {
      let o = [];
      for (let a of Object.keys(n.children))
        a === "primary" ? o.unshift(a) : o.push(a);
      return ot(o).pipe(
        ye((a) => {
          let c = n.children[a],
            s = Bc(t, a);
          return this.processSegmentGroup(i, s, c, a, r);
        }),
        Wr((a, c) => (a.push(...c), a)),
        cn(null),
        Gr(),
        dt((a) => {
          if (a === null) return ee(n);
          let c = ma(a);
          return Ad(c), b(c);
        }),
      );
    }
    processSegment(i, t, n, r, o, a, c) {
      return ot(t).pipe(
        ye((s) =>
          this.processSegmentAgainstRoute(
            s._injector ?? i,
            t,
            s,
            n,
            r,
            o,
            a,
            c,
          ).pipe(
            Jt((d) => {
              if (d instanceof qe) return b(null);
              throw d;
            }),
          ),
        ),
        Ot((s) => !!s),
        Jt((s) => {
          if (da(s)) return Md(n, r, o) ? b(new ir()) : ee(n);
          throw s;
        }),
      );
    }
    processSegmentAgainstRoute(i, t, n, r, o, a, c, s) {
      return pt(n) !== a && (a === _ || !ji(r, o, n))
        ? ee(r)
        : n.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(i, r, n, o, a, s)
          : this.allowRedirects && c
            ? this.expandSegmentAgainstRouteUsingRedirect(i, r, t, n, o, a, s)
            : ee(r);
    }
    expandSegmentAgainstRouteUsingRedirect(i, t, n, r, o, a, c) {
      let {
        matched: s,
        parameters: d,
        consumedSegments: l,
        positionalParamSegments: h,
        remainingSegments: w,
      } = ua(t, r, o);
      if (!s) return ee(t);
      typeof r.redirectTo == "string" &&
        r.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > Dd && (this.allowRedirects = !1));
      let G = new re(
          o,
          d,
          Object.freeze(u({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          zo(r),
          pt(r),
          r.component ?? r._loadedComponent ?? null,
          r,
          Bo(r),
        ),
        A = Oi(G, c, this.paramsInheritanceStrategy);
      (G.params = Object.freeze(A.params)), (G.data = Object.freeze(A.data));
      let k = this.applyRedirects.applyRedirectCommands(
        l,
        r.redirectTo,
        h,
        G,
        i,
      );
      return this.applyRedirects
        .lineralizeSegments(r, k)
        .pipe(dt((K) => this.processSegment(i, n, t, K.concat(w), a, !1, c)));
    }
    matchSegmentAgainstRoute(i, t, n, r, o, a) {
      let c = _d(t, n, r, i, this.urlSerializer);
      return (
        n.path === "**" && (t.children = {}),
        c.pipe(
          gt((s) =>
            s.matched
              ? ((i = n._injector ?? i),
                this.getChildConfig(i, n, r).pipe(
                  gt(({ routes: d }) => {
                    let l = n._loadedInjector ?? i,
                      {
                        parameters: h,
                        consumedSegments: w,
                        remainingSegments: G,
                      } = s,
                      A = new re(
                        w,
                        h,
                        Object.freeze(u({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        zo(n),
                        pt(n),
                        n.component ?? n._loadedComponent ?? null,
                        n,
                        Bo(n),
                      ),
                      k = Oi(A, a, this.paramsInheritanceStrategy);
                    (A.params = Object.freeze(k.params)),
                      (A.data = Object.freeze(k.data));
                    let { segmentGroup: K, slicedSegments: Ft } = Uo(
                      t,
                      w,
                      G,
                      d,
                    );
                    if (Ft.length === 0 && K.hasChildren())
                      return this.processChildren(l, d, K, A).pipe(
                        I((Ut) => new st(A, Ut)),
                      );
                    if (d.length === 0 && Ft.length === 0)
                      return b(new st(A, []));
                    let ge = pt(n) === o;
                    return this.processSegment(
                      l,
                      d,
                      K,
                      Ft,
                      ge ? _ : o,
                      !0,
                      A,
                    ).pipe(I((Ut) => new st(A, Ut instanceof st ? [Ut] : [])));
                  }),
                ))
              : ee(t),
          ),
        )
      );
    }
    getChildConfig(i, t, n) {
      return t.children
        ? b({ routes: t.children, injector: i })
        : t.loadChildren
          ? t._loadedRoutes !== void 0
            ? b({ routes: t._loadedRoutes, injector: t._loadedInjector })
            : fd(i, t, n, this.urlSerializer).pipe(
                dt((r) =>
                  r
                    ? this.configLoader.loadChildren(i, t).pipe(
                        W((o) => {
                          (t._loadedRoutes = o.routes),
                            (t._loadedInjector = o.injector);
                        }),
                      )
                    : vd(t),
                ),
              )
          : b({ routes: [], injector: i });
    }
  };
function Ad(e) {
  e.sort((i, t) =>
    i.value.outlet === _
      ? -1
      : t.value.outlet === _
        ? 1
        : i.value.outlet.localeCompare(t.value.outlet),
  );
}
function Sd(e) {
  let i = e.value.routeConfig;
  return i && i.path === "";
}
function ma(e) {
  let i = [],
    t = new Set();
  for (let n of e) {
    if (!Sd(n)) {
      i.push(n);
      continue;
    }
    let r = i.find((o) => n.value.routeConfig === o.value.routeConfig);
    r !== void 0 ? (r.children.push(...n.children), t.add(r)) : i.push(n);
  }
  for (let n of t) {
    let r = ma(n.children);
    i.push(new st(n.value, r));
  }
  return i.filter((n) => !t.has(n));
}
function zo(e) {
  return e.data || {};
}
function Bo(e) {
  return e.resolve || {};
}
function Rd(e, i, t, n, r, o) {
  return dt((a) =>
    Ed(e, i, t, n, a.extractedUrl, r, o).pipe(
      I(({ state: c, tree: s }) =>
        D(u({}, a), { targetSnapshot: c, urlAfterRedirects: s }),
      ),
    ),
  );
}
function kd(e, i) {
  return dt((t) => {
    let {
      targetSnapshot: n,
      guards: { canActivateChecks: r },
    } = t;
    if (!r.length) return b(t);
    let o = new Set(r.map((s) => s.route)),
      a = new Set();
    for (let s of o) if (!a.has(s)) for (let d of ha(s)) a.add(d);
    let c = 0;
    return ot(a).pipe(
      ye((s) =>
        o.has(s)
          ? Td(s, n, e, i)
          : ((s.data = Oi(s, s.parent, e).resolve), b(void 0)),
      ),
      W(() => c++),
      dn(1),
      dt((s) => (c === a.size ? b(t) : ft)),
    );
  });
}
function ha(e) {
  let i = e.children.map((t) => ha(t)).flat();
  return [e, ...i];
}
function Td(e, i, t, n) {
  let r = e.routeConfig,
    o = e._resolve;
  return (
    r?.title !== void 0 && !oa(r) && (o[Ye] = r.title),
    Fd(o, e, i, n).pipe(
      I(
        (a) => (
          (e._resolvedData = a), (e.data = Oi(e, e.parent, t).resolve), null
        ),
      ),
    )
  );
}
function Fd(e, i, t, n) {
  let r = Fn(e);
  if (r.length === 0) return b({});
  let o = {};
  return ot(r).pipe(
    dt((a) =>
      Od(e[a], i, t, n).pipe(
        Ot(),
        W((c) => {
          if (c instanceof We) throw Pi(new je(), c);
          o[a] = c;
        }),
      ),
    ),
    dn(1),
    Hr(o),
    Jt((a) => (da(a) ? ft : ve(a))),
  );
}
function Od(e, i, t, n) {
  let r = Ke(i) ?? n,
    o = le(e, r),
    a = o.resolve ? o.resolve(i, t) : Ct(r, () => o(i, t));
  return Pt(a);
}
function kn(e) {
  return gt((i) => {
    let t = e(i);
    return t ? ot(t).pipe(I(() => i)) : b(i);
  });
}
var pa = (() => {
    class e {
      buildTitle(t) {
        let n,
          r = t.root;
        for (; r !== void 0; )
          (n = this.getResolvedTitleForRoute(r) ?? n),
            (r = r.children.find((o) => o.outlet === _));
        return n;
      }
      getResolvedTitleForRoute(t) {
        return t.data[Ye];
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: () => m(Nd), providedIn: "root" });
      }
    }
    return e;
  })(),
  Nd = (() => {
    class e extends pa {
      constructor(t) {
        super(), (this.title = t);
      }
      updateTitle(t) {
        let n = this.buildTitle(t);
        n !== void 0 && this.title.setTitle(n);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(No));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  cr = new v("", { providedIn: "root", factory: () => ({}) }),
  Pd = (() => {
    class e {
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵcmp = et({
          type: e,
          selectors: [["ng-component"]],
          standalone: !0,
          features: [rt],
          decls: 1,
          vars: 0,
          template: function (n, r) {
            n & 1 && U(0, "router-outlet");
          },
          dependencies: [$c],
          encapsulation: 2,
        });
      }
    }
    return e;
  })();
function dr(e) {
  let i = e.children && e.children.map(dr),
    t = i ? D(u({}, e), { children: i }) : u({}, e);
  return (
    !t.component &&
      !t.loadComponent &&
      (i || t.loadChildren) &&
      t.outlet &&
      t.outlet !== _ &&
      (t.component = Pd),
    t
  );
}
var lr = new v(""),
  Ld = (() => {
    class e {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = m(gn));
      }
      loadComponent(t) {
        if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
        if (t._loadedComponent) return b(t._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(t);
        let n = Pt(t.loadComponent()).pipe(
            I(fa),
            W((o) => {
              this.onLoadEndListener && this.onLoadEndListener(t),
                (t._loadedComponent = o);
            }),
            ai(() => {
              this.componentLoaders.delete(t);
            }),
          ),
          r = new rn(n, () => new F()).pipe(nn());
        return this.componentLoaders.set(t, r), r;
      }
      loadChildren(t, n) {
        if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
        if (n._loadedRoutes)
          return b({ routes: n._loadedRoutes, injector: n._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(n);
        let o = Vd(n, this.compiler, t, this.onLoadEndListener).pipe(
            ai(() => {
              this.childrenLoaders.delete(n);
            }),
          ),
          a = new rn(o, () => new F()).pipe(nn());
        return this.childrenLoaders.set(n, a), a;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
function Vd(e, i, t, n) {
  return Pt(e.loadChildren()).pipe(
    I(fa),
    dt((r) =>
      r instanceof ao || Array.isArray(r) ? b(r) : ot(i.compileModuleAsync(r)),
    ),
    I((r) => {
      n && n(e);
      let o,
        a,
        c = !1;
      return (
        Array.isArray(r)
          ? ((a = r), (c = !0))
          : ((o = r.create(t).injector),
            (a = o.get(lr, [], { optional: !0, self: !0 }).flat())),
        { routes: a.map(dr), injector: o }
      );
    }),
  );
}
function jd(e) {
  return e && typeof e == "object" && "default" in e;
}
function fa(e) {
  return jd(e) ? e.default : e;
}
var ur = (() => {
    class e {
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: () => m(Ud), providedIn: "root" });
      }
    }
    return e;
  })(),
  Ud = (() => {
    class e {
      shouldProcessUrl(t) {
        return !0;
      }
      extract(t) {
        return t;
      }
      merge(t, n) {
        return t;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  zd = new v("");
var Bd = new v(""),
  Hd = (() => {
    class e {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new F()),
          (this.transitionAbortSubject = new F()),
          (this.configLoader = m(Ld)),
          (this.environmentInjector = m(di)),
          (this.urlSerializer = m(or)),
          (this.rootContexts = m(Vi)),
          (this.location = m(_i)),
          (this.inputBindingEnabled = m(sr, { optional: !0 }) !== null),
          (this.titleStrategy = m(pa)),
          (this.options = m(cr, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || "emptyOnly"),
          (this.urlHandlingStrategy = m(ur)),
          (this.createViewTransition = m(zd, { optional: !0 })),
          (this.navigationErrorHandler = m(Bd, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => b(void 0)),
          (this.rootComponentType = null);
        let t = (r) => this.events.next(new Bn(r)),
          n = (r) => this.events.next(new Hn(r));
        (this.configLoader.onLoadEndListener = n),
          (this.configLoader.onLoadStartListener = t);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(t) {
        let n = ++this.navigationId;
        this.transitions?.next(
          D(u(u({}, this.transitions.value), t), { id: n }),
        );
      }
      setupNavigations(t, n, r) {
        return (
          (this.transitions = new tt({
            id: 0,
            currentUrlTree: n,
            currentRawUrl: n,
            extractedUrl: this.urlHandlingStrategy.extract(n),
            urlAfterRedirects: this.urlHandlingStrategy.extract(n),
            rawUrl: n,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: Le,
            restoredState: null,
            currentSnapshot: r.snapshot,
            targetSnapshot: null,
            currentRouterState: r,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            xt((o) => o.id !== 0),
            I((o) =>
              D(u({}, o), {
                extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
              }),
            ),
            gt((o) => {
              let a = !1,
                c = !1;
              return b(o).pipe(
                gt((s) => {
                  if (this.navigationId > o.id)
                    return (
                      this.cancelNavigationTransition(
                        o,
                        "",
                        ct.SupersededByNewNavigation,
                      ),
                      ft
                    );
                  (this.currentTransition = o),
                    (this.currentNavigation = {
                      id: s.id,
                      initialUrl: s.rawUrl,
                      extractedUrl: s.extractedUrl,
                      targetBrowserUrl:
                        typeof s.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(s.extras.browserUrl)
                          : s.extras.browserUrl,
                      trigger: s.source,
                      extras: s.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? D(u({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let d =
                      !t.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    l = s.extras.onSameUrlNavigation ?? t.onSameUrlNavigation;
                  if (!d && l !== "reload") {
                    let h = "";
                    return (
                      this.events.next(
                        new Zt(
                          s.id,
                          this.urlSerializer.serialize(s.rawUrl),
                          h,
                          Ln.IgnoredSameUrlNavigation,
                        ),
                      ),
                      s.resolve(!1),
                      ft
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))
                    return b(s).pipe(
                      gt((h) => {
                        let w = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new Be(
                              h.id,
                              this.urlSerializer.serialize(h.extractedUrl),
                              h.source,
                              h.restoredState,
                            ),
                          ),
                          w !== this.transitions?.getValue()
                            ? ft
                            : Promise.resolve(h)
                        );
                      }),
                      Rd(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        t.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      W((h) => {
                        (o.targetSnapshot = h.targetSnapshot),
                          (o.urlAfterRedirects = h.urlAfterRedirects),
                          (this.currentNavigation = D(
                            u({}, this.currentNavigation),
                            { finalUrl: h.urlAfterRedirects },
                          ));
                        let w = new ki(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          this.urlSerializer.serialize(h.urlAfterRedirects),
                          h.targetSnapshot,
                        );
                        this.events.next(w);
                      }),
                    );
                  if (
                    d &&
                    this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)
                  ) {
                    let {
                        id: h,
                        extractedUrl: w,
                        source: G,
                        restoredState: A,
                        extras: k,
                      } = s,
                      K = new Be(h, this.urlSerializer.serialize(w), G, A);
                    this.events.next(K);
                    let Ft = na(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = o =
                        D(u({}, s), {
                          targetSnapshot: Ft,
                          urlAfterRedirects: w,
                          extras: D(u({}, k), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = w),
                      b(o)
                    );
                  } else {
                    let h = "";
                    return (
                      this.events.next(
                        new Zt(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          h,
                          Ln.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      s.resolve(!1),
                      ft
                    );
                  }
                }),
                W((s) => {
                  let d = new Vn(
                    s.id,
                    this.urlSerializer.serialize(s.extractedUrl),
                    this.urlSerializer.serialize(s.urlAfterRedirects),
                    s.targetSnapshot,
                  );
                  this.events.next(d);
                }),
                I(
                  (s) => (
                    (this.currentTransition = o =
                      D(u({}, s), {
                        guards: Kc(
                          s.targetSnapshot,
                          s.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    o
                  ),
                ),
                sd(this.environmentInjector, (s) => this.events.next(s)),
                W((s) => {
                  if (
                    ((o.guardsResult = s.guardsResult),
                    s.guardsResult && typeof s.guardsResult != "boolean")
                  )
                    throw Pi(this.urlSerializer, s.guardsResult);
                  let d = new jn(
                    s.id,
                    this.urlSerializer.serialize(s.extractedUrl),
                    this.urlSerializer.serialize(s.urlAfterRedirects),
                    s.targetSnapshot,
                    !!s.guardsResult,
                  );
                  this.events.next(d);
                }),
                xt((s) =>
                  s.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(s, "", ct.GuardRejected),
                      !1),
                ),
                kn((s) => {
                  if (s.guards.canActivateChecks.length)
                    return b(s).pipe(
                      W((d) => {
                        let l = new Un(
                          d.id,
                          this.urlSerializer.serialize(d.extractedUrl),
                          this.urlSerializer.serialize(d.urlAfterRedirects),
                          d.targetSnapshot,
                        );
                        this.events.next(l);
                      }),
                      gt((d) => {
                        let l = !1;
                        return b(d).pipe(
                          kd(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          W({
                            next: () => (l = !0),
                            complete: () => {
                              l ||
                                this.cancelNavigationTransition(
                                  d,
                                  "",
                                  ct.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      W((d) => {
                        let l = new zn(
                          d.id,
                          this.urlSerializer.serialize(d.extractedUrl),
                          this.urlSerializer.serialize(d.urlAfterRedirects),
                          d.targetSnapshot,
                        );
                        this.events.next(l);
                      }),
                    );
                }),
                kn((s) => {
                  let d = (l) => {
                    let h = [];
                    l.routeConfig?.loadComponent &&
                      !l.routeConfig._loadedComponent &&
                      h.push(
                        this.configLoader.loadComponent(l.routeConfig).pipe(
                          W((w) => {
                            l.component = w;
                          }),
                          I(() => {}),
                        ),
                      );
                    for (let w of l.children) h.push(...d(w));
                    return h;
                  };
                  return _e(d(s.targetSnapshot.root)).pipe(cn(null), wt(1));
                }),
                kn(() => this.afterPreactivation()),
                gt(() => {
                  let { currentSnapshot: s, targetSnapshot: d } = o,
                    l = this.createViewTransition?.(
                      this.environmentInjector,
                      s.root,
                      d.root,
                    );
                  return l ? ot(l).pipe(I(() => o)) : b(o);
                }),
                I((s) => {
                  let d = Gc(
                    t.routeReuseStrategy,
                    s.targetSnapshot,
                    s.currentRouterState,
                  );
                  return (
                    (this.currentTransition = o =
                      D(u({}, s), { targetRouterState: d })),
                    (this.currentNavigation.targetRouterState = d),
                    o
                  );
                }),
                W(() => {
                  this.events.next(new $e());
                }),
                Yc(
                  this.rootContexts,
                  t.routeReuseStrategy,
                  (s) => this.events.next(s),
                  this.inputBindingEnabled,
                ),
                wt(1),
                W({
                  next: (s) => {
                    (a = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new qt(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          this.urlSerializer.serialize(s.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        s.targetRouterState.snapshot,
                      ),
                      s.resolve(!0);
                  },
                  complete: () => {
                    a = !0;
                  },
                }),
                mt(
                  this.transitionAbortSubject.pipe(
                    W((s) => {
                      throw s;
                    }),
                  ),
                ),
                ai(() => {
                  !a &&
                    !c &&
                    this.cancelNavigationTransition(
                      o,
                      "",
                      ct.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === o.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                Jt((s) => {
                  if (((c = !0), ca(s)))
                    this.events.next(
                      new Rt(
                        o.id,
                        this.urlSerializer.serialize(o.extractedUrl),
                        s.message,
                        s.cancellationCode,
                      ),
                    ),
                      Zc(s)
                        ? this.events.next(
                            new se(s.url, s.navigationBehaviorOptions),
                          )
                        : o.resolve(!1);
                  else {
                    let d = new He(
                      o.id,
                      this.urlSerializer.serialize(o.extractedUrl),
                      s,
                      o.targetSnapshot ?? void 0,
                    );
                    try {
                      let l = Ct(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(d),
                      );
                      if (l instanceof We) {
                        let { message: h, cancellationCode: w } = Pi(
                          this.urlSerializer,
                          l,
                        );
                        this.events.next(
                          new Rt(
                            o.id,
                            this.urlSerializer.serialize(o.extractedUrl),
                            h,
                            w,
                          ),
                        ),
                          this.events.next(
                            new se(l.redirectTo, l.navigationBehaviorOptions),
                          );
                      } else {
                        this.events.next(d);
                        let h = t.errorHandler(s);
                        o.resolve(!!h);
                      }
                    } catch (l) {
                      this.options.resolveNavigationPromiseOnError
                        ? o.resolve(!1)
                        : o.reject(l);
                    }
                  }
                  return ft;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(t, n, r) {
        let o = new Rt(
          t.id,
          this.urlSerializer.serialize(t.extractedUrl),
          n,
          r,
        );
        this.events.next(o), t.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let t = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0)),
          ),
          n =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          t.toString() !== n?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
function $d(e) {
  return e !== Le;
}
var Gd = (() => {
    class e {
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: () => m(Wd), providedIn: "root" });
      }
    }
    return e;
  })(),
  rr = class {
    shouldDetach(i) {
      return !1;
    }
    store(i, t) {}
    shouldAttach(i) {
      return !1;
    }
    retrieve(i) {
      return null;
    }
    shouldReuseRoute(i, t) {
      return i.routeConfig === t.routeConfig;
    }
  },
  Wd = (() => {
    class e extends rr {
      static {
        this.ɵfac = (() => {
          let t;
          return function (r) {
            return (t || (t = li(e)))(r || e);
          };
        })();
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  ga = (() => {
    class e {
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: () => m(qd), providedIn: "root" });
      }
    }
    return e;
  })(),
  qd = (() => {
    class e extends ga {
      constructor() {
        super(...arguments),
          (this.location = m(_i)),
          (this.urlSerializer = m(or)),
          (this.options = m(cr, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = m(ur)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new kt()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = na(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(t) {
        return this.location.subscribe((n) => {
          n.type === "popstate" && t(n.url, n.state);
        });
      }
      handleRouterEvent(t, n) {
        if (t instanceof Be) this.stateMemento = this.createStateMemento();
        else if (t instanceof Zt) this.rawUrlTree = n.initialUrl;
        else if (t instanceof ki) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !n.extras.skipLocationChange
          ) {
            let r = this.urlHandlingStrategy.merge(n.finalUrl, n.initialUrl);
            this.setBrowserUrl(n.targetBrowserUrl ?? r, n);
          }
        } else
          t instanceof $e
            ? ((this.currentUrlTree = n.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                n.finalUrl,
                n.initialUrl,
              )),
              (this.routerState = n.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                !n.extras.skipLocationChange &&
                this.setBrowserUrl(n.targetBrowserUrl ?? this.rawUrlTree, n))
            : t instanceof Rt &&
                (t.code === ct.GuardRejected ||
                  t.code === ct.NoDataFromResolver)
              ? this.restoreHistory(n)
              : t instanceof He
                ? this.restoreHistory(n, !0)
                : t instanceof qt &&
                  ((this.lastSuccessfulId = t.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(t, n) {
        let r = t instanceof kt ? this.urlSerializer.serialize(t) : t;
        if (this.location.isCurrentPathEqualTo(r) || n.extras.replaceUrl) {
          let o = this.browserPageId,
            a = u(u({}, n.extras.state), this.generateNgRouterState(n.id, o));
          this.location.replaceState(r, "", a);
        } else {
          let o = u(
            u({}, n.extras.state),
            this.generateNgRouterState(n.id, this.browserPageId + 1),
          );
          this.location.go(r, "", o);
        }
      }
      restoreHistory(t, n = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let r = this.browserPageId,
            o = this.currentPageId - r;
          o !== 0
            ? this.location.historyGo(o)
            : this.currentUrlTree === t.finalUrl &&
              o === 0 &&
              (this.resetState(t), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (n && this.resetState(t), this.resetUrlToCurrentUrlTree());
      }
      resetState(t) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            t.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(t, n) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: t, ɵrouterPageId: n }
          : { navigationId: t };
      }
      static {
        this.ɵfac = (() => {
          let t;
          return function (r) {
            return (t || (t = li(e)))(r || e);
          };
        })();
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  Ne = (function (e) {
    return (
      (e[(e.COMPLETE = 0)] = "COMPLETE"),
      (e[(e.FAILED = 1)] = "FAILED"),
      (e[(e.REDIRECTING = 2)] = "REDIRECTING"),
      e
    );
  })(Ne || {});
function Zd(e, i) {
  e.events
    .pipe(
      xt(
        (t) =>
          t instanceof qt ||
          t instanceof Rt ||
          t instanceof He ||
          t instanceof Zt,
      ),
      I((t) =>
        t instanceof qt || t instanceof Zt
          ? Ne.COMPLETE
          : (
                t instanceof Rt
                  ? t.code === ct.Redirect ||
                    t.code === ct.SupersededByNewNavigation
                  : !1
              )
            ? Ne.REDIRECTING
            : Ne.FAILED,
      ),
      xt((t) => t !== Ne.REDIRECTING),
      wt(1),
    )
    .subscribe(() => {
      i();
    });
}
function Yd(e) {
  throw e;
}
var Kd = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  Qd = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  ba = (() => {
    class e {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.console = m(bi)),
          (this.stateManager = m(ga)),
          (this.options = m(cr, { optional: !0 }) || {}),
          (this.pendingTasks = m(Jr)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = m(Hd)),
          (this.urlSerializer = m(or)),
          (this.location = m(_i)),
          (this.urlHandlingStrategy = m(ur)),
          (this._events = new F()),
          (this.errorHandler = this.options.errorHandler || Yd),
          (this.navigated = !1),
          (this.routeReuseStrategy = m(Gd)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = m(lr, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!m(sr, { optional: !0 })),
          (this.eventsSubscription = new be()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (t) => {
                this.console.warn(t);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let t = this.navigationTransitions.events.subscribe((n) => {
          try {
            let r = this.navigationTransitions.currentTransition,
              o = this.navigationTransitions.currentNavigation;
            if (r !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(n, o),
                n instanceof Rt &&
                  n.code !== ct.Redirect &&
                  n.code !== ct.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (n instanceof qt) this.navigated = !0;
              else if (n instanceof se) {
                let a = n.navigationBehaviorOptions,
                  c = this.urlHandlingStrategy.merge(n.url, r.currentRawUrl),
                  s = u(
                    {
                      browserUrl: r.extras.browserUrl,
                      info: r.extras.info,
                      skipLocationChange: r.extras.skipLocationChange,
                      replaceUrl:
                        r.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        $d(r.source),
                    },
                    a,
                  );
                this.scheduleNavigation(c, Le, null, s, {
                  resolve: r.resolve,
                  reject: r.reject,
                  promise: r.promise,
                });
              }
            }
            Jd(n) && this._events.next(n);
          } catch (r) {
            this.navigationTransitions.transitionAbortSubject.next(r);
          }
        });
        this.eventsSubscription.add(t);
      }
      resetRootComponentType(t) {
        (this.routerState.root.component = t),
          (this.navigationTransitions.rootComponentType = t);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              Le,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (t, n) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(t, "popstate", n);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(t, n, r) {
        let o = { replaceUrl: !0 },
          a = r?.navigationId ? r : null;
        if (r) {
          let s = u({}, r);
          delete s.navigationId,
            delete s.ɵrouterPageId,
            Object.keys(s).length !== 0 && (o.state = s);
        }
        let c = this.parseUrl(t);
        this.scheduleNavigation(c, n, a, o);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(t) {
        (this.config = t.map(dr)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(t, n = {}) {
        let {
            relativeTo: r,
            queryParams: o,
            fragment: a,
            queryParamsHandling: c,
            preserveFragment: s,
          } = n,
          d = s ? this.currentUrlTree.fragment : a,
          l = null;
        switch (c ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            l = u(u({}, this.currentUrlTree.queryParams), o);
            break;
          case "preserve":
            l = this.currentUrlTree.queryParams;
            break;
          default:
            l = o || null;
        }
        l !== null && (l = this.removeEmptyProps(l));
        let h;
        try {
          let w = r ? r.snapshot : this.routerState.snapshot.root;
          h = Jo(w);
        } catch {
          (typeof t[0] != "string" || t[0][0] !== "/") && (t = []),
            (h = this.currentUrlTree.root);
        }
        return ta(h, t, l, d ?? null);
      }
      navigateByUrl(t, n = { skipLocationChange: !1 }) {
        let r = Ue(t) ? t : this.parseUrl(t),
          o = this.urlHandlingStrategy.merge(r, this.rawUrlTree);
        return this.scheduleNavigation(o, Le, null, n);
      }
      navigate(t, n = { skipLocationChange: !1 }) {
        return Xd(t), this.navigateByUrl(this.createUrlTree(t, n), n);
      }
      serializeUrl(t) {
        return this.urlSerializer.serialize(t);
      }
      parseUrl(t) {
        try {
          return this.urlSerializer.parse(t);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(t, n) {
        let r;
        if (
          (n === !0 ? (r = u({}, Kd)) : n === !1 ? (r = u({}, Qd)) : (r = n),
          Ue(t))
        )
          return Po(this.currentUrlTree, t, r);
        let o = this.parseUrl(t);
        return Po(this.currentUrlTree, o, r);
      }
      removeEmptyProps(t) {
        return Object.entries(t).reduce(
          (n, [r, o]) => (o != null && (n[r] = o), n),
          {},
        );
      }
      scheduleNavigation(t, n, r, o, a) {
        if (this.disposed) return Promise.resolve(!1);
        let c, s, d;
        a
          ? ((c = a.resolve), (s = a.reject), (d = a.promise))
          : (d = new Promise((h, w) => {
              (c = h), (s = w);
            }));
        let l = this.pendingTasks.add();
        return (
          Zd(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(l));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: n,
            restoredState: r,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: t,
            extras: o,
            resolve: c,
            reject: s,
            promise: d,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          d.catch((h) => Promise.reject(h))
        );
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
function Xd(e) {
  for (let i = 0; i < e.length; i++) if (e[i] == null) throw new T(4008, !1);
}
function Jd(e) {
  return !(e instanceof $e) && !(e instanceof se);
}
var tl = new v("");
function va(e, ...i) {
  return we([
    { provide: lr, multi: !0, useValue: e },
    [],
    { provide: ce, useFactory: el, deps: [ba] },
    { provide: po, multi: !0, useFactory: il },
    i.map((t) => t.ɵproviders),
  ]);
}
function el(e) {
  return e.routerState.root;
}
function il() {
  let e = m(te);
  return (i) => {
    let t = e.get(fn);
    if (i !== t.components[0]) return;
    let n = e.get(ba),
      r = e.get(nl);
    e.get(rl) === 1 && n.initialNavigation(),
      e.get(ol, null, un.Optional)?.setUpPreloading(),
      e.get(tl, null, un.Optional)?.init(),
      n.resetRootComponentType(t.componentTypes[0]),
      r.closed || (r.next(), r.complete(), r.unsubscribe());
  };
}
var nl = new v("", { factory: () => new F() }),
  rl = new v("", { providedIn: "root", factory: () => 1 });
var ol = new v("");
var _a = [];
var al = "@",
  sl = (() => {
    class e {
      constructor(t, n, r, o, a) {
        (this.doc = t),
          (this.delegate = n),
          (this.zone = r),
          (this.animationType = o),
          (this.moduleImpl = a),
          (this._rendererFactoryPromise = null),
          (this.scheduler = m(io, { optional: !0 })),
          (this.loadingSchedulerFn = m(cl, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        let t = () =>
            this.moduleImpl ?? import("./chunk-M22M5EAB.js").then((r) => r),
          n;
        return (
          this.loadingSchedulerFn
            ? (n = this.loadingSchedulerFn(t))
            : (n = t()),
          n
            .catch((r) => {
              throw new T(5300, !1);
            })
            .then(({ ɵcreateEngine: r, ɵAnimationRendererFactory: o }) => {
              this._engine = r(this.animationType, this.doc);
              let a = new o(this.delegate, this._engine, this.zone);
              return (this.delegate = a), a;
            })
        );
      }
      createRenderer(t, n) {
        let r = this.delegate.createRenderer(t, n);
        if (r.ɵtype === 0) return r;
        typeof r.throwOnSyntheticProps == "boolean" &&
          (r.throwOnSyntheticProps = !1);
        let o = new mr(r);
        return (
          n?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((a) => {
              let c = a.createRenderer(t, n);
              o.use(c), this.scheduler?.notify(10);
            })
            .catch((a) => {
              o.use(r);
            }),
          o
        );
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
      static {
        this.ɵfac = function (n) {
          Me();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  mr = class {
    constructor(i) {
      (this.delegate = i), (this.replay = []), (this.ɵtype = 1);
    }
    use(i) {
      if (((this.delegate = i), this.replay !== null)) {
        for (let t of this.replay) t(i);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(i, t) {
      return this.delegate.createElement(i, t);
    }
    createComment(i) {
      return this.delegate.createComment(i);
    }
    createText(i) {
      return this.delegate.createText(i);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(i, t) {
      this.delegate.appendChild(i, t);
    }
    insertBefore(i, t, n, r) {
      this.delegate.insertBefore(i, t, n, r);
    }
    removeChild(i, t, n) {
      this.delegate.removeChild(i, t, n);
    }
    selectRootElement(i, t) {
      return this.delegate.selectRootElement(i, t);
    }
    parentNode(i) {
      return this.delegate.parentNode(i);
    }
    nextSibling(i) {
      return this.delegate.nextSibling(i);
    }
    setAttribute(i, t, n, r) {
      this.delegate.setAttribute(i, t, n, r);
    }
    removeAttribute(i, t, n) {
      this.delegate.removeAttribute(i, t, n);
    }
    addClass(i, t) {
      this.delegate.addClass(i, t);
    }
    removeClass(i, t) {
      this.delegate.removeClass(i, t);
    }
    setStyle(i, t, n, r) {
      this.delegate.setStyle(i, t, n, r);
    }
    removeStyle(i, t, n) {
      this.delegate.removeStyle(i, t, n);
    }
    setProperty(i, t, n) {
      this.shouldReplay(t) && this.replay.push((r) => r.setProperty(i, t, n)),
        this.delegate.setProperty(i, t, n);
    }
    setValue(i, t) {
      this.delegate.setValue(i, t);
    }
    listen(i, t, n) {
      return (
        this.shouldReplay(t) && this.replay.push((r) => r.listen(i, t, n)),
        this.delegate.listen(i, t, n)
      );
    }
    shouldReplay(i) {
      return this.replay !== null && i.startsWith(al);
    }
  },
  cl = new v("");
function ya(e = "animations") {
  return (
    ro("NgAsyncAnimations"),
    we([
      {
        provide: mi,
        useFactory: (i, t, n) => new sl(i, t, n, e),
        deps: [O, wi, M],
      },
      {
        provide: ht,
        useValue: e === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var xa = { providers: [fo({ eventCoalescing: !0 }), va(_a), ya()] };
var pr;
try {
  pr = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  pr = !1;
}
var H = (() => {
  class e {
    constructor(t) {
      (this._platformId = t),
        (this.isBrowser = this._platformId
          ? wo(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || pr) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
    static {
      this.ɵfac = function (n) {
        return new (n || e)(f(Bt));
      };
    }
    static {
      this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var ue,
  wa = [
    "color",
    "button",
    "checkbox",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];
function fr() {
  if (ue) return ue;
  if (typeof document != "object" || !document) return (ue = new Set(wa)), ue;
  let e = document.createElement("input");
  return (
    (ue = new Set(wa.filter((i) => (e.setAttribute("type", i), e.type === i)))),
    ue
  );
}
var Xe;
function dl() {
  if (Xe == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (Xe = !0) }),
      );
    } finally {
      Xe = Xe || !1;
    }
  return Xe;
}
function Lt(e) {
  return dl() ? e : !!e.capture;
}
var hr;
function ll() {
  if (hr == null) {
    let e = typeof document < "u" ? document.head : null;
    hr = !!(e && (e.createShadowRoot || e.attachShadow));
  }
  return hr;
}
function Ca(e) {
  if (ll()) {
    let i = e.getRootNode ? e.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && i instanceof ShadowRoot)
      return i;
  }
  return null;
}
function Tt(e) {
  return e.composedPath ? e.composedPath()[0] : e.target;
}
function Ia() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function Kt(e) {
  return e != null && `${e}` != "false";
}
function gr(e) {
  return Array.isArray(e) ? e : [e];
}
function yt(e) {
  return e instanceof P ? e.nativeElement : e;
}
var ul = (() => {
  class e {
    create(t) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(t);
    }
    static {
      this.ɵfac = function (n) {
        return new (n || e)();
      };
    }
    static {
      this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var Ma = (() => {
  class e {
    static {
      this.ɵfac = function (n) {
        return new (n || e)();
      };
    }
    static {
      this.ɵmod = R({ type: e });
    }
    static {
      this.ɵinj = S({ providers: [ul] });
    }
  }
  return e;
})();
var Ea = new Set(),
  Qt,
  ml = (() => {
    class e {
      constructor(t, n) {
        (this._platform = t),
          (this._nonce = n),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : pl);
      }
      matchMedia(t) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && hl(t, this._nonce),
          this._matchMedia(t)
        );
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(H), f(Ce, 8));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
function hl(e, i) {
  if (!Ea.has(e))
    try {
      Qt ||
        ((Qt = document.createElement("style")),
        i && Qt.setAttribute("nonce", i),
        Qt.setAttribute("type", "text/css"),
        document.head.appendChild(Qt)),
        Qt.sheet &&
          (Qt.sheet.insertRule(`@media ${e} {body{ }}`, 0), Ea.add(e));
    } catch (t) {
      console.error(t);
    }
}
function pl(e) {
  return {
    matches: e === "all" || e === "",
    media: e,
    addListener: () => {},
    removeListener: () => {},
  };
}
var Aa = (() => {
  class e {
    constructor(t, n) {
      (this._mediaMatcher = t),
        (this._zone = n),
        (this._queries = new Map()),
        (this._destroySubject = new F());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(t) {
      return Da(gr(t)).some((r) => this._registerQuery(r).mql.matches);
    }
    observe(t) {
      let r = Da(gr(t)).map((a) => this._registerQuery(a).observable),
        o = _e(r);
      return (
        (o = oi(o.pipe(wt(1)), o.pipe(si(1), sn(0)))),
        o.pipe(
          I((a) => {
            let c = { matches: !1, breakpoints: {} };
            return (
              a.forEach(({ matches: s, query: d }) => {
                (c.matches = c.matches || s), (c.breakpoints[d] = s);
              }),
              c
            );
          }),
        )
      );
    }
    _registerQuery(t) {
      if (this._queries.has(t)) return this._queries.get(t);
      let n = this._mediaMatcher.matchMedia(t),
        o = {
          observable: new ri((a) => {
            let c = (s) => this._zone.run(() => a.next(s));
            return (
              n.addListener(c),
              () => {
                n.removeListener(c);
              }
            );
          }).pipe(
            ci(n),
            I(({ matches: a }) => ({ query: t, matches: a })),
            mt(this._destroySubject),
          ),
          mql: n,
        };
      return this._queries.set(t, o), o;
    }
    static {
      this.ɵfac = function (n) {
        return new (n || e)(f(ml), f(M));
      };
    }
    static {
      this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function Da(e) {
  return e
    .map((i) => i.split(","))
    .reduce((i, t) => i.concat(t))
    .map((i) => i.trim());
}
function vr(e) {
  return e.buttons === 0 || e.detail === 0;
}
function _r(e) {
  let i =
    (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
  return (
    !!i &&
    i.identifier === -1 &&
    (i.radiusX == null || i.radiusX === 1) &&
    (i.radiusY == null || i.radiusY === 1)
  );
}
var fl = new v("cdk-input-modality-detector-options"),
  gl = { ignoreKeys: [18, 17, 224, 91, 16] },
  ka = 650,
  me = Lt({ passive: !0, capture: !0 }),
  bl = (() => {
    class e {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(t, n, r, o) {
        (this._platform = t),
          (this._mostRecentTarget = null),
          (this._modality = new tt(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (a) => {
            this._options?.ignoreKeys?.some((c) => c === a.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = Tt(a)));
          }),
          (this._onMousedown = (a) => {
            Date.now() - this._lastTouchMs < ka ||
              (this._modality.next(vr(a) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = Tt(a)));
          }),
          (this._onTouchstart = (a) => {
            if (_r(a)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = Tt(a));
          }),
          (this._options = u(u({}, gl), o)),
          (this.modalityDetected = this._modality.pipe(si(1))),
          (this.modalityChanged = this.modalityDetected.pipe($r())),
          t.isBrowser &&
            n.runOutsideAngular(() => {
              r.addEventListener("keydown", this._onKeydown, me),
                r.addEventListener("mousedown", this._onMousedown, me),
                r.addEventListener("touchstart", this._onTouchstart, me);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, me),
            document.removeEventListener("mousedown", this._onMousedown, me),
            document.removeEventListener("touchstart", this._onTouchstart, me));
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(H), f(M), f(O), f(fl, 8));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var zi = (function (e) {
    return (
      (e[(e.IMMEDIATE = 0)] = "IMMEDIATE"),
      (e[(e.EVENTUAL = 1)] = "EVENTUAL"),
      e
    );
  })(zi || {}),
  vl = new v("cdk-focus-monitor-default-options"),
  Ui = Lt({ passive: !0, capture: !0 }),
  Ta = (() => {
    class e {
      constructor(t, n, r, o, a) {
        (this._ngZone = t),
          (this._platform = n),
          (this._inputModalityDetector = r),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1),
              ));
          }),
          (this._stopInputModalityDetector = new F()),
          (this._rootNodeFocusAndBlurListener = (c) => {
            let s = Tt(c);
            for (let d = s; d; d = d.parentElement)
              c.type === "focus" ? this._onFocus(c, d) : this._onBlur(c, d);
          }),
          (this._document = o),
          (this._detectionMode = a?.detectionMode || zi.IMMEDIATE);
      }
      monitor(t, n = !1) {
        let r = yt(t);
        if (!this._platform.isBrowser || r.nodeType !== 1) return b();
        let o = Ca(r) || this._getDocument(),
          a = this._elementInfo.get(r);
        if (a) return n && (a.checkChildren = !0), a.subject;
        let c = { checkChildren: n, subject: new F(), rootNode: o };
        return (
          this._elementInfo.set(r, c),
          this._registerGlobalListeners(c),
          c.subject
        );
      }
      stopMonitoring(t) {
        let n = yt(t),
          r = this._elementInfo.get(n);
        r &&
          (r.subject.complete(),
          this._setClasses(n),
          this._elementInfo.delete(n),
          this._removeGlobalListeners(r));
      }
      focusVia(t, n, r) {
        let o = yt(t),
          a = this._getDocument().activeElement;
        o === a
          ? this._getClosestElementsInfo(o).forEach(([c, s]) =>
              this._originChanged(c, n, s),
            )
          : (this._setOrigin(n), typeof o.focus == "function" && o.focus(r));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((t, n) => this.stopMonitoring(n));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(t) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(t)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
            ? this._lastFocusOrigin
            : t && this._isLastInteractionFromInputLabel(t)
              ? "mouse"
              : "program";
      }
      _shouldBeAttributedToTouch(t) {
        return (
          this._detectionMode === zi.EVENTUAL ||
          !!t?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(t, n) {
        t.classList.toggle("cdk-focused", !!n),
          t.classList.toggle("cdk-touch-focused", n === "touch"),
          t.classList.toggle("cdk-keyboard-focused", n === "keyboard"),
          t.classList.toggle("cdk-mouse-focused", n === "mouse"),
          t.classList.toggle("cdk-program-focused", n === "program");
      }
      _setOrigin(t, n = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = t),
            (this._originFromTouchInteraction = t === "touch" && n),
            this._detectionMode === zi.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let r = this._originFromTouchInteraction ? ka : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), r);
          }
        });
      }
      _onFocus(t, n) {
        let r = this._elementInfo.get(n),
          o = Tt(t);
        !r ||
          (!r.checkChildren && n !== o) ||
          this._originChanged(n, this._getFocusOrigin(o), r);
      }
      _onBlur(t, n) {
        let r = this._elementInfo.get(n);
        !r ||
          (r.checkChildren &&
            t.relatedTarget instanceof Node &&
            n.contains(t.relatedTarget)) ||
          (this._setClasses(n), this._emitOrigin(r, null));
      }
      _emitOrigin(t, n) {
        t.subject.observers.length && this._ngZone.run(() => t.subject.next(n));
      }
      _registerGlobalListeners(t) {
        if (!this._platform.isBrowser) return;
        let n = t.rootNode,
          r = this._rootNodeFocusListenerCount.get(n) || 0;
        r ||
          this._ngZone.runOutsideAngular(() => {
            n.addEventListener("focus", this._rootNodeFocusAndBlurListener, Ui),
              n.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Ui,
              );
          }),
          this._rootNodeFocusListenerCount.set(n, r + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener,
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(mt(this._stopInputModalityDetector))
              .subscribe((o) => {
                this._setOrigin(o, !0);
              }));
      }
      _removeGlobalListeners(t) {
        let n = t.rootNode;
        if (this._rootNodeFocusListenerCount.has(n)) {
          let r = this._rootNodeFocusListenerCount.get(n);
          r > 1
            ? this._rootNodeFocusListenerCount.set(n, r - 1)
            : (n.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                Ui,
              ),
              n.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Ui,
              ),
              this._rootNodeFocusListenerCount.delete(n));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener,
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(t, n, r) {
        this._setClasses(t, n),
          this._emitOrigin(r, n),
          (this._lastFocusOrigin = n);
      }
      _getClosestElementsInfo(t) {
        let n = [];
        return (
          this._elementInfo.forEach((r, o) => {
            (o === t || (r.checkChildren && o.contains(t))) && n.push([o, r]);
          }),
          n
        );
      }
      _isLastInteractionFromInputLabel(t) {
        let { _mostRecentTarget: n, mostRecentModality: r } =
          this._inputModalityDetector;
        if (
          r !== "mouse" ||
          !n ||
          n === t ||
          (t.nodeName !== "INPUT" && t.nodeName !== "TEXTAREA") ||
          t.disabled
        )
          return !1;
        let o = t.labels;
        if (o) {
          for (let a = 0; a < o.length; a++) if (o[a].contains(n)) return !0;
        }
        return !1;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(M), f(H), f(bl), f(O, 8), f(vl, 8));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var Xt = (function (e) {
    return (
      (e[(e.NONE = 0)] = "NONE"),
      (e[(e.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (e[(e.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      e
    );
  })(Xt || {}),
  Sa = "cdk-high-contrast-black-on-white",
  Ra = "cdk-high-contrast-white-on-black",
  br = "cdk-high-contrast-active",
  Fa = (() => {
    class e {
      constructor(t, n) {
        (this._platform = t),
          (this._document = n),
          (this._breakpointSubscription = m(Aa)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return Xt.NONE;
        let t = this._document.createElement("div");
        (t.style.backgroundColor = "rgb(1,2,3)"),
          (t.style.position = "absolute"),
          this._document.body.appendChild(t);
        let n = this._document.defaultView || window,
          r = n && n.getComputedStyle ? n.getComputedStyle(t) : null,
          o = ((r && r.backgroundColor) || "").replace(/ /g, "");
        switch ((t.remove(), o)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return Xt.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return Xt.BLACK_ON_WHITE;
        }
        return Xt.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let t = this._document.body.classList;
          t.remove(br, Sa, Ra), (this._hasCheckedHighContrastMode = !0);
          let n = this.getHighContrastMode();
          n === Xt.BLACK_ON_WHITE
            ? t.add(br, Sa)
            : n === Xt.WHITE_ON_BLACK && t.add(br, Ra);
        }
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(H), f(O));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var yl = new v("cdk-dir-doc", { providedIn: "root", factory: xl });
function xl() {
  return m(O);
}
var wl =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function Cl(e) {
  let i = e?.toLowerCase() || "";
  return i === "auto" && typeof navigator < "u" && navigator?.language
    ? wl.test(navigator.language)
      ? "rtl"
      : "ltr"
    : i === "rtl"
      ? "rtl"
      : "ltr";
}
var Oa = (() => {
  class e {
    constructor(t) {
      if (((this.value = "ltr"), (this.change = new it()), t)) {
        let n = t.body ? t.body.dir : null,
          r = t.documentElement ? t.documentElement.dir : null;
        this.value = Cl(n || r || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static {
      this.ɵfac = function (n) {
        return new (n || e)(f(yl, 8));
      };
    }
    static {
      this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var yr = (() => {
  class e {
    static {
      this.ɵfac = function (n) {
        return new (n || e)();
      };
    }
    static {
      this.ɵmod = R({ type: e });
    }
    static {
      this.ɵinj = S({});
    }
  }
  return e;
})();
function El() {
  return !0;
}
var Dl = new v("mat-sanity-checks", { providedIn: "root", factory: El }),
  Q = (() => {
    class e {
      constructor(t, n, r) {
        (this._sanityChecks = n),
          (this._document = r),
          (this._hasDoneGlobalChecks = !1),
          t._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(t) {
        return Ia()
          ? !1
          : typeof this._sanityChecks == "boolean"
            ? this._sanityChecks
            : !!this._sanityChecks[t];
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(Fa), f(Dl, 8), f(O));
        };
      }
      static {
        this.ɵmod = R({ type: e });
      }
      static {
        this.ɵinj = S({ imports: [yr, yr] });
      }
    }
    return e;
  })();
var Hi = class {
  constructor(i, t, n, r, o) {
    (this._defaultMatcher = i),
      (this.ngControl = t),
      (this._parentFormGroup = n),
      (this._parentForm = r),
      (this._stateChanges = o),
      (this.errorState = !1);
  }
  updateErrorState() {
    let i = this.errorState,
      t = this._parentFormGroup || this._parentForm,
      n = this.matcher || this._defaultMatcher,
      r = this.ngControl ? this.ngControl.control : null,
      o = n?.isErrorState(r, t) ?? !1;
    o !== i && ((this.errorState = o), this._stateChanges.next());
  }
};
var Ha = (() => {
  class e {
    isErrorState(t, n) {
      return !!(t && t.invalid && (t.touched || (n && n.submitted)));
    }
    static {
      this.ɵfac = function (n) {
        return new (n || e)();
      };
    }
    static {
      this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var ut = (function (e) {
    return (
      (e[(e.FADING_IN = 0)] = "FADING_IN"),
      (e[(e.VISIBLE = 1)] = "VISIBLE"),
      (e[(e.FADING_OUT = 2)] = "FADING_OUT"),
      (e[(e.HIDDEN = 3)] = "HIDDEN"),
      e
    );
  })(ut || {}),
  Cr = class {
    constructor(i, t, n, r = !1) {
      (this._renderer = i),
        (this.element = t),
        (this.config = n),
        (this._animationForciblyDisabledThroughCss = r),
        (this.state = ut.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  Na = Lt({ passive: !0, capture: !0 }),
  Ir = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (i) => {
          let t = Tt(i);
          t &&
            this._events.get(i.type)?.forEach((n, r) => {
              (r === t || r.contains(t)) && n.forEach((o) => o.handleEvent(i));
            });
        });
    }
    addHandler(i, t, n, r) {
      let o = this._events.get(t);
      if (o) {
        let a = o.get(n);
        a ? a.add(r) : o.set(n, new Set([r]));
      } else
        this._events.set(t, new Map([[n, new Set([r])]])),
          i.runOutsideAngular(() => {
            document.addEventListener(t, this._delegateEventHandler, Na);
          });
    }
    removeHandler(i, t, n) {
      let r = this._events.get(i);
      if (!r) return;
      let o = r.get(t);
      o &&
        (o.delete(n),
        o.size === 0 && r.delete(t),
        r.size === 0 &&
          (this._events.delete(i),
          document.removeEventListener(i, this._delegateEventHandler, Na)));
    }
  },
  Pa = { enterDuration: 225, exitDuration: 150 },
  Al = 800,
  La = Lt({ passive: !0, capture: !0 }),
  Va = ["mousedown", "touchstart"],
  ja = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  Mr = class e {
    static {
      this._eventManager = new Ir();
    }
    constructor(i, t, n, r) {
      (this._target = i),
        (this._ngZone = t),
        (this._platform = r),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        r.isBrowser && (this._containerElement = yt(n));
    }
    fadeInRipple(i, t, n = {}) {
      let r = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        o = u(u({}, Pa), n.animation);
      n.centered && ((i = r.left + r.width / 2), (t = r.top + r.height / 2));
      let a = n.radius || Sl(i, t, r),
        c = i - r.left,
        s = t - r.top,
        d = o.enterDuration,
        l = document.createElement("div");
      l.classList.add("mat-ripple-element"),
        (l.style.left = `${c - a}px`),
        (l.style.top = `${s - a}px`),
        (l.style.height = `${a * 2}px`),
        (l.style.width = `${a * 2}px`),
        n.color != null && (l.style.backgroundColor = n.color),
        (l.style.transitionDuration = `${d}ms`),
        this._containerElement.appendChild(l);
      let h = window.getComputedStyle(l),
        w = h.transitionProperty,
        G = h.transitionDuration,
        A =
          w === "none" ||
          G === "0s" ||
          G === "0s, 0s" ||
          (r.width === 0 && r.height === 0),
        k = new Cr(this, l, n, A);
      (l.style.transform = "scale3d(1, 1, 1)"),
        (k.state = ut.FADING_IN),
        n.persistent || (this._mostRecentTransientRipple = k);
      let K = null;
      return (
        !A &&
          (d || o.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let Ft = () => {
                K && (K.fallbackTimer = null),
                  clearTimeout(Ut),
                  this._finishRippleTransition(k);
              },
              ge = () => this._destroyRipple(k),
              Ut = setTimeout(ge, d + 100);
            l.addEventListener("transitionend", Ft),
              l.addEventListener("transitioncancel", ge),
              (K = {
                onTransitionEnd: Ft,
                onTransitionCancel: ge,
                fallbackTimer: Ut,
              });
          }),
        this._activeRipples.set(k, K),
        (A || !d) && this._finishRippleTransition(k),
        k
      );
    }
    fadeOutRipple(i) {
      if (i.state === ut.FADING_OUT || i.state === ut.HIDDEN) return;
      let t = i.element,
        n = u(u({}, Pa), i.config.animation);
      (t.style.transitionDuration = `${n.exitDuration}ms`),
        (t.style.opacity = "0"),
        (i.state = ut.FADING_OUT),
        (i._animationForciblyDisabledThroughCss || !n.exitDuration) &&
          this._finishRippleTransition(i);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((i) => i.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((i) => {
        i.config.persistent || i.fadeOut();
      });
    }
    setupTriggerEvents(i) {
      let t = yt(i);
      !this._platform.isBrowser ||
        !t ||
        t === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = t),
        Va.forEach((n) => {
          e._eventManager.addHandler(this._ngZone, n, t, this);
        }));
    }
    handleEvent(i) {
      i.type === "mousedown"
        ? this._onMousedown(i)
        : i.type === "touchstart"
          ? this._onTouchStart(i)
          : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            ja.forEach((t) => {
              this._triggerElement.addEventListener(t, this, La);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(i) {
      i.state === ut.FADING_IN
        ? this._startFadeOutTransition(i)
        : i.state === ut.FADING_OUT && this._destroyRipple(i);
    }
    _startFadeOutTransition(i) {
      let t = i === this._mostRecentTransientRipple,
        { persistent: n } = i.config;
      (i.state = ut.VISIBLE), !n && (!t || !this._isPointerDown) && i.fadeOut();
    }
    _destroyRipple(i) {
      let t = this._activeRipples.get(i) ?? null;
      this._activeRipples.delete(i),
        this._activeRipples.size || (this._containerRect = null),
        i === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (i.state = ut.HIDDEN),
        t !== null &&
          (i.element.removeEventListener("transitionend", t.onTransitionEnd),
          i.element.removeEventListener(
            "transitioncancel",
            t.onTransitionCancel,
          ),
          t.fallbackTimer !== null && clearTimeout(t.fallbackTimer)),
        i.element.remove();
    }
    _onMousedown(i) {
      let t = vr(i),
        n =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + Al;
      !this._target.rippleDisabled &&
        !t &&
        !n &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(i.clientX, i.clientY, this._target.rippleConfig));
    }
    _onTouchStart(i) {
      if (!this._target.rippleDisabled && !_r(i)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let t = i.changedTouches;
        if (t)
          for (let n = 0; n < t.length; n++)
            this.fadeInRipple(
              t[n].clientX,
              t[n].clientY,
              this._target.rippleConfig,
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((i) => {
          let t =
            i.state === ut.VISIBLE ||
            (i.config.terminateOnPointerUp && i.state === ut.FADING_IN);
          !i.config.persistent && t && i.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let i = this._triggerElement;
      i &&
        (Va.forEach((t) => e._eventManager.removeHandler(t, i, this)),
        this._pointerUpEventsRegistered &&
          (ja.forEach((t) => i.removeEventListener(t, this, La)),
          (this._pointerUpEventsRegistered = !1)));
    }
  };
function Sl(e, i, t) {
  let n = Math.max(Math.abs(e - t.left), Math.abs(e - t.right)),
    r = Math.max(Math.abs(i - t.top), Math.abs(i - t.bottom));
  return Math.sqrt(n * n + r * r);
}
var $a = new v("mat-ripple-global-options"),
  Rl = (() => {
    class e {
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        t && this.fadeOutAllNonPersistent(),
          (this._disabled = t),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(t) {
        (this._trigger = t), this._setupTriggerEventsIfEnabled();
      }
      constructor(t, n, r, o, a) {
        (this._elementRef = t),
          (this._animationMode = a),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = o || {}),
          (this._rippleRenderer = new Mr(this, n, t, r));
      }
      ngOnInit() {
        (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: u(
            u(
              u({}, this._globalOptions.animation),
              this._animationMode === "NoopAnimations"
                ? { enterDuration: 0, exitDuration: 0 }
                : {},
            ),
            this.animation,
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled &&
          this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(t, n = 0, r) {
        return typeof t == "number"
          ? this._rippleRenderer.fadeInRipple(
              t,
              n,
              u(u({}, this.rippleConfig), r),
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              u(u({}, this.rippleConfig), t),
            );
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(p(P), p(M), p(H), p($a, 8), p(ht, 8));
        };
      }
      static {
        this.ɵdir = N({
          type: e,
          selectors: [
            ["", "mat-ripple", ""],
            ["", "matRipple", ""],
          ],
          hostAttrs: [1, "mat-ripple"],
          hostVars: 2,
          hostBindings: function (n, r) {
            n & 2 && j("mat-ripple-unbounded", r.unbounded);
          },
          inputs: {
            color: [0, "matRippleColor", "color"],
            unbounded: [0, "matRippleUnbounded", "unbounded"],
            centered: [0, "matRippleCentered", "centered"],
            radius: [0, "matRippleRadius", "radius"],
            animation: [0, "matRippleAnimation", "animation"],
            disabled: [0, "matRippleDisabled", "disabled"],
            trigger: [0, "matRippleTrigger", "trigger"],
          },
          exportAs: ["matRipple"],
          standalone: !0,
        });
      }
    }
    return e;
  })(),
  Ga = (() => {
    class e {
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵmod = R({ type: e });
      }
      static {
        this.ɵinj = S({ imports: [Q, Q] });
      }
    }
    return e;
  })();
var Ua = { capture: !0 },
  za = ["focus", "mousedown", "mouseenter", "touchstart"],
  xr = "mat-ripple-loader-uninitialized",
  wr = "mat-ripple-loader-class-name",
  Ba = "mat-ripple-loader-centered",
  Bi = "mat-ripple-loader-disabled",
  Wa = (() => {
    class e {
      constructor() {
        (this._document = m(O, { optional: !0 })),
          (this._animationMode = m(ht, { optional: !0 })),
          (this._globalRippleOptions = m($a, { optional: !0 })),
          (this._platform = m(H)),
          (this._ngZone = m(M)),
          (this._hosts = new Map()),
          (this._onInteraction = (t) => {
            let n = Tt(t);
            if (n instanceof HTMLElement) {
              let r = n.closest(
                `[${xr}="${this._globalRippleOptions?.namespace ?? ""}"]`,
              );
              r && this._createRipple(r);
            }
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let t of za)
              this._document?.addEventListener(t, this._onInteraction, Ua);
          });
      }
      ngOnDestroy() {
        let t = this._hosts.keys();
        for (let n of t) this.destroyRipple(n);
        for (let n of za)
          this._document?.removeEventListener(n, this._onInteraction, Ua);
      }
      configureRipple(t, n) {
        t.setAttribute(xr, this._globalRippleOptions?.namespace ?? ""),
          (n.className || !t.hasAttribute(wr)) &&
            t.setAttribute(wr, n.className || ""),
          n.centered && t.setAttribute(Ba, ""),
          n.disabled && t.setAttribute(Bi, "");
      }
      getRipple(t) {
        return this._hosts.get(t) || this._createRipple(t);
      }
      setDisabled(t, n) {
        let r = this._hosts.get(t);
        if (r) {
          r.disabled = n;
          return;
        }
        n ? t.setAttribute(Bi, "") : t.removeAttribute(Bi);
      }
      _createRipple(t) {
        if (!this._document) return;
        let n = this._hosts.get(t);
        if (n) return n;
        t.querySelector(".mat-ripple")?.remove();
        let r = this._document.createElement("span");
        r.classList.add("mat-ripple", t.getAttribute(wr)), t.append(r);
        let o = new Rl(
          new P(r),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0,
        );
        return (
          (o._isInitialized = !0),
          (o.trigger = t),
          (o.centered = t.hasAttribute(Ba)),
          (o.disabled = t.hasAttribute(Bi)),
          this.attachRipple(t, o),
          o
        );
      }
      attachRipple(t, n) {
        t.removeAttribute(xr), this._hosts.set(t, n);
      }
      destroyRipple(t) {
        let n = this._hosts.get(t);
        n && (n.ngOnDestroy(), this._hosts.delete(t));
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var Tl = ["mat-button", ""],
  Fl = [
    [
      ["", 8, "material-icons", 3, "iconPositionEnd", ""],
      ["mat-icon", 3, "iconPositionEnd", ""],
      ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
    ],
    "*",
    [
      ["", "iconPositionEnd", "", 8, "material-icons"],
      ["mat-icon", "iconPositionEnd", ""],
      ["", "matButtonIcon", "", "iconPositionEnd", ""],
    ],
  ],
  Ol = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ];
var Nl = new v("MAT_BUTTON_CONFIG");
var Pl = [
    { attribute: "mat-button", mdcClasses: ["mdc-button", "mat-mdc-button"] },
    {
      attribute: "mat-flat-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--unelevated",
        "mat-mdc-unelevated-button",
      ],
    },
    {
      attribute: "mat-raised-button",
      mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"],
    },
    {
      attribute: "mat-stroked-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--outlined",
        "mat-mdc-outlined-button",
      ],
    },
    {
      attribute: "mat-fab",
      mdcClasses: ["mdc-fab", "mat-mdc-fab-base", "mat-mdc-fab"],
    },
    {
      attribute: "mat-mini-fab",
      mdcClasses: [
        "mdc-fab",
        "mat-mdc-fab-base",
        "mdc-fab--mini",
        "mat-mdc-mini-fab",
      ],
    },
    {
      attribute: "mat-icon-button",
      mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
    },
  ],
  Ll = (() => {
    class e {
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(t) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, t);
      }
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(t) {
        (this._disableRipple = t), this._updateRippleDisabled();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        (this._disabled = t), this._updateRippleDisabled();
      }
      constructor(t, n, r, o) {
        (this._elementRef = t),
          (this._platform = n),
          (this._ngZone = r),
          (this._animationMode = o),
          (this._focusMonitor = m(Ta)),
          (this._rippleLoader = m(Wa)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let a = m(Nl, { optional: !0 }),
          c = t.nativeElement,
          s = c.classList;
        (this.disabledInteractive = a?.disabledInteractive ?? !1),
          (this.color = a?.color ?? null),
          this._rippleLoader?.configureRipple(c, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: d, mdcClasses: l } of Pl)
          c.hasAttribute(d) && s.add(...l);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(t = "program", n) {
        t
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, t, n)
          : this._elementRef.nativeElement.focus(n);
      }
      _getAriaDisabled() {
        return this.ariaDisabled != null
          ? this.ariaDisabled
          : this.disabled && this.disabledInteractive
            ? !0
            : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : !0;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled,
        );
      }
      static {
        this.ɵfac = function (n) {
          Me();
        };
      }
      static {
        this.ɵdir = N({
          type: e,
          inputs: {
            color: "color",
            disableRipple: [2, "disableRipple", "disableRipple", Et],
            disabled: [2, "disabled", "disabled", Et],
            ariaDisabled: [2, "aria-disabled", "ariaDisabled", Et],
            disabledInteractive: [
              2,
              "disabledInteractive",
              "disabledInteractive",
              Et,
            ],
          },
          features: [It],
        });
      }
    }
    return e;
  })();
var qa = (() => {
  class e extends Ll {
    constructor(t, n, r, o) {
      super(t, n, r, o);
    }
    static {
      this.ɵfac = function (n) {
        return new (n || e)(p(P), p(H), p(M), p(ht, 8));
      };
    }
    static {
      this.ɵcmp = et({
        type: e,
        selectors: [
          ["button", "mat-button", ""],
          ["button", "mat-raised-button", ""],
          ["button", "mat-flat-button", ""],
          ["button", "mat-stroked-button", ""],
        ],
        hostVars: 14,
        hostBindings: function (n, r) {
          n & 2 &&
            (q("disabled", r._getDisabledAttribute())(
              "aria-disabled",
              r._getAriaDisabled(),
            ),
            pi(r.color ? "mat-" + r.color : ""),
            j("mat-mdc-button-disabled", r.disabled)(
              "mat-mdc-button-disabled-interactive",
              r.disabledInteractive,
            )("_mat-animation-noopable", r._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !r.color,
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton"],
        standalone: !0,
        features: [Ee, rt],
        attrs: Tl,
        ngContentSelectors: Ol,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (n, r) {
          n & 1 &&
            (Nt(Fl),
            U(0, "span", 0),
            $(1),
            y(2, "span", 1),
            $(3, 1),
            x(),
            $(4, 2),
            U(5, "span", 2)(6, "span", 3)),
            n & 2 &&
              j("mdc-button__ripple", !r._isFab)("mdc-fab__ripple", r._isFab);
        },
        styles: [
          '.mat-mdc-button-base{text-decoration:none}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-text-button-horizontal-padding, 8px);height:var(--mdc-text-button-container-height);font-family:var(--mdc-text-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-text-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-text-button-label-text-transform);font-weight:var(--mdc-text-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, var(--mat-app-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-filled-button-horizontal-padding, 16px);height:var(--mdc-filled-button-container-height);font-family:var(--mdc-filled-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-filled-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-filled-button-label-text-transform);font-weight:var(--mdc-filled-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color, var(--mat-app-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, var(--mat-app-on-primary));background-color:var(--mdc-filled-button-container-color, var(--mat-app-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow, var(--mat-app-level1));height:var(--mdc-protected-button-container-height);font-family:var(--mdc-protected-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-protected-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-protected-button-label-text-transform);font-weight:var(--mdc-protected-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, var(--mat-app-primary));background-color:var(--mdc-protected-button-container-color, var(--mat-app-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow, var(--mat-app-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow, var(--mat-app-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-outlined-button-horizontal-padding, 15px);height:var(--mdc-outlined-button-container-height);font-family:var(--mdc-outlined-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-outlined-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-outlined-button-label-text-transform);font-weight:var(--mdc-outlined-button-label-text-weight, var(--mat-app-label-large-weight));border-radius:var(--mdc-outlined-button-container-shape, var(--mat-app-corner-full));border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, var(--mat-app-primary));border-color:var(--mdc-outlined-button-outline-color, var(--mat-app-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button .mdc-button__ripple{border-width:var(--mdc-outlined-button-outline-width);border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
          ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
  }
  return e;
})();
var Za = (() => {
  class e {
    static {
      this.ɵfac = function (n) {
        return new (n || e)();
      };
    }
    static {
      this.ɵmod = R({ type: e });
    }
    static {
      this.ɵinj = S({ imports: [Q, Ga, Q] });
    }
  }
  return e;
})();
var jl = ["*"];
var Ul = new v("MAT_CARD_CONFIG"),
  Ya = (() => {
    class e {
      constructor(t) {
        this.appearance = t?.appearance || "raised";
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(p(Ul, 8));
        };
      }
      static {
        this.ɵcmp = et({
          type: e,
          selectors: [["mat-card"]],
          hostAttrs: [1, "mat-mdc-card", "mdc-card"],
          hostVars: 4,
          hostBindings: function (n, r) {
            n & 2 &&
              j("mat-mdc-card-outlined", r.appearance === "outlined")(
                "mdc-card--outlined",
                r.appearance === "outlined",
              );
          },
          inputs: { appearance: "appearance" },
          exportAs: ["matCard"],
          standalone: !0,
          features: [rt],
          ngContentSelectors: jl,
          decls: 1,
          vars: 0,
          template: function (n, r) {
            n & 1 && (Nt(), $(0));
          },
          styles: [
            '.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-app-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-app-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-app-corner-medium));border-width:var(--mdc-outlined-card-outline-width);border-color:var(--mdc-outlined-card-outline-color, var(--mat-app-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-app-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-app-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-app-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-app-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-app-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-app-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-app-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-app-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-app-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-app-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-app-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-app-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}',
          ],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return e;
  })();
var Ka = (() => {
  class e {
    static {
      this.ɵfac = function (n) {
        return new (n || e)();
      };
    }
    static {
      this.ɵmod = R({ type: e });
    }
    static {
      this.ɵinj = S({ imports: [Q, St, Q] });
    }
  }
  return e;
})();
var Qa = Lt({ passive: !0 }),
  Xa = (() => {
    class e {
      constructor(t, n) {
        (this._platform = t),
          (this._ngZone = n),
          (this._monitoredElements = new Map());
      }
      monitor(t) {
        if (!this._platform.isBrowser) return ft;
        let n = yt(t),
          r = this._monitoredElements.get(n);
        if (r) return r.subject;
        let o = new F(),
          a = "cdk-text-field-autofilled",
          c = (s) => {
            s.animationName === "cdk-text-field-autofill-start" &&
            !n.classList.contains(a)
              ? (n.classList.add(a),
                this._ngZone.run(() =>
                  o.next({ target: s.target, isAutofilled: !0 }),
                ))
              : s.animationName === "cdk-text-field-autofill-end" &&
                n.classList.contains(a) &&
                (n.classList.remove(a),
                this._ngZone.run(() =>
                  o.next({ target: s.target, isAutofilled: !1 }),
                ));
          };
        return (
          this._ngZone.runOutsideAngular(() => {
            n.addEventListener("animationstart", c, Qa),
              n.classList.add("cdk-text-field-autofill-monitored");
          }),
          this._monitoredElements.set(n, {
            subject: o,
            unlisten: () => {
              n.removeEventListener("animationstart", c, Qa);
            },
          }),
          o
        );
      }
      stopMonitoring(t) {
        let n = yt(t),
          r = this._monitoredElements.get(n);
        r &&
          (r.unlisten(),
          r.subject.complete(),
          n.classList.remove("cdk-text-field-autofill-monitored"),
          n.classList.remove("cdk-text-field-autofilled"),
          this._monitoredElements.delete(n));
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((t, n) => this.stopMonitoring(n));
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(f(H), f(M));
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var Ja = (() => {
  class e {
    static {
      this.ɵfac = function (n) {
        return new (n || e)();
      };
    }
    static {
      this.ɵmod = R({ type: e });
    }
    static {
      this.ɵinj = S({});
    }
  }
  return e;
})();
function Vt(e) {
  return (
    e == null || ((typeof e == "string" || Array.isArray(e)) && e.length === 0)
  );
}
function as(e) {
  return e != null && typeof e.length == "number";
}
var ss = new v(""),
  cs = new v(""),
  Hl =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Gi = class {
    static min(i) {
      return $l(i);
    }
    static max(i) {
      return Gl(i);
    }
    static required(i) {
      return Wl(i);
    }
    static requiredTrue(i) {
      return ql(i);
    }
    static email(i) {
      return Zl(i);
    }
    static minLength(i) {
      return Yl(i);
    }
    static maxLength(i) {
      return Kl(i);
    }
    static pattern(i) {
      return Ql(i);
    }
    static nullValidator(i) {
      return ds(i);
    }
    static compose(i) {
      return fs(i);
    }
    static composeAsync(i) {
      return gs(i);
    }
  };
function $l(e) {
  return (i) => {
    if (Vt(i.value) || Vt(e)) return null;
    let t = parseFloat(i.value);
    return !isNaN(t) && t < e ? { min: { min: e, actual: i.value } } : null;
  };
}
function Gl(e) {
  return (i) => {
    if (Vt(i.value) || Vt(e)) return null;
    let t = parseFloat(i.value);
    return !isNaN(t) && t > e ? { max: { max: e, actual: i.value } } : null;
  };
}
function Wl(e) {
  return Vt(e.value) ? { required: !0 } : null;
}
function ql(e) {
  return e.value === !0 ? null : { required: !0 };
}
function Zl(e) {
  return Vt(e.value) || Hl.test(e.value) ? null : { email: !0 };
}
function Yl(e) {
  return (i) =>
    Vt(i.value) || !as(i.value)
      ? null
      : i.value.length < e
        ? { minlength: { requiredLength: e, actualLength: i.value.length } }
        : null;
}
function Kl(e) {
  return (i) =>
    as(i.value) && i.value.length > e
      ? { maxlength: { requiredLength: e, actualLength: i.value.length } }
      : null;
}
function Ql(e) {
  if (!e) return ds;
  let i, t;
  return (
    typeof e == "string"
      ? ((t = ""),
        e.charAt(0) !== "^" && (t += "^"),
        (t += e),
        e.charAt(e.length - 1) !== "$" && (t += "$"),
        (i = new RegExp(t)))
      : ((t = e.toString()), (i = e)),
    (n) => {
      if (Vt(n.value)) return null;
      let r = n.value;
      return i.test(r)
        ? null
        : { pattern: { requiredPattern: t, actualValue: r } };
    }
  );
}
function ds(e) {
  return null;
}
function ls(e) {
  return e != null;
}
function us(e) {
  return vi(e) ? ot(e) : e;
}
function ms(e) {
  let i = {};
  return (
    e.forEach((t) => {
      i = t != null ? u(u({}, i), t) : i;
    }),
    Object.keys(i).length === 0 ? null : i
  );
}
function hs(e, i) {
  return i.map((t) => t(e));
}
function Xl(e) {
  return !e.validate;
}
function ps(e) {
  return e.map((i) => (Xl(i) ? i : (t) => i.validate(t)));
}
function fs(e) {
  if (!e) return null;
  let i = e.filter(ls);
  return i.length == 0
    ? null
    : function (t) {
        return ms(hs(t, i));
      };
}
function Rr(e) {
  return e != null ? fs(ps(e)) : null;
}
function gs(e) {
  if (!e) return null;
  let i = e.filter(ls);
  return i.length == 0
    ? null
    : function (t) {
        let n = hs(t, i).map(us);
        return zr(n).pipe(I(ms));
      };
}
function kr(e) {
  return e != null ? gs(ps(e)) : null;
}
function ts(e, i) {
  return e === null ? [i] : Array.isArray(e) ? [...e, i] : [e, i];
}
function bs(e) {
  return e._rawValidators;
}
function vs(e) {
  return e._rawAsyncValidators;
}
function Er(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function Wi(e, i) {
  return Array.isArray(e) ? e.includes(i) : e === i;
}
function es(e, i) {
  let t = Er(i);
  return (
    Er(e).forEach((r) => {
      Wi(t, r) || t.push(r);
    }),
    t
  );
}
function is(e, i) {
  return Er(i).filter((t) => !Wi(e, t));
}
var qi = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(i) {
      (this._rawValidators = i || []),
        (this._composedValidatorFn = Rr(this._rawValidators));
    }
    _setAsyncValidators(i) {
      (this._rawAsyncValidators = i || []),
        (this._composedAsyncValidatorFn = kr(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(i) {
      this._onDestroyCallbacks.push(i);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((i) => i()),
        (this._onDestroyCallbacks = []);
    }
    reset(i = void 0) {
      this.control && this.control.reset(i);
    }
    hasError(i, t) {
      return this.control ? this.control.hasError(i, t) : !1;
    }
    getError(i, t) {
      return this.control ? this.control.getError(i, t) : null;
    }
  },
  fe = class extends qi {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  Zi = class extends qi {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  };
var Jl = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  Rf = D(u({}, Jl), { "[class.ng-submitted]": "isSubmitted" });
var Je = "VALID",
  $i = "INVALID",
  he = "PENDING",
  ti = "DISABLED",
  jt = class {},
  Yi = class extends jt {
    constructor(i, t) {
      super(), (this.value = i), (this.source = t);
    }
  },
  ii = class extends jt {
    constructor(i, t) {
      super(), (this.pristine = i), (this.source = t);
    }
  },
  ni = class extends jt {
    constructor(i, t) {
      super(), (this.touched = i), (this.source = t);
    }
  },
  pe = class extends jt {
    constructor(i, t) {
      super(), (this.status = i), (this.source = t);
    }
  },
  Dr = class extends jt {
    constructor(i) {
      super(), (this.source = i);
    }
  },
  Ar = class extends jt {
    constructor(i) {
      super(), (this.source = i);
    }
  };
function _s(e) {
  return (tn(e) ? e.validators : e) || null;
}
function tu(e) {
  return Array.isArray(e) ? Rr(e) : e || null;
}
function ys(e, i) {
  return (tn(i) ? i.asyncValidators : e) || null;
}
function eu(e) {
  return Array.isArray(e) ? kr(e) : e || null;
}
function tn(e) {
  return e != null && !Array.isArray(e) && typeof e == "object";
}
function iu(e, i, t) {
  let n = e.controls;
  if (!(i ? Object.keys(n) : n).length) throw new T(1e3, "");
  if (!n[t]) throw new T(1001, "");
}
function nu(e, i, t) {
  e._forEachChild((n, r) => {
    if (t[r] === void 0) throw new T(1002, "");
  });
}
var Ki = class {
    constructor(i, t) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = Dt(() => this.statusReactive())),
        (this.statusReactive = bt(void 0)),
        (this._pristine = Dt(() => this.pristineReactive())),
        (this.pristineReactive = bt(!0)),
        (this._touched = Dt(() => this.touchedReactive())),
        (this.touchedReactive = bt(!1)),
        (this._events = new F()),
        (this.events = this._events.asObservable()),
        (this._onDisabledChange = []),
        this._assignValidators(i),
        this._assignAsyncValidators(t);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(i) {
      this._rawValidators = this._composedValidatorFn = i;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(i) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = i;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return At(this.statusReactive);
    }
    set status(i) {
      At(() => this.statusReactive.set(i));
    }
    get valid() {
      return this.status === Je;
    }
    get invalid() {
      return this.status === $i;
    }
    get pending() {
      return this.status == he;
    }
    get disabled() {
      return this.status === ti;
    }
    get enabled() {
      return this.status !== ti;
    }
    get pristine() {
      return At(this.pristineReactive);
    }
    set pristine(i) {
      At(() => this.pristineReactive.set(i));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return At(this.touchedReactive);
    }
    set touched(i) {
      At(() => this.touchedReactive.set(i));
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
          ? this.parent.updateOn
          : "change";
    }
    setValidators(i) {
      this._assignValidators(i);
    }
    setAsyncValidators(i) {
      this._assignAsyncValidators(i);
    }
    addValidators(i) {
      this.setValidators(es(i, this._rawValidators));
    }
    addAsyncValidators(i) {
      this.setAsyncValidators(es(i, this._rawAsyncValidators));
    }
    removeValidators(i) {
      this.setValidators(is(i, this._rawValidators));
    }
    removeAsyncValidators(i) {
      this.setAsyncValidators(is(i, this._rawAsyncValidators));
    }
    hasValidator(i) {
      return Wi(this._rawValidators, i);
    }
    hasAsyncValidator(i) {
      return Wi(this._rawAsyncValidators, i);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(i = {}) {
      let t = this.touched === !1;
      this.touched = !0;
      let n = i.sourceControl ?? this;
      this._parent &&
        !i.onlySelf &&
        this._parent.markAsTouched(D(u({}, i), { sourceControl: n })),
        t && i.emitEvent !== !1 && this._events.next(new ni(!0, n));
    }
    markAllAsTouched(i = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: i.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((t) => t.markAllAsTouched(i));
    }
    markAsUntouched(i = {}) {
      let t = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let n = i.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsUntouched({
          onlySelf: !0,
          emitEvent: i.emitEvent,
          sourceControl: n,
        });
      }),
        this._parent && !i.onlySelf && this._parent._updateTouched(i, n),
        t && i.emitEvent !== !1 && this._events.next(new ni(!1, n));
    }
    markAsDirty(i = {}) {
      let t = this.pristine === !0;
      this.pristine = !1;
      let n = i.sourceControl ?? this;
      this._parent &&
        !i.onlySelf &&
        this._parent.markAsDirty(D(u({}, i), { sourceControl: n })),
        t && i.emitEvent !== !1 && this._events.next(new ii(!1, n));
    }
    markAsPristine(i = {}) {
      let t = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let n = i.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsPristine({ onlySelf: !0, emitEvent: i.emitEvent });
      }),
        this._parent && !i.onlySelf && this._parent._updatePristine(i, n),
        t && i.emitEvent !== !1 && this._events.next(new ii(!0, n));
    }
    markAsPending(i = {}) {
      this.status = he;
      let t = i.sourceControl ?? this;
      i.emitEvent !== !1 &&
        (this._events.next(new pe(this.status, t)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !i.onlySelf &&
          this._parent.markAsPending(D(u({}, i), { sourceControl: t }));
    }
    disable(i = {}) {
      let t = this._parentMarkedDirty(i.onlySelf);
      (this.status = ti),
        (this.errors = null),
        this._forEachChild((r) => {
          r.disable(D(u({}, i), { onlySelf: !0 }));
        }),
        this._updateValue();
      let n = i.sourceControl ?? this;
      i.emitEvent !== !1 &&
        (this._events.next(new Yi(this.value, n)),
        this._events.next(new pe(this.status, n)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(D(u({}, i), { skipPristineCheck: t }), this),
        this._onDisabledChange.forEach((r) => r(!0));
    }
    enable(i = {}) {
      let t = this._parentMarkedDirty(i.onlySelf);
      (this.status = Je),
        this._forEachChild((n) => {
          n.enable(D(u({}, i), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: i.emitEvent }),
        this._updateAncestors(D(u({}, i), { skipPristineCheck: t }), this),
        this._onDisabledChange.forEach((n) => n(!1));
    }
    _updateAncestors(i, t) {
      this._parent &&
        !i.onlySelf &&
        (this._parent.updateValueAndValidity(i),
        i.skipPristineCheck || this._parent._updatePristine({}, t),
        this._parent._updateTouched({}, t));
    }
    setParent(i) {
      this._parent = i;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(i = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let n = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === Je || this.status === he) &&
            this._runAsyncValidator(n, i.emitEvent);
      }
      let t = i.sourceControl ?? this;
      i.emitEvent !== !1 &&
        (this._events.next(new Yi(this.value, t)),
        this._events.next(new pe(this.status, t)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !i.onlySelf &&
          this._parent.updateValueAndValidity(
            D(u({}, i), { sourceControl: t }),
          );
    }
    _updateTreeValidity(i = { emitEvent: !0 }) {
      this._forEachChild((t) => t._updateTreeValidity(i)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: i.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? ti : Je;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(i, t) {
      if (this.asyncValidator) {
        (this.status = he),
          (this._hasOwnPendingAsyncValidator = { emitEvent: t !== !1 });
        let n = us(this.asyncValidator(this));
        this._asyncValidationSubscription = n.subscribe((r) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(r, { emitEvent: t, shouldHaveEmitted: i });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let i = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), i;
      }
      return !1;
    }
    setErrors(i, t = {}) {
      (this.errors = i),
        this._updateControlsErrors(
          t.emitEvent !== !1,
          this,
          t.shouldHaveEmitted,
        );
    }
    get(i) {
      let t = i;
      return t == null ||
        (Array.isArray(t) || (t = t.split(".")), t.length === 0)
        ? null
        : t.reduce((n, r) => n && n._find(r), this);
    }
    getError(i, t) {
      let n = t ? this.get(t) : this;
      return n && n.errors ? n.errors[i] : null;
    }
    hasError(i, t) {
      return !!this.getError(i, t);
    }
    get root() {
      let i = this;
      for (; i._parent; ) i = i._parent;
      return i;
    }
    _updateControlsErrors(i, t, n) {
      (this.status = this._calculateStatus()),
        i && this.statusChanges.emit(this.status),
        (i || n) && this._events.next(new pe(this.status, t)),
        this._parent && this._parent._updateControlsErrors(i, t, n);
    }
    _initObservables() {
      (this.valueChanges = new it()), (this.statusChanges = new it());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? ti
        : this.errors
          ? $i
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(he)
            ? he
            : this._anyControlsHaveStatus($i)
              ? $i
              : Je;
    }
    _anyControlsHaveStatus(i) {
      return this._anyControls((t) => t.status === i);
    }
    _anyControlsDirty() {
      return this._anyControls((i) => i.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((i) => i.touched);
    }
    _updatePristine(i, t) {
      let n = !this._anyControlsDirty(),
        r = this.pristine !== n;
      (this.pristine = n),
        this._parent && !i.onlySelf && this._parent._updatePristine(i, t),
        r && this._events.next(new ii(this.pristine, t));
    }
    _updateTouched(i = {}, t) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new ni(this.touched, t)),
        this._parent && !i.onlySelf && this._parent._updateTouched(i, t);
    }
    _registerOnCollectionChange(i) {
      this._onCollectionChange = i;
    }
    _setUpdateStrategy(i) {
      tn(i) && i.updateOn != null && (this._updateOn = i.updateOn);
    }
    _parentMarkedDirty(i) {
      let t = this._parent && this._parent.dirty;
      return !i && !!t && !this._parent._anyControlsDirty();
    }
    _find(i) {
      return null;
    }
    _assignValidators(i) {
      (this._rawValidators = Array.isArray(i) ? i.slice() : i),
        (this._composedValidatorFn = tu(this._rawValidators));
    }
    _assignAsyncValidators(i) {
      (this._rawAsyncValidators = Array.isArray(i) ? i.slice() : i),
        (this._composedAsyncValidatorFn = eu(this._rawAsyncValidators));
    }
  },
  Qi = class extends Ki {
    constructor(i, t, n) {
      super(_s(t), ys(n, t)),
        (this.controls = i),
        this._initObservables(),
        this._setUpdateStrategy(t),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(i, t) {
      return this.controls[i]
        ? this.controls[i]
        : ((this.controls[i] = t),
          t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange),
          t);
    }
    addControl(i, t, n = {}) {
      this.registerControl(i, t),
        this.updateValueAndValidity({ emitEvent: n.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(i, t = {}) {
      this.controls[i] &&
        this.controls[i]._registerOnCollectionChange(() => {}),
        delete this.controls[i],
        this.updateValueAndValidity({ emitEvent: t.emitEvent }),
        this._onCollectionChange();
    }
    setControl(i, t, n = {}) {
      this.controls[i] &&
        this.controls[i]._registerOnCollectionChange(() => {}),
        delete this.controls[i],
        t && this.registerControl(i, t),
        this.updateValueAndValidity({ emitEvent: n.emitEvent }),
        this._onCollectionChange();
    }
    contains(i) {
      return this.controls.hasOwnProperty(i) && this.controls[i].enabled;
    }
    setValue(i, t = {}) {
      nu(this, !0, i),
        Object.keys(i).forEach((n) => {
          iu(this, !0, n),
            this.controls[n].setValue(i[n], {
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }),
        this.updateValueAndValidity(t);
    }
    patchValue(i, t = {}) {
      i != null &&
        (Object.keys(i).forEach((n) => {
          let r = this.controls[n];
          r && r.patchValue(i[n], { onlySelf: !0, emitEvent: t.emitEvent });
        }),
        this.updateValueAndValidity(t));
    }
    reset(i = {}, t = {}) {
      this._forEachChild((n, r) => {
        n.reset(i ? i[r] : null, { onlySelf: !0, emitEvent: t.emitEvent });
      }),
        this._updatePristine(t, this),
        this._updateTouched(t, this),
        this.updateValueAndValidity(t);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (i, t, n) => ((i[n] = t.getRawValue()), i),
      );
    }
    _syncPendingControls() {
      let i = this._reduceChildren(!1, (t, n) =>
        n._syncPendingControls() ? !0 : t,
      );
      return i && this.updateValueAndValidity({ onlySelf: !0 }), i;
    }
    _forEachChild(i) {
      Object.keys(this.controls).forEach((t) => {
        let n = this.controls[t];
        n && i(n, t);
      });
    }
    _setUpControls() {
      this._forEachChild((i) => {
        i.setParent(this),
          i._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(i) {
      for (let [t, n] of Object.entries(this.controls))
        if (this.contains(t) && i(n)) return !0;
      return !1;
    }
    _reduceValue() {
      let i = {};
      return this._reduceChildren(
        i,
        (t, n, r) => ((n.enabled || this.disabled) && (t[r] = n.value), t),
      );
    }
    _reduceChildren(i, t) {
      let n = i;
      return (
        this._forEachChild((r, o) => {
          n = t(n, r, o);
        }),
        n
      );
    }
    _allControlsDisabled() {
      for (let i of Object.keys(this.controls))
        if (this.controls[i].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(i) {
      return this.controls.hasOwnProperty(i) ? this.controls[i] : null;
    }
  };
var xs = new v("CallSetDisabledState", {
    providedIn: "root",
    factory: () => ws,
  }),
  ws = "always";
function Sr(e, i, t = ws) {
  Tr(e, i),
    i.valueAccessor.writeValue(e.value),
    (e.disabled || t === "always") &&
      i.valueAccessor.setDisabledState?.(e.disabled),
    ou(e, i),
    su(e, i),
    au(e, i),
    ru(e, i);
}
function ns(e, i, t = !0) {
  let n = () => {};
  i.valueAccessor &&
    (i.valueAccessor.registerOnChange(n), i.valueAccessor.registerOnTouched(n)),
    Ji(e, i),
    e &&
      (i._invokeOnDestroyCallbacks(), e._registerOnCollectionChange(() => {}));
}
function Xi(e, i) {
  e.forEach((t) => {
    t.registerOnValidatorChange && t.registerOnValidatorChange(i);
  });
}
function ru(e, i) {
  if (i.valueAccessor.setDisabledState) {
    let t = (n) => {
      i.valueAccessor.setDisabledState(n);
    };
    e.registerOnDisabledChange(t),
      i._registerOnDestroy(() => {
        e._unregisterOnDisabledChange(t);
      });
  }
}
function Tr(e, i) {
  let t = bs(e);
  i.validator !== null
    ? e.setValidators(ts(t, i.validator))
    : typeof t == "function" && e.setValidators([t]);
  let n = vs(e);
  i.asyncValidator !== null
    ? e.setAsyncValidators(ts(n, i.asyncValidator))
    : typeof n == "function" && e.setAsyncValidators([n]);
  let r = () => e.updateValueAndValidity();
  Xi(i._rawValidators, r), Xi(i._rawAsyncValidators, r);
}
function Ji(e, i) {
  let t = !1;
  if (e !== null) {
    if (i.validator !== null) {
      let r = bs(e);
      if (Array.isArray(r) && r.length > 0) {
        let o = r.filter((a) => a !== i.validator);
        o.length !== r.length && ((t = !0), e.setValidators(o));
      }
    }
    if (i.asyncValidator !== null) {
      let r = vs(e);
      if (Array.isArray(r) && r.length > 0) {
        let o = r.filter((a) => a !== i.asyncValidator);
        o.length !== r.length && ((t = !0), e.setAsyncValidators(o));
      }
    }
  }
  let n = () => {};
  return Xi(i._rawValidators, n), Xi(i._rawAsyncValidators, n), t;
}
function ou(e, i) {
  i.valueAccessor.registerOnChange((t) => {
    (e._pendingValue = t),
      (e._pendingChange = !0),
      (e._pendingDirty = !0),
      e.updateOn === "change" && Cs(e, i);
  });
}
function au(e, i) {
  i.valueAccessor.registerOnTouched(() => {
    (e._pendingTouched = !0),
      e.updateOn === "blur" && e._pendingChange && Cs(e, i),
      e.updateOn !== "submit" && e.markAsTouched();
  });
}
function Cs(e, i) {
  e._pendingDirty && e.markAsDirty(),
    e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
    i.viewToModelUpdate(e._pendingValue),
    (e._pendingChange = !1);
}
function su(e, i) {
  let t = (n, r) => {
    i.valueAccessor.writeValue(n), r && i.viewToModelUpdate(n);
  };
  e.registerOnChange(t),
    i._registerOnDestroy(() => {
      e._unregisterOnChange(t);
    });
}
function Is(e, i) {
  e == null, Tr(e, i);
}
function cu(e, i) {
  return Ji(e, i);
}
function Ms(e, i) {
  e._syncPendingControls(),
    i.forEach((t) => {
      let n = t.control;
      n.updateOn === "submit" &&
        n._pendingChange &&
        (t.viewToModelUpdate(n._pendingValue), (n._pendingChange = !1));
    });
}
function du(e, i) {
  let t = e.indexOf(i);
  t > -1 && e.splice(t, 1);
}
var lu = { provide: fe, useExisting: ln(() => Fr) },
  ei = Promise.resolve(),
  Fr = (() => {
    class e extends fe {
      get submitted() {
        return At(this.submittedReactive);
      }
      constructor(t, n, r) {
        super(),
          (this.callSetDisabledState = r),
          (this._submitted = Dt(() => this.submittedReactive())),
          (this.submittedReactive = bt(!1)),
          (this._directives = new Set()),
          (this.ngSubmit = new it()),
          (this.form = new Qi({}, Rr(t), kr(n)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(t) {
        ei.then(() => {
          let n = this._findContainer(t.path);
          (t.control = n.registerControl(t.name, t.control)),
            Sr(t.control, t, this.callSetDisabledState),
            t.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(t);
        });
      }
      getControl(t) {
        return this.form.get(t.path);
      }
      removeControl(t) {
        ei.then(() => {
          let n = this._findContainer(t.path);
          n && n.removeControl(t.name), this._directives.delete(t);
        });
      }
      addFormGroup(t) {
        ei.then(() => {
          let n = this._findContainer(t.path),
            r = new Qi({});
          Is(r, t),
            n.registerControl(t.name, r),
            r.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(t) {
        ei.then(() => {
          let n = this._findContainer(t.path);
          n && n.removeControl(t.name);
        });
      }
      getFormGroup(t) {
        return this.form.get(t.path);
      }
      updateModel(t, n) {
        ei.then(() => {
          this.form.get(t.path).setValue(n);
        });
      }
      setValue(t) {
        this.control.setValue(t);
      }
      onSubmit(t) {
        return (
          this.submittedReactive.set(!0),
          Ms(this.form, this._directives),
          this.ngSubmit.emit(t),
          t?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(t = void 0) {
        this.form.reset(t), this.submittedReactive.set(!1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(t) {
        return t.pop(), t.length ? this.form.get(t) : this.form;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(p(ss, 10), p(cs, 10), p(xs, 8));
        };
      }
      static {
        this.ɵdir = N({
          type: e,
          selectors: [
            ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
            ["ng-form"],
            ["", "ngForm", ""],
          ],
          hostBindings: function (n, r) {
            n & 1 &&
              J("submit", function (a) {
                return r.onSubmit(a);
              })("reset", function () {
                return r.onReset();
              });
          },
          inputs: { options: [0, "ngFormOptions", "options"] },
          outputs: { ngSubmit: "ngSubmit" },
          exportAs: ["ngForm"],
          features: [Mt([lu]), Ee],
        });
      }
    }
    return e;
  })();
function rs(e, i) {
  let t = e.indexOf(i);
  t > -1 && e.splice(t, 1);
}
function os(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    Object.keys(e).length === 2 &&
    "value" in e &&
    "disabled" in e
  );
}
var uu = class extends Ki {
  constructor(i = null, t, n) {
    super(_s(t), ys(n, t)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(i),
      this._setUpdateStrategy(t),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      tn(t) &&
        (t.nonNullable || t.initialValueIsDefault) &&
        (os(i) ? (this.defaultValue = i.value) : (this.defaultValue = i));
  }
  setValue(i, t = {}) {
    (this.value = this._pendingValue = i),
      this._onChange.length &&
        t.emitModelToViewChange !== !1 &&
        this._onChange.forEach((n) =>
          n(this.value, t.emitViewToModelChange !== !1),
        ),
      this.updateValueAndValidity(t);
  }
  patchValue(i, t = {}) {
    this.setValue(i, t);
  }
  reset(i = this.defaultValue, t = {}) {
    this._applyFormState(i),
      this.markAsPristine(t),
      this.markAsUntouched(t),
      this.setValue(this.value, t),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(i) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(i) {
    this._onChange.push(i);
  }
  _unregisterOnChange(i) {
    rs(this._onChange, i);
  }
  registerOnDisabledChange(i) {
    this._onDisabledChange.push(i);
  }
  _unregisterOnDisabledChange(i) {
    rs(this._onDisabledChange, i);
  }
  _forEachChild(i) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(i) {
    os(i)
      ? ((this.value = this._pendingValue = i.value),
        i.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = i);
  }
};
var mu = (e) => e instanceof uu;
var hu = { provide: fe, useExisting: ln(() => Or) },
  Or = (() => {
    class e extends fe {
      get submitted() {
        return At(this._submittedReactive);
      }
      set submitted(t) {
        this._submittedReactive.set(t);
      }
      constructor(t, n, r) {
        super(),
          (this.callSetDisabledState = r),
          (this._submitted = Dt(() => this._submittedReactive())),
          (this._submittedReactive = bt(!1)),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new it()),
          this._setValidators(t),
          this._setAsyncValidators(n);
      }
      ngOnChanges(t) {
        this._checkFormPresent(),
          t.hasOwnProperty("form") &&
            (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (Ji(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(t) {
        let n = this.form.get(t.path);
        return (
          Sr(n, t, this.callSetDisabledState),
          n.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(t),
          n
        );
      }
      getControl(t) {
        return this.form.get(t.path);
      }
      removeControl(t) {
        ns(t.control || null, t, !1), du(this.directives, t);
      }
      addFormGroup(t) {
        this._setUpFormContainer(t);
      }
      removeFormGroup(t) {
        this._cleanUpFormContainer(t);
      }
      getFormGroup(t) {
        return this.form.get(t.path);
      }
      addFormArray(t) {
        this._setUpFormContainer(t);
      }
      removeFormArray(t) {
        this._cleanUpFormContainer(t);
      }
      getFormArray(t) {
        return this.form.get(t.path);
      }
      updateModel(t, n) {
        this.form.get(t.path).setValue(n);
      }
      onSubmit(t) {
        return (
          this._submittedReactive.set(!0),
          Ms(this.form, this.directives),
          this.ngSubmit.emit(t),
          this.form._events.next(new Dr(this.control)),
          t?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(t = void 0) {
        this.form.reset(t),
          this._submittedReactive.set(!1),
          this.form._events.next(new Ar(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((t) => {
          let n = t.control,
            r = this.form.get(t.path);
          n !== r &&
            (ns(n || null, t),
            mu(r) && (Sr(r, t, this.callSetDisabledState), (t.control = r)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(t) {
        let n = this.form.get(t.path);
        Is(n, t), n.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(t) {
        if (this.form) {
          let n = this.form.get(t.path);
          n && cu(n, t) && n.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        Tr(this.form, this), this._oldForm && Ji(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(p(ss, 10), p(cs, 10), p(xs, 8));
        };
      }
      static {
        this.ɵdir = N({
          type: e,
          selectors: [["", "formGroup", ""]],
          hostBindings: function (n, r) {
            n & 1 &&
              J("submit", function (a) {
                return r.onSubmit(a);
              })("reset", function () {
                return r.onReset();
              });
          },
          inputs: { form: [0, "formGroup", "form"] },
          outputs: { ngSubmit: "ngSubmit" },
          exportAs: ["ngForm"],
          features: [Mt([hu]), Ee, zt],
        });
      }
    }
    return e;
  })();
var Nr = class {
    constructor(i) {
      (this._box = i),
        (this._destroyed = new F()),
        (this._resizeSubject = new F()),
        (this._elementObservables = new Map()),
        typeof ResizeObserver < "u" &&
          (this._resizeObserver = new ResizeObserver((t) =>
            this._resizeSubject.next(t),
          ));
    }
    observe(i) {
      return (
        this._elementObservables.has(i) ||
          this._elementObservables.set(
            i,
            new ri((t) => {
              let n = this._resizeSubject.subscribe(t);
              return (
                this._resizeObserver?.observe(i, { box: this._box }),
                () => {
                  this._resizeObserver?.unobserve(i),
                    n.unsubscribe(),
                    this._elementObservables.delete(i);
                }
              );
            }).pipe(
              xt((t) => t.some((n) => n.target === i)),
              qr({ bufferSize: 1, refCount: !0 }),
              mt(this._destroyed),
            ),
          ),
        this._elementObservables.get(i)
      );
    }
    destroy() {
      this._destroyed.next(),
        this._destroyed.complete(),
        this._resizeSubject.complete(),
        this._elementObservables.clear();
    }
  },
  Es = (() => {
    class e {
      constructor() {
        (this._observers = new Map()),
          (this._ngZone = m(M)),
          typeof ResizeObserver < "u";
      }
      ngOnDestroy() {
        for (let [, t] of this._observers) t.destroy();
        this._observers.clear(), typeof ResizeObserver < "u";
      }
      observe(t, n) {
        let r = n?.box || "content-box";
        return (
          this._observers.has(r) || this._observers.set(r, new Nr(r)),
          this._observers.get(r).observe(t)
        );
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵprov = g({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var fu = ["notch"],
  gu = ["matFormFieldNotchedOutline", ""],
  bu = ["*"],
  vu = ["textField"],
  _u = ["iconPrefixContainer"],
  yu = ["textPrefixContainer"],
  xu = ["iconSuffixContainer"],
  wu = ["textSuffixContainer"],
  Cu = [
    "*",
    [["mat-label"]],
    [
      ["", "matPrefix", ""],
      ["", "matIconPrefix", ""],
    ],
    [["", "matTextPrefix", ""]],
    [["", "matTextSuffix", ""]],
    [
      ["", "matSuffix", ""],
      ["", "matIconSuffix", ""],
    ],
    [["mat-error"], ["", "matError", ""]],
    [["mat-hint", 3, "align", "end"]],
    [["mat-hint", "align", "end"]],
  ],
  Iu = [
    "*",
    "mat-label",
    "[matPrefix], [matIconPrefix]",
    "[matTextPrefix]",
    "[matTextSuffix]",
    "[matSuffix], [matIconSuffix]",
    "mat-error, [matError]",
    "mat-hint:not([align='end'])",
    "mat-hint[align='end']",
  ];
function Mu(e, i) {
  e & 1 && U(0, "span", 21);
}
function Eu(e, i) {
  if (
    (e & 1 && (y(0, "label", 20), $(1, 1), V(2, Mu, 1, 0, "span", 21), x()),
    e & 2)
  ) {
    let t = nt(2);
    L("floating", t._shouldLabelFloat())("monitorResize", t._hasOutline())(
      "id",
      t._labelId,
    ),
      q("for", t._control.disableAutomaticLabeling ? null : t._control.id),
      C(2),
      X(!t.hideRequiredMarker && t._control.required ? 2 : -1);
  }
}
function Du(e, i) {
  if ((e & 1 && V(0, Eu, 3, 5, "label", 20), e & 2)) {
    let t = nt();
    X(t._hasFloatingLabel() ? 0 : -1);
  }
}
function Au(e, i) {
  e & 1 && U(0, "div", 7);
}
function Su(e, i) {}
function Ru(e, i) {
  if ((e & 1 && V(0, Su, 0, 0, "ng-template", 13), e & 2)) {
    nt(2);
    let t = Ae(1);
    L("ngTemplateOutlet", t);
  }
}
function ku(e, i) {
  if ((e & 1 && (y(0, "div", 9), V(1, Ru, 1, 1, null, 13), x()), e & 2)) {
    let t = nt();
    L("matFormFieldNotchedOutlineOpen", t._shouldLabelFloat()),
      C(),
      X(t._forceDisplayInfixLabel() ? -1 : 1);
  }
}
function Tu(e, i) {
  e & 1 && (y(0, "div", 10, 2), $(2, 2), x());
}
function Fu(e, i) {
  e & 1 && (y(0, "div", 11, 3), $(2, 3), x());
}
function Ou(e, i) {}
function Nu(e, i) {
  if ((e & 1 && V(0, Ou, 0, 0, "ng-template", 13), e & 2)) {
    nt();
    let t = Ae(1);
    L("ngTemplateOutlet", t);
  }
}
function Pu(e, i) {
  e & 1 && (y(0, "div", 14, 4), $(2, 4), x());
}
function Lu(e, i) {
  e & 1 && (y(0, "div", 15, 5), $(2, 5), x());
}
function Vu(e, i) {
  e & 1 && U(0, "div", 16);
}
function ju(e, i) {
  if ((e & 1 && (y(0, "div", 18), $(1, 6), x()), e & 2)) {
    let t = nt();
    L("@transitionMessages", t._subscriptAnimationState);
  }
}
function Uu(e, i) {
  if ((e & 1 && (y(0, "mat-hint", 22), vt(1), x()), e & 2)) {
    let t = nt(2);
    L("id", t._hintLabelId), C(), ho(t.hintLabel);
  }
}
function zu(e, i) {
  if (
    (e & 1 &&
      (y(0, "div", 19),
      V(1, Uu, 2, 2, "mat-hint", 22),
      $(2, 7),
      U(3, "div", 23),
      $(4, 8),
      x()),
    e & 2)
  ) {
    let t = nt();
    L("@transitionMessages", t._subscriptAnimationState),
      C(),
      X(t.hintLabel ? 1 : -1);
  }
}
var Ds = (() => {
  class e {
    static {
      this.ɵfac = function (n) {
        return new (n || e)();
      };
    }
    static {
      this.ɵdir = N({ type: e, selectors: [["mat-label"]], standalone: !0 });
    }
  }
  return e;
})();
var Bu = new v("MatError");
var Hu = 0,
  As = (() => {
    class e {
      constructor() {
        (this.align = "start"), (this.id = `mat-mdc-hint-${Hu++}`);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵdir = N({
          type: e,
          selectors: [["mat-hint"]],
          hostAttrs: [
            1,
            "mat-mdc-form-field-hint",
            "mat-mdc-form-field-bottom-align",
          ],
          hostVars: 4,
          hostBindings: function (n, r) {
            n & 2 &&
              (De("id", r.id),
              q("align", null),
              j("mat-mdc-form-field-hint-end", r.align === "end"));
          },
          inputs: { align: "align", id: "id" },
          standalone: !0,
        });
      }
    }
    return e;
  })(),
  $u = new v("MatPrefix");
var Gu = new v("MatSuffix");
var Ps = new v("FloatingLabelParent"),
  Ss = (() => {
    class e {
      get floating() {
        return this._floating;
      }
      set floating(t) {
        (this._floating = t), this.monitorResize && this._handleResize();
      }
      get monitorResize() {
        return this._monitorResize;
      }
      set monitorResize(t) {
        (this._monitorResize = t),
          this._monitorResize
            ? this._subscribeToResize()
            : this._resizeSubscription.unsubscribe();
      }
      constructor(t) {
        (this._elementRef = t),
          (this._floating = !1),
          (this._monitorResize = !1),
          (this._resizeObserver = m(Es)),
          (this._ngZone = m(M)),
          (this._parent = m(Ps)),
          (this._resizeSubscription = new be());
      }
      ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
      }
      getWidth() {
        return Wu(this._elementRef.nativeElement);
      }
      get element() {
        return this._elementRef.nativeElement;
      }
      _handleResize() {
        setTimeout(() => this._parent._handleLabelResized());
      }
      _subscribeToResize() {
        this._resizeSubscription.unsubscribe(),
          this._ngZone.runOutsideAngular(() => {
            this._resizeSubscription = this._resizeObserver
              .observe(this._elementRef.nativeElement, { box: "border-box" })
              .subscribe(() => this._handleResize());
          });
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(p(P));
        };
      }
      static {
        this.ɵdir = N({
          type: e,
          selectors: [["label", "matFormFieldFloatingLabel", ""]],
          hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
          hostVars: 2,
          hostBindings: function (n, r) {
            n & 2 && j("mdc-floating-label--float-above", r.floating);
          },
          inputs: { floating: "floating", monitorResize: "monitorResize" },
          standalone: !0,
        });
      }
    }
    return e;
  })();
function Wu(e) {
  let i = e;
  if (i.offsetParent !== null) return i.scrollWidth;
  let t = i.cloneNode(!0);
  t.style.setProperty("position", "absolute"),
    t.style.setProperty("transform", "translate(-9999px, -9999px)"),
    document.documentElement.appendChild(t);
  let n = t.scrollWidth;
  return t.remove(), n;
}
var Rs = "mdc-line-ripple--active",
  en = "mdc-line-ripple--deactivating",
  ks = (() => {
    class e {
      constructor(t, n) {
        (this._elementRef = t),
          (this._handleTransitionEnd = (r) => {
            let o = this._elementRef.nativeElement.classList,
              a = o.contains(en);
            r.propertyName === "opacity" && a && o.remove(Rs, en);
          }),
          n.runOutsideAngular(() => {
            t.nativeElement.addEventListener(
              "transitionend",
              this._handleTransitionEnd,
            );
          });
      }
      activate() {
        let t = this._elementRef.nativeElement.classList;
        t.remove(en), t.add(Rs);
      }
      deactivate() {
        this._elementRef.nativeElement.classList.add(en);
      }
      ngOnDestroy() {
        this._elementRef.nativeElement.removeEventListener(
          "transitionend",
          this._handleTransitionEnd,
        );
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(p(P), p(M));
        };
      }
      static {
        this.ɵdir = N({
          type: e,
          selectors: [["div", "matFormFieldLineRipple", ""]],
          hostAttrs: [1, "mdc-line-ripple"],
          standalone: !0,
        });
      }
    }
    return e;
  })(),
  Ts = (() => {
    class e {
      constructor(t, n) {
        (this._elementRef = t), (this._ngZone = n), (this.open = !1);
      }
      ngAfterViewInit() {
        let t = this._elementRef.nativeElement.querySelector(
          ".mdc-floating-label",
        );
        t
          ? (this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--upgraded",
            ),
            typeof requestAnimationFrame == "function" &&
              ((t.style.transitionDuration = "0s"),
              this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => (t.style.transitionDuration = ""));
              })))
          : this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--no-label",
            );
      }
      _setNotchWidth(t) {
        !this.open || !t
          ? (this._notch.nativeElement.style.width = "")
          : (this._notch.nativeElement.style.width = `calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(p(P), p(M));
        };
      }
      static {
        this.ɵcmp = et({
          type: e,
          selectors: [["div", "matFormFieldNotchedOutline", ""]],
          viewQuery: function (n, r) {
            if ((n & 1 && at(fu, 5), n & 2)) {
              let o;
              z((o = B())) && (r._notch = o.first);
            }
          },
          hostAttrs: [1, "mdc-notched-outline"],
          hostVars: 2,
          hostBindings: function (n, r) {
            n & 2 && j("mdc-notched-outline--notched", r.open);
          },
          inputs: { open: [0, "matFormFieldNotchedOutlineOpen", "open"] },
          standalone: !0,
          features: [rt],
          attrs: gu,
          ngContentSelectors: bu,
          decls: 5,
          vars: 0,
          consts: [
            ["notch", ""],
            [1, "mat-mdc-notch-piece", "mdc-notched-outline__leading"],
            [1, "mat-mdc-notch-piece", "mdc-notched-outline__notch"],
            [1, "mat-mdc-notch-piece", "mdc-notched-outline__trailing"],
          ],
          template: function (n, r) {
            n & 1 &&
              (Nt(),
              U(0, "div", 1),
              y(1, "div", 2, 0),
              $(3),
              x(),
              U(4, "div", 3));
          },
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return e;
  })(),
  qu = {
    transitionMessages: Io("transitionMessages", [
      Eo("enter", _n({ opacity: 1, transform: "translateY(0%)" })),
      Do("void => enter", [
        _n({ opacity: 0, transform: "translateY(-5px)" }),
        Mo("300ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
      ]),
    ]),
  },
  Pr = (() => {
    class e {
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵdir = N({ type: e });
      }
    }
    return e;
  })();
var Lr = new v("MatFormField"),
  Zu = new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),
  Fs = 0,
  Os = "fill",
  Yu = "auto",
  Ns = "fixed",
  Ku = "translateY(-50%)",
  Ls = (() => {
    class e {
      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      set hideRequiredMarker(t) {
        this._hideRequiredMarker = Kt(t);
      }
      get floatLabel() {
        return this._floatLabel || this._defaults?.floatLabel || Yu;
      }
      set floatLabel(t) {
        t !== this._floatLabel &&
          ((this._floatLabel = t), this._changeDetectorRef.markForCheck());
      }
      get appearance() {
        return this._appearance;
      }
      set appearance(t) {
        let n = this._appearance,
          r = t || this._defaults?.appearance || Os;
        (this._appearance = r),
          this._appearance === "outline" &&
            this._appearance !== n &&
            (this._needsOutlineLabelOffsetUpdate = !0);
      }
      get subscriptSizing() {
        return this._subscriptSizing || this._defaults?.subscriptSizing || Ns;
      }
      set subscriptSizing(t) {
        this._subscriptSizing = t || this._defaults?.subscriptSizing || Ns;
      }
      get hintLabel() {
        return this._hintLabel;
      }
      set hintLabel(t) {
        (this._hintLabel = t), this._processHints();
      }
      get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
      }
      set _control(t) {
        this._explicitFormFieldControl = t;
      }
      constructor(t, n, r, o, a, c, s, d) {
        (this._elementRef = t),
          (this._changeDetectorRef = n),
          (this._dir = o),
          (this._platform = a),
          (this._defaults = c),
          (this._animationMode = s),
          (this._labelChild = oo(Ds)),
          (this._hideRequiredMarker = !1),
          (this.color = "primary"),
          (this._appearance = Os),
          (this._subscriptSizing = null),
          (this._hintLabel = ""),
          (this._hasIconPrefix = !1),
          (this._hasTextPrefix = !1),
          (this._hasIconSuffix = !1),
          (this._hasTextSuffix = !1),
          (this._labelId = `mat-mdc-form-field-label-${Fs++}`),
          (this._hintLabelId = `mat-mdc-hint-${Fs++}`),
          (this._subscriptAnimationState = ""),
          (this._destroyed = new F()),
          (this._isFocused = null),
          (this._needsOutlineLabelOffsetUpdate = !1),
          (this._previousControl = null),
          (this._injector = m(te)),
          (this.getLabelId = Dt(() =>
            this._hasFloatingLabel() ? this._labelId : null,
          )),
          (this._hasFloatingLabel = Dt(() => !!this._labelChild())),
          c &&
            (c.appearance && (this.appearance = c.appearance),
            (this._hideRequiredMarker = !!c?.hideRequiredMarker),
            c.color && (this.color = c.color));
      }
      ngAfterViewInit() {
        this._updateFocusState(),
          (this._subscriptAnimationState = "enter"),
          this._changeDetectorRef.detectChanges();
      }
      ngAfterContentInit() {
        this._assertFormFieldControl(),
          this._initializeSubscript(),
          this._initializePrefixAndSuffix(),
          this._initializeOutlineLabelOffsetSubscriptions();
      }
      ngAfterContentChecked() {
        this._assertFormFieldControl(),
          this._control !== this._previousControl &&
            (this._initializeControl(this._previousControl),
            (this._previousControl = this._control));
      }
      ngOnDestroy() {
        this._stateChanges?.unsubscribe(),
          this._valueChanges?.unsubscribe(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
      }
      _animateAndLockLabel() {
        this._hasFloatingLabel() && (this.floatLabel = "always");
      }
      _initializeControl(t) {
        let n = this._control,
          r = "mat-mdc-form-field-type-";
        t && this._elementRef.nativeElement.classList.remove(r + t.controlType),
          n.controlType &&
            this._elementRef.nativeElement.classList.add(r + n.controlType),
          this._stateChanges?.unsubscribe(),
          (this._stateChanges = n.stateChanges.subscribe(() => {
            this._updateFocusState(),
              this._syncDescribedByIds(),
              this._changeDetectorRef.markForCheck();
          })),
          this._valueChanges?.unsubscribe(),
          n.ngControl &&
            n.ngControl.valueChanges &&
            (this._valueChanges = n.ngControl.valueChanges
              .pipe(mt(this._destroyed))
              .subscribe(() => this._changeDetectorRef.markForCheck()));
      }
      _checkPrefixAndSuffixTypes() {
        (this._hasIconPrefix = !!this._prefixChildren.find((t) => !t._isText)),
          (this._hasTextPrefix = !!this._prefixChildren.find((t) => t._isText)),
          (this._hasIconSuffix = !!this._suffixChildren.find(
            (t) => !t._isText,
          )),
          (this._hasTextSuffix = !!this._suffixChildren.find((t) => t._isText));
      }
      _initializePrefixAndSuffix() {
        this._checkPrefixAndSuffixTypes(),
          Br(
            this._prefixChildren.changes,
            this._suffixChildren.changes,
          ).subscribe(() => {
            this._checkPrefixAndSuffixTypes(),
              this._changeDetectorRef.markForCheck();
          });
      }
      _initializeSubscript() {
        this._hintChildren.changes.subscribe(() => {
          this._processHints(), this._changeDetectorRef.markForCheck();
        }),
          this._errorChildren.changes.subscribe(() => {
            this._syncDescribedByIds(), this._changeDetectorRef.markForCheck();
          }),
          this._validateHints(),
          this._syncDescribedByIds();
      }
      _assertFormFieldControl() {
        this._control;
      }
      _updateFocusState() {
        this._control.focused && !this._isFocused
          ? ((this._isFocused = !0), this._lineRipple?.activate())
          : !this._control.focused &&
            (this._isFocused || this._isFocused === null) &&
            ((this._isFocused = !1), this._lineRipple?.deactivate()),
          this._textField?.nativeElement.classList.toggle(
            "mdc-text-field--focused",
            this._control.focused,
          );
      }
      _initializeOutlineLabelOffsetSubscriptions() {
        this._prefixChildren.changes.subscribe(
          () => (this._needsOutlineLabelOffsetUpdate = !0),
        ),
          co(
            () => {
              this._needsOutlineLabelOffsetUpdate &&
                ((this._needsOutlineLabelOffsetUpdate = !1),
                this._updateOutlineLabelOffset());
            },
            { injector: this._injector },
          ),
          this._dir.change
            .pipe(mt(this._destroyed))
            .subscribe(() => (this._needsOutlineLabelOffsetUpdate = !0));
      }
      _shouldAlwaysFloat() {
        return this.floatLabel === "always";
      }
      _hasOutline() {
        return this.appearance === "outline";
      }
      _forceDisplayInfixLabel() {
        return (
          !this._platform.isBrowser &&
          this._prefixChildren.length &&
          !this._shouldLabelFloat()
        );
      }
      _shouldLabelFloat() {
        return this._hasFloatingLabel()
          ? this._control.shouldLabelFloat || this._shouldAlwaysFloat()
          : !1;
      }
      _shouldForward(t) {
        let n = this._control ? this._control.ngControl : null;
        return n && n[t];
      }
      _getDisplayedMessages() {
        return this._errorChildren &&
          this._errorChildren.length > 0 &&
          this._control.errorState
          ? "error"
          : "hint";
      }
      _handleLabelResized() {
        this._refreshOutlineNotchWidth();
      }
      _refreshOutlineNotchWidth() {
        !this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()
          ? this._notchedOutline?._setNotchWidth(0)
          : this._notchedOutline?._setNotchWidth(
              this._floatingLabel.getWidth(),
            );
      }
      _processHints() {
        this._validateHints(), this._syncDescribedByIds();
      }
      _validateHints() {
        this._hintChildren;
      }
      _syncDescribedByIds() {
        if (this._control) {
          let t = [];
          if (
            (this._control.userAriaDescribedBy &&
              typeof this._control.userAriaDescribedBy == "string" &&
              t.push(...this._control.userAriaDescribedBy.split(" ")),
            this._getDisplayedMessages() === "hint")
          ) {
            let n = this._hintChildren
                ? this._hintChildren.find((o) => o.align === "start")
                : null,
              r = this._hintChildren
                ? this._hintChildren.find((o) => o.align === "end")
                : null;
            n ? t.push(n.id) : this._hintLabel && t.push(this._hintLabelId),
              r && t.push(r.id);
          } else
            this._errorChildren &&
              t.push(...this._errorChildren.map((n) => n.id));
          this._control.setDescribedByIds(t);
        }
      }
      _updateOutlineLabelOffset() {
        if (!this._hasOutline() || !this._floatingLabel) return;
        let t = this._floatingLabel.element;
        if (!(this._iconPrefixContainer || this._textPrefixContainer)) {
          t.style.transform = "";
          return;
        }
        if (!this._isAttachedToDom()) {
          this._needsOutlineLabelOffsetUpdate = !0;
          return;
        }
        let n = this._iconPrefixContainer?.nativeElement,
          r = this._textPrefixContainer?.nativeElement,
          o = this._iconSuffixContainer?.nativeElement,
          a = this._textSuffixContainer?.nativeElement,
          c = n?.getBoundingClientRect().width ?? 0,
          s = r?.getBoundingClientRect().width ?? 0,
          d = o?.getBoundingClientRect().width ?? 0,
          l = a?.getBoundingClientRect().width ?? 0,
          h = this._dir.value === "rtl" ? "-1" : "1",
          w = `${c + s}px`,
          A = `calc(${h} * (${w} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;
        t.style.transform = `var(
        --mat-mdc-form-field-label-transform,
        ${Ku} translateX(${A})
    )`;
        let k = c + s + d + l;
        this._elementRef.nativeElement.style.setProperty(
          "--mat-form-field-notch-max-width",
          `calc(100% - ${k}px)`,
        );
      }
      _isAttachedToDom() {
        let t = this._elementRef.nativeElement;
        if (t.getRootNode) {
          let n = t.getRootNode();
          return n && n !== t;
        }
        return document.documentElement.contains(t);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(
            p(P),
            p($t),
            p(M),
            p(Oa),
            p(H),
            p(Zu, 8),
            p(ht, 8),
            p(O),
          );
        };
      }
      static {
        this.ɵcmp = et({
          type: e,
          selectors: [["mat-form-field"]],
          contentQueries: function (n, r, o) {
            if (
              (n & 1 &&
                (uo(o, r._labelChild, Ds, 5),
                Ht(o, Pr, 5),
                Ht(o, $u, 5),
                Ht(o, Gu, 5),
                Ht(o, Bu, 5),
                Ht(o, As, 5)),
              n & 2)
            ) {
              mo();
              let a;
              z((a = B())) && (r._formFieldControl = a.first),
                z((a = B())) && (r._prefixChildren = a),
                z((a = B())) && (r._suffixChildren = a),
                z((a = B())) && (r._errorChildren = a),
                z((a = B())) && (r._hintChildren = a);
            }
          },
          viewQuery: function (n, r) {
            if (
              (n & 1 &&
                (at(vu, 5),
                at(_u, 5),
                at(yu, 5),
                at(xu, 5),
                at(wu, 5),
                at(Ss, 5),
                at(Ts, 5),
                at(ks, 5)),
              n & 2)
            ) {
              let o;
              z((o = B())) && (r._textField = o.first),
                z((o = B())) && (r._iconPrefixContainer = o.first),
                z((o = B())) && (r._textPrefixContainer = o.first),
                z((o = B())) && (r._iconSuffixContainer = o.first),
                z((o = B())) && (r._textSuffixContainer = o.first),
                z((o = B())) && (r._floatingLabel = o.first),
                z((o = B())) && (r._notchedOutline = o.first),
                z((o = B())) && (r._lineRipple = o.first);
            }
          },
          hostAttrs: [1, "mat-mdc-form-field"],
          hostVars: 42,
          hostBindings: function (n, r) {
            n & 2 &&
              j(
                "mat-mdc-form-field-label-always-float",
                r._shouldAlwaysFloat(),
              )("mat-mdc-form-field-has-icon-prefix", r._hasIconPrefix)(
                "mat-mdc-form-field-has-icon-suffix",
                r._hasIconSuffix,
              )("mat-form-field-invalid", r._control.errorState)(
                "mat-form-field-disabled",
                r._control.disabled,
              )("mat-form-field-autofilled", r._control.autofilled)(
                "mat-form-field-no-animations",
                r._animationMode === "NoopAnimations",
              )("mat-form-field-appearance-fill", r.appearance == "fill")(
                "mat-form-field-appearance-outline",
                r.appearance == "outline",
              )(
                "mat-form-field-hide-placeholder",
                r._hasFloatingLabel() && !r._shouldLabelFloat(),
              )("mat-focused", r._control.focused)(
                "mat-primary",
                r.color !== "accent" && r.color !== "warn",
              )("mat-accent", r.color === "accent")(
                "mat-warn",
                r.color === "warn",
              )("ng-untouched", r._shouldForward("untouched"))(
                "ng-touched",
                r._shouldForward("touched"),
              )("ng-pristine", r._shouldForward("pristine"))(
                "ng-dirty",
                r._shouldForward("dirty"),
              )("ng-valid", r._shouldForward("valid"))(
                "ng-invalid",
                r._shouldForward("invalid"),
              )("ng-pending", r._shouldForward("pending"));
          },
          inputs: {
            hideRequiredMarker: "hideRequiredMarker",
            color: "color",
            floatLabel: "floatLabel",
            appearance: "appearance",
            subscriptSizing: "subscriptSizing",
            hintLabel: "hintLabel",
          },
          exportAs: ["matFormField"],
          standalone: !0,
          features: [
            Mt([
              { provide: Lr, useExisting: e },
              { provide: Ps, useExisting: e },
            ]),
            rt,
          ],
          ngContentSelectors: Iu,
          decls: 18,
          vars: 21,
          consts: [
            ["labelTemplate", ""],
            ["textField", ""],
            ["iconPrefixContainer", ""],
            ["textPrefixContainer", ""],
            ["textSuffixContainer", ""],
            ["iconSuffixContainer", ""],
            [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"],
            [1, "mat-mdc-form-field-focus-overlay"],
            [1, "mat-mdc-form-field-flex"],
            [
              "matFormFieldNotchedOutline",
              "",
              3,
              "matFormFieldNotchedOutlineOpen",
            ],
            [1, "mat-mdc-form-field-icon-prefix"],
            [1, "mat-mdc-form-field-text-prefix"],
            [1, "mat-mdc-form-field-infix"],
            [3, "ngTemplateOutlet"],
            [1, "mat-mdc-form-field-text-suffix"],
            [1, "mat-mdc-form-field-icon-suffix"],
            ["matFormFieldLineRipple", ""],
            [
              1,
              "mat-mdc-form-field-subscript-wrapper",
              "mat-mdc-form-field-bottom-align",
            ],
            [1, "mat-mdc-form-field-error-wrapper"],
            [1, "mat-mdc-form-field-hint-wrapper"],
            [
              "matFormFieldFloatingLabel",
              "",
              3,
              "floating",
              "monitorResize",
              "id",
            ],
            [
              "aria-hidden",
              "true",
              1,
              "mat-mdc-form-field-required-marker",
              "mdc-floating-label--required",
            ],
            [3, "id"],
            [1, "mat-mdc-form-field-hint-spacer"],
          ],
          template: function (n, r) {
            if (n & 1) {
              let o = lo();
              Nt(Cu),
                V(0, Du, 1, 1, "ng-template", null, 0, gi),
                y(2, "div", 6, 1),
                J("click", function (c) {
                  return Kr(o), Qr(r._control.onContainerClick(c));
                }),
                V(4, Au, 1, 0, "div", 7),
                y(5, "div", 8),
                V(6, ku, 2, 2, "div", 9)(7, Tu, 3, 0, "div", 10)(
                  8,
                  Fu,
                  3,
                  0,
                  "div",
                  11,
                ),
                y(9, "div", 12),
                V(10, Nu, 1, 1, null, 13),
                $(11),
                x(),
                V(12, Pu, 3, 0, "div", 14)(13, Lu, 3, 0, "div", 15),
                x(),
                V(14, Vu, 1, 0, "div", 16),
                x(),
                y(15, "div", 17),
                V(16, ju, 2, 1, "div", 18)(17, zu, 5, 2, "div", 19),
                x();
            }
            if (n & 2) {
              let o;
              C(2),
                j("mdc-text-field--filled", !r._hasOutline())(
                  "mdc-text-field--outlined",
                  r._hasOutline(),
                )("mdc-text-field--no-label", !r._hasFloatingLabel())(
                  "mdc-text-field--disabled",
                  r._control.disabled,
                )("mdc-text-field--invalid", r._control.errorState),
                C(2),
                X(!r._hasOutline() && !r._control.disabled ? 4 : -1),
                C(2),
                X(r._hasOutline() ? 6 : -1),
                C(),
                X(r._hasIconPrefix ? 7 : -1),
                C(),
                X(r._hasTextPrefix ? 8 : -1),
                C(2),
                X(!r._hasOutline() || r._forceDisplayInfixLabel() ? 10 : -1),
                C(2),
                X(r._hasTextSuffix ? 12 : -1),
                C(),
                X(r._hasIconSuffix ? 13 : -1),
                C(),
                X(r._hasOutline() ? -1 : 14),
                C(),
                j(
                  "mat-mdc-form-field-subscript-dynamic-size",
                  r.subscriptSizing === "dynamic",
                ),
                C(),
                X(
                  (o = r._getDisplayedMessages()) === "error"
                    ? 16
                    : o === "hint"
                      ? 17
                      : -1,
                );
            }
          },
          dependencies: [Ss, Ts, yi, ks, As],
          styles: [
            '.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color, var(--mat-app-on-surface));caret-color:var(--mdc-filled-text-field-caret-color, var(--mat-app-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color, var(--mat-app-on-surface));caret-color:var(--mdc-outlined-text-field-caret-color, var(--mat-app-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--disabled .cdk-high-contrast-active .mdc-text-field__input{background-color:Window}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mdc-filled-text-field-container-shape, var(--mat-app-corner-extra-small-top));border-top-right-radius:var(--mdc-filled-text-field-container-shape, var(--mat-app-corner-extra-small-top))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color, var(--mat-app-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)));padding-left:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)) + 4px);padding-left:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.cdk-high-contrast-active .mdc-text-field--disabled .mdc-floating-label{z-index:1}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mdc-filled-text-field-label-text-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mdc-filled-text-field-focus-label-text-color, var(--mat-app-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mdc-filled-text-field-hover-label-text-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mdc-filled-text-field-error-label-text-color, var(--mat-app-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mdc-filled-text-field-error-focus-label-text-color, var(--mat-app-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mdc-filled-text-field-error-hover-label-text-color, var(--mat-app-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font, var(--mat-app-body-large-font));font-size:var(--mdc-filled-text-field-label-text-size, var(--mat-app-body-large-size));font-weight:var(--mdc-filled-text-field-label-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mdc-filled-text-field-label-text-tracking, var(--mat-app-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mdc-outlined-text-field-label-text-color, var(--mat-app-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mdc-outlined-text-field-focus-label-text-color, var(--mat-app-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mdc-outlined-text-field-hover-label-text-color, var(--mat-app-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mdc-outlined-text-field-error-label-text-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mdc-outlined-text-field-error-focus-label-text-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mdc-outlined-text-field-error-hover-label-text-color, var(--mat-app-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font, var(--mat-app-body-large-font));font-size:var(--mdc-outlined-text-field-label-text-size, var(--mat-app-body-large-size));font-weight:var(--mdc-outlined-text-field-label-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mdc-outlined-text-field-label-text-tracking, var(--mat-app-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-outline-color, var(--mat-app-outline));border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-hover-outline-color, var(--mat-app-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-focus-outline-color, var(--mat-app-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-outline-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-hover-outline-color, var(--mat-app-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-focus-outline-color, var(--mat-app-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small));border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),100% - max(12px,var(--mdc-outlined-text-field-container-shape, var(--mat-app-corner-extra-small)))*2)}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none;--mat-form-field-notch-max-width: 100%}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color, var(--mat-app-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color, var(--mat-app-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color, var(--mat-app-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color, var(--mat-app-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color, var(--mat-app-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color, var(--mat-app-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-app-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-app-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-app-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-app-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-app-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-app-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-app-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-app-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-app-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-app-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-app-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-app-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-app-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-app-body-large-weight))}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-app-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-app-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-app-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-app-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}',
          ],
          encapsulation: 2,
          data: { animation: [qu.transitionMessages] },
          changeDetection: 0,
        });
      }
    }
    return e;
  })(),
  Vr = (() => {
    class e {
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵmod = R({ type: e });
      }
      static {
        this.ɵinj = S({ imports: [Q, St, Ma, Q] });
      }
    }
    return e;
  })();
var Xu = new v("MAT_INPUT_VALUE_ACCESSOR"),
  Ju = [
    "button",
    "checkbox",
    "file",
    "hidden",
    "image",
    "radio",
    "range",
    "reset",
    "submit",
  ],
  tm = 0,
  Vs = (() => {
    class e {
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        (this._disabled = Kt(t)),
          this.focused && ((this.focused = !1), this.stateChanges.next());
      }
      get id() {
        return this._id;
      }
      set id(t) {
        this._id = t || this._uid;
      }
      get required() {
        return (
          this._required ??
          this.ngControl?.control?.hasValidator(Gi.required) ??
          !1
        );
      }
      set required(t) {
        this._required = Kt(t);
      }
      get type() {
        return this._type;
      }
      set type(t) {
        (this._type = t || "text"),
          this._validateType(),
          !this._isTextarea &&
            fr().has(this._type) &&
            (this._elementRef.nativeElement.type = this._type),
          this._ensureWheelDefaultBehavior();
      }
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(t) {
        this._errorStateTracker.matcher = t;
      }
      get value() {
        return this._inputValueAccessor.value;
      }
      set value(t) {
        t !== this.value &&
          ((this._inputValueAccessor.value = t), this.stateChanges.next());
      }
      get readonly() {
        return this._readonly;
      }
      set readonly(t) {
        this._readonly = Kt(t);
      }
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(t) {
        this._errorStateTracker.errorState = t;
      }
      constructor(t, n, r, o, a, c, s, d, l, h) {
        (this._elementRef = t),
          (this._platform = n),
          (this.ngControl = r),
          (this._autofillMonitor = d),
          (this._ngZone = l),
          (this._formField = h),
          (this._uid = `mat-input-${tm++}`),
          (this._webkitBlinkWheelListenerAttached = !1),
          (this.focused = !1),
          (this.stateChanges = new F()),
          (this.controlType = "mat-input"),
          (this.autofilled = !1),
          (this._disabled = !1),
          (this._type = "text"),
          (this._readonly = !1),
          (this._neverEmptyInputTypes = [
            "date",
            "datetime",
            "datetime-local",
            "month",
            "time",
            "week",
          ].filter((A) => fr().has(A))),
          (this._iOSKeyupListener = (A) => {
            let k = A.target;
            !k.value &&
              k.selectionStart === 0 &&
              k.selectionEnd === 0 &&
              (k.setSelectionRange(1, 1), k.setSelectionRange(0, 0));
          }),
          (this._webkitBlinkWheelListener = () => {});
        let w = this._elementRef.nativeElement,
          G = w.nodeName.toLowerCase();
        (this._inputValueAccessor = s || w),
          (this._previousNativeValue = this.value),
          (this.id = this.id),
          n.IOS &&
            l.runOutsideAngular(() => {
              t.nativeElement.addEventListener("keyup", this._iOSKeyupListener);
            }),
          (this._errorStateTracker = new Hi(c, r, a, o, this.stateChanges)),
          (this._isServer = !this._platform.isBrowser),
          (this._isNativeSelect = G === "select"),
          (this._isTextarea = G === "textarea"),
          (this._isInFormField = !!h),
          this._isNativeSelect &&
            (this.controlType = w.multiple
              ? "mat-native-select-multiple"
              : "mat-native-select");
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          this._autofillMonitor
            .monitor(this._elementRef.nativeElement)
            .subscribe((t) => {
              (this.autofilled = t.isAutofilled), this.stateChanges.next();
            });
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete(),
          this._platform.isBrowser &&
            this._autofillMonitor.stopMonitoring(
              this._elementRef.nativeElement,
            ),
          this._platform.IOS &&
            this._elementRef.nativeElement.removeEventListener(
              "keyup",
              this._iOSKeyupListener,
            ),
          this._webkitBlinkWheelListenerAttached &&
            this._elementRef.nativeElement.removeEventListener(
              "wheel",
              this._webkitBlinkWheelListener,
            );
      }
      ngDoCheck() {
        this.ngControl &&
          (this.updateErrorState(),
          this.ngControl.disabled !== null &&
            this.ngControl.disabled !== this.disabled &&
            ((this.disabled = this.ngControl.disabled),
            this.stateChanges.next())),
          this._dirtyCheckNativeValue(),
          this._dirtyCheckPlaceholder();
      }
      focus(t) {
        this._elementRef.nativeElement.focus(t);
      }
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      _focusChanged(t) {
        t !== this.focused && ((this.focused = t), this.stateChanges.next());
      }
      _onInput() {}
      _dirtyCheckNativeValue() {
        let t = this._elementRef.nativeElement.value;
        this._previousNativeValue !== t &&
          ((this._previousNativeValue = t), this.stateChanges.next());
      }
      _dirtyCheckPlaceholder() {
        let t = this._getPlaceholder();
        if (t !== this._previousPlaceholder) {
          let n = this._elementRef.nativeElement;
          (this._previousPlaceholder = t),
            t
              ? n.setAttribute("placeholder", t)
              : n.removeAttribute("placeholder");
        }
      }
      _getPlaceholder() {
        return this.placeholder || null;
      }
      _validateType() {
        Ju.indexOf(this._type) > -1;
      }
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      _isBadInput() {
        let t = this._elementRef.nativeElement.validity;
        return t && t.badInput;
      }
      get empty() {
        return (
          !this._isNeverEmpty() &&
          !this._elementRef.nativeElement.value &&
          !this._isBadInput() &&
          !this.autofilled
        );
      }
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          let t = this._elementRef.nativeElement,
            n = t.options[0];
          return (
            this.focused ||
            t.multiple ||
            !this.empty ||
            !!(t.selectedIndex > -1 && n && n.label)
          );
        } else return this.focused || !this.empty;
      }
      setDescribedByIds(t) {
        t.length
          ? this._elementRef.nativeElement.setAttribute(
              "aria-describedby",
              t.join(" "),
            )
          : this._elementRef.nativeElement.removeAttribute("aria-describedby");
      }
      onContainerClick() {
        this.focused || this.focus();
      }
      _isInlineSelect() {
        let t = this._elementRef.nativeElement;
        return this._isNativeSelect && (t.multiple || t.size > 1);
      }
      _ensureWheelDefaultBehavior() {
        !this._webkitBlinkWheelListenerAttached &&
          this._type === "number" &&
          (this._platform.BLINK || this._platform.WEBKIT) &&
          (this._ngZone.runOutsideAngular(() => {
            this._elementRef.nativeElement.addEventListener(
              "wheel",
              this._webkitBlinkWheelListener,
            );
          }),
          (this._webkitBlinkWheelListenerAttached = !0)),
          this._webkitBlinkWheelListenerAttached &&
            this._type !== "number" &&
            (this._elementRef.nativeElement.removeEventListener(
              "wheel",
              this._webkitBlinkWheelListener,
            ),
            (this._webkitBlinkWheelListenerAttached = !0));
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(
            p(P),
            p(H),
            p(Zi, 10),
            p(Fr, 8),
            p(Or, 8),
            p(Ha),
            p(Xu, 10),
            p(Xa),
            p(M),
            p(Lr, 8),
          );
        };
      }
      static {
        this.ɵdir = N({
          type: e,
          selectors: [
            ["input", "matInput", ""],
            ["textarea", "matInput", ""],
            ["select", "matNativeControl", ""],
            ["input", "matNativeControl", ""],
            ["textarea", "matNativeControl", ""],
          ],
          hostAttrs: [1, "mat-mdc-input-element"],
          hostVars: 18,
          hostBindings: function (n, r) {
            n & 1 &&
              J("focus", function () {
                return r._focusChanged(!0);
              })("blur", function () {
                return r._focusChanged(!1);
              })("input", function () {
                return r._onInput();
              }),
              n & 2 &&
                (De("id", r.id)("disabled", r.disabled)("required", r.required),
                q("name", r.name || null)(
                  "readonly",
                  (r.readonly && !r._isNativeSelect) || null,
                )("aria-invalid", r.empty && r.required ? null : r.errorState)(
                  "aria-required",
                  r.required,
                )("id", r.id),
                j("mat-input-server", r._isServer)(
                  "mat-mdc-form-field-textarea-control",
                  r._isInFormField && r._isTextarea,
                )("mat-mdc-form-field-input-control", r._isInFormField)(
                  "mdc-text-field__input",
                  r._isInFormField,
                )("mat-mdc-native-select-inline", r._isInlineSelect()));
          },
          inputs: {
            disabled: "disabled",
            id: "id",
            placeholder: "placeholder",
            name: "name",
            required: "required",
            type: "type",
            errorStateMatcher: "errorStateMatcher",
            userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
            value: "value",
            readonly: "readonly",
          },
          exportAs: ["matInput"],
          standalone: !0,
          features: [Mt([{ provide: Pr, useExisting: e }]), zt],
        });
      }
    }
    return e;
  })(),
  js = (() => {
    class e {
      static {
        this.ɵfac = function (n) {
          return new (n || e)();
        };
      }
      static {
        this.ɵmod = R({ type: e });
      }
      static {
        this.ɵinj = S({ imports: [Q, Vr, Vr, Ja, Q] });
      }
    }
    return e;
  })();
var im = ["determinateSpinner"];
function nm(e, i) {
  if ((e & 1 && (mn(), y(0, "svg", 11), U(1, "circle", 12), x()), e & 2)) {
    let t = nt();
    q("viewBox", t._viewBox()),
      C(),
      hi("stroke-dasharray", t._strokeCircumference(), "px")(
        "stroke-dashoffset",
        t._strokeCircumference() / 2,
        "px",
      )("stroke-width", t._circleStrokeWidth(), "%"),
      q("r", t._circleRadius());
  }
}
var rm = new v("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: om,
});
function om() {
  return { diameter: Us };
}
var Us = 100,
  am = 10,
  zs = (() => {
    class e {
      get color() {
        return this._color || this._defaultColor;
      }
      set color(t) {
        this._color = t;
      }
      constructor(t, n, r) {
        (this._elementRef = t),
          (this._defaultColor = "primary"),
          (this._value = 0),
          (this._diameter = Us),
          (this._noopAnimations =
            n === "NoopAnimations" && !!r && !r._forceAnimations),
          (this.mode =
            t.nativeElement.nodeName.toLowerCase() === "mat-spinner"
              ? "indeterminate"
              : "determinate"),
          r &&
            (r.color && (this.color = this._defaultColor = r.color),
            r.diameter && (this.diameter = r.diameter),
            r.strokeWidth && (this.strokeWidth = r.strokeWidth));
      }
      get value() {
        return this.mode === "determinate" ? this._value : 0;
      }
      set value(t) {
        this._value = Math.max(0, Math.min(100, t || 0));
      }
      get diameter() {
        return this._diameter;
      }
      set diameter(t) {
        this._diameter = t || 0;
      }
      get strokeWidth() {
        return this._strokeWidth ?? this.diameter / 10;
      }
      set strokeWidth(t) {
        this._strokeWidth = t || 0;
      }
      _circleRadius() {
        return (this.diameter - am) / 2;
      }
      _viewBox() {
        let t = this._circleRadius() * 2 + this.strokeWidth;
        return `0 0 ${t} ${t}`;
      }
      _strokeCircumference() {
        return 2 * Math.PI * this._circleRadius();
      }
      _strokeDashOffset() {
        return this.mode === "determinate"
          ? (this._strokeCircumference() * (100 - this._value)) / 100
          : null;
      }
      _circleStrokeWidth() {
        return (this.strokeWidth / this.diameter) * 100;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || e)(p(P), p(ht, 8), p(rm));
        };
      }
      static {
        this.ɵcmp = et({
          type: e,
          selectors: [["mat-progress-spinner"], ["mat-spinner"]],
          viewQuery: function (n, r) {
            if ((n & 1 && at(im, 5), n & 2)) {
              let o;
              z((o = B())) && (r._determinateCircle = o.first);
            }
          },
          hostAttrs: [
            "role",
            "progressbar",
            "tabindex",
            "-1",
            1,
            "mat-mdc-progress-spinner",
            "mdc-circular-progress",
          ],
          hostVars: 18,
          hostBindings: function (n, r) {
            n & 2 &&
              (q("aria-valuemin", 0)("aria-valuemax", 100)(
                "aria-valuenow",
                r.mode === "determinate" ? r.value : null,
              )("mode", r.mode),
              pi("mat-" + r.color),
              hi("width", r.diameter, "px")("height", r.diameter, "px")(
                "--mdc-circular-progress-size",
                r.diameter + "px",
              )(
                "--mdc-circular-progress-active-indicator-width",
                r.diameter + "px",
              ),
              j("_mat-animation-noopable", r._noopAnimations)(
                "mdc-circular-progress--indeterminate",
                r.mode === "indeterminate",
              ));
          },
          inputs: {
            color: "color",
            mode: "mode",
            value: [2, "value", "value", Se],
            diameter: [2, "diameter", "diameter", Se],
            strokeWidth: [2, "strokeWidth", "strokeWidth", Se],
          },
          exportAs: ["matProgressSpinner"],
          standalone: !0,
          features: [It, rt],
          decls: 14,
          vars: 11,
          consts: [
            ["circle", ""],
            ["determinateSpinner", ""],
            [
              "aria-hidden",
              "true",
              1,
              "mdc-circular-progress__determinate-container",
            ],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "focusable",
              "false",
              1,
              "mdc-circular-progress__determinate-circle-graphic",
            ],
            [
              "cx",
              "50%",
              "cy",
              "50%",
              1,
              "mdc-circular-progress__determinate-circle",
            ],
            [
              "aria-hidden",
              "true",
              1,
              "mdc-circular-progress__indeterminate-container",
            ],
            [1, "mdc-circular-progress__spinner-layer"],
            [
              1,
              "mdc-circular-progress__circle-clipper",
              "mdc-circular-progress__circle-left",
            ],
            [3, "ngTemplateOutlet"],
            [1, "mdc-circular-progress__gap-patch"],
            [
              1,
              "mdc-circular-progress__circle-clipper",
              "mdc-circular-progress__circle-right",
            ],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "focusable",
              "false",
              1,
              "mdc-circular-progress__indeterminate-circle-graphic",
            ],
            ["cx", "50%", "cy", "50%"],
          ],
          template: function (n, r) {
            if (
              (n & 1 &&
                (V(0, nm, 2, 8, "ng-template", null, 0, gi),
                y(2, "div", 2, 1),
                mn(),
                y(4, "svg", 3),
                U(5, "circle", 4),
                x()(),
                Xr(),
                y(6, "div", 5)(7, "div", 6)(8, "div", 7),
                fi(9, 8),
                x(),
                y(10, "div", 9),
                fi(11, 8),
                x(),
                y(12, "div", 10),
                fi(13, 8),
                x()()()),
              n & 2)
            ) {
              let o = Ae(1);
              C(4),
                q("viewBox", r._viewBox()),
                C(),
                hi("stroke-dasharray", r._strokeCircumference(), "px")(
                  "stroke-dashoffset",
                  r._strokeDashOffset(),
                  "px",
                )("stroke-width", r._circleStrokeWidth(), "%"),
                q("r", r._circleRadius()),
                C(4),
                L("ngTemplateOutlet", o),
                C(2),
                L("ngTemplateOutlet", o),
                C(2),
                L("ngTemplateOutlet", o);
            }
          },
          dependencies: [yi],
          styles: [
            ".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-app-primary))}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}",
          ],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return e;
  })();
var Bs = (() => {
  class e {
    static {
      this.ɵfac = function (n) {
        return new (n || e)();
      };
    }
    static {
      this.ɵmod = R({ type: e });
    }
    static {
      this.ɵinj = S({ imports: [St, Q] });
    }
  }
  return e;
})();
function cm(e, i) {
  if ((e & 1 && (y(0, "p", 13), vt(1), x()), e & 2)) {
    let t = nt();
    C(), pn(" Gefundene UUID: ", t.deviceUUID, " ");
  }
}
function dm(e, i) {
  e & 1 && U(0, "mat-progress-spinner", 14);
}
var Hs = (() => {
  class e {
    isConnected = bt(!1);
    isConnecting = bt(!1);
    deviceUUID = null;
    outputMessages = [];
    socket = null;
    logMessage(t) {
      this.outputMessages.push(t);
    }
    openConnection() {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.logMessage("WebSocket ist bereits verbunden.");
        return;
      }
      this.isConnecting.set(!0),
        window.omnai?.startBackend &&
          window.omnai.startBackend().then(() => {
            this.logMessage("WebSocket-Server wird gestartet...");
          }),
        (this.socket = new WebSocket("ws://127.0.0.1:8080/ws")),
        this.socket.addEventListener("open", () => {
          this.logMessage("WebSocket verbunden!"),
            this.isConnected.set(!0),
            this.isConnecting.set(!1);
        }),
        this.socket.addEventListener("message", (t) => {
          this.logMessage(`Nachricht vom Server: ${t.data}`);
        }),
        this.socket.addEventListener("close", () => {
          this.logMessage("WebSocket Verbindung geschlossen."),
            this.isConnected.set(!1),
            this.isConnecting.set(!1);
        }),
        this.socket.addEventListener("error", (t) => {
          this.logMessage(`WebSocket Fehler: ${t}`), this.isConnecting.set(!1);
        });
    }
    searchDevices() {
      window.omnai?.sendCommand &&
        (window.omnai.sendCommand(["-s"]),
        this.logMessage("Suche nach Ger\xE4ten..."));
    }
    startDevice() {
      if (!this.deviceUUID) {
        this.logMessage("Keine UUID gefunden. Bitte zuerst Ger\xE4te suchen.");
        return;
      }
      window.omnai?.sendCommand &&
        (window.omnai.sendCommand(["-d", this.deviceUUID]),
        this.logMessage(
          `Ger\xE4tedaten f\xFCr UUID ${this.deviceUUID} werden abgerufen...`,
        ));
    }
    closeConnection() {
      this.socket && this.socket.readyState === WebSocket.OPEN
        ? (this.socket.close(),
          this.logMessage("Schlie\xDFe WebSocket-Verbindung..."))
        : this.logMessage("WebSocket ist bereits geschlossen.");
    }
    ngAfterViewInit() {
      window.omnai &&
        (window.omnai.onOutput((t) => {
          this.logMessage(`Ausgabe: ${t}`);
          let n = t.match(/Device:\s+([A-F0-9]+)/i);
          n &&
            ((this.deviceUUID = n[1]),
            this.logMessage(`Gefundene UUID: ${this.deviceUUID}`));
        }),
        window.omnai.onError((t) => {
          this.logMessage(`Fehler: ${t}`);
        }),
        window.omnai.onClosed((t) => {
          this.logMessage(t);
        }));
    }
    ngOnInit() {}
    static ɵfac = function (n) {
      return new (n || e)();
    };
    static ɵcmp = et({
      type: e,
      selectors: [["app-main-page"]],
      standalone: !0,
      features: [rt],
      decls: 19,
      vars: 7,
      consts: [
        [
          1,
          "flex",
          "flex-col",
          "items-center",
          "p-6",
          "space-y-6",
          "max-w-2xl",
          "mx-auto",
        ],
        [1, "text-3xl", "font-bold", "text-center", "text-blue-600"],
        [1, "w-full", "shadow-lg", "p-6", "space-y-4"],
        [1, "flex", "flex-col", "space-y-4"],
        ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"],
        ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"],
        ["mat-raised-button", "", "color", "warn", 3, "click", "disabled"],
        ["mat-raised-button", "", 3, "click", "disabled"],
        [1, "w-full", "shadow-lg", "p-6"],
        ["class", "text-lg font-semibold text-green-600", 4, "ngIf"],
        [1, "w-full"],
        ["matInput", "", "readonly", "", "rows", "10", 3, "value"],
        ["mode", "indeterminate", 4, "ngIf"],
        [1, "text-lg", "font-semibold", "text-green-600"],
        ["mode", "indeterminate"],
      ],
      template: function (n, r) {
        n & 1 &&
          (y(0, "div", 0)(1, "h1", 1),
          vt(2, " OmnAI Electron App "),
          x(),
          y(3, "mat-card", 2)(4, "div", 3)(5, "button", 4),
          J("click", function () {
            return r.openConnection();
          }),
          vt(6, " Verbindung suchen "),
          x(),
          y(7, "button", 5),
          J("click", function () {
            return r.searchDevices();
          }),
          vt(8, " Ger\xE4te suchen "),
          x(),
          y(9, "button", 6),
          J("click", function () {
            return r.startDevice();
          }),
          vt(10, " Daten abfragen "),
          x(),
          y(11, "button", 7),
          J("click", function () {
            return r.closeConnection();
          }),
          vt(12, " Verbindung beenden "),
          x()()(),
          y(13, "mat-card", 8),
          V(14, cm, 2, 1, "p", 9),
          x(),
          y(15, "mat-card", 8)(16, "mat-form-field", 10),
          U(17, "textarea", 11),
          x()(),
          V(18, dm, 1, 0, "mat-progress-spinner", 12),
          x()),
          n & 2 &&
            (C(5),
            L("disabled", r.isConnecting),
            C(2),
            L("disabled", !r.isConnected),
            C(2),
            L("disabled", !r.deviceUUID),
            C(2),
            L("disabled", !r.isConnected),
            C(3),
            L("ngIf", r.deviceUUID),
            C(3),
            L(
              "value",
              r.outputMessages.join(`
`),
            ),
            C(),
            L("ngIf", r.isConnecting));
      },
      dependencies: [St, yo, Za, qa, Ka, Ya, js, Vs, Ls, Bs, zs],
      styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"],
    });
  }
  return e;
})();
Oo(Hs, xa).catch((e) => console.error(e));
