

    chefe()

       function chefe(){
            var vetor = [] // escopo global - ele que iremos passar nos parametros da função

            do{

                var opcao = Number(prompt("Digite [1]. Req1 /n [2]. Req2 /n [3]. Req3 /n [4]. Req4 /n [5].Req5 /n [6]. Sair"))
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

    }

    function requisito2(vet){
        
    }

    function requisito3(vet){
        
    }

    function requisito4(vet){
        
    }

    function requisito5(vet){
        
    }