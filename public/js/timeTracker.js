function TimeTrackerCtrl($scope, $timeout) {
	$scope.inProg = [];
	$scope.hist = [];
	$scope.start = function () {
		$scope.inProg.push({name: $scope.newItem, startTime: new Date()});
		$scope.newItem = '';
	};
	$scope.stop = function(item) {
		$scope.inProg.splice($scope.inProg.indexOf(item), 1);
		item.duration = Math.ceil((new Date() - item.startTime)/60000)
		$scope.hist.unshift(item);
	};
	$scope.remove = function(item) {
		$scope.hist.splice($scope.hist.indexOf(item), 1);
	};

	//utility
	$scope.now = new Date();
	$scope.$watch('now', function() {
		$timeout(function() {
			$scope.now = new Date();
		},1000);
	});
	$scope.elapsed = function(startTime) {
		return Math.floor(($scope.now - startTime)/1000);
	}
}