angular.module( 'contatooh' ).controller( 'ContatosController', ContatosController );


function ContatosController( $scope, $resource ) {


  $scope.contatos = [];
  $scope.filtro = '';

  var Contato = $resource( '/contatos/:id' );

  $scope.init = function init() {
    getContatos();
  }




  $scope.init();

  /**
   * Functions
   */

  $scope.remove = function removeContato( contato ) {
    console.log( contato );
    Contato.delete( {
      id: contato._id
    }, getContatos, function ( error ) {
      console.log( 'Nao foi possivel remover o contato' );
    } );
  }

  function getContatos() {


    Contato.query( _success, _error );

    function _success( contatos ) {
      $scope.contatos = contatos;

    }

    function _error( error ) {
      console.log( 'Nao foi possivel obter a lista de contatos' );
    }

  };


}
