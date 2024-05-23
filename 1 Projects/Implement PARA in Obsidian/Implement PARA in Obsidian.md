---
creation date: 2024-05-24 00:30
para: project
domain:
  - "[[Digital Organization]]"
start-date: 2024-05-20
by-when: 2024-06-20
achieve-date:
---
# Implement PARA in Obsidian
## Desired outcome
- build and sustain a structured note-taking system

## Action Plan
1. Understand PARA framework
2. Download PARA template
3. Move existing notes to Obsidian

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