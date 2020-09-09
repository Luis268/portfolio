(function($){
    "use strict";

    const portfolios = document.getElementById("portfolioWeb");


    let portfoliosWeb = {
       portfolio : {
            0:{
                nome: "Tyago",
                site:"lici.app",
                agencia:"lici.app",
                descricao:"Freelancer em Diagramção de página em HTML para sistema web"
            },
            1:{
                nome: "Loja Gráfica Eskenazi",
                site:"www.lojagraficaeskenazi.com.br",
                agencia:"Gráfica Online",
                descricao:"Manutenção e Criação de Módulos para sistema interno"
            },
            2:{
                nome: "Consultor Net",
                site:"www.consultornet.com.br",
                agencia:"Consultor Net",
                descricao:"Manutenção em lojas virtuais, plataforma Loja Integrada"
            },
            3:{
                nome: "Print Project",
                site:"www.printproject.com.br",
                agencia:"Fox Solution",
                descricao:"Diagramação e Programação do site"
            },
            4:{
                nome: "Global Moema Transportes",
                site:"www.globalmoema.com.br",
                agencia:"Fox Solution",
                descricao:"Diagramação do site"
            },
            5:{
                nome: "Rizodonto",
                site:"www.rizodonto.com.br",
                agencia:"Fox Solution",
                descricao:"Diagramação e Programação do site"
            },
            6:{
                nome: "Equipe Lions",
                site:"www.equipelions.com",
                agencia:"Fox Solution",
                descricao:"Diagramação e Programação do site"
            },
            7:{
                nome: "Bel Metal",
                site:"www.belmetal.com.br",
                agencia:"Fox Solution",
                descricao:"Manutenção do site"
            },
            8:{
                nome: "Idoc Content",
                site:"www.idoccontent.com.br",
                agencia:"iDOC Content",
                descricao:"Diagramação de Páginas para O Boticário, Walmart (BIG), Electrolux, edição de imagens para sites"
            },

            
        },
    };

    $.each(portfoliosWeb.portfolio, function(i, v){
        console.log(v);
        $(portfolios).append(portfoliosWebMedia(v));
    });
       
    $(".zero").hide();
    function portfoliosWebMedia(acad){
        let templatePortifolio = `
            <div class="d-flex flex-column flex-md-row justify-content-between ">
                <ul>
                    <li><b><i>Site: </i><a href="http://${acad.site}" target="_blank">${acad.nome}</a>;</b> <br> <span ${acad.agencia == false ? `class="zero"` : `class=""`}><b><i>Agencia:</i></b> ${acad.agencia};</span> <span ${acad.descricao == false ? `class="zero"` : `class=""`}><br> <b><i>Descrição: </i></b>${acad.descricao};</span></li>
                </ul>
               
            </div>
        `; 

    return templatePortifolio;

    }

//     <div class="flex-grow-1">
//     <h3 class="mb-0">${acad.nome}</h3>
//     <div class="subheading mb-3">${acad.curso}</div>
// </div>
// <div class="flex-shrink-0"><span class="text-primary">${acad.ano}</span></div>


})(jQuery);