This is a reduction of a type inconsistency in `flow` where, declaring two
equally typed values in React props, it will not detect when two differing
types are provided.

```bash
npm install
npm run flow
```

It is expected that there be at least one error identifying the type
inconsistency on line 7 of `Main.jsx` at either of the differently
typed props.
