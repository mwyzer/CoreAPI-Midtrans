'use strict'

const CoreApi = require("../Midtrans/CoreApi")
const BankTransfer = require("./BankTransfer")

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
}

module.exports = IndexController
