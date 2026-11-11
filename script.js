// Uppgift 2
{
  var minVar = "Jag är en var";
  let minLet = "Jag är en let";
  const minConst = "Jag är en const";

  // Testar att skriva ut inuti blocket
  console.log(minVar, minLet, minConst);
}

// Har kommenterat bort dessa för att koden inte ska krascha,
// men testade dem under uppgiftens gång.
// console.log(minVar);
// console.log(minLet);
// console.log(minConst);

/* Reflektion uppgift 2
1. Jag har lärt mig att 'var' inte bryr sig om block (måsvingar), den läcker ut och blir tillgänglig utanför. 'let' och 'const' är däremot "block-scoped", vilket betyder att de bara lever inuti blocket där de skapades.
2. När jag loggade variablerna inuti blocket skrevs alla tre ut utan problem. När jag försökte logga dem utanför blocket, skrevs min 'var' ut, men programmet kraschade och gav ett felmeddelande när det försökte hitta min 'let' och min 'const' eftersom de inte fanns där ute.
*/

// Uppgift 3 och 4
const add = (num1, num2) => {
  // Uppgift 4.2 - Jämförelser
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  // Uppgift 4.7 - Ternary operator
  console.log(num1 ? "truthy" : "falsy");

  // Uppgift 4.8 till 4.10 - If-sats och returnera summan
  if (
    num1 !== null &&
    num1 !== undefined &&
    num2 !== null &&
    num2 !== undefined &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    return num1 + num2;
  } else {
    console.log("Felaktig input: Båda parametrarna måste vara siffror.");
  }
};

/* Reflektion uppgift 3
1. Om jag hade skapat funktionen med 'let' istället för 'const' hade det funnits en risk att jag råkade skriva över funktionen senare i koden, t.ex. genom att skriva 'add = 5'. Med 'const' är jag säker på att 'add' alltid är den här funktionen.
2. Om jag hade skapat samma funktion med en funktionsdeklaration hade det sett ut så här:
function add(num1, num2) { 
    return num1 + num2; 
}
3. Att returnera något innebär att funktionen skickar tillbaka ett värde dit den blev anropad, så att jag kan använda det resultatet i resten av mitt program.
*/

/* Reflektion uppgift 4
1. En ternary operator fungerar som en kort if-else-sats på en enda rad. Jag ställer ett villkor och efter frågetecknet bestämmer jag vad som händer om det är sant, och efter kolon bestämmer jag vad som händer om det är falskt.
2. Skillnaden mellan två (==) och tre (===) likhetstecken är att två tecken bara kollar om värdet är lika och kan göra om datatypen för att jämföra (t.ex. är "0" och 0 lika). Tre tecken kollar att både värdet OCH datatypen är exakt samma (då är inte strängen "0" och siffran 0 lika).
3. Jag löste kontrollen i if-satsen genom att använda "inte lika med" (!==) för att kolla att num1 och num2 varken var 'null' eller 'undefined', och parade ihop detta med logiska "och" (&&) för att säkerställa att ALLA villkor måste stämma.
*/

// Uppgift 5.1 - Skapa globala variabler
const num1 = 0;
let arg1;
let sum = false;

// Uppgift 5.2 - Anropa funktionen med de olika testerna
sum = add(sum, 1);
sum = add("0", 3);
sum = add(3, "num1");
sum = add(-5, num1);
sum = add(arg1, 7);
sum = add();

// Uppgift 5.3 - Skriv ut de globala variablerna
console.log(num1);
console.log(sum);

/* Reflektion uppgift 5
1. En 'parameter' är namnet på luckan inuti funktionsdefinitionen som ska ta emot data (t.ex. num1 i add(num1, num2)). Ett 'argument' är den faktiska datan jag skickar in när jag anropar funktionen (t.ex. 3 i add(3, 5)). En 'variabel' är en behållare som lagrar data i programmet, till skillnad från argument som bara lever under själva funktionsanropet.
2. Det värde jag får allra sist i 'num1' är 0. Detta beror på att jag skapade en global konstant som hette 'num1' med värdet 0 högre upp. Parametern 'num1' inuti funktionen har inget med denna globala variabel att göra.
3. Steg för steg:
   - Test 1 (sum, 1): Funktionen fick ett booleanskt värde (false) och en siffra (1). If-satsen stoppade detta eftersom false inte är en siffra.
   - Test 2 ("0", 3): Funktionen fick en sträng ("0") och en siffra (3). If-satsen stoppade eftersom båda måste vara siffror.
   - Test 3 (3, "num1"): Samma sak, ena argumentet är en sträng ("num1"), if-satsen avbryter.
   - Test 4 (-5, num1): Båda är siffror (-5 och 0). Villkoren i if-satsen stämmer, så funktionen lägger ihop dem och returnerar -5.
   - Test 5 (arg1, 7): 'arg1' är undefined, vilket stoppas av if-satsen.
   - Test 6 (utan argument): Båda parametrarna blir undefined, if-satsen stoppar.
   Eftersom bara Test 4 faktiskt returnerade en siffra, och de andra fastnade i else-satsen (som inte returnerar något utan bara loggar ett felmeddelande), blir värdet på 'sum' till slut 'undefined' vid de sista anropen.
*/
