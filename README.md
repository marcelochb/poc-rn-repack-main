# [POC] React Native com Code Spliting, Packages e Clean Architecture.
  Com o objetivo de paralelizar e facilitar a organização de grandes projetos para aplicações mobile, foi criado um POC (prove of concept) com uma aplicação principal, e um code split com a jornadas dos modulo de empréstimo, e packages de ferramentas para auxiliar na infraestrutura.

### Tecnologias usadas

- React Native
- Typescript
- React-Navigation
- Inversify (inject dependency to clean architecture)
- Redux
- Lerna

## Estrutura do projeto

Projeto
- packages => Microfronts e Package-tool
  - core => Microfont com a regra de negócio (clean, testes unitários e estado global).
  - interfaces => Package-Tool com as interfaces de comunicação entre microfronts.
  - templates => Package-Tool com o template das screens utilizadas pelos microfront de jornada..
  - theme => Package-Tool com a estrutura de tema para toda aplicação.
  - ui => Package-Tool de componentes usado para montar os templates.
- src
  - assets: Application images, videos, gifs and others.
  - routes: React Navigation config.
  - screens: Main app screens.
  - store: Global state app (redux)

### Como compilar e rodar o projeto

- Faça o clone do projeto Main
```bash
git clone --recursive -j8 https://github.com/marcelochb/poc-rn-repack-main.git
```
- Instale as dependências (Main Project)
```bash
yarn && npx lerna bootstrap
```
- Iniciar Webpack (Main Project)
```bash
yarn start
```
- Faça o clone do Microfront Loan
```bash
git clone --recursive -j8 https://github.com/marcelochb/poc-rn-repack-microfront.git
```
- Instale as dependências (Microfront Project)
```bash
yarn && npx lerna bootstrap
```
- Iniciar Webpack Remoto (Microfront Project)
```bash
yarn start-repack
```
- Rodar iOS (Main Project)
```bash
yarn pod && yarn ios
```