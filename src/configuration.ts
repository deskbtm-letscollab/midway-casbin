/**
 * Copyright 2022 WangHan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ILifeCycle, MidwayLoggerService } from '@midwayjs/core';
import { Configuration, Inject } from '@midwayjs/decorator';

@Configuration({
  namespace: 'casbin',
  importConfigs: [
    {
      default: {
        casbin: {},
      },
    },
  ],
})
export class CasbinConfiguration implements ILifeCycle {
  @Inject()
  loggerService: MidwayLoggerService;

  async onStop(): Promise<void> {}
}
