"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[5611],{5823:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(4848),i=s(8453);const r={},a="Writing Good Tests",o={id:"developer/typescript/mastery/testing/testDrivenDevelopment",title:"Writing Good Tests",description:"Now that our code has been thoughtfully organized into stateless functions we can easily put them to the test with three simple steps:",source:"@site/docs/developer/typescript/60_mastery/60_testing/02_testDrivenDevelopment.md",sourceDirName:"developer/typescript/60_mastery/60_testing",slug:"/developer/typescript/mastery/testing/testDrivenDevelopment",permalink:"/etherealengine-docs/developer/typescript/mastery/testing/testDrivenDevelopment",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/developer/typescript/60_mastery/60_testing/02_testDrivenDevelopment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"typescript",previous:{title:"Writing Reasonable & Testable Code",permalink:"/etherealengine-docs/developer/typescript/mastery/testing/reasonableCode"},next:{title:"Get Involved",permalink:"/etherealengine-docs/developer/typescript/contributing/"}},l={},c=[{value:"Test-Driven Development (source)",id:"test-driven-development-source",level:2},{value:"Antipatterns",id:"antipatterns",level:2}];function d(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"writing-good-tests",children:"Writing Good Tests"}),"\n",(0,n.jsx)(t.p,{children:"Now that our code has been thoughtfully organized into stateless functions we can easily put them to the test with three simple steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Mock"}),"\n",(0,n.jsx)(t.li,{children:"Run"}),"\n",(0,n.jsx)(t.li,{children:"Assert"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["First, mock up data for the input parameters.",(0,n.jsx)(t.br,{}),"\n","Then, run the function with the input data to produce an output.",(0,n.jsx)(t.br,{}),"\n","Finally, assert that the output is correct."]}),"\n",(0,n.jsxs)(t.h2,{id:"test-driven-development-source",children:["Test-Driven Development (",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Test-driven_development",children:"source"}),")"]}),"\n",(0,n.jsx)(t.p,{children:"Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later."}),"\n",(0,n.jsxs)(t.p,{children:["This methodology is extremely useful and productive, because it means that your code will ",(0,n.jsx)(t.em,{children:"always"})," have test coverage. Not only that, but you can save time by ensuring that the feature is working simply by virtue of the tests passing, instead of having to run the entire software to see whether or not the feature or module in question is functioning correctly."]}),"\n",(0,n.jsxs)(t.p,{children:["The following sequence is based on the book ",(0,n.jsx)(t.em,{children:"Test-Driven Development by Example"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add a test",(0,n.jsx)(t.br,{}),"\n","The adding of a new feature begins by writing a test that passes if and ",(0,n.jsx)(t.em,{children:"only"})," if the feature's specifications are met. The developer can discover these specifications by asking about use cases and user stories. A key benefit of test-driven development is that it makes the developer focus on requirements before writing code. This is in contrast with the usual practice, where unit tests are only written after code."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Run all tests. The new test should fail for expected reasons",(0,n.jsx)(t.br,{}),"\n","This shows that new code is actually needed for the desired feature. It validates that the test harness is working correctly. It rules out the possibility that the new test is flawed and will always pass."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Write the simplest code that passes the new test",(0,n.jsx)(t.br,{}),"\n","Inelegant or hard code is acceptable, as long as it passes the test. The code will be honed anyway in Step 5. No code should be added beyond the tested functionality."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["All tests should now pass",(0,n.jsx)(t.br,{}),"\n","If any fail, the new code must be revised until they pass. This ensures the new code meets the test requirements and does not break existing features."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Refactor as needed, using tests after each refactor to ensure that functionality is preserved",(0,n.jsx)(t.br,{}),"\n","Code is refactored for readability and maintainability. In particular, hard-coded test data should be removed. Running the test suite after each refactor helps ensure that no existing functionality is broken."]}),"\n",(0,n.jsx)(t.p,{children:"Examples of refactoring:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"moving code to where it most logically belongs"}),"\n",(0,n.jsx)(t.li,{children:"removing duplicate code"}),"\n",(0,n.jsx)(t.li,{children:"making names self-documenting"}),"\n",(0,n.jsx)(t.li,{children:"splitting methods into smaller pieces"}),"\n",(0,n.jsx)(t.li,{children:"re-arranging inheritance hierarchies"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The cycle above is repeated for each new piece of functionality.",(0,n.jsx)(t.br,{}),"\n","Tests should be small and incremental, and commits made often. That way, if new code fails some tests, the programmer can simply undo or revert rather than debug excessively. When using external libraries, it is important not to write tests that are so small as to effectively test merely the library itself, unless there is some reason to believe that the library is buggy or not feature-rich enough to serve all the needs of the software under development."]}),"\n",(0,n.jsx)(t.h2,{id:"antipatterns",children:"Antipatterns"}),"\n",(0,n.jsx)(t.p,{children:'Practices to avoid, or "anti-patterns"'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Having test cases depend on system state manipulated from previously executed test cases",(0,n.jsx)(t.br,{}),"\n","(i.e., you should always start a unit test from a known and pre-configured state)"]}),"\n",(0,n.jsxs)(t.li,{children:["Dependencies between test cases",(0,n.jsx)(t.br,{}),"\n","A test suite where test cases are dependent upon each other is brittle and complex. Execution order should not be presumed. Basic refactoring of the initial test cases or structure of the UUT causes a spiral of increasingly pervasive impacts in associated tests."]}),"\n",(0,n.jsxs)(t.li,{children:["Interdependent tests",(0,n.jsx)(t.br,{}),"\n","Interdependent tests can cause cascading false negatives. A failure in an early test case breaks a later test case even if no actual fault exists in the UUT, increasing defect analysis and debug efforts."]}),"\n",(0,n.jsx)(t.li,{children:"Testing precise execution behavior timing or performance."}),"\n",(0,n.jsxs)(t.li,{children:['Building "all-knowing oracles"',(0,n.jsx)(t.br,{}),"\n","An oracle that inspects more than necessary is more expensive and brittle over time. This very common error is dangerous because it causes a subtle but pervasive time sink across complex projects."]}),"\n",(0,n.jsx)(t.li,{children:"Testing implementation details."}),"\n",(0,n.jsx)(t.li,{children:"Slow running tests."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(6540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);