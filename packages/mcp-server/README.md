# OCM TypeScript MCP Server

A Model Context Protocol (MCP) server implementation for OCM (Open Charge Map) services, enabling AI assistants to interact with EV charging infrastructure.

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export OCM_API_KEY="My API Key"
export OCM_API_KEY="My API Key Header"
export OCM_USERNAME="My Bearer"
npx -y ocm-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "ocm_sdk_api": {
      "command": "npx",
      "args": ["-y", "ocm-mcp", "--client=claude", "--tools=all"],
      "env": {
        "OCM_API_KEY": "My API Key",
        "OCM_API_KEY": "My API Key Header",
        "OCM_USERNAME": "My Bearer"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "ocm-mcp/server";

// import a specific tool
import listPoi from "ocm-mcp/tools/poi/list-poi";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [listPoi, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `poi`:

- `list_poi` (`read`): Used to fetch a list of POIs (sites) within a geographic boundary or near a specific latitude/longitude. This is the primary method for most applications and services to consume data from Open Charge Map.

### Resource `referencedata`:

- `retrieve_referencedata` (`read`): Returns the core reference data used for looking up IDs such as Connection Types, Operators, Countries etc.

  This information is useful for UIs such as editing systems or for fetching results in the lighter non-verbose mode, then hydrating POI results back into complex objects.

### Resource `profile`:

- `authenticate_profile` (`write`): Perform user authentication, returning a model which includes the users profile and a JWT auth token to re-use in subsequent requests.

### Resource `comment`:

- `submit_comment` (`write`): Submit a user comment or checkin for a specific charging location

### Resource `mediaitem`:

- `create_mediaitem` (`write`): Submit a photo for a specific charging location

### Resource `openapi`:

- `retrieve_openapi` (`read`): Retrieve the current OpenAPI format (YAML) definition for this API. This is useful for documentation tools, mocking, testing and client generation.
