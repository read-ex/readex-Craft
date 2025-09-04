const countryFlags = [
        "ad.svg", "ae.svg", "af.svg", "ag.svg", "ai.svg", "al.svg", "am.svg", "ao.svg", "aq.svg", "ar.svg", "as.svg", "at.svg", "au.svg", "aw.svg", "ax.svg", "az.svg", "ba.svg", "bb.svg", "bd.svg", "be.svg", "bf.svg", "bg.svg", "bh.svg", "bi.svg", "bj.svg", "bl.svg", "bm.svg", "bn.svg", "bo.svg", "bq.svg", "br.svg", "bs.svg", "bt.svg", "bv.svg", "bw.svg", "by.svg", "bz.svg", "ca.svg", "cc.svg", "cd.svg", "cf.svg", "cg.svg", "ch.svg", "ci.svg", "ck.svg", "cl.svg", "cm.svg", "cn.svg", "co.svg", "cr.svg", "cu.svg", "cv.svg", "cw.svg", "cx.svg", "cy.svg", "cz.svg", "de.svg", "dj.svg", "dk.svg", "dm.svg", "do.svg", "dz.svg", "ec.svg", "ee.svg", "eg.svg", "eh.svg", "er.svg", "es.svg", "et.svg", "fi.svg", "fj.svg", "fk.svg", "fm.svg", "fo.svg", "fr.svg", "ga.svg", "gb.svg", "gd.svg", "ge.svg", "gf.svg", "gg.svg", "gh.svg", "gi.svg", "gl.svg", "gm.svg", "gn.svg", "gp.svg", "gq.svg", "gr.svg", "gs.svg", "gt.svg", "gu.svg", "gw.svg", "gy.svg", "hk.svg", "hm.svg", "hn.svg", "hr.svg", "ht.svg", "hu.svg", "id.svg", "ie.svg", "il.svg", "im.svg", "in.svg", "io.svg", "iq.svg", "ir.svg", "is.svg", "it.svg", "je.svg", "jm.svg", "jo.svg", "jp.svg", "ke.svg", "kg.svg", "kh.svg", "ki.svg", "km.svg", "kn.svg", "kp.svg", "kr.svg", "kw.svg", "ky.svg", "kz.svg", "la.svg", "lb.svg", "lc.svg", "li.svg", "lk.svg", "lr.svg", "ls.svg", "lt.svg", "lu.svg", "lv.svg", "ly.svg", "ma.svg", "mc.svg", "md.svg", "me.svg", "mf.svg", "mg.svg", "mh.svg", "mk.svg", "ml.svg", "mm.svg", "mn.svg", "mo.svg", "mp.svg", "mq.svg", "mr.svg", "ms.svg", "mt.svg", "mu.svg", "mv.svg", "mw.svg", "mx.svg", "my.svg", "mz.svg", "na.svg", "nc.svg", "ne.svg", "nf.svg", "ng.svg", "ni.svg", "nl.svg", "no.svg", "np.svg", "nr.svg", "nu.svg", "nz.svg", "om.svg", "pa.svg", "pe.svg", "pf.svg", "pg.svg", "ph.svg", "pk.svg", "pl.svg", "pm.svg", "pn.svg", "pr.svg", "ps.svg", "pt.svg", "pw.svg", "py.svg", "qa.svg", "re.svg", "ro.svg", "rs.svg", "ru.svg", "rw.svg", "sa.svg", "sb.svg", "sc.svg", "sd.svg", "se.svg", "sg.svg", "sh.svg", "si.svg", "sj.svg", "sk.svg", "sl.svg", "sm.svg", "sn.svg", "so.svg", "sr.svg", "ss.svg", "st.svg", "sv.svg", "sx.svg", "sy.svg", "sz.svg", "tc.svg", "td.svg", "tf.svg", "tg.svg", "th.svg", "tj.svg", "tk.svg", "tl.svg", "tm.svg", "tn.svg", "to.svg", "tr.svg", "tt.svg", "tv.svg", "tw.svg", "tz.svg", "ua.svg", "ug.svg", "um.svg", "us.png", "uy.svg", "uz.svg", "va.svg", "vc.svg", "ve.svg", "vg.svg", "vi.svg", "vn.svg", "vu.svg", "wf.svg", "ws.svg", "ye.svg", "yt.svg", "za.svg", "zm.svg", "zw.svg"
    ];

    const countries = [
        {name: 'United States', code: 'US', phone: '+1'},
        {name: 'China', code: 'CN', phone: '+86'},
        {name: 'United Kingdom', code: 'GB', phone: '+44'},
        {name: 'Germany', code: 'DE', phone: '+49'},
        {name: 'Japan', code: 'JP', phone: '+81'},
        {name: 'South Korea', code: 'KR', phone: '+82'},
        {name: 'France', code: 'FR', phone: '+33'},
        {name: 'Canada', code: 'CA', phone: '+1'},
        {name: 'Australia', code: 'AU', phone: '+61'},
        {name: 'Italy', code: 'IT', phone: '+39'},
        {name: 'India', code: 'IN', phone: '+91'},
        {name: 'Brazil', code: 'BR', phone: '+55'},
        {name: 'Russia', code: 'RU', phone: '+7'},
        {name: 'Mexico', code: 'MX', phone: '+52'},
        {name: 'Indonesia', code: 'ID', phone: '+62'},
        {name: 'Netherlands', code: 'NL', phone: '+31'},
        {name: 'Spain', code: 'ES', phone: '+34'},
        {name: 'Turkey', code: 'TR', phone: '+90'},
        {name: 'Sweden', code: 'SE', phone: '+46'},
        {name: 'Singapore', code: 'SG', phone: '+65'},
        {name: 'United Arab Emirates', code: 'AE', phone: '+971'},
        {name: 'Poland', code: 'PL', phone: '+48'},
        {name: 'Thailand', code: 'TH', phone: '+66'},
        {name: 'Saudi Arabia', code: 'SA', phone: '+966'},
        {name: 'Malaysia', code: 'MY', phone: '+60'},
        {name: 'South Africa', code: 'ZA', phone: '+27'},
        {name: 'Vietnam', code: 'VN', phone: '+84'},
        {name: 'Philippines', code: 'PH', phone: '+63'},
        {name: 'Argentina', code: 'AR', phone: '+54'},
        {name: 'Chile', code: 'CL', phone: '+56'},
        {name: 'Nigeria', code: 'NG', phone: '+234'},
        {name: 'Colombia', code: 'CO', phone: '+57'},
        {name: 'Pakistan', code: 'PK', phone: '+92'},
        {name: 'Egypt', code: 'EG', phone: '+20'},
        {name: 'Bangladesh', code: 'BD', phone: '+880'},
        {name: 'Peru', code: 'PE', phone: '+51'},
        {name: 'Israel', code: 'IL', phone: '+972'},
        {name: 'Switzerland', code: 'CH', phone: '+41'},
        {name: 'Belgium', code: 'BE', phone: '+32'},
        {name: 'Austria', code: 'AT', phone: '+43'},
        {name: 'Czech Republic', code: 'CZ', phone: '+420'},
        {name: 'Ireland', code: 'IE', phone: '+353'},
        {name: 'New Zealand', code: 'NZ', phone: '+64'},
        {name: 'Portugal', code: 'PT', phone: '+351'},
        {name: 'Denmark', code: 'DK', phone: '+45'},
        {name: 'Norway', code: 'NO', phone: '+47'},
        {name: 'Finland', code: 'FI', phone: '+358'},
        {name: 'Hong Kong', code: 'HK', phone: '+852'},
        {name: 'Greece', code: 'GR', phone: '+30'},
        {name: 'Romania', code: 'RO', phone: '+40'},
        {name: 'Hungary', code: 'HU', phone: '+36'},
        {name: 'Ukraine', code: 'UA', phone: '+380'},
        {name: 'Morocco', code: 'MA', phone: '+212'},
        {name: 'Kenya', code: 'KE', phone: '+254'},
        {name: 'Kazakhstan', code: 'KZ', phone: '+7'},
        {name: 'Sri Lanka', code: 'LK', phone: '+94'},
        {name: 'Algeria', code: 'DZ', phone: '+213'},
        {name: 'Ecuador', code: 'EC', phone: '+593'},
        {name: 'Bolivia', code: 'BO', phone: '+591'},
        {name: 'Paraguay', code: 'PY', phone: '+595'},
        {name: 'Panama', code: 'PA', phone: '+507'},
        {name: 'Costa Rica', code: 'CR', phone: '+506'},
        {name: 'Qatar', code: 'QA', phone: '+974'},
        {name: 'Bahrain', code: 'BH', phone: '+973'},
        {name: 'Luxembourg', code: 'LU', phone: '+352'},
        {name: 'Croatia', code: 'HR', phone: '+385'},
        {name: 'Slovakia', code: 'SK', phone: '+421'},
        {name: 'Slovenia', code: 'SI', phone: '+386'},
        {name: 'Estonia', code: 'EE', phone: '+372'},
        {name: 'Lebanon', code: 'LB', phone: '+961'},
        {name: 'Jordan', code: 'JO', phone: '+962'},
        {name: 'Oman', code: 'OM', phone: '+968'},
        {name: 'Iceland', code: 'IS', phone: '+354'},
        {name: 'Kuwait', code: 'KW', phone: '+965'},
        {name: 'Cyprus', code: 'CY', phone: '+357'},
        {name: 'Lithuania', code: 'LT', phone: '+370'},
        {name: 'Latvia', code: 'LV', phone: '+371'},
        {name: 'Uruguay', code: 'UY', phone: '+598'},
        {name: 'Dominican Republic', code: 'DO', phone: '+1-809'},
        {name: 'Guatemala', code: 'GT', phone: '+502'},
        {name: 'Honduras', code: 'HN', phone: '+504'},
        {name: 'El Salvador', code: 'SV', phone: '+503'},
        {name: 'Bosnia and Herzegovina', code: 'BA', phone: '+387'},
        {name: 'Serbia', code: 'RS', phone: '+381'},
        {name: 'Montenegro', code: 'ME', phone: '+382'},
        {name: 'Moldova', code: 'MD', phone: '+373'},
    ];

    // Assign flag filename to each country object
    countries.forEach(country => {
        country.flag = countryFlags.find(f => f.startsWith(country.code.toLowerCase()));
    });

