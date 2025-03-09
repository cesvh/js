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
const fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    return yield response.json();
});
const showPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const posts = yield fetchData(url); // unknown type
        posts.map((post) => console.log(post.title));
    }
    catch (err) {
        console.log(err);
    }
});
showPosts();
