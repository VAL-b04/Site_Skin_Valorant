fetch('/boutiqueTech/data.json')
    .then(response => response.json())
    .then(data => {
        const zoneProduit = document.getElementById('produits');
        zoneProduit.className = "zoneProduit";

        data.Ares.forEach(produit => {
            const produitCarte = document.createElement('div');
            produitCarte.className = "carteProduit"

            const produitTexte = document.createElement('div');
            produitTexte.className = "texteProduit"
            
            const name = document.createElement('p');
            name.textContent = `Nom: ${produit.nom}`;

            const price = document.createElement('p');
            price.textContent = `Prix: ${produit.prix}`;

            const desc = document.createElement('p');
            desc.textContent = `Description: ${produit.description}`

            const image = document.createElement('img');
            image.src = produit.Image
            image.className = "imageProduit";


            produitTexte.appendChild(name);
            produitTexte.appendChild(price);
            produitTexte.appendChild(desc);

            produitCarte.appendChild(produitTexte);
            produitCarte.appendChild(image);
            
            zoneProduit.appendChild(produitCarte);

        });
    });

    