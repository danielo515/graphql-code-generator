(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[6001],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4638:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(29603),i=n(50120),r=(n(27378),n(35318)),o=["components"],l={},p={unversionedId:"generated-config/typescript-react-query",id:"generated-config/typescript-react-query",isDocsHomePage:!1,title:"typescript-react-query",description:"This plugin generates React-Query Hooks with TypeScript typings.",source:"@site/docs/generated-config/typescript-react-query.md",sourceDirName:"generated-config",slug:"/generated-config/typescript-react-query",permalink:"/docs/generated-config/typescript-react-query",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-react-query.md",version:"current",frontMatter:{}},d=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>fetcher</code>",id:"fetcher",children:[]},{value:"<code>exposeDocument</code>",id:"exposedocument",children:[]},{value:"<code>exposeQueryKeys</code>",id:"exposequerykeys",children:[]},{value:"<code>errorType</code>",id:"errortype",children:[]},{value:"<code>dedupeOperationSuffix</code>",id:"dedupeoperationsuffix",children:[]},{value:"<code>omitOperationSuffix</code>",id:"omitoperationsuffix",children:[]},{value:"<code>operationResultSuffix</code>",id:"operationresultsuffix",children:[]},{value:"<code>documentVariablePrefix</code>",id:"documentvariableprefix",children:[]},{value:"<code>documentVariableSuffix</code>",id:"documentvariablesuffix",children:[]},{value:"<code>fragmentVariablePrefix</code>",id:"fragmentvariableprefix",children:[]},{value:"<code>fragmentVariableSuffix</code>",id:"fragmentvariablesuffix",children:[]},{value:"<code>optimizeDocumentNode</code>",id:"optimizedocumentnode",children:[]},{value:"<code>pureMagicComment</code>",id:"puremagiccomment",children:[]},{value:"<code>experimentalFragmentVariables</code>",id:"experimentalfragmentvariables",children:[]},{value:"<code>strictScalars</code>",id:"strictscalars",children:[]},{value:"<code>defaultScalarType</code>",id:"defaultscalartype",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]}]}],s={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This plugin generates ",(0,r.kt)("inlineCode",{parentName:"p"},"React-Query")," Hooks with TypeScript typings."),(0,r.kt)("p",null,"It extends the basic TypeScript plugins: ",(0,r.kt)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript-operations")," - and thus shares a similar configuration."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("img",{alt:"typescript-react-query plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-react-query?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,r.kt)("div",{className:"admonition admonition-shell"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,r.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,r.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-react-query\n")))),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"fetcher"},(0,r.kt)("inlineCode",{parentName:"h3"},"fetcher")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"object | object | string")),(0,r.kt)("p",null,"Customize the fetcher you wish to use in the generated file. React-Query is agnostic to the data-fetcing layer, so you should provide it, or use a custom one."),(0,r.kt)("p",null,"The following options are available to use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'fetch' - requires you to specify endpoint and headers on each call, and uses ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," to do the actual http call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{ endpoint: string, fetchParams: RequestInit }"),": hardcode your endpoint and fetch options into the generated output, using the environment ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," method. You can also use ",(0,r.kt)("inlineCode",{parentName:"li"},"process.env.MY_VAR")," as endpoint or header value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file#identifier")," - You can use custom fetcher method that should implement the exported ",(0,r.kt)("inlineCode",{parentName:"li"},"ReactQueryFetcher")," interface. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"./my-fetcher#myCustomFetcher"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"graphql-request"),": Will generate each hook with ",(0,r.kt)("inlineCode",{parentName:"li"},"client")," argument, where you should pass your own ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQLClient")," (created from ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql-request"),").")),(0,r.kt)("h3",{id:"exposedocument"},(0,r.kt)("inlineCode",{parentName:"h3"},"exposeDocument")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"For each generate query hook adds ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," field with a\ncorrespoding GraphQL query. Useful for ",(0,r.kt)("inlineCode",{parentName:"p"},"queryClient.fetchQuery"),". Example:\nqueryClient.fetchQuery(\nuseUserDetailsQuery.getKey(variables),\n() => gqlRequest(useUserDetailsQuery.document, variables),\n)"),(0,r.kt)("h3",{id:"exposequerykeys"},(0,r.kt)("inlineCode",{parentName:"h3"},"exposeQueryKeys")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"For each generate query hook adds getKey(variables: QueryVariables) function. Useful for cache updates. Example:\nconst query = useUserDetailsQuery(...);\nconst key = useUserDetailsQuery.getKey({id: theUsersId});\n// use key in a cache update after a mutation"),(0,r.kt)("h3",{id:"errortype"},(0,r.kt)("inlineCode",{parentName:"h3"},"errorType")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown")),(0,r.kt)("p",null,'Changes the default "TError" generic type.'),(0,r.kt)("h3",{id:"dedupeoperationsuffix"},(0,r.kt)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"Set this configuration to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),(0,r.kt)("h3",{id:"omitoperationsuffix"},(0,r.kt)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"Set this configuration to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",(0,r.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mutation"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Fragment"),"."),(0,r.kt)("h3",{id:"operationresultsuffix"},(0,r.kt)("inlineCode",{parentName:"h3"},"operationResultSuffix")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",null,"Adds a suffix to generated operation result type names"),(0,r.kt)("h3",{id:"documentvariableprefix"},(0,r.kt)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",null,"Changes the GraphQL operations variables prefix."),(0,r.kt)("h3",{id:"documentvariablesuffix"},(0,r.kt)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"Document")),(0,r.kt)("p",null,"Changes the GraphQL operations variables suffix."),(0,r.kt)("h3",{id:"fragmentvariableprefix"},(0,r.kt)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",null,"Changes the GraphQL fragments variables prefix."),(0,r.kt)("h3",{id:"fragmentvariablesuffix"},(0,r.kt)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentDoc")),(0,r.kt)("p",null,"Changes the GraphQL fragments variables suffix."),(0,r.kt)("h3",{id:"optimizedocumentnode"},(0,r.kt)("inlineCode",{parentName:"h3"},"optimizeDocumentNode")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"documentNode: documentMode | documentNodeImportFragments"),", you can set this to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),' to apply document optimizations for your GraphQL document.\nThis will remove all "loc" and "description" fields from the compiled document, and will remove all empty arrays (such as ',(0,r.kt)("inlineCode",{parentName:"p"},"directives"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"arguments")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"variableDefinitions"),")."),(0,r.kt)("h3",{id:"puremagiccomment"},(0,r.kt)("inlineCode",{parentName:"h3"},"pureMagicComment")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"This config adds PURE magic comment to the static variables to enforce treeshaking for your bundler."),(0,r.kt)("h3",{id:"experimentalfragmentvariables"},(0,r.kt)("inlineCode",{parentName:"h3"},"experimentalFragmentVariables")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"If set to true, it will enable support for parsing variables on fragments."),(0,r.kt)("h3",{id:"strictscalars"},(0,r.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"Makes scalars strict."),(0,r.kt)("p",null,"If scalars are found in the schema that are not defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,r.kt)("h4",{id:"usage-examples"},"Usage Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,r.kt)("h3",{id:"defaultscalartype"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",null,"Allows you to override the type that unknown scalars will have."),(0,r.kt)("h4",{id:"usage-examples-1"},"Usage Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,r.kt)("h3",{id:"scalars"},(0,r.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,r.kt)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,r.kt)("h3",{id:"namingconvention"},(0,r.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,r.kt)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,r.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,r.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,r.kt)("p",null,"Available case functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,r.kt)("h3",{id:"typesprefix"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",null,"Prefixes all the generated types."),(0,r.kt)("h4",{id:"usage-examples-2"},"Usage Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,r.kt)("h3",{id:"typessuffix"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",null,"Suffixes all the generated types."),(0,r.kt)("h4",{id:"usage-examples-3"},"Usage Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,r.kt)("h3",{id:"skiptypename"},(0,r.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,r.kt)("h4",{id:"usage-examples-4"},"Usage Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,r.kt)("h3",{id:"nonoptionaltypename"},(0,r.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"Automatically adds ",(0,r.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,r.kt)("h4",{id:"usage-examples-5"},"Usage Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")))}u.isMDXComponent=!0}}]);