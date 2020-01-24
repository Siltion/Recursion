//the factorial one I deleted... It is displayed to be copied in the video, im assuming it is not for marks.


//console.log(bunnyEars2(5))
function bunnyEars2(bunnies) {
    //failsafe
    if (bunnies == 0) {
        return 0;
        //counts up bunny ears dependant on odd/even
    } else if (bunnies % 2 > 0) {
        return bunnyEars2(bunnies - 1) + 2;
    } else if (bunnies % 2 == 0) {
        return bunnyEars2(bunnies - 1) + 3;
    }                   
}

//console.log(noX('abxkxkxfgex'))
function noX(word) {
    //failsafe
    if (word.length == 0) {
        return "";
        //actually works to slice x characters out, by cycling through word one letter at time, removing X
    } else if (word.charAt(0) == 'x') {
        return noX(word.slice(1));
    } else if (word.charAt(0) != 'x') {
        return word.charAt(0) + noX(word.slice(1));
    }
}

//console.log(sumDigits(156))
function sumDigits(number) {
    //failsafe
    if (number < 10) {
        return 0;
    }
    //removes the first number, by (/) then removes the final number by (%).
    return sunDigits (number/10) + number%10;
}

//console.log(powerN(14, 10))
function powerN (base, int) {
    //failsafe
    if (int == 1) {
        return base;
    }
    //takes the base and multiplies it by the power of int.
    return powerN(base, int - 1) * base
}

//console.log(array11([1, 11, 15, 22, 11, 11, 10], 0))
function array11(numberArray, i) {
    //failsafe
    if (i == numberArray.length) {
        return 0;
    // detects if 11 is present at current index, and counts up by one if true
    } else if (numberArray[i] == 11) {
        return 1 + array11(numberArray, i + 1)
    }
    //runs if 11 is not present, looping the function to check the next index
    return array11(numberArray,i + 1);
}

//console.log(array220([1,4,40]))
function array220(anArray) {
    //failsafe
    if (anArray.length < 2) {
        return false;
        //checks if the number as well as the number * by 10 exists within the array
    } else if (anArray[1] == anArray[0]*10) {
        return true 
    } else {
        anArray.shift()
        return array220(anArray)
}
}

//console.log(triangle(5))
function triangle(numberOfRows) {
    //failsafe
    if (numberOfRows < 2) {
        return numberOfRows;
    }
    //will count upwards for how many rows has been specified, due to it always starting at one row, there is always only 1 more block on the row afterwards
    return triangle(numberOfRows - 1) + numberOfRows
}

//console.log(allStar('aahfrfwyg'))
function allStar(star) {
    if (star.length < 2) {
        return star;
    }
    return star.charAt(0) + '*' + allStar(star.slice(1))
}

//console.log(pairStar('aabhgddjwww'))
function pairStar(star) {
    //failsafe
    if (star.length < 2) {
        return star;
    //if the next character is the same, jam the * in between the characters 
    } else if (star.charAt(0) == star.charAt(1)) {
        return star.charAt(0) + '*' + pairStar(star.slice(1));
    }
    //if the character is not the same, move onto the next through another run of the function
    return star.charAt(0) + pairStar(star.slice(1));
}

function fibonacci() {
    //Honestly i have no idea what this even is tbh... Kinda just leaving this one, after trying to make sense of it for a good while im still stumped by this one, sorry...
}



