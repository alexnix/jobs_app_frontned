'use strict';

angular.module('jobsClientApp')
  .service('API', function ($http, $cookies) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
		login: function(data){
			console.log(data.email + " " + data.password);
			return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/auth/login/',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: data.email,
					hash: data.password,
				}
			}); 
		},

		register: function(data){
			console.log(data.email + " " + data.password);
		    return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/auth/register/',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: data.email,
					hash: data.password,
				}
			}); 
		},

		me: function() {
			return $http({
				method: 'GET',
				url: 'http://rukawajobs.appspot.com/rest/me/',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					email: $cookies.get('email'),
					token: $cookies.get('token'),
				}
			});
		},

		updateProfile: function(profile){
			return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/me/profile',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: $cookies.get('email'),
					token: $cookies.get('token'),
					"Content-Type": "text/plain"
				},
				data: profile
			}); 
		},

		updatePassword: function(newPasswordHash){
			return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/auth/password/update',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: $cookies.get('email'),
					token: $cookies.get('token'),
					hash: newPasswordHash,
					"Content-Type": "text/plain"
				},
			}); 
		},

		getUser: function(id){
		    return $http({
				method: 'GET',
				url: 'http://rukawajobs.appspot.com/rest/user/' + id,
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					email: $cookies.get('email'),
					token: $cookies.get('token'),
				}
			});
		},

		postJob: function(job){
			return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/job/post/new',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: $cookies.get('email'),
					token: $cookies.get('token'),
					"Content-Type": "text/plain"
				},
				data: job
			}); 
		},

		getJobs: function(){
			return $http.get('http://rukawajobs.appspot.com/rest/job/all/0', {
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					token: $cookies.get('token'),
					email: $cookies.get('email'),
				}
			})
		},

		getJob: function(id){
			return $http.get('http://rukawajobs.appspot.com/rest/job/'+id, {
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					token: $cookies.get('token'),
					email: $cookies.get('email'),
				}
			});
		},

		apply: function(data) {
			console.log(data);
			return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/job/apply',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: $cookies.get('email'),
					token: $cookies.get('token'),
					"Content-Type": "text/plain"
				},
				data: data
			}); 
		},

		getApplications: function() {
			return $http.get('http://rukawajobs.appspot.com/rest/me/job/applied/0', {
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					token: $cookies.get('token'),
					email: $cookies.get('email'),
				}
			});
		},

		getMyJobs: function() {
			return $http.get('http://rukawajobs.appspot.com/rest/me/job/posted/0', {
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					token: $cookies.get('token'),
					email: $cookies.get('email'),
				}
			});
		},

		getCandidates: function() {
			return $http.get('http://rukawajobs.appspot.com/rest/me/job/applicants/0', {
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					token: $cookies.get('token'),
					email: $cookies.get('email'),
				}
			});
		},

		report: function(id, message) {
			return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/job/report',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: $cookies.get('email'),
					token: $cookies.get('token'),
					"Content-Type": "text/plain"
				},
				data: { 
					id:  id,
					report: {
						message: message,
					}
				},
			});
		},

		star: function(id) {
			return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/job/star',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: $cookies.get('email'),
					token: $cookies.get('token'),
					"Content-Type": "text/plain"
				},
				data: {id: id}
			}); 
		},

		unstar: function(id) {
			return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/job/unstar',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: $cookies.get('email'),
					token: $cookies.get('token'),
					"Content-Type": "text/plain"
				},
				data: {id: id}
			});
		},

		getStarred: function() {
			return $http.get('http://rukawajobs.appspot.com/rest/me/job/starred/0', {
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					token: $cookies.get('token'),
					email: $cookies.get('email'),
				}
			});
		},

		getReported: function() {
			return $http.get('http://rukawajobs.appspot.com/rest/me/job/reported/0', {
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					token: $cookies.get('token'),
					email: $cookies.get('email'),
				}
			});
		},

		getCompanies: function() {
			return $http.get('http://rukawajobs.appspot.com/rest/company/all', {
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					token: $cookies.get('token'),
					email: $cookies.get('email'),
				}
			});
		},

		getMyCompany: function(){
			return $http.get('http://rukawajobs.appspot.com/rest/me/company', {
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
					token: $cookies.get('token'),
					email: $cookies.get('email'),
				}
			});
		},

		updateMyCompany: function(data){
			return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/me/company/update',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: $cookies.get('email'),
					token: $cookies.get('token'),
					"Content-Type": "text/plain"
				},
				data: data
			}); 
		},

		verifyCompany: function(data){
			console.log(data);
			return $http({
				method: 'POST',
				url: 'http://rukawajobs.appspot.com/rest/me/company/verify',
				headers: {
					serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',	
					email: $cookies.get('email'),
					token: $cookies.get('token'),
					"Content-Type": "text/plain"
				},
				data: data
			}); 
		}

    }
  });
