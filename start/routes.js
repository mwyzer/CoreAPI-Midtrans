'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  Route.post("/charge", "Payments/IndexController.bankTransfer");
}).prefix("va");

Route.group(() => {
  Route.post("/token", "Payments/IndexController.getToken");
  Route.post("/charge", "Payments/IndexController.creditCard");
}).prefix("cc");

Route.group(() => {
  Route.post("/gopay", "Payments/IndexController.goPay");
}).prefix("ew");

Route.group(() => {
  Route.post("/charge", "Payments/IndexController.cStore");
}).prefix("cs");
