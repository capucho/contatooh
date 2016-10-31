angular.module( 'contatooh' ).controller( 'ContatosController', ContatosController );


function ContatosController( $scope, $resource, $routeParams ) {

  $scope.contatos = [];
  $scope.filtro = '';
  $scope.contato = {};

  var Contato = $resource( '/contatos/:id' );

  $scope.init = function init() {
    getContatos();
    findById();
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

  $scope.salva = function salva() {

    $scope.contato.$save()
      .then( function () {
        //success
        $scope.mensagem = {
          texto: 'Contato salvo com sucesso'
        }
        $scope.contato = new Contato();
      } )
      .catch( function () {
        //error
        $scope.mensagem = {
          texto: 'Nao foi possivel salvar'
        }
      } )

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


  function findById() {

    if ( $routeParams.contatoId ) {
      Contato.get( {
        id: $routeParams.contatoId
      }, _success, _error );

      function _success( contato ) {
        $scope.contato = contato;

      }

      function _error( error ) {
        $scope.mensagem = {
          texto: 'Nao foi possivel obter o contato'
        };
      }
    } else {
      $scope.contato = new Contato();
    }
  };


}
