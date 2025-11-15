### Glossary entity

```js
{
"term": string,
"definition": text,
"bullet_points": string[],
"example": {
  "exampleFormat": string // egen entity
  "exampleText": string
},
"domain": string, // egen entity
"kind": string, // egen entity
"usage_context": string // egen entity
"courses": [
    {
    "title": string,
    "short_form": string,
    "hve_credits": number,
    "weblink": datatype?
    }
], // egen entity
"weblinks": [], //inte egen entity gör samma som med bullet_points
"created_at": string,// genereras själv av prisma eller railway?
"updated_at": string // genereras själv av prisma eller railway?
}

```
