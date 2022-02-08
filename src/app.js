let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".es"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let n = 0; n < noun.length; n++) {
      for (let d = 0; d < domain.length; d++) {
        console.log(pronoun[i] + adj[j] + noun[n] + domain[d]);
      }
    }
  }
}
