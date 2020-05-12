document.getElementById('btnInserir').onclick = inserirFuncionario;
document.getElementById('btnFiltrar').onclick = chamaFiltrar; 


const listaFuncionarios = [];
let salarioMaior2k = [];
let salarioMenor2k = [];

function chamaFiltrar() {
    funcionariosalarioAlto();
    funcionariosalarioBaixo();
}

function inserirFuncionario() {
 
    const funcionario = {
        nome: document.getElementById('txtNome').value,
        tempo: parseFloat(document.getElementById('txtTempo').value),
        salario: parseFloat(document.getElementById('txtSalario').value),
    }

    if(funcionario.nome && funcionario.tempo && funcionario.salario) {
        listaFuncionarios.push(funcionario);
        // console.log(listaFuncionarios);
    } else {
        alert('Preencha todos os campos');
    }
}

//------------------------------------------------------------------------
//filter funciona como um for, rodando e percorrendo a lista

function funcionariosalarioAlto() {
    
    salarioMaior2k = listaFuncionarios.filter(function(funcionario) {
        return funcionario.salario >= 2000; 
    })
    // console.log(salarioMaior2k);

    const  funcionario_aumento_alto = salarioMaior2k.map(function (funcionario) {
        if (funcionario.tempo >= 10) {

            const empregado = {
                nome: funcionario.nome,
                tempo: funcionario.tempo,
                salarioAntigo: funcionario.salario,
                novoSalario: funcionario.salario + funcionario.salario * (10/100)
            }

            document.getElementById('divPai').innerHTML += `
            <label> Nome:  ${empregado.nome}</label>
            <br>
            <label> Tempo na empresa: ${empregado.tempo}</label>
            <br>
            <label> Salário antigo: ${empregado.salarioAntigo}</label>
            <br>
            <label> Novo salário: ${empregado.novoSalario}</label>
            <br> `;

            return empregado;
            
        } else { 
            return empregado = {
                nome: funcionario.nome,
                tempo: funcionario.tempo,
                salarioAntigo: funcionario.salario,
                novoSalario: funcionario.salario + funcionario.salario * (5/100)
        }
      }
    })
    console.log(funcionario_aumento_alto);
}

//------------------------------------------------------------------------
function funcionariosalarioBaixo() {
    
    salarioMenor2k = listaFuncionarios.filter(function(funcionario) {
        return funcionario.salario < 2000; 
    })
    // console.log(salarioMenor2k);


}

 