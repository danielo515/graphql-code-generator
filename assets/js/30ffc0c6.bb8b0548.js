(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[6701],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84423:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(29603),r=n(50120),i=(n(27378),n(35318)),o=["components"],l={id:"typescript-oclif",title:"TypeScript oclif"},p={unversionedId:"plugins/typescript-oclif",id:"plugins/typescript-oclif",isDocsHomePage:!1,title:"TypeScript oclif",description:"This plugin generates oclif CLI commands.",source:"@site/docs/plugins/typescript-oclif.md",sourceDirName:"plugins",slug:"/plugins/typescript-oclif",permalink:"/docs/plugins/typescript-oclif",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-oclif.md",version:"current",frontMatter:{id:"typescript-oclif",title:"TypeScript oclif"},sidebar:"sidebar",previous:{title:"TypeScript Urql",permalink:"/docs/plugins/typescript-urql"},next:{title:"Named Operations Object",permalink:"/docs/plugins/named-operations-object"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Step 1: Generate the CLI scaffold",id:"step-1-generate-the-cli-scaffold",children:[]},{value:"Step 2: Add GraphQL Documents",id:"step-2-add-graphql-documents",children:[]},{value:"Step 3: Add &amp; Export a GraphQL Query Handler",id:"step-3-add--export-a-graphql-query-handler",children:[]},{value:"Step 4: Add &amp; Configure GraphQL Codegen",id:"step-4-add--configure-graphql-codegen",children:[]}]},{value:"Advanced Features",id:"advanced-features",children:[{value:"Descriptions &amp; Examples",id:"descriptions--examples",children:[]},{value:"Custom/Manually-maintained Commands",id:"custommanually-maintained-commands",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This plugin generates ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/oclif"},(0,i.kt)("inlineCode",{parentName:"a"},"oclif"))," CLI commands."),(0,i.kt)("p",null,(0,i.kt)("div",{parentName:"p",className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Usage Requirements")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In order to use this GraphQL Codegen plugin, please make sure that you have GraphQL operations (",(0,i.kt)("inlineCode",{parentName:"p"},"query")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"mutation")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"subscription")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fragment"),") set as ",(0,i.kt)("inlineCode",{parentName:"p"},"documents: ...")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"codegen.yml"),"."),(0,i.kt)("p",{parentName:"div"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/kalzoo/graphql-codegen-oclif-example/"},"You can find a working example of this plugin here")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add @graphql-codegen/typescript @graphql-codegen/typescript-oclif\n")),(0,i.kt)("p",null,"The, make sure you have ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript")," plugin as well in your configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"schema: http://localhost:4000\ndocuments: 'src/commands/**/*.graphql'\ngenerates:\n  src/types.ts:\n    - typescript\n  src/commands/:\n    preset: near-operation-file\n    presetConfig:\n      extension: .ts\n      baseTypesPath: ../types.ts\n    plugins:\n      - typescript-oclif:\n          handlerPath: ../../handler\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"With GraphQL Codegen, building a CLI tool for your GraphQL API couldn't be easier. In four steps,\nyou can have a user-friendly command-line interface:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generate a boilerplate CLI using ",(0,i.kt)("inlineCode",{parentName:"li"},"oclif")),(0,i.kt)("li",{parentName:"ol"},"Add GraphQL Documents (Queries & Mutations)"),(0,i.kt)("li",{parentName:"ol"},"Add and export a graphql client of your choice (",(0,i.kt)("inlineCode",{parentName:"li"},"graphql-request"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"apollo-client"),", etc)"),(0,i.kt)("li",{parentName:"ol"},"Add, configure, and run the code generator")),(0,i.kt)("h3",{id:"step-1-generate-the-cli-scaffold"},"Step 1: Generate the CLI scaffold"),(0,i.kt)("p",null,"You'll be starting from your projects directory. From there, generate the CLI skeleton using ",(0,i.kt)("inlineCode",{parentName:"p"},"oclif"),"\nby following the steps in their ",(0,i.kt)("a",{parentName:"p",href:"https://oclif.io/docs/introduction"},"guide"),". You can choose either\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"single")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"multi")," type, and can switch later if you change your mind."),(0,i.kt)("h3",{id:"step-2-add-graphql-documents"},"Step 2: Add GraphQL Documents"),(0,i.kt)("p",null,"These documents are how ",(0,i.kt)("inlineCode",{parentName:"p"},"oclif")," will interact with your API. For each document, there will be\nexactly one command."),(0,i.kt)("p",null,"Within the directory created by the ",(0,i.kt)("inlineCode",{parentName:"p"},"oclif")," tool, you'll have a subdirectory ",(0,i.kt)("inlineCode",{parentName:"p"},"src/commands"),". That's\nwhere you'll put your GraphQL documents. Ie, to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"<cli-name> hello")," command, you'd write a\n",(0,i.kt)("inlineCode",{parentName:"p"},"src/commands/hello.graphql")," document, which will be used to generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/commands/hello.ts"),"\nfile. ",(0,i.kt)("strong",{parentName:"p"},"Important"),": each document should have exactly one GraphQL operation."),(0,i.kt)("h3",{id:"step-3-add--export-a-graphql-query-handler"},"Step 3: Add & Export a GraphQL Query Handler"),(0,i.kt)("p",null,"Which client you use, and how you configure it, is entirely up to you! It just has to conform to\nthis ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryHandler")," signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Command } from '@oclif/command';\n\ninterface QueryHandlerProps {\n  command: Command;\n  query: string;\n  variables?: Record<string, any>;\n}\n\ntype QueryHandler = (props: QueryHandlerProps) => any;\n")),(0,i.kt)("p",null,"This allows you to pre-process, send, and post-process requests however you'd like, as well as format\nthe results returned. The arguments are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command"),": the command object being executed, described ",(0,i.kt)("a",{parentName:"li",href:"https://oclif.io/docs/commands"},"here"),"\nin the ",(0,i.kt)("inlineCode",{parentName:"li"},"oclif")," documentation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": the string version of the GraphQL query being executed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variables"),": the variables as configured in your GraphQL operation and parsed by ",(0,i.kt)("inlineCode",{parentName:"li"},"oclif"),".")),(0,i.kt)("p",null,"You can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/handler.ts")," (or any other path), configure your handler function there, and then\nexport your handler as the ",(0,i.kt)("strong",{parentName:"p"},"default export"),". It's in this module that you can handle auth logic,\nread config files, etc., and that will apply to all CLI operations. This file will not be modified\nby the codegen."),(0,i.kt)("p",null,"To get started quickly and easily, consider using the simple ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-request")," as your handler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// handler.ts\n\nimport { GraphQLClient } from 'graphql-request';\nimport { Command } from '@oclif/command';\n\ninterface QueryHandlerProps {\n  command: Command;\n  query: string;\n  variables?: Record<string, any>;\n}\n\n// Change the URL to the endpoint your CLI will use\nconst client = new GraphQLClient('http://localhost:4000');\n\nconst handler = ({ command, query, variables }: QueryHandlerProps) => {\n  return client\n    .request(query, variables)\n    .then(command.log)\n    .catch(command.error);\n};\n\nexport default handler;\n")),(0,i.kt)("h3",{id:"step-4-add--configure-graphql-codegen"},"Step 4: Add & Configure GraphQL Codegen"),(0,i.kt)("p",null,"First, follow the GraphQL-Code-Generator guide to install it, and make sure to also install\n",(0,i.kt)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript-oclif"),". Then, change your ",(0,i.kt)("inlineCode",{parentName:"p"},"codegen.yml")," file to look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'schema: <path-to-your-schema>\ndocuments: "src/commands/**/*.graphql"\ngenerates:\n  src/types.ts:\n    - typescript\n  src/commands/:\n    preset: near-operation-file\n    presetConfig:\n      extension: .ts\n      baseTypesPath: ../types.ts\n    plugins:\n      - typescript-oclif:\n          client: ../../client\n')),(0,i.kt)("p",null,"Breaking that down:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reading your schema allows the codegen tool to understand what types it's working with"),(0,i.kt)("li",{parentName:"ul"},"The 'documents' section will collect all of your ",(0,i.kt)("inlineCode",{parentName:"li"},"*.graphql")," files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/types.ts")," creates the typescript types that the rest of the tool can reference"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"near-operation-file")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql-codegen")," preset which allows one output file per input file\n(ie, one ",(0,i.kt)("inlineCode",{parentName:"li"},".ts")," module per ",(0,i.kt)("inlineCode",{parentName:"li"},".graphql")," document) rather than one output file for the whole package.\nThis is ",(0,i.kt)("em",{parentName:"li"},"required")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"oclif")," to work, since it uses the file structure to generate the command structure."),(0,i.kt)("li",{parentName:"ul"},"Note: ",(0,i.kt)("inlineCode",{parentName:"li"},"typescript-operations")," plugin isn't required, since this library isn't meant to be consumed\nprogrammatically (and so nothing reads the types that ",(0,i.kt)("inlineCode",{parentName:"li"},"typescript-operations")," would produce)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"client")," path is to the file which has a default export of your ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql-request")," client,\nrelative to the generated files (ie here, ",(0,i.kt)("inlineCode",{parentName:"li"},"src/commands/something/file.graphql"),").\nNote that it has no extension.")),(0,i.kt)("p",null,"With that configured, just run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn graphql-codegen")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npx graphql-codegen")," to generate all the\nnecessary ",(0,i.kt)("inlineCode",{parentName:"p"},"oclif")," command files. With that complete, follow the directions in the\n",(0,i.kt)("a",{parentName:"p",href:"https://oclif.io/docs/introduction"},"oclif guide")," to run your new CLI tool."),(0,i.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,i.kt)("h3",{id:"descriptions--examples"},"Descriptions & Examples"),(0,i.kt)("p",null,"You can add descriptions and examples for your commands via ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript-oclif")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@oclif"),"\nclient-side directive, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mutation CreateAuthor($name: String!)\n  @oclif(description: "Create a new author", example: "cli author:create --name Alice", example: "cli author:create --name Bob") {\n  createAuthor(input: { name: $name }) {\n    name\n  }\n}\n')),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"@oclif")," directive will not be sent to the server. Note that, for multiple examples, you must\nuse multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"example")," keys rather than an ",(0,i.kt)("inlineCode",{parentName:"p"},"examples")," array. This is a ",(0,i.kt)("del",{parentName:"p"},"quirk")," feature of\n",(0,i.kt)("inlineCode",{parentName:"p"},"graphql"),"."),(0,i.kt)("h3",{id:"custommanually-maintained-commands"},"Custom/Manually-maintained Commands"),(0,i.kt)("p",null,"If you want a command that doesn't just execute a GraphQL Query or Mutation, then you can still\ncreate one manually in the same way as any other ",(0,i.kt)("inlineCode",{parentName:"p"},"oclif")," application. If you wanted to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"fix"),"\ncommand, for example, you can just create a file at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/commands/fix.ts"),", follow the ",(0,i.kt)("inlineCode",{parentName:"p"},"oclif")," API\n(ie, export a class with a ",(0,i.kt)("inlineCode",{parentName:"p"},"run()")," method), and ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-codegen")," won't disturb that file - so long\nas you ",(0,i.kt)("strong",{parentName:"p"},"don't")," ",(0,i.kt)("em",{parentName:"p"},"also")," create a ",(0,i.kt)("inlineCode",{parentName:"p"},"fix.graphql")," file next to it (in which case, it ",(0,i.kt)("em",{parentName:"p"},"would")," overrride\n",(0,i.kt)("inlineCode",{parentName:"p"},"fix.ts")," on the next run of ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-codegen"),")."))}d.isMDXComponent=!0}}]);