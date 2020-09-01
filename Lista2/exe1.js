
    chefe()
        
        function chefe(){

            var vendedores = []
            var vendas = []

        do{
            var opcao = Number(prompt(`[1]. Cadastrar vendedor [2]. Cadastrar venda [3]. Sair`))
            switch(opcao){
                case 1: cadVendedor(vendedores)   // escopo global
                    break
                case 2: cadVendas(vendas, vendedores)  // é necessário o vetor de vendas e o vetor de vendedores
                case 3:
            }
        }
        while (opcao != 3)
    }
    
        function cadVendedor(vend){  // escopo local - vend faz referencia para vendedores
            var objeto = new Object()
            objeto.codigo = Number(prompt(`Informe o código`))
            objeto.nome = prompt(`Informe o nome`)
            // verifica se cod existe
            if (vend[i].codigo == objeto.codigo){
                console.log(`Código já existe`)
                return 0// sai da função
            }
            
            // insere no vetor
            vend.push(objeto)
            console.log(`Vendedor Cadastrado com sucesso`)
 }
    
        function cadVendas (ven, vendor) //ven representa vendas e vendor representa vendedores
        var objeto = new Object()
        objeto.codigo = Number(prompt(`Informe o código da venda`))
        objeto.vendedor = Number(prompt(`Informe o código do vendedor`))
        objeto.mes = Number(prompt(`Informe o mês da venda`))
        objeto.valor = Number(prompt(`Informe o valor da venda`))

            // o push só funciona se o código existir 
            for (var i=0; i < vendor.length; i++){
                if ((vendor[i].codigo == objeto.vendedor) && (vend[i].mes == objeto.mes)){
                    console.log(`Venda já cadastrada neste mês para o vendedor`)
                        return 0 // sai fa função
                    }
                 
                    //   insere no vetor de vendas
                    vend.push(objeto)
                    console.log(`Venda inserida com sucesso`)
                    return 0 // sai do vetor
                }
    
                    console.log(`Vendedor não existe`)
