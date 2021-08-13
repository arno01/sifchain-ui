import { Chain, Network } from "../../../entities";
import { BaseChain } from "./BaseChain";

export class SifchainChain extends BaseChain implements Chain {
  static id = "sifchain";
  id = "sifchain";
  displayName = "Sifchain";
  network = Network.SIFCHAIN;

  getBlockExplorerUrlForTxHash(hash: string) {
    return `${this.blockExplorerUrl}/transaction/${hash}`;
  }
}
