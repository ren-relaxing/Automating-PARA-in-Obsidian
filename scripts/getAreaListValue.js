function getAreaListValue () {
    let result = [];

    let options = app.plugins.plugins.dataview.api
    .pages(`"2 Areas"`)
    .where(p => p.para == "area")
    
    options.forEach((option) => {
      result.push(`${option.file.name}`)
    })

    return result.sort()
}
module.exports = getAreaListValue;

// [[<% tp.system.suggester(tp.user.getAreaList(), tp.user.getAreaListValue(), false, "Area") %>]]