---
name: ocm-sdk 
description: How to use the ocm SDK. For access to more information, try out the ocm MCP server.
---
```markdown
# OCM TypeScript SDK Guide

The Open Charge Map (OCM) SDK provides access to a global database of EV charging stations. Use it to find charging locations, get network operator details, submit user feedback, and upload photos.

## Core Methods

### Finding Charging Stations

```typescript
// Search by location with distance filter
const stations = await client.poi.list({
  latitude: 51.5074,
  longitude: -0.1278,
  distance: 10,
  distanceunit: 'km',
  maxresults: 50
});

// Filter by connection type, operator, or status
const dcFastChargers = await client.poi.list({
  latitude: 37.7749,
  longitude: -122.4194,
  connectiontypeid: [33], // CCS Type 2
  levelid: [3], // DC fast charging
  statustypeid: [50] // Operational only
});

// Access station details
const station = stations[0];
console.log(station.AddressInfo?.Title);
console.log(station.AddressInfo?.Latitude, station.AddressInfo?.Longitude);
console.log(station.NumberOfPoints); // Number of charging bays
console.log(station.Connections); // Equipment specs (kW, connector type, etc)
```

### Getting Reference Data

```typescript
// Fetch all reference data (countries, operators, connection types, etc)
const refData = await client.referencedata.retrieve();

// Access lookup tables
const connectionTypes = refData.ConnectionTypes; // CCS, CHAdeMO, Type 2, etc
const operators = refData.Operators; // ChargePoint, Tesla, etc
const countries = refData.Countries;
```

### Submitting User Feedback

```typescript
// Submit a comment or check-in
await client.comment.submit({
  chargePointID: 12345,
  checkinStatusTypeID: 10, // Successfully charged
  comment: 'Fast charging, easy to find. All bays working.',
  rating: 5,
  userName: 'TestUser'
});
```

### Uploading Photos

```typescript
// Submit a photo for a charging location
await client.mediaitem.create({
  chargePointID: 12345,
  imageDataBase64: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...',
  comment: 'Entrance view'
});
```

### Authentication

```typescript
// Authenticate to get access token
const auth = await client.profile.authenticate({
  emailaddress: 'user@example.com',
  password: 'password123'
});

const token = auth.Data.access_token;
const profile = auth.Data.UserProfile;
```

## Advanced Features

### Response Inspection

```typescript
// Get raw Response object with headers
const { data, response } = await client.poi.list({ latitude: 51.5, longitude: -0.1 }).withResponse();
console.log(response.status);
console.log(response.headers.get('x-ratelimit-remaining'));

// Access Response without parsing body
const response = await client.poi.list({ latitude: 51.5, longitude: -0.1 }).asResponse();
```

### Common Query Patterns

```typescript
// Compact mode (IDs only, no nested objects)
await client.poi.list({ compact: true, maxresults: 100 });

// Verbose mode (full nested reference data)
await client.poi.list({ verbose: true, includecomments: true });

// Search by bounding box
await client.poi.list({
  boundingbox: [[51.5, -0.2], [51.4, -0.1]]
});

// Filter to open data only
await client.poi.list({ opendata: true });

// Search by country
await client.poi.list({ countrycode: 'US', maxresults: 200 });
```
```