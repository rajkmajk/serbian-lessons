document.getElementById('button').addEventListener('click', function() {
  
    let h2 = document.querySelector('h2');
    let norsk = ["juče (yesterday)", "danas (today)", "sutra (tomorrow)", "dobro (good)", "loše (bad)", "dođi! (come here!)", "poljubiti (to kiss)", "posao (job)", "odlično! (great!)", "skupo (expensive)", "pijan (drank)", "jeftino (cheap)", "neverovatno (incredible)", "sto (table)", "stolica (chair)", "pantalone (pants)", "majica (t-shirt)", "netačno (false-not true)", "tačno (true)", "imati (to have)", "biti (to be)", "jabuka (apple)", "ručak (lunch)", "Da li je sve u redu?", "Kako si?", "Šta ima novo?", "osećati (to feel)", "jesti (to eat)", "plakati (to cry)", "pevati (to sing)", "spavati (to sleep)", "učiti srpski jezik (to learn serbian language)"];
    let randomNum = Math.floor(Math.random() * (norsk.length));
    
    h2.innerText = norsk[randomNum];
                  
  })