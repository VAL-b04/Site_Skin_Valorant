fetch('https://github.com/VAL-b04/Site_Skin_Valorant/boutiqueTech/data.json')
    .then(response => response.json())
    .then(data => {
        const zoneProduit = document.getElementById('produits');
        zoneProduit.className = "zoneProduit";

        //Boucle sur chaque type d'arme dans le JSON
        Object.keys(data).forEach(arme => {
            const zoneArme = document.createElement('div');
            zoneArme.className = "zoneCartesProduits";

            //Titre par catégorie d'armes
            const titreArme = document.createElement('h2');
            titreArme.textContent = arme;
            titreArme.className = "titreArme";
            zoneProduit.appendChild(titreArme);

            // Création des cartes produits
            data[arme].forEach(produit => {
                const produitCarte = document.createElement('div');
                produitCarte.className = "carteProduit";

                const produitTexte = document.createElement('div');
                produitTexte.className = "texteProduit";

                const name = document.createElement('p');
                name.innerHTML = `<strong>Nom :</strong> ${produit.nom}`;

                const price = document.createElement('p');
                price.innerHTML = `<strong> Prix :</strong> ${produit.prix}`;

                const desc = document.createElement('p');
                desc.innerHTML = `<strong> Description :</strong> <br> ${produit.description}`;

                const image = document.createElement('img');
                image.src = produit.Image;
                image.alt = produit.nom;
                image.className = "imageProduit";

                produitTexte.append(name, price, desc);
                produitCarte.append(produitTexte, image);
                zoneArme.appendChild(produitCarte);
            });

            zoneProduit.appendChild(zoneArme);
        });
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));