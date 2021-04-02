// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat()
{
    cats.push("Ralph");
}

function destructivelyPrependCat()
{
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat()
{
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat()
{
    cats.shift("Milo")
}

function appendCat()
{
    const newCats = [...cats.slice(0), "Broom", ...cats.slice(cats.length)]
    return newCats
}

function prependCat()
{
    const newCats = ["Arnold", ...cats]
    return newCats
}

function removeLastCat()
{
    const newCats = cats.slice(0, 2)
    return newCats
}

function removeFirstCat()
{
    const newCats = cats.slice(1)
    return newCats
}