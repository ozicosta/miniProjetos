function addContato(){
    const contactSection = document.getElementById('contact-list')
    const h3 = document.createElement('h3') //criando um elemento h3 na página
    h3.innerText = "Contato" //colocando texto no h3
    const ul = document.createElement('ul') //criando uma lista para dentro dela colocar os elementos como nome
    

    //criando bloco do nome
    const nameLi = document.createElement('li') //criando cada elemento da lista
    nameLi.innerText = 'Nome: ' //adicionando o nome do campo

    const nameInput = document.createElement('input') //criando uma caixa de texto
    nameInput.type ='text' //informando que o tipo dessa caixa é texto

    //vinculando bloco do nome com ul
    nameLi.appendChild(nameInput) //criando vínculo entre nome do elemento da lista e a caixa de texto
    ul.appendChild(nameLi) //criando vínculo entre a lista e o elemento de cada li
    ul.appendChild(document.createElement('br'))

    //criando bloco de contato
    const contatoLi = document.createElement('li')
    contatoLi.innerText = 'Telefone: '

    const contatoInput = document.createElement('input')
    contatoInput.type = 'text'

    //vinculando bloco de contato com o ul
    contatoLi.appendChild(contatoInput) // criando vínculo entre o nome do elemento da lista e a caixa de texto
    ul.appendChild(contatoLi) //criando vínculo entre a lista ul e o elemento de cada li (colocando a caixa de texto e o nome dentro de uma lista)
    ul.appendChild(document.createElement('br'))

    //criando bloco de endereço
    const enderecoLi = document.createElement('li')
    enderecoLi.innerHTML = '<label for="endereco">Endereço: </label>'

    const enderecoInput = document.createElement('input')
    enderecoInput.type = 'text'
    enderecoInput.id = 'endereco'

    enderecoLi.appendChild(enderecoInput)
    ul.appendChild(enderecoLi)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul) //adiciona vários elementos de uma única vez
    contactSection.appendChild(document.createElement('hr'))




}

function removerContato(){
    const contactSection = document.getElementById('contact-list')
    const titulo = document.getElementsByTagName('h3')
    const dadosContato = document.getElementsByTagName('ul')
    const hr = document.getElementsByTagName('hr')

    contactSection.removeChild(titulo[titulo.length - 1])
    contactSection.removeChild(dadosContato[dadosContato.length -1])
    contactSection.removeChild(hr[hr.length -1])
}