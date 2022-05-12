document.getElementById("button_envoyer").addEventListener("click", function () {       //Check des champs avant submit
    let a = 0;      //Nombre de zones obligatoire (9)

    // Supprime tous les messages d'erreur précédent
    // Travail en cours pour tout selectionner via leurs class commune .error
    document.getElementById('erreur_nom').innerHTML = "";
    document.getElementById('erreur_prénom').innerHTML = "";
    document.getElementById('erreur_sexe').innerHTML = "";
    document.getElementById('erreur_dtn').innerHTML = "";
    document.getElementById('erreur_cp').innerHTML = "";
    document.getElementById('erreur_mail').innerHTML = "";
    document.getElementById('erreur_sujet').innerHTML = "";
    document.getElementById('erreur_text').innerHTML = "";
    document.getElementById('erreur_checkbox').innerHTML = "";

    //Check nom
    let reg_nom = RegExp("^[A-Za-z]+$");
    if (reg_nom.test(document.getElementById("nom").value) == true) {
        a++;
    }
    else {
        document.getElementById('erreur_nom').innerHTML = "Votre nom doit au moins comporter 1 caractères qui ne soit ni un chiffre ni un espace.";
    }

    //Check prénom
    let reg_prenom = RegExp("^[A-Za-z]+$");
    if (reg_prenom.test(document.getElementById("prenom").value) == true) {
        a++;
    }
    else {
        document.getElementById('erreur_prénom').innerHTML = "Votre prénom doit au moins comporter 1 caratères qui ne soit ni un chiffre ni un espace.";
    }

    //Check sexe
    let sexe = document.getElementsByName("sexe");
    for (let i=0; i<sexe.length; i++) {
        if (sexe[i].checked) {
            sexe = sexe[i].value;
        }
    }
    if (sexe == "Féminin" || sexe == "Masculin") {
        a++;
    }
    else {
        document.getElementById('erreur_sexe').innerHTML = "Veuillez choisir un sexe.";
    }

    //Check date de naissance
    let dtn = document.getElementById("dtn").value;
    let dtn_year = new Date(dtn).getFullYear();
    let year = new Date().getFullYear();
    let reg_dtn = RegExp("^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$");
    if (dtn_year > year - 120 && dtn_year <= year && reg_dtn.test(dtn) == true) {
        a++;  
    }
    else {
        document.getElementById('erreur_dtn').innerHTML = "Date de naissance invalide.";
    }

    //Check code postal
    let reg_cp = RegExp("^[0-9]{5}$");
    if (reg_cp.test(document.getElementById("cp").value) == true) {
        a++;
    }
    else {
        document.getElementById('erreur_cp').innerHTML = "Votre code postal doit être composé de 5 chiffres.";
    }

    //Check email
    let reg_email = RegExp("^[a-z0-9.-]+@[a-z0-9.-]{2}.[a-z]{2}$");
    if (reg_email.test(document.getElementById("email").value) == true) {
        a++;
    }
    else {
        document.getElementById('erreur_mail').innerHTML = "Adresse e-mail invalide.";
    }

    //Check sujet
    if (document.getElementById("sujet").value != "") {
        a++
    }
    else {
        document.getElementById('erreur_sujet').innerHTML = "Veuillez choisir un sujet.";
    }                                                                

    //Check question
    if (document.getElementById("question").value !="") {
        a++;
    }
    else {
        document.getElementById('erreur_text').innerHTML = "Veuillez saisir votre question.";
    }                                                         

    //Check traitement informatique
    if (document.getElementById('checkbox').checked) {
        a++;
    } 
    else {
        document.getElementById('erreur_checkbox').innerHTML = "Veuillez accepter le traitement informatique de ce formulaire.";
    }
    //Submit
    if (a ==9) {
        document.forms[0].submit();
    }
});