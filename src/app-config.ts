import env from 'sugar-env'
import { IServerConfig } from '@expresso/server'
import { IExpressoConfigOptions } from '@expresso/app'
import { IMongoParams } from '@nindoo/mongodb-data-layer'

// Your configuration keys goes here
export interface IAppConfig extends IExpressoConfigOptions {
  database: {
    mongodb: IMongoParams
  },
  server?: IServerConfig['server']
}

// And your values here
export const config: IAppConfig = {
  name: 'genkai',
  server: {
    printOnListening: true,
  },
  database: {
    mongodb: {
      uri: env.get('DATABASE_MONGODB_URI'),
      dbName: env.get('DATABASE_MONGODB_DBNAME'),
      options: {
        useNewUrlParser: true
      }
    }
  }
}
