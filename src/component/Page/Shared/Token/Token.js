
export const authToken = (user) => {
    const currentUser = {
        email: user.email
    }

    console.log(currentUser);

    // get jwt token
    fetch('https://chef-steps-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem('chef-steps-token', data.token);
        });
}