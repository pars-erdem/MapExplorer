const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");

const ALLOWED_CITIES =["adana_siyasi", "adana_nufusu", "adana_fiziki", "adana_karayollari", "adiyaman_siyasi", "adiyaman_nufusu", "adiyaman_fiziki", "adiyaman_karayollari", "afyonkarahisar_siyasi", "afyonkarahisar_nufusu", "afyonkarahisar_fiziki", "afyonkarahisar_karayollari", "agri_siyasi", "agri_nufusu", "agri_fiziki", "agri_karayollari", "aksaray_siyasi", "aksaray_nufusu", "aksaray_fiziki", "aksaray_karayollari", "amasya_siyasi", "amasya_nufusu", "amasya_fiziki", "amasya_karayollari", "ankara_siyasi", "ankara_nufusu", "ankara_fiziki", "ankara_karayollari", "antalya_siyasi", "antalya_nufusu", "antalya_fiziki", "antalya_karayollari", "ardahan_siyasi", "ardahan_nufusu", "ardahan_fiziki", "ardahan_karayollari", "artvin_siyasi", "artvin_nufusu", "artvin_fiziki", "artvin_karayollari", "aydin_siyasi", "aydin_nufusu", "aydin_fiziki", "aydin_karayollari", "balikesir_siyasi", "balikesir_nufusu", "balikesir_fiziki", "balikesir_karayollari", "bartin_siyasi", "bartin_nufusu", "bartin_fiziki", "bartin_karayollari", "batman_siyasi", "batman_nufusu", "batman_fiziki", "batman_karayollari", "bayburt_siyasi", "bayburt_nufusu", "bayburt_fiziki", "bayburt_karayollari", "bilecik_siyasi", "bilecik_nufusu", "bilecik_fiziki", "bilecik_karayollari", "bingol_siyasi", "bingol_nufusu", "bingol_fiziki", "bingol_karayollari", "bitlis_siyasi", "bitlis_nufusu", "bitlis_fiziki", "bitlis_karayollari", "bolu_siyasi", "bolu_nufusu", "bolu_fiziki", "bolu_karayollari", "burdur_siyasi", "burdur_nufusu", "burdur_fiziki", "burdur_karayollari", "bursa_siyasi", "bursa_nufusu", "bursa_fiziki", "bursa_karayollari", "canakkale_siyasi", "canakkale_nufusu", "canakkale_fiziki", "canakkale_karayollari", "cankiri_siyasi", "cankiri_nufusu", "cankiri_fiziki", "cankiri_karayollari", "corum_siyasi", "corum_nufusu", "corum_fiziki", "corum_karayollari", "denizli_siyasi", "denizli_nufusu", "denizli_fiziki", "denizli_karayollari", "diyarbakir_siyasi", "diyarbakir_nufusu", "diyarbakir_fiziki", "diyarbakir_karayollari", "duzce_siyasi", "duzce_nufusu", "duzce_fiziki", "duzce_karayollari", "edirne_siyasi", "edirne_nufusu", "edirne_fiziki", "edirne_karayollari", "elazig_siyasi", "elazig_nufusu", "elazig_fiziki", "elazig_karayollari", "erzincan_siyasi", "erzincan_nufusu", "erzincan_fiziki", "erzincan_karayollari", "erzurum_siyasi", "erzurum_nufusu", "erzurum_fiziki", "erzurum_karayollari", "eskisehir_siyasi", "eskisehir_nufusu", "eskisehir_fiziki", "eskisehir_karayollari", "gaziantep_siyasi", "gaziantep_nufusu", "gaziantep_fiziki", "gaziantep_karayollari", "giresun_siyasi", "giresun_nufusu", "giresun_fiziki", "giresun_karayollari", "gumushane_siyasi", "gumushane_nufusu", "gumushane_fiziki", "gumushane_karayollari", "hakkari_siyasi", "hakkari_nufusu", "hakkari_fiziki", "hakkari_karayollari", "hatay_siyasi", "hatay_nufusu", "hatay_fiziki", "hatay_karayollari", "igdir_siyasi", "igdir_nufusu", "igdir_fiziki", "igdir_karayollari", "isparta_siyasi", "isparta_nufusu", "isparta_fiziki", "isparta_karayollari", "istanbul_siyasi", "istanbul_nufusu", "istanbul_fiziki", "istanbul_karayollari", "izmir_siyasi", "izmir_nufusu", "izmir_fiziki", "izmir_karayollari", "kahramanmaras_siyasi", "kahramanmaras_nufusu", "kahramanmaras_fiziki", "kahramanmaras_karayollari", "karabuk_siyasi", "karabuk_nufusu", "karabuk_fiziki", "karabuk_karayollari", "karaman_siyasi", "karaman_nufusu", "karaman_fiziki", "karaman_karayollari", "kars_siyasi", "kars_nufusu", "kars_fiziki", "kars_karayollari", "kastamonu_siyasi", "kastamonu_nufusu", "kastamonu_fiziki", "kastamonu_karayollari", "kayseri_siyasi", "kayseri_nufusu", "kayseri_fiziki", "kayseri_karayollari", "kilis_siyasi", "kilis_nufusu", "kilis_fiziki", "kilis_karayollari", "kirikkale_siyasi", "kirikkale_nufusu", "kirikkale_fiziki", "kirikkale_karayollari", "kirklareli_siyasi", "kirklareli_nufusu", "kirklareli_fiziki", "kirklareli_karayollari", "kirsehir_siyasi", "kirsehir_nufusu", "kirsehir_fiziki", "kirsehir_karayollari", "kocaeli_siyasi", "kocaeli_nufusu", "kocaeli_fiziki", "kocaeli_karayollari", "konya_siyasi", "konya_nufusu", "konya_fiziki", "konya_karayollari", "kutahya_siyasi", "kutahya_nufusu", "kutahya_fiziki", "kutahya_karayollari", "malatya_siyasi", "malatya_nufusu", "malatya_fiziki", "malatya_karayollari", "manisa_siyasi", "manisa_nufusu", "manisa_fiziki", "manisa_karayollari", "mardin_siyasi", "mardin_nufusu", "mardin_fiziki", "mardin_karayollari", "mersin_siyasi", "mersin_nufusu", "mersin_fiziki", "mersin_karayollari", "mugla_siyasi", "mugla_nufusu", "mugla_fiziki", "mugla_karayollari", "mus_siyasi", "mus_nufusu", "mus_fiziki", "mus_karayollari", "nevsehir_siyasi", "nevsehir_nufusu", "nevsehir_fiziki", "nevsehir_karayollari", "nigde_siyasi", "nigde_nufusu", "nigde_fiziki", "nigde_karayollari", "ordu_siyasi", "ordu_nufusu", "ordu_fiziki", "ordu_karayollari", "osmaniye_siyasi", "osmaniye_nufusu", "osmaniye_fiziki", "osmaniye_karayollari", "rize_siyasi", "rize_nufusu", "rize_fiziki", "rize_karayollari", "sakarya_siyasi", "sakarya_nufusu", "sakarya_fiziki", "sakarya_karayollari", "samsun_siyasi", "samsun_nufusu", "samsun_fiziki", "samsun_karayollari", "sanliurfa_siyasi", "sanliurfa_nufusu", "sanliurfa_fiziki", "sanliurfa_karayollari", "siirt_siyasi", "siirt_nufusu", "siirt_fiziki", "siirt_karayollari", "sinop_siyasi", "sinop_nufusu", "sinop_fiziki", "sinop_karayollari", "sirnak_siyasi", "sirnak_nufusu", "sirnak_fiziki", "sirnak_karayollari", "sivas_siyasi", "sivas_nufusu", "sivas_fiziki", "sivas_karayollari", "tekirdag_siyasi", "tekirdag_nufusu", "tekirdag_fiziki", "tekirdag_karayollari", "tokat_siyasi", "tokat_nufusu", "tokat_fiziki", "tokat_karayollari", "trabzon_siyasi", "trabzon_nufusu", "trabzon_fiziki", "trabzon_karayollari", "tunceli_siyasi", "tunceli_nufusu", "tunceli_fiziki", "tunceli_karayollari", "usak_siyasi", "usak_nufusu", "usak_fiziki", "usak_karayollari", "van_siyasi", "van_nufusu", "van_fiziki", "van_karayollari", "yalova_siyasi", "yalova_nufusu", "yalova_fiziki", "yalova_karayollari", "yozgat_siyasi", "yozgat_nufusu", "yozgat_fiziki", "yozgat_karayollari", "zonguldak_siyasi", "zonguldak_nufusu", "zonguldak_fiziki", "zonguldak_karayollari"]


function checkCityValidity(city) {
    return ALLOWED_CITIES.includes(city);
}

inputBox.addEventListener('input', (e) => {
    let userData = e.target.value.trim();

    if (userData) {
        // Diğer işlemler devam eder...
        let emptyArray = ALLOWED_CITIES.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        showSuggestions(emptyArray);
        searchWrapper.classList.add("active");
    } else {
        searchWrapper.classList.remove("active");
    }
});

function showSuggestions(list) {
    let listData = '';
    if (list.length === 0) {
        listData = `<li>No suggestions available</li>`;
    } else {
        listData = list.map(data => `<li>${data}</li>`).join('');
    }
    suggBox.innerHTML = listData;

    suggBox.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            let selectedCity = item.textContent;
            if (checkCityValidity(selectedCity)) {
                let webLink = `/${selectedCity}`;
                window.location.href = webLink;
            }
        });
    });
}
