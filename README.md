# Mineral Gateway


## Demo

https://github.com/user-attachments/assets/demo.mp4

> _Generated with [demo-video-generator](https://github.com/zan-maker/demo-video-generator)_
Stellar/Soroban-based critical minerals tracking and domestic-content attestation platform for US defense and industrial policy compliance.

## Architecture

- **Blockchain**: Stellar Mainnet
- **Smart Contracts**: Soroban (Rust → WASM)
- **Token Standard**: SEP-41 Token Interface
- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **SDK**: `@stellar/stellar-sdk`

## Modules

| Module | Description |
|--------|-------------|
| **Dashboard** | Real-time Stellar network status, supply chain overview, compliance metrics |
| **Assets** | SEP-41 token management — mint, transfer, burn asset lots |
| **Entities** | Registered supply chain participants with Stellar addresses and roles |
| **Supply Chain** | Asset provenance graph from mine to battery pack |
| **Compliance** | Policy attestations — domestic content %, allied origin %, FEOC checks |
| **Events** | On-chain Soroban contract event log |

## Stellar Integration

The `src/lib/stellar.ts` service layer provides:
- Horizon API for ledger queries and transaction history
- Soroban RPC for smart contract invocation
- SEP-41 token operations (mint/transfer/burn)
- Contract event streaming

## Getting Started

```bash
npm install
npm run dev
```

## Documentation

See `Mineral_Gateway_Stellar_Specification.docx` for the full technical specification.
