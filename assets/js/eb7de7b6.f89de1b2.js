(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[9017],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,p(p({ref:t},d),{},{components:n})):a.createElement(k,p({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,p=new Array(l);p[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,p[1]=r;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96866:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var a=n(29603),i=n(50120),l=(n(27378),n(35318)),p=["components"],r={},o={unversionedId:"generated-config/typescript-resolvers",id:"generated-config/typescript-resolvers",isDocsHomePage:!1,title:"typescript-resolvers",description:"This plugin generates TypeScript signature for resolve functions of your GraphQL API.",source:"@site/docs/generated-config/typescript-resolvers.md",sourceDirName:"generated-config",slug:"/generated-config/typescript-resolvers",permalink:"/docs/generated-config/typescript-resolvers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-resolvers.md",version:"current",frontMatter:{}},s=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>useIndexSignature</code>",id:"useindexsignature",children:[]},{value:"<code>noSchemaStitching</code>",id:"noschemastitching",children:[]},{value:"<code>wrapFieldDefinitions</code>",id:"wrapfielddefinitions",children:[]},{value:"<code>customResolveInfo</code>",id:"customresolveinfo",children:[]},{value:"<code>customResolverFn</code>",id:"customresolverfn",children:[]},{value:"<code>allowParentTypeOverride</code>",id:"allowparenttypeoverride",children:[]},{value:"<code>optionalInfoArgument</code>",id:"optionalinfoargument",children:[]},{value:"<code>addUnderscoreToArgsType</code>",id:"addunderscoretoargstype",children:[]},{value:"<code>contextType</code>",id:"contexttype",children:[]},{value:"<code>fieldContextTypes</code>",id:"fieldcontexttypes",children:[]},{value:"<code>rootValueType</code>",id:"rootvaluetype",children:[]},{value:"<code>mapperTypeSuffix</code>",id:"mappertypesuffix",children:[]},{value:"<code>mappers</code>",id:"mappers",children:[]},{value:"<code>defaultMapper</code>",id:"defaultmapper",children:[]},{value:"<code>avoidOptionals</code>",id:"avoidoptionals",children:[]},{value:"<code>showUnusedMappers</code>",id:"showunusedmappers",children:[]},{value:"<code>enumValues</code>",id:"enumvalues",children:[]},{value:"<code>resolverTypeWrapperSignature</code>",id:"resolvertypewrappersignature",children:[]},{value:"<code>federation</code>",id:"federation",children:[]},{value:"<code>enumPrefix</code>",id:"enumprefix",children:[]},{value:"<code>optionalResolveType</code>",id:"optionalresolvetype",children:[]},{value:"<code>immutableTypes</code>",id:"immutabletypes",children:[]},{value:"<code>namespacedImportName</code>",id:"namespacedimportname",children:[]},{value:"<code>resolverTypeSuffix</code>",id:"resolvertypesuffix",children:[]},{value:"<code>allResolversTypeName</code>",id:"allresolverstypename",children:[]},{value:"<code>internalResolversPrefix</code>",id:"internalresolversprefix",children:[]},{value:"<code>onlyResolveTypeForInterfaces</code>",id:"onlyresolvetypeforinterfaces",children:[]},{value:"<code>strictScalars</code>",id:"strictscalars",children:[]},{value:"<code>defaultScalarType</code>",id:"defaultscalartype",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This plugin generates TypeScript signature for ",(0,l.kt)("inlineCode",{parentName:"p"},"resolve")," functions of your GraphQL API.\nYou can use this plugin a to generate simple resolvers signature based on your GraphQL types, or you can change it's behavior be providing custom model types (mappers)."),(0,l.kt)("p",null,"You can find a blog post explaining the usage of this plugin here: ",(0,l.kt)("a",{parentName:"p",href:"https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen"},"https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("img",{alt:"typescript-resolvers plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-resolvers?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,l.kt)("div",{className:"admonition admonition-shell"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,l.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,l.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-resolvers\n")))),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"useindexsignature"},(0,l.kt)("inlineCode",{parentName:"h3"},"useIndexSignature")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Adds an index signature to any generates resolver."),(0,l.kt)("h4",{id:"usage-examples"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   useIndexSignature: true\n")),(0,l.kt)("h3",{id:"noschemastitching"},(0,l.kt)("inlineCode",{parentName:"h3"},"noSchemaStitching")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Disables Schema Stitching support."),(0,l.kt)("p",null,"Note: The default behavior will be reversed in the next major release. Support for Schema Stitching will be disabled by default."),(0,l.kt)("h4",{id:"usage-examples-1"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   noSchemaStitching: true\n")),(0,l.kt)("h3",{id:"wrapfielddefinitions"},(0,l.kt)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("p",null,"Set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",(0,l.kt)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions. Needed for\ncompatibility with ",(0,l.kt)("inlineCode",{parentName:"p"},"federation: true")," when"),(0,l.kt)("h3",{id:"customresolveinfo"},(0,l.kt)("inlineCode",{parentName:"h3"},"customResolveInfo")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql#GraphQLResolveInfo")),(0,l.kt)("p",null,"You can provide your custom GraphQLResolveInfo instead of the default one from graphql-js"),(0,l.kt)("h4",{id:"usage-examples-2"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   customResolveInfo: ./my-types#MyResolveInfo\n")),(0,l.kt)("h3",{id:"customresolverfn"},(0,l.kt)("inlineCode",{parentName:"h3"},"customResolverFn")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"(parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult")),(0,l.kt)("p",null,"You can provide your custom ResolveFn instead the default. It has to be a type that uses the generics <TResult, TParent, TContext, TArgs>"),(0,l.kt)("h4",{id:"usage-examples-3"},"Usage Examples"),(0,l.kt)("h5",{id:"custom-signature"},"Custom Signature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   customResolverFn: ./my-types#MyResolveFn\n")),(0,l.kt)("h5",{id:"with-graphile"},"With Graphile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - add:\n       content: \"import { GraphileHelpers } from 'graphile-utils/node8plus/fieldHelpers';\"\n   - typescript\n   - typescript-resolvers\n config:\n   customResolverFn: |\n     (\n       parent: TParent,\n       args: TArgs,\n       context: TContext,\n       info: GraphQLResolveInfo & { graphile: GraphileHelpers<TParent> }\n     ) => Promise<TResult> | TResult;\n")),(0,l.kt)("h3",{id:"allowparenttypeoverride"},(0,l.kt)("inlineCode",{parentName:"h3"},"allowParentTypeOverride")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Allow you to override the ",(0,l.kt)("inlineCode",{parentName:"p"},"ParentType")," generic in each resolver, by avoid enforcing the base type of the generated generic type."),(0,l.kt)("p",null,"This will generate ",(0,l.kt)("inlineCode",{parentName:"p"},"ParentType = Type")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"ParentType extends Type = Type")," in each resolver."),(0,l.kt)("h4",{id:"usage-examples-4"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    allowParentTypeOverride: true\n")),(0,l.kt)("h3",{id:"optionalinfoargument"},(0,l.kt)("inlineCode",{parentName:"h3"},"optionalInfoArgument")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Sets ",(0,l.kt)("inlineCode",{parentName:"p"},"info")," argument of resolver function to be optional field. Useful for testing."),(0,l.kt)("h4",{id:"usage-examples-5"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    optionalInfoArgument: true\n")),(0,l.kt)("h3",{id:"addunderscoretoargstype"},(0,l.kt)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Adds ",(0,l.kt)("inlineCode",{parentName:"p"},"_")," to generated ",(0,l.kt)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),(0,l.kt)("h4",{id:"usage-examples-6"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    addUnderscoreToArgsType: true\n")),(0,l.kt)("h3",{id:"contexttype"},(0,l.kt)("inlineCode",{parentName:"h3"},"contextType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Use this configuration to set a custom type for your ",(0,l.kt)("inlineCode",{parentName:"p"},"context"),", and it will\neffect all the resolvers, without the need to override it using generics each time.\nIf you wish to use an external type and import it from another file, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"add")," plugin\nand add the required ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," statement, or you can use a ",(0,l.kt)("inlineCode",{parentName:"p"},"module#type")," syntax."),(0,l.kt)("h4",{id:"usage-examples-7"},"Usage Examples"),(0,l.kt)("h5",{id:"custom-context-type"},"Custom Context Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    contextType: MyContext\n")),(0,l.kt)("h5",{id:"custom-context-type-1"},"Custom Context Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    contextType: ./my-types#MyContext\n")),(0,l.kt)("h3",{id:"fieldcontexttypes"},(0,l.kt)("inlineCode",{parentName:"h3"},"fieldContextTypes")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Array_1")),(0,l.kt)("p",null,"Use this to set a custom type for a specific field ",(0,l.kt)("inlineCode",{parentName:"p"},"context"),".\nIt will only affect the targeted resolvers.\nYou can either use ",(0,l.kt)("inlineCode",{parentName:"p"},"Field.Path#ContextTypeName")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Field.Path#ExternalFileName#ContextTypeName")),(0,l.kt)("h4",{id:"usage-examples-8"},"Usage Examples"),(0,l.kt)("h5",{id:"custom-field-context-types"},"Custom Field Context Types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"plugins\n  config:\n    fieldContextTypes:\n      - MyType.foo#CustomContextType\n      - MyType.bar#./my-file#ContextTypeOne\n")),(0,l.kt)("h3",{id:"rootvaluetype"},(0,l.kt)("inlineCode",{parentName:"h3"},"rootValueType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Use this configuration to set a custom type for the ",(0,l.kt)("inlineCode",{parentName:"p"},"rootValue"),", and it will\neffect resolvers of all root types (Query, Mutation and Subscription), without the need to override it using generics each time.\nIf you wish to use an external type and import it from another file, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"add")," plugin\nand add the required ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," statement, or you can use both ",(0,l.kt)("inlineCode",{parentName:"p"},"module#type")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),(0,l.kt)("h4",{id:"usage-examples-9"},"Usage Examples"),(0,l.kt)("h5",{id:"custom-rootvalue-type"},"Custom RootValue Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    rootValueType: MyRootValue\n")),(0,l.kt)("h5",{id:"custom-rootvalue-type-1"},"Custom RootValue Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    rootValueType: ./my-types#MyRootValue\n")),(0,l.kt)("h3",{id:"mappertypesuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"mapperTypeSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Adds a suffix to the imported names to prevent name clashes."),(0,l.kt)("h4",{id:"usage-examples-10"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    mapperTypeSuffix: Model\n")),(0,l.kt)("h3",{id:"mappers"},(0,l.kt)("inlineCode",{parentName:"h3"},"mappers")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"object")),(0,l.kt)("p",null,"Replaces a GraphQL type usage with a custom type, allowing you to return custom object from\nyour resolvers.\nYou can use both ",(0,l.kt)("inlineCode",{parentName:"p"},"module#type")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),(0,l.kt)("h4",{id:"usage-examples-11"},"Usage Examples"),(0,l.kt)("h5",{id:"custom-context-type-2"},"Custom Context Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    mappers:\n      User: ./my-models#UserDbObject\n      Book: ./my-models#Collections#Book\n")),(0,l.kt)("h3",{id:"defaultmapper"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultMapper")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Allow you to set the default mapper when it's not being override by ",(0,l.kt)("inlineCode",{parentName:"p"},"mappers")," or generics.\nYou can specify a type name, or specify a string in ",(0,l.kt)("inlineCode",{parentName:"p"},"module#type")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"module#namespace#type")," format.\nThe default value of mappers it the TypeScript type generated by ",(0,l.kt)("inlineCode",{parentName:"p"},"typescript")," package."),(0,l.kt)("h4",{id:"usage-examples-12"},"Usage Examples"),(0,l.kt)("h5",{id:"replace-with-any"},"Replace with any"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    defaultMapper: any\n")),(0,l.kt)("h5",{id:"custom-base-object"},"Custom Base Object"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    defaultMapper: ./my-file#BaseObject\n")),(0,l.kt)("h5",{id:"wrap-default-types-with-partial"},"Wrap default types with Partial"),(0,l.kt)("p",null,'You can also specify a custom wrapper for the original type, without overriding the original generated types, use "{T}" to specify the identifier. (for flow, use ',(0,l.kt)("inlineCode",{parentName:"p"},"$Shape<{T}>"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    defaultMapper: Partial<{T}>\n")),(0,l.kt)("h5",{id:"allow-deep-partial-with-utility-types"},"Allow deep partial with ",(0,l.kt)("inlineCode",{parentName:"h5"},"utility-types")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'plugins\n plugins:\n   - "typescript"\n   - "typescript-resolvers"\n   - add:\n       content: "import { DeepPartial } from \'utility-types\';"\n config:\n   defaultMapper: DeepPartial<{T}>\n')),(0,l.kt)("h3",{id:"avoidoptionals"},(0,l.kt)("inlineCode",{parentName:"h3"},"avoidOptionals")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"AvoidOptionalsConfig | boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"This will cause the generator to avoid using optionals (",(0,l.kt)("inlineCode",{parentName:"p"},"?"),"),\nso all field resolvers must be implemented in order to avoid compilation errors."),(0,l.kt)("h4",{id:"usage-examples-13"},"Usage Examples"),(0,l.kt)("h5",{id:"override-all-definition-types"},"Override all definition types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   avoidOptionals: true\n")),(0,l.kt)("h5",{id:"override-only-specific-definition-types"},"Override only specific definition types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals:\n     field: true\n     inputValue: true\n     object: true\n     defaultValue: true\n")),(0,l.kt)("h3",{id:"showunusedmappers"},(0,l.kt)("inlineCode",{parentName:"h3"},"showUnusedMappers")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("p",null,"Warns about unused mappers."),(0,l.kt)("h4",{id:"usage-examples-14"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   showUnusedMappers: true\n")),(0,l.kt)("h3",{id:"enumvalues"},(0,l.kt)("inlineCode",{parentName:"h3"},"enumValues")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"EnumValuesMap")),(0,l.kt)("p",null,"Overrides the default value of enum values declared in your GraphQL schema, supported\nin this plugin because of the need for integration with ",(0,l.kt)("inlineCode",{parentName:"p"},"typescript")," package.\nSee documentation under ",(0,l.kt)("inlineCode",{parentName:"p"},"typescript")," plugin for more information and examples."),(0,l.kt)("h3",{id:"resolvertypewrappersignature"},(0,l.kt)("inlineCode",{parentName:"h3"},"resolverTypeWrapperSignature")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<T> | T")),(0,l.kt)("p",null,"Allow you to override ",(0,l.kt)("inlineCode",{parentName:"p"},"resolverTypeWrapper")," definition."),(0,l.kt)("h3",{id:"federation"},(0,l.kt)("inlineCode",{parentName:"h3"},"federation")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Supports Apollo Federation"),(0,l.kt)("h3",{id:"enumprefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"enumPrefix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("p",null,"Allow you to disable prefixing for generated enums, works in combination with ",(0,l.kt)("inlineCode",{parentName:"p"},"typesPrefix"),"."),(0,l.kt)("h4",{id:"usage-examples-15"},"Usage Examples"),(0,l.kt)("h5",{id:"disable-enum-prefixes"},"Disable enum prefixes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),(0,l.kt)("h3",{id:"optionalresolvetype"},(0,l.kt)("inlineCode",{parentName:"h3"},"optionalResolveType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Sets the ",(0,l.kt)("inlineCode",{parentName:"p"},"__resolveType")," field as optional field."),(0,l.kt)("h3",{id:"immutabletypes"},(0,l.kt)("inlineCode",{parentName:"h3"},"immutableTypes")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Generates immutable types by adding ",(0,l.kt)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",(0,l.kt)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),(0,l.kt)("h3",{id:"namespacedimportname"},(0,l.kt)("inlineCode",{parentName:"h3"},"namespacedImportName")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"''")),(0,l.kt)("p",null,"Prefixes all GraphQL related generated types with that value, as namespaces import.\nYou can use this featuere to allow seperation of plugins to different files."),(0,l.kt)("h3",{id:"resolvertypesuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"resolverTypeSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"Resolvers")),(0,l.kt)("p",null,"Suffix we add to each generated type resolver."),(0,l.kt)("h3",{id:"allresolverstypename"},(0,l.kt)("inlineCode",{parentName:"h3"},"allResolversTypeName")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"Resolvers")),(0,l.kt)("p",null,"The type name to use when exporting all resolvers signature as unified type."),(0,l.kt)("h3",{id:"internalresolversprefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"internalResolversPrefix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"'__'")),(0,l.kt)("p",null,"Defines the prefix value used for ",(0,l.kt)("inlineCode",{parentName:"p"},"__resolveType")," and and ",(0,l.kt)("inlineCode",{parentName:"p"},"__isTypeOf")," resolvers.\nIf you are using ",(0,l.kt)("inlineCode",{parentName:"p"},"mercurius-js"),", please set this field to empty string for better compatiblity."),(0,l.kt)("h3",{id:"onlyresolvetypeforinterfaces"},(0,l.kt)("inlineCode",{parentName:"h3"},"onlyResolveTypeForInterfaces")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Turning this flag to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," will generate resolver siganture that has only ",(0,l.kt)("inlineCode",{parentName:"p"},"resolveType")," for interfaces, forcing developers to write inherited type resolvers in the type itself."),(0,l.kt)("h3",{id:"strictscalars"},(0,l.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Makes scalars strict."),(0,l.kt)("p",null,"If scalars are found in the schema that are not defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,l.kt)("h4",{id:"usage-examples-16"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,l.kt)("h3",{id:"defaultscalartype"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("p",null,"Allows you to override the type that unknown scalars will have."),(0,l.kt)("h4",{id:"usage-examples-17"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,l.kt)("h3",{id:"scalars"},(0,l.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,l.kt)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,l.kt)("h3",{id:"namingconvention"},(0,l.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,l.kt)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,l.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,l.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,l.kt)("p",null,"Available case functions in ",(0,l.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,l.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,l.kt)("h3",{id:"typesprefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Prefixes all the generated types."),(0,l.kt)("h4",{id:"usage-examples-18"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,l.kt)("h3",{id:"typessuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Suffixes all the generated types."),(0,l.kt)("h4",{id:"usage-examples-19"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,l.kt)("h3",{id:"skiptypename"},(0,l.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,l.kt)("h4",{id:"usage-examples-20"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,l.kt)("h3",{id:"nonoptionaltypename"},(0,l.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Automatically adds ",(0,l.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,l.kt)("h4",{id:"usage-examples-21"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,l.kt)("h3",{id:"usetypeimports"},(0,l.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Will use ",(0,l.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,l.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}u.isMDXComponent=!0}}]);