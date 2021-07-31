import { decode, sign, verify } from 'jsonwebtoken';

import { ENV } from './../../../ENV';

const JWT_SECRET: string = ENV.JWT_SECRET;

export class JWTHelper {
  //!JWT Sign in
  public async sign(payload: any, options: any) {
    return sign(payload, JWT_SECRET, options);
  }

  //! JWT Verify
  public async verify(token: string) {
    return verify(token, JWT_SECRET);
  }

  //! Make accessToken
  public async makeAccessToken(data: any) {
    const configAccess = {
      payload: {
        ...data,
      },
      options: {
        algorithm: 'HS512',
        expiresIn: ENV.EXPIRES_IN,
      },
    };

    const token = await this.sign(configAccess.payload, configAccess.options);
    const tokenData: any = decode(token);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const exp = tokenData.exp;
    return token;
  }
}
