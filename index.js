


function submitData(userName,userEmail) {
    const data = {
        name: userName,
        email: userEmail
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        body: JSON.stringify(data)

    };
    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(response => document.body.append(response.id))
        .catch(error => document.body.append(error.message))
    
};

