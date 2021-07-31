import { compare, hash } from 'bcryptjs';

import { ENV } from './../../../ENV';

const SALT_ROUNDS: number = Number(ENV.SALT_ROUNDS) || 10;

export class BcryptHelper {
  public async hashString(
    plainText: string,
    slatRounds: number = SALT_ROUNDS,
  ): Promise<string> {
    return hash(plainText, slatRounds);
  }

  public async compareHash(
    plainText: string,
    hashString: string,
  ): Promise<boolean> {
    return compare(plainText, hashString);
  }
}
