function copyemail() {
    const valeur = "loquin.e2200714@etud.univ-ubs.fr";
    navigator.clipboard.writeText(valeur)
    .then(() => {
        alert("Adresse e-mail copiée dans le presse-papiers.");
    })
    .catch(err => {
        console.error("Erreur de copie :", err);
    });
}