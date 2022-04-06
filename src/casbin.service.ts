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

import { MidwayConfigService } from '@midwayjs/core';
import {
  ALL,
  Config,
  Init,
  Inject,
  Provide,
  Scope,
  ScopeEnum,
} from '@midwayjs/decorator';
import { Enforcer, newEnforcer } from 'casbin';
import { MidwayCasbinConfigs } from './casbin.interface';

@Provide()
@Scope(ScopeEnum.Singleton)
export class CasbinService {
  #enforcer: Enforcer;

  // @Config(ALL)
  // configs: MidwayCasbinConfigs;

  @Config('casbin')
  configs1: MidwayCasbinConfigs;

  @Inject()
  configService: MidwayConfigService;

  @Init()
  async init() {
    console.log(Date.now(), '************');
    const a = this.configService.getConfiguration();
    console.log(a, a.casbin, '####');
    console.log(this.configs1, '!==========');
    // const adapter =
    //   this.configs.adapter === 'string'
    //     ? this.configs.adapter
    //     : await this.configs.adapter;
    // this.#enforcer = await newEnforcer(this.configs.model, adapter);
  }

  public get enforcer() {
    return this.#enforcer;
  }
}
