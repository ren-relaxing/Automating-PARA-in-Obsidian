## Projects
## No. of Projects (7)
```dataview
list without id length(rows.file.name)
from "1 Projects"
where para = "project"
group by 1
```
```dataview
TABLE WITHOUT ID file.link as "Project", length(file.inlinks) as "No. of Linked Files"
FROM "1 Projects" 
WHERE para = "project"
SORT length(file.inlinks) desc
```

## Areas
## No. of Areas (21)
```dataview
list without id length(rows.file.name)
from "2 Areas"
where para = "area"
group by 1
```
```dataview
TABLE WITHOUT ID file.link as "Area", length(file.inlinks) as "No. of Linked Files"
FROM "1 Projects" or "2 Areas" or "3 Resources"
WHERE para = "area"
SORT length(file.inlinks) desc
```

## Resources
## No. of Resources (21)
```dataview
list without id length(rows.file.name)
from "3 Resources"
where para = "resource"
group by 1
```
```dataview
TABLE WITHOUT ID file.link as "Resource", length(file.inlinks) as "No. of Linked Files"
FROM "1 Projects" or "2 Areas" or "3 Resources"
WHERE para = "resource"
SORT length(file.inlinks) desc
```
