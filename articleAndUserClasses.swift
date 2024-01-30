// Définir la classe Article avec ses propriétés et son initialisateur
class Article {
    let titre: String
    let description: String
    let categorie: String
    let prix: Double
    
    init(titre: String, description: String, categorie: String, prix: Double) {
        self.titre = titre
        self.description = description
        self.categorie = categorie
        self.prix = prix
    }
    
    // Définir une méthode pour afficher les informations de l'article
    func afficher() {
        print("Titre: \(titre)")
        print("Description: \(description)")
        print("Catégorie: \(categorie)")
        print("Prix: \(prix)")
    }
}

// Définir la classe Utilisateur avec ses propriétés et son initialisateur
class Utilisateur {
    let nom: String
    let prenom: String
    var historique: [Article]
    let profil: Profil
    let preferences: [String]
    
    init(nom: String, prenom: String, historique: [Article], profil: Profil, preferences: [String]) {
        self.nom = nom
        self.prenom = prenom
        self.historique = historique
        self.profil = profil
        self.preferences = preferences
    }
    
    // Définir une méthode pour ajouter un article à l'historique de l'utilisateur
    func ajouterArticle(article: Article) {
        historique.append(article)
    }
    
    // Définir une méthode pour afficher l'historique de l'utilisateur
    func afficherHistorique() {
        print("Historique de \(nom) \(prenom):")
        for article in historique {
            article.afficher()
        }
    }
}

// Définir une classe Profil avec ses propriétés et son initialisateur
class Profil {
    let age: Int
    let genre: String
    let localisation: String
    let budget: Double
    
    init(age: Int, genre: String, localisation: String, budget: Double) {
        self.age = age
        self.genre = genre
        self.localisation = localisation
        self.budget = budget
    }
}

// Créer un objet Article avec les valeurs données
let article1 = Article(titre: "Vélo électrique", description: "Un vélo électrique de haute qualité, avec une autonomie de 50 km", categorie: "Sport", prix: 999.99)

// Créer un objet Profil avec les valeurs données
let profil1 = Profil(age: 25, genre: "Femme", localisation: "Paris", budget: 1500.0)

// Créer un objet Utilisateur avec les valeurs données
let utilisateur1 = Utilisateur(nom: "Dupont", prenom: "Alice", historique: [article1], profil: profil1, preferences: ["Sport", "Mode", "Cuisine"])

// Afficher l'historique de l'utilisateur
utilisateur1.afficherHistorique()
