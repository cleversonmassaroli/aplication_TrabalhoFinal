
myApp.controller('MeuController', function($scope) {
     
   	 
	$scope.usuario = {};
	$scope.caption = 'Adicionar';


	$scope.dados = [{
		nome : 'Cleverson Massaroli',
		email : 'cleverson.massaroli@gmail.com',
		telefone : '(46) 8808-4886'
	},{
		nome : 'Paulo da Silva',
		email : 'paulos@hotmail.com',
		telefone : '(46) 1111-1212'
	},{
		nome : 'Maria Pereira',
		email : 'maria.maria@hotmail.com',
		telefone : '(46) 1234-9909'
	}];
	
	$scope.salvaDados = function( usuario ){
		if ($scope.caption == 'Adicionar'){
			var newUsuario = angular.copy(usuario);
			$scope.dados.push(newUsuario);
			delete $scope.usuario;

		}else{
			var newUsuario = angular.copy(usuario);
			$scope.dados[ $scope.idx ] = newUsuario;
			delete $scope.usuario;
			$scope.caption = 'Adicionar';			
		}
	}

	$scope.excluirDados = function(i){

		$scope.dados.splice(i,1);
		delete $scope.usuario;
		$scope.caption = 'Adicionar';
	}

	$scope.editarDados = function( i ){
		$scope.idx = i ;
		$scope.caption = 'Salvar';
		$scope.usuario = angular.copy( $scope.dados[ i ] );
	}
    
})
