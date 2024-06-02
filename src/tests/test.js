"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = __importDefault(require("../class/movie"));
test('create movie', () => {
    const result = new movie_1.default(1, 'Мстители', 2012, 'США', 'Avengers Assemble', ['fantasic', 'action', 'fantasy', 'adventure'], 137);
    expect(result).toEqual({
        id: 1,
        name: 'Мстители',
        year: 2012,
        country: 'США',
        slogan: 'Avengers Assemble',
        jenre: ['fantasic', 'action', 'fantasy', 'adventure'],
        durationMinutes: 137,
    });
});
