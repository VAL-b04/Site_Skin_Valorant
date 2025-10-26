// Configuration des maps
const mapImages = {
    haven: "image/haven.jpg",
    bind: "image/bind.jpg",
    split: "image/split.jpg",
    ascent: "image/ascent.jpg",
    icebox: "image/icebox.jpg",
    breeze: "image/breeze.jpg",
    fracture: "image/fracture.jpg",
    pearl: "image/pearl.jpg",
    lotus: "image/lotus.jpg",
    sunset: "image/sunset.jpg"
};

const mapDescriptions = {
    haven: "Haven est une map à 3 sites située à Thimphu, au Bhoutan. C'est la seule map avec trois sites de pose de Spike, offrant des possibilités tactiques uniques avec des rotations complexes.",
    bind: "Bind est située au Maroc. Cette map n'a pas de mid traditionnel, mais dispose de deux téléporteurs pour des rotations rapides entre les sites A et B.",
    split: "Split est une map verticale à Tokyo, au Japon. Elle propose des combats en hauteur avec ses nombreuses plateformes et cordes pour des approches variées.",
    ascent: "Ascent se trouve à Venise, en Italie. Cette map propose des portes mécaniques et un mid ouvert pour des stratégies variées et des contrôles de zone.",
    icebox: "Icebox est située dans un port arctique. Map verticale avec des ziplines, elle offre de nombreuses positions en hauteur et des angles difficiles.",
    breeze: "Breeze se situe dans les Bermudes. C'est une map spacieuse avec de longues lignes de vue et des combats à distance favorisant les snipers.",
    fracture: "Fracture est une installation secrète en forme de H. Les attaquants spawnent des deux côtés pour une approche unique et des stratégies de prise en tenaille.",
    pearl: "Pearl se trouve à Lisbonne, au Portugal. Map sous-marine avec un mid étroit et des sites bien définis, favorisant les duels serrés.",
    lotus: "Lotus est située en Inde. Cette map propose trois sites avec des portes rotatives et des mécanismes uniques pour contrôler les accès.",
    sunset: "Sunset se déroule à Los Angeles. Map urbaine avec des angles variés et une structure permettant des rotations rapides entre les sites."
};

// Gestion des cartes de maps
function initMapSelector() {
    const mapPreview = document.getElementById('mapPreview');
    const mapTitle = document.getElementById('mapTitle');
    const mapDesc = document.getElementById('mapDesc');
    const triangles = document.querySelectorAll('.map-triangle');

    if (!mapPreview || !mapTitle || !mapDesc || !triangles.length) return;

    triangles.forEach(triangle => {
        triangle.addEventListener('click', () => {
            // Retirer la classe active de tous les triangles
            triangles.forEach(t => t.classList.remove('active'));
            
            // Ajouter la classe active au triangle cliqué
            triangle.classList.add('active');
            
            // Récupérer les infos de la map
            const mapKey = triangle.dataset.map;
            const mapName = triangle.querySelector('.triangle-name').textContent;
            
            // Animer le changement
            mapPreview.style.opacity = '0';
            setTimeout(() => {
                mapPreview.innerHTML = `<img src="${mapImages[mapKey]}" alt="${mapName}" style="width:100%; height:100%; object-fit:cover;">`;
                mapTitle.textContent = mapName;
                mapDesc.textContent = mapDescriptions[mapKey];
                mapPreview.style.opacity = '1';
            }, 200);
        });
    });
}

// Gestion des onglets
function initTabs() {
    function showSection(sectionId, event) {
        // Cacher toutes les sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Désactiver tous les boutons
        const buttons = document.querySelectorAll('.nav-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Afficher la section sélectionnée
        document.getElementById(sectionId).classList.add('active');

        // Activer le bouton correspondant
        if (event && event.target) {
            event.target.classList.add('active');
        }
    }

    // Ajouter les écouteurs d'événements
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const sectionId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            showSection(sectionId, e);
        });
    });

    // Afficher la première section par défaut
    if (buttons.length > 0) {
        const firstSectionId = buttons[0].getAttribute('onclick').match(/'([^']+)'/)[1];
        showSection(firstSectionId);
    }
}

