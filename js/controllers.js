'use strict';

/* Controllers */
var app_c=angular.module('appControllers', []);

app_c.controller('generalController', [ '$scope', '$http', function($scope, $http){
}]);


app_c.controller('mapController', [ '$scope', '$http', function($scope, $http){
	$scope.geoObjects = [
		{
			geometry: {
				type: "Point",
				coordinates: [37.60913, 55.7301]
			},
			name: "Если железная дверь закрыта, постучитесь в окно.",
			style: "twirl#lightblueDotIcon",
			number: ""
		}, {
			geometry: {
				type: "Point",
				coordinates: [37.610210000000002, 55.72983]
			},
			name: "На проходной скажите, что вам в фаблаб. Далее прямо, по лестнице вниз, налево, прямо.",
			style: "twirl#lightblueDotIcon",
			number: ""
		}, {
			geometry: {
				type: "Point",
				coordinates: [37.611319999999999, 55.729509999999998]
			},
			name: "Выход из метро \"Октябрьская кольцевая\". Поднимаетесь на эскалаторе, потом налево.",
			style: "twirl#lightblueDotIcon",
			number: ""
		}, {
			geometry: {
				type: "LineString",
				"coordinates": [
					[37.61036, 55.72995],
					[37.61009, 55.7297],
					[37.60986, 55.72976],
					[37.60997, 55.72987],
					[37.60944, 55.73003]
				]
			},
			name: "",
			style: "#id1420459705804721988"
		}, {
			geometry: {
				type: "LineString",
				"coordinates": [
					[37.61132, 55.72951],
					[37.61068, 55.7295],
					[37.61034, 55.7296],
					[37.61049, 55.72979],
					[37.61037, 55.72995],
					[37.60999, 55.73006],
					[37.60926, 55.73029],
					[37.60905, 55.73012],
					[37.60913, 55.7301]
				]
			},
			name: "",
			style: "#id1420459627007873956"
		}, {
			geometry: {
				type: "Polygon",
				coordinates: [
					[
						[37.60897, 55.72995],
						[37.6092, 55.73017],
						[37.60949, 55.73007],
						[37.60939, 55.72998],
						[37.60924, 55.73003],
						[37.60911, 55.72992],
						[37.60897, 55.72995]
					]
				]
			},
			name: "",
			style: "#id1420459431583562165"
		}
	]
}]);