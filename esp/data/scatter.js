function rand() { 
    return Math.random();
}

Plotly.plot('scatter', [{
    y: [1, 2, 3].map(rand),
    mode: 'lines',
    line: { color: '#80CAF6' }
}]);

var cnt = 0;

var interval = setInterval(function() {

    Plotly.extendTraces('scatter', {
        y: [[rand()]]
    }, [0])

    if (cnt === 100) clearInterval(interval);
}, 300);