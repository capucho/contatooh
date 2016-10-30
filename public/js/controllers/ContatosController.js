angular.module( 'contatooh' ).controller( 'ContatosController', ContatosController );


function ContatosController( $scope, $resource ) {


  $scope.contatos = [];
  $scope.filtro = '';

  $scope.init = function init() {
    getContatos();
  }


  $scope.init();

  /**
   * Functions
   */


  function getContatos() {

    var Contato = $resource( '/contatos' );

    Contato.query( _success, _error );

    function _success( contatos ) {
      $scope.contatos = contatos;

    }

    function _error( error ) {
      console.log( 'Nao foi possivel obter a lista de contatos' );
    }

  };


}
