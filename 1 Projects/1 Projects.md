## No. of Projects
```dataview
list without id length(rows.file.name)
from "1 Projects"
where para = "project"
group by 1
```

```dataview
Table without id domain as "Area", sort(rows.file.link) as Projects
FROM "1 Projects"
WHERE file.name != "1 Projects" and contains(para, "project")
FLATTEN domain
GROUP BY domain
SORT domain
```
