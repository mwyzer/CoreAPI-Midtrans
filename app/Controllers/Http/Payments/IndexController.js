'use strict'

const CoreApi = require("../Midtrans/CoreApi")
const BankTransfer = require("./BankTransfer");
const CreditCard = require("./CreditCard.js");

class IndexController {
    async bankTransfer({ request, response }) {
        let data;
        let body = request.body;
        let customers = {
            email: "muhammad.wyzer@gmail.com",
            first_name: "Muhammad",
            last_name: "Wyzer",
            phone: "082211376074"
        }

        let bankTransfer = new BankTransfer(body.items, customers)
        switch (body.channel) {
            case "BCA":
                data = bankTransfer.bca()
                break;
            case "BNI":
                data = bankTransfer.bni()
                break;
            case "PERMATA":
                data = bankTransfer.permata()
                break;
        }
        // return data;
        return CoreApi.charge(data);
    }
    async getToken({ request, response }) {
        return CoreApi.token(request.body);
    }
    async creditCard({ request, response }) {
        let data;
        let body = request.body;
        let customers = {
            email: "muhammad.wyzer@gmail.com",
            first_name: "Muhammad",
            last_name: "Wyzer",
            phone: "082211376074",
        };
        let creditCard = new CreditCard(body.items, customers, body.token);
        switch (body.type) {
            case "AUTHORIZE":
                data = creditCard.withAuth();
                break;
            case "BASIC":
                data = creditCard.basic();
                break;
        }
        return CoreApi.charge(data);
    }
}

module.exports = IndexController
