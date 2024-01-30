// Fonction pour calculer le score de similarité basé sur le contenu
fun calculer_score_contenu(utilisateur: Utilisateur, article: Article): Int {
    // Initialiser le score à 0
    var score = 0
    // Comparer le titre de l'article avec les préférences de l'utilisateur
    if (utilisateur.preferences.contains(article.titre)) {
        // Augmenter le score de 1
        score += 1
    }
    // Comparer la catégorie de l'article avec les préférences de l'utilisateur
    if (utilisateur.preferences.contains(article.categorie)) {
        // Augmenter le score de 1
        score += 1
    }
    // Comparer le prix de l'article avec le profil de l'utilisateur
    if (article.prix <= utilisateur.profil.budget) {
        // Augmenter le score de 1
        score += 1
    }
    // Retourner le score
    return score
}

// Fonction pour calculer le score de similarité basé sur le collaboratif
fun calculer_score_collaboratif(utilisateur: Utilisateur, article: Article): Int {
    // Initialiser le score à 0
    var score = 0
    // Récupérer la liste des autres utilisateurs
    val autres_utilisateurs = recuperer_autres_utilisateurs()
    // Pour chaque autre utilisateur
    for (autre_utilisateur in autres_utilisateurs) {
        // Calculer le score de similarité avec l'utilisateur cible
        val score_similarite = calculer_score_similarite(utilisateur, autre_utilisateur)
        // Vérifier si l'autre utilisateur a acheté, consulté ou noté l'article
        if (autre_utilisateur.historique.contains(article)) {
            // Augmenter le score proportionnellement au score de similarité
            score += score_similarite
        }
    }
    // Retourner le score
    return score
}

// Fonction pour calculer le score de similarité entre deux utilisateurs
fun calculer_score_similarite(utilisateur1: Utilisateur, utilisateur2: Utilisateur): Int {
    // Initialiser le score à 0
    var score = 0
    // Comparer les préférences des deux utilisateurs
    for (preference in utilisateur1.preferences) {
        if (utilisateur2.preferences.contains(preference)) {
            // Augmenter le score de 1
            score += 1
        }
    }
    // Comparer les profils des deux utilisateurs
    if (utilisateur1.profil.age == utilisateur2.profil.age) {
        // Augmenter le score de 1
        score += 1
    }
    if (utilisateur1.profil.genre == utilisateur2.profil.genre) {
        // Augmenter le score de 1
        score += 1
    }
    if (utilisateur1.profil.localisation == utilisateur2.profil.localisation) {
        // Augmenter le score de 1
        score += 1
    }
    // Retourner le score
    return score
}

// Fonction pour trier les articles par ordre décroissant de score
fun trier_par_score(articles: List<Article>, scores: List<Int>): List<Article> {
    // Créer une liste de couples (article, score)
    val couples = mutableListOf<Pair<Article, Int>>()
    for (i in articles.indices) {
        couples.add(Pair(articles[i], scores[i]))
    }
    // Trier la liste selon le score décroissant
    couples.sortByDescending { it.second }
    // Extraire les articles triés
    val articles_tries = mutableListOf<Article>()
    for (couple in couples) {
        articles_tries.add(couple.first)
    }
    // Retourner les articles triés
    return articles_tries
}

// Fonction pour trier les articles en fonction des préférences de l'utilisateur et des recherches des autres utilisateurs
fun trier_articles(utilisateur: Utilisateur, articles: List<Article>): List<Article> {
    // Initialiser une liste vide pour stocker les scores des articles
    val scores = mutableListOf<Int>()
    // Définir les poids relatifs des deux méthodes de recommandation
    val poids_contenu = 0.5
    val poids_collaboratif = 0.5
    // Pour chaque article
    for (article in articles) {
        // Calculer le score de similarité basé sur le contenu
        val score_contenu = calculer_score_contenu(utilisateur, article)
        // Calculer le score de similarité basé sur le collaboratif
        val score_collaboratif = calculer_score_collaboratif(utilisateur, article)
        // Calculer le score final en combinant les deux scores pondérés
        val score_final = poids_contenu * score_contenu + poids_collaboratif * score_collaboratif
        // Ajouter le score final à la liste des scores
        scores.add(score_final)
    }
    // Trier les articles par ordre décroissant de score
    val articles_tries = trier_par_score(articles, scores)
    // Retourner les articles triés
    return articles_tries
}
