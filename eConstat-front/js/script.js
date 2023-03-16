const utilisateur1 = {nom:"NOMA", prenom:"PrenomA", email:"premiermail@gmail.com", tel:"0123456789", codePostal:"45100", adresse:"7, allée des jardins", pays:"France", dateNaissance:new Date("1998-12-31")};
const utilisateur2 = {nom:"NOMB", prenom:"PrenomB", email:"deuxiememail@gmail.com", tel:"0123456789", codePostal:"45100", adresse:"5, allée des jardins", pays:"France", dateNaissance:new Date("1997-12-31")};
//------------------------------------------------------------------------------------------
const voiture1 = {marque:"Citroen", modele:"DS4", immat:"AB-123-YZ", couleur:"Rouge", nomAssureur:"AXA", numContratAssocie:"11223344", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
const voiture2 = {marque:"Peugeot", modele:"208", immat:"CD-456-WY", couleur:"Noire", nomAssureur:"MAIF", numContratAssocie:"55667788", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
const voiture3 = {marque:"Ford", modele:"Mustang", immat:"EF-789-UV", couleur:"Jaune", nomAssureur:"AXA", numContratAssocie:"99775533", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
const voiture4 = {marque:"Renault", modele:"Scenic", immat:"GH-987-ST", couleur:"Marron", nomAssureur:"MAIF", numContratAssocie:"55443399", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
const voiture5 = {marque:"Volkswagen", modele:"Golf", immat:"IJ-654-QR", couleur:"Grise", nomAssureur:"ALLIANZ", numContratAssocie:"44668811", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
const voiture6 = {marque:"Tesla", modele:"Model S", immat:"KL-321-OP", couleur:"Blanche", nomAssureur:"CIC", numContratAssocie:"66881122", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
var v = {marque:"Teslx", modele:"Model S", immat:"KL-321-OP", couleur:"Blanche", nomAssureur:"CIC", numContratAssocie:"66881122", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
//------------------------------------------------------------------------------------------
const permis1 = {numeroPermis:"123456789", categorie:"Permis A", dateValidite:new Date("2031-02-12")};
const permis2 = {numeroPermis:"987654321", categorie:"Permis B", dateValidite:new Date("2028-07-21")};
//------------------------------------------------------------------------------------------
const mesVoitures = new Array(voiture1, voiture2, voiture3, voiture4, voiture5, voiture6)
if(localStorage.getItem('MVH')=='' || localStorage.getItem('MVH')==null){
    localStorage.setItem('MVH', JSON.stringify(mesVoitures));
    console.log(1);
}
    

//------------------------------------------------------------------------------------------
const mesPermis = new Array(permis1, permis2)
//------------------------------------------------------------------------------------------

<<<<<<< Updated upstream
//----Changement de vue sur la connexion----//
=======
function addVh(){
    var MVH = JSON.parse(localStorage.getItem('MVH'));
    v.marque=document.getElementById('inputAjoutVehiculeMarque').value;
    v.modele=document.getElementById('inputAjoutVehiculeModele').value;
    v.immat=document.getElementById('inputAjoutVehiculePlaque').value;
    v.nomAssureur=document.getElementById('inputAjoutVehiculeNomAssureur').value;
    v.numContratAssocie=document.getElementById('inputAjoutVehiculeNumeroContrat').value;
    v.numCarteVerte=document.getElementById('inputAjoutVehiculeNumeroCarteVerte').value;
    v.Assureur=document.getElementById('inputAjoutVehiculeNomAssureur').value;
    v.Contrat=document.getElementById('inputAjoutVehiculeNumeroContrat').value;
    if(v.marque=='' ||  v.modele==''  || v.immat=='' || v.Assureur=='' || v.Contrat=='' || v.numCarteVerte==''){

    }else{
        MVH.push(v);
    }
    localStorage.setItem('MVH', JSON.stringify(MVH));
  }




//------------------------------------------------------------------------------------------
>>>>>>> Stashed changes
function afficherFormulaire(){
    const formulaireConnexion = document.getElementById("formConnexion");
    const formulaireInscription = document.getElementById("formInscription");
    if (formulaireInscription.style.display==="none"){
        formulaireInscription.style.display="block";
        formulaireConnexion.style.display="none";
    }else{
        if (formulaireConnexion.style.display==="none"){
            formulaireConnexion.style.display="block";
            formulaireInscription.style.display="none";
        }
    }
}
//----Affichage du popup présinistre en fonction de si l'utilisateur a déclaré un véhicule ou non----//
function checkPresenceVehicule(){
    const divAbsenceVehicule = document.getElementsByClassName("absenceVehicule");
    const divPresenceVehicule = document.getElementsByClassName("presenceVehicule");
    for(let i = 0;i<divPresenceVehicule.length;i++)
    if (divAbsenceVehicule[i].style.display==="none"){
        divAbsenceVehicule[i].style.display="block";
        divPresenceVehicule[i].style.display="none";
    }else{
        if (divPresenceVehicule[i].style.display==="none"){
            divPresenceVehicule[i].style.display="block";
            divAbsenceVehicule[i].style.display="none";
        }
    }
}
//-------------Chargement des listes déroulantes à partir des données stockées plus haut-------------//
function chargerPermis(){
    var selectPermis = document.getElementById("inputAjoutVehiculePermis");
    for(var i = 0; i < mesPermis.length; i++){
        var permis = mesPermis.at(i);
        selectPermis.options.add(new Option(permis.categorie+" - "+permis.numeroPermis, i));
    }
}
function chargerVehicule(){
    var selectVoiture = document.getElementById("inputChoixVehicule");
    for(var i = 0; i < JSON.parse(localStorage.getItem('MVH')).length; i++){
        var voiture = JSON.parse(localStorage.getItem('MVH')).at(i);
        selectVoiture.options.add(new Option(voiture.marque+" "+voiture.modele+" - "+voiture.immat, i));
    }
}
//---------------Affichage de la liste des véhicules d'une personne connectée---------------//
function afficherVehicules(){
    const listeVehicules = document.getElementById('listeVehicules');
    listeVehicules.innerHTML = '<div class="row bg-bl p-3 text-white text-center col-12 m-0 h5">'
                    +'<div class="col-2">Type de vehicules</div>'
                    +'<div class="col-2">Immatriculation</div>'
                    +'<div class="col-2">Marque</div>'
                    +'<div class="col-2">Modele</div>'
                    +'<div class="col-2">Assureur</div>'
                    +'<div class="col-2">Contrat</div>'
                    +'</div>';
<<<<<<< Updated upstream
    mesVoitures.forEach((voiture)=>{
        listeVehicules.innerHTML += '<div class="row m-0 text-center p-3 "><div class="col-2"><i class="bi bi-car-front h3"></i></div>'
                    +'<div class="col-2">'+voiture.immat+'</div>'
=======
    JSON.parse(localStorage.getItem('MVH')).forEach((voiture)=>{
        listeVehicules.innerHTML += '<div class="row m-0 text-center p-3 "><div class="col-2"><i class="bi bi-car-front h3"></i></div><div class="col-2">'+voiture.immat+'</div>'
>>>>>>> Stashed changes
                    +'<div class="col-2">'+voiture.marque+'</div>'
                    +'<div class="col-2">'+voiture.modele+'</div>'
                    +'<div class="col-2">'+voiture.nomAssureur+'</div>'
                    +'<div class="col-2">'+voiture.numContratAssocie+'</div>'
                    +'</div>';
    })
}
//--------------------Requete sur API pour récupérer le modele et la marque du véhicule par sa plaque d'immatriculation--------------------//
function chargerInfosAjoutVehicule(){
    var valueInputPlaque = document.getElementById("inputAjoutVehiculePlaque").value;
    var token="65f2e271752f";
    fetch("http://api.apiplaqueimmatriculation.com/carte-grise?host_name=apiplaqueimmatriculation.com&immatriculation="+valueInputPlaque+"&token="+token+"&format=json",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            document.getElementById("inputAjoutVehiculeMarque").value = response.data.marque;
            document.getElementById("inputAjoutVehiculeModele").value = response.data.modele;
        });
}
//-------------Chargement des infos pour le constat-------------//
function chargerInfosConducteur(){
    document.getElementById("inputConstatNomConducteurA").value = utilisateur1.nom;
    document.getElementById("inputConstatPrenomConducteurA").value = utilisateur1.prenom;
    document.getElementById("inputConstatDateNaissanceConducteurA").value = utilisateur1.dateNaissance.toISOString().substring(0,10);
    document.getElementById("inputConstatAdresseConducteurA").value = utilisateur1.adresse;
    document.getElementById("inputConstatCodePostalConducteurA").value = utilisateur1.codePostal;
    document.getElementById("inputConstatPaysConducteurA").value = utilisateur1.pays;
    document.getElementById("inputConstatNumeroTelephoneConducteurA").value = utilisateur1.tel;
    document.getElementById("inputConstatEmailConducteurA").value = utilisateur1.email;
}
function chargerInfosVehicule(){
    document.getElementById("inputConstatModeleVehiculeA").value = voiture6.modele;
    document.getElementById("inputConstatMarqueVehiculeA").value = voiture6.marque;
    document.getElementById("inputConstatImmatVehiculeA").value = voiture6.immat;
}
function chargerInfosAssureur(){
    document.getElementById("inputConstatNomAssureurA").value = voiture6.nomAssureur;
    document.getElementById("inputConstatNumeroContratA").value = voiture6.numContratAssocie;
    document.getElementById("inputConstatCarteVerteA").value = voiture6.numCarteVerte;
}
function chargerInfosPermis(){
    document.getElementById("inputConstatNumeroPermisA").value = permis1.numeroPermis;
    document.getElementById("inputConstatCategoriePermisA").value = permis1.categorie;
    document.getElementById("inputConstatDateValiditePermisA").value = permis1.dateValidite.toISOString().substring(0,10);
}
function chargerInfosSupplementaires(){
    //Appel de la fake API créée sur Mockoon
    fetch("http://localhost:3000/carAPI/infosVehicules", {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        .then((response) => response.json())
        .then((response) => console.log(response))
    //document.getElementById("inputAjoutVehiculeMarque").value = response.data.marque;
    ;
}
function chargerConstat(){
    chargerInfosConducteur();
    chargerInfosVehicule();
    chargerInfosAssureur();
    chargerInfosPermis();
    chargerInfosSupplementaires();
}

//---------Chargement des données à l'affichage de certaines pages---------//
if(document.getElementById("inputAjoutVehiculePermis")!=null){
    console.log("AjoutVehicule");
    chargerPermis();
}
if(document.getElementById("inputChoixVehicule")!=null){
    console.log("Presinistre");
    chargerVehicule();
}
if(document.getElementById("listeVehicules")!=null){
    console.log("ListeVehicule");
    afficherVehicules();
}
if(document.getElementById("formConstat")!=null){
    console.log("Constat");
    chargerConstat();
}