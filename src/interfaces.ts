export interface Field {
  name: string;
  type?: string;
  isArray?: boolean;
  isRequired?: boolean;
}

export interface EnumValue {
  name: string;
  description: string;
}

export interface Model {
  name?: string;
  description?: string;
  fields?: Field[];
  isFragment?: boolean;
  isObject?: boolean;
  isInterface?: boolean;
  isEnum?: boolean;
  isUnion?: boolean;
  usingFragments?: boolean;
  enumValues?: EnumValue[];
  fragmentsUsed?: string[];
}

export interface CodegenDocument {
  isQuery: boolean;
  isMutation: boolean;
  isSubscription: boolean;
  isFragment: boolean;
  name: string;
  rawName: string;
  innerTypes: Model[];
  variables: Field[];
  hasInnerTypes: boolean;
  hasVariables: boolean;
}

export interface Codegen {
  models: Model[];
  documents: CodegenDocument[];
}
