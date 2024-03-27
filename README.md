# Question du TP WEB

## Question 1 

- Npm install command also generated a package-lock.json file
along with package.json. What is the purpose of this file?

Le fichier package-lock.json sert à bloqué les dépendances à une version spécifique. 

## Question 2 

- By convention, all NPM dependencies use a 3-digit format for
version numbers. How do you call this?

Cela s'appelle le versionnage sémantique.

## Question 3 

- What is a devDependency exactly? What are the differences with a
dependency?

Une devDependency est une dépendance nécessaire uniquement pour le développement d'une application, telle que les tests ou la construction du code, tandis qu'une dépendance ordinaire est essentielle pour son exécution en production.

## Question 4

- What is a closure/iife ? What was it used for ? What replaced it?

Une closure est une fonction qui conserve l'accès aux variables même après qu'elle soit fermée tandis qu'une IIFE (Immediately Invoked Function Expression) est une expression de fonction immédiatement invoquée, utilisée pour encapsuler du code. C'est export qui remplace IIFE.
 
## Question 5 

- hat is the difference between import * from './utils' and import
{ parseUrl } from './utils'? What can be the consequences of
using one instead of the other?

La différence entre import * from './utils' et import { parseUrl } from './utils' est que le premier importe tous les éléments exportés depuis './utils' (tel que les fonctions ou les variables) alors que {ParseUrl} importe uniquement la fonction parseUrl depuis /utils

## Question 6 

- Can you think of at least 2 things that are possible with Java
classes, but cannot be done with ES6 classes?

A la différence de java, les classes ES6 n'ont pas d'interface et ne permettent l'overloading.

## Question 7 

- What are the differences between var and let?

Var a une portée dans toute la fonction alors que let à une portée uniquement dans le bloc dans lequel il est déclaré.

## Question 8 

- What is the .bind(this) stuff? What happens if you delete it? Is
it needed when using an arrow function ? why ?

.bind(this) permet de lier le contexte this à une fonction en JavaScript. Si on le supprime, this sera lié uniquement à l'élément dans le block actuel. Il permet de capturer le contexte lié à this. Car .bind(this) permet de faire réference à l'élement this extérieur à la fonction.

## Question 9 

- What does the @ symbol mean in @babel/***?

Le symbole "@" dans @babel/*** indique qu'il s'agit d'un package ou d'un plugin spécifique à Babel.
 
## Question 10

- What are the advantages of Promises?

Les promesses sont une manière de gérer les opérations asynchrones en JavaScript, résolvant le problème du "callback hell" en permettant une séquence plus claire et plus lisible des opérations asynchrones. Les promesses sont généralement utilisées avec des fonctions natives comme fetch() pour effectuer des requêtes HTTP. Elles permettent de chaîner les opérations avec la méthode then() pour gérer les résultats ou les erreurs de manière séquentielle.

## Question 11 

- What version of ECMAScript async / await was released in ?

Async/await a été introduit dans ECMAScript 2017.

## Question 12 

- Component-oriented programming for the web is considered more
maintainable. Why?

La programmation orientée objet (POO) pour le développement web favorise la réutilisabilité du code grâce à l'encapsulation, l'héritage, le polymorphisme et l'abstraction. Elle permet d'appliquer des modèles de conception, d'utiliser une architecture basée sur des composants et de pratiquer le développement modulaire. Cela simplifie la conception, la maintenance et l'évolutivité des applications web.

## Question 13 

- What is Functional programming?

La programmation fonctionnelle est un paradigme de programmation qui se caractérise par l'utilisation d'expressions et de fonctions sans mutation de l'état et des données. Ca permet de produire un code plus clair, plus compréhensible et moins sujet aux erreurs.

## Question 14 

- Explain what the map() function does ?

La méthode map() est utilisée sur les tableaux pour générer un nouveau tableau en appliquant une opération de transformation à chaque élément du tableau source. Par exemple des opérations mathématiques sur les valeurs.
 
## Question 15 

- Explain what the filter() function does ?

La méthode filter() est utilisée sur les tableaux pour sélectionner et créer un nouveau tableau contenant uniquement les éléments qui respectent une condition spécifique. 


## Question 16 

- Explain what the reduce() function does ?

La fonction reduce() permet de réunir toute les valeur d’un groupe en une valeur, elle applique une fonction de rappel sur chaque élément du tableau, en accumulant le résultat pour retourner finalement une seule valeur.

## Question 17 

- What is the difference between .then() and async/await when
handling asynchronous functions?

La méthode then() était utilisé pour gérer les résultats ou les erreurs de manière séquentielle et ordonnée alors que l'utilisation de await dans une fonction déclarée avec async permet d'attendre la résolution d'une promesse avant de continuer l'exécution du code.

## Question 18 

- What does the _ prefix mean on a sass file?

En Sass, le préfixe underscore _ est utilisé pour indiquer des fichiers Sass partiels. Les fichiers Sass partiels contiennent des fragments de styles ou de code Sass destinés à être importés dans d'autres fichiers Sass
