window.onload = function() {
    document.querySelector("#button_bring").onclick = async function(e) {
        e.preventDefault()

        try {
            const dbData = await fetch("http://127.0.0.1:3000/api/helloWorld", {
                method: "get",
                url: "http://localhost:3000",
            }) //fetch("http://localhost:3000/")
            //console.log(dbData)
            const message = await dbData.json()
            document.querySelector("#db").innerHTML = JSON.stringify(message)

        } catch(err) {
            console.error(err.message)
        }
    }

    document.querySelector("#button_post").onclick = async function(e) {
        e.preventDefault()

        try {
            console.log("clicked")
            // const token = getTokenFromUser()
            // const price = getPrice(token)
            const token = "bitcoin"
            const price = 15000

            const url = "http://127.0.0.1:3000/api/price"
            // var xhr = new XMLHttpRequest();
            // xhr.open("POST", url, true);
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            // xhr.send(JSON.stringify({
            //     token,
            //     price
            // }));
            const dbDataResponse = await fetch(url, {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token,
                    price,

                })

            }) 

            const dbDataJson = await dbDataResponse.json()
            
            // fetch("http://localhost:3000/")
            // // console.log(dbData)
            // const message = await dbData.json()
            document.querySelector("#db2").innerHTML = dbDataJson.price
            
        } catch(err) {
            console.error(err.message)
        }
    }
}