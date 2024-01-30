// Définir la classe Article avec ses propriétés et son constructeur primaire
class Article(val titre: String, val description: String, val categorie: String, val prix: Double) {
    // Définir une méthode pour afficher les informations de l'article
    fun afficher() {
        println("Titre: $titre")
        println("Description: $description")
        println("Catégorie: $categorie")
        println("Prix: $prix")
    }
}

// Définir la classe Utilisateur avec ses propriétés et son constructeur primaire
class Utilisateur(val nom: String, val prenom: String, val historique: MutableList<Article>, val profil: Profil, val preferences: MutableList<String>) {
    // Définir une méthode pour ajouter un article à l'historique de l'utilisateur
    fun ajouterArticle(article: Article) {
        historique.add(article)
    }
    // Définir une méthode pour afficher l'historique de l'utilisateur
    fun afficherHistorique() {
        println("Historique de $nom $prenom:")
        for (article in historique) {
            article.afficher()
        }
    }
}

// Définir une classe Profil avec ses propriétés et son constructeur primaire
class Profil(val age: Int, val genre: String, val localisation: String, val budget: Double)

// Créer un objet Article avec les valeurs données
val article1 = Article("Vélo électrique", "Un vélo électrique de haute qualité, avec une autonomie de 50 km", "Sport", 999.99)

// Créer un objet Profil avec les valeurs données
val profil1 = Profil(25, "Femme", "Paris", 1500.0)

// Créer un objet Utilisateur avec les valeurs données
val utilisateur1 = Utilisateur("Dupont", "Alice", mutableListOf(article1), profil1, mutableListOf("Sport", "Mode", "Cuisine"))

// Afficher l'historique de l'utilisateur
utilisateur1.afficherHistorique()
