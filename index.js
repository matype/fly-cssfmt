export default function () {
  this.filter("cssfmt", (source, options) => {
    try {
      return require("cssfmt")(source).toString()
     } catch (e) { throw e }
  })
}
