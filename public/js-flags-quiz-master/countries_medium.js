const countries = [
  {
    flag: "flags/af.svg",
    name: "Afganistan",
  },
  {
    flag: "flags/ax.svg",
    name: "Åland Adaları",
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
    flag: "flags/as.svg",
    name: "Amerikan Samoası",
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
    flag: "flags/ai.svg",
    name: "Anguilla",
  },
  {
    flag: "flags/aq.svg",
    name: "Antarktika",
  },
  {
    flag: "flags/ag.svg",
    name: "Antigua ve Barbuda",
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
    flag: "flags/aw.svg",
    name: "Aruba",
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
    name: "Bhutan",
  },
  {
    flag: "flags/bo.svg",
    name: "Bolivya (Çokuluslu Devleti)",
  },
  {
    flag: "flags/bq.svg",
    name: "Bonaire, Sint Eustatius ve Saba",
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
    flag: "flags/bv.svg",
    name: "Bouvet Adası",
  },
  {
    flag: "flags/br.svg",
    name: "Brezilya",
  },
  {
    flag: "flags/io.svg",
    name: "Britanya Hint Okyanusu Toprakları",
  },
  {
    flag: "flags/um.svg",
    name: "Amerika Birleşik Devletleri Küçük Dış Adaları",
  },
  {
    flag: "flags/vg.svg",
    name: "Virgin Adaları (Britanya)",
  },
  {
    flag: "flags/vi.svg",
    name: "Virgin Adaları (ABD)",
  },
  {
    flag: "flags/bn.svg",
    name: "Brunei Darussalam",
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
    flag: "flags/cv.svg",
    name: "Cape Verde",
  },
  {
    flag: "flags/ky.svg",
    name: "Cayman Adaları",
  },
  {
    flag: "flags/cf.svg",
    name: "Orta Afrika Cumhuriyeti",
  },
  {
    flag: "flags/td.svg",
    name: "Çad",
  },
  {
    flag: "flags/cl.svg",
    name: "Şili",
  },
  {
    flag: "flags/cn.svg",
    name: "Çin",
  },
  {
    flag: "flags/cx.svg",
    name: "Christmas Adası",
  },

  {
    flag: "flags/cc.svg",
    name: "Cocos (Keeling) Adaları",
  },
  {
    flag: "flags/co.svg",
    name: "Kolombiya",
  },
  {
    flag: "flags/km.svg",
    name: "Komorlar",
  },
  {
    flag: "flags/cg.svg",
    name: "Kongo",
  },
  {
    flag: "flags/cd.svg",
    name: "Kongo Demokratik Cumhuriyeti",
  },
  {
    flag: "flags/ck.svg",
    name: "Cook Adaları",
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
    flag: "flags/cw.svg",
    name: "Curaçao",
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
    name: "Ekvador",
  },
  {
    flag: "flags/eg.svg",
    name: "Mısır",
  },
  {
    flag: "flags/tr.svg",
    name: "Türkiye",
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
    flag: "flags/fk.svg",
    name: "Falkland Adaları (Malvinas)",
  },
  {
    flag: "flags/fo.svg",
    name: "Faroe Adaları",
  },
  {
    flag: "flags/fj.svg",
    name: "Fiji",
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
    flag: "flags/gf.svg",
    name: "Fransız Guyanası",
  },

  {
    flag: "flags/pf.svg",
    name: "Fransız Polinezyası",
  },
  {
    flag: "flags/tf.svg",
    name: "Fransız Güney Toprakları",
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
    flag: "flags/gp.svg",
    name: "Guadeloupe",
  },
  {
    flag: "flags/gu.svg",
    name: "Guam",
  },
  {
    flag: "flags/gt.svg",
    name: "Guatemala",
  },
  {
    flag: "flags/gg.svg",
    name: "Guernsey",
  },
  {
    flag: "flags/gn.svg",
    name: "Gine",
  },
  {
    flag: "flags/gw.svg",
    name: "Gine-Bissau",
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
    flag: "flags/hm.svg",
    name: "Heard Adası ve McDonald Adaları",
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
    name: "İran (İslam Cumhuriyeti)",
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
    flag: "flags/im.svg",
    name: "Man Adası",
  },
  {
    flag: "flags/it.svg",
    name: "İtalya",
  },
];
