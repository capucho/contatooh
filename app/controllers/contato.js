var contatos = [ {
  _id: 1,
  nome: 'Contato Exemplo 1',
  email: 'cont1@empresa.com.br'
}, {
  _id: 2,
  nome: 'Contato Exemplo 2',
  email: 'cont2@empresa.com.br'
}, {
  _id: 3,
  nome: 'Contato Exemplo 3',
  email: 'cont3@empresa.com.br'
} ];

module.exports = function () {
  var ID_CONTATO_INC = 3;
  var controller = {};

  controller.listaContatos = function ( req, res ) {
    res.json( contatos );
  };

  controller.obtemContato = function ( req, res ) {
    console.log( req.params.id );
    var idContato = req.params.id;
    var contato = contatos.filter( function ( contato ) {
      return contato._id == idContato;
    } )[ 0 ];

    contato ? res.json( contato ) : res.status( 404 ).send( 'Contato nao encontrado' );
  };

  function adiciona( contatoNovo ) {
    contatoNovo._id = ++ID_CONTATO_INC;
    contatos.push( contatoNovo );
    return contatoNovo;
  }

  function atualiza( contatoAlterar ) {
    contatos = contatos.map( function ( contato ) {
      if ( contato._id == contatoAlterar._id ) {
        contato = contatoAlterar;

      }
      return contato;
    } );

    return contatoAlterar;

  }

  controller.salvaContato = function ( req, res ) {
    var contato = req.body;

    contato = contato._id ? atualiza( contato ) : adiciona( contato );

    res.json( contato );

  }

  controller.removeContato = function ( req, res ) {
    console.log( 'API : removeContato' );

    var _idContato = req.params.id;

    contatos = contatos.filter( function ( contato ) {
      return contato._id != _idContato;
    } );

    res.status( 204 ).end();
  }

  return controller;
}
