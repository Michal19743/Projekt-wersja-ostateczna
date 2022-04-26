var portfolioApp = angular.module('portfolioApp',[]); 

portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.galleries = [
    { 'title':'THE NEW i7',
    'when':'2013-03-24', 
	'cena':'662 800 PLN', 
     'thumbnailUrl':'img/THE NEW i7.jpg'
    },
    { 'title':'BMW serii 2 Coupé',
    'when':'2012-03-05', 
	'cena':'154 900 PLN', 
     'thumbnailUrl':'img/BMW serii 2 Coupé.jpg'
    },
    { 'title':'BMW serii 4 Gran Coupé',
    'when':'2016-03-14', 
	'cena':'209 600 PLN', 
     'thumbnailUrl':'img/BMW serii 4 Gran Coupé.jpg'
    },
    { 'title':'BMW serii 8 Coupé',
    'when':'2013-05-01', 
	'cena':'476 000 PLN', 
     'thumbnailUrl':'img/BMW serii 8 Coupé.jpg'
    },
    { 'title':'BMW iX M60',
    'when':'2017-05-23', 
	'cena':'574 900 PLN', 
     'thumbnailUrl':'img/BMW iX M60.jpg'
    },
    { 'title':'BMW Z4 Roadster',
    'when':'2015-02-05', 
	'cena':'189 900 PLN', 
     'thumbnailUrl':'img/BMW Z4 Roadster.jpg'
    },
    ];
  $scope.sortList = 
    [
        {
            'label':'Alfabetycznie',
            'value':'title'
        },
        {
            'label':'Chronologicznie od najstarszego do najnowszego obrazka',
            'value':'when'
        },
        {
            'label':'Od najnowszego do starszego obrazka',
            'value':'-when'
        },
    ];
	$scope.orderProp = 'Chronologicznie od najstarszego do najnowszego obrazka'; 
}); 