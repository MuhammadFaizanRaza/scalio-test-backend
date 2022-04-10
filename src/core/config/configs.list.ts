import { ConfigFactory } from '@nestjs/config';
import { envConfig } from '../environment/environment.config';

type ConfigFactoryReturnValue =
  | Record<string, any>
  | Promise<Record<string, any>>;

export const configs: ConfigFactory<ConfigFactoryReturnValue>[] = [envConfig];
