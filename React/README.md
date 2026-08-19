# React Interview Question Collection

---

- React Collection--->>>>>>>>>>>>>>>>>>>>>
- What is React?
- JSX
- Virtual DOM
- Reconciliation
- React Fiber
- Components
- Props vs State
- State batching
- Controlled vs Uncontrolled Components
- useState
- useEffect
- useLayoutEffect
- useRef
- useMemo
- useCallback
- useReducer
- Context API
- Prop Drilling
- Custom Hooks
- Component Lifecycle
- Re-rendering
- Keys in React
- React.memo
- Lazy Loading
- Code Splitting
- Suspense
- Error Boundaries
- Forms
- Performance Optimization
- React Server Components
- Server vs Client Components
- React 19
- useTransition
- useDeferredValue
## React Internals ⭐⭐⭐

- React internally kaise work karta hai?
- What is Virtual DOM?
- Virtual DOM actually kya store karta hai?
- What is Reconciliation?
- React reconciliation algorithm kaise decide karta hai ki kya update karna hai?
- What is React Fiber?
- Fiber ki need kyun padi?
- Fiber architecture ne old React architecture ko kaise improve kiya?
- What is a Fiber Node?
- Fiber tree vs DOM tree?
- React ke Render Phase aur Commit Phase kya hain?
- Render phase mein kya hota hai?
- Commit phase mein kya hota hai?
- React DOM ko directly render phase mein update kyun nahi karta?
- What is Concurrent Rendering?
- Concurrent rendering ka matlab multiple renders simultaneously hona hai?
- React rendering ko interrupt kaise karta hai?
- What is Cooperative Scheduling?
## Rendering & Re-rendering ⭐⭐⭐

- React component kab re-render hota hai?
- Parent re-render hone par child automatically re-render kyun hota hai?
- State update hone par React exactly kya karta hai?
- Kya setState() immediately state change karta hai?
- React batching kya hai?
- React 18 automatic batching kya hai?
- Multiple setState() calls kaise process hote hain?
<pre><code>setCount(count + 1);</code></pre>
<pre><code>setCount(count + 1);</code></pre>
<pre><code>setCount(count + 1);</code></pre>
- Iska result kya hoga aur kyun?
<pre><code>setCount(c =&gt; c + 1);</code></pre>
<pre><code>setCount(c =&gt; c + 1);</code></pre>
<pre><code>setCount(c =&gt; c + 1);</code></pre>
- State updates queue mein kaise store hote hain?
- What is stale state?
- What is stale closure?
- React mein stale closure kaise solve karoge?
## 3. Reconciliation & Keys ⭐⭐⭐

- React ko kaise pata chalta hai ki element change hua?
- Same type vs different type element reconciliation?
- React mein key kyun important hai?
- Array index ko key ke roop mein use karna problematic kyun ho sakta hai?
- Explain:
<pre><code>{users.map((user, index) =&gt; (</code></pre>
-   <User key={index} user={user} />
- ))}
- Stable key kya hoti hai?
- Key change hone par component ke saath kya hota hai?
- Can changing a key force component remount?
- React component ko preserve vs reset kaise karta hai?
## Hooks — Advanced ⭐⭐⭐

- Hooks internally kaise work karte hain?
- Rules of Hooks kyun exist karte hain?
- React ko kaise pata chalta hai ki useState() kaun sa state hai?
- Hook order important kyun hai?
- Conditional hook call kyun allowed nahi hai?
<pre><code>if (isLoggedIn) {</code></pre>
-   useEffect(() => {});
<pre><code>}</code></pre>
- useState internally kaise work karta hai?
- useEffect internally kaise work karta hai?
- useEffect render phase mein execute hota hai ya commit phase mein?
- useEffect vs useLayoutEffect?
- useLayoutEffect kab use karna chahiye?
- useInsertionEffect kya hai?
- useRef re-render trigger kyun nahi karta?
- useRef vs useState?
- useMemo internally kya karta hai?
- useCallback internally kya karta hai?
- useMemo aur useCallback ko unnecessarily use karna bad practice kyun ho sakta hai?
- Custom Hook kya hota hai?
- Custom Hook vs utility function?
## useEffect Deep Dive ⭐⭐⭐

- useEffect ka actual purpose kya hai?
- Empty dependency array ka meaning?
- useEffect(() => {
<pre><code>  // ...</code></pre>
<pre><code>}, []);</code></pre>
- Dependency array React kaise compare karta hai?
- Dependencies compare karne ke liye === use hota hai?
- Objects/functions dependencies mein problem kyun create karte hain?
- Cleanup function kab execute hota hai?
- Component unmount hone par cleanup kab run hota hai?
- Next effect run hone se pehle cleanup kyun run hota hai?
- Infinite loop in useEffect kaise hota hai?
- Strict Mode mein effect twice kyun appear hota hai?
- Kya React production mein bhi effect exactly twice run karta hai?
- Data fetching ke liye useEffect always best solution hai?
## Context API ⭐⭐

