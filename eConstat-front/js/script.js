const permis1 = {id: 1, numeroPermis:"123456789", categorie:"Permis A", dateValidite:new Date("2031-02-12")};
const permis2 = {id: 2, numeroPermis:"987654321", categorie:"Permis B", dateValidite:new Date("2028-07-21")};
//------------------------------------------------------------------------------------------
const voiture1 = {marque:"Citroen", modele:"DS4", immat:"AB-123-YZ", couleur:"Rouge", nomAssureur:"AXA", numContratAssocie:"11223344", numCarteVerte:"12345", dateValidite1:new Date("2021-02-12"), dateValidite2:new Date("2024-12-30"), permis:permis1};
const voiture2 = {marque:"Peugeot", modele:"208", immat:"CD-456-WY", couleur:"Noire", nomAssureur:"MAIF", numContratAssocie:"55667788", numCarteVerte:"12345", dateValidite1:new Date("2021-02-12"), dateValidite2:new Date("2024-12-30"), permis:permis1};
const voiture3 = {marque:"Ford", modele:"Mustang", immat:"EF-789-UV", couleur:"Jaune", nomAssureur:"AXA", numContratAssocie:"99775533", numCarteVerte:"12345", dateValidite1:new Date("2021-02-12"), dateValidite2:new Date("2024-12-30"), permis:permis1};
const voiture4 = {marque:"Renault", modele:"Scenic", immat:"GH-987-ST", couleur:"Marron", nomAssureur:"MAIF", numContratAssocie:"55443399", numCarteVerte:"12345", dateValidite1:new Date("2021-02-12"), dateValidite2:new Date("2024-12-30"), permis:permis1};
const voiture5 = {marque:"Volkswagen", modele:"Golf", immat:"IJ-654-QR", couleur:"Grise", nomAssureur:"ALLIANZ", numContratAssocie:"44668811", numCarteVerte:"12345", dateValidite1:new Date("2021-02-12"), dateValidite2:new Date("2024-12-30"), permis:permis1};
const voiture6 = {marque:"Tesla", modele:"Model S", immat:"KL-321-OP", couleur:"Blanche", nomAssureur:"CIC", numContratAssocie:"66881122", numCarteVerte:"12345", dateValidite1:new Date("2021-02-12"), dateValidite2:new Date("2024-12-30"), permis:permis2};

var v = {marque:"Tesla", modele:"Model S", immat:"KL-321-OP", couleur:"Blanche", nomAssureur:"CIC", numContratAssocie:"66881122", numCarteVerte:"12345", permis:permis2};
//------------------------------------------------------------------------------------------
const utilisateurConnecte = {nom:"Chrayah", prenom:"Omar", email:"omar.chrayah@gmail.com", tel:"0123456789", codePostal:"45100", adresse:"7, allée des jardins", pays:"France", dateNaissance:new Date("1998-12-31"), mesPermis: new Array(permis1, permis2), mesVoitures: new Array(voiture1, voiture6)};
//------------------------------------------------------------------------------------------
if(sessionStorage.getItem('MVH')=='' || sessionStorage.getItem('MVH')==null){
    sessionStorage.setItem('MVH', JSON.stringify(utilisateurConnecte.mesVoitures));
}
//------------------------------------------------------------------------------------------

function addVh(){
    var MVH = JSON.parse(sessionStorage.getItem('MVH'));
    v.marque=document.getElementById('inputAjoutVehiculeMarque').value;
    v.modele=document.getElementById('inputAjoutVehiculeModele').value;
    v.immat=document.getElementById('inputAjoutVehiculePlaque').value;
    v.nomAssureur=document.getElementById('inputAjoutVehiculeNomAssureur').value;
    v.numContratAssocie=document.getElementById('inputAjoutVehiculeNumeroContrat').value;
    v.numCarteVerte=document.getElementById('inputAjoutVehiculeNumeroCarteVerte').value;
    var idPermis=document.getElementById('inputAjoutVehiculePermis').value;
    utilisateurConnecte.mesPermis.forEach((pe)=>{
        if (pe.id==idPermis){
            v.permis=pe;
        }
    })
    if(v.marque=='' ||  v.modele==''  || v.immat=='' || v.nomAssureur=='' || v.numContratAssocie=='' || v.numCarteVerte==''){

    }else{
        MVH.push(v);
    }
    sessionStorage.setItem('MVH', JSON.stringify(MVH));
  }




