let cats =['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
    return cats;
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(Broom){
    cats.push(Broom);
    return cats;
}

function prependCat(Arnold){
    cats.unshift(Arnold);
    return cats ;
}

function removeLastCat(){
    cats.pop('Garfield');
    return cats;
}

function  removeFirstCat(){
    cats.shift('Milo');
    return cats;
}
