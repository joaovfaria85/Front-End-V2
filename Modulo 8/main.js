    const validaMaior = document.getElementById('checar-maior')

    validaMaior.addEventListener('submit',function(e){
        e.preventDefault();

        let numeroA = document.getElementById('numero-a');
        let numeroB = document.getElementById('numero-b');
        
        if(numeroB.value > numeroA.value){
            document.querySelector('.success').classList.add('active');
            document.querySelector('.error').classList.remove('active');
        } else { 
            document.querySelector('.error').classList.add('active');
            document.querySelector('.success').classList.remove('active');
        }
        numeroA.value = '';
        numeroB.value = '';
    })
;