- Context API internally kaise work karta hai?
- Context use karne se prop drilling kaise solve hoti hai?
- Context change hone par kaunse components re-render hote hain?
- Context performance issue kaise create kar sakta hai?
- Context vs Redux?
- Context ko state management library kyun nahi maana jaata?
- Context performance optimize kaise karoge?
- Multiple contexts kaise design karoge?
## React Performance ⭐⭐⭐

- React application slow kyun ho sakti hai?
- Unnecessary re-render kya hota hai?
- Unnecessary re-render identify kaise karoge?
- React.memo() kya karta hai?
- React.memo() internally kaise work karta hai?
- React.memo() kab useless hai?
- useMemo() kab use karna chahiye?
- useCallback() kab use karna chahiye?
- React.memo + useCallback combination kab useful hai?
- Large list ko optimize kaise karoge?
- What is List Virtualization?
- Lazy loading kya hai?
- Code splitting kya hai?
- Bundle size kaise reduce karoge?
- React Profiler kya hai?
- Production React app ko optimize karne ke steps kya hain?
## useTransition & Concurrent Features ⭐⭐⭐

- What is useTransition()?
- Urgent vs non-urgent updates kya hain?
- Explain:
<pre><code>const [isPending, startTransition] = useTransition();</code></pre>
<pre><code>startTransition() kab use karoge?</code></pre>
- Transition update ko React lower priority kyun deta hai?
- useDeferredValue() kya hai?
- useTransition vs useDeferredValue?
- Kya startTransition() API request ko faster bana deta hai?
- Concurrent rendering aur async JavaScript mein kya difference hai?
## Suspense & Lazy Loading ⭐⭐⭐

- React Suspense kya hai?
- Suspense internally kaise work karta hai?
- React.lazy() kya karta hai?
- Suspense + lazy loading kaise work karte hain?
<pre><code>&lt;Suspense fallback={&lt;Loading /&gt;}&gt;</code></pre>
-   <Profile />
<pre><code>&lt;/Suspense&gt;</code></pre>
- Suspense sirf code splitting ke liye hai?
- Suspense aur loading state mein difference?
- Nested Suspense boundaries kyun useful hain?
- Error Boundary vs Suspense?
## Server Components & Next.js ⭐⭐⭐

- What are React Server Components?
- Server Component vs Client Component?
- Server Component browser mein execute hota hai?
- Client Component kab use karna chahiye?
- "use client" kya karta hai?
- "use client" ka matlab component client par hi render hoga?
- Server Components mein state kyun nahi use kar sakte?
- Server Components mein event handlers kyun nahi use kar sakte?
- Server Component aur API route mein difference?
- React Server Components ka benefit kya hai?
- RSC bundle size kaise reduce karta hai?
- Server Components mein database query directly kyun possible hai?
- Next.js App Router React Server Components ka use kaise karta hai?
## React 19 ⭐⭐⭐

- React 19 mein major changes kya hain?
- What is use()?
- use() hook/function kaise work karta hai?
- use() vs useEffect()?
- What are Actions in React?
- What is useActionState()?
- What is useFormStatus()?
- What is useOptimistic()?
- Optimistic UI kya hoti hai?
- React 19 mein form handling kaise improve hui?
- React 19 mein refs mein kya change hua?
## Forms & State Management

- Controlled vs uncontrolled component?
- Large form ko efficiently kaise manage karoge?
- useReducer kab use karna chahiye?
- useState vs useReducer?
- Redux ki need kab padti hai?
- Local state vs global state?
- Server state vs client state?
- React Query/TanStack Query ka purpose kya hai?
- Server state ko Redux mein store karna problematic kyun ho sakta hai?
## Advanced Architecture ⭐⭐⭐

- Container vs Presentational Components?
- Compound Components pattern kya hai?
- Render Props pattern?
- Higher-Order Component kya hai?
- HOC vs Custom Hook?
- Composition vs Inheritance?
- React mein composition preferred kyun hai?
- Compound component pattern implement karo.
- Feature-based folder architecture kya hai?
- Large React application ko scalable kaise design karoge?
## React Security

- React mein XSS kaise prevent hota hai?
- dangerouslySetInnerHTML dangerous kyun hai?
- User-generated HTML safely render kaise karoge?
- JWT ko React application mein kaha store karna chahiye?
- CSRF vs XSS?
- React frontend mein sensitive API keys kyun nahi rakhni chahiye?
