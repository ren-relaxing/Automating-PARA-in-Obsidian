<%*
area = await tp.system.suggester(tp.user.getAreaList(), tp.user.getAreaListValue(), false, "Area")

path = "/2 Areas/"+area+"/"+tp.file.title
await tp.file.move(path)
-%>
---
creation date: <% tp.file.creation_date() %>
domain: 
  - "[[<% area %>]]"
subtopic: 
---
# <% tp.file.title %>
<% tp.file.cursor() %>
