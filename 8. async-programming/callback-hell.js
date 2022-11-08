function doAsyncTask(cb) {
    setTimeout(() => {
        console.log('Async Task calling Callback')
        cb()
    }, 0)
}

// Writing callback this way because it is asynchronous
// and we need things to happen in a sequence one after another
// so chaining these callbacks is kind of parsing funtions
// in terms of arguments to another function.

doAsyncTask(() => {
    console.log('Do first async task')

    doAsyncTask(() => {
        console.log('Do second async task')

        doAsyncTask(() => {
            console.log('Do third async task')
        })
    })
})
