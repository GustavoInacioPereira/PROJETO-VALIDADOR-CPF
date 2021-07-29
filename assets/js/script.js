const btn = document.querySelector('.btn');
const main = document.querySelector('.main')


const p = document.createElement('p')
p.setAttribute ('class', 'resultado')
main.appendChild(p)

btn.addEventListener('click', () => {
    const cpf = document.querySelector('#recebeCPF').value;
    const cpfLimpo = cpf.replace(/\D+/g, '')
    const cpfArray = Array.from(cpfLimpo);
    
    
    let contador = 10;
    
    
    if (cpfLimpo.length === 11) {
        const cpfArrayCopiado = [...cpfArray]
        const cpfArrayCopiado2 = [...cpfArray]
        const cpfArrayCopiado3 = [...cpfArray]

        
        const cpfNoveDigitos = cpfArrayCopiado.splice(0, 9)
        const cpfNoveDigitosCopiado = [...cpfNoveDigitos]
        const cpfArrayConta9digitos = [];
        
        // iteração que irá multiplicar os valores de cpf9digitos entre si
        for (let i = 0; i <= 8; i++) {
            let cpfRodando = cpfNoveDigitos[i]
            let cpfNumber = parseInt(cpfRodando)
            let multiplicacao = cpfNumber * contador
            --contador
            cpfArrayConta9digitos.push(multiplicacao)
        }
        
        // soma de todos os valores da primeira iteração
        const soma9digitos = cpfArrayConta9digitos.reduce((ac, valor) =>{
            
            ac = ac + valor
            return ac
        }, 0)
        
        
        function divisao (valor) {
            const conta = 11 - (valor % 11)
            return conta > 9 ? 0 : conta
        } 
        
        
        const primeiraDivisao = divisao(soma9digitos)
        
        
        const cpfDezDigitos = cpfArrayCopiado2.splice(0, 9) 
        cpfDezDigitos.push(primeiraDivisao)
        
        let cpfArrayContaDezdigitos = [];

        
        let contador2 = 11;
        
        for (let i = 0; i <= 9; i++) {
            let cpfRodando2 = cpfDezDigitos[i]
            let cpfNumber2 = parseInt(cpfRodando2)
            let multiplicacao2 = cpfNumber2 * contador2
            --contador2
            cpfArrayContaDezdigitos.push(multiplicacao2)
           
        }
        
        
        
        const somaDezdigitos = cpfArrayContaDezdigitos.reduce((ac, valor) =>{
            ac = ac + valor
            return ac
        }, 0)
        
        const segundaDivisao = divisao(somaDezdigitos)
        
        let cpfFinal = cpfArray.splice(0, 9)
        cpfFinal.push(primeiraDivisao, segundaDivisao)
        
        
        
        
        
        
        if (cpfFinal.toString() === cpfArrayCopiado3.toString()) {
            p.innerHTML = 'O CPF inserido é válido'

        }else{
            
            p.innerText = 'O CPF inserido não é válido'
            
            
            
        }
        
    } else {
        alert('Insira um CPF com 11 numeros (sem contar os caracteres especiais)')
    }
    
    if (isSequencia()) {
       p.innerText = 'O CPF inserido não é válido'
    }
    
    function isSequencia () {
        const sequencia = cpfLimpo[0].repeat(cpfLimpo.length);
        return sequencia === cpfLimpo
    }
    
})