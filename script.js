/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p     //price of the first game
 *  2. INTEGER d     //dollars less the previous one
 *  3. INTEGER m     //min cost can sell game
 *  4. INTEGER s     //starting funds
 */

const howManyGames = (p, d, m, s) => {
    // Return the number of games you can buy
    let count = 0;
    let gamePrice = p;
    while(s >= 0 && gamePrice >= m && s - gamePrice >= 0) {
        count++;
        s -=gamePrice;
        if(gamePrice - d > m) {
            gamePrice -=d;   
        } else {
            gamePrice = m;
        }
        console.log("count", count, "s->", s, "gamePrice->", gamePrice);
    }
    
    return count;
}
