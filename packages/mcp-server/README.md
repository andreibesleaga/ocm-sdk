# Ocm TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export OCM_API_KEY="My API Key"
export OCM_API_KEY="My API Key Header"
export OCM_USERNAME="My Bearer"
npx -y ocm-sdk-mcp@latest
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
      "args": ["-y", "ocm-sdk-mcp"],
      "env": {
        "OCM_API_KEY": "My API Key",
        "OCM_API_KEY": "My API Key Header",
        "OCM_USERNAME": "My Bearer"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=ocm-sdk-mcp&config=eyJuYW1lIjoib2NtLXNkay1tY3AiLCJ0cmFuc3BvcnQiOiJzc2UiLCJ1cmwiOiJodHRwczovL29jbS1tY3Auc3RsbWNwLmNvbS9zc2UiLCJlbnYiOnsiT0NNX0FQSV9LRVkiOiJTZXQgeW91ciBPQ01fQVBJX0tFWSBoZXJlLiIsIk9DTV9VU0VSTkFNRSI6IlNldCB5b3VyIE9DTV9VU0VSTkFNRSBoZXJlLiJ9fQ)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22ocm-sdk-mcp%22%2C%22type%22%3A%22sse%22%2C%22url%22%3A%22https%3A%2F%2Focm-mcp.stlmcp.com%2Fsse%22%2C%22env%22%3A%7B%22OCM_API_KEY%22%3A%22Set%20your%20OCM_API_KEY%20here.%22%2C%22OCM_USERNAME%22%3A%22Set%20your%20OCM_USERNAME%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add ocm_sdk_mcp_api --env OCM_API_KEY="Your OCM_API_KEY here." OCM_API_KEY="Your OCM_API_KEY here." OCM_USERNAME="Your OCM_USERNAME here." --transport sse https://ocm-mcp.stlmcp.com/sse
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ---------------- | ------------------------ | ------------------ |
| `x-ocm-api-key` | `apiKey` | APIKeyQueryString |
| `X-API-Key` | `apiKeyHeader` | APIKeyHeader |
| `x-ocm-username` | `bearer` | UserAuthentication |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "ocm_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```
