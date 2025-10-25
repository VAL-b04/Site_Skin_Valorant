fetch('/boutiqueTech/data.json')
    .then(response => response.json())
    .then(data => {
        const zoneProduit = document.getElementById('produits');
        zoneProduit.className = "zoneProduit";

        const zoneAres = document.createElement('div');
        zoneAres.className = "zoneAres"

        const zoneBucky = document.createElement('div');
        zoneBucky.className = "zoneBucky"

        const zoneBulldog = document.createElement('div');
        zoneBulldog.className = "zoneBucky"

        const zoneClassic = document.createElement('div');
        zoneClassic.className = "zoneClassic"

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

            zoneAres.appendChild(produitCarte);
        });

        data.Bucky.forEach(produit => {
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

            zoneBucky.appendChild(produitCarte);
        });

        data.Bulldog.forEach(produit => {
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

            zoneBulldog.appendChild(produitCarte);
        });

        data.Classic.forEach(produit => {
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

            zoneClassic.appendChild(produitCarte);
        });

        zoneProduit.appendChild(zoneAres);
        zoneProduit.appendChild(zoneBucky);
        zoneProduit.appendChild(zoneBulldog);
        zoneProduit.appendChild(zoneClassic)
    });

    