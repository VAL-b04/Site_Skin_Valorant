fetch('boutiqueTech/data.json')
    .then(response => response.json())
    .then(data => {
        const zoneProduit = document.getElementById('produits');
        zoneProduit.className = "zoneProduit";

        const armesOrbitantes = document.getElementById('armesOrbitantes');
        const categories = Object.keys(data);
        const centerX = 152;
        const centerY = 200;
        const radius = 230;

        categories.forEach((categorie, indexCat) => {
            const zoneArme = document.createElement('div');
            zoneArme.className = "zoneCartesProduits";

            // Titre par catégorie
            const titreArme = document.createElement('h2');
            titreArme.textContent = categorie;
            titreArme.className = "titreArme";
            titreArme.id = `cat-${indexCat}`;

            // Bouton triangle
            const toggleBtn = document.createElement('span');
            toggleBtn.className = "toggleBtn";
            toggleBtn.addEventListener('click', () => {
                zoneArme.classList.toggle('hidden');
                toggleBtn.classList.toggle('closed');
            });
            titreArme.appendChild(toggleBtn);
            zoneProduit.appendChild(titreArme);

            // Cartes produits
            data[categorie].forEach(produit => {
                const produitCarte = document.createElement('div');
                produitCarte.className = "carteProduit fadeIn";

                const produitTexte = document.createElement('div');
                produitTexte.className = "texteProduit";

                const name = document.createElement('p');
                name.innerHTML = `<strong>Nom :</strong> ${produit.nom}`;

                const price = document.createElement('p');
                price.innerHTML = `<strong>Prix :</strong> ${produit.prix} <img src="image/Valorant_Points.png" alt="VP" class="iconePrix">`;
                price.className = "prixProduit";

                const desc = document.createElement('p');
                desc.innerHTML = `<strong>Description :</strong> <br> ${produit.description}`;

                const buyButton = document.createElement('button');
                buyButton.textContent = "Acheter";
                buyButton.className = "btnAcheter";
                buyButton.addEventListener('click', () => {
                    alert(`Vous avez acheté : ${produit.nom} pour ${produit.prix} VP !`);
                });

                const image = document.createElement('img');
                image.src = produit.Image;
                image.alt = produit.nom;
                image.className = "imageProduit";

                produitTexte.append(name, price, desc, buyButton);
                produitCarte.append(produitTexte, image);
                zoneArme.appendChild(produitCarte);
            });

            zoneProduit.appendChild(zoneArme);

            // Création du lien orbitant pour la catégorie
            const angle = (indexCat / categories.length) * 2 * Math.PI;
            const link = document.createElement('a');
            link.href = `#${titreArme.id}`;
            link.textContent = categorie;
            link.style.left = `${centerX + radius * Math.cos(angle)}px`;
            link.style.top = `${centerY + radius * Math.sin(angle)}px`;
            armesOrbitantes.appendChild(link);
        });
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
