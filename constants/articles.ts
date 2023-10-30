import { phone1, phone2, phone3, phone4, pc1, pc2, mac1, mac2, casque1, casque2 } from "@/assets/images";
import { ProductsList } from "@/types/Article";


export const articles: ProductsList = [
    {
        title: 'Iphone 12 Max',
        description: "Un périphérique d’entrée permet d’introduire des éléments extérieurs dans l’ordinateur. On y retrouve par exemple le clavier, pour écrire du texte, la webcam, pour enregistrer une vidéo, un scanner, qui permet de numériser des documents, etc.",
        type: 1,
        image: phone1,
        price: 618,
        devise: {
            id: 1,
            label: '$'
        }
    },
    {
        title: 'HP EliteBook',
        type: 2,
        image: pc2,
        price: 290,
        devise: {
            id: 1,
            label: '$'
        }
    },
    {
        title: 'Protool Casque BX',
        type: 3,
        image: casque2,
        price: 32,
        devise: {
            id: 1,
            label: '$'
        }
    },
    {
        title: 'Iphone 15 Pro Max - Ne chauffe pas',
        description: "Certains périphériques spécifiques peuvent être des périphériques d’entrée et de sortie. La clé USB ou le disque dur externe en font partie, et nous les étudierons dans un prochain chapitre.",
        type: 1,
        image: phone2,
        price: 1760,
        devise: {
            id: 1,
            label: '$'
        }
    },
    {
        title: 'Iphone XR - double Poumon',
        type: 1,
        image: phone3,
        price: 145,
        devise: {
            id: 1,
            label: '$'
        }
    },
    {
        title: 'Macbook Pro 2023',
        description: '',
        type: 2,
        image: mac1,
        price: 966,
        devise: {
            id: 1,
            label: '$'
        }
    },
    {
        title: 'Iphone 6 - Je suis show',
        description: "Les ports évoluent rapidement. Par exemple, d’ici quelques années, le port USB 3.0 aura probablement remplacé le port 2.0 que l’on connaît actuellement. L’important est de savoir qu’il existe des adaptateurs pour pallier tous ces changements.",
        type: 1,
        image: phone4,
        price: 80,
        devise: {
            id: 1,
            label: '$'
        }
    },
    {
        title: 'Macbook Air - Retina',
        description: 'Toutefois, les périphériques de stockage nécessitent un peu plus de précautions, pour éviter que les informations qui y sont stockées soient abîmées ou détruites par une déconnexion trop brusque. Ainsi, il faut avertir votre ordinateur du retrait du périphérique, pour qu’il arrête les activités avec ce périphérique.',
        type: 2,
        image: mac2,
        price: 1240,
        devise: {
            id: 1,
            label: '$'
        }
    },
    {
        title: 'HP Probook i8',
        description: 'Ce cours est composé de différents chapitres. Chaque chapitre contient une vidéo, qui vous donnera les éléments clés, et une partie texte, qui entrera dans les détails. Vous pouvez suivre ce cours à votre rythme, en prenant le temps qu’il vous faut.',
        type: 2,
        image: pc1,
        price: 860,
        devise: {
            id: 1,
            label: '$'
        }
    },
    {
        title: 'Casque Stéreo BluRay',
        description: 'Le hardware désigne tous les objets physiques que vous allez manipuler : l’ordinateur, évidemment, avec son unité centrale et son écran, mais aussi tout ce que l’on peut lui rattacher (souris, clavier, imprimante, disque dur externe, etc.).',
        type: 3,
        image: casque1,
        price: 27,
        devise: {
            id: 1,
            label: '$'
        }
    },
]