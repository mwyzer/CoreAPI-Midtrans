'use strict'

class CStore {
    constructor(items = [], customer) {
        this.items = items;
        this.customer = customer
    }
    baseBody() {
        let gross_amount = 0;
        let order_id = new Date().getTime();

        let items = this.items;
        let customer = this.customer;

        items.forEach(function (item) {
            gross_amount += item.price * item.quantity
        })
        let body = {
            payment_type: "cstore",
            transaction_details: {
                gross_amount,
                order_id
            },
            customer_details: {
                email: customer.email,
                first_name: customer.first_name,
                last_name: customer.last_name,
                phone: customer.phone,
            },
            item_details: items,
        };
        return body;
    }
    indomaret() {
        let base = this.baseBody()
        let mybody = {
            payment_type: base.payment_type,
            transaction_details: base.transaction_details,
            customer_details: base.customer_details,
            items_details: base.item_details,
            cstore: {
                store: "indomaret",
                message: "Pembayaran Produk"
            }
        }
        return mybody
    }
    alfamart() {
        let base = this.baseBody()
        let mybody = {
            payment_type: base.payment_type,
            transaction_details: base.transaction_details,
            customer_details: base.customer_details,
            items_details: base.item_details,
            cstore: {
                store: "alfamart",
                alfamart_free_text_1: "Terima Kasih",
                alfamart_free_text_2: "Pembelian Barang",
                alfamart_free_text_3: "OK",
                message: "Pembayaran Produk"
            }
        }
        return mybody
    }
}

module.exports = CStore
