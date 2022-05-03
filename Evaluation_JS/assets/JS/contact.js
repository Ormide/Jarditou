document.getElementById("button_envoyer").addEventListener("click", function () {   //Check des champs avant submit
    a = 0;      //Nombre de zones obligatoire (9)

    reg_nom = RegExp("^[A-Za-z]+$");    //Check nom
    résultat = reg_nom.test(document.getElementById("nom").value);
    if (résultat == true) {
        a++;
    }
    else alert("Votre nom doit au moins comporter 1 caractères qui ne soit ni un chiffre ni un espace.")

    reg_prenom = RegExp("^[A-Za-z]+$");     //Check prénom
    résultat = reg_prenom.test(document.getElementById("prenom").value);
    if (résultat == true) {
        a++;
    }
    else alert("Votre prénom doit au moins comporter 1 caratères qui ne soit ni un chiffre ni un espace.")

    sexe = document.getElementsByName("sexe");      //Check sexe
    for (i=0; i<sexe.length; i++) {
        if (sexe[i].checked) {
            sexe = sexe[i].value;
        }
    }
    if (sexe == "Féminin" || sexe == "Masculin") {
        a++;
    }
    else alert("Veuillez choisir un sexe.")

    reg_dtn = RegExp("^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$");       //Check date de naissance
    résultat = reg_dtn.test(document.getElementById("dtn").value);
    if (résultat == true) {
        a++;        
    }
    else alert("Date de naissance invalide.")

    reg_cp = RegExp("^[0-9]{5}$");        //Check code postal
    résultat = reg_cp.test(document.getElementById("cp").value);
    if (résultat == false) {
        alert("Votre code postal doit être composé de 5 chiffres.");
    }
    else a++

    reg_email = RegExp("^[a-z0-9.-]+@[a-z0-9.-]{2}.[a-z]{2}$");       //Check email
    résultat = reg_email.test(document.getElementById("email").value);
    if (résultat == true) {
        a++;
    }
    else alert("Adresse e-mail invalide.")   

    if (document.getElementById("sujet").value != "") {     //Check sujet
        a++
    }
    else alert("Veuillez choisir un sujet.")                                                                    

    if (document.getElementById("question").value !="") {       //Check question
        a++;
    }
    else alert("Veuillez saisir votre question.")                                                             

    if (document.getElementById('checkbox').checked) {       //Check traitement informatique
        a++;
    } 
    else alert("Veuillez accepter le traitement informatique de ce formulaire.")

    if (a ==9) {        //Submit
        document.forms[0].submit();
    }
});