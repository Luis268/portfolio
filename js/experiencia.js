(function($) {
        "use strict";
        const experienciaHTML = document.getElementById("experiencia");

        let arrayExperiencia = {

            empresas: {
                0: {
                    nome: "Loja Gráfica Eskenazi",
                    Funcao: "Programador Júnior Back-end",
                    Periodo: "10/2019 Até 04/2020",
                    Linguagens: "PHP 7.2, ZendFramework 2 e Laravel 7, GitHub, Sistema Operacional MacOS Catalina 10.*",
                    Atividades: "Criação e manutenção de módulos para administração e distribuição de serviços internos.<br>*Dispensado por motivo da Pandemia COVID-19."

                },

                1: {
                    nome: "Consultor Net ( Contratação pela Cooper Seven )",
                    Funcao: "Programador Front End",
                    Periodo: "10/2018 Até 01/2019",
                    Linguagens: "ECMAScript 5, Git BitBucket Versionamento.",
                    Atividades: ""
                },

                2: {
                    nome: "Fox Solution",
                    Funcao: "Programador Júnior",
                    Periodo: "08/2017 até 10/2017",
                    Linguagens: "Framework CakePHP 2.6, Sistema Operacional Windows 7.",
                    Atividades: ""
                },

                3: {
                    nome: "HmBrokers",
                    Funcao: "Analista Programador Júnior",
                    Periodo: "09/2015 até 06/2016",
                    Linguagens: "Sistema Operacional Ubuntu 14.04 LTS (linux)",
                    Atividades: ""
                },

                4: {
                    nome: "Grupo IDOC",
                    Funcao: "Editor de Imagens e Programador",
                    Periodo: "11/2013 até 10/2015",
                    Linguagens: "HTML, CSS3, JavaScript, jQuery, PHP 5.2, Sistema Operacional Windows 7.",
                    Atividades: "Edição e tratamento de imagens PhotoShop CS6"
                },
            },

        };




        $.each(arrayExperiencia.empresas, function(i, v) {
            $(experienciaHTML).append(expTemplate(v));
        });


        $(".zero").hide();

        function expTemplate(ex) {

            let template = `
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
                <h3 class="mb-0">${ex.Funcao}</h3>
                <div class="subheading mb-3">
                    ${ex.nome}
                </div>
                <p>
                    <b>Linguagens Utilizadas:</b> <br>  ${ex.Linguagens}                
                </p>
                <p ${ex.Atividades == false ? `class="zero"` : `class=""`}>
                    <b>Atividades Desenvolvidas:</b> <br> ${ex.Atividades}
                </p>
            </div>
            <div class="flex-shrink-0"><span class="text-primary">
                ${ex.Periodo}
            </span></div>
        </div>
        `;
        return template;
    }



})(jQuery);