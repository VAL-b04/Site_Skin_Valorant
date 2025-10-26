// Fonction pour démarrer le compte à rebours
function startCountdown() {
    const countdownElement = document.querySelector('.countdown');

    // Définir la durée du compte à rebours (24 heures en millisecondes)
    let timeLeft = 24 * 60 * 60 * 1000; // 24 heures en millisecondes

    // Mettre à jour le compte à rebours toutes les secondes
    const countdownInterval = setInterval(() => {
        // Calculer les heures, minutes et secondes restantes
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Afficher le temps au format HH:MM:SS
        countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Décrémenter le temps restant
        timeLeft -= 1000;

        // Arrêter le compte à rebours quand il atteint 0
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = '00:00:00';
        }
    }, 1000);
}

// Fonction pour gérer l'affichage des détails de la commande
function setupOrderDetailsToggle() {
    const toggleButton = document.getElementById('toggleDetails');
    const orderDetails = document.getElementById('orderDetails');
    
    if (toggleButton && orderDetails) {
        toggleButton.addEventListener('click', function() {
            this.classList.toggle('active');
            orderDetails.classList.toggle('active');
            
            // Changer le texte du bouton
            const isExpanded = orderDetails.classList.contains('active');
            this.querySelector('span').textContent = isExpanded ? 'Masquer le détail' : 'Afficher le détail';
        });
    }
}

// Fonction pour gérer le basculement des articles
function setupArticlesToggle() {
    const toggleButton = document.getElementById('toggleArticles');
    const articlesList = document.getElementById('articlesList');
    
    if (toggleButton && articlesList) {
        toggleButton.addEventListener('click', function() {
            this.classList.toggle('active');
            articlesList.classList.toggle('show');
        });
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    setupOrderDetailsToggle();
    setupArticlesToggle();
});