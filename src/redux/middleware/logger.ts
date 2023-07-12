import { Middleware } from "@reduxjs/toolkit"

const logger: Middleware = (store) => (next) => (action) => {
  console.log(store.getState(), action,)
  next(action)
}

export default logger