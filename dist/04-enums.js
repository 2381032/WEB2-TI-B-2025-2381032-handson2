"use strict";
//Numeric enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
//String enum
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
//Campuran Number dan String
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Pending"] = 1] = "Pending";
})(Status || (Status = {}));
