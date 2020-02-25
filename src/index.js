class myPromise {
  constructor (fn) {
    this.status = 'pending'
    this.value = null
    this.reason = null
    this.onFulfilledFunc = []
    this.onRejectedFunc = []

    const reslove = (value) => {
      setTimeout(() => {
        if (this.status === 'pending') {
          this.value = value
          this.status = 'fulfilled'

          this.onFulfilledFunc.forEach(func => {
            func(value)
          })
        }
      })
    }

    const reject = (reason) => {
      setTimeout(() => {
        if (this.status ==='pending') {
          this.reason = reason
          this.status = 'rejected'
  
          this.onRejectedFunc.forEach(func => {
            func(reason)
          })
        }
      })
    }

    fn(reslove, reject)
  }

  then (onfulfilled, onrejected) {
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : data => data
    onrejected = typeof onreject === 'function' ? onrejected : error => { throw error }
    // debugger
    if (this.status === 'fulfilled') {
      onfulfilled(this.value)
    }
    if (this.status === 'rejected') {
      onrejected(this.reason)
    }
    if (this.status === 'pending') {
      this.onFulfilledFunc.push(onfulfilled)
      this.onRejectedFunc.push(onrejected)
    }
  }
}







