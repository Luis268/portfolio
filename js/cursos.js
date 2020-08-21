(function($){
    "use strict";

    const cursos_extras = document.getElementById("cursosExtras");


    let cursosExtracurriculares = {
       cursos : {
            0:{
                nome:"Rocketseat",
                curso:"JavaScript",
                ano:"ano 2020"
            },

            1 : {
                nome:"Rocketseat",
                curso:"JavaScript ES6",
                ano: "ano 2020"
            },

            2 : {
                nome:"Udemy",
                curso:"Lógica de Programação",
                ano: "ano 2019"
            },

            3 : {
                nome:"Fundação Bradesco Escola virtual",
                curso:"Certificado no curso de Desenvolvendo Aplicações Mobile com Android Studio",
                ano: "concluído em 02/09/2019"
            },

            4 : {
                nome:"Escola SENAI “Ary Torres” Santo Amaro – São Paulo",
                curso:"Certificado de Desenho de páginas para web",
                ano: "ano 2012"
            },

            5 : {
                nome:"Escola SENAI “Ary Torres” Santo Amaro – São Paulo",
                curso:"Certificado de Desenho assistido por computador (CAD I) CAD 2D",
                ano: "ano 2008"
            },

            6 : {
                nome:"Centro de treinamento SENAI – Pindamonhangaba – SP",
                curso:"Certificado de Leitura e Interpretação de Desenho – Mecânica",
                ano: "ano 2007"
            },

            7 : {
                nome:"SENAC de Guaratinguetá – SP CEDEP “NELSON ANTONIO MATHIDIOS DOS SANTOS",
                curso:"Treinamento como desenvolver a competência Interpessoal",
                ano: "ano 2003"
            },

            8 : {
                nome:"SENAC de Guaratinguetá – SP",
                curso:"Curso de qualificação profissional em Suporte a rede de computadores, Área profissional em informática",
                ano: "ano 2000"
            },
        },
    };

    $.each(cursosExtracurriculares.cursos, function(i, v){
        console.log(v);
        $(cursos_extras).append(cursosExtra(v));
    });
       

    function cursosExtra(acad){
        let templateCursos = `
            <div class="d-flex flex-column flex-md-row justify-content-between ">
                <ul>
                    <li><b>${acad.nome}</b> <br> ${acad.curso} - ${acad.ano};</li>
                </ul>
               
            </div>
        `; 

    return templateCursos;

    }

//     <div class="flex-grow-1">
//     <h3 class="mb-0">${acad.nome}</h3>
//     <div class="subheading mb-3">${acad.curso}</div>
// </div>
// <div class="flex-shrink-0"><span class="text-primary">${acad.ano}</span></div>


})(jQuery);