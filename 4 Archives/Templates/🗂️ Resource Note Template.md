<%*
resource = await tp.system.suggester(tp.user.getResourceList(), tp.user.getResourceListValue(), false, "Resource")

path = "/3 Resources/"+resource+"/"+tp.file.title
await tp.file.move(path)
-%>
---
creation date: <% tp.file.creation_date() %>
domain: 
  - "[[<% resource %>]]"
subtopic: 
---
# <% tp.file.title %>
<% tp.file.cursor() %>
