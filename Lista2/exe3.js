

    chefe()

       function chefe(){
            var vetor = [] // escopo global - ele que iremos passar nos parametros da função

            do{

                var opcao = Number(prompt("Digite [1]. Req1 [2]. Req2 [3]. Req3 [4]. Req4 [5].Req5 [6]. Sair"))
                switch(opcao){
                    case 1: requisito1(vetor)
                        break
                    case 2: requisito2(vetor)
                        break
                    case 3: requisito3(vetor)
                        break
                    case 4: requisito4(vetor)
                        break
                    case 5: requisito5(vetor)
                        break
                    case 6: console.log(`O programa será encerrado.`)
                        break
                    default: console.log(`Opção inválida`)
                }      
            }
            while (opcao != 6)
    }

    function requisito1(vet){   // vet aponta para vetor (vet está alterando para vetor)
        var objeto = new Object()
        objeto.sexo = prompt(`Informe o sexo M/F`)
        objeto.altura = Number(prompt(`Informe a altura`))
        objeto.idade = Number(prompt(`Informe a idade`))
        objeto.olhos = prompt(`Informe a cor dos olhos: A-(Azul) V-(Verde) C-(Castanho)`)
        // insere no vetor
        vet.push(objeto) // insere no vetor (escopo global)
        console.log(`Habitantes cadastrados com sucesso`)

    }

    function requisito2(vet){
        var soma = 0
        var qtde = 0
        for (var i=0; i < vet.length; i++){
            if ((vet[i].olhos == 'C') && (vet[i].altura > 1.60)){
                soma = soma + vet[i].idade
                qtde++
            }   
        }
        if (qtde != 0)
        console.log(`A média é: ${soma / qtde}`)
        else console.log(`Não existe habitante para este calculo`)
    }

    function requisito3(vet){
        
    }

    function requisito4(vet){
        
    }

    function requisito5(vet){
        
    }