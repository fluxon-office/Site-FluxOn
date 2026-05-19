# FluxON Website

Site institucional da FluxON, desenvolvido em React e Vite, com deploy automatizado via GitHub Pages.

## Stack

- React 19
- Vite 8
- ESLint
- GitHub Actions
- GitHub Pages

## Estrutura

```text
public/                      Arquivos públicos estáticos
public/brand/                Marca e identidade visual
public/media/                Mídias públicas
src/                         Código-fonte da aplicação
src/assets/showcases/        Imagens de produtos, painéis e entregas
src/assets/team/             Fotos da equipe
src/assets/testimonials/     Fotos de depoimentos
src/components/              Componentes React
src/hooks/                   Hooks compartilhados
src/styles/                  Estilos por seção
src/utils/                   Utilitários de analytics e segurança
```

## Desenvolvimento

```bash
npm ci
npm run dev
```

## Validação

```bash
npm run lint
npm run build
```

## Deploy

O deploy roda automaticamente pelo workflow `.github/workflows/deploy-pages.yml` em todo push para `main`.

Para GitHub Pages, o workflow executa `npm run build:pages`, usando a base `/Site-FluxOn/`. Para desenvolvimento local e outros ambientes, a base permanece `/`.

## Segurança

Este repositório é público e deve conter apenas o necessário para renderizar a página. Variáveis de ambiente, endpoints privados, tokens, integrações server-side e credenciais não devem ser versionados.
