# Syntaxe</br>Les bases

<!-- .slide: class="page-title" -->



## Sommaire

<!-- .slide: class="toc" -->

- **[Syntaxe de base](#/1)**
- [Code et tableaux](#/2)
- [Positionnement des images](#/3)
- [Animations](#/4)
- [Syntaxe avancée](#/5)



## Paragraphe

Dans un paragraphe, les retours chariots simples
ne sont pas pris en compte. Pour commencer un nouveau paragraphe, il faut
les séparer par une ligne vide (2 retours chariots).

Nouveau paragraphe.

Pour terminer la slide, insérer 3 lignes vides.



## Mise en forme

- Un titre de chapitre commence par **'\#'**, avec éventuellement un **'&lt;br&gt;'** pour ajouter un sous-titre
- Un titre de slide commence par **'\#\#'**
- Entourer avec **'\*'** pour mettre le *texte en évidence*
- Entourer avec **'\*\*'** pour mettre le **texte encore plus en évidence**
- Entourer avec **'\~\~'** pour mettre le ~~texte en barré~~
- Commencer un paragraphe par **'\>'** pour faire une citation

> Premier paragraphe de la citation
>
> Second paragraphe



## Caractères spéciaux

- Selon l'emplacement, il peut être nécessaire d'échapper les caractères suivants avec un **'\\'** :
  - Les symboles : \\ \` \*  \_
  - Les parenthèses : \{ \} \[ \] \( \)
  - Les ponctuations : \#  \. \!
  - Les signes : \+ \-



## Liste simple

- Item 1
- Item 2
- Item 3
- Item 4
- Item 5



## Liste numérotée

1. Item 1
2. Item 2
3. Item 3
4. Item 4
5. Item 5



## Liste avancée

- Item 1 *sur 3 niveaux*
  - Item 1.1
      - Item 1.1.1
  - Item 1.2
- Item 2 *avec du texte*

  1er paragraphe lié à l'item 2.

  2nd paragraphe lié à l'item 2.

- Item 3



## CSS Personnalisé

- Utiliser la feuille CSS spécique à chaque formation [ressources/custom.css](ressources/custom.css)

<!-- .element: class="blue" -->
En bleu

```
<!-- .element: class="blue" -->
En bleu
```
<!-- .element class="alert alert-warning"-->
**A utiliser avec parcimonie!** Essentiellement, pour le multi-colonne, le positionnement des illustrations...



## Notes formateurs

- Pour ajouter des notes formateurs, ajouter un paragraphe commencant par `'Notes :'`.
- Appuyez sur la touche `'s'` pour activer le mode présentateur et voir les notes formateurs.

Notes :
Commentaire pour le formateur avec une liste d'élements.

- Note formateur 1
- Note formateur 2



## Liens

- Lien simple : http://zenika.com
- Lien avec texte : [Site de Zenika](http://zenika.com)
- Lien avec texte et titre : [Site de Zenika](http://zenika.com "le site web de zenika")
- Adresse email : <info@zenika.com>



## Font awesome

- Utilisation de Font-awesome
  - exemple d'utilisation : http://fontawesome.io/examples/
  - liste des icones disponibles : http://fontawesome.io/icons/
- écriture (les 2 sont équivalentes) :
  - `<i class="fa fa-camera-retro"></i>`
  - `<span class="fa-list-ul fa"></span>`
- *Icones* : <i class="fa fa-camera-retro"></i> fa-camera-retro
<span class="fa-list-ul fa"></span>&nbsp; List Icon <span class="fa fa-camera-retro fa-lg fa"></span>&nbsp; Camera Icon <span class="fa fa-home fa-fw" aria-hidden="true"></span>&nbsp; Home<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
- *Flèches* : <i class="fa fa-5 fa-arrow-down"></i>&nbsp; fa-arrow-down <i class="fa fa-5 fa-arrow-up"></i>  &nbsp; fa-arrow-up <i class="fa fa-5 fa-arrow-left"></i>&nbsp; fa-arrow-left <i class="fa fa-5 fa-arrow-right"></i> &nbsp; fa-arrow-right



## Pages spéciales

Pour insérer une page spéciale, ajouter dans un slide avec ou sans titre, le commentaire html suivant avec la classe css souhaitée :

```html
<!-- .slide: class="page-xxx" -->
```

Liste des pages (classes css) existantes :

- page de questions : *"page-questions"*
- page de tp : *"page-tp1"*, *"page-tp2"*, ...
- page de démo : *"page-demo"*



<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp1" -->



<!-- .slide: class="page-demo" -->
