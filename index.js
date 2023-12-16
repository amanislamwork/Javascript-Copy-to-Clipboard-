function copyToclipBoard() {
    let textToCopy = document.getElementById('box').innerText
    let currentIcon = document.getElementById('copyIcon')
    let currentIconclass = currentIcon.className;

    navigator.clipboard.writeText(textToCopy).then(function () {
        currentIcon.className = "bi bi-file-check-fill";

        setTimeout( () => {
            currentIcon.className = currentIconclass;
        },1500
        )
    })
        .catch(function (err) {
            alert("error in copying text")
            console.error('Could not copy text: ', err);
        });

}

/* 
Note : 
 then : when a promise is successful, you can then use the resolved data. 
 catch : when a promise fails, you catch the error, 
 and do something with the error information.
*/