function loadAlgorithms(url) {
    fetch('../db/' + url)
    .then(res => res.json())
    .then(algs => {
        let algorithms = [];
        algs.algs.forEach((alg) => {
            algorithms.push(`
            <tr>
                <td class="name">${alg.name}</td>
                <td class="case"><img src="${algs.cases + "/" + alg.name + ".png"}" height="100"></td>
                <td class="alg">${alg.alg}</td>
                <td class="group">${alg.group}</td>
            </tr>
            `);
        });

        document.querySelector('tbody').innerHTML = algorithms.join('\n');

    })
}
