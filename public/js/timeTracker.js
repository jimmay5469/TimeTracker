function TimeTrackerCtrl($scope, $timeout) {
	$scope.inProg = [];
	$scope.hist = [];
	$scope.start = function () {
		$scope.startItem($scope.newItem);
		$scope.newItem = '';
	};
	$scope.startItem = function(item) {
		if(!$scope.multitask) {
			var clone = $scope.inProg.slice(0);
			clone.forEach(function(x) {
				$scope.stop(x);
			});
		}
		$scope.inProg.push({name: item, startTime: new Date()});
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
	};
	$scope.grouping = function() {
		return $scope.hist.reduce(function(res,obj) {
			if(!(obj.name in res)) {
				res.__array.push(res[obj.name] = {name:obj.name,duration:obj.duration});
			} else {
				res[obj.name].duration += obj.duration;
			}
			return res;
		}, {__array:[]}).__array;
	};
	$scope.total = function() {
		return $scope.hist.reduce(function(res,obj) {
			res += obj.duration;
			return res;
		}, 0);
	};
}