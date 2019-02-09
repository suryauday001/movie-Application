export function userlogin(action, UserData) {
    let BaseUrl = "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=d69d7ea6f792347ca3760283324b6600";
    return new Promise((resolve, reject) => {
        fetch(BaseUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UserData)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
