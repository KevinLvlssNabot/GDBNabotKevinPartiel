let tentatives = $(".tentatives")
let caseCache1 = $("#caseUne")
let premiereCase = $("#1")
let valider = $('#validation')
let hasard = $('.cachée')
let caseUneCachée = $('#caseUne')
let caseDeuxCachée = $('#caseDeux')
let caseTroisCachée = $('#caseTrois')
let caseQuatreCachée = $('#caseQuatre')
let caseCinqCachée = $('#caseCinq')
let caseReponseUn = $('#reponse1')
let caseReponseDeux = $('#reponse2')
let caseReponseTrois = $('#reponse3')
let caseReponseQuatre = $('#reponse4')
let caseReponseCinq = $('#reponse5')
let comparaison1;
let comparaison2;
let comparaison3;
let comparaison4;
let comparaison5;
let couleurUtilisateur1;
let couleurUtilisateur2;
let couleurUtilisateur3;
let couleurUtilisateur4;
let couleurUtilisateur5;


// Géneration des couleurs aléatoires
caseUneCachée.each( function() {
  if(Math.random()<0.5) $(this).addClass('colorBlue');
    comparaison1 = 1
  if(Math.random()<0.5) $(this).addClass('colorRed');
    comparaison1 = 2
  if(Math.random()<0.5) $(this).addClass('colorVertClair');
    comparaison1 = 3
  if(Math.random()<0.5) $(this).addClass('colorYellow');
    comparaison1 = 4
  if(Math.random()<0.5) $(this).addClass('colorBrown');
    comparaison1 = 5
  if(Math.random()<0.5) $(this).addClass('colorOrange');
    comparaison1 = 6
  if(Math.random()<0.5) $(this).addClass('colorVertFonce');
    comparaison1 = 7
  if(Math.random()<0.5) $(this).addClass('colorPurple');
    comparaison1 = 8
});

caseDeuxCachée.each( function() {
  if(Math.random()<0.5) $(this).addClass('colorBlue');
    comparaison2 = 1
  if(Math.random()<0.5) $(this).addClass('colorRed');
    comparaison2 = 2
  if(Math.random()<0.5) $(this).addClass('colorVertClair');
    comparaison2 = 3
  if(Math.random()<0.5) $(this).addClass('colorYellow');
    comparaison2 = 4
  if(Math.random()<0.5) $(this).addClass('colorBrown');
    comparaison2 = 5
  if(Math.random()<0.5) $(this).addClass('colorOrange');
    comparaison2 = 6
  if(Math.random()<0.5) $(this).addClass('colorVertFonce');
    comparaison2 = 7
  if(Math.random()<0.5) $(this).addClass('colorPurple');
    comparaison2 = 8
});


caseTroisCachée.each( function() {
  if(Math.random()<0.5) $(this).addClass('colorBlue');
    comparaison3 = 1
  if(Math.random()<0.5) $(this).addClass('colorRed');
    comparaison3 = 2
  if(Math.random()<0.5) $(this).addClass('colorVertClair');
    comparaison3 = 3
  if(Math.random()<0.5) $(this).addClass('colorYellow');
    comparaison3 = 4
  if(Math.random()<0.5) $(this).addClass('colorBrown');
    comparaison3 = 5
  if(Math.random()<0.5) $(this).addClass('colorOrange');
    comparaison3 = 6
  if(Math.random()<0.5) $(this).addClass('colorVertFonce');
    comparaison3 = 7
  if(Math.random()<0.5) $(this).addClass('colorPurple');
    comparaison3 = 8
});

caseQuatreCachée.each( function() {
  if(Math.random()<0.5) $(this).addClass('colorBlue');
    comparaison4 = 1
  if(Math.random()<0.5) $(this).addClass('colorRed');
    comparaison4 = 2
  if(Math.random()<0.5) $(this).addClass('colorVertClair');
    comparaison4 = 3
  if(Math.random()<0.5) $(this).addClass('colorYellow');
    comparaison4 = 4
  if(Math.random()<0.5) $(this).addClass('colorBrown');
    comparaison4 = 5
  if(Math.random()<0.5) $(this).addClass('colorOrange');
    comparaison4 = 6
  if(Math.random()<0.5) $(this).addClass('colorVertFonce');
    comparaison4 = 7
  if(Math.random()<0.5) $(this).addClass('colorPurple');
    comparaison4 = 8
});


