const countries = [
  {
    flag: "flags/af.svg",
    name: "Afghanistan",
  },
  {
    flag: "flags/al.svg",
    name: "Albania",
  },
  {
    flag: "flags/dz.svg",
    name: "Algeria",
  },
  {
    flag: "flags/ar.svg",
    name: "Argentina",
  },
  {
    flag: "flags/am.svg",
    name: "Armenia",
  },
  {
    flag: "flags/au.svg",
    name: "Australia",
  },
  {
    flag: "flags/at.svg",
    name: "Austria",
  },
  {
    flag: "flags/az.svg",
    name: "Azerbaijan",
  },
  {
    flag: "flags/bd.svg",
    name: "Bangladesh",
  },
  {
    flag: "flags/by.svg",
    name: "Belarus",
  },
  {
    flag: "flags/be.svg",
    name: "Belgium",
  },
  {
    flag: "flags/ba.svg",
    name: "Bosnia and Herzegovina",
  },
  {
    flag: "flags/br.svg",
    name: "Brazil",
  },
  {
    flag: "flags/bg.svg",
    name: "Bulgaria",
  },
  {
    flag: "flags/ca.svg",
    name: "Canada",
  },
  {
    flag: "flags/cf.svg",
    name: "Central African Republic",
  },
  {
    flag: "flags/td.svg",
    name: "Chad",
  },
  {
    flag: "flags/cl.svg",
    name: "Chile",
  },
  {
    flag: "flags/cn.svg",
    name: "China",
  },
  {
    flag: "flags/co.svg",
    name: "Colombia",
  },
  {
    flag: "flags/hr.svg",
    name: "Croatia",
  },
  {
    flag: "flags/cu.svg",
    name: "Cuba",
  },
  {
    flag: "flags/cy.svg",
    name: "Northern Cyprus",
  },
  {
    flag: "flags/cz.svg",
    name: "Czech Republic",
  },
  {
    flag: "flags/dk.svg",
    name: "Denmark",
  },
  {
    flag: "flags/eg.svg",
    name: "Egypt",
  },
  {
    flag: "flags/ee.svg",
    name: "Estonia",
  },
  {
    flag: "flags/fi.svg",
    name: "Finland",
  },
  {
    flag: "flags/fr.svg",
    name: "France",
  },
  {
    flag: "flags/ge.svg",
    name: "Georgia",
  },
  {
    flag: "flags/de.svg",
    name: "Germany",
  },
  {
    flag: "flags/gr.svg",
    name: "Greece",
  },
  {
    flag: "flags/hu.svg",
    name: "Hungary",
  },
  {
    flag: "flags/is.svg",
    name: "Iceland",
  },
  {
    flag: "flags/in.svg",
    name: "India",
  },
  {
    flag: "flags/id.svg",
    name: "Indonesia",
  },
  {
    flag: "flags/ir.svg",
    name: "Iran",
  },
  {
    flag: "flags/iq.svg",
    name: "Iraq",
  },
  {
    flag: "flags/ie.svg",
    name: "Ireland",
  },
  {
    flag: "flags/it.svg",
    name: "Italy",
  },
  {
    flag: "flags/jm.svg",
    name: "Jamaica",
  },
  {
    flag: "flags/jp.svg",
    name: "Japan",
  },
  {
    flag: "flags/jo.svg",
    name: "Jordan",
  },
  {
    flag: "flags/kz.svg",
    name: "Kazakhstan",
  },
  {
    flag: "flags/ke.svg",
    name: "Kenya",
  },
  {
    flag: "flags/kw.svg",
    name: "Kuwait",
  },
  {
    flag: "flags/kg.svg",
    name: "Kyrgyzstan",
  },
  {
    flag: "flags/lv.svg",
    name: "Latvia",
  },
  {
    flag: "flags/lb.svg",
    name: "Lebanon",
  },
  {
    flag: "flags/ly.svg",
    name: "Libya",
  },
  {
    flag: "flags/lt.svg",
    name: "Lithuania",
  },
  {
    flag: "flags/lu.svg",
    name: "Luxembourg",
  },
  {
    flag: "flags/mk.svg",
    name: "North Macedonia",
  },
  {
    flag: "flags/my.svg",
    name: "Malaysia",
  },
  {
    flag: "flags/ml.svg",
    name: "Mali",
  },
  {
    flag: "flags/mr.svg",
    name: "Mauritania",
  },
  {
    flag: "flags/mx.svg",
    name: "Mexico",
  },
  {
    flag: "flags/md.svg",
    name: "Moldova",
  },
  {
    flag: "flags/mn.svg",
    name: "Mongolia",
  },
  {
    flag: "flags/me.svg",
    name: "Montenegro",
  },
  {
    flag: "flags/ma.svg",
    name: "Morocco",
  },
  {
    flag: "flags/np.svg",
    name: "Nepal",
  },
  {
    flag: "flags/nl.svg",
    name: "Netherlands",
  },
  {
    flag: "flags/nz.svg",
    name: "New Zealand",
  },
  {
    flag: "flags/ne.svg",
    name: "Niger",
  },
  {
    flag: "flags/kp.svg",
    name: "North Korea",
  },
  {
    flag: "flags/no.svg",
    name: "Norway",
  },
  {
    flag: "flags/pk.svg",
    name: "Pakistan",
  },
  {
    flag: "flags/ps.svg",
    name: "Palestine",
  },
  {
    flag: "flags/pe.svg",
    name: "Peru",
  },
  {
    flag: "flags/pl.svg",
    name: "Poland",
  },
  {
    flag: "flags/pt.svg",
    name: "Portugal",
  },
  {
    flag: "flags/qa.svg",
    name: "Qatar",
  },
  {
    flag: "flags/ro.svg",
    name: "Romania",
  },
  {
    flag: "flags/ru.svg",
    name: "Russian Federation",
  },
  {
    flag: "flags/sa.svg",
    name: "Saudi Arabia",
  },
  {
    flag: "flags/sn.svg",
    name: "Senegal",
  },
  {
    flag: "flags/rs.svg",
    name: "Serbia",
  },
  {
    flag: "flags/sg.svg",
    name: "Singapore",
  },
  {
    flag: "flags/sk.svg",
    name: "Slovakia",
  },
  {
    flag: "flags/si.svg",
    name: "Slovenia",
  },
  {
    flag: "flags/za.svg",
    name: "South Africa",
  },
  {
    flag: "flags/kr.svg",
    name: "South Korea",
  },
  {
    flag: "flags/es.svg",
    name: "Spain",
  },
  {
    flag: "flags/sd.svg",
    name: "Sudan",
  },
  {
    flag: "flags/se.svg",
    name: "Sweden",
  },
  {
    flag: "flags/ch.svg",
    name: "Switzerland",
  },
  {
    flag: "flags/sy.svg",
    name: "Syria",
  },
  {
    flag: "flags/tj.svg",
    name: "Tajikistan",
  },
  {
    flag: "flags/th.svg",
    name: "Thailand",
  },
  {
    flag: "flags/tn.svg",
    name: "Tunisia",
  },
  {
    flag: "flags/tr.svg",
    name: "Türkiye",
  },
  {
    flag: "flags/tm.svg",
    name: "Turkmenistan",
  },
  {
    flag: "flags/ua.svg",
    name: "Ukraine",
  },
  {
    flag: "flags/ae.svg",
    name: "United Arab Emirates",
  },
  {
    flag: "flags/gb.svg",
    name: "United Kingdom",
  },
  {
    flag: "flags/us.svg",
    name: "United States",
  },
  {
    flag: "flags/uz.svg",
    name: "Uzbekistan",
  },
  {
    flag: "flags/ye.svg",
    name: "Yemen",
  },
];