// Gestion du carrousel
function initCarousel() {
    const carouselLeft = document.getElementById('carousel-left');
    if (!carouselLeft) return;

    // Compter le nombre de cartes AVANT duplication
    const leftCardsCount = carouselLeft.querySelectorAll('.carousel-card').length;

    // Dupliquer les cartes pour un défilement infini
    carouselLeft.innerHTML += carouselLeft.innerHTML;

    // Ajuster la durée de l'animation selon le nombre de cartes
    carouselLeft.style.animationDuration = (leftCardsCount * 2) + 's';
}

// Gestion du formulaire de contact
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message envoyé ! Nous vous répondrons bientôt.');
        this.reset();
    });
}

// Gestion des carrousels de publicités
function initAdCarousels() {
    // Carrousel 1
    const pubContainer1 = document.getElementById('pubContainer1');
    const slides1 = document.querySelectorAll('#carousel1 a');
    let currentSlide1 = 0;

    function showSlide1(index) {
        slides1.forEach((slide, i) => {
            slide.classList.toggle('active1', i === index);
        });
    }

    function nextSlide1() {
        const oldSlide = currentSlide1;
        currentSlide1 = (currentSlide1 + 1) % slides1.length;
        slides1[currentSlide1].classList.add('active1');
        slides1[oldSlide].classList.remove('active1');
    }

    if (slides1.length > 0) {
        showSlide1(currentSlide1);
        setInterval(nextSlide1, 5000);
    }

    // Carrousel 2
    const pubContainer2 = document.getElementById('pubContainer2');
    const slides2 = document.querySelectorAll('#carousel2 a');
    let currentSlide2 = 0;

    function showSlide2(index) {
        slides2.forEach((slide, i) => {
            slide.classList.toggle('active2', i === index);
        });
    }

    function nextSlide2() {
        const oldSlide = currentSlide2;
        currentSlide2 = (currentSlide2 + 1) % slides2.length;
        slides2[currentSlide2].classList.add('active2');
        slides2[oldSlide].classList.remove('active2');
    }

    if (slides2.length > 0) {
        showSlide2(currentSlide2);
        setInterval(nextSlide2, 5000);
    }

    // Gestion de la fermeture des publicités
    function closePub1() {
        if (pubContainer1) pubContainer1.style.display = 'none';
    }

    function closePub2() {
        if (pubContainer2) pubContainer2.style.display = 'none';
    }

    // Exposer les fonctions de fermeture au scope global
    window.closePub1 = closePub1;
    window.closePub2 = closePub2;
}

// Gestion des carrousels de publicités
function initPubCarousels() {
    // Carrousel 1
    const pubContainer1 = document.getElementById('pubContainer1');
    const slides1 = document.querySelectorAll('#carousel1 a');
    let currentSlide1 = 0;

    function showSlide1(index) {
        slides1.forEach((slide, i) => {
            slide.classList.toggle('active1', i === index);
        });
    }

    function nextSlide1() {
        const oldSlide = currentSlide1;
        currentSlide1 = (currentSlide1 + 1) % slides1.length;
        slides1[currentSlide1].classList.add('active1');
        if (slides1[oldSlide]) slides1[oldSlide].classList.remove('active1');
    }

    if (slides1.length > 0) {
        showSlide1(currentSlide1);
        setInterval(nextSlide1, 5000);
    }

    // Carrousel 2
    const pubContainer2 = document.getElementById('pubContainer2');
    const slides2 = document.querySelectorAll('#carousel2 a');
    let currentSlide2 = 0;

    function showSlide2(index) {
        slides2.forEach((slide, i) => {
            slide.classList.toggle('active2', i === index);
        });
    }

    function nextSlide2() {
        const oldSlide = currentSlide2;
        currentSlide2 = (currentSlide2 + 1) % slides2.length;
        slides2[currentSlide2].classList.add('active2');
        if (slides2[oldSlide]) slides2[oldSlide].classList.remove('active2');
    }

    if (slides2.length > 0) {
        showSlide2(currentSlide2);
        setInterval(nextSlide2, 5000);
    }

    // Exposer les fonctions de fermeture au scope global
    window.closePub1 = function() {
        if (pubContainer1) pubContainer1.style.display = 'none';
    };

    window.closePub2 = function() {
        if (pubContainer2) pubContainer2.style.display = 'none';
    };
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initMapSelector();
    initTabs();
    initCarousel();
    initContactForm();
    initAdCarousels();
    initPubCarousels();
});