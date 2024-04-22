const countries = [
  {
    flag: "flags/af.svg",
    name: "Afganistan",
  },

  {
    flag: "flags/al.svg",
    name: "Arnavutluk",
  },
  {
    flag: "flags/dz.svg",
    name: "Cezayir",
  },

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
    name: "Antarktika",
  },

  {
    flag: "flags/ar.svg",
    name: "Arjantin",
  },
  {
    flag: "flags/am.svg",
    name: "Ermenistan",
  },

  {
    flag: "flags/au.svg",
    name: "Avustralya",
  },
  {
    flag: "flags/at.svg",
    name: "Avusturya",
  },
  {
    flag: "flags/az.svg",
    name: "Azerbaycan",
  },
  {
    flag: "flags/bs.svg",
    name: "Bahamalar",
  },
  {
    flag: "flags/bh.svg",
    name: "Bahreyn",
  },
  {
    flag: "flags/bd.svg",
    name: "Bangladeş",
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
    flag: "flags/be.svg",
    name: "Belçika",
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
    name: "Butan",
  },
  {
    flag: "flags/bo.svg",
    name: "Bolivya",
  },

  {
    flag: "flags/ba.svg",
    name: "Bosna-Hersek",
  },
  {
    flag: "flags/bw.svg",
    name: "Botsvana",
  },

  {
    flag: "flags/br.svg",
    name: "Brezilya",
  },

  {
    flag: "flags/bg.svg",
    name: "Bulgaristan",
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
    name: "Kamboçya",
  },
  {
    flag: "flags/cm.svg",
    name: "Kamerun",
  },
  {
    flag: "flags/ca.svg",
    name: "Kanada",
  },

  {
    flag: "flags/cf.svg",
    name: "Orta Afrika Cumhuriyeti",
  },
  {
    flag: "flags/td.svg",
    name: "Çad Cumhuriyeti",
  },
  {
    flag: "flags/cl.svg",
    name: "Şili",
  },
  {
    flag: "flags/cn.svg",
    name: "Çin Halk Cumhuriyeti",
  },

  {
    flag: "flags/co.svg",
    name: "Kolombiya",
  },

  {
    flag: "flags/cg.svg",
    name: "Kongo Cumhuriyeti",
  },
  {
    flag: "flags/cd.svg",
    name: "Kongo Demokratik Cumhuriyeti",
  },

  {
    flag: "flags/cr.svg",
    name: "Kosta Rika",
  },
  {
    flag: "flags/hr.svg",
    name: "Hırvatistan",
  },
  {
    flag: "flags/cu.svg",
    name: "Küba",
  },

  {
    flag: "flags/cy.svg",
    name: "Kuzey Kıbrıs Türk Cumhuriyeti",
  },
  {
    flag: "flags/cz.svg",
    name: "Çek Cumhuriyeti",
  },
  {
    flag: "flags/dk.svg",
    name: "Danimarka",
  },
  {
    flag: "flags/dj.svg",
    name: "Cibuti",
  },
  {
    flag: "flags/dm.svg",
    name: "Dominika",
  },
  {
    flag: "flags/do.svg",
    name: "Dominik Cumhuriyeti",
  },
  {
    flag: "flags/ec.svg",
    name: "Ekvator Cumhuriyeti",
  },
  {
    flag: "flags/eg.svg",
    name: "Mısır",
  },
  {
    flag: "flags/sv.svg",
    name: "El Salvador",
  },
  {
    flag: "flags/gq.svg",
    name: "Ekvator Ginesi",
  },
  {
    flag: "flags/er.svg",
    name: "Eritre",
  },
  {
    flag: "flags/ee.svg",
    name: "Estonya",
  },
  {
    flag: "flags/et.svg",
    name: "Etiyopya",
  },
  {
    flag: "flags/fj.svg",
    name: "Fiji Cumhuriyeti",
  },
  {
    flag: "flags/fi.svg",
    name: "Finlandiya",
  },
  {
    flag: "flags/fr.svg",
    name: "Fransa",
  },

  {
    flag: "flags/ga.svg",
    name: "Gabon",
  },
  {
    flag: "flags/gm.svg",
    name: "Gambiya",
  },
  {
    flag: "flags/ge.svg",
    name: "Gürcistan",
  },
  {
    flag: "flags/de.svg",
    name: "Almanya",
  },
  {
    flag: "flags/gh.svg",
    name: "Gana",
  },
  {
    flag: "flags/gi.svg",
    name: "Cebelitarık",
  },
  {
    flag: "flags/gr.svg",
    name: "Yunanistan",
  },
  {
    flag: "flags/gl.svg",
    name: "Grönland",
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
    name: "Gine",
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
    name: "Vatikan",
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
    flag: "flags/hu.svg",
    name: "Macaristan",
  },
  {
    flag: "flags/is.svg",
    name: "İzlanda",
  },
  {
    flag: "flags/in.svg",
    name: "Hindistan",
  },
  {
    flag: "flags/id.svg",
    name: "Endonezya",
  },
  {
    flag: "flags/ci.svg",
    name: "Fildişi Sahili",
  },
  {
    flag: "flags/ir.svg",
    name: "İran",
  },
  {
    flag: "flags/iq.svg",
    name: "Irak",
  },
  {
    flag: "flags/ie.svg",
    name: "İrlanda",
  },

  {
    flag: "flags/it.svg",
    name: "İtalya",
  },
  {
    flag: "flags/jm.svg",
    name: "Jamaika",
  },
  {
    flag: "flags/jp.svg",
    name: "Japonya",
  },

  {
    flag: "flags/jo.svg",
    name: "Ürdün",
  },
  {
    flag: "flags/kz.svg",
    name: "Kazakistan",
  },
  {
    flag: "flags/ke.svg",
    name: "Kenya",
  },

  {
    flag: "flags/kw.svg",
    name: "Kuveyt",
  },
  {
    flag: "flags/kg.svg",
    name: "Kırgızistan",
  },
  {
    flag: "flags/la.svg",
    name: "Laos",
  },
  {
    flag: "flags/lv.svg",
    name: "Letonya",
  },
  {
    flag: "flags/lb.svg",
    name: "Lübnan",
  },
  {
    flag: "flags/ls.svg",
    name: "Lesotho",
  },
  {
    flag: "flags/lr.svg",
    name: "Liberya",
  },
  {
    flag: "flags/ly.svg",
    name: "Libya",
  },
  {
    flag: "flags/li.svg",
    name: "Lihtenştayn",
  },
  {
    flag: "flags/lt.svg",
    name: "Litvanya",
  },
  {
    flag: "flags/lu.svg",
    name: "Lüksemburg",
  },
  {
    flag: "flags/mo.svg",
    name: "Makao",
  },
  {
    flag: "flags/mk.svg",
    name: "Kuzey Makedonya",
  },
  {
    flag: "flags/mg.svg",
    name: "Madagaskar",
  },
  {
    flag: "flags/mw.svg",
    name: "Malavi",
  },
  {
    flag: "flags/my.svg",
    name: "Malezya",
  },
  {
    flag: "flags/mv.svg",
    name: "Maldivler",
  },
  {
    flag: "flags/ml.svg",
    name: "Mali",
  },
  {
    flag: "flags/mt.svg",
    name: "Malta",
  },

  {
    flag: "flags/mr.svg",
    name: "Moritanya",
  },

  {
    flag: "flags/mx.svg",
    name: "Meksika",
  },

  {
    flag: "flags/md.svg",
    name: "Moldova",
  },
  {
    flag: "flags/mc.svg",
    name: "Monako",
  },
  {
    flag: "flags/mn.svg",
    name: "Moğolistan",
  },

  {
    flag: "flags/me.svg",
    name: "Karadağ",
  },

  {
    flag: "flags/ma.svg",
    name: "Fas",
  },
  {
    flag: "flags/mz.svg",
    name: "Mozambik",
  },
  {
    flag: "flags/mm.svg",
    name: "Myanmar",
  },
  {
    flag: "flags/na.svg",
    name: "Namibya",
  },

  {
    flag: "flags/np.svg",
    name: "Nepal",
  },
  {
    flag: "flags/nl.svg",
    name: "Hollanda",
  },
  {
    flag: "flags/nz.svg",
    name: "Yeni Zelanda",
  },
  {
    flag: "flags/ni.svg",
    name: "Nikaragua",
  },
  {
    flag: "flags/ne.svg",
    name: "Nijer",
  },
  {
    flag: "flags/ng.svg",
    name: "Nijerya Federal Cumhuriyeti",
  },

  {
    flag: "flags/kp.svg",
    name: "Kuzey Kore",
  },

  {
    flag: "flags/no.svg",
    name: "Norveç",
  },
  {
    flag: "flags/om.svg",
    name: "Umman",
  },
  {
    flag: "flags/pk.svg",
    name: "Pakistan",
  },

  {
    flag: "flags/ps.svg",
    name: "Filistin",
  },
  {
    flag: "flags/pa.svg",
    name: "Panama",
  },
  {
    flag: "flags/pg.svg",
    name: "Papua Yeni Gine",
  },
  {
    flag: "flags/py.svg",
    name: "Paraguay",
  },
  {
    flag: "flags/pe.svg",
    name: "Peru",
  },
  {
    flag: "flags/ph.svg",
    name: "Filipinler",
  },

  {
    flag: "flags/pl.svg",
    name: "Polonya",
  },
  {
    flag: "flags/pt.svg",
    name: "Portekiz",
  },
  {
    flag: "flags/pr.svg",
    name: "Porto Riko",
  },
  {
    flag: "flags/qa.svg",
    name: "Katar",
  },
  {
    flag: "flags/xk.svg",
    name: "Kosova",
  },

  {
    flag: "flags/ro.svg",
    name: "Romanya",
  },
  {
    flag: "flags/ru.svg",
    name: "Rusya Federasyonu",
  },
  {
    flag: "flags/rw.svg",
    name: "Ruanda",
  },

  {
    flag: "flags/sm.svg",
    name: "San Marino",
  },

  {
    flag: "flags/sa.svg",
    name: "Suudi Arabistan",
  },

  {
    flag: "flags/sn.svg",
    name: "Senegal",
  },
  {
    flag: "flags/rs.svg",
    name: "Sırbistan",
  },

  {
    flag: "flags/sl.svg",
    name: "Sierra Leone",
  },
  {
    flag: "flags/sg.svg",
    name: "Singapur",
  },

  {
    flag: "flags/sk.svg",
    name: "Slovakya",
  },
  {
    flag: "flags/si.svg",
    name: "Slovenya",
  },

  {
    flag: "flags/so.svg",
    name: "Somali",
  },
  {
    flag: "flags/za.svg",
    name: "Güney Afrika",
  },

  {
    flag: "flags/kr.svg",
    name: "Güney Kore",
  },
  {
    flag: "flags/ss.svg",
    name: "Güney Sudan",
  },
  {
    flag: "flags/es.svg",
    name: "İspanya",
  },
  {
    flag: "flags/lk.svg",
    name: "Sri Lanka",
  },
  {
    flag: "flags/sd.svg",
    name: "Sudan",
  },
  {
    flag: "flags/sr.svg",
    name: "Surinam",
  },

  {
    flag: "flags/sz.svg",
    name: "Esvatini Krallığı",
  },
  {
    flag: "flags/se.svg",
    name: "İsveç",
  },
  {
    flag: "flags/ch.svg",
    name: "İsviçre",
  },
  {
    flag: "flags/sy.svg",
    name: "Suriye",
  },
  {
    flag: "flags/tw.svg",
    name: "Tayvan",
  },
  {
    flag: "flags/tj.svg",
    name: "Tacikistan",
  },
  {
    flag: "flags/tz.svg",
    name: "Tanzanya",
  },
  {
    flag: "flags/th.svg",
    name: "Tayland",
  },

  {
    flag: "flags/tg.svg",
    name: "Togo",
  },

  {
    flag: "flags/to.svg",
    name: "Tonga Krallığı",
  },
  {
    flag: "flags/tt.svg",
    name: "Trinidad ve Tobago",
  },
  {
    flag: "flags/tn.svg",
    name: "Tunus",
  },
  {
    flag: "flags/tr.svg",
    name: "Türkiye",
  },
  {
    flag: "flags/tm.svg",
    name: "Türkmenistan",
  },

  {
    flag: "flags/ug.svg",
    name: "Uganda",
  },
  {
    flag: "flags/ua.svg",
    name: "Ukrayna",
  },
  {
    flag: "flags/ae.svg",
    name: "Birleşik Arap Emirlikleri",
  },
  {
    flag: "flags/gb.svg",
    name: "Birleşik Krallık",
  },
  {
    flag: "flags/us.svg",
    name: "Amerika Birleşik Devletleri",
  },
  {
    flag: "flags/uy.svg",
    name: "Uruguay",
  },
  {
    flag: "flags/uz.svg",
    name: "Özbekistan",
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
    name: "Batı Sahra",
  },
  {
    flag: "flags/ye.svg",
    name: "Yemen",
  },
  {
    flag: "flags/zm.svg",
    name: "Zambiya",
  },
  {
    flag: "flags/zw.svg",
    name: "Zimbabve",
  },
];
