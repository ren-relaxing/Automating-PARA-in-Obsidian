function getResourceListValue () {
    let result = [];

    let options = app.plugins.plugins.dataview.api
    .pages(`"3 Resources"`)
    .where(p => p.para == "resource")

    options.forEach((option) => {
      result.push(`${option.file.name}`)
    })
    
    return result.sort()
}
module.exports = getResourceListValue;

// [[<% tp.system.suggester(tp.user.getResourceList(), tp.user.getResourceListValue(), false, "Resource") %>]]