caseCinqCachée.each( function() {
  if(Math.random()<0.5) $(this).addClass('colorBlue');
    comparaison5 = 1
  if(Math.random()<0.5) $(this).addClass('colorRed');
    comparaison5 = 2
  if(Math.random()<0.5) $(this).addClass('colorVertClair');
    comparaison5 = 3
  if(Math.random()<0.5) $(this).addClass('colorYellow');
    comparaison5 = 4
  if(Math.random()<0.5) $(this).addClass('colorBrown');
    comparaison5 = 5
  if(Math.random()<0.5) $(this).addClass('colorOrange');
    comparaison5 = 6
  if(Math.random()<0.5) $(this).addClass('colorVertFonce');
    comparaison5 = 7
  if(Math.random()<0.5) $(this).addClass('colorPurple');
    comparaison5 = 8
});

// Navigation dans les couleurs
tentatives.on("click", function(){
  $('#'+this.id).addClass("colorBlue");
  if ($('#'+this.id).hasClass('colorBlue')) {
    couleurUtilisateur1 = 1
    $('#'+this.id).toggleClass('colorRed');
  }
  if ($('#'+this.id).hasClass('colorRed')) {
    couleurUtilisateur1 = 2
    $('#'+this.id).toggleClass('colorVertClair');
  }
  if ($('#'+this.id).hasClass('colorVertClair')) {
    couleurUtilisateur1 = 3
    $('#'+this.id).toggleClass('colorYellow');
  }
  if ($('#'+this.id).hasClass('colorYellow')) {
    couleurUtilisateur1 = 4
    $('#'+this.id).toggleClass('colorPurple');
  }
  if ($('#'+this.id).hasClass('colorPurple')) {
    couleurUtilisateur1 = 5
    $('#'+this.id).toggleClass('colorBrown');
  }
  if ($('#'+this.id).hasClass('colorBrown')) {
    couleurUtilisateur1 = 6
    $('#'+this.id).toggleClass('colorOrange');
  }
  if ($('#'+this.id).hasClass('colorOrange')) {
    couleurUtilisateur1 = 7
    $('#'+this.id).toggleClass('colorVertFonce');
    couleurUtilisateur1 = 8
  }
});







// Comparaison des réponses et de la génération
valider.on('click', function(){
  if (comparaison1 == 1 && premiereCase.hasClass('colorBlue')) {
    caseReponseUn.addClass('bienPlacé');
  } else {
    caseReponseUn.addClass('malplacé');
  }
  if (comparaison1 == 2 && premiereCase.hasClass('colorRed')) {
    caseReponseUn.addClass('bienPlacé');
  } else {
    caseReponseUn.addClass('malplacé');
  }
  if (comparaison1 == 3 && premiereCase.hasClass('colorVertClair')) {
    caseReponseUn.addClass('bienPlacé');
  } else {
    caseReponseUn.addClass('malplacé');
  }
  if (comparaison1 == 4 && premiereCase.hasClass('colorYellow')) {
    caseReponseUn.addClass('bienPlacé');
  } else {
    caseReponseUn.addClass('malplacé');
  }
  if (comparaison1 == 5 && premiereCase.hasClass('colorPurple')) {
    caseReponseUn.addClass('bienPlacé');
  } else {
    caseReponseUn.addClass('malplacé');
  }
  if (comparaison1 == 6 && premiereCase.hasClass('colorBrown')) {
    caseReponseUn.addClass('bienPlacé');
  } else {
    caseReponseUn.addClass('malplacé');
  }
  if (comparaison1 == 7 && premiereCase.hasClass('colorBrown')) {
    caseReponseUn.addClass('bienPlacé');
  } else {
    caseReponseUn.addClass('malplacé');
  }
  if (comparaison1 == 8 && premiereCase.hasClass('VertFonce')) {
    caseReponseUn.addClass('bienPlacé');
  } else {
    caseReponseUn.addClass('malplacé');
  }

//if (comparaison1 == couleurUtilisateur1) {
//  alert('Ok');
//  caseReponseUn.addClass('bienPlacé');
//} else {
//  caseReponseUn.addClass('malplacé');
//}
});
