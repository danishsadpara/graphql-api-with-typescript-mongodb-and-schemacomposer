"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactMutations = void 0;
const types_1 = require("./types");
const models_1 = require("./models"); // Import your MongoDB model
exports.contactMutations = {
    createContact: {
        type: types_1.ContactTC.getType(),
        args: {
            input: types_1.InputContactTC,
        },
        resolve: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            const createdContact = yield models_1.ContactModel.create(input);
            return createdContact.toObject();
        }),
    },
};
