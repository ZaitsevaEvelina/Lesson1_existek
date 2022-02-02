"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myLogin = 'user_1';
var userData = ['first user', 1];
var country;
(function (country) {
    country["UK"] = "United Kingdom";
    country["PL"] = "Poland";
    country["UA"] = "Ukraine";
})(country || (country = {}));
var IUser = /** @class */ (function () {
    function IUser(userId, userName, userSecondName) {
        this.id = userId;
        this.name = userName;
        this.second_name = userSecondName;
    }
    IUser.prototype.getFullName = function () {
        console.log('Your full name ' + this.name + this.second_name + '. You are live in ' + country.UA);
    };
    return IUser;
}());
var UserAge = /** @class */ (function (_super) {
    __extends(UserAge, _super);
    function UserAge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 27;
        return _this;
    }
    return UserAge;
}(IUser));
var user1 = {
    id: userData[1],
    name: 'John',
    second_name: 'Black',
    parametres: {
        weight: 75,
        height: 1.8
    },
    optimal: function () {
        var y = this.parametres.weight - this.parametres.height * this.parametres.height;
        var indicator = 1;
        if (y <= indicator) {
            console.log('Your weight is normal');
        }
        else {
            console.log('Your weight is not normal');
        }
    }
};
user1.optimal();
