// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ocm from 'ocm-sdk';

const client = new Ocm({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource comment', () => {
  // Mock server tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.comment.submit({ chargePointID: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submit: required and optional params', async () => {
    const response = await client.comment.submit({
      chargePointID: 0,
      checkinStatusTypeID: 0,
      comment: 'string',
      commentTypeID: 0,
      rating: 3,
      relatedURL: 'string',
      userName: 'string',
    });
  });
});
