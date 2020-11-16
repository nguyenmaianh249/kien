var x = [" kien ", " kien1", "kien2"]

var z = x.reduce(function(a, b) {
    return a.concat(b)
})

console.log(z);