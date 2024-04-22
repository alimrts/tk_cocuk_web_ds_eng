const countries = [
  {
    flag: "flags/ad.svg",
    name: "Andorra",
  },
  {
    flag: "flags/ao.svg",
    name: "Angola",
  },
  {
    flag: "flags/aq.svg",
    name: "Antarctica",
  },
  {
    flag: "flags/bs.svg",
    name: "Bahamas",
  },
  {
    flag: "flags/bh.svg",
    name: "Bahrain",
  },
  {
    flag: "flags/bb.svg",
    name: "Barbados",
  },
  {
    flag: "flags/by.svg",
    name: "Belarus",
  },
  {
    flag: "flags/bz.svg",
    name: "Belize",
  },
  {
    flag: "flags/bj.svg",
    name: "Benin",
  },
  {
    flag: "flags/bm.svg",
    name: "Bermuda",
  },
  {
    flag: "flags/bt.svg",
    name: "Bhutan",
  },
  {
    flag: "flags/bo.svg",
    name: "Bolivia",
  },
  {
    flag: "flags/bw.svg",
    name: "Botswana",
  },
  {
    flag: "flags/bf.svg",
    name: "Burkina Faso",
  },
  {
    flag: "flags/bi.svg",
    name: "Burundi",
  },
  {
    flag: "flags/kh.svg",
    name: "Cambodia",
  },
  {
    flag: "flags/cm.svg",
    name: "Cameroon",
  },
  {
    flag: "flags/cg.svg",
    name: "Republic of the Congo",
  },
  {
    flag: "flags/cd.svg",
    name: "Democratic Republic of the Congo",
  },
  {
    flag: "flags/cr.svg",
    name: "Costa Rica",
  },
  {
    flag: "flags/dj.svg",
    name: "Djibouti",
  },
  {
    flag: "flags/dm.svg",
    name: "Dominica",
  },
  {
    flag: "flags/do.svg",
    name: "Dominican Republic",
  },
  {
    flag: "flags/ec.svg",
    name: "Ecuador",
  },
  {
    flag: "flags/sv.svg",
    name: "El Salvador",
  },
  {
    flag: "flags/gq.svg",
    name: "Equatorial Guinea",
  },
  {
    flag: "flags/er.svg",
    name: "Eritrea",
  },
  {
    flag: "flags/et.svg",
    name: "Ethiopia",
  },
  {
    flag: "flags/fj.svg",
    name: "Fiji",
  },
  {
    flag: "flags/ga.svg",
    name: "Gabon",
  },
  {
    flag: "flags/gm.svg",
    name: "Gambia",
  },
  {
    flag: "flags/gh.svg",
    name: "Ghana",
  },
  {
    flag: "flags/gi.svg",
    name: "Gibraltar",
  },
  {
    flag: "flags/gl.svg",
    name: "Greenland",
  },
  {
    flag: "flags/gd.svg",
    name: "Grenada",
  },
  {
    flag: "flags/gt.svg",
    name: "Guatemala",
  },
  {
    flag: "flags/gn.svg",
    name: "Guinea",
  },
  {
    flag: "flags/gy.svg",
    name: "Guyana",
  },
  {
    flag: "flags/ht.svg",
    name: "Haiti",
  },
  {
    flag: "flags/va.svg",
    name: "Vatican City",
  },
  {
    flag: "flags/hn.svg",
    name: "Honduras",
  },
  {
    flag: "flags/hk.svg",
    name: "Hong Kong",
  },
  {
    flag: "flags/ci.svg",
    name: "Ivory Coast",
  },
  {
    flag: "flags/la.svg",
    name: "Laos",
  },
  {
    flag: "flags/ls.svg",
    name: "Lesotho",
  },
  {
    flag: "flags/lr.svg",
    name: "Liberia",
  },
  {
    flag: "flags/li.svg",
    name: "Liechtenstein",
  },
  {
    flag: "flags/mo.svg",
    name: "Macau",
  },
  {
    flag: "flags/mg.svg",
    name: "Madagascar",
  },
  {
    flag: "flags/mw.svg",
    name: "Malawi",
  },
  {
    flag: "flags/mv.svg",
    name: "Maldives",
  },
  {
    flag: "flags/mt.svg",
    name: "Malta",
  },
  {
    flag: "flags/mc.svg",
    name: "Monaco",
  },
  {
    flag: "flags/mz.svg",
    name: "Mozambique",
  },
  {
    flag: "flags/mm.svg",
    name: "Myanmar",
  },
  {
    flag: "flags/na.svg",
    name: "Namibia",
  },
  {
    flag: "flags/ni.svg",
    name: "Nicaragua",
  },
  {
    flag: "flags/ng.svg",
    name: "Nigeria",
  },
  {
    flag: "flags/om.svg",
    name: "Oman",
  },
  {
    flag: "flags/pa.svg",
    name: "Panama",
  },
  {
    flag: "flags/pg.svg",
    name: "Papua New Guinea",
  },
  {
    flag: "flags/py.svg",
    name: "Paraguay",
  },
  {
    flag: "flags/ph.svg",
    name: "Philippines",
  },
  {
    flag: "flags/pr.svg",
    name: "Puerto Rico",
  },
  {
    flag: "flags/xk.svg",
    name: "Kosovo",
  },
  {
    flag: "flags/rw.svg",
    name: "Rwanda",
  },
  {
    flag: "flags/sm.svg",
    name: "San Marino",
  },
  {
    flag: "flags/sl.svg",
    name: "Sierra Leone",
  },
  {
    flag: "flags/so.svg",
    name: "Somalia",
  },
  {
    flag: "flags/ss.svg",
    name: "South Sudan",
  },
  {
    flag: "flags/lk.svg",
    name: "Sri Lanka",
  },
  {
    flag: "flags/sr.svg",
    name: "Suriname",
  },
  {
    flag: "flags/sz.svg",
    name: "Eswatini",
  },
  {
    flag: "flags/tw.svg",
    name: "Taiwan",
  },
  {
    flag: "flags/tz.svg",
    name: "Tanzania",
  },
  {
    flag: "flags/tg.svg",
    name: "Togo",
  },
  {
    flag: "flags/to.svg",
    name: "Tonga",
  },
  {
    flag: "flags/tt.svg",
    name: "Trinidad and Tobago",
  },
  {
    flag: "flags/ug.svg",
    name: "Uganda",
  },
  {
    flag: "flags/uy.svg",
    name: "Uruguay",
  },
  {
    flag: "flags/ve.svg",
    name: "Venezuela",
  },
  {
    flag: "flags/vn.svg",
    name: "Vietnam",
  },
  {
    flag: "flags/eh.svg",
    name: "Western Sahara",
  },
  {
    flag: "flags/zm.svg",
    name: "Zambia",
  },
  {
    flag: "flags/zw.svg",
    name: "Zimbabwe",
  },
];
