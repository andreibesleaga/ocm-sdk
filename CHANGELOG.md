# Changelog

## 0.14.0-beta (2026-02-27)

Full Changelog: [v0.13.11-beta...v0.14.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.11-beta...v0.14.0-beta)

### Features

* **mcp:** add an option to disable code tool ([5b57772](https://github.com/andreibesleaga/ocm-sdk/commit/5b57772ccacbeb17049a4c37ad92ef59823ce37b))


### Bug Fixes

* **mcp:** update prompt ([da8e111](https://github.com/andreibesleaga/ocm-sdk/commit/da8e1113a6e2459232f1abb5c0551c934b1b1eef))


### Chores

* **internal:** move stringifyQuery implementation to internal function ([1dc9fd8](https://github.com/andreibesleaga/ocm-sdk/commit/1dc9fd8891e3ca3f0aefc46b9d4eac31644139a0))

## 0.13.11-beta (2026-02-26)

Full Changelog: [v0.13.10-beta...v0.13.11-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.10-beta...v0.13.11-beta)

### Chores

* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([6fb5206](https://github.com/andreibesleaga/ocm-sdk/commit/6fb52064d54845e8f652cee3e15e068848cc7055))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([d032020](https://github.com/andreibesleaga/ocm-sdk/commit/d032020a426045cd9ba9e342b409a827deba08a1))

## 0.13.10-beta (2026-02-25)

Full Changelog: [v0.13.9-beta...v0.13.10-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.9-beta...v0.13.10-beta)

### Chores

* update SDK settings ([154af54](https://github.com/andreibesleaga/ocm-sdk/commit/154af54f3e68da3f034ef2116ef9f334b8ea626c))

## 0.13.9-beta (2026-02-25)

Full Changelog: [v0.13.8-beta...v0.13.9-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.8-beta...v0.13.9-beta)

### Chores

* update SDK settings ([d6b2cdc](https://github.com/andreibesleaga/ocm-sdk/commit/d6b2cdc037f117f89c58d6521cb1468c9ca027a7))

## 0.13.8-beta (2026-02-25)

Full Changelog: [v0.13.7-beta...v0.13.8-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.7-beta...v0.13.8-beta)

### Chores

* **internal:** unconfigure MCP Server hosting ([a7e8a01](https://github.com/andreibesleaga/ocm-sdk/commit/a7e8a01eb2936ed197231788224e92bfca2ff106))

## 0.13.7-beta (2026-02-25)

Full Changelog: [v0.13.6-beta...v0.13.7-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.6-beta...v0.13.7-beta)

### Chores

* **internal:** codegen related update ([90c57db](https://github.com/andreibesleaga/ocm-sdk/commit/90c57dbf8b34116709aede00c8272a642426b1c9))
* **internal:** make MCP code execution location configurable via a flag ([e99c542](https://github.com/andreibesleaga/ocm-sdk/commit/e99c542d2f4f11c9bc373702bb5d0bf0791351ff))
* update SDK settings ([43cde64](https://github.com/andreibesleaga/ocm-sdk/commit/43cde64cd2b9d71d455a7d538a47af88efecbd4b))
* update SDK settings ([1ef081a](https://github.com/andreibesleaga/ocm-sdk/commit/1ef081a5a80827f6118428bc039dd7260c753bee))

## 0.13.6-beta (2026-02-24)

Full Changelog: [v0.13.5-beta...v0.13.6-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.5-beta...v0.13.6-beta)

### Bug Fixes

* **docs/contributing:** correct pnpm link command ([3d6fa4c](https://github.com/andreibesleaga/ocm-sdk/commit/3d6fa4cf1f1e5649564dec287b367fb89e05c330))


### Chores

* **internal:** update agents version ([26a8d0c](https://github.com/andreibesleaga/ocm-sdk/commit/26a8d0c336a8952b4fac2320006dfaaf240a1492))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([470a2d0](https://github.com/andreibesleaga/ocm-sdk/commit/470a2d0a5bdeb45c4d6b84b0e664890a9c7865a9))

## 0.13.5-beta (2026-02-20)

Full Changelog: [v0.13.4-beta...v0.13.5-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.4-beta...v0.13.5-beta)

### Bug Fixes

* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([3061c88](https://github.com/andreibesleaga/ocm-sdk/commit/3061c8891f1f2b54af9b20dde52ba83d2e9ed210))


### Chores

* **internal/client:** fix form-urlencoded requests ([06b6333](https://github.com/andreibesleaga/ocm-sdk/commit/06b6333c09843d016c2cf40447280c7bb717615a))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([64f25b9](https://github.com/andreibesleaga/ocm-sdk/commit/64f25b98fabe0f3ec868937eb29ff7551d4d9712))
* **internal:** cache fetch instruction calls in MCP server ([e6ae3a2](https://github.com/andreibesleaga/ocm-sdk/commit/e6ae3a2de60702ec5b0f7fdc5f2bfb2c80e99893))
* **internal:** remove mock server code ([9fd8469](https://github.com/andreibesleaga/ocm-sdk/commit/9fd8469369cb8391beaef8a28669153e32d773aa))
* **mcp:** correctly update version in sync with sdk ([e287223](https://github.com/andreibesleaga/ocm-sdk/commit/e287223fae374f2d899394c84d02e22121887304))
* update mock server docs ([e61e7e5](https://github.com/andreibesleaga/ocm-sdk/commit/e61e7e5419cb9ed787e3a1edc77b2102689785eb))

## 0.13.4-beta (2026-02-14)

Full Changelog: [v0.13.3-beta...v0.13.4-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.3-beta...v0.13.4-beta)

### Chores

* **internal:** improve layout of generated MCP server files ([035f766](https://github.com/andreibesleaga/ocm-sdk/commit/035f766dda7f05016f5bc7061d2bf9173d3da069))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([035e1e0](https://github.com/andreibesleaga/ocm-sdk/commit/035e1e0dbee31bbec1397774a5dff473868fd2aa))
* update SDK settings ([0c1f756](https://github.com/andreibesleaga/ocm-sdk/commit/0c1f75642bc6ab72502544d61807fa6f669c2f59))
* update SDK settings ([07dfa0c](https://github.com/andreibesleaga/ocm-sdk/commit/07dfa0cba9d987905a9d5c16c5395e342c5074d7))

## 0.13.3-beta (2026-02-12)

Full Changelog: [v0.13.2-beta...v0.13.3-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.2-beta...v0.13.3-beta)

### Chores

* **internal:** avoid type checking errors with ts-reset ([c5c2ae8](https://github.com/andreibesleaga/ocm-sdk/commit/c5c2ae88491e369f5551ccc7a64c45ac39fcef8d))

## 0.13.2-beta (2026-02-10)

Full Changelog: [v0.13.1-beta...v0.13.2-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.1-beta...v0.13.2-beta)

### Chores

* update SDK settings ([3244cc0](https://github.com/andreibesleaga/ocm-sdk/commit/3244cc075c5be933de9c7708727a3e108050af68))
* update SDK settings ([c211a85](https://github.com/andreibesleaga/ocm-sdk/commit/c211a85490c5d211a190276871a7cc3057ad6e40))

## 0.13.1-beta (2026-02-10)

Full Changelog: [v0.13.0-beta...v0.13.1-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.13.0-beta...v0.13.1-beta)

### Chores

* **internal:** allow basic filtering of methods allowed for MCP code mode ([9f99543](https://github.com/andreibesleaga/ocm-sdk/commit/9f99543ac122da6589ff8500feaf1b4f25696624))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([8b20a3d](https://github.com/andreibesleaga/ocm-sdk/commit/8b20a3db46f89ad8360610206c163eafa7b2168e))

## 0.13.0-beta (2026-02-07)

Full Changelog: [v0.12.9-beta...v0.13.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.12.9-beta...v0.13.0-beta)

### Features

* **mcp:** add initial server instructions ([9e04c90](https://github.com/andreibesleaga/ocm-sdk/commit/9e04c906845721332ccedf26f0596f048c4f0bdd))


### Bug Fixes

* **client:** avoid removing abort listener too early ([b763191](https://github.com/andreibesleaga/ocm-sdk/commit/b76319142edd000491e6f4dfafef64df4d6a9203))


### Chores

* **client:** restructure abort controller binding ([ea2d793](https://github.com/andreibesleaga/ocm-sdk/commit/ea2d7932892cd5305490e4c38fa06020ee13c5dd))
* **internal:** add health check to MCP server when running in HTTP mode ([2702ef9](https://github.com/andreibesleaga/ocm-sdk/commit/2702ef9c7ddd2ca6aebcbeed61b8181e2a84a1b6))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([8ffee8d](https://github.com/andreibesleaga/ocm-sdk/commit/8ffee8dce1c7e8cff8a72fc6b75cf67e2d2b7f7f))
* **internal:** upgrade hono ([3e702eb](https://github.com/andreibesleaga/ocm-sdk/commit/3e702eb6b1b4ef718d843322d45a6af107b0666a))

## 0.12.9-beta (2026-02-03)

Full Changelog: [v0.12.8-beta...v0.12.9-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.12.8-beta...v0.12.9-beta)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([4659194](https://github.com/andreibesleaga/ocm-sdk/commit/4659194caee7d5654a2b7b31da877889311568e4))


### Chores

* **client:** do not parse responses with empty content-length ([0225cd7](https://github.com/andreibesleaga/ocm-sdk/commit/0225cd72825a95590ff3556a4e135125c9fa8242))
* **internal:** support oauth authorization code flow for MCP servers ([5fc93e6](https://github.com/andreibesleaga/ocm-sdk/commit/5fc93e642351ff47c32fe6f4079695d80f0ec8d5))

## 0.12.8-beta (2026-01-29)

Full Changelog: [v0.12.7-beta...v0.12.8-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.12.7-beta...v0.12.8-beta)

### Chores

* update SDK settings ([d27f318](https://github.com/andreibesleaga/ocm-sdk/commit/d27f31844e8bdac9b8a78db2442bf6a31750fb20))

## 0.12.7-beta (2026-01-29)

Full Changelog: [v0.12.6-beta...v0.12.7-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.12.6-beta...v0.12.7-beta)

### Bug Fixes

* **docs:** fix mcp installation instructions for remote servers ([b86aa41](https://github.com/andreibesleaga/ocm-sdk/commit/b86aa41711f56491e1ef3b592cdfee8de6c8b23d))


### Chores

* **mcp:** up tsconfig lib version to es2022 ([e602fe7](https://github.com/andreibesleaga/ocm-sdk/commit/e602fe7c95554fca35f45b254f09e46351a3cfeb))
* update SDK settings ([0b70320](https://github.com/andreibesleaga/ocm-sdk/commit/0b7032069bc555c03bfc30298e69965da0fe653c))

## 0.12.6-beta (2026-01-28)

Full Changelog: [v0.12.5-beta...v0.12.6-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.12.5-beta...v0.12.6-beta)

### Bug Fixes

* **mcp:** allow falling back for required env variables ([fc5ac10](https://github.com/andreibesleaga/ocm-sdk/commit/fc5ac10dba93dcab35308bc2d6cffc0f2f57d39e))


### Chores

* **internal:** codegen related update ([5829132](https://github.com/andreibesleaga/ocm-sdk/commit/5829132ca6f520bf2d468d2ca3e78729403feba5))
* **internal:** upgrade wrangler version ([4917182](https://github.com/andreibesleaga/ocm-sdk/commit/4917182f82f46a0ebace181dac1f33ca4c947d12))

## 0.12.5-beta (2026-01-26)

Full Changelog: [v0.12.4-beta...v0.12.5-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.12.4-beta...v0.12.5-beta)

### Chores

* update SDK settings ([94878c2](https://github.com/andreibesleaga/ocm-sdk/commit/94878c245a9d02aa2ea4349988719d8466c6a0da))
* update SDK settings ([f896212](https://github.com/andreibesleaga/ocm-sdk/commit/f896212e1980ee503c5b4e69e0db148cbc93cb02))

## 0.12.4-beta (2026-01-24)

Full Changelog: [v0.12.3-beta...v0.12.4-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.12.3-beta...v0.12.4-beta)

### Chores

* **ci:** upgrade `actions/github-script` ([257a0c5](https://github.com/andreibesleaga/ocm-sdk/commit/257a0c578db1cbdfe99fe6270dc13e59fa56eaa0))
* **internal:** update lock file ([512e859](https://github.com/andreibesleaga/ocm-sdk/commit/512e859e4ea4dc6a602cb132f803d0a870c1b736))

## 0.12.3-beta (2026-01-23)

Full Changelog: [v0.12.2-beta...v0.12.3-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.12.2-beta...v0.12.3-beta)

### Chores

* update SDK settings ([0f0ef4f](https://github.com/andreibesleaga/ocm-sdk/commit/0f0ef4f81124fc941fa6e7c5b710042247175b75))

## 0.12.2-beta (2026-01-23)

Full Changelog: [v0.12.1-beta...v0.12.2-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.12.1-beta...v0.12.2-beta)

### Chores

* configure new SDK language ([a22937a](https://github.com/andreibesleaga/ocm-sdk/commit/a22937a02c35b6c307535e2270b63be24510159a))

## 0.12.1-beta (2026-01-17)

Full Changelog: [v0.12.0-beta...v0.12.1-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.12.0-beta...v0.12.1-beta)

### Bug Fixes

* **mcp:** correct code tool api output types ([6a49bfb](https://github.com/andreibesleaga/ocm-sdk/commit/6a49bfb03dada51ec200e04641644af02dc57ef3))
* **mcp:** fix options parsing ([4b0c318](https://github.com/andreibesleaga/ocm-sdk/commit/4b0c318037fe99876c6beccefff5f85336545bbd))
* **mcp:** update cloudflare worker host page ([22c70f1](https://github.com/andreibesleaga/ocm-sdk/commit/22c70f1488b784a19e10c1f712d50fbf03905ba2))
* **mcp:** update code tool prompt ([0035c99](https://github.com/andreibesleaga/ocm-sdk/commit/0035c9931396f7c5dc35c781f29911d479ce2561))


### Chores

* break long lines in snippets into multiline ([0357b8c](https://github.com/andreibesleaga/ocm-sdk/commit/0357b8c9fe6471f9176571d206d792075c25890e))
* **internal:** bump MCP dependencies ([e6be204](https://github.com/andreibesleaga/ocm-sdk/commit/e6be204ae3f1fd7c4c38d287b9440026dea4d869))
* **internal:** codegen related update ([8ba1959](https://github.com/andreibesleaga/ocm-sdk/commit/8ba1959bbc29de32f086fe6c6c98a522816462ed))
* **internal:** codegen related update ([b89227d](https://github.com/andreibesleaga/ocm-sdk/commit/b89227d80ed525b4c4adb83938c443df412e2a43))
* **internal:** codegen related update ([40c07c2](https://github.com/andreibesleaga/ocm-sdk/commit/40c07c285c0d0cafc80f9159ab15db0defe61793))
* **internal:** codegen related update ([6139186](https://github.com/andreibesleaga/ocm-sdk/commit/6139186cf5e4bc1b9685c1b06eccec506fb7b673))
* **internal:** fix dockerfile ([fe42664](https://github.com/andreibesleaga/ocm-sdk/commit/fe4266440816e3fe787eebdeb136aac81c7092ee))
* **internal:** update `actions/checkout` version ([c581b86](https://github.com/andreibesleaga/ocm-sdk/commit/c581b863ca55344b486da0c0be0074974dccbb1a))
* **internal:** upgrade babel, qs, js-yaml ([0d8727c](https://github.com/andreibesleaga/ocm-sdk/commit/0d8727ca6319f708c9f3b14ff2096c57777d7dbf))
* **mcp:** add intent param to execute tool ([1be2a57](https://github.com/andreibesleaga/ocm-sdk/commit/1be2a57da0127419eafc4ef76d2c6797062345d7))
* **mcp:** pass intent param to execute handler ([3a060db](https://github.com/andreibesleaga/ocm-sdk/commit/3a060dbd871a2b45fc81592ce8dba9c6d542319e))
* **mcp:** upgrade dependencies ([cbfb45c](https://github.com/andreibesleaga/ocm-sdk/commit/cbfb45c9528cf354157e7316906195e54b48709d))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([469810d](https://github.com/andreibesleaga/ocm-sdk/commit/469810d06774ea9da323cadf4b0c072cb0c5541a))

## 0.12.0-beta (2025-12-19)

Full Changelog: [v0.11.1-beta...v0.12.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.11.1-beta...v0.12.0-beta)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Chores

* **mcp:** remove deprecated tool schemes ([5f13785](https://github.com/andreibesleaga/ocm-sdk/commit/5f13785460958ad0506cd36cfd25865973ccbb9b))

## 0.11.1-beta (2025-12-18)

Full Changelog: [v0.11.0-beta...v0.11.1-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.11.0-beta...v0.11.1-beta)

### Bug Fixes

* **mcp:** add client instantiation options to code tool ([32680b6](https://github.com/andreibesleaga/ocm-sdk/commit/32680b654c5c2c6c982c3fe673159e1506215213))
* **mcp:** pass base url to code tool ([c396b27](https://github.com/andreibesleaga/ocm-sdk/commit/c396b27c1e882fbfe8e2581ee64d5dcda65948de))


### Chores

* **mcp:** update lockfile ([d1fb2ab](https://github.com/andreibesleaga/ocm-sdk/commit/d1fb2ab54e797fcb90931350b063e1bfdea29740))

## 0.11.0-beta (2025-12-06)

Full Changelog: [v0.10.0-beta...v0.11.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.10.0-beta...v0.11.0-beta)

### Features

* **mcp:** add typescript check to code execution tool ([d1ed835](https://github.com/andreibesleaga/ocm-sdk/commit/d1ed835071449119a7e09975627c149f8631a564))
* **mcp:** handle code mode calls in the Stainless API ([eca1d6e](https://github.com/andreibesleaga/ocm-sdk/commit/eca1d6e8d10ab807ac2997aa5608d6a9d806a09c))


### Bug Fixes

* **mcp:** correct code tool API endpoint ([4e63950](https://github.com/andreibesleaga/ocm-sdk/commit/4e63950895b20d587e28a1c607fc364b977d170c))
* **mcp:** return correct lines on typescript errors ([6a4cb41](https://github.com/andreibesleaga/ocm-sdk/commit/6a4cb418f15ff50ac8987f5349cffeb92b12d49c))


### Chores

* **internal:** codegen related update ([d18ca40](https://github.com/andreibesleaga/ocm-sdk/commit/d18ca40de14b6bdd51dceb38eb870438765e5e26))
* **internal:** codegen related update ([91f854a](https://github.com/andreibesleaga/ocm-sdk/commit/91f854a2bc3cbb5b2babde34f7257d815e50f5fd))
* **internal:** upgrade eslint ([830e20b](https://github.com/andreibesleaga/ocm-sdk/commit/830e20bac5462fed93eb68f6b3f7398a5c23c430))
* use latest @modelcontextprotocol/sdk ([ffadbda](https://github.com/andreibesleaga/ocm-sdk/commit/ffadbda01d622160d4000e7dc70eb7ef12f4904c))

## 0.10.0-beta (2025-12-02)

Full Changelog: [v0.9.2-beta...v0.10.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.9.2-beta...v0.10.0-beta)

### Features

* **mcp:** add detail field to docs search tool ([452c90d](https://github.com/andreibesleaga/ocm-sdk/commit/452c90dc3e4fa4ccd7ff9e09ecf7be247701d9c3))
* **mcp:** return logs on code tool errors ([305acb0](https://github.com/andreibesleaga/ocm-sdk/commit/305acb03e9de016b314e5b217e96e1596b82abfb))


### Bug Fixes

* **mcp:** return tool execution error on api error ([a1b6fee](https://github.com/andreibesleaga/ocm-sdk/commit/a1b6fee86425cb7baed9b4c312d3093cda534788))


### Chores

* **client:** fix logger property type ([0c49e8e](https://github.com/andreibesleaga/ocm-sdk/commit/0c49e8eeb27e1eb8501cbd87d4f917aa8c80154a))

## 0.9.2-beta (2025-11-19)

Full Changelog: [v0.9.1-beta...v0.9.2-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.9.1-beta...v0.9.2-beta)

### Bug Fixes

* **mcp:** return tool execution error on jq failure ([c90e601](https://github.com/andreibesleaga/ocm-sdk/commit/c90e6019b9b2f696b6b4700d5de6dc0e8b02f738))


### Chores

* **internal:** codegen related update ([f5afca7](https://github.com/andreibesleaga/ocm-sdk/commit/f5afca7933ec9a0363980d16f9cedb4a8588c6ac))
* **internal:** configure MCP Server hosting ([e4662c8](https://github.com/andreibesleaga/ocm-sdk/commit/e4662c8d8bf6056d88348557a1dea97be74f8ae3))
* **mcp:** clarify http auth error ([1a969a3](https://github.com/andreibesleaga/ocm-sdk/commit/1a969a36ed478a9c978d22c7fa07a7873f3fae32))
* **mcp:** upgrade jq-web ([c9798b4](https://github.com/andreibesleaga/ocm-sdk/commit/c9798b48253fef3b7fd40c0ca5244e1857f6ddab))


### Documentation

* **mcp:** add a README link to add server to VS Code or Claude Code ([64b9486](https://github.com/andreibesleaga/ocm-sdk/commit/64b94861b528df9d657c9c6e7697ae018ae51b01))

## 0.9.1-beta (2025-11-06)

Full Changelog: [v0.9.0-beta...v0.9.1-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.9.0-beta...v0.9.1-beta)

### Chores

* **internal:** codegen related update ([a836eb9](https://github.com/andreibesleaga/ocm-sdk/commit/a836eb9d855e88128f98404881ec33a93d88b1c3))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([27fe8f7](https://github.com/andreibesleaga/ocm-sdk/commit/27fe8f77ecaf3d55b4207aa24e5b20ffd6ba62c9))
* **mcp:** add line numbers to code tool errors ([0fb67e9](https://github.com/andreibesleaga/ocm-sdk/commit/0fb67e93eb6da17b60053219be48c50d931d1b96))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([0d18d21](https://github.com/andreibesleaga/ocm-sdk/commit/0d18d21714056f399a326141341250a8ec310a3e))

## 0.9.0-beta (2025-11-05)

Full Changelog: [v0.8.4-beta...v0.9.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.8.4-beta...v0.9.0-beta)

### Features

* **mcp:** enable optional code execution tool on http mcp servers ([ce5826c](https://github.com/andreibesleaga/ocm-sdk/commit/ce5826c80ca1e60ea3360af97d2dfb4d7333f711))


### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([b28b2dc](https://github.com/andreibesleaga/ocm-sdk/commit/b28b2dc3d1eff6540fa76629de6fd02d4528ddbb))


### Chores

* **internal:** grammar fix (it's -&gt; its) ([d8cb424](https://github.com/andreibesleaga/ocm-sdk/commit/d8cb424bdeec662b55a61b951578a38418b3b97e))
* mcp code tool explicit error message when missing a run function ([739b2be](https://github.com/andreibesleaga/ocm-sdk/commit/739b2befb5d9cf950579f90f59a5684361275387))
* use structured error when code execution tool errors ([4d5e1b6](https://github.com/andreibesleaga/ocm-sdk/commit/4d5e1b690bfa4fec10d5886a43e99becf3b0f292))

## 0.8.4-beta (2025-10-09)

Full Changelog: [v0.8.3-beta...v0.8.4-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.8.3-beta...v0.8.4-beta)

### Chores

* extract some types in mcp docs ([0d185ea](https://github.com/andreibesleaga/ocm-sdk/commit/0d185eac66daec85801b07630c585a545672d392))
* **internal:** use npm pack for build uploads ([b0789d8](https://github.com/andreibesleaga/ocm-sdk/commit/b0789d8a13ba055f7e662ff5bdd32aa980787df2))

## 0.8.3-beta (2025-10-04)

Full Changelog: [v0.8.2-beta...v0.8.3-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.8.2-beta...v0.8.3-beta)

### Bug Fixes

* **mcp:** fix cli argument parsing logic ([d281b31](https://github.com/andreibesleaga/ocm-sdk/commit/d281b318f9741232c159b3e88a1cd36cea6a6c9b))
* **mcp:** resolve a linting issue in server code ([3202108](https://github.com/andreibesleaga/ocm-sdk/commit/3202108f32bbd2c0b7d563e92b53dde7e61fbdab))


### Chores

* **internal:** codegen related update ([cc5f436](https://github.com/andreibesleaga/ocm-sdk/commit/cc5f43619aea0b995ad6e51f51c70148666e764a))
* **internal:** ignore .eslintcache ([d3f5ede](https://github.com/andreibesleaga/ocm-sdk/commit/d3f5ede713b4c677df1159b375dad7ded8bac177))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([a909570](https://github.com/andreibesleaga/ocm-sdk/commit/a909570361c77aa9914295ee1c759165548e62e9))
* **mcp:** allow pointing `docs_search` tool at other URLs ([5b27151](https://github.com/andreibesleaga/ocm-sdk/commit/5b27151298c7302e51b0ee39c53e0a69d2135d77))
* update lockfile ([18e7a38](https://github.com/andreibesleaga/ocm-sdk/commit/18e7a38cb8eb8e1ce9a0fdacc3f1d0d74289d262))

## 0.8.2-beta (2025-09-27)

Full Changelog: [v0.8.1-beta...v0.8.2-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.8.1-beta...v0.8.2-beta)

### Chores

* **internal:** fix incremental formatting in some cases ([01df910](https://github.com/andreibesleaga/ocm-sdk/commit/01df910fdd9a1af87045d379926484065164633b))

## 0.8.1-beta (2025-09-26)

Full Changelog: [v0.8.0-beta...v0.8.1-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.8.0-beta...v0.8.1-beta)

### Performance Improvements

* faster formatting ([37e7cff](https://github.com/andreibesleaga/ocm-sdk/commit/37e7cff39548fed07038b3e868dd330aca0506dc))


### Chores

* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([8b26401](https://github.com/andreibesleaga/ocm-sdk/commit/8b26401fc2d758b84f5699ce5742c59f7d68618e))

## 0.8.0-beta (2025-09-24)

Full Changelog: [v0.7.0-beta...v0.8.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.7.0-beta...v0.8.0-beta)

### Features

* **mcp:** add option for including docs tools ([45be1ec](https://github.com/andreibesleaga/ocm-sdk/commit/45be1ec26a405147314ce2ab7725c539f91acf20))
* **mcp:** enable experimental docs search tool ([9a5c0dd](https://github.com/andreibesleaga/ocm-sdk/commit/9a5c0dd7e49ccd65688236c5f7c5c3cd1ca85120))

## 0.7.0-beta (2025-09-20)

Full Changelog: [v0.6.2-beta...v0.7.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.6.2-beta...v0.7.0-beta)

### Features

* **mcp:** add docs search tool ([8faacce](https://github.com/andreibesleaga/ocm-sdk/commit/8faacced19307dceda58164cb4bc329d986125b3))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([6c75ced](https://github.com/andreibesleaga/ocm-sdk/commit/6c75cedb3fa6f06f1ea3d94cb43a1741b698105b))


### Chores

* **codegen:** internal codegen update ([43cbdc1](https://github.com/andreibesleaga/ocm-sdk/commit/43cbdc171458b01f89e44aa82fd4af67b4242a7c))
* do not install brew dependencies in ./scripts/bootstrap by default ([fc0604a](https://github.com/andreibesleaga/ocm-sdk/commit/fc0604ad65e6a83848c939f87ffa64ede48ebfb8))
* **internal:** codegen related update ([6944a6b](https://github.com/andreibesleaga/ocm-sdk/commit/6944a6b0f3591d334078a9155601b0127f7c62b9))

## 0.6.2-beta (2025-09-12)

Full Changelog: [v0.6.1-beta...v0.6.2-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.6.1-beta...v0.6.2-beta)

### Bug Fixes

* **mcp:** fix uploading dxt release assets ([2104460](https://github.com/andreibesleaga/ocm-sdk/commit/21044607a980270b5f26a321f23c85246ed4a413))


### Chores

* **mcp:** upload dxt as release asset ([faaf0f6](https://github.com/andreibesleaga/ocm-sdk/commit/faaf0f6047f98dd99fa6ccebbcc82c5c38091f67))

## 0.6.1-beta (2025-09-09)

Full Changelog: [v0.6.0-beta...v0.6.1-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.6.0-beta...v0.6.1-beta)

### Bug Fixes

* coerce nullable values to undefined ([6146945](https://github.com/andreibesleaga/ocm-sdk/commit/614694518339d48847b93efecc213416e303dc17))
* **mcp:** update dxt manifest.json files ([d2df3e3](https://github.com/andreibesleaga/ocm-sdk/commit/d2df3e359526c10381ec20108a0eb57a16206bec))

## 0.6.0-beta (2025-09-06)

Full Changelog: [v0.5.1-beta...v0.6.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.5.1-beta...v0.6.0-beta)

### Features

* **mcp:** add client infer to cloudflare oauth screen ([095b7a8](https://github.com/andreibesleaga/ocm-sdk/commit/095b7a89942e105970fce25482af58dc0998af72))
* **mcp:** allow setting logging level ([69f7f7f](https://github.com/andreibesleaga/ocm-sdk/commit/69f7f7f333455d74e9cf8ae365354b9dcdd7f7e3))
* **mcp:** expose client options in `streamableHTTPApp` ([0524896](https://github.com/andreibesleaga/ocm-sdk/commit/05248966d8d69b6bbcbfcd2704668064a35207ec))


### Bug Fixes

* **mcp:** fix query options parsing ([d073915](https://github.com/andreibesleaga/ocm-sdk/commit/d07391505a9b737508a8e92d2b0e9f4f9b399eb2))


### Chores

* ci build action ([8834296](https://github.com/andreibesleaga/ocm-sdk/commit/88342967660197e0c7ae708cbd4c333c03a02466))
* **internal:** codegen related update ([1d5ea1e](https://github.com/andreibesleaga/ocm-sdk/commit/1d5ea1ec7936719e78efba0586917927055ae139))
* **internal:** codegen related update ([41533d7](https://github.com/andreibesleaga/ocm-sdk/commit/41533d7b230de42abe3f82cc27163e8069628dd6))
* **internal:** update global Error reference ([8869c9e](https://github.com/andreibesleaga/ocm-sdk/commit/8869c9e754051735c29fb3a1a0daebf4fe9ecb67))

## 0.5.1-beta (2025-08-25)

Full Changelog: [v0.5.0-beta...v0.5.1-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.5.0-beta...v0.5.1-beta)

## 0.5.0-beta (2025-08-24)

Full Changelog: [v0.4.0-beta...v0.5.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.4.0-beta...v0.5.0-beta)

### Features

* **mcp:** add code execution tool ([2c777bd](https://github.com/andreibesleaga/ocm-sdk/commit/2c777bd06e690b1a4d9e2b7abc57527e50f77dcc))
* **mcp:** add option to infer mcp client ([11a5d07](https://github.com/andreibesleaga/ocm-sdk/commit/11a5d07d983cd312fa9ad4fb4468558bc17d7337))


### Chores

* add package to package.json ([282bfe9](https://github.com/andreibesleaga/ocm-sdk/commit/282bfe9102d32eea41dee7428a7c3d19215475b0))
* **client:** qualify global Blob ([ce473a8](https://github.com/andreibesleaga/ocm-sdk/commit/ce473a881d3f43e58c6fd15881c659707eb5464d))
* **internal:** codegen related update ([801426a](https://github.com/andreibesleaga/ocm-sdk/commit/801426a3307912644cd45cab2603a62238e2b1ac))
* **internal:** codegen related update ([3ba22ff](https://github.com/andreibesleaga/ocm-sdk/commit/3ba22ff613e92e1498c8928e7848ce63bcd60449))
* **internal:** make mcp-server publishing public by defaut ([428dbbf](https://github.com/andreibesleaga/ocm-sdk/commit/428dbbf478b2052d24ea307acf3e1cce42e61036))
* **mcp:** add cors to oauth metadata route ([3ded89f](https://github.com/andreibesleaga/ocm-sdk/commit/3ded89f0d484f25ef73573e9e70d33bdc29290c1))
* **mcp:** update package.json ([14686fc](https://github.com/andreibesleaga/ocm-sdk/commit/14686fc6cc5b344027117805b038354913edac2d))
* **mcp:** update types ([3229ec8](https://github.com/andreibesleaga/ocm-sdk/commit/3229ec8c4c601f81b30d0a8b1b076fb0ed783454))
* update CI script ([96e3796](https://github.com/andreibesleaga/ocm-sdk/commit/96e37967ab60b95104e8c528cb7fa10e36867f15))

## 0.4.0-beta (2025-08-19)

Full Changelog: [v0.3.1-beta...v0.4.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.3.1-beta...v0.4.0-beta)

### Features

* **mcp:** parse query string as mcp client options in mcp server ([6494fbe](https://github.com/andreibesleaga/ocm-sdk/commit/6494fbe9d5a53dd87ca8a50559ea17e460bdee2b))


### Bug Fixes

* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([66dae69](https://github.com/andreibesleaga/ocm-sdk/commit/66dae69c4e26c899d880697ee40ba64c1e284416))


### Chores

* **deps:** update dependency @types/node to v20.17.58 ([f89c0d6](https://github.com/andreibesleaga/ocm-sdk/commit/f89c0d61bfcdf0169448d50482ac823a2045bb70))
* **internal:** codegen related update ([147ba58](https://github.com/andreibesleaga/ocm-sdk/commit/147ba58045915ae5b2cc62fc6b87d0a563c4c5e3))
* **internal:** formatting change ([be12105](https://github.com/andreibesleaga/ocm-sdk/commit/be12105d6c6cc9be7824012e1e6183ac6a5ba10b))
* **internal:** refactor array check ([cf100de](https://github.com/andreibesleaga/ocm-sdk/commit/cf100de576b5e8f329f57fe37f8241fdf621b2de))
* **internal:** update comment in script ([ee2fee1](https://github.com/andreibesleaga/ocm-sdk/commit/ee2fee1dd1143bff35a781d6651b9c9b725959cc))
* **mcp:** document remote server in README.md ([74e1fcd](https://github.com/andreibesleaga/ocm-sdk/commit/74e1fcd87def0cb3cd1c7a6ee3dc8f4941428d76))
* **mcp:** minor cleanup of types and package.json ([6dc27f0](https://github.com/andreibesleaga/ocm-sdk/commit/6dc27f0262854a3ecacd54b6b64a9a81588be12b))
* **mcp:** update README ([6160e42](https://github.com/andreibesleaga/ocm-sdk/commit/6160e42630ab816ef17f9dc458822723827cc46a))
* update @stainless-api/prism-cli to v5.15.0 ([192742a](https://github.com/andreibesleaga/ocm-sdk/commit/192742a01d8b2722bf7a87a7e4b21306fe2ca035))

## 0.3.1-beta (2025-08-07)

Full Changelog: [v0.3.0-beta...v0.3.1-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.3.0-beta...v0.3.1-beta)

### Features

* **mcp:** add logging when environment variable is set ([6b0248e](https://github.com/andreibesleaga/ocm-sdk/commit/6b0248e4b506f12e309fbb41023aa49b0518405b))
* **mcp:** add unix socket option for remote MCP ([1a400e7](https://github.com/andreibesleaga/ocm-sdk/commit/1a400e7057fca706e55c28b215f8494285125063))
* **mcp:** remote server with passthru auth ([5273dd3](https://github.com/andreibesleaga/ocm-sdk/commit/5273dd3a4d006bdea4b4bd0ad5637f784ec5b90a))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([c0fda90](https://github.com/andreibesleaga/ocm-sdk/commit/c0fda9090cdcb42227e11e65bc086ab61e5c8235))
* **mcp:** fix bug in header handling ([6689f84](https://github.com/andreibesleaga/ocm-sdk/commit/6689f8476f9fdde262f1de94eaf80bdc685dac7c))
* **mcp:** fix tool description of jq_filter ([142579e](https://github.com/andreibesleaga/ocm-sdk/commit/142579e7e289569c93e5a12c06a0b0d0bac2d905))
* **mcp:** include required section for top-level properties and support naming transformations ([3c09cb9](https://github.com/andreibesleaga/ocm-sdk/commit/3c09cb988c36782a382ce56cc09e6d791cfb508f))
* **mcp:** reverse validJson capability option and limit scope ([b66bea1](https://github.com/andreibesleaga/ocm-sdk/commit/b66bea181cf14390e376e5e6fc8c8b696ff513c2))
* **mcp:** support jq filtering on cloudflare workers ([7ac9590](https://github.com/andreibesleaga/ocm-sdk/commit/7ac95906b7a006242b08d7deddc31d00d0d0fc53))


### Chores

* **internal:** codegen related update ([b947912](https://github.com/andreibesleaga/ocm-sdk/commit/b9479121c67e2f5b7f0af6e2968dc206233ce374))
* **internal:** move publish config ([5092075](https://github.com/andreibesleaga/ocm-sdk/commit/50920758b555aae130f436c0a5aabdcea0c7b035))
* **internal:** remove redundant imports config ([5b4fb0c](https://github.com/andreibesleaga/ocm-sdk/commit/5b4fb0c6fe3d13e1ef2f86a4ead1de9bff7f708f))
* **mcp:** formatting ([ae5efed](https://github.com/andreibesleaga/ocm-sdk/commit/ae5efed9564de047fc205f3fb5ba9288553c9b36))
* **mcp:** refactor streamable http transport ([124ec75](https://github.com/andreibesleaga/ocm-sdk/commit/124ec753517e3c92a64fda1c88972f293545d70c))
* **mcp:** rework imports in tools ([cd171d1](https://github.com/andreibesleaga/ocm-sdk/commit/cd171d16363cbb6b1634ec21f9c68cf3fe26165e))
* **ts:** reorder package.json imports ([5627c7d](https://github.com/andreibesleaga/ocm-sdk/commit/5627c7da99b5e74217cd958e777a08425e965d0b))

## 0.3.0-beta (2025-07-12)

Full Changelog: [v0.2.0-beta...v0.3.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.2.0-beta...v0.3.0-beta)

### Features

* **api:** update via SDK Studio ([6de4168](https://github.com/andreibesleaga/ocm-sdk/commit/6de4168447ffca0e31a879e674100ee99b422d22))
* **api:** update via SDK Studio ([4b5c399](https://github.com/andreibesleaga/ocm-sdk/commit/4b5c3998937c2759552b038ac980297c9ea52a34))
* **api:** update via SDK Studio ([5fb84ba](https://github.com/andreibesleaga/ocm-sdk/commit/5fb84ba7afde7fbf2c8977f9ded0cb6cebfb7599))


### Chores

* configure new SDK language ([3511a99](https://github.com/andreibesleaga/ocm-sdk/commit/3511a9973b72a1ec6aa7960b22a52eb17f2a3d93))
* sync repo ([13d3888](https://github.com/andreibesleaga/ocm-sdk/commit/13d3888f491c220baf02124cd43abf1fb0138a71))
* update SDK settings ([73ae2f0](https://github.com/andreibesleaga/ocm-sdk/commit/73ae2f0bdb745072086d55474e48fb25050750da))
* update SDK settings ([2629a5d](https://github.com/andreibesleaga/ocm-sdk/commit/2629a5db640a0ee80e1d9e05b322c29bf50d8405))
* update SDK settings ([89812ed](https://github.com/andreibesleaga/ocm-sdk/commit/89812ed25e79f3198e969941b5b49d4938513ecb))
* update SDK settings ([874e086](https://github.com/andreibesleaga/ocm-sdk/commit/874e086e166ee9de56968d2e99ba4ee8eb7eff31))


### Documentation

* **mcp:** correct instructions for adding to claude web ([d0fdb6e](https://github.com/andreibesleaga/ocm-sdk/commit/d0fdb6ec8d71a17b2885e59e256913a38caaf2f8))

## 0.1.0-beta (2025-07-11)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-beta](https://github.com/andreibesleaga/ocm-sdk/compare/v0.1.0-alpha.2...v0.1.0-beta)

### Chores

* update SDK settings ([2629a5d](https://github.com/andreibesleaga/ocm-sdk/commit/2629a5db640a0ee80e1d9e05b322c29bf50d8405))
* update SDK settings ([89812ed](https://github.com/andreibesleaga/ocm-sdk/commit/89812ed25e79f3198e969941b5b49d4938513ecb))

## 0.1.0-alpha.2 (2025-07-11)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/andreibesleaga/ocm-sdk/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** update via SDK Studio ([4b5c399](https://github.com/andreibesleaga/ocm-sdk/commit/4b5c3998937c2759552b038ac980297c9ea52a34))

## 0.1.0-alpha.1 (2025-07-11)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/andreibesleaga/ocm-sdk/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([5fb84ba](https://github.com/andreibesleaga/ocm-sdk/commit/5fb84ba7afde7fbf2c8977f9ded0cb6cebfb7599))


### Chores

* configure new SDK language ([3511a99](https://github.com/andreibesleaga/ocm-sdk/commit/3511a9973b72a1ec6aa7960b22a52eb17f2a3d93))
* update SDK settings ([874e086](https://github.com/andreibesleaga/ocm-sdk/commit/874e086e166ee9de56968d2e99ba4ee8eb7eff31))
