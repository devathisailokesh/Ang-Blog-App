let form2 = document.getElementById('form2')
    form2.addEventListener('submit',async(e)=>{
        e.preventDefault()
        let formdata = new FormData(form2)
            const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'cef9f6c349mshc2386a7a02cd43ap1dc8fcjsn73cdd13ce229',
                'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
            },
            body: formdata
        };

        fetch('https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
});