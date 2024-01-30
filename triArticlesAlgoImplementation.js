// Fonction pour calculer le score de similarité basé sur le contenu
function calculer_score_contenu(utilisateur, article) {
    // Initialiser le score à 0
    let score = 0;
    // Comparer le titre de l'article avec les préférences de l'utilisateur
    if (utilisateur.preferences.includes(article.titre)) {
        // Augmenter le score de 1
        score += 1;
    }
    // Comparer la catégorie de l'article avec les préférences de l'utilisateur
    if (utilisateur.preferences.includes(article.categorie)) {
        // Augmenter le score de 1
        score += 1;
    }
    // Comparer le prix de l'article avec le profil de l'utilisateur
    if (article.prix <= utilisateur.profil.budget) {
        // Augmenter le score de 1
        score += 1;
    }
    // Retourner le score
    return score;
}

// Fonction pour calculer le score de similarité basé sur le collaboratif
function calculer_score_collaboratif(utilisateur, article) {
    // Initialiser le score à 0
    let score = 0;
    // Récupérer la liste des autres utilisateurs
    let autres_utilisateurs = recuperer_autres_utilisateurs();
    // Pour chaque autre utilisateur
    for (let autre_utilisateur of autres_utilisateurs) {
        // Calculer le score de similarité avec l'utilisateur cible
        let score_similarite = calculer_score_similarite(utilisateur, autre_utilisateur);
        // Vérifier si l'autre utilisateur a acheté, consulté ou noté l'article
        if (autre_utilisateur.historique.includes(article)) {
            // Augmenter le score proportionnellement au score de similarité
            score += score_similarite;
        }
    }
    // Retourner le score
    return score;
}

// Fonction pour calculer le score de similarité entre deux utilisateurs
function calculer_score_similarite(utilisateur1, utilisateur2) {
    // Initialiser le score à 0
    let score = 0;
    // Comparer les préférences des deux utilisateurs
    for (let preference of utilisateur1.preferences) {
        if (utilisateur2.preferences.includes(preference)) {
            // Augmenter le score de 1
            score += 1;
        }
    }
    // Comparer les profils des deux utilisateurs
    if (utilisateur1.profil.age == utilisateur2.profil.age) {
        // Augmenter le score de 1
        score += 1;
    }
    if (utilisateur1.profil.genre == utilisateur2.profil.genre) {
        // Augmenter le score de 1
        score += 1;
    }
    if (utilisateur1.profil.localisation == utilisateur2.profil.localisation) {
        // Augmenter le score de 1
        score += 1;
    }
    // Retourner le score
    return score;
}

// Fonction pour trier les articles par ordre décroissant de score
function trier_par_score(articles, scores) {
    // Créer un tableau de couples [article, score]
    let couples = [];
    for (let i = 0; i < articles.length; i++) {
        couples.push([articles[i], scores[i]]);
    }
    // Trier le tableau selon le score décroissant
    couples.sort((a, b) => b[1] - a[1]);
    // Extraire les articles triés
    let articles_tries = [];
    for (let couple of couples) {
        articles_tries.push(couple[0]);
    }
    // Retourner les articles triés
    return articles_tries;
}

// Fonction pour trier les articles en fonction des préférences de l'utilisateur et des recherches des autres utilisateurs
function trier_articles(utilisateur, articles) {
    // Initialiser un tableau vide pour stocker les scores des articles
    let scores = [];
    // Définir les poids relatifs des deux méthodes de recommandation
    let poids_contenu = 0.5;
    let poids_collaboratif = 0.5;
    // Pour chaque article
    for (let article of articles) {
        // Calculer le score de similarité basé sur le contenu
        let score_contenu = calculer_score_contenu(utilisateur, article);
        // Calculer le score de similarité basé sur le collaboratif
        let score_collaboratif = calculer_score_collaboratif(utilisateur, article);
        // Calculer le score final en combinant les deux scores pondérés
                let score_final = poids_contenu * score_contenu + poids_collaboratif * score_collaboratif;
        // Ajouter le score final au tableau des scores
        scores.push(score_final);
    }
    // Trier les articles par ordre décroissant de score
    let articles_tries = trier_par_score(articles, scores);
    // Retourner les articles triés
    return articles_tries;
}
