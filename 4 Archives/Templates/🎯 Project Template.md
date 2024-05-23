<%*
area = await tp.system.suggester(tp.user.getAreaList(), tp.user.getAreaListValue(), false, "Area")
-%>
---
creation date: <% tp.file.creation_date() %>
para: project
domain: 
  - "[[<% area %>]]"
start-date: 
by-when: 
achieve-date: 
---
# {{VALUE:🎯 Add Project}}
## Desired outcome
- 

## Action Plan
1. 
2. 
3. 

---
## All files
```dataview
Table without id subtopic as Subtopic, rows.file.link as File
WHERE contains(file.path, this.file.folder) AND file.name != this.file.name
FLATTEN subtopic
GROUP BY subtopic
SORT subtopic, file.name
```

## Linked notes
```dataview
Table sort(rows.file.link) as File
FROM [[]]
WHERE !contains(file.folder, this.file.name)
GROUP BY file.folder as Folder
```