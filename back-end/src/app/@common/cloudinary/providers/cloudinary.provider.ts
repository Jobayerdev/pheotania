import { CLOUDINARY } from '@application/constants';
import { ENV } from 'src/ENV';
import { v2 } from 'cloudinary';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: ENV.CN_CLOUD_NAME,
      api_key: ENV.CN_API_KEY,
      api_secret: ENV.CN_API_SECRET,
    });
  },
};
