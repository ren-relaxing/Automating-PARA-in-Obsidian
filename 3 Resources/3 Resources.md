## No. of Resources
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

> [!tldr]- Detailed
> ```dataview
> table file.inlinks as "Linked Files"
> from "3 Resources" 
> where para = "resource"
> sort file.name
> ```
