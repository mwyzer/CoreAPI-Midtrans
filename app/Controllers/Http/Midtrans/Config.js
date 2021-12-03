'use strict'
const SANDBOX_BASE_URL = "https://api.sandbox.midtrans.com/v1";
const PRODUCTION_BASE_URL = "https://api.midtrans.com/v1";


class Config {
    static serverKey = "SB-Mid-server-MkuleUs6MSR8kMPSwoEobisI";
    static isProduction = false;
    static is3ds = false;
    static isSanitized = false;

    static getBaseUrl() {
        return Config.isProduction ? PRODUCTION_BASE_URL : SANDBOX_BASE_URL;
    }
}

module.exports = Config
