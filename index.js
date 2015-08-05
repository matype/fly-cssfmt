export default function () {
  this.filter("cssfmt", (source) => {
    try {
      return require("cssfmt").process(source)
     } catch (e) { throw e }
  })
}
