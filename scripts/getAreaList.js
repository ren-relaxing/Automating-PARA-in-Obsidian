function getAreaList () {
  let result = [];

  let options = app.plugins.plugins.dataview.api
  .pages(`"2 Areas"`)
  .where(p => p.para == "area")

  options.forEach((option) => {
    result.push(`${option.file.name}`)
  })
  result.sort();

  result.forEach(addPrefix);
  function addPrefix(item, index, a) {
    switch(a[index])
    {
      // 2 Areas
      case "Career Planning": prefix = "🇬🇧 ";
      break; 
      case "Drawing": prefix = "🎨 ";
      break; 
      case "Finance": prefix = "🏦 ";
      break;
      case "Goal Setting": prefix = "🎯 ";
      break;
      case "Hobbies": prefix = "⛷️ ";
      break;
      case "Personal Development": prefix = "🌱 ";
      break; 
      case "Pet": prefix = "🐣 ";
      break; 
      case "Professional Development": prefix = "👩🏻‍💼 ";
      break; 
      case "Reading": prefix = "📖 ";
      break; 
      case "Travel": prefix = "🏖️ ";
      break;
      
      // 3 Resources
      case "Clothing": prefix = "👕 ";
      break;
      case "Computer Science": prefix = "💻 ";
      break;
      case "Cooking": prefix = "👩🏻‍🍳 ";
      break;
      case "Meditate": prefix = "🧘🏻‍♀️ ";
      break;
      case "Habit Formation": prefix = "🔄 ";
      break;
      case "Personal Knowledge Management": prefix = "🧠 ";
      break;
      case "Productivity": prefix = "🔝 ";
      break;
      case "Project Management": prefix = "‍💼 ";
      break;
      case "Psychology": prefix = "💜 ";
      break;
      case "Software Development": prefix = "⚙️ ";
      break;
      
      default: prefix = ""
    }
    a[index] = prefix + item
  }

  return result
}
module.exports = getAreaList;

// [[<% tp.system.suggester(tp.user.getAreaList(), tp.user.getAreaListValue(), false, "Area") %>]]