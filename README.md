## Recruiting Dashboard API

### Introduction

This RoR API allows to load candidates and job openings data. It's also possible to update candidate category. 
The API client's README is available > recruiting_dashboard_dront > README.

#### List job_openings
```
[GET] /api/v1/job_openings
```
# response 
|Field      |
|-----------|
| id        |  integer
| title     |  string


#### List candidates
```
[GET] /api/v1/candidates
```
# response 
|Field          |
|---------------|
| id            |  integer
| first_name    |  string
| last_name     |  string
| job_name      |  string
| approval_count|  integer
| category      |  string : waiting or interview
| job_opening_id|  integer
| avatar_link   |  string


#### Update candidate category
```
[PUT] /api/v1/candidate/:id
with params = { candidate: { category: }}
```
# response 
|Field          |
|---------------|
| id            |  integer
| first_name    |  string
| last_name     |  string
| job_name      |  string
| approval_count|  integer
| category      |  string : waiting or interview
| job_opening_id|  integer
| avatar_link   |  string


## Verify code style

Run the following command line :
rubocop

## Run test 
Tests are powered by Rspec : (https://github.com/rspec/rspec-rails)
Run the following command line :
spec


## Ruby and rails version

ruby '2.6.3'
rails '5.2.3'


## Port usage:

- 3000: front-end server
- 3001: API server


## Architecture

2 database tables:
- candidates (id, first_name, last_name, job_name, approval_count, category, job_opening_id, avatar_link, timestamps)
- job_openings (id, title, timestamps)

techno: postgresql

#### Set up

```
rails db:create && rails db:migrate
```

```
rails db:seed
```

## Got questions or improvements?
Feel free to hit me up on:

[Email] (fabienne.bremond@gmail.com)
[GitHub] (https://github.com/FabienneB/)