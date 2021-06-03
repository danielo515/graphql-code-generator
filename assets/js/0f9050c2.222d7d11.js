(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[7617],{35318:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(t),c=i,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23078:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var a=t(29603),i=t(50120),l=(t(27378),t(35318)),r=["components"],p={},o={unversionedId:"generated-config/typescript-type-graphql",id:"generated-config/typescript-type-graphql",isDocsHomePage:!1,title:"typescript-type-graphql",description:"Installation",source:"@site/docs/generated-config/typescript-type-graphql.md",sourceDirName:"generated-config",slug:"/generated-config/typescript-type-graphql",permalink:"/docs/generated-config/typescript-type-graphql",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-type-graphql.md",version:"current",frontMatter:{}},s=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>decoratorName</code>",id:"decoratorname",children:[]},{value:"<code>decorateTypes</code>",id:"decoratetypes",children:[]},{value:"<code>avoidOptionals</code>",id:"avoidoptionals",children:[]},{value:"<code>constEnums</code>",id:"constenums",children:[]},{value:"<code>enumsAsTypes</code>",id:"enumsastypes",children:[]},{value:"<code>numericEnums</code>",id:"numericenums",children:[]},{value:"<code>futureProofEnums</code>",id:"futureproofenums",children:[]},{value:"<code>futureProofUnions</code>",id:"futureproofunions",children:[]},{value:"<code>enumsAsConst</code>",id:"enumsasconst",children:[]},{value:"<code>onlyOperationTypes</code>",id:"onlyoperationtypes",children:[]},{value:"<code>immutableTypes</code>",id:"immutabletypes",children:[]},{value:"<code>maybeValue</code>",id:"maybevalue",children:[]},{value:"<code>noExport</code>",id:"noexport",children:[]},{value:"<code>disableDescriptions</code>",id:"disabledescriptions",children:[]},{value:"<code>useImplementingTypes</code>",id:"useimplementingtypes",children:[]},{value:"<code>wrapEntireFieldDefinitions</code>",id:"wrapentirefielddefinitions",children:[]},{value:"<code>entireFieldWrapperValue</code>",id:"entirefieldwrappervalue",children:[]},{value:"<code>addUnderscoreToArgsType</code>",id:"addunderscoretoargstype",children:[]},{value:"<code>enumValues</code>",id:"enumvalues",children:[]},{value:"<code>declarationKind</code>",id:"declarationkind",children:[]},{value:"<code>enumPrefix</code>",id:"enumprefix",children:[]},{value:"<code>fieldWrapperValue</code>",id:"fieldwrappervalue",children:[]},{value:"<code>wrapFieldDefinitions</code>",id:"wrapfielddefinitions",children:[]},{value:"<code>ignoreEnumValuesFromSchema</code>",id:"ignoreenumvaluesfromschema",children:[]},{value:"<code>strictScalars</code>",id:"strictscalars",children:[]},{value:"<code>defaultScalarType</code>",id:"defaultscalartype",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],d={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("img",{alt:"typescript-type-graphql plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-type-graphql?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,l.kt)("div",{className:"admonition admonition-shell"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,l.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,l.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-type-graphql\n")))),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"decoratorname"},(0,l.kt)("inlineCode",{parentName:"h3"},"decoratorName")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Partial_1"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"{ type: 'ObjectType', interface: 'InterfaceType', arguments: 'ArgsType', field: 'Field', input: 'InputType' }")),(0,l.kt)("p",null,"allow overriding of TypeGraphQL decorator types"),(0,l.kt)("h3",{id:"decoratetypes"},(0,l.kt)("inlineCode",{parentName:"h3"},"decorateTypes")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string[]")),(0,l.kt)("p",null,"Speciies the objects that will have TypeGraphQL decorators prepended to them, by name. Non-matching types will still be output, but without decorators. If not set, all types will be decorated."),(0,l.kt)("h3",{id:"avoidoptionals"},(0,l.kt)("inlineCode",{parentName:"h3"},"avoidOptionals")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"AvoidOptionalsConfig | boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"This will cause the generator to avoid using TypeScript optionals (",(0,l.kt)("inlineCode",{parentName:"p"},"?"),") on types,\nso the following definition: ",(0,l.kt)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",(0,l.kt)("inlineCode",{parentName:"p"},"myField: Maybe<string>"),"\ninstead of ",(0,l.kt)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),(0,l.kt)("h4",{id:"usage-examples"},"Usage Examples"),(0,l.kt)("h5",{id:"override-all-definition-types"},"Override all definition types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals: true\n")),(0,l.kt)("h5",{id:"override-only-specific-definition-types"},"Override only specific definition types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals:\n     field: true\n     inputValue: true\n     object: true\n     defaultValue: true\n")),(0,l.kt)("h3",{id:"constenums"},(0,l.kt)("inlineCode",{parentName:"h3"},"constEnums")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Will prefix every generated ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"const"),", you can read more about const enums here: ",(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/enums.html"},"https://www.typescriptlang.org/docs/handbook/enums.html"),"."),(0,l.kt)("h4",{id:"usage-examples-1"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   constEnums: true\n")),(0,l.kt)("h3",{id:"enumsastypes"},(0,l.kt)("inlineCode",{parentName:"h3"},"enumsAsTypes")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Generates enum as TypeScript ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"enum"),". Useful it you wish to generate ",(0,l.kt)("inlineCode",{parentName:"p"},".d.ts")," declaration file instead of ",(0,l.kt)("inlineCode",{parentName:"p"},".ts")),(0,l.kt)("h4",{id:"usage-examples-2"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n")),(0,l.kt)("h3",{id:"numericenums"},(0,l.kt)("inlineCode",{parentName:"h3"},"numericEnums")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Controls whether to preserve typescript enum values as numbers"),(0,l.kt)("h4",{id:"usage-examples-3"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   numericEnums: true\n")),(0,l.kt)("h3",{id:"futureproofenums"},(0,l.kt)("inlineCode",{parentName:"h3"},"futureProofEnums")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future. You also have to set ",(0,l.kt)("inlineCode",{parentName:"p"},"enumsAsTypes")," to true if you wish to use this option.\nThis is useful if you are using ",(0,l.kt)("inlineCode",{parentName:"p"},"relay"),"."),(0,l.kt)("h4",{id:"usage-examples-4"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n   futureProofEnums: true\n")),(0,l.kt)("h3",{id:"futureproofunions"},(0,l.kt)("inlineCode",{parentName:"h3"},"futureProofUnions")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"This option controls whether or not a catch-all entry is added to union type definitions for values that may be added in the future.\nThis is useful if you are using ",(0,l.kt)("inlineCode",{parentName:"p"},"relay"),"."),(0,l.kt)("h4",{id:"usage-examples-5"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   futureProofUnions: true\n")),(0,l.kt)("h3",{id:"enumsasconst"},(0,l.kt)("inlineCode",{parentName:"h3"},"enumsAsConst")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Generates enum as TypeScript ",(0,l.kt)("inlineCode",{parentName:"p"},"const assertions")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"enum"),". This can even be used to enable enum-like patterns in plain JavaScript code if you choose not to use TypeScript\u2019s enum construct."),(0,l.kt)("h4",{id:"usage-examples-6"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsConst: true\n")),(0,l.kt)("h3",{id:"onlyoperationtypes"},(0,l.kt)("inlineCode",{parentName:"h3"},"onlyOperationTypes")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"This will cause the generator to emit types for operations only (basically only enums and scalars).\nInteracts well with ",(0,l.kt)("inlineCode",{parentName:"p"},"preResolveTypes: true")),(0,l.kt)("h4",{id:"usage-examples-7"},"Usage Examples"),(0,l.kt)("p",null,"Override all definition types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\nplugins:\n- typescript\nconfig:\nonlyOperationTypes: true\n")),(0,l.kt)("h3",{id:"immutabletypes"},(0,l.kt)("inlineCode",{parentName:"h3"},"immutableTypes")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Generates immutable types by adding ",(0,l.kt)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",(0,l.kt)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),(0,l.kt)("h4",{id:"usage-examples-8"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   immutableTypes: true\n")),(0,l.kt)("h3",{id:"maybevalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"maybeValue")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"T | null")),(0,l.kt)("p",null,"Allow to override the type value of ",(0,l.kt)("inlineCode",{parentName:"p"},"Maybe"),"."),(0,l.kt)("h4",{id:"usage-examples-9"},"Usage Examples"),(0,l.kt)("h5",{id:"allow-undefined"},"Allow undefined"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n   config:\n     maybeValue: T | null | undefined\n")),(0,l.kt)("h5",{id:"allow-null-in-resolvers"},"Allow ",(0,l.kt)("inlineCode",{parentName:"h5"},"null")," in resolvers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n     - typescript-resolvers\n   config:\n     maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'\n")),(0,l.kt)("h3",{id:"noexport"},(0,l.kt)("inlineCode",{parentName:"h3"},"noExport")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in order to generate output without ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," modifier.\nThis is useful if you are generating ",(0,l.kt)("inlineCode",{parentName:"p"},".d.ts")," file and want it to be globally available."),(0,l.kt)("h4",{id:"usage-examples-10"},"Usage Examples"),(0,l.kt)("h5",{id:"disable-all-export-from-a-file"},"Disable all export from a file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   noExport: true\n")),(0,l.kt)("h3",{id:"disabledescriptions"},(0,l.kt)("inlineCode",{parentName:"h3"},"disableDescriptions")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Set the value to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in order to disable all description generation."),(0,l.kt)("h4",{id:"usage-examples-11"},"Usage Examples"),(0,l.kt)("h5",{id:"disable-description-generation"},"Disable description generation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   disableDescriptions: true\n")),(0,l.kt)("h3",{id:"useimplementingtypes"},(0,l.kt)("inlineCode",{parentName:"h3"},"useImplementingTypes")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"When a GraphQL interface is used for a field, this flag will use the implementing types, instead of the interface itself."),(0,l.kt)("h4",{id:"usage-examples-12"},"Usage Examples"),(0,l.kt)("h5",{id:"override-all-definition-types-1"},"Override all definition types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   useImplementingTypes: true\n")),(0,l.kt)("h3",{id:"wrapentirefielddefinitions"},(0,l.kt)("inlineCode",{parentName:"h3"},"wrapEntireFieldDefinitions")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("p",null,"Set the to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",(0,l.kt)("inlineCode",{parentName:"p"},"EntireFieldWrapper"),".\nThis is useful to allow return types such as Promises and functions for fields.\nDiffers from ",(0,l.kt)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," in that this wraps the entire field definition if ie. the field is an Array, while\n",(0,l.kt)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," will wrap every single value inside the array."),(0,l.kt)("h3",{id:"entirefieldwrappervalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"entireFieldWrapperValue")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h3",{id:"addunderscoretoargstype"},(0,l.kt)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Adds ",(0,l.kt)("inlineCode",{parentName:"p"},"_")," to generated ",(0,l.kt)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),(0,l.kt)("h4",{id:"usage-examples-13"},"Usage Examples"),(0,l.kt)("h5",{id:"with-custom-values"},"With Custom Values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    addUnderscoreToArgsType: true\n")),(0,l.kt)("h3",{id:"enumvalues"},(0,l.kt)("inlineCode",{parentName:"h3"},"enumValues")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"EnumValuesMap")),(0,l.kt)("p",null,"Overrides the default value of enum values declared in your GraphQL schema.\nYou can also map the entire enum to an external type by providing a string that of ",(0,l.kt)("inlineCode",{parentName:"p"},"module#type"),"."),(0,l.kt)("h3",{id:"declarationkind"},(0,l.kt)("inlineCode",{parentName:"h3"},"declarationKind")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"DeclarationKindConfig | string (values: abstract class, class, interface, type)")),(0,l.kt)("p",null,"Overrides the default output for various GraphQL elements."),(0,l.kt)("h4",{id:"usage-examples-14"},"Usage Examples"),(0,l.kt)("h5",{id:"override-all-declarations"},"Override all declarations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    declarationKind: 'interface'\n")),(0,l.kt)("h5",{id:"override-only-specific-declarations"},"Override only specific declarations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),(0,l.kt)("h3",{id:"enumprefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"enumPrefix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("p",null,"Allow you to disable prefixing for generated enums, works in combination with ",(0,l.kt)("inlineCode",{parentName:"p"},"typesPrefix"),"."),(0,l.kt)("h4",{id:"usage-examples-15"},"Usage Examples"),(0,l.kt)("h5",{id:"disable-enum-prefixes"},"Disable enum prefixes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),(0,l.kt)("h3",{id:"fieldwrappervalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"fieldWrapperValue")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"T")),(0,l.kt)("p",null,"Allow you to add wrapper for field type, use T as the generic value. Make sure to set ",(0,l.kt)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in order to make this flag work."),(0,l.kt)("h4",{id:"usage-examples-16"},"Usage Examples"),(0,l.kt)("h5",{id:"allow-promise"},"Allow Promise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n   fieldWrapperValue: T | Promise<T>\n")),(0,l.kt)("h3",{id:"wrapfielddefinitions"},(0,l.kt)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Set the to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",(0,l.kt)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions."),(0,l.kt)("h4",{id:"usage-examples-17"},"Usage Examples"),(0,l.kt)("h5",{id:"enable-wrapping-fields"},"Enable wrapping fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n")),(0,l.kt)("h3",{id:"ignoreenumvaluesfromschema"},(0,l.kt)("inlineCode",{parentName:"h3"},"ignoreEnumValuesFromSchema")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"This will cause the generator to ignore enum values defined in GraphQLSchema"),(0,l.kt)("h4",{id:"usage-examples-18"},"Usage Examples"),(0,l.kt)("h5",{id:"ignore-enum-values-from-schema"},"Ignore enum values from schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   ignoreEnumValuesFromSchema: true\n")),(0,l.kt)("h3",{id:"strictscalars"},(0,l.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Makes scalars strict."),(0,l.kt)("p",null,"If scalars are found in the schema that are not defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,l.kt)("h4",{id:"usage-examples-19"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,l.kt)("h3",{id:"defaultscalartype"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("p",null,"Allows you to override the type that unknown scalars will have."),(0,l.kt)("h4",{id:"usage-examples-20"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,l.kt)("h3",{id:"scalars"},(0,l.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,l.kt)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,l.kt)("h3",{id:"namingconvention"},(0,l.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,l.kt)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,l.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,l.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,l.kt)("p",null,"Available case functions in ",(0,l.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,l.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,l.kt)("h3",{id:"typesprefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Prefixes all the generated types."),(0,l.kt)("h4",{id:"usage-examples-21"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,l.kt)("h3",{id:"typessuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Suffixes all the generated types."),(0,l.kt)("h4",{id:"usage-examples-22"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,l.kt)("h3",{id:"skiptypename"},(0,l.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,l.kt)("h4",{id:"usage-examples-23"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,l.kt)("h3",{id:"nonoptionaltypename"},(0,l.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Automatically adds ",(0,l.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,l.kt)("h4",{id:"usage-examples-24"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,l.kt)("h3",{id:"usetypeimports"},(0,l.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Will use ",(0,l.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,l.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}u.isMDXComponent=!0}}]);