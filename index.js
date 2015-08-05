export default function () {
  this.filter("cssfmt", (source) => {
    try {
      return require("cssfmt")(source).toString()
     } catch (e) { throw e }
  })
}
