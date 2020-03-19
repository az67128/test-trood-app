LoadingIndicator base example:

```js
import LoadingIndicator  from '$trood/components/LoadingIndicator';

const isLoading = true;

<LoadingIndicator {...{
  animationStop: !isLoading,
  onClick: (...args) => console.log('onClick', ...args),
}} />
```
