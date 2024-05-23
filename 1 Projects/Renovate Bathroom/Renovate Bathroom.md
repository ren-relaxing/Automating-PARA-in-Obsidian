---
creation date: 2024-05-24 00:47
para: project
domain: 
  - "[[Home]]"
start-date: 
by-when: 
achieve-date: 
---
# Renovate Bathroom
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