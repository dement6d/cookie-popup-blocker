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
        return 0;
    }
})

if (document.URL.includes("soundcloud.com")) {
    setTimeout(() => {
        const popup = document.querySelector('#onetrust-consent-sdk');
        if (popup) popup.remove();
        return 0;
    }, 1000)
}