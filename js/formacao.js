(function($){
    "use strict";

    const formacao = document.getElementById("formacao");


    let formacaoAcademica = {
       escola : [
            [
                "Universidade Nove de Julho - UNINOVE - São Paulo - SP",
                "Tecnólogo",
                "Análise e Desenvolvimento de Sistemas",
                "5 Semestres",
                "Julho 2014 - Dezembro 2016"
            ]
       ],
    };

    $.each(formacaoAcademica.escola, function(i, v){
        console.log(v);
        $(formacao).html(formAcademico(v));
    });
       

    function formAcademico(acad){
        let templateAcademico = `
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">${acad[0]}</h3>
                    <div class="subheading mb-3">${acad[1]}</div>
                    <div>${acad[2]}</div>
                    <p>${acad[3]}</p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">${acad[4]}</span></div>
            </div>
        `; 

    return templateAcademico;

    }


})(jQuery);