//primeiro parametro eh o nome do modulo
//o segundo eh um array com todas as suas dependencias

angular.module( 'contatooh', [ 'ngRoute', 'ngResource' ] )
  .config( _config );


/**
 * Configuration Function
 * @param  {[Object]} $routeProvider [Injection of routeProvider]
 */

function _config( $routeProvider ) {

  $routeProvider.when( '/contatos', {
    templateUrl: 'partials/contatos.html',
    controller: 'ContatosController'
  } );

  $routeProvider.when( '/contatos/:contatoId', {
    templateUrl: 'partials/contato.html',
    controller: 'ContatosController'
  } );

  $routeProvider.otherwise( {
    redirectTo: '/contatos'
  } );

};
