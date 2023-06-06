# [POC] React Native com Code Spliting, Packages e Clean Architecture.
  Com o objetivo de paralelizar e facilitar a organização de grandes projetos para aplicações mobile, foi criado um POC (prove of concept) com uma aplicação principal, e um code split com a jornadas dos modulo de empréstimo, e packages de ferramentas para auxiliar na infraestrutura.

### Tecnologias usadas

- React Native
- Typescript
- React-Navigation
- Inversify (inject dependency to clean architecture)
- Redux

## Estrutura do projeto


Projeto
- packages => Microfronts e Package-tool
  - [core =>](https://github.com/marcelochb/poc-rn-microfront-core) Microfont com a regra de negócio (clean, testes unitários e estado global).
  - [interfaces =>](https://github.com/marcelochb/poc-rn-microfront-interfaces) Package-Tool com as interfaces de comunicação entre microfronts.
  - [templates =>](https://github.com/marcelochb/poc-rn-microfront-templates) Package-Tool com o template das screens utilizadas pelos microfront de jornada..
  - [theme =>](https://github.com/marcelochb/poc-rn-microfront-theme) Package-Tool com a estrutura de tema para toda aplicação.
  - [ui =>](https://github.com/marcelochb/poc-rn-microfront-ui) Package-Tool de componentes usado para montar os templates.
- src
  - assets: Application images, videos, gifs and others.
  - routes: React Navigation config.
  - screens: Main app screens.
  - store: Global state app (redux)

### Como compilar e rodar o projeto
- Faça o git clone de todos os microfronts e package-tool na pasta packages do projeto
  Exemplo:
    `git clone --recursive -j8 https://github.com/marcelochb/poc-rn-repack-main.git`
    etc...
- `yarn`
- `npx lerna bootstrap`
Iniciar Webpack
- `yarn start`
Rodar Android
- `yarn android`
Rodar iOS
- `yarn pod`
- `yarn ios`
