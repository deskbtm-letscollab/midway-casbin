import { Config, Init, Provide, Scope, ScopeEnum } from '@midwayjs/decorator';
import { Enforcer, newEnforcer } from 'casbin';

@Provide()
@Scope(ScopeEnum.Singleton)
class CasbinService {
  #enforcer: Enforcer;

  @Config('casbin')
  configs;

  @Init()
  async init() {
    const adapter =
      this.configs.adapter === 'string'
        ? this.configs.adapter
        : await this.configs.adapter;
      
    
    
  }
}