//------------------------------------------------------------------------------------------
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
    for(var i = 1; i <= utilisateurConnecte.mesPermis.length; i++){
        var permis = utilisateurConnecte.mesPermis.at(i-1);
        selectPermis.options.add(new Option(permis.categorie+" - "+permis.numeroPermis, i));
    }
}
function chargerVehicule(){
    var selectVoiture = document.getElementById("inputChoixVehicule");
    for(var i = 0; i < JSON.parse(sessionStorage.getItem('MVH')).length; i++){
        var voiture = JSON.parse(sessionStorage.getItem('MVH')).at(i);
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
    JSON.parse(sessionStorage.getItem('MVH')).forEach((voiture)=>{
        listeVehicules.innerHTML += '<div class="row m-0 text-center p-3 "><div class="col-2"><i class="bi bi-car-front h3"></i></div><div class="col-2">'+voiture.immat+'</div>'
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
    var token="72511e8eda9c";
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
    document.getElementById("inputConstatNomConducteurA").value = utilisateurConnecte.nom;
    document.getElementById("inputConstatPrenomConducteurA").value = utilisateurConnecte.prenom;
    document.getElementById("inputConstatDateNaissanceConducteurA").value = utilisateurConnecte.dateNaissance.toISOString().substring(0,10);
    document.getElementById("inputConstatAdresseConducteurA").value = utilisateurConnecte.adresse;
    document.getElementById("inputConstatCodePostalConducteurA").value = utilisateurConnecte.codePostal;
    document.getElementById("inputConstatPaysConducteurA").value = utilisateurConnecte.pays;
    document.getElementById("inputConstatNumeroTelephoneConducteurA").value = utilisateurConnecte.tel;
    document.getElementById("inputConstatEmailConducteurA").value = utilisateurConnecte.email;
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
    document.getElementById("inputConstatDateValiditeA").value = voiture6.dateValidite1.toISOString().substring(0,10);
    document.getElementById("inputConstatDateValiditeAbis").value = voiture6.dateValidite2.toISOString().substring(0,10);
}
function chargerInfosPermis(){
    document.getElementById("inputConstatNumeroPermisA").value = voiture6.permis.numeroPermis;
    document.getElementById("inputConstatCategoriePermisA").value = voiture6.permis.categorie;
    document.getElementById("inputConstatDateValiditePermisA").value = voiture6.permis.dateValidite.toISOString().substring(0,10);
}
function chargerInfosSupplementaires() {
    //Appel de la fake API créée sur Mockoon
    fetch("http://localhost:3000/carAPI/infosVehicules", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((response) => {
            document.getElementById("inputConstatFatigueA").value = response.fatigue;
            document.getElementById("inputConstatLuminositeExterieureA").value = response.luminositeExt;
            document.getElementById("inputConstatFrequenceCardiaqueA").value = response.freqCard;
            document.getElementById("inputConstatVitesseA").value = response.vitesseMomentImpact;
            document.getElementById("inputConstatPressionPneusA").value = response.pressionPneus;
            document.getElementById("inputConstatTemperaturePneusA").value = response.temperaturePneus;
            document.getElementById("inputConstatCeintureA").value = response.ceintureConducteur;
            document.getElementById("inputConstatZoneImpactA").value = response.zoneImpact;
            document.getElementById("inputConstatSeveriteImpactA").value = response.severiteImpact;
            document.getElementById("inputConstatStyleConduiteA").value = response.styleConduite;
            document.getElementById("inputConstatLieu").value = response.localisation;
        });
}
function chargerConstat(){
    chargerInfosConducteur();
    chargerInfosVehicule();
    chargerInfosAssureur();
    chargerInfosPermis();
    chargerInfosSupplementaires();
}
//

//---------Chargement des données à l'affichage de certaines pages---------//
if(document.getElementById("inputAjoutVehiculePermis")!=null){
    chargerPermis();
}
if(document.getElementById("inputChoixVehicule")!=null){
    chargerVehicule();
}
chargerVehicule();
if(document.getElementById("listeVehicules")!=null){
    afficherVehicules();
}
if(document.getElementById("formConstat")!=null){
    //chargerConstat();
}
if(document.getElementById("pageProfil")!=null){
    //chargerInfosProfil();
}
