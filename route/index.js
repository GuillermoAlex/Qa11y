// This file is part of Qa11y Dashboard.
//
// Qa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Qa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Qa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.
// Developed by Guillermo Alexis Lemunao Carrasco and Pa11y Guys

'use strict';

const presentTask = require('../view/presenter/task');

module.exports = route;

// Route definition
function route(app) {
	app.express.get('/index', (request, response, next) => {
		app.webservice.tasks.get({lastres: true}, (error, tasks) => {
			if (error) {
				return next(error);
			}
			response.render('index', {
				tasks: tasks.map(presentTask),
				deleted: (typeof request.query.deleted !== 'undefined'),
				isHomepepe: true
			});
		});
	});
}
