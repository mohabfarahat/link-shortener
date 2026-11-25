"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRepositoryHashMap = void 0;
const rxjs_1 = require("rxjs");
class AppRepositoryHashMap {
    constructor() {
        this.hashMap = new Map();
        this.hashMap = new Map();
    }
    get(hash) {
        return (0, rxjs_1.of)(this.hashMap.get(hash));
    }
    put(hash, url) {
        return (0, rxjs_1.of)(this.hashMap.set(hash, url).get(hash));
    }
}
exports.AppRepositoryHashMap = AppRepositoryHashMap;
//# sourceMappingURL=app.repository.hashmap.js.map