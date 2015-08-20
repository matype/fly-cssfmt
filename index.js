export default function () {
  this.filter("cssfmt", (data) => {
    try {
      return require("cssfmt").process(data.toString())
     } catch (e) { throw e }
  })
}
