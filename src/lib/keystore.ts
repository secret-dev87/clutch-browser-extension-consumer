import { ethers } from "ethers";
import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
  setSessionStorage,
} from "./tools";

export default class KeyStore {
  private static instance: KeyStore;
  private _privateKey: string | null = null;

  public static getInstance() {
    if (!KeyStore.instance) {
      KeyStore.instance = new KeyStore();
    }
    return KeyStore.instance;
  }

  private get keyStoreKey(): string {
    return "clutch-wallet-keystore-key";
  }

  public async getAddress(): Promise<string> {
    let val: string = await getLocalStorage("clutch-wallet-address");
    if (val == undefined) {
      return "";
    }
    return val;
  }

  public async setAddress(walletAddress: string) {
    try {
      await setLocalStorage("clutch-wallet-address", walletAddress);
    } catch (e) {
      console.log("Error on setEmail function:", e);
    }
  }

  public async setEmail(email: string) {
    try {
      await setLocalStorage("clutch-wallet-email", email);
    } catch (e) {
      console.log("Error on setEmail function:", e);
    }
  }

  public async getEmail(): Promise<string> {
    let val: string = await getLocalStorage("clutch-wallet-email");
    if (val == undefined) {
      return "";
    }
    return val;
  }

  public async setJWT(jwt: string) {
    try {
      await setLocalStorage("clutch-wallet-jwt", jwt);
    } catch (e) {
      console.log("Error on setJWT function:", e);
    }
  }

  public async getJWT(): Promise<string> {
    let val: string = await getLocalStorage("clutch-wallet-jwt");
    if (val == undefined) {
      return "";
    }
    return val;
  }

  public async setPassword(password: string) {
    try {
      await setLocalStorage("clutch-wallet-password", password);
    } catch (e) {
      console.log("Error on setPassword function:", e);
    }
  }

  public async getPassword() {
    let val: string = await getLocalStorage("clutch-wallet-password");
    if (val == undefined) {
      return "";
    }
    return val;
  }

  // /**
  //  * create a new keystore and delete the old
  //  * @param password
  //  * @returns EOA address, null is failed
  //  */
  // public async createNewAddress(
  //   password: string,
  //   saveKey: boolean
  // ): Promise<string> {
  //   try {
  //     const account = ethers.Wallet.createRandom();
  //     const KeystoreV3 = await account.encrypt(password);
  //     if (saveKey) {
  //       await setLocalStorage(this.keyStoreKey, JSON.parse(KeystoreV3));
  //       await setSessionStorage("pw", password);
  //     } else {
  //       await setLocalStorage("stagingAccount", account.address);
  //       await setLocalStorage("stagingKeystore", KeystoreV3);
  //       await setLocalStorage("stagingPw", password);
  //     }
  //     return account.address;
  //   } catch (error) {
  //     return "";
  //   }
  // }

  // public async replaceAddress(): Promise<void> {
  //   const stagingKeystore = await getLocalStorage("stagingKeystore");
  //   const stagingPw = await getLocalStorage("stagingPw");
  //   const guardianNameMapping = await getLocalStorage("guardianNameMapping");
  //   await clearLocalStorage();
  //   await setLocalStorage(this.keyStoreKey, stagingKeystore);
  //   await setLocalStorage("guardianNameMapping", guardianNameMapping);
  //   await setSessionStorage("pw", stagingPw);
  // }
}
