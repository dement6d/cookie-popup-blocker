const stackoverflow = [
    "stackexchange.com",
    "serverfault.com",
    "stackoverflow.com",
    "askubuntu.com",
    "superuser.com"
]
stackoverflow.forEach((site) => {
    if (document.URL.includes(site)) {
        const popup = document.querySelector('.ff-sans.ps-fixed.z-nav-fixed');
        if (popup) popup.remove();
        return;
    }
})

setTimeout(() => {
    const popupA = document.querySelector('#onetrust-consent-sdk');
    popupA && popupA.remove();

    const popupB = document.querySelector('div[aria-describedby="cookieconsent:desc"]');
    popupB && popupB.remove()

    const popupC = document.querySelector('.cookie-policy');
    popupC && popupC.remove();

    const popupD = document.querySelector('.cookie-consent');
    popupD && popupD.remove();
}, 1000)