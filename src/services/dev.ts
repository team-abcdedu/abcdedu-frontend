import { get } from '@/libs/api';

class DevApi {
  static async getFeatures() {
    return get('/dev/features');
  }
}

export default DevApi;

