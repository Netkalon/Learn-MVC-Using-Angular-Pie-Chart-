

uiroute.controller('ChartController', function ($scope) {

        $scope.randomize = function (type) {
            if (type === 'easy') {
                $scope.piePercent1 = random();
                $scope.piePercent2 = random();
                $scope.piePercent3 = random();
                $scope.piePercent4 = random();
            }
            if (type === 'knob') {
                $scope.knobLoaderData1 = random();
                $scope.knobLoaderData2 = random();
                $scope.knobLoaderData3 = random();
                $scope.knobLoaderData4 = random();
            }
        }

        function random() {
            return Math.floor((Math.random() * 100) + 1);
        }


        $scope.knobLoaderData1 = 80;
        $scope.knobLoaderData2 = 50;
        $scope.knobLoaderData3 = 37;
        $scope.knobLoaderData4 = 60;

        $scope.knobLoaderOptions1 = {
            width: '50%', 
            displayInput: false,
            fgColor: '#0f5889'
        };
       
        $scope.knobLoaderOptions2 = {
            width: '50%', 
            displayInput: true,
            fgColor: '#09a564',
            readOnly: true,
            lineCap: 'round'
        };

        $scope.knobLoaderOptions3 = {
            width: '50%', 
            displayInput: true,
            fgColor: '#a50958',
            displayPrevious: true,
            thickness: 0.1
        };

        $scope.knobLoaderOptions4 = {
            width: '50%', 
            displayInput: true,
            fgColor: '#a50909',
            bgColor: '#a54a09',
            angleOffset: -125,
            angleArc: 250
        };

        $scope.piePercent1 = 75;
        $scope.piePercent2 = 50;
        $scope.piePercent3 = 10;
        $scope.piePercent4 = 95;

        $scope.pieOptions = {
            animate: {
                duration: 700,
                enabled: true
            },
            barColor: '#0e74b2',

            scaleColor: false,
            lineWidth: 10,
            lineCap: 'circle'
        };

        $scope.pieOptions1 = {
            animate: {
                duration: 700,
                enabled: true
            },
            barColor: '#0e74b2',
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'circle'
        };

        $scope.pieOptions2 = {
            animate: {
                duration: 700,
                enabled: true
            },
            barColor: '#881243',
            trackColor: false,
            scaleColor: '#ddd',
            lineWidth: 15,
            lineCap: 'circle'
        };

    
});



