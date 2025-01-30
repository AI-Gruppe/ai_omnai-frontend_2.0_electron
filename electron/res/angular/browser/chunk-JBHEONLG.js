var gl = Object.defineProperty,
  ml = Object.defineProperties;
var yl = Object.getOwnPropertyDescriptors;
var tn = Object.getOwnPropertySymbols;
var as = Object.prototype.hasOwnProperty,
  us = Object.prototype.propertyIsEnumerable;
var ss = (e, t, n) =>
    t in e
      ? gl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ye = (e, t) => {
    for (var n in (t ||= {})) as.call(t, n) && ss(e, n, t[n]);
    if (tn) for (var n of tn(t)) us.call(t, n) && ss(e, n, t[n]);
    return e;
  },
  De = (e, t) => ml(e, yl(t));
var ly = (e, t) => {
  var n = {};
  for (var r in e) as.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && tn)
    for (var r of tn(e)) t.indexOf(r) < 0 && us.call(e, r) && (n[r] = e[r]);
  return n;
};
function cs(e, t) {
  return Object.is(e, t);
}
var k = null,
  nn = !1,
  rn = 1,
  le = Symbol("SIGNAL");
function C(e) {
  let t = k;
  return (k = e), t;
}
function ls() {
  return k;
}
var Lt = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function $r(e) {
  if (nn) throw new Error("");
  if (k === null) return;
  k.consumerOnSignalRead(e);
  let t = k.nextProducerIndex++;
  if ((un(k), t < k.producerNode.length && k.producerNode[t] !== e && kt(k))) {
    let n = k.producerNode[t];
    an(n, k.producerIndexOfThis[t]);
  }
  k.producerNode[t] !== e &&
    ((k.producerNode[t] = e),
    (k.producerIndexOfThis[t] = kt(k) ? ps(e, k, t) : 0)),
    (k.producerLastReadVersion[t] = e.version);
}
function Dl() {
  rn++;
}
function ds(e) {
  if (!(kt(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === rn)) {
    if (!e.producerMustRecompute(e) && !Ur(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = rn);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = rn);
  }
}
function fs(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = nn;
  nn = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || vl(n);
  } finally {
    nn = t;
  }
}
function hs() {
  return k?.consumerAllowSignalWrites !== !1;
}
function vl(e) {
  (e.dirty = !0), fs(e), e.consumerMarkedDirty?.(e);
}
function sn(e) {
  return e && (e.nextProducerIndex = 0), C(e);
}
function Hr(e, t) {
  if (
    (C(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (kt(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        an(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function Ur(e) {
  un(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (ds(n), r !== n.version)) return !0;
  }
  return !1;
}
function zr(e) {
  if ((un(e), kt(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      an(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function ps(e, t, n) {
  if ((gs(e), e.liveConsumerNode.length === 0 && ms(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = ps(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function an(e, t) {
  if ((gs(e), e.liveConsumerNode.length === 1 && ms(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      an(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let r = e.liveConsumerIndexOfThis[t],
      o = e.liveConsumerNode[t];
    un(o), (o.producerIndexOfThis[r] = t);
  }
}
function kt(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function un(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function gs(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function ms(e) {
  return e.producerNode !== void 0;
}
function Gr(e) {
  let t = Object.create(Il);
  t.computation = e;
  let n = () => {
    if ((ds(t), $r(t), t.value === on)) throw t.error;
    return t.value;
  };
  return (n[le] = t), n;
}
var Vr = Symbol("UNSET"),
  Br = Symbol("COMPUTING"),
  on = Symbol("ERRORED"),
  Il = De(ye({}, Lt), {
    value: Vr,
    dirty: !0,
    error: null,
    equal: cs,
    producerMustRecompute(e) {
      return e.value === Vr || e.value === Br;
    },
    producerRecomputeValue(e) {
      if (e.value === Br) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = Br;
      let n = sn(e),
        r;
      try {
        r = e.computation();
      } catch (o) {
        (r = on), (e.error = o);
      } finally {
        Hr(e, n);
      }
      if (t !== Vr && t !== on && r !== on && e.equal(t, r)) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function wl() {
  throw new Error();
}
var ys = wl;
function Ds() {
  ys();
}
function vs(e) {
  ys = e;
}
var El = null;
function Is(e) {
  let t = Object.create(Es);
  t.value = e;
  let n = () => ($r(t), t.value);
  return (n[le] = t), n;
}
function Wr(e, t) {
  hs() || Ds(), e.equal(e.value, t) || ((e.value = t), Cl(e));
}
function ws(e, t) {
  hs() || Ds(), Wr(e, t(e.value));
}
var Es = De(ye({}, Lt), { equal: cs, value: void 0 });
function Cl(e) {
  e.version++, Dl(), fs(e), El?.();
}
function m(e) {
  return typeof e == "function";
}
function ct(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var cn = ct(
  (e) =>
    function (n) {
      e(this),
        (this.message = n
          ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = n);
    },
);
function Fe(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var R = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n)
        if (((this._parentage = null), Array.isArray(n)))
          for (let i of n) i.remove(this);
        else n.remove(this);
      let { initialTeardown: r } = this;
      if (m(r))
        try {
          r();
        } catch (i) {
          t = i instanceof cn ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            Cs(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof cn ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new cn(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) Cs(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || (Array.isArray(n) && n.includes(t));
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? (this._parentage = null) : Array.isArray(n) && Fe(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && Fe(n, t), t instanceof e && t._removeParent(this);
  }
};
R.EMPTY = (() => {
  let e = new R();
  return (e.closed = !0), e;
})();
var qr = R.EMPTY;
function ln(e) {
  return (
    e instanceof R ||
    (e && "closed" in e && m(e.remove) && m(e.add) && m(e.unsubscribe))
  );
}
function Cs(e) {
  m(e) ? e() : e.unsubscribe();
}
var ie = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var lt = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = lt;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = lt;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function dn(e) {
  lt.setTimeout(() => {
    let { onUnhandledError: t } = ie;
    if (t) t(e);
    else throw e;
  });
}
function jt() {}
var bs = Zr("C", void 0, void 0);
function _s(e) {
  return Zr("E", void 0, e);
}
function Ms(e) {
  return Zr("N", e, void 0);
}
function Zr(e, t, n) {
  return { kind: e, value: t, error: n };
}
var Re = null;
function dt(e) {
  if (ie.useDeprecatedSynchronousErrorHandling) {
    let t = !Re;
    if ((t && (Re = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = Re;
      if (((Re = null), n)) throw r;
    }
  } else e();
}
function xs(e) {
  ie.useDeprecatedSynchronousErrorHandling &&
    Re &&
    ((Re.errorThrown = !0), (Re.error = e));
}
var Pe = class extends R {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), ln(t) && t.add(this))
          : (this.destination = Ml);
    }
    static create(t, n, r) {
      return new ve(t, n, r);
    }
    next(t) {
      this.isStopped ? Qr(Ms(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? Qr(_s(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? Qr(bs, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  bl = Function.prototype.bind;
function Yr(e, t) {
  return bl.call(e, t);
}
var Kr = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          fn(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          fn(r);
        }
      else fn(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          fn(n);
        }
    }
  },
  ve = class extends Pe {
    constructor(t, n, r) {
      super();
      let o;
      if (m(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && ie.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && Yr(t.next, i),
              error: t.error && Yr(t.error, i),
              complete: t.complete && Yr(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new Kr(o);
    }
  };
function fn(e) {
  ie.useDeprecatedSynchronousErrorHandling ? xs(e) : dn(e);
}
function _l(e) {
  throw e;
}
function Qr(e, t) {
  let { onStoppedNotification: n } = ie;
  n && lt.setTimeout(() => n(e, t));
}
var Ml = { closed: !0, next: jt, error: _l, complete: jt };
var ft = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function B(e) {
  return e;
}
function xl(...e) {
  return Jr(e);
}
function Jr(e) {
  return e.length === 0
    ? B
    : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
}
var M = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = Tl(n) ? n : new ve(n, r, o);
      return (
        dt(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i),
          );
        }),
        i
      );
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return (
        (r = Ss(r)),
        new r((o, i) => {
          let s = new ve({
            next: (a) => {
              try {
                n(a);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [ft]() {
      return this;
    }
    pipe(...n) {
      return Jr(n)(this);
    }
    toPromise(n) {
      return (
        (n = Ss(n)),
        new n((r, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => r(i),
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function Ss(e) {
  var t;
  return (t = e ?? ie.Promise) !== null && t !== void 0 ? t : Promise;
}
function Sl(e) {
  return e && m(e.next) && m(e.error) && m(e.complete);
}
function Tl(e) {
  return (e && e instanceof Pe) || (Sl(e) && ln(e));
}
function Xr(e) {
  return m(e?.lift);
}
function D(e) {
  return (t) => {
    if (Xr(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function v(e, t, n, r, o) {
  return new eo(e, t, n, r, o);
}
var eo = class extends Pe {
  constructor(t, n, r, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (u) {
              t.error(u);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (u) {
              t.error(u);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = r
        ? function () {
            try {
              r();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function to() {
  return D((e, t) => {
    let n = null;
    e._refCount++;
    let r = v(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection,
        i = n;
      (n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}
var no = class extends M {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Xr(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new R();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          v(
            n,
            void 0,
            () => {
              this._teardown(), n.complete();
            },
            (r) => {
              this._teardown(), n.error(r);
            },
            () => this._teardown(),
          ),
        ),
      ),
        t.closed && ((this._connection = null), (t = R.EMPTY));
    }
    return t;
  }
  refCount() {
    return to()(this);
  }
};
var Ts = ct(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    },
);
var J = (() => {
    class e extends M {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(n) {
        let r = new hn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new Ts();
      }
      next(n) {
        dt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        dt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        dt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length; ) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var n;
        return (
          ((n = this.observers) === null || n === void 0 ? void 0 : n.length) >
          0
        );
      }
      _trySubscribe(n) {
        return this._throwIfClosed(), super._trySubscribe(n);
      }
      _subscribe(n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? qr
          : ((this.currentObservers = null),
            i.push(n),
            new R(() => {
              (this.currentObservers = null), Fe(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new M();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new hn(t, n)), e;
  })(),
  hn = class extends J {
    constructor(t, n) {
      super(), (this.destination = t), (this.source = n);
    }
    next(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    error(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.error) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    complete() {
      var t, n;
      (n =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        n === void 0 ||
        n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r =
        (n = this.source) === null || n === void 0
          ? void 0
          : n.subscribe(t)) !== null && r !== void 0
        ? r
        : qr;
    }
  };
var Vt = class extends J {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var Bt = {
  now() {
    return (Bt.delegate || Date).now();
  },
  delegate: void 0,
};
var pn = class extends J {
  constructor(t = 1 / 0, n = 1 / 0, r = Bt) {
    super(),
      (this._bufferSize = t),
      (this._windowTime = n),
      (this._timestampProvider = r),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = n === 1 / 0),
      (this._bufferSize = Math.max(1, t)),
      (this._windowTime = Math.max(1, n));
  }
  next(t) {
    let {
      isStopped: n,
      _buffer: r,
      _infiniteTimeWindow: o,
      _timestampProvider: i,
      _windowTime: s,
    } = this;
    n || (r.push(t), !o && r.push(i.now() + s)),
      this._trimBuffer(),
      super.next(t);
  }
  _subscribe(t) {
    this._throwIfClosed(), this._trimBuffer();
    let n = this._innerSubscribe(t),
      { _infiniteTimeWindow: r, _buffer: o } = this,
      i = o.slice();
    for (let s = 0; s < i.length && !t.closed; s += r ? 1 : 2) t.next(i[s]);
    return this._checkFinalizedStatuses(t), n;
  }
  _trimBuffer() {
    let {
        _bufferSize: t,
        _timestampProvider: n,
        _buffer: r,
        _infiniteTimeWindow: o,
      } = this,
      i = (o ? 1 : 2) * t;
    if ((t < 1 / 0 && i < r.length && r.splice(0, r.length - i), !o)) {
      let s = n.now(),
        a = 0;
      for (let u = 1; u < r.length && r[u] <= s; u += 2) a = u;
      a && r.splice(0, a + 1);
    }
  }
};
var gn = class extends R {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var $t = {
  setInterval(e, t, ...n) {
    let { delegate: r } = $t;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = $t;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var mn = class extends gn {
  constructor(t, n) {
    super(t, n), (this.scheduler = t), (this.work = n), (this.pending = !1);
  }
  schedule(t, n = 0) {
    var r;
    if (this.closed) return this;
    this.state = t;
    let o = this.id,
      i = this.scheduler;
    return (
      o != null && (this.id = this.recycleAsyncId(i, o, n)),
      (this.pending = !0),
      (this.delay = n),
      (this.id =
        (r = this.id) !== null && r !== void 0
          ? r
          : this.requestAsyncId(i, this.id, n)),
      this
    );
  }
  requestAsyncId(t, n, r = 0) {
    return $t.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && $t.clearInterval(n);
  }
  execute(t, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let r = this._execute(t, n);
    if (r) return r;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, n) {
    let r = !1,
      o;
    try {
      this.work(t);
    } catch (i) {
      (r = !0), (o = i || new Error("Scheduled action threw falsy error"));
    }
    if (r) return this.unsubscribe(), o;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: n } = this,
        { actions: r } = n;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        Fe(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var ht = class e {
  constructor(t, n = e.now) {
    (this.schedulerActionCtor = t), (this.now = n);
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
ht.now = Bt.now;
var yn = class extends ht {
  constructor(t, n = ht.now) {
    super(t, n), (this.actions = []), (this._active = !1);
  }
  flush(t) {
    let { actions: n } = this;
    if (this._active) {
      n.push(t);
      return;
    }
    let r;
    this._active = !0;
    do if ((r = t.execute(t.state, t.delay))) break;
    while ((t = n.shift()));
    if (((this._active = !1), r)) {
      for (; (t = n.shift()); ) t.unsubscribe();
      throw r;
    }
  }
};
var Ns = new yn(mn);
var ke = new M((e) => e.complete());
function As(e) {
  return e && m(e.schedule);
}
function ro(e) {
  return e[e.length - 1];
}
function Dn(e) {
  return m(ro(e)) ? e.pop() : void 0;
}
function de(e) {
  return As(ro(e)) ? e.pop() : void 0;
}
function Os(e, t) {
  return typeof ro(e) == "number" ? e.pop() : t;
}
function Rs(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function Fs(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function Le(e) {
  return this instanceof Le ? ((this.v = e), this) : new Le(e);
}
function Ps(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
    )),
    a("next"),
    a("throw"),
    a("return", s),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(f) {
    return function (p) {
      return Promise.resolve(p).then(f, d);
    };
  }
  function a(f, p) {
    r[f] &&
      ((o[f] = function (w) {
        return new Promise(function (O, S) {
          i.push([f, w, O, S]) > 1 || u(f, w);
        });
      }),
      p && (o[f] = p(o[f])));
  }
  function u(f, p) {
    try {
      c(r[f](p));
    } catch (w) {
      h(i[0][3], w);
    }
  }
  function c(f) {
    f.value instanceof Le
      ? Promise.resolve(f.value.v).then(l, d)
      : h(i[0][2], f);
  }
  function l(f) {
    u("next", f);
  }
  function d(f) {
    u("throw", f);
  }
  function h(f, p) {
    f(p), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}
function ks(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof Fs == "function" ? Fs(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, u) {
          (s = e[i](s)), o(a, u, s.done, s.value);
        });
      };
  }
  function o(i, s, a, u) {
    Promise.resolve(u).then(function (c) {
      i({ value: c, done: a });
    }, s);
  }
}
var vn = (e) => e && typeof e.length == "number" && typeof e != "function";
function In(e) {
  return m(e?.then);
}
function wn(e) {
  return m(e[ft]);
}
function En(e) {
  return Symbol.asyncIterator && m(e?.[Symbol.asyncIterator]);
}
function Cn(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function Nl() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var bn = Nl();
function _n(e) {
  return m(e?.[bn]);
}
function Mn(e) {
  return Ps(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield Le(n.read());
        if (o) return yield Le(void 0);
        yield yield Le(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function xn(e) {
  return m(e?.getReader);
}
function A(e) {
  if (e instanceof M) return e;
  if (e != null) {
    if (wn(e)) return Al(e);
    if (vn(e)) return Ol(e);
    if (In(e)) return Fl(e);
    if (En(e)) return Ls(e);
    if (_n(e)) return Rl(e);
    if (xn(e)) return Pl(e);
  }
  throw Cn(e);
}
function Al(e) {
  return new M((t) => {
    let n = e[ft]();
    if (m(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function Ol(e) {
  return new M((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function Fl(e) {
  return new M((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n),
    ).then(null, dn);
  });
}
function Rl(e) {
  return new M((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function Ls(e) {
  return new M((t) => {
    kl(e, t).catch((n) => t.error(n));
  });
}
function Pl(e) {
  return Ls(Mn(e));
}
function kl(e, t) {
  var n, r, o, i;
  return Rs(this, void 0, void 0, function* () {
    try {
      for (n = ks(e); (r = yield n.next()), !r.done; ) {
        let s = r.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function z(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function Sn(e, t = 0) {
  return D((n, r) => {
    n.subscribe(
      v(
        r,
        (o) => z(r, e, () => r.next(o), t),
        () => z(r, e, () => r.complete(), t),
        (o) => z(r, e, () => r.error(o), t),
      ),
    );
  });
}
function Tn(e, t = 0) {
  return D((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function js(e, t) {
  return A(e).pipe(Tn(t), Sn(t));
}
function Vs(e, t) {
  return A(e).pipe(Tn(t), Sn(t));
}
function Bs(e, t) {
  return new M((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function $s(e, t) {
  return new M((n) => {
    let r;
    return (
      z(n, t, () => {
        (r = e[bn]()),
          z(
            n,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = r.next());
              } catch (s) {
                n.error(s);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0,
          );
      }),
      () => m(r?.return) && r.return()
    );
  });
}
function Nn(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new M((n) => {
    z(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      z(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function Hs(e, t) {
  return Nn(Mn(e), t);
}
function Us(e, t) {
  if (e != null) {
    if (wn(e)) return js(e, t);
    if (vn(e)) return Bs(e, t);
    if (In(e)) return Vs(e, t);
    if (En(e)) return Nn(e, t);
    if (_n(e)) return $s(e, t);
    if (xn(e)) return Hs(e, t);
  }
  throw Cn(e);
}
function fe(e, t) {
  return t ? Us(e, t) : A(e);
}
function Ll(...e) {
  let t = de(e);
  return fe(e, t);
}
function jl(e, t) {
  let n = m(e) ? e : () => e,
    r = (o) => o.error(n());
  return new M(t ? (o) => t.schedule(r, 0, o) : r);
}
function Vl(e) {
  return !!e && (e instanceof M || (m(e.lift) && m(e.subscribe)));
}
var je = ct(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    },
);
function Ie(e, t) {
  return D((n, r) => {
    let o = 0;
    n.subscribe(
      v(r, (i) => {
        r.next(e.call(t, i, o++));
      }),
    );
  });
}
var { isArray: Bl } = Array;
function $l(e, t) {
  return Bl(t) ? e(...t) : e(t);
}
function An(e) {
  return Ie((t) => $l(e, t));
}
var { isArray: Hl } = Array,
  { getPrototypeOf: Ul, prototype: zl, keys: Gl } = Object;
function On(e) {
  if (e.length === 1) {
    let t = e[0];
    if (Hl(t)) return { args: t, keys: null };
    if (Wl(t)) {
      let n = Gl(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function Wl(e) {
  return e && typeof e == "object" && Ul(e) === zl;
}
function Fn(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function ql(...e) {
  let t = de(e),
    n = Dn(e),
    { args: r, keys: o } = On(e);
  if (r.length === 0) return fe([], t);
  let i = new M(Zl(r, t, o ? (s) => Fn(o, s) : B));
  return n ? i.pipe(An(n)) : i;
}
function Zl(e, t, n = B) {
  return (r) => {
    zs(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let u = 0; u < o; u++)
          zs(
            t,
            () => {
              let c = fe(e[u], t),
                l = !1;
              c.subscribe(
                v(
                  r,
                  (d) => {
                    (i[u] = d), l || ((l = !0), a--), a || r.next(n(i.slice()));
                  },
                  () => {
                    --s || r.complete();
                  },
                ),
              );
            },
            r,
          );
      },
      r,
    );
  };
}
function zs(e, t, n) {
  e ? z(n, e, t) : t();
}
function Gs(e, t, n, r, o, i, s, a) {
  let u = [],
    c = 0,
    l = 0,
    d = !1,
    h = () => {
      d && !u.length && !c && t.complete();
    },
    f = (w) => (c < r ? p(w) : u.push(w)),
    p = (w) => {
      i && t.next(w), c++;
      let O = !1;
      A(n(w, l++)).subscribe(
        v(
          t,
          (S) => {
            o?.(S), i ? f(S) : t.next(S);
          },
          () => {
            O = !0;
          },
          void 0,
          () => {
            if (O)
              try {
                for (c--; u.length && c < r; ) {
                  let S = u.shift();
                  s ? z(t, s, () => p(S)) : p(S);
                }
                h();
              } catch (S) {
                t.error(S);
              }
          },
        ),
      );
    };
  return (
    e.subscribe(
      v(t, f, () => {
        (d = !0), h();
      }),
    ),
    () => {
      a?.();
    }
  );
}
function Ve(e, t, n = 1 / 0) {
  return m(t)
    ? Ve((r, o) => Ie((i, s) => t(r, i, o, s))(A(e(r, o))), n)
    : (typeof t == "number" && (n = t), D((r, o) => Gs(r, o, e, n)));
}
function Rn(e = 1 / 0) {
  return Ve(B, e);
}
function Ws() {
  return Rn(1);
}
function Pn(...e) {
  return Ws()(fe(e, de(e)));
}
function Yl(e) {
  return new M((t) => {
    A(e()).subscribe(t);
  });
}
function Ql(...e) {
  let t = Dn(e),
    { args: n, keys: r } = On(e),
    o = new M((i) => {
      let { length: s } = n;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        u = s,
        c = s;
      for (let l = 0; l < s; l++) {
        let d = !1;
        A(n[l]).subscribe(
          v(
            i,
            (h) => {
              d || ((d = !0), c--), (a[l] = h);
            },
            () => u--,
            void 0,
            () => {
              (!u || !d) && (c || i.next(r ? Fn(r, a) : a), i.complete());
            },
          ),
        );
      }
    });
  return t ? o.pipe(An(t)) : o;
}
function Kl(...e) {
  let t = de(e),
    n = Os(e, 1 / 0),
    r = e;
  return r.length ? (r.length === 1 ? A(r[0]) : Rn(n)(fe(r, t))) : ke;
}
function Be(e, t) {
  return D((n, r) => {
    let o = 0;
    n.subscribe(v(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function qs(e) {
  return D((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      v(n, void 0, void 0, (s) => {
        (i = A(e(s, qs(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      }),
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function Zs(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      u = t,
      c = 0;
    i.subscribe(
      v(
        s,
        (l) => {
          let d = c++;
          (u = a ? e(u, l, d) : ((a = !0), l)), r && s.next(u);
        },
        o &&
          (() => {
            a && s.next(u), s.complete();
          }),
      ),
    );
  };
}
function Jl(e, t) {
  return m(t) ? Ve(e, t, 1) : Ve(e, 1);
}
function Xl(e, t = Ns) {
  return D((n, r) => {
    let o = null,
      i = null,
      s = null,
      a = () => {
        if (o) {
          o.unsubscribe(), (o = null);
          let c = i;
          (i = null), r.next(c);
        }
      };
    function u() {
      let c = s + e,
        l = t.now();
      if (l < c) {
        (o = this.schedule(void 0, c - l)), r.add(o);
        return;
      }
      a();
    }
    n.subscribe(
      v(
        r,
        (c) => {
          (i = c), (s = t.now()), o || ((o = t.schedule(u, e)), r.add(o));
        },
        () => {
          a(), r.complete();
        },
        void 0,
        () => {
          i = o = null;
        },
      ),
    );
  });
}
function Ht(e) {
  return D((t, n) => {
    let r = !1;
    t.subscribe(
      v(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => {
          r || n.next(e), n.complete();
        },
      ),
    );
  });
}
function oo(e) {
  return e <= 0
    ? () => ke
    : D((t, n) => {
        let r = 0;
        t.subscribe(
          v(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          }),
        );
      });
}
function ed(e) {
  return Ie(() => e);
}
function td(e, t = B) {
  return (
    (e = e ?? nd),
    D((n, r) => {
      let o,
        i = !0;
      n.subscribe(
        v(r, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
        }),
      );
    })
  );
}
function nd(e, t) {
  return e === t;
}
function kn(e = rd) {
  return D((t, n) => {
    let r = !1;
    t.subscribe(
      v(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e())),
      ),
    );
  });
}
function rd() {
  return new je();
}
function od(e) {
  return D((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function Ys(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? Be((o, i) => e(o, i, r)) : B,
      oo(1),
      n ? Ht(t) : kn(() => new je()),
    );
}
function io(e) {
  return e <= 0
    ? () => ke
    : D((t, n) => {
        let r = [];
        t.subscribe(
          v(
            n,
            (o) => {
              r.push(o), e < r.length && r.shift();
            },
            () => {
              for (let o of r) n.next(o);
              n.complete();
            },
            void 0,
            () => {
              r = null;
            },
          ),
        );
      });
}
function id(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? Be((o, i) => e(o, i, r)) : B,
      io(1),
      n ? Ht(t) : kn(() => new je()),
    );
}
function sd(e, t) {
  return D(Zs(e, t, arguments.length >= 2, !0));
}
function Qs(e = {}) {
  let {
    connector: t = () => new J(),
    resetOnError: n = !0,
    resetOnComplete: r = !0,
    resetOnRefCountZero: o = !0,
  } = e;
  return (i) => {
    let s,
      a,
      u,
      c = 0,
      l = !1,
      d = !1,
      h = () => {
        a?.unsubscribe(), (a = void 0);
      },
      f = () => {
        h(), (s = u = void 0), (l = d = !1);
      },
      p = () => {
        let w = s;
        f(), w?.unsubscribe();
      };
    return D((w, O) => {
      c++, !d && !l && h();
      let S = (u = u ?? t());
      O.add(() => {
        c--, c === 0 && !d && !l && (a = so(p, o));
      }),
        S.subscribe(O),
        !s &&
          c > 0 &&
          ((s = new ve({
            next: (j) => S.next(j),
            error: (j) => {
              (d = !0), h(), (a = so(f, n, j)), S.error(j);
            },
            complete: () => {
              (l = !0), h(), (a = so(f, r)), S.complete();
            },
          })),
          A(w).subscribe(s));
    })(i);
  };
}
function so(e, t, ...n) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let r = new ve({
    next: () => {
      r.unsubscribe(), e();
    },
  });
  return A(t(...n)).subscribe(r);
}
function ad(e, t, n) {
  let r,
    o = !1;
  return (
    e && typeof e == "object"
      ? ({
          bufferSize: r = 1 / 0,
          windowTime: t = 1 / 0,
          refCount: o = !1,
          scheduler: n,
        } = e)
      : (r = e ?? 1 / 0),
    Qs({
      connector: () => new pn(r, t, n),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: o,
    })
  );
}
function ud(e) {
  return Be((t, n) => e <= n);
}
function cd(...e) {
  let t = de(e);
  return D((n, r) => {
    (t ? Pn(e, n, t) : Pn(e, n)).subscribe(r);
  });
}
function ld(e, t) {
  return D((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      v(
        r,
        (u) => {
          o?.unsubscribe();
          let c = 0,
            l = i++;
          A(e(u, l)).subscribe(
            (o = v(
              r,
              (d) => r.next(t ? t(u, d, l, c++) : d),
              () => {
                (o = null), a();
              },
            )),
          );
        },
        () => {
          (s = !0), a();
        },
      ),
    );
  });
}
function dd(e) {
  return D((t, n) => {
    A(e).subscribe(v(n, () => n.complete(), jt)), !n.closed && t.subscribe(n);
  });
}
function fd(e, t, n) {
  let r = m(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? D((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          v(
            i,
            (u) => {
              var c;
              (c = r.next) === null || c === void 0 || c.call(r, u), i.next(u);
            },
            () => {
              var u;
              (a = !1),
                (u = r.complete) === null || u === void 0 || u.call(r),
                i.complete();
            },
            (u) => {
              var c;
              (a = !1),
                (c = r.error) === null || c === void 0 || c.call(r, u),
                i.error(u);
            },
            () => {
              var u, c;
              a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)),
                (c = r.finalize) === null || c === void 0 || c.call(r);
            },
          ),
        );
      })
    : B;
}
var hd = "https://g.co/ng/security#xss",
  x = class extends Error {
    constructor(t, n) {
      super(Aa(t, n)), (this.code = t);
    }
  };
function Aa(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
function vr(e) {
  return { toString: e }.toString();
}
function N(e) {
  for (let t in e) if (e[t] === N) return t;
  throw Error("Could not find renamed property on target object.");
}
function pd(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function U(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(U).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function wo(e, t) {
  return e == null || e === ""
    ? t === null
      ? ""
      : t
    : t == null || t === ""
      ? e
      : e + " " + t;
}
var gd = N({ __forward_ref__: N });
function Oa(e) {
  return (
    (e.__forward_ref__ = Oa),
    (e.toString = function () {
      return U(this());
    }),
    e
  );
}
function $(e) {
  return Fa(e) ? e() : e;
}
function Fa(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(gd) && e.__forward_ref__ === Oa
  );
}
function F(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function Ra(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Ir(e) {
  return Ks(e, Pa) || Ks(e, ka);
}
function WC(e) {
  return Ir(e) !== null;
}
function Ks(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function md(e) {
  let t = e && (e[Pa] || e[ka]);
  return t || null;
}
function Js(e) {
  return e && (e.hasOwnProperty(Xs) || e.hasOwnProperty(yd)) ? e[Xs] : null;
}
var Pa = N({ ɵprov: N }),
  Xs = N({ ɵinj: N }),
  ka = N({ ngInjectableDef: N }),
  yd = N({ ngInjectorDef: N }),
  T = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = F({
              token: this,
              providedIn: n.providedIn || "root",
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function La(e) {
  return e && !!e.ɵproviders;
}
var Dd = N({ ɵcmp: N }),
  vd = N({ ɵdir: N }),
  Id = N({ ɵpipe: N }),
  wd = N({ ɵmod: N }),
  Wn = N({ ɵfac: N }),
  zt = N({ __NG_ELEMENT_ID__: N }),
  ea = N({ __NG_ENV_ID__: N });
function pi(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function Ed(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
      ? e.type.name || e.type.toString()
      : pi(e);
}
function Cd(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new x(-200, e);
}
function gi(e, t) {
  throw new x(-201, !1);
}
var E = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(E || {}),
  Eo;
function ja() {
  return Eo;
}
function X(e) {
  let t = Eo;
  return (Eo = e), t;
}
function Va(e, t, n) {
  let r = Ir(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & E.Optional) return null;
  if (t !== void 0) return t;
  gi(e, "Injector");
}
var bd = {},
  Gt = bd,
  _d = "__NG_DI_FLAG__",
  qn = "ngTempTokenPath",
  Md = "ngTokenPath",
  xd = /\n/gm,
  Sd = "\u0275",
  ta = "__source",
  Dt;
function Td() {
  return Dt;
}
function Me(e) {
  let t = Dt;
  return (Dt = e), t;
}
function Nd(e, t = E.Default) {
  if (Dt === void 0) throw new x(-203, !1);
  return Dt === null
    ? Va(e, void 0, t)
    : Dt.get(e, t & E.Optional ? null : void 0, t);
}
function q(e, t = E.Default) {
  return (ja() || Nd)($(e), t);
}
function b(e, t = E.Default) {
  return q(e, wr(t));
}
function wr(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function Co(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = $(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new x(900, !1);
      let o,
        i = E.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          u = Ad(a);
        typeof u == "number" ? (u === -1 ? (o = a.token) : (i |= u)) : (o = a);
      }
      t.push(q(o, i));
    } else t.push(q(r));
  }
  return t;
}
function Ad(e) {
  return e[_d];
}
function Od(e, t, n, r) {
  let o = e[qn];
  throw (
    (t[ta] && o.unshift(t[ta]),
    (e.message = Fd(
      `
` + e.message,
      o,
      n,
      r,
    )),
    (e[Md] = o),
    (e[qn] = null),
    e)
  );
}
function Fd(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == Sd
      ? e.slice(2)
      : e;
  let o = U(t);
  if (Array.isArray(t)) o = t.map(U).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : U(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
    xd,
    `
  `,
  )}`;
}
function It(e, t) {
  let n = e.hasOwnProperty(Wn);
  return n ? e[Wn] : null;
}
function Rd(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function Pd(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function mi(e, t) {
  e.forEach((n) => (Array.isArray(n) ? mi(n, t) : t(n)));
}
function Ba(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function Zn(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function kd(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function Ld(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) e.push(r, e[0]), (e[0] = n);
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      (e[o] = e[i]), o--;
    }
    (e[t] = n), (e[t + 1] = r);
  }
}
function yi(e, t, n) {
  let r = Xt(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), Ld(e, r, t, n)), r;
}
function ao(e, t) {
  let n = Xt(e, t);
  if (n >= 0) return e[n | 1];
}
function Xt(e, t) {
  return jd(e, t, 1);
}
function jd(e, t, n) {
  let r = 0,
    o = e.length >> n;
  for (; o !== r; ) {
    let i = r + ((o - r) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (o = i) : (r = i + 1);
  }
  return ~(o << n);
}
var wt = {},
  H = [],
  Yn = new T(""),
  $a = new T("", -1),
  Ha = new T(""),
  Qn = class {
    get(t, n = Gt) {
      if (n === Gt) {
        let r = new Error(`NullInjectorError: No provider for ${U(t)}!`);
        throw ((r.name = "NullInjectorError"), r);
      }
      return n;
    }
  },
  Ua = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(Ua || {}),
  Wt = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(Wt || {}),
  Se = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.SignalBased = 1)] = "SignalBased"),
      (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      e
    );
  })(Se || {});
function Vd(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
function bo(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let o = n[r];
    if (typeof o == "number") {
      if (o !== 0) break;
      r++;
      let i = n[r++],
        s = n[r++],
        a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = n[++r];
      $d(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function Bd(e) {
  return e === 3 || e === 4 || e === 6;
}
function $d(e) {
  return e.charCodeAt(0) === 64;
}
function qt(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == "number"
          ? (n = o)
          : n === 0 ||
            (n === -1 || n === 2
              ? na(e, n, o, null, t[++r])
              : na(e, n, o, null, null));
      }
    }
  return e;
}
function na(e, t, n, r, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      if (r === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (r === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, r !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    r !== null && e.splice(i++, 0, r),
    o !== null && e.splice(i++, 0, o);
}
var za = "ng-template";
function Hd(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && Vd(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (Di(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function Di(e) {
  return e.type === 4 && e.value !== za;
}
function Ud(e, t, n) {
  let r = e.type === 4 && !n ? za : e.value;
  return t === r;
}
function zd(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? qd(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == "number") {
      if (!s && !se(r) && !se(u)) return !1;
      if (s && se(u)) continue;
      (s = !1), (r = u | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (u !== "" && !Ud(e, u, n)) || (u === "" && t.length === 1))
        ) {
          if (se(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !Hd(e, o, u, n)) {
          if (se(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a],
          l = Gd(u, o, Di(e), n);
        if (l === -1) {
          if (se(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== "") {
          let d;
          if (
            (l > i ? (d = "") : (d = o[l + 1].toLowerCase()), r & 2 && c !== d)
          ) {
            if (se(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return se(r) || s;
}
function se(e) {
  return (e & 1) === 0;
}
function Gd(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string"; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return Zd(t, e);
}
function Ga(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (zd(e, t[r], n)) return !0;
  return !1;
}
function Wd(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function qd(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Bd(n)) return t;
  }
  return e.length;
}
function Zd(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == "number") return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function Yd(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function ra(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function Qd(e) {
  let t = e[0],
    n = 1,
    r = 2,
    o = "",
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == "string")
      if (r & 2) {
        let a = e[++n];
        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else r & 8 ? (o += "." + s) : r & 4 && (o += " " + s);
    else
      o !== "" && !se(s) && ((t += ra(i, o)), (o = "")),
        (r = s),
        (i = i || !se(r));
    n++;
  }
  return o !== "" && (t += ra(i, o)), t;
}
function Kd(e) {
  return e.map(Qd).join(",");
}
function Jd(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!se(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function qC(e) {
  return vr(() => {
    let t = Qa(e),
      n = De(ye({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === Ua.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || Wt.Emulated,
        styles: e.styles || H,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    Ka(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = ia(r, !1)), (n.pipeDefs = ia(r, !0)), (n.id = nf(n)), n
    );
  });
}
function Xd(e) {
  return Ue(e) || qa(e);
}
function ef(e) {
  return e !== null;
}
function Wa(e) {
  return vr(() => ({
    type: e.type,
    bootstrap: e.bootstrap || H,
    declarations: e.declarations || H,
    imports: e.imports || H,
    exports: e.exports || H,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function oa(e, t) {
  if (e == null) return wt;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a = Se.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((n[i] = a !== Se.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
    }
  return n;
}
function vi(e) {
  return vr(() => {
    let t = Qa(e);
    return Ka(t), t;
  });
}
function Ue(e) {
  return e[Dd] || null;
}
function qa(e) {
  return e[vd] || null;
}
function Za(e) {
  return e[Id] || null;
}
function tf(e) {
  let t = Ue(e) || qa(e) || Za(e);
  return t !== null ? t.standalone : !1;
}
function Ya(e, t) {
  let n = e[wd] || null;
  if (!n && t === !0)
    throw new Error(`Type ${U(e)} does not have '\u0275mod' property.`);
  return n;
}
function Qa(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || wt,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || H,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: oa(e.inputs, t),
    outputs: oa(e.outputs),
    debugInfo: null,
  };
}
function Ka(e) {
  e.features?.forEach((t) => t(e));
}
function ia(e, t) {
  if (!e) return null;
  let n = t ? Za : Xd;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(ef);
}
function nf(e) {
  let t = 0,
    n = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      e.consts,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ].join("|");
  for (let o of n) t = (Math.imul(31, t) + o.charCodeAt(0)) << 0;
  return (t += 2147483648), "c" + t;
}
function rf(e) {
  return { ɵproviders: e };
}
function of(...e) {
  return { ɵproviders: Ja(!0, e), ɵfromNgModule: !0 };
}
function Ja(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    mi(t, (s) => {
      let a = s;
      _o(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && Xa(o, i),
    n
  );
}
function Xa(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    Ii(o, (i) => {
      t(i, r);
    });
  }
}
function _o(e, t, n, r) {
  if (((e = $(e)), !e)) return !1;
  let o = null,
    i = Js(e),
    s = !i && Ue(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (((i = Js(u)), i)) o = u;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let u =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let c of u) _o(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        mi(i.imports, (l) => {
          _o(l, t, n, r) && ((c ||= []), c.push(l));
        });
      } finally {
      }
      c !== void 0 && Xa(c, t);
    }
    if (!a) {
      let c = It(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: H }, o),
        t({ provide: Ha, useValue: o, multi: !0 }, o),
        t({ provide: Yn, useValue: () => q(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      Ii(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function Ii(e, t) {
  for (let n of e)
    La(n) && (n = n.ɵproviders), Array.isArray(n) ? Ii(n, t) : t(n);
}
var sf = N({ provide: String, useValue: N });
function eu(e) {
  return e !== null && typeof e == "object" && sf in e;
}
function af(e) {
  return !!(e && e.useExisting);
}
function uf(e) {
  return !!(e && e.useFactory);
}
function Et(e) {
  return typeof e == "function";
}
function cf(e) {
  return !!e.useClass;
}
var tu = new T(""),
  Bn = {},
  lf = {},
  uo;
function wi() {
  return uo === void 0 && (uo = new Qn()), uo;
}
var Te = class {},
  Zt = class extends Te {
    get destroyed() {
      return this._destroyed;
    }
    constructor(t, n, r, o) {
      super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = o),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        xo(t, (s) => this.processProvider(s)),
        this.records.set($a, pt(void 0, this)),
        o.has("environment") && this.records.set(Te, pt(void 0, this));
      let i = this.records.get(tu);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(Ha, H, E.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let t = C(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          C(t);
      }
    }
    onDestroy(t) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      this.assertNotDestroyed();
      let n = Me(this),
        r = X(void 0),
        o;
      try {
        return t();
      } finally {
        Me(n), X(r);
      }
    }
    get(t, n = Gt, r = E.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(ea))) return t[ea](this);
      r = wr(r);
      let o,
        i = Me(this),
        s = X(void 0);
      try {
        if (!(r & E.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = gf(t) && Ir(t);
            c && this.injectableDefInScope(c)
              ? (u = pt(Mo(t), Bn))
              : (u = null),
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & E.Self ? wi() : this.parent;
        return (n = r & E.Optional && n === Gt ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[qn] = a[qn] || []).unshift(U(t)), i)) throw a;
          return Od(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        X(s), Me(i);
      }
    }
    resolveInjectorInitializers() {
      let t = C(null),
        n = Me(this),
        r = X(void 0),
        o;
      try {
        let i = this.get(Yn, H, E.Self);
        for (let s of i) s();
      } finally {
        Me(n), X(r), C(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(U(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new x(205, !1);
    }
    processProvider(t) {
      t = $(t);
      let n = Et(t) ? t : $(t && t.provide),
        r = ff(t);
      if (!Et(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = pt(void 0, Bn, !0)),
          (o.factory = () => Co(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = C(null);
      try {
        return (
          n.value === Bn && ((n.value = lf), (n.value = n.factory())),
          typeof n.value == "object" &&
            n.value &&
            pf(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        C(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = $(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function Mo(e) {
  let t = Ir(e),
    n = t !== null ? t.factory : It(e);
  if (n !== null) return n;
  if (e instanceof T) throw new x(204, !1);
  if (e instanceof Function) return df(e);
  throw new x(204, !1);
}
function df(e) {
  if (e.length > 0) throw new x(204, !1);
  let n = md(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function ff(e) {
  if (eu(e)) return pt(void 0, e.useValue);
  {
    let t = nu(e);
    return pt(t, Bn);
  }
}
function nu(e, t, n) {
  let r;
  if (Et(e)) {
    let o = $(e);
    return It(o) || Mo(o);
  } else if (eu(e)) r = () => $(e.useValue);
  else if (uf(e)) r = () => e.useFactory(...Co(e.deps || []));
  else if (af(e)) r = () => q($(e.useExisting));
  else {
    let o = $(e && (e.useClass || e.provide));
    if (hf(e)) r = () => new o(...Co(e.deps));
    else return It(o) || Mo(o);
  }
  return r;
}
function pt(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function hf(e) {
  return !!e.deps;
}
function pf(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function gf(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof T);
}
function xo(e, t) {
  for (let n of e)
    Array.isArray(n) ? xo(n, t) : n && La(n) ? xo(n.ɵproviders, t) : t(n);
}
function ZC(e, t) {
  e instanceof Zt && e.assertNotDestroyed();
  let n,
    r = Me(e),
    o = X(void 0);
  try {
    return t();
  } finally {
    Me(r), X(o);
  }
}
function ru() {
  return ja() !== void 0 || Td() != null;
}
function mf(e) {
  if (!ru()) throw new x(-203, !1);
}
function yf(e) {
  return typeof e == "function";
}
var Ce = 0,
  y = 1,
  g = 2,
  V = 3,
  ce = 4,
  Y = 5,
  Yt = 6,
  Kn = 7,
  te = 8,
  Ct = 9,
  we = 10,
  P = 11,
  Qt = 12,
  sa = 13,
  At = 14,
  ne = 15,
  ze = 16,
  gt = 17,
  Ee = 18,
  Er = 19,
  ou = 20,
  xe = 21,
  co = 22,
  ee = 23,
  Z = 25,
  iu = 1;
var Ge = 7,
  Jn = 8,
  bt = 9,
  G = 10,
  Xn = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      e
    );
  })(Xn || {});
function $e(e) {
  return Array.isArray(e) && typeof e[iu] == "object";
}
function be(e) {
  return Array.isArray(e) && e[iu] === !0;
}
function Ei(e) {
  return (e.flags & 4) !== 0;
}
function Cr(e) {
  return e.componentOffset > -1;
}
function br(e) {
  return (e.flags & 1) === 1;
}
function Ne(e) {
  return !!e.template;
}
function So(e) {
  return (e[g] & 512) !== 0;
}
var To = class {
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function su(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
function Ci() {
  return au;
}
function au(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = vf), Df;
}
Ci.ngInherit = !0;
function Df() {
  let e = cu(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === wt) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function vf(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = cu(e) || If(e, { previous: wt, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  (a[i] = new To(c && c.currentValue, n, u === wt)), su(e, t, o, n);
}
var uu = "__ngSimpleChanges__";
function cu(e) {
  return e[uu] || null;
}
function If(e, t) {
  return (e[uu] = t);
}
var aa = null;
var he = function (e, t, n) {
    aa?.(e, t, n);
  },
  lu = "svg",
  wf = "math";
function ge(e) {
  for (; Array.isArray(e); ) e = e[Ce];
  return e;
}
function du(e, t) {
  return ge(t[e]);
}
function re(e, t) {
  return ge(t[e.index]);
}
function bi(e, t) {
  return e.data[t];
}
function Ef(e, t) {
  return e[t];
}
function Xe(e, t) {
  let n = t[e];
  return $e(n) ? n : n[Ce];
}
function Cf(e) {
  return (e[g] & 4) === 4;
}
function _i(e) {
  return (e[g] & 128) === 128;
}
function bf(e) {
  return be(e[V]);
}
function _t(e, t) {
  return t == null ? null : e[t];
}
function fu(e) {
  e[gt] = 0;
}
function hu(e) {
  e[g] & 1024 || ((e[g] |= 1024), _i(e) && Mr(e));
}
function _f(e, t) {
  for (; e > 0; ) (t = t[At]), e--;
  return t;
}
function _r(e) {
  return !!(e[g] & 9216 || e[ee]?.dirty);
}
function No(e) {
  e[we].changeDetectionScheduler?.notify(8),
    e[g] & 64 && (e[g] |= 1024),
    _r(e) && Mr(e);
}
function Mr(e) {
  e[we].changeDetectionScheduler?.notify(0);
  let t = We(e);
  for (; t !== null && !(t[g] & 8192 || ((t[g] |= 8192), !_i(t))); ) t = We(t);
}
function pu(e, t) {
  if ((e[g] & 256) === 256) throw new x(911, !1);
  e[xe] === null && (e[xe] = []), e[xe].push(t);
}
function Mf(e, t) {
  if (e[xe] === null) return;
  let n = e[xe].indexOf(t);
  n !== -1 && e[xe].splice(n, 1);
}
function We(e) {
  let t = e[V];
  return be(t) ? t[V] : t;
}
var I = { lFrame: Cu(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var gu = !1;
function xf() {
  return I.lFrame.elementDepthCount;
}
function Sf() {
  I.lFrame.elementDepthCount++;
}
function Tf() {
  I.lFrame.elementDepthCount--;
}
function mu() {
  return I.bindingsEnabled;
}
function yu() {
  return I.skipHydrationRootTNode !== null;
}
function Nf(e) {
  return I.skipHydrationRootTNode === e;
}
function Af() {
  I.skipHydrationRootTNode = null;
}
function _() {
  return I.lFrame.lView;
}
function L() {
  return I.lFrame.tView;
}
function YC(e) {
  return (I.lFrame.contextLView = e), e[te];
}
function QC(e) {
  return (I.lFrame.contextLView = null), e;
}
function Q() {
  let e = Du();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function Du() {
  return I.lFrame.currentTNode;
}
function Of() {
  let e = I.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function et(e, t) {
  let n = I.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function Mi() {
  return I.lFrame.isParent;
}
function xi() {
  I.lFrame.isParent = !1;
}
function Ff() {
  return I.lFrame.contextLView;
}
function vu() {
  return gu;
}
function ua(e) {
  gu = e;
}
function Rf(e) {
  return (I.lFrame.bindingIndex = e);
}
function en() {
  return I.lFrame.bindingIndex++;
}
function Iu(e) {
  let t = I.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function Pf() {
  return I.lFrame.inI18n;
}
function kf(e, t) {
  let n = I.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), Ao(t);
}
function Lf() {
  return I.lFrame.currentDirectiveIndex;
}
function Ao(e) {
  I.lFrame.currentDirectiveIndex = e;
}
function jf(e) {
  let t = I.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function Si() {
  return I.lFrame.currentQueryIndex;
}
function xr(e) {
  I.lFrame.currentQueryIndex = e;
}
function Vf(e) {
  let t = e[y];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[Y] : null;
}
function wu(e, t, n) {
  if (n & E.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & E.Host); )
      if (((o = Vf(i)), o === null || ((i = i[At]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (I.lFrame = Eu());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function Ti(e) {
  let t = Eu(),
    n = e[y];
  (I.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function Eu() {
  let e = I.lFrame,
    t = e === null ? null : e.child;
  return t === null ? Cu(e) : t;
}
function Cu(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function bu() {
  let e = I.lFrame;
  return (I.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var _u = bu;
function Ni() {
  let e = bu();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function Bf(e) {
  return (I.lFrame.contextLView = _f(e, I.lFrame.contextLView))[te];
}
function tt() {
  return I.lFrame.selectedIndex;
}
function qe(e) {
  I.lFrame.selectedIndex = e;
}
function Ai() {
  let e = I.lFrame;
  return bi(e.tView, e.selectedIndex);
}
function KC() {
  I.lFrame.currentNamespace = lu;
}
function JC() {
  $f();
}
function $f() {
  I.lFrame.currentNamespace = null;
}
function Hf() {
  return I.lFrame.currentNamespace;
}
var Mu = !0;
function Sr() {
  return Mu;
}
function Tr(e) {
  Mu = e;
}
function Uf(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = au(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function Nr(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: u,
        ngAfterViewChecked: c,
        ngOnDestroy: l,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      u && (e.viewHooks ??= []).push(-n, u),
      c &&
        ((e.viewHooks ??= []).push(n, c), (e.viewCheckHooks ??= []).push(n, c)),
      l != null && (e.destroyHooks ??= []).push(n, l);
  }
}
function $n(e, t, n) {
  xu(e, t, 3, n);
}
function Hn(e, t, n, r) {
  (e[g] & 3) === n && xu(e, t, n, r);
}
function lo(e, t) {
  let n = e[g];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[g] = n));
}
function xu(e, t, n, r) {
  let o = r !== void 0 ? e[gt] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++)
    if (typeof t[u + 1] == "number") {
      if (((a = t[u]), r != null && a >= r)) break;
    } else
      t[u] < 0 && (e[gt] += 65536),
        (a < i || i == -1) &&
          (zf(e, n, t, u), (e[gt] = (e[gt] & 4294901760) + u + 2)),
        u++;
}
function ca(e, t) {
  he(4, e, t);
  let n = C(null);
  try {
    t.call(e);
  } finally {
    C(n), he(5, e, t);
  }
}
function zf(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[g] >> 14 < e[gt] >> 16 &&
      (e[g] & 3) === t &&
      ((e[g] += 16384), ca(a, i))
    : ca(a, i);
}
var vt = -1,
  Ze = class {
    constructor(t, n, r) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r);
    }
  };
function Gf(e) {
  return e instanceof Ze;
}
function Wf(e) {
  return (e.flags & 8) !== 0;
}
function qf(e) {
  return (e.flags & 16) !== 0;
}
var fo = {},
  Oo = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = wr(r);
      let o = this.injector.get(t, fo, r);
      return o !== fo || n === fo ? o : this.parentInjector.get(t, n, r);
    }
  };
function Su(e) {
  return e !== vt;
}
function er(e) {
  return e & 32767;
}
function Zf(e) {
  return e >> 16;
}
function tr(e, t) {
  let n = Zf(e),
    r = t;
  for (; n > 0; ) (r = r[At]), n--;
  return r;
}
var Fo = !0;
function la(e) {
  let t = Fo;
  return (Fo = e), t;
}
var Yf = 256,
  Tu = Yf - 1,
  Nu = 5,
  Qf = 0,
  pe = {};
function Kf(e, t, n) {
  let r;
  typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(zt) && (r = n[zt]),
    r == null && (r = n[zt] = Qf++);
  let o = r & Tu,
    i = 1 << o;
  t.data[e + (o >> Nu)] |= i;
}
function nr(e, t) {
  let n = Au(e, t);
  if (n !== -1) return n;
  let r = t[y];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    ho(r.data, e),
    ho(t, null),
    ho(r.blueprint, null));
  let o = Oi(e, t),
    i = e.injectorIndex;
  if (Su(o)) {
    let s = er(o),
      a = tr(o, t),
      u = a[y].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return (t[i + 8] = o), i;
}
function ho(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function Au(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function Oi(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = ku(o)), r === null)) return vt;
    if ((n++, (o = o[At]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return vt;
}
function Ro(e, t, n) {
  Kf(e, t, n);
}
function Ou(e, t, n) {
  if (n & E.Optional || e !== void 0) return e;
  gi(t, "NodeInjector");
}
function Fu(e, t, n, r) {
  if (
    (n & E.Optional && r === void 0 && (r = null), !(n & (E.Self | E.Host)))
  ) {
    let o = e[Ct],
      i = X(void 0);
    try {
      return o ? o.get(t, r, n & E.Optional) : Va(t, r, n & E.Optional);
    } finally {
      X(i);
    }
  }
  return Ou(r, t, n);
}
function Ru(e, t, n, r = E.Default, o) {
  if (e !== null) {
    if (t[g] & 2048 && !(r & E.Self)) {
      let s = th(e, t, n, r, pe);
      if (s !== pe) return s;
    }
    let i = Pu(e, t, n, r, pe);
    if (i !== pe) return i;
  }
  return Fu(t, n, r, o);
}
function Pu(e, t, n, r, o) {
  let i = Xf(n);
  if (typeof i == "function") {
    if (!wu(t, e, r)) return r & E.Host ? Ou(o, n, r) : Fu(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & E.Optional))) gi(n);
      else return s;
    } finally {
      _u();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = Au(e, t),
      u = vt,
      c = r & E.Host ? t[ne][Y] : null;
    for (
      (a === -1 || r & E.SkipSelf) &&
      ((u = a === -1 ? Oi(e, t) : t[a + 8]),
      u === vt || !fa(r, !1)
        ? (a = -1)
        : ((s = t[y]), (a = er(u)), (t = tr(u, t))));
      a !== -1;

    ) {
      let l = t[y];
      if (da(i, a, l.data)) {
        let d = Jf(a, t, n, s, r, c);
        if (d !== pe) return d;
      }
      (u = t[a + 8]),
        u !== vt && fa(r, t[y].data[a + 8] === c) && da(i, a, t)
          ? ((s = l), (a = er(u)), (t = tr(u, t)))
          : (a = -1);
    }
  }
  return o;
}
function Jf(e, t, n, r, o, i) {
  let s = t[y],
    a = s.data[e + 8],
    u = r == null ? Cr(a) && Fo : r != s && (a.type & 3) !== 0,
    c = o & E.Host && i === a,
    l = Un(a, s, n, u, c);
  return l !== null ? Ye(t, s, l, a) : pe;
}
function Un(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    u = e.directiveStart,
    c = e.directiveEnd,
    l = i >> 20,
    d = r ? a : a + l,
    h = o ? a + l : c;
  for (let f = d; f < h; f++) {
    let p = s[f];
    if ((f < u && n === p) || (f >= u && p.type === n)) return f;
  }
  if (o) {
    let f = s[u];
    if (f && Ne(f) && f.type === n) return u;
  }
  return null;
}
function Ye(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if (Gf(o)) {
    let s = o;
    s.resolving && Cd(Ed(i[n]));
    let a = la(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      c = s.injectImpl ? X(s.injectImpl) : null,
      l = wu(e, r, E.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && Uf(n, i[n], t);
    } finally {
      c !== null && X(c), la(a), (s.resolving = !1), _u();
    }
  }
  return o;
}
function Xf(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(zt) ? e[zt] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & Tu : eh) : t;
}
function da(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> Nu)] & r);
}
function fa(e, t) {
  return !(e & E.Self) && !(e & E.Host && t);
}
var He = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return Ru(this._tNode, this._lView, t, wr(r), n);
  }
};
function eh() {
  return new He(Q(), _());
}
function XC(e) {
  return vr(() => {
    let t = e.prototype.constructor,
      n = t[Wn] || Po(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[Wn] || Po(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function Po(e) {
  return Fa(e)
    ? () => {
        let t = Po($(e));
        return t && t();
      }
    : It(e);
}
function th(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[g] & 2048 && !(s[g] & 512); ) {
    let a = Pu(i, s, n, r | E.Self, pe);
    if (a !== pe) return a;
    let u = i.parent;
    if (!u) {
      let c = s[ou];
      if (c) {
        let l = c.get(n, pe, r);
        if (l !== pe) return l;
      }
      (u = ku(s)), (s = s[At]);
    }
    i = u;
  }
  return o;
}
function ku(e) {
  let t = e[y],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[Y] : null;
}
function ha(e, t = null, n = null, r) {
  let o = Lu(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function Lu(e, t = null, n = null, r, o = new Set()) {
  let i = [n || H, of(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : U(e))),
    new Zt(i, t || wi(), r || null, o)
  );
}
var Qe = class e {
  static {
    this.THROW_IF_NOT_FOUND = Gt;
  }
  static {
    this.NULL = new Qn();
  }
  static create(t, n) {
    if (Array.isArray(t)) return ha({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return ha({ name: r }, t.parent, t.providers, r);
    }
  }
  static {
    this.ɵprov = F({ token: e, providedIn: "any", factory: () => q($a) });
  }
  static {
    this.__NG_ELEMENT_ID__ = -1;
  }
};
var nh = new T("");
nh.__NG_ELEMENT_ID__ = (e) => {
  let t = Q();
  if (t === null) throw new x(204, !1);
  if (t.type & 2) return t.value;
  if (e & E.Optional) return null;
  throw new x(204, !1);
};
var rh = "ngOriginalError";
function po(e) {
  return e[rh];
}
var ju = !0,
  Fi = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = oh;
      }
      static {
        this.__NG_ENV_ID__ = (n) => n;
      }
    }
    return e;
  })(),
  ko = class extends Fi {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return pu(this._lView, t), () => Mf(this._lView, t);
    }
  };
function oh() {
  return new ko(_());
}
var Ar = (() => {
  class e {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new Vt(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let n = this.taskId++;
      return this.pendingTasks.add(n), n;
    }
    remove(n) {
      this.pendingTasks.delete(n),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
    static {
      this.ɵprov = F({ token: e, providedIn: "root", factory: () => new e() });
    }
  }
  return e;
})();
var Lo = class extends J {
    constructor(t = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = t),
        ru() &&
          ((this.destroyRef = b(Fi, { optional: !0 }) ?? void 0),
          (this.pendingTasks = b(Ar, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = C(null);
      try {
        super.next(t);
      } finally {
        C(n);
      }
    }
    subscribe(t, n, r) {
      let o = t,
        i = n || (() => null),
        s = r;
      if (t && typeof t == "object") {
        let u = t;
        (o = u.next?.bind(u)),
          (i = u.error?.bind(u)),
          (s = u.complete?.bind(u));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return t instanceof R && t.add(a), a;
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          t(n), r !== void 0 && this.pendingTasks?.remove(r);
        });
      };
    }
  },
  ue = Lo;
function rr(...e) {}
function Vu(e) {
  let t, n;
  function r() {
    e = rr;
    try {
      n !== void 0 &&
        typeof cancelAnimationFrame == "function" &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      e(), r();
    })),
    typeof requestAnimationFrame == "function" &&
      (n = requestAnimationFrame(() => {
        e(), r();
      })),
    () => r()
  );
}
function pa(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = rr;
    }
  );
}
var Ri = "isAngularZone",
  or = Ri + "_ID",
  ih = 0,
  W = class e {
    constructor(t) {
      (this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new ue(!1)),
        (this.onMicrotaskEmpty = new ue(!1)),
        (this.onStable = new ue(!1)),
        (this.onError = new ue(!1));
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = ju,
      } = t;
      if (typeof Zone > "u") throw new x(908, !1);
      Zone.assertZonePatched();
      let s = this;
      (s._nesting = 0),
        (s._outer = s._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n &&
          Zone.longStackTraceZoneSpec &&
          (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        (s.shouldCoalesceEventChangeDetection = !o && r),
        (s.shouldCoalesceRunChangeDetection = o),
        (s.callbackScheduled = !1),
        (s.scheduleInRootZone = i),
        uh(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(Ri) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new x(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new x(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, sh, rr, rr);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  sh = {};
function Pi(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function ah(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    Vu(() => {
      (e.callbackScheduled = !1),
        jo(e),
        (e.isCheckStableRunning = !0),
        Pi(e),
        (e.isCheckStableRunning = !1);
    });
  }
  e.scheduleInRootZone
    ? Zone.root.run(() => {
        t();
      })
    : e._outer.run(() => {
        t();
      }),
    jo(e);
}
function uh(e) {
  let t = () => {
      ah(e);
    },
    n = ih++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [Ri]: !0, [or]: n, [or + n]: !0 },
    onInvokeTask: (r, o, i, s, a, u) => {
      if (ch(u)) return r.invokeTask(i, s, a, u);
      try {
        return ga(e), r.invokeTask(i, s, a, u);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          ma(e);
      }
    },
    onInvoke: (r, o, i, s, a, u, c) => {
      try {
        return ga(e), r.invoke(i, s, a, u, c);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !lh(u) &&
          t(),
          ma(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), jo(e), Pi(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function jo(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function ga(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function ma(e) {
  e._nesting--, Pi(e);
}
var Vo = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new ue()),
      (this.onMicrotaskEmpty = new ue()),
      (this.onStable = new ue()),
      (this.onError = new ue());
  }
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};
function ch(e) {
  return Bu(e, "__ignore_ng_zone__");
}
function lh(e) {
  return Bu(e, "__scheduler_tick__");
}
function Bu(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var Mt = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error("ERROR", t),
        n && this._console.error("ORIGINAL ERROR", n);
    }
    _findOriginalError(t) {
      let n = t && po(t);
      for (; n && po(n); ) n = po(n);
      return n || null;
    }
  },
  dh = new T("", {
    providedIn: "root",
    factory: () => {
      let e = b(W),
        t = b(Mt);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function fh() {
  return Ot(Q(), _());
}
function Ot(e, t) {
  return new Ft(re(e, t));
}
var Ft = (() => {
  class e {
    constructor(n) {
      this.nativeElement = n;
    }
    static {
      this.__NG_ELEMENT_ID__ = fh;
    }
  }
  return e;
})();
function $u(e) {
  return e instanceof Ft ? e.nativeElement : e;
}
function hh() {
  return this._results[Symbol.iterator]();
}
var Bo = class e {
  get changes() {
    return (this._changes ??= new ue());
  }
  constructor(t = !1) {
    (this._emitDistinctChangesOnly = t),
      (this.dirty = !0),
      (this._onDirty = void 0),
      (this._results = []),
      (this._changesDetected = !1),
      (this._changes = void 0),
      (this.length = 0),
      (this.first = void 0),
      (this.last = void 0);
    let n = e.prototype;
    n[Symbol.iterator] || (n[Symbol.iterator] = hh);
  }
  get(t) {
    return this._results[t];
  }
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  find(t) {
    return this._results.find(t);
  }
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  forEach(t) {
    this._results.forEach(t);
  }
  some(t) {
    return this._results.some(t);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(t, n) {
    this.dirty = !1;
    let r = Pd(t);
    (this._changesDetected = !Rd(this._results, r, n)) &&
      ((this._results = r),
      (this.length = r.length),
      (this.last = r[this.length - 1]),
      (this.first = r[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.emit(this);
  }
  onDirty(t) {
    this._onDirty = t;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
};
function Hu(e) {
  return (e.flags & 128) === 128;
}
var Uu = new Map(),
  ph = 0;
function gh() {
  return ph++;
}
function mh(e) {
  Uu.set(e[Er], e);
}
function $o(e) {
  Uu.delete(e[Er]);
}
var ya = "__ngContext__";
function Ae(e, t) {
  $e(t) ? ((e[ya] = t[Er]), mh(t)) : (e[ya] = t);
}
function zu(e) {
  return Wu(e[Qt]);
}
function Gu(e) {
  return Wu(e[ce]);
}
function Wu(e) {
  for (; e !== null && !be(e); ) e = e[ce];
  return e;
}
var Ho;
function eb(e) {
  Ho = e;
}
function yh() {
  if (Ho !== void 0) return Ho;
  if (typeof document < "u") return document;
  throw new x(210, !1);
}
var tb = new T("", { providedIn: "root", factory: () => Dh }),
  Dh = "ng",
  vh = new T(""),
  qu = new T("", { providedIn: "platform", factory: () => "unknown" });
var nb = new T(""),
  rb = new T("", {
    providedIn: "root",
    factory: () =>
      yh().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
var Ih = "h",
  wh = "b";
var Eh = () => null;
function ki(e, t, n = !1) {
  return Eh(e, t, n);
}
var Zu = !1,
  Ch = new T("", { providedIn: "root", factory: () => Zu });
var Uo = class {
  constructor(t) {
    this.changingThisBreaksApplicationSecurity = t;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${hd})`;
  }
};
function Li(e) {
  return e instanceof Uo ? e.changingThisBreaksApplicationSecurity : e;
}
var bh = /^>|^->|<!--|-->|--!>|<!-$/g,
  _h = /(<|>)/g,
  Mh = "\u200B$1\u200B";
function xh(e) {
  return e.replace(bh, (t) => t.replace(_h, Mh));
}
function Yu(e) {
  return e instanceof Function ? e() : e;
}
function Sh(e) {
  return (e ?? b(Qe)).get(qu) === "browser";
}
var ir = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(ir || {}),
  Th;
function ji(e, t) {
  return Th(e, t);
}
function mt(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    be(r) ? (i = r) : $e(r) && ((s = !0), (r = r[Ce]));
    let a = ge(r);
    e === 0 && n !== null
      ? o == null
        ? ec(t, n, a)
        : ar(t, n, a, o || null, !0)
      : e === 1 && n !== null
        ? ar(t, n, a, o || null, !0)
        : e === 2
          ? Uh(t, a, s)
          : e === 3 && t.destroyNode(a),
      i != null && Gh(t, e, i, n, o);
  }
}
function Nh(e, t) {
  return e.createText(t);
}
function Ah(e, t, n) {
  e.setValue(t, n);
}
function Oh(e, t) {
  return e.createComment(xh(t));
}
function Qu(e, t, n) {
  return e.createElement(t, n);
}
function Fh(e, t) {
  Ku(e, t), (t[Ce] = null), (t[Y] = null);
}
function Rh(e, t, n, r, o, i) {
  (r[Ce] = o), (r[Y] = t), Fr(e, r, n, 1, o, i);
}
function Ku(e, t) {
  t[we].changeDetectionScheduler?.notify(9), Fr(e, t, t[P], 2, null, null);
}
function Ph(e) {
  let t = e[Qt];
  if (!t) return go(e[y], e);
  for (; t; ) {
    let n = null;
    if ($e(t)) n = t[Qt];
    else {
      let r = t[G];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[ce] && t !== e; ) $e(t) && go(t[y], t), (t = t[V]);
      t === null && (t = e), $e(t) && go(t[y], t), (n = t && t[ce]);
    }
    t = n;
  }
}
function kh(e, t, n, r) {
  let o = G + r,
    i = n.length;
  r > 0 && (n[o - 1][ce] = t),
    r < i - G ? ((t[ce] = n[o]), Ba(n, G + r, t)) : (n.push(t), (t[ce] = null)),
    (t[V] = n);
  let s = t[ze];
  s !== null && n !== s && Ju(s, t);
  let a = t[Ee];
  a !== null && a.insertView(e), No(t), (t[g] |= 128);
}
function Ju(e, t) {
  let n = e[bt],
    r = t[V];
  if ($e(r)) e[g] |= Xn.HasTransplantedViews;
  else {
    let o = r[V][ne];
    t[ne] !== o && (e[g] |= Xn.HasTransplantedViews);
  }
  n === null ? (e[bt] = [t]) : n.push(t);
}
function Vi(e, t) {
  let n = e[bt],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function sr(e, t) {
  if (e.length <= G) return;
  let n = G + t,
    r = e[n];
  if (r) {
    let o = r[ze];
    o !== null && o !== e && Vi(o, r), t > 0 && (e[n - 1][ce] = r[ce]);
    let i = Zn(e, G + t);
    Fh(r[y], r);
    let s = i[Ee];
    s !== null && s.detachView(i[y]),
      (r[V] = null),
      (r[ce] = null),
      (r[g] &= -129);
  }
  return r;
}
function Bi(e, t) {
  if (!(t[g] & 256)) {
    let n = t[P];
    n.destroyNode && Fr(e, t, n, 3, null, null), Ph(t);
  }
}
function go(e, t) {
  if (t[g] & 256) return;
  let n = C(null);
  try {
    (t[g] &= -129),
      (t[g] |= 256),
      t[ee] && zr(t[ee]),
      jh(e, t),
      Lh(e, t),
      t[y].type === 1 && t[P].destroy();
    let r = t[ze];
    if (r !== null && be(t[V])) {
      r !== t[V] && Vi(r, t);
      let o = t[Ee];
      o !== null && o.detachView(e);
    }
    $o(t);
  } finally {
    C(n);
  }
}
function Lh(e, t) {
  let n = e.cleanup,
    r = t[Kn];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == "string") {
        let s = n[i + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
      } else {
        let s = r[n[i + 1]];
        n[i].call(s);
      }
  r !== null && (t[Kn] = null);
  let o = t[xe];
  if (o !== null) {
    t[xe] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function jh(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof Ze)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              u = i[s + 1];
            he(4, a, u);
            try {
              u.call(a);
            } finally {
              he(5, a, u);
            }
          }
        else {
          he(4, o, i);
          try {
            i.call(o);
          } finally {
            he(5, o, i);
          }
        }
      }
    }
}
function Xu(e, t, n) {
  return Vh(e, t.parent, n);
}
function Vh(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[Ce];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === Wt.None || i === Wt.Emulated) return null;
    }
    return re(r, n);
  }
}
function ar(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function ec(e, t, n) {
  e.appendChild(t, n);
}
function Da(e, t, n, r, o) {
  r !== null ? ar(e, t, n, r, o) : ec(e, t, n);
}
function tc(e, t) {
  return e.parentNode(t);
}
function Bh(e, t) {
  return e.nextSibling(t);
}
function nc(e, t, n) {
  return Hh(e, t, n);
}
function $h(e, t, n) {
  return e.type & 40 ? re(e, n) : null;
}
var Hh = $h,
  va;
function Or(e, t, n, r) {
  let o = Xu(e, r, t),
    i = t[P],
    s = r.parent || t[Y],
    a = nc(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let u = 0; u < n.length; u++) Da(i, o, n[u], a, !1);
    else Da(i, o, n, a, !1);
  va !== void 0 && va(i, r, t, n, o);
}
function Ut(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return re(t, e);
    if (n & 4) return zo(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return Ut(e, r);
      {
        let o = e[t.index];
        return be(o) ? zo(-1, o) : ge(o);
      }
    } else {
      if (n & 128) return Ut(e, t.next);
      if (n & 32) return ji(t, e)() || ge(e[t.index]);
      {
        let r = rc(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = We(e[ne]);
          return Ut(o, r);
        } else return Ut(e, t.next);
      }
    }
  }
  return null;
}
function rc(e, t) {
  if (t !== null) {
    let r = e[ne][Y],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function zo(e, t) {
  let n = G + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[y].firstChild;
    if (o !== null) return Ut(r, o);
  }
  return t[Ge];
}
function Uh(e, t, n) {
  e.removeChild(null, t, n);
}
function $i(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      u = n.type;
    if (
      (s && t === 0 && (a && Ae(ge(a), r), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (u & 8) $i(e, t, n.child, r, o, i, !1), mt(t, e, o, a, i);
      else if (u & 32) {
        let c = ji(n, r),
          l;
        for (; (l = c()); ) mt(t, e, o, l, i);
        mt(t, e, o, a, i);
      } else u & 16 ? oc(e, t, r, n, o, i) : mt(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function Fr(e, t, n, r, o, i) {
  $i(n, r, e.firstChild, t, o, i, !1);
}
function zh(e, t, n) {
  let r = t[P],
    o = Xu(e, n, t),
    i = n.parent || t[Y],
    s = nc(i, n, t);
  oc(r, 0, t, n, o, s);
}
function oc(e, t, n, r, o, i) {
  let s = n[ne],
    u = s[Y].projection[r.projection];
  if (Array.isArray(u))
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      mt(t, e, o, l, i);
    }
  else {
    let c = u,
      l = s[V];
    Hu(r) && (c.flags |= 128), $i(e, t, c, l, o, i, !0);
  }
}
function Gh(e, t, n, r, o) {
  let i = n[Ge],
    s = ge(n);
  i !== s && mt(t, e, r, i, o);
  for (let a = G; a < n.length; a++) {
    let u = n[a];
    Fr(u[y], u, e, t, r, i);
  }
}
function Wh(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : ir.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= ir.Important)),
        e.setStyle(n, r, o, i));
  }
}
function qh(e, t, n) {
  e.setAttribute(t, "style", n);
}
function ic(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function sc(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && bo(e, t, r),
    o !== null && ic(e, t, o),
    i !== null && qh(e, t, i);
}
var _e = {};
function ob(e = 1) {
  ac(L(), _(), tt() + e, !1);
}
function ac(e, t, n, r) {
  if (!r)
    if ((t[g] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && $n(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && Hn(t, i, 0, n);
    }
  qe(n);
}
function nt(e, t = E.Default) {
  let n = _();
  if (n === null) return q(e, t);
  let r = Q();
  return Ru(r, n, $(e), t);
}
function ib() {
  let e = "invalid";
  throw new Error(e);
}
function uc(e, t, n, r, o, i) {
  let s = C(null);
  try {
    let a = null;
    o & Se.SignalBased && (a = t[r][le]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & Se.HasDecoratorInputTransform &&
        (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : su(t, a, r, i);
  } finally {
    C(s);
  }
}
function Zh(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) qe(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          kf(s, i);
          let u = t[i];
          a(2, u);
        }
      }
    } finally {
      qe(-1);
    }
}
function Rr(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return (
    (d[Ce] = o),
    (d[g] = r | 4 | 128 | 8 | 64),
    (c !== null || (e && e[g] & 2048)) && (d[g] |= 2048),
    fu(d),
    (d[V] = d[At] = e),
    (d[te] = n),
    (d[we] = s || (e && e[we])),
    (d[P] = a || (e && e[P])),
    (d[Ct] = u || (e && e[Ct]) || null),
    (d[Y] = i),
    (d[Er] = gh()),
    (d[Yt] = l),
    (d[ou] = c),
    (d[ne] = t.type == 2 ? e[ne] : d),
    d
  );
}
function Rt(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = Yh(e, t, n, r, o)), Pf() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = Of();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return et(i, !0), i;
}
function Yh(e, t, n, r, o) {
  let i = Du(),
    s = Mi(),
    a = s ? i : i && i.parent,
    u = (e.data[t] = tp(e, a, n, t, r, o));
  return (
    e.firstChild === null && (e.firstChild = u),
    i !== null &&
      (s
        ? i.child == null && u.parent !== null && (i.child = u)
        : i.next === null && ((i.next = u), (u.prev = i))),
    u
  );
}
function cc(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function lc(e, t, n, r, o) {
  let i = tt(),
    s = r & 2;
  try {
    qe(-1), s && t.length > Z && ac(e, t, Z, !1), he(s ? 2 : 0, o), n(r, o);
  } finally {
    qe(i), he(s ? 3 : 1, o);
  }
}
function Hi(e, t, n) {
  if (Ei(t)) {
    let r = C(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let u = n[s];
          a.contentQueries(1, u, s);
        }
      }
    } finally {
      C(r);
    }
  }
}
function Ui(e, t, n) {
  mu() && (ap(e, t, n, re(n, t)), (n.flags & 64) === 64 && pc(e, t, n));
}
function zi(e, t, n = re) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function dc(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = Gi(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id,
      ))
    : t;
}
function Gi(e, t, n, r, o, i, s, a, u, c, l) {
  let d = Z + r,
    h = d + o,
    f = Qh(d, h),
    p = typeof c == "function" ? c() : c;
  return (f[y] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: h,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: u,
    consts: p,
    incompleteFirstPass: !1,
    ssrId: l,
  });
}
function Qh(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : _e);
  return n;
}
function Kh(e, t, n, r) {
  let i = r.get(Ch, Zu) || n === Wt.ShadowDom,
    s = e.selectRootElement(t, i);
  return Jh(s), s;
}
function Jh(e) {
  Xh(e);
}
var Xh = () => null;
function ep(e, t, n, r) {
  let o = yc(t);
  o.push(n), e.firstCreatePass && Dc(e).push(r, o.length - 1);
}
function tp(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    yu() && (a |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function Ia(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a,
      u = Se.None;
    Array.isArray(s) ? ((a = s[0]), (u = s[1])) : (a = s);
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? wa(r, n, c, a, u) : wa(r, n, c, a);
  }
  return r;
}
function wa(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
    o !== void 0 && i.push(o);
}
function np(e, t, n) {
  let r = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    u = null,
    c = null;
  for (let l = r; l < o; l++) {
    let d = i[l],
      h = n ? n.get(d) : null,
      f = h ? h.inputs : null,
      p = h ? h.outputs : null;
    (u = Ia(0, d.inputs, l, u, f)), (c = Ia(1, d.outputs, l, c, p));
    let w = u !== null && s !== null && !Di(t) ? Dp(u, l, s) : null;
    a.push(w);
  }
  u !== null &&
    (u.hasOwnProperty("class") && (t.flags |= 8),
    u.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = u),
    (t.outputs = c);
}
function rp(e) {
  return e === "class"
    ? "className"
    : e === "for"
      ? "htmlFor"
      : e === "formaction"
        ? "formAction"
        : e === "innerHtml"
          ? "innerHTML"
          : e === "readonly"
            ? "readOnly"
            : e === "tabindex"
              ? "tabIndex"
              : e;
}
function fc(e, t, n, r, o, i, s, a) {
  let u = re(t, n),
    c = t.inputs,
    l;
  !a && c != null && (l = c[r])
    ? (qi(e, n, l, r, o), Cr(t) && op(n, t.index))
    : t.type & 3
      ? ((r = rp(r)),
        (o = s != null ? s(o, t.value || "", r) : o),
        i.setProperty(u, r, o))
      : t.type & 12;
}
function op(e, t) {
  let n = Xe(t, e);
  n[g] & 16 || (n[g] |= 64);
}
function Wi(e, t, n, r) {
  if (mu()) {
    let o = r === null ? null : { "": -1 },
      i = cp(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && hc(e, t, n, s, o, a),
      o && lp(n, r, o);
  }
  n.mergedAttrs = qt(n.mergedAttrs, n.attrs);
}
function hc(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) Ro(nr(n, t), e, r[c].type);
  fp(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    u = cc(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    (n.mergedAttrs = qt(n.mergedAttrs, l.hostAttrs)),
      hp(e, n, t, u, l),
      dp(u, l, o),
      l.contentQueries !== null && (n.flags |= 4),
      (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) &&
        (n.flags |= 64);
    let d = l.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
      u++;
  }
  np(e, n, i);
}
function ip(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    sp(s) != a && s.push(a), s.push(n, r, i);
  }
}
function sp(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function ap(e, t, n, r) {
  let o = n.directiveStart,
    i = n.directiveEnd;
  Cr(n) && pp(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || nr(n, t),
    Ae(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a],
      c = Ye(t, e, a, n);
    if ((Ae(c, t), s !== null && yp(t, a - o, c, u, n, s), Ne(u))) {
      let l = Xe(n.index, t);
      l[te] = Ye(t, e, a, n);
    }
  }
}
function pc(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = Lf();
  try {
    qe(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a],
        c = t[a];
      Ao(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          up(u, c);
    }
  } finally {
    qe(-1), Ao(s);
  }
}
function up(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function cp(e, t) {
  let n = e.directiveRegistry,
    r = null,
    o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (Ga(t, s.selectors, !1))
        if ((r || (r = []), Ne(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let u = a.length;
            Go(e, t, u);
          } else r.unshift(s), Go(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
    }
  return r === null ? null : [r, o];
}
function Go(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function lp(e, t, n) {
  if (t) {
    let r = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new x(-301, !1);
      r.push(t[o], i);
    }
  }
}
function dp(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    Ne(t) && (n[""] = e);
  }
}
function fp(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function hp(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = It(o.type, !0)),
    s = new Ze(i, Ne(o), nt);
  (e.blueprint[r] = s), (n[r] = s), ip(e, t, r, cc(e, n, o.hostVars, _e), o);
}
function pp(e, t, n) {
  let r = re(t, e),
    o = dc(n),
    i = e[we].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = Pr(
    e,
    Rr(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null),
  );
  e[t.index] = a;
}
function gp(e, t, n, r, o, i) {
  let s = re(e, t);
  mp(t[P], s, i, e.value, n, r, o);
}
function mp(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? pi(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function yp(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let u = s[a++],
        c = s[a++],
        l = s[a++],
        d = s[a++];
      uc(r, n, u, c, l, d);
    }
}
function Dp(e, t, n) {
  let r = null,
    o = 0;
  for (; o < n.length; ) {
    let i = n[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (e.hasOwnProperty(i)) {
      r === null && (r = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3)
        if (s[a] === t) {
          r.push(i, s[a + 1], s[a + 2], n[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return r;
}
function gc(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function mc(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = C(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          xr(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      C(r);
    }
  }
}
function Pr(e, t) {
  return e[Qt] ? (e[sa][ce] = t) : (e[Qt] = t), (e[sa] = t), t;
}
function Wo(e, t, n) {
  xr(0);
  let r = C(null);
  try {
    t(e, n);
  } finally {
    C(r);
  }
}
function yc(e) {
  return (e[Kn] ??= []);
}
function Dc(e) {
  return (e.cleanup ??= []);
}
function vc(e, t) {
  let n = e[Ct],
    r = n ? n.get(Mt, null) : null;
  r && r.handleError(t);
}
function qi(e, t, n, r, o) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      u = n[i++],
      c = t[s],
      l = e.data[s];
    uc(l, c, r, a, u, o);
  }
}
function vp(e, t, n) {
  let r = du(t, e);
  Ah(e[P], r, n);
}
function Ip(e, t) {
  let n = Xe(t, e),
    r = n[y];
  wp(r, n);
  let o = n[Ce];
  o !== null && n[Yt] === null && (n[Yt] = ki(o, n[Ct])), Zi(r, n, n[te]);
}
function wp(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function Zi(e, t, n) {
  Ti(t);
  try {
    let r = e.viewQuery;
    r !== null && Wo(1, r, n);
    let o = e.template;
    o !== null && lc(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[Ee]?.finishViewCreation(e),
      e.staticContentQueries && mc(e, t),
      e.staticViewQueries && Wo(2, e.viewQuery, n);
    let i = e.components;
    i !== null && Ep(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[g] &= -5), Ni();
  }
}
function Ep(e, t) {
  for (let n = 0; n < t.length; n++) Ip(e, t[n]);
}
function Yi(e, t, n, r) {
  let o = C(null);
  try {
    let i = t.tView,
      a = e[g] & 4096 ? 4096 : 16,
      u = Rr(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null,
      ),
      c = e[t.index];
    u[ze] = c;
    let l = e[Ee];
    return l !== null && (u[Ee] = l.createEmbeddedView(i)), Zi(i, u, n), u;
  } finally {
    C(o);
  }
}
function Cp(e, t) {
  let n = G + t;
  if (n < e.length) return e[n];
}
function ur(e, t) {
  return !t || t.firstChild === null || Hu(e);
}
function Qi(e, t, n, r = !0) {
  let o = t[y];
  if ((kh(o, t, e, n), r)) {
    let s = zo(n, e),
      a = t[P],
      u = tc(a, e[Ge]);
    u !== null && Rh(o, e[Y], a, t, u, s);
  }
  let i = t[Yt];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function bp(e, t) {
  let n = sr(e, t);
  return n !== void 0 && Bi(n[y], n), n;
}
function cr(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(ge(i)), be(i) && _p(i, r);
    let s = n.type;
    if (s & 8) cr(e, t, n.child, r);
    else if (s & 32) {
      let a = ji(n, t),
        u;
      for (; (u = a()); ) r.push(u);
    } else if (s & 16) {
      let a = rc(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = We(t[ne]);
        cr(u[y], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function _p(e, t) {
  for (let n = G; n < e.length; n++) {
    let r = e[n],
      o = r[y].firstChild;
    o !== null && cr(r[y], r, o, t);
  }
  e[Ge] !== e[Ce] && t.push(e[Ge]);
}
var Ic = [];
function Mp(e) {
  return e[ee] ?? xp(e);
}
function xp(e) {
  let t = Ic.pop() ?? Object.create(Tp);
  return (t.lView = e), t;
}
function Sp(e) {
  e.lView[ee] !== e && ((e.lView = null), Ic.push(e));
}
var Tp = De(ye({}, Lt), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    Mr(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[ee] = this;
  },
});
function Np(e) {
  let t = e[ee] ?? Object.create(Ap);
  return (t.lView = e), t;
}
var Ap = De(ye({}, Lt), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = We(e.lView);
    for (; t && !wc(t[y]); ) t = We(t);
    t && hu(t);
  },
  consumerOnSignalRead() {
    this.lView[ee] = this;
  },
});
function wc(e) {
  return e.type !== 2;
}
var Op = 100;
function Ec(e, t = !0, n = 0) {
  let r = e[we],
    o = r.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    Fp(e, n);
  } catch (s) {
    throw (t && vc(e, s), s);
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}
function Fp(e, t) {
  let n = vu();
  try {
    ua(!0), qo(e, t);
    let r = 0;
    for (; _r(e); ) {
      if (r === Op) throw new x(103, !1);
      r++, qo(e, 1);
    }
  } finally {
    ua(n);
  }
}
function Rp(e, t, n, r) {
  let o = t[g];
  if ((o & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && t[we].inlineEffectRunner?.flush(), Ti(t);
  let a = !0,
    u = null,
    c = null;
  i ||
    (wc(e)
      ? ((c = Mp(t)), (u = sn(c)))
      : ls() === null
        ? ((a = !1), (c = Np(t)), (u = sn(c)))
        : t[ee] && (zr(t[ee]), (t[ee] = null)));
  try {
    fu(t), Rf(e.bindingStartIndex), n !== null && lc(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i)
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && $n(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && Hn(t, f, 0, null), lo(t, 0);
      }
    if ((s || Pp(t), Cc(t, 0), e.contentQueries !== null && mc(e, t), !i))
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && $n(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && Hn(t, f, 1), lo(t, 1);
      }
    Zh(e, t);
    let d = e.components;
    d !== null && _c(t, d, 0);
    let h = e.viewQuery;
    if ((h !== null && Wo(2, h, r), !i))
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && $n(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && Hn(t, f, 2), lo(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[co])) {
      for (let f of t[co]) f();
      t[co] = null;
    }
    i || (t[g] &= -73);
  } catch (l) {
    throw (i || Mr(t), l);
  } finally {
    c !== null && (Hr(c, u), a && Sp(c)), Ni();
  }
}
function Cc(e, t) {
  for (let n = zu(e); n !== null; n = Gu(n))
    for (let r = G; r < n.length; r++) {
      let o = n[r];
      bc(o, t);
    }
}
function Pp(e) {
  for (let t = zu(e); t !== null; t = Gu(t)) {
    if (!(t[g] & Xn.HasTransplantedViews)) continue;
    let n = t[bt];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      hu(o);
    }
  }
}
function kp(e, t, n) {
  let r = Xe(t, e);
  bc(r, n);
}
function bc(e, t) {
  _i(e) && qo(e, t);
}
function qo(e, t) {
  let r = e[y],
    o = e[g],
    i = e[ee],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && Ur(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[g] &= -9217),
    s)
  )
    Rp(r, e, r.template, e[te]);
  else if (o & 8192) {
    Cc(e, 1);
    let a = r.components;
    a !== null && _c(e, a, 1);
  }
}
function _c(e, t, n) {
  for (let r = 0; r < t.length; r++) kp(e, t[r], n);
}
function Ki(e, t) {
  let n = vu() ? 64 : 1088;
  for (e[we].changeDetectionScheduler?.notify(t); e; ) {
    e[g] |= n;
    let r = We(e);
    if (So(e) && !r) return e;
    e = r;
  }
  return null;
}
var Ke = class {
    get rootNodes() {
      let t = this._lView,
        n = t[y];
      return cr(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[te];
    }
    set context(t) {
      this._lView[te] = t;
    }
    get destroyed() {
      return (this._lView[g] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[V];
        if (be(t)) {
          let n = t[Jn],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (sr(t, r), Zn(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      Bi(this._lView[y], this._lView);
    }
    onDestroy(t) {
      pu(this._lView, t);
    }
    markForCheck() {
      Ki(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[g] &= -129;
    }
    reattach() {
      No(this._lView), (this._lView[g] |= 128);
    }
    detectChanges() {
      (this._lView[g] |= 1024), Ec(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new x(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = So(this._lView),
        n = this._lView[ze];
      n !== null && !t && Vi(n, this._lView), Ku(this._lView[y], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new x(902, !1);
      this._appRef = t;
      let n = So(this._lView),
        r = this._lView[ze];
      r !== null && !n && Ju(r, this._lView), No(this._lView);
    }
  },
  xt = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = Vp;
      }
    }
    return e;
  })(),
  Lp = xt,
  jp = class extends Lp {
    constructor(t, n, r) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = r);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let o = Yi(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new Ke(o);
    }
  };
function Vp() {
  return kr(Q(), _());
}
function kr(e, t) {
  return e.type & 4 ? new jp(t, e, Ot(e, t)) : null;
}
var ab = new RegExp(`^(\\d+)*(${wh}|${Ih})*(.*)`);
var Bp = () => null;
function lr(e, t) {
  return Bp(e, t);
}
var St = class {},
  Ji = new T("", { providedIn: "root", factory: () => !1 });
var Mc = new T(""),
  xc = new T(""),
  Zo = class {},
  dr = class {};
function $p(e) {
  let t = Error(`No component factory found for ${U(e)}.`);
  return (t[Hp] = e), t;
}
var Hp = "ngComponent";
var Yo = class {
    resolveComponentFactory(t) {
      throw $p(t);
    }
  },
  Tt = class {
    static {
      this.NULL = new Yo();
    }
  },
  fr = class {};
var Up = (() => {
  class e {
    static {
      this.ɵprov = F({ token: e, providedIn: "root", factory: () => null });
    }
  }
  return e;
})();
function hr(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = wo(o, a);
      else if (i == 2) {
        let u = a,
          c = t[++s];
        r = wo(r, u + ": " + c + ";");
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
var pr = class extends Tt {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = Ue(t);
    return new Kt(n, this.ngModule);
  }
};
function Ea(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o),
      s = i ? o[0] : o,
      a = i ? o[1] : Se.None;
    t
      ? n.push({
          propName: s,
          templateName: r,
          isSignal: (a & Se.SignalBased) !== 0,
        })
      : n.push({ propName: s, templateName: r });
  }
  return n;
}
function zp(e) {
  let t = e.toLowerCase();
  return t === "svg" ? lu : t === "math" ? wf : null;
}
var Kt = class extends dr {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        r = Ea(t.inputs, !0);
      if (n !== null)
        for (let o of r)
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
      return r;
    }
    get outputs() {
      return Ea(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Kd(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = C(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Te ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new Oo(t, s) : t,
          u = a.get(fr, null);
        if (u === null) throw new x(407, !1);
        let c = a.get(Up, null),
          l = a.get(St, null),
          d = {
            rendererFactory: u,
            sanitizer: c,
            inlineEffectRunner: null,
            changeDetectionScheduler: l,
          },
          h = u.createRenderer(null, this.componentDef),
          f = this.componentDef.selectors[0][0] || "div",
          p = r
            ? Kh(h, r, this.componentDef.encapsulation, a)
            : Qu(h, f, zp(f)),
          w = 512;
        this.componentDef.signals
          ? (w |= 4096)
          : this.componentDef.onPush || (w |= 16);
        let O = null;
        p !== null && (O = ki(p, a, !0));
        let S = Gi(0, null, null, 1, 0, null, null, null, null, null, null),
          j = Rr(null, S, null, w, null, null, d, h, a, null, O);
        Ti(j);
        let me,
          oe,
          at = null;
        try {
          let K = this.componentDef,
            ut,
            jr = null;
          K.findHostDirectiveDefs
            ? ((ut = []),
              (jr = new Map()),
              K.findHostDirectiveDefs(K, ut, jr),
              ut.push(K))
            : (ut = [K]);
          let pl = Gp(j, p);
          (at = Wp(pl, p, K, ut, j, d, h)),
            (oe = bi(S, Z)),
            p && Yp(h, K, p, r),
            n !== void 0 && Qp(oe, this.ngContentSelectors, n),
            (me = Zp(at, K, ut, jr, j, [Kp])),
            Zi(S, j, null);
        } catch (K) {
          throw (at !== null && $o(at), $o(j), K);
        } finally {
          Ni();
        }
        return new Qo(this.componentType, me, Ot(oe, j), j, oe);
      } finally {
        C(i);
      }
    }
  },
  Qo = class extends Zo {
    constructor(t, n, r, o, i) {
      super(),
        (this.location = r),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new Ke(o, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let r = this._tNode.inputs,
        o;
      if (r !== null && (o = r[t])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), n))
        )
          return;
        let i = this._rootLView;
        qi(i[y], i, o, t, n), this.previousInputValues.set(t, n);
        let s = Xe(this._tNode.index, i);
        Ki(s, 1);
      }
    }
    get injector() {
      return new He(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function Gp(e, t) {
  let n = e[y],
    r = Z;
  return (e[r] = t), Rt(n, r, 2, "#host", null);
}
function Wp(e, t, n, r, o, i, s) {
  let a = o[y];
  qp(r, e, t, s);
  let u = null;
  t !== null && (u = ki(t, o[Ct]));
  let c = i.rendererFactory.createRenderer(t, n),
    l = 16;
  n.signals ? (l = 4096) : n.onPush && (l = 64);
  let d = Rr(o, dc(n), null, l, o[e.index], e, i, c, null, null, u);
  return (
    a.firstCreatePass && Go(a, e, r.length - 1), Pr(o, d), (o[e.index] = d)
  );
}
function qp(e, t, n, r) {
  for (let o of e) t.mergedAttrs = qt(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (hr(t, t.mergedAttrs, !0), n !== null && sc(r, n, t));
}
function Zp(e, t, n, r, o, i) {
  let s = Q(),
    a = o[y],
    u = re(s, o);
  hc(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l,
      h = Ye(o, a, d, s);
    Ae(h, o);
  }
  pc(a, o, s), u && Ae(u, o);
  let c = Ye(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[te] = o[te] = c), i !== null)) for (let l of i) l(c, t);
  return Hi(a, s, o), c;
}
function Yp(e, t, n, r) {
  if (r) bo(e, n, ["ng-version", "18.2.13"]);
  else {
    let { attrs: o, classes: i } = Jd(t.selectors[0]);
    o && bo(e, n, o), i && i.length > 0 && ic(e, n, i.join(" "));
  }
}
function Qp(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}
function Kp() {
  let e = Q();
  Nr(_()[y], e);
}
var Pt = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = Jp;
    }
  }
  return e;
})();
function Jp() {
  let e = Q();
  return Tc(e, _());
}
var Xp = Pt,
  Sc = class extends Xp {
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return Ot(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new He(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = Oi(this._hostTNode, this._hostLView);
      if (Su(t)) {
        let n = tr(t, this._hostLView),
          r = er(t),
          o = n[y].data[r + 8];
        return new He(o, n);
      } else return new He(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = Ca(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - G;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = lr(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, ur(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !yf(t),
        a;
      if (s) a = n;
      else {
        let p = n || {};
        (a = p.index),
          (r = p.injector),
          (o = p.projectableNodes),
          (i = p.environmentInjector || p.ngModuleRef);
      }
      let u = s ? t : new Kt(Ue(t)),
        c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let w = (s ? c : this.parentInjector).get(Te, null);
        w && (i = w);
      }
      let l = Ue(u.componentType ?? {}),
        d = lr(this._lContainer, l?.id ?? null),
        h = d?.firstChild ?? null,
        f = u.create(c, o, h, i);
      return this.insertImpl(f.hostView, a, ur(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (bf(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[V],
            c = new Sc(u, u[Y], u[V]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return Qi(s, o, i, r), t.attachToViewContainerRef(), Ba(mo(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = Ca(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = sr(this._lContainer, n);
      r && (Zn(mo(this._lContainer), n), Bi(r[y], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = sr(this._lContainer, n);
      return r && Zn(mo(this._lContainer), n) != null ? new Ke(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function Ca(e) {
  return e[Jn];
}
function mo(e) {
  return e[Jn] || (e[Jn] = []);
}
function Tc(e, t) {
  let n,
    r = t[e.index];
  return (
    be(r) ? (n = r) : ((n = gc(r, t, null, e)), (t[e.index] = n), Pr(t, n)),
    tg(n, t, e, r),
    new Sc(n, e, t)
  );
}
function eg(e, t) {
  let n = e[P],
    r = n.createComment(""),
    o = re(t, e),
    i = tc(n, o);
  return ar(n, i, r, Bh(n, o), !1), r;
}
var tg = og,
  ng = () => !1;
function rg(e, t, n) {
  return ng(e, t, n);
}
function og(e, t, n, r) {
  if (e[Ge]) return;
  let o;
  n.type & 8 ? (o = ge(r)) : (o = eg(t, n)), (e[Ge] = o);
}
var Ko = class e {
    constructor(t) {
      (this.queryList = t), (this.matches = null);
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  Jo = class e {
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        es(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  gr = class {
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = lg(t)) : (this.predicate = t);
    }
  },
  Xo = class e {
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = r), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  ei = class e {
    constructor(t, n = -1) {
      (this.metadata = t),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          this.matchTNodeWithReadOption(t, n, ig(n, i)),
            this.matchTNodeWithReadOption(t, n, Un(n, t, i, !1, !1));
        }
      else
        r === xt
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, Un(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === Ft || o === Pt || (o === xt && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = Un(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function ig(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function sg(e, t) {
  return e.type & 11 ? Ot(e, t) : e.type & 4 ? kr(e, t) : null;
}
function ag(e, t, n, r) {
  return n === -1 ? sg(t, e) : n === -2 ? ug(e, t, r) : Ye(e, e[y], n, t);
}
function ug(e, t, n) {
  if (n === Ft) return Ot(t, e);
  if (n === xt) return kr(t, e);
  if (n === Pt) return Tc(t, e);
}
function Nc(e, t, n, r) {
  let o = t[Ee].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null);
      else {
        let l = i[c];
        a.push(ag(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function ti(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = Nc(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1],
          l = t[-u];
        for (let d = G; d < l.length; d++) {
          let h = l[d];
          h[ze] === h[V] && ti(h[y], h, c, r);
        }
        if (l[bt] !== null) {
          let d = l[bt];
          for (let h = 0; h < d.length; h++) {
            let f = d[h];
            ti(f[y], f, c, r);
          }
        }
      }
    }
  }
  return r;
}
function Xi(e, t) {
  return e[Ee].queries[t].queryList;
}
function Ac(e, t, n) {
  let r = new Bo((n & 4) === 4);
  return (
    ep(e, t, r, r.destroy), (t[Ee] ??= new Jo()).queries.push(new Ko(r)) - 1
  );
}
function cg(e, t, n) {
  let r = L();
  return (
    r.firstCreatePass &&
      (Fc(r, new gr(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    Ac(r, _(), t)
  );
}
function Oc(e, t, n, r) {
  let o = L();
  if (o.firstCreatePass) {
    let i = Q();
    Fc(o, new gr(t, n, r), i.index),
      dg(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return Ac(o, _(), n);
}
function lg(e) {
  return e.split(",").map((t) => t.trim());
}
function Fc(e, t, n) {
  e.queries === null && (e.queries = new Xo()), e.queries.track(new ei(t, n));
}
function dg(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function es(e, t) {
  return e.queries.getByIndex(t);
}
function Rc(e, t) {
  let n = e[y],
    r = es(n, t);
  return r.crossesNgTemplate ? ti(n, e, t, []) : Nc(n, e, r, t);
}
var ba = new Set();
function rt(e) {
  ba.has(e) ||
    (ba.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function fg(e, t) {
  rt("NgSignals");
  let n = Is(e),
    r = n[le];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => Wr(r, o)),
    (n.update = (o) => ws(r, o)),
    (n.asReadonly = hg.bind(n)),
    n
  );
}
function hg() {
  let e = this[le];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[le] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function Pc(e, t) {
  let n,
    r = Gr(() => {
      n._dirtyCounter();
      let o = yg(n, e);
      if (t && o === void 0) throw new x(-951, !1);
      return o;
    });
  return (n = r[le]), (n._dirtyCounter = fg(0)), (n._flatValue = void 0), r;
}
function pg() {
  return Pc(!0, !1);
}
function gg() {
  return Pc(!0, !0);
}
function mg(e, t) {
  let n = e[le];
  (n._lView = _()),
    (n._queryIndex = t),
    (n._queryList = Xi(n._lView, t)),
    n._queryList.onDirty(() => n._dirtyCounter.update((r) => r + 1));
}
function yg(e, t) {
  let n = e._lView,
    r = e._queryIndex;
  if (n === void 0 || r === void 0 || n[g] & 4) return t ? void 0 : H;
  let o = Xi(n, r),
    i = Rc(n, r);
  return (
    o.reset(i, $u),
    t
      ? o.first
      : o._changesDetected || e._flatValue === void 0
        ? (e._flatValue = o.toArray())
        : e._flatValue
  );
}
function _a(e, t) {
  return pg();
}
function Dg(e, t) {
  return gg();
}
var cb = ((_a.required = Dg), _a);
function vg(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function Ig(e) {
  let t = vg(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (Ne(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new x(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = Ln(e.inputs)),
          (s.inputTransforms = Ln(e.inputTransforms)),
          (s.declaredInputs = Ln(e.declaredInputs)),
          (s.outputs = Ln(e.outputs));
        let a = o.hostBindings;
        a && _g(e, a);
        let u = o.viewQuery,
          c = o.contentQueries;
        if (
          (u && Cg(e, u),
          c && bg(e, c),
          wg(e, o),
          pd(e.outputs, o.outputs),
          Ne(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === Ig && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  Eg(r);
}
function wg(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    if (
      r !== void 0 &&
      ((e.inputs[n] = r),
      (e.declaredInputs[n] = t.declaredInputs[n]),
      t.inputTransforms !== null)
    ) {
      let o = Array.isArray(r) ? r[0] : r;
      if (!t.inputTransforms.hasOwnProperty(o)) continue;
      (e.inputTransforms ??= {}), (e.inputTransforms[o] = t.inputTransforms[o]);
    }
  }
}
function Eg(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = qt(o.hostAttrs, (n = qt(n, o.hostAttrs))));
  }
}
function Ln(e) {
  return e === wt ? {} : e === H ? [] : e;
}
function Cg(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function bg(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function _g(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function Mg(e) {
  let t = e.inputConfig,
    n = {};
  for (let r in t)
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
var Oe = class {},
  ni = class {};
var ri = class extends Oe {
    constructor(t, n, r, o = !0) {
      super(),
        (this.ngModuleType = t),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new pr(this));
      let i = Ya(t);
      (this._bootstrapComponents = Yu(i.bootstrap)),
        (this._r3Injector = Lu(
          t,
          n,
          [
            { provide: Oe, useValue: this },
            { provide: Tt, useValue: this.componentFactoryResolver },
            ...r,
          ],
          U(t),
          new Set(["environment"]),
        )),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  oi = class extends ni {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new ri(this.moduleType, t, []);
    }
  };
var mr = class extends Oe {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new pr(this)),
      (this.instance = null);
    let n = new Zt(
      [
        ...t.providers,
        { provide: Oe, useValue: this },
        { provide: Tt, useValue: this.componentFactoryResolver },
      ],
      t.parent || wi(),
      t.debugName,
      new Set(["environment"]),
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function xg(e, t, n = null) {
  return new mr({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
function ot(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function Sg(e) {
  return (e.flags & 32) === 32;
}
function Tg(e, t, n, r, o, i, s, a, u) {
  let c = t.consts,
    l = Rt(t, e, 4, s || null, a || null);
  Wi(t, n, l, _t(c, u)), Nr(t, l);
  let d = (l.tView = Gi(
    2,
    l,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    c,
    null,
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, l), (d.queries = t.queries.embeddedTView(l))),
    l
  );
}
function kc(e, t, n, r, o, i, s, a, u, c) {
  let l = n + Z,
    d = t.firstCreatePass ? Tg(l, t, e, r, o, i, s, a, u) : t.data[l];
  et(d, !1);
  let h = Ag(t, e, d, n);
  Sr() && Or(t, e, h, d), Ae(h, e);
  let f = gc(h, e, h, d);
  return (
    (e[l] = f),
    Pr(e, f),
    rg(f, d, e),
    br(d) && Ui(t, e, d),
    u != null && zi(e, d, c),
    d
  );
}
function Ng(e, t, n, r, o, i, s, a) {
  let u = _(),
    c = L(),
    l = _t(c.consts, i);
  return kc(u, c, e, t, n, r, o, l, s, a), Ng;
}
var Ag = Og;
function Og(e, t, n, r) {
  return Tr(!0), t[P].createComment("");
}
var yt = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })(yt || {}),
  Lc = (() => {
    class e {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
      static {
        this.ɵprov = F({
          token: e,
          providedIn: "root",
          factory: () => new e(),
        });
      }
    }
    return e;
  })(),
  ii = class e {
    constructor() {
      (this.ngZone = b(W)),
        (this.scheduler = b(St)),
        (this.errorHandler = b(Mt, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    static {
      this.PHASES = [yt.EarlyRead, yt.Write, yt.MixedReadWrite, yt.Read];
    }
    execute() {
      this.executing = !0;
      for (let t of e.PHASES)
        for (let n of this.sequences)
          if (!(n.erroredOrDestroyed || !n.hooks[t]))
            try {
              n.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                n.hooks[t](n.pipelinedValue),
              );
            } catch (r) {
              (n.erroredOrDestroyed = !0), this.errorHandler?.handleError(r);
            }
      this.executing = !1;
      for (let t of this.sequences)
        t.afterRun(), t.once && (this.sequences.delete(t), t.destroy());
      for (let t of this.deferredRegistrations) this.sequences.add(t);
      this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
        this.deferredRegistrations.clear();
    }
    register(t) {
      this.executing
        ? this.deferredRegistrations.add(t)
        : (this.sequences.add(t), this.scheduler.notify(6));
    }
    unregister(t) {
      this.executing && this.sequences.has(t)
        ? ((t.erroredOrDestroyed = !0),
          (t.pipelinedValue = void 0),
          (t.once = !0))
        : (this.sequences.delete(t), this.deferredRegistrations.delete(t));
    }
    static {
      this.ɵprov = F({ token: e, providedIn: "root", factory: () => new e() });
    }
  },
  si = class {
    constructor(t, n, r, o) {
      (this.impl = t),
        (this.hooks = n),
        (this.once = r),
        (this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        (this.unregisterOnDestroy = o?.onDestroy(() => this.destroy()));
    }
    afterRun() {
      (this.erroredOrDestroyed = !1), (this.pipelinedValue = void 0);
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy?.();
    }
  };
function Fg(e, t) {
  !t?.injector && mf(Fg);
  let n = t?.injector ?? b(Qe);
  return Sh(n) ? (rt("NgAfterRender"), Pg(e, n, t, !1)) : kg;
}
function Rg(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function Pg(e, t, n, r) {
  let o = t.get(Lc);
  o.impl ??= t.get(ii);
  let i = n?.phase ?? yt.MixedReadWrite,
    s = n?.manualCleanup !== !0 ? t.get(Fi) : null,
    a = new si(o.impl, Rg(e, i), r, s);
  return o.impl.register(a), a;
}
var kg = { destroy() {} };
function Lg(e, t, n, r) {
  let o = _(),
    i = en();
  if (ot(o, i, t)) {
    let s = L(),
      a = Ai();
    gp(a, o, e, t, n, r);
  }
  return Lg;
}
function jg(e, t, n, r) {
  return ot(e, en(), n) ? t + pi(n) + r : _e;
}
function jn(e, t) {
  return (e << 17) | (t << 2);
}
function Je(e) {
  return (e >> 17) & 32767;
}
function Vg(e) {
  return (e & 2) == 2;
}
function Bg(e, t) {
  return (e & 131071) | (t << 17);
}
function ai(e) {
  return e | 2;
}
function Nt(e) {
  return (e & 131068) >> 2;
}
function yo(e, t) {
  return (e & -131069) | (t << 2);
}
function $g(e) {
  return (e & 1) === 1;
}
function ui(e) {
  return e | 1;
}
function Hg(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = Je(s),
    u = Nt(s);
  e[r] = n;
  let c = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    (l = d[1]), (l === null || Xt(d, l) > 0) && (c = !0);
  } else l = n;
  if (o)
    if (u !== 0) {
      let h = Je(e[a + 1]);
      (e[r + 1] = jn(h, a)),
        h !== 0 && (e[h + 1] = yo(e[h + 1], r)),
        (e[a + 1] = Bg(e[a + 1], r));
    } else
      (e[r + 1] = jn(a, 0)), a !== 0 && (e[a + 1] = yo(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = jn(u, 0)),
      a === 0 ? (a = r) : (e[u + 1] = yo(e[u + 1], r)),
      (u = r);
  c && (e[r + 1] = ai(e[r + 1])),
    Ma(e, l, r, !0),
    Ma(e, l, r, !1),
    Ug(t, l, e, r, i),
    (s = jn(a, u)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function Ug(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    Xt(i, t) >= 0 &&
    (n[r + 1] = ui(n[r + 1]));
}
function Ma(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? Je(o) : Nt(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let u = e[s],
      c = e[s + 1];
    zg(u, t) && ((a = !0), (e[s + 1] = r ? ui(c) : ai(c))),
      (s = r ? Je(c) : Nt(c));
  }
  a && (e[n + 1] = r ? ai(o) : ui(o));
}
function zg(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
      ? Xt(e, t) >= 0
      : !1;
}
var ae = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Gg(e) {
  return e.substring(ae.key, ae.keyEnd);
}
function Wg(e) {
  return qg(e), jc(e, Vc(e, 0, ae.textEnd));
}
function jc(e, t) {
  let n = ae.textEnd;
  return n === t ? -1 : ((t = ae.keyEnd = Zg(e, (ae.key = t), n)), Vc(e, t, n));
}
function qg(e) {
  (ae.key = 0),
    (ae.keyEnd = 0),
    (ae.value = 0),
    (ae.valueEnd = 0),
    (ae.textEnd = e.length);
}
function Vc(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function Zg(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function Yg(e, t, n) {
  let r = _(),
    o = en();
  if (ot(r, o, t)) {
    let i = L(),
      s = Ai();
    fc(i, s, r, e, t, r[P], n, !1);
  }
  return Yg;
}
function ci(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? "class" : "style";
  qi(e, n, i[s], s, r);
}
function Bc(e, t, n) {
  return $c(e, t, n, !1), Bc;
}
function Qg(e, t) {
  return $c(e, t, null, !0), Qg;
}
function lb(e) {
  Jg(om, Kg, e, !0);
}
function Kg(e, t) {
  for (let n = Wg(t); n >= 0; n = jc(t, n)) yi(e, Gg(t), !0);
}
function $c(e, t, n, r) {
  let o = _(),
    i = L(),
    s = Iu(2);
  if ((i.firstUpdatePass && Uc(i, e, s, r), t !== _e && ot(o, s, t))) {
    let a = i.data[tt()];
    zc(i, a, o, o[P], e, (o[s + 1] = sm(t, n)), r, s);
  }
}
function Jg(e, t, n, r) {
  let o = L(),
    i = Iu(2);
  o.firstUpdatePass && Uc(o, null, i, r);
  let s = _();
  if (n !== _e && ot(s, i, n)) {
    let a = o.data[tt()];
    if (Gc(a, r) && !Hc(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = wo(u, n || "")), ci(o, a, s, n, r);
    } else im(o, a, s, s[P], s[i + 1], (s[i + 1] = rm(e, t, n)), r, i);
  }
}
function Hc(e, t) {
  return t >= e.expandoStartIndex;
}
function Uc(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[tt()],
      s = Hc(e, n);
    Gc(i, r) && t === null && !s && (t = !1),
      (t = Xg(o, i, t, r)),
      Hg(o, i, t, n, s, r);
  }
}
function Xg(e, t, n, r) {
  let o = jf(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = Do(null, e, t, n, r)), (n = Jt(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = Do(o, e, t, n, r)), i === null)) {
        let u = em(e, t, r);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = Do(null, e, t, u[1], r)),
          (u = Jt(u, t.attrs, r)),
          tm(e, t, r, u));
      } else i = nm(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function em(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Nt(r) !== 0) return e[Je(r)];
}
function tm(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[Je(o)] = r;
}
function nm(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = Jt(r, s, n);
  }
  return Jt(r, t.attrs, n);
}
function Do(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = Jt(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function Jt(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          yi(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function rm(e, t, n) {
  if (n == null || n === "") return H;
  let r = [],
    o = Li(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function om(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && yi(e, r, n);
}
function im(e, t, n, r, o, i, s, a) {
  o === _e && (o = H);
  let u = 0,
    c = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let h = u < o.length ? o[u + 1] : void 0,
      f = c < i.length ? i[c + 1] : void 0,
      p = null,
      w;
    l === d
      ? ((u += 2), (c += 2), h !== f && ((p = d), (w = f)))
      : d === null || (l !== null && l < d)
        ? ((u += 2), (p = l))
        : ((c += 2), (p = d), (w = f)),
      p !== null && zc(e, t, n, r, p, w, s, a),
      (l = u < o.length ? o[u] : null),
      (d = c < i.length ? i[c] : null);
  }
}
function zc(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data,
    c = u[a + 1],
    l = $g(c) ? xa(u, t, n, o, Nt(c), s) : void 0;
  if (!yr(l)) {
    yr(i) || (Vg(c) && (i = xa(u, null, n, o, a, s)));
    let d = du(tt(), n);
    Wh(r, s, d, o, i);
  }
}
function xa(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      h = n[o + 1];
    h === _e && (h = d ? H : void 0);
    let f = d ? ao(h, r) : l === r ? h : void 0;
    if ((c && !yr(f) && (f = ao(u, r)), yr(f) && ((a = f), s))) return a;
    let p = e[o + 1];
    o = s ? Je(p) : Nt(p);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = ao(u, r));
  }
  return a;
}
function yr(e) {
  return e !== void 0;
}
function sm(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = U(Li(e)))),
    e
  );
}
function Gc(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function db(e, t) {
  rt("NgControlFlow");
  let n = _(),
    r = en(),
    o = n[r] !== _e ? n[r] : -1,
    i = o !== -1 ? Sa(n, Z + o) : void 0,
    s = 0;
  if (ot(n, r, e)) {
    let a = C(null);
    try {
      if ((i !== void 0 && bp(i, s), e !== -1)) {
        let u = Z + e,
          c = Sa(n, u),
          l = am(n[y], u),
          d = lr(c, l.tView.ssrId),
          h = Yi(n, l, t, { dehydratedView: d });
        Qi(c, h, s, ur(l, d));
      }
    } finally {
      C(a);
    }
  } else if (i !== void 0) {
    let a = Cp(i, s);
    a !== void 0 && (a[te] = t);
  }
}
function Sa(e, t) {
  return e[t];
}
function am(e, t) {
  return bi(e, t);
}
function um(e, t, n, r, o, i) {
  let s = t.consts,
    a = _t(s, o),
    u = Rt(t, e, 2, r, a);
  return (
    Wi(t, n, u, _t(s, i)),
    u.attrs !== null && hr(u, u.attrs, !1),
    u.mergedAttrs !== null && hr(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u
  );
}
function Wc(e, t, n, r) {
  let o = _(),
    i = L(),
    s = Z + e,
    a = o[P],
    u = i.firstCreatePass ? um(s, i, o, t, n, r) : i.data[s],
    c = lm(i, o, u, a, t, e);
  o[s] = c;
  let l = br(u);
  return (
    et(u, !0),
    sc(a, c, u),
    !Sg(u) && Sr() && Or(i, o, c, u),
    xf() === 0 && Ae(c, o),
    Sf(),
    l && (Ui(i, o, u), Hi(i, u, o)),
    r !== null && zi(o, u),
    Wc
  );
}
function qc() {
  let e = Q();
  Mi() ? xi() : ((e = e.parent), et(e, !1));
  let t = e;
  Nf(t) && Af(), Tf();
  let n = L();
  return (
    n.firstCreatePass && (Nr(n, e), Ei(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      Wf(t) &&
      ci(n, t, _(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      qf(t) &&
      ci(n, t, _(), t.stylesWithoutHost, !1),
    qc
  );
}
function cm(e, t, n, r) {
  return Wc(e, t, n, r), qc(), cm;
}
var lm = (e, t, n, r, o, i) => (Tr(!0), Qu(r, o, Hf()));
function dm(e, t, n, r, o) {
  let i = t.consts,
    s = _t(i, r),
    a = Rt(t, e, 8, "ng-container", s);
  s !== null && hr(a, s, !0);
  let u = _t(i, o);
  return Wi(t, n, a, u), t.queries !== null && t.queries.elementStart(t, a), a;
}
function Zc(e, t, n) {
  let r = _(),
    o = L(),
    i = e + Z,
    s = o.firstCreatePass ? dm(i, o, r, t, n) : o.data[i];
  et(s, !0);
  let a = hm(o, r, s, e);
  return (
    (r[i] = a),
    Sr() && Or(o, r, a, s),
    Ae(a, r),
    br(s) && (Ui(o, r, s), Hi(o, s, r)),
    n != null && zi(r, s),
    Zc
  );
}
function Yc() {
  let e = Q(),
    t = L();
  return (
    Mi() ? xi() : ((e = e.parent), et(e, !1)),
    t.firstCreatePass && (Nr(t, e), Ei(e) && t.queries.elementEnd(e)),
    Yc
  );
}
function fm(e, t, n) {
  return Zc(e, t, n), Yc(), fm;
}
var hm = (e, t, n, r) => (Tr(!0), Oh(t[P], ""));
function fb() {
  return _();
}
function pm(e, t, n) {
  let r = _(),
    o = en();
  if (ot(r, o, t)) {
    let i = L(),
      s = Ai();
    fc(i, s, r, e, t, r[P], n, !0);
  }
  return pm;
}
var Dr = "en-US";
var gm = Dr;
function mm(e) {
  typeof e == "string" && (gm = e.toLowerCase().replace(/_/g, "-"));
}
var ym = (e, t, n) => {};
function Dm(e, t, n, r) {
  let o = _(),
    i = L(),
    s = Q();
  return Im(i, o, o[P], s, e, t, r), Dm;
}
function vm(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[Kn],
          u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function Im(e, t, n, r, o, i, s) {
  let a = br(r),
    c = e.firstCreatePass && Dc(e),
    l = t[te],
    d = yc(t),
    h = !0;
  if (r.type & 3 || s) {
    let w = re(r, t),
      O = s ? s(w) : w,
      S = d.length,
      j = s ? (oe) => s(ge(oe[r.index])) : r.index,
      me = null;
    if ((!s && a && (me = vm(e, t, o, r.index)), me !== null)) {
      let oe = me.__ngLastListenerFn__ || me;
      (oe.__ngNextListenerFn__ = i), (me.__ngLastListenerFn__ = i), (h = !1);
    } else {
      (i = Na(r, t, l, i)), ym(w, o, i);
      let oe = n.listen(O, o, i);
      d.push(i, oe), c && c.push(o, j, S, S + 1);
    }
  } else i = Na(r, t, l, i);
  let f = r.outputs,
    p;
  if (h && f !== null && (p = f[o])) {
    let w = p.length;
    if (w)
      for (let O = 0; O < w; O += 2) {
        let S = p[O],
          j = p[O + 1],
          at = t[S][j].subscribe(i),
          K = d.length;
        d.push(i, at), c && c.push(o, r.index, K, -(K + 1));
      }
  }
}
function Ta(e, t, n, r) {
  let o = C(null);
  try {
    return he(6, t, n), n(r) !== !1;
  } catch (i) {
    return vc(e, i), !1;
  } finally {
    he(7, t, n), C(o);
  }
}
function Na(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? Xe(e.index, t) : t;
    Ki(s, 5);
    let a = Ta(t, n, r, i),
      u = o.__ngNextListenerFn__;
    for (; u; ) (a = Ta(t, n, u, i) && a), (u = u.__ngNextListenerFn__);
    return a;
  };
}
function hb(e = 1) {
  return Bf(e);
}
function wm(e, t) {
  let n = null,
    r = Wd(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? Ga(e, i, !0) : Yd(r, i)) return o;
  }
  return n;
}
function pb(e) {
  let t = _()[ne][Y];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = kd(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? wm(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function gb(e, t = 0, n, r, o, i) {
  let s = _(),
    a = L(),
    u = r ? e + 1 : null;
  u !== null && kc(s, a, u, r, o, i, null, n);
  let c = Rt(a, Z + e, 16, null, n || null);
  c.projection === null && (c.projection = t), xi();
  let d = !s[Yt] || yu();
  s[ne][Y].projection[c.projection] === null && u !== null
    ? Em(s, a, u)
    : d && (c.flags & 32) !== 32 && zh(a, s, c);
}
function Em(e, t, n) {
  let r = Z + n,
    o = t.data[r],
    i = e[r],
    s = lr(i, o.tView.ssrId),
    a = Yi(e, o, void 0, { dehydratedView: s });
  Qi(i, a, 0, ur(o, s));
}
function mb(e, t, n, r) {
  Oc(e, t, n, r);
}
function yb(e, t, n) {
  cg(e, t, n);
}
function Db(e) {
  let t = _(),
    n = L(),
    r = Si();
  xr(r + 1);
  let o = es(n, r);
  if (e.dirty && Cf(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = Rc(t, r);
      e.reset(i, $u), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function vb() {
  return Xi(_(), Si());
}
function Ib(e, t, n, r, o) {
  mg(t, Oc(e, n, r, o));
}
function wb(e = 1) {
  xr(Si() + e);
}
function Eb(e) {
  let t = Ff();
  return Ef(t, Z + e);
}
function Cb(e, t = "") {
  let n = _(),
    r = L(),
    o = e + Z,
    i = r.firstCreatePass ? Rt(r, o, 1, t, null) : r.data[o],
    s = Cm(r, n, i, t, e);
  (n[o] = s), Sr() && Or(r, n, s, i), et(i, !1);
}
var Cm = (e, t, n, r, o) => (Tr(!0), Nh(t[P], r));
function bm(e) {
  return Qc("", e, ""), bm;
}
function Qc(e, t, n) {
  let r = _(),
    o = jg(r, e, t, n);
  return o !== _e && vp(r, tt(), o), Qc;
}
function _m(e, t, n) {
  let r = L();
  if (r.firstCreatePass) {
    let o = Ne(e);
    li(n, r.data, r.blueprint, o, !0), li(t, r.data, r.blueprint, o, !1);
  }
}
function li(e, t, n, r, o) {
  if (((e = $(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) li(e[i], t, n, r, o);
  else {
    let i = L(),
      s = _(),
      a = Q(),
      u = Et(e) ? e : $(e.provide),
      c = nu(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      h = a.providerIndexes >> 20;
    if (Et(e) || !e.multi) {
      let f = new Ze(c, o, nt),
        p = Io(u, t, o ? l : l + h, d);
      p === -1
        ? (Ro(nr(a, s), i, u),
          vo(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[p] = f), (s[p] = f));
    } else {
      let f = Io(u, t, l + h, d),
        p = Io(u, t, l, l + h),
        w = f >= 0 && n[f],
        O = p >= 0 && n[p];
      if ((o && !O) || (!o && !w)) {
        Ro(nr(a, s), i, u);
        let S = Sm(o ? xm : Mm, n.length, o, r, c);
        !o && O && (n[p].providerFactory = S),
          vo(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(S),
          s.push(S);
      } else {
        let S = Kc(n[o ? p : f], c, !o && r);
        vo(i, e, f > -1 ? f : p, S);
      }
      !o && r && O && n[p].componentProviders++;
    }
  }
}
function vo(e, t, n, r) {
  let o = Et(t),
    i = cf(t);
  if (o || i) {
    let u = (i ? $(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function Kc(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function Io(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function Mm(e, t, n, r) {
  return di(this.multi, []);
}
function xm(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = Ye(n, n[y], this.providerFactory.index, r);
    (i = a.slice(0, s)), di(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else (i = []), di(o, i);
  return i;
}
function di(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function Sm(e, t, n, r, o) {
  let i = new Ze(e, n, nt);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    Kc(i, o, r && !n),
    i
  );
}
function bb(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => _m(r, o ? o(e) : e, t);
  };
}
var Tm = (() => {
  class e {
    constructor(n) {
      (this._injector = n), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = Ja(!1, n.type),
          o =
            r.length > 0
              ? xg([r], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, o);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static {
      this.ɵprov = F({
        token: e,
        providedIn: "environment",
        factory: () => new e(q(Te)),
      });
    }
  }
  return e;
})();
function _b(e) {
  rt("NgStandalone"),
    (e.getStandaloneInjector = (t) =>
      t.get(Tm).getOrCreateStandaloneInjector(e));
}
function Mb(e, t) {
  return kr(e, t);
}
var xb = (() => {
  class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = F({ token: e, factory: e.ɵfac, providedIn: "platform" });
    }
  }
  return e;
})();
var Nm = new T("");
function ts(e) {
  return !!e && typeof e.then == "function";
}
function Jc(e) {
  return !!e && typeof e.subscribe == "function";
}
var Am = new T(""),
  Xc = (() => {
    class e {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((n, r) => {
            (this.resolve = n), (this.reject = r);
          })),
          (this.appInits = b(Am, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let o of this.appInits) {
          let i = o();
          if (ts(i)) n.push(i);
          else if (Jc(i)) {
            let s = new Promise((a, u) => {
              i.subscribe({ complete: a, error: u });
            });
            n.push(s);
          }
        }
        let r = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            r();
          })
          .catch((o) => {
            this.reject(o);
          }),
          n.length === 0 && r(),
          (this.initialized = !0);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = F({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  Om = new T("");
function Fm() {
  vs(() => {
    throw new x(600, !1);
  });
}
function Rm(e) {
  return e.isBoundToModule;
}
var Pm = 10;
function km(e, t, n) {
  try {
    let r = n();
    return ts(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
var Lr = (() => {
  class e {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = b(dh)),
        (this.afterRenderManager = b(Lc)),
        (this.zonelessEnabled = b(Ji)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new J()),
        (this.afterTick = new J()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = b(Ar).hasPendingTasks.pipe(Ie((n) => !n))),
        (this._injector = b(Te));
    }
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    whenStable() {
      let n;
      return new Promise((r) => {
        n = this.isStable.subscribe({
          next: (o) => {
            o && r();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    get injector() {
      return this._injector;
    }
    bootstrap(n, r) {
      let o = n instanceof dr;
      if (!this._injector.get(Xc).done) {
        let h = !o && tf(n),
          f = !1;
        throw new x(405, f);
      }
      let s;
      o ? (s = n) : (s = this._injector.get(Tt).resolveComponentFactory(n)),
        this.componentTypes.push(s.componentType);
      let a = Rm(s) ? void 0 : this._injector.get(Oe),
        u = r || s.selector,
        c = s.create(Qe.NULL, [], u, a),
        l = c.location.nativeElement,
        d = c.injector.get(Nm, null);
      return (
        d?.registerApplication(l),
        c.onDestroy(() => {
          this.detachView(c.hostView),
            zn(this.components, c),
            d?.unregisterApplication(l);
        }),
        this._loadComponent(c),
        c
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      if (this._runningTick) throw new x(101, !1);
      let n = C(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (r) {
        this.internalErrorHandler(r);
      } finally {
        (this._runningTick = !1), C(n), this.afterTick.next();
      }
    }
    synchronize() {
      let n = null;
      this._injector.destroyed ||
        (n = this._injector.get(fr, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let r = 0;
      for (; this.dirtyFlags !== 0 && r++ < Pm; ) this.synchronizeOnce(n);
    }
    synchronizeOnce(n) {
      if (
        ((this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0),
        this.dirtyFlags & 7)
      ) {
        let r = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8),
          (this.dirtyFlags |= 8),
          this.beforeRender.next(r);
        for (let { _lView: o, notifyErrorHandler: i } of this._views)
          Lm(o, i, r, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 7)
        )
          return;
      } else n?.begin?.(), n?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => _r(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let r = n;
      this._views.push(r), r.attachToAppRef(this);
    }
    detachView(n) {
      let r = n;
      zn(this._views, r), r.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView), this.tick(), this.components.push(n);
      let r = this._injector.get(Om, []);
      [...this._bootstrapListeners, ...r].forEach((o) => o(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => zn(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new x(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = F({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function zn(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Lm(e, t, n, r) {
  if (!n && !_r(e)) return;
  Ec(e, t, n && !r ? 0 : 1);
}
var fi = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  Sb = (() => {
    class e {
      compileModuleSync(n) {
        return new oi(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          o = Ya(n),
          i = Yu(o.declarations).reduce((s, a) => {
            let u = Ue(a);
            return u && s.push(new Kt(u)), s;
          }, []);
        return new fi(r, i);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = F({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var jm = (() => {
    class e {
      constructor() {
        (this.zone = b(W)),
          (this.changeDetectionScheduler = b(St)),
          (this.applicationRef = b(Lr));
      }
      initialize() {
        this._onMicrotaskEmptySubscription ||
          (this._onMicrotaskEmptySubscription =
            this.zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this.changeDetectionScheduler.runningTick ||
                  this.zone.run(() => {
                    this.applicationRef.tick();
                  });
              },
            }));
      }
      ngOnDestroy() {
        this._onMicrotaskEmptySubscription?.unsubscribe();
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = F({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  Vm = new T("", { factory: () => !1 });
function el({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new W(De(ye({}, tl()), { scheduleInRootZone: n }))),
    [
      { provide: W, useFactory: e },
      {
        provide: Yn,
        multi: !0,
        useFactory: () => {
          let r = b(jm, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: Yn,
        multi: !0,
        useFactory: () => {
          let r = b(Bm);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: Mc, useValue: !0 } : [],
      { provide: xc, useValue: n ?? ju },
    ]
  );
}
function Tb(e) {
  let t = e?.ignoreChangesOutsideZone,
    n = e?.scheduleInRootZone,
    r = el({
      ngZoneFactory: () => {
        let o = tl(e);
        return (
          (o.scheduleInRootZone = n),
          o.shouldCoalesceEventChangeDetection && rt("NgZone_CoalesceEvent"),
          new W(o)
        );
      },
      ignoreChangesOutsideZone: t,
      scheduleInRootZone: n,
    });
  return rf([{ provide: Vm, useValue: !0 }, { provide: Ji, useValue: !1 }, r]);
}
function tl(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var Bm = (() => {
  class e {
    constructor() {
      (this.subscription = new R()),
        (this.initialized = !1),
        (this.zone = b(W)),
        (this.pendingTasks = b(Ar));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              W.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            }),
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            W.assertInAngularZone(), (n ??= this.pendingTasks.add());
          }),
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = F({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var $m = (() => {
  class e {
    constructor() {
      (this.appRef = b(Lr)),
        (this.taskService = b(Ar)),
        (this.ngZone = b(W)),
        (this.zonelessEnabled = b(Ji)),
        (this.disableScheduling = b(Mc, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new R()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(or)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (b(xc, { optional: !0 }) ?? !1)),
        (this.cancelScheduledCallback = null),
        (this.useMicrotaskScheduler = !1),
        (this.runningTick = !1),
        (this.pendingRenderTaskId = null),
        this.subscriptions.add(
          this.appRef.afterTick.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof Vo || !this.zoneIsDefined));
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 7: {
          this.appRef.deferredDirtyFlags |= 8;
          break;
        }
        case 9:
        case 8:
        case 6:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (!this.shouldScheduleTick()) return;
      let r = this.useMicrotaskScheduler ? pa : Vu;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              r(() => this.tick()),
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              r(() => this.tick()),
            ));
    }
    shouldScheduleTick() {
      return !(
        this.disableScheduling ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(or + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs,
        );
      } catch (r) {
        throw (this.taskService.remove(n), r);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        pa(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(n);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let n = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(n);
      }
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = F({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function Hm() {
  return (typeof $localize < "u" && $localize.locale) || Dr;
}
var ns = new T("", {
  providedIn: "root",
  factory: () => b(ns, E.Optional | E.SkipSelf) || Hm(),
});
var hi = new T("");
function Vn(e) {
  return !e.moduleRef;
}
function Um(e) {
  let t = Vn(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(W);
  return n.run(() => {
    Vn(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(Mt, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      Vn(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(hi);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else {
      let i = () => e.moduleRef.destroy(),
        s = e.platformInjector.get(hi);
      s.add(i),
        e.moduleRef.onDestroy(() => {
          zn(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i);
        });
    }
    return km(r, n, () => {
      let i = t.get(Xc);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(ns, Dr);
          if ((mm(s || Dr), Vn(e))) {
            let a = t.get(Lr);
            return (
              e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a
            );
          } else return zm(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function zm(e, t) {
  let n = e.injector.get(Lr);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new x(-403, !1);
  t.push(e);
}
var Gn = null;
function Gm(e = [], t) {
  return Qe.create({
    name: t,
    providers: [
      { provide: tu, useValue: "platform" },
      { provide: hi, useValue: new Set([() => (Gn = null)]) },
      ...e,
    ],
  });
}
function Wm(e = []) {
  if (Gn) return Gn;
  let t = Gm(e);
  return (Gn = t), Fm(), qm(t), t;
}
function qm(e) {
  e.get(vh, null)?.forEach((n) => n());
}
var nl = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = Zm;
    }
  }
  return e;
})();
function Zm(e) {
  return Ym(Q(), _(), (e & 16) === 16);
}
function Ym(e, t, n) {
  if (Cr(e) && !n) {
    let r = Xe(e.index, t);
    return new Ke(r, r);
  } else if (e.type & 175) {
    let r = t[ne];
    return new Ke(r, t);
  }
  return null;
}
function Nb(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = Wm(r),
      i = [el({}), { provide: St, useExisting: $m }, ...(n || [])],
      s = new mr({
        providers: i,
        parent: o,
        debugName: "",
        runEnvironmentInitializers: !1,
      });
    return Um({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
function Qm(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function Km(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function Ab(e, t) {
  rt("NgSignals");
  let n = Gr(e);
  return t?.equal && (n[le].equal = t.equal), n;
}
function Jm(e) {
  let t = C(null);
  try {
    return e();
  } finally {
    C(t);
  }
}
var ul = null;
function rs() {
  return ul;
}
function s_(e) {
  ul ??= e;
}
var rl = class {};
var cl = new T(""),
  ll = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = F({
          token: e,
          factory: () => b(ty),
          providedIn: "platform",
        });
      }
    }
    return e;
  })();
var ty = (() => {
  class e extends ll {
    constructor() {
      super(),
        (this._doc = b(cl)),
        (this._location = window.location),
        (this._history = window.history);
    }
    getBaseHrefFromDOM() {
      return rs().getBaseHref(this._doc);
    }
    onPopState(n) {
      let r = rs().getGlobalEventTarget(this._doc, "window");
      return (
        r.addEventListener("popstate", n, !1),
        () => r.removeEventListener("popstate", n)
      );
    }
    onHashChange(n) {
      let r = rs().getGlobalEventTarget(this._doc, "window");
      return (
        r.addEventListener("hashchange", n, !1),
        () => r.removeEventListener("hashchange", n)
      );
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(n) {
      this._location.pathname = n;
    }
    pushState(n, r, o) {
      this._history.pushState(n, r, o);
    }
    replaceState(n, r, o) {
      this._history.replaceState(n, r, o);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(n = 0) {
      this._history.go(n);
    }
    getState() {
      return this._history.state;
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = F({
        token: e,
        factory: () => new e(),
        providedIn: "platform",
      });
    }
  }
  return e;
})();
function dl(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return (
    e.endsWith("/") && n++,
    t.startsWith("/") && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t
  );
}
function ol(e) {
  let t = e.match(/#|\?|$/),
    n = (t && t.index) || e.length,
    r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function it(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
var is = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = F({ token: e, factory: () => b(ry), providedIn: "root" });
      }
    }
    return e;
  })(),
  ny = new T(""),
  ry = (() => {
    class e extends is {
      constructor(n, r) {
        super(),
          (this._platformLocation = n),
          (this._removeListenerFns = []),
          (this._baseHref =
            r ??
            this._platformLocation.getBaseHrefFromDOM() ??
            b(cl).location?.origin ??
            "");
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return dl(this._baseHref, n);
      }
      path(n = !1) {
        let r =
            this._platformLocation.pathname + it(this._platformLocation.search),
          o = this._platformLocation.hash;
        return o && n ? `${r}${o}` : r;
      }
      pushState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + it(i));
        this._platformLocation.pushState(n, r, s);
      }
      replaceState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + it(i));
        this._platformLocation.replaceState(n, r, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(q(ll), q(ny, 8));
        };
      }
      static {
        this.ɵprov = F({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var oy = (() => {
  class e {
    constructor(n) {
      (this._subject = new ue()),
        (this._urlChangeListeners = []),
        (this._urlChangeSubscription = null),
        (this._locationStrategy = n);
      let r = this._locationStrategy.getBaseHref();
      (this._basePath = ay(ol(il(r)))),
        this._locationStrategy.onPopState((o) => {
          this._subject.emit({
            url: this.path(!0),
            pop: !0,
            state: o.state,
            type: o.type,
          });
        });
    }
    ngOnDestroy() {
      this._urlChangeSubscription?.unsubscribe(),
        (this._urlChangeListeners = []);
    }
    path(n = !1) {
      return this.normalize(this._locationStrategy.path(n));
    }
    getState() {
      return this._locationStrategy.getState();
    }
    isCurrentPathEqualTo(n, r = "") {
      return this.path() == this.normalize(n + it(r));
    }
    normalize(n) {
      return e.stripTrailingSlash(sy(this._basePath, il(n)));
    }
    prepareExternalUrl(n) {
      return (
        n && n[0] !== "/" && (n = "/" + n),
        this._locationStrategy.prepareExternalUrl(n)
      );
    }
    go(n, r = "", o = null) {
      this._locationStrategy.pushState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + it(r)), o);
    }
    replaceState(n, r = "", o = null) {
      this._locationStrategy.replaceState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + it(r)), o);
    }
    forward() {
      this._locationStrategy.forward();
    }
    back() {
      this._locationStrategy.back();
    }
    historyGo(n = 0) {
      this._locationStrategy.historyGo?.(n);
    }
    onUrlChange(n) {
      return (
        this._urlChangeListeners.push(n),
        (this._urlChangeSubscription ??= this.subscribe((r) => {
          this._notifyUrlChangeListeners(r.url, r.state);
        })),
        () => {
          let r = this._urlChangeListeners.indexOf(n);
          this._urlChangeListeners.splice(r, 1),
            this._urlChangeListeners.length === 0 &&
              (this._urlChangeSubscription?.unsubscribe(),
              (this._urlChangeSubscription = null));
        }
      );
    }
    _notifyUrlChangeListeners(n = "", r) {
      this._urlChangeListeners.forEach((o) => o(n, r));
    }
    subscribe(n, r, o) {
      return this._subject.subscribe({ next: n, error: r, complete: o });
    }
    static {
      this.normalizeQueryParams = it;
    }
    static {
      this.joinWithSlash = dl;
    }
    static {
      this.stripTrailingSlash = ol;
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)(q(is));
      };
    }
    static {
      this.ɵprov = F({ token: e, factory: () => iy(), providedIn: "root" });
    }
  }
  return e;
})();
function iy() {
  return new oy(q(is));
}
function sy(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function il(e) {
  return e.replace(/\/index.html$/, "");
}
function ay(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
function a_(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var u_ = (() => {
    class e {
      constructor(n, r) {
        (this._viewContainer = n),
          (this._context = new os()),
          (this._thenTemplateRef = null),
          (this._elseTemplateRef = null),
          (this._thenViewRef = null),
          (this._elseViewRef = null),
          (this._thenTemplateRef = r);
      }
      set ngIf(n) {
        (this._context.$implicit = this._context.ngIf = n), this._updateView();
      }
      set ngIfThen(n) {
        sl("ngIfThen", n),
          (this._thenTemplateRef = n),
          (this._thenViewRef = null),
          this._updateView();
      }
      set ngIfElse(n) {
        sl("ngIfElse", n),
          (this._elseTemplateRef = n),
          (this._elseViewRef = null),
          this._updateView();
      }
      _updateView() {
        this._context.$implicit
          ? this._thenViewRef ||
            (this._viewContainer.clear(),
            (this._elseViewRef = null),
            this._thenTemplateRef &&
              (this._thenViewRef = this._viewContainer.createEmbeddedView(
                this._thenTemplateRef,
                this._context,
              )))
          : this._elseViewRef ||
            (this._viewContainer.clear(),
            (this._thenViewRef = null),
            this._elseTemplateRef &&
              (this._elseViewRef = this._viewContainer.createEmbeddedView(
                this._elseTemplateRef,
                this._context,
              )));
      }
      static ngTemplateContextGuard(n, r) {
        return !0;
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(nt(Pt), nt(xt));
        };
      }
      static {
        this.ɵdir = vi({
          type: e,
          selectors: [["", "ngIf", ""]],
          inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" },
          standalone: !0,
        });
      }
    }
    return e;
  })(),
  os = class {
    constructor() {
      (this.$implicit = null), (this.ngIf = null);
    }
  };
function sl(e, t) {
  if (!!!(!t || t.createEmbeddedView))
    throw new Error(`${e} must be a TemplateRef, but received '${U(t)}'.`);
}
var c_ = (() => {
  class e {
    constructor(n) {
      (this._viewContainerRef = n),
        (this._viewRef = null),
        (this.ngTemplateOutletContext = null),
        (this.ngTemplateOutlet = null),
        (this.ngTemplateOutletInjector = null);
    }
    ngOnChanges(n) {
      if (this._shouldRecreateView(n)) {
        let r = this._viewContainerRef;
        if (
          (this._viewRef && r.remove(r.indexOf(this._viewRef)),
          !this.ngTemplateOutlet)
        ) {
          this._viewRef = null;
          return;
        }
        let o = this._createContextForwardProxy();
        this._viewRef = r.createEmbeddedView(this.ngTemplateOutlet, o, {
          injector: this.ngTemplateOutletInjector ?? void 0,
        });
      }
    }
    _shouldRecreateView(n) {
      return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector;
    }
    _createContextForwardProxy() {
      return new Proxy(
        {},
        {
          set: (n, r, o) =>
            this.ngTemplateOutletContext
              ? Reflect.set(this.ngTemplateOutletContext, r, o)
              : !1,
          get: (n, r, o) => {
            if (this.ngTemplateOutletContext)
              return Reflect.get(this.ngTemplateOutletContext, r, o);
          },
        },
      );
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)(nt(Pt));
      };
    }
    static {
      this.ɵdir = vi({
        type: e,
        selectors: [["", "ngTemplateOutlet", ""]],
        inputs: {
          ngTemplateOutletContext: "ngTemplateOutletContext",
          ngTemplateOutlet: "ngTemplateOutlet",
          ngTemplateOutletInjector: "ngTemplateOutletInjector",
        },
        standalone: !0,
        features: [Ci],
      });
    }
  }
  return e;
})();
var l_ = (() => {
    class e {
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵmod = Wa({ type: e });
      }
      static {
        this.ɵinj = Ra({});
      }
    }
    return e;
  })(),
  uy = "browser",
  cy = "server";
function d_(e) {
  return e === uy;
}
function f_(e) {
  return e === cy;
}
var al = class {};
var st = (function (e) {
    return (
      (e[(e.State = 0)] = "State"),
      (e[(e.Transition = 1)] = "Transition"),
      (e[(e.Sequence = 2)] = "Sequence"),
      (e[(e.Group = 3)] = "Group"),
      (e[(e.Animate = 4)] = "Animate"),
      (e[(e.Keyframes = 5)] = "Keyframes"),
      (e[(e.Style = 6)] = "Style"),
      (e[(e.Trigger = 7)] = "Trigger"),
      (e[(e.Reference = 8)] = "Reference"),
      (e[(e.AnimateChild = 9)] = "AnimateChild"),
      (e[(e.AnimateRef = 10)] = "AnimateRef"),
      (e[(e.Query = 11)] = "Query"),
      (e[(e.Stagger = 12)] = "Stagger"),
      e
    );
  })(st || {}),
  g_ = "*";
function m_(e, t) {
  return { type: st.Trigger, name: e, definitions: t, options: {} };
}
function y_(e, t = null) {
  return { type: st.Animate, styles: t, timings: e };
}
function D_(e, t = null) {
  return { type: st.Sequence, steps: e, options: t };
}
function v_(e) {
  return { type: st.Style, styles: e, offset: null };
}
function I_(e, t, n) {
  return { type: st.State, name: e, styles: t, options: n };
}
function w_(e, t, n = null) {
  return { type: st.Transition, expr: e, animation: t, options: n };
}
var fl = class {
    constructor(t = 0, n = 0) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this._started = !1),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._position = 0),
        (this.parentPlayer = null),
        (this.totalTime = t + n);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    onStart(t) {
      this._originalOnStartFns.push(t), this._onStartFns.push(t);
    }
    onDone(t) {
      this._originalOnDoneFns.push(t), this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        (this._started = !0);
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this.hasStarted() || this._onStart(),
        this.finish(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      (this._started = !1),
        (this._finished = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    setPosition(t) {
      this._position = this.totalTime ? t * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  hl = class {
    constructor(t) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._onDestroyFns = []),
        (this.parentPlayer = null),
        (this.totalTime = 0),
        (this.players = t);
      let n = 0,
        r = 0,
        o = 0,
        i = this.players.length;
      i == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach((s) => {
            s.onDone(() => {
              ++n == i && this._onFinish();
            }),
              s.onDestroy(() => {
                ++r == i && this._onDestroy();
              }),
              s.onStart(() => {
                ++o == i && this._onStart();
              });
          }),
        (this.totalTime = this.players.reduce(
          (s, a) => Math.max(s, a.totalTime),
          0,
        ));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      this.players.forEach((t) => t.init());
    }
    onStart(t) {
      this._onStartFns.push(t);
    }
    _onStart() {
      this.hasStarted() ||
        ((this._started = !0),
        this._onStartFns.forEach((t) => t()),
        (this._onStartFns = []));
    }
    onDone(t) {
      this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach((t) => t.play());
    }
    pause() {
      this.players.forEach((t) => t.pause());
    }
    restart() {
      this.players.forEach((t) => t.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach((t) => t.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._onFinish(),
        this.players.forEach((t) => t.destroy()),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      this.players.forEach((t) => t.reset()),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1);
    }
    setPosition(t) {
      let n = t * this.totalTime;
      this.players.forEach((r) => {
        let o = r.totalTime ? Math.min(1, n / r.totalTime) : 1;
        r.setPosition(o);
      });
    }
    getPosition() {
      let t = this.players.reduce(
        (n, r) => (n === null || r.totalTime > n.totalTime ? r : n),
        null,
      );
      return t != null ? t.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach((t) => {
        t.beforeDestroy && t.beforeDestroy();
      });
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  E_ = "!";
export {
  ye as a,
  De as b,
  ly as c,
  R as d,
  xl as e,
  M as f,
  to as g,
  no as h,
  J as i,
  Vt as j,
  ke as k,
  fe as l,
  Ll as m,
  jl as n,
  Vl as o,
  je as p,
  Ie as q,
  ql as r,
  Ve as s,
  Pn as t,
  Yl as u,
  Ql as v,
  Kl as w,
  Be as x,
  qs as y,
  Jl as z,
  Xl as A,
  Ht as B,
  oo as C,
  ed as D,
  td as E,
  od as F,
  Ys as G,
  io as H,
  id as I,
  sd as J,
  ad as K,
  ud as L,
  cd as M,
  ld as N,
  dd as O,
  fd as P,
  x as Q,
  Oa as R,
  F as S,
  Ra as T,
  WC as U,
  T as V,
  E as W,
  q as X,
  b as Y,
  Wt as Z,
  qC as _,
  Wa as $,
  vi as aa,
  rf as ba,
  tu as ca,
  Te as da,
  ZC as ea,
  Ci as fa,
  YC as ga,
  QC as ha,
  KC as ia,
  JC as ja,
  XC as ka,
  Qe as la,
  Ar as ma,
  ue as na,
  W as oa,
  Mt as pa,
  Ft as qa,
  eb as ra,
  tb as sa,
  vh as ta,
  qu as ua,
  nb as va,
  rb as wa,
  ir as xa,
  ob as ya,
  nt as za,
  ib as Aa,
  St as Ba,
  fr as Ca,
  Pt as Da,
  rt as Ea,
  fg as Fa,
  cb as Ga,
  Ig as Ha,
  Mg as Ia,
  ni as Ja,
  xg as Ka,
  Ng as La,
  Fg as Ma,
  Lg as Na,
  Yg as Oa,
  Bc as Pa,
  Qg as Qa,
  lb as Ra,
  db as Sa,
  Wc as Ta,
  qc as Ua,
  cm as Va,
  fm as Wa,
  fb as Xa,
  pm as Ya,
  Dm as Za,
  hb as _a,
  pb as $a,
  gb as ab,
  mb as bb,
  yb as cb,
  Db as db,
  vb as eb,
  Ib as fb,
  wb as gb,
  Eb as hb,
  Cb as ib,
  bm as jb,
  Qc as kb,
  bb as lb,
  _b as mb,
  Mb as nb,
  xb as ob,
  ts as pb,
  Om as qb,
  Lr as rb,
  Sb as sb,
  Tb as tb,
  nl as ub,
  Nb as vb,
  Qm as wb,
  Km as xb,
  Ab as yb,
  Jm as zb,
  rs as Ab,
  s_ as Bb,
  rl as Cb,
  cl as Db,
  oy as Eb,
  a_ as Fb,
  u_ as Gb,
  c_ as Hb,
  l_ as Ib,
  uy as Jb,
  d_ as Kb,
  f_ as Lb,
  al as Mb,
  st as Nb,
  g_ as Ob,
  m_ as Pb,
  y_ as Qb,
  D_ as Rb,
  v_ as Sb,
  I_ as Tb,
  w_ as Ub,
  fl as Vb,
  hl as Wb,
  E_ as Xb,
};
