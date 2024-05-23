## No. of Areas
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

> [!tldr]- Detailed
> ```dataview
> table file.inlinks as "Linked Files"
> from "2 Areas" 
> where para = "area"
> sort file.name
> ```
