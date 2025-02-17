//20種類のポケモンのデータ取得
export const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
};

//1つ1つのポケモンのデータ取得
export const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            resolve(data);
    });
    });
};