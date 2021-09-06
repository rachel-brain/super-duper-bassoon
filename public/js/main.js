goToProfile = async function() {
    location.replace('/profile');
    console.log('thisisworking');
}

renderAbout = async function() {
    location.replace('/about');
}

logoutHandler = async function() {
    const response = await fetch('/api/homepageR/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });

    if(response.ok) {
        location.replace('/');
    }else {
        alert(response.statusText);
    }
}