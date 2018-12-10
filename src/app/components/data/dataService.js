angular.module('app').service('dataService', dataService);

dataService.$inject = [
    '$rootScope',
    '$http'
];

function dataService($rootScope, $http) {
    var self = this;


    self.validateDetails = validateDetails;
    self.setThrottle = setThrottle;
    self.getThrottle = getThrottle;
    self.stop = stop;


    /*
        Validates IP Address and Channel, return 200 if details are ok

        Path : /macros/start
        Method : Post
    */
    function validateDetails(ip_address, channel) {


        if (!ip_address) { ip_address = $rootScope.defaultUrl; }

        var url = 'http://' + ip_address + '/macros/start'

        return $http.post(url);
    }

    /*
        Sends throttle percentage

        Path : /macros/setPercent/:channel,:percentage
        Method : Post
    */
    function setThrottle(ip_address, channel, percentage) {


        if (!ip_address) { ip_address = $rootScope.defaultUrl; }

        var url = 'http://' + ip_address + '/macros/setPercent/' + channel + ',' + percentage;
        console.log(url);
        return $http.post(url);
    }

    /*
        Gets throttle percentage
        
        Path :/macros/getPercent/:channel
        Method : Post
    */
    function getThrottle(ip_address, channel) {

        if (!ip_address) { ip_address = $rootScope.defaultUrl; }

        var url = 'http://' + ip_address + '/macros/getPercent/' + channel;

        return $http.get(url);

    }


    /*
	    Stops channel 
	
	    Path : /macros/stop
	    Method : Post
    */
    function stop(ip_address) {
        if (!ip_address) { ip_address = $rootScope.defaultUrl; }

        var url = 'http://' + ip_address + '/macros/stop';

        return $http.post(url);
    }

}