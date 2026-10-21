// Translations for elements marked with data-i18n="key" (innerHTML) or data-i18n-<attr>="key".
// Portuguese is the text already in the HTML; this file only holds English (UK).
//
// Language: choice saved from the footer switch > visitor's country by IP > timezone guess.
// Portugal and Portuguese-speaking countries get PT, everyone else EN.
(function () {
    const EN = {
        // ---------- Shared ----------
        'nav.mission': 'Our mission',
        'nav.trainees': 'For trainees',
        'nav.specialists': 'For specialists',
        'nav.features': 'Features',
        'footer.privacy': 'Privacy Policy',
        'footer.rights': '&copy; 2026 ScalpelAid. All rights reserved.',

        // ---------- index.html ----------
        'meta.title': 'ScalpelAid - Surgical management without complications',
        'meta.description': 'Log your surgeries quickly and easily. Surgical CV, statistics and Excel export, for trainees and specialists. Available for iOS and Android.',
        'hero.title1': 'Surgical management',
        'hero.title2': 'without complications.',
        'hero.lead': 'ScalpelAid was created to simplify how you manage your surgical CV, making logging your procedures practical, fast and intuitive.',
        'hero.note': 'The essential tool for your day-to-day life as a surgeon, helping you make the most of your time with personal statistics just a click away.',
        'trainees.title': 'Detailed records, <br> <span class="text-pill2-text">without wasting time.</span>',
        'trainees.p1': 'We know your surgical training is full of daily challenges that demand a great deal of balance and personal organisation. Logging your procedures is crucial for an accurate assessment of your CV, but with such a heavy workload it is a task that often gets pushed aside.',
        'trainees.p2': 'By logging your surgeries in <strong class="text-navy">ScalpelAid</strong>, you can easily review your case log, keep full control of your goals and targets, and make the most of your time.',
        'specialists.title': 'Surgical history <br> <span class="text-blue">always up to date.</span>',
        'specialists.p1': 'We understand that, even as a specialist, you need an up-to-date record of your surgical procedures.',
        'specialists.p2': 'By logging your surgeries, you can easily review your history, check your case log and keep full control of your records through clear, instant visual insights.',
        'features.title': 'Everything you need, <br> <span class="shimmer-text">in one place.</span>',
        'features.lead': 'Beyond logging your surgeries, ScalpelAid supports you every day with tools designed to organise, share and analyse your surgical activity.',
        'features.calendar.title': 'Calendar',
        'features.calendar.text': 'See your surgeries day by day in the Calendar. Days with procedures are marked, and a single tap lets you review what you did.',
        'features.export.title': 'Surgery import and export',
        'features.export.text': 'Export each year\'s log to Excel, ready to attach to your CV. You can also add surgeries you performed in the past, without having to enter them one by one.',
        'features.stats.title': 'Advanced Statistics',
        'features.stats.text': 'Clear charts of your case log: your role as lead surgeon or assistant, your progress over the years and the full history of your surgeries.',
        'cta.title': 'The boost your <br class="hidden sm:block"> <span class="shimmer-text">CV needs.</span>',
        'cta.text': 'Join the surgeons already managing their case logs efficiently. Available for iOS and Android.',
        'img.training': 'Surgical training',

        // App mockups
        'ui.hello': 'Hello Dr. Ana',
        'ui.newSurgery': 'New Surgery',
        'ui.weeklySummary': 'Weekly Summary',
        'ui.yearSummary': 'Year Summary - 2026',
        'ui.minorSummary': 'Minor Surgery - 2026',
        'ui.surgeries': 'Surgeries',
        'ui.minorSurgery': 'Minor surgery',
        'ui.minorSurgeries': 'Minor Surgery',
        'ui.lead': 'Lead',
        'ui.assistant': 'Assistant',
        'ui.leadLabel': 'Lead:',
        'ui.assistantLabel': 'Assistant:',
        'ui.weeklyChange': 'Weekly change',
        'ui.totalSurgeries': 'Total Surgeries',
        'ui.weeklyAverage': 'Weekly Average',
        'ui.perWeek': ' /surgeries',
        'ui.surgeon': 'Surgeon',
        'ui.theatre': 'Theatre',
        'ui.setting': 'Setting',
        'ui.sex': 'Sex',
        'ui.mainLabel': 'Main:',
        'ui.dayCaseLabel': 'Day case:',
        'ui.electiveLabel': 'Elective:',
        'ui.emergencyLabel': 'Emergency:',
        'ui.maleLabel': 'Male:',
        'ui.femaleLabel': 'Female:',
        'ui.calendar': 'Calendar',
        'ui.account': 'Account',
        'ui.currentProgress': 'Current Progress',
        'ui.targets': 'Targets by Procedure',
        'ui.mySurgeries': 'My Surgeries',
        'ui.october2026': 'October 2026',
        'ui.weekdays': '<span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>',
        'ui.exportSurgeries': 'Export Surgeries',
        'ui.selectYear': 'Select the year you want to export',
        'ui.export': 'Export',
        'ui.exportFile': 'export_2026.xlsx',
        'ui.exportSheets': 'Surgeries · Minor Surgery',
        'ui.editPast': 'Edit Past Surgeries',
        'ui.history': 'Surgery History',
        'ui.year2026': 'Year 2026',
        'ui.year2025': 'Year 2025',
        'proc.cholecystectomy': 'Cholecystectomy',
        'proc.cholecystectomies': 'Cholecystectomies',
        'proc.hernias': 'Hernia Repairs',
        'proc.appendicectomies': 'Appendicectomies',
        'proc.anal': 'Anal / Perianal Surgery',
        'proc.rightHemicolectomy': 'Right hemicolectomy',
        'proc.thyroidectomy': 'Total thyroidectomy',
        'patient.f54': 'Female - 54 years',
        'patient.f45': 'Female - 45 years',
        'patient.m67': 'Male - 67 years',
        'patient.m32': 'Male - 32 years',
        'month.may': 'May',
        'month.aug': 'Aug',
        'month.sep': 'Sep',
        'month.oct': 'Oct',

        // ---------- privacy.html ----------
        'pp.meta.title': 'Privacy Policy — ScalpelAid',
        'pp.meta.description': 'ScalpelAid Privacy Policy. Find out how we handle your personal data transparently and securely.',
        'pp.title1': 'Privacy',
        'pp.title2': 'Policy',
        'pp.updated': 'Last updated: 26 March 2026',
        'pp.intro': 'We developed the <strong class="text-navy">ScalpelAid</strong> app as a productivity tool for trainee and specialist doctors to organise surgical procedures and manage their professional CV. This Privacy Policy describes transparently what data is processed, how it is used and what rights users have.',
        'pp.important': '<span class="alert-label">⚠ Important</span> ScalpelAid <strong>is not a health or clinical diagnosis app</strong>. It does not collect or process patients\' clinical data. It is intended exclusively for the professional and CV organisation of the doctor as the user.',

        'pp.s1.title': '1. Data Controller',
        'pp.s1.p': '<strong>ScalpelAid</strong><br> Website: <a href="https://scalpelaid.pt">https://scalpelaid.pt</a><br> Contact: <a href="mailto:geral@scalpelaid.pt">geral@scalpelaid.pt</a>',

        'pp.s2.title': '2. Data We Collect and Process',
        'pp.s2.p1': 'ScalpelAid was designed around the principle of <strong>data minimisation</strong>. All data entered by the user is stored exclusively on the device (local SQLite storage) and is not sent to any external server.',
        'pp.s2.h1': '2.1 Profile Data (entered by the user)',
        'pp.s2.th1': 'Data',
        'pp.s2.th2': 'Purpose',
        'pp.s2.td1': 'Name',
        'pp.s2.td2': 'Identifying the local profile',
        'pp.s2.td3': 'Hospital(s) where you work',
        'pp.s2.td4': 'CV context',
        'pp.s2.td5': 'Surgical specialty',
        'pp.s2.td6': 'Filtering and organising surgeries',
        'pp.s2.td7': 'Type of doctor (Trainee / Specialist)',
        'pp.s2.td8': 'Personalising features',
        'pp.s2.td9': 'Training year or professional grade',
        'pp.s2.td10': 'CV organisation',
        'pp.s2.h2': '2.2 Surgery Data (entered by the user)',
        'pp.s2.p2': 'Users can log surgeries with information such as: date, type of procedure, role performed (operator, assistant, etc.), comorbidities, complications (Clavien-Dindo classification), subgroup and free-text notes.',
        'pp.s2.note': '<span class="alert-label">📝 Note</span> <strong>None of this data identifies patients.</strong> Records are focused on the doctor\'s career path, with no patient-identifying fields of any kind.',
        'pp.s2.h3': '2.3 Technical Device Data',
        'pp.s2.p3': 'The app may access internal device identifiers (such as an automatically generated local user ID) solely to keep the session active on the device. These identifiers <strong>never leave the device</strong>.',

        'pp.s3.title': '3. How We Use the Data',
        'pp.s3.p1': 'The data collected is used solely to:',
        'pp.s3.li1': '<strong>Display and organise</strong> the user\'s surgery log in the app;',
        'pp.s3.li2': '<strong>Personalise</strong> the experience based on the user\'s professional profile;',
        'pp.s3.li3': '<strong>Enable the export</strong> of the surgery log as a file, at the user\'s own initiative;',
        'pp.s3.li4': '<strong>Calculate CV statistics</strong> locally on the device (e.g. totals per type of surgery).',
        'pp.s3.p2': '<strong>We do not use the data for advertising, marketing, behavioural analysis or training artificial intelligence models.</strong>',

        'pp.s4.title': '4. Sharing Data with Third Parties',
        'pp.s4.p1': 'ScalpelAid <strong>does not share, sell, rent or transmit</strong> user data to third parties.',
        'pp.s4.p2': 'We do not integrate third-party analytics services (e.g. Google Analytics, Firebase Analytics), advertising services or social networks that could access your data.',

        'pp.s5.title': '5. Storage and Security',
        'pp.s5.li1': 'All data is stored <strong>locally on the device</strong> in an SQLite database.',
        'pp.s5.li2': 'There is no server or remote database associated with the app in the current version.',
        'pp.s5.li3': 'Data security depends on the protections of the Android operating system itself (device encryption, PIN/biometric protection, etc.).',
        'pp.s5.li4': 'If the device is lost, stolen or destroyed, the app\'s data cannot be recovered by ScalpelAid, as it is not stored in the cloud.',
        'pp.s5.tip': '<span class="alert-label">💡 Tip</span> We recommend that users enable device encryption and use a secure unlock method to protect their data.',

        'pp.s6.title': '6. Export Feature',
        'pp.s6.p': 'The app allows users to <strong>export their surgery data</strong> to a file on the device. This operation is entirely controlled by the user. ScalpelAid does not receive, access or store any copy of the exported files.',

        'pp.s7.title': '7. Data Deletion',
        'pp.s7.p1': 'Users can <strong>delete all their data</strong> at any time via Settings → "Delete Account". This action is irreversible and permanently deletes all profile data and surgery records stored on the device.',
        'pp.s7.p2': 'Uninstalling the app also deletes all local data.',

        'pp.s8.title': '8. Data of Minors',
        'pp.s8.p': 'ScalpelAid is intended exclusively for medical professionals and students aged 18 or over. We do not knowingly collect data from minors. If you become aware that a minor has used the app, please contact us at the address given in section 1.',

        'pp.s9.title': '9. User Rights',
        'pp.s9.p1': 'Under the General Data Protection Regulation (GDPR — Regulation (EU) 2016/679), users have the following rights:',
        'pp.s9.li1': '<strong>Right of access</strong> — view the data stored by the app (visible directly in the app);',
        'pp.s9.li2': '<strong>Right to rectification</strong> — correct inaccurate data using the "Edit Profile" feature;',
        'pp.s9.li3': '<strong>Right to erasure</strong> — delete all data using the "Delete Account" feature;',
        'pp.s9.li4': '<strong>Right to data portability</strong> — export your data using the export feature;',
        'pp.s9.li5': '<strong>Right to object</strong> — since data is not processed for marketing purposes, this right applies by default.',
        'pp.s9.p2': 'To exercise any of these rights or if you have any questions, contact us at <a href="mailto:geral@scalpelaid.pt">geral@scalpelaid.pt</a>.',

        'pp.s10.title': '10. Device Permissions',
        'pp.s10.p1': 'The app may request the following permissions:',
        'pp.s10.th1': 'Permission',
        'pp.s10.th2': 'Reason',
        'pp.s10.td1': 'Storage (read/write)',
        'pp.s10.td2': 'Required to export surgery files to the device',
        'pp.s10.p2': 'We do not request camera, microphone, location or contacts permissions, or any other permission not listed above.',

        'pp.s11.title': '11. Changes to This Policy',
        'pp.s11.p1': 'We reserve the right to update this Privacy Policy. In the event of material changes, we will notify users through an in-app notification or by updating this page. The "Last updated" date at the top of this document will always be kept current.',
        'pp.s11.p2': 'We recommend that users review this policy periodically.',

        'pp.s12.title': '12. Governing Law',
        'pp.s12.p': 'This policy is governed by Portuguese law and the General Data Protection Regulation (GDPR). In the event of a dispute, users may lodge a complaint with the Portuguese data protection authority, the <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong>, at <a href="https://www.cnpd.pt" target="_blank" rel="noopener">https://www.cnpd.pt</a>.',

        'pp.s13.title': '13. Contact',
        'pp.s13.p': 'For any questions about this Privacy Policy:',
    };

    // Portugal and Portuguese-speaking countries (CPLP + Macau)
    const PT_COUNTRIES = ['PT', 'BR', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'MO'];
    const PT_TIMEZONES = /^(Europe\/Lisbon|Atlantic\/(Azores|Madeira|Cape_Verde)|Africa\/(Luanda|Maputo|Bissau|Sao_Tome)|Asia\/(Dili|Macau)|America\/(Sao_Paulo|Bahia|Fortaleza|Recife|Belem|Maceio|Araguaina|Santarem|Noronha|Manaus|Cuiaba|Campo_Grande|Porto_Velho|Boa_Vista|Rio_Branco|Eirunepe))$/;
    const ATTRS = ['alt', 'content'];

    // Storage can throw (private mode, blocked cookies)
    function load(storage, key) {
        try { return window[storage].getItem(key); } catch (e) { return null; }
    }
    function save(storage, key, value) {
        try { window[storage].setItem(key, value); } catch (e) { }
    }

    function timezoneLang() {
        let tz = '';
        try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { }
        return PT_TIMEZONES.test(tz) ? 'pt' : 'en';
    }

    const root = document.documentElement;
    let lang = load('localStorage', 'lang') || load('sessionStorage', 'geoLang') || timezoneLang();
    root.lang = lang === 'en' ? 'en-GB' : 'pt-PT';

    // Portuguese originals, captured the first time an element is translated
    const originals = new WeakMap();
    function original(el, name, value) {
        let saved = originals.get(el);
        if (!saved) originals.set(el, saved = {});
        if (!(name in saved)) saved[name] = value;
        return saved[name];
    }

    function apply() {
        root.lang = lang === 'en' ? 'en-GB' : 'pt-PT';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const pt = original(el, 'html', el.innerHTML);
            const next = (lang === 'en' && EN[el.dataset.i18n]) || pt;
            if (el.innerHTML !== next) el.innerHTML = next;
        });
        ATTRS.forEach(attr => document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => {
            const pt = original(el, attr, el.getAttribute(attr));
            el.setAttribute(attr, (lang === 'en' && EN[el.getAttribute(`data-i18n-${attr}`)]) || pt);
        }));
        document.querySelectorAll('button[data-lang]').forEach(btn => {
            btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
        });
        document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    }

    function setLang(next) {
        if (next === lang) return;
        lang = next;
        apply();
    }

    // Country by IP; tries the next service when one fails or is blocked (api.country.is is on EasyPrivacy)
    const GEO_APIS = ['https://api.country.is/', 'https://get.geojs.io/v1/ip/country.json'];
    function fetchCountry(urls) {
        if (!urls.length) return Promise.reject(new Error('No geolocation service available'));
        return fetch(urls[0], { signal: AbortSignal.timeout(4000), referrerPolicy: 'no-referrer' })
            .then(res => res.json())
            .then(({ country }) => country || Promise.reject(new Error('No country in response')))
            .catch(() => fetchCountry(urls.slice(1)));
    }

    // Ask for the visitor's country once per session, unless they already picked a language
    function detectCountry() {
        if (load('localStorage', 'lang') || load('sessionStorage', 'geoLang')) return;
        fetchCountry(GEO_APIS)
            .then(country => {
                const geoLang = PT_COUNTRIES.includes(country) ? 'pt' : 'en';
                save('sessionStorage', 'geoLang', geoLang);
                if (!load('localStorage', 'lang')) setLang(geoLang);
            })
            .catch(() => { });
    }

    // Hide the page until English is applied, so Portuguese never flashes
    if (lang === 'en') root.style.visibility = 'hidden';
    document.addEventListener('DOMContentLoaded', () => {
        try {
            apply();
        } finally {
            root.style.visibility = '';
        }
        detectCountry();
    });

    // Footer switch
    document.addEventListener('click', e => {
        const btn = e.target.closest('button[data-lang]');
        if (!btn) return;
        save('localStorage', 'lang', btn.dataset.lang);
        setLang(btn.dataset.lang);
    });

    window.i18n = {
        get lang() { return lang; },
    };
})();
