const array = readline();

  const [q, t] = array.split(' ').map(Number);

  let i = 0;
  const questions = [];

for (let index = 0; index < q; index++) {

    questions.push(parseInt(readline()));
    i++;

    if (i === q) {
      solve(questions, t);
    }
    
}


function solve(questions, t) {
  const output = [];

  for (let k of questions) {
    const mod = k % (t + 1);
    if (mod === 1)
      output.push("Peygir");
    else if (mod === 2)
      output.push("Tannaz");
    else if (mod === 3)
      output.push("Jeddy");
    else
      output.push("Morshed");
  }

  console.log(output.join('\n'));
}
