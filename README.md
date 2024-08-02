# iniCCie

https://github.com/joseglauberbo/progweb

O iniCCie tem como objetivo permitir que os professores publiqeum vagas e que os alunos possam se candidatar para essas vagas

## CRUD

- CRUD de usuários (Create, Read, Update e Delete);

POST - /users/new - CRIA USUÁRIO
GET All - /users
GET userById - /users/:id
DELETE - /users/ - Deleta usuário
POST - /users - ATUALIZA usuário

- CRUD de Opportunities

GET - /opportunities - GET ALL
POST - /opportunities/new - CRIA NOVA OPORTUNIDADE
DELETE - /opportunities/:id/delete - DELETAR
POST - /opportunities/:id/edit - update
GET - /opportunities/:id - get by id

- CRUD de candidate

GET - /candidate - GET ALL
POST - /candidate/new - cRIA NOVA candidatura
DELETE - /candidate/:id/delete - DELETAR
POST - /candidate/:id/edit - update
GET - /candidate/:id - get by id

opportunityRouter.get("/", getAllOpportunities);
opportunityRouter.get("/:id", getById);
opportunityRouter.post("/new", createOpportunity);
opportunityRouter.put("/:id/edit", updateOpportunity);
opportunityRouter.delete("/:id/delete", deleteOpportunity);
