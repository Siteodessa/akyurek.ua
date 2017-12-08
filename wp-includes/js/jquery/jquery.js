function registerServiceWorker() {
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: '/' }).then(() => {
      console.log('Service Worker registered successfully.');
    }).catch(error => {
      console.log('Service Worker registration failed:', error);
    });
  }
};
 registerServiceWorker();

! function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    n = function (a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase()
    };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function () {
      return e.call(this)
    },
    get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
    },
    pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function (a) {
      return n.each(this, a)
    },
    map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function () {
      return this.pushStack(e.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (e = arguments[h]))
        for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (a) {
      throw new Error(a)
    },
    noop: function () {},
    isFunction: function (a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray || function (a) {
      return "array" === n.type(a)
    },
    isWindow: function (a) {
      return null != a && a == a.window
    },
    isNumeric: function (a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    isPlainObject: function (a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
      try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      if (!l.ownFirst)
        for (b in a) return k.call(a, b);
      for (b in a);
      return void 0 === b || k.call(a, b)
    },
    type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
    },
    globalEval: function (b) {
      b && n.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b)
      })(b)
    },
    camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r)
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function (a, b) {
      var c, d = 0;
      if (s(a)) {
        for (c = a.length; c > d; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "")
    },
    makeArray: function (a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
    },
    inArray: function (a, b, c) {
      var d;
      if (b) {
        if (h) return h.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
          if (c in b && b[c] === a) return c
      }
      return -1
    },
    merge: function (a, b) {
      var c = +b.length,
        d = 0,
        e = a.length;
      while (c > d) a[e++] = b[d++];
      if (c !== c)
        while (void 0 !== b[d]) a[e++] = b[d++];
      return a.length = e, a
    },
    grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function (a, b, c) {
      var d, e, g = 0,
        h = [];
      if (s(a))
        for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
      else
        for (g in a) e = b(a[g], g, c), null != e && h.push(e);
      return f.apply([], h)
    },
    guid: 1,
    proxy: function (a, b) {
      var c, d, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () {
        return a.apply(b || this, c.concat(e.call(arguments)))
      }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
    },
    now: function () {
      return +new Date
    },
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase()
  });
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return c;
        return -1
      },
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
      O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      },
      da = function () {
        m()
      };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (ea) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b))
        } : function (a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }
    function fa(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a)))
          if (f = o[1]) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
            while (h--) r[h] = l + " " + qa(r[h]);
            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d
          } catch (y) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e)
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }
    function ha(a) {
      return a[u] = !0, a
    }
    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }
    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b
    }
    function ka(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b) return -1;
      return a ? 1 : -1
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }
    function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }
    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }
    c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = fa.setDocument = function (a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : []
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
      } : function (a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ia(function (a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a) return !0;
        return !1
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c, d = 0,
          e = a.parentNode,
          f = b.parentNode,
          g = [a],
          h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;
        while (c = c.parentNode) g.unshift(c);
        c = b;
        while (c = c.parentNode) h.unshift(c);
        while (g[d] === h[d]) d++;
        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
      }, n) : n
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b)
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, fa.uniqueSort = function (a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return k = null, a
    }, e = fa.getText = function (a) {
      var b, c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        while (b = a[d++]) c += e(b);
      return c
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
        },
        PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function () {
            return !0
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function (a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        },
        CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h,
              t = !1;
            if (q) {
              if (f) {
                while (p) {
                  m = b;
                  while (m = m[p])
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break
                  }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              return t -= e, t === d || t % d === 0 && t / d >= 0
            }
          }
        },
        PSEUDO: function (a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d, f = e(a, b),
              g = f.length;
            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function (a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: ha(function (a) {
          var b = [],
            c = [],
            d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function (a, b, c, e) {
            var f, g = d(a, null, e, []),
              h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0
          }
        }),
        contains: ha(function (a) {
          return a = a.replace(ba, ca),
            function (b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
            }
        }),
        lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
            function (b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function (a) {
          return a === o
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function (a) {
          return a.disabled === !1
        },
        disabled: function (a) {
          return a.disabled === !0
        },
        checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function (a) {
          return !d.pseudos.empty(a)
        },
        header: function (a) {
          return Y.test(a.nodeName)
        },
        input: function (a) {
          return X.test(a.nodeName)
        },
        button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: na(function () {
          return [0]
        }),
        last: na(function (a, b) {
          return [b - 1]
        }),
        eq: na(function (a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = la(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = ma(b);
    function pa() {}
    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
    };
    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function (b, c, g) {
        var h, i, j, k = [w, f];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
              if (i[d] = k, k[2] = a(b, c, g)) return !0
            }
      }
    }
    function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g
    }
    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || ta(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : ua(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
      })
    }
    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
          return a === b
        }, h, !0), l = ra(function (a) {
          return J(b, a) > -1
        }, h, !0), m = [function (a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; f > i; i++)
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++)
              if (d.relative[a[e].type]) break;
            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
          }
          m.push(c)
        }
      return sa(m)
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l, o, q, r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;
          for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
            if (e && l) {
              o = 0, g || l.ownerDocument === n || (m(l), h = !p);
              while (q = a[o++])
                if (q(l, g || n, h)) {
                  i.push(l);
                  break
                }
              k && (w = y)
            }
            c && ((l = !q && l) && r--, f && t.push(l))
          }
          if (r += s, c && s !== r) {
            o = 0;
            while (q = b[o++]) q(t, u, g, h);
            if (f) {
              if (r > 0)
                while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u)
            }
            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
          }
          return k && (w = y, j = v), t
        };
      return c ? ha(f) : f
    }
    return h = fa.compile = function (a, b) {
      var c, d = [],
        e = [],
        f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xa(e, d)), f.selector = a
      }
      return f
    }, i = fa.select = function (a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a,
        o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = W.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ia(function (a) {
      return null == a.getAttribute("disabled")
    }) || ja(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), fa
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a)
        }
      return d
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c
    })
  }
  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function (a) {
      var b, c = [],
        d = this,
        e = d.length;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; e > b; b++)
          if (n.contains(d[b], this)) return !0
      }));
      for (b = 0; e > b; b++) n.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
    },
    filter: function (a) {
      return this.pushStack(z(this, a || [], !1))
    },
    not: function (a) {
      return this.pushStack(z(this, a || [], !0))
    },
    is: function (a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
    }
  });
  var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || A, "string" == typeof a) {
        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        if (f = d.getElementById(e[2]), f && f.parentNode) {
          if (f.id !== e[2]) return A.find(a);
          this.length = 1, this[0] = f
        }
        return this.context = d, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
    E = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.fn.extend({
    has: function (a) {
      var b, c = n(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++)
          if (n.contains(this, c[b])) return !0
      })
    },
    closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
    },
    index: function (a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });
  function F(a, b) {
    do a = a[b]; while (a && 1 !== a.nodeType);
    return a
  }
  n.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function (a) {
      return u(a, "parentNode")
    },
    parentsUntil: function (a, b, c) {
      return u(a, "parentNode", c)
    },
    next: function (a) {
      return F(a, "nextSibling")
    },
    prev: function (a) {
      return F(a, "previousSibling")
    },
    nextAll: function (a) {
      return u(a, "nextSibling")
    },
    prevAll: function (a) {
      return u(a, "previousSibling")
    },
    nextUntil: function (a, b, c) {
      return u(a, "nextSibling", c)
    },
    prevUntil: function (a, b, c) {
      return u(a, "previousSibling", c)
    },
    siblings: function (a) {
      return v((a.parentNode || {}).firstChild, a)
    },
    children: function (a) {
      return v(a.firstChild)
    },
    contents: function (a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
    }
  });
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function () {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            n.each(b, function (b, c) {
              n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
            })
          }(arguments), c && !b && i()), this
        },
        remove: function () {
          return n.each(arguments, function (a, b) {
            var c;
            while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
          }), this
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0
        },
        empty: function () {
          return f && (f = []), this
        },
        disable: function () {
          return e = g = [], f = c = "", this
        },
        disabled: function () {
          return !f
        },
        lock: function () {
          return e = !0, c || j.disable(), this
        },
        locked: function () {
          return !!e
        },
        fireWith: function (a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function () {
          return j.fireWith(this, arguments), this
        },
        fired: function () {
          return !!d
        }
      };
    return j
  }, n.extend({
    Deferred: function (a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
        c = "pending",
        d = {
          state: function () {
            return c
          },
          always: function () {
            return e.done(arguments).fail(arguments), this
          },
          then: function () {
            var a = arguments;
            return n.Deferred(function (c) {
              n.each(b, function (b, f) {
                var g = n.isFunction(a[b]) && a[b];
                e[f[1]](function () {
                  var a = g && g.apply(this, arguments);
                  a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function (a) {
            return null != a ? n.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function (a) {
      var b = 0,
        c = e.call(arguments),
        d = c.length,
        f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
        g = 1 === f ? a : n.Deferred(),
        h = function (a, b, c) {
          return function (d) {
            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
          }
        },
        i, j, k;
      if (d > 1)
        for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var I;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0)
    },
    ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
    }
  });
  function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
  }
  function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
  }
  n.ready.promise = function (b) {
    if (!I)
      if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
      else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
    else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c = !1;
      try {
        c = null == a.frameElement && d.documentElement
      } catch (e) {}
      c && c.doScroll && ! function f() {
        if (!n.isReady) {
          try {
            c.doScroll("left")
          } catch (b) {
            return a.setTimeout(f, 50)
          }
          J(), n.ready()
        }
      }()
    }
    return I.promise(b)
  }, n.ready.promise();
  var L;
  for (L in n(l)) break;
  l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
      var a, b, c, e;
      c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    }),
    function () {
      var a = d.createElement("div");
      l.deleteExpando = !0;
      try {
        delete a.test
      } catch (b) {
        l.deleteExpando = !1
      }
      a = null
    }();
  var M = function (a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
        } catch (e) {}
        n.data(a, b, c)
      } else c = void 0;
    }
    return c
  }
  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0
  }
  function R(a, b, d, e) {
    if (M(a)) {
      var f, g, h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: n.noop
      }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
    }
  }
  function S(a, b, c) {
    if (M(a)) {
      var d, e, f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return
        }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
      }
    }
  }
  n.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function (a) {
        return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
      },
      data: function (a, b, c) {
        return R(a, b, c)
      },
      removeData: function (a, b) {
        return S(a, b)
      },
      _data: function (a, b, c) {
        return R(a, b, c, !0)
      },
      _removeData: function (a, b) {
        return S(a, b, !0)
      }
    }), n.fn.extend({
      data: function (a, b) {
        var c, d, e, f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
            c = g.length;
            while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
            n._data(f, "parsedAttrs", !0)
          }
          return e
        }
        return "object" == typeof a ? this.each(function () {
          n.data(this, a)
        }) : arguments.length > 1 ? this.each(function () {
          n.data(this, a, b)
        }) : f ? P(f, a, n.data(f, a)) : void 0
      },
      removeData: function (a) {
        return this.each(function () {
          n.removeData(this, a)
        })
      }
    }), n.extend({
      queue: function (a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b)
          };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return n._data(a, c) || n._data(a, c, {
          empty: n.Callbacks("once memory").add(function () {
            n._removeData(a, b + "queue"), n._removeData(a, c)
          })
        })
      }
    }), n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
          var c = n.queue(this, a, b);
          n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
        })
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a)
        })
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", [])
      },
      promise: function (a, b) {
        var c, d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f])
          };
        "string" != typeof a && (b = a, a = void 0), a = a || "fx";
        while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
      }
    }),
    function () {
      var a;
      l.shrinkWrapBlocks = function () {
        if (null != a) return a;
        a = !1;
        var b, c, e;
        return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
      }
    }();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function (a, b) {
      return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
  function X(a, b, c, d) {
    var e, f = 1,
      g = 20,
      h = d ? function () {
        return d.cur()
      } : function () {
        return n.css(a, b, "")
      },
      i = h(),
      j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;
      do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
    }
    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
  }
  var Y = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) Y(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
          return j.call(n(a), c)
        })), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ca(a) {
    var b = ba.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement)
      while (b.length) c.createElement(b.pop());
    return c
  }! function () {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
  }();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;
  function ea(a, b) {
    var c, d, e = 0,
      f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
  }
  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
  }
  var ga = /<|&#?\w+;/,
    ha = /<tbody/i;
  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked)
  }
  function ja(a, b, c, d, e) {
    for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
      if (g = a[r], g || 0 === g)
        if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
        else if (ga.test(g)) {
      i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
      while (f--) i = i.lastChild;
      if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
        while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
      }
      n.merge(q, i.childNodes), i.textContent = "";
      while (i.firstChild) i.removeChild(i.firstChild);
      i = p.lastChild
    } else q.push(b.createTextNode(g));
    i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
    while (g = q[r++])
      if (d && n.inArray(g, d) > -1) e && e.push(g);
      else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
      f = 0;
      while (g = i[f++]) _.test(g.type || "") && c.push(g)
    }
    return i = null, p
  }! function () {
    var b, c, e = d.createElement("div");
    for (b in {
        submit: !0,
        change: !0,
        focusin: !0
      }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
    e = null
  }();
  var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;
  function pa() {
    return !0
  }
  function qa() {
    return !1
  }
  function ra() {
    try {
      return d.activeElement
    } catch (a) {}
  }
  function sa(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) sa(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
    else if (!e) return a;
    return 1 === f && (g = e, e = function (a) {
      return n().off(a), g.apply(this, arguments)
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c)
    })
  }
  n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
        }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
        while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        a = null
      }
    },
    remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;
        while (j--)
          if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
            while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
          } else
            for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
      }
    },
    trigger: function (b, c, e, f) {
      var g, h, i, j, l, m, o, p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
          m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
        if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
          m = e[h], m && (e[h] = null), n.event.triggered = q;
          try {
            e[q]()
          } catch (s) {}
          n.event.triggered = void 0, m && (e[h] = m)
        }
        return b.result
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b, c, d, f, g, h = [],
        i = e.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function (a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            })
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b, c, e, f = a.type,
        g = a,
        h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
      while (b--) c = e[b], a[c] = g[c];
      return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (a, b) {
        var c, e, f, g = b.button,
          h = b.fromElement;
        return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== ra() && this.focus) try {
            return this.focus(), !1
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function (a) {
          return n.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event, c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
    }
  }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c)
  } : function (a, b, c) {
    var d = "on" + b;
    a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: qa,
    isPropagationStopped: qa,
    isImmediatePropagationStopped: qa,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function (a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), l.submit || (n.event.special.submit = {
    setup: function () {
      return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
          c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
        c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
          a._submitBubble = !0
        }), n._data(c, "submit", !0))
      })
    },
    postDispatch: function (a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
    },
    teardown: function () {
      return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
    }
  }), l.change || (n.event.special.change = {
    setup: function () {
      return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
      }), n.event.add(this, "click._change", function (a) {
        this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
      })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;
        ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
        }), n._data(b, "change", !0))
      })
    },
    handle: function (a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function () {
      return n.event.remove(this, "._change"), !ka.test(this.nodeName)
    }
  }), l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a))
    };
    n.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this,
          e = n._data(d, b);
        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
      },
      teardown: function () {
        var d = this.ownerDocument || this,
          e = n._data(d, b) - 1;
        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
      }
    }
  }), n.fn.extend({
    on: function (a, b, c, d) {
      return sa(this, a, b, c, d)
    },
    one: function (a, b, c, d) {
      return sa(this, a, b, c, d, 1)
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
        n.event.remove(this, a, c, b)
      })
    },
    trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this)
      })
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));
  function Ca(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }
  function Da(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
  }
  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }
  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c, d, e, f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
      }
      g.data && (g.data = n.extend({}, g.data))
    }
  }
  function Ga(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando)
      }
      "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
  }
  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e, g, h, i, j, k, m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
    });
    if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
      if (h)
        for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
      k = e = null
    }
    return a
  }
  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
    return a
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(va, "<$1></$2>")
    },
    clone: function (a, b, c) {
      var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
      if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
      if (b)
        if (c)
          for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
        else Fa(a, f);
      return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
    },
    cleanData: function (a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
        if ((b || M(d)) && (f = d[i], g = f && j[f])) {
          if (g.events)
            for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
        }
    }
  }), n.fn.extend({
    domManip: Ha,
    detach: function (a) {
      return Ia(this, a, !0)
    },
    remove: function (a) {
      return Ia(this, a)
    },
    text: function (a) {
      return Y(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
      }, null, a, arguments.length)
    },
    append: function () {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function () {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function () {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function () {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(ea(a, !1));
        while (a.firstChild) a.removeChild(a.firstChild);
        a.options && n.nodeName(a, "select") && (a.options.length = 0)
      }
      return this
    },
    clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b)
      })
    },
    html: function (a) {
      return Y(this, function (a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
        if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function () {
      var a = [];
      return Ha(this, arguments, function (b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
      }, a)
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
      return this.pushStack(e)
    }
  });
  var Ja, Ka = {
    HTML: "block",
    BODY: "block"
  };
  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d
  }
  function Ma(a) {
    var b = d,
      c = Ka[a];
    return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
  }
  var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function (a, b, c, d) {
      var e, f, g = {};
      for (f in b) g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e
    },
    Qa = d.documentElement;
  ! function () {
    var b, c, e, f, g, h, i = d.createElement("div"),
      j = d.createElement("div");
    if (j.style) {
      j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
        reliableHiddenOffsets: function () {
          return null == b && k(), f
        },
        boxSizingReliable: function () {
          return null == b && k(), e
        },
        pixelMarginRight: function () {
          return null == b && k(), c
        },
        pixelPosition: function () {
          return null == b && k(), b
        },
        reliableMarginRight: function () {
          return null == b && k(), g
        },
        reliableMarginLeft: function () {
          return null == b && k(), h
        }
      });
      function k() {
        var k, l, m = d.documentElement;
        m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
          width: "4px"
        }).width, j.style.marginRight = "50%", c = "4px" === (l || {
          marginRight: "4px"
        }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
      }
    }
  }();
  var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ra = function (b) {
    var c = b.ownerDocument.defaultView;
    return c && c.opener || (c = a), c.getComputedStyle(b)
  }, Sa = function (a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
  }) : Qa.currentStyle && (Ra = function (a) {
    return a.currentStyle
  }, Sa = function (a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
  });
  function Ua(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }
  var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    $a = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;
  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
      c = _a.length;
    while (c--)
      if (a = _a[c] + b, a in ab) return a
  }
  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }
  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }
  function eb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    return g
  }
  function fb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b),
          i = a.style;
        if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c
        } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
          return fb(a, b, d)
        }) : fb(a, b, d) : void 0
      },
      set: function (a, c, d) {
        var e = d && Ra(a);
        return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), l.opacity || (n.cssHooks.opacity = {
    get: function (a, b) {
      return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    },
    set: function (a, b) {
      var c = a.style,
        d = a.currentStyle,
        e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
        f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
    }
  }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
    return b ? Pa(a, {
      display: "inline-block"
    }, Sa, [a, "marginRight"]) : void 0
  }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left
    }) : 0)) + "px" : void 0
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Na.test(a) || (n.cssHooks[a + b].set = db)
  }), n.fn.extend({
    css: function (a, b) {
      return Y(this, function (a, b, c) {
        var d, e, f = {},
          g = 0;
        if (n.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function () {
      return cb(this, !0)
    },
    hide: function () {
      return cb(this)
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        W(this) ? n(this).show() : n(this).hide()
      })
    }
  });
  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e)
  }
  n.Tween = gb, gb.prototype = {
    constructor: gb,
    init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    },
    cur: function () {
      var a = gb.propHooks[this.prop];
      return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
    },
    run: function (a) {
      var b, c = gb.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
    }
  }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
      },
      set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
      }
    }
  }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function (a) {
      return a
    },
    swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2
    },
    _default: "swing"
  }, n.fx = gb.prototype.init, n.fx.step = {};
  var hb, ib, jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;
  function lb() {
    return a.setTimeout(function () {
      hb = void 0
    }), hb = n.now()
  }
  function mb(a, b) {
    var c, d = {
        height: a
      },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d
  }
  function nb(a, b, c) {
    for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }
  function ob(a, b, c) {
    var d, e, f, g, h, i, j, k, m = this,
      o = {},
      p = a.style,
      q = a.nodeType && W(a),
      r = n._data(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i()
    }), h.unqueued++, m.always(function () {
      m.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], jb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0
        }
        o[d] = r && r[d] || n.style(a, d)
      } else j = void 0;
    if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
        n(a).hide()
      }), m.done(function () {
        var b;
        n._removeData(a, "fxshow");
        for (b in o) n.style(a, b, o[b])
      });
      for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }
  function pb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }
  function qb(a, b, c) {
    var d, e, f = 0,
      g = qb.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem
      }),
      i = function () {
        if (e) return !1;
        for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, {
          specialEasing: {},
          easing: n.easing._default
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: hb || lb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (pb(k, j.opts.specialEasing); g > f; f++)
      if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  n.Animation = n.extend(qb, {
      tweeners: {
        "*": [function (a, b) {
          var c = this.createTween(a, b);
          return X(c.elem, a, U.exec(b), c), c
        }]
      },
      tweener: function (a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
      },
      prefilters: [ob],
      prefilter: function (a, b) {
        b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
      }
    }), n.speed = function (a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
      }, d
    }, n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(W).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = qb(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          !b && c || n.dequeue(this, a)
        })
      },
      finish: function (a) {
        return a !== !1 && (a = a || "fx"), this.each(function () {
          var b, c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
      }
    }), n.each({
      slideDown: mb("show"),
      slideUp: mb("hide"),
      slideToggle: mb("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (a, b) {
      n.fn[a] = function (a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), n.timers = [], n.fx.tick = function () {
      var a, b = n.timers,
        c = 0;
      for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), hb = void 0
    }, n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
      ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
      a.clearInterval(ib), ib = null
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function (b, c) {
      return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
        var e = a.setTimeout(c, b);
        d.stop = function () {
          a.clearTimeout(e)
        }
      })
    },
    function () {
      var a, b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
      c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
    }();
  var rb = /\r/g,
    sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b)
            }
          return g
        },
        set: function (a, b) {
          var c, d, e = a.options,
            f = n.makeArray(b),
            g = e.length;
          while (g--)
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
              d.selected = c = !0
            } catch (h) {
              d.scrollHeight
            } else d.selected = !1;
          return c || (a.selectedIndex = -1), e
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
      }
    }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var tb, ub, vb = n.expr.attrHandle,
    wb = /^(?:checked|selected)$/i,
    xb = l.getSetAttribute,
    yb = l.input;
  n.fn.extend({
    attr: function (a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1)
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    },
    removeAttr: function (a, b) {
      var c, d, e = 0,
        f = b && b.match(G);
      if (f && 1 === a.nodeType)
        while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
    }
  }), ub = {
    set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = vb[b] || n.find.attr;
    yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
      var e, f;
      return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
    } : vb[b] = function (a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
    }
  }), yb && xb || (n.attrHooks.value = {
    set: function (a, b, c) {
      return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
    }
  }), xb || (tb = {
    set: function (a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
    }
  }, vb.id = vb.name = vb.coords = function (a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
  }, n.valHooks.button = {
    get: function (a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0
    },
    set: tb.set
  }, n.attrHooks.contenteditable = {
    set: function (a, b, c) {
      tb.set(a, "" === b ? !1 : b, c)
    }
  }, n.each(["width", "height"], function (a, b) {
    n.attrHooks[b] = {
      set: function (a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
      }
    }
  })), l.style || (n.attrHooks.style = {
    get: function (a) {
      return a.style.cssText || void 0
    },
    set: function (a, b) {
      return a.style.cssText = b + ""
    }
  });
  var zb = /^(?:input|select|textarea|button|object)$/i,
    Ab = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1)
    },
    removeProp: function (a) {
      return a = n.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a]
        } catch (b) {}
      })
    }
  }), n.extend({
    prop: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
    n.propHooks[b] = {
      get: function (a) {
        return a.getAttribute(b, 4)
      }
    }
  }), l.optSelected || (n.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    },
    set: function (a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this
  }), l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;
  function Cb(a) {
    return n.attr(a, "class") || ""
  }
  n.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, Cb(this)))
      });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++])
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;
            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            h = n.trim(d), e !== h && n.attr(c, "class", h)
          }
      }
      return this
    },
    removeClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, Cb(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++])
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;
            while (f = b[g++])
              while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
            h = n.trim(d), e !== h && n.attr(c, "class", h)
          }
      }
      return this
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, Cb(this), b), b)
      }) : this.each(function () {
        var b, d, e, f;
        if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
      })
    },
    hasClass: function (a) {
      var b, c, d = 0;
      b = " " + a + " ";
      while (c = this[d++])
        if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
      return !1
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }
  });
  var Db = a.location,
    Eb = n.now(),
    Fb = /\?/,
    Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c, d = null,
      e = n.trim(b + "");
    return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
  }, n.parseXML = function (b) {
    var c, d;
    if (!b || "string" != typeof b) return null;
    try {
      a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
    } catch (e) {
      c = void 0
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
  };
  var Hb = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Lb = /^(?:GET|HEAD)$/,
    Mb = /^\/\//,
    Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ob = {},
    Pb = {},
    Qb = "*/".concat("*"),
    Rb = Db.href,
    Sb = Nb.exec(Rb.toLowerCase()) || [];
  function Tb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }
  function Ub(a, b, c, d) {
    var e = {},
      f = a === Pb;
    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }
  function Vb(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a
  }
  function Wb(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break
        }
        d || (d = g)
      }
      f = f || d
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }
  function Xb(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          }
      if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function (b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
        m = l.context || l,
        o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
        p = n.Deferred(),
        q = n.Callbacks("once memory"),
        r = l.statusCode || {},
        s = {},
        t = {},
        u = 0,
        v = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = {};
                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
              }
              b = k[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function () {
            return 2 === u ? g : null
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return u || (a = t[c] = t[c] || a, s[a] = b), this
          },
          overrideMimeType: function (a) {
            return u || (l.mimeType = a), this
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > u)
                for (b in a) r[b] = [r[b], a[b]];
              else w.always(a[w.status]);
            return this
          },
          abort: function (a) {
            var b = a || v;
            return j && j.abort(b), y(0, b), this
          }
        };
      if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
      i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
      v = "abort";
      for (e in {
          success: 1,
          error: 1,
          complete: 1
        }) w[e](l[e]);
      if (j = Ub(Pb, l, c, w)) {
        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
        l.async && l.timeout > 0 && (h = a.setTimeout(function () {
          w.abort("timeout")
        }, l.timeout));
        try {
          u = 1, j.send(s, y)
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x)
        }
      } else y(-1, "No Transport");
      function y(b, c, d, e) {
        var k, s, t, v, x, y = c;
        2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
      }
      return w
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a))
    }
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    })
  }, n.fn.extend({
    wrapAll: function (a) {
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;
          while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    },
    wrapInner: function (a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b))
      }) : this.each(function () {
        var b = n(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function (a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  function Yb(a) {
    return a.style && a.style.display || n.css(a, "display")
  }
  function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;
    while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;
      a = a.parentNode
    }
    return !1
  }
  n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a)
  };
  var $b = /%20/g,
    _b = /\[\]$/,
    ac = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;
  function dc(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== n.type(b)) d(a, b);
    else
      for (e in b) dc(a + "[" + e + "]", b[e], c, d)
  }
  n.param = function (a, b) {
    var c, d = [],
      e = function (a, b) {
        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value)
    });
    else
      for (c in a) dc(c, a[c], b, e);
    return d.join("&").replace($b, "+")
  }, n.fn.extend({
    serialize: function () {
      return n.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(ac, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(ac, "\r\n")
        }
      }).get()
    }
  }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
  } : hc;
  var ec = 0,
    fc = {},
    gc = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in fc) fc[a](void 0, !0)
  }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
    if (!b.crossDomain || l.cors) {
      var c;
      return {
        send: function (d, e) {
          var f, g = b.xhr(),
            h = ++ec;
          if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
            for (f in b.xhrFields) g[f] = b.xhrFields[f];
          b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
          for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          g.send(b.hasContent && b.data || null), c = function (a, d) {
            var f, i, j;
            if (c && (d || 4 === g.readyState))
              if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
              else {
                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                try {
                  i = g.statusText
                } catch (k) {
                  i = ""
                }
                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
              }
            j && e(f, i, j, g.getAllResponseHeaders())
          }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
        },
        abort: function () {
          c && c(void 0, !0)
        }
      }
    }
  });
  function hc() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  }
  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c = d.head || n("head")[0] || d.documentElement;
      return {
        send: function (e, f) {
          b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
          }, c.insertBefore(b, c.firstChild)
        },
        abort: function () {
          b && b.onload(void 0, !0)
        }
      }
    }
  });
  var jc = [],
    kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = jc.pop() || n.expando + "_" + Eb++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || d;
    var e = x.exec(a),
      f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
  };
  var lc = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a])
      })
    }), this
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a)
    }
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem
    }).length
  };
  function mc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }
  n.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = {
          top: 0,
          left: 0
        },
        e = this[0],
        f = e && e.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d
    },
    position: function () {
      if (this[0]) {
        var a, b, c = {
            top: 0,
            left: 0
          },
          d = this[0];
        return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - n.css(d, "marginTop", !0),
          left: b.left - c.left - n.css(d, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent;
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
        return a || Qa
      })
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = /Y/.test(b);
    n.fn[a] = function (d) {
      return Y(this, function (a, d, e) {
        var f = mc(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
      }, a, d, arguments.length, null)
    }
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
      return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return Y(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.extend({
    bind: function (a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function (a, b) {
      return this.off(a, null, b)
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  }), n.fn.size = function () {
    return this.length
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n
  });
  var nc = a.jQuery,
    oc = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
  }, b || (a.jQuery = a.$ = n), n
});
jQuery.noConflict();
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  function (a, b, c) {
    function d(c) {
      var d = b.console;
      f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }
    function e(b, c, e, f) {
      if (Object.defineProperty) try {
        return void Object.defineProperty(b, c, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return d(f), e
          },
          set: function (a) {
            d(f), e = a
          }
        })
      } catch (g) {}
      a._definePropertyBroken = !0, b[c] = e
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
      f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {
        size: 1
      }).attr("size") && a.attrFn,
      h = a.attr,
      i = a.attrHooks.value && a.attrHooks.value.get || function () {
        return null
      },
      j = a.attrHooks.value && a.attrHooks.value.set || function () {
        return c
      },
      k = /^(?:input|button)$/i,
      l = /^[238]$/,
      m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
      var j = e.toLowerCase(),
        o = b && b.nodeType;
      return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
        get: function (b, d) {
          var e, f = a.prop(b, d);
          return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
        },
        set: function (b, c, d) {
          var e;
          return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
      }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
      get: function (a, b) {
        var c = (a.nodeName || "").toLowerCase();
        return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
      },
      set: function (a, b) {
        var c = (a.nodeName || "").toLowerCase();
        return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
      }
    };
    var o, p, q = a.fn.init,
      r = a.find,
      s = a.parseJSON,
      t = /^\s*</,
      u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function (b, e, f) {
      var g, h;
      return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function (a) {
      var b = Array.prototype.slice.call(arguments);
      if ("string" == typeof a && u.test(a)) try {
        document.querySelector(a)
      } catch (c) {
        a = a.replace(v, function (a, b, c, d) {
          return "[" + b + c + '"' + d + '"]'
        });
        try {
          document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
        } catch (e) {
          d("Attribute selector with '#' was not fixed: " + b[0])
        }
      }
      return r.apply(this, b)
    };
    var x;
    for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function (a) {
      return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function (a) {
      a = a.toLowerCase();
      var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
      return {
        browser: b[1] || "",
        version: b[2] || "0"
      }
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
      function b(a, c) {
        return new b.fn.init(a, c)
      }
      a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
        var f = a.fn.init.call(this, d, e, c);
        return f instanceof b ? f : b(f)
      }, b.fn.init.prototype = b.fn;
      var c = b(document);
      return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function () {
      return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
      var d = a.cssHooks[c] && a.cssHooks[c].get;
      d && (a.cssHooks[c].get = function () {
        var a;
        return y = !0, a = d.apply(this, arguments), y = !1, a
      })
    }), a.swap = function (a, b, c, e) {
      var f, g, h = {};
      y || d("jQuery.swap() is undocumented and deprecated");
      for (g in b) h[g] = a.style[g], a.style[g] = b[g];
      f = c.apply(a, e || []);
      for (g in b) a.style[g] = h[g];
      return f
    }, a.ajaxSetup({
      converters: {
        "text json": a.parseJSON
      }
    });
    var z = a.fn.data;
    a.fn.data = function (b) {
      var e, f, g = this[0];
      return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function (b, c, e, f) {
      c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
      var g, h, i, j, k = [];
      if (a.merge(k, a.buildFragment(b, c).childNodes), e)
        for (i = function (a) {
            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
          }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
      return k
    });
    var B = a.event.add,
      C = a.event.remove,
      D = a.event.trigger,
      E = a.fn.toggle,
      F = a.fn.live,
      G = a.fn.die,
      H = a.fn.load,
      I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      J = new RegExp("\\b(?:" + I + ")\\b"),
      K = /(?:^|\s)hover(\.\S+|)\b/,
      L = function (b) {
        return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
      };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
      a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function (a, b, c, d, e) {
      C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function (b, c) {
      a.fn[c] = function () {
        var a = Array.prototype.slice.call(arguments, 0);
        return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
      }
    }), a.fn.toggle = function (b, c) {
      if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
      d("jQuery.fn.toggle(handler, handler...) is deprecated");
      var e = arguments,
        f = b.guid || a.guid++,
        g = 0,
        h = function (c) {
          var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
          return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
        };
      for (h.guid = f; g < e.length;) e[g++].guid = f;
      return this.click(h)
    }, a.fn.live = function (b, c, e) {
      return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function (b, c) {
      return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function (a, b, c, e) {
      return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function (b, c) {
      a.event.special[c] = {
        setup: function () {
          var b = this;
          return b !== document && (a.event.add(document, c + "." + a.guid, function () {
            a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
          }), a._data(this, c, a.guid++)), !1
        },
        teardown: function () {
          return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
        }
      }
    }), a.event.special.ready = {
      setup: function () {
        this === document && d("'ready' event is deprecated")
      }
    };
    var M = a.fn.andSelf || a.fn.addBack,
      N = a.fn.find;
    if (a.fn.andSelf = function () {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
      }, a.fn.find = function (a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
      }, a.Callbacks) {
      var O = a.Deferred,
        P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
      a.Deferred = function (b) {
        var c = O(),
          e = c.promise();
        return c.pipe = e.pipe = function () {
          var b = arguments;
          return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
            a.each(P, function (f, g) {
              var h = a.isFunction(b[f]) && b[f];
              c[g[1]](function () {
                var b = h && h.apply(this, arguments);
                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
              })
            }), b = null
          }).promise()
        }, c.isResolved = function () {
          return d("deferred.isResolved is deprecated"), "resolved" === c.state()
        }, c.isRejected = function () {
          return d("deferred.isRejected is deprecated"), "rejected" === c.state()
        }, b && b.call(c, c), c
      }
    }
  }(jQuery, window);
(function ($) {
  'use strict';
  $(document).ready(function () {
    $('#geot_dropdown').ddslick({
      onSelected: function (data) {
        var country_code = data.selectedData.value;
        GeotCreateCookie('geot_country', country_code, 999);
        window.location.reload();
      }
    });
  }); /** * Cookie functions */
  function GeotCreateCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  function GeotReadCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
})(jQuery);
/*endgeotarget*/
/*start slick*/
! function (e) {
  function t(e, t) {
    d(e, e.find(".geotdd-option-value[value= '" + t + "']").parents("li").prevAll().length)
  }
  function d(e, t, d) {
    void 0 === d && (d = !0);
    var i = e.data("ddslick"),
      s = e.find(".geotdd-selected"),
      l = s.siblings(".geotdd-selected-value"),
      a = (e.find(".geotdd-options"), s.siblings(".geotdd-pointer"), e.find(".geotdd-option").eq(t)),
      c = a.closest("li"),
      g = i.settings,
      r = i.settings.data[t];
    e.find(".geotdd-option").removeClass("geotdd-option-selected"), a.addClass("geotdd-option-selected"), i.selectedIndex = t, i.selectedItem = c, i.selectedData = r, g.showSelectedHTML ? s.html((r.imageSrc ? '<span class="' + r.imageSrc + " geotdd-selected-image" + ("right" == g.imagePosition ? " geotdd-image-right" : "") + '"></span>' : "") + (r.text ? '<label class="geotdd-selected-text">' + r.text + "</label>" : "") + (r.description ? '<small class="geotdd-selected-description geotdd-desc' + (g.truncateDescription ? " geotdd-selected-description-truncated" : "") + '" >' + r.description + "</small>" : "")) : s.html(r.text), l.val(r.value), i.original.val(r.value), e.data("ddslick", i), o(e), n(e), d && "function" == typeof g.onSelected && g.onSelected.call(this, i)
  }
  function i(t) {
    var d = t.find(".geotdd-select"),
      i = d.siblings(".geotdd-options"),
      o = d.find(".geotdd-pointer"),
      n = i.is(":visible");
    e(".geotdd-click-off-close").not(i).slideUp(50), e(".geotdd-pointer").removeClass("geotdd-pointer-up"), d.removeClass("geotdd-open"), n ? (i.slideUp("fast"), o.removeClass("geotdd-pointer-up"), d.removeClass("geotdd-open")) : (d.addClass("geotdd-open"), i.slideDown("fast"), o.addClass("geotdd-pointer-up")), s(t)
  }
  function o(e) {
    e.find(".geotdd-select").removeClass("geotdd-open"), e.find(".geotdd-options").slideUp(50), e.find(".geotdd-pointer").removeClass("geotdd-pointer-up").removeClass("geotdd-pointer-up")
  }
  function n(e) {
    e.find(".geotdd-select").css("height"), e.find(".geotdd-selected-description"), e.find(".geotdd-selected-image")
  }
  function s(t) {
    t.find(".geotdd-option").each(function () {
      var d = e(this);
      d.css("height"), d.find(".geotdd-option-description"), t.find(".geotdd-option-image")
    })
  }
  e.fn.ddslick = function (t) {
    return l[t] ? l[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exists.") : l.init.apply(this, arguments)
  };
  var l = {},
    a = {
      data: [],
      keepJSONItemsOnTop: !1,
      width: 260,
      height: null,
      background: "#eee",
      selectText: "",
      defaultSelectedIndex: null,
      truncateDescription: !0,
      imagePosition: "left",
      showSelectedHTML: !0,
      clickOffToClose: !0,
      embedCSS: !0,
      onSelected: function () {}
    };
  l.init = function (t) {
    e.extend({}, a, t);
    return this.each(function () {
      var o = e.extend({}, a, t),
        n = e(this);
      if (!n.data("ddslick")) {
        c = [], o.data;
        n.find("option").each(function () {
          var t = e(this),
            d = t.data();
          c.push({
            text: e.trim(t.text()),
            value: t.val(),
            selected: t.is(":selected"),
            f: t.is(":selected"),
            description: d.description,
            imageSrc: d.imagesrc
          })
        }), o.keepJSONItemsOnTop ? e.merge(o.data, c) : o.data = e.merge(c, o.data);
        var s = n,
          l = e('<div id="' + n.attr("id") + '-geotdd-placeholder"></div>');
        n.replaceWith(l), (n = l).addClass("geotdd-container").append('<div class="geotdd-select"><input class="geotdd-selected-value" type="hidden" /><a class="geotdd-selected"></a><span class="geotdd-pointer geotdd-pointer-down"></span></div>').append('<ul class="geotdd-options"></ul>'), n.find("input.geotdd-selected-value").attr("id", e(s).attr("id")).attr("name", e(s).attr("name"));
        var c = n.find(".geotdd-select"),
          g = n.find(".geotdd-options");
        n.css({
          "max-width": o.width
        }), null != o.height && g.css({
          height: o.height,
          overflow: "auto"
        }), e.each(o.data, function (e, t) {
          t.f && (o.defaultSelectedIndex = e), g.append('<li><a class="geotdd-option">' + (t.value ? ' <input class="geotdd-option-value" type="hidden" value="' + t.value + '" />' : "") + (t.imageSrc ? ' <span class="' + t.imageSrc + " geotdd-option-image" + ("right" == o.imagePosition ? " geotdd-image-right" : "") + '"></span>' : "") + (t.text ? ' <label class="geotdd-option-text">' + t.text + "</label>" : "") + (t.description ? ' <small class="geotdd-option-description geotdd-desc">' + t.description + "</small>" : "") + "</a></li>")
        });
        var r = {
          settings: o,
          original: s,
          selectedIndex: -1,
          selectedItem: null,
          selectedData: null
        };
        if (n.data("ddslick", r), o.selectText.length > 0 && null == o.defaultSelectedIndex) n.find(".geotdd-selected").html(o.selectText);
        else {
          var p = null != o.defaultSelectedIndex && o.defaultSelectedIndex >= 0 && o.defaultSelectedIndex < o.data.length ? o.defaultSelectedIndex : 0;
          d(n, p, !1)
        }
        n.find(".geotdd-select").on("click.ddslick", function () {
          i(n)
        }), n.find(".geotdd-option").on("click.ddslick", function () {
          d(n, e(this).closest("li").index())
        }), o.clickOffToClose && (g.addClass("geotdd-click-off-close"), n.on("click.ddslick", function (e) {
          e.stopPropagation()
        }), e("body").on("click", function () {
          e(".geotdd-open").removeClass("geotdd-open"), e(".geotdd-click-off-close").slideUp(50).siblings(".geotdd-select").find(".geotdd-pointer").removeClass("geotdd-pointer-up")
        }))
      }
    })
  }, l.select = function (i) {
    return this.each(function () {
      void 0 !== i.index && d(e(this), i.index), i.id && t(e(this), i.id)
    })
  }, l.open = function () {
    return this.each(function () {
      var t = e(this);
      t.data("ddslick") && i(t)
    })
  }, l.close = function () {
    return this.each(function () {
      var t = e(this);
      t.data("ddslick") && o(t)
    })
  }, l.destroy = function () {
    return this.each(function () {
      var t = e(this),
        d = t.data("ddslick");
      if (d) {
        var i = d.original;
        t.removeData("ddslick").unbind(".ddslick").replaceWith(i)
      }
    })
  }
}(jQuery);
/*end slick start lightgallery */
! function (a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function (a) {
    return b(a)
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function (a) {
  ! function () {
    "use strict";
    function b(b, d) {
      if (this.el = b, this.$el = a(b), this.s = a.extend({}, c, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
      return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
    }
    var c = {
      mode: "lg-slide",
      cssEasing: "ease",
      easing: "linear",
      speed: 600,
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 150,
      hideBarsDelay: 6e3,
      useLeft: !1,
      closable: !0,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimatoin: !0,
      hideControlOnEnd: !1,
      mousewheel: !0,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 1,
      showAfterLoad: !0,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: !1,
      iframeMaxWidth: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      galleryId: 1
    };
    b.prototype.init = function () {
      var b = this;
      b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
      var c = window.location.hash;
      c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function () {
        b.build(b.index)
      }), a("body").addClass("lg-on"))), b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function () {
        b.build(b.index), a("body").addClass("lg-on")
      })) : b.$items.on("click.lgcustom", function (c) {
        try {
          c.preventDefault(), c.preventDefault()
        } catch (a) {
          c.returnValue = !1
        }
        b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || b.$items.index(this), a("body").hasClass("lg-on") || (b.build(b.index), a("body").addClass("lg-on"))
      })
    }, b.prototype.build = function (b) {
      var c = this;
      c.structure(), a.each(a.fn.lightGallery.modules, function (b) {
        c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
      }), c.slide(b, !1, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 && (c.arrow(), setTimeout(function () {
        c.enableDrag(), c.enableSwipe()
      }, 50), c.s.mousewheel && c.mousewheel()), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
        c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function () {
          c.$outer.addClass("lg-hide-items")
        }, c.s.hideBarsDelay)
      })
    }, b.prototype.structure = function () {
      var b, c = "",
        d = "",
        e = 0,
        f = "",
        g = this;
      for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), e = 0; e < this.$items.length; e++) c += '<div class="lg-item"></div>';
      if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'), b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>", a("body").append(b), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), g.setTop(), a(window).on("resize.lg orientationchange.lg", function () {
          setTimeout(function () {
            g.setTop()
          }, 100)
        }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
        var h = this.$outer.find(".lg-inner");
        h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms")
      }
      setTimeout(function () {
        a(".lg-backdrop").addClass("in")
      }), setTimeout(function () {
        g.$outer.addClass("lg-visible")
      }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(window).scrollTop()
    }, b.prototype.setTop = function () {
      if ("100%" !== this.s.height) {
        var b = a(window).height(),
          c = (b - parseInt(this.s.height, 10)) / 2,
          d = this.$outer.find(".lg");
        b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px")
      }
    }, b.prototype.doCss = function () {
      var a = function () {
        var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
          b = document.documentElement,
          c = 0;
        for (c = 0; c < a.length; c++)
          if (a[c] in b.style) return !0
      };
      return !!a()
    }, b.prototype.isVideo = function (a, b) {
      var c;
      if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a && c) return {
        html5: !0
      };
      var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
        e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
        f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
        g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
      return d ? {
        youtube: d
      } : e ? {
        vimeo: e
      } : f ? {
        dailymotion: f
      } : g ? {
        vk: g
      } : void 0
    }, b.prototype.counter = function () {
      this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
    }, b.prototype.addHtml = function (b) {
      var c, d, e = null;
      if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c)
        if ("undefined" != typeof e && null !== e) {
          var f = e.substring(0, 1);
          "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
        } else e = "";
      ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
    }, b.prototype.preload = function (a) {
      var b = 1,
        c = 1;
      for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
      for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
    }, b.prototype.loadContent = function (b, c, d) {
      var e, f, g, h, i, j, k = this,
        l = !1,
        m = function (b) {
          for (var c = [], d = [], e = 0; e < b.length; e++) {
            var g = b[e].split(" ");
            "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1])
          }
          for (var h = a(window).width(), i = 0; i < c.length; i++)
            if (parseInt(c[i], 10) > h) {
              f = d[i];
              break
            }
        };
      if (k.s.dynamic) {
        if (k.s.dynamicEl[b].poster && (l = !0, g = k.s.dynamicEl[b].poster), j = k.s.dynamicEl[b].html, f = k.s.dynamicEl[b].src, k.s.dynamicEl[b].responsive) {
          var n = k.s.dynamicEl[b].responsive.split(",");
          m(n)
        }
        h = k.s.dynamicEl[b].srcset, i = k.s.dynamicEl[b].sizes
      } else {
        if (k.$items.eq(b).attr("data-poster") && (l = !0, g = k.$items.eq(b).attr("data-poster")), j = k.$items.eq(b).attr("data-html"), f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"), k.$items.eq(b).attr("data-responsive")) {
          var o = k.$items.eq(b).attr("data-responsive").split(",");
          m(o)
        }
        h = k.$items.eq(b).attr("data-srcset"), i = k.$items.eq(b).attr("data-sizes")
      }
      var p = !1;
      k.s.dynamic ? k.s.dynamicEl[b].iframe && (p = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (p = !0);
      var q = k.isVideo(f, b);
      if (!k.$slide.eq(b).hasClass("lg-loaded")) {
        if (p) k.$slide.eq(b).prepend('<div class="lg-video-cont" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
        else if (l) {
          var r = "";
          r = q && q.youtube ? "lg-has-youtube" : q && q.vimeo ? "lg-has-vimeo" : "lg-has-html5", k.$slide.eq(b).prepend('<div class="lg-video-cont ' + r + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
        } else q ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
        if (k.$el.trigger("onAferAppendSlide.lg", [b]), e = k.$slide.eq(b).find(".lg-object"), i && e.attr("sizes", i), h) {
          e.attr("srcset", h);
          try {
            picturefill({
              elements: [e[0]]
            })
          } catch (a) {
            console.error("Make sure you have included Picturefill version 2")
          }
        }
        ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b), k.$slide.eq(b).addClass("lg-loaded")
      }
      k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function () {
        var c = 0;
        d && !a("body").hasClass("lg-from-hash") && (c = d), setTimeout(function () {
          k.$slide.eq(b).addClass("lg-complete"), k.$el.trigger("onSlideItemLoad.lg", [b, d || 0])
        }, c)
      }), q && q.html5 && !l && k.$slide.eq(b).addClass("lg-complete"), c === !0 && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function () {
        k.preload(b)
      }))
    }, b.prototype.slide = function (b, c, d, e) {
      var f = this.$outer.find(".lg-current").index(),
        g = this;
      if (!g.lGalleryOn || f !== b) {
        var h = this.$slide.length,
          i = g.lGalleryOn ? this.s.speed : 0;
        if (!g.lgBusy) {
          if (this.s.download) {
            var j;
            j = g.s.dynamic ? g.s.dynamicEl[b].downloadUrl !== !1 && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src) : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src")), j ? (a("#lg-download").attr("href", j), g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download")
          }
          if (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]), g.lgBusy = !0, clearTimeout(g.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
              g.addHtml(b)
            }, i), this.arrowDisable(b), e || (b < f ? e = "prev" : b > f && (e = "next")), c) {
            this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
            var k, l;
            h > 2 ? (k = b - 1, l = b + 1, 0 === b && f === h - 1 ? (l = 0, k = h - 1) : b === h - 1 && 0 === f && (l = 0, k = h - 1)) : (k = 0, l = 1), "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"), g.$slide.eq(b).addClass("lg-current")
          } else g.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(f).addClass("lg-prev-slide")), setTimeout(function () {
            g.$slide.removeClass("lg-current"), g.$slide.eq(b).addClass("lg-current"), g.$outer.removeClass("lg-no-trans")
          }, 50);
          g.lGalleryOn ? (setTimeout(function () {
            g.loadContent(b, !0, 0)
          }, this.s.speed + 50), setTimeout(function () {
            g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])
          }, this.s.speed)) : (g.loadContent(b, !0, g.s.backdropDuration), g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])), g.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
        }
      }
    }, b.prototype.goToNextSlide = function (a) {
      var b = this,
        c = b.s.loop;
      a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : c ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-right-end"), setTimeout(function () {
        b.$outer.removeClass("lg-right-end")
      }, 400)))
    }, b.prototype.goToPrevSlide = function (a) {
      var b = this,
        c = b.s.loop;
      a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : c ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-left-end"), setTimeout(function () {
        b.$outer.removeClass("lg-left-end")
      }, 400)))
    }, b.prototype.keyPress = function () {
      var b = this;
      this.$items.length > 1 && a(window).on("keyup.lg", function (a) {
        b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()))
      }), a(window).on("keydown.lg", function (a) {
        b.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy())
      })
    }, b.prototype.arrow = function () {
      var a = this;
      this.$outer.find(".lg-prev").on("click.lg", function () {
        a.goToPrevSlide()
      }), this.$outer.find(".lg-next").on("click.lg", function () {
        a.goToNextSlide()
      })
    }, b.prototype.arrowDisable = function (a) {
      !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
    }, b.prototype.setTranslate = function (a, b, c) {
      this.s.useLeft ? a.css("left", b) : a.css({
        transform: "translate3d(" + b + "px, " + c + "px, 0px)"
      })
    }, b.prototype.touchMove = function (b, c) {
      var d = c - b;
      Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
    }, b.prototype.touchEnd = function (a) {
      var b = this;
      "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function () {
        b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style")
      }), setTimeout(function () {
        b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
      }, b.s.speed + 100)
    }, b.prototype.enableSwipe = function () {
      var a = this,
        b = 0,
        c = 0,
        d = !1;
      a.s.enableSwipe && a.isTouch && a.doCss() && (a.$slide.on("touchstart.lg", function (c) {
        a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
      }), a.$slide.on("touchmove.lg", function (e) {
        a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
      }), a.$slide.on("touchend.lg", function () {
        a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
      }))
    }, b.prototype.enableDrag = function () {
      var b = this,
        c = 0,
        d = 0,
        e = !1,
        f = !1;
      b.s.enableDrag && !b.isTouch && b.doCss() && (b.$slide.on("mousedown.lg", function (d) {
        b.$outer.hasClass("lg-zoomed") || (a(d.target).hasClass("lg-object") || a(d.target).hasClass("lg-video-play")) && (d.preventDefault(), b.lgBusy || (b.manageSwipeClass(), c = d.pageX, e = !0, b.$outer.scrollLeft += 1, b.$outer.scrollLeft -= 1, b.$outer.removeClass("lg-grab").addClass("lg-grabbing"), b.$el.trigger("onDragstart.lg")))
      }), a(window).on("mousemove.lg", function (a) {
        e && (f = !0, d = a.pageX, b.touchMove(c, d), b.$el.trigger("onDragmove.lg"))
      }), a(window).on("mouseup.lg", function (g) {
        f ? (f = !1, b.touchEnd(d - c), b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"), e && (e = !1, b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
      }))
    }, b.prototype.manageSwipeClass = function () {
      var a = this.index + 1,
        b = this.index - 1;
      this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
    }, b.prototype.mousewheel = function () {
      var a = this;
      a.$outer.on("mousewheel.lg", function (b) {
        b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault())
      })
    }, b.prototype.closeGallery = function () {
      var b = this,
        c = !1;
      this.$outer.find(".lg-close").on("click.lg", function () {
        b.destroy()
      }), b.s.closable && (b.$outer.on("mousedown.lg", function (b) {
        c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
      }), b.$outer.on("mouseup.lg", function (d) {
        (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
      }))
    }, b.prototype.destroy = function (b) {
      var c = this;
      b || c.$el.trigger("onBeforeClose.lg"), a(window).scrollTop(c.prevScrollTop), b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(c.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function (a) {
        c.modules[a] && c.modules[a].destroy()
      }), this.lGalleryOn = !1, clearTimeout(c.hideBartimeout), this.hideBartimeout = !1, a(window).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), c.$outer && c.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function () {
        c.$outer && c.$outer.remove(), a(".lg-backdrop").remove(), b || c.$el.trigger("onCloseAfter.lg")
      }, c.s.backdropDuration + 50)
    }, a.fn.lightGallery = function (c) {
      return this.each(function () {
        if (a.data(this, "lightGallery")) try {
          a(this).data("lightGallery").init()
        } catch (a) {
          console.error("lightGallery has not initiated properly")
        } else a.data(this, "lightGallery", new b(this, c))
      })
    }, a.fn.lightGallery.modules = {}
  }()
});
! function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.lama = t()
}(this, function () {
  "use strict";
  function e(e, t) {
    var a = [],
      i = 0;
    if (e && !t && e instanceof r) return e;
    if (e)
      if ("string" == typeof e) {
        var s, n, o = e.trim();
        if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
          var l = "div";
          for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (n = document.createElement(l)).innerHTML = o, i = 0; i < n.childNodes.length; i += 1) a.push(n.childNodes[i])
        } else
          for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
      } else if (e.nodeType || e === window || e === document) a.push(e);
    else if (e.length > 0 && e[0].nodeType)
      for (i = 0; i < e.length; i += 1) a.push(e[i]);
    return new r(a)
  }
  function t(e) {
    for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
    return t
  }
  function a() {
    var e = "onwheel" in d;
    if (!e) {
      var t = d.createElement("div");
      t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
    }
    return !e && d.implementation && d.implementation.hasFeature && !0 !== d.implementation.hasFeature("", "") && (e = d.implementation.hasFeature("Events.wheel", "3.0")), e
  }
  var i, s = i = "undefined" == typeof window ? {
      navigator: {
        userAgent: ""
      },
      location: {},
      history: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {}
      },
      Image: function () {},
      Date: function () {},
      screen: {}
    } : window,
    r = function (e) {
      for (var t = this, a = 0; a < e.length; a += 1) t[a] = e[a];
      return t.length = e.length, this
    };
  e.fn = r.prototype, e.Class = r, e.Dom7 = r;
  "resize scroll".split(" ");
  var n = {
    addClass: function (e) {
      var t = this;
      if (void 0 === e) return this;
      for (var a = e.split(" "), i = 0; i < a.length; i += 1)
        for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.add(a[i]);
      return this
    },
    removeClass: function (e) {
      for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
        for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.remove(a[i]);
      return this
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e)
    },
    toggleClass: function (e) {
      for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
        for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.toggle(a[i]);
      return this
    },
    attr: function (e, t) {
      var a = arguments,
        i = this;
      if (1 !== arguments.length || "string" != typeof e) {
        for (var s = 0; s < this.length; s += 1)
          if (2 === a.length) i[s].setAttribute(e, t);
          else
            for (var r in e) i[s][r] = e[r], i[s].setAttribute(r, e[r]);
        return this
      }
      if (this[0]) return this[0].getAttribute(e)
    },
    removeAttr: function (e) {
      for (var t = this, a = 0; a < this.length; a += 1) t[a].removeAttribute(e);
      return this
    },
    data: function (e, t) {
      var a, i = this;
      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1)(a = i[s]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
        return this
      }
      if (a = this[0]) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
        var r = a.getAttribute("data-" + e);
        if (r) return r
      }
    },
    transform: function (e) {
      for (var t = this, a = 0; a < this.length; a += 1) {
        var i = t[a].style;
        i.webkitTransform = e, i.transform = e
      }
      return this
    },
    transition: function (e) {
      var t = this;
      "string" != typeof e && (e += "ms");
      for (var a = 0; a < this.length; a += 1) {
        var i = t[a].style;
        i.webkitTransitionDuration = e, i.transitionDuration = e
      }
      return this
    },
    on: function () {
      function t(t) {
        var a = t.target;
        if (a) {
          var i = t.target.dom7EventData || [];
          if (i.unshift(t), e(a).is(o)) l.apply(a, i);
          else
            for (var s = e(a).parents(), r = 0; r < s.length; r += 1) e(s[r]).is(o) && l.apply(s[r], i)
        }
      }
      function a(e) {
        var t = e && e.target ? e.target.dom7EventData || [] : [];
        t.unshift(e), l.apply(this, t)
      }
      for (var i = this, s = [], r = arguments.length; r--;) s[r] = arguments[r];
      var n = s[0],
        o = s[1],
        l = s[2],
        d = s[3];
      if ("function" == typeof s[1]) {
        var p;
        n = (p = s)[0], l = p[1], d = p[2], o = void 0
      }
      d || (d = !1);
      for (var c, u = n.split(" "), h = 0; h < this.length; h += 1) {
        var v = i[h];
        if (o)
          for (c = 0; c < u.length; c += 1) v.dom7LiveListeners || (v.dom7LiveListeners = []), v.dom7LiveListeners.push({
            type: n,
            listener: l,
            proxyListener: t
          }), v.addEventListener(u[c], t, d);
        else
          for (c = 0; c < u.length; c += 1) v.dom7Listeners || (v.dom7Listeners = []), v.dom7Listeners.push({
            type: n,
            listener: l,
            proxyListener: a
          }), v.addEventListener(u[c], a, d)
      }
      return this
    },
    off: function () {
      for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      var i = t[0],
        s = t[1],
        r = t[2],
        n = t[3];
      if ("function" == typeof t[1]) {
        var o;
        i = (o = t)[0], r = o[1], n = o[2], s = void 0
      }
      n || (n = !1);
      for (var l = i.split(" "), d = 0; d < l.length; d += 1)
        for (var p = 0; p < this.length; p += 1) {
          var c = e[p];
          if (s) {
            if (c.dom7LiveListeners)
              for (var u = 0; u < c.dom7LiveListeners.length; u += 1) r ? c.dom7LiveListeners[u].listener === r && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n) : c.dom7LiveListeners[u].type === l[d] && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n)
          } else if (c.dom7Listeners)
            for (var h = 0; h < c.dom7Listeners.length; h += 1) r ? c.dom7Listeners[h].listener === r && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n) : c.dom7Listeners[h].type === l[d] && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n)
        }
      return this
    },
    trigger: function () {
      for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      for (var i = t[0].split(" "), s = t[1], r = 0; r < i.length; r += 1)
        for (var n = 0; n < this.length; n += 1) {
          var o = void 0;
          try {
            o = new window.CustomEvent(i[r], {
              detail: s,
              bubbles: !0,
              cancelable: !0
            })
          } catch (e) {
            (o = document.createEvent("Event")).initEvent(i[r], !0, !0), o.detail = s
          }
          e[n].dom7EventData = t.filter(function (e, t) {
            return t > 0
          }), e[n].dispatchEvent(o), e[n].dom7EventData = [], delete e[n].dom7EventData
        }
      return this
    },
    transitionEnd: function (e) {
      function t(r) {
        if (r.target === this)
          for (e.call(this, r), a = 0; a < i.length; a += 1) s.off(i[a], t)
      }
      var a, i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      if (e)
        for (a = 0; a < i.length; a += 1) s.on(i[a], t);
      return this
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
      }
      return null
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
      }
      return null
    },
    offset: function () {
      if (this.length > 0) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          a = document.body,
          i = e.clientTop || a.clientTop || 0,
          s = e.clientLeft || a.clientLeft || 0,
          r = e === window ? window.scrollY : e.scrollTop,
          n = e === window ? window.scrollX : e.scrollLeft;
        return {
          top: t.top + r - i,
          left: t.left + n - s
        }
      }
      return null
    },
    css: function (e, t) {
      var a, i = this;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (var s in e) i[a].style[s] = e[s];
          return this
        }
        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) i[a].style[e] = t;
        return this
      }
      return this
    },
    each: function (e) {
      var t = this;
      if (!e) return this;
      for (var a = 0; a < this.length; a += 1)
        if (!1 === e.call(t[a], a, t[a])) return t;
      return this
    },
    html: function (e) {
      var t = this;
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var a = 0; a < this.length; a += 1) t[a].innerHTML = e;
      return this
    },
    text: function (e) {
      var t = this;
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var a = 0; a < this.length; a += 1) t[a].textContent = e;
      return this
    },
    is: function (t) {
      var a, i, s = this[0];
      if (!s || void 0 === t) return !1;
      if ("string" == typeof t) {
        if (s.matches) return s.matches(t);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
        if (s.msMatchesSelector) return s.msMatchesSelector(t);
        for (a = e(t), i = 0; i < a.length; i += 1)
          if (a[i] === s) return !0;
        return !1
      }
      if (t === document) return s === document;
      if (t === window) return s === window;
      if (t.nodeType || t instanceof r) {
        for (a = t.nodeType ? [t] : t, i = 0; i < a.length; i += 1)
          if (a[i] === s) return !0;
        return !1
      }
      return !1
    },
    index: function () {
      var e, t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
        return e
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t, a = this.length;
      return e > a - 1 ? new r([]) : e < 0 ? (t = a + e, new r(t < 0 ? [] : [this[t]])) : new r([this[e]])
    },
    append: function () {
      for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      for (var i, s = 0; s < t.length; s += 1) {
        i = t[s];
        for (var n = 0; n < this.length; n += 1)
          if ("string" == typeof i) {
            var o = document.createElement("div");
            for (o.innerHTML = i; o.firstChild;) e[n].appendChild(o.firstChild)
          } else if (i instanceof r)
          for (var l = 0; l < i.length; l += 1) e[n].appendChild(i[l]);
        else e[n].appendChild(i)
      }
      return this
    },
    prepend: function (e) {
      var t, a, i = this;
      for (t = 0; t < this.length; t += 1)
        if ("string" == typeof e) {
          var s = document.createElement("div");
          for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) i[t].insertBefore(s.childNodes[a], i[t].childNodes[0])
        } else if (e instanceof r)
        for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]);
      else i[t].insertBefore(e, i[t].childNodes[0]);
      return this
    },
    next: function (t) {
      return new r(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
    },
    nextAll: function (t) {
      var a = [],
        i = this[0];
      if (!i) return new r([]);
      for (; i.nextElementSibling;) {
        var s = i.nextElementSibling;
        t ? e(s).is(t) && a.push(s) : a.push(s), i = s
      }
      return new r(a)
    },
    prev: function (t) {
      if (this.length > 0) {
        var a = this[0];
        return new r(t ? a.previousElementSibling && e(a.previousElementSibling).is(t) ? [a.previousElementSibling] : [] : a.previousElementSibling ? [a.previousElementSibling] : [])
      }
      return new r([])
    },
    prevAll: function (t) {
      var a = [],
        i = this[0];
      if (!i) return new r([]);
      for (; i.previousElementSibling;) {
        var s = i.previousElementSibling;
        t ? e(s).is(t) && a.push(s) : a.push(s), i = s
      }
      return new r(a)
    },
    parent: function (a) {
      for (var i = this, s = [], r = 0; r < this.length; r += 1) null !== i[r].parentNode && (a ? e(i[r].parentNode).is(a) && s.push(i[r].parentNode) : s.push(i[r].parentNode));
      return e(t(s))
    },
    parents: function (a) {
      for (var i = this, s = [], r = 0; r < this.length; r += 1)
        for (var n = i[r].parentNode; n;) a ? e(n).is(a) && s.push(n) : s.push(n), n = n.parentNode;
      return e(t(s))
    },
    closest: function (e) {
      var t = this;
      return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
    },
    find: function (e) {
      for (var t = this, a = [], i = 0; i < this.length; i += 1)
        for (var s = t[i].querySelectorAll(e), n = 0; n < s.length; n += 1) a.push(s[n]);
      return new r(a)
    },
    children: function (a) {
      for (var i = this, s = [], n = 0; n < this.length; n += 1)
        for (var o = i[n].childNodes, l = 0; l < o.length; l += 1) a ? 1 === o[l].nodeType && e(o[l]).is(a) && s.push(o[l]) : 1 === o[l].nodeType && s.push(o[l]);
      return new r(t(s))
    },
    remove: function () {
      for (var e = this, t = 0; t < this.length; t += 1) e[t].parentNode && e[t].parentNode.removeChild(e[t]);
      return this
    },
    add: function () {
      for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
      var i, s, r = this;
      for (i = 0; i < t.length; i += 1) {
        var n = e(t[i]);
        for (s = 0; s < n.length; s += 1) r[r.length] = n[s], r.length += 1
      }
      return r
    },
    styles: function () {
      return this[0] ? window.getComputedStyle(this[0], null) : {}
    }
  };
  Object.keys(n).forEach(function (t) {
    e.fn[t] = n[t]
  });
  var o, l = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        })
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      },
      now: function () {
        return Date.now()
      },
      getTranslate: function (e, t) {
        void 0 === t && (t = "x");
        var a, i, r, n = s.getComputedStyle(e, null);
        return s.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
          return e.replace(",", ".")
        }).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : a = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
      },
      parseUrlQuery: function (e) {
        var t, a, i, r, n = {},
          o = e || s.location.href;
        if ("string" == typeof o && o.length)
          for (r = (a = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
              return "" !== e
            })).length, t = 0; t < r; t += 1) i = a[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
        return n
      },
      isObject: function (e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i];
          if (void 0 !== s && null !== s)
            for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
              var d = r[n],
                p = Object.getOwnPropertyDescriptor(s, d);
              void 0 !== p && p.enumerable && (l.isObject(a[d]) && l.isObject(s[d]) ? l.extend(a[d], s[d]) : !l.isObject(a[d]) && l.isObject(s[d]) ? (a[d] = {}, l.extend(a[d], s[d])) : a[d] = s[d])
            }
        }
        return a
      }
    },
    d = o = "undefined" == typeof document ? {
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: {
        blur: function () {},
        nodeName: ""
      },
      querySelector: function () {
        return {}
      },
      querySelectorAll: function () {
        return []
      },
      createElement: function () {
        return {
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return []
          }
        }
      },
      location: {
        hash: ""
      }
    } : document,
    p = {
      touch: s.Modernizr && !0 === s.Modernizr.touch || !!("ontouchstart" in s || s.DocumentTouch && d instanceof s.DocumentTouch),
      transforms3d: s.Modernizr && !0 === s.Modernizr.csstransforms3d || function () {
        var e = d.createElement("div").style;
        return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
      }(),
      flexbox: function () {
        for (var e = d.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
          if (t[a] in e) return !0;
        return !1
      }(),
      observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
      passiveListener: function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0
            }
          });
          s.addEventListener("testPassiveListener", null, t)
        } catch (e) {}
        return e
      }(),
      gestures: "ongesturestart" in s
    },
    c = function (e) {
      void 0 === e && (e = {});
      var t = this;
      t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
        t.on(e, t.params.on[e])
      })
    },
    u = {
      components: {}
    };
  c.prototype.on = function (e, t) {
    var a = this;
    return "function" != typeof t ? a : (e.split(" ").forEach(function (e) {
      a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e].push(t)
    }), a)
  }, c.prototype.once = function (e, t) {
    function a() {
      for (var s = [], r = arguments.length; r--;) s[r] = arguments[r];
      t.apply(i, s), i.off(e, a)
    }
    var i = this;
    return "function" != typeof t ? i : i.on(e, a)
  }, c.prototype.off = function (e, t) {
    var a = this;
    return e.split(" ").forEach(function (e) {
      void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e].forEach(function (i, s) {
        i === t && a.eventsListeners[e].splice(s, 1)
      })
    }), a
  }, c.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var a = this;
    if (!a.eventsListeners) return a;
    var i, s, r;
    return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), r = a) : (i = e[0].events, s = e[0].data, r = e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
      if (a.eventsListeners[e]) {
        var t = [];
        a.eventsListeners[e].forEach(function (e) {
          t.push(e)
        }), t.forEach(function (e) {
          e.apply(r, s)
        })
      }
    }), a
  }, c.prototype.useModulesParams = function (e) {
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (a) {
      var i = t.modules[a];
      i.params && l.extend(e, i.params)
    })
  }, c.prototype.useModules = function (e) {
    void 0 === e && (e = {});
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (a) {
      var i = t.modules[a],
        s = e[a] || {};
      i.instance && Object.keys(i.instance).forEach(function (e) {
        var a = i.instance[e];
        t[e] = "function" == typeof a ? a.bind(t) : a
      }), i.on && t.on && Object.keys(i.on).forEach(function (e) {
        t.on(e, i.on[e])
      }), i.create && i.create.bind(t)(s)
    })
  }, u.components.set = function (e) {
    var t = this;
    t.use && t.use(e)
  }, c.installModule = function (e) {
    for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
    var i = this;
    i.prototype.modules || (i.prototype.modules = {});
    var s = e.name || Object.keys(i.prototype.modules).length + "_" + l.now();
    return i.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
      i.prototype[t] = e.proto[t]
    }), e.static && Object.keys(e.static).forEach(function (t) {
      i[t] = e.static[t]
    }), e.install && e.install.apply(i, t), i
  }, c.use = function (e) {
    for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
    var i = this;
    return Array.isArray(e) ? (e.forEach(function (e) {
      return i.installModule(e)
    }), i) : i.installModule.apply(i, [e].concat(t))
  }, Object.defineProperties(c, u);
  var h = {
      updateSize: function () {
        var e, t, a = this,
          i = a.$el;
        e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), l.extend(a, {
          width: e,
          height: t,
          size: a.isHorizontal() ? e : t
        }))
      },
      updateSlides: function () {
        var e = this,
          t = e.params,
          a = e.$wrapperEl,
          i = e.size,
          s = e.rtl,
          r = e.wrongRTL,
          n = a.children("." + e.params.slideClass),
          o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : n.length,
          d = [],
          c = [],
          u = [],
          h = t.slidesOffsetBefore;
        "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
        var v = t.slidesOffsetAfter;
        "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
        var f = o,
          m = e.snapGrid.length,
          g = e.snapGrid.length,
          b = t.spaceBetween,
          w = -h,
          y = 0,
          x = 0;
        if (void 0 !== i) {
          "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i), e.virtualSize = -b, s ? n.css({
            marginLeft: "",
            marginTop: ""
          }) : n.css({
            marginRight: "",
            marginBottom: ""
          });
          var T;
          t.slidesPerColumn > 1 && (T = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
          for (var E, S = t.slidesPerColumn, C = T / S, M = C - (t.slidesPerColumn * C - o), z = 0; z < o; z += 1) {
            E = 0;
            var P = n.eq(z);
            if (t.slidesPerColumn > 1) {
              var k = void 0,
                $ = void 0,
                I = void 0;
              "column" === t.slidesPerColumnFill ? (I = z - ($ = Math.floor(z / S)) * S, ($ > M || $ === M && I === S - 1) && (I += 1) >= S && (I = 0, $ += 1), k = $ + I * T / S, P.css({
                "-webkit-box-ordinal-group": k,
                "-moz-box-ordinal-group": k,
                "-ms-flex-order": k,
                "-webkit-order": k,
                order: k
              })) : $ = z - (I = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px").attr("data-lama-column", $).attr("data-lama-row", I)
            }
            "none" !== P.css("display") && ("auto" === t.slidesPerView ? (E = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0), t.roundLengths && (E = Math.floor(E))) : (E = (i - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), n[z] && (e.isHorizontal() ? n[z].style.width = E + "px" : n[z].style.height = E + "px")), n[z] && (n[z].lamaSlideSize = E), u.push(E), t.centeredSlides ? (w = w + E / 2 + y / 2 + b, 0 === y && 0 !== z && (w = w - i / 2 - b), 0 === z && (w = w - i / 2 - b), Math.abs(w) < .001 && (w = 0), x % t.slidesPerGroup == 0 && d.push(w), c.push(w)) : (x % t.slidesPerGroup == 0 && d.push(w), c.push(w), w = w + E + b), e.virtualSize += E + b, y = E, x += 1)
          }
          e.virtualSize = Math.max(e.virtualSize, i) + v;
          var L;
          if (s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
              width: e.virtualSize + t.spaceBetween + "px"
            }), p.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
              width: e.virtualSize + t.spaceBetween + "px"
            }) : a.css({
              height: e.virtualSize + t.spaceBetween + "px"
            })), t.slidesPerColumn > 1 && (e.virtualSize = (E + t.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
              width: e.virtualSize + t.spaceBetween + "px"
            }) : a.css({
              height: e.virtualSize + t.spaceBetween + "px"
            }), t.centeredSlides)) {
            L = [];
            for (var D = 0; D < d.length; D += 1) d[D] < e.virtualSize + d[0] && L.push(d[D]);
            d = L
          }
          if (!t.centeredSlides) {
            L = [];
            for (var O = 0; O < d.length; O += 1) d[O] <= e.virtualSize - i && L.push(d[O]);
            d = L, Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i)
          }
          0 === d.length && (d = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? n.css({
            marginLeft: b + "px"
          }) : n.css({
            marginRight: b + "px"
          }) : n.css({
            marginBottom: b + "px"
          })), l.extend(e, {
            slides: n,
            snapGrid: d,
            slidesGrid: c,
            slidesSizesGrid: u
          }), o !== f && e.emit("slidesLengthChange"), d.length !== m && e.emit("snapGridLengthChange"), c.length !== g && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
        }
      },
      updateAutoHeight: function () {
        var e, t = this,
          a = [],
          i = 0;
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
            var s = t.activeIndex + e;
            if (s > t.slides.length) break;
            a.push(t.slides.eq(s)[0])
          } else a.push(t.slides.eq(t.activeIndex)[0]);
        for (e = 0; e < a.length; e += 1)
          if (void 0 !== a[e]) {
            var r = a[e].offsetHeight;
            i = r > i ? r : i
          }
        i && t.$wrapperEl.css("height", i + "px")
      },
      updateSlidesOffset: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) t[a].lamaSlideOffset = e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = this.translate || 0);
        var t = this,
          a = t.params,
          i = t.slides,
          s = t.rtl;
        if (0 !== i.length) {
          void 0 === i[0].lamaSlideOffset && t.updateSlidesOffset();
          var r = -e;
          s && (r = e), i.removeClass(a.slideVisibleClass);
          for (var n = 0; n < i.length; n += 1) {
            var o = i[n],
              l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.lamaSlideOffset) / (o.lamaSlideSize + a.spaceBetween);
            if (a.watchSlidesVisibility) {
              var d = -(r - o.lamaSlideOffset),
                p = d + t.slidesSizesGrid[n];
              (d >= 0 && d < t.size || p > 0 && p <= t.size || d <= 0 && p >= t.size) && i.eq(n).addClass(a.slideVisibleClass)
            }
            o.progress = s ? -l : l
          }
        }
      },
      updateProgress: function (e) {
        void 0 === e && (e = this.translate || 0);
        var t = this,
          a = t.params,
          i = t.maxTranslate() - t.minTranslate(),
          s = t.progress,
          r = t.isBeginning,
          n = t.isEnd,
          o = r,
          d = n;
        0 === i ? (s = 0, r = !0, n = !0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = s >= 1), l.extend(t, {
          progress: s,
          isBeginning: r,
          isEnd: n
        }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", s)
      },
      updateSlidesClasses: function () {
        var e = this,
          t = e.slides,
          a = e.params,
          i = e.$wrapperEl,
          s = e.activeIndex,
          r = e.realIndex,
          n = e.virtual && a.virtual.enabled;
        t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass);
        var o;
        (o = n ? e.$wrapperEl.find("." + a.slideClass + '[data-lama-slide-index="' + s + '"]') : t.eq(s)).addClass(a.slideActiveClass), a.loop && (o.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-lama-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-lama-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));
        var l = o.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
        a.loop && 0 === l.length && (l = t.eq(0)).addClass(a.slideNextClass);
        var d = o.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
        a.loop && 0 === d.length && (d = t.eq(-1)).addClass(a.slidePrevClass), a.loop && (l.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-lama-slide-index="' + l.attr("data-lama-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-lama-slide-index="' + l.attr("data-lama-slide-index") + '"]').addClass(a.slideDuplicateNextClass), d.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-lama-slide-index="' + d.attr("data-lama-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-lama-slide-index="' + d.attr("data-lama-slide-index") + '"]').addClass(a.slideDuplicatePrevClass))
      },
      updateActiveIndex: function (e) {
        var t, a = this,
          i = a.rtl ? a.translate : -a.translate,
          s = a.slidesGrid,
          r = a.snapGrid,
          n = a.params,
          o = a.activeIndex,
          d = a.realIndex,
          p = a.snapIndex,
          c = e;
        if (void 0 === c) {
          for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? c = u : i >= s[u] && i < s[u + 1] && (c = u + 1) : i >= s[u] && (c = u);
          n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
        }
        if ((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(c / n.slidesPerGroup)) >= r.length && (t = r.length - 1), c !== o) {
          var h = parseInt(a.slides.eq(c).attr("data-lama-slide-index") || c, 10);
          l.extend(a, {
            snapIndex: t,
            realIndex: h,
            previousIndex: o,
            activeIndex: c
          }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), d !== h && a.emit("realIndexChange"), a.emit("slideChange")
        } else t !== p && (a.snapIndex = t, a.emit("snapIndexChange"))
      },
      updateClickedSlide: function (t) {
        var a = this,
          i = a.params,
          s = e(t.target).closest("." + i.slideClass)[0],
          r = !1;
        if (s)
          for (var n = 0; n < a.slides.length; n += 1) a.slides[n] === s && (r = !0);
        if (!s || !r) return a.clickedSlide = void 0, void(a.clickedIndex = void 0);
        a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(e(s).attr("data-lama-slide-index"), 10) : a.clickedIndex = e(s).index(), i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
      }
    },
    v = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this,
          a = t.params,
          i = t.rtl,
          s = t.translate,
          r = t.$wrapperEl;
        if (a.virtualTranslate) return i ? -s : s;
        var n = l.getTranslate(r[0], e);
        return i && (n = -n), n || 0
      },
      setTranslate: function (e, t) {
        var a = this,
          i = a.rtl,
          s = a.params,
          r = a.$wrapperEl,
          n = a.progress,
          o = 0,
          l = 0;
        a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (p.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.translate = a.isHorizontal() ? o : l;
        var d = a.maxTranslate() - a.minTranslate();
        (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
      },
      minTranslate: function () {
        return -this.snapGrid[0]
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1]
      }
    },
    f = {
      setTransition: function (e, t) {
        var a = this;
        a.$wrapperEl.transition(e), a.emit("setTransition", e, t)
      },
      transitionStart: function (e) {
        void 0 === e && (e = !0);
        var t = this,
          a = t.activeIndex,
          i = t.params,
          s = t.previousIndex;
        i.autoHeight && t.updateAutoHeight(), t.emit("transitionStart"), e && a !== s && (t.emit("slideChangeTransitionStart"), a > s ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
      },
      transitionEnd: function (e) {
        void 0 === e && (e = !0);
        var t = this,
          a = t.activeIndex,
          i = t.previousIndex;
        t.animating = !1, t.setTransition(0), t.emit("transitionEnd"), e && a !== i && (t.emit("slideChangeTransitionEnd"), a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
      }
    },
    m = function () {
      return {
        isSafari: function () {
          var e = s.navigator.userAgent.toLowerCase();
          return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),
        ie: s.navigator.pointerEnabled || s.navigator.msPointerEnabled,
        ieTouch: s.navigator.msPointerEnabled && s.navigator.msMaxTouchPoints > 1 || s.navigator.pointerEnabled && s.navigator.maxTouchPoints > 1,
        lteIE9: function () {
          var e = d.createElement("div");
          return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
        }()
      }
    }(),
    g = {
      slideTo: function (e, t, a, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
        var s = this,
          r = e;
        r < 0 && (r = 0);
        var n = s.params,
          o = s.snapGrid,
          l = s.slidesGrid,
          d = s.previousIndex,
          p = s.activeIndex,
          c = s.rtl,
          u = s.$wrapperEl,
          h = Math.floor(r / n.slidesPerGroup);
        h >= o.length && (h = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
        var v = -o[h];
        if (s.updateProgress(v), n.normalizeSlideIndex)
          for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
        return !(!s.allowSlideNext && v < s.translate && v < s.minTranslate() || !s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r || (c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), 1) : (0 === t || m.lteIE9 ? (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.transitionEnd(a)) : (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.animating || (s.animating = !0, u.transitionEnd(function () {
          s && !s.destroyed && s.transitionEnd(a)
        }))), 0)))
      },
      slideNext: function (e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
          s = i.params,
          r = i.animating;
        return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
      },
      slidePrev: function (e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
          s = i.params,
          r = i.animating;
        return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a)
      },
      slideReset: function (e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this;
        return i.slideTo(i.activeIndex, e, t, a)
      },
      slideToClickedSlide: function () {
        var t, a = this,
          i = a.params,
          s = a.$wrapperEl,
          r = "auto" === i.slidesPerView ? a.slidesPerViewDynamic() : i.slidesPerView,
          n = a.clickedIndex;
        if (i.loop) {
          if (a.animating) return;
          t = parseInt(e(a.clickedSlide).attr("data-lama-slide-index"), 10), i.centeredSlides ? n < a.loopedSlides - r / 2 || n > a.slides.length - a.loopedSlides + r / 2 ? (a.loopFix(), n = s.children("." + i.slideClass + '[data-lama-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function () {
            a.slideTo(n)
          })) : a.slideTo(n) : n > a.slides.length - r ? (a.loopFix(), n = s.children("." + i.slideClass + '[data-lama-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function () {
            a.slideTo(n)
          })) : a.slideTo(n)
        } else a.slideTo(n)
      }
    },
    b = {
      loopCreate: function () {
        var t = this,
          a = t.params,
          i = t.$wrapperEl;
        i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
        var s = i.children("." + a.slideClass);
        if (a.loopFillGroupWithBlank) {
          var r = a.slidesPerGroup - s.length % a.slidesPerGroup;
          if (r !== a.slidesPerGroup) {
            for (var n = 0; n < r; n += 1) {
              var o = e(d.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
              i.append(o)
            }
            s = i.children("." + a.slideClass)
          }
        }
        "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10), t.loopedSlides += a.loopAdditionalSlides, t.loopedSlides > s.length && (t.loopedSlides = s.length);
        var l = [],
          p = [];
        s.each(function (a, i) {
          var r = e(i);
          a < t.loopedSlides && p.push(i), a < s.length && a >= s.length - t.loopedSlides && l.push(i), r.attr("data-lama-slide-index", a)
        });
        for (var c = 0; c < p.length; c += 1) i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
        for (var u = l.length - 1; u >= 0; u -= 1) i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass))
      },
      loopFix: function () {
        var e, t = this,
          a = t.params,
          i = t.activeIndex,
          s = t.slides,
          r = t.loopedSlides,
          n = t.allowSlidePrev,
          o = t.allowSlideNext;
        t.allowSlidePrev = !0, t.allowSlideNext = !0, i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0)) : ("auto" === a.slidesPerView && i >= 2 * r || i > s.length - 2 * a.slidesPerView) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0)), t.allowSlidePrev = n, t.allowSlideNext = o
      },
      loopDestroy: function () {
        var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides;
        t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(), i.removeAttr("data-lama-slide-index")
      }
    },
    w = {
      setGrabCursor: function (e) {
        var t = this;
        if (!p.touch && t.params.simulateTouch) {
          var a = t.el;
          a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab"
        }
      },
      unsetGrabCursor: function () {
        var e = this;
        p.touch || (e.el.style.cursor = "")
      }
    },
    y = {
      appendSlide: function (e) {
        var t = this,
          a = t.$wrapperEl,
          i = t.params;
        if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
          for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
        else a.append(e);
        i.loop && t.loopCreate(), i.observer && p.observer || t.update()
      },
      prependSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
          r = s + e.length
        } else i.prepend(e);
        a.loop && t.loopCreate(), a.observer && p.observer || t.update(), t.slideTo(r, 0, !1)
      },
      removeSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && (t.loopDestroy(), t.slides = i.children("." + a.slideClass));
        var r, n = s;
        if ("object" == typeof e && "length" in e) {
          for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
          n = Math.max(n, 0)
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
        a.loop && t.loopCreate(), a.observer && p.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
      },
      removeAllSlides: function () {
        for (var e = this, t = [], a = 0; a < e.slides.length; a += 1) t.push(a);
        e.removeSlide(t)
      }
    },
    x = function () {
      var e = s.navigator.userAgent,
        t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: s.cordova || s.phonegap,
          phonegap: s.cordova || s.phonegap
        },
        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        r = e.match(/(iPad).*OS\s([\d_]+)/),
        n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || o || n) && (t.os = "ios", t.ios = !0), o && !n && (t.osVersion = o[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), n && (t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (o || r || n) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
        var l = t.osVersion.split("."),
          p = d.querySelector('meta[name="viewport"]');
        t.minimalUi = !t.webView && (n || o) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && p && p.getAttribute("content").indexOf("minimal-ui") >= 0
      }
      return t.pixelRatio = s.devicePixelRatio || 1, t
    }(),
    T = function (t) {
      var a = this,
        i = a.touchEventsData,
        s = a.params,
        r = a.touches,
        n = t;
      if (n.originalEvent && (n = n.originalEvent), i.isTouchEvent = "touchstart" === n.type, (i.isTouchEvent || !("which" in n) || 3 !== n.which) && (!i.isTouched || !i.isMoved))
        if (s.noSwiping && e(n.target).closest("." + s.noSwipingClass)[0]) a.allowClick = !0;
        else if (!s.swipeHandler || e(n).closest(s.swipeHandler)[0]) {
        r.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX, r.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY;
        var o = r.currentX,
          p = r.currentY;
        if (!(x.ios && !x.cordova && s.iOSEdgeSwipeDetection && o <= s.iOSEdgeSwipeThreshold && o >= window.screen.width - s.iOSEdgeSwipeThreshold)) {
          if (l.extend(i, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0
            }), r.startX = o, r.startY = p, i.touchStartTime = l.now(), a.allowClick = !0, a.updateSize(), a.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== n.type) {
            var c = !0;
            e(n.target).is(i.formElements) && (c = !1), d.activeElement && e(d.activeElement).is(i.formElements) && d.activeElement.blur(), c && a.allowTouchMove && n.preventDefault()
          }
          a.emit("touchStart", n)
        }
      }
    },
    E = function (t) {
      var a = this,
        i = a.touchEventsData,
        s = a.params,
        r = a.touches,
        n = a.rtl,
        o = t;
      if (o.originalEvent && (o = o.originalEvent), !i.isTouchEvent || "mousemove" !== o.type) {
        var p = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
          c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
        if (o.preventedByNestedlama) return r.startX = p, void(r.startY = c);
        if (!a.allowTouchMove) return a.allowClick = !1, void(i.isTouched && (l.extend(r, {
          startX: p,
          startY: c,
          currentX: p,
          currentY: c
        }), i.touchStartTime = l.now()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (a.isVertical()) {
            if (c < r.startY && a.translate <= a.maxTranslate() || c > r.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else if (p < r.startX && a.translate <= a.maxTranslate() || p > r.startX && a.translate >= a.minTranslate()) return;
        if (i.isTouchEvent && d.activeElement && o.target === d.activeElement && e(o.target).is(i.formElements)) return i.isMoved = !0, void(a.allowClick = !1);
        if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
          r.currentX = p, r.currentY = c;
          var u = r.currentX - r.startX,
            h = r.currentY - r.startY;
          if (void 0 === i.isScrolling) {
            var v;
            a.isHorizontal() && r.currentY === r.startY || a.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : u * u + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle)
          }
          if (i.isScrolling && a.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isTouched)
            if (i.isScrolling) i.isTouched = !1;
            else if (i.startMoving) {
            a.allowClick = !1, o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
            var f = a.isHorizontal() ? u : h;
            r.diff = f, f *= s.touchRatio, n && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
            var m = !0,
              g = s.resistanceRatio;
            if (s.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > a.minTranslate() ? (m = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < a.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, g))), m && (o.preventedByNestedlama = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
              if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
              if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
            }
            s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
              position: r[a.isHorizontal() ? "startX" : "startY"],
              time: i.touchStartTime
            }), i.velocities.push({
              position: r[a.isHorizontal() ? "currentX" : "currentY"],
              time: l.now()
            })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate))
          }
        }
      }
    },
    S = function (e) {
      var t = this,
        a = t.touchEventsData,
        i = t.params,
        s = t.touches,
        r = t.rtl,
        n = t.$wrapperEl,
        o = t.slidesGrid,
        d = t.snapGrid,
        p = e;
      if (p.originalEvent && (p = p.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", p), a.allowTouchCallbacks = !1, a.isTouched) {
        i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var c = l.now(),
          u = c - a.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(p), t.emit("tap", p), u < 300 && c - a.lastClickTime > 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = l.nextTick(function () {
            t && !t.destroyed && t.emit("click", p)
          }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", p))), a.lastClickTime = l.now(), l.nextTick(function () {
            t.destroyed || (t.allowClick = !0)
          }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, void(a.isMoved = !1);
        a.isTouched = !1, a.isMoved = !1;
        var h;
        if (h = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
          if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (h > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
          if (i.freeModeMomentum) {
            if (a.velocities.length > 1) {
              var v = a.velocities.pop(),
                f = a.velocities.pop(),
                m = v.position - f.position,
                g = v.time - f.time;
              t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || l.now() - v.time > 300) && (t.velocity = 0)
            } else t.velocity = 0;
            t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
            var b = 1e3 * i.freeModeMomentumRatio,
              w = t.velocity * b,
              y = t.translate + w;
            r && (y = -y);
            var x, T = !1,
              E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E), x = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.maxTranslate();
            else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E), x = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.minTranslate();
            else if (i.freeModeSticky) {
              for (var S, C = 0; C < d.length; C += 1)
                if (d[C] > -y) {
                  S = C;
                  break
                }
              y = -(y = Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) || "next" === t.swipeDirection ? d[S] : d[S - 1])
            }
            if (0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
            else if (i.freeModeSticky) return void t.slideReset();
            i.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(x), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd()
              }))
            })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating || (t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd()
            }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
          }(!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        } else {
          for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? h >= o[P] && h < o[P + i.slidesPerGroup] && (M = P, z = o[P + i.slidesPerGroup] - o[P]) : h >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
          var k = (h - o[M]) / z;
          if (u > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
          } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
          }
        }
      }
    },
    C = function () {
      var e = this,
        t = e.params,
        a = e.el;
      if (!a || 0 !== a.offsetWidth) {
        t.breakpoints && e.setBreakpoint();
        var i = e.allowSlideNext,
          s = e.allowSlidePrev;
        if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
          var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
          e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
        } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
        e.allowSlidePrev = s, e.allowSlideNext = i
      }
    },
    M = function (e) {
      var t = this;
      t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    },
    z = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      iOSEdgeSwipeDetection: !1,
      iOSEdgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "lama-no-swiping",
      passiveListeners: !0,
      containerModifierClass: "lama-container-",
      slideClass: "lama-slide",
      slideBlankClass: "lama-slide-invisible-blank",
      slideActiveClass: "lama-slide-active",
      slideDuplicateActiveClass: "lama-slide-duplicate-active",
      slideVisibleClass: "lama-slide-visible",
      slideDuplicateClass: "lama-slide-duplicate",
      slideNextClass: "lama-slide-next",
      slideDuplicateNextClass: "lama-slide-duplicate-next",
      slidePrevClass: "lama-slide-prev",
      slideDuplicatePrevClass: "lama-slide-duplicate-prev",
      wrapperClass: "lama-wrapper",
      runCallbacksOnInit: !0
    },
    P = {
      update: h,
      translate: v,
      transition: f,
      slide: g,
      loop: b,
      grabCursor: w,
      manipulation: y,
      events: {
        attachEvents: function () {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl;
          e.onTouchStart = T.bind(e), e.onTouchMove = E.bind(e), e.onTouchEnd = S.bind(e), e.onClick = M.bind(e);
          var r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (m.ie) r.addEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).addEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).addEventListener(a.end, e.onTouchEnd, !1);
          else {
            if (p.touch) {
              var o = !("touchstart" !== a.start || !p.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              r.addEventListener(a.start, e.onTouchStart, o, {passive: true}), r.addEventListener(a.move, e.onTouchMove, p.passiveListener ? {
                passive: !1,
                capture: n
              } : n), r.addEventListener(a.end, e.onTouchEnd, o)
            }(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), d.addEventListener("mousemove", e.onTouchMove, n), d.addEventListener("mouseup", e.onTouchEnd, !1))
          }(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", C)
        },
        detachEvents: function () {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (m.ie) r.removeEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).removeEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).removeEventListener(a.end, e.onTouchEnd, !1);
          else {
            if (p.touch) {
              var o = !("onTouchStart" !== a.start || !p.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
            }(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), d.removeEventListener("mousemove", e.onTouchMove, n), d.removeEventListener("mouseup", e.onTouchEnd, !1))
          }(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", C)
        }
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            a = e.loopedSlides;
          void 0 === a && (a = 0);
          var i = e.params,
            s = i.breakpoints;
          if (s && (!s || 0 !== Object.keys(s).length)) {
            var r = e.getBreakpoint(s);
            if (r && e.currentBreakpoint !== r) {
              var n = r in s ? s[r] : e.originalParams,
                o = i.loop && n.slidesPerView !== i.slidesPerView;
              l.extend(e.params, n), l.extend(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), e.currentBreakpoint = r, o && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", n)
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var t = !1,
              a = [];
            Object.keys(e).forEach(function (e) {
              a.push(e)
            }), a.sort(function (e, t) {
              return parseInt(e, 10) - parseInt(t, 10)
            });
            for (var i = 0; i < a.length; i += 1) {
              var r = a[i];
              r >= s.innerWidth && !t && (t = r)
            }
            return t || "max"
          }
        }
      },
      classes: {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            a = e.params,
            i = e.rtl,
            r = e.$el,
            n = [];
          n.push(a.direction), a.freeMode && n.push("free-mode"), p.flexbox || n.push("no-flexbox"), a.autoHeight && n.push("autoheight"), i && n.push("rtl"), a.slidesPerColumn > 1 && n.push("multirow"), x.android && n.push("android"), x.ios && n.push("ios"), (s.navigator.pointerEnabled || s.navigator.msPointerEnabled) && n.push("wp8-" + a.direction), n.forEach(function (e) {
            t.push(a.containerModifierClass + e)
          }), r.addClass(t.join(" "))
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            a = e.classNames;
          t.removeClass(a.join(" "))
        }
      },
      images: {
        loadImage: function (e, t, a, i, r, n) {
          function o() {
            n && n()
          }
          var l;
          e.complete && r ? o() : t ? ((l = new s.Image).onload = o, l.onerror = o, i && (l.sizes = i), a && (l.srcset = a), t && (l.src = t)) : o()
        },
        preloadImages: function () {
          var e = this;
          e.imagesToLoad = e.$el.find("img");
          for (var t = 0; t < e.imagesToLoad.length; t += 1) {
            var a = e.imagesToLoad[t];
            e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, function () {
              void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
            })
          }
        }
      }
    },
    k = {},
    $ = function (t) {
      function a() {
        for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
        var n, o;
        if (1 === i.length && i[0].constructor && i[0].constructor === Object) o = i[0];
        else {
          var d;
          n = (d = i)[0], o = d[1]
        }
        o || (o = {}), o = l.extend({}, o), n && !o.el && (o.el = n), t.call(this, o), Object.keys(P).forEach(function (e) {
          Object.keys(P[e]).forEach(function (t) {
            a.prototype[t] || (a.prototype[t] = P[e][t])
          })
        });
        var c = this;
        void 0 === c.modules && (c.modules = {}), Object.keys(c.modules).forEach(function (e) {
          var t = c.modules[e];
          if (t.params) {
            var a = Object.keys(t.params)[0],
              i = t.params[a];
            if ("object" != typeof i) return;
            if (!(a in o && "enabled" in i)) return;
            !0 === o[a] && (o[a] = {
              enabled: !0
            }), "object" != typeof o[a] || "enabled" in o[a] || (o[a].enabled = !0), o[a] || (o[a] = {
              enabled: !1
            })
          }
        });
        var u = l.extend({}, z);
        c.useModulesParams(u), c.params = l.extend({}, u, k, o), c.originalParams = l.extend({}, c.params), c.passedParams = l.extend({}, o);
        var h = e(c.params.el);
        if (n = h[0]) {
          if (h.length > 1) {
            var v = [];
            return h.each(function (e, t) {
              var i = l.extend({}, o, {
                el: t
              });
              v.push(new a(i))
            }), v
          }
          n.lama = c, h.data("lama", c);
          var f = h.children("." + c.params.wrapperClass);
          return l.extend(c, {
            $el: h,
            el: n,
            $wrapperEl: f,
            wrapperEl: f[0],
            classNames: [],
            slides: e(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function () {
              return "horizontal" === c.params.direction
            },
            isVertical: function () {
              return "vertical" === c.params.direction
            },
            rtl: "horizontal" === c.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction")),
            wrongRTL: "-webkit-box" === f.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: c.params.allowSlideNext,
            allowSlidePrev: c.params.allowSlidePrev,
            touchEvents: function () {
              var e = ["touchstart", "touchmove", "touchend"],
                t = ["mousedown", "mousemove", "mouseup"];
              return s.navigator.pointerEnabled ? t = ["pointerdown", "pointermove", "pointerup"] : s.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]), {
                start: p.touch || !c.params.simulateTouch ? e[0] : t[0],
                move: p.touch || !c.params.simulateTouch ? e[1] : t[1],
                end: p.touch || !c.params.simulateTouch ? e[2] : t[2]
              }
            }(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video",
              lastClickTime: l.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: c.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), c.useModules(), c.params.init && c.init(), c
        }
      }
      t && (a.__proto__ = t), a.prototype = Object.create(t && t.prototype), a.prototype.constructor = a;
      var i = {
        extendedDefaults: {},
        defaults: {},
        Class: {},
        $: {}
      };
      return a.prototype.slidesPerViewDynamic = function () {
        var e = this,
          t = e.params,
          a = e.slides,
          i = e.slidesGrid,
          s = e.size,
          r = e.activeIndex,
          n = 1;
        if (t.centeredSlides) {
          for (var o, l = a[r].lamaSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, (l += a[d].lamaSlideSize) > s && (o = !0));
          for (var p = r - 1; p >= 0; p -= 1) a[p] && !o && (n += 1, (l += a[p].lamaSlideSize) > s && (o = !0))
        } else
          for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
        return n
      }, a.prototype.update = function () {
        function e() {
          a = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        var t = this;
        if (t && !t.destroyed) {
          t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
          var a;
          t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), t.emit("update")
        }
      }, a.prototype.init = function () {
        var e = this;
        e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
      }, a.prototype.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var a = this,
          i = a.params,
          s = a.$el,
          r = a.$wrapperEl,
          n = a.slides;
        a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-lama-slide-index").removeAttr("data-lama-column").removeAttr("data-lama-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
          a.off(e)
        }), !1 !== e && (a.$el[0].lama = null, a.$el.data("lama", null), l.deleteProps(a)), a.destroyed = !0
      }, a.extendDefaults = function (e) {
        l.extend(k, e)
      }, i.extendedDefaults.get = function () {
        return k
      }, i.defaults.get = function () {
        return z
      }, i.Class.get = function () {
        return t
      }, i.$.get = function () {
        return e
      }, Object.defineProperties(a, i), a
    }(c),
    I = {
      name: "device",
      proto: {
        device: x
      },
      static: {
        device: x
      }
    },
    L = {
      name: "support",
      proto: {
        support: p
      },
      static: {
        support: p
      }
    },
    D = {
      name: "browser",
      proto: {
        browser: m
      },
      static: {
        browser: m
      }
    },
    O = {
      name: "resize",
      create: function () {
        var e = this;
        l.extend(e, {
          resize: {
            resizeHandler: function () {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange")
            }
          }
        })
      },
      on: {
        init: function () {
          var e = this;
          s.addEventListener("resize", e.resize.resizeHandler), s.addEventListener("orientationchange", e.resize.orientationChangeHandler)
        },
        destroy: function () {
          var e = this;
          s.removeEventListener("resize", e.resize.resizeHandler), s.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
        }
      }
    },
    A = {
      func: s.MutationObserver || s.WebkitMutationObserver,
      attach: function (e, t) {
        void 0 === t && (t = {});
        var a = this,
          i = new(0, A.func)(function (e) {
            e.forEach(function (e) {
              a.emit("observerUpdate", e)
            })
          });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), a.observer.observers.push(i)
      },
      init: function () {
        var e = this;
        if (p.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {
            childList: !1
          }), e.observer.attach(e.$wrapperEl[0], {
            attributes: !1
          })
        }
      },
      destroy: function () {
        var e = this;
        e.observer.observers.forEach(function (e) {
          e.disconnect()
        }), e.observer.observers = []
      }
    },
    H = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1
      },
      create: function () {
        var e = this;
        l.extend(e, {
          observer: {
            init: A.init.bind(e),
            attach: A.attach.bind(e),
            destroy: A.destroy.bind(e),
            observers: []
          }
        })
      },
      on: {
        init: function () {
          this.observer.init()
        },
        destroy: function () {
          this.observer.destroy()
        }
      }
    },
    N = {
      update: function (e) {
        function t() {
          a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.lazy && a.params.lazy.enabled && a.lazy.load()
        }
        var a = this,
          i = a.params,
          s = i.slidesPerView,
          r = i.slidesPerGroup,
          n = i.centeredSlides,
          o = a.virtual,
          d = o.from,
          p = o.to,
          c = o.slides,
          u = o.slidesGrid,
          h = o.renderSlide,
          v = o.offset;
        a.updateActiveIndex();
        var f, m = a.activeIndex || 0;
        f = a.rtl && a.isHorizontal() ? "right" : a.isHorizontal() ? "left" : "top";
        var g, b;
        n ? (g = Math.floor(s / 2) + r, b = Math.floor(s / 2) + r) : (g = s + (r - 1), b = r);
        var w = Math.max((m || 0) - b, 0),
          y = Math.min((m || 0) + g, c.length - 1),
          x = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);
        if (l.extend(a.virtual, {
            from: w,
            to: y,
            offset: x,
            slidesGrid: a.slidesGrid
          }), d === w && p === y && !e) return a.slidesGrid !== u && x !== v && a.slides.css(f, x + "px"), void a.updateProgress();
        if (a.params.virtual.renderExternal) return a.params.virtual.renderExternal.call(a, {
          offset: x,
          from: w,
          to: y,
          slides: function () {
            for (var e = [], t = w; t <= y; t += 1) e.push(c[t]);
            return e
          }()
        }), void t();
        var T = [],
          E = [];
        if (e) a.$wrapperEl.find("." + a.params.slideClass).remove();
        else
          for (var S = d; S <= p; S += 1)(S < w || S > y) && a.$wrapperEl.find("." + a.params.slideClass + '[data-lama-slide-index="' + S + '"]').remove();
        for (var C = 0; C < c.length; C += 1) C >= w && C <= y && (void 0 === p || e ? E.push(C) : (C > p && E.push(C), C < d && T.push(C)));
        E.forEach(function (e) {
          a.$wrapperEl.append(h(c[e], e))
        }), T.sort(function (e, t) {
          return e < t
        }).forEach(function (e) {
          a.$wrapperEl.prepend(h(c[e], e))
        }), a.$wrapperEl.children(".lama-slide").css(f, x + "px"), t()
      },
      renderSlide: function (t, a) {
        var i = this,
          s = i.params.virtual;
        if (s.cache && i.virtual.cache[a]) return i.virtual.cache[a];
        var r = e(s.renderSlide ? s.renderSlide.call(i, t, a) : '<div class="' + i.params.slideClass + '" data-lama-slide-index="' + a + '">' + t + "</div>");
        return r.attr("data-lama-slide-index") || r.attr("data-lama-slide-index", a), s.cache && (i.virtual.cache[a] = r), r
      },
      appendSlide: function (e) {
        var t = this;
        t.virtual.slides.push(e), t.virtual.update(!0)
      },
      prependSlide: function (e) {
        var t = this;
        if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
          var a = t.virtual.cache,
            i = {};
          Object.keys(a).forEach(function (e) {
            i[e + 1] = a[e]
          }), t.virtual.cache = i
        }
        t.virtual.update(!0), t.slideNext(0)
      }
    },
    X = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          virtual: {
            update: N.update.bind(e),
            appendSlide: N.appendSlide.bind(e),
            prependSlide: N.prependSlide.bind(e),
            renderSlide: N.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {}
          }
        })
      },
      on: {
        beforeInit: function () {
          var e = this;
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = {
              watchSlidesProgress: !0
            };
            l.extend(e.params, t), l.extend(e.originalParams, t), e.virtual.update()
          }
        },
        setTranslate: function () {
          var e = this;
          e.params.virtual.enabled && e.virtual.update()
        }
      }
    },
    Y = {
      handle: function (e) {
        var t = this,
          a = e;
        a.originalEvent && (a = a.originalEvent);
        var i = a.keyCode || a.charCode;
        if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i)) return !1;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || d.activeElement && d.activeElement.nodeName && ("input" === d.activeElement.nodeName.toLowerCase() || "textarea" === d.activeElement.nodeName.toLowerCase()))) {
          if (37 === i || 39 === i || 38 === i || 40 === i) {
            var r = !1;
            if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
            var n = {
                left: s.pageXOffset,
                top: s.pageYOffset
              },
              o = s.innerWidth,
              l = s.innerHeight,
              p = t.$el.offset();
            t.rtl && (p.left -= t.$el[0].scrollLeft);
            for (var c = [[p.left, p.top], [p.left + t.width, p.top], [p.left, p.top + t.height], [p.left + t.width, p.top + t.height]], u = 0; u < c.length; u += 1) {
              var h = c[u];
              h[0] >= n.left && h[0] <= n.left + o && h[1] >= n.top && h[1] <= n.top + l && (r = !0)
            }
            if (!r) return
          }
          t.isHorizontal() ? (37 !== i && 39 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === i && !t.rtl || 37 === i && t.rtl) && t.slideNext(), (37 === i && !t.rtl || 39 === i && t.rtl) && t.slidePrev()) : (38 !== i && 40 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === i && t.slideNext(), 38 === i && t.slidePrev()), t.emit("keyPress", i)
        }
      },
      enable: function () {
        var t = this;
        t.keyboard.enabled || (e(d).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0)
      },
      disable: function () {
        var t = this;
        t.keyboard.enabled && (e(d).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1)
      }
    },
    G = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          keyboard: {
            enabled: !1,
            enable: Y.enable.bind(e),
            disable: Y.disable.bind(e),
            handle: Y.handle.bind(e)
          }
        })
      },
      on: {
        init: function () {
          var e = this;
          e.params.keyboard.enabled && e.keyboard.enable()
        },
        destroy: function () {
          var e = this;
          e.keyboard.enabled && e.keyboard.disable()
        }
      }
    },
    B = {
      lastScrollTime: l.now(),
      event: s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : a() ? "wheel" : "mousewheel",
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
          spinX: t,
          spinY: a,
          pixelX: i,
          pixelY: s
        }
      },
      handle: function (e) {
        var t = e,
          a = this,
          i = a.params.mousewheel;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
          n = a.rtl ? -1 : 1,
          o = B.normalize(t);
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
            r = o.pixelX * n
          } else {
            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
            r = o.pixelY
          }
        else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
        if (0 === r) return !0;
        if (i.invert && (r = -r), a.params.freeMode) {
          var d = a.getTranslate() + r * i.sensitivity,
            p = a.isBeginning,
            c = a.isEnd;
          if (d >= a.minTranslate() && (d = a.minTranslate()), d <= a.maxTranslate() && (d = a.maxTranslate()), a.setTransition(0), a.setTranslate(d), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!p && a.isBeginning || !c && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = l.nextTick(function () {
              a.slideReset()
            }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(), 0 === d || d === a.maxTranslate()) return !0
        } else {
          if (l.now() - a.mousewheel.lastScrollTime > 60)
            if (r < 0)
              if (a.isEnd && !a.params.loop || a.animating) {
                if (i.releaseOnEdges) return !0
              } else a.slideNext(), a.emit("scroll", t);
          else if (a.isBeginning && !a.params.loop || a.animating) {
            if (i.releaseOnEdges) return !0
          } else a.slidePrev(), a.emit("scroll", t);
          a.mousewheel.lastScrollTime = (new s.Date).getTime()
        }
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
      },
      enable: function () {
        var t = this;
        if (!B.event) return !1;
        if (t.mousewheel.enabled) return !1;
        var a = t.$el;
        return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.on(B.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0
      },
      disable: function () {
        var t = this;
        if (!B.event) return !1;
        if (!t.mousewheel.enabled) return !1;
        var a = t.$el;
        return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.off(B.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0
      }
    },
    V = {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container"
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          mousewheel: {
            enabled: !1,
            enable: B.enable.bind(e),
            disable: B.disable.bind(e),
            handle: B.handle.bind(e),
            lastScrollTime: l.now()
          }
        })
      },
      on: {
        init: function () {
          var e = this;
          e.params.mousewheel.enabled && e.mousewheel.enable()
        },
        destroy: function () {
          var e = this;
          e.mousewheel.enabled && e.mousewheel.disable()
        }
      }
    },
    R = {
      update: function () {
        var e = this,
          t = e.params.navigation;
        if (!e.params.loop) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
          s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass))
        }
      },
      init: function () {
        var t = this,
          a = t.params.navigation;
        if (a.nextEl || a.prevEl) {
          var i, s;
          a.nextEl && (i = e(a.nextEl), t.params.uniqueNavElements && "string" == typeof a.nextEl && i.length > 1 && 1 === t.$el.find(a.nextEl).length && (i = t.$el.find(a.nextEl))), a.prevEl && (s = e(a.prevEl), t.params.uniqueNavElements && "string" == typeof a.prevEl && s.length > 1 && 1 === t.$el.find(a.prevEl).length && (s = t.$el.find(a.prevEl))), i && i.length > 0 && i.on("click", function (e) {
            e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
          }), s && s.length > 0 && s.on("click", function (e) {
            e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
          }), l.extend(t.navigation, {
            $nextEl: i,
            nextEl: i && i[0],
            $prevEl: s,
            prevEl: s && s[0]
          })
        }
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a && a.length && (a.off("click"), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(e.params.navigation.disabledClass))
      }
    },
    W = {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "lama-button-disabled",
          hiddenClass: "lama-button-hidden"
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          navigation: {
            init: R.init.bind(e),
            update: R.update.bind(e),
            destroy: R.destroy.bind(e)
          }
        })
      },
      on: {
        init: function () {
          var e = this;
          e.navigation.init(), e.navigation.update()
        },
        toEdge: function () {
          this.navigation.update()
        },
        fromEdge: function () {
          this.navigation.update()
        },
        destroy: function () {
          this.navigation.destroy()
        },
        click: function (t) {
          var a = this,
            i = a.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
          !a.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(s) || (s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass))
        }
      }
    },
    F = {
      update: function () {
        var t = this,
          a = t.rtl,
          i = t.params.pagination;
        if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
          var s, r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            n = t.pagination.$el,
            o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? ((s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides), s > o - 1 && (s -= o), s < 0 && "bullets" !== t.params.paginationType && (s = o + s)) : s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            var l = t.pagination.bullets;
            if (i.dynamicBullets && (t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")), l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"), n.length > 1) l.each(function (t, a) {
              var r = e(a);
              r.index() === s && (r.addClass(i.bulletActiveClass), i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
            });
            else {
              var d = l.eq(s);
              d.addClass(i.bulletActiveClass), i.dynamicBullets && (d.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), d.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
            }
            if (i.dynamicBullets) {
              var p = Math.min(l.length, 5),
                c = (t.pagination.bulletSize * p - t.pagination.bulletSize) / 2 - s * t.pagination.bulletSize,
                u = a ? "right" : "left";
              l.css(t.isHorizontal() ? u : "top", c + "px")
            }
          }
          if ("fraction" === i.type && (n.find("." + i.currentClass).text(s + 1), n.find("." + i.totalClass).text(o)), "progressbar" === i.type) {
            var h = (s + 1) / o,
              v = h,
              f = 1;
            t.isHorizontal() || (f = h, v = 1), n.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + v + ") scaleY(" + f + ")").transition(t.params.speed)
          }
          "custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(t, s + 1, o)), t.emit("paginationRender", t, n[0])) : t.emit("paginationUpdate", t, n[0])
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
            i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
          }
          "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
        }
      },
      init: function () {
        var t = this,
          a = t.params.pagination;
        if (a.el) {
          var i = e(a.el);
          0 !== i.length && (t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === t.$el.find(a.el).length && (i = t.$el.find(a.el)), "bullets" === a.type && a.clickable && i.addClass(a.clickableClass), i.addClass(a.modifierClass + a.type), "bullets" === a.type && a.dynamicBullets && i.addClass("" + a.modifierClass + a.type + "-dynamic"), a.clickable && i.on("click", "." + a.bulletClass, function (a) {
            a.preventDefault();
            var i = e(this).index() * t.params.slidesPerGroup;
            t.params.loop && (i += t.loopedSlides), t.slideTo(i)
          }), l.extend(t.pagination, {
            $el: i,
            el: i[0]
          }))
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
        }
      }
    },
    j = {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          type: "bullets",
          dynamicBullets: !1,
          bulletClass: "lama-pagination-bullet",
          bulletActiveClass: "lama-pagination-bullet-active",
          modifierClass: "lama-pagination-",
          currentClass: "lama-pagination-current",
          totalClass: "lama-pagination-total",
          hiddenClass: "lama-pagination-hidden",
          progressbarFillClass: "lama-pagination-progressbar-fill",
          clickableClass: "lama-pagination-clickable"
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          pagination: {
            init: F.init.bind(e),
            render: F.render.bind(e),
            update: F.update.bind(e),
            destroy: F.destroy.bind(e)
          }
        })
      },
      on: {
        init: function () {
          var e = this;
          e.pagination.init(), e.pagination.render(), e.pagination.update()
        },
        activeIndexChange: function () {
          var e = this;
          e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
        },
        snapIndexChange: function () {
          var e = this;
          e.params.loop || e.pagination.update()
        },
        slidesLengthChange: function () {
          var e = this;
          e.params.loop && (e.pagination.render(), e.pagination.update())
        },
        snapGridLengthChange: function () {
          var e = this;
          e.params.loop || (e.pagination.render(), e.pagination.update())
        },
        destroy: function () {
          this.pagination.destroy()
        },
        click: function (t) {
          var a = this;
          a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !e(t.target).hasClass(a.params.pagination.bulletClass) && a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)
        }
      }
    },
    q = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtl,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            c = (r - s) * i;
          a && e.isHorizontal() ? (c = -c) > 0 ? (d = s - c, c = 0) : -c + s > r && (d = r + c) : c < 0 ? (d = s + c, c = 0) : c + s > r && (d = r - c), e.isHorizontal() ? (p.transforms3d ? n.transform("translate3d(" + c + "px, 0, 0)") : n.transform("translateX(" + c + "px)"), n[0].style.width = d + "px") : (p.transforms3d ? n.transform("translate3d(0px, " + c + "px, 0)") : n.transform("translateY(" + c + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
            o[0].style.opacity = 0, o.transition(400)
          }, 1e3))
        }
      },
      setTransition: function (e) {
        var t = this;
        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          a[0].style.width = "", a[0].style.height = "";
          var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);
          s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), l.extend(t, {
            trackSize: r,
            divider: n,
            moveDivider: o,
            dragSize: s
          })
        }
      },
      setDragPosition: function (e) {
        var t, a = this,
          i = a.scrollbar,
          s = i.$el,
          r = i.dragSize,
          n = i.trackSize;
        t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[a.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), a.rtl && (t = 1 - t);
        var o = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(o), a.setTranslate(o), a.updateActiveIndex(), a.updateSlidesClasses()
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
      },
      onDragMove: function (e) {
        var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl;
        t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e))
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar.$el;
        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = l.nextTick(function () {
          i.css("opacity", 0), i.transition(400)
        }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideReset())
      },
      enableDraggable: function () {
        var t = this;
        if (t.params.scrollbar.el) {
          var a = t.scrollbar.$el,
            i = p.touch ? a[0] : document;
          a.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart), e(i).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove), e(i).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd)
        }
      },
      disableDraggable: function () {
        var t = this;
        if (t.params.scrollbar.el) {
          var a = t.scrollbar.$el,
            i = p.touch ? a[0] : document;
          a.off(t.scrollbar.dragEvents.start), e(i).off(t.scrollbar.dragEvents.move), e(i).off(t.scrollbar.dragEvents.end)
        }
      },
      init: function () {
        var t = this;
        if (t.params.scrollbar.el) {
          var a = t.scrollbar,
            i = t.$el,
            s = t.touchEvents,
            r = t.params.scrollbar,
            n = e(r.el);
          t.params.uniqueNavElements && "string" == typeof r.el && n.length > 1 && 1 === i.find(r.el).length && (n = i.find(r.el));
          var o = n.find(".lama-scrollbar-drag");
          0 === o.length && (o = e('<div class="lama-scrollbar-drag"></div>'), n.append(o)), t.scrollbar.dragEvents = !1 !== t.params.simulateTouch || p.touch ? s : {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup"
          }, l.extend(a, {
            $el: n,
            el: n[0],
            $dragEl: o,
            dragEl: o[0]
          }), r.draggable && a.enableDraggable()
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable()
      }
    },
    K = {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          scrollbar: {
            init: q.init.bind(e),
            destroy: q.destroy.bind(e),
            updateSize: q.updateSize.bind(e),
            setTranslate: q.setTranslate.bind(e),
            setTransition: q.setTransition.bind(e),
            enableDraggable: q.enableDraggable.bind(e),
            disableDraggable: q.disableDraggable.bind(e),
            setDragPosition: q.setDragPosition.bind(e),
            onDragStart: q.onDragStart.bind(e),
            onDragMove: q.onDragMove.bind(e),
            onDragEnd: q.onDragEnd.bind(e),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        })
      },
      on: {
        init: function () {
          var e = this;
          e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
        },
        update: function () {
          this.scrollbar.updateSize()
        },
        resize: function () {
          this.scrollbar.updateSize()
        },
        observerUpdate: function () {
          this.scrollbar.updateSize()
        },
        setTranslate: function () {
          this.scrollbar.setTranslate()
        },
        setTransition: function (e) {
          this.scrollbar.setTransition(e)
        },
        destroy: function () {
          this.scrollbar.destroy()
        }
      }
    },
    U = {
      setTransform: function (t, a) {
        var i = this,
          s = i.rtl,
          r = e(t),
          n = s ? -1 : 1,
          o = r.attr("data-lama-parallax") || "0",
          l = r.attr("data-lama-parallax-x"),
          d = r.attr("data-lama-parallax-y"),
          p = r.attr("data-lama-parallax-scale"),
          c = r.attr("data-lama-parallax-opacity");
        if (l || d ? (l = l || "0", d = d || "0") : i.isHorizontal() ? (l = o, d = "0") : (d = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * a * n + "%" : l * a * n + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px", void 0 !== c && null !== c) {
          var u = c - (c - 1) * (1 - Math.abs(a));
          r[0].style.opacity = u
        }
        if (void 0 === p || null === p) r.transform("translate3d(" + l + ", " + d + ", 0px)");
        else {
          var h = p - (p - 1) * (1 - Math.abs(a));
          r.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")")
        }
      },
      setTranslate: function () {
        var t = this,
          a = t.$el,
          i = t.slides,
          s = t.progress,
          r = t.snapGrid;
        a.children("[data-lama-parallax], [data-lama-parallax-x], [data-lama-parallax-y]").each(function (e, a) {
          t.parallax.setTransform(a, s)
        }), i.each(function (a, i) {
          var n = i.progress;
          t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(a / 2) - s * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), e(i).find("[data-lama-parallax], [data-lama-parallax-x], [data-lama-parallax-y]").each(function (e, a) {
            t.parallax.setTransform(a, n)
          })
        })
      },
      setTransition: function (t) {
        void 0 === t && (t = this.params.speed), this.$el.find("[data-lama-parallax], [data-lama-parallax-x], [data-lama-parallax-y]").each(function (a, i) {
          var s = e(i),
            r = parseInt(s.attr("data-lama-parallax-duration"), 10) || t;
          0 === t && (r = 0), s.transition(r)
        })
      }
    },
    _ = {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          parallax: {
            setTransform: U.setTransform.bind(e),
            setTranslate: U.setTranslate.bind(e),
            setTransition: U.setTransition.bind(e)
          }
        })
      },
      on: {
        beforeInit: function () {
          this.params.watchSlidesProgress = !0
        },
        init: function () {
          var e = this;
          e.params.parallax && e.parallax.setTranslate()
        },
        setTranslate: function () {
          var e = this;
          e.params.parallax && e.parallax.setTranslate()
        },
        setTransition: function (e) {
          var t = this;
          t.params.parallax && t.parallax.setTransition(e)
        }
      }
    },
    Z = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
      },
      onGestureStart: function (t) {
        var a = this,
          i = a.params.zoom,
          s = a.zoom,
          r = s.gesture;
        if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !p.gestures) {
          if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
          s.fakeGestureTouched = !0, r.scaleStart = Z.getDistanceBetweenTouches(t)
        }
        r.$slideEl && r.$slideEl.length || (r.$slideEl = e(this), 0 === r.$slideEl.length && (r.$slideEl = a.slides.eq(a.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-lama-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), a.zoom.isScaling = !0) : r.$imageEl = void 0
      },
      onGestureChange: function (e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;
        if (!p.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureMoved = !0, s.scaleMove = Z.getDistanceBetweenTouches(e)
        }
        s.$imageEl && 0 !== s.$imageEl.length && (p.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
      },
      onGestureEnd: function (e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;
        if (!p.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android) return;
          i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
        }
        s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio), s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          a = t.gesture,
          i = t.image;
        a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (x.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX), t.rtl && (s.startY = -s.startY));
          var n = s.width * a.scale,
            o = s.height * a.scale;
          if (!(n < i.slideWidth && o < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
              if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
              if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
            }
            e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
          a.isTouched = !1, a.isMoved = !1;
          var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l;
          0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          a.currentX = o, a.currentY = d;
          var c = a.width * e.scale,
            u = a.height * e.scale;
          a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
        }
      },
      onTransitionEnd: function () {
        var e = this,
          t = e.zoom,
          a = t.gesture;
        a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl.transform("translate3d(0,0,0)"), a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1)
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e)
      },
      in: function (t) {
        var a = this,
          i = a.zoom,
          s = a.params.zoom,
          r = i.gesture,
          n = i.image;
        if (r.$slideEl || (r.$slideEl = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + s.containerClass)), r.$imageEl && 0 !== r.$imageEl.length) {
          r.$slideEl.addClass("" + s.zoomedSlideClass);
          var o, l, d, p, c, u, h, v, f, m, g, b, w, y, x, T;
          void 0 === n.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = n.touchesStart.x, l = n.touchesStart.y), i.scale = r.$imageWrapEl.attr("data-lama-zoom") || s.maxRatio, i.currentScale = r.$imageWrapEl.attr("data-lama-zoom") || s.maxRatio, t ? (x = r.$slideEl[0].offsetWidth, T = r.$slideEl[0].offsetHeight, d = r.$slideEl.offset().left + x / 2 - o, p = r.$slideEl.offset().top + T / 2 - l, h = r.$imageEl[0].offsetWidth, v = r.$imageEl[0].offsetHeight, f = h * i.scale, m = v * i.scale, w = -(g = Math.min(x / 2 - f / 2, 0)), y = -(b = Math.min(T / 2 - m / 2, 0)), c = d * i.scale, u = p * i.scale, c < g && (c = g), c > w && (c = w), u < b && (u = b), u > y && (u = y)) : (c = 0, u = 0), r.$imageWrapEl.transition(300).transform("translate3d(" + c + "px, " + u + "px,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
        }
      },
      out: function () {
        var t = this,
          a = t.zoom,
          i = t.params.zoom,
          s = a.gesture;
        s.$slideEl || (s.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (a.scale = 1, a.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0)
      },
      enable: function () {
        var t = this,
          a = t.zoom;
        if (!a.enabled) {
          a.enabled = !0;
          var i = t.slides,
            s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          p.gestures ? (i.on("gesturestart", a.onGestureStart, s), i.on("gesturechange", a.onGestureChange, s), i.on("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, a.onGestureStart, s), i.on(t.touchEvents.move, a.onGestureChange, s), i.on(t.touchEvents.end, a.onGestureEnd, s)), t.slides.each(function (i, s) {
            var r = e(s);
            r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, a.onTouchMove)
          })
        }
      },
      disable: function () {
        var t = this,
          a = t.zoom;
        if (a.enabled) {
          t.zoom.enabled = !1;
          var i = t.slides,
            s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          p.gestures ? (i.off("gesturestart", a.onGestureStart, s), i.off("gesturechange", a.onGestureChange, s), i.off("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, a.onGestureStart, s), i.off(t.touchEvents.move, a.onGestureChange, s), i.off(t.touchEvents.end, a.onGestureEnd, s)), t.slides.each(function (i, s) {
            var r = e(s);
            r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, a.onTouchMove)
          })
        }
      }
    },
    Q = {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "lama-zoom-container",
          zoomedSlideClass: "lama-slide-zoomed"
        }
      },
      create: function () {
        var e = this,
          t = {
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (a) {
          t[a] = Z[a].bind(e)
        }), l.extend(e, {
          zoom: t
        })
      },
      on: {
        init: function () {
          var e = this;
          e.params.zoom.enabled && e.zoom.enable()
        },
        destroy: function () {
          this.zoom.disable()
        },
        touchStart: function (e) {
          var t = this;
          t.zoom.enabled && t.zoom.onTouchStart(e)
        },
        touchEnd: function (e) {
          var t = this;
          t.zoom.enabled && t.zoom.onTouchEnd(e)
        },
        doubleTap: function (e) {
          var t = this;
          t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
        },
        transitionEnd: function () {
          var e = this;
          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
        }
      }
    },
    J = {
      loadInSlide: function (t, a) {
        void 0 === a && (a = !0);
        var i = this,
          s = i.params.lazy;
        if (void 0 !== t && 0 !== i.slides.length) {
          var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-lama-slide-index="' + t + '"]') : i.slides.eq(t),
            n = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
          !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (t, n) {
            var o = e(n);
            o.addClass(s.loadingClass);
            var l = o.attr("data-background"),
              d = o.attr("data-src"),
              p = o.attr("data-srcset"),
              c = o.attr("data-sizes");
            i.loadImage(o[0], d || l, p, c, !1, function () {
              if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (p && (o.attr("srcset", p), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), r.find("." + s.preloaderClass).remove(), i.params.loop && a) {
                  var e = r.attr("data-lama-slide-index");
                  if (r.hasClass(i.params.slideDuplicateClass)) {
                    var t = i.$wrapperEl.children('[data-lama-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                    i.lazy.loadInSlide(t.index(), !1)
                  } else {
                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-lama-slide-index="' + e + '"]');
                    i.lazy.loadInSlide(n.index(), !1)
                  }
                }
                i.emit("lazyImageReady", r[0], o[0])
              }
            }), i.emit("lazyImageLoad", r[0], o[0])
          })
        }
      },
      load: function () {
        function t(e) {
          if (l) {
            if (s.children("." + r.slideClass + '[data-lama-slide-index="' + e + '"]').length) return !0
          } else if (n[e]) return !0;
          return !1
        }
        function a(t) {
          return l ? e(t).attr("data-lama-slide-index") : e(t).index()
        }
        var i = this,
          s = i.$wrapperEl,
          r = i.params,
          n = i.slides,
          o = i.activeIndex,
          l = i.virtual && r.virtual.enabled,
          d = r.lazy,
          p = r.slidesPerView;
        if ("auto" === p && (p = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) s.children("." + r.slideVisibleClass).each(function (t, a) {
          var s = l ? e(a).attr("data-lama-slide-index") : e(a).index();
          i.lazy.loadInSlide(s)
        });
        else if (p > 1)
          for (var c = o; c < o + p; c += 1) t(c) && i.lazy.loadInSlide(c);
        else i.lazy.loadInSlide(o);
        if (d.loadPrevNext)
          if (p > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
            for (var u = d.loadPrevNextAmount, h = p, v = Math.min(o + h + Math.max(u, h), n.length), f = Math.max(o - Math.max(h, u), 0), m = o + p; m < v; m += 1) t(m) && i.lazy.loadInSlide(m);
            for (var g = f; g < o; g += 1) t(g) && i.lazy.loadInSlide(g)
          } else {
            var b = s.children("." + r.slideNextClass);
            b.length > 0 && i.lazy.loadInSlide(a(b));
            var w = s.children("." + r.slidePrevClass);
            w.length > 0 && i.lazy.loadInSlide(a(w))
          }
      }
    },
    ee = {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "lama-lazy",
          loadingClass: "lama-lazy-loading",
          loadedClass: "lama-lazy-loaded",
          preloaderClass: "lama-lazy-preloader"
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          lazy: {
            initialImageLoaded: !1,
            load: J.load.bind(e),
            loadInSlide: J.loadInSlide.bind(e)
          }
        })
      },
      on: {
        beforeInit: function () {
          var e = this;
          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        },
        init: function () {
          var e = this;
          e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
        },
        scroll: function () {
          var e = this;
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
        },
        resize: function () {
          var e = this;
          e.params.lazy.enabled && e.lazy.load()
        },
        scrollbarDragMove: function () {
          var e = this;
          e.params.lazy.enabled && e.lazy.load()
        },
        transitionStart: function () {
          var e = this;
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
        },
        transitionEnd: function () {
          var e = this;
          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
        }
      }
    },
    te = {
      LinearSpline: function (e, t) {
        var a = function () {
          var e, t, a;
          return function (i, s) {
            for (t = -1, e = i.length; e - t > 1;) i[a = e + t >> 1] <= s ? t = a : e = a;
            return e
          }
        }();
        this.x = e, this.y = t, this.lastIndex = e.length - 1;
        var i, s;
        return this.interpolate = function (e) {
          return e ? (s = a(this.x, e), i = s - 1, (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
        }, this
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline || (t.controller.spline = t.params.loop ? new te.LinearSpline(t.slidesGrid, e.slidesGrid) : new te.LinearSpline(t.snapGrid, e.snapGrid))
      },
      setTranslate: function (e, t) {
        function a(e) {
          var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
          "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), s = -r.controller.spline.interpolate(-t)), s && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), s = (t - r.minTranslate()) * i + e.minTranslate()), r.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, r), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        var i, s, r = this,
          n = r.controller.control;
        if (Array.isArray(n))
          for (var o = 0; o < n.length; o += 1) n[o] !== t && n[o] instanceof $ && a(n[o]);
        else n instanceof $ && t !== n && a(n)
      },
      setTransition: function (e, t) {
        function a(t) {
          t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
            r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
          }))
        }
        var i, s = this,
          r = s.controller.control;
        if (Array.isArray(r))
          for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof $ && a(r[i]);
        else r instanceof $ && t !== r && a(r)
      }
    },
    ae = {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          controller: {
            control: e.params.controller.control,
            getInterpolateFunction: te.getInterpolateFunction.bind(e),
            setTranslate: te.setTranslate.bind(e),
            setTransition: te.setTransition.bind(e)
          }
        })
      },
      on: {
        update: function () {
          var e = this;
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        },
        resize: function () {
          var e = this;
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        },
        observerUpdate: function () {
          var e = this;
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        },
        setTranslate: function (e, t) {
          var a = this;
          a.controller.control && a.controller.setTranslate(e, t)
        },
        setTransition: function (e, t) {
          var a = this;
          a.controller.control && a.controller.setTransition(e, t)
        }
      }
    },
    ie = {
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e
      },
      onEnterKey: function (t) {
        var a = this,
          i = a.params.a11y;
        if (13 === t.keyCode) {
          var s = e(t.target);
          a.navigation && a.navigation.$nextEl && s.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? a.a11y.notify(i.lastSlideMessage) : a.a11y.notify(i.nextSlideMessage)), a.navigation && a.navigation.$prevEl && s.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? a.a11y.notify(i.firstSlideMessage) : a.a11y.notify(i.prevSlideMessage)), a.pagination && s.is("." + a.params.pagination.bulletClass) && s[0].click()
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e))
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
        }
      },
      updatePagination: function () {
        var t = this,
          a = t.params.a11y;
        t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (i, s) {
          var r = e(s);
          t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, a.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
        })
      },
      init: function () {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t, a, i = e.params.a11y;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
      },
      destroy: function () {
        var e = this;
        e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
        var t, a;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), a && a.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
      }
    },
    se = {
      name: "a11y",
      params: {
        a11y: {
          enabled: !1,
          notificationClass: "lama-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}"
        }
      },
      create: function () {
        var t = this;
        l.extend(t, {
          a11y: {
            liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          }
        }), Object.keys(ie).forEach(function (e) {
          t.a11y[e] = ie[e].bind(t)
        })
      },
      on: {
        init: function () {
          var e = this;
          e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
        },
        toEdge: function () {
          var e = this;
          e.params.a11y.enabled && e.a11y.updateNavigation()
        },
        fromEdge: function () {
          var e = this;
          e.params.a11y.enabled && e.a11y.updateNavigation()
        },
        paginationUpdate: function () {
          var e = this;
          e.params.a11y.enabled && e.a11y.updatePagination()
        },
        destroy: function () {
          var e = this;
          e.params.a11y.enabled && e.a11y.destroy()
        }
      }
    },
    re = {
      init: function () {
        var e = this;
        if (e.params.history) {
          if (!s.history || !s.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
          var t = e.history;
          t.initialized = !0, t.paths = re.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || s.addEventListener("popstate", e.history.setHistoryPopState))
        }
      },
      destroy: function () {
        var e = this;
        e.params.history.replaceState || s.removeEventListener("popstate", e.history.setHistoryPopState)
      },
      setHistoryPopState: function () {
        var e = this;
        e.history.paths = re.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
      },
      getPathValues: function () {
        var e = s.location.pathname.slice(1).split("/").filter(function (e) {
            return "" !== e
          }),
          t = e.length;
        return {
          key: e[t - 2],
          value: e[t - 1]
        }
      },
      setHistory: function (e, t) {
        var a = this;
        if (a.history.initialized && a.params.history.enabled) {
          var i = a.slides.eq(t),
            r = re.slugify(i.attr("data-history"));
          s.location.pathname.includes(e) || (r = e + "/" + r);
          var n = s.history.state;
          n && n.value === r || (a.params.history.replaceState ? s.history.replaceState({
            value: r
          }, null, r) : s.history.pushState({
            value: r
          }, null, r))
        }
      },
      slugify: function (e) {
        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
      },
      scrollToSlide: function (e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (re.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
              var o = n.index();
              i.slideTo(o, e, a)
            }
          } else i.slideTo(0, e, a)
      }
    },
    ne = {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          history: {
            init: re.init.bind(e),
            setHistory: re.setHistory.bind(e),
            setHistoryPopState: re.setHistoryPopState.bind(e),
            scrollToSlide: re.scrollToSlide.bind(e),
            destroy: re.destroy.bind(e)
          }
        })
      },
      on: {
        init: function () {
          var e = this;
          e.params.history.enabled && e.history.init()
        },
        destroy: function () {
          var e = this;
          e.params.history.enabled && e.history.destroy()
        },
        transitionEnd: function () {
          var e = this;
          e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
        }
      }
    },
    oe = {
      onHashCange: function () {
        var e = this,
          t = d.location.hash.replace("#", "");
        t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
      },
      setHash: function () {
        var e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (e.params.hashNavigation.replaceState && s.history && s.history.replaceState) s.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
          else {
            var t = e.slides.eq(e.activeIndex),
              a = t.attr("data-hash") || t.attr("data-history");
            d.location.hash = a || ""
          }
      },
      init: function () {
        var t = this;
        if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
          t.hashNavigation.initialized = !0;
          var a = d.location.hash.replace("#", "");
          if (a)
            for (var i = 0, r = t.slides.length; i < r; i += 1) {
              var n = t.slides.eq(i);
              if ((n.attr("data-hash") || n.attr("data-history")) === a && !n.hasClass(t.params.slideDuplicateClass)) {
                var o = n.index();
                t.slideTo(o, 0, t.params.runCallbacksOnInit, !0)
              }
            }
          t.params.hashNavigation.watchState && e(s).on("hashchange", t.hashNavigation.onHashCange)
        }
      },
      destroy: function () {
        var t = this;
        t.params.hashNavigation.watchState && e(s).off("hashchange", t.hashNavigation.onHashCange)
      }
    },
    le = {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          hashNavigation: {
            initialized: !1,
            init: oe.init.bind(e),
            destroy: oe.destroy.bind(e),
            setHash: oe.setHash.bind(e),
            onHashCange: oe.onHashCange.bind(e)
          }
        })
      },
      on: {
        init: function () {
          var e = this;
          e.params.hashNavigation.enabled && e.hashNavigation.init()
        },
        destroy: function () {
          var e = this;
          e.params.hashNavigation.enabled && e.hashNavigation.destroy()
        },
        transitionEnd: function () {
          var e = this;
          e.hashNavigation.initialized && e.hashNavigation.setHash()
        }
      }
    },
    de = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-lama-autoplay") && (a = t.attr("data-lama-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = l.nextTick(function () {
          e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
        }, a)
      },
      start: function () {
        var e = this;
        return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
      },
      stop: function () {
        var e = this;
        return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 === e ? (t.autoplay.paused = !1, t.autoplay.run()) : t.$wrapperEl.transitionEnd(function () {
          t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
        })))
      }
    },
    pe = {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          disableOnInteraction: !0,
          stopOnLastSlide: !1
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          autoplay: {
            running: !1,
            paused: !1,
            run: de.run.bind(e),
            start: de.start.bind(e),
            stop: de.stop.bind(e),
            pause: de.pause.bind(e)
          }
        })
      },
      on: {
        init: function () {
          var e = this;
          e.params.autoplay.enabled && e.autoplay.start()
        },
        beforeTransitionStart: function (e, t) {
          var a = this;
          a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop())
        },
        sliderFirstMove: function () {
          var e = this;
          e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
        },
        destroy: function () {
          var e = this;
          e.autoplay.running && e.autoplay.stop()
        }
      }
    },
    ce = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].lamaSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || (r = s, s = 0);
          var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: n
          }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.$wrapperEl;
        if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
          var s = !1;
          a.transitionEnd(function () {
            if (!s && t && !t.destroyed) {
              s = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a])
            }
          })
        }
      }
    },
    ue = {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          fadeEffect: {
            setTranslate: ce.setTranslate.bind(e),
            setTransition: ce.setTransition.bind(e)
          }
        })
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            l.extend(e.params, t), l.extend(e.originalParams, t)
          }
        },
        setTranslate: function () {
          var e = this;
          "fade" === e.params.effect && e.fadeEffect.setTranslate()
        },
        setTransition: function (e) {
          var t = this;
          "fade" === t.params.effect && t.fadeEffect.setTransition(e)
        }
      }
    },
    he = {
      setTranslate: function () {
        var t, a = this,
          i = a.$el,
          s = a.$wrapperEl,
          r = a.slides,
          n = a.width,
          o = a.height,
          l = a.rtl,
          d = a.size,
          p = a.params.cubeEffect,
          c = a.isHorizontal(),
          u = a.virtual && a.params.virtual.enabled,
          h = 0;
        p.shadow && (c ? (0 === (t = s.find(".lama-cube-shadow")).length && (t = e('<div class="lama-cube-shadow"></div>'), s.append(t)), t.css({
          height: n + "px"
        })) : 0 === (t = i.find(".lama-cube-shadow")).length && (t = e('<div class="lama-cube-shadow"></div>'), i.append(t)));
        for (var v = 0; v < r.length; v += 1) {
          var f = r.eq(v),
            g = v;
          u && (g = parseInt(f.attr("data-lama-slide-index"), 10));
          var b = 90 * g,
            w = Math.floor(b / 360);
          l && (b = -b, w = Math.floor(-b / 360));
          var y = Math.max(Math.min(f[0].progress, 1), -1),
            x = 0,
            T = 0,
            E = 0;
          g % 4 == 0 ? (x = 4 * -w * d, E = 0) : (g - 1) % 4 == 0 ? (x = 0, E = 4 * -w * d) : (g - 2) % 4 == 0 ? (x = d + 4 * w * d, E = d) : (g - 3) % 4 == 0 && (x = -d, E = 3 * d + 4 * d * w), l && (x = -x), c || (T = x, x = 0);
          var S = "rotateX(" + (c ? 0 : -b) + "deg) rotateY(" + (c ? b : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";
          if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), f.transform(S), p.slideShadows) {
            var C = c ? f.find(".lama-slide-shadow-left") : f.find(".lama-slide-shadow-top"),
              M = c ? f.find(".lama-slide-shadow-right") : f.find(".lama-slide-shadow-bottom");
            0 === C.length && (C = e('<div class="lama-slide-shadow-' + (c ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = e('<div class="lama-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0))
          }
        }
        if (s.css({
            "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
            "transform-origin": "50% 50% -" + d / 2 + "px"
          }), p.shadow)
          if (c) t.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
          else {
            var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
              P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
              k = p.shadowScale,
              $ = p.shadowScale / P,
              I = p.shadowOffset;
            t.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (o / 2 + I) + "px, " + -o / 2 / $ + "px) rotateX(-90deg)")
          }
        var L = m.isSafari || m.isUiWebView ? -d / 2 : 0;
        s.transform("translate3d(0px,0," + L + "px) rotateX(" + (a.isHorizontal() ? 0 : h) + "deg) rotateY(" + (a.isHorizontal() ? -h : 0) + "deg)")
      },
      setTransition: function (e) {
        var t = this,
          a = t.$el;
        t.slides.transition(e).find(".lama-slide-shadow-top, .lama-slide-shadow-right, .lama-slide-shadow-bottom, .lama-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".lama-cube-shadow").transition(e)
      }
    },
    ve = {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          cubeEffect: {
            setTranslate: he.setTranslate.bind(e),
            setTransition: he.setTransition.bind(e)
          }
        })
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            l.extend(e.params, t), l.extend(e.originalParams, t)
          }
        },
        setTranslate: function () {
          var e = this;
          "cube" === e.params.effect && e.cubeEffect.setTranslate()
        },
        setTransition: function (e) {
          var t = this;
          "cube" === t.params.effect && t.cubeEffect.setTransition(e)
        }
      }
    },
    fe = {
      setTranslate: function () {
        for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
          var s = a.eq(i),
            r = s[0].progress;
          t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -s[0].lamaSlideOffset,
            d = 0;
          if (t.isHorizontal() ? t.rtl && (n = -n) : (d = l, l = 0, o = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + a.length, t.params.flipEffect.slideShadows) {
            var p = t.isHorizontal() ? s.find(".lama-slide-shadow-left") : s.find(".lama-slide-shadow-top"),
              c = t.isHorizontal() ? s.find(".lama-slide-shadow-right") : s.find(".lama-slide-shadow-bottom");
            0 === p.length && (p = e('<div class="lama-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = e('<div class="lama-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
          }
          s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;
        if (a.transition(e).find(".lama-slide-shadow-top, .lama-slide-shadow-right, .lama-slide-shadow-bottom, .lama-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var r = !1;
          a.eq(i).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              r = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a])
            }
          })
        }
      }
    },
    me = {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          flipEffect: {
            setTranslate: fe.setTranslate.bind(e),
            setTransition: fe.setTransition.bind(e)
          }
        })
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            l.extend(e.params, t), l.extend(e.originalParams, t)
          }
        },
        setTranslate: function () {
          var e = this;
          "flip" === e.params.effect && e.flipEffect.setTranslate()
        },
        setTransition: function (e) {
          var t = this;
          "flip" === t.params.effect && t.flipEffect.setTransition(e)
        }
      }
    },
    ge = {
      setTranslate: function () {
        for (var t = this, a = t.width, i = t.height, s = t.slides, r = t.$wrapperEl, n = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, p = l ? a / 2 - d : i / 2 - d, c = l ? o.rotate : -o.rotate, u = o.depth, h = 0, v = s.length; h < v; h += 1) {
          var f = s.eq(h),
            g = n[h],
            b = (p - f[0].lamaSlideOffset - g / 2) / g * o.modifier,
            w = l ? c * b : 0,
            y = l ? 0 : c * b,
            x = -u * Math.abs(b),
            T = l ? 0 : o.stretch * b,
            E = l ? o.stretch * b : 0;
          Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0);
          var S = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + y + "deg) rotateY(" + w + "deg)";
          if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(b)), o.slideShadows) {
            var C = l ? f.find(".lama-slide-shadow-left") : f.find(".lama-slide-shadow-top"),
              M = l ? f.find(".lama-slide-shadow-right") : f.find(".lama-slide-shadow-bottom");
            0 === C.length && (C = e('<div class="lama-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = e('<div class="lama-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = b > 0 ? b : 0), M.length && (M[0].style.opacity = -b > 0 ? -b : 0)
          }
        }
        m.ie && (r[0].style.perspectiveOrigin = p + "px 50%")
      },
      setTransition: function (e) {
        this.slides.transition(e).find(".lama-slide-shadow-top, .lama-slide-shadow-right, .lama-slide-shadow-bottom, .lama-slide-shadow-left").transition(e)
      }
    },
    be = {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 153100,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function () {
        var e = this;
        l.extend(e, {
          coverflowEffect: {
            setTranslate: ge.setTranslate.bind(e),
            setTransition: ge.setTransition.bind(e)
          }
        })
      },
      on: {
        beforeInit: function () {
          var e = this;
          "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        },
        setTranslate: function () {
          var e = this;
          "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
        },
        setTransition: function (e) {
          var t = this;
          "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
        }
      }
    };
  return $.use([I, L, D, O, H, X, G, V, W, j, K, _, Q, ee, ae, se, ne, le, pe, ue, ve, me, be]), $
});
/*# sourceMappingURL=lama.min.js.map*/
/*end lightgallery start smoothscroll*/
! function () {
  function e() {
    p.keyboardSupport && i("keydown", a, {
      passive: true
    })
  }
  function t() {
    if (document.body) {
      var t = document.body,
        o = document.documentElement,
        a = window.innerHeight,
        n = t.scrollHeight;
      if (y = document.compatMode.indexOf("CSS") >= 0 ? o : t, h = t, e(), b = !0, top != self) g = !0;
      else if (n > a && (t.offsetHeight <= a || o.offsetHeight <= a)) {
        var r = !1;
        if (o.style.height = "auto", setTimeout(function () {
            r || o.scrollHeight == document.height || (r = !0, setTimeout(function () {
              o.style.height = document.height + "px", r = !1
            }, 500))
          }, 10), y.offsetHeight <= a) {
          var i = document.createElement("div");
          i.style.clear = "both", t.appendChild(i)
        }
      }
      p.fixedBackground || w || (t.style.backgroundAttachment = "scroll", o.style.backgroundAttachment = "scroll")
    }
  }
  function o(e, t, o, a) {
    if (a || (a = 1e3), c(t, o), 1 != p.accelerationMax) {
      var n = +new Date - H;
      if (n < p.accelerationDelta) {
        var r = (1 + 30 / n) / 2;
        r > 1 && (r = Math.min(r, p.accelerationMax), t *= r, o *= r)
      }
      H = +new Date
    }
    if (S.push({
        x: t,
        y: o,
        lastX: t < 0 ? .99 : -.99,
        lastY: o < 0 ? .99 : -.99,
        start: +new Date
      }), !D) {
      var i = e === document.body,
        l = function (n) {
          for (var r = +new Date, c = 0, u = 0, s = 0; s < S.length; s++) {
            var d = S[s],
              h = r - d.start,
              m = h >= p.animationTime,
              w = m ? 1 : h / p.animationTime;
            p.pulseAlgorithm && (w = f(w));
            var g = d.x * w - d.lastX >> 0,
              v = d.y * w - d.lastY >> 0;
            c += g, u += v, d.lastX += g, d.lastY += v, m && (S.splice(s, 1), s--)
          }
          i ? window.scrollBy(c, u) : (c && (e.scrollLeft += c), u && (e.scrollTop += u)), t || o || (S = []), S.length ? z(l, e, a / p.frameRate + 1) : D = !1
        };
      z(l, e, 0), D = !0
    }
  }
  function a(e) {
    var t = e.target,
      a = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== x.spacebar;
    if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || a) return !0;
    if (l(t, "button") && e.keyCode === x.spacebar) return !0;
    var n = 0,
      i = 0,
      c = r(h),
      u = c.clientHeight;
    switch (c == document.body && (u = window.innerHeight), e.keyCode) {
      case x.up:
        i = -p.arrowScroll;
        break;
      case x.down:
        i = p.arrowScroll;
        break;
      case x.spacebar:
        i = -(e.shiftKey ? 1 : -1) * u * .9;
        break;
      case x.pageup:
        i = .9 * -u;
        break;
      case x.pagedown:
        i = .9 * u;
        break;
      case x.home:
        i = -c.scrollTop;
        break;
      case x.end:
        var s = c.scrollHeight - c.scrollTop - u;
        i = s > 0 ? s + 10 : 0;
        break;
      case x.left:
        n = -p.arrowScroll;
        break;
      case x.right:
        n = p.arrowScroll;
        break;
      default:
        return !0
    }
    o(c, n, i), e.preventDefault()
  }
  function n(e, t) {
    for (var o = e.length; o--;) M[C(e[o])] = t;
    return t
  }
  function r(e) {
    var t = [],
      o = y.scrollHeight;
    do {
      var a = M[C(e)];
      if (a) return n(t, a);
      if (t.push(e), o === e.scrollHeight) {
        if (!g || y.clientHeight + 10 < o) return n(t, document.body)
      } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return n(t, e)
    } while (e = e.parentNode)
  }
  function i(e, t, o) {
    window.addEventListener(e, t, o ,{passive: true}|| !1)
  }
  function l(e, t) {
    return (e.nodeName || "").toLowerCase() === t.toLowerCase()
  }
  function c(e, t) {
    e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, v.x === e && v.y === t || (v.x = e, v.y = t, S = [], H = 0)
  }
  function u(e) {
    if (e) return e = Math.abs(e), k.push(e), k.shift(), clearTimeout(T), !(s(k[0], 120) && s(k[1], 120) && s(k[2], 120))
  }
  function s(e, t) {
    return Math.floor(e / t) == e / t
  }
  function d(e) {
    var t, o;
    return e *= p.pulseScale, e < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (o = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - o)), t * p.pulseNormalize
  }
  function f(e) {
    return e >= 1 ? 1 : e <= 0 ? 0 : (1 == p.pulseNormalize && (p.pulseNormalize /= d(1)), d(e))
  }
  var h, m = {
      frameRate: 100,
      animationTime: 1200,
      stepSize: 85,
      pulseAlgorithm: !0,
      pulseScale: 8,
      pulseNormalize: 1,
      accelerationDelta: 20,
      accelerationMax: 1,
      keyboardSupport: !0,
      arrowScroll: 50,
      touchpadSupport: !0,
      fixedBackground: !0,
      excluded: ""
    },
    p = m,
    w = !1,
    g = !1,
    v = {
      x: 0,
      y: 0
    },
    b = !1,
    y = document.documentElement,
    k = [120, 120, 120],
    x = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36
    },
    p = m,
    S = [],
    D = !1,
    H = +new Date,
    M = {};
  setInterval(function () {
    M = {}
  }, 1e4);
  var T, C = function () {
      var e = 0;
      return function (t) {
        return t.uniqueID || (t.uniqueID = e++)
      }
    }(),
    z = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (e, t, o) {
      window.setTimeout(e, o || 1e3 / 60)
    },
    A = /chrome/i.test(window.navigator.userAgent),
    E = null;
  "onwheel" in document.createElement("div") ? E = "wheel" : "onmousewheel" in document.createElement("div") && (E = "mousewheel"), E && A && (i(E, function (e) {
    b || t();
    var a = e.target,
      n = r(a);
    if (!n || e.defaultPrevented || l(h, "embed") || l(a, "embed") && /\.pdf/i.test(a.src)) return !0;
    var i = e.wheelDeltaX || 0,
      c = e.wheelDeltaY || 0;
    if (i || c || (c = e.wheelDelta || 0), !p.touchpadSupport && u(c)) return !0;
    Math.abs(i) > 1.2 && (i *= p.stepSize / 120), Math.abs(c) > 1.2 && (c *= p.stepSize / 120), o(n, -i, -c), e.preventDefault()
  }), i("mousedown", function (e) {
    h = e.target
  }), i("load", t))
}();
/*            end smooth start countup*/
function countUp(a, b, c, d, e, f) {
  for (var g = 0, h = ["webkit", "moz", "ms", "o"], i = 0; i < h.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[h[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[h[i] + "CancelAnimationFrame"] || window[h[i] + "CancelRequestAnimationFrame"];
  window.requestAnimationFrame || (window.requestAnimationFrame = function (a) {
    var c = (new Date).getTime(),
      d = Math.max(0, 16 - (c - g)),
      e = window.setTimeout(function () {
        a(c + d)
      }, d);
    return g = c + d, e
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
    clearTimeout(a)
  }), this.options = f || {
    useEasing: !0,
    useGrouping: !0,
    separator: ",",
    decimal: "."
  }, "" == this.options.separator && (this.options.useGrouping = !1), null == this.options.prefix && (this.options.prefix = ""), null == this.options.suffix && (this.options.suffix = "");
  var j = this;
  this.d = "string" == typeof a ? document.getElementById(a) : a, this.startVal = Number(b), this.endVal = Number(c), this.countDown = this.startVal > this.endVal ? !0 : !1, this.startTime = null, this.timestamp = null, this.remaining = null, this.frameVal = this.startVal, this.rAF = null, this.decimals = Math.max(0, d || 0), this.dec = Math.pow(10, this.decimals), this.duration = 1e3 * e || 2e3, this.version = function () {
    return "1.3.2"
  }, this.printValue = function (a) {
    var b = isNaN(a) ? "--" : j.formatNumber(a);
    "INPUT" == j.d.tagName ? this.d.value = b : "text" == j.d.tagName ? this.d.textContent = b : this.d.innerHTML = b
  }, this.easeOutExpo = function (a, b, c, d) {
    return 1024 * c * (-Math.pow(2, -10 * a / d) + 1) / 1023 + b
  }, this.count = function (a) {
    null === j.startTime && (j.startTime = a), j.timestamp = a;
    var b = a - j.startTime;
    if (j.remaining = j.duration - b, j.options.useEasing)
      if (j.countDown) {
        var c = j.easeOutExpo(b, 0, j.startVal - j.endVal, j.duration);
        j.frameVal = j.startVal - c
      } else j.frameVal = j.easeOutExpo(b, j.startVal, j.endVal - j.startVal, j.duration);
    else if (j.countDown) {
      var c = (j.startVal - j.endVal) * (b / j.duration);
      j.frameVal = j.startVal - c
    } else j.frameVal = j.startVal + (j.endVal - j.startVal) * (b / j.duration);
    j.frameVal = j.countDown ? j.frameVal < j.endVal ? j.endVal : j.frameVal : j.frameVal > j.endVal ? j.endVal : j.frameVal, j.frameVal = Math.round(j.frameVal * j.dec) / j.dec, j.printValue(j.frameVal), b < j.duration ? j.rAF = requestAnimationFrame(j.count) : null != j.callback && j.callback()
  }, this.start = function (a) {
    return j.callback = a, isNaN(j.endVal) || isNaN(j.startVal) ? (console.log("countUp error: startVal or endVal is not a number"), j.printValue()) : j.rAF = requestAnimationFrame(j.count), !1
  }, this.stop = function () {
    cancelAnimationFrame(j.rAF)
  }, this.reset = function () {
    j.startTime = null, j.startVal = b, cancelAnimationFrame(j.rAF), j.printValue(j.startVal)
  }, this.resume = function () {
    j.stop(), j.startTime = null, j.duration = j.remaining, j.startVal = j.frameVal, requestAnimationFrame(j.count)
  }, this.update = function (a) {
    j.stop(), j.startTime = null, j.startVal = j.endVal, j.endVal = Number(a), j.countDown = j.startVal > j.endVal ? !0 : !1, j.rAF = requestAnimationFrame(j.count)
  }, this.formatNumber = function (a) {
    a = a.toFixed(j.decimals), a += "";
    var b, c, d, e;
    if (b = a.split("."), c = b[0], d = b.length > 1 ? j.options.decimal + b[1] : "", e = /(\d+)(\d{3})/, j.options.useGrouping)
      for (; e.test(c);) c = c.replace(e, "$1" + j.options.separator + "$2");
    return j.options.prefix + c + d + j.options.suffix
  }, j.printValue(j.startVal)
}
/*           end countup */
/*            http://akyurek.ua/wp-content/plugins/contact-form-7/includes/js/scripts.js */
(function ($) {
  'use strict';
  if (typeof _wpcf7 === 'undefined' || _wpcf7 === null) {
    return;
  }
  _wpcf7 = $.extend({
    cached: 0,
    inputs: []
  }, _wpcf7);
  $.fn.wpcf7InitForm = function () {
    this.ajaxForm({
      beforeSubmit: function (arr, $form, options) {
        $form.wpcf7ClearResponseOutput();
        $form.find('[aria-invalid]').attr('aria-invalid', 'false');
        $form.find('.ajax-loader').addClass('is-active');
        return true;
      },
      beforeSerialize: function ($form, options) {
        $form.find('[placeholder].placeheld').each(function (i, n) {
          $(n).val('');
        });
        return true;
      },
      data: {
        '_wpcf7_is_ajax_call': 1
      },
      dataType: 'json',
      success: $.wpcf7AjaxSuccess,
      error: function (xhr, status, error, $form) {
        var e = $('<div class="ajax-error"></div>').text(error.message);
        $form.after(e);
      }
    });
    if (_wpcf7.cached) {
      this.wpcf7OnloadRefill();
    }
    this.wpcf7ToggleSubmit();
    this.find('.wpcf7-submit').wpcf7AjaxLoader();
    this.find('.wpcf7-acceptance').click(function () {
      $(this).closest('form').wpcf7ToggleSubmit();
    });
    this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();
    this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();
    this.find('[placeholder]').wpcf7Placeholder();
    if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.date) {
      this.find('input.wpcf7-date[type="date"]').each(function () {
        $(this).datepicker({
          dateFormat: 'yy-mm-dd',
          minDate: new Date($(this).attr('min')),
          maxDate: new Date($(this).attr('max'))
        });
      });
    }
    if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.number) {
      this.find('input.wpcf7-number[type="number"]').each(function () {
        $(this).spinner({
          min: $(this).attr('min'),
          max: $(this).attr('max'),
          step: $(this).attr('step')
        });
      });
    }
    this.find('.wpcf7-character-count').wpcf7CharacterCount();
    this.find('.wpcf7-validates-as-url').change(function () {
      $(this).wpcf7NormalizeUrl();
    });
    this.find('.wpcf7-recaptcha').wpcf7Recaptcha();
  };
  $.wpcf7AjaxSuccess = function (data, status, xhr, $form) {
    if (!$.isPlainObject(data) || $.isEmptyObject(data)) {
      return;
    }
    _wpcf7.inputs = $form.serializeArray();
    var $responseOutput = $form.find('div.wpcf7-response-output');
    $form.wpcf7ClearResponseOutput();
    $form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
    $form.removeClass('invalid spam sent failed');
    if (data.captcha) {
      $form.wpcf7RefillCaptcha(data.captcha);
    }
    if (data.quiz) {
      $form.wpcf7RefillQuiz(data.quiz);
    }
    if (data.invalids) {
      $.each(data.invalids, function (i, n) {
        $form.find(n.into).wpcf7NotValidTip(n.message);
        $form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
        $form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
      });
      $responseOutput.addClass('wpcf7-validation-errors');
      $form.addClass('invalid');
      $(data.into).wpcf7TriggerEvent('invalid');
    } else if (1 == data.spam) {
      $form.find('[name="g-recaptcha-response"]').each(function () {
        if ('' == $(this).val()) {
          var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
          $recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);
        }
      });
      $responseOutput.addClass('wpcf7-spam-blocked');
      $form.addClass('spam');
      $(data.into).wpcf7TriggerEvent('spam');
    } else if (1 == data.mailSent) {
      $responseOutput.addClass('wpcf7-mail-sent-ok');
      $form.addClass('sent');
      if (data.onSentOk) {
        $.each(data.onSentOk, function (i, n) {
          eval(n)
        });
      }
      $(data.into).wpcf7TriggerEvent('mailsent');
    } else {
      $responseOutput.addClass('wpcf7-mail-sent-ng');
      $form.addClass('failed');
      $(data.into).wpcf7TriggerEvent('mailfailed');
    }
    if (data.onSubmit) {
      $.each(data.onSubmit, function (i, n) {
        eval(n)
      });
    }
    $(data.into).wpcf7TriggerEvent('submit');
    if (1 == data.mailSent) {
      $form.resetForm();
    }
    $form.find('[placeholder].placeheld').each(function (i, n) {
      $(n).val($(n).attr('placeholder'));
    });
    $responseOutput.append(data.message).slideDown('fast');
    $responseOutput.attr('role', 'alert');
    $.wpcf7UpdateScreenReaderResponse($form, data);
  };
  $.fn.wpcf7TriggerEvent = function (name) {
    return this.each(function () {
      var elmId = this.id;
      var inputs = _wpcf7.inputs;
      /* DOM event */
      var event = new CustomEvent('wpcf7' + name, {
        bubbles: true,
        detail: {
          id: elmId,
          inputs: inputs
        }
      });
      this.dispatchEvent(event);
      /* jQuery event */
      $(this).trigger('wpcf7:' + name);
      $(this).trigger(name + '.wpcf7');
    });
  };
  $.fn.wpcf7ExclusiveCheckbox = function () {
    return this.find('input:checkbox').click(function () {
      var name = $(this).attr('name');
      $(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
    });
  };
  $.fn.wpcf7Placeholder = function () {
    if (_wpcf7.supportHtml5.placeholder) {
      return this;
    }
    return this.each(function () {
      $(this).val($(this).attr('placeholder'));
      $(this).addClass('placeheld');
      $(this).focus(function () {
        if ($(this).hasClass('placeheld')) {
          $(this).val('').removeClass('placeheld');
        }
      });
      $(this).blur(function () {
        if ('' === $(this).val()) {
          $(this).val($(this).attr('placeholder'));
          $(this).addClass('placeheld');
        }
      });
    });
  };
  $.fn.wpcf7AjaxLoader = function () {
    return this.each(function () {
      $(this).after('<span class="ajax-loader"></span>');
    });
  };
  $.fn.wpcf7ToggleSubmit = function () {
    return this.each(function () {
      var form = $(this);
      if (this.tagName.toLowerCase() != 'form') {
        form = $(this).find('form').first();
      }
      if (form.hasClass('wpcf7-acceptance-as-validation')) {
        return;
      }
      var submit = form.find('input:submit');
      if (!submit.length) {
        return;
      }
      var acceptances = form.find('input:checkbox.wpcf7-acceptance');
      if (!acceptances.length) {
        return;
      }
      submit.removeAttr('disabled');
      acceptances.each(function (i, n) {
        n = $(n);
        if (n.hasClass('wpcf7-invert') && n.is(':checked') ||
          !n.hasClass('wpcf7-invert') && !n.is(':checked')) {
          submit.attr('disabled', 'disabled');
        }
      });
    });
  };
  $.fn.wpcf7ToggleCheckboxFreetext = function () {
    return this.each(function () {
      var $wrap = $(this).closest('.wpcf7-form-control');
      if ($(this).find(':checkbox, :radio').is(':checked')) {
        $(this).find(':input.wpcf7-free-text').prop('disabled', false);
      } else {
        $(this).find(':input.wpcf7-free-text').prop('disabled', true);
      }
      $wrap.find(':checkbox, :radio').change(function () {
        var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
        var $freetext = $(':input.wpcf7-free-text', $wrap);
        if ($cb.is(':checked')) {
          $freetext.prop('disabled', false).focus();
        } else {
          $freetext.prop('disabled', true);
        }
      });
    });
  };
  $.fn.wpcf7CharacterCount = function () {
    return this.each(function () {
      var $count = $(this);
      var name = $count.attr('data-target-name');
      var down = $count.hasClass('down');
      var starting = parseInt($count.attr('data-starting-value'), 10);
      var maximum = parseInt($count.attr('data-maximum-value'), 10);
      var minimum = parseInt($count.attr('data-minimum-value'), 10);
      var updateCount = function ($target) {
        var length = $target.val().length;
        var count = down ? starting - length : length;
        $count.attr('data-current-value', count);
        $count.text(count);
        if (maximum && maximum < length) {
          $count.addClass('too-long');
        } else {
          $count.removeClass('too-long');
        }
        if (minimum && length < minimum) {
          $count.addClass('too-short');
        } else {
          $count.removeClass('too-short');
        }
      };
      $count.closest('form').find(':input[name="' + name + '"]').each(function () {
        updateCount($(this));
        $(this).keyup(function () {
          updateCount($(this));
        });
      });
    });
  };
  $.fn.wpcf7NormalizeUrl = function () {
    return this.each(function () {
      var val = $.trim($(this).val());
      if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i)) {
        val = val.replace(/^\/+/, '');
        val = 'http://' + val;
      }
      $(this).val(val);
    });
  };
  $.fn.wpcf7NotValidTip = function (message) {
    return this.each(function () {
      var $into = $(this);
      $into.find('span.wpcf7-not-valid-tip').remove();
      $into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');
      if ($into.is('.use-floating-validation-tip *')) {
        $('.wpcf7-not-valid-tip', $into).mouseover(function () {
          $(this).wpcf7FadeOut();
        });
        $(':input', $into).focus(function () {
          $('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
        });
      }
    });
  };
  $.fn.wpcf7FadeOut = function () {
    return this.each(function () {
      $(this).animate({
        opacity: 0
      }, 'fast', function () {
        $(this).css({
          'z-index': -100
        });
      });
    });
  };
  $.fn.wpcf7OnloadRefill = function () {
    return this.each(function () {
      var url = $(this).attr('action');
      if (0 < url.indexOf('#')) {
        url = url.substr(0, url.indexOf('#'));
      }
      var id = $(this).find('input[name="_wpcf7"]').val();
      var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();
      $.getJSON(url, {
          _wpcf7_is_ajax_call: 1,
          _wpcf7: id,
          _wpcf7_request_ver: $.now()
        },
        function (data) {
          if (data && data.captcha) {
            $('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
          }
          if (data && data.quiz) {
            $('#' + unitTag).wpcf7RefillQuiz(data.quiz);
          }
        }
      );
    });
  };
  $.fn.wpcf7RefillCaptcha = function (captcha) {
    return this.each(function () {
      var form = $(this);
      $.each(captcha, function (i, n) {
        form.find(':input[name="' + i + '"]').clearFields();
        form.find('img.wpcf7-captcha-' + i).attr('src', n);
        var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
      });
    });
  };
  $.fn.wpcf7RefillQuiz = function (quiz) {
    return this.each(function () {
      var form = $(this);
      $.each(quiz, function (i, n) {
        form.find(':input[name="' + i + '"]').clearFields();
        form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
        form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
      });
    });
  };
  $.fn.wpcf7ClearResponseOutput = function () {
    return this.each(function () {
      $(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
      $(this).find('span.wpcf7-not-valid-tip').remove();
      $(this).find('.ajax-loader').removeClass('is-active');
    });
  };
  $.fn.wpcf7Recaptcha = function () {
    return this.each(function () {
      var events = 'wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';
      $(this).closest('div.wpcf7').on(events, function (e) {
        if (recaptchaWidgets && grecaptcha) {
          $.each(recaptchaWidgets, function (index, value) {
            grecaptcha.reset(value);
          });
        }
      });
    });
  };
  $.wpcf7UpdateScreenReaderResponse = function ($form, data) {
    $('.wpcf7 .screen-reader-response').html('').attr('role', '');
    if (data.message) {
      var $response = $form.siblings('.screen-reader-response').first();
      $response.append(data.message);
      if (data.invalids) {
        var $invalids = $('<ul></ul>');
        $.each(data.invalids, function (i, n) {
          if (n.idref) {
            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
          } else {
            var $li = $('<li></li>').append(n.message);
          }
          $invalids.append($li);
        });
        $response.append($invalids);
      }
      $response.attr('role', 'alert').focus();
    }
  };
  $.wpcf7SupportHtml5 = function () {
    var features = {};
    var input = document.createElement('input');
    features.placeholder = 'placeholder' in input;
    var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
    $.each(inputTypes, function (index, value) {
      input.setAttribute('type', value);
      features[value] = input.type !== 'text';
    });
    return features;
  };
  $(function () {
    _wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
    $('div.wpcf7 > form').wpcf7InitForm();
  });
})(jQuery);
(function () {
  if (typeof window.CustomEvent === "function") return false;
  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event,
      params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
  function b(b, d) {
    var e, f, g, h = b.nodeName.toLowerCase();
    return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
  }
  function c(b) {
    return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
      return "hidden" === a.css(this, "visibility")
    }).length
  }
  a.ui = a.ui || {}, a.extend(a.ui, {
    version: "1.11.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), a.fn.extend({
    scrollParent: function (b) {
      var c = this.css("position"),
        d = "absolute" === c,
        e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        f = this.parents().filter(function () {
          var b = a(this);
          return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
        }).eq(0);
      return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
    },
    uniqueId: function () {
      var a = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++a)
        })
      }
    }(),
    removeUniqueId: function () {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
      })
    }
  }), a.extend(a.expr[":"], {
    data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
      return function (c) {
        return !!a.data(c, b)
      }
    }) : function (b, c, d) {
      return !!a.data(b, d[3])
    },
    focusable: function (c) {
      return b(c, !isNaN(a.attr(c, "tabindex")))
    },
    tabbable: function (c) {
      var d = a.attr(c, "tabindex"),
        e = isNaN(d);
      return (e || d >= 0) && b(c, !e)
    }
  }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (b, c) {
    function d(b, c, d, f) {
      return a.each(e, function () {
        c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
      }), c
    }
    var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
      f = c.toLowerCase(),
      g = {
        innerWidth: a.fn.innerWidth,
        innerHeight: a.fn.innerHeight,
        outerWidth: a.fn.outerWidth,
        outerHeight: a.fn.outerHeight
      };
    a.fn["inner" + c] = function (b) {
      return void 0 === b ? g["inner" + c].call(this) : this.each(function () {
        a(this).css(f, d(this, b) + "px")
      })
    }, a.fn["outer" + c] = function (b, e) {
      return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function () {
        a(this).css(f, d(this, b, !0, e) + "px")
      })
    }
  }), a.fn.addBack || (a.fn.addBack = function (a) {
    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
  }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
    return function (c) {
      return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
    }
  }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
    focus: function (b) {
      return function (c, d) {
        return "number" == typeof c ? this.each(function () {
          var b = this;
          setTimeout(function () {
            a(b).focus(), d && d.call(b)
          }, c)
        }) : b.apply(this, arguments)
      }
    }(a.fn.focus),
    disableSelection: function () {
      var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.bind(a + ".ui-disableSelection", function (a) {
          a.preventDefault()
        })
      }
    }(),
    enableSelection: function () {
      return this.unbind(".ui-disableSelection")
    },
    zIndex: function (b) {
      if (void 0 !== b) return this.css("zIndex", b);
      if (this.length)
        for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
          if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
          e = e.parent()
        }
      return 0
    }
  }), a.ui.plugin = {
    add: function (b, c, d) {
      var e, f = a.ui[b].prototype;
      for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
    },
    call: function (a, b, c, d) {
      var e, f = a.plugins[b];
      if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
        for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
    }
  }
});
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery)
}(function (a) {
  function b(a) {
    for (var b, c; a.length && a[0] !== document;) {
      if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)) return c;
      a = a.parent()
    }
    return 0
  }
  function c() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, a.extend(this._defaults, this.regional[""]), this.regional.en = a.extend(!0, {}, this.regional[""]), this.regional["en-US"] = a.extend(!0, {}, this.regional.en), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }
  function d(b) {
    var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return b.delegate(c, "mouseout", function () {
      a(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && a(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && a(this).removeClass("ui-datepicker-next-hover")
    }).delegate(c, "mouseover", e)
  }
  function e() {
    a.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && a(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && a(this).addClass("ui-datepicker-next-hover"))
  }
  function f(b, c) {
    a.extend(b, c);
    for (var d in c) null == c[d] && (b[d] = c[d]);
    return b
  }
  a.extend(a.ui, {
    datepicker: {
      version: "1.11.4"
    }
  });
  var g;
  return a.extend(c.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv
    },
    setDefaults: function (a) {
      return f(this._defaults, a || {}), this
    },
    _attachDatepicker: function (b, c) {
      var d, e, f;
      d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
    },
    _newInst: function (b, c) {
      var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: e,
        input: b,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: c,
        dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      }
    },
    _connectDatepicker: function (b, c) {
      var d = a(b);
      c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b))
    },
    _attachments: function (b, c) {
      var d, e, f, g = this._get(c, "appendText"),
        h = this._get(c, "isRTL");
      c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), "focus" !== d && "both" !== d || b.focus(this._showDatepicker), "button" !== d && "both" !== d || (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
        src: f,
        alt: e,
        title: e
      }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
        src: f,
        alt: e,
        title: e
      }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function () {
        return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
      }))
    },
    _autoSize: function (a) {
      if (this._get(a, "autoSize") && !a.inline) {
        var b, c, d, e, f = new Date(2009, 11, 20),
          g = this._get(a, "dateFormat");
        g.match(/[DM]/) && (b = function (a) {
          for (c = 0, d = 0, e = 0; e < a.length; e++) a[e].length > c && (c = a[e].length, d = e);
          return d
        }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
      }
    },
    _inlineDatepicker: function (b, c) {
      var d = a(b);
      d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
    },
    _dialogDatepicker: function (b, c, d, e, g) {
      var h, i, j, k, l, m = this._dialogInst;
      return m || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), f(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, this._dialogInput.val(c), this._pos = g ? g.length ? g : [g.pageX, g.pageY] : null, this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [i / 2 - 100 + k, j / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", m), this
    },
    _destroyDatepicker: function (b) {
      var c, d = a(b),
        e = a.data(b, "datepicker");
      d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== c && "span" !== c || d.removeClass(this.markerClassName).empty(), g === e && (g = null))
    },
    _enableDatepicker: function (b) {
      var c, d, e = a(b),
        f = a.data(b, "datepicker");
      e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function () {
        this.disabled = !1
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : "div" !== c && "span" !== c || (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function (a) {
        return a === b ? null : a
      }))
    },
    _disableDatepicker: function (b) {
      var c, d, e = a(b),
        f = a.data(b, "datepicker");
      e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function () {
        this.disabled = !0
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : "div" !== c && "span" !== c || (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function (a) {
        return a === b ? null : a
      }), this._disabledInputs[this._disabledInputs.length] = b)
    },
    _isDisabledDatepicker: function (a) {
      if (!a) return !1;
      for (var b = 0; b < this._disabledInputs.length; b++)
        if (this._disabledInputs[b] === a) return !0;
      return !1
    },
    _getInst: function (b) {
      try {
        return a.data(b, "datepicker")
      } catch (c) {
        throw "Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function (b, c, d) {
      var e, g, h, i, j = this._getInst(b);
      return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), void(j && (this._curInst === j && this._hideDatepicker(), g = this._getDateDatepicker(b, !0), h = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), f(j.settings, e), null !== h && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, h)), null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), j), this._autoSize(j), this._setDate(j, g), this._updateAlternate(j), this._updateDatepicker(j))))
    },
    _changeDatepicker: function (a, b, c) {
      this._optionDatepicker(a, b, c)
    },
    _refreshDatepicker: function (a) {
      var b = this._getInst(a);
      b && this._updateDatepicker(b)
    },
    _setDateDatepicker: function (a, b) {
      var c = this._getInst(a);
      c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
    },
    _getDateDatepicker: function (a, b) {
      var c = this._getInst(a);
      return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
    },
    _doKeyDown: function (b) {
      var c, d, e, f = a.datepicker._getInst(b.target),
        g = !0,
        h = f.dpDiv.is(".ui-datepicker-rtl");
      if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
        case 9:
          a.datepicker._hideDatepicker(), g = !1;
          break;
        case 13:
          return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
        case 27:
          a.datepicker._hideDatepicker();
          break;
        case 33:
          a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
          break;
        case 34:
          a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
          break;
        case 35:
          (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
          break;
        case 36:
          (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
          break;
        case 37:
          (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
          break;
        case 38:
          (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
          break;
        case 39:
          (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
          break;
        case 40:
          (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
          break;
        default:
          g = !1
      } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
      g && (b.preventDefault(), b.stopPropagation())
    },
    _doKeyPress: function (b) {
      var c, d, e = a.datepicker._getInst(b.target);
      if (a.datepicker._get(e, "constrainInput")) return c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || d < " " || !c || c.indexOf(d) > -1
    },
    _doKeyUp: function (b) {
      var c, d = a.datepicker._getInst(b.target);
      if (d.input.val() !== d.lastVal) try {
        c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
      } catch (e) {}
      return !0
    },
    _showDatepicker: function (c) {
      if (c = c.target || c, "input" !== c.nodeName.toLowerCase() && (c = a("input", c.parentNode)[0]), !a.datepicker._isDisabledDatepicker(c) && a.datepicker._lastInput !== c) {
        var d, e, g, h, i, j, k;
        d = a.datepicker._getInst(c), a.datepicker._curInst && a.datepicker._curInst !== d && (a.datepicker._curInst.dpDiv.stop(!0, !0), d && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), e = a.datepicker._get(d, "beforeShow"), g = e ? e.apply(c, [c, d]) : {}, g !== !1 && (f(d.settings, g), d.lastVal = null, a.datepicker._lastInput = c, a.datepicker._setDateFromField(d), a.datepicker._inDialog && (c.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(c), a.datepicker._pos[1] += c.offsetHeight), h = !1, a(c).parents().each(function () {
          return h |= "fixed" === a(this).css("position"), !h
        }), i = {
          left: a.datepicker._pos[0],
          top: a.datepicker._pos[1]
        }, a.datepicker._pos = null, d.dpDiv.empty(), d.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), a.datepicker._updateDatepicker(d), i = a.datepicker._checkOffset(d, i, h), d.dpDiv.css({
          position: a.datepicker._inDialog && a.blockUI ? "static" : h ? "fixed" : "absolute",
          display: "none",
          left: i.left + "px",
          top: i.top + "px"
        }), d.inline || (j = a.datepicker._get(d, "showAnim"), k = a.datepicker._get(d, "duration"), d.dpDiv.css("z-index", b(a(c)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? d.dpDiv.show(j, a.datepicker._get(d, "showOptions"), k) : d.dpDiv[j || "show"](j ? k : null), a.datepicker._shouldFocusInput(d) && d.input.focus(), a.datepicker._curInst = d))
      }
    },
    _updateDatepicker: function (b) {
      this.maxRows = 4, g = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b);
      var c, d = this._getNumberOfMonths(b),
        f = d[1],
        h = 17,
        i = b.dpDiv.find("." + this._dayOverClass + " a");
      i.length > 0 && e.apply(i.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", h * f + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function () {
        c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
      }, 0))
    },
    _shouldFocusInput: function (a) {
      return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
    },
    _checkOffset: function (b, c, d) {
      var e = b.dpDiv.outerWidth(),
        f = b.dpDiv.outerHeight(),
        g = b.input ? b.input.outerWidth() : 0,
        h = b.input ? b.input.outerHeight() : 0,
        i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
        j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
      return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
    },
    _findPos: function (b) {
      for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
      return c = a(b).offset(), [c.left, c.top]
    },
    _hideDatepicker: function (b) {
      var c, d, e, f, g = this._curInst;
      !g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function () {
        a.datepicker._tidyDialog(g)
      }, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
    },
    _tidyDialog: function (a) {
      a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    },
    _checkExternalClick: function (b) {
      if (a.datepicker._curInst) {
        var c = a(b.target),
          d = a.datepicker._getInst(c[0]);
        (c[0].id === a.datepicker._mainDivId || 0 !== c.parents("#" + a.datepicker._mainDivId).length || c.hasClass(a.datepicker.markerClassName) || c.closest("." + a.datepicker._triggerClass).length || !a.datepicker._datepickerShowing || a.datepicker._inDialog && a.blockUI) && (!c.hasClass(a.datepicker.markerClassName) || a.datepicker._curInst === d) || a.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function (b, c, d) {
      var e = a(b),
        f = this._getInst(e[0]);
      this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
    },
    _gotoToday: function (b) {
      var c, d = a(b),
        e = this._getInst(d[0]);
      this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
    },
    _selectMonthYear: function (b, c, d) {
      var e = a(b),
        f = this._getInst(e[0]);
      f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
    },
    _selectDay: function (b, c, d, e) {
      var f, g = a(b);
      a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
    },
    _clearDate: function (b) {
      var c = a(b);
      this._selectDate(c, "")
    },
    _selectDate: function (b, c) {
      var d, e = a(b),
        f = this._getInst(e[0]);
      c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
    },
    _updateAlternate: function (b) {
      var c, d, e, f = this._get(b, "altField");
      f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function () {
        a(this).val(e)
      }))
    },
    noWeekends: function (a) {
      var b = a.getDay();
      return [b > 0 && b < 6, ""]
    },
    iso8601Week: function (a) {
      var b, c = new Date(a.getTime());
      return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
    },
    parseDate: function (b, c, d) {
      if (null == b || null == c) throw "Invalid arguments";
      if (c = "object" == typeof c ? c.toString() : c + "", "" === c) return null;
      var e, f, g, h, i = 0,
        j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
        l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
        m = (d ? d.dayNames : null) || this._defaults.dayNames,
        n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
        o = (d ? d.monthNames : null) || this._defaults.monthNames,
        p = -1,
        q = -1,
        r = -1,
        s = -1,
        t = !1,
        u = function (a) {
          var c = e + 1 < b.length && b.charAt(e + 1) === a;
          return c && e++, c
        },
        v = function (a) {
          var b = u(a),
            d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
            e = "y" === a ? d : 1,
            f = new RegExp("^\\d{" + e + "," + d + "}"),
            g = c.substring(i).match(f);
          if (!g) throw "Missing number at position " + i;
          return i += g[0].length, parseInt(g[0], 10)
        },
        w = function (b, d, e) {
          var f = -1,
            g = a.map(u(b) ? e : d, function (a, b) {
              return [[b, a]]
            }).sort(function (a, b) {
              return -(a[1].length - b[1].length)
            });
          if (a.each(g, function (a, b) {
              var d = b[1];
              if (c.substr(i, d.length).toLowerCase() === d.toLowerCase()) return f = b[0], i += d.length, !1
            }), f !== -1) return f + 1;
          throw "Unknown name at position " + i
        },
        x = function () {
          if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
          i++
        };
      for (e = 0; e < b.length; e++)
        if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
        else switch (b.charAt(e)) {
          case "d":
            r = v("d");
            break;
          case "D":
            w("D", l, m);
            break;
          case "o":
            s = v("o");
            break;
          case "m":
            q = v("m");
            break;
          case "M":
            q = w("M", n, o);
            break;
          case "y":
            p = v("y");
            break;
          case "@":
            h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
            break;
          case "!":
            h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
            break;
          case "'":
            u("'") ? x() : t = !0;
            break;
          default:
            x()
        }
      if (i < c.length && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
      if (p === -1 ? p = (new Date).getFullYear() : p < 100 && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (p <= k ? 0 : -100)), s > -1)
        for (q = 1, r = s;;) {
          if (f = this._getDaysInMonth(p, q - 1), r <= f) break;
          q++, r -= f
        }
      if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
      return h
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
    formatDate: function (a, b, c) {
      if (!b) return "";
      var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
        f = (c ? c.dayNames : null) || this._defaults.dayNames,
        g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
        h = (c ? c.monthNames : null) || this._defaults.monthNames,
        i = function (b) {
          var c = d + 1 < a.length && a.charAt(d + 1) === b;
          return c && d++, c
        },
        j = function (a, b, c) {
          var d = "" + b;
          if (i(a))
            for (; d.length < c;) d = "0" + d;
          return d
        },
        k = function (a, b, c, d) {
          return i(a) ? d[b] : c[b]
        },
        l = "",
        m = !1;
      if (b)
        for (d = 0; d < a.length; d++)
          if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
          else switch (a.charAt(d)) {
            case "d":
              l += j("d", b.getDate(), 2);
              break;
            case "D":
              l += k("D", b.getDay(), e, f);
              break;
            case "o":
              l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              l += j("m", b.getMonth() + 1, 2);
              break;
            case "M":
              l += k("M", b.getMonth(), g, h);
              break;
            case "y":
              l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
              break;
            case "@":
              l += b.getTime();
              break;
            case "!":
              l += 1e4 * b.getTime() + this._ticksTo1970;
              break;
            case "'":
              i("'") ? l += "'" : m = !0;
              break;
            default:
              l += a.charAt(d)
          }
      return l
    },
    _possibleChars: function (a) {
      var b, c = "",
        d = !1,
        e = function (c) {
          var d = b + 1 < a.length && a.charAt(b + 1) === c;
          return d && b++, d
        };
      for (b = 0; b < a.length; b++)
        if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
        else switch (a.charAt(b)) {
          case "d":
          case "m":
          case "y":
          case "@":
            c += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            e("'") ? c += "'" : d = !0;
            break;
          default:
            c += a.charAt(b)
        }
      return c
    },
    _get: function (a, b) {
      return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b]
    },
    _setDateFromField: function (a, b) {
      if (a.input.val() !== a.lastVal) {
        var c = this._get(a, "dateFormat"),
          d = a.lastVal = a.input ? a.input.val() : null,
          e = this._getDefaultDate(a),
          f = e,
          g = this._getFormatConfig(a);
        try {
          f = this.parseDate(c, d, g) || e
        } catch (h) {
          d = b ? "" : d
        }
        a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
      }
    },
    _getDefaultDate: function (a) {
      return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
    },
    _determineDate: function (b, c, d) {
      var e = function (a) {
          var b = new Date;
          return b.setDate(b.getDate() + a), b
        },
        f = function (c) {
          try {
            return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
          } catch (d) {}
          for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
            switch (j[2] || "d") {
              case "d":
              case "D":
                h += parseInt(j[1], 10);
                break;
              case "w":
              case "W":
                h += 7 * parseInt(j[1], 10);
                break;
              case "m":
              case "M":
                g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                break;
              case "y":
              case "Y":
                f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
            }
            j = i.exec(c)
          }
          return new Date(f, g, h)
        },
        g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
      return g = g && "Invalid Date" === g.toString() ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
    },
    _daylightSavingAdjust: function (a) {
      return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
    },
    _setDate: function (a, b, c) {
      var d = !b,
        e = a.selectedMonth,
        f = a.selectedYear,
        g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
      a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
    },
    _getDate: function (a) {
      var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
      return b
    },
    _attachHandlers: function (b) {
      var c = this._get(b, "stepMonths"),
        d = "#" + b.id.replace(/\\\\/g, "\\");
      b.dpDiv.find("[data-handler]").map(function () {
        var b = {
          prev: function () {
            a.datepicker._adjustDate(d, -c, "M")
          },
          next: function () {
            a.datepicker._adjustDate(d, +c, "M")
          },
          hide: function () {
            a.datepicker._hideDatepicker()
          },
          today: function () {
            a.datepicker._gotoToday(d)
          },
          selectDay: function () {
            return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
          },
          selectMonth: function () {
            return a.datepicker._selectMonthYear(d, this, "M"), !1
          },
          selectYear: function () {
            return a.datepicker._selectMonthYear(d, this, "Y"), !1
          }
        };
        a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function (a) {
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
        P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
        Q = this._get(a, "isRTL"),
        R = this._get(a, "showButtonPanel"),
        S = this._get(a, "hideIfNoPrevNext"),
        T = this._get(a, "navigationAsDateFormat"),
        U = this._getNumberOfMonths(a),
        V = this._get(a, "showCurrentAtPos"),
        W = this._get(a, "stepMonths"),
        X = 1 !== U[0] || 1 !== U[1],
        Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
        Z = this._getMinMaxDate(a, "min"),
        $ = this._getMinMaxDate(a, "max"),
        _ = a.drawMonth - V,
        aa = a.drawYear;
      if (_ < 0 && (_ += 12, aa--), $)
        for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && b < Z ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) _--, _ < 0 && (_ = 11, aa--);
      for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; w < U[0]; w++) {
        for (x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
          if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
            if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
              case 0:
                B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                break;
              case U[1] - 1:
                B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                break;
              default:
                B += " ui-datepicker-group-middle", A = ""
            }
            B += "'>"
          }
          for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; v < 7; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
          for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; J < H; J++) {
            for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; v < 7; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && I < Z || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
            B += K + "</tr>"
          }
          _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
        }
        u += x
      }
      return u += j, a._keyEvent = !1, u
    },
    _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) {
      var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
        r = this._get(a, "changeYear"),
        s = this._get(a, "showMonthAfterYear"),
        t = "<div class='ui-datepicker-title'>",
        u = "";
      if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
      else {
        for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; k < 12; k++)(!i || k >= d.getMonth()) && (!j || k <= e.getMonth()) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
        u += "</select>"
      }
      if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
        if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
        else {
          for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function (a) {
              var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
              return isNaN(b) ? m : b
            }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; o <= p; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
          a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
        }
      return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
    },
    _adjustInstDate: function (a, b, c) {
      var d = a.drawYear + ("Y" === c ? b : 0),
        e = a.drawMonth + ("M" === c ? b : 0),
        f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
        g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
      a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), "M" !== c && "Y" !== c || this._notifyChange(a)
    },
    _restrictMinMax: function (a, b) {
      var c = this._getMinMaxDate(a, "min"),
        d = this._getMinMaxDate(a, "max"),
        e = c && b < c ? c : b;
      return d && e > d ? d : e
    },
    _notifyChange: function (a) {
      var b = this._get(a, "onChangeMonthYear");
      b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
    },
    _getNumberOfMonths: function (a) {
      var b = this._get(a, "numberOfMonths");
      return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
    },
    _getMinMaxDate: function (a, b) {
      return this._determineDate(a, this._get(a, b + "Date"), null)
    },
    _getDaysInMonth: function (a, b) {
      return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
    },
    _getFirstDayOfMonth: function (a, b) {
      return new Date(a, b, 1).getDay()
    },
    _canAdjustMonth: function (a, b, c, d) {
      var e = this._getNumberOfMonths(a),
        f = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1));
      return b < 0 && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
    },
    _isInRange: function (a, b) {
      var c, d, e = this._getMinMaxDate(a, "min"),
        f = this._getMinMaxDate(a, "max"),
        g = null,
        h = null,
        i = this._get(a, "yearRange");
      return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h)
    },
    _getFormatConfig: function (a) {
      var b = this._get(a, "shortYearCutoff");
      return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
        shortYearCutoff: b,
        dayNamesShort: this._get(a, "dayNamesShort"),
        dayNames: this._get(a, "dayNames"),
        monthNamesShort: this._get(a, "monthNamesShort"),
        monthNames: this._get(a, "monthNames")
      }
    },
    _formatDate: function (a, b, c, d) {
      b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
      var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
      return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
    }
  }), a.fn.datepicker = function (b) {
    if (!this.length) return this;
    a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
    var c = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function () {
      "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
    }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
  }, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.11.4", a.datepicker
});
(function (e) {
  "function" == typeof define && define.amd ? define(["../datepicker"], e) : e(jQuery.datepicker)
})(function (e) {
  return e.regional.ru = {
    closeText: "Закрыть",
    prevText: "&#x3C;Пред",
    nextText: "След&#x3E;",
    currentText: "Сегодня",
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    weekHeader: "Нед",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ""
  }, e.setDefaults(e.regional.ru), e.regional.ru
});
(function ($) {
  if ($.ui.timepicker = $.ui.timepicker || {}, !$.ui.timepicker.version) {
    $.extend($.ui, {
      timepicker: {
        version: "1.4.1"
      }
    });
    var Timepicker = function () {
      this.regional = [], this.regional[""] = {
        currentText: "Now",
        closeText: "Done",
        amNames: ["AM", "A"],
        pmNames: ["PM", "P"],
        timeFormat: "HH:mm",
        timeSuffix: "",
        timeOnlyTitle: "Choose Time",
        timeText: "Time",
        hourText: "Hour",
        minuteText: "Minute",
        secondText: "Second",
        millisecText: "Millisecond",
        microsecText: "Microsecond",
        timezoneText: "Time Zone",
        isRTL: !1
      }, this._defaults = {
        showButtonPanel: !0,
        timeOnly: !1,
        showHour: null,
        showMinute: null,
        showSecond: null,
        showMillisec: null,
        showMicrosec: null,
        showTimezone: null,
        showTime: !0,
        stepHour: 1,
        stepMinute: 1,
        stepSecond: 1,
        stepMillisec: 1,
        stepMicrosec: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        microsec: 0,
        timezone: null,
        hourMin: 0,
        minuteMin: 0,
        secondMin: 0,
        millisecMin: 0,
        microsecMin: 0,
        hourMax: 23,
        minuteMax: 59,
        secondMax: 59,
        millisecMax: 999,
        microsecMax: 999,
        minDateTime: null,
        maxDateTime: null,
        onSelect: null,
        hourGrid: 0,
        minuteGrid: 0,
        secondGrid: 0,
        millisecGrid: 0,
        microsecGrid: 0,
        alwaysSetTime: !0,
        separator: " ",
        altFieldTimeOnly: !0,
        altTimeFormat: null,
        altSeparator: null,
        altTimeSuffix: null,
        pickerTimeFormat: null,
        pickerTimeSuffix: null,
        showTimepicker: !0,
        timezoneList: null,
        addSliderAccess: !1,
        sliderAccessArgs: null,
        controlType: "slider",
        defaultValue: null,
        parse: "strict"
      }, $.extend(this._defaults, this.regional[""])
    };
    $.extend(Timepicker.prototype, {
      $input: null,
      $altInput: null,
      $timeObj: null,
      inst: null,
      hour_slider: null,
      minute_slider: null,
      second_slider: null,
      millisec_slider: null,
      microsec_slider: null,
      timezone_select: null,
      hour: 0,
      minute: 0,
      second: 0,
      millisec: 0,
      microsec: 0,
      timezone: null,
      hourMinOriginal: null,
      minuteMinOriginal: null,
      secondMinOriginal: null,
      millisecMinOriginal: null,
      microsecMinOriginal: null,
      hourMaxOriginal: null,
      minuteMaxOriginal: null,
      secondMaxOriginal: null,
      millisecMaxOriginal: null,
      microsecMaxOriginal: null,
      ampm: "",
      formattedDate: "",
      formattedTime: "",
      formattedDateTime: "",
      timezoneList: null,
      units: ["hour", "minute", "second", "millisec", "microsec"],
      support: {},
      control: null,
      setDefaults: function (e) {
        return extendRemove(this._defaults, e || {}), this
      },
      _newInst: function ($input, opts) {
        var tp_inst = new Timepicker,
          inlineSettings = {},
          fns = {},
          overrides, i;
        for (var attrName in this._defaults)
          if (this._defaults.hasOwnProperty(attrName)) {
            var attrValue = $input.attr("time:" + attrName);
            if (attrValue) try {
              inlineSettings[attrName] = eval(attrValue)
            } catch (err) {
              inlineSettings[attrName] = attrValue
            }
          }
        overrides = {
          beforeShow: function (e, t) {
            return $.isFunction(tp_inst._defaults.evnts.beforeShow) ? tp_inst._defaults.evnts.beforeShow.call($input[0], e, t, tp_inst) : void 0
          },
          onChangeMonthYear: function (e, t, i) {
            tp_inst._updateDateTime(i), $.isFunction(tp_inst._defaults.evnts.onChangeMonthYear) && tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], e, t, i, tp_inst)
          },
          onClose: function (e, t) {
            tp_inst.timeDefined === !0 && "" !== $input.val() && tp_inst._updateDateTime(t), $.isFunction(tp_inst._defaults.evnts.onClose) && tp_inst._defaults.evnts.onClose.call($input[0], e, t, tp_inst)
          }
        };
        for (i in overrides) overrides.hasOwnProperty(i) && (fns[i] = opts[i] || null);
        tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
          evnts: fns,
          timepicker: tp_inst
        }), tp_inst.amNames = $.map(tp_inst._defaults.amNames, function (e) {
          return e.toUpperCase()
        }), tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function (e) {
          return e.toUpperCase()
        }), tp_inst.support = detectSupport(tp_inst._defaults.timeFormat + (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : "") + (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : "")), "string" == typeof tp_inst._defaults.controlType ? ("slider" === tp_inst._defaults.controlType && $.ui.slider === void 0 && (tp_inst._defaults.controlType = "select"), tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType]) : tp_inst.control = tp_inst._defaults.controlType;
        var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60, 0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840];
        null !== tp_inst._defaults.timezoneList && (timezoneList = tp_inst._defaults.timezoneList);
        var tzl = timezoneList.length,
          tzi = 0,
          tzv = null;
        if (tzl > 0 && "object" != typeof timezoneList[0])
          for (; tzl > tzi; tzi++) tzv = timezoneList[tzi], timezoneList[tzi] = {
            value: tzv,
            label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601)
          };
        return tp_inst._defaults.timezoneList = timezoneList, tp_inst.timezone = null !== tp_inst._defaults.timezone ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : -1 * (new Date).getTimezoneOffset(), tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour, tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute, tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second, tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec, tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin : tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec, tp_inst.ampm = "", tp_inst.$input = $input, tp_inst._defaults.altField && (tp_inst.$altInput = $(tp_inst._defaults.altField).css({
          cursor: "pointer"
        }).focus(function () {
          $input.trigger("focus")
        })), (0 === tp_inst._defaults.minDate || 0 === tp_inst._defaults.minDateTime) && (tp_inst._defaults.minDate = new Date), (0 === tp_inst._defaults.maxDate || 0 === tp_inst._defaults.maxDateTime) && (tp_inst._defaults.maxDate = new Date), void 0 !== tp_inst._defaults.minDate && tp_inst._defaults.minDate instanceof Date && (tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime())), void 0 !== tp_inst._defaults.minDateTime && tp_inst._defaults.minDateTime instanceof Date && (tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime())), void 0 !== tp_inst._defaults.maxDate && tp_inst._defaults.maxDate instanceof Date && (tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime())), void 0 !== tp_inst._defaults.maxDateTime && tp_inst._defaults.maxDateTime instanceof Date && (tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime())), tp_inst.$input.bind("focus", function () {
          tp_inst._onFocus()
        }), tp_inst
      },
      _addTimePicker: function (e) {
        var t = this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val();
        this.timeDefined = this._parseTime(t), this._limitMinMaxDateTime(e, !1), this._injectTimePicker()
      },
      _parseTime: function (e, t) {
        if (this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), t || !this._defaults.timeOnly) {
          var i = $.datepicker._get(this.inst, "dateFormat");
          try {
            var s = parseDateTimeInternal(i, this._defaults.timeFormat, e, $.datepicker._getFormatConfig(this.inst), this._defaults);
            if (!s.timeObj) return !1;
            $.extend(this, s.timeObj)
          } catch (a) {
            return $.timepicker.log("Error parsing the date/time string: " + a + "\ndate/time string = " + e + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + i), !1
          }
          return !0
        }
        var n = $.datepicker.parseTime(this._defaults.timeFormat, e, this._defaults);
        return n ? ($.extend(this, n), !0) : !1
      },
      _injectTimePicker: function () {
        var e = this.inst.dpDiv,
          t = this.inst.settings,
          i = this,
          s = "",
          a = "",
          n = null,
          r = {},
          l = {},
          o = null,
          c = 0,
          u = 0;
        if (0 === e.find("div.ui-timepicker-div").length && t.showTimepicker) {
          var m = ' style="display:none;"',
            d = '<div class="ui-timepicker-div' + (t.isRTL ? " ui-timepicker-rtl" : "") + '"><dl>' + '<dt class="ui_tpicker_time_label"' + (t.showTime ? "" : m) + ">" + t.timeText + "</dt>" + '<dd class="ui_tpicker_time"' + (t.showTime ? "" : m) + "></dd>";
          for (c = 0, u = this.units.length; u > c; c++) {
            if (s = this.units[c], a = s.substr(0, 1).toUpperCase() + s.substr(1), n = null !== t["show" + a] ? t["show" + a] : this.support[s], r[s] = parseInt(t[s + "Max"] - (t[s + "Max"] - t[s + "Min"]) % t["step" + a], 10), l[s] = 0, d += '<dt class="ui_tpicker_' + s + '_label"' + (n ? "" : m) + ">" + t[s + "Text"] + "</dt>" + '<dd class="ui_tpicker_' + s + '"><div class="ui_tpicker_' + s + '_slider"' + (n ? "" : m) + "></div>", n && t[s + "Grid"] > 0) {
              if (d += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>', "hour" === s)
                for (var p = t[s + "Min"]; r[s] >= p; p += parseInt(t[s + "Grid"], 10)) {
                  l[s]++;
                  var h = $.datepicker.formatTime(this.support.ampm ? "hht" : "HH", {
                    hour: p
                  }, t);
                  d += '<td data-for="' + s + '">' + h + "</td>"
                } else
                  for (var _ = t[s + "Min"]; r[s] >= _; _ += parseInt(t[s + "Grid"], 10)) l[s]++, d += '<td data-for="' + s + '">' + (10 > _ ? "0" : "") + _ + "</td>";
              d += "</tr></table></div>"
            }
            d += "</dd>"
          }
          var f = null !== t.showTimezone ? t.showTimezone : this.support.timezone;
          d += '<dt class="ui_tpicker_timezone_label"' + (f ? "" : m) + ">" + t.timezoneText + "</dt>", d += '<dd class="ui_tpicker_timezone" ' + (f ? "" : m) + "></dd>", d += "</dl></div>";
          var g = $(d);
          for (t.timeOnly === !0 && (g.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + t.timeOnlyTitle + "</div>" + "</div>"), e.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()), c = 0, u = i.units.length; u > c; c++) s = i.units[c], a = s.substr(0, 1).toUpperCase() + s.substr(1), n = null !== t["show" + a] ? t["show" + a] : this.support[s], i[s + "_slider"] = i.control.create(i, g.find(".ui_tpicker_" + s + "_slider"), s, i[s], t[s + "Min"], r[s], t["step" + a]), n && t[s + "Grid"] > 0 && (o = 100 * l[s] * t[s + "Grid"] / (r[s] - t[s + "Min"]), g.find(".ui_tpicker_" + s + " table").css({
            width: o + "%",
            marginLeft: t.isRTL ? "0" : o / (-2 * l[s]) + "%",
            marginRight: t.isRTL ? o / (-2 * l[s]) + "%" : "0",
            borderCollapse: "collapse"
          }).find("td").click(function () {
            var e = $(this),
              t = e.html(),
              a = parseInt(t.replace(/[^0-9]/g), 10),
              n = t.replace(/[^apm]/gi),
              r = e.data("for");
            "hour" === r && (-1 !== n.indexOf("p") && 12 > a ? a += 12 : -1 !== n.indexOf("a") && 12 === a && (a = 0)), i.control.value(i, i[r + "_slider"], s, a), i._onTimeChange(), i._onSelectHandler()
          }).css({
            cursor: "pointer",
            width: 100 / l[s] + "%",
            textAlign: "center",
            overflow: "hidden"
          }));
          if (this.timezone_select = g.find(".ui_tpicker_timezone").append("<select></select>").find("select"), $.fn.append.apply(this.timezone_select, $.map(t.timezoneList, function (e) {
              return $("<option />").val("object" == typeof e ? e.value : e).text("object" == typeof e ? e.label : e)
            })), this.timezone !== void 0 && null !== this.timezone && "" !== this.timezone) {
            var M = -1 * new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12).getTimezoneOffset();
            M === this.timezone ? selectLocalTimezone(i) : this.timezone_select.val(this.timezone)
          } else this.hour !== void 0 && null !== this.hour && "" !== this.hour ? this.timezone_select.val(t.timezone) : selectLocalTimezone(i);
          this.timezone_select.change(function () {
            i._onTimeChange(), i._onSelectHandler()
          });
          var v = e.find(".ui-datepicker-buttonpane");
          if (v.length ? v.before(g) : e.append(g), this.$timeObj = g.find(".ui_tpicker_time"), null !== this.inst) {
            var k = this.timeDefined;
            this._onTimeChange(), this.timeDefined = k
          }
          if (this._defaults.addSliderAccess) {
            var T = this._defaults.sliderAccessArgs,
              D = this._defaults.isRTL;
            T.isRTL = D, setTimeout(function () {
              if (0 === g.find(".ui-slider-access").length) {
                g.find(".ui-slider:visible").sliderAccess(T);
                var e = g.find(".ui-slider-access:eq(0)").outerWidth(!0);
                e && g.find("table:visible").each(function () {
                  var t = $(this),
                    i = t.outerWidth(),
                    s = ("" + t.css(D ? "marginRight" : "marginLeft")).replace("%", ""),
                    a = i - e,
                    n = s * a / i + "%",
                    r = {
                      width: a,
                      marginRight: 0,
                      marginLeft: 0
                    };
                  r[D ? "marginRight" : "marginLeft"] = n, t.css(r)
                })
              }
            }, 10)
          }
          i._limitMinMaxDateTime(this.inst, !0)
        }
      },
      _limitMinMaxDateTime: function (e, t) {
        var i = this._defaults,
          s = new Date(e.selectedYear, e.selectedMonth, e.selectedDay);
        if (this._defaults.showTimepicker) {
          if (null !== $.datepicker._get(e, "minDateTime") && void 0 !== $.datepicker._get(e, "minDateTime") && s) {
            var a = $.datepicker._get(e, "minDateTime"),
              n = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0, 0);
            (null === this.hourMinOriginal || null === this.minuteMinOriginal || null === this.secondMinOriginal || null === this.millisecMinOriginal || null === this.microsecMinOriginal) && (this.hourMinOriginal = i.hourMin, this.minuteMinOriginal = i.minuteMin, this.secondMinOriginal = i.secondMin, this.millisecMinOriginal = i.millisecMin, this.microsecMinOriginal = i.microsecMin), e.settings.timeOnly || n.getTime() === s.getTime() ? (this._defaults.hourMin = a.getHours(), this.hour <= this._defaults.hourMin ? (this.hour = this._defaults.hourMin, this._defaults.minuteMin = a.getMinutes(), this.minute <= this._defaults.minuteMin ? (this.minute = this._defaults.minuteMin, this._defaults.secondMin = a.getSeconds(), this.second <= this._defaults.secondMin ? (this.second = this._defaults.secondMin, this._defaults.millisecMin = a.getMilliseconds(), this.millisec <= this._defaults.millisecMin ? (this.millisec = this._defaults.millisecMin, this._defaults.microsecMin = a.getMicroseconds()) : (this.microsec < this._defaults.microsecMin && (this.microsec = this._defaults.microsecMin), this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.hourMin = this.hourMinOriginal, this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)
          }
          if (null !== $.datepicker._get(e, "maxDateTime") && void 0 !== $.datepicker._get(e, "maxDateTime") && s) {
            var r = $.datepicker._get(e, "maxDateTime"),
              l = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0, 0);
            (null === this.hourMaxOriginal || null === this.minuteMaxOriginal || null === this.secondMaxOriginal || null === this.millisecMaxOriginal) && (this.hourMaxOriginal = i.hourMax, this.minuteMaxOriginal = i.minuteMax, this.secondMaxOriginal = i.secondMax, this.millisecMaxOriginal = i.millisecMax, this.microsecMaxOriginal = i.microsecMax), e.settings.timeOnly || l.getTime() === s.getTime() ? (this._defaults.hourMax = r.getHours(), this.hour >= this._defaults.hourMax ? (this.hour = this._defaults.hourMax, this._defaults.minuteMax = r.getMinutes(), this.minute >= this._defaults.minuteMax ? (this.minute = this._defaults.minuteMax, this._defaults.secondMax = r.getSeconds(), this.second >= this._defaults.secondMax ? (this.second = this._defaults.secondMax, this._defaults.millisecMax = r.getMilliseconds(), this.millisec >= this._defaults.millisecMax ? (this.millisec = this._defaults.millisecMax, this._defaults.microsecMax = r.getMicroseconds()) : (this.microsec > this._defaults.microsecMax && (this.microsec = this._defaults.microsecMax), this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.hourMax = this.hourMaxOriginal, this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)
          }
          if (void 0 !== t && t === !0) {
            var o = parseInt(this._defaults.hourMax - (this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour, 10),
              c = parseInt(this._defaults.minuteMax - (this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute, 10),
              u = parseInt(this._defaults.secondMax - (this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond, 10),
              m = parseInt(this._defaults.millisecMax - (this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec, 10),
              d = parseInt(this._defaults.microsecMax - (this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec, 10);
            this.hour_slider && (this.control.options(this, this.hour_slider, "hour", {
              min: this._defaults.hourMin,
              max: o
            }), this.control.value(this, this.hour_slider, "hour", this.hour - this.hour % this._defaults.stepHour)), this.minute_slider && (this.control.options(this, this.minute_slider, "minute", {
              min: this._defaults.minuteMin,
              max: c
            }), this.control.value(this, this.minute_slider, "minute", this.minute - this.minute % this._defaults.stepMinute)), this.second_slider && (this.control.options(this, this.second_slider, "second", {
              min: this._defaults.secondMin,
              max: u
            }), this.control.value(this, this.second_slider, "second", this.second - this.second % this._defaults.stepSecond)), this.millisec_slider && (this.control.options(this, this.millisec_slider, "millisec", {
              min: this._defaults.millisecMin,
              max: m
            }), this.control.value(this, this.millisec_slider, "millisec", this.millisec - this.millisec % this._defaults.stepMillisec)), this.microsec_slider && (this.control.options(this, this.microsec_slider, "microsec", {
              min: this._defaults.microsecMin,
              max: d
            }), this.control.value(this, this.microsec_slider, "microsec", this.microsec - this.microsec % this._defaults.stepMicrosec))
          }
        }
      },
      _onTimeChange: function () {
        if (this._defaults.showTimepicker) {
          var e = this.hour_slider ? this.control.value(this, this.hour_slider, "hour") : !1,
            t = this.minute_slider ? this.control.value(this, this.minute_slider, "minute") : !1,
            i = this.second_slider ? this.control.value(this, this.second_slider, "second") : !1,
            s = this.millisec_slider ? this.control.value(this, this.millisec_slider, "millisec") : !1,
            a = this.microsec_slider ? this.control.value(this, this.microsec_slider, "microsec") : !1,
            n = this.timezone_select ? this.timezone_select.val() : !1,
            r = this._defaults,
            l = r.pickerTimeFormat || r.timeFormat,
            o = r.pickerTimeSuffix || r.timeSuffix;
          "object" == typeof e && (e = !1), "object" == typeof t && (t = !1), "object" == typeof i && (i = !1), "object" == typeof s && (s = !1), "object" == typeof a && (a = !1), "object" == typeof n && (n = !1), e !== !1 && (e = parseInt(e, 10)), t !== !1 && (t = parseInt(t, 10)), i !== !1 && (i = parseInt(i, 10)), s !== !1 && (s = parseInt(s, 10)), a !== !1 && (a = parseInt(a, 10)), n !== !1 && (n = parseInt(n, 10));
          var c = r[12 > e ? "amNames" : "pmNames"][0],
            u = e !== this.hour || t !== this.minute || i !== this.second || s !== this.millisec || a !== this.microsec || this.ampm.length > 0 && 12 > e != (-1 !== $.inArray(this.ampm.toUpperCase(), this.amNames)) || null !== this.timezone && n !== this.timezone;
          u && (e !== !1 && (this.hour = e), t !== !1 && (this.minute = t), i !== !1 && (this.second = i), s !== !1 && (this.millisec = s), a !== !1 && (this.microsec = a), n !== !1 && (this.timezone = n), this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), this._limitMinMaxDateTime(this.inst, !0)), this.support.ampm && (this.ampm = c), this.formattedTime = $.datepicker.formatTime(r.timeFormat, this, r), this.$timeObj && (l === r.timeFormat ? this.$timeObj.text(this.formattedTime + o) : this.$timeObj.text($.datepicker.formatTime(l, this, r) + o)), this.timeDefined = !0, u && this._updateDateTime()
        }
      },
      _onSelectHandler: function () {
        var e = this._defaults.onSelect || this.inst.settings.onSelect,
          t = this.$input ? this.$input[0] : null;
        e && t && e.apply(t, [this.formattedDateTime, this])
      },
      _updateDateTime: function (e) {
        e = this.inst || e;
        var t = e.currentYear > 0 ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(e.selectedYear, e.selectedMonth, e.selectedDay),
          i = $.datepicker._daylightSavingAdjust(t),
          s = $.datepicker._get(e, "dateFormat"),
          a = $.datepicker._getFormatConfig(e),
          n = null !== i && this.timeDefined;
        this.formattedDate = $.datepicker.formatDate(s, null === i ? new Date : i, a);
        var r = this.formattedDate;
        if ("" === e.lastVal && (e.currentYear = e.selectedYear, e.currentMonth = e.selectedMonth, e.currentDay = e.selectedDay), this._defaults.timeOnly === !0 ? r = this.formattedTime : this._defaults.timeOnly !== !0 && (this._defaults.alwaysSetTime || n) && (r += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix), this.formattedDateTime = r, this._defaults.showTimepicker)
          if (this.$altInput && this._defaults.timeOnly === !1 && this._defaults.altFieldTimeOnly === !0) this.$altInput.val(this.formattedTime), this.$input.val(this.formattedDate);
          else if (this.$altInput) {
          this.$input.val(r);
          var l = "",
            o = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
            c = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
          this._defaults.timeOnly || (l = this._defaults.altFormat ? $.datepicker.formatDate(this._defaults.altFormat, null === i ? new Date : i, a) : this.formattedDate, l && (l += o)), l += this._defaults.altTimeFormat ? $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + c : this.formattedTime + c, this.$altInput.val(l)
        } else this.$input.val(r);
        else this.$input.val(this.formattedDate);
        this.$input.trigger("change")
      },
      _onFocus: function () {
        if (!this.$input.val() && this._defaults.defaultValue) {
          this.$input.val(this._defaults.defaultValue);
          var e = $.datepicker._getInst(this.$input.get(0)),
            t = $.datepicker._get(e, "timepicker");
          if (t && t._defaults.timeOnly && e.input.val() !== e.lastVal) try {
            $.datepicker._updateDatepicker(e)
          } catch (i) {
            $.timepicker.log(i)
          }
        }
      },
      _controls: {
        slider: {
          create: function (e, t, i, s, a, n, r) {
            var l = e._defaults.isRTL;
            return t.prop("slide", null).slider({
              orientation: "horizontal",
              value: l ? -1 * s : s,
              min: l ? -1 * n : a,
              max: l ? -1 * a : n,
              step: r,
              slide: function (t, s) {
                e.control.value(e, $(this), i, l ? -1 * s.value : s.value), e._onTimeChange()
              },
              stop: function () {
                e._onSelectHandler()
              }
            })
          },
          options: function (e, t, i, s, a) {
            if (e._defaults.isRTL) {
              if ("string" == typeof s) return "min" === s || "max" === s ? void 0 !== a ? t.slider(s, -1 * a) : Math.abs(t.slider(s)) : t.slider(s);
              var n = s.min,
                r = s.max;
              return s.min = s.max = null, void 0 !== n && (s.max = -1 * n), void 0 !== r && (s.min = -1 * r), t.slider(s)
            }
            return "string" == typeof s && void 0 !== a ? t.slider(s, a) : t.slider(s)
          },
          value: function (e, t, i, s) {
            return e._defaults.isRTL ? void 0 !== s ? t.slider("value", -1 * s) : Math.abs(t.slider("value")) : void 0 !== s ? t.slider("value", s) : t.slider("value")
          }
        },
        select: {
          create: function (e, t, i, s, a, n, r) {
            for (var l = '<select class="ui-timepicker-select" data-unit="' + i + '" data-min="' + a + '" data-max="' + n + '" data-step="' + r + '">', o = e._defaults.pickerTimeFormat || e._defaults.timeFormat, c = a; n >= c; c += r) l += '<option value="' + c + '"' + (c === s ? " selected" : "") + ">", l += "hour" === i ? $.datepicker.formatTime($.trim(o.replace(/[^ht ]/gi, "")), {
              hour: c
            }, e._defaults) : "millisec" === i || "microsec" === i || c >= 10 ? c : "0" + ("" + c), l += "</option>";
            return l += "</select>", t.children("select").remove(), $(l).appendTo(t).change(function () {
              e._onTimeChange(), e._onSelectHandler()
            }), t
          },
          options: function (e, t, i, s, a) {
            var n = {},
              r = t.children("select");
            if ("string" == typeof s) {
              if (void 0 === a) return r.data(s);
              n[s] = a
            } else n = s;
            return e.control.create(e, t, r.data("unit"), r.val(), n.min || r.data("min"), n.max || r.data("max"), n.step || r.data("step"))
          },
          value: function (e, t, i, s) {
            var a = t.children("select");
            return void 0 !== s ? a.val(s) : a.val()
          }
        }
      }
    }), $.fn.extend({
      timepicker: function (e) {
        e = e || {};
        var t = Array.prototype.slice.call(arguments);
        return "object" == typeof e && (t[0] = $.extend(e, {
          timeOnly: !0
        })), $(this).each(function () {
          $.fn.datetimepicker.apply($(this), t)
        })
      },
      datetimepicker: function (e) {
        e = e || {};
        var t = arguments;
        return "string" == typeof e ? "getDate" === e ? $.fn.datepicker.apply($(this[0]), t) : this.each(function () {
          var e = $(this);
          e.datepicker.apply(e, t)
        }) : this.each(function () {
          var t = $(this);
          t.datepicker($.timepicker._newInst(t, e)._defaults)
        })
      }
    }), $.datepicker.parseDateTime = function (e, t, i, s, a) {
      var n = parseDateTimeInternal(e, t, i, s, a);
      if (n.timeObj) {
        var r = n.timeObj;
        n.date.setHours(r.hour, r.minute, r.second, r.millisec), n.date.setMicroseconds(r.microsec)
      }
      return n.date
    }, $.datepicker.parseTime = function (e, t, i) {
      var s = extendRemove(extendRemove({}, $.timepicker._defaults), i || {}); - 1 !== e.replace(/\'.*?\'/g, "").indexOf("Z");
      var a = function (e, t, i) {
          var s, a = function (e, t) {
              var i = [];
              return e && $.merge(i, e), t && $.merge(i, t), i = $.map(i, function (e) {
                return e.replace(/[.*+?|()\[\]{}\\]/g, "\\$&")
              }), "(" + i.join("|") + ")?"
            },
            n = function (e) {
              var t = e.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
                i = {
                  h: -1,
                  m: -1,
                  s: -1,
                  l: -1,
                  c: -1,
                  t: -1,
                  z: -1
                };
              if (t)
                for (var s = 0; t.length > s; s++) - 1 === i[("" + t[s]).charAt(0)] && (i[("" + t[s]).charAt(0)] = s + 1);
              return i
            },
            r = "^" + ("" + e).replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (e) {
              var t = e.length;
              switch (e.charAt(0).toLowerCase()) {
                case "h":
                  return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                case "m":
                  return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                case "s":
                  return 1 === t ? "(\\d?\\d)" : "(\\d{" + t + "})";
                case "l":
                  return "(\\d?\\d?\\d)";
                case "c":
                  return "(\\d?\\d?\\d)";
                case "z":
                  return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
                case "t":
                  return a(i.amNames, i.pmNames);
                default:
                  return "(" + e.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (e) {
                    return "\\" + e
                  }) + ")?"
              }
            }).replace(/\s/g, "\\s?") + i.timeSuffix + "$",
            l = n(e),
            o = "";
          s = t.match(RegExp(r, "i"));
          var c = {
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0,
            microsec: 0
          };
          return s ? (-1 !== l.t && (void 0 === s[l.t] || 0 === s[l.t].length ? (o = "", c.ampm = "") : (o = -1 !== $.inArray(s[l.t].toUpperCase(), i.amNames) ? "AM" : "PM", c.ampm = i["AM" === o ? "amNames" : "pmNames"][0])), -1 !== l.h && (c.hour = "AM" === o && "12" === s[l.h] ? 0 : "PM" === o && "12" !== s[l.h] ? parseInt(s[l.h], 10) + 12 : Number(s[l.h])), -1 !== l.m && (c.minute = Number(s[l.m])), -1 !== l.s && (c.second = Number(s[l.s])), -1 !== l.l && (c.millisec = Number(s[l.l])), -1 !== l.c && (c.microsec = Number(s[l.c])), -1 !== l.z && void 0 !== s[l.z] && (c.timezone = $.timepicker.timezoneOffsetNumber(s[l.z])), c) : !1
        },
        n = function (e, t, i) {
          try {
            var s = new Date("2012-01-01 " + t);
            if (isNaN(s.getTime()) && (s = new Date("2012-01-01T" + t), isNaN(s.getTime()) && (s = new Date("01/01/2012 " + t), isNaN(s.getTime())))) throw "Unable to parse time with native Date: " + t;
            return {
              hour: s.getHours(),
              minute: s.getMinutes(),
              second: s.getSeconds(),
              millisec: s.getMilliseconds(),
              microsec: s.getMicroseconds(),
              timezone: -1 * s.getTimezoneOffset()
            }
          } catch (n) {
            try {
              return a(e, t, i)
            } catch (r) {
              $.timepicker.log("Unable to parse \ntimeString: " + t + "\ntimeFormat: " + e)
            }
          }
          return !1
        };
      return "function" == typeof s.parse ? s.parse(e, t, s) : "loose" === s.parse ? n(e, t, s) : a(e, t, s)
    }, $.datepicker.formatTime = function (e, t, i) {
      i = i || {}, i = $.extend({}, $.timepicker._defaults, i), t = $.extend({
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        microsec: 0,
        timezone: null
      }, t);
      var s = e,
        a = i.amNames[0],
        n = parseInt(t.hour, 10);
      return n > 11 && (a = i.pmNames[0]), s = s.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (e) {
        switch (e) {
          case "HH":
            return ("0" + n).slice(-2);
          case "H":
            return n;
          case "hh":
            return ("0" + convert24to12(n)).slice(-2);
          case "h":
            return convert24to12(n);
          case "mm":
            return ("0" + t.minute).slice(-2);
          case "m":
            return t.minute;
          case "ss":
            return ("0" + t.second).slice(-2);
          case "s":
            return t.second;
          case "l":
            return ("00" + t.millisec).slice(-3);
          case "c":
            return ("00" + t.microsec).slice(-3);
          case "z":
            return $.timepicker.timezoneOffsetString(null === t.timezone ? i.timezone : t.timezone, !1);
          case "Z":
            return $.timepicker.timezoneOffsetString(null === t.timezone ? i.timezone : t.timezone, !0);
          case "T":
            return a.charAt(0).toUpperCase();
          case "TT":
            return a.toUpperCase();
          case "t":
            return a.charAt(0).toLowerCase();
          case "tt":
            return a.toLowerCase();
          default:
            return e.replace(/'/g, "")
        }
      })
    }, $.datepicker._base_selectDate = $.datepicker._selectDate, $.datepicker._selectDate = function (e, t) {
      var i = this._getInst($(e)[0]),
        s = this._get(i, "timepicker");
      s ? (s._limitMinMaxDateTime(i, !0), i.inline = i.stay_open = !0, this._base_selectDate(e, t), i.inline = i.stay_open = !1, this._notifyChange(i), this._updateDatepicker(i)) : this._base_selectDate(e, t)
    }, $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker, $.datepicker._updateDatepicker = function (e) {
      var t = e.input[0];
      if (!($.datepicker._curInst && $.datepicker._curInst !== e && $.datepicker._datepickerShowing && $.datepicker._lastInput !== t || "boolean" == typeof e.stay_open && e.stay_open !== !1)) {
        this._base_updateDatepicker(e);
        var i = this._get(e, "timepicker");
        i && i._addTimePicker(e)
      }
    }, $.datepicker._base_doKeyPress = $.datepicker._doKeyPress, $.datepicker._doKeyPress = function (e) {
      var t = $.datepicker._getInst(e.target),
        i = $.datepicker._get(t, "timepicker");
      if (i && $.datepicker._get(t, "constrainInput")) {
        var s = i.support.ampm,
          a = null !== i._defaults.showTimezone ? i._defaults.showTimezone : i.support.timezone,
          n = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
          r = ("" + i._defaults.timeFormat).replace(/[hms]/g, "").replace(/TT/g, s ? "APM" : "").replace(/Tt/g, s ? "AaPpMm" : "").replace(/tT/g, s ? "AaPpMm" : "").replace(/T/g, s ? "AP" : "").replace(/tt/g, s ? "apm" : "").replace(/t/g, s ? "ap" : "") + " " + i._defaults.separator + i._defaults.timeSuffix + (a ? i._defaults.timezoneList.join("") : "") + i._defaults.amNames.join("") + i._defaults.pmNames.join("") + n,
          l = String.fromCharCode(void 0 === e.charCode ? e.keyCode : e.charCode);
        return e.ctrlKey || " " > l || !n || r.indexOf(l) > -1
      }
      return $.datepicker._base_doKeyPress(e)
    }, $.datepicker._base_updateAlternate = $.datepicker._updateAlternate, $.datepicker._updateAlternate = function (e) {
      var t = this._get(e, "timepicker");
      if (t) {
        var i = t._defaults.altField;
        if (i) {
          var s = (t._defaults.altFormat || t._defaults.dateFormat, this._getDate(e)),
            a = $.datepicker._getFormatConfig(e),
            n = "",
            r = t._defaults.altSeparator ? t._defaults.altSeparator : t._defaults.separator,
            l = t._defaults.altTimeSuffix ? t._defaults.altTimeSuffix : t._defaults.timeSuffix,
            o = null !== t._defaults.altTimeFormat ? t._defaults.altTimeFormat : t._defaults.timeFormat;
          n += $.datepicker.formatTime(o, t, t._defaults) + l, t._defaults.timeOnly || t._defaults.altFieldTimeOnly || null === s || (n = t._defaults.altFormat ? $.datepicker.formatDate(t._defaults.altFormat, s, a) + r + n : t.formattedDate + r + n), $(i).val(n)
        }
      } else $.datepicker._base_updateAlternate(e)
    }, $.datepicker._base_doKeyUp = $.datepicker._doKeyUp, $.datepicker._doKeyUp = function (e) {
      var t = $.datepicker._getInst(e.target),
        i = $.datepicker._get(t, "timepicker");
      if (i && i._defaults.timeOnly && t.input.val() !== t.lastVal) try {
        $.datepicker._updateDatepicker(t)
      } catch (s) {
        $.timepicker.log(s)
      }
      return $.datepicker._base_doKeyUp(e)
    }, $.datepicker._base_gotoToday = $.datepicker._gotoToday, $.datepicker._gotoToday = function (e) {
      var t = this._getInst($(e)[0]),
        i = t.dpDiv;
      this._base_gotoToday(e);
      var s = this._get(t, "timepicker");
      selectLocalTimezone(s);
      var a = new Date;
      this._setTime(t, a), $(".ui-datepicker-today", i).click()
    }, $.datepicker._disableTimepickerDatepicker = function (e) {
      var t = this._getInst(e);
      if (t) {
        var i = this._get(t, "timepicker");
        $(e).datepicker("getDate"), i && (t.settings.showTimepicker = !1, i._defaults.showTimepicker = !1, i._updateDateTime(t))
      }
    }, $.datepicker._enableTimepickerDatepicker = function (e) {
      var t = this._getInst(e);
      if (t) {
        var i = this._get(t, "timepicker");
        $(e).datepicker("getDate"), i && (t.settings.showTimepicker = !0, i._defaults.showTimepicker = !0, i._addTimePicker(t), i._updateDateTime(t))
      }
    }, $.datepicker._setTime = function (e, t) {
      var i = this._get(e, "timepicker");
      if (i) {
        var s = i._defaults;
        i.hour = t ? t.getHours() : s.hour, i.minute = t ? t.getMinutes() : s.minute, i.second = t ? t.getSeconds() : s.second, i.millisec = t ? t.getMilliseconds() : s.millisec, i.microsec = t ? t.getMicroseconds() : s.microsec, i._limitMinMaxDateTime(e, !0), i._onTimeChange(), i._updateDateTime(e)
      }
    }, $.datepicker._setTimeDatepicker = function (e, t, i) {
      var s = this._getInst(e);
      if (s) {
        var a = this._get(s, "timepicker");
        if (a) {
          this._setDateFromField(s);
          var n;
          t && ("string" == typeof t ? (a._parseTime(t, i), n = new Date, n.setHours(a.hour, a.minute, a.second, a.millisec), n.setMicroseconds(a.microsec)) : (n = new Date(t.getTime()), n.setMicroseconds(t.getMicroseconds())), "Invalid Date" == "" + n && (n = void 0), this._setTime(s, n))
        }
      }
    }, $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker, $.datepicker._setDateDatepicker = function (e, t) {
      var i = this._getInst(e);
      if (i) {
        "string" == typeof t && (t = new Date(t), t.getTime() || $.timepicker.log("Error creating Date object from string."));
        var s, a = this._get(i, "timepicker");
        t instanceof Date ? (s = new Date(t.getTime()), s.setMicroseconds(t.getMicroseconds())) : s = t, a && (a.support.timezone || null !== a._defaults.timezone || (a.timezone = -1 * s.getTimezoneOffset()), t = $.timepicker.timezoneAdjust(t, a.timezone), s = $.timepicker.timezoneAdjust(s, a.timezone)), this._updateDatepicker(i), this._base_setDateDatepicker.apply(this, arguments), this._setTimeDatepicker(e, s, !0)
      }
    }, $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker, $.datepicker._getDateDatepicker = function (e, t) {
      var i = this._getInst(e);
      if (i) {
        var s = this._get(i, "timepicker");
        if (s) {
          void 0 === i.lastVal && this._setDateFromField(i, t);
          var a = this._getDate(i);
          return a && s._parseTime($(e).val(), s.timeOnly) && (a.setHours(s.hour, s.minute, s.second, s.millisec), a.setMicroseconds(s.microsec), null != s.timezone && (s.support.timezone || null !== s._defaults.timezone || (s.timezone = -1 * a.getTimezoneOffset()), a = $.timepicker.timezoneAdjust(a, s.timezone))), a
        }
        return this._base_getDateDatepicker(e, t)
      }
    }, $.datepicker._base_parseDate = $.datepicker.parseDate, $.datepicker.parseDate = function (e, t, i) {
      var s;
      try {
        s = this._base_parseDate(e, t, i)
      } catch (a) {
        if (!(a.indexOf(":") >= 0)) throw a;
        s = this._base_parseDate(e, t.substring(0, t.length - (a.length - a.indexOf(":") - 2)), i), $.timepicker.log("Error parsing the date string: " + a + "\ndate string = " + t + "\ndate format = " + e)
      }
      return s
    }, $.datepicker._base_formatDate = $.datepicker._formatDate, $.datepicker._formatDate = function (e) {
      var t = this._get(e, "timepicker");
      return t ? (t._updateDateTime(e), t.$input.val()) : this._base_formatDate(e)
    }, $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker, $.datepicker._optionDatepicker = function (e, t, i) {
      var s, a = this._getInst(e);
      if (!a) return null;
      var n = this._get(a, "timepicker");
      if (n) {
        var r, l = null,
          o = null,
          c = null,
          u = n._defaults.evnts,
          m = {};
        if ("string" == typeof t) {
          if ("minDate" === t || "minDateTime" === t) l = i;
          else if ("maxDate" === t || "maxDateTime" === t) o = i;
          else if ("onSelect" === t) c = i;
          else if (u.hasOwnProperty(t)) {
            if (i === void 0) return u[t];
            m[t] = i, s = {}
          }
        } else if ("object" == typeof t) {
          t.minDate ? l = t.minDate : t.minDateTime ? l = t.minDateTime : t.maxDate ? o = t.maxDate : t.maxDateTime && (o = t.maxDateTime);
          for (r in u) u.hasOwnProperty(r) && t[r] && (m[r] = t[r])
        }
        for (r in m) m.hasOwnProperty(r) && (u[r] = m[r], s || (s = $.extend({}, t)), delete s[r]);
        if (s && isEmptyObject(s)) return;
        l ? (l = 0 === l ? new Date : new Date(l), n._defaults.minDate = l, n._defaults.minDateTime = l) : o ? (o = 0 === o ? new Date : new Date(o), n._defaults.maxDate = o, n._defaults.maxDateTime = o) : c && (n._defaults.onSelect = c)
      }
      return void 0 === i ? this._base_optionDatepicker.call($.datepicker, e, t) : this._base_optionDatepicker.call($.datepicker, e, s || t, i)
    };
    var isEmptyObject = function (e) {
        var t;
        for (t in e)
          if (e.hasOwnProperty(t)) return !1;
        return !0
      },
      extendRemove = function (e, t) {
        $.extend(e, t);
        for (var i in t)(null === t[i] || void 0 === t[i]) && (e[i] = t[i]);
        return e
      },
      detectSupport = function (e) {
        var t = e.replace(/'.*?'/g, "").toLowerCase(),
          i = function (e, t) {
            return -1 !== e.indexOf(t) ? !0 : !1
          };
        return {
          hour: i(t, "h"),
          minute: i(t, "m"),
          second: i(t, "s"),
          millisec: i(t, "l"),
          microsec: i(t, "c"),
          timezone: i(t, "z"),
          ampm: i(t, "t") && i(e, "h"),
          iso8601: i(e, "Z")
        }
      },
      convert24to12 = function (e) {
        return e %= 12, 0 === e && (e = 12), e + ""
      },
      computeEffectiveSetting = function (e, t) {
        return e && e[t] ? e[t] : $.timepicker._defaults[t]
      },
      splitDateTime = function (e, t) {
        var i = computeEffectiveSetting(t, "separator"),
          s = computeEffectiveSetting(t, "timeFormat"),
          a = s.split(i),
          n = a.length,
          r = e.split(i),
          l = r.length;
        return l > 1 ? {
          dateString: r.splice(0, l - n).join(i),
          timeString: r.splice(0, n).join(i)
        } : {
          dateString: e,
          timeString: ""
        }
      },
      parseDateTimeInternal = function (e, t, i, s, a) {
        var n, r, l;
        if (r = splitDateTime(i, a), n = $.datepicker._base_parseDate(e, r.dateString, s), "" === r.timeString) return {
          date: n
        };
        if (l = $.datepicker.parseTime(t, r.timeString, a), !l) throw "Wrong time format";
        return {
          date: n,
          timeObj: l
        }
      },
      selectLocalTimezone = function (e, t) {
        if (e && e.timezone_select) {
          var i = t || new Date;
          e.timezone_select.val(-i.getTimezoneOffset())
        }
      };
    $.timepicker = new Timepicker, $.timepicker.timezoneOffsetString = function (e, t) {
      if (isNaN(e) || e > 840 || -720 > e) return e;
      var i = e,
        s = i % 60,
        a = (i - s) / 60,
        n = t ? ":" : "",
        r = (i >= 0 ? "+" : "-") + ("0" + Math.abs(a)).slice(-2) + n + ("0" + Math.abs(s)).slice(-2);
      return "+00:00" === r ? "Z" : r
    }, $.timepicker.timezoneOffsetNumber = function (e) {
      var t = ("" + e).replace(":", "");
      return "Z" === t.toUpperCase() ? 0 : /^(\-|\+)\d{4}$/.test(t) ? ("-" === t.substr(0, 1) ? -1 : 1) * (60 * parseInt(t.substr(1, 2), 10) + parseInt(t.substr(3, 2), 10)) : e
    }, $.timepicker.timezoneAdjust = function (e, t) {
      var i = $.timepicker.timezoneOffsetNumber(t);
      return isNaN(i) || e.setMinutes(e.getMinutes() + -e.getTimezoneOffset() - i), e
    }, $.timepicker.timeRange = function (e, t, i) {
      return $.timepicker.handleRange("timepicker", e, t, i)
    }, $.timepicker.datetimeRange = function (e, t, i) {
      $.timepicker.handleRange("datetimepicker", e, t, i)
    }, $.timepicker.dateRange = function (e, t, i) {
      $.timepicker.handleRange("datepicker", e, t, i)
    }, $.timepicker.handleRange = function (e, t, i, s) {
      function a(a, n) {
        var r = t[e]("getDate"),
          l = i[e]("getDate"),
          o = a[e]("getDate");
        if (null !== r) {
          var c = new Date(r.getTime()),
            u = new Date(r.getTime());
          c.setMilliseconds(c.getMilliseconds() + s.minInterval), u.setMilliseconds(u.getMilliseconds() + s.maxInterval), s.minInterval > 0 && c > l ? i[e]("setDate", c) : s.maxInterval > 0 && l > u ? i[e]("setDate", u) : r > l && n[e]("setDate", o)
        }
      }
      function n(t, i, a) {
        if (t.val()) {
          var n = t[e].call(t, "getDate");
          null !== n && s.minInterval > 0 && ("minDate" === a && n.setMilliseconds(n.getMilliseconds() + s.minInterval), "maxDate" === a && n.setMilliseconds(n.getMilliseconds() - s.minInterval)), n.getTime && i[e].call(i, "option", a, n)
        }
      }
      return s = $.extend({}, {
        minInterval: 0,
        maxInterval: 0,
        start: {},
        end: {}
      }, s), $.fn[e].call(t, $.extend({
        onClose: function () {
          a($(this), i)
        },
        onSelect: function () {
          n($(this), i, "minDate")
        }
      }, s, s.start)), $.fn[e].call(i, $.extend({
        onClose: function () {
          a($(this), t)
        },
        onSelect: function () {
          n($(this), t, "maxDate")
        }
      }, s, s.end)), a(t, i), n(t, i, "minDate"), n(i, t, "maxDate"), $([t.get(0), i.get(0)])
    }, $.timepicker.log = function (e) {
      window.console && window.console.log(e)
    }, $.timepicker._util = {
      _extendRemove: extendRemove,
      _isEmptyObject: isEmptyObject,
      _convert24to12: convert24to12,
      _detectSupport: detectSupport,
      _selectLocalTimezone: selectLocalTimezone,
      _computeEffectiveSetting: computeEffectiveSetting,
      _splitDateTime: splitDateTime,
      _parseDateTimeInternal: parseDateTimeInternal
    }, Date.prototype.getMicroseconds || (Date.prototype.microseconds = 0, Date.prototype.getMicroseconds = function () {
      return this.microseconds
    }, Date.prototype.setMicroseconds = function (e) {
      return this.setMilliseconds(this.getMilliseconds() + Math.floor(e / 1e3)), this.microseconds = e % 1e3, this
    }), $.timepicker.version = "1.4.1"
  }
})(jQuery);
/* http://akyurek.ua/wp-content/plugins/contact-form-7-datepicker/js/jquery-ui-timepicker/i18n/jquery-ui-timepicker-ru.js */
(function ($) {
  $.timepicker.regional['ru'] = {
    timeOnlyTitle: 'Р’С‹Р±РµСЂРёС‚Рµ РІСЂРµРјСЏ',
    timeText: 'Р’СЂРµРјСЏ',
    hourText: 'Р§Р°СЃС‹',
    minuteText: 'РњРёРЅСѓС‚С‹',
    secondText: 'РЎРµРєСѓРЅРґС‹',
    millisecText: 'РњРёР»Р»РёСЃРµРєСѓРЅРґС‹',
    microsecText: 'РњРёРєСЂРѕСЃРµРєСѓРЅРґС‹',
    timezoneText: 'Р§Р°СЃРѕРІРѕР№ РїРѕСЏСЃ',
    currentText: 'РЎРµР№С‡Р°СЃ',
    closeText: 'Р—Р°РєСЂС‹С‚СЊ',
    timeFormat: 'HH:mm',
    amNames: ['AM', 'A'],
    pmNames: ['PM', 'P'],
    isRTL: false
  };
  $.timepicker.setDefaults($.timepicker.regional['ru']);
})(jQuery);
/* http://akyurek.ua/wp-includes/js/jquery/ui/widget.min.js */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
  var b = 0,
    c = Array.prototype.slice;
  return a.cleanData = function (b) {
    return function (c) {
      var d, e, f;
      for (f = 0; null != (e = c[f]); f++) try {
        d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
      } catch (g) {}
      b(c)
    }
  }(a.cleanData), a.widget = function (b, c, d) {
    var e, f, g, h, i = {},
      j = b.split(".")[0];
    return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
      return !!a.data(b, e)
    }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function (a, b) {
      return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
    }, a.extend(g, f, {
      version: d.version,
      _proto: a.extend({}, d),
      _childConstructors: []
    }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function (b, d) {
      return a.isFunction(d) ? void(i[b] = function () {
        var a = function () {
            return c.prototype[b].apply(this, arguments)
          },
          e = function (a) {
            return c.prototype[b].apply(this, a)
          };
        return function () {
          var b, c = this._super,
            f = this._superApply;
          return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
        }
      }()) : void(i[b] = d)
    }), g.prototype = a.widget.extend(h, {
      widgetEventPrefix: f ? h.widgetEventPrefix || b : b
    }, i, {
      constructor: g,
      namespace: j,
      widgetName: b,
      widgetFullName: e
    }), f ? (a.each(f._childConstructors, function (b, c) {
      var d = c.prototype;
      a.widget(d.namespace + "." + d.widgetName, g, c._proto)
    }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
  }, a.widget.extend = function (b) {
    for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; g < h; g++)
      for (d in f[g]) e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (a.isPlainObject(e) ? b[d] = a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : b[d] = e);
    return b
  }, a.widget.bridge = function (b, d) {
    var e = d.prototype.widgetFullName || b;
    a.fn[b] = function (f) {
      var g = "string" == typeof f,
        h = c.call(arguments, 1),
        i = this;
      return g ? this.each(function () {
        var c, d = a.data(this, e);
        return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
      }) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function () {
        var b = a.data(this, e);
        b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
      })), i
    }
  }, a.Widget = function () {}, a.Widget._childConstructors = [], a.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function (c, d) {
      d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function (a) {
          a.target === d && this.destroy()
        }
      }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: a.noop,
    _getCreateEventData: a.noop,
    _create: a.noop,
    _init: a.noop,
    destroy: function () {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },
    _destroy: a.noop,
    widget: function () {
      return this.element
    },
    option: function (b, c) {
      var d, e, f, g = b;
      if (0 === arguments.length) return a.widget.extend({}, this.options);
      if ("string" == typeof b)
        if (g = {}, d = b.split("."), b = d.shift(), d.length) {
          for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
          if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
          e[b] = c
        } else {
          if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
          g[b] = c
        }
      return this._setOptions(g), this
    },
    _setOptions: function (a) {
      var b;
      for (b in a) this._setOption(b, a[b]);
      return this
    },
    _setOption: function (a, b) {
      return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
    },
    enable: function () {
      return this._setOptions({
        disabled: !1
      })
    },
    disable: function () {
      return this._setOptions({
        disabled: !0
      })
    },
    _on: function (b, c, d) {
      var e, f = this;
      "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
        function h() {
          if (b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled")) return ("string" == typeof g ? f[g] : g).apply(f, arguments)
        }
        "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
        var i = d.match(/^([\w:-]*)\s*(.*)$/),
          j = i[1] + f.eventNamespace,
          k = i[2];
        k ? e.delegate(k, j, h) : c.bind(j, h)
      })
    },
    _off: function (b, c) {
      c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
    },
    _delay: function (a, b) {
      function c() {
        return ("string" == typeof a ? d[a] : a).apply(d, arguments)
      }
      var d = this;
      return setTimeout(c, b || 0)
    },
    _hoverable: function (b) {
      this.hoverable = this.hoverable.add(b), this._on(b, {
        mouseenter: function (b) {
          a(b.currentTarget).addClass("ui-state-hover")
        },
        mouseleave: function (b) {
          a(b.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function (b) {
      this.focusable = this.focusable.add(b), this._on(b, {
        focusin: function (b) {
          a(b.currentTarget).addClass("ui-state-focus")
        },
        focusout: function (b) {
          a(b.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function (b, c, d) {
      var e, f, g = this.options[b];
      if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
        for (e in f) e in c || (c[e] = f[e]);
      return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
    }
  }, a.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (b, c) {
    a.Widget.prototype["_" + b] = function (d, e, f) {
      "string" == typeof e && (e = {
        effect: e
      });
      var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
      e = e || {}, "number" == typeof e && (e = {
        duration: e
      }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
        a(this)[b](), f && f.call(d[0]), c()
      })
    }
  }), a.widget
});
//http://akyurek.ua/wp-includes/js/jquery/ui/mouse.min.js
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "./widget"], a) : a(jQuery)
}(function (a) {
  var b = !1;
  return a(document).mouseup(function () {
    b = !1
  }), a.widget("ui.mouse", {
    version: "1.11.4",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function () {
      var b = this;
      this.element.bind("mousedown." + this.widgetName, function (a) {
        return b._mouseDown(a)
      }).bind("click." + this.widgetName, function (c) {
        if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
      }), this.started = !1
    },
    _mouseDestroy: function () {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function (c) {
      if (!b) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
        var d = this,
          e = 1 === c.which,
          f = !("string" != typeof this.options.cancel || !c.target.nodeName) && a(c.target).closest(this.options.cancel).length;
        return !(e && !f && this._mouseCapture(c)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          d.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
          return d._mouseMove(a)
        }, this._mouseUpDelegate = function (a) {
          return d._mouseUp(a)
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0))
      }
    },
    _mouseMove: function (b) {
      if (this._mouseMoved) {
        if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button) return this._mouseUp(b);
        if (!b.which) return this._mouseUp(b)
      }
      return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
    },
    _mouseUp: function (c) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), b = !1, !1
    },
    _mouseDistanceMet: function (a) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet
    },
    _mouseStart: function () {},
    _mouseDrag: function () {},
    _mouseStop: function () {},
    _mouseCapture: function () {
      return !0
    }
  })
});
//http://akyurek.ua/wp-includes/js/jquery/ui/slider.min.js
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function (a) {
  return a.widget("ui.slider", a.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function () {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
    },
    _refresh: function () {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
    },
    _createHandles: function () {
      var b, c, d = this.options,
        e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
        f = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
        g = [];
      for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), e = e.slice(0, c)), b = e.length; b < c; b++) g.push(f);
      this.handles = e.add(a(g.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (b) {
        a(this).data("ui-slider-handle-index", b)
      })
    },
    _createRange: function () {
      var b = this.options,
        c = "";
      b.range ? (b.range === !0 && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
        left: "",
        bottom: ""
      }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : (this.range && this.range.remove(), this.range = null)
    },
    _setupEvents: function () {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
    },
    _destroy: function () {
      this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
    },
    _mouseCapture: function (b) {
      var c, d, e, f, g, h, i, j, k = this,
        l = this.options;
      return !l.disabled && (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), c = {
        x: b.pageX,
        y: b.pageY
      }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function (b) {
        var c = Math.abs(d - k.values(b));
        (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, f = a(this), g = b)
      }), h = this._start(b, g), h !== !1 && (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = j ? {
        left: 0,
        top: 0
      } : {
        left: b.pageX - i.left - f.width() / 2,
        top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0))
    },
    _mouseStart: function () {
      return !0
    },
    _mouseDrag: function (a) {
      var b = {
          x: a.pageX,
          y: a.pageY
        },
        c = this._normValueFromMouse(b);
      return this._slide(a, this._handleIndex, c), !1
    },
    _mouseStop: function (a) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    },
    _detectOrientation: function () {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    },
    _normValueFromMouse: function (a) {
      var b, c, d, e, f;
      return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), d < 0 && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
    },
    _start: function (a, b) {
      var c = {
        handle: this.handles[b],
        value: this.value()
      };
      return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
    },
    _slide: function (a, b, c) {
      var d, e, f;
      this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && c < d) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
        handle: this.handles[b],
        value: c,
        values: e
      }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c))) : c !== this.value() && (f = this._trigger("slide", a, {
        handle: this.handles[b],
        value: c
      }), f !== !1 && this.value(c))
    },
    _stop: function (a, b) {
      var c = {
        handle: this.handles[b],
        value: this.value()
      };
      this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
    },
    _change: function (a, b) {
      if (!this._keySliding && !this._mouseSliding) {
        var c = {
          handle: this.handles[b],
          value: this.value()
        };
        this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._lastChangedValue = b, this._trigger("change", a, c)
      }
    },
    value: function (a) {
      return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), void this._change(null, 0)) : this._value()
    },
    values: function (b, c) {
      var d, e, f;
      if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), void this._change(null, b);
      if (!arguments.length) return this._values();
      if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
      for (d = this.options.values, e = arguments[0], f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f);
      this._refreshValue()
    },
    _setOption: function (b, c) {
      var d, e = 0;
      switch ("range" === b && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), "disabled" === b && this.element.toggleClass("ui-state-disabled", !!c), this._super(b, c), b) {
        case "orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === c ? "bottom" : "left", "");
          break;
        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;
        case "values":
          for (this._animateOff = !0, this._refreshValue(), d = 0; d < e; d += 1) this._change(null, d);
          this._animateOff = !1;
          break;
        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;
        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1
      }
    },
    _value: function () {
      var a = this.options.value;
      return a = this._trimAlignValue(a)
    },
    _values: function (a) {
      var b, c, d;
      if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
      if (this.options.values && this.options.values.length) {
        for (c = this.options.values.slice(), d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]);
        return c
      }
      return []
    },
    _trimAlignValue: function (a) {
      if (a <= this._valueMin()) return this._valueMin();
      if (a >= this._valueMax()) return this._valueMax();
      var b = this.options.step > 0 ? this.options.step : 1,
        c = (a - this._valueMin()) % b,
        d = a - c;
      return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
    },
    _calculateNewMax: function () {
      var a = this.options.max,
        b = this._valueMin(),
        c = this.options.step,
        d = Math.floor(+(a - b).toFixed(this._precision()) / c) * c;
      a = d + b, this.max = parseFloat(a.toFixed(this._precision()))
    },
    _precision: function () {
      var a = this._precisionOf(this.options.step);
      return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
    },
    _precisionOf: function (a) {
      var b = a.toString(),
        c = b.indexOf(".");
      return c === -1 ? 0 : b.length - c - 1
    },
    _valueMin: function () {
      return this.options.min
    },
    _valueMax: function () {
      return this.max
    },
    _refreshValue: function () {
      var b, c, d, e, f, g = this.options.range,
        h = this.options,
        i = this,
        j = !this._animateOff && h.animate,
        k = {};
      this.options.values && this.options.values.length ? this.handles.each(function (d) {
        c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
          left: c + "%"
        }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
          width: c - b + "%"
        }, {
          queue: !1,
          duration: h.animate
        })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
          bottom: c + "%"
        }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
          height: c - b + "%"
        }, {
          queue: !1,
          duration: h.animate
        }))), b = c
      }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
        width: c + "%"
      }, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({
        width: 100 - c + "%"
      }, {
        queue: !1,
        duration: h.animate
      }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
        height: c + "%"
      }, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({
        height: 100 - c + "%"
      }, {
        queue: !1,
        duration: h.animate
      }))
    },
    _handleEvents: {
      keydown: function (b) {
        var c, d, e, f, g = a(b.target).data("ui-slider-handle-index");
        switch (b.keyCode) {
          case a.ui.keyCode.HOME:
          case a.ui.keyCode.END:
          case a.ui.keyCode.PAGE_UP:
          case a.ui.keyCode.PAGE_DOWN:
          case a.ui.keyCode.UP:
          case a.ui.keyCode.RIGHT:
          case a.ui.keyCode.DOWN:
          case a.ui.keyCode.LEFT:
            if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, a(b.target).addClass("ui-state-active"), c = this._start(b, g), c === !1)) return
        }
        switch (f = this.options.step, d = e = this.options.values && this.options.values.length ? this.values(g) : this.value(), b.keyCode) {
          case a.ui.keyCode.HOME:
            e = this._valueMin();
            break;
          case a.ui.keyCode.END:
            e = this._valueMax();
            break;
          case a.ui.keyCode.PAGE_UP:
            e = this._trimAlignValue(d + (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case a.ui.keyCode.PAGE_DOWN:
            e = this._trimAlignValue(d - (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case a.ui.keyCode.UP:
          case a.ui.keyCode.RIGHT:
            if (d === this._valueMax()) return;
            e = this._trimAlignValue(d + f);
            break;
          case a.ui.keyCode.DOWN:
          case a.ui.keyCode.LEFT:
            if (d === this._valueMin()) return;
            e = this._trimAlignValue(d - f)
        }
        this._slide(b, g, e)
      },
      keyup: function (b) {
        var c = a(b.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"))
      }
    }
  })
});
//http://akyurek.ua/wp-includes/js/jquery/ui/button.min.js
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], a) : a(jQuery)
}(function (a) {
  var b, c = "ui-button ui-widget ui-state-default ui-corner-all",
    d = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
    e = function () {
      var b = a(this);
      setTimeout(function () {
        b.find(":ui-button").button("refresh")
      }, 1)
    },
    f = function (b) {
      var c = b.name,
        d = b.form,
        e = a([]);
      return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "'][type=radio]") : a("[name='" + c + "'][type=radio]", b.ownerDocument).filter(function () {
        return !this.form
      })), e
    };
  return a.widget("ui.button", {
    version: "1.11.4",
    defaultElement: "<button>",
    options: {
      disabled: null,
      text: !0,
      label: null,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function () {
      this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, e), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
      var d = this,
        g = this.options,
        h = "checkbox" === this.type || "radio" === this.type,
        i = h ? "" : "ui-state-active";
      null === g.label && (g.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(c).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
        g.disabled || this === b && a(this).addClass("ui-state-active")
      }).bind("mouseleave" + this.eventNamespace, function () {
        g.disabled || a(this).removeClass(i)
      }).bind("click" + this.eventNamespace, function (a) {
        g.disabled && (a.preventDefault(), a.stopImmediatePropagation())
      }), this._on({
        focus: function () {
          this.buttonElement.addClass("ui-state-focus")
        },
        blur: function () {
          this.buttonElement.removeClass("ui-state-focus")
        }
      }), h && this.element.bind("change" + this.eventNamespace, function () {
        d.refresh()
      }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
        if (g.disabled) return !1
      }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
        if (g.disabled) return !1;
        a(this).addClass("ui-state-active"), d.buttonElement.attr("aria-pressed", "true");
        var b = d.element[0];
        f(b).not(b).map(function () {
          return a(this).button("widget")[0]
        }).removeClass("ui-state-active").attr("aria-pressed", "false")
      }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
        return !g.disabled && (a(this).addClass("ui-state-active"), b = this, void d.document.one("mouseup", function () {
          b = null
        }))
      }).bind("mouseup" + this.eventNamespace, function () {
        return !g.disabled && void a(this).removeClass("ui-state-active")
      }).bind("keydown" + this.eventNamespace, function (b) {
        return !g.disabled && void(b.keyCode !== a.ui.keyCode.SPACE && b.keyCode !== a.ui.keyCode.ENTER || a(this).addClass("ui-state-active"))
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
        a(this).removeClass("ui-state-active")
      }), this.buttonElement.is("a") && this.buttonElement.keyup(function (b) {
        b.keyCode === a.ui.keyCode.SPACE && a(this).click()
      })), this._setOption("disabled", g.disabled), this._resetButton()
    },
    _determineButtonType: function () {
      var a, b, c;
      this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element
    },
    widget: function () {
      return this.buttonElement
    },
    _destroy: function () {
      this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(c + " ui-state-active " + d).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
    },
    _setOption: function (a, b) {
      return this._super(a, b), "disabled" === a ? (this.widget().toggleClass("ui-state-disabled", !!b), this.element.prop("disabled", !!b), void(b && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")))) : void this._resetButton()
    },
    refresh: function () {
      var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
      b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? f(this.element[0]).each(function () {
        a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
      }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
    },
    _resetButton: function () {
      if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
      var b = this.buttonElement.removeClass(d),
        c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
        e = this.options.icons,
        f = e.primary && e.secondary,
        g = [];
      e.primary || e.secondary ? (this.options.text && g.push("ui-button-text-icon" + (f ? "s" : e.primary ? "-primary" : "-secondary")), e.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + e.primary + "'></span>"), e.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + e.secondary + "'></span>"), this.options.text || (g.push(f ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : g.push("ui-button-text-only"), b.addClass(g.join(" "))
    }
  }), a.widget("ui.buttonset", {
    version: "1.11.4",
    options: {
      items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
    },
    _create: function () {
      this.element.addClass("ui-buttonset")
    },
    _init: function () {
      this.refresh()
    },
    _setOption: function (a, b) {
      "disabled" === a && this.buttons.button("option", a, b), this._super(a, b)
    },
    refresh: function () {
      var b = "rtl" === this.element.css("direction"),
        c = this.element.find(this.options.items),
        d = c.filter(":ui-button");
      c.not(":ui-button").button(), d.button("refresh"), this.buttons = c.map(function () {
        return a(this).button("widget")[0]
      }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
    },
    _destroy: function () {
      this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
        return a(this).button("widget")[0]
      }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
    }
  }), a.ui.button
});
//http://akyurek.ua/wp-content/plugins/contact-form-7-datepicker/js/jquery-ui-sliderAccess.js
(function ($) {
  $.fn.extend({
    sliderAccess: function (options) {
      options = options || {};
      options.touchonly = options.touchonly !== undefined ? options.touchonly : true;
      if (options.touchonly === true && !("ontouchend" in document))
        return $(this);
      return $(this).each(function (i, obj) {
        var $t = $(this),
          o = $.extend({}, {
            where: 'after',
            step: $t.slider('option', 'step'),
            upIcon: 'ui-icon-plus',
            downIcon: 'ui-icon-minus',
            text: false,
            upText: '+',
            downText: '-',
            buttonset: true,
            buttonsetTag: 'span',
            isRTL: false
          }, options),
          $buttons = $('<' + o.buttonsetTag + ' class="ui-slider-access">' +
            '<button data-icon="' + o.downIcon + '" data-step="' + (o.isRTL ? o.step : o.step * -1) + '">' + o.downText + '</button>' +
            '<button data-icon="' + o.upIcon + '" data-step="' + (o.isRTL ? o.step * -1 : o.step) + '">' + o.upText + '</button>' +
            '</' + o.buttonsetTag + '>');
        $buttons.children('button').each(function (j, jobj) {
          var $jt = $(this);
          $jt.button({
              text: o.text,
              icons: {
                primary: $jt.data('icon')
              }
            })
            .click(function (e) {
              var step = $jt.data('step'),
                curr = $t.slider('value'),
                newval = curr += step * 1,
                minval = $t.slider('option', 'min'),
                maxval = $t.slider('option', 'max'),
                slidee = $t.slider("option", "slide") || function () {},
                stope = $t.slider("option", "stop") || function () {};
              e.preventDefault();
              if (newval < minval || newval > maxval)
                return;
              $t.slider('value', newval);
              slidee.call($t, null, {
                value: newval
              });
              stope.call($t, null, {
                value: newval
              });
            });
        });
        $t[o.where]($buttons);
        if (o.buttonset) {
          $buttons.removeClass('ui-corner-right').removeClass('ui-corner-left').buttonset();
          $buttons.eq(0).addClass('ui-corner-left');
          $buttons.eq(1).addClass('ui-corner-right');
        }
        var bOuterWidth = $buttons.css({
          marginLeft: ((o.where == 'after' && !o.isRTL) || (o.where == 'before' && o.isRTL) ? 10 : 0),
          marginRight: ((o.where == 'before' && !o.isRTL) || (o.where == 'after' && o.isRTL) ? 10 : 0)
        }).outerWidth(true) + 5;
        var tOuterWidth = $t.outerWidth(true);
        $t.css('display', 'inline-block').width(tOuterWidth - bOuterWidth);
      });
    }
  });
})(jQuery);
/*http://akyurek.ua/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js */
jQuery(function (a) {
  return "undefined" != typeof wc_add_to_cart_params && void a(document).on("click", ".add_to_cart_button", function () {
    var b = a(this);
    if (b.is(".ajax_add_to_cart")) {
      if (!b.attr("data-product_id")) return !0;
      b.removeClass("added"), b.addClass("loading");
      var c = {};
      return a.each(b.data(), function (a, b) {
        c[a] = b
      }), a(document.body).trigger("adding_to_cart", [b, c]), a.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"), c, function (c) {
        if (c) {
          var d = window.location.toString();
          if (d = d.replace("add-to-cart", "added-to-cart"), c.error && c.product_url) return void(window.location = c.product_url);
          if ("yes" === wc_add_to_cart_params.cart_redirect_after_add) return void(window.location = wc_add_to_cart_params.cart_url);
          b.removeClass("loading");
          var e = c.fragments,
            f = c.cart_hash;
          e && a.each(e, function (b) {
            a(b).addClass("updating")
          }), a(".shop_table.cart, .updating, .cart_totals").fadeTo("400", "0.6").block({
            message: null,
            overlayCSS: {
              opacity: .6
            }
          }), b.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== b.parent().find(".added_to_cart").length || b.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), e && a.each(e, function (b, c) {
            a(b).replaceWith(c)
          }), a(".widget_shopping_cart, .updating").stop(!0).css("opacity", "1").unblock(), a(".shop_table.cart").load(d + " .shop_table.cart:eq(0) > *", function () {
            a(".shop_table.cart").stop(!0).css("opacity", "1").unblock(), a(document.body).trigger("cart_page_refreshed")
          }), a(".cart_totals").load(d + " .cart_totals:eq(0) > *", function () {
            a(".cart_totals").stop(!0).css("opacity", "1").unblock()
          }), a(document.body).trigger("added_to_cart", [e, f, b])
        }
      }), !1
    }
    return !0
  })
});
/* http://akyurek.ua/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js */
! function () {
  "use strict";
  function a(a) {
    function b(b, d) {
      var f, p, q = b == window,
        r = d && void 0 !== d.message ? d.message : void 0;
      if (d = a.extend({}, a.blockUI.defaults, d || {}), !d.ignoreIfBlocked || !a(b).data("blockUI.isBlocked")) {
        if (d.overlayCSS = a.extend({}, a.blockUI.defaults.overlayCSS, d.overlayCSS || {}), f = a.extend({}, a.blockUI.defaults.css, d.css || {}), d.onOverlayClick && (d.overlayCSS.cursor = "pointer"), p = a.extend({}, a.blockUI.defaults.themedCSS, d.themedCSS || {}), r = void 0 === r ? d.message : r, q && n && c(window, {
            fadeOut: 0
          }), r && "string" != typeof r && (r.parentNode || r.jquery)) {
          var s = r.jquery ? r[0] : r,
            t = {};
          a(b).data("blockUI.history", t), t.el = s, t.parent = s.parentNode, t.display = s.style.display, t.position = s.style.position, t.parent && t.parent.removeChild(s)
        }
        a(b).data("blockUI.onUnblock", d.onUnblock);
        var u, v, w, x, y = d.baseZ;
        u = a(k || d.forceIframe ? '<iframe class="blockUI" style="z-index:' + y++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + d.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), v = a(d.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + y++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + y++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), d.theme && q ? (x = '<div class="blockUI ' + d.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (y + 10) + ';display:none;position:fixed">', d.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (d.title || "&nbsp;") + "</div>"), x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : d.theme ? (x = '<div class="blockUI ' + d.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (y + 10) + ';display:none;position:absolute">', d.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (d.title || "&nbsp;") + "</div>"), x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : x = q ? '<div class="blockUI ' + d.blockMsgClass + ' blockPage" style="z-index:' + (y + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + d.blockMsgClass + ' blockElement" style="z-index:' + (y + 10) + ';display:none;position:absolute"></div>', w = a(x), r && (d.theme ? (w.css(p), w.addClass("ui-widget-content")) : w.css(f)), d.theme || v.css(d.overlayCSS), v.css("position", q ? "fixed" : "absolute"), (k || d.forceIframe) && u.css("opacity", 0);
        var z = [u, v, w],
          A = a(q ? "body" : b);
        a.each(z, function () {
          this.appendTo(A)
        }), d.theme && d.draggable && a.fn.draggable && w.draggable({
          handle: ".ui-dialog-titlebar",
          cancel: "li"
        });
        var B = m && (!a.support.boxModel || a("object,embed", q ? null : b).length > 0);
        if (l || B) {
          if (q && d.allowBodyStretch && a.support.boxModel && a("html,body").css("height", "100%"), (l || !a.support.boxModel) && !q) var C = i(b, "borderTopWidth"),
            D = i(b, "borderLeftWidth"),
            E = C ? "(0 - " + C + ")" : 0,
            F = D ? "(0 - " + D + ")" : 0;
          a.each(z, function (a, b) {
            var c = b[0].style;
            if (c.position = "absolute", a < 2) q ? c.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + d.quirksmodeOffsetHack + ') + "px"') : c.setExpression("height", 'this.parentNode.offsetHeight + "px"'), q ? c.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : c.setExpression("width", 'this.parentNode.offsetWidth + "px"'), F && c.setExpression("left", F), E && c.setExpression("top", E);
            else if (d.centerY) q && c.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), c.marginTop = 0;
            else if (!d.centerY && q) {
              var e = d.css && d.css.top ? parseInt(d.css.top, 10) : 0,
                f = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + e + ') + "px"';
              c.setExpression("top", f)
            }
          })
        }
        if (r && (d.theme ? w.find(".ui-widget-content").append(r) : w.append(r), (r.jquery || r.nodeType) && a(r).show()), (k || d.forceIframe) && d.showOverlay && u.show(), d.fadeIn) {
          var G = d.onBlock ? d.onBlock : j,
            H = d.showOverlay && !r ? G : j,
            I = r ? G : j;
          d.showOverlay && v._fadeIn(d.fadeIn, H), r && w._fadeIn(d.fadeIn, I)
        } else d.showOverlay && v.show(), r && w.show(), d.onBlock && d.onBlock.bind(w)();
        if (e(1, b, d), q ? (n = w[0], o = a(d.focusableElements, n), d.focusInput && setTimeout(g, 20)) : h(w[0], d.centerX, d.centerY), d.timeout) {
          var J = setTimeout(function () {
            q ? a.unblockUI(d) : a(b).unblock(d)
          }, d.timeout);
          a(b).data("blockUI.timeout", J)
        }
      }
    }
    function c(b, c) {
      var f, g = b == window,
        h = a(b),
        i = h.data("blockUI.history"),
        j = h.data("blockUI.timeout");
      j && (clearTimeout(j), h.removeData("blockUI.timeout")), c = a.extend({}, a.blockUI.defaults, c || {}), e(0, b, c), null === c.onUnblock && (c.onUnblock = h.data("blockUI.onUnblock"), h.removeData("blockUI.onUnblock"));
      var k;
      k = g ? a(document.body).children().filter(".blockUI").add("body > .blockUI") : h.find(">.blockUI"), c.cursorReset && (k.length > 1 && (k[1].style.cursor = c.cursorReset), k.length > 2 && (k[2].style.cursor = c.cursorReset)), g && (n = o = null), c.fadeOut ? (f = k.length, k.stop().fadeOut(c.fadeOut, function () {
        0 === --f && d(k, i, c, b)
      })) : d(k, i, c, b)
    }
    function d(b, c, d, e) {
      var f = a(e);
      if (!f.data("blockUI.isBlocked")) {
        b.each(function (a, b) {
          this.parentNode && this.parentNode.removeChild(this)
        }), c && c.el && (c.el.style.display = c.display, c.el.style.position = c.position, c.el.style.cursor = "default", c.parent && c.parent.appendChild(c.el), f.removeData("blockUI.history")), f.data("blockUI.static") && f.css("position", "static"), "function" == typeof d.onUnblock && d.onUnblock(e, d);
        var g = a(document.body),
          h = g.width(),
          i = g[0].style.width;
        g.width(h - 1).width(h), g[0].style.width = i
      }
    }
    function e(b, c, d) {
      var e = c == window,
        g = a(c);
      if ((b || (!e || n) && (e || g.data("blockUI.isBlocked"))) && (g.data("blockUI.isBlocked", b), e && d.bindEvents && (!b || d.showOverlay))) {
        var h = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
        b ? a(document).bind(h, d, f) : a(document).unbind(h, f)
      }
    }
    function f(b) {
      if ("keydown" === b.type && b.keyCode && 9 == b.keyCode && n && b.data.constrainTabKey) {
        var c = o,
          d = !b.shiftKey && b.target === c[c.length - 1],
          e = b.shiftKey && b.target === c[0];
        if (d || e) return setTimeout(function () {
          g(e)
        }, 10), !1
      }
      var f = b.data,
        h = a(b.target);
      return h.hasClass("blockOverlay") && f.onOverlayClick && f.onOverlayClick(b), h.parents("div." + f.blockMsgClass).length > 0 || 0 === h.parents().children().filter("div.blockUI").length
    }
    function g(a) {
      if (o) {
        var b = o[a === !0 ? o.length - 1 : 0];
        b && b.focus()
      }
    }
    function h(a, b, c) {
      var d = a.parentNode,
        e = a.style,
        f = (d.offsetWidth - a.offsetWidth) / 2 - i(d, "borderLeftWidth"),
        g = (d.offsetHeight - a.offsetHeight) / 2 - i(d, "borderTopWidth");
      b && (e.left = f > 0 ? f + "px" : "0"), c && (e.top = g > 0 ? g + "px" : "0")
    }
    function i(b, c) {
      return parseInt(a.css(b, c), 10) || 0
    }
    a.fn._fadeIn = a.fn.fadeIn;
    var j = a.noop || function () {},
      k = /MSIE/.test(navigator.userAgent),
      l = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
      m = (document.documentMode || 0, a.isFunction(document.createElement("div").style.setExpression));
    a.blockUI = function (a) {
      b(window, a)
    }, a.unblockUI = function (a) {
      c(window, a)
    }, a.growlUI = function (b, c, d, e) {
      var f = a('<div class="growlUI"></div>');
      b && f.append("<h1>" + b + "</h1>"), c && f.append("<h2>" + c + "</h2>"), void 0 === d && (d = 3e3);
      var g = function (b) {
        b = b || {}, a.blockUI({
          message: f,
          fadeIn: "undefined" != typeof b.fadeIn ? b.fadeIn : 700,
          fadeOut: "undefined" != typeof b.fadeOut ? b.fadeOut : 1e3,
          timeout: "undefined" != typeof b.timeout ? b.timeout : d,
          centerY: !1,
          showOverlay: !1,
          onUnblock: e,
          css: a.blockUI.defaults.growlCSS
        })
      };
      g();
      f.css("opacity");
      f.mouseover(function () {
        g({
          fadeIn: 0,
          timeout: 3e4
        });
        var b = a(".blockMsg");
        b.stop(), b.fadeTo(300, 1)
      }).mouseout(function () {
        a(".blockMsg").fadeOut(1e3)
      })
    }, a.fn.block = function (c) {
      if (this[0] === window) return a.blockUI(c), this;
      var d = a.extend({}, a.blockUI.defaults, c || {});
      return this.each(function () {
        var b = a(this);
        d.ignoreIfBlocked && b.data("blockUI.isBlocked") || b.unblock({
          fadeOut: 0
        })
      }), this.each(function () {
        "static" == a.css(this, "position") && (this.style.position = "relative", a(this).data("blockUI.static", !0)), this.style.zoom = 1, b(this, c)
      })
    }, a.fn.unblock = function (b) {
      return this[0] === window ? (a.unblockUI(b), this) : this.each(function () {
        c(this, b)
      })
    }, a.blockUI.version = 2.7, a.blockUI.defaults = {
      message: "<h1>Please wait...</h1>",
      title: null,
      draggable: !0,
      theme: !1,
      css: {
        padding: 0,
        margin: 0,
        width: "30%",
        top: "40%",
        left: "35%",
        textAlign: "center",
        color: "#000",
        border: "3px solid #aaa",
        backgroundColor: "#fff",
        cursor: "wait"
      },
      themedCSS: {
        width: "30%",
        top: "40%",
        left: "35%"
      },
      overlayCSS: {
        backgroundColor: "#000",
        opacity: .6,
        cursor: "wait"
      },
      cursorReset: "default",
      growlCSS: {
        width: "350px",
        top: "10px",
        left: "",
        right: "10px",
        border: "none",
        padding: "5px",
        opacity: .6,
        cursor: "default",
        color: "#fff",
        backgroundColor: "#000",
        "-webkit-border-radius": "10px",
        "-moz-border-radius": "10px",
        "border-radius": "10px"
      },
      iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
      forceIframe: !1,
      baseZ: 1e3,
      centerX: !0,
      centerY: !0,
      allowBodyStretch: !0,
      bindEvents: !0,
      constrainTabKey: !0,
      fadeIn: 200,
      fadeOut: 400,
      timeout: 0,
      showOverlay: !0,
      focusInput: !0,
      focusableElements: ":input:enabled:visible",
      onBlock: null,
      onUnblock: null,
      onOverlayClick: null,
      quirksmodeOffsetHack: 4,
      blockMsgClass: "blockMsg",
      ignoreIfBlocked: !1
    };
    var n = null,
      o = []
  }
  "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
}();
/* http://akyurek.ua/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js */
jQuery(function (a) {
  a(".woocommerce-ordering").on("change", "select.orderby", function () {
    a(this).closest("form").submit()
  }), a("input.qty:not(.product-quantity input.qty)").each(function () {
    var b = parseFloat(a(this).attr("min"));
    b >= 0 && parseFloat(a(this).val()) < b && a(this).val(b)
  })
});
/* http://akyurek.ua/wp-content/plugins/woocommerce/assets/js/jquery-cookie/jquery.cookie.min.js */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
  function b(a) {
    return h.raw ? a : encodeURIComponent(a)
  }
  function c(a) {
    return h.raw ? a : decodeURIComponent(a)
  }
  function d(a) {
    return b(h.json ? JSON.stringify(a) : String(a))
  }
  function e(a) {
    0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
    } catch (a) {}
  }
  function f(b, c) {
    var d = h.raw ? b : e(b);
    return a.isFunction(c) ? c(d) : d
  }
  var g = /\+/g,
    h = a.cookie = function (e, g, i) {
      if (void 0 !== g && !a.isFunction(g)) {
        if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
          var j = i.expires,
            k = i.expires = new Date;
          k.setTime(+k + 864e5 * j)
        }
        return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
      }
      for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; n < o; n++) {
        var p = m[n].split("="),
          q = c(p.shift()),
          r = p.join("=");
        if (e && e === q) {
          l = f(r, g);
          break
        }
        e || void 0 === (r = f(r)) || (l[q] = r)
      }
      return l
    };
  h.defaults = {}, a.removeCookie = function (b, c) {
    return void 0 !== a.cookie(b) && (a.cookie(b, "", a.extend({}, c, {
      expires: -1
    })), !a.cookie(b))
  }
});
/* http://akyurek.ua/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js */
jQuery(function (a) {
  function b() {
    e && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
  }
  function c(a) {
    e && (localStorage.setItem(f, a), sessionStorage.setItem(f, a))
  }
  function d() {
    a.ajax(g)
  }
  if ("undefined" == typeof wc_cart_fragments_params) return !1;
  var e, f = wc_cart_fragments_params.ajax_url.toString() + "-wc_cart_hash";
  try {
    e = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
  } catch (a) {
    e = !1
  }
  var g = {
    url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
    type: "POST",
    success: function (d) {
      d && d.fragments && (a.each(d.fragments, function (b, c) {
        a(b).replaceWith(c)
      }), e && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(d.fragments)), c(d.cart_hash), d.cart_hash && b()), a(document.body).trigger("wc_fragments_refreshed"))
    }
  };
  if (e) {
    var h = null,
      i = 864e5;
    a(document.body).bind("wc_fragment_refresh updated_wc_div", function () {
      d()
    }), a(document.body).bind("added_to_cart", function (a, d, e) {
      var g = sessionStorage.getItem(f);
      null !== g && void 0 !== g && "" !== g || b(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(d)), c(e)
    }), a(document.body).bind("wc_fragments_refreshed", function () {
      clearTimeout(h), h = setTimeout(d, i)
    }), a(window).on("storage onstorage", function (a) {
      f === a.originalEvent.key && localStorage.getItem(f) !== sessionStorage.getItem(f) && d()
    });
    try {
      var j = a.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
        k = sessionStorage.getItem(f),
        l = a.cookie("woocommerce_cart_hash"),
        m = sessionStorage.getItem("wc_cart_created");
      if (null !== k && void 0 !== k && "" !== k || (k = ""), null !== l && void 0 !== l && "" !== l || (l = ""), k && (null === m || void 0 === m || "" === m)) throw "No cart_created";
      if (m) {
        var n = 1 * m + i,
          o = (new Date).getTime();
        if (n < o) throw "Fragment expired";
        h = setTimeout(d, n - o)
      }
      if (!j || !j["div.widget_shopping_cart_content"] || k !== l) throw "No fragment";
      a.each(j, function (b, c) {
        a(b).replaceWith(c)
      }), a(document.body).trigger("wc_fragments_loaded")
    } catch (a) {
      d()
    }
  } else d();
  a.cookie("woocommerce_items_in_cart") > 0 ? a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), a(document.body).bind("adding_to_cart", function () {
    a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
  })
});
/* http://akyurek.ua/wp-includes/js/comment-reply.min.js */
var addComment = {
  moveForm: function (a, b, c, d) {
    var e, f, g, h, i = this,
      j = i.I(a),
      k = i.I(c),
      l = i.I("cancel-comment-reply-link"),
      m = i.I("comment_parent"),
      n = i.I("comment_post_ID"),
      o = k.getElementsByTagName("form")[0];
    if (j && k && l && m && o) {
      i.respondId = c, d = d || !1, i.I("wp-temp-form-div") || (e = document.createElement("div"), e.id = "wp-temp-form-div", e.style.display = "none", k.parentNode.insertBefore(e, k)), j.parentNode.insertBefore(k, j.nextSibling), n && d && (n.value = d), m.value = b, l.style.display = "", l.onclick = function () {
        var a = addComment,
          b = a.I("wp-temp-form-div"),
          c = a.I(a.respondId);
        if (b && c) return a.I("comment_parent").value = "0", b.parentNode.insertBefore(c, b), b.parentNode.removeChild(b), this.style.display = "none", this.onclick = null, !1
      };
      try {
        for (var p = 0; p < o.elements.length; p++)
          if (f = o.elements[p], h = !1, "getComputedStyle" in window ? g = window.getComputedStyle(f) : document.documentElement.currentStyle && (g = f.currentStyle), (f.offsetWidth <= 0 && f.offsetHeight <= 0 || "hidden" === g.visibility) && (h = !0), "hidden" !== f.type && !f.disabled && !h) {
            f.focus();
            break
          }
      } catch (q) {}
      return !1
    }
  },
  I: function (a) {
    return document.getElementById(a)
  }
};
/* http://akyurek.ua/wp-content/themes/bestbuild/assets/js/bootstrap.min.js */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var i = t(this),
        n = i.data("bs.alert");
      n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
    })
  }
  var i = '[data-dismiss="alert"]',
    o = function (e) {
      t(e).on("click", i, this.close)
    };
  o.VERSION = "3.3.2", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
    function i() {
      a.detach().trigger("closed.bs.alert").remove()
    }
    var n = t(this),
      s = n.attr("data-target");
    s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
    var a = t(s);
    e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
  };
  var n = t.fn.alert;
  t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
    return t.fn.alert = n, this
  }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this),
        n = o.data("bs.button"),
        s = "object" == typeof e && e;
      n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
    })
  }
  var i = function (e, o) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
  };
  i.VERSION = "3.3.2", i.DEFAULTS = {
    loadingText: "loading..."
  }, i.prototype.setState = function (e) {
    var i = "disabled",
      o = this.$element,
      n = o.is("input") ? "val" : "html",
      s = o.data();
    e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
      o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
    }, this), 0)
  }, i.prototype.toggle = function () {
    var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
    t && this.$element.toggleClass("active")
  };
  var o = t.fn.button;
  t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
    return t.fn.button = o, this
  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
    var o = t(i.target);
    o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), i.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
  })
}(jQuery), + function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this),
        n = o.data("bs.carousel"),
        s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
        a = "string" == typeof e ? e : s.slide;
      n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
    })
  }
  var i = function (e, i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  i.VERSION = "3.3.2", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, i.prototype.keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      t.preventDefault()
    }
  }, i.prototype.cycle = function (e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
  }, i.prototype.getItemIndex = function (t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, i.prototype.getItemForDirection = function (t, e) {
    var i = this.getItemIndex(e),
      o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
    if (o && !this.options.wrap) return e;
    var n = "prev" == t ? -1 : 1,
      s = (i + n) % this.$items.length;
    return this.$items.eq(s)
  }, i.prototype.to = function (t) {
    var e = this,
      i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
  }, i.prototype.pause = function (e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, i.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next")
  }, i.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev")
  }, i.prototype.slide = function (e, o) {
    var n = this.$element.find(".item.active"),
      s = o || this.getItemForDirection(e, n),
      a = this.interval,
      r = "next" == e ? "left" : "right",
      l = this;
    if (s.hasClass("active")) return this.sliding = !1;
    var h = s[0],
      d = t.Event("slide.bs.carousel", {
        relatedTarget: h,
        direction: r
      });
    if (this.$element.trigger(d), !d.isDefaultPrevented()) {
      if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var p = t(this.$indicators.children()[this.getItemIndex(s)]);
        p && p.addClass("active")
      }
      var c = t.Event("slid.bs.carousel", {
        relatedTarget: h,
        direction: r
      });
      return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
        s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
          l.$element.trigger(c)
        }, 0)
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
    }
  };
  var o = t.fn.carousel;
  t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
    return t.fn.carousel = o, this
  };
  var n = function (i) {
    var o, n = t(this),
      s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
    if (s.hasClass("carousel")) {
      var a = t.extend({}, s.data(), n.data()),
        r = n.attr("data-slide-to");
      r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
    }
  };
  t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
    t('[data-ride="carousel"]').each(function () {
      var i = t(this);
      e.call(i, i.data())
    })
  })
}(jQuery), + function (t) {
  "use strict";
  function e(e) {
    e && 3 === e.which || (t(n).remove(), t(s).each(function () {
      var o = t(this),
        n = i(o),
        s = {
          relatedTarget: this
        };
      n.hasClass("open") && (n.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", s)))
    }))
  }
  function i(e) {
    var i = e.attr("data-target");
    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var o = i && t(i);
    return o && o.length ? o : e.parent()
  }
  function o(e) {
    return this.each(function () {
      var i = t(this),
        o = i.data("bs.dropdown");
      o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
    })
  }
  var n = ".dropdown-backdrop",
    s = '[data-toggle="dropdown"]',
    a = function (e) {
      t(e).on("click.bs.dropdown", this.toggle)
    };
  a.VERSION = "3.3.2", a.prototype.toggle = function (o) {
    var n = t(this);
    if (!n.is(".disabled, :disabled")) {
      var s = i(n),
        a = s.hasClass("open");
      if (e(), !a) {
        "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
        var r = {
          relatedTarget: this
        };
        if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
        n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r)
      }
      return !1
    }
  }, a.prototype.keydown = function (e) {
    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
      var o = t(this);
      if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
        var n = i(o),
          a = n.hasClass("open");
        if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && n.find(s).trigger("focus"), o.trigger("click");
        var r = " li:not(.disabled):visible a",
          l = n.find('[role="menu"]' + r + ', [role="listbox"]' + r);
        if (l.length) {
          var h = l.index(e.target);
          38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
        }
      }
    }
  };
  var r = t.fn.dropdown;
  t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
    return t.fn.dropdown = r, this
  }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation()
  }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery), + function (t) {
  "use strict";
  function e(e, o) {
    return this.each(function () {
      var n = t(this),
        s = n.data("bs.modal"),
        a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
      s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
    })
  }
  var i = function (e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  i.VERSION = "3.3.2", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, i.prototype.toggle = function (t) {
    return this.isShown ? this.hide() : this.show(t)
  }, i.prototype.show = function (e) {
    var o = this,
      n = t.Event("show.bs.modal", {
        relatedTarget: e
      });
    this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      o.$element.one("mouseup.dismiss.bs.modal", function (e) {
        t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function () {
      var n = t.support.transition && o.$element.hasClass("fade");
      o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in").attr("aria-hidden", !1), o.enforceFocus();
      var s = t.Event("shown.bs.modal", {
        relatedTarget: e
      });
      n ? o.$dialog.one("bsTransitionEnd", function () {
        o.$element.trigger("focus").trigger(s)
      }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
    }))
  }, i.prototype.hide = function (e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
  }, i.prototype.enforceFocus = function () {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
      this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
  }, i.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
      27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, i.prototype.resize = function () {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
  }, i.prototype.hideModal = function () {
    var t = this;
    this.$element.hide(), this.backdrop(function () {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
  }, i.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, i.prototype.backdrop = function (e) {
    var o = this,
      n = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var s = t.support.transition && n;
      if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var a = function () {
        o.removeBackdrop(), e && e()
      };
      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
    } else e && e()
  }, i.prototype.handleUpdate = function () {
    this.adjustDialog()
  }, i.prototype.adjustDialog = function () {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
  }, i.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, i.prototype.checkScrollbar = function () {
    var t = window.innerWidth;
    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
  }, i.prototype.setScrollbar = function () {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
  }, i.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad)
  }, i.prototype.measureScrollbar = function () {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
  };
  var o = t.fn.modal;
  t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
    return t.fn.modal = o, this
  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
    var o = t(this),
      n = o.attr("href"),
      s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
      a = s.data("bs.modal") ? "toggle" : t.extend({
        remote: !/#/.test(n) && n
      }, s.data(), o.data());
    o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
        o.is(":visible") && o.trigger("focus")
      })
    }), e.call(s, a, this)
  })
}(jQuery), + function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this),
        n = o.data("bs.tooltip"),
        s = "object" == typeof e && e;
      (n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
    })
  }
  var i = function (t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
  };
  i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, i.prototype.init = function (e, i, o) {
    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
      var a = n[s];
      if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
      else if ("manual" != a) {
        var r = "hover" == a ? "mouseenter" : "focusin",
          l = "hover" == a ? "mouseleave" : "focusout";
        this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, i.prototype.getDefaults = function () {
    return i.DEFAULTS
  }, i.prototype.getOptions = function (e) {
    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
      show: e.delay,
      hide: e.delay
    }), e
  }, i.prototype.getDelegateOptions = function () {
    var e = {},
      i = this.getDefaults();
    return this._options && t.each(this._options, function (t, o) {
      i[t] != o && (e[t] = o)
    }), e
  }, i.prototype.enter = function (e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
      "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
  }, i.prototype.leave = function (e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
      "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
  }, i.prototype.show = function () {
    var e = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !o) return;
      var n = this,
        s = this.tip(),
        a = this.getUID(this.type);
      this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
      var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
        l = /\s?auto?\s?/i,
        h = l.test(r);
      h && (r = r.replace(l, "") || "top"), s.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
      var d = this.getPosition(),
        p = s[0].offsetWidth,
        c = s[0].offsetHeight;
      if (h) {
        var f = r,
          u = this.options.container ? t(this.options.container) : this.$element.parent(),
          g = this.getPosition(u);
        r = "bottom" == r && d.bottom + c > g.bottom ? "top" : "top" == r && d.top - c < g.top ? "bottom" : "right" == r && d.right + p > g.width ? "left" : "left" == r && d.left - p < g.left ? "right" : r, s.removeClass(f).addClass(r)
      }
      var m = this.getCalculatedOffset(r, d, p, c);
      this.applyPlacement(m, r);
      var v = function () {
        var t = n.hoverState;
        n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
      };
      t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
    }
  }, i.prototype.applyPlacement = function (e, i) {
    var o = this.tip(),
      n = o[0].offsetWidth,
      s = o[0].offsetHeight,
      a = parseInt(o.css("margin-top"), 10),
      r = parseInt(o.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top = e.top + a, e.left = e.left + r, t.offset.setOffset(o[0], t.extend({
      using: function (t) {
        o.css({
          top: Math.round(t.top),
          left: Math.round(t.left)
        })
      }
    }, e), 0), o.addClass("in");
    var l = o[0].offsetWidth,
      h = o[0].offsetHeight;
    "top" == i && h != s && (e.top = e.top + s - h);
    var d = this.getViewportAdjustedDelta(i, e, l, h);
    d.left ? e.left += d.left : e.top += d.top;
    var p = /top|bottom/.test(i),
      c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
      f = p ? "offsetWidth" : "offsetHeight";
    o.offset(e), this.replaceArrow(c, o[0][f], p)
  }, i.prototype.replaceArrow = function (t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
  }, i.prototype.setContent = function () {
    var t = this.tip(),
      e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
  }, i.prototype.hide = function (e) {
    function o() {
      "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
    }
    var n = this,
      s = t(this.$tip),
      a = t.Event("hide.bs." + this.type);
    return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
  }, i.prototype.fixTitle = function () {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }, i.prototype.hasContent = function () {
    return this.getTitle()
  }, i.prototype.getPosition = function (e) {
    e = e || this.$element;
    var i = e[0],
      o = "BODY" == i.tagName,
      n = i.getBoundingClientRect();
    null == n.width && (n = t.extend({}, n, {
      width: n.right - n.left,
      height: n.bottom - n.top
    }));
    var s = o ? {
        top: 0,
        left: 0
      } : e.offset(),
      a = {
        scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
      },
      r = o ? {
        width: t(window).width(),
        height: t(window).height()
      } : null;
    return t.extend({}, n, a, r, s)
  }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
    return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
      top: e.top - o,
      left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
      top: e.top + e.height / 2 - o / 2,
      left: e.left - i
    } : {
      top: e.top + e.height / 2 - o / 2,
      left: e.left + e.width
    }
  }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
    var n = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return n;
    var s = this.options.viewport && this.options.viewport.padding || 0,
      a = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var r = e.top - s - a.scroll,
        l = e.top + s - a.scroll + o;
      r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
    } else {
      var h = e.left - s,
        d = e.left + s + i;
      h < a.left ? n.left = a.left - h : d > a.width && (n.left = a.left + a.width - d)
    }
    return n
  }, i.prototype.getTitle = function () {
    var t, e = this.$element,
      i = this.options;
    return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
  }, i.prototype.getUID = function (t) {
    do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
    return t
  }, i.prototype.tip = function () {
    return this.$tip = this.$tip || t(this.options.template)
  }, i.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, i.prototype.enable = function () {
    this.enabled = !0
  }, i.prototype.disable = function () {
    this.enabled = !1
  }, i.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }, i.prototype.toggle = function (e) {
    var i = this;
    e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  }, i.prototype.destroy = function () {
    var t = this;
    clearTimeout(this.timeout), this.hide(function () {
      t.$element.off("." + t.type).removeData("bs." + t.type)
    })
  };
  var o = t.fn.tooltip;
  t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
    return t.fn.tooltip = o, this
  }
}(jQuery), + function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this),
        n = o.data("bs.popover"),
        s = "object" == typeof e && e;
      (n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
    })
  }
  var i = function (t, e) {
    this.init("popover", t, e)
  };
  if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
  i.VERSION = "3.3.2", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
    return i.DEFAULTS
  }, i.prototype.setContent = function () {
    var t = this.tip(),
      e = this.getTitle(),
      i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
  }, i.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }, i.prototype.getContent = function () {
    var t = this.$element,
      e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }, i.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var o = t.fn.popover;
  t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
    return t.fn.popover = o, this
  }
}(jQuery), + function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this),
        n = o.data("bs.tab");
      n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
    })
  }
  var i = function (e) {
    this.element = t(e)
  };
  i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
    var e = this.element,
      i = e.closest("ul:not(.dropdown-menu)"),
      o = e.data("target");
    if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var n = i.find(".active:last a"),
        s = t.Event("hide.bs.tab", {
          relatedTarget: e[0]
        }),
        a = t.Event("show.bs.tab", {
          relatedTarget: n[0]
        });
      if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
        var r = t(o);
        this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
          n.trigger({
            type: "hidden.bs.tab",
            relatedTarget: e[0]
          }), e.trigger({
            type: "shown.bs.tab",
            relatedTarget: n[0]
          })
        })
      }
    }
  }, i.prototype.activate = function (e, o, n) {
    function s() {
      a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
    }
    var a = o.find("> .active"),
      r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
    a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
  };
  var o = t.fn.tab;
  t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
    return t.fn.tab = o, this
  };
  var n = function (i) {
    i.preventDefault(), e.call(t(this), "show")
  };
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var o = t(this),
        n = o.data("bs.affix"),
        s = "object" == typeof e && e;
      n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
    })
  }
  var i = function (e, o) {
    this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  i.VERSION = "3.3.2", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
  }, i.prototype.getState = function (t, e, i, o) {
    var n = this.$target.scrollTop(),
      s = this.$element.offset(),
      a = this.$target.height();
    if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
    if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
    var r = null == this.affixed,
      l = r ? n : s.top,
      h = r ? a : e;
    return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
  }, i.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
      e = this.$element.offset();
    return this.pinnedOffset = e.top - t
  }, i.prototype.checkPositionWithEventLoop = function () {
    setTimeout(t.proxy(this.checkPosition, this), 1)
  }, i.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var e = this.$element.height(),
        o = this.options.offset,
        n = o.top,
        s = o.bottom,
        a = t(document.body).height();
      "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
      var r = this.getState(a, e, n, s);
      if (this.affixed != r) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (r ? "-" + r : ""),
          h = t.Event(l + ".bs.affix");
        if (this.$element.trigger(h), h.isDefaultPrevented()) return;
        this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == r && this.$element.offset({
        top: a - e - s
      })
    }
  };
  var o = t.fn.affix;
  t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
    return t.fn.affix = o, this
  }, t(window).on("load", function () {
    t('[data-spy="affix"]').each(function () {
      var i = t(this),
        o = i.data();
      o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
    })
  })
}(jQuery), + function (t) {
  "use strict";
  function e(e) {
    var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(o)
  }
  function i(e) {
    return this.each(function () {
      var i = t(this),
        n = i.data("bs.collapse"),
        s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
      !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
    })
  }
  var o = function (e, i) {
    this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  o.VERSION = "3.3.2", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
    toggle: !0
  }, o.prototype.dimension = function () {
    var t = this.$element.hasClass("width");
    return t ? "width" : "height"
  }, o.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
        var s = t.Event("show.bs.collapse");
        if (this.$element.trigger(s), !s.isDefaultPrevented()) {
          n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
          var a = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var r = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!t.support.transition) return r.call(this);
          var l = t.camelCase(["scroll", a].join("-"));
          this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
        }
      }
    }
  }, o.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var n = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
      }
    }
  }, o.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, o.prototype.getParent = function () {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
      var n = t(o);
      this.addAriaAndCollapsedClass(e(n), n)
    }, this)).end()
  }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
  };
  var n = t.fn.collapse;
  t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
    return t.fn.collapse = n, this
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
    var n = t(this);
    n.attr("data-target") || o.preventDefault();
    var s = e(n),
      a = s.data("bs.collapse"),
      r = a ? "toggle" : n.data();
    i.call(s, r)
  })
}(jQuery), + function (t) {
  "use strict";
  function e(i, o) {
    this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
  }
  function i(i) {
    return this.each(function () {
      var o = t(this),
        n = o.data("bs.scrollspy"),
        s = "object" == typeof i && i;
      n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
    })
  }
  e.VERSION = "3.3.2", e.DEFAULTS = {
    offset: 10
  }, e.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, e.prototype.refresh = function () {
    var e = this,
      i = "offset",
      o = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var e = t(this),
        n = e.data("target") || e.attr("href"),
        s = /^#./.test(n) && t(n);
      return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null
    }).sort(function (t, e) {
      return t[0] - e[0]
    }).each(function () {
      e.offsets.push(this[0]), e.targets.push(this[1])
    })
  }, e.prototype.process = function () {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
      i = this.getScrollHeight(),
      o = this.options.offset + i - this.$scrollElement.height(),
      n = this.offsets,
      s = this.targets,
      a = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
    if (a && e < n[0]) return this.activeTarget = null, this.clear();
    for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e <= n[t + 1]) && this.activate(s[t])
  }, e.prototype.activate = function (e) {
    this.activeTarget = e, this.clear();
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
      o = t(i).parents("li").addClass("active");
    o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
  }, e.prototype.clear = function () {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var o = t.fn.scrollspy;
  t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
    return t.fn.scrollspy = o, this
  }, t(window).on("load.bs.scrollspy.data-api", function () {
    t('[data-spy="scroll"]').each(function () {
      var e = t(this);
      i.call(e, e.data())
    })
  })
}(jQuery), + function (t) {
  "use strict";
  function e() {
    var t = document.createElement("bootstrap"),
      e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var i in e)
      if (void 0 !== t.style[i]) return {
        end: e[i]
      };
    return !1
  }
  t.fn.emulateTransitionEnd = function (e) {
    var i = !1,
      o = this;
    t(this).one("bsTransitionEnd", function () {
      i = !0
    });
    var n = function () {
      i || t(o).trigger(t.support.transition.end)
    };
    return setTimeout(n, e), this
  }, t(function () {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function (e) {
        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery);
/*            http://akyurek.ua/wp-content/themes/bestbuild/assets/js/select2.min.js */
/*! Select2 4.0.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
  var b = function () {
      if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
      var b;
      return function () {
        if (!b || !b.requirejs) {
          b ? c = b : b = {};
          var a, c, d;
          ! function (b) {
            function e(a, b) {
              return u.call(a, b)
            }
            function f(a, b) {
              var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                o = s.map,
                p = o && o["*"] || {};
              if (a && "." === a.charAt(0))
                if (b) {
                  for (n = n.slice(0, n.length - 1), a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.concat(a), k = 0; k < a.length; k += 1)
                    if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                    else if (".." === m) {
                    if (1 === k && (".." === a[2] || ".." === a[0])) break;
                    k > 0 && (a.splice(k - 1, 2), k -= 2)
                  }
                  a = a.join("/")
                } else 0 === a.indexOf("./") && (a = a.substring(2));
              if ((n || p) && o) {
                for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                  if (d = c.slice(0, k).join("/"), n)
                    for (l = n.length; l > 0; l -= 1)
                      if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                        f = e, h = k;
                        break
                      }
                  if (f) break;
                  !i && p && p[d] && (i = p[d], j = k)
                }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
              }
              return a
            }
            function g(a, c) {
              return function () {
                return n.apply(b, v.call(arguments, 0).concat([a, c]))
              }
            }
            function h(a) {
              return function (b) {
                return f(b, a)
              }
            }
            function i(a) {
              return function (b) {
                q[a] = b
              }
            }
            function j(a) {
              if (e(r, a)) {
                var c = r[a];
                delete r[a], t[a] = !0, m.apply(b, c)
              }
              if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
              return q[a]
            }
            function k(a) {
              var b, c = a ? a.indexOf("!") : -1;
              return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
            }
            function l(a) {
              return function () {
                return s && s.config && s.config[a] || {}
              }
            }
            var m, n, o, p, q = {},
              r = {},
              s = {},
              t = {},
              u = Object.prototype.hasOwnProperty,
              v = [].slice,
              w = /\.js$/;
            o = function (a, b) {
              var c, d = k(a),
                e = d[0];
              return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                f: e ? e + "!" + a : a,
                n: a,
                pr: e,
                p: c
              }
            }, p = {
              require: function (a) {
                return g(a)
              },
              exports: function (a) {
                var b = q[a];
                return "undefined" != typeof b ? b : q[a] = {}
              },
              module: function (a) {
                return {
                  id: a,
                  uri: "",
                  exports: q[a],
                  config: l(a)
                }
              }
            }, m = function (a, c, d, f) {
              var h, k, l, m, n, s, u = [],
                v = typeof d;
              if (f = f || a, "undefined" === v || "function" === v) {
                for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)
                  if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);
                  else if ("exports" === k) u[n] = p.exports(a), s = !0;
                else if ("module" === k) h = u[n] = p.module(a);
                else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                else {
                  if (!m.p) throw new Error(a + " missing " + k);
                  m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                }
                l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
              } else a && (q[a] = d)
            }, a = c = n = function (a, c, d, e, f) {
              if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);
              if (!a.splice) {
                if (s = a, s.deps && n(s.deps, s.callback), !c) return;
                c.splice ? (a = c, c = d, d = null) : a = b
              }
              return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
                m(b, a, c, d)
              }, 4), n
            }, n.config = function (a) {
              return n(a)
            }, a._defined = q, d = function (a, b, c) {
              b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
            }, d.amd = {
              jQuery: !0
            }
          }(), b.requirejs = a, b.require = c, b.define = d
        }
      }(), b.define("almond", function () {}), b.define("jquery", [], function () {
        var b = a || $;
        return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
      }), b.define("select2/utils", ["jquery"], function (a) {
        function b(a) {
          var b = a.prototype,
            c = [];
          for (var d in b) {
            var e = b[d];
            "function" == typeof e && "constructor" !== d && c.push(d)
          }
          return c
        }
        var c = {};
        c.Extend = function (a, b) {
          function c() {
            this.constructor = a
          }
          var d = {}.hasOwnProperty;
          for (var e in b) d.call(b, e) && (a[e] = b[e]);
          return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        }, c.Decorate = function (a, c) {
          function d() {
            var b = Array.prototype.unshift,
              d = c.prototype.constructor.length,
              e = a.prototype.constructor;
            d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
          }
          function e() {
            this.constructor = d
          }
          var f = b(c),
            g = b(a);
          c.displayName = a.displayName, d.prototype = new e;
          for (var h = 0; h < g.length; h++) {
            var i = g[h];
            d.prototype[i] = a.prototype[i]
          }
          for (var j = (function (a) {
              var b = function () {};
              a in d.prototype && (b = d.prototype[a]);
              var e = c.prototype[a];
              return function () {
                var a = Array.prototype.unshift;
                return a.call(arguments, b), e.apply(this, arguments)
              }
            }), k = 0; k < f.length; k++) {
            var l = f[k];
            d.prototype[l] = j(l)
          }
          return d
        };
        var d = function () {
          this.listeners = {}
        };
        return d.prototype.on = function (a, b) {
          this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
        }, d.prototype.trigger = function (a) {
          var b = Array.prototype.slice;
          this.listeners = this.listeners || {}, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
        }, d.prototype.invoke = function (a, b) {
          for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b)
        }, c.Observable = d, c.generateChars = function (a) {
          for (var b = "", c = 0; a > c; c++) {
            var d = Math.floor(36 * Math.random());
            b += d.toString(36)
          }
          return b
        }, c.bind = function (a, b) {
          return function () {
            a.apply(b, arguments)
          }
        }, c._convertData = function (a) {
          for (var b in a) {
            var c = b.split("-"),
              d = a;
            if (1 !== c.length) {
              for (var e = 0; e < c.length; e++) {
                var f = c[e];
                f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
              }
              delete a[b]
            }
          }
          return a
        }, c.hasScroll = function (b, c) {
          var d = a(c),
            e = c.style.overflowX,
            f = c.style.overflowY;
          return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1
        }, c.escapeMarkup = function (a) {
          var b = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
          };
          return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
            return b[a]
          })
        }, c.appendMany = function (b, c) {
          if ("1.7" === a.fn.jquery.substr(0, 3)) {
            var d = a();
            a.map(c, function (a) {
              d = d.add(a)
            }), c = d
          }
          b.append(c)
        }, c
      }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
        function c(a, b, d) {
          this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
        }
        return b.Extend(c, b.Observable), c.prototype.render = function () {
          var b = a('<ul class="select2-results__options" role="tree"></ul>');
          return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
        }, c.prototype.clear = function () {
          this.$results.empty()
        }, c.prototype.displayMessage = function (b) {
          var c = this.options.get("escapeMarkup");
          this.clear(), this.hideLoading();
          var d = a('<li role="treeitem" class="select2-results__option"></li>'),
            e = this.options.get("translations").get(b.message);
          d.append(c(e(b.args))), this.$results.append(d)
        }, c.prototype.append = function (a) {
          this.hideLoading();
          var b = [];
          if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
            message: "noResults"
          }));
          a.results = this.sort(a.results);
          for (var c = 0; c < a.results.length; c++) {
            var d = a.results[c],
              e = this.option(d);
            b.push(e)
          }
          this.$results.append(b)
        }, c.prototype.position = function (a, b) {
          var c = b.find(".select2-results");
          c.append(a)
        }, c.prototype.sort = function (a) {
          var b = this.options.get("sorter");
          return b(a)
        }, c.prototype.setClasses = function () {
          var b = this;
          this.data.current(function (c) {
            var d = a.map(c, function (a) {
                return a.id.toString()
              }),
              e = b.$results.find(".select2-results__option[aria-selected]");
            e.each(function () {
              var b = a(this),
                c = a.data(this, "data"),
                e = "" + c.id;
              null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
            });
            var f = e.filter("[aria-selected=true]");
            f.length > 0 ? f.first().trigger("mouseenter") : e.first().trigger("mouseenter")
          })
        }, c.prototype.showLoading = function (a) {
          this.hideLoading();
          var b = this.options.get("translations").get("searching"),
            c = {
              disabled: !0,
              loading: !0,
              text: b(a)
            },
            d = this.option(c);
          d.className += " loading-results", this.$results.prepend(d)
        }, c.prototype.hideLoading = function () {
          this.$results.find(".loading-results").remove()
        }, c.prototype.option = function (b) {
          var c = document.createElement("li");
          c.className = "select2-results__option";
          var d = {
            role: "treeitem",
            "aria-selected": "false"
          };
          b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
          for (var e in d) {
            var f = d[e];
            c.setAttribute(e, f)
          }
          if (b.children) {
            var g = a(c),
              h = document.createElement("strong");
            h.className = "select2-results__group"; {
              a(h)
            }
            this.template(b, h);
            for (var i = [], j = 0; j < b.children.length; j++) {
              var k = b.children[j],
                l = this.option(k);
              i.push(l)
            }
            var m = a("<ul></ul>", {
              "class": "select2-results__options select2-results__options--nested"
            });
            m.append(i), g.append(h), g.append(m)
          } else this.template(b, c);
          return a.data(c, "data", b), c
        }, c.prototype.bind = function (b) {
          var c = this,
            d = b.id + "-results";
          this.$results.attr("id", d), b.on("results:all", function (a) {
            c.clear(), c.append(a.data), b.isOpen() && c.setClasses()
          }), b.on("results:append", function (a) {
            c.append(a.data), b.isOpen() && c.setClasses()
          }), b.on("query", function (a) {
            c.showLoading(a)
          }), b.on("select", function () {
            b.isOpen() && c.setClasses()
          }), b.on("unselect", function () {
            b.isOpen() && c.setClasses()
          }), b.on("open", function () {
            c.$results.attr("aria-expanded", "true"), c.$results.attr("aria-hidden", "false"), c.setClasses(), c.ensureHighlightVisible()
          }), b.on("close", function () {
            c.$results.attr("aria-expanded", "false"), c.$results.attr("aria-hidden", "true"), c.$results.removeAttr("aria-activedescendant")
          }), b.on("results:toggle", function () {
            var a = c.getHighlightedResults();
            0 !== a.length && a.trigger("mouseup")
          }), b.on("results:select", function () {
            var a = c.getHighlightedResults();
            if (0 !== a.length) {
              var b = a.data("data");
              "true" == a.attr("aria-selected") ? c.trigger("close") : c.trigger("select", {
                data: b
              })
            }
          }), b.on("results:previous", function () {
            var a = c.getHighlightedResults(),
              b = c.$results.find("[aria-selected]"),
              d = b.index(a);
            if (0 !== d) {
              var e = d - 1;
              0 === a.length && (e = 0);
              var f = b.eq(e);
              f.trigger("mouseenter");
              var g = c.$results.offset().top,
                h = f.offset().top,
                i = c.$results.scrollTop() + (h - g);
              0 === e ? c.$results.scrollTop(0) : 0 > h - g && c.$results.scrollTop(i)
            }
          }), b.on("results:next", function () {
            var a = c.getHighlightedResults(),
              b = c.$results.find("[aria-selected]"),
              d = b.index(a),
              e = d + 1;
            if (!(e >= b.length)) {
              var f = b.eq(e);
              f.trigger("mouseenter");
              var g = c.$results.offset().top + c.$results.outerHeight(!1),
                h = f.offset().top + f.outerHeight(!1),
                i = c.$results.scrollTop() + h - g;
              0 === e ? c.$results.scrollTop(0) : h > g && c.$results.scrollTop(i)
            }
          }), b.on("results:focus", function (a) {
            a.element.addClass("select2-results__option--highlighted")
          }), b.on("results:message", function (a) {
            c.displayMessage(a)
          }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
            var b = c.$results.scrollTop(),
              d = c.$results.get(0).scrollHeight - c.$results.scrollTop() + a.deltaY,
              e = a.deltaY > 0 && b - a.deltaY <= 0,
              f = a.deltaY < 0 && d <= c.$results.height();
            e ? (c.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (c.$results.scrollTop(c.$results.get(0).scrollHeight - c.$results.height()), a.preventDefault(), a.stopPropagation())
          }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
            var d = a(this),
              e = d.data("data");
            return "true" === d.attr("aria-selected") ? void(c.options.get("multiple") ? c.trigger("unselect", {
              originalEvent: b,
              data: e
            }) : c.trigger("close")) : void c.trigger("select", {
              originalEvent: b,
              data: e
            })
          }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function () {
            var b = a(this).data("data");
            c.getHighlightedResults().removeClass("select2-results__option--highlighted"), c.trigger("results:focus", {
              data: b,
              element: a(this)
            })
          })
        }, c.prototype.getHighlightedResults = function () {
          var a = this.$results.find(".select2-results__option--highlighted");
          return a
        }, c.prototype.destroy = function () {
          this.$results.remove()
        }, c.prototype.ensureHighlightVisible = function () {
          var a = this.getHighlightedResults();
          if (0 !== a.length) {
            var b = this.$results.find("[aria-selected]"),
              c = b.index(a),
              d = this.$results.offset().top,
              e = a.offset().top,
              f = this.$results.scrollTop() + (e - d),
              g = e - d;
            f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
          }
        }, c.prototype.template = function (b, c) {
          var d = this.options.get("templateResult"),
            e = this.options.get("escapeMarkup"),
            f = d(b);
          null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
        }, c
      }), b.define("select2/keys", [], function () {
        var a = {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        };
        return a
      }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
        function d(a, b) {
          this.$element = a, this.options = b, d.__super__.constructor.call(this)
        }
        return b.Extend(d, b.Observable), d.prototype.render = function () {
          var b = a('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
          return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
        }, d.prototype.bind = function (a) {
          var b = this,
            d = (a.id + "-container", a.id + "-results");
          this.container = a, this.$selection.on("focus", function (a) {
            b.trigger("focus", a)
          }), this.$selection.on("blur", function (a) {
            b.trigger("blur", a)
          }), this.$selection.on("keydown", function (a) {
            b.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
          }), a.on("results:focus", function (a) {
            b.$selection.attr("aria-activedescendant", a.data._resultId)
          }), a.on("selection:update", function (a) {
            b.update(a.data)
          }), a.on("open", function () {
            b.$selection.attr("aria-expanded", "true"), b.$selection.attr("aria-owns", d), b._attachCloseHandler(a)
          }), a.on("close", function () {
            b.$selection.attr("aria-expanded", "false"), b.$selection.removeAttr("aria-activedescendant"), b.$selection.removeAttr("aria-owns"), b.$selection.focus(), b._detachCloseHandler(a)
          }), a.on("enable", function () {
            b.$selection.attr("tabindex", b._tabindex)
          }), a.on("disable", function () {
            b.$selection.attr("tabindex", "-1")
          })
        }, d.prototype._attachCloseHandler = function (b) {
          a(document.body).on("mousedown.select2." + b.id, function (b) {
            var c = a(b.target),
              d = c.closest(".select2"),
              e = a(".select2.select2-container--open");
            e.each(function () {
              var b = a(this);
              if (this != d[0]) {
                var c = b.data("element");
                c.select2("close")
              }
            })
          })
        }, d.prototype._detachCloseHandler = function (b) {
          a(document.body).off("mousedown.select2." + b.id)
        }, d.prototype.position = function (a, b) {
          var c = b.find(".selection");
          c.append(a)
        }, d.prototype.destroy = function () {
          this._detachCloseHandler(this.container)
        }, d.prototype.update = function () {
          throw new Error("The `update` method must be defined in child classes.")
        }, d
      }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c) {
        function d() {
          d.__super__.constructor.apply(this, arguments)
        }
        return c.Extend(d, b), d.prototype.render = function () {
          var a = d.__super__.render.call(this);
          return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
        }, d.prototype.bind = function (a) {
          var b = this;
          d.__super__.bind.apply(this, arguments);
          var c = a.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", c), this.$selection.attr("aria-labelledby", c), this.$selection.on("mousedown", function (a) {
            1 === a.which && b.trigger("toggle", {
              originalEvent: a
            })
          }), this.$selection.on("focus", function () {}), this.$selection.on("blur", function () {}), a.on("selection:update", function (a) {
            b.update(a.data)
          })
        }, d.prototype.clear = function () {
          this.$selection.find(".select2-selection__rendered").empty()
        }, d.prototype.display = function (a) {
          var b = this.options.get("templateSelection"),
            c = this.options.get("escapeMarkup");
          return c(b(a))
        }, d.prototype.selectionContainer = function () {
          return a("<span></span>")
        }, d.prototype.update = function (a) {
          if (0 === a.length) return void this.clear();
          var b = a[0],
            c = this.display(b),
            d = this.$selection.find(".select2-selection__rendered");
          d.empty().append(c), d.prop("title", b.title || b.text)
        }, d
      }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
        function d() {
          d.__super__.constructor.apply(this, arguments)
        }
        return c.Extend(d, b), d.prototype.render = function () {
          var a = d.__super__.render.call(this);
          return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
        }, d.prototype.bind = function () {
          var b = this;
          d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
            b.trigger("toggle", {
              originalEvent: a
            })
          }), this.$selection.on("click", ".select2-selection__choice__remove", function (c) {
            var d = a(this),
              e = d.parent(),
              f = e.data("data");
            b.trigger("unselect", {
              originalEvent: c,
              data: f
            })
          })
        }, d.prototype.clear = function () {
          this.$selection.find(".select2-selection__rendered").empty()
        }, d.prototype.display = function (a) {
          var b = this.options.get("templateSelection"),
            c = this.options.get("escapeMarkup");
          return c(b(a))
        }, d.prototype.selectionContainer = function () {
          var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
          return b
        }, d.prototype.update = function (a) {
          if (this.clear(), 0 !== a.length) {
            for (var b = [], d = 0; d < a.length; d++) {
              var e = a[d],
                f = this.display(e),
                g = this.selectionContainer();
              g.append(f), g.prop("title", e.title || e.text), g.data("data", e), b.push(g)
            }
            var h = this.$selection.find(".select2-selection__rendered");
            c.appendMany(h, b)
          }
        }, d
      }), b.define("select2/selection/placeholder", ["../utils"], function () {
        function a(a, b, c) {
          this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
        }
        return a.prototype.normalizePlaceholder = function (a, b) {
          return "string" == typeof b && (b = {
            id: "",
            text: b
          }), b
        }, a.prototype.createPlaceholder = function (a, b) {
          var c = this.selectionContainer();
          return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
        }, a.prototype.update = function (a, b) {
          var c = 1 == b.length && b[0].id != this.placeholder.id,
            d = b.length > 1;
          if (d || c) return a.call(this, b);
          this.clear();
          var e = this.createPlaceholder(this.placeholder);
          this.$selection.find(".select2-selection__rendered").append(e)
        }, a
      }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
        function c() {}
        return c.prototype.bind = function (a, b, c) {
          var d = this;
          a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
            d._handleClear(a)
          }), b.on("keypress", function (a) {
            d._handleKeyboardClear(a, b)
          })
        }, c.prototype._handleClear = function (a, b) {
          if (!this.options.get("disabled")) {
            var c = this.$selection.find(".select2-selection__clear");
            if (0 !== c.length) {
              b.stopPropagation();
              for (var d = c.data("data"), e = 0; e < d.length; e++) {
                var f = {
                  data: d[e]
                };
                if (this.trigger("unselect", f), f.prevented) return
              }
              this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle")
            }
          }
        }, c.prototype._handleKeyboardClear = function (a, c, d) {
          d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
        }, c.prototype.update = function (b, c) {
          if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
            var d = a('<span class="select2-selection__clear">&times;</span>');
            d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
          }
        }, c
      }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
        function d(a, b, c) {
          a.call(this, b, c)
        }
        return d.prototype.render = function (b) {
          var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');
          this.$searchContainer = c, this.$search = c.find("input");
          var d = b.call(this);
          return d
        }, d.prototype.bind = function (a, b, d) {
          var e = this;
          a.call(this, b, d), b.on("open", function () {
            e.$search.attr("tabindex", 0), e.$search.focus()
          }), b.on("close", function () {
            e.$search.attr("tabindex", -1), e.$search.val(""), e.$search.focus()
          }), b.on("enable", function () {
            e.$search.prop("disabled", !1)
          }), b.on("disable", function () {
            e.$search.prop("disabled", !0)
          }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
            e.trigger("focus", a)
          }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
            e.trigger("blur", a)
          }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
            a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
            var b = a.which;
            if (b === c.BACKSPACE && "" === e.$search.val()) {
              var d = e.$searchContainer.prev(".select2-selection__choice");
              if (d.length > 0) {
                var f = d.data("data");
                e.searchRemoveChoice(f), a.preventDefault()
              }
            }
          }), this.$selection.on("input", ".select2-search--inline", function () {
            e.$selection.off("keyup.search")
          }), this.$selection.on("keyup.search input", ".select2-search--inline", function (a) {
            e.handleSearch(a)
          })
        }, d.prototype.createPlaceholder = function (a, b) {
          this.$search.attr("placeholder", b.text)
        }, d.prototype.update = function (a, b) {
          this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch()
        }, d.prototype.handleSearch = function () {
          if (this.resizeSearch(), !this._keyUpPrevented) {
            var a = this.$search.val();
            this.trigger("query", {
              term: a
            })
          }
          this._keyUpPrevented = !1
        }, d.prototype.searchRemoveChoice = function (a, b) {
          this.trigger("unselect", {
            data: b
          }), this.trigger("open"), this.$search.val(b.text + " ")
        }, d.prototype.resizeSearch = function () {
          this.$search.css("width", "25px");
          var a = "";
          if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
          else {
            var b = this.$search.val().length + 1;
            a = .75 * b + "em"
          }
          this.$search.css("width", a)
        }, d
      }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
        function b() {}
        return b.prototype.bind = function (b, c, d) {
          var e = this,
            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
            g = ["opening", "closing", "selecting", "unselecting"];
          b.call(this, c, d), c.on("*", function (b, c) {
            if (-1 !== a.inArray(b, f)) {
              c = c || {};
              var d = a.Event("select2:" + b, {
                params: c
              });
              e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
            }
          })
        }, b
      }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
        function c(a) {
          this.dict = a || {}
        }
        return c.prototype.all = function () {
          return this.dict
        }, c.prototype.get = function (a) {
          return this.dict[a]
        }, c.prototype.extend = function (b) {
          this.dict = a.extend({}, b.all(), this.dict)
        }, c._cache = {}, c.loadPath = function (a) {
          if (!(a in c._cache)) {
            var d = b(a);
            c._cache[a] = d
          }
          return new c(c._cache[a])
        }, c
      }), b.define("select2/diacritics", [], function () {
        var a = {
          "в’¶": "A",
          "пјЎ": "A",
          "ГЂ": "A",
          "ГЃ": "A",
          "Г‚": "A",
          "бє¦": "A",
          "бє¤": "A",
          "бєЄ": "A",
          "бєЁ": "A",
          "Гѓ": "A",
          "ДЂ": "A",
          "Д‚": "A",
          "бє°": "A",
          "бє®": "A",
          "бєґ": "A",
          "бєІ": "A",
          "И¦": "A",
          "З ": "A",
          "Г„": "A",
          "Зћ": "A",
          "бєў": "A",
          "Г…": "A",
          "Зє": "A",
          "ЗЌ": "A",
          "ИЂ": "A",
          "И‚": "A",
          "бє ": "A",
          "бє¬": "A",
          "бє¶": "A",
          "бёЂ": "A",
          "Д„": "A",
          "Иє": "A",
          "в±Ї": "A",
          "књІ": "AA",
          "Г†": "AE",
          "Зј": "AE",
          "Зў": "AE",
          "књґ": "AO",
          "књ¶": "AU",
          "књё": "AV",
          "књє": "AV",
          "књј": "AY",
          "в’·": "B",
          "пјў": "B",
          "бё‚": "B",
          "бё„": "B",
          "бё†": "B",
          "Йѓ": "B",
          "Ж‚": "B",
          "ЖЃ": "B",
          "в’ё": "C",
          "пјЈ": "C",
          "Д†": "C",
          "Д€": "C",
          "ДЉ": "C",
          "ДЊ": "C",
          "Г‡": "C",
          "бё€": "C",
          "Ж‡": "C",
          "И»": "C",
          "књѕ": "C",
          "в’№": "D",
          "пј¤": "D",
          "бёЉ": "D",
          "ДЋ": "D",
          "бёЊ": "D",
          "бёђ": "D",
          "бё’": "D",
          "бёЋ": "D",
          "Дђ": "D",
          "Ж‹": "D",
          "ЖЉ": "D",
          "Ж‰": "D",
          "кќ№": "D",
          "З±": "DZ",
          "З„": "DZ",
          "ЗІ": "Dz",
          "З…": "Dz",
          "в’є": "E",
          "пјҐ": "E",
          "Г€": "E",
          "Г‰": "E",
          "ГЉ": "E",
          "б»Ђ": "E",
          "бєѕ": "E",
          "б»„": "E",
          "б»‚": "E",
          "бєј": "E",
          "Д’": "E",
          "бё”": "E",
          "бё–": "E",
          "Д”": "E",
          "Д–": "E",
          "Г‹": "E",
          "бєє": "E",
          "Дљ": "E",
          "И„": "E",
          "И†": "E",
          "бєё": "E",
          "б»†": "E",
          "ИЁ": "E",
          "бёњ": "E",
          "Д": "E",
          "бё": "E",
          "бёљ": "E",
          "Жђ": "E",
          "ЖЋ": "E",
          "в’»": "F",
          "пј¦": "F",
          "бёћ": "F",
          "Ж‘": "F",
          "кќ»": "F",
          "в’ј": "G",
          "пј§": "G",
          "Зґ": "G",
          "Дњ": "G",
          "бё ": "G",
          "Дћ": "G",
          "Д ": "G",
          "З¦": "G",
          "Дў": "G",
          "З¤": "G",
          "Ж“": "G",
          "кћ ": "G",
          "кќЅ": "G",
          "кќѕ": "G",
          "в’Ѕ": "H",
          "пјЁ": "H",
          "Д¤": "H",
          "бёў": "H",
          "бё¦": "H",
          "Ић": "H",
          "бё¤": "H",
          "бёЁ": "H",
          "бёЄ": "H",
          "Д¦": "H",
          "в±§": "H",
          "в±µ": "H",
          "кћЌ": "H",
          "в’ѕ": "I",
          "пј©": "I",
          "ГЊ": "I",
          "ГЌ": "I",
          "ГЋ": "I",
          "ДЁ": "I",
          "ДЄ": "I",
          "Д¬": "I",
          "Д°": "I",
          "ГЏ": "I",
          "бё®": "I",
          "б»€": "I",
          "ЗЏ": "I",
          "И€": "I",
          "ИЉ": "I",
          "б»Љ": "I",
          "Д®": "I",
          "бё¬": "I",
          "Ж—": "I",
          "в’ї": "J",
          "пјЄ": "J",
          "Дґ": "J",
          "Й€": "J",
          "в“Ђ": "K",
          "пј«": "K",
          "бё°": "K",
          "ЗЁ": "K",
          "бёІ": "K",
          "Д¶": "K",
          "бёґ": "K",
          "Ж": "K",
          "в±©": "K",
          "кќЂ": "K",
          "кќ‚": "K",
          "кќ„": "K",
          "кћў": "K",
          "в“Ѓ": "L",
          "пј¬": "L",
          "Дї": "L",
          "Д№": "L",
          "ДЅ": "L",
          "бё¶": "L",
          "бёё": "L",
          "Д»": "L",
          "бёј": "L",
          "бёє": "L",
          "ЕЃ": "L",
          "ИЅ": "L",
          "в±ў": "L",
          "в± ": "L",
          "кќ€": "L",
          "кќ†": "L",
          "кћЂ": "L",
          "З‡": "LJ",
          "З€": "Lj",
          "в“‚": "M",
          "пј­": "M",
          "бёѕ": "M",
          "б№Ђ": "M",
          "б№‚": "M",
          "в±®": "M",
          "Жњ": "M",
          "в“ѓ": "N",
          "пј®": "N",
          "Зё": "N",
          "Еѓ": "N",
          "Г‘": "N",
          "б№„": "N",
          "Е‡": "N",
          "б№†": "N",
          "Е…": "N",
          "б№Љ": "N",
          "б№€": "N",
          "И ": "N",
          "Жќ": "N",
          "кћђ": "N",
          "кћ¤": "N",
          "ЗЉ": "NJ",
          "З‹": "Nj",
          "в“„": "O",
          "пјЇ": "O",
          "Г’": "O",
          "Г“": "O",
          "Г”": "O",
          "б»’": "O",
          "б»ђ": "O",
          "б»–": "O",
          "б»”": "O",
          "Г•": "O",
          "б№Њ": "O",
          "И¬": "O",
          "б№Ћ": "O",
          "ЕЊ": "O",
          "б№ђ": "O",
          "б№’": "O",
          "ЕЋ": "O",
          "И®": "O",
          "И°": "O",
          "Г–": "O",
          "ИЄ": "O",
          "б»Ћ": "O",
          "Еђ": "O",
          "З‘": "O",
          "ИЊ": "O",
          "ИЋ": "O",
          "Ж ": "O",
          "б»њ": "O",
          "б»љ": "O",
          "б» ": "O",
          "б»ћ": "O",
          "б»ў": "O",
          "б»Њ": "O",
          "б»": "O",
          "ЗЄ": "O",
          "З¬": "O",
          "Г": "O",
          "Зѕ": "O",
          "Ж†": "O",
          "Жџ": "O",
          "кќЉ": "O",
          "кќЊ": "O",
          "Жў": "OI",
          "кќЋ": "OO",
          "Иў": "OU",
          "в“…": "P",
          "пј°": "P",
          "б№”": "P",
          "б№–": "P",
          "Ж¤": "P",
          "в±Ј": "P",
          "кќђ": "P",
          "кќ’": "P",
          "кќ”": "P",
          "в“†": "Q",
          "пј±": "Q",
          "кќ–": "Q",
          "кќ": "Q",
          "ЙЉ": "Q",
          "в“‡": "R",
          "пјІ": "R",
          "Е”": "R",
          "б№": "R",
          "Е": "R",
          "Иђ": "R",
          "И’": "R",
          "б№љ": "R",
          "б№њ": "R",
          "Е–": "R",
          "б№ћ": "R",
          "ЙЊ": "R",
          "в±¤": "R",
          "кќљ": "R",
          "кћ¦": "R",
          "кћ‚": "R",
          "в“€": "S",
          "пјі": "S",
          "бєћ": "S",
          "Ељ": "S",
          "б№¤": "S",
          "Ењ": "S",
          "б№ ": "S",
          "Е ": "S",
          "б№¦": "S",
          "б№ў": "S",
          "б№Ё": "S",
          "И": "S",
          "Ећ": "S",
          "в±ѕ": "S",
          "кћЁ": "S",
          "кћ„": "S",
          "в“‰": "T",
          "пјґ": "T",
          "б№Є": "T",
          "Е¤": "T",
          "б№¬": "T",
          "Иљ": "T",
          "Еў": "T",
          "б№°": "T",
          "б№®": "T",
          "Е¦": "T",
          "Ж¬": "T",
          "Ж®": "T",
          "Иѕ": "T",
          "кћ†": "T",
          "књЁ": "TZ",
          "в“Љ": "U",
          "пјµ": "U",
          "Г™": "U",
          "Гљ": "U",
          "Г›": "U",
          "ЕЁ": "U",
          "б№ё": "U",
          "ЕЄ": "U",
          "б№є": "U",
          "Е¬": "U",
          "Гњ": "U",
          "З›": "U",
          "З—": "U",
          "З•": "U",
          "З™": "U",
          "б»¦": "U",
          "Е®": "U",
          "Е°": "U",
          "З“": "U",
          "И”": "U",
          "И–": "U",
          "ЖЇ": "U",
          "б»Є": "U",
          "б»Ё": "U",
          "б»®": "U",
          "б»¬": "U",
          "б»°": "U",
          "б»¤": "U",
          "б№І": "U",
          "ЕІ": "U",
          "б№¶": "U",
          "б№ґ": "U",
          "Й„": "U",
          "в“‹": "V",
          "пј¶": "V",
          "б№ј": "V",
          "б№ѕ": "V",
          "ЖІ": "V",
          "кќћ": "V",
          "Й…": "V",
          "кќ ": "VY",
          "в“Њ": "W",
          "пј·": "W",
          "бєЂ": "W",
          "бє‚": "W",
          "Еґ": "W",
          "бє†": "W",
          "бє„": "W",
          "бє€": "W",
          "в±І": "W",
          "в“Ќ": "X",
          "пјё": "X",
          "бєЉ": "X",
          "бєЊ": "X",
          "в“Ћ": "Y",
          "пј№": "Y",
          "б»І": "Y",
          "Гќ": "Y",
          "Е¶": "Y",
          "б»ё": "Y",
          "ИІ": "Y",
          "бєЋ": "Y",
          "Её": "Y",
          "б»¶": "Y",
          "б»ґ": "Y",
          "Жі": "Y",
          "ЙЋ": "Y",
          "б»ѕ": "Y",
          "в“Џ": "Z",
          "пјє": "Z",
          "Е№": "Z",
          "бєђ": "Z",
          "Е»": "Z",
          "ЕЅ": "Z",
          "бє’": "Z",
          "бє”": "Z",
          "Жµ": "Z",
          "И¤": "Z",
          "в±ї": "Z",
          "в±«": "Z",
          "кќў": "Z",
          "в“ђ": "a",
          "пЅЃ": "a",
          "бєљ": "a",
          "Г ": "a",
          "ГЎ": "a",
          "Гў": "a",
          "бє§": "a",
          "бєҐ": "a",
          "бє«": "a",
          "бє©": "a",
          "ГЈ": "a",
          "ДЃ": "a",
          "Дѓ": "a",
          "бє±": "a",
          "бєЇ": "a",
          "бєµ": "a",
          "бєі": "a",
          "И§": "a",
          "ЗЎ": "a",
          "Г¤": "a",
          "Зџ": "a",
          "бєЈ": "a",
          "ГҐ": "a",
          "З»": "a",
          "ЗЋ": "a",
          "ИЃ": "a",
          "Иѓ": "a",
          "бєЎ": "a",
          "бє­": "a",
          "бє·": "a",
          "бёЃ": "a",
          "Д…": "a",
          "в±Ґ": "a",
          "Йђ": "a",
          "књі": "aa",
          "Г¦": "ae",
          "ЗЅ": "ae",
          "ЗЈ": "ae",
          "књµ": "ao",
          "књ·": "au",
          "књ№": "av",
          "књ»": "av",
          "књЅ": "ay",
          "в“‘": "b",
          "пЅ‚": "b",
          "бёѓ": "b",
          "бё…": "b",
          "бё‡": "b",
          "ЖЂ": "b",
          "Жѓ": "b",
          "Й“": "b",
          "в“’": "c",
          "пЅѓ": "c",
          "Д‡": "c",
          "Д‰": "c",
          "Д‹": "c",
          "ДЌ": "c",
          "Г§": "c",
          "бё‰": "c",
          "Ж€": "c",
          "Иј": "c",
          "књї": "c",
          "в†„": "c",
          "в““": "d",
          "пЅ„": "d",
          "бё‹": "d",
          "ДЏ": "d",
          "бёЌ": "d",
          "бё‘": "d",
          "бё“": "d",
          "бёЏ": "d",
          "Д‘": "d",
          "ЖЊ": "d",
          "Й–": "d",
          "Й—": "d",
          "кќє": "d",
          "Зі": "dz",
          "З†": "dz",
          "в“”": "e",
          "пЅ…": "e",
          "ГЁ": "e",
          "Г©": "e",
          "ГЄ": "e",
          "б»Ѓ": "e",
          "бєї": "e",
          "б»…": "e",
          "б»ѓ": "e",
          "бєЅ": "e",
          "Д“": "e",
          "бё•": "e",
          "бё—": "e",
          "Д•": "e",
          "Д—": "e",
          "Г«": "e",
          "бє»": "e",
          "Д›": "e",
          "И…": "e",
          "И‡": "e",
          "бє№": "e",
          "б»‡": "e",
          "И©": "e",
          "бёќ": "e",
          "Д™": "e",
          "бё™": "e",
          "бё›": "e",
          "Й‡": "e",
          "Й›": "e",
          "Зќ": "e",
          "в“•": "f",
          "пЅ†": "f",
          "бёџ": "f",
          "Ж’": "f",
          "кќј": "f",
          "в“–": "g",
          "пЅ‡": "g",
          "Зµ": "g",
          "Дќ": "g",
          "бёЎ": "g",
          "Дџ": "g",
          "ДЎ": "g",
          "З§": "g",
          "ДЈ": "g",
          "ЗҐ": "g",
          "Й ": "g",
          "кћЎ": "g",
          "бµ№": "g",
          "кќї": "g",
          "в“—": "h",
          "пЅ€": "h",
          "ДҐ": "h",
          "бёЈ": "h",
          "бё§": "h",
          "Иџ": "h",
          "бёҐ": "h",
          "бё©": "h",
          "бё«": "h",
          "бє–": "h",
          "Д§": "h",
          "в±Ё": "h",
          "в±¶": "h",
          "ЙҐ": "h",
          "Ж•": "hv",
          "в“": "i",
          "пЅ‰": "i",
          "Г¬": "i",
          "Г­": "i",
          "Г®": "i",
          "Д©": "i",
          "Д«": "i",
          "Д­": "i",
          "ГЇ": "i",
          "бёЇ": "i",
          "б»‰": "i",
          "Зђ": "i",
          "И‰": "i",
          "И‹": "i",
          "б»‹": "i",
          "ДЇ": "i",
          "бё­": "i",
          "ЙЁ": "i",
          "Д±": "i",
          "в“™": "j",
          "пЅЉ": "j",
          "Дµ": "j",
          "З°": "j",
          "Й‰": "j",
          "в“љ": "k",
          "пЅ‹": "k",
          "бё±": "k",
          "З©": "k",
          "бёі": "k",
          "Д·": "k",
          "бёµ": "k",
          "Ж™": "k",
          "в±Є": "k",
          "кќЃ": "k",
          "кќѓ": "k",
          "кќ…": "k",
          "кћЈ": "k",
          "в“›": "l",
          "пЅЊ": "l",
          "ЕЂ": "l",
          "Дє": "l",
          "Дѕ": "l",
          "бё·": "l",
          "бё№": "l",
          "Дј": "l",
          "бёЅ": "l",
          "бё»": "l",
          "Еї": "l",
          "Е‚": "l",
          "Жљ": "l",
          "Й«": "l",
          "в±Ў": "l",
          "кќ‰": "l",
          "кћЃ": "l",
          "кќ‡": "l",
          "З‰": "lj",
          "в“њ": "m",
          "пЅЌ": "m",
          "бёї": "m",
          "б№Ѓ": "m",
          "б№ѓ": "m",
          "Й±": "m",
          "ЙЇ": "m",
          "в“ќ": "n",
          "пЅЋ": "n",
          "З№": "n",
          "Е„": "n",
          "Г±": "n",
          "б№…": "n",
          "Е€": "n",
          "б№‡": "n",
          "Е†": "n",
          "б№‹": "n",
          "б№‰": "n",
          "Жћ": "n",
          "ЙІ": "n",
          "Е‰": "n",
          "кћ‘": "n",
          "кћҐ": "n",
          "ЗЊ": "nj",
          "в“ћ": "o",
          "пЅЏ": "o",
          "ГІ": "o",
          "Гі": "o",
          "Гґ": "o",
          "б»“": "o",
          "б»‘": "o",
          "б»—": "o",
          "б»•": "o",
          "Гµ": "o",
          "б№Ќ": "o",
          "И­": "o",
          "б№Џ": "o",
          "ЕЌ": "o",
          "б№‘": "o",
          "б№“": "o",
          "ЕЏ": "o",
          "ИЇ": "o",
          "И±": "o",
          "Г¶": "o",
          "И«": "o",
          "б»Џ": "o",
          "Е‘": "o",
          "З’": "o",
          "ИЌ": "o",
          "ИЏ": "o",
          "ЖЎ": "o",
          "б»ќ": "o",
          "б»›": "o",
          "б»Ў": "o",
          "б»џ": "o",
          "б»Ј": "o",
          "б»Ќ": "o",
          "б»™": "o",
          "З«": "o",
          "З­": "o",
          "Гё": "o",
          "Зї": "o",
          "Й”": "o",
          "кќ‹": "o",
          "кќЌ": "o",
          "Йµ": "o",
          "ЖЈ": "oi",
          "ИЈ": "ou",
          "кќЏ": "oo",
          "в“џ": "p",
          "пЅђ": "p",
          "б№•": "p",
          "б№—": "p",
          "ЖҐ": "p",
          "бµЅ": "p",
          "кќ‘": "p",
          "кќ“": "p",
          "кќ•": "p",
          "в“ ": "q",
          "пЅ‘": "q",
          "Й‹": "q",
          "кќ—": "q",
          "кќ™": "q",
          "в“Ў": "r",
          "пЅ’": "r",
          "Е•": "r",
          "б№™": "r",
          "Е™": "r",
          "И‘": "r",
          "И“": "r",
          "б№›": "r",
          "б№ќ": "r",
          "Е—": "r",
          "б№џ": "r",
          "ЙЌ": "r",
          "ЙЅ": "r",
          "кќ›": "r",
          "кћ§": "r",
          "кћѓ": "r",
          "в“ў": "s",
          "пЅ“": "s",
          "Гџ": "s",
          "Е›": "s",
          "б№Ґ": "s",
          "Еќ": "s",
          "б№Ў": "s",
          "ЕЎ": "s",
          "б№§": "s",
          "б№Ј": "s",
          "б№©": "s",
          "И™": "s",
          "Еџ": "s",
          "Иї": "s",
          "кћ©": "s",
          "кћ…": "s",
          "бє›": "s",
          "в“Ј": "t",
          "пЅ”": "t",
          "б№«": "t",
          "бє—": "t",
          "ЕҐ": "t",
          "б№­": "t",
          "И›": "t",
          "ЕЈ": "t",
          "б№±": "t",
          "б№Ї": "t",
          "Е§": "t",
          "Ж­": "t",
          "К€": "t",
          "в±¦": "t",
          "кћ‡": "t",
          "књ©": "tz",
          "в“¤": "u",
          "пЅ•": "u",
          "Г№": "u",
          "Гє": "u",
          "Г»": "u",
          "Е©": "u",
          "б№№": "u",
          "Е«": "u",
          "б№»": "u",
          "Е­": "u",
          "Гј": "u",
          "Зњ": "u",
          "З": "u",
          "З–": "u",
          "Зљ": "u",
          "б»§": "u",
          "ЕЇ": "u",
          "Е±": "u",
          "З”": "u",
          "И•": "u",
          "И—": "u",
          "Ж°": "u",
          "б»«": "u",
          "б»©": "u",
          "б»Ї": "u",
          "б»­": "u",
          "б»±": "u",
          "б»Ґ": "u",
          "б№і": "u",
          "Еі": "u",
          "б№·": "u",
          "б№µ": "u",
          "К‰": "u",
          "в“Ґ": "v",
          "пЅ–": "v",
          "б№Ѕ": "v",
          "б№ї": "v",
          "К‹": "v",
          "кќџ": "v",
          "КЊ": "v",
          "кќЎ": "vy",
          "в“¦": "w",
          "пЅ—": "w",
          "бєЃ": "w",
          "бєѓ": "w",
          "Еµ": "w",
          "бє‡": "w",
          "бє…": "w",
          "бє": "w",
          "бє‰": "w",
          "в±і": "w",
          "в“§": "x",
          "пЅ": "x",
          "бє‹": "x",
          "бєЌ": "x",
          "в“Ё": "y",
          "пЅ™": "y",
          "б»і": "y",
          "ГЅ": "y",
          "Е·": "y",
          "б»№": "y",
          "Иі": "y",
          "бєЏ": "y",
          "Гї": "y",
          "б»·": "y",
          "бє™": "y",
          "б»µ": "y",
          "Жґ": "y",
          "ЙЏ": "y",
          "б»ї": "y",
          "в“©": "z",
          "пЅљ": "z",
          "Еє": "z",
          "бє‘": "z",
          "Еј": "z",
          "Еѕ": "z",
          "бє“": "z",
          "бє•": "z",
          "Ж¶": "z",
          "ИҐ": "z",
          "ЙЂ": "z",
          "в±¬": "z",
          "кќЈ": "z",
          "О†": "О‘",
          "О€": "О•",
          "О‰": "О—",
          "ОЉ": "О™",
          "ОЄ": "О™",
          "ОЊ": "Оџ",
          "ОЋ": "ОҐ",
          "О«": "ОҐ",
          "ОЏ": "О©",
          "О¬": "О±",
          "О­": "Оµ",
          "О®": "О·",
          "ОЇ": "О№",
          "ПЉ": "О№",
          "Ођ": "О№",
          "ПЊ": "Ої",
          "ПЌ": "П…",
          "П‹": "П…",
          "О°": "П…",
          "П‰": "П‰",
          "П‚": "Пѓ"
        };
        return a
      }), b.define("select2/data/base", ["../utils"], function (a) {
        function b() {
          b.__super__.constructor.call(this)
        }
        return a.Extend(b, a.Observable), b.prototype.current = function () {
          throw new Error("The `current` method must be defined in child classes.")
        }, b.prototype.query = function () {
          throw new Error("The `query` method must be defined in child classes.")
        }, b.prototype.bind = function () {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
          var d = b.id + "-result-";
          return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
        }, b
      }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
        function d(a, b) {
          this.$element = a, this.options = b, d.__super__.constructor.call(this)
        }
        return b.Extend(d, a), d.prototype.current = function (a) {
          var b = [],
            d = this;
          this.$element.find(":selected").each(function () {
            var a = c(this),
              e = d.item(a);
            b.push(e)
          }), a(b)
        }, d.prototype.select = function (a) {
          var b = this;
          if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
          if (this.$element.prop("multiple")) this.current(function (d) {
            var e = [];
            a = [a], a.push.apply(a, d);
            for (var f = 0; f < a.length; f++) {
              var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g)
            }
            b.$element.val(e), b.$element.trigger("change")
          });
          else {
            var d = a.id;
            this.$element.val(d), this.$element.trigger("change")
          }
        }, d.prototype.unselect = function (a) {
          var b = this;
          if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
            for (var e = [], f = 0; f < d.length; f++) {
              var g = d[f].id;
              g !== a.id && -1 === c.inArray(g, e) && e.push(g)
            }
            b.$element.val(e), b.$element.trigger("change")
          })
        }, d.prototype.bind = function (a) {
          var b = this;
          this.container = a, a.on("select", function (a) {
            b.select(a.data)
          }), a.on("unselect", function (a) {
            b.unselect(a.data)
          })
        }, d.prototype.destroy = function () {
          this.$element.find("*").each(function () {
            c.removeData(this, "data")
          })
        }, d.prototype.query = function (a, b) {
          var d = [],
            e = this,
            f = this.$element.children();
          f.each(function () {
            var b = c(this);
            if (b.is("option") || b.is("optgroup")) {
              var f = e.item(b),
                g = e.matches(a, f);
              null !== g && d.push(g)
            }
          }), b({
            results: d
          })
        }, d.prototype.addOptions = function (a) {
          b.appendMany(this.$element, a)
        }, d.prototype.option = function (a) {
          var b;
          a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
          var d = c(b),
            e = this._normalizeItem(a);
          return e.element = b, c.data(b, "data", e), d
        }, d.prototype.item = function (a) {
          var b = {};
          if (b = c.data(a[0], "data"), null != b) return b;
          if (a.is("option")) b = {
            id: a.val(),
            text: a.text(),
            disabled: a.prop("disabled"),
            selected: a.prop("selected"),
            title: a.prop("title")
          };
          else if (a.is("optgroup")) {
            b = {
              text: a.prop("label"),
              children: [],
              title: a.prop("title")
            };
            for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
              var g = c(d[f]),
                h = this.item(g);
              e.push(h)
            }
            b.children = e
          }
          return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
        }, d.prototype._normalizeItem = function (a) {
          c.isPlainObject(a) || (a = {
            id: a,
            text: a
          }), a = c.extend({}, {
            text: ""
          }, a);
          var b = {
            selected: !1,
            disabled: !1
          };
          return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
        }, d.prototype.matches = function (a, b) {
          var c = this.options.get("matcher");
          return c(a, b)
        }, d
      }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
        function d(a, b) {
          var c = b.get("data") || [];
          d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
        }
        return b.Extend(d, a), d.prototype.select = function (a) {
          var b = this.$element.find("option").filter(function (b, c) {
            return c.value == a.id.toString()
          });
          0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
        }, d.prototype.convertToOptions = function (a) {
          function d(a) {
            return function () {
              return c(this).val() == a.id
            }
          }
          for (var e = this, f = this.$element.find("option"), g = f.map(function () {
              return e.item(c(this)).id
            }).get(), h = [], i = 0; i < a.length; i++) {
            var j = this._normalizeItem(a[i]);
            if (c.inArray(j.id, g) >= 0) {
              var k = f.filter(d(j)),
                l = this.item(k),
                m = (c.extend(!0, {}, l, j), this.option(l));
              k.replaceWith(m)
            } else {
              var n = this.option(j);
              if (j.children) {
                var o = this.convertToOptions(j.children);
                b.appendMany(n, o)
              }
              h.push(n)
            }
          }
          return h
        }, d
      }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
        function d(b, c) {
          this.ajaxOptions = this._applyDefaults(c.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), a.__super__.constructor.call(this, b, c)
        }
        return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
          var b = {
            data: function (a) {
              return {
                q: a.term
              }
            },
            transport: function (a, b, d) {
              var e = c.ajax(a);
              return e.then(b), e.fail(d), e
            }
          };
          return c.extend({}, b, a, !0)
        }, d.prototype.processResults = function (a) {
          return a
        }, d.prototype.query = function (a, b) {
          function d() {
            var d = f.transport(f, function (d) {
              var f = e.processResults(d, a);
              e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
            }, function () {});
            e._request = d
          }
          var e = this;
          null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
          var f = c.extend({
            type: "GET"
          }, this.ajaxOptions);
          "function" == typeof f.url && (f.url = f.url(a)), "function" == typeof f.data && (f.data = f.data(a)), this.ajaxOptions.delay && "" !== a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
        }, d
      }), b.define("select2/data/tags", ["jquery"], function (a) {
        function b(b, c, d) {
          var e = d.get("tags"),
            f = d.get("createTag");
          if (void 0 !== f && (this.createTag = f), b.call(this, c, d), a.isArray(e))
            for (var g = 0; g < e.length; g++) {
              var h = e[g],
                i = this._normalizeItem(h),
                j = this.option(i);
              this.$element.append(j)
            }
        }
        return b.prototype.query = function (a, b, c) {
          function d(a, f) {
            for (var g = a.results, h = 0; h < g.length; h++) {
              var i = g[h],
                j = null != i.children && !d({
                  results: i.children
                }, !0),
                k = i.text === b.term;
              if (k || j) return f ? !1 : (a.data = g, void c(a))
            }
            if (f) return !0;
            var l = e.createTag(b);
            if (null != l) {
              var m = e.option(l);
              m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l)
            }
            a.results = g, c(a)
          }
          var e = this;
          return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
        }, b.prototype.createTag = function (b, c) {
          var d = a.trim(c.term);
          return "" === d ? null : {
            id: d,
            text: d
          }
        }, b.prototype.insertTag = function (a, b, c) {
          b.unshift(c)
        }, b.prototype._removeOldTags = function () {
          var b = (this._lastTag, this.$element.find("option[data-select2-tag]"));
          b.each(function () {
            this.selected || a(this).remove()
          })
        }, b
      }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
        function b(a, b, c) {
          var d = c.get("tokenizer");
          void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
        }
        return b.prototype.bind = function (a, b, c) {
          a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
        }, b.prototype.query = function (a, b, c) {
          function d(a) {
            e.select(a)
          }
          var e = this;
          b.term = b.term || "";
          var f = this.tokenizer(b, this.options, d);
          f.term !== b.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), b.term = f.term), a.call(this, b, c)
        }, b.prototype.tokenizer = function (b, c, d, e) {
          for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
              return {
                id: a.term,
                text: a.term
              }
            }; h < g.length;) {
            var j = g[h];
            if (-1 !== a.inArray(j, f)) {
              var k = g.substr(0, h),
                l = a.extend({}, c, {
                  term: k
                }),
                m = i(l);
              e(m), g = g.substr(h + 1) || "", h = 0
            } else h++
          }
          return {
            term: g
          }
        }, b
      }), b.define("select2/data/minimumInputLength", [], function () {
        function a(a, b, c) {
          this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
        }
        return a.prototype.query = function (a, b, c) {
          return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
            message: "inputTooShort",
            args: {
              minimum: this.minimumInputLength,
              input: b.term,
              params: b
            }
          }) : void a.call(this, b, c)
        }, a
      }), b.define("select2/data/maximumInputLength", [], function () {
        function a(a, b, c) {
          this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
        }
        return a.prototype.query = function (a, b, c) {
          return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
            message: "inputTooLong",
            args: {
              maximum: this.maximumInputLength,
              input: b.term,
              params: b
            }
          }) : void a.call(this, b, c)
        }, a
      }), b.define("select2/data/maximumSelectionLength", [], function () {
        function a(a, b, c) {
          this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
        }
        return a.prototype.query = function (a, b, c) {
          var d = this;
          this.current(function (e) {
            var f = null != e ? e.length : 0;
            return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
              message: "maximumSelected",
              args: {
                maximum: d.maximumSelectionLength
              }
            }) : void a.call(d, b, c)
          })
        }, a
      }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
        function c(a, b) {
          this.$element = a, this.options = b, c.__super__.constructor.call(this)
        }
        return b.Extend(c, b.Observable), c.prototype.render = function () {
          var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
          return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
        }, c.prototype.position = function () {}, c.prototype.destroy = function () {
          this.$dropdown.remove()
        }, c
      }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a) {
        function b() {}
        return b.prototype.render = function (b) {
          var c = b.call(this),
            d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
          return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
        }, b.prototype.bind = function (b, c, d) {
          var e = this;
          b.call(this, c, d), this.$search.on("keydown", function (a) {
            e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
          }), this.$search.on("input", function () {
            a(this).off("keyup")
          }), this.$search.on("keyup input", function (a) {
            e.handleSearch(a)
          }), c.on("open", function () {
            e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
              e.$search.focus()
            }, 0)
          }), c.on("close", function () {
            e.$search.attr("tabindex", -1), e.$search.val("")
          }), c.on("results:all", function (a) {
            if (null == a.query.term || "" === a.query.term) {
              var b = e.showSearch(a);
              b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
            }
          })
        }, b.prototype.handleSearch = function () {
          if (!this._keyUpPrevented) {
            var a = this.$search.val();
            this.trigger("query", {
              term: a
            })
          }
          this._keyUpPrevented = !1
        }, b.prototype.showSearch = function () {
          return !0
        }, b
      }), b.define("select2/dropdown/hidePlaceholder", [], function () {
        function a(a, b, c, d) {
          this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
        }
        return a.prototype.append = function (a, b) {
          b.results = this.removePlaceholder(b.results), a.call(this, b)
        }, a.prototype.normalizePlaceholder = function (a, b) {
          return "string" == typeof b && (b = {
            id: "",
            text: b
          }), b
        }, a.prototype.removePlaceholder = function (a, b) {
          for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
            var e = b[d];
            this.placeholder.id === e.id && c.splice(d, 1)
          }
          return c
        }, a
      }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
        function b(a, b, c, d) {
          this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
        }
        return b.prototype.append = function (a, b) {
          this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
        }, b.prototype.bind = function (b, c, d) {
          var e = this;
          b.call(this, c, d), c.on("query", function (a) {
            e.lastParams = a, e.loading = !0
          }), c.on("query:append", function (a) {
            e.lastParams = a, e.loading = !0
          }), this.$results.on("scroll", function () {
            var b = a.contains(document.documentElement, e.$loadingMore[0]);
            if (!e.loading && b) {
              var c = e.$results.offset().top + e.$results.outerHeight(!1),
                d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
              c + 50 >= d && e.loadMore()
            }
          })
        }, b.prototype.loadMore = function () {
          this.loading = !0;
          var b = a.extend({}, {
            page: 1
          }, this.lastParams);
          b.page++, this.trigger("query:append", b)
        }, b.prototype.showLoadingMore = function (a, b) {
          return b.pagination && b.pagination.more
        }, b.prototype.createLoadingMore = function () {
          var b = a('<li class="option load-more" role="treeitem"></li>'),
            c = this.options.get("translations").get("loadingMore");
          return b.html(c(this.lastParams)), b
        }, b
      }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
        function c(a, b, c) {
          this.$dropdownParent = c.get("dropdownParent") || document.body, a.call(this, b, c)
        }
        return c.prototype.bind = function (a, b, c) {
          var d = this,
            e = !1;
          a.call(this, b, c), b.on("open", function () {
            d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
              d._positionDropdown(), d._resizeDropdown()
            }), b.on("results:append", function () {
              d._positionDropdown(), d._resizeDropdown()
            }))
          }), b.on("close", function () {
            d._hideDropdown(), d._detachPositioningHandler(b)
          }), this.$dropdownContainer.on("mousedown", function (a) {
            a.stopPropagation()
          })
        }, c.prototype.position = function (a, b, c) {
          b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
            position: "absolute",
            top: -999999
          }), this.$container = c
        }, c.prototype.render = function (b) {
          var c = a("<span></span>"),
            d = b.call(this);
          return c.append(d), this.$dropdownContainer = c, c
        }, c.prototype._hideDropdown = function () {
          this.$dropdownContainer.detach()
        }, c.prototype._attachPositioningHandler = function (c) {
          var d = this,
            e = "scroll.select2." + c.id,
            f = "resize.select2." + c.id,
            g = "orientationchange.select2." + c.id,
            h = this.$container.parents().filter(b.hasScroll);
          h.each(function () {
            a(this).data("select2-scroll-position", {
              x: a(this).scrollLeft(),
              y: a(this).scrollTop()
            })
          }), h.on(e, function () {
            var b = a(this).data("select2-scroll-position");
            a(this).scrollTop(b.y)
          }), a(window).on(e + " " + f + " " + g, function () {
            d._positionDropdown(), d._resizeDropdown()
          })
        }, c.prototype._detachPositioningHandler = function (c) {
          var d = "scroll.select2." + c.id,
            e = "resize.select2." + c.id,
            f = "orientationchange.select2." + c.id,
            g = this.$container.parents().filter(b.hasScroll);
          g.off(d), a(window).off(d + " " + e + " " + f)
        }, c.prototype._positionDropdown = function () {
          var b = a(window),
            c = this.$dropdown.hasClass("select2-dropdown--above"),
            d = this.$dropdown.hasClass("select2-dropdown--below"),
            e = null,
            f = (this.$container.position(), this.$container.offset());
          f.bottom = f.top + this.$container.outerHeight(!1);
          var g = {
            height: this.$container.outerHeight(!1)
          };
          g.top = f.top, g.bottom = f.top + g.height;
          var h = {
              height: this.$dropdown.outerHeight(!1)
            },
            i = {
              top: b.scrollTop(),
              bottom: b.scrollTop() + b.height()
            },
            j = i.top < f.top - h.height,
            k = i.bottom > f.bottom + h.height,
            l = {
              left: f.left,
              top: g.bottom
            };
          c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
        }, c.prototype._resizeDropdown = function () {
          this.$dropdownContainer.width();
          var a = {
            width: this.$container.outerWidth(!1) + "px"
          };
          this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.width = "auto"), this.$dropdown.css(a)
        }, c.prototype._showDropdown = function () {
          this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
        }, c
      }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function a(b) {
          for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            e.children ? c += a(e.children) : c++
          }
          return c
        }
        function b(a, b, c, d) {
          this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
        }
        return b.prototype.showSearch = function (b, c) {
          return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c)
        }, b
      }), b.define("select2/dropdown/selectOnClose", [], function () {
        function a() {}
        return a.prototype.bind = function (a, b, c) {
          var d = this;
          a.call(this, b, c), b.on("close", function () {
            d._handleSelectOnClose()
          })
        }, a.prototype._handleSelectOnClose = function () {
          var a = this.getHighlightedResults();
          a.length < 1 || this.trigger("select", {
            data: a.data("data")
          })
        }, a
      }), b.define("select2/dropdown/closeOnSelect", [], function () {
        function a() {}
        return a.prototype.bind = function (a, b, c) {
          var d = this;
          a.call(this, b, c), b.on("select", function (a) {
            d._selectTriggered(a)
          }), b.on("unselect", function (a) {
            d._selectTriggered(a)
          })
        }, a.prototype._selectTriggered = function (a, b) {
          var c = b.originalEvent;
          c && c.ctrlKey || this.trigger("close")
        }, a
      }), b.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function () {
            return "The results could not be loaded."
          },
          inputTooLong: function (a) {
            var b = a.input.length - a.maximum,
              c = "Please delete " + b + " character";
            return 1 != b && (c += "s"), c
          },
          inputTooShort: function (a) {
            var b = a.minimum - a.input.length,
              c = "Please enter " + b + " or more characters";
            return c
          },
          loadingMore: function () {
            return "Loading more resultsвЂ¦"
          },
          maximumSelected: function (a) {
            var b = "You can only select " + a.maximum + " item";
            return 1 != a.maximum && (b += "s"), b
          },
          noResults: function () {
            return "No results found"
          },
          searching: function () {
            return "SearchingвЂ¦"
          }
        }
      }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
        function D() {
          this.reset()
        }
        D.prototype.apply = function (l) {
          if (l = a.extend({}, this.defaults, l), null == l.dataAdapter) {
            if (l.dataAdapter = null != l.ajax ? o : null != l.data ? n : m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
              var C = b(l.amdBase + "compat/query");
              l.dataAdapter = j.Decorate(l.dataAdapter, C)
            }
            if (null != l.initSelection) {
              var D = b(l.amdBase + "compat/initSelection");
              l.dataAdapter = j.Decorate(l.dataAdapter, D)
            }
          }
          if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
            if (l.multiple) l.dropdownAdapter = u;
            else {
              var E = j.Decorate(u, v);
              l.dropdownAdapter = E
            }
            if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
              var F = b(l.amdBase + "compat/dropdownCss");
              l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
            }
            l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
          }
          if (null == l.selectionAdapter) {
            if (l.selectionAdapter = l.multiple ? e : d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
              var G = b(l.amdBase + "compat/containerCss");
              l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
            }
            l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
          }
          if ("string" == typeof l.language)
            if (l.language.indexOf("-") > 0) {
              var H = l.language.split("-"),
                I = H[0];
              l.language = [l.language, I]
            } else l.language = [l.language];
          if (a.isArray(l.language)) {
            var J = new k;
            l.language.push("en");
            for (var K = l.language, L = 0; L < K.length; L++) {
              var M = K[L],
                N = {};
              try {
                N = k.loadPath(M)
              } catch (O) {
                try {
                  M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                } catch (P) {
                  l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                  continue
                }
              }
              J.extend(N)
            }
            l.translations = J
          } else {
            var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
              R = new k(l.language);
            R.extend(Q), l.translations = R
          }
          return l
        }, D.prototype.reset = function () {
          function b(a) {
            function b(a) {
              return l[a] || a
            }
            return a.replace(/[^\u0000-\u007E]/g, b)
          }
          function c(d, e) {
            if ("" === a.trim(d.term)) return e;
            if (e.children && e.children.length > 0) {
              for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                var h = e.children[g],
                  i = c(d, h);
                null == i && f.children.splice(g, 1)
              }
              return f.children.length > 0 ? f : c(d, f)
            }
            var j = b(e.text).toUpperCase(),
              k = b(d.term).toUpperCase();
            return j.indexOf(k) > -1 ? e : null
          }
          this.defaults = {
            amdBase: "./",
            amdLanguageBase: "./i18n/",
            closeOnSelect: !0,
            debug: !1,
            dropdownAutoWidth: !1,
            escapeMarkup: j.escapeMarkup,
            language: C,
            matcher: c,
            minimumInputLength: 0,
            maximumInputLength: 0,
            maximumSelectionLength: 0,
            minimumResultsForSearch: 0,
            selectOnClose: !1,
            sorter: function (a) {
              return a
            },
            templateResult: function (a) {
              return a.text
            },
            templateSelection: function (a) {
              return a.text
            },
            theme: "default",
            width: "resolve"
          }
        }, D.prototype.set = function (b, c) {
          var d = a.camelCase(b),
            e = {};
          e[d] = c;
          var f = j._convertData(e);
          a.extend(this.defaults, f)
        };
        var E = new D;
        return E
      }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
        function e(b, e) {
          if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
            var f = a(this.get("amdBase") + "compat/inputData");
            this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
          }
        }
        return e.prototype.fromElement = function (a) {
          var c = ["select2"];
          null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = a.prop("dir") ? a.prop("dir") : a.closest("[dir]").prop("dir") ? a.closest("[dir]").prop("dir") : "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
          var e = {};
          e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
          var f = b.extend(!0, {}, e);
          f = d._convertData(f);
          for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
          return this
        }, e.prototype.get = function (a) {
          return this.options[a]
        }, e.prototype.set = function (a, b) {
          this.options[a] = b
        }, e
      }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
        var e = function (a, c) {
          null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
          var d = a.attr("tabindex") || 0;
          a.data("old-tabindex", d), a.attr("tabindex", "-1");
          var f = this.options.get("dataAdapter");
          this.dataAdapter = new f(a, this.options);
          var g = this.render();
          this._placeContainer(g);
          var h = this.options.get("selectionAdapter");
          this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
          var i = this.options.get("dropdownAdapter");
          this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
          var j = this.options.get("resultsAdapter");
          this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
          var k = this;
          this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
            k.trigger("selection:update", {
              data: a
            })
          }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
        };
        return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
          var b = "";
          return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = "select2-" + b
        }, e.prototype._placeContainer = function (a) {
          a.insertAfter(this.$element);
          var b = this._resolveWidth(this.$element, this.options.get("width"));
          null != b && a.css("width", b)
        }, e.prototype._resolveWidth = function (a, b) {
          var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
          if ("resolve" == b) {
            var d = this._resolveWidth(a, "style");
            return null != d ? d : this._resolveWidth(a, "element")
          }
          if ("element" == b) {
            var e = a.outerWidth(!1);
            return 0 >= e ? "auto" : e + "px"
          }
          if ("style" == b) {
            var f = a.attr("style");
            if ("string" != typeof f) return null;
            for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
              var j = g[h].replace(/\s/g, ""),
                k = j.match(c);
              if (null !== k && k.length >= 1) return k[1]
            }
            return null
          }
          return b
        }, e.prototype._bindAdapters = function () {
          this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
        }, e.prototype._registerDomEvents = function () {
          var b = this;
          this.$element.on("change.select2", function () {
            b.dataAdapter.current(function (a) {
              b.trigger("selection:update", {
                data: a
              })
            })
          }), this._sync = c.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
          var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
          null != d ? (this._observer = new d(function (c) {
            a.each(c, b._sync)
          }), this._observer.observe(this.$element[0], {
            attributes: !0,
            subtree: !1
          })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", b._sync, !1)
        }, e.prototype._registerDataEvents = function () {
          var a = this;
          this.dataAdapter.on("*", function (b, c) {
            a.trigger(b, c)
          })
        }, e.prototype._registerSelectionEvents = function () {
          var b = this,
            c = ["toggle"];
          this.selection.on("toggle", function () {
            b.toggleDropdown()
          }), this.selection.on("*", function (d, e) {
            -1 === a.inArray(d, c) && b.trigger(d, e)
          })
        }, e.prototype._registerDropdownEvents = function () {
          var a = this;
          this.dropdown.on("*", function (b, c) {
            a.trigger(b, c)
          })
        }, e.prototype._registerResultsEvents = function () {
          var a = this;
          this.results.on("*", function (b, c) {
            a.trigger(b, c)
          })
        }, e.prototype._registerEvents = function () {
          var a = this;
          this.on("open", function () {
            a.$container.addClass("select2-container--open")
          }), this.on("close", function () {
            a.$container.removeClass("select2-container--open")
          }), this.on("enable", function () {
            a.$container.removeClass("select2-container--disabled")
          }), this.on("disable", function () {
            a.$container.addClass("select2-container--disabled")
          }), this.on("focus", function () {
            a.$container.addClass("select2-container--focus")
          }), this.on("blur", function () {
            a.$container.removeClass("select2-container--focus")
          }), this.on("query", function (b) {
            a.isOpen() || a.trigger("open"), this.dataAdapter.query(b, function (c) {
              a.trigger("results:all", {
                data: c,
                query: b
              })
            })
          }), this.on("query:append", function (b) {
            this.dataAdapter.query(b, function (c) {
              a.trigger("results:append", {
                data: c,
                query: b
              })
            })
          }), this.on("keypress", function (b) {
            var c = b.which;
            a.isOpen() ? c === d.ENTER ? (a.trigger("results:select"), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle"), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous"), b.preventDefault()) : c === d.DOWN ? (a.trigger("results:next"), b.preventDefault()) : (c === d.ESC || c === d.TAB) && (a.close(), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || (c === d.DOWN || c === d.UP) && b.altKey) && (a.open(), b.preventDefault())
          })
        }, e.prototype._syncAttributes = function () {
          this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable")) : this.trigger("enable")
        }, e.prototype.trigger = function (a, b) {
          var c = e.__super__.trigger,
            d = {
              open: "opening",
              close: "closing",
              select: "selecting",
              unselect: "unselecting"
            };
          if (a in d) {
            var f = d[a],
              g = {
                prevented: !1,
                name: a,
                args: b
              };
            if (c.call(this, f, g), g.prevented) return void(b.prevented = !0)
          }
          c.call(this, a, b)
        }, e.prototype.toggleDropdown = function () {
          this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
        }, e.prototype.open = function () {
          this.isOpen() || (this.trigger("query", {}), this.trigger("open"))
        }, e.prototype.close = function () {
          this.isOpen() && this.trigger("close")
        }, e.prototype.isOpen = function () {
          return this.$container.hasClass("select2-container--open")
        }, e.prototype.enable = function (a) {
          this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
          var b = !a[0];
          this.$element.prop("disabled", b)
        }, e.prototype.data = function () {
          this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
          var a = [];
          return this.dataAdapter.current(function (b) {
            a = b
          }), a
        }, e.prototype.val = function (b) {
          if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
          var c = b[0];
          a.isArray(c) && (c = a.map(c, function (a) {
            return a.toString()
          })), this.$element.val(c).trigger("change")
        }, e.prototype.destroy = function () {
          this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
        }, e.prototype.render = function () {
          var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
          return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
        }, e
      }), b.define("jquery.select2", ["jquery", "require", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
        if (b("jquery.mousewheel"), null == a.fn.select2) {
          var e = ["open", "close", "destroy"];
          a.fn.select2 = function (b) {
            if (b = b || {}, "object" == typeof b) return this.each(function () {
              {
                var d = a.extend({}, b, !0);
                new c(a(this), d)
              }
            }), this;
            if ("string" == typeof b) {
              var d = this.data("select2");
              null == d && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2.");
              var f = Array.prototype.slice.call(arguments, 1),
                g = d[b](f);
              return a.inArray(b, e) > -1 ? this : g
            }
            throw new Error("Invalid arguments for Select2: " + b)
          }
        }
        return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
      }), b.define("jquery.mousewheel", ["jquery"], function (a) {
        return a
      }), {
        define: b.define,
        require: b.require
      }
    }(),
    c = b.require("jquery.select2");
  return a.fn.select2.amd = b, c
});
/*           http://akyurek.ua/wp-includes/js/imagesloaded.min.js */
(function () {
  "use strict";
  function a() {}
  function b(a, b) {
    for (var c = a.length; c--;)
      if (a[c].listener === b) return c;
    return -1
  }
  function c(a) {
    return function () {
      return this[a].apply(this, arguments)
    }
  }
  var d = a.prototype,
    e = this,
    f = e.EventEmitter;
  d.getListeners = function (a) {
    var b, c, d = this._getEvents();
    if ("object" == typeof a) {
      b = {};
      for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
    } else b = d[a] || (d[a] = []);
    return b
  }, d.flattenListeners = function (a) {
    var b, c = [];
    for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
    return c
  }, d.getListenersAsObject = function (a) {
    var b, c = this.getListeners(a);
    return c instanceof Array && (b = {}, b[a] = c), b || c
  }, d.addListener = function (a, c) {
    var d, e = this.getListenersAsObject(a),
      f = "object" == typeof c;
    for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
      listener: c,
      once: !1
    });
    return this
  }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
    return this.addListener(a, {
      listener: b,
      once: !0
    })
  }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
    return this.getListeners(a), this
  }, d.defineEvents = function (a) {
    for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
    return this
  }, d.removeListener = function (a, c) {
    var d, e, f = this.getListenersAsObject(a);
    for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
    return this
  }, d.off = c("removeListener"), d.addListeners = function (a, b) {
    return this.manipulateListeners(!1, a, b)
  }, d.removeListeners = function (a, b) {
    return this.manipulateListeners(!0, a, b)
  }, d.manipulateListeners = function (a, b, c) {
    var d, e, f = a ? this.removeListener : this.addListener,
      g = a ? this.removeListeners : this.addListeners;
    if ("object" != typeof b || b instanceof RegExp)
      for (d = c.length; d--;) f.call(this, b, c[d]);
    else
      for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
    return this
  }, d.removeEvent = function (a) {
    var b, c = typeof a,
      d = this._getEvents();
    if ("string" === c) delete d[a];
    else if ("object" === c)
      for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
    else delete this._events;
    return this
  }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
    var c, d, e, f, g = this.getListenersAsObject(a);
    for (e in g)
      if (g.hasOwnProperty(e))
        for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
    return this
  }, d.trigger = c("emitEvent"), d.emit = function (a) {
    var b = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(a, b)
  }, d.setOnceReturnValue = function (a) {
    return this._onceReturnValue = a, this
  }, d._getOnceReturnValue = function () {
    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
  }, d._getEvents = function () {
    return this._events || (this._events = {})
  }, a.noConflict = function () {
    return e.EventEmitter = f, a
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
    return a
  }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}).call(this),
  function (a) {
    function b(b) {
      var c = a.event;
      return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
      d = function () {};
    c.addEventListener ? d = function (a, b, c) {
      a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function (a, c, d) {
      a[c + d] = d.handleEvent ? function () {
        var c = b(a);
        d.handleEvent.call(d, c)
      } : function () {
        var c = b(a);
        d.call(a, c)
      }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function () {};
    c.removeEventListener ? e = function (a, b, c) {
      a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function (a, b, c) {
      a.detachEvent("on" + b, a[b + c]);
      try {
        delete a[b + c]
      } catch (d) {
        a[b + c] = void 0
      }
    });
    var f = {
      bind: d,
      unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
  }(this),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (c, d) {
      return b(a, c, d)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
  }(window, function (a, b, c) {
    function d(a, b) {
      for (var c in b) a[c] = b[c];
      return a
    }
    function e(a) {
      return "[object Array]" == l.call(a)
    }
    function f(a) {
      var b = [];
      if (e(a)) b = a;
      else if ("number" == typeof a.length)
        for (var c = 0; c < a.length; c++) b.push(a[c]);
      else b.push(a);
      return b
    }
    function g(a, b, c) {
      if (!(this instanceof g)) return new g(a, b, c);
      "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
      var e = this;
      setTimeout(function () {
        e.check()
      })
    }
    function h(a) {
      this.img = a
    }
    function i(a, b) {
      this.url = a, this.element = b, this.img = new Image
    }
    var j = a.jQuery,
      k = a.console,
      l = Object.prototype.toString;
    g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function () {
      this.images = [];
      for (var a = 0; a < this.elements.length; a++) {
        var b = this.elements[a];
        this.addElementImages(b)
      }
    }, g.prototype.addElementImages = function (a) {
      "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
      var b = a.nodeType;
      if (b && m[b]) {
        for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
          var e = c[d];
          this.addImage(e)
        }
        if ("string" == typeof this.options.background) {
          var f = a.querySelectorAll(this.options.background);
          for (d = 0; d < f.length; d++) {
            var g = f[d];
            this.addElementBackgroundImages(g)
          }
        }
      }
    };
    var m = {
      1: !0,
      9: !0,
      11: !0
    };
    g.prototype.addElementBackgroundImages = function (a) {
      for (var b = n(a), c = /url\(['"]*([^'"\)]+)['"]*\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
        var e = d && d[1];
        e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
      }
    };
    var n = a.getComputedStyle || function (a) {
      return a.currentStyle
    };
    return g.prototype.addImage = function (a) {
      var b = new h(a);
      this.images.push(b)
    }, g.prototype.addBackground = function (a, b) {
      var c = new i(a, b);
      this.images.push(c)
    }, g.prototype.check = function () {
      function a(a, c, d) {
        setTimeout(function () {
          b.progress(a, c, d)
        })
      }
      var b = this;
      if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
      for (var c = 0; c < this.images.length; c++) {
        var d = this.images[c];
        d.once("progress", a), d.check()
      }
    }, g.prototype.progress = function (a, b, c) {
      this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emit("progress", this, a, b), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && k && k.log("progress: " + c, a, b)
    }, g.prototype.complete = function () {
      var a = this.hasAnyBroken ? "fail" : "done";
      if (this.isComplete = !0, this.emit(a, this), this.emit("always", this), this.jqDeferred) {
        var b = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[b](this)
      }
    }, h.prototype = new b, h.prototype.check = function () {
      var a = this.getIsImageComplete();
      return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, c.bind(this.proxyImage, "load", this), c.bind(this.proxyImage, "error", this), c.bind(this.img, "load", this), c.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
    }, h.prototype.getIsImageComplete = function () {
      return this.img.complete && void 0 !== this.img.naturalWidth
    }, h.prototype.confirm = function (a, b) {
      this.isLoaded = a, this.emit("progress", this, this.img, b)
    }, h.prototype.handleEvent = function (a) {
      var b = "on" + a.type;
      this[b] && this[b](a)
    }, h.prototype.onload = function () {
      this.confirm(!0, "onload"), this.unbindEvents()
    }, h.prototype.onerror = function () {
      this.confirm(!1, "onerror"), this.unbindEvents()
    }, h.prototype.unbindEvents = function () {
      c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this), c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
    }, i.prototype = new h, i.prototype.check = function () {
      c.bind(this.img, "load", this), c.bind(this.img, "error", this), this.img.src = this.url;
      var a = this.getIsImageComplete();
      a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, i.prototype.unbindEvents = function () {
      c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
    }, i.prototype.confirm = function (a, b) {
      this.isLoaded = a, this.emit("progress", this, this.element, b)
    }, g.makeJQueryPlugin = function (b) {
      b = b || a.jQuery, b && (j = b, j.fn.imagesLoaded = function (a, b) {
        var c = new g(this, a, b);
        return c.jqDeferred.promise(j(this))
      })
    }, g.makeJQueryPlugin(), g
  });
/*            http://akyurek.ua/wp-content/themes/bestbuild/assets/js/custom.js */
/*            http://akyurek.ua/wp-includes/js/wp-embed.min.js */
! function (a, b) {
  "use strict";
  function c() {
    if (!e) {
      e = !0;
      var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
        h = !!navigator.userAgent.match(/Trident.*rv:11\./),
        i = b.querySelectorAll("iframe.wp-embedded-content");
      for (c = 0; c < i.length; c++) {
        if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
        if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
      }
    }
  }
  var d = !1,
    e = !1;
  if (b.querySelector)
    if (a.addEventListener) d = !0;
  if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
    if (a.wp.receiveEmbedMessage = function (c) {
        var d = c.data;
        if (d.secret || d.message || d.value)
          if (!/[^a-zA-Z0-9]/.test(d.secret)) {
            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
              k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
            for (e = 0; e < k.length; e++) k[e].style.display = "none";
            for (e = 0; e < j.length; e++)
              if (f = j[e], c.source === f.contentWindow) {
                if (f.removeAttribute("style"), "height" === d.message) {
                  if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                  else if (~~g < 200) g = 200;
                  f.height = g
                }
                if ("link" === d.message)
                  if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                    if (b.activeElement === f) a.top.location.href = d.value
              } else;
          }
      }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
/* START LAMA */
function stm_animate_block() {
  jQuery(".stm_animation").each(function () {
    if (jQuery(this).attr("data-animate")) {
      var e = jQuery(this).children("*"),
        r = jQuery(this).attr("data-animate"),
        t = jQuery(this).attr("data-animation-duration") + "s",
        i = jQuery(this).attr("data-animation-delay"),
        o = "opacity:1;-webkit-animation-delay:" + i + "s;-webkit-animation-duration:" + t + "; -moz-animation-delay:" + i + "s;-moz-animation-duration:" + t + "; animation-delay:" + i + "s;",
        a = "opacity:1;-webkit-transition-delay: " + i + "s; -moz-transition-delay: " + i + "s; transition-delay: " + i + "s;";
      isAppear(jQuery(this)) && (jQuery(this).attr("style", a), jQuery.each(e, function (e, t) {
        jQuery(this).attr("style", o), jQuery(this).addClass("animated").addClass(r)
      }))
    }
  })
}
function isAppear(e) {
  var r = jQuery(window).scrollTop(),
    t = jQuery(window).height();
  if (jQuery(e).hasClass("stm_viewport")) var i = jQuery(e).data("viewport_position");
  if (void 0 === i || "" == i) o = 2;
  else var o = 100 - i;
  return jQuery(e).offset().top - r <= t - t * (o / 100)
}
function getWorks(e, r, t) {
  jQuery("blockquote h2").after('<img id="loadd" src="/wp-content/uploads/2017/04/preloader_10.gif">'), idea = jQuery(this).find("button").attr("id"), menu = jQuery(".projects_tabs_header").html(), jQuery.ajax({
    url: e,
    success: function (e) {
      e = jQuery(e).find(r), jQuery(t).replaceWith(e), jQuery(".tabs a").removeAttr("href"), jQuery("#" + idea).addClass("active")
    }
  }), jQuery("blockquote").on("click", "div img", function () {})
}
function spinner() {
  jQuery("#melnica").addClass("zaaddal"), jQuery("#coga").addClass("rotating")
}
function msieversion() {
  return (window.navigator.userAgent.indexOf("Edge") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && jQuery("html").addClass("badbrowser"), !0
}
function vidsuccess() {
  console.log("Video imported successfully")
}
jQuery(document).ready(function (e) {
  "use strict";
  jQuery(window).load(function () {
    var e, r, t, i = jQuery(".top_nav .top_nav_wrapper > ul, .top_nav .main_menu_nav > ul"),
      o = jQuery("body.header_style_transparent .top_nav .top_nav_wrapper > ul, body.header_style_transparent .top_nav .main_menu_nav > ul, body.header_style_dark .top_nav .top_nav_wrapper > ul, body.header_style_dark .top_nav .main_menu_nav > ul, body.header_style_white .top_nav .top_nav_wrapper > ul, body.header_style_white .top_nav .main_menu_nav > ul");
    if (i.length > 0 && 0 == o.length) {
      i.append("<li id='magic-line'></li>");
      var a = jQuery("#magic-line"),
        s = 0,
        n = 0;
      (i.find(".current_page_item").length || i.find(".current-menu-parent").length) && (s = jQuery(".current_page_item, .current-menu-parent").width(), n = jQuery(".current_page_item, .current-menu-parent").position().left), a.width(s).css("left", n).data("origLeft", a.position().left).data("origWidth", a.width()), i.find(" > li").hover(function () {
        e = jQuery(this), r = e.position().left, t = e.width(), a.stop().animate({
          left: r,
          width: t
        }, 200)
      }, function () {
        a.stop().animate({
          left: a.data("origLeft"),
          width: a.data("origWidth")
        }, 200)
      })
    }
  }), e.fn.is_on_screen = function () {
    var e = jQuery(window),
      r = {
        top: e.scrollTop(),
        left: e.scrollLeft()
      };
    r.right = r.left + e.width(), r.bottom = r.top + e.height();
    var t = this.offset();
    return t.right = t.left + this.outerWidth(), t.bottom = t.top + this.outerHeight(), !(r.right < t.left || r.left > t.right || r.bottom < t.top || r.top > t.bottom)
  }, jQuery("body .wpb_video_widget .wpb_wrapper .wpb_video_wrapper .play_video").live("click", function () {
    return jQuery(this).parent().find("iframe").attr("src", jQuery(this).parent().find("iframe").attr("src") + "?autoplay=1").delay(), jQuery(this).hide(), jQuery(this).parent().find("img").hide(), jQuery(this).parent().find(".video").show(), !1
  }), jQuery(".staff_read_more").live("click", function () {
    return jQuery(this).closest(".stm_staff_2").find(".full_description").slideToggle(150), !1
  }), jQuery("select").select2({
    width: "100%"
  }), jQuery("#menu_toggle").live("click", function () {
    return jQuery(this).toggleClass("open"), jQuery(".mobile_header .top_nav_mobile").slideToggle(300), !1
  }), jQuery(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children > a").after('<span class="arrow"><i class="fa fa-chevron-down"></i></span>'), jQuery(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children > .sub-menu > .menu-item-has-children > a").after('<span class="arrow"><i class="fa fa-chevron-down"></i></span>'), jQuery(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children .arrow").live("click", function () {
    jQuery(this).toggleClass("active"), jQuery(this).closest("li").find("> ul").slideToggle(300)
  }), jQuery(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children > a").live("click", function () {
    "#" == jQuery(this).attr("href") && (jQuery(this).closest("li").find("ul").slideToggle(300), jQuery(this).closest("li").find(".arrow").toggleClass("active"))
  }), jQuery(".quantity_actions span").on("click", function () {
    var e = jQuery(this).closest(".quantity").find(".qty"),
      r = e.attr("value");
    jQuery(this).hasClass("plus") ? e.attr("value", parseInt(r) + 1) : jQuery(this).hasClass("minus") && r > 1 && e.attr("value", parseInt(r) - 1)
  }), jQuery("#header div.top_nav").affix({
    offset: {
      top: jQuery("#header").innerHeight() - jQuery("#header div.top_nav").innerHeight()
    }
  }), jQuery(window).on("load", function () {
    jQuery("#wrapper").css({
      "padding-bottom": jQuery("#footer").height()
    }), jQuery("#header").css({
      "min-height": jQuery("#header").innerHeight()
    })
  }), jQuery(".top_bar_info_switcher a").live("click", function () {
    var e = jQuery(this).attr("href"),
      r = jQuery(this).text();
    return jQuery(".top_bar_info").hide(), jQuery(e).show(), jQuery(".top_bar_info_switcher .active").text(r), !1
  }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? jQuery(".stm_animation").css("opacity", 1) : stm_animate_block(), jQuery(window).scroll(function () {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? jQuery(".stm_animation").css("opacity", 1) : stm_animate_block()
  }), jQuery(".single-product .product-type-variable table.variations select").live("change", function () {
    jQuery(this).parent().find(".select2-selection__rendered").text(jQuery(this).find('option[value="' + jQuery(this).val() + '"]').text())
  })
}), jQuery(document).ready(function () {
  jQuery(".pdf-holder").load(function () {
    jQuery(this).detach()
  }), jQuery("button.liveedit").click(function () {
    var e = jQuery("a.post-edit-link").attr("href");
    jQuery("iframe#liveredactor").attr("src", e), jQuery(".live-editor").toggleClass("one4"), jQuery(".lew, .lew2, .lew3").toggle()
  }), jQuery("button.lew").click(function () {
    jQuery(".live-editor").removeClass("one4"), jQuery(".live-editor").removeClass("full4"), jQuery(".live-editor").toggleClass("two4")
  }), jQuery("button.lew2").click(function () {
    jQuery(".live-editor").removeClass("one4"), jQuery(".live-editor").removeClass("two4"), jQuery(".live-editor").toggleClass("full4")
  }), jQuery("#melnica").addClass("zaaddal"), jQuery("#coga").addClass("rotating"), jQuery(".term-100 div.row  :first").before("")
}), jQuery("#ridekill").click(function () {
  jQuery("#wpadminbar").fadeToggle(), jQuery("#adminker").fadeToggle(), jQuery("#ridekill").css({
    left: 2672,
    background: "#065651"
  })
}), jQuery(document).keyup(function (e) {
  27 === e.keyCode && jQuery("#adminker, #wpadminbar, .rel.mel").fadeToggle("slow")
}), jQuery(document).ready(function () {
  jQuery("aside#text-4").height(jQuery("div#toggleArea").height() + 100), jQuery("#coga").addClass("rotating"), jQuery(".term-100 div.row  :first").before(""), shoprod = jQuery("#state").attr("ssil"), setTimeout(function () {
    jQuery("#platform").addClass("ran")
  }, 1100), jQuery("#platform").addClass("ran1"), setTimeout(function () {}, 2e3), jQuery(".greeting").animate({
    opacity: "1"
  }, 1500), jQuery(".imagra").addClass("runa").animate({
    right: 10,
    opacity: "0.04",
    top: -170
  }, 1500), setTimeout(function () {
    jQuery("ul.nester.yach").addClass("rdy")
  }, 1400), jQuery(".other .other .other").addClass("stylerr3"), getWorks("http://akyurek.ua/slajder-all", "blockquote", "blockquote"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").animate({
    opacity: 1
  }, 500), spinner()
}), jQuery(".vi1").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/uKd-l_60-9U" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi2").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/KoqpwPCt2_Q" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi3").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/HpASbm3wubA" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi4").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/Y2oAz9wS_bo" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi5").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/xvZjJiq2mlo" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi6").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/qsd248LA1r8" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi7").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/_ze5mfIwbY0" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi8").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/J_k5ubKmbgs" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi9").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/rv5GawnJQhg" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi10").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/J_k5ubKmbgs" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi11").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/3nqbaBfFMOg" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi12").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/a9HfdUCOpJ4" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi13").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/jo5jHnwHVPs" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi14").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/YrSC0EuK-fU" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi15").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/rWdd-WhAvrI" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi16").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/uhyB-oxM5Jg" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi17").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/rWdd-WhAvrI" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi18").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/odI4sj4uyrU" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi19").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/q4mCMUOPuBs" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery(".vi20").on("click", "img", function () {
  jQuery(this).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/ENNvf9fAFyI" frameborder="0" allowfullscreen></iframe>'), vidsuccess()
}), jQuery("#russia-user").length && (setTimeout(function () {
  jQuery("a#ui-id-3").click(), jQuery(".top_nav_wrapper.clearfix .icon_text.clearfix .text strong").text("+7 928 129 91 07"), jQuery(".top_nav_wrapper.clearfix .icon_text.clearfix .text strong font font").text("+7 928 129 91 07"), jQuery(".header_top.clearfix .container .icon_text.clearfix").first().find(".text strong").text("СѓР». РќР°РЅСЃРµРЅР° 146"), jQuery(".header_top.clearfix .container .icon_text.clearfix").first().find(".text span").text("Р РѕСЃС‚РѕРІ-РЅР°-РґРѕРЅСѓ"), jQuery(".testimonial-text .company").text('РІ "Р—РµСЂРЅ Р›РўР”",  РјРµРЅРµРґР¶РµСЂ РїРѕ Р·Р°РєСѓРїРєР°Рј ')
}, 0), setTimeout(function () {
  jQuery("a#ui-id-3").click()
}, 1e3));
/*            end lama start so */
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
if (isMobile.any()) {};
if (isMobile.iOS()) {};
function fastAxe(url, find, before) {
  jQuery.ajax({
    url: url,
    success: function (data) {
      data = jQuery(data).find(find);
      jQuery(before).html(data);
    }
  });
};
function imageOverlay() {
  jQuery(this).find('img').before('<div class="overlay"></div>');
};
function cardstossil() {
  jQuery('.product_thumbnail a').each(function () {
    var prodlink = jQuery(this).attr('href');
    jQuery(this).removeAttr("href");
    jQuery(this).attr('ssil', prodlink);
  });
};
var loading = {
  show: function () {
    jQuery('.midok').css('z-index', '10');
  },
  hide: function () {
    jQuery('.midok').css('z-index', '-1');
  }
};
function LiveFrame() {
  var liveEditorLink = jQuery('a.post-edit-link').attr('href');
  jQuery('iframe#liveredactor').attr('src', liveEditorLink);
};
function catax(sprodurl) {
  jQuery('.multiview').css('display', 'none');
  loading.show();
  (function () {
    window.location.hash = jQuery(this).attr('gid');
  })
  if (isMobile.any()) {
    var scrollTop = jQuery('.col-sm-12').offset().top;
    if (scrollTop != 'undefined') {
      jQuery('html,body').animate({
        scrollTop: scrollTop - 20
      }, 380);
    } else {}
  } else {
    var scrollTop = jQuery('li#menu-item-6271').offset().top;
    if (scrollTop != 'undefined') {
      jQuery('html,body').animate({
        scrollTop: scrollTop + 20
      }, 380);
    } else {
      jQuery('.entry-header.clearfix').after('<div id="scrolltome"></div>');
      var scrollTop = jQuery('#scrolltome').offset().top;
      jQuery('html,body').animate({
        scrollTop: scrollTop + 20
      }, 380);
    }
  }
  setTimeout(function () {
    jQuery('ul.products').first().addClass('loaddin').before('<img id="loadd" src="http://akyurek.ua/wp-content/uploads/2017/04/preloader_10.gif">');
    jQuery.ajax({
      url: sprodurl,
      success: function (data) {
        window.location.hash = sprodurl.substring(30);
        data = jQuery(data).find('.col_in.__padd-left.__three-cols');
        jQuery('.row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12').html(data).animate({
          opacity: 1,
        }, 500);
        aniPro();
        setTimeout(function () {
          cardstossil()
        }, 400)
      }
    }).done(function () {
      aniPro();
      jQuery('.product_thumbnail a img').unwrap();
    });
    jQuery.ajax({
      url: sprodurl,
      success: function (data) {
        data = jQuery(data).find('.entry-header.clearfix');
        jQuery('.entry-header.clearfix').detach();
        jQuery('#platform').before(data);
        setTimeout(function () {
          jQuery('div.breadcrumbs a').each(function () {
            var prodlink = jQuery(this).attr('href');
            jQuery(this).removeAttr("href");
            jQuery(this).attr('ssil', prodlink);
          });
          spinner();
          aniPro()
        }, 400);
      }
    }).done(function () {
      goSwap();
      iteRation(jQuery('ul.products li'), 1000, 100, ' visible');
    });
    setTimeout(function () {
      jQuery('.product_images img').addClass('unfixed');
      goSwap();
      loading.hide();
      LiveFrame();
      iteRation(jQuery('ul.products li'), 1000, 100, ' visible');
      jQuery('.pdf-holder').wrap('<div class="pdf-wrapper"></div>');
      jQuery('.pdf-wrapper').prepend('<p class="doc-n">Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ</p>');
    }, 1200)
  }, 400);
}
jQuery('aside td a').click(function () {
  loading.show();
  var sprodurl = jQuery(this).attr('ssil');
  jQuery.ajax({
    url: sprodurl,
    success: function (data) {
      data = jQuery(data).find('.col_in.__padd-left.__three-cols');
      jQuery('.row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12').animate({
        opacity: 0,
      }, 0);
      jQuery('.row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12').html(data).animate({
        opacity: 1,
      }, 500)
    }
  });
  jQuery.ajax({
    url: sprodurl,
    success: function (data) {
      data = jQuery(data).find('.entry-header.clearfix.small');
      jQuery('.entry-header.clearfix.small').detach();
      jQuery('#platform').before(data);
      setTimeout(function () {
        jQuery('div.breadcrumbs a').each(function () {
          var prodlink = jQuery(this).attr('href');
          jQuery(this).removeAttr("href");
          jQuery(this).attr('ssil', prodlink);
        });
        spinner();
      }, 400);
    }
  });
  jQuery(this).removeClass('loaddin');
  jQuery('#loadd').detach();
  loading.hide();
});
jQuery(document).ready(function () {
  if (jQuery(document).find('.pdf')) {
    jQuery('.pdf').append('<i class="fa document fa-file-text"></i>');
  }
  jQuery('.newlang').on('click', '.select2-results ul li', (function () {
    alert('text')
  }))
  jQuery('ul.products li').each(function () {
    var cataxVal = jQuery(this).attr('onclick');
  });
  loading.hide();
  msieversion();
  jQuery('div#vn .fullscreen-bg video source').attr('src', '');
  setTimeout(function () {
    jQuery('div#vn .fullscreen-bg video source').attr('src', '');
  }, 1200);
});
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};




//
//
// setTimeout(function(){
//   var elfs = Array.prototype.slice.call(document.getElementsByClassName('effect-ming'));
//   var lenArr = elfs.length;
//   var i = 0;
//   for (; i < lenArr; i++) ! function (i) {
//       elfs[i].style.transitionDelay = ''+ (1.3 + (.2 * i)) +'s'
//   }(i);
//   setTimeout(function(){
//     jQuery('.effect-ming').addClass('visible');
//   }, 200);
// }, 200);




function custom() {
  var headerSocials = jQuery('.header_socials a');
  var headerIcons = ['i.fa.fa-clock-o', ' i.fa.fa-map-marker', 'i.fa.fa-phone'];
  jQuery('footer ul#menu-tovary li').addClass('iv');
  jQuery('footer ul#menu-stranitsy li').addClass('iv');
  jQuery('footer aside#contacts-4 ul li').addClass('iv');
  jQuery('footer .widget_title h4').addClass('iv');
  jQuery('footer aside#text-2 .textwidget').addClass('iv');
  function iteRation(e, t, a, r) {
    for (var i = 0; i < e.length; i++) ! function (i) {
      setTimeout(function () {
        e[i].className += r
      }, t + a * i)
    }(i)
  }
  jQuery('.s_m ul li ul li').click(function () {
    jQuery(this).css('background', 'red')
  })
  if (jQuery('body').hasClass('single') == 1) {
    jQuery(document).ready(function () {
      iteRation(jQuery("ul#lightgallery li a"), 13, 100, " visible");
    })
  }



  function iteRationArr(e, t, a, r) {
    var index;
        var num = e.length;
    for (index = 0; index < num; ++index) ! function (index) {
      setTimeout(function () {
        e[index].className += r;
        jQuery(e[index]).addClass('visible')
      }, t + a * index)
    }(index)
  }

  function twoWay(a, b) {
    if (jQuery(document).find(a).isInViewport()) {
      if (jQuery(document).find(b).hasClass('visible') != true) {
        iteRationArr(jQuery(b), 13, 100, " visible");
      }
    } else {
      jQuery(document).find(b).removeClass('visible');
    };
  }


  function ViewportAnimation(a, b) {
    if (jQuery(document).find(a).isInViewport()) {
      if (jQuery(document).find(b).hasClass('visible') != true) {
        iteRationDelay(jQuery(b), 13, 100, " visible");
      }
    } else {
      jQuery(document).find(b).removeClass('visible');
    };
  }





  // function TitlePender(e) {
  //   titlo = e.find("h1").text(), jQuery("title").text(titlo)
  // }


  function spinner() {
    jQuery("#melnica").addClass("zaaddal"), jQuery("#coga").addClass("rotating")
  }

  function gather() {
    1 == jQuery("#box").hasClass("gathering") || (jQuery("#box").addClass("gathering"), 1 == jQuery("#box").hasClass("carn") || (jQuery("#box").addClass("carn"), setTimeout(function () {
      jQuery("#box").removeClass("carn"), jQuery("#box").removeClass("gathering"), jQuery(".giwrap").detach(), jQuery("#loadd").detach()
    }, 8700)))
  }
  function happyImages() {
    jQuery(".product_images").on("click", ".unfixed", function () {
      var e = jQuery(this);
      e.wrap('<div class="capsule"></div>');
      var t = jQuery(this).height();
      e.parent().height(t), e.removeClass("unfixed").addClass("inprocess"), e.animate({
        width: "0",
        opacity: "0.02",
        left: "50%"
      }, 200);
      jQuery("html").append('<div class="sli-contain"><div class="sli-inner"><div class="sli-body"></div><div class="l-closer closers"></div><div class="r-closer closers"><div class="close c-button"><i class="fa fa-close"></i></div></div></div></div>'), jQuery(".sli-contain").animate({
        opacity: "1"
      }, 600), setTimeout(function () {
        jQuery(".sli-body").append(e), e.animate({
          width: "80vmin",
          opacity: "1",
          top: "10vmin"
        }, 200), e.addClass("centrizer")
      }, 600), jQuery(".close.c-button").animate({
        right: "50"
      }, 600), jQuery(".sli-contain").on("click", ".closers", function () {
        jQuery(".close.c-button").animate({
          right: "-50"
        }, 100), jQuery(".inprocess").animate({
          opacity: "0",
          left: "-3000"
        }, 200), setTimeout(function () {
          jQuery(".sli-contain").css("display", "none").detach()
        }, 1300), setTimeout(function () {
          jQuery(".sli-contain").animate({
            opacity: "0"
          }, 200)
        }, 200), jQuery(".capsule").append(e), jQuery(".inprocess").animate({
          width: "100%"
        }, 200), jQuery(".inprocess").animate({
          opacity: "1"
        }, 200), jQuery(".inprocess").animate({
          top: "0",
          left: "0"
        }, 100), jQuery(".inprocess").removeClass("centrizer"), jQuery(".inprocess").addClass("unfixed").unwrap().removeClass("inprocess")
      })
    })
  }
  function msieversion() {
    return (window.navigator.userAgent.indexOf("Edge") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && jQuery("html").addClass("badbrowser"), !0
  }
  function prepareYourLinks() {
    jQuery(".product_thumbnail a").each(function () {
      var e = jQuery(this).attr("href");
      jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
    }), setTimeout(function () {
      jQuery(".product_thumbnail a").removeAttr("href"), jQuery("a.woocommerce-LoopProduct-link").detach()
    }, 300)
  }
  function scrolltome() {
    if (1 == jQuery("body").hasClass("fastshop"))
      if (isMobile.any()) {
        alert("workinONE");
        e = jQuery(".golo0").offset().top;
        setTimeout(function () {
          var t = e;
          jQuery("html,body").animate({
            scrollTop: t + 1
          }, 200)
        }, 20)
      } else {
        e = jQuery("div#scrolltome").offset().top;
        setTimeout(function () {
          var t = e;
          jQuery("html,body").animate({
            scrollTop: t + 1
          }, 200)
        }, 20)
      }
    else if (isMobile.any()) {
      e = jQuery(".col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").offset().top;
      setTimeout(function () {
        var t = e;
        jQuery("html,body").animate({
          scrollTop: t
        }, 200)
      }, 20)
    } else {
      var e = jQuery("div#main").offset().top;
      setTimeout(function () {
        var t = e;
        jQuery("html,body").animate({
          scrollTop: t + 1
        }, 200)
      }, 20)
    }
  }
  function anidada() {
    jQuery(".dada").animate({
      left: 0,
      opacity: "1",
      top: 0
    }, 1500)
  }
  function dataload() {
    jQuery("#dataload").css("opacity", "1")
  }
  function dataloadend() {
    jQuery("#dataload").animate({
      opacity: 0
    }, 100)
  }
  function ulProdGo() {
    jQuery("ul.products").addClass("go")
  }
  function allAx(e, t, a, r) {
    jQuery.ajax({
      async: r,
      url: e,
      success: function (e) {
        e = jQuery(e).find(t), jQuery(a).html(e)
      }
    })
  }
  function fastSingCont(e, t) {
    jQuery.ajax({
      async: !0,
      url: e,
      success: function (e) {
        e = jQuery(e).find(".summary.entry-summary"), t.prepend(e)
      }
    })
  }
  function loadProducts(e) {
    1 == e && jQuery(".col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").empty(), fastMax("http://akyurek.ua/shop/"), fastMax("http://akyurek.ua/shop/page/2/"), fastMax("http://akyurek.ua/shop/page/3/"), fastMax("http://akyurek.ua/shop/page/4/"), fastMax("http://akyurek.ua/shop/page/5/"), fastMax("http://akyurek.ua/shop/page/6/"), fastMax("http://akyurek.ua/shop/page/7/"), fastMax("http://akyurek.ua/shop/page/8/"), fastMax("http://akyurek.ua/shop/page/9/"), fastMax("http://akyurek.ua/shop/page/10/"), fastMax("http://akyurek.ua/shop/page/11/"), fastMax("http://akyurek.ua/shop/page/12/"), fastMax("http://akyurek.ua/shop/page/13/")
  }
  function goSwap() {
    a = jQuery("div.images img").first().attr("src"), jQuery("#lightgallery li a").first().attr("href", a).find("img").attr("src", a), jQuery(".thumbnails.columns-3 img").each(function () {
      c = jQuery(this).attr("src").replace(new RegExp("-180x180", "g"), ""), jQuery("#lightgallery").append('<li> <a class="item iv small-uncle" href="' + c + '"><img class="smallbros" src="' + c + '"></a></li>')
    }), jQuery(".product_images div.images").empty(), jQuery("#lightgallery").lightGallery({
      selector: ".item"
    })
  }
  var loading = {
    show: function () {
      jQuery(".midok").css("z-index", "10")
    },
    hide: function () {
      jQuery(".midok").css("z-index", "-1")
    }
  };
  jQuery(".scaleme").click(function () {
    jQuery(this).hide(), jQuery(".overlay-pepper").show(), jQuery(".overlay-pepper img").fadeIn(), jQuery(".overlay-pepper").click(function () {
      jQuery(".overlay-pepper img").fadeOut(), jQuery(".overlay-pepper").hide(), jQuery(".scaleme").show()
    })
  }), jQuery("#card-view").click(function () {
    jQuery("body").removeClass("bigcards-view"), jQuery("body").removeClass("list-view"), jQuery("body").addClass("card-view")
  }), jQuery("#bigcards-view").click(function () {
    jQuery("body").removeClass("card-view"), jQuery("body").removeClass("list-view"), jQuery("body").addClass("bigcards-view")
  }), jQuery("#list-view").click(function () {
    jQuery("body").removeClass("bigcards-view"), jQuery("body").removeClass("card-view"), jQuery("body").addClass("list-view"), jQuery("ul.products li").each(function () {
      var e = jQuery(this).attr("onclick").slice(7, -3),
        t = jQuery(this).find(".product_info");
      t.append('<img class="rotating loder" src="http://akyurek.ua/wp-content/uploads/2017/04/koleso.png">');
      fastSingCont(e, t)
    }), setTimeout(function () {
      jQuery(".loder").detach()
    }, 4e3)
  }), jQuery("#datazeren").on("click", ".widget_layered_nav .widget_title", function () {
    rodak = jQuery(this).parent(), rodak.find(".sortero").toggle()
  }), jQuery(".widget_layered_nav").on("click", ".widget_title", function () {
    rodak = jQuery(this).parent(), rodak.find(".sortero").toggle()
  }), jQuery(".modax").each(function () {
    var e = jQuery(this).attr("href");
    jQuery(this).removeAttr("href"), jQuery(this).parent("li").attr("ssil", e)
  }), jQuery(".zon").click(function () {
    var e = jQuery(this).attr("zod");
    jQuery('li[zod^="' + e + '"]').click()
  }), jQuery(".modax").click(function () {
    jQuery(".modax").removeClass("activated");
    var e = jQuery(this).attr("ssil");
    jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("ul.products"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").html(e), jQuery("ul.products").animate({
          left: 0,
          opacity: "1",
          top: 0
        }, 1500), jQuery(".inax.loaddin").removeClass("loaddin")
      }
    }).done(function () {
      prepareYourLinks()
    }), jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("div#wtfff"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").prepend(e).animate({
          opacity: 1
        }, 500), jQuery("div#wtfff").animate({
          opacity: 1
        }, 500), setTimeout(function () {
          jQuery(".inax_group").addClass("go")
        }, 200), jQuery(".circul").addClass("go"), jQuery(".inax.loaddin").removeClass("loaddin")
      }
    }), jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("aside.widget.woocommerce.widget_layered_nav.shop_widgets"), jQuery("div#datazeren").html(e), jQuery("#datazeren ul li a").each(function () {
          var e = jQuery(this).attr("href");
          jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
        }), jQuery("#loadd").detach(), jQuery(".loaddin").removeClass("loaddin")
      }
    }), jQuery(this).addClass("activated")
  }), jQuery("#platform").mouseleave(function () {
    jQuery(".zon").css("opacity", "0"), jQuery(".text-inf").hide(), jQuery("p.catitle").removeClass("houver")
  }), jQuery(".textain2").ready(function () {
    jQuery(".htour").animate({
      opacity: 1,
      top: 0
    }, 500), setTimeout(function () {
      anidada()
    }, 200)
  }), jQuery(".sort-choose-cont").on("click", ".shopper button", function () {
    jQuery(".htour").css("height", "0").css("display", "none").animate({
      left: 0,
      opacity: "0",
      top: 50
    }, 1500), jQuery(".project_grid_wrapper.container.col_3").css("height", "auto").css("display", "block").animate({
      left: 0,
      opacity: "1",
      top: 0
    }, 1500)
  }), jQuery(".sort-choose-cont").on("click", ".county button", function () {
    jQuery(".project_grid_wrapper.container.col_3").animate({
      left: 0,
      opacity: "0",
      top: 50
    }, 1500), jQuery(".project_grid_wrapper.container.col_3").css("height", "0").css("display", "none"), jQuery(".htour").animate({
      left: 0,
      opacity: "1",
      top: 0
    }, 1500).css("height", "auto").css("display", "block")
  }), jQuery("#state").ready(function () {
    iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
  }), jQuery(".company_history_header .year").wrap('<div class="yearz"></div>'), jQuery("#ihelp").click(function () {
    jQuery(".lama-container.lama-container-android.lama-container-horizontal").toggleClass("round2")
  }), jQuery(document).on("click", ".entry-title div.breadcrumbs a", function () {
    jQuery(this).addClass("loaddin").prepend('<img id="loadd" src="/wp-content/uploads/2017/04/preloader_10.gif">');
    var e = jQuery(this).attr("ssil");
    jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("ul.products"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").html(e), jQuery(".inax.loaddin").removeClass("loaddin"), iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
      }
    }).done(function () {
      prepareYourLinks()
    }), jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("div#wtfff"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").prepend(e).animate({
          opacity: 1
        }, 500), jQuery("div#wtfff").animate({
          opacity: 1
        }, 500), scrolltome(), setTimeout(function () {
          jQuery(".inax_group").addClass("go")
        }, 200), jQuery(".circul").addClass("go"), jQuery(".inax.loaddin").removeClass("loaddin")
      }
    }), jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("aside.widget.woocommerce.widget_layered_nav.shop_widgets"), jQuery("div#datazeren").html(e), jQuery("#datazeren ul li a").each(function () {
          var e = jQuery(this).attr("href");
          jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
        }), jQuery("#loadd").detach(), jQuery(".loaddin").removeClass("loaddin")
      }
    })
  }), jQuery("#yachmen-separ, #yachmen-polir, #yachmen-trans, #yachmen-defence, #yachmen-hranenie").click(function () {
    jQuery(this).addClass("loaddin").prepend('<div class="giwrap"><img id="loadd" border="0" src="/wp-content/uploads/2017/04/preloader_10.gif"></div>'), jQuery(".entry-header").prepend('<div class="seed-fall locker"></div>'), gather();
    var e = jQuery(this).attr("ssil");
    jQuery.ajax({
      async: !1,
      url: e,
      success: function (e) {
        e = jQuery(e).find("ul.products"), jQuery(".prod-catch").html(e), setTimeout(function () {
          iteRation(jQuery("ul.products li"), 13, 100, " visible")
        }, 100), setTimeout(function () {
          jQuery(".inax.loaddin").removeClass("loaddin"), jQuery(".giwrap").detach(), jQuery("#loadd").detach()
        }, 2e3)
      }
    })
  }), jQuery("#vsekat").click(function () {
    loadProducts(!0)
  }), setTimeout(function () {
    jQuery("ul#menu-tempo-menu li.visible").removeClass("current-menu-item")
  }, 2200), goSwap();
}
custom();

function ReadyToAnimateThis(component){
  jQuery(component).each(function(){
    jQuery(this).addClass('iv');
  });
};
 ReadyToAnimateThis('.header_socials a');

function Watcher(w,a,t){
  // w-Parent object (jQuery object)
  // a-Children common class (definite className)
  // t-Class, needed to add to parent to get animation
jQuery.fn.isInViewport = function () {
  var elementTop = jQuery(this).offset().top;
  var elementBottom = elementTop + jQuery(this).outerHeight();
  var viewportTop = jQuery(window).scrollTop();
  var viewportBottom = viewportTop + jQuery(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
jQuery(window).on('resize scroll load', function () {
if (jQuery(w).isInViewport()) {
  // Animacia Starten
  var elfs = Array.prototype.slice.call(document.getElementsByClassName(a));
  var lenArr = elfs.length;
  var i = 0;
  for (; i < lenArr; i++) ! function (i) {
    if (jQuery(a).parent(w).hasClass(t) != true){
      elfs[i].style.transitionDelay = ''+ (0.5 + (.25 * i)) +'s';
    }else {
        jQuery(a).parent(w).addClass(t);
      }
  }(i);
  setTimeout(function(){
    jQuery(w).addClass(t);
  }, 8);
} else {
// Animacia Razbiren
  var elfs = Array.prototype.slice.call(document.getElementsByClassName(a));
  var lenArr = elfs.length;
  var i = 0;
      for (; i < lenArr; i++) ! function (i) {
          elfs[i].style.transitionDelay = '0s';
      }(i);
      setTimeout(function(){
        jQuery(w).removeClass(t);
      }, 8);
}
});
};
jQuery('ul#menu-tempo-menu').ready(function(){

  jQuery('li#menu-item-6266, li#menu-item-8491, li#menu-item-8559, li#menu-item-8715, li#menu-item-6268, li#menu-item-6269, li#menu-item-6271').addClass('iv');

  setTimeout(function(){
  new Watcher('ul#menu-tempo-menu', 'iv', 'vi');
  },8)
})
new Watcher('.grid', 'effect-ming', 'vi');
new Watcher('.header_top.clearfix', 'iv', 'vi');
new Watcher('div#main .wpb_wrapper', 'iv', 'vi');
new Watcher('header', 'iv', 'vi');
new Watcher('.darky', 'ivl', 'vi');
