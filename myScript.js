const navigation = document.getElementById('mainNavigation')

navigation.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = e.target.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
    document.getElementById(blockID).style.backgroundColor = '#f0bc81'
    let timeOut = 0;
    switch (blockID) {
        case 'bio': {
            timeOut = 1000;
            break;
        }
        case 'skills':
        case 'education':
        case 'courses': {
            timeOut = 1500
            break;
        }
        case 'example':
        case 'lang':
        case 'contacts': {
            timeOut = 2000
            break;
        }
    }
    setTimeout(() => {
        document.getElementById(blockID).style.backgroundColor = '#fcfbf6'
    }, timeOut)
});