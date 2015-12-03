/**
* ngComposer
*
* @author Douglas Lira <douglas.lira.web@gmail.com>
* @url https://github.com/douglaslira/directives/ngcomposer/
*/

var $app = angular.module("App",[]);

$app.directive('composer', [function(){
	return {
        restrict: 'AE',
		scope: {
			ngModel: '='
		},
        template: '<div><textarea class="mention"></textarea></div>',
		link: function($scope, $elem, $attrs){
            $elem.mentionsInput({
                onDataRequest:function (mode, query, callback) {
                    var data = $scope.ngModel;
                    data = _.filter(data, function(item) { return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 });
                    callback.call(this, data);
                }
            });
		}
	}
}]);