// callback are syncronous by itself

function doAsyncTask(cb) {
    setTimeout(() => {
        // error-first callback
        cb(null, message)
    }, 1000)
}

doAsyncTask((err, data) => {
    if (err) {
        throw err
    } else {
        console.log(`Data: ${data}`)
    }
})

let message = 'Callback called'
