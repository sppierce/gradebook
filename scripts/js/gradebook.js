angular.module("Gradebook", []).controller("gradebookCtrl",
	function gradebookCtrl($scope) {
		$scope.gradeNum = 6;
		$scope.letterGrade = null;
		$scope.grade1 = 0;
		$scope.grade2 = 0;
		$scope.grade3 = 0;
		$scope.grade4 = 0;
		$scope.grade5 = 0;
		$scope.result = 0;

		$scope.onClickClear = function() {
			$scope.letterGrade = null;
			$scope.grade1 = 0;
			$scope.grade2 = 0;
			$scope.grade3 = 0;
			$scope.grade4 = 0;
			$scope.grade5 = 0;
			$scope.result = 0;
		};
		
		$scope.calcAvg = function() {
			$scope.result = (parseFloat($scope.grade1) + parseFloat($scope.grade2) + 
				parseFloat($scope.grade3) + parseFloat($scope.grade4) + 
				parseFloat($scope.grade5)) / 5;

			if ($scope.result >= 90 && $scope.result <= 100) {
				$scope.letterGrade = 'A';
				document.getElementById("results").style.color = "#4C762E";
			} else if ($scope.result >= 80 && $scope.result <= 89) {
				document.getElementById("results").style.color = "#6D9521";
				$scope.letterGrade = 'B';				
			} else if ($scope.result >= 70 && $scope.result <= 79) {
				$scope.letterGrade = 'C';				
				document.getElementById("results").style.color = "#D7B600";
			} else if ($scope.result >= 60 && $scope.result <= 69) {
				$scope.letterGrade = 'D';				
				document.getElementById("results").style.color = "#D77900";
			} else {
				$scope.letterGrade = 'F';
				document.getElementById("results").style.color = "#CD3333";
			}
		};
	}
);