function verificationDeInput() {
    const btn = document.getElementById("btn");

    const nom = document.getElementById("nomID");
    const prenom = document.getElementById("prenomID");
    const email = document.getElementById("emailID");
    const tel = document.getElementById("nbPortablelID");
    const codePostal = document.getElementById("codePostal");
    const message = document.getElementById("messages");

    btn.addEventListener("click", function (e) {
        let isValid = true;

        const emailRegex = /^([a-zA-Z0-9.-_]+)@([a-z0-9]+).([a-z]{2,3})$/;
        const telRegex = /^((04)|\+324)([0-9]){8}$/;
        const postRegex = /^[0-9]{4}$/;
        const messageRegex = /^([a-zA-Z0-9 \+ \/ -])+$/;

        
        if (nom.value.trim() === "") {
            nom.value = "";
            nom.placeholder = "Nom est vide";
            nom.style.borderColor = "red";
            nom.style.color = "red";
            isValid = false;
        } else {
            nom.style.borderColor = "";
            nom.style.color = "";
            nom.placeholder = "";
        }

        
        if (prenom.value.trim() === "") {
            prenom.value = "";
            prenom.placeholder = "Prénom est vide";
            prenom.style.borderColor = "red";
            prenom.style.color = "red";
            isValid = false;
        } else {
            prenom.style.borderColor = "";
            prenom.style.color = "";
            prenom.placeholder = "";
        }

        if (!emailRegex.test(email.value.trim())) {
            email.value = "";
            email.placeholder = "Email invalide";
            email.style.borderColor = "red";
            email.style.color = "red";
            isValid = false;
        } else {
            email.style.borderColor = "";
            email.style.color = "";
            email.placeholder = "";
        }

        if (!telRegex.test(tel.value.trim())) {
            tel.value = "";
            tel.placeholder = "Téléphone invalide";
            tel.style.borderColor = "red";
            tel.style.color = "red";
            isValid = false;
        } else {
            tel.style.borderColor = "";
            tel.style.color = "";
            tel.placeholder = "";
        }

        if (!postRegex.test(codePostal.value.trim())) {
            codePostal.value = "";
            codePostal.placeholder = "Code postal invalide";
            codePostal.style.borderColor = "red";
            codePostal.style.color = "red";
            isValid = false;
        } else {
            codePostal.style.borderColor = "";
            codePostal.style.color = "";
            codePostal.placeholder = "";
        }

        if (!messageRegex.test(message.value.trim())) {
            message.value = "";
            message.placeholder = "Message invalide";
            message.style.borderColor = "red";
            message.style.color = "red";
            isValid = false;
        } else {
            message.style.borderColor = "";
            message.style.color = "";
            message.placeholder = "";
        }

        if (!isValid) {
            e.preventDefault();
        }
    });
}

verificationDeInput();
