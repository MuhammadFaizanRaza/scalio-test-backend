import * as Joi from 'joi';
import { EnvConfigEnum } from '../environment/environment.config';

export interface ConfigVariableInterface {
  NODE_ENV: EnvConfigEnum;
  PORT: number;
}

const validationSchema = Joi.object<ConfigVariableInterface>({
  // * Node Env Config
  NODE_ENV: Joi.string()
    .allow(...Object.values(EnvConfigEnum))
    .default('DEV')
    .required(),
  PORT: Joi.number().default(3000).required(),
});
export { validationSchema };