const phoneInput = document.querySelector('.phone-input');
function updateCountryFlag(countryCode) {
    const flagImg = document.getElementById('countryFlag');
    const country = countries.find(c => c.code === countryCode);
    if (country && country.flag) {
        flagImg.src = `Assets/contry/${country.flag}`;
        flagImg.alt = `${country.name} Flag`;
    } else {
        flagImg.src = 'contry/default.svg'; // Default flag if not found
        flagImg.alt = 'Default Flag';
    }

}

    const states = {
        'IN': [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 
            'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 
            'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 
            'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
            'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
            'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
            'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
            'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
        ],
        'US': ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', /* ... other US states ... */],
        'GB': ['England', 'Scotland', 'Wales', 'Northern Ireland']
    };

    const countryInput = document.getElementById('country');
    const stateInput = document.getElementById('state');
    const countrySuggestions = document.getElementById('countrySuggestions');
    const stateSuggestions = document.getElementById('stateSuggestions');
    const countryCodeInput = document.getElementById('countryCode');

    let selectedCountry = null;

    function updateSuggestions(input, items, suggestionsList, callback) {
        const value = input.toLowerCase();
        const filtered = items.filter(item => 
            typeof item === 'string' 
                ? item.toLowerCase().includes(value)
                : item.name.toLowerCase().includes(value)
        );

        suggestionsList.innerHTML = '';
        
        if (value && filtered.length) {
            suggestionsList.style.display = 'block';
            filtered.forEach(item => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = typeof item === 'string' ? item : item.name;
                div.onclick = () => {
                    callback(item);
                    suggestionsList.style.display = 'none';
                };
                suggestionsList.appendChild(div);
            });
        } else {
            suggestionsList.style.display = 'none';
        }
    }

    function selectCountry(country) {
        selectedCountry = country;
        countryInput.value = country.name;
        countryCodeInput.value = country.phone;
        stateInput.value = ''; // Reset state when country changes
        stateInput.removeAttribute('readonly');
         updateCountryFlag(country.code)
    }

    function selectState(state) {
        stateInput.value = state;
    }

    countryInput.addEventListener('input', (e) => {
        updateSuggestions(e.target.value, countries, countrySuggestions, selectCountry);
    });

    stateInput.addEventListener('input', (e) => {
        if (selectedCountry && states[selectedCountry.code]) {
            updateSuggestions(e.target.value, states[selectedCountry.code], stateSuggestions, selectState);
        }
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!countryInput.contains(e.target) && !countrySuggestions.contains(e.target)) {
            countrySuggestions.style.display = 'none';
        }
        if (!stateInput.contains(e.target) && !stateSuggestions.contains(e.target)) {
            stateSuggestions.style.display = 'none';
        }
    });



    // Initial country code
    countryCodeInput.value = '+91';

//       document.addEventListener('DOMContentLoaded', (event) => {
//     const popup = document.getElementById('termsPopup');
//     const agreeBtn = document.getElementById('agreeBtn');

//     // Check local storage for user's agreement
//     const userAgreed = localStorage.getItem('termsAgreed');

//     if (!userAgreed) {
//         // Show the popup if the user hasn't agreed yet
//         popup.style.display = 'block';
//     }

//     // Hide the popup and save agreement in local storage
//     agreeBtn.addEventListener('click', () => {
//         popup.style.display = 'none';
//         localStorage.setItem('termsAgreed', 'true');
//     });
// });