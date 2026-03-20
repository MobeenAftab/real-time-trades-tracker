# real-time-trades-tracker
Interactive data driven dashboard that consumes real time financial APIs 

# Running 
Requires two terminals, cd into client `npm run start`, cd into server using second terminal and `dotnet run`.

# Commands

## Server

Run HTTPS
```bash
dotnet run --launch-profile https
```

Generate controller
```bash
dotnet aspnet-codegenerator controller -name UserController -async -api -m User -dc UserContext -outDir Controllers
```

EF Core DB Migrations
Generate db schema given based on project classes
```bash
dotnet ef migrations add < migrateion name >
dotnet ef database update
```

## Docker
Build docker compose
```bash
docker compose up -d
```

Delete all volumes, containers and networks by running this in the same dir as the compose file.
```bash
docker compose down --volumes
```


# Tech Stack

## Cleint
Angular, Tailwindcss

## Server
.NET webapi, postgress18

# Public APIs
Following list of APIs have been chosen as they offer websockets for live time data retrevial for free.

## Blockchain

[WebSocket API Real-Time blockchain data](https://www.blockchain.com/explorer/api/api_websocket)

## Coinbase Exchange

[Exchange APIs](https://docs.cdp.coinbase.com/exchange/websocket-feed/overview)

