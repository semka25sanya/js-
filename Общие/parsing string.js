const path = "/useres/download/index.html"

const isHtml = path => {
  const requiredExt = path = ".html"
  const pathExt = path.slice(-5);
   
  if (pathExt == requiredExt) {
    return true }
    else {
      return false
    }
  }
console.log(isHtml(path));