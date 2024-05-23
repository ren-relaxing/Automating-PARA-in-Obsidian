function getProjectListValue () {
    let result = [];

    let options = app.plugins.plugins.dataview.api
    .pages(`"1 Projects"`)
    .where(p => p.para == "project")
    
    // options.forEach((option) => {
    //   result += `- ${option.file.link}\n`
    // })

    options.forEach((option) => {
      result.push(`${option.file.name}`)
    })
    
    return result.sort()
}
module.exports = getProjectListValue;

// [[<% tp.system.suggester(tp.user.getProjectList(), tp.user.getProjectListValue(), false, "Project") %>]]