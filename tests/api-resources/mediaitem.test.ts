// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ocm from 'ocm-sdk';

const client = new Ocm({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mediaitem', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.mediaitem.create({
      chargePointID: 1234,
      imageDataBase64: 'data:image/jpeg;base64,<BASE64_ENCODED_DATA>',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.mediaitem.create({
      chargePointID: 1234,
      imageDataBase64: 'data:image/jpeg;base64,<BASE64_ENCODED_DATA>',
      comment: 'An example comment',
    });
  });
});
