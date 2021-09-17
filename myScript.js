const navigation = document.getElementById('mainNavigation')

navigation.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = e.target.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
});