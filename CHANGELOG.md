# Changelog

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
