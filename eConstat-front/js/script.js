//------------------------------------------------------------------------------------------
const voiture1 = {marque:"Citroen", modele:"DS4", immat:"AB-123-YZ", couleur:"Rouge", nomAssureur:"AXA", numContratAssocie:"11223344", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
const voiture2 = {marque:"Peugeot", modele:"208", immat:"CD-456-WY", couleur:"Noire", nomAssureur:"MAIF", numContratAssocie:"55667788", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
const voiture3 = {marque:"Ford", modele:"Mustang", immat:"EF-789-UV", couleur:"Jaune", nomAssureur:"AXA", numContratAssocie:"99775533", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
const voiture4 = {marque:"Renault", modele:"Scenic", immat:"GH-987-ST", couleur:"Marron", nomAssureur:"MAIF", numContratAssocie:"55443399", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
const voiture5 = {marque:"Volkswagen", modele:"Golf", immat:"IJ-654-QR", couleur:"Grise", nomAssureur:"ALLIANZ", numContratAssocie:"44668811", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
const voiture6 = {marque:"Tesla", modele:"Model S", immat:"KL-321-OP", couleur:"Blanche", nomAssureur:"CIC", numContratAssocie:"66881122", numCarteVerte:"12345", Assureur:"AXA Auto",Contrat:"122SDE17446"};
//------------------------------------------------------------------------------------------
const permis1 = {numeroPermis:"123456789", categorie:"Permis A", dateValidite:"12-02-2031"};
const permis2 = {numeroPermis:"987654321", categorie:"Permis B", dateValidite:"21-07-2028"};
//------------------------------------------------------------------------------------------
const mesVoitures = new Array(voiture1, voiture2, voiture3, voiture4, voiture5, voiture6)
//------------------------------------------------------------------------------------------
const mesPermis = new Array(permis1, permis2)
//------------------------------------------------------------------------------------------







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

function chargerPermis(){
    var selectPermis = document.getElementById("inputAjoutVehiculePermis");
    for(var i = 0; i < mesPermis.length; i++){
        var permis = mesPermis.at(i);
        selectPermis.options.add(new Option(permis.categorie+" - "+permis.numeroPermis, i));
    }
}
function chargerVehicule(){
    var selectVoiture = document.getElementById("inputChoixVehicule");
    for(var i = 0; i < mesVoitures.length; i++){
        var voiture = mesVoitures.at(i);
        selectVoiture.options.add(new Option(voiture.marque+" "+voiture.modele+" - "+voiture.immat, i));
    }
}
function afficherVehicules(){
    const listeVehicules = document.getElementById('listeVehicules');
    listeVehicules.innerHTML = '<div class="row bg-bl p-3 text-white text-center col-12 m-0 h5"><div class="col-2">Type de vehicules</div>'
                    +'<div class="col-2">Immatriculation</div>'
                    +'<div class="col-2">Marque</div>'
                    +'<div class="col-2">Modeel</div>'
                    +'<div class="col-2">Assureur</div>'
                    +'<div class="col-2">Contrat</div>'
                    +'</div>';
    mesVoitures.forEach((voiture)=>{
        listeVehicules.innerHTML += '<div class="row m-0 text-center p-3 "><div class="col-2"><i class="bi bi-car-front h3"></i></div><div class="col-2">'+voiture.immat+'</div>'
                    +'<div class="col-2">'+voiture.marque+'</div>'
                    +'<div class="col-2">'+voiture.modele+'</div>'
                    +'<div class="col-2">'+voiture.Assureur+'</div>'
                    +'<div class="col-2">'+voiture.Contrat+'</div>'
                    +'</div>';
    })
}
function chargerInfos(){
    var valueInputPlaque = document.getElementById("inputAjoutVehiculePlaque").value;
    var trouve = false;
    var maVoiture
    mesVoitures.forEach((voiture)=>{
        if (voiture.immat==valueInputPlaque){
            trouve=true;
            maVoiture = voiture;
        }
    })
    if(!trouve){
        window.alert("Erreur : Véhicule introuvable !")
    }
    document.getElementById("inputAjoutVehiculeMarque").value = maVoiture.marque;
    document.getElementById("inputAjoutVehiculeModele").value=maVoiture.modele;
    document.getElementById("inputAjoutVehiculeNomAssureur").value=maVoiture.nomAssureur;
    document.getElementById("inputAjoutVehiculeNumeroContrat").value=maVoiture.numContratAssocie;
    document.getElementById("inputAjoutVehiculeNumeroCarteVerte").value=maVoiture.numCarteVerte;
}
if(document.getElementById("inputAjoutVehiculePermis")!=null){
    console.log("AjoutVehicule")
    chargerPermis();
}
if(document.getElementById("inputChoixVehicule")!=null){
    console.log("Presinistre")
    chargerVehicule();
}
if(document.getElementById("listeVehicules")!=null){
    console.log("ListeVehicule")
    afficherVehicules()
}
function chargerInfosAjoutVehicule(){
    var valueInputPlaque = document.getElementById("inputAjoutVehiculePlaque").value;
    console.log(valueInputPlaque)
    //valueInputPlaque="";
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
            console.log(JSON.stringify(response))
            document.getElementById("inputAjoutVehiculeMarque").value = response.data.marque;
            document.getElementById("inputAjoutVehiculeModele").value = response.data.modele;
        });
}
