fetch('/boutiqueTech/data.json')
    .then(response => response.json())
    .then(data => {
        const zoneProduit = document.getElementById('produits');
        zoneProduit.className = "zoneProduit";

        data.skin.forEach(produit => {

            const produitCarte = document.createElement('div');
            produitCarte.className = "carteProduit"

            const produitTexte = document.createElement('div');
            produitTexte.className = "texteProduit"
            
            const nom = document.createElement('p');
            nom.textContent = `Name: ${produit.name}`;

            const color = document.createElement('p');
            color.textContent = `Farbe: ${produit.couleur}`;

            const price = document.createElement('p');
            price.textContent = `Preis: ${produit.prix}`;

            const image = document.createElement('div'); //placeHolder avant images
            image.textContent = "Bildbereich";
            image.className = "imageProduit";


            produitTexte.appendChild(nom);
            produitTexte.appendChild(color);
            produitTexte.appendChild(price);

            produitCarte.appendChild(produitTexte);
            produitCarte.appendChild(image);
            
            zoneProduit.appendChild(produitCarte);

        });
    });

    