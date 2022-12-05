$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true,
    });
    $('.menu-hamburger').click(function(){
        $('nav').slideToggle();
    }); 
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder:'000.000.000-00'
    });
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            cpf: {
                required: true
            },cep: {
                required: true
            }
        }, 
        messages:{
            nome: 'Por favor, Insira seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoInteresse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
    })