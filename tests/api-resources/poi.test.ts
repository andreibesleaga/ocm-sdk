// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ocm from 'ocm';

const client = new Ocm({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource poi', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.poi.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.poi.list(
        {
          boundingbox: [{}],
          camelcase: true,
          chargepointid: 'chargepointid',
          client: 'client',
          compact: true,
          connectiontypeid: [{}],
          countrycode: 'countrycode',
          countryid: ['string'],
          dataproviderid: [{}],
          distance: 0,
          distanceunit: 'distanceunit',
          greaterthanid: 'greaterthanid',
          includecomments: true,
          latitude: 0,
          levelid: [{}],
          longitude: 0,
          maxresults: 0,
          modifiedsince: 'modifiedsince',
          opendata: true,
          operatorid: [{}],
          output: 'output',
          polygon: 'polygon',
          polyline: 'polyline',
          sortby: 'sortby',
          statustypeid: [{}],
          usagetypeid: [{}],
          verbose: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ocm.NotFoundError);
  });
});
