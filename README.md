# five-five-tap
This is a basic 5x5 tap code. It encodes phrases/words into numerical codes and decyphers them as well. 

NOTE: This is a super simple code to break do not use for anything sensitive.

## Using
```bash
npm install --save ln-five-five-tap
```

```javascript
const five = require("ln-five-five-tap");

five.encode("Hello world, this message is super secret");
// 23153131345234423114442324433215434311221524434345351542431513421544

five.decrypt("442324432443442315434535154243151342154442154445423332154343112215");
// THISISTHESUPERSECRETRETURNMESSAGE
```

Note that the tap code does not recognize spaces and strips them.