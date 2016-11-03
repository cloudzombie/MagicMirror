/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left',
			secondsColor: '#FFC0CB'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				units: 'imperial',
				timeFormat: '12',
				location: 'Portland, US',
				locationID: '5746545',  //ID from http://www.openweathermap.org
				appid: 'd639ed94b5f0e13af1880cbeb7a4d739'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
			      	units: 'imperial',
	            location: 'Portland, US',
							locationID: '5746545',  //ID from http://www.openweathermap.org
	            appid: 'd639ed94b5f0e13af1880cbeb7a4d739'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
			{
			    module: 'MMM-Traffic',
			    position: 'top_left',
			    classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
			    config: {
			        api_key: 'AIzaSyB4hJ9ULDFpGjaqxztwwoJDc8IQi4v5uA8',
			        mode: 'driving',
			        origin: '1433 SW 22nd St. Troutdale, OR 97060',
			        destination: '5600 NE 121st Ave, Vancouver, WA 98682',
			        arrival_time: '0700', //optional, but needs to be in 24 hour time if used.
			        route_name: 'Home to Work',
							show_summary: 'true',
			        changeColor: 'true',
			        showGreen: 'true',
			        limitYellow: 10, //Greater than 5% of journey time due to traffic
			        limitRed: 25, //Greater than 20% of journey time due to traffic
			        traffic_model: 'pessimistic',
			        interval: 150000 //2 minutes
		  }
		},
/***
		    {
		        module: 'wuforecast',
		        position: 'top_right',  // This can be any of the regions.
		                                    // Best results in left or right regions.
		        config: {
		            // See 'Configuration options' for more information.
								units: 'imperial',
								//Location and API Key
		            location: 'OR/Portland',
		            appid: '4b64426880ac2a73' //wunderground.com API key.
		    }
		  },
***/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
