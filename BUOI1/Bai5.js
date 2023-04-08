// fetch('https://jsonplaceholder.typicode.com/users')
//      .then((res) => res.json())
//      .then((result) => console.log(result))
//      .catch((err) => console.error(err));

async function asyncAwait(url) {
     try {
          let res = await fetch(url);
          let json = await res.json();
          console.log(json);
          console.log(result);
     } catch {
          let err;
          console.log(err);
     }
}
asyncAwait('https://jsonplaceholder.typicode.com/users')