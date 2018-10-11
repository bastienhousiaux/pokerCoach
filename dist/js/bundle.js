"use strict";
var poker;
(function (poker) {
    var Card = /** @class */ (function () {
        function Card(value, color) {
            if (value === void 0) { value = 0; }
            if (color === void 0) { color = 0; }
            this.value = value;
            this.color = color;
        }
        Card.prototype.getStringRepresentation = function () {
            return this.getCardStringValue() + this.getCardColorValue();
        };
        Card.prototype.getNumberRepresentation = function () {
            return this.color * Card.CARD_STRING_VALUES.length + this.value;
        };
        Card.prototype.fromNumberRepresentation = function (representation) {
            this.value = representation % 13;
            this.color = Math.floor(representation / 13);
        };
        Card.prototype.getCardStringValue = function () {
            return Card.CARD_STRING_VALUES[this.value];
        };
        Card.prototype.getCardColorValue = function () {
            return Card.CARD_STRING_COLORS[this.color];
        };
        Card.CARD_STRING_VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
        Card.CARD_STRING_COLORS = ["♥", "♦", "♣", "♠"];
        return Card;
    }());
    poker.Card = Card;
})(poker || (poker = {}));
var poker;
(function (poker) {
    var PokerHand = /** @class */ (function () {
        function PokerHand(card0, card1) {
            if (card0 === void 0) { card0 = new poker.Card(); }
            if (card1 === void 0) { card1 = new poker.Card(); }
            this.cards = [card0, card1];
        }
        PokerHand.prototype.getStringRepresentation = function () {
            var sr = this.cards[0].getCardStringValue() + this.cards[1].getCardStringValue();
            if (sr[0] === sr[1])
                return sr;
            if (this.cards[0].color === this.cards[1].color)
                return sr + "s";
            return sr + "o";
        };
        PokerHand.prototype.getNumberRepresentation = function () {
            return this.cards[0].getNumberRepresentation() * 100 + this.cards[1].getNumberRepresentation();
        };
        PokerHand.prototype.fromNumberRepresentation = function (representation) {
            this.cards[0].fromNumberRepresentation(Math.floor(representation / 100));
            this.cards[1].fromNumberRepresentation(representation % 100);
        };
        return PokerHand;
    }());
    poker.PokerHand = PokerHand;
})(poker || (poker = {}));
/// <reference path="./poker/Card.ts" />.
/// <reference path="./poker/PokerHand.ts" />.
console.log("main");
var poker;
(function (poker) {
    var PokerHandSolver = /** @class */ (function () {
        function PokerHandSolver() {
        }
        PokerHandSolver.prototype.solveHandAndTable = function (hand, table) {
        };
        return PokerHandSolver;
    }());
    poker.PokerHandSolver = PokerHandSolver;
})(poker || (poker = {}));
var poker;
(function (poker) {
    var PokerTable = /** @class */ (function () {
        function PokerTable() {
            this.cards = [];
        }
        return PokerTable;
    }());
    poker.PokerTable = PokerTable;
})(poker || (poker = {}));